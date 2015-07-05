'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('QuizCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
