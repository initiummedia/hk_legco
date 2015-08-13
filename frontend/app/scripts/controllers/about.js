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
        link: {
          'GitHub': 'https://github.com/chainsawriot/legcowatch'
        }
      },
      {
        name: 'R-hklegcovote',
        author: 'Stephen Wong',
        status: '',
        outcome: '2D Plot',
        language: 'R',
        link: {
          'GitHub': 'https://github.com/yellowcandle/R-hklegcovote'
        }
      },
      {
        name: 'Legco Spectrum',
        author: 'Pili Hu',
        status: 'Published, Inactive',
        outcome: 'Spectrum',
        language: 'Python',
        link: {
          'Blog': 'http://blog.code4.hk/open%20data/2014/04/26/legco-votes-analysis/',
          'GitHub': 'https://github.com/code4hk/legcohk'
        }
      },
      {
        name: 'Legco Watch',
        author: 'Han Xu',
        status: 'Inactive',
        outcome: 'Parser, API',
        language: 'Python',
        link: {
          'GitHub': 'https://github.com/legco-watch/legco-watch'
        }
      },
      {
        name: 'Legco Scraper',
        author: 'Ken Yiu',
        status: 'Inactive',
        outcome: 'Scraper',
        data: ['Member Profile'],
        language: 'Ruby',
        link: {
          'GitHub': 'https://github.com/kenyiu/Legco-Scraper'
        }
      },
      {
        name: 'Legco Hansard Parser',
        author: 'Siu Ying',
        status: 'Inactive',
        outcome: 'Parser, API, Frontend',
        data: ['Hansard'],
        language: 'Ruby',
        link: {
          'GitHub': 'https://github.com/siuying/legco-hansard-parser'
        }
      },
      {
        name: '立法會重要表決記錄',
        author: 'author',
        status: 'Active',
        outcome: 'Website',
        data: ['Hansard', 'Vote'],
        language: '',
        link: {
          'Website': 'www.legcovotes.net/'
        }
      },
    ];
  }]);

