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

    //var generateGradient = function(beginColor, endColor, percentage){
    var generateGradient = function(percentage){
      // Use the color scheme from Legco
      // http://www.legco.gov.hk/general/chinese/business/index.html
      // Begin: 9681AC
      // End: 2C0254
      var linearCombination = function(beginValue, endValue, percentage) {
        // values are passed in a 2 digit hex values
        beginValue = parseInt(beginValue, 16);
        endValue = parseInt(endValue, 16);
        var intensity = Math.floor(percentage * endValue + (1 - percentage) * beginValue);
        return (intensity + 0x100).toString(16).substr(-2).toUpperCase();
      };
      return '#'
        + linearCombination('ee', '2C', percentage)
        + linearCombination('ee', '02', percentage)
        + linearCombination('ee', '54', percentage);
    };

    $http.get('/api/transdict-mover.json').success(function(data){
      $scope.transDictMover = data;
      $scope.rangeMovers = _.range(1, Object.keys($scope.transDictMover).length + 1);
      //console.log(data.length);
      //console.log($scope.rangeMovers);
      //console.log(data);
    }).error(function(data){
      console.log('loading failure');
    });

    $http.get('/api/transdict-voter.json').success(function(data){
      $scope.transDictVoter = data;
      $scope.rangeVoters = _.range(1, Object.keys($scope.transDictVoter).length + 1);
      //console.log(data);
    }).error(function(data){
      console.log('loading failure');
    });

    $http.get('/api/mv-relation.json').success(function(data){
      $scope.mvRelation = data;
      for (var i=0; i<$scope.mvRelation.length; i++) {
        for (var j=0; j<$scope.mvRelation[i].length; j++) {
          var value = $scope.mvRelation[i][j];
          var valuePercentage = Math.round(value * 100);
          var color = 'black';
          if (value < 0.5) {
            color = 'white';
          }
          $scope.mvRelation[i][j] = {
            value: value,
            valuePercentage: valuePercentage,
            color: generateGradient(value)
          }
        }
      }
      //console.log(data);
    }).error(function(data){
      console.log('loading failure');
    });


  }]);
