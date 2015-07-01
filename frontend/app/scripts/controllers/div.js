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
      $scope.transDictMover = data;
      console.log(data);
    }).error(function(data){
      console.log('loading failure');
    });

    $http.get('/api/transdict-voter.json').success(function(data){
      $scope.transDictVoter = data;
      console.log(data);
    }).error(function(data){
      console.log('loading failure');
    });

    $http.get('/api/mv-relation.json').success(function(data){
      $scope.mvRelation = data;
      console.log(data);
    }).error(function(data){
      console.log('loading failure');
    });
  }]);
