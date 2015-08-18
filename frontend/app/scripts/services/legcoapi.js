'use strict'

/**
 * @ngdoc service
 * @name frontendApp.LegcoApi
 * @description
 * # LegcoApi
 * Service in the frontendApp.
 */
;(function () {
  var angular = window.angular
  // var $ = window.$
  angular.module('frontendApp')
    .service('LegcoApi', function ($http, LegcoConfig) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      var apiBaseURL = LegcoConfig.getApiBaseURL()
      console.log(apiBaseURL)
      var api = {
        getApiBaseURL: function () {
          return apiBaseURL
        },
        logMsgCallback: function (callback, msg) {
          if (callback) {
            return callback
          } else {
            return function () {
              console.log(msg)
            }
          }
        },
        get: function (path, success, error) {
          success = api.logMsgCallback(success, 'Get success: ' + success)
          error = api.logMsgCallback(error, 'Get error:' + error)
          $http.get(api.getApiBaseURL() + path).success(success).error(error)
        },
        post: function (path, success, error) {
          success = api.logMsgCallback(success, 'Post success: ' + success)
          error = api.logMsgCallback(error, 'Post error:' + error)
          $http.get(api.getApiBaseURL() + path).success(success).error(error)
        }
      }
      return api
    })
}())
