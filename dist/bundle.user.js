// ==UserScript==
// @name        rollup-userscript-template
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
// ==/UserScript==

/*
MIT License

Copyright (c) 2020 cvzi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/* globals React, ReactDOM */
(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    var toastify = {exports: {}};

    /*!
     * Toastify js 1.11.2
     * https://github.com/apvarun/toastify-js
     * @license MIT licensed
     *
     * Copyright (C) 2018 Varun A P
     */

    (function (module) {
      (function (root, factory) {
        if (module.exports) {
          module.exports = factory();
        } else {
          root.Toastify = factory();
        }
      })(commonjsGlobal, function (global) {
        // Object initialization
        var Toastify = function (options) {
          // Returning a new init object
          return new Toastify.lib.init(options);
        },
            // Library version
        version = "1.11.2"; // Set the default global options


        Toastify.defaults = {
          oldestFirst: true,
          text: "Toastify is awesome!",
          node: undefined,
          duration: 3000,
          selector: undefined,
          callback: function () {},
          destination: undefined,
          newWindow: false,
          close: false,
          gravity: "toastify-top",
          positionLeft: false,
          position: '',
          backgroundColor: '',
          avatar: "",
          className: "",
          stopOnFocus: true,
          onClick: function () {},
          offset: {
            x: 0,
            y: 0
          },
          escapeMarkup: true,
          style: {
            background: ''
          }
        }; // Defining the prototype of the object

        Toastify.lib = Toastify.prototype = {
          toastify: version,
          constructor: Toastify,
          // Initializing the object with required parameters
          init: function (options) {
            // Verifying and validating the input object
            if (!options) {
              options = {};
            } // Creating the options object


            this.options = {};
            this.toastElement = null; // Validating the options

            this.options.text = options.text || Toastify.defaults.text; // Display message

            this.options.node = options.node || Toastify.defaults.node; // Display content as node

            this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration

            this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector

            this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display

            this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination

            this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window

            this.options.close = options.close || Toastify.defaults.close; // Show toast close icon

            this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom

            this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right

            this.options.position = options.position || Toastify.defaults.position; // toast position - left or right

            this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color

            this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path

            this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast

            this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus

            this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click

            this.options.offset = options.offset || Toastify.defaults.offset; // toast offset

            this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
            this.options.style = options.style || Toastify.defaults.style;

            if (options.backgroundColor) {
              this.options.style.background = options.backgroundColor;
            } // Returning the current object for chaining functions


            return this;
          },
          // Building the DOM element
          buildToast: function () {
            // Validating if the options are defined
            if (!this.options) {
              throw "Toastify is not initialized";
            } // Creating the DOM object


            var divElement = document.createElement("div");
            divElement.className = "toastify on " + this.options.className; // Positioning toast to left or right or center

            if (!!this.options.position) {
              divElement.className += " toastify-" + this.options.position;
            } else {
              // To be depreciated in further versions
              if (this.options.positionLeft === true) {
                divElement.className += " toastify-left";
                console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.');
              } else {
                // Default position
                divElement.className += " toastify-right";
              }
            } // Assigning gravity of element


            divElement.className += " " + this.options.gravity;

            if (this.options.backgroundColor) {
              // This is being deprecated in favor of using the style HTML DOM property
              console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
            } // Loop through our style object and apply styles to divElement


            for (var property in this.options.style) {
              divElement.style[property] = this.options.style[property];
            } // Adding the toast message/node


            if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
              // If we have a valid node, we insert it
              divElement.appendChild(this.options.node);
            } else {
              if (this.options.escapeMarkup) {
                divElement.innerText = this.options.text;
              } else {
                divElement.innerHTML = this.options.text;
              }

              if (this.options.avatar !== "") {
                var avatarElement = document.createElement("img");
                avatarElement.src = this.options.avatar;
                avatarElement.className = "toastify-avatar";

                if (this.options.position == "left" || this.options.positionLeft === true) {
                  // Adding close icon on the left of content
                  divElement.appendChild(avatarElement);
                } else {
                  // Adding close icon on the right of content
                  divElement.insertAdjacentElement("afterbegin", avatarElement);
                }
              }
            } // Adding a close icon to the toast


            if (this.options.close === true) {
              // Create a span for close element
              var closeElement = document.createElement("span");
              closeElement.innerHTML = "&#10006;";
              closeElement.className = "toast-close"; // Triggering the removal of toast from DOM on close click

              closeElement.addEventListener("click", function (event) {
                event.stopPropagation();
                this.removeElement(this.toastElement);
                window.clearTimeout(this.toastElement.timeOutValue);
              }.bind(this)); //Calculating screen width

              var width = window.innerWidth > 0 ? window.innerWidth : screen.width; // Adding the close icon to the toast element
              // Display on the right if screen width is less than or equal to 360px

              if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
                // Adding close icon on the left of content
                divElement.insertAdjacentElement("afterbegin", closeElement);
              } else {
                // Adding close icon on the right of content
                divElement.appendChild(closeElement);
              }
            } // Clear timeout while toast is focused


            if (this.options.stopOnFocus && this.options.duration > 0) {
              var self = this; // stop countdown

              divElement.addEventListener("mouseover", function (event) {
                window.clearTimeout(divElement.timeOutValue);
              }); // add back the timeout

              divElement.addEventListener("mouseleave", function () {
                divElement.timeOutValue = window.setTimeout(function () {
                  // Remove the toast from DOM
                  self.removeElement(divElement);
                }, self.options.duration);
              });
            } // Adding an on-click destination path


            if (typeof this.options.destination !== "undefined") {
              divElement.addEventListener("click", function (event) {
                event.stopPropagation();

                if (this.options.newWindow === true) {
                  window.open(this.options.destination, "_blank");
                } else {
                  window.location = this.options.destination;
                }
              }.bind(this));
            }

            if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
              divElement.addEventListener("click", function (event) {
                event.stopPropagation();
                this.options.onClick();
              }.bind(this));
            } // Adding offset


            if (typeof this.options.offset === "object") {
              var x = getAxisOffsetAValue("x", this.options);
              var y = getAxisOffsetAValue("y", this.options);
              var xOffset = this.options.position == "left" ? x : "-" + x;
              var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;
              divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";
            } // Returning the generated element


            return divElement;
          },
          // Displaying the toast
          showToast: function () {
            // Creating the DOM object for the toast
            this.toastElement = this.buildToast(); // Getting the root element to with the toast needs to be added

            var rootElement;

            if (typeof this.options.selector === "string") {
              rootElement = document.getElementById(this.options.selector);
            } else if (this.options.selector instanceof HTMLElement || typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot) {
              rootElement = this.options.selector;
            } else {
              rootElement = document.body;
            } // Validating if root element is present in DOM


            if (!rootElement) {
              throw "Root element is not defined";
            } // Adding the DOM element


            var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
            rootElement.insertBefore(this.toastElement, elementToInsert); // Repositioning the toasts in case multiple toasts are present

            Toastify.reposition();

            if (this.options.duration > 0) {
              this.toastElement.timeOutValue = window.setTimeout(function () {
                // Remove the toast from DOM
                this.removeElement(this.toastElement);
              }.bind(this), this.options.duration); // Binding `this` for function invocation
            } // Supporting function chaining


            return this;
          },
          hideToast: function () {
            if (this.toastElement.timeOutValue) {
              clearTimeout(this.toastElement.timeOutValue);
            }

            this.removeElement(this.toastElement);
          },
          // Removing the element from the DOM
          removeElement: function (toastElement) {
            // Hiding the element
            // toastElement.classList.remove("on");
            toastElement.className = toastElement.className.replace(" on", ""); // Removing the element from DOM after transition end

            window.setTimeout(function () {
              // remove options node if any
              if (this.options.node && this.options.node.parentNode) {
                this.options.node.parentNode.removeChild(this.options.node);
              } // Remove the element from the DOM, only when the parent node was not removed before.


              if (toastElement.parentNode) {
                toastElement.parentNode.removeChild(toastElement);
              } // Calling the callback function


              this.options.callback.call(toastElement); // Repositioning the toasts again

              Toastify.reposition();
            }.bind(this), 400); // Binding `this` for function invocation
          }
        }; // Positioning the toasts on the DOM

        Toastify.reposition = function () {
          // Top margins with gravity
          var topLeftOffsetSize = {
            top: 15,
            bottom: 15
          };
          var topRightOffsetSize = {
            top: 15,
            bottom: 15
          };
          var offsetSize = {
            top: 15,
            bottom: 15
          }; // Get all toast messages on the DOM

          var allToasts = document.getElementsByClassName("toastify");
          var classUsed; // Modifying the position of each toast element

          for (var i = 0; i < allToasts.length; i++) {
            // Getting the applied gravity
            if (containsClass(allToasts[i], "toastify-top") === true) {
              classUsed = "toastify-top";
            } else {
              classUsed = "toastify-bottom";
            }

            var height = allToasts[i].offsetHeight;
            classUsed = classUsed.substr(9, classUsed.length - 1); // Spacing between toasts

            var offset = 15;
            var width = window.innerWidth > 0 ? window.innerWidth : screen.width; // Show toast in center if screen with less than or equal to 360px

            if (width <= 360) {
              // Setting the position
              allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";
              offsetSize[classUsed] += height + offset;
            } else {
              if (containsClass(allToasts[i], "toastify-left") === true) {
                // Setting the position
                allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";
                topLeftOffsetSize[classUsed] += height + offset;
              } else {
                // Setting the position
                allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";
                topRightOffsetSize[classUsed] += height + offset;
              }
            }
          } // Supporting function chaining


          return this;
        }; // Helper function to get offset.


        function getAxisOffsetAValue(axis, options) {
          if (options.offset[axis]) {
            if (isNaN(options.offset[axis])) {
              return options.offset[axis];
            } else {
              return options.offset[axis] + 'px';
            }
          }

          return '0px';
        }

        function containsClass(elem, yourClass) {
          if (!elem || typeof yourClass !== "string") {
            return false;
          } else if (elem.className && elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1) {
            return true;
          } else {
            return false;
          }
        } // Setting up the prototype for the init object


        Toastify.lib.init.prototype = Toastify.lib; // Returning the Toastify function to be assigned to the window object/module

        return Toastify;
      });
    })(toastify);

    var Toastify$1 = toastify.exports;

    function place(x, y, color) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, fetch('https://gql-realtime-2.reddit.com/query', {
                            method: 'POST',
                            body: JSON.stringify({
                                'operationName': 'setPixel',
                                'variables': {
                                    'input': {
                                        'actionName': 'r/replace:set_pixel',
                                        'PixelMessageData': {
                                            'coordinate': {
                                                'x': x,
                                                'y': y
                                            },
                                            'colorIndex': color,
                                            'canvasIndex': 0
                                        }
                                    }
                                },
                                'query': "mutation setPixel($input: ActInput!) {\n\t\t\t\tact(input: $input) {\n\t\t\t\t\tdata {\n\t\t\t\t\t\t... on BasicMessage {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\t\t... on GetUserCooldownResponseMessageData {\n\t\t\t\t\t\t\t\t\tnextAvailablePixelTimestamp\n\t\t\t\t\t\t\t\t\t__typename\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t... on SetPixelResponseMessageData {\n\t\t\t\t\t\t\t\t\ttimestamp\n\t\t\t\t\t\t\t\t\t__typename\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t__typename\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t__typename\n\t\t\t\t\t\t}\n\t\t\t\t\t\t__typename\n\t\t\t\t\t}\n\t\t\t\t\t__typename\n\t\t\t\t}\n\t\t\t}\n\t\t\t"
                            }),
                            headers: {
                                'origin': 'https://hot-potato.reddit.com',
                                'referer': 'https://hot-potato.reddit.com/',
                                'apollographql-client-name': 'mona-lisa',
                                'Authorization': "Bearer ".concat(window.accessToken),
                                'Content-Type': 'application/json'
                            }
                        })];
                    case 1:
                        response = _g.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _g.sent();
                        if (data.errors != undefined) {
                            Toastify$1({
                                text: 'Nie można jeszcze narysować',
                                duration: 10000
                            }).showToast();
                            return [2 /*return*/, (_a = data.errors[0].extensions) === null || _a === void 0 ? void 0 : _a.nextAvailablePixelTs];
                        }
                        return [2 /*return*/, (_f = (_e = (_d = (_c = (_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.act) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.nextAvailablePixelTimestamp];
                }
            });
        });
    }

    // import { io } from 'socket.io-client';
    function getAccessToken() {
        return __awaiter(this, void 0, void 0, function () {
            var usingOldReddit, url, response, responseText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usingOldReddit = window.location.href.includes('new.reddit.com');
                        url = usingOldReddit ? 'https://new.reddit.com/r/place/' : 'https://www.reddit.com/r/place/';
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        responseText = _a.sent();
                        return [2 /*return*/, responseText.split('\"accessToken\":\"')[1].split('"')[0]];
                }
            });
        });
    }
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, x, socket;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = window;
                        return [4 /*yield*/, getAccessToken()];
                    case 1:
                        _a.accessToken = _b.sent();
                        return [4 /*yield*/, GM.getResourceText('TOASTIFY_CSS')];
                    case 2:
                        x = _b.sent();
                        GM.addStyle(x);
                        Toastify({
                            text: 'Bot PlacePL aktywny!',
                            duration: 10000
                        }).showToast();
                        console.log('connecting...');
                        socket = io('http://localhost:3000', {
                            "transports": ["websocket"]
                        });
                        socket.on('connect', function () {
                            console.log('ok!');
                            socket.emit('ready');
                        });
                        socket.on('draw', function (_a) {
                            var x = _a.x, y = _a.y, color = _a.color;
                            return __awaiter(_this, void 0, void 0, function () {
                                var nextTs;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _b.trys.push([0, 2, , 3]);
                                            console.log('drawing: ', x, y, color);
                                            return [4 /*yield*/, place(x, y, color)];
                                        case 1:
                                            nextTs = _b.sent();
                                            socket.emit('ratelimitUpdate', nextTs);
                                            socket.emit('ready');
                                            return [3 /*break*/, 3];
                                        case 2:
                                            _b.sent();
                                            return [3 /*break*/, 3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    main().catch(console.error);

})();
//# sourceMappingURL=bundle.user.js.map
