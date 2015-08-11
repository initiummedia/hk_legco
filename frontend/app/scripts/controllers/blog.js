'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')

  .controller('BlogCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.urlToThisPage = $location.absUrl();

    // Detect whether the document is simplified
    var legcoWeb = {
      videoURL: 'https://www.youtube.com/watch?v=PIgbvFyOnwA' //FIXME
    };

    legcoWeb.generalTitle = document.getElementById('generalTitle');
    if (generalTitle.innerText === '廿一世紀立會網絡') {
      legcoWeb.lang = 'hant';
      legcoWeb.title = "廿一世紀立會網絡";
      legcoWeb.description = "端傳媒數據報道：香港第五屆立法會投票分析";
      legcoWeb.url = 'http://legco.initiumlab.com/#/20150812-hk-legco-analysis';
    } else {
      legcoWeb.lang = 'hans';
      legcoWeb.title = "廿一世纪立会网络";
      legcoWeb.description = "端传媒数据报道：香港第五届立法会投票分析";
      legcoWeb.url = 'http://legco.initiumlab.com/#/20150812-hk-legco-analysis-hans';
    }

    //DEBUG
    legcoWeb.url = 'http://968c55c6.ngrok.io/';

    legcoWeb.setUUID = function() {

      // If localStorage contains an existing UUID, use it as the UUID of the app.
      // Otherwise, get a UUID from server.

      "use strict";
      if (localStorage.getItem('uuid')) {
        this.uuid = localStorage.getItem('uuid');
      } else {
        var url = 'http://s.init.im:8081/utility/uuid/';
        var uuid = 'LocalDefault'+Math.random().toString(); // In case UUID server fails
        this.uuid = uuid;
        localStorage.setItem('uuid', uuid);

        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function () {
          console.log('UUID server responded');
          if (request.status >= 200 && request.status < 400) {
            var response = JSON.parse(request.responseText);
            if (response.success) {
              uuid = response.data.uuid;
            }
          }
          this.uuid = uuid;
          localStorage.setItem('uuid', uuid);
        }.bind(this);
        request.send();
      }
    };

    function post(keyToPost, valueToPost) {
      "use strict";
      var url = "http://s.init.im:8081/remember/legcoweb/";
      var request = new XMLHttpRequest();
      var message = {
        username: legcoWeb.uuid,
        key: keyToPost,
        value: valueToPost,
        raw: '',
        datetime: Date.now()
      };

      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      var jsonString = JSON.stringify(message);
      request.send(jsonString);
      console.log('tried to post '+jsonString);
    }

    function shareToFacebook(urlForSharing) {

      return function() {
        var description = encodeURIComponent(legcoWeb.description),
          url = encodeURIComponent(urlForSharing),
          title = encodeURIComponent(legcoWeb.title);

        window.open('https://www.facebook.com/dialog/feed?app_id=1485405728425484' +
          '&link=' + url +
            //'&picture=' + legcoWeb.url + legcoWeb.shareImgRelativePath +
          '&name=' + title +
          '&description=' + description +
          '&redirect_uri=' + url
        );
        post('share', 'facebook');
      }
    }

    function shareToWeibo(urlForSharing) {
      return function () {
        var url = encodeURIComponent(urlForSharing),
          title = encodeURIComponent('分享：' + legcoWeb.title);
        window.open('http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url);
        post('share', 'weibo');
      }
    }

    function shareToTwitter (urlForSharing) {
      return function () {
        var url = encodeURIComponent(urlForSharing),
          title = encodeURIComponent('Share: ' + legcoWeb.title);
        window.open('https://twitter.com/intent/tweet?text=' + title + url);
        post('share', 'twitter');
      }
    }

    function shareVideoToWeChat() {
      var divQRCode = document.getElementById('divVideoQRCode');
      divQRCode.style.display = 'block';
    }

    function shareArticleToWeChat() {
      var divQRCode = document.getElementById('divArticleQRCode');
      divQRCode.style.display = 'block';
    }

    document.getElementById('shareVideoToFacebookAnchor').addEventListener('click',
      shareToFacebook(legcoWeb.videoURL),
      false);
    document.getElementById('shareVideoToWeiboAnchor').addEventListener('click',
      shareToWeibo(legcoWeb.videoURL),
      false);
    document.getElementById('shareVideoToTwitterAnchor').addEventListener('click',
      shareToTwitter(legcoWeb.videoURL),
      false);
    document.getElementById('shareVideoToWeChatAnchor').addEventListener('click',
      shareVideoToWeChat,
      false);

    document.getElementById('btnCloseWeChatVideoSharePopup').addEventListener('click',
    function(){
      document.getElementById('divVideoQRCode').style.display = 'none';
    }, false);

    document.getElementById('shareArticleToFacebookAnchor').addEventListener('click',
      shareToFacebook($scope.urlToThisPage),
      false);
    document.getElementById('shareArticleToWeiboAnchor').addEventListener('click',
      shareToWeibo($scope.urlToThisPage),
      false);
    document.getElementById('shareArticleToTwitterAnchor').addEventListener('click',
      shareToTwitter($scope.urlToThisPage),
      false);
    document.getElementById('shareArticleToWeChatAnchor').addEventListener('click',
      shareArticleToWeChat,
      false);

    document.getElementById('btnCloseWeChatArticleSharePopup').addEventListener('click',
      function(){
        document.getElementById('divArticleQRCode').style.display = 'none';
      }, false);
    // Logic
    post('render', legcoWeb.lang+'-rendered');
    legcoWeb.setUUID();

    // Enable click-to-play for videos
    var video = document.getElementById('introVideo');
    video.addEventListener('click', function(){
      this.paused?this.play():this.pause();
    }, false);

  });
