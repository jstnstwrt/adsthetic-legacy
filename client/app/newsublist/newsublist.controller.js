'use strict';

(function() {

	class newsublistcontroller {

		constructor($http, $scope, $location, $state, $stateParams) {
			this.$http = $http;
			this.$scope = $scope;
			this.$location = $location;
			this.$state = $state;
			this.$stateParams = $stateParams;

			$scope.listId = $stateParams.listid;

			$http.get('/api/lists/' + $scope.listId)
			.then(function(response){
				$scope.listName = response.data.name;
				$scope.listDescription = response.data.description;
			})
		}

		createsublist(){
			var _that = this;

			this.$http.get('/api/users/me').then(function(response){
				return response.data._id;
			}).then(function(response){
				var newsubList = {
					name: _that.$scope.newsublist.name,
					description: _that.$scope.newsublist.description,
					influencers: [],
					listId: _that.$scope.listId,
					userId: response
				};

				_that.$http.post('/api/sublists', newsubList).then(response => {
					if(response.statusText == 'Created'){
						_that.$location.path('/lists')
					};
				});
			})
		}
	}
	angular.module('adstheticCmsApp')
	.controller('newsublistcontroller', newsublistcontroller);

})();
