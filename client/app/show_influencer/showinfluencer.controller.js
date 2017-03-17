'use strict';

(function() {

	class showinfluencercontroller {

		constructor($http, $scope, $stateParams) {
			this.$http = $http;
			this.$scope = $scope;
			this.$stateParams = $stateParams;

			var influencerId = parseInt($stateParams.influencer);
			$scope.influencerId = [];
			$scope.influencerId.push(influencerId);

			$http.post('/api/adstheticserver/fetchinfluencerdetails', $scope.influencerId).then(response => {
				$scope.influencerDetails = JSON.parse(response.data);
			});
		}

	}
	angular.module('adstheticCmsApp')
	.controller('showinfluencercontroller', showinfluencercontroller);

})();
