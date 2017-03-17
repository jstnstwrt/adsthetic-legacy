'use strict';

angular.module('adstheticCmsApp.admin')
  .config(function($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin',
        authenticate: 'admin'
      });
  });
