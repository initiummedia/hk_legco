'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:DivCtrl
 * @description
 * # DivCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('DivCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.msg = 'hello';

    $http.get('/api/transdict-mover.json').success(function(data){
      console.log(data);
    });
  }]);
