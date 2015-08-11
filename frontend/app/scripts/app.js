'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngDialog',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/quiz.html',
        controller: 'QuizCtrl'
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
        //templateUrl: 'views/blog.html',
        templateUrl: 'views/20150812-hk-legco-analysis.html',
        controller: 'BlogCtrl'
      })
      .when('/blog_hans', {
        //templateUrl: 'views/blog.html',
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
      });
  });
