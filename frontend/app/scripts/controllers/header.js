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
  .controller('HeaderCtrl', ['$scope', '$location', 'LegcoConfig', function ($scope, $location, LegcoConfig) {
    $scope.isActive = function (viewLocation){
      return viewLocation === $location.path();
    };
    //$scope.showHeader = false;
    //if ([
    //    '/blog',
    //    '/blog/',
    //    '/blog-hans',
    //    '/blog-hans/',
    //    '/20150812-hk-legco-analysis',
    //    '/20150812-hk-legco-analysis/',
    //    '/20150812-hk-legco-analysis-hans',
    //    '/20150812-hk-legco-analysis-hans/'
    //  ].indexOf($location.path()) != -1) {
    //  $scope.showHeader = false;
    //} else {
    //  $scope.showHeader = true;
    //};
    $scope.showHeader = true;
    //console.log('path:' + $location.path() + '|');

    $scope.getRealPath = LegcoConfig.getRealPath;

  }]);
