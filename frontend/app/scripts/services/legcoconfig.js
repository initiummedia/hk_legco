'use strict'

/**
 * @ngdoc service
 * @name frontendApp.LegcoConfig
 * @description
 * # LegcoConfig
 * Service in the frontendApp.
 */
;(function () {
  angular.module('frontendApp')
    .service('LegcoConfig', function () {
      // AngularJS will instantiate a singleton by calling "new" on this function
      var config = {
        getBaseURL: function () {
          var baseURL = $('base').first().attr('href')
          return baseURL
        },
        getApiBaseURL: function () {
          var baseURL = config.getBaseURL()
          return baseURL + 'api/'
        },
        getPathScheme: function () {
          var pathScheme = $('meta[name="pathScheme"]').first().attr('content')
          return pathScheme
        },
        getRealPath: function (path) {
          var baseURL = config.getBaseURL()
          var pathScheme = config.getPathScheme()
          // console.log('pathScheme: ' + pathScheme)
          // console.log('baseURL: ' + baseURL)
          var rp = baseURL + pathScheme + path
          if (rp === '//') {
            rp = '/'
          }
          return rp
        }
      }
      return config
    })
}())
