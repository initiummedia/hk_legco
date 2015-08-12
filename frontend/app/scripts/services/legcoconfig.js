'use strict';

/**
 * @ngdoc service
 * @name frontendApp.LegcoConfig
 * @description
 * # LegcoConfig
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('LegcoConfig', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      getRealPath: function(path){
        var pathScheme = $('meta[name="pathScheme"]').first().attr('content');
        var baseURL = $('base').first().attr('href');
        //console.log('pathScheme: ' + pathScheme);
        //console.log('baseURL: ' + baseURL);
        var rp = baseURL + pathScheme + path;
        if (rp === '//') {
          rp = '/';
        }
        return rp;
      }
    }
  });
