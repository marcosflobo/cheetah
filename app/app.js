'use strict';

// Declare app level module which depends on views, and components
angular.module('cheetahApp', [
  'ngRoute',
  'cheetahApp.view1',
  'cheetahApp.view2',
  'cheetahApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
