'use strict';

(function() {

	class DiscoverController {

		constructor($http, $scope, $state, AddInfluencer) {
			this.$http = $http;
			this.$scope = $scope;
            this.$state = $state;

            // Discovery stack will eventually come from DB.
            // userId needs to be populated dyanmically!!!
            $http.get('api/users/me').then(function(response){

                

                var userId = response.data._id;
                $scope.userId = userId;
                var discoveryStack = [{"bio": "\\ud83c\\udfaf Creative Director + PR + Events \\ud83d\\udd75\\ud83c\\udffd Menswear Influencer + GQ Insider", "comment_growth_rate": 0.000, "engagement_growth_rate": 0.202, "follower_growth_rate": 0.000, "instagram_id": "17656368", "instagram_username": "tonyrharris", "like_growth_rate": 0.203, "num_followers": 7386, "num_following": 2287, "num_posts": 1679, "predicted_comments": 3, "predicted_engagement": 0.0089, "predicted_likes": 63, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/11850250_485733851604526_932267668_a.jpg"}, {"bio": "Versatile. \\u2709\\ufe0f: 1st@brianalcazar.com", "comment_growth_rate": -0.261, "engagement_growth_rate": -0.105, "follower_growth_rate": 0.000, "instagram_id": "464353727", "instagram_username": "1st", "like_growth_rate": -0.104, "num_followers": 358271, "num_following": 184, "num_posts": 1487, "predicted_comments": 68, "predicted_engagement": 0.0276, "predicted_likes": 9818, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/14574020_1228439020582615_5638549953723760640_a.jpg"}, {"bio": "", "comment_growth_rate": 0.141, "engagement_growth_rate": 0.087, "follower_growth_rate": -0.001, "instagram_id": "21948824", "instagram_username": "night.shift", "like_growth_rate": 0.086, "num_followers": 115792, "num_following": 91, "num_posts": 367, "predicted_comments": 63, "predicted_engagement": 0.0505, "predicted_likes": 5789, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s150x150/16585270_1919068968328381_7198022226367479808_a.jpg"}, {"bio": "film /Toronto // \\ud83c\\udf34currently in Toronto . \\ud83c\\udf34 \\ud83c\\udf34 NEW INDIA VLOG IS UP! Climbing the tallest crane in India! \\ud83c\\udf07\\u2b07\\ufe0f", "comment_growth_rate": 1.822, "engagement_growth_rate": 0.617, "follower_growth_rate": 0.011, "instagram_id": "510990121", "instagram_username": "sam_kolder", "like_growth_rate": 0.617, "num_followers": 233584, "num_following": 215, "num_posts": 288, "predicted_comments": 258, "predicted_engagement": 0.0821, "predicted_likes": 18931, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/15802337_176578339493898_1750698153830514688_a.jpg"}, {"bio": "Be Visually Inspired! Join the World's Largest Photo Community #artofvisuals #aov \\ud83d\\udc47\\ud83c\\udffcPresets/filters & App\\ud83d\\udc47\\ud83c\\udffc", "comment_growth_rate": 0.258, "engagement_growth_rate": 0.184, "follower_growth_rate": 0.004, "instagram_id": "1535360383", "instagram_username": "artofvisuals", "like_growth_rate": 0.189, "num_followers": 816301, "num_following": 693, "num_posts": 3163, "predicted_comments": 185, "predicted_engagement": 0.0411, "predicted_likes": 33367, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s150x150/15253076_1849527448626181_945133293223804928_a.jpg"}, {"bio": "married to my best friend @tiesandfries. raising our three little ones in new york city. \\ud83d\\udc8c\\ufe0f\\ud83d\\udc4b\\ud83c\\udffb: taza@lovetaza.com \\ud83c\\udfa5\\u2764\\ufe0f: more videos on my insta stories", "comment_growth_rate": 0.500, "engagement_growth_rate": 0.223, "follower_growth_rate": 0.000, "instagram_id": "719632", "instagram_username": "taza", "like_growth_rate": 0.219, "num_followers": 405442, "num_following": 148, "num_posts": 4600, "predicted_comments": 57, "predicted_engagement": 0.0214, "predicted_likes": 8633, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/12502031_934646099983787_1459462709_a.jpg"}, {"bio": "#soholifestyle | #sohomusic soholifestylenyc@gmail.com", "comment_growth_rate": 0.222, "engagement_growth_rate": 0.188, "follower_growth_rate": 0.000, "instagram_id": "1067323736", "instagram_username": "soholifestyle", "like_growth_rate": 0.190, "num_followers": 93433, "num_following": 51, "num_posts": 436, "predicted_comments": 8, "predicted_engagement": 0.0199, "predicted_likes": 1847, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/12747794_213673812315137_1444130238_a.jpg"}, {"bio": "Los Angeles", "comment_growth_rate": -0.322, "engagement_growth_rate": -0.295, "follower_growth_rate": 0.002, "instagram_id": "18465983", "instagram_username": "asteryx", "like_growth_rate": -0.293, "num_followers": 282835, "num_following": 428, "num_posts": 2257, "predicted_comments": 176, "predicted_engagement": 0.0380, "predicted_likes": 10571, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/11352905_514404212043641_1095172526_a.jpg"}, {"bio": "building @rosewood  hi@mattcbauer.com", "comment_growth_rate": 0.765, "engagement_growth_rate": -0.102, "follower_growth_rate": 0.000, "instagram_id": "5388311", "instagram_username": "mattcbauer", "like_growth_rate": -0.107, "num_followers": 86169, "num_following": 1152, "num_posts": 1243, "predicted_comments": 16, "predicted_engagement": 0.0256, "predicted_likes": 2187, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/11008276_370987319751304_91455933_a.jpg"}, {"bio": "\\ud83d\\udcf2 Social Media Consultant  \\ud83d\\udccd: NYC // Investor \\ud83d\\udcb5 \\ud83d\\udc54 Men's Style & Travel \\ud83d\\udc7b Snap / \\ud83d\\udc23Twitter: Wallstreetpaper  \\ud83d\\udcec wspaperblog@gmail.com", "comment_growth_rate": 1.357, "engagement_growth_rate": 0.318, "follower_growth_rate": 0.002, "instagram_id": "9265615", "instagram_username": "wallstreetpaper", "like_growth_rate": 0.302, "num_followers": 73896, "num_following": 2337, "num_posts": 602, "predicted_comments": 27, "predicted_engagement": 0.0212, "predicted_likes": 1543, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/14709641_1095099220608559_7159744915184812032_a.jpg"}, {"bio": "Curated by @mattstarrmattstarr and @avigill  \\ud83d\\udce9WeAreWalmArt@gmail.com Use hashtag #WalmArtArt to be featured on our page", "comment_growth_rate": -0.500, "engagement_growth_rate": 0.605, "follower_growth_rate": 0.000, "instagram_id": "1516564070", "instagram_username": "walm.art", "like_growth_rate": 0.672, "num_followers": 28189, "num_following": 475, "num_posts": 1596, "predicted_comments": 15, "predicted_engagement": 0.0086, "predicted_likes": 228, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/10706853_774032529325187_2015361845_a.jpg"}, {"bio": "aureta@aureta.com - represented by W magazine", "comment_growth_rate": 0.714, "engagement_growth_rate": 0.456, "follower_growth_rate": 0.001, "instagram_id": "9438838", "instagram_username": "aureta", "like_growth_rate": 0.460, "num_followers": 422157, "num_following": 127, "num_posts": 2316, "predicted_comments": 41, "predicted_engagement": 0.0189, "predicted_likes": 7951, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/16124021_377912912577606_8235438359439212544_a.jpg"}, {"bio": "Photographer | Creator London 2/17-2/22 Milan 2/23-2/28 Paris 2/29-3/8", "comment_growth_rate": -0.500, "engagement_growth_rate": -0.313, "follower_growth_rate": -0.001, "instagram_id": "3546273", "instagram_username": "visualsbypierre", "like_growth_rate": -0.308, "num_followers": 68123, "num_following": 673, "num_posts": 2604, "predicted_comments": 23, "predicted_engagement": 0.0154, "predicted_likes": 1026, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/10979547_769411103149874_1154213883_a.jpg"}, {"bio": "\\ud83d\\udca5\\ud83d\\udcf2 casetify.com/tayst \\ud83c\\udf52twitter - @taystdesign \\ud83d\\udc8c taylor@taystdesign.com \\ud83c\\udf38 digital + creative @lafemmecollective \\ud83d\\udc47\\ud83c\\udffc for custom art check out my site.", "comment_growth_rate": 2.000, "engagement_growth_rate": 0.055, "follower_growth_rate": 0.000, "instagram_id": "38277", "instagram_username": "tayst", "like_growth_rate": 0.046, "num_followers": 43357, "num_following": 579, "num_posts": 1655, "predicted_comments": 9, "predicted_engagement": 0.0439, "predicted_likes": 1893, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/13391101_1730059277233296_1868671688_a.jpg"}, {"bio": "\\u2796Substance x style. \\u2796NYC based citizen of the world.  \\u2796Bride to be \\ud83d\\udc8d contact: greylayersinfo@gmail.com VOTE FOR ME AT THE SHORTY AWARDS DAILY:", "comment_growth_rate": 0.083, "engagement_growth_rate": 0.087, "follower_growth_rate": 0.000, "instagram_id": "39664829", "instagram_username": "thegreylayers", "like_growth_rate": 0.086, "num_followers": 194418, "num_following": 1022, "num_posts": 3807, "predicted_comments": 71, "predicted_engagement": 0.0288, "predicted_likes": 5535, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/16111018_1216684471742542_1034021494000189440_a.jpg"}, {"bio": "I swoon over cooking yummy seasonal food and beautiful decor & design!!!  -- Currently writing my 1st cookbook to be released in fall 2017 with Abrams", "comment_growth_rate": 0.375, "engagement_growth_rate": 0.268, "follower_growth_rate": 0.001, "instagram_id": "12916938", "instagram_username": "eyeswoon", "like_growth_rate": 0.270, "num_followers": 82522, "num_following": 1801, "num_posts": 2419, "predicted_comments": 15, "predicted_engagement": 0.0095, "predicted_likes": 766, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/16465378_899501976853902_4178330217762258944_a.jpg"}, {"bio": "food \\ud83c\\udf55travel \\u2708\\ufe0f lifestyle \\ud83c\\udf5d noods \\ud83d\\udccdCambodia \\ud83c\\udf5c\\u2764 \\ud83d\\udd1c Japan \\ud83c\\udf63\\ud83c\\udf71 Parlez-vous french fries? \\ud83c\\udf5f", "comment_growth_rate": 1.100, "engagement_growth_rate": 1.095, "follower_growth_rate": 0.002, "instagram_id": "1194533", "instagram_username": "faimfatale", "like_growth_rate": 1.089, "num_followers": 25156, "num_following": 1874, "num_posts": 2406, "predicted_comments": 9, "predicted_engagement": 0.0115, "predicted_likes": 280, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/13696944_1771836633056647_221387624_a.jpg"}, {"bio": "I eat my burgers with GothamBurgerSocialClub I drink with everyone and their mother NYC Green drink by day bourbon by night. Boozyburgers@gmail", "comment_growth_rate": -0.390, "engagement_growth_rate": -0.677, "follower_growth_rate": 0.002, "instagram_id": "1528464300", "instagram_username": "boozeandburgers", "like_growth_rate": -0.682, "num_followers": 57254, "num_following": 377, "num_posts": 883, "predicted_comments": 58, "predicted_engagement": 0.0540, "predicted_likes": 3035, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/11373686_890543791015698_277266963_a.jpg"}, {"bio": "\\ud83d\\udecb@PLUS1 \\ud83c\\udfa8avi@lovewatts.art", "comment_growth_rate": 2.000, "engagement_growth_rate": 0.324, "follower_growth_rate": 0.030, "instagram_id": "14688140", "instagram_username": "avigill", "like_growth_rate": 0.335, "num_followers": 9411, "num_following": 917, "num_posts": 457, "predicted_comments": 2, "predicted_engagement": 0.0201, "predicted_likes": 187, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/12479652_222974538084228_1303356834_a.jpg"}, {"bio": "Content & Creative Agency \\u2022  Services : Photography Styling Art Direction Inquiries : info@streetetiquette.com  Est. 2008", "comment_growth_rate": -0.476, "engagement_growth_rate": -0.430, "follower_growth_rate": 0.000, "instagram_id": "24758894", "instagram_username": "streetetiquette", "like_growth_rate": -0.431, "num_followers": 223641, "num_following": 998, "num_posts": 2731, "predicted_comments": 41, "predicted_engagement": 0.0139, "predicted_likes": 3077, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/10725112_1778926512331980_583397673_a.jpg"}];

                $scope.discoveryStack = discoveryStack;
            });
            

            $scope.popFromStack = function(influencer){

                var instagramId = influencer.instagram_id;
                var index = $scope.discoveryStack.findIndex(x=>x.instagram_id === instagramId)
                if (index > -1){
                    $scope.discoveryStack.splice(index,1);
                };
            };

            $scope.addToDash = function(influencer){
                var influencerToAdd = {
                                        'name': influencer.instagram_username,
                                        'instagramId': influencer.instagram_id,
                                        'userId': $scope.userId
                                    };
                var allInfluencersToBeInserted = [];
                allInfluencersToBeInserted.push(influencerToAdd)
                $http.post('api/influencers',allInfluencersToBeInserted).then(response => {
                    if(response.statusText == "Created"){
                        console.log('success');
                        $scope.setIndividualAlertSuccessTrue = true;
                    } else {
                        console.log('fail');
                        $scope.setIndividualAlertFailureTrue = true;
                    };
                });
                $scope.popFromStack(influencer);
            };
		}

	}
	angular.module('adstheticCmsApp')
	.controller('DiscoverController', DiscoverController);
})();
