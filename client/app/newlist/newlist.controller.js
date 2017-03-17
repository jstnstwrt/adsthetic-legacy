'use strict';

(function() {

	class newlistcontroller {

		constructor($http, $scope, $location) {
			this.$http = $http;
			this.$scope = $scope;
			this.$location = $location;
		}

		createlist(){
			var _that = this;

			this.$http.get('/api/users/me').then(function(response){
				return response.data._id;
			}).then(function(response){
				var newList = {
					name: _that.$scope.newlist.name,
					description: _that.$scope.newlist.description,
					influencers: [],
					userId: response
				};

				_that.$http.post('/api/lists', newList).then(response => {
					console.log(response.statusText);
					if(response.statusText == 'Created'){
						_that.$location.path('/lists')
					};
				});
			})
		}
	}
	angular.module('adstheticCmsApp')
	.controller('newlistcontroller', newlistcontroller);

})();
