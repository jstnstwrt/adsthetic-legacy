'use strict';

angular.module('adstheticCmsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('newlist', {
        url: '/newlist',
        templateUrl: 'app/newlist/newlist.html',
        controller: 'newlistcontroller',
        controllerAs: 'newlist'
      });
  });
