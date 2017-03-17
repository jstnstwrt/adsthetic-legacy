'use strict';

angular.module('adstheticCmsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('newsublist', {
        url: '/newsublist/:listid',
        templateUrl: 'app/newsublist/newsublist.html',
        controller: 'newsublistcontroller',
        controllerAs: 'newsublist'
      });
  });
