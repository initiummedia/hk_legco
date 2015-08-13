'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('AboutCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log($location.path());

    $scope.projects = [
      //{
      //  name: 'name',
      //  author: 'author',
      //  status: 'status',
      //  outcome: 'coutcome',
      //  link: 'link'
      //}
      {
        name: 'legcowatch',
        author: 'Fuk Chan',
        status: 'Active',
        outcome: 'Parser, DB',
        language: 'Python',
        link: 'https://github.com/chainsawriot/legcowatch'
      },
      {
        name: 'R-hklegcovote',
        author: 'Stephen Wong',
        status: '',
        outcome: '2D Plot',
        language: 'R',
        link: 'https://github.com/yellowcandle/R-hklegcovote'
      },
      {
        name: 'Legco Spectrum',
        author: 'Pili Hu',
        status: 'Published, Inactive',
        outcome: 'Spectrum',
        language: 'Python',
        link: 'https://github.com/code4hk/legcohk'
      },
      {
        name: 'Legco Watch',
        author: 'Han Xu',
        status: 'Inactive',
        outcome: 'Parser, API',
        language: 'Python',
        link: 'https://github.com/legco-watch/legco-watch'
      },
      {
        name: 'Legco Scraper',
        author: 'Ken Yiu',
        status: 'Inactive',
        outcome: 'Scraper',
        data: ['Member Profile'],
        language: 'Ruby',
        link: 'https://github.com/kenyiu/Legco-Scraper'
      },
      {
        name: 'Legco Hansard Parser',
        author: 'Siu Ying',
        status: 'Inactive',
        outcome: 'Parser, API, Frontend',
        data: ['Hansard'],
        language: 'Ruby',
        link: 'https://github.com/siuying/legco-hansard-parser'
      },
    ];
  }]);

