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

    var script_url = 'https://spreadsheets.google.com/feeds/list/1s2CkDX0sMaZHzHjl_hbJs8DkyUAca08enU1te3aEPUU/od6/public/values?alt=json';
    $http.get(script_url).success(function(data){
      console.log(data);
      $scope.stories = _.map(data.feed.entry, function(v){
        // Do not process. just use the gsx$ notation
        //console.log(v);
        return v;
      });
      //console.log($scope.stories);
    }).error(function(data){
      console.log('loading failure');
    });

    $scope.storyPointer = 0;

    var tour = new Shepherd.Tour({
      defaults: {
        classes: 'shepherd-theme-arrows',
        scrollTo: true
      }
    });

    tour.addStep('Overview', {
      title: 'Title here',
      text: 'This is overview of the plot',
      attachTo: '#heatmap',
      buttons: [
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });

    tour.addStep('Step2', {
      title: 'Title here 2',
      text: 'This is overview of the plot 2',
      attachTo: '#heatmap',
      buttons: [
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });

    tour.start();

  }]);
