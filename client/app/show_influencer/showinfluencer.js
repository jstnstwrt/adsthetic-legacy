'use strict';

angular.module('adstheticCmsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('showinfluencer', {
        url: '/showinfluencer/:influencer',
        templateUrl: 'app/show_influencer/showinfluencer.html',
        controller: 'showinfluencercontroller',
        controllerAs: 'showinfluencer'
      });
  });
