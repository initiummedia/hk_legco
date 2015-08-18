'use strict'

/**
 * @ngdoc function
 * @name frontendApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the frontendApp
 */
;(function () {
  var angular = window.angular
  var localStorage = window.localStorage
  var XMLHttpRequest = window.XMLHttpRequest
  angular.module('frontendApp')

    .controller('BlogCtrl', function ($scope, $location) {
      $scope.urlToThisPage = $location.absUrl()

      // Detect whether the document is simplified
      var legcoWeb = {
        videoURL: 'https://www.youtube.com/watch?v=PIgbvFyOnwA' // FIXME
      }

      legcoWeb.generalTitle = document.getElementById('generalTitle') || {}
      console.log(legcoWeb.generalTitle.innerText)
      if (legcoWeb.generalTitle.innerHTML === '廿一世紀立會網絡') {
        legcoWeb.lang = 'hant'
        legcoWeb.title = '廿一世紀立會網絡'
        legcoWeb.description = '端傳媒「一圖看懂香港立法會」，泛民制一目了然。有人不提案，也有人投自己反對票。漲知識啊'
        legcoWeb.url = 'http://legco.initiumlab.com/20150812-hk-legco-analysis'
      } else {
        legcoWeb.lang = 'hans'
        legcoWeb.title = '廿一世纪立会网络'
        legcoWeb.description = '端传媒「一图看懂香港立法会」，泛民制一目了然。有人不提桉，也有人投自己反对票。涨知识啊'
        legcoWeb.url = 'http://legco.initiumlab.com/20150812-hk-legco-analysis-hans'
      }

      legcoWeb.setUUID = function () {
        // If localStorage contains an existing UUID, use it as the UUID of the app.
        // Otherwise, get a UUID from server.

        'use strict'
        // Refer to the object on which this method is being called
        // Store the variable here for later use
        var me = this
        if (localStorage.getItem('uuid')) {
          me.uuid = localStorage.getItem('uuid')
        } else {
          var url = 'http://s.init.im:8081/utility/uuid/'
          var uuid = 'LocalDefault' + Math.random().toString() // In case UUID server fails
          me.uuid = uuid
          localStorage.setItem('uuid', uuid)

          var request = new XMLHttpRequest()
          request.open('GET', url, true)
          request.onload = function () {
            console.log('UUID server responded')
            if (request.status >= 200 && request.status < 400) {
              var response = JSON.parse(request.responseText)
              if (response.success) {
                uuid = response.data.uuid
              }
            }
            // Use closure here to refer to the object in async function
            me.uuid = uuid
            localStorage.setItem('uuid', uuid)
          }
          request.send()
        }
      }

      function post (keyToPost, valueToPost) {
        'use strict'
        var url = 'http://s.init.im:8081/remember/legcoweb/'
        var request = new XMLHttpRequest()
        var message = {
          username: legcoWeb.uuid,
          key: keyToPost,
          value: valueToPost,
          raw: '',
          datetime: Date.now()
        }

        request.open('POST', url, true)
        request.setRequestHeader('Content-Type', 'application/json charset=UTF-8')
        var jsonString = JSON.stringify(message)
        request.send(jsonString)
        console.log('tried to post ' + jsonString)
      }

      function shareToFacebook (urlForSharing) {
        return function () {
          var description = encodeURIComponent(legcoWeb.description),
            url = encodeURIComponent(urlForSharing),
            title = encodeURIComponent(legcoWeb.title)

          window.open('https://www.facebook.com/dialog/feed?app_id=1485405728425484' +
            '&link=' + url +
            // '&picture=' + legcoWeb.url + legcoWeb.shareImgRelativePath +
            '&name=' + title +
            '&description=' + description +
            '&redirect_uri=' + url
          )
          post('share', 'facebook')
        }
      }

      function shareToWeibo (urlForSharing) {
        return function () {
          var url = encodeURIComponent(urlForSharing)
          // var title = encodeURIComponent('分享：' + legcoWeb.title)
          var description = encodeURIComponent(legcoWeb.description)
          window.open('http://service.weibo.com/share/share.php?title=' + description + '&url=' + url)
          post('share', 'weibo')
        }
      }

      function shareToTwitter (urlForSharing) {
        return function () {
          var url = encodeURIComponent(urlForSharing)
          // var title = encodeURIComponent('Share: ' + legcoWeb.title)
          var description = encodeURIComponent(legcoWeb.description)
          window.open('https://twitter.com/intent/tweet?text=' + description + url)
          post('share', 'twitter')
        }
      }

      function shareVideoToWeChat () {
        var divQRCode = document.getElementById('divVideoQRCode')
        divQRCode.style.display = 'block'
        post('share', 'wechat')
      }

      function shareArticleToWeChat () {
        var divQRCode = document.getElementById('divArticleQRCode')
        divQRCode.style.display = 'block'
        post('share', 'wechat')
      }

      var safeGetElementById = function (id) {
        var dummyElement = document.createElement('p')
        var myElement = document.getElementById('shareVideoToFacebookAnchor')
        if (myElement) {
          return myElement
        } else {
          return dummyElement
        }
      }

      safeGetElementById('shareVideoToFacebookAnchor').addEventListener('click',
        shareToFacebook(legcoWeb.videoURL),
        false)
      safeGetElementById('shareVideoToWeiboAnchor').addEventListener('click',
        shareToWeibo(legcoWeb.videoURL),
        false)
      safeGetElementById('shareVideoToTwitterAnchor').addEventListener('click',
        shareToTwitter(legcoWeb.videoURL),
        false)
      safeGetElementById('shareVideoToWeChatAnchor').addEventListener('click',
        shareVideoToWeChat,
        false)

      safeGetElementById('btnCloseWeChatVideoSharePopup').addEventListener('click',
        function () {
          document.getElementById('divVideoQRCode').style.display = 'none'
        }, false)

      safeGetElementById('shareArticleToFacebookAnchor').addEventListener('click',
        shareToFacebook($scope.urlToThisPage),
        false)
      safeGetElementById('shareArticleToWeiboAnchor').addEventListener('click',
        shareToWeibo($scope.urlToThisPage),
        false)
      safeGetElementById('shareArticleToTwitterAnchor').addEventListener('click',
        shareToTwitter($scope.urlToThisPage),
        false)
      safeGetElementById('shareArticleToWeChatAnchor').addEventListener('click',
        shareArticleToWeChat,
        false)

      safeGetElementById('btnCloseWeChatArticleSharePopup').addEventListener('click',
        function () {
          document.getElementById('divArticleQRCode').style.display = 'none'
        }, false)
      // Logic
      legcoWeb.setUUID()
      post('render', legcoWeb.lang + '-rendered')

      // Enable click-to-play for videos
      var video = safeGetElementById('introVideo')
      video.addEventListener('click', function () {
        this.paused ? this.play() : this.pause()
        post('video', 'clicked')
      }, false)

    })
}())
