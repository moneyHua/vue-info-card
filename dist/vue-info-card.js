!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vuetrend")):"function"==typeof define&&define.amd?define("vue-info-card",["vuetrend"],e):"object"==typeof exports?exports["vue-info-card"]=e(require("vuetrend")):t["vue-info-card"]=e(t.vuetrend)}(this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){r(1);var n=r(6)(r(7),r(14),"data-v-08b3c384",null);t.exports=n.exports},function(t,e,r){var n=r(2);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);r(4)("67106c25",n,!0)},function(t,e,r){e=t.exports=r(3)(void 0),e.push([t.id,".flip-container[data-v-08b3c384]{-webkit-perspective:1000;-moz-perspective:1000;-o-perspective:1000;perspective:1000}.flip-container.hover .flipper[data-v-08b3c384],.flip-container:hover .flipper[data-v-08b3c384]{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);transform:rotateY(180deg)}.flip-container[data-v-08b3c384]{height:180px}.back[data-v-08b3c384],.front[data-v-08b3c384]{width:100%;height:100%;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0}.flipper[data-v-08b3c384]{-webkit-transition:.6s;-webkit-transform-style:preserve-3d;-moz-transition:.6s;-moz-transform-style:preserve-3d;-o-transition:.6s;-o-transform-style:preserve-3d;transition:.6s;transform-style:preserve-3d;position:relative}.back[data-v-08b3c384]{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);transform:rotateY(180deg)}",""])},function(t,e){function r(t,e){var r=t[1]||"",a=t[3];if(!a)return r;if(e&&"function"==typeof btoa){var o=n(a),i=a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"});return[r].concat(i).concat([o]).join("\n")}return[r].join("\n")}function n(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,"+e;return"/*# "+r+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(n[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(t,e,r){function n(t){for(var e=0;e<t.length;e++){var r=t[e],n=f[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(o(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(o(r.parts[a]));f[r.id]={id:r.id,refs:1,parts:i}}}}function a(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function o(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(v)return b;n.parentNode.removeChild(n)}if(h){var o=l++;n=p||(p=a()),e=i.bind(null,n,o,!1),r=i.bind(null,n,o,!0)}else n=a(),e=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}function i(t,e,r,n){var a=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function s(t,e){var r=e.css,n=e.media,a=e.sourceMap;if(n&&t.setAttribute("media",n),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d="undefined"!=typeof document,c=r(5),f={},u=d&&(document.head||document.getElementsByTagName("head")[0]),p=null,l=0,v=!1,b=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r){v=r;var a=c(t,e);return n(a),function(e){for(var r=[],o=0;o<a.length;o++){var i=a[o],s=f[i.id];s.refs--,r.push(s)}e?(a=c(t,e),n(a)):a=[];for(var o=0;o<r.length;o++){var s=r[o];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete f[s.id]}}}};var g=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var r=[],n={},a=0;a<e.length;a++){var o=e[a],i=o[0],s=o[1],d=o[2],c=o[3],f={id:t+":"+a,css:s,media:d,sourceMap:c};n[i]?n[i].parts.push(f):r.push(n[i]={id:i,parts:[f]})}return r}},function(t,e){t.exports=function(t,e,r,n){var a,o=t=t||{},i=typeof t["default"];"object"!==i&&"function"!==i||(a=t,o=t["default"]);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),r&&(s._scopeId=r),n){var d=Object.create(s.computed||null);Object.keys(n).forEach(function(t){var e=n[t];d[t]=function(){return e}}),s.computed=d}return{esModule:a,exports:o,options:s}}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(8),o=n(a);e["default"]={name:"VueInfoCard",components:{CardContent:o["default"]},props:["frontType","frontTitle","frontData","frontTrendGradients","backType","backTitle","backData","backTrendGradients"]}},function(t,e,r){r(9);var n=r(6)(r(11),r(13),"data-v-7b7bf80b",null);t.exports=n.exports},function(t,e,r){var n=r(10);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);r(4)("194317e1",n,!0)},function(t,e,r){e=t.exports=r(3)(void 0),e.push([t.id,'.info-card[data-v-7b7bf80b]{background-color:#fff;font-weight:100;min-height:128px}.info-card .title[data-v-7b7bf80b]{position:relative;color:#adadad;font-weight:700}.info-card .title[data-v-7b7bf80b]:after{content:"";position:absolute;width:50px;height:0;background:#000;bottom:0;left:0;right:0;margin:auto;background:linear-gradient(90deg,#fff,#ffb88c,#fff)}.oval-corners[data-v-7b7bf80b]{border-radius:5px}.grey-background[data-v-7b7bf80b]{background-color:#f7f7f7}.text-grey[data-v-7b7bf80b]{color:#6d6d6d}.with-shadow[data-v-7b7bf80b]{-webkit-box-shadow:0 0 25px 0 hsla(0,0%,52%,.2);-moz-box-shadow:0 0 25px 0 hsla(0,0%,52%,.2);box-shadow:0 0 25px 0 hsla(0,0%,52%,.2)}.p-8[data-v-7b7bf80b]{padding:8px}.p-l-5[data-v-7b7bf80b]{padding-left:5px}',""])},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(12),o=n(a);e["default"]={name:"InfoCardContent",components:{Trend:o["default"]},props:{title:{type:String,"default":"Default Card Title"},type:{type:String,"default":"text"},data:{validator:function(t){return t.constructor===Array||"string"==typeof t||t instanceof String}},trendGradients:{type:Array,"default":function(){return["#4facfe","#00f2fe"]}}}}},function(e,r){e.exports=t},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"info-card oval-corners with-shadow p-8 text-grey"},[r("div",{staticClass:"title grey-background oval-corners p-l-5"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"body everything-center-aligned"},["graph"===t.type?r("trend",{attrs:{data:t.data,gradient:t.trendGradients,"auto-draw":"",smooth:""}}):r("p",{domProps:{innerHTML:t._s(t.data)}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flip-container",attrs:{ontouchstart:"this.classList.toggle('hover');"}},[r("div",{staticClass:"flipper"},[r("div",{staticClass:"front"},[r("card-content",{attrs:{type:t.frontType,title:t.frontTitle,data:t.frontData,gradients:t.frontTrendGradients}})],1),t._v(" "),r("div",{staticClass:"back"},[r("card-content",{attrs:{type:t.backType,title:t.backTitle,data:t.backData,gradients:t.backTrendGradients}})],1)])])},staticRenderFns:[]}}])});