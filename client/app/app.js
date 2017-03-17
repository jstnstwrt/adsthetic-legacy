'use strict';

angular.module('adstheticCmsApp', [
  'adstheticCmsApp.auth',
  'adstheticCmsApp.admin',
  'adstheticCmsApp.constants',
  'adstheticCmsApp.addInfluencer',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'validation.match',
  'oitozero.ngSweetAlert'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
