'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:PlayCtrl
 * @description
 * # PlayCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('PlayCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
