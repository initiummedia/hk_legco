'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //TODO: add any control logics here
    $('#shareVideoToFacebookAnchor').attr('href', 'https://facebook.com/');

    // Special configuration for touchscreens
    var is_touch_device = 'ontouchstart' in document.documentElement;
    if (is_touch_device) {
      //TODO
    };

    // Enable click-to-play for videos
    var video = document.getElementById('introVideo');
    video.addEventListener('click', function(){
      this.paused?this.play():this.pause();
    }, false);

  });
