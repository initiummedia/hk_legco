'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('QuizCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.quizes = [
      {
        'question': '你知道立法會中的提案獲得支持票總數醉得的是哪位議員嗎？',
        'choices': ['noname', 'Leung Kwok Hung', 'noname'],
        'answerIndex': 1,
        'explanation': 'LKH獲得了XXX張支持票，在70位議員中最高，但他自己提出了XXX個議案，所以大部分支持票來自自己的議案'
      },
      {
        'question': '你知道立法會中的提案獲得支持票總數醉得的是哪位議員嗎？',
        'choices': ['noname', 'Leung Kwok Hung', 'noname'],
        'answerIndex': 1,
        'explanation': 'LKH獲得了XXX張支持票，在70位議員中最高，但他自己提出了XXX個議案，所以大部分支持票來自自己的議案'
      }
    ];
  });
