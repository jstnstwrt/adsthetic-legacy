// 'use strict';

// angular.module('adstheticCmsApp')
//   .directive('header', function() {
//     return {
//       templateUrl: 'components/header/header.html',
//       restrict: 'E',
//       controller: 'HeaderController',
//       controlleras: 'header',
//       link: function(scope, element) {
//         element.addClass('header');
//       }
//     };
//   });


'use strict';

angular.module('adstheticCmsApp')
  .directive('header', () => ({
    templateUrl: 'components/header/header.html',
    restrict: 'E',
    controller: 'HeaderController',
    controllerAs: 'header'
  }));
