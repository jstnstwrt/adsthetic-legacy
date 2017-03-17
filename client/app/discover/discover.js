'use strict';

angular.module('adstheticCmsApp')
    .config(function($stateProvider){
        $stateProvider
            .state('discover', {
                url: '/discover',
                templateUrl: 'app/discover/discover.html',
                controller: 'DiscoverController',
                controllerAs: 'discover'
            });
    });