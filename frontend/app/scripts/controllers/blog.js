'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
