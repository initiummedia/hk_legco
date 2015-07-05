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
        'question': '你知道立法會中的提案獲得支持票總數最高是哪位議員嗎？',
        'choices': ['梁振英', '梁國雄', '梁家傑', '梁家騮', '梁美芬'],
        'answerindex': 1,
        'explanation': '梁國雄獲得了約2000張支持票，在70位議員中最高，但他自己提出了一千多個議案，所以大部分支持票都是自己給自己投的。'
      },
      {
        'question': '本屆立法會曾有議員投票反對自己的議案，猜猜是哪一位？',
        'choices': ['葉劉淑儀', '李慧琼', '黃毓民', '曾鈺成', '劉皇發'],
        'answerindex': 1,
        'explanation': '李慧琼曾任財政預算案修正案的委員會主席，此委員會泛民居多，委員會內部通過的修正案李慧琼並不贊成，但是作為委員會主席她需要以主席身份向大會提交修正案。之後她又以民建聯成員身份對此提案投反對票。'
      },
      {
        'question': '有一位建制派議員，提出的議案受泛民支持多於建制派支持，這又是哪一位？',
        'choices': ['陳婉嫻', '譚耀宗', '葛珮帆', '王國興', '潘兆平'],
        'answerindex': 4,
        'explanation': '潘兆平提出的多為民生議題，受許多泛民議員的歡迎。'
      },
    ];
  });
