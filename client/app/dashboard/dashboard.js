'use strict';

angular.module('adstheticCmsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      });
  });
