'use strict';

angular.module('adstheticCmsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('lists', {
        url: '/lists',
        templateUrl: 'app/lists/lists.html',
        controller: 'listscontroller',
        controllerAs: 'lists'
      });
  });
