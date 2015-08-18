'use strict'

/**
 * @ngdoc function
 * @name frontendApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the frontendApp
 */
;(function () {
  angular.module('frontendApp')
    .controller('HomeCtrl', function ($scope) {
      var angular = window.angular
      var $ = window.$
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ]
    })
}())
