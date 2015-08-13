'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('AboutCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log($location.path());

    $scope.projects = [
      {
        name: 'name',
        author: 'author',
        status: 'status',
        outcome: 'coutcome',
        link: 'link'
      }
    ];
  }]);

