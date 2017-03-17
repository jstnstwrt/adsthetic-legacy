'use strict';

angular.module('adstheticCmsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('addinfluencers', {
        url: '/addinfluencers',
        templateUrl: 'app/add_influencers/addinfluencers.html',
        controller: 'addinfluencerscontroller',
        controllerAs: 'addinfluencers'
      });
  });
