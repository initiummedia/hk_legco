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

    $scope.isLoadingTransDictMover = true;
    $scope.isLoadingTransDictVoter = true;
    $scope.isLoadingMVRelation = true;

    $http.get('/api/transdict-mover.json').success(function(data){
      $scope.transDictMover = data;
      $scope.rangeMovers = _.range(1, Object.keys($scope.transDictMover).length + 1);
      $scope.isLoadingTransDictMover = false;
    }).error(function(data){
      console.log('loading failure');
    });

    $http.get('/api/transdict-voter.json').success(function(data){
      $scope.transDictVoter = data;
      $scope.rangeVoters = _.range(1, Object.keys($scope.transDictVoter).length + 1);
      $scope.isLoadingTransDictVoter = false;
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
      $scope.isLoadingMVRelation = false;
    }).error(function(data){
      console.log('loading failure');
    });

    $scope.currentStep = 0;

    var script_url = 'https://spreadsheets.google.com/feeds/list/1s2CkDX0sMaZHzHjl_hbJs8DkyUAca08enU1te3aEPUU/od6/public/values?alt=json';
    $http.get(script_url).success(function(data){
      console.log(data);
      $scope.stories = _.map(data.feed.entry, function(v){
        // Do not process. just use the gsx$ notation
        //console.log(v);
        return v;
      });
      //console.log($scope.stories);

      var tour = new Shepherd.Tour({
        defaults: {
          classes: 'shepherd-theme-arrows',
          scrollTo: true
        }
      });

      //tour.addStep('Overview', {
      //  title: 'Title here',
      //  text: 'This is overview of the plot',
      //  attachTo: '#heatmap',
      //  buttons: [
      //    {
      //      text: 'Next',
      //      action: tour.next
      //    }
      //  ]
      //});

      // refer to main.scss to sync parameters;
      var cellSize = 8;
      var cellSpacing = 1;
      var cellBlockSize = cellSize + cellSpacing;
      var heatmapLeft = 15 * (cellBlockSize); // max 13 chars in names
      var heatmapTop = 8 * (cellBlockSize); // max 6 chars in names

      for (var i in $scope.stories) {
        var story = $scope.stories[i];
        //console.log(story);
        var frameID = 'frame' + i;
        var frameClass = 'frame' + i;
        var frame = $('<div></div>').attr('id', frameID).addClass('guide-frame');

        frame.appendTo('#legco');
        //frame.hide();
        var rectangles = JSON.parse(story['gsx$rectangles']['$t']);
        for (var i=0; i < rectangles.length; i++) {
          var rPos = rectangles[i];
          //console.log(rPos);
          var r = $('<div></div>').addClass('rectangle').addClass(frameClass);
          r.css('top', heatmapTop + cellBlockSize * (rPos[0] - 1) + 'px');
          r.css('left', heatmapLeft + cellBlockSize * (rPos[1] - 1) + 'px');
          r.css('width', (rPos[3] - rPos[1] + 1) * cellBlockSize);
          r.css('height', (rPos[2] - rPos[0] + 1) * cellBlockSize);
          r.appendTo(frame);
        }

        var nextFunc = function(){
          $scope.currentStep += 1;
          var nextFrameClass = '.frame' + $scope.currentStep;
          console.log($scope.currentStep);
          console.log(nextFrameClass);
          //$('.guide-frame').hide();
          $('.rectangle').hide();
          //console.log($('.guide-frame'));
          $(nextFrameClass).show();
          //console.log($(nextFrameClass));
          tour.next();
        };

        tour.addStep('Overview', {
          title: story['gsx$title']['$t'],
          text: story['gsx$text']['$t'],
          attachTo: '.' + frameClass,
          buttons: [
            {
              text: 'Next',
              action: nextFunc
            }
          ]
        });
      }

      $('.rectangle').hide();
      $('.frame0').show();
      tour.start();

    }).error(function(data){
      console.log('loading failure');
    });

  }]);
