'use strict'

/**
 * @ngdoc function
 * @name frontendApp.controller:VideoCtrl
 * @description
 * # VideoCtrl
 * Controller of the frontendApp
 */
;(function () {
  angular.module('frontendApp')
    .controller('VideoCtrl', function ($scope) {
      var angular = window.angular
      var $ = window.$
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ]
    })
}())
