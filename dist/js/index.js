!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=18)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),r=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(r).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];null!=a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var o,i,r,a={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),l=(r={},function(t,e){if("function"==typeof t)return t();if(void 0===r[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}r[t]=n}return r[t]}),c=null,u=0,p=[],d=n(3);function f(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=a[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(g(o.parts[r],e))}else{var s=[];for(r=0;r<o.parts.length;r++)s.push(g(o.parts[r],e));a[o.id]={id:o.id,refs:1,parts:s}}}}function m(t,e){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function h(t,e){var n=l(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=p[p.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),p.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=l(t.insertAt.before,n);n.insertBefore(e,i)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=p.indexOf(t);0<=e&&p.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=n.nc;o&&(t.attrs.nonce=o)}return w(e,t.attrs),h(t,e),e}function w(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,o,i,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var a=u++;n=c=c||v(e),o=_.bind(null,n,a,!1),i=_.bind(null,n,a,!0)}else i=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",w(e,t.attrs),h(t,e),e}(e),o=function(t,e,n){var o=n.css,i=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=d(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),o=function(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),function(){b(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=m(t,e);return f(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var r=n[i];(s=a[r.id]).refs--,o.push(s)}for(t&&f(m(t,e),e),i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete a[s.id]}}}};var y,x=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function _(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}},function(t,e,n){"use strict";t.exports={tplReplace:function(){return/{{(.*?)}}/g},thumbShow:function(t){t.on("load",function(){$(this).css("opacity",1)})},scrollToBottom:function(t){(function(){var t=0,e=0;return document.body&&(t=document.body.scrollTop),document.documentElement&&(e=document.documentElement.scrollTop),0<t-e?t:e})()+("CSS1Compat"==document.compatMode?document.documentElement.clientHeight:document.body.clientHeight)==function(){var t=0,e=0;return document.body&&(t=document.body.scrollHeight),document.documentElement&&(e=document.documentElement.scrollHeight),0<t-e?t:e}()&&t()},getUrlQueryValue:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?decodeURIComponent(n[2]):null}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(5));n(8);var i=r(n(2));function r(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return{name:"header",tpl:function(t){return(0,o.default)().replace(i.default.tplReplace(),function(e,n){return{title:t.title,showLeftIcon:!t.showLeftIcon&&"none",showRightIcon:!t.showRightIcon&&"none"}[n]})}}}},function(module,exports,__webpack_require__){module.exports=function(obj){obj=obj||{};var __t,__p="";with(obj)__p+='<header class="header">\n\t<div class="icon left">\n\t\t<a href="javascript:history.back(-1)">\n\t\t\t<img src="'+(null==(__t=__webpack_require__(6))?"":__t)+'" class="img-icon" style="display: {{showLeftIcon}}" />\n\t\t</a>\n\t</div>\n\t<div class="title">\n\t\t<h1>{{title}}</h1>\n\t</div>\n\t<div class="icon right">\n\t\t<a href="collections.html">\n\t\t\t<img src="'+(null==(__t=__webpack_require__(7))?"":__t)+'" class="img-icon" style="display: {{showRightIcon}}" />\n\t\t</a>\n\t</div>\n</header>';return __p}},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABFFBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+2eZYUAAAAW3RSTlMA1CWfCQ8c3RXKkKw5/uwuZ7nl9/JSAwdY/AH1+RLZS0U/4tACpr80l8X7DO8ZBbNf/SrwfunqeAghf26ktoJDqCR7fC9aeoZWeW3B85ipWYd3uLsti2i8ZilOJrWvGQAAAgdJREFUaN7V2udSAkEQBOAl55yDAkpQRJKAmHPOOdz7v4cozt75U6u6q9wX+Koorm975pT6xXFeX3peFfaML4zJ2cYi98bX2UEau1PDuAIajm/DGOAMvxgrXpixKoZxBDO62tiAGameGLcwo9wUYwFmBBNiBGBGJClGLI0y7GExFjMowx0XY34JZXg9YszOoAyXTYy5ZZSR8YkxXEMZ6ZgYrT7KyAfEKDTw4V6s4MM9V4IZ+2KEsjAjqsM9CjOyITHWYUYpRwj3ohg1Qrh3qvhwr7fx4e5z4sPd5sKHuwd2i3PqcI+7UUa7LkbYjjKqHTGSEdgDUhMjEcSHe7MMMwZi9FKEcO8Swv2OEO5+mFHR4e6AGY2Cbgd5lNFv4duBe4hvB2a449qBGe64dmCGO64dqBcxRnsw41mPMx5xM5NNfDsw+wHwDaJUSv9ch0BFV7aRHYdQ/sKUh5ETK9bbLy4grfd4XNRPGgnhpcV5/XIuEtYr0RlQYTR3pQ70DCIFVBgXbstcCBn85oQLWIJUmlDnOMWUU7E5wwLO2IMzwOGMoqwbkxrw0S8TxoOcQScr+I8Jw2fOGJ2zEOCsNihLGs66ibM446wAOctMzlr2x4L5/wd/kxH85ucLJ0CF8SGG9ZOSG6DypGMM+FCawX8KRHTwvyvk2ZpmmBOKjB8+r+FvCnzOB39qkx/F4zgal7fD7wAAAABJRU5ErkJggg=="},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAVFBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////+DS+nTAAAAG3RSTlMAYKDwECDvgEAwr9Cwv1/fcMBQn+BPz5CPb38/d4VgAAACLUlEQVRo3u3ZUXODIAwA4GpBQMWWaWs3/v//3MNwJysKCdHbA3ns9e4rGENIL5eTQ75ulihuowwSbLSk0bJ3Qz0tcTzV2zrIDWuff9dS2wOi9g1uDwnuIeIYRHiIWT6VJLH8ZuMhTXAT8eEeceN9GFxeRixLKUhBClKQf4Go1tpWHYtUP9+rjkSq5TSqjkPU75HXqKMQ1dhUBY2sjZiCRXwjoiCRv8a+gkNk897wNJIUkTrcV2lJhmwROwwUGfR+lxhkYMiQcC96DlmISrx63RQekemttUQjgCvkDY1AbgnqDIRjkS7dmM548BU+hQ1yISBEIjMY9sb3aYbJKisctxBg7UoaItSZBZJfwe8IotQLzEKgCIsu5cryD605hvQEJ2N0vwQBIoEV5RhEUnQrMYRRILH0Ium7DLBuoZAansFwRMAzGI58wDMYjih4BiMa7mm3chF19av9MvNdyvtsIruFuZ9IY23XC7k6N7gUfWft9FFmKwUpSEEKchrChpfWWuvx66gZJBva9XTgRT+58wXnfHJCJCS4AdEnI0G2BfeX+JB7P4kJznlkII/WJkYzPlDIY2xCHVAthBChoYuXbknIlrA0J/wedL54MhITXGM5T8F04wlImuCc+rqRbntICxBcdxl29A4SvH9UbL+eVX3iLQwrLE6HRtKEvXSLIRBhO932ELiwkW6bSHfnGWein25hJE94S7cAQiAsjgkjZMI63fxZNq3gnHm6nBffO/GEHLdXG+sAAAAASUVORK5CYII="},function(t,e,n){var o=n(9);"string"==typeof o&&(o=[[t.i,o,""]]);n(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 4.4rem;\n  background-color: #cf5f55; }\n  .header .title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n    color: #fff; }\n    .header .title h1 {\n      font-size: 1.8rem; }\n  .header .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: absolute;\n    top: 0;\n    width: 4.4rem;\n    height: 4.4rem; }\n    .header .icon.left {\n      left: 0; }\n      .header .icon.left a {\n        font-size: 0; }\n      .header .icon.left .img-icon {\n        width: 1.5rem;\n        height: 1.5rem; }\n    .header .icon.right {\n      right: 0; }\n      .header .icon.right .img-icon {\n        width: 2rem;\n        height: 2rem; }\n",""])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=l(n(11)),i=l(n(12)),r=l(n(13)),a=l(n(14));n(15);var s=l(n(2));function l(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return{name:"newsItem",tpl:function(t,e){var n="",l="";return t.forEach(function(t,c){t.thumbnail_pic_s?t.thumbnail_pic_s&&!t.thumbnail_pic_s02?l=(0,i.default)():t.thumbnail_pic_s02&&!t.thumbnail_pic_s03?l=(0,r.default)():t.thumbnail_pic_s03&&(l=(0,a.default)()):l=(0,o.default)(),n+=l.replace(s.default.tplReplace(),function(n,o){return{pageNum:e,index:c,uniquekey:t.uniquekey,url:t.url,author:t.author_name,date:t.date,thumbnail_pic_s:t.thumbnail_pic_s,thumbnail_pic_s02:t.thumbnail_pic_s02,thumbnail_pic_s03:t.thumbnail_pic_s03,title:t.title}[o]})}),n}}}},function(module,exports){module.exports=function(obj){obj=obj||{};var __t,__p="";with(obj)__p+='<div class="news-item type-0" data-url="{{url}}" data-page="{{pageNum}}" data-index="{{index}}" data-uniquekey="{{uniquekey}}">\n\t<h1>{{title}}</h1>\n\t<div class="info">\n\t\t<span class="author">{{author}}</span>\n\t\t<span class="date">{{date}}</span>\n\t</div>\n</div>';return __p}},function(module,exports){module.exports=function(obj){obj=obj||{};var __t,__p="";with(obj)__p+='<div class="news-item type-1" data-url="{{url}}" data-page="{{pageNum}}" data-index="{{index}}" data-uniquekey="{{uniquekey}}">\n\t<div class="main">\n\t\t<div class="title">\n\t\t\t<h1>{{title}}</h1>\n\t\t</div>\n\t\t<div class="pic">\n\t\t\t<img src="{{thumbnail_pic_s}}" class="news-thumb" alt="{{title}}" />\n\t\t</div>\n\t</div>\n\t<div class="info">\n\t\t<span class="author">{{author}}</span>\n\t\t<span class="date">{{date}}</span>\n\t</div>\n</div>';return __p}},function(module,exports){module.exports=function(obj){obj=obj||{};var __t,__p="";with(obj)__p+='<div class="news-item type-2" data-url="{{url}}" data-page="{{pageNum}}" data-index="{{index}}" data-uniquekey="{{uniquekey}}">\n\t<div class="main">\n\t\t<div class="title">\n\t\t\t<h1>{{title}}</h1>\n\t\t</div>\n\t\t<div class="pic">\n\t\t\t<div class="img">\n\t\t\t\t<img src="{{thumbnail_pic_s}}" class="news-thumb" alt="{{title}}" />\n\t\t\t</div>\n\t\t\t<div class="img last">\n\t\t\t\t<img src="{{thumbnail_pic_s02}}" class="news-thumb" alt="{{title}}" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="info">\n\t\t<span class="author">{{author}}</span>\n\t\t<span class="date">{{date}}</span>\n\t</div>\n</div>';return __p}},function(module,exports){module.exports=function(obj){obj=obj||{};var __t,__p="";with(obj)__p+='<div class="news-item type-3" data-url="{{url}}" data-page="{{pageNum}}" data-index="{{index}}" data-uniquekey="{{uniquekey}}">\n\t<div class="main">\n\t\t<div class="title">\n\t\t\t<h1>{{title}}</h1>\n\t\t</div>\n\t\t<div class="pic">\n\t\t\t<div class="img">\n\t\t\t\t<img src="{{thumbnail_pic_s}}" class="news-thumb" alt="{{title}}" />\n\t\t\t</div>\n\t\t\t<div class="img">\n\t\t\t\t<img src="{{thumbnail_pic_s02}}" class="news-thumb" alt="{{title}}" />\n\t\t\t</div>\n\t\t\t<div class="img last">\n\t\t\t\t<img src="{{thumbnail_pic_s03}}" class="news-thumb" alt="{{title}}" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="info">\n\t\t<span class="author">{{author}}</span>\n\t\t<span class="date">{{date}}</span>\n\t</div>\n</div>';return __p}},function(t,e,n){var o=n(16);"string"==typeof o&&(o=[[t.i,o,""]]);n(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".news-item {\n  padding: 1rem; }\n  .news-item img {\n    height: 100%;\n    opacity: 0;\n    -webkit-transition: opacity .5s;\n    -o-transition: opacity .5s;\n    transition: opacity .5s; }\n  .news-item .info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 2.5rem;\n    color: #999;\n    border-bottom: 1px solid #ededed; }\n    .news-item .info .author {\n      margin-right: 1rem; }\n  .news-item .title {\n    padding: .5rem 0; }\n    .news-item .title h1 {\n      font-size: 1.6rem; }\n  .news-item.type-1 .main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .news-item.type-1 .main .pic {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      background-color: #eee;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box; }\n    .news-item.type-1 .main .title {\n      -webkit-box-flex: 2;\n          -ms-flex: 2;\n              flex: 2;\n      padding-right: 1rem;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box; }\n  .news-item.type-2 .pic, .news-item.type-3 .pic {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .news-item.type-2 .pic .img, .news-item.type-3 .pic .img {\n      width: 33.33%;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      margin-right: .5rem;\n      background-color: #eee;\n      font-size: 0; }\n      .news-item.type-2 .pic .img.last, .news-item.type-3 .pic .img.last {\n        margin: 0; }\n",""])},function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){"use strict";n(19);var o=d(n(4)),i=d(n(21)),r=d(n(10)),a=d(n(26)),s=d(n(31)),l=d(n(36)),c=n(41),u=d(n(44)),p=d(n(2));function d(t){return t&&t.__esModule?t:{default:t}}var f,m,h,b,v,w,g,y,x,_,k,j,A,M,O,T,S,E,I,R,C,U,B,L=new o.default,P=new i.default,N=new r.default,G=new a.default,J=new s.default,q=new l.default,H=new c.IndexModel;function z(){y=0,C("remove"),R("remove"),U(150),B(!1);var t=f(this);g=t.attr("data-type"),t.addClass("current").siblings(".item").removeClass("current"),T(g,y,10)}function X(){var t=f(this),e=t.attr("data-url"),n=t.attr("data-index"),o=t.attr("data-page");localStorage.setItem("target",JSON.stringify(_[g][o][n])),m.location.href="detail.html?news_url="+e+"&uniquekey="+_[g][o][n].uniquekey}f=Zepto,m=window,h=f("#app"),b=f(m),v=h.children(".list"),w=p.default.scrollToBottom.bind(null,function(){y<x-1?k||(k=!0,R("append","loading","正在努力加载中"),setTimeout(function(){y++,S("append")},1e3)):R("removeAndAppend","final","已加载完所有内容")}),x=y=0,k=!(_={}),j=function(t,e,n){return new Promise(function(o,i){M(),O(u.default.news_type),T(t,e,n),o()})},A=function(){f(".nav .nav-wrapper").on("click",".item",z),v.on("click",".news-item",X)},M=function(){h.append(L.tpl({title:"新闻APP",showLeftIcon:!1,showRightIcon:!0}))},O=function(t){var e=P.tpl(t);h.append(e.navStr),f(".nav .nav-wrapper").append(e.itemsStr)},T=function(t,e,n){_[t]?(x=_[t].length,S("cover")):(I("append"),H.getNewsList(t,n).then(function(e){if(404==e)return C("append","没有找到网络"),void I("remove");_[t]=e,x=_[t].length,setTimeout(function(){S("cover")},1e3)}))},S=function(t){switch(t){case"cover":v.html(N.tpl(_[g][y],y)),U(150),I("remove"),E(!0);break;case"append":v.append(N.tpl(_[g][y],y)),E(!1)}k=!1,R("remove")},E=function(t){t&&B(!0),p.default.thumbShow(f(".news-thumb"))},I=function(t){switch(t){case"append":v.html(""),h.append(G.tpl());break;case"remove":f(".loading-icon").remove()}},R=function(t,e,n){switch(t){case"append":h.append(J.tpl(e,n));break;case"remove":f(".bottom-tip").remove();break;case"removeAndAppend":f(".bottom-tip").remove(),h.append(J.tpl(e,n))}},C=function(t,e){switch(t){case"append":h.append(q.tpl(e));break;case"remove":f(".error-tip").remove()}},U=function(t){setTimeout(function(){return m.scrollTo(0,0)},t)},B=function(t){t?b.on("scroll",w):b.off("scroll",w)},j(g="top",y,10).then(A)},function(t,e,n){var o=n(20);"string"==typeof o&&(o=[[t.i,o,""]]);n(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"html {\n  height: 100%;\n  font-size: 1.2rem; }\n  html body {\n    height: 100%;\n    margin: 0; }\n    html body h1,\n    html body h2,\n    html body h3,\n    html body h4,\n    html body h5,\n    html body h6,\n    html body p {\n      font-weight: normal;\n      margin: 0; }\n    html body a {\n      text-decoration: none;\n      color: #000; }\n    html body img {\n      width: 100%; }\n    html body .app {\n      position: relative;\n      height: 100%;\n      background-color: #f5f7f8; }\n      html body .app .list {\n        overflow-y: auto;\n        background-color: #fff; }\n\n.list {\n  margin-top: 7.9rem; }\n",""])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(n(22)),i=a(n(23));n(24);var r=a(n(2));function a(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return{name:"nav",tpl:function(t){var e,n=6*t.length+"rem",a="";return e=(0,o.default)().replace(r.default.tplReplace(),n),t.forEach(function(t,e){a+=(0,i.default)().replace(r.default.tplReplace(),function(n,o){return{isCurrent:0===e?"current":"",type:t.type,typeName:t.chs}[o]})}),{navStr:e,itemsStr:a}}}}},function(module,exports){module.exports=function(obj){obj=obj||{};var __t,__p="";with(obj)__p+='<nav class="nav">\n\t<div class="scroll">\n\t\t<div class="nav-wrapper" style="width: {{wrapperW}}">\n\t\t\t\n\t\t</div>\n\t</div>\n</nav>';return __p}},function(module,exports){module.exports=function(obj){obj=obj||{};var __t,__p="";with(obj)__p+='<div class="item {{isCurrent}}" data-type="{{type}}">{{typeName}}</div>';return __p}},function(t,e,n){var o=n(25);"string"==typeof o&&(o=[[t.i,o,""]]);n(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".nav {\n  position: fixed;\n  top: 4.4rem;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 3.5rem;\n  border-bottom: 1px solid #ddd;\n  background-color: #fff;\n  overflow: hidden; }\n  .nav .scroll {\n    height: 4.2rem;\n    -webkit-overflow-scrolling: touch;\n    overflow-x: auto; }\n    .nav .scroll .nav-wrapper {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      height: 3.5rem; }\n      .nav .scroll .nav-wrapper .item {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        width: 6rem;\n        font-size: 1.6rem; }\n        .nav .scroll .nav-wrapper .item.current {\n          color: #ec7a70; }\n",""])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=(o=n(27))&&o.__esModule?o:{default:o};n(29),e.default=function(){return{name:"pageLoading",tpl:i.default}}},function(module,exports,__webpack_require__){module.exports=function(obj){obj=obj||{};var __t,__p="";with(obj)__p+='<img src="'+(null==(__t=__webpack_require__(28))?"":__t)+'" class="loading-icon" alt="" />';return __p}},function(t,e,n){t.exports=n.p+"img/loading-1c50914902017624.gif"},function(t,e,n){var o=n(30);"string"==typeof o&&(o=[[t.i,o,""]]);n(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".loading-icon {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 3;\n  margin: -4rem 0 0 -4rem;\n  width: 8rem;\n  height: 8rem; }\n",""])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(32));n(33);var i=r(n(2));function r(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return{name:"bottomTip",tpl:function(t,e){return(0,o.default)().replace(i.default.tplReplace(),function(n,o){return{isLoading:t,text:e}[o]})}}}},function(module,exports){module.exports=function(obj){obj=obj||{};var __t,__p="";with(obj)__p+='<div class="bottom-tip {{isLoading}}">{{text}}</div>';return __p}},function(t,e,n){var o=n(34);"string"==typeof o&&(o=[[t.i,o,""]]);n(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(0)(!1);var o=n(17)(n(35));e.push([t.i,'.bottom-tip {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 3rem;\n  margin-bottom: 1rem;\n  color: #999;\n  font-size: 1.4rem; }\n  .bottom-tip.loading::before {\n    content: "";\n    display: block;\n    width: 1.5rem;\n    height: 1.5rem;\n    margin-right: .5rem;\n    background-image: url('+o+");\n    background-repeat: no-repeat;\n    background-size: 1.5rem 1.5rem;\n    background-position: 0 0; }\n",""])},function(t,e,n){t.exports=n.p+"img/s_loading-a9929759dee8c380.gif"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(37));n(39);var i=r(n(2));function r(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return{name:"errorTip",tpl:function(t){return(0,o.default)().replace(i.default.tplReplace(),t)}}}},function(module,exports,__webpack_require__){module.exports=function(obj){obj=obj||{};var __t,__p="";with(obj)__p+='<div class="error-tip">\n\t<img src="'+(null==(__t=__webpack_require__(38))?"":__t)+'" class="error-icon" alt="" />\n\t<p>{{text}}</p>\n</div>';return __p}},function(t,e,n){t.exports=n.p+"img/network_error-60bb1e566ee6077d.png"},function(t,e,n){var o=n(40);"string"==typeof o&&(o=[[t.i,o,""]]);n(1)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".error-tip {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 3;\n  margin: -4rem 0 0 -4rem;\n  width: 8rem;\n  height: 11rem; }\n  .error-tip img {\n    width: 6rem;\n    height: 6rem;\n    margin-bottom: 1rem; }\n  .error-tip p {\n    font-size: 1.4rem;\n    color: #999; }\n",""])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.IndexModel=void 0;function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var i=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,n(42).HTTP),function(t,e,n){e&&o(t.prototype,e),n&&o(t,n)}(r,[{key:"getNewsList",value:function(t,e){var n=this;return new Promise(function(o,i){n.ajax({url:"Juhe/getNewsList",type:"POST",dataType:"JSON",data:{field:t},success:function(t){for(var n=t.result.data,i=n.length,r=[],a=0;a<i;)r.push(n.slice(a,a+=e));o(r)},error:function(){o(404)}})})}}]),r);function r(){return function(t,e){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}e.IndexModel=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.HTTP=void 0;function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var i=n(43),r=Symbol("doAjax"),a=(function(t,e,n){e&&o(t.prototype,e),n&&o(t,n)}(s,[{key:r,value:function(t){var e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");if(!e)throw new Error("您的浏览器不支持异步发起HTTP请求");var n=t||{},o=(n.type||"GET").toUpperCase(),r=""+n.async!="false",a=n.dataType||"JSON",s=n.jsonp||"cb",l=n.jsonpCallback||"jQuery"+function(){for(var t="",e=0;e<20;e++)t+=Math.floor(10*Math.random());return t}()+"_"+(new Date).getTime(),c=i.config.api_base_url+t.url,u=n.data||null,p=n.timeout||3e4,d=n.error||function(){},f=n.success||function(){},m=n.complete||function(){},h=null;if(!c)throw new Error("您没有填写URL");if("JSONP"===a.toUpperCase()&&"GET"!==o)throw new Error("如果dataType为JSONP，type请您设置GET或不设置");if("JSONP"===a.toUpperCase()){var b=document.createElement("script");return b.src=-1===c.indexOf("?")?c+"?"+s+"="+l:c+"&"+s+"="+l,document.body.appendChild(b),document.body.removeChild(b),void(window[l]=function(t){f(t)})}e.onreadystatechange=function(){if(4===e.readyState){if(200<=e.status&&e.status<300||304===e.status)switch(a.toUpperCase()){case"JSON":f(JSON.parse(e.responseText));break;case"TEXT":f(e.responseText);break;case"XML":f(e.responseXML);break;default:f(JSON.parse(e.responseText))}else d();m(),clearTimeout(h),e=h=null}},e.open(o,c,r),"POST"===o&&e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send("GET"===o?null:function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.replace(/&$/,"")}(u)),h=setTimeout(function(){throw new Error("本次请求已超时，API地址："+c)},p)}},{key:"ajax",value:function(t){this[r](t)}},{key:"post",value:function(t,e,n,o,i,a){this[r]({type:"POST",url:t,data:e,dataType:n,success:csuccessCB,error:i,complete:a})}},{key:"get",value:function(t,e,n,o,i){this[r]({type:"GET",url:t,dataType:e,success:csuccessCB,error:o,complete:i})}}]),s);function s(){!function(t,e){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}(this)}e.HTTP=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.config={api_base_url:"http://api.jsplusplus.com/"}},function(t,e,n){"use strict";t.exports={news_type:[{type:"top",chs:"头条"},{type:"shehui",chs:"社会"},{type:"guonei",chs:"国内"},{type:"guoji",chs:"国际"},{type:"yule",chs:"娱乐"},{type:"tiyu",chs:"体育"},{type:"junshi",chs:"军事"},{type:"keji",chs:"科技"},{type:"caijing",chs:"财经"},{type:"shishang",chs:"时尚"}]}}]);