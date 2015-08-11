'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the frontendApp
 */

// Ref:
//     http://stackoverflow.com/questions/16199418/how-do-i-implement-the-bootstrap-navbar-active-class-with-angular-js
angular.module('frontendApp')
  .controller('HeaderCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (viewLocation){
      return viewLocation === $location.path();
    };
    //$scope.showHeader = false;
    if ($location.path() === '/blog' || $location.path() === '/20150812-hk-legco-analysis') {
      $scope.showHeader = false;
    } else {
      $scope.showHeader = true;
    }

    var pathScheme = $('meta[name="pathScheme"]').first().attr('content');
    $scope.getRealPath = function(path){
      return pathScheme + path;
    };
    console.log('pathScheme: ' + pathScheme);

  }]);
