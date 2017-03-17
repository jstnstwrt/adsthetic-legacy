// 'use strict';

// describe('Controller: DashboardController', function() {

//   // load the controller's module
//   beforeEach(module('adstheticCmsApp'));
//   beforeEach(module('stateMock'));

//   var scope;
//   var DashboardController;
//   var state;
//   var $httpBackend;

//   // Initialize the controller and a mock scope
//   beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $state) {
//     $httpBackend = _$httpBackend_;
//     $httpBackend.expectGET('/api/influencers')
//       .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

//     scope = $rootScope.$new();
//     state = $state;
//     DashboardController = $controller('DashboardController', {
//       $scope: scope
//     });
//   }));

//   it('should attach a list of influencers to the controller', function() {
//     $httpBackend.flush();
//     expect(DashboardController.awesomeInfluencers.length).toBe(4);
//   });
// });
