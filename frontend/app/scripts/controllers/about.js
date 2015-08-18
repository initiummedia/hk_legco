'use strict'

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
;(function () {
  angular.module('frontendApp')
    .controller('AboutCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ]
      console.log($location.path())

      var url = 'api/hk-legco-pointers/hk-legco-pointers.json'
      $http.get(url).success(function (data) {
        console.log('Get projects success')
        $scope.projects = data
      }).error(function () {
        console.log('Get projects error')
      })

    }])

}())
