(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-050b37a6"],{"1a3b":function(t,e,n){"use strict";var r=n("455e"),o=n.n(r);o.a},"1ea9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),o=r.__importDefault(n("3317"));e.default=o.default},3317:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),o=r.__importDefault(n("2b0e"));e.default=o.default.extend({props:{threshold:{required:!1,type:Number,default:0},headerClass:{required:!1,type:String,default:"vue-fixed-header"},fixedClass:{required:!1,type:String,default:"vue-fixed-header--isFixed"},hideScrollUp:{required:!1,type:Boolean,default:!1}},data:function(){return{check:null,isFixed:!1,lastScrollTop:0}},mounted:function(){this.main(),this.registerEvent()},beforeDestroy:function(){this.removeEvent()},methods:{getScrollTop:function(){return window.pageYOffset||document.documentElement.scrollTop},main:function(){var t=this;this.lastScrollTop=this.getScrollTop(),this.check=function(){var e=t,n=e.threshold,r=e.hideScrollUp,o=t.getScrollTop(),a=o>n,i=o>=t.lastScrollTop,u=i?a:!r&&a;t.lastScrollTop=o,t.isFixed!==u&&(t.isFixed=u,t.$emit("change",t.isFixed))}},registerEvent:function(){window.addEventListener("scroll",this.check)},removeEvent:function(){window.removeEventListener("scroll",this.check)}},render:function(t){var e,n=this.$slots.default;if(!n||!r.__spreadArrays(n)[0])return t();var o=r.__spreadArrays(n)[0],a=t(o.tag,o.data,o.children||o.text);return a.data=a.data||{class:""},"string"===typeof a.data.class&&(a.data.class=a.data.class.split(" ")),Array.isArray(a.data.class)&&(a.data.class=r.__spreadArrays(a.data.class).reduce((function(t,e){var n;return r.__assign(r.__assign({},t),(n={},n[e]=!0,n))}),{})),a.data.class=r.__assign(r.__assign({},a.data.class),(e={},e[this.headerClass]=!0,e[this.fixedClass]=!!this.isFixed,e)),a.data.class=Object.entries(a.data.class).map((function(t){var e=t[0],n=t[1];return n?e:null})).filter((function(t){return t})).join(" "),a}})},"455e":function(t,e,n){},"9ab4":function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",(function(){return o})),n.d(e,"__assign",(function(){return a})),n.d(e,"__rest",(function(){return i})),n.d(e,"__decorate",(function(){return u})),n.d(e,"__param",(function(){return s})),n.d(e,"__metadata",(function(){return c})),n.d(e,"__awaiter",(function(){return l})),n.d(e,"__generator",(function(){return f})),n.d(e,"__exportStar",(function(){return d})),n.d(e,"__values",(function(){return h})),n.d(e,"__read",(function(){return p})),n.d(e,"__spread",(function(){return v})),n.d(e,"__spreadArrays",(function(){return y})),n.d(e,"__await",(function(){return _})),n.d(e,"__asyncGenerator",(function(){return b})),n.d(e,"__asyncDelegator",(function(){return w})),n.d(e,"__asyncValues",(function(){return m})),n.d(e,"__makeTemplateObject",(function(){return x})),n.d(e,"__importStar",(function(){return g})),n.d(e,"__importDefault",(function(){return S}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},r(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)};function i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function u(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i}function s(t,e){return function(n,r){e(n,r,t)}}function c(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)}function l(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{s(r.next(t))}catch(e){a(e)}}function u(t){try{s(r["throw"](t))}catch(e){a(e)}}function s(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(i,u)}s((r=r.apply(t,e||[])).next())}))}function f(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=2&a[0]?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(o=i.trys,!(o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function d(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function h(t){var e="function"===typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function p(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,a=n.call(t),i=[];try{while((void 0===e||e-- >0)&&!(r=a.next()).done)i.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=a["return"])&&n.call(a)}finally{if(o)throw o.error}}return i}function v(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(p(arguments[e]));return t}function y(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var a=arguments[e],i=0,u=a.length;i<u;i++,o++)r[o]=a[i];return r}function _(t){return this instanceof _?(this.v=t,this):new _(t)}function b(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){a.push([t,e,n,r])>1||u(t,e)}))})}function u(t,e){try{s(o[t](e))}catch(n){f(a[0][3],n)}}function s(t){t.value instanceof _?Promise.resolve(t.value.v).then(c,l):f(a[0][2],t)}function c(t){u("next",t)}function l(t){u("throw",t)}function f(t,e){t(e),a.shift(),a.length&&u(a[0][0],a[0][1])}}function w(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:_(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function m(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t="function"===typeof h?h(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,a){e=t[n](e),o(r,a,e.done,e.value)}))}}function o(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)}}function x(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function g(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function S(t){return t&&t.__esModule?t:{default:t}}},d178:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("fixed-header",[n("nav",{staticClass:"fixed-menu"},[n("label",{staticClass:"logo"},[t._v("FixUp")]),n("ul",{staticClass:"menu"},t._l(t.links,(function(e){return n("li",{key:e.text,staticClass:"link",attrs:{router:"",to:e.route}},[n("router-link",{staticClass:"router",staticStyle:{"z-index":"999",color:"#fff"},attrs:{tag:"a",to:e.route}},[t._v(t._s(e.text))])],1)})),0)])]),n("div",{staticClass:"nav-icon",on:{click:t.show}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showNav,expression:"!showNav"}]},[n("i",{staticClass:"fas fa-bars fa-fw",staticStyle:{color:"#fff"}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showNav,expression:"showNav"}]},[n("i",{staticClass:"fas fa-times fa-fw",staticStyle:{color:"#000"}})])]),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showNav,expression:"showNav"}],staticClass:"nav-container"},[n("ul",{staticClass:"menu-mobile"},t._l(t.links,(function(e){return n("li",{key:e.text,staticClass:"link",attrs:{router:"",to:e.route}},[n("router-link",{staticClass:"router",staticStyle:{"z-index":"999"},attrs:{to:e.route}},[t._v(t._s(e.text))])],1)})),0)])])],1)},o=[],a=n("1ea9"),i=n.n(a),u={components:{FixedHeader:i.a},data:function(){return{showNav:!1,links:[{text:"Главная",route:"/"},{text:"О нас",route:"/about"},{text:"Вопросы и ответы",route:"/questions"},{text:"Контакты",route:"/contact"}]}},methods:{show:function(){this.showNav=!this.showNav}}},s=u,c=(n("1a3b"),n("2877")),l=Object(c["a"])(s,r,o,!1,null,null,null);e["a"]=l.exports},f820:function(t,e,n){"use strict";n.r(e);var r,o,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("Navbar",{staticStyle:{background:"#F15E63"}}),n("AboutMain",{staticStyle:{background:"#F8F8FF"}})],1)},i=[],u=n("2877"),s={},c=Object(u["a"])(s,r,o,!1,null,null,null),l=c.exports,f=n("d178"),d={name:"About",components:{Navbar:f["a"],AboutMain:l}},h=d,p=Object(u["a"])(h,a,i,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-050b37a6.ba84fb90.js.map