'use strict';

angular.module('adstheticCmsApp.auth', [
  'adstheticCmsApp.constants',
  'adstheticCmsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
