'use strict';

(function(){
    
    class listdetailcontroller {
        
        constructor($http,$scope,$stateParams,$state,SweetAlert) {
            this.$http = $http;
            this.$scope = $scope;
            this.$state = $state;
            this.$stateParams = $stateParams;
            var listId = $stateParams.listid;

            $http.get('/api/lists/' + listId).then(function(response){
                var listData = response.data;
                $scope.list = listData;
                return response.data;
            }).then(function(response){
                return $http.post('/api/adstheticserver/fetchinstagramusers',response.influencers);
            }).then(response => {
                $scope.influencersData = JSON.parse(response.data);
            });

            $scope.showInfluencer = function (influencerId) {
                $state.go('showinfluencer', {influencer: influencerId});
            };

            $scope.deleteList = function(list){
                $http.delete('/api/lists/' + list._id);
                $state.go('lists');
            };

            $scope.sweetDelete = function(list){
                SweetAlert.swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this list!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: true}, 
                function(isConfirm){ 
                    if (isConfirm) {
                        $scope.deleteList(list)
                    };
                });
            };

            $scope.toDashboard = function(){
                $state.go('dashboard');
            };
        };

    };
        
    angular.module('adstheticCmsApp')
        .controller('listdetailcontroller',listdetailcontroller);

})();