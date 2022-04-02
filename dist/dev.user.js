// ==UserScript==
// @name        rollup-userscript-template [dev]
// @description Bundle typescript, react and JSX/TSX script files into a single userscript file with rollup
// @namespace   github.com/placePL
// @require     https://www.unpkg.com/socket.io@4.4.1/client-dist/socket.io.min.js
// @require     https://cdn.jsdelivr.net/npm/toastify-js
// @include     https://new.reddit.com/r/place/*
// @include     https://www.reddit.com/r/place*
// @resource    TOASTIFY_CSS https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css
// @version     1.2.2
// @homepage    https://github.com/cvzi/rollup-userscript-template
// @author      cuzi
// @license     MIT
// @grant       GM.getValue
// @grant       GM.getResourceText
// @grant       GM.addStyle
// @grant       GM.xmlHttpRequest
// @grant       GM.setValue
// ==/UserScript==
/*  globals GM */

'use strict';

(function () {
  const url = `http://localhost:8124/bundle.user.js?${Date.now()}`
  new Promise(function loadBundleFromServer (resolve, reject) {
    const req = GM.xmlHttpRequest({
      method: 'GET',
      url: url,
      onload: function (r) {
        if (r.status !== 200) {
          return reject(r)
        }
        resolve(r.responseText)
      },
      onerror: e => reject(e)
    })
    if (req && 'catch' in req) {
      req.catch(e => { /* ignore */ })
    }
  }).catch(function (e) {
    const log = function (obj, b) {
      let prefix = 'loadBundleFromServer: '
      try {
        prefix = GM.info.script.name + ': '
      } catch (e) {}
      if (b) {
        console.log(prefix + obj, b)
      } else {
        console.log(prefix, obj)
      }
    }
    if (e && 'status' in e) {
      if (e.status <= 0) {
        log('Server is not responding')
        GM.getValue('scriptlastsource3948218', false).then(function (src) {
          if (src) {
            log('%cExecuting cached script version', 'color: Crimson; font-size:x-large;')
            /* eslint-disable no-eval */
            eval(src)
          }
        })
      } else {
        log('HTTP status: ' + e.status)
      }
    } else {
      log(e)
    }
  }).then(function (s) {
    if (s) {
      /* eslint-disable no-eval */
      eval(`${s}
//# sourceURL=${url}`)
      GM.setValue('scriptlastsource3948218', s)
    }
  })
})()