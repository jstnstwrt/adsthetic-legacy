'use strict';

angular.module('adstheticCmsApp')
    .config(function($stateProvider){
        $stateProvider
            .state('searchInput', {
                url: '/searchInput',
                templateUrl: 'app/search/searchInput/searchInput.html',
                controller: 'SearchInputController',
                controlleras: 'searchInput'
            })
            .state('searchConfirm', {
                url: '/searchConfirm',
                templateUrl: 'app/search/searchConfirm/searchConfirm.html',
                controller: 'SearchConfirmController',
                controlleras: 'searchConfirm'
            })
            .state('searchResult', {
                url: '/searchResult',
                templateUrl: 'app/search/searchResult/searchResult.html',
                controller: 'SearchResultController',
                controlleras: 'searchResult'
            });
    });