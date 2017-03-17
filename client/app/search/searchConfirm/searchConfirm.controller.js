'use strict';

(function() {

    class SearchConfirmController {

        constructor($http,$scope,$location,$state){
            this.$http = $http;
            this.$scope = $scope;
            this.$location = $location;
            this.$state = $state;

            var query_params = $location.search();
            var targetAccount = query_params['targetAccount'];
            $scope.targetAccount = targetAccount;

            
            

            var dataStore = {
                'madisonlst' : {
                    'gender' : [30,70],
                    'age' : [65,59,90,81,56,55,50],
                    'target' : {"bio": "DJ / Producer / Artist @HeyAmine Tour DJ \\ud83c\\udf4c", "comment_growth_rate": 0.125, "engagement_growth_rate": 0.539, "follower_growth_rate": -0.001, "instagram_id": "214210697", "instagram_username": "madisonlst", "like_growth_rate": 0.556, "num_followers": 2255, "num_following": 1150, "num_posts": 188, "predicted_comments": 7, "predicted_engagement": 0.0576, "predicted_likes": 123, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/13573441_1833288926894241_1109996356_a.jpg"},
                    'interests': [{"bio": "Mom of 2 Yogi Traveler. Canadian (BC) \\ud83c\\udde8\\ud83c\\udde6 German. Snapchat \\ud83d\\udc7b yoga.mami", "comment_growth_rate": 1.000, "engagement_growth_rate": 0.380, "follower_growth_rate": 0.002, "instagram_id": "1238654347", "instagram_username": "yoga_mami", "like_growth_rate": 0.367, "num_followers": 23618, "num_following": 564, "num_posts": 2024, "predicted_comments": 13, "predicted_engagement": 0.0257, "predicted_likes": 595, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/16111058_1242743955815786_7865888468369408000_n.jpg"}, {"bio": "", "comment_growth_rate": -0.222, "engagement_growth_rate": 0.175, "follower_growth_rate": 0.003, "instagram_id": "1469382540", "instagram_username": "michael.lockley", "like_growth_rate": 0.183, "num_followers": 31834, "num_following": 94, "num_posts": 160, "predicted_comments": 26, "predicted_engagement": 0.0700, "predicted_likes": 2202, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/16584037_587123578149457_7522602989509410816_a.jpg"}, {"bio": "\\u2764\\ufe0f", "comment_growth_rate": 1.706, "engagement_growth_rate": 0.655, "follower_growth_rate": 0.007, "instagram_id": "177882283", "instagram_username": "delfinablaquier", "like_growth_rate": 0.652, "num_followers": 83215, "num_following": 605, "num_posts": 2243, "predicted_comments": 16, "predicted_engagement": 0.0142, "predicted_likes": 1165, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/12568098_670442709725603_1997894355_a.jpg"}, {"bio": "Food lover?\\ud83c\\udf74 We bring you the best culinary recommendations in Miami and travels. Tag #eatitmia for repost!  \\ud83d\\udce9 : Eatitmia@gmail.com  \\ud83d\\udccd: Miami", "comment_growth_rate": 0.100, "engagement_growth_rate": 0.106, "follower_growth_rate": 0.008, "instagram_id": "229961078", "instagram_username": "eatitmia", "like_growth_rate": 0.113, "num_followers": 19860, "num_following": 5138, "num_posts": 605, "predicted_comments": 9, "predicted_engagement": 0.0151, "predicted_likes": 291, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/13092378_1032636843491641_1996737307_a.jpg"}, {"bio": "\\ud83d\\udc24 @kangalex \\ud83d\\udce7 kangalex@gmail.com", "comment_growth_rate": 1.000, "engagement_growth_rate": 0.578, "follower_growth_rate": -0.005, "instagram_id": "30743830", "instagram_username": "kangalex", "like_growth_rate": 0.512, "num_followers": 1074, "num_following": 185, "num_posts": 2140, "predicted_comments": 2, "predicted_engagement": 0.0391, "predicted_likes": 40, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/11258145_496230467206111_269360505_a.jpg"}, {"bio": "\\u2800\\u2800photographer // nashville \\u2800\\u2800sarakiesling@gmail.com \\u2800\\u2800this is my life from my iPhone \\u2800\\u2800actual portfolio \\u2199\\ufe0f", "comment_growth_rate": 0.200, "engagement_growth_rate": 0.197, "follower_growth_rate": -0.001, "instagram_id": "3075518", "instagram_username": "sarakiesling", "like_growth_rate": 0.195, "num_followers": 51783, "num_following": 335, "num_posts": 2852, "predicted_comments": 14, "predicted_engagement": 0.0317, "predicted_likes": 1625, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/16464705_411739302504539_2042567891995328512_a.jpg"}, {"bio": "@superchargeagency----------------------------Fashion/Celebrity Photographer Currently in NYC", "comment_growth_rate": -0.500, "engagement_growth_rate": -0.448, "follower_growth_rate": 0.000, "instagram_id": "30756625", "instagram_username": "spencerkohn", "like_growth_rate": -0.438, "num_followers": 19263, "num_following": 2313, "num_posts": 1147, "predicted_comments": 5, "predicted_engagement": 0.0078, "predicted_likes": 145, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/11190188_865447330164167_1868968059_a.jpg"}, {"bio": "nyc | tx taking photos exploring often snacking always  advertising - rxm creative luv 2 email you\\ud83d\\udc8c: shelbyeastman7@gmail.com", "comment_growth_rate": 0.600, "engagement_growth_rate": 0.156, "follower_growth_rate": 0.002, "instagram_id": "31827161", "instagram_username": "shelbyeastman", "like_growth_rate": 0.150, "num_followers": 11169, "num_following": 981, "num_posts": 1858, "predicted_comments": 9, "predicted_engagement": 0.0514, "predicted_likes": 565, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s150x150/16229331_211334419271592_1023286214653902848_n.jpg"}, {"bio": "Sharing luxury at its peak! Business inquiries: contact@bigtoys.co", "comment_growth_rate": 0.067, "engagement_growth_rate": 0.080, "follower_growth_rate": 0.000, "instagram_id": "318996432", "instagram_username": "big.toys", "like_growth_rate": 0.078, "num_followers": 929561, "num_following": 319, "num_posts": 1214, "predicted_comments": 88, "predicted_engagement": 0.0115, "predicted_likes": 10624, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/15624920_1025469290932841_8072069743508455424_a.jpg"}]},
                'ripplefoods' : {
                    'gender' : [67,33],
                    'age' : [.05,.1,.3,.4,.2,.05,0],
                    'target' : {"bio": "See how good the dairy-free life can be. TW: @ripplefoods FB: Facebook.com/RippleFoods info@ripplefoods.com", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "2325407938", "instagram_username": "ripplefoods", "like_growth_rate": null, "num_followers": 7415, "num_following": 3224, "num_posts": 254, "predicted_comments": 16, "predicted_engagement": 0.0372, "predicted_likes": 260, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/12918444_254743148202965_482569330_a.jpg"},
                    'interests': [{"bio": "The official Kashi Instagram. Everyday moments inspired by the foods we make with you in mind.", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "1976107798", "instagram_username": "kashi", "like_growth_rate": null, "num_followers": 2747, "num_following": 38, "num_posts": 23, "predicted_comments": 8, "predicted_engagement": 0.0451, "predicted_likes": 116, "profile_img_url": "https://scontent-lga3-1.cdninstagram.com/t51.2885-19/s320x320/12784087_551196225055577_1827126365_a.jpg"}, {"bio": "We are #nikewomen. Strong alone unstoppable together. We run train and live in style.", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "376999500", "instagram_username": "nikewomen", "like_growth_rate": null, "num_followers": 5471413, "num_following": 148, "num_posts": 701, "predicted_comments": 440, "predicted_engagement": 0.0134, "predicted_likes": 73019, "profile_img_url": "https://scontent-lga3-1.cdninstagram.com/t51.2885-19/s150x150/14052703_154082961701427_53950939_a.jpg"}, {"bio": "The official recipe account for the #Whole30 program as detailed in NY Times bestselling book #ItStartsWithFood. New book AVAILABLE NOW: The Whole30.", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "1318032646", "instagram_username": "whole30recipes", "like_growth_rate": null, "num_followers": 559703, "num_following": 120, "num_posts": 2696, "predicted_comments": 89, "predicted_engagement": 0.0068, "predicted_likes": 3703, "profile_img_url": "https://scontent-lga3-1.cdninstagram.com/t51.2885-19/11887024_874036432665757_504812648_a.jpg"}, {"bio": "Your blueprint for a vibrant life.", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "19271376", "instagram_username": "blueprint", "like_growth_rate": null, "num_followers": 79644, "num_following": 376, "num_posts": 1195, "predicted_comments": 6, "predicted_engagement": 0.0036, "predicted_likes": 281, "profile_img_url": "https://scontent-lga3-1.cdninstagram.com/t51.2885-19/s320x320/13113720_1720266381555062_2129735308_a.jpg"}, {"bio": "Your source for yoga poses sequences quotes & more. \\ud83d\\ude4f\\ud83d\\udcff\\u2728", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "298870759", "instagram_username": "yogajournal", "like_growth_rate": null, "num_followers": 487857, "num_following": 521, "num_posts": 1060, "predicted_comments": 18, "predicted_engagement": 0.0052, "predicted_likes": 2495, "profile_img_url": "https://scontent-lga3-1.cdninstagram.com/t51.2885-19/s320x320/13380913_258150314553660_511846649_a.jpg"}, {"bio": "Snapchat: realsimplemag http://www.realsimple.com/ Click on the link below for more info on our posts!", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "30590462", "instagram_username": "real_simple", "like_growth_rate": null, "num_followers": 650774, "num_following": 224, "num_posts": 2560, "predicted_comments": 68, "predicted_engagement": 0.0109, "predicted_likes": 7027, "profile_img_url": "https://scontent-lga3-1.cdninstagram.com/t51.2885-19/s320x320/12357361_1580517408855563_696369952_a.jpg"}, {"bio": "Inspire joy of food! Tag pics #Foods4Thought (dishes) & #WholeFoodsFaves (finds). Product names & related logos are trademarks of Whole Foods Market.", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "9144270", "instagram_username": "wholefoods", "like_growth_rate": null, "num_followers": 1616454, "num_following": 4679, "num_posts": 2179, "predicted_comments": 75, "predicted_engagement": 0.0067, "predicted_likes": 10700, "profile_img_url": "http://www.mauimall.com/wp-content/uploads/2015/06/Whole-Foods-logo.jpg"}, {"bio": "NYC. Daily vegan inspiration and recipes #bestofvegan \\ud83c\\udf31 by @BrusselsVegan  For business inquiries: bestofveganIG@gmail.com", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "951498294", "instagram_username": "bestofvegan", "like_growth_rate": null, "num_followers": 929211, "num_following": 695, "num_posts": 2406, "predicted_comments": 122, "predicted_engagement": 0.0156, "predicted_likes": 14413, "profile_img_url": "https://scontent-lga3-1.cdninstagram.com/t51.2885-19/s150x150/12716762_437690869764745_1825813838_a.jpg"}, {"bio": "Our mission: to revitalize the way you eat move + live. \\ud83d\\ude4f\\u2728 Treat yo'self to this DIY body scrub just in time for Valentine's Day \\ud83d\\udc98\\ud83c\\udf39:\\ud83d\\udc47", "comment_growth_rate": 0.500, "engagement_growth_rate": 0.115, "follower_growth_rate": 0.003, "instagram_id": "268737565", "instagram_username": "mindbodygreen", "like_growth_rate": 0.106, "num_followers": 344753, "num_following": 587, "num_posts": 2198, "predicted_comments": 29, "predicted_engagement": 0.0060, "predicted_likes": 2046, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/15258799_599703610232124_1093407126333685760_a.jpg"}]},
                'adidas' : {
                    'gender' : [39,61],
                    'age' : [.1,.4,.3,.1,.05,.03,.02],
                    'target' : {"bio": "Calling all creators.", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "20269764", "instagram_username": "adidas", "like_growth_rate": null, "num_followers": 12706190, "num_following": 104, "num_posts": 1068, "predicted_comments": 128, "predicted_engagement": 0.0041, "predicted_likes": 52192, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s150x150/16230306_1867383350211283_2025471362356740096_a.jpg"},
                    'interests': [{"bio": "Manhattan: 644 Broadway\\nBrooklyn: 233 Flatbush Ave\\nWomen's: 64 Bleecker St", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "21109548", "instagram_username": "kith", "like_growth_rate": null, "num_followers": 591421, "num_following": 4, "num_posts": 6273, "predicted_comments": 66, "predicted_engagement": 0.0141, "predicted_likes": 8268, "profile_img_url": "https://scontent-lga3-1.cdninstagram.com/t51.2885-19/s320x320/11939702_1485867158399082_1063182398_a.jpg"}, {"bio": "Catch up on daily news, updates and travels from the Highsnobiety crew. Follow us on Snapchat: @highsnobiety", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "1337336", "instagram_username": "highsnobiety", "like_growth_rate": null, "num_followers": 988933, "num_following": 615, "num_posts": 8007, "predicted_comments": 146, "predicted_engagement": 0.0159, "predicted_likes": 15542, "profile_img_url": "https://scontent-lga3-1.cdninstagram.com/t51.2885-19/s320x320/14723440_1771808976392656_6544373498641383424_a.jpg"}, {"bio": "Authentic, creative, individual. We celebrate our diversity and are united by our commonality as originals. We are Originals.", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "9187952", "instagram_username": "adidasoriginals", "like_growth_rate": null, "num_followers": 10665992, "num_following": 374, "num_posts": 2556, "predicted_comments": 771, "predicted_engagement": 0.0111, "predicted_likes": 117151, "profile_img_url": "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13267460_194075260986494_755318019_a.jpg"}, {"bio": "Look Sharp. Live Smart.", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "12864526", "instagram_username": "gq", "like_growth_rate": null, "num_followers": 2583136, "num_following": 400, "num_posts": 3966, "predicted_comments": 70, "predicted_engagement": 0.0052, "predicted_likes": 13376, "profile_img_url": "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/12725199_567801390035808_1568225398_a.jpg"}, {"bio": "Get the latest news and follow the day-to-day of the HYPEBEAST team. For even more behind-the-scenes content, follow our Snapchat: hypebeastdaily", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "19719473", "instagram_username": "hypebeast", "like_growth_rate": null, "num_followers": 2256087, "num_following": 400, "num_posts": 10323, "predicted_comments": 176, "predicted_engagement": 0.0143, "predicted_likes": 32149, "profile_img_url": "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13329171_908233535952536_209312930_a.jpg"}, {"bio": "Best and latest High Fashion, Sneakers, Cars and Lifestyle posts.", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "1537480063", "instagram_username": "hypedstreets", "like_growth_rate": null, "num_followers": 33742, "num_following": 783, "num_posts": 2092, "predicted_comments": 19, "predicted_engagement": 0.1227, "predicted_likes": 4121, "profile_img_url": "https://scontent-lga3-1.cdninstagram.com/t51.2885-19/s320x320/12145181_1736950676532946_2095135018_a.jpg"}, {"bio": "We Go.", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "212466683", "instagram_username": "adidasskateboarding", "like_growth_rate": null, "num_followers": 754031, "num_following": 348, "num_posts": 1713, "predicted_comments": 56, "predicted_engagement": 0.0215, "predicted_likes": 16173, "profile_img_url": "https://scontent-lga3-1.cdninstagram.com/t51.2885-19/10454185_693758827364545_990049216_a.jpg"}, {"bio": "YAMMY GANG", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "10685362", "instagram_username": "asaprocky", "like_growth_rate": null, "num_followers": 3089631, "num_following": 635, "num_posts": 506, "predicted_comments": 1174, "predicted_engagement": 0.0544, "predicted_likes": 166919, "profile_img_url": "https://scontent-lga3-1.cdninstagram.com/t51.2885-19/s320x320/14596811_1089838477804250_4080692034732556288_a.jpg"}, {"bio": "", "comment_growth_rate": null, "engagement_growth_rate": null, "follower_growth_rate": null, "instagram_id": "930523155", "instagram_username": "vetements_official", "like_growth_rate": null, "num_followers": 437993, "num_following": 0, "num_posts": 1108, "predicted_comments": 83, "predicted_engagement": 0.0503, "predicted_likes": 21944, "profile_img_url": "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/11848857_477914009049646_1927622160_a.jpg"}]}, 


                'jstnstwrt' : [{"bio": "entrepreneur | data scientist | conceptual art | model", "comment_growth_rate": 0.500, "engagement_growth_rate": 0.139, "follower_growth_rate": 0.002, "instagram_id": "332324252", "instagram_username": "jstnstwrt", "like_growth_rate": 0.122, "num_followers": 990, "num_following": 662, "num_posts": 190, "predicted_comments": 3, "predicted_engagement": 0.0928, "predicted_likes": 89, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/16584778_1230570357010983_9065317326261321728_a.jpg"}], 
                'sigruneva' : [{"bio": "Women|360: luke@w360management.com \\ud83e\\udd84 Icelandic \\ud83c\\uddee\\ud83c\\uddf8 TheGoodLife! FC \\u26bd\\ufe0f", "comment_growth_rate": 0.429, "engagement_growth_rate": 0.409, "follower_growth_rate": 0.001, "instagram_id": "4487020", "instagram_username": "sigruneva", "like_growth_rate": 0.404, "num_followers": 6658, "num_following": 976, "num_posts": 757, "predicted_comments": 6, "predicted_engagement": 0.0290, "predicted_likes": 187, "profile_img_url": "https://scontent.cdninstagram.com/t51.2885-19/s320x320/12331740_537821109719986_1733165086_a.jpg"}]
            };
            
            $scope.interests = dataStore[targetAccount]['interests'];
            $scope.age = dataStore[targetAccount]['age'];
            $scope.gender = dataStore[targetAccount]['gender'];
            $scope.target = dataStore[targetAccount]['target'];


            // Start Charts 
            var globalGraphSettings = {animation : Modernizr.canvas};

                // Start Age Distribution
            var barChartData = {
                labels : ["12-17","18-24","25-34","35-44","45-54","54-65","65+"],
                datasets : [
                    {
                        fillColor : "rgb(108,128,147)",
                        strokeColor : "rgba(220,220,220,0)",
                        data : $scope.age
                    }
                ]
            };

            function showBarChart(){
                var ctx = document.getElementById("barChartCanvas").getContext("2d");
                new Chart(ctx).Bar(barChartData,globalGraphSettings);
            }

            $('#barChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showBarChart,100); },{accX: 0, accY: -155},'easeInCubic');
                // End Bar Chart

            // Start Gender Distribtion
            var pieChartData = [
                {
                    value: $scope.gender[0],
                    color:"rgb(156,99,128)",
                    label: 'female'
                },
                {
                    value : $scope.gender[1],
                    color : "rgb(79,129,176)",
                    label : 'male'
                }

            ];

            function showPieChart(){
                var ctx = document.getElementById("pieChartCanvas").getContext("2d");
                new Chart(ctx).Pie(pieChartData,globalGraphSettings);
            }

            $('#pieChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showPieChart,50); },{accX: 0, accY: -155},'easeInCubic');



            $scope.move = function(){
                console.log('inside move');
                var elem = angular.element(document).find("#myBar2"); 
                var width = 1;
                var id = setInterval(frame, 20);
                function frame() {
                    if (width >= 100) {
                        clearInterval(id);
                    } else {
                        width++;
                        elem.css('width', width + '%');
                    }
                }
            };


            $scope.toResult = function(){
                console.log('inside confirm');
                $scope.move()
                var query_param = $scope.targetAccount
                setTimeout(function(){
                    console.log('inside timeout');
                    window.location.href = '/searchResult?targetAccount='+query_param;
                    // Waits 3 seconds to execute.
                }, 2*1000)
                
            };


        };

    }
    angular.module('adstheticCmsApp')
    .controller('SearchConfirmController', SearchConfirmController);

})();