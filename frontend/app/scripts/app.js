'use strict'

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */

;(function () {
  var angular = window.angular
  var $ = window.$
  angular
    .module('frontendApp', [
      'ngAnimate',
      'angulartics',
      'angulartics.google.analytics',
      'ngAria',
      'ngCookies',
      'ngMessages',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ngDialog',
      'monospaced.qrcode',
      'ui.bootstrap'
    ])
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/quiz.html',
          controller: 'QuizCtrl'
        })
        .when('/quiz', {
          templateUrl: 'views/quiz.html',
          controller: 'QuizCtrl'
        })
        .when('/video', {
          templateUrl: 'views/video.html',
          controller: 'VideoCtrl'
        })
        .when('/matrix-meta', {
          templateUrl: 'views/meta.html',
          controller: 'DivCtrl'
        })
        .when('/home', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .when('/matrix', {
          templateUrl: 'views/div.html',
          controller: 'DivCtrl'
        })
        .when('/blog', {
          templateUrl: 'views/20150812-hk-legco-analysis.html',
          controller: 'BlogCtrl'
        })
        .when('/blog-hans', {
          templateUrl: 'views/20150812-hk-legco-analysis-hans.html',
          controller: 'BlogCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        // Following are old entries
        .when('/play', {
          templateUrl: 'views/play.html',
          controller: 'PlayCtrl'
        })
        .when('/div', {
          templateUrl: 'views/div.html',
          controller: 'DivCtrl'
        })
        .when('/main', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/20150812-hk-legco-analysis', {
          templateUrl: 'views/20150812-hk-legco-analysis.html',
          controller: 'BlogCtrl'
        })
        .when('/20150812-hk-legco-analysis-hans', {
          templateUrl: 'views/20150812-hk-legco-analysis-hans.html',
          controller: 'BlogCtrl'
        })
        .otherwise({
          redirectTo: '/'
        })

      var html5Mode = $('meta[name="html5Mode"]').first().attr('content')
      html5Mode = {
        'true': true,
        'false': false
      }[html5Mode]
      console.log('html5Mode: ' + html5Mode)
      $locationProvider.html5Mode(html5Mode)
    })
}())
