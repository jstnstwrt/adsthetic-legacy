'use strict';

(function() {

    function AddInfluencerService($http){

        var AddInfluencer = {

            testService(name){
                console.log('you da bomb' + name + '!');
            },

            // A method to add influencer(s) to the User's dashboard
            insertInfluencer(influencer){
                // Parse user input for array of usernames
                influencer = influencer.replace(/\s/g, ',');
                var originalInfluencers = influencer.split(',');
                // Grab instagram id's for those usernames already in DB.
                $http.post('/api/adstheticserver/fetchinstagramids',originalInfluencers)
                    .success(function(res){
                        }).then(response =>{
                        var obj = JSON.parse(response.data);
                        var retrivedInfluencersUsernames = _.pluck(obj, 'instagram_username');
                        // Identify usernames not in DB to send for data pull.
                        var missingInfluencers = _.difference(originalInfluencers, retrivedInfluencersUsernames);
                        var retrivedInfluencers = obj;
                        
                        var allInfluencersToBeInserted = [];
                        $http.get('api/users/me').then(function(response){
                            var thecurrentUserId = response.data._id;
                            // Creating an array of influencers to be added to user's Dash.
                            // For those we found Ids for.
                            _.each(retrivedInfluencers, function(retrivedInfluencer){
                                var addInfluencerObject = {
                                    name: retrivedInfluencer.instagram_username,
                                    instagramId: retrivedInfluencer.instagram_id,
                                    userId: thecurrentUserId
                                }

                                allInfluencersToBeInserted.push(addInfluencerObject);
                            });
                            // For those we did not find ids for. 
                            _.each(missingInfluencers, function(missingInfluencer){
                                var addInfluencerObject = {
                                    name: missingInfluencer.instagram_username,
                                    instagramId: null,
                                    userId: thecurrentUserId
                                }
                                allInfluencersToBeInserted.push(addInfluencerObject)  
                            });
                            return allInfluencersToBeInserted;
                        })
                        // .then(function(allInfluencersToBeInsertedResponse){
                        //     $http.post('api/influencers', allInfluencersToBeInsertedResponse).then(response =>{
                        //         if(response.statusText == "Created"){
                        //             $scope.setIndividualAlertSuccessTrue = true;
                        //             // return $scope.allInfluencersHaveIds();
                        //         } else {
                        //             $scope.setIndividualAlertFailureTrue = true;
                        //             // return $scope.allInfluencersHaveIds();
                        //         };
                        //    });
                        // });
                    });
            }
        };

        return AddInfluencer;
    };

    angular.module('adstheticCmsApp.addInfluencer')
        .factory('AddInfluencer', AddInfluencerService);
}());