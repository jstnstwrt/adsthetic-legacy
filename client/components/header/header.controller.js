'use strict';

class HeaderController {
  //start-non-standard
  menu = [
  {
    'title': 'Discover',
    'state': 'discover'
  },
  {
    'title': 'Dashboard',
    'state': 'dashboard'
  },
  {
    'title':'Lists',
    'state':'lists'
  },
  {
    'title':'Search',
    'state':'searchInput'
  }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('adstheticCmsApp')
  .controller('HeaderController', HeaderController);
