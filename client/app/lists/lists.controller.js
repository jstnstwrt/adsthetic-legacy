'use strict';

(function() {

	class listscontroller {

		constructor($http, $scope, $location, $state) {
			this.$http = $http;
			this.$scope = $scope;
			this.$location = $location;
			this.$state = $state;

			$http.get('/api/users/me').then(function(response){
				return response.data._id;
			}).then(function(response){
				return $http.get('/api/lists/user/' + response);
			}).then(function(response){
				$scope.allListsByUser = response.data;
				return response.data;
			}).then(function(response){
				return _.pluck(response, 'influencers');
			}).then(function(response){
				return _.flatten(response);
			}).then(function(response){
				var influencer_basics_ids = [];
				_.each(response, function(instagramId) {
					var temp = parseInt(instagramId);
					influencer_basics_ids.push(temp);
				});
				return influencer_basics_ids;
			}).then(function(response){
				$http.post('/api/adstheticserver/fetchinstagramusers', response).then(response => {
					var obj = JSON.parse(response.data);
					var influencers_data = obj;
					_.each($scope.allListsByUser, function(influencersInList) {
						influencersInList.influencersData = [];
						_.each(influencersInList.influencers, function(influencersIds) {
							_.each(influencers_data, function(influencers) {
								if(influencers.instagram_id == influencersIds){
									influencersInList.influencersData.push(influencers);
								};
							});
						});
					});
				});
			});

		};

		makeList(){
			this.$location.path('/newlist');
		};

		listDetail(listid){
			this.$state.go('listdetail',{listid: listid});
		};

	}
	angular.module('adstheticCmsApp')
	.controller('listscontroller', listscontroller);

})();
