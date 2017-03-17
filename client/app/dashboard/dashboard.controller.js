'use strict';

(function() {

  class DashboardController {

    constructor($http, $scope, $state, SweetAlert) {
      this.$scope = $scope;
      this.$http = $http;
      this.$state = $state;
      $scope.addedToList = false;
      $scope.viewType = 'tile';
      $http.get('/api/users/me').then(function(response){
        $scope.userId = response.data._id;
      });

      $scope.deleteInfluencer = function(influencer){
        var _that = this;
        $http.get('/api/users/me')
        .then(
          function fetchAllInfluencersByUser(response) {
            return $http.get('/api/influencers/user/' + response.data._id);
          }).then(
          function(response){
            return _.findWhere(response.data, {name: influencer.instagram_username});
          }).then(function(response){
            $http.delete('/api/influencers/' + response._id).then(response => {
              return $scope.allInfluencersHaveIds();
            })
          })
        };

      $scope.sweetRemove = function(influencer){
          SweetAlert.swal({
          title: "Are you sure?",
          // text: "Are you sure you would like to remove " + influencer.instagram_username + " from your dashboard?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, remove " + influencer.instagram_username+"!",
          closeOnConfirm: true}, 
          function(isConfirm){ 
              if (isConfirm) {
                  $scope.deleteInfluencer(influencer)
              };
          });
        };

      $scope.myFilter = function(post) {
        var isMatch = false;

        if ($scope.inputText) {
          var parts = $scope.inputText.split(' ');

          parts.forEach(function(part) {
            if ((new RegExp(part).test(post.instagram_username)) || (new RegExp(part).test(post.bio))) {
              isMatch = true;
            }
          });
        } else {
          isMatch = true;
        }
        return isMatch;
      };

      $scope.propertyType = '-num_followers';
      $scope.sortType = 'Followers (High To Low) ';
      $http.get('/api/users/me')
      .then(
        function fetchAllInfluencersByUser(response) {
          return $http.get('/api/influencers/user/' + response.data._id);
        })
      .then(
        function checkIfThereAreInfluencersWithoutIds(response){
          $scope.allInfluencersByUser = response.data;
          var allInfluencerIds = _.pluck(response.data, 'instagramId');
          if(_.contains(allInfluencerIds, null)){
            return influencersWithoutIdsExist();
          } else {
            return $scope.allInfluencersHaveIds();
          };
        });

      var influencersWithoutIdsExist = function(){
        $scope.allinfluencersThatAreMissingIds = [];
        $scope.allInfluencersByUser.forEach(function(influencer) {
          if(influencer.instagramId == null){
            $scope.allinfluencersThatAreMissingIds.push(influencer.name);
          };
        });
        $http.post('/api/adstheticserver/fetchinstagramids', $scope.allinfluencersThatAreMissingIds).then(response => {
          return JSON.parse(response.data);
        }).then(
        function(response){
          var retrivedInfluencersUsernames = _.pluck(response, 'instagram_username');
          $scope.missingInfluencers = _.difference($scope.allinfluencersThatAreMissingIds, retrivedInfluencersUsernames);
          $scope.allInfluencersToBeInserted = [];
          $http.get('/api/users/me').then(
            function(userIdResponse){
              _.each(response, function(retrivedInfluencer) {
                var addInfluencerObject = {
                  name: retrivedInfluencer.instagram_username,
                  instagramId: retrivedInfluencer.instagram_id,
                  userId: userIdResponse.data._id
                }
                $scope.allInfluencersToBeInserted.push(addInfluencerObject);
              });
              _.each($scope.missingInfluencers, function(missingInfluencer) {

                var addInfluencerObject = {
                  name: missingInfluencer,
                  instagramId: null,
                  userId: userIdResponse.data._id
                }

                $scope.allInfluencersToBeInserted.push(addInfluencerObject);
              });
            })
          return $scope.allInfluencersToBeInserted;
        }).then(
        function(res){
          $http.get('/api/users/me')
          .then(
            function fetchAllInfluencersByUser(response) {
              return $http.get('/api/influencers/user/' + response.data._id);
            })
          .then(
            function(response){
              response.data.forEach(function(influencer) {
                $scope.allInfluencersToBeInserted.forEach(function(updateinfluencer) {
                  if(influencer.name == updateinfluencer.name){
                    influencer.instagramId = updateinfluencer.instagramId;
                    $http.put('/api/influencers/' + influencer._id, influencer).then(response => {
                      console.log("The update was successful");
                    });
                  }
                });
              });
              return $scope.allInfluencersHaveIds();
            })
        })
      }

      $scope.allInfluencersHaveIds = function(){
        $http.get('/api/users/me')
        .then(
          function fetchAllInfluencersByUser(response) {
            return $http.get('/api/influencers/user/' + response.data._id);
          }).then(
          function(response){
           var instagramIds = _.pluck(response.data, 'instagramId');
           var influencer_basics_ids = [];

           _.each(instagramIds, function(instagramId) {
            var temp = parseInt(instagramId);
            influencer_basics_ids.push(temp);
          });

           $http.post('/api/adstheticserver/fetchinstagramusers', influencer_basics_ids).then(response => {
             var obj = JSON.parse(response.data);
             var influencers_data = obj;
             influencers_data.forEach(function(influencer) {
              if(influencer.predicted_likes == null){
                influencer.predicted_likes = "N/A";
              };
            });
             return influencers_data;
           }).then(function(response){
            $scope.influencers_data = response;
            $scope.calculateNumberOfShowing($scope.influencers_data);
            $scope.moreInfluencersToLoad = $scope.influencers_data.length;
            return $http.get('/api/lists/user/' + $scope.userId);

          }).then(function(response){
            var userList = response.data;

            _.each($scope.influencers_data, function(influencer) {
             influencer.userLists = userList;
           });
          }).then(() => {
            return $http.get('/api/sublists/user/' + $scope.userId);
          }).then(function(response){
            _.each($scope.influencers_data, function(infData) {
              _.each(infData.userLists, function(list) {
                list.sublist = [];
                list.isthereSubList = false;
                _.each(response.data, function(sublist) {
                  if(sublist.listId == list._id){
                    list.isthereSubList = true;
                    list.sublist.push(sublist);
                  }
                });
              });
            });
          })
        })
        }; 

        $scope.calculateNumberOfShowing = function(totalInfluencersInDB){
          if(totalInfluencersInDB.length < 102){
            $scope.showLimitNumber = totalInfluencersInDB.length;
          } else {
            $scope.showLimitNumber = 102;
          };
          $scope.numberToShow = totalInfluencersInDB.length - $scope.showLimitNumber;
          if($scope.numberToShow <= 0){
            $scope.areThereMoreInfluencersToShow = false;
          } else {
            $scope.areThereMoreInfluencersToShow = true;
          };
        };
      }

      addInfluencerToList(influencerId, list){
        list.influencers.push(influencerId);
        var _that = this;
        this.$http.delete('/api/lists/' + list._id).then(response => {
          if(response.status == 204){
            _that.$http.post('/api/lists', list).then(response => {
              if(response.statusText == 'Created'){
               _that.$scope.addedToList = true;
             };
           });
          }
        });
        this.$scope.allInfluencersHaveIds();
      };

      addInfluencerToSubList(influencerId, sublist){
        sublist.influencers.push(influencerId);
        var _that = this;
        this.$http.delete('/api/sublists/' + sublist._id).then(response => {
          if(response.status == 204){
            _that.$http.post('/api/sublists', sublist).then(response => {
              if(response.statusText == 'Created'){
               _that.$scope.addedToList = true;
             };
           });
          }
        });
        this.$scope.allInfluencersHaveIds();
      };

      sortBy(type){
        if(type == 'engagement'){
          if(this.$scope.propertyType == 'predicted_engagement'){
            this.$scope.propertyType = '-predicted_engagement';
          }else if(this.$scope.propertyType == '-predicted_engagement'){
            this.$scope.propertyType = 'predicted_engagement';
          } else {
            this.$scope.propertyType = 'predicted_engagement';
          }
        } else if(type == 'followers'){
          if(this.$scope.propertyType == 'num_followers'){
            this.$scope.propertyType = '-num_followers';
          }else if(this.$scope.propertyType == '-num_followers'){
            this.$scope.propertyType = 'num_followers';
          } else {
            this.$scope.propertyType = '-num_followers';
          }
        } else if(type == 'likes'){
          if(this.$scope.propertyType == 'predicted_likes'){
            this.$scope.propertyType = '-predicted_likes';
          }else if(this.$scope.propertyType == '-predicted_likes'){
            this.$scope.propertyType = 'predicted_likes';
          } else {
            this.$scope.propertyType = '-predicted_likes';
          }
        } else if(type == 'comments'){
          if(this.$scope.propertyType == 'predicted_comments'){
            this.$scope.propertyType = '-predicted_comments';
          }else if(this.$scope.propertyType == '-predicted_comments'){
            this.$scope.propertyType = 'predicted_comments';
          } else {
            this.$scope.propertyType = '-predicted_comments';
          }
        }
        if(this.$scope.propertyType == 'predicted_engagement'){
          this.$scope.sortType = 'Engagement (Ascending) ';
        } else if(this.$scope.propertyType == '-predicted_engagement'){
          this.$scope.sortType = 'Engagement (Descending) ';
        } else if(this.$scope.propertyType == '-num_followers'){
          this.$scope.sortType = 'Followers (High To Low) ';
        } else if(this.$scope.propertyType == 'num_followers'){
          this.$scope.sortType = 'Followers (Low To High) ';
        } else if(this.$scope.propertyType == 'predicted_likes'){
          this.$scope.sortType = 'Predicted Likes (Low To High) ';
        } else if(this.$scope.propertyType == '-predicted_likes'){
          this.$scope.sortType = 'Predicted Likes (High To low) ';
        };
      };

      showMoreinfluencers(){
        this.$scope.numberOfInfluencersLeft = this.$scope.influencers_data.length - this.$scope.showLimitNumber;
        if(this.$scope.numberOfInfluencersLeft < 102){
          this.$scope.showLimitNumber = this.$scope.showLimitNumber + this.$scope.numberOfInfluencersLeft;
          this.$scope.areThereMoreInfluencersToShow = false;
        } else {
          this.$scope.showLimitNumber = this.$scope.showLimitNumber + 102;
          this.$scope.areThereMoreInfluencersToShow = true;
        };
      }
      
      insertinfluencer(influencer){
        influencer = influencer.replace(/\s/g, '');
        var originalInfluencers = influencer.split(',');
        this.$http.post('/api/adstheticserver/fetchinstagramids', originalInfluencers)
          .success(function(res){
            // console.log(this.addForm)
            // this.model = {};
            // dashboard.influencer.$setPristine();
          })
          .then(response => {
          // console.log(influencer);
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
                return _that.$scope.allInfluencersHaveIds();
              } else {
                _that.$scope.setIndividualAlertFailureTrue = true;
                return _that.$scope.allInfluencersHaveIds();
              };
            });
          })
        });
      }

      switchView(viewType1){
        this.$scope.viewType = viewType1;
      }

      goToAdd(){
        this.$state.go('addinfluencers');
      }

      showInfluencer(influencerId){
        console.log(influencerId); 
        this.$state.go('showinfluencer', {influencer: influencerId});
      };

      createList(){
        this.$state.go('newlist');
      };


      }

      angular.module('adstheticCmsApp')
      .controller('DashboardController', DashboardController);
    })();
