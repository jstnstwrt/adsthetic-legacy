'use strict';

angular.module('adstheticCmsApp')
    .config(function($stateProvider){
        $stateProvider
            .state('listdetail', {
                url: '/listdetail/:listid',
                templateUrl: 'app/list_detail/list_detail.html',
                controller: 'listdetailcontroller',
                controlleras: 'listdetail'
            });
    });