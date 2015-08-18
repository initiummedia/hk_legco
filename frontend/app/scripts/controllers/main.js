'use strict'

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
;(function () {
  angular.module('frontendApp')
    .controller('MainCtrl', function ($scope) {
      var angular = window.angular
      var $ = window.$
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ]
    })
}())
