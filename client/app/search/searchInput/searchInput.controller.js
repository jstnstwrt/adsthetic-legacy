'use strict';

(function() {

    class SearchInputController {

        constructor($http,$scope,$location,$state,$document){
            this.$http = $http;
            this.$scope = $scope;
            this.$location = $location;
            this.$state = $state;

            $scope.move = function(){
                console.log('inside move');
                var elem = angular.element(document).find("#myBar"); 
                var width = 1;
                var id = setInterval(frame, 40);
                function frame() {
                    if (width >= 100) {
                        clearInterval(id);
                    } else {
                        width++;
                        elem.css('width', width + '%');
                    }
                }
            };


            $scope.gotoConfirm = function(){
                console.log('inside confirm');
                $scope.move()
                var query_param = $scope.targetAccount
                setTimeout(function(){
                    console.log('inside timeout');
                    window.location.href = '/searchConfirm?targetAccount='+query_param;
                    // Waits 3 seconds to execute.
                }, 4*1000)
                
            };



        };


    }
    angular.module('adstheticCmsApp')
    .controller('SearchInputController', SearchInputController);

})();