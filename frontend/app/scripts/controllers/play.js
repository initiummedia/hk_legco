'use strict'

/**
 * @ngdoc function
 * @name frontendApp.controller:PlayCtrl
 * @description
 * # PlayCtrl
 * Controller of the frontendApp
 */
;(function () {
  angular.module('frontendApp')
    .controller('PlayCtrl', ['$scope', '$http', function ($scope, $http) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ]

      $scope.myPromise1 = $http.get('https://spreadsheets.google.com/feeds/list/1s2CkDX0sMaZHzHjl_hbJs8DkyUAca08enU1te3aEPUU/od6/public/values?alt=json')
      $scope.myPromise2 = $http.get('/api/mv-relation.json')
      $scope.myPromise3 = $http.get('/api/transdict-mover.json')
      $scope.myPromise4 = $http.get('/api/transdict-voter.json')

    }])

}())
