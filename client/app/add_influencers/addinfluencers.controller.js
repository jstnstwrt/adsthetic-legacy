'use strict';

(function() {

	class addinfluencerscontroller {

		constructor($http, $scope) {
			this.$http = $http;
			this.$scope = $scope;

			$scope.fileNameChanged = function (ele) {
				var files = ele.files;
				var reader = new FileReader();
				reader.onload = function () {
					$scope.$apply(function(){
						$scope.fileContent = reader.result;
					});
				};

				reader.readAsText(files[0]);

				setTimeout(function(){ 
					$scope.csvContents = reader.result;
					var uploadedInfluencerArray = $scope.csvContents.split("\n");

					$http.post('/api/adstheticserver/fetchinstagramids', uploadedInfluencerArray).then(response => {
						return JSON.parse(response.data);
					}).then(
					function(response){
						var retrivedInfluencersUsernames = _.pluck(response, 'instagram_username');
						$scope.missingInfluencers = _.difference(uploadedInfluencerArray, retrivedInfluencersUsernames);
						$http.get('/api/users/me').then(
							function(userIdResponse){
								var allInfluencersToBeInsertedCsv = [];
								_.each(response, function(retrivedInfluencer) {
									var addInfluencerObject = {
										name: retrivedInfluencer.instagram_username,
										instagramId: retrivedInfluencer.instagram_id,
										userId: userIdResponse.data._id
									}
									allInfluencersToBeInsertedCsv.push(addInfluencerObject);
								});
								_.each($scope.missingInfluencers, function(missingInfluencer) {

									var addInfluencerObject = {
										name: missingInfluencer,
										instagramId: null,
										userId: userIdResponse.data._id
									}

									allInfluencersToBeInsertedCsv.push(addInfluencerObject);
								});
								return allInfluencersToBeInsertedCsv;
							}).then(
							function(response){
								var n = 500;
								var response = _.chain(response).groupBy(function(element, index){
									return Math.floor(index/n);
								}).toArray()
								.value();

								_.each(response, function(responseArray) {
									$http.post('/api/influencers', responseArray).then(response => {
										if(response.statusText == "Created"){
											$scope.setcsvAlertSuccessTrue = true;

										} else {
											$scope.setcsvAlertFailureTrue = true;
										};
									});

								});
							})

						});

				}, 3000);

			}
		}

		insertinfluencer(influencer){

			influencer = influencer.replace(/\s/g, '');
			var originalInfluencers = influencer.split(',');
			this.$http.post('/api/adstheticserver/fetchinstagramids', originalInfluencers).then(response => {
				var obj = JSON.parse(response.data);
				var retrivedInfluencersUsernames = _.pluck(obj, 'instagram_username');
				var missingInfluencers = _.difference(originalInfluencers, retrivedInfluencersUsernames);
				var retrivedInfluencers = obj;
				var allInfluencersToBeInserted = [];
				var _that = this;

				this.$http.get('/api/users/me').then(function(response){
					var thecurrentUserId = response.data._id;
					_.each(retrivedInfluencers, function(retrivedInfluencer) {
						var addInfluencerObject = {
							name: retrivedInfluencer.instagram_username,
							instagramId: retrivedInfluencer.instagram_id,
							userId: thecurrentUserId
						}

						allInfluencersToBeInserted.push(addInfluencerObject);
					});
					_.each(missingInfluencers, function(missingInfluencer) {
						var addInfluencerObject = {
							name: missingInfluencer,
							instagramId: null,
							userId: thecurrentUserId
						}

						allInfluencersToBeInserted.push(addInfluencerObject);
					});
					return allInfluencersToBeInserted;
				}).then(function(allInfluencersToBeInsertedResponse){
					_that.$http.post('/api/influencers', allInfluencersToBeInsertedResponse).then(response => {
						if(response.statusText == "Created"){
							_that.$scope.setIndividualAlertSuccessTrue = true;
						} else {
							_that.$scope.setIndividualAlertFailureTrue = true;
						};
					});
				})
			});
		}
	}
	angular.module('adstheticCmsApp')
	.controller('addinfluencerscontroller', addinfluencerscontroller);

})();
