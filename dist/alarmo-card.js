var AlarmoCard=function(t){"use strict";function e(t,e,i,n){var r,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(a<3?r(o):a>3?r(e,i,o):r(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=Array(e);i<e;i++)n[i]=t[i];return n}function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t,e,i,n,r,a,o){try{var s=t[a](o),l=s.value}catch(t){return void i(t)}s.done?e(l):Promise.resolve(l).then(n,r)}function a(t){return function(){var e=this,i=arguments;return new Promise((function(n,a){var o=t.apply(e,i);function s(t){r(o,n,a,s,l,"next",t)}function l(t){r(o,n,a,s,l,"throw",t)}s(void 0)}))}}function o(t,e,i){return e=p(e),function(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return n(t)}(t,v()?Reflect.construct(e,i||[],p(t).constructor):e.apply(t,i))}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,k(n.key),n)}}function c(t,e,i){return e&&l(t.prototype,e),i&&l(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function d(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=x(t))||e){i&&(t=i);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return o=t.done,t},e:function(t){s=!0,a=t},f:function(){try{o||null==i.return||i.return()}finally{if(s)throw a}}}}function u(t,e,i){return(e=k(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,i){var n=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(arguments.length<3?t:i):r.value}},h.apply(null,arguments)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}function v(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(v=function(){return!!t})()}function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function _(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function g(){g=function(){return e};var t,e={},i=Object.prototype,n=i.hasOwnProperty,r=Object.defineProperty||function(t,e,i){t[e]=i.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,i){return t[e]=i}}function d(t,e,i,n){var a=e&&e.prototype instanceof _?e:_,o=Object.create(a.prototype),s=new P(n||[]);return r(o,"_invoke",{value:S(t,i,s)}),o}function u(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",p="suspendedYield",f="executing",v="completed",m={};function _(){}function y(){}function b(){}var $={};c($,o,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(T([])));k&&k!==i&&n.call(k,o)&&($=k);var A=b.prototype=_.prototype=Object.create($);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function i(r,a,o,s){var l=u(t[r],t,a);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,o,s)}),(function(t){i("throw",t,o,s)})):e.resolve(d).then((function(t){c.value=t,o(c)}),(function(t){return i("throw",t,o,s)}))}s(l.arg)}var a;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){i(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function S(e,i,n){var r=h;return function(a,o){if(r===f)throw Error("Generator is already running");if(r===v){if("throw"===a)throw o;return{value:t,done:!0}}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var l=C(s,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=u(e,i,n);if("normal"===c.type){if(r=n.done?v:p,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}function C(e,i){var n=i.method,r=e.iterator[n];if(r===t)return i.delegate=null,"throw"===n&&e.iterator.return&&(i.method="return",i.arg=t,C(e,i),"throw"===i.method)||"return"!==n&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=u(r,e.iterator,i.arg);if("throw"===a.type)return i.method="throw",i.arg=a.arg,i.delegate=null,m;var o=a.arg;return o?o.done?(i[e.resultName]=o.value,i.next=e.nextLoc,"return"!==i.method&&(i.method="next",i.arg=t),i.delegate=null,m):o:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(e){if(e||""===e){var i=e[o];if(i)return i.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function i(){for(;++r<e.length;)if(n.call(e,r))return i.value=e[r],i.done=!1,i;return i.value=t,i.done=!0,i};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return y.prototype=b,r(A,"constructor",{value:b,configurable:!0}),r(b,"constructor",{value:y,configurable:!0}),y.displayName=c(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,l,"GeneratorFunction")),t.prototype=Object.create(A),t},e.awrap=function(t){return{__await:t}},x(E.prototype),c(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,i,n,r,a){void 0===a&&(a=Promise);var o=new E(d(t,i,n,r),a);return e.isGeneratorFunction(i)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(A),c(A,l,"Generator"),c(A,o,(function(){return this})),c(A,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),i=[];for(var n in e)i.push(n);return i.reverse(),function t(){for(;i.length;){var n=i.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var i=this;function r(n,r){return s.type="throw",s.arg=e,i.next=n,r&&(i.method="next",i.arg=t),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),j(i),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var r=n.arg;j(i)}return r}}throw Error("illegal catch attempt")},delegateYield:function(e,i,n){return this.delegate={iterator:T(e),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var n,r,a,o,s=[],l=!0,c=!1;try{if(a=(i=i.call(t)).next,0===e){if(Object(i)!==i)return;l=!1}else for(;!(l=(n=a.call(i)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(t){c=!0,r=t}finally{try{if(!l&&null!=i.return&&(o=i.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}(t,e)||x(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(t,e,i,n){var r=h(p(t.prototype),e,i);return"function"==typeof r?function(t){return r.apply(i,t)}:r}function w(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||x(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function x(t,e){if(t){if("string"==typeof t)return i(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function E(t){var e="function"==typeof Map?new Map:void 0;return E=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return function(t,e,i){if(v())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,e);var r=new(t.bind.apply(t,n));return i&&y(r,i.prototype),r}(t,arguments,p(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),y(i,t)},E(t)
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}"function"==typeof SuppressedError&&SuppressedError;var S,C,O,j=globalThis,P=j.ShadowRoot&&(void 0===j.ShadyCSS||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,T=Symbol(),z=new WeakMap,M=function(){return c((function t(e,i,n){if(s(this,t),this._$cssResult$=!0,n!==T)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}),[{key:"styleSheet",get:function(){var t=this.o,e=this.t;if(P&&void 0===t){var i=void 0!==e&&1===e.length;i&&(t=z.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&z.set(e,t))}return t}},{key:"toString",value:function(){return this.cssText}}])}(),U=P?function(t){return t}:function(t){return t instanceof CSSStyleSheet?function(t){var e,i="",n=d(t.cssRules);try{for(n.s();!(e=n.n()).done;){i+=e.value.cssText}}catch(t){n.e(t)}finally{n.f()}return function(t){return new M("string"==typeof t?t:t+"",void 0,T)}(i)}(t):t},N=Object.is,H=Object.defineProperty,R=Object.getOwnPropertyDescriptor,L=Object.getOwnPropertyNames,D=Object.getOwnPropertySymbols,I=Object.getPrototypeOf,B=globalThis,q=B.trustedTypes,F=q?q.emptyScript:"",V=B.reactiveElementPolyfillSupport,W=function(t,e){return t},Z={toAttribute:function(t,e){switch(e){case Boolean:t=t?F:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute:function(t,e){var i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},G=function(t,e){return!N(t,e)},K={attribute:!0,type:String,converter:Z,reflect:!1,useDefault:!1,hasChanged:G};null!==(S=Symbol.metadata)&&void 0!==S||(Symbol.metadata=Symbol("metadata")),null!==(C=B.litPropertyMetadata)&&void 0!==C||(B.litPropertyMetadata=new WeakMap);var J,Y=function(t){function e(){var t;return s(this,e),(t=o(this,e))._$Ep=void 0,t.isUpdatePending=!1,t.hasUpdated=!1,t._$Em=null,t._$Ev(),t}return f(e,t),c(e,[{key:"_$Ev",value:function(){var t,e=this;this._$ES=new Promise((function(t){return e.enableUpdating=t})),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((function(t){return t(e)}))}},{key:"addController",value:function(t){var e,i;(null!==(e=this._$EO)&&void 0!==e?e:this._$EO=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}},{key:"removeController",value:function(t){var e;null===(e=this._$EO)||void 0===e||e.delete(t)}},{key:"_$E_",value:function(){var t,e=new Map,i=d(this.constructor.elementProperties.keys());try{for(i.s();!(t=i.n()).done;){var n=t.value;this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n])}}catch(t){i.e(t)}finally{i.f()}e.size>0&&(this._$Ep=e)}},{key:"createRenderRoot",value:function(){var t,e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return function(t,e){if(P)t.adoptedStyleSheets=e.map((function(t){return t instanceof CSSStyleSheet?t:t.styleSheet}));else{var i,n=d(e);try{for(n.s();!(i=n.n()).done;){var r=i.value,a=document.createElement("style"),o=j.litNonce;void 0!==o&&a.setAttribute("nonce",o),a.textContent=r.cssText,t.appendChild(a)}}catch(t){n.e(t)}finally{n.f()}}}(e,this.constructor.elementStyles),e}},{key:"connectedCallback",value:function(){var t,e;null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$EO)||void 0===e||e.forEach((function(t){var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}},{key:"enableUpdating",value:function(t){}},{key:"disconnectedCallback",value:function(){var t;null===(t=this._$EO)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}},{key:"attributeChangedCallback",value:function(t,e,i){this._$AK(t,i)}},{key:"_$ET",value:function(t,e){var i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){var r,a=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:Z).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}},{key:"_$AK",value:function(t,e){var i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){var r,a,o,s,l=i.getPropertyOptions(n),c="function"==typeof l.converter?{fromAttribute:l.converter}:void 0!==(null===(r=l.converter)||void 0===r?void 0:r.fromAttribute)?l.converter:Z;this._$Em=n,this[n]=null!==(a=null!==(o=c.fromAttribute(e,l.type))&&void 0!==o?o:null===(s=this._$Ej)||void 0===s?void 0:s.get(n))&&void 0!==a?a:null,this._$Em=null}}},{key:"requestUpdate",value:function(t,e,i){if(void 0!==t){var n,r,a,o=this.constructor,s=this[t];if(null!==(n=i)&&void 0!==n||(i=o.getPropertyOptions(t)),!((null!==(r=i.hasChanged)&&void 0!==r?r:G)(s,e)||i.useDefault&&i.reflect&&s===(null===(a=this._$Ej)||void 0===a?void 0:a.get(t))&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}},{key:"C",value:function(t,e,i,n){var r,a,o,s=i.useDefault,l=i.reflect,c=i.wrapped;s&&!(null!==(r=this._$Ej)&&void 0!==r?r:this._$Ej=new Map).has(t)&&(this._$Ej.set(t,null!==(a=null!=n?n:e)&&void 0!==a?a:this[t]),!0!==c||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===l&&this._$Em!==t&&(null!==(o=this._$Eq)&&void 0!==o?o:this._$Eq=new Set).add(t))}},{key:"_$EP",value:(i=a(g().mark((function t(){var e;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isUpdatePending=!0,t.prev=1,t.next=4,this._$ES;case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),Promise.reject(t.t0);case 9:if(e=this.scheduleUpdate(),t.t1=null!=e,!t.t1){t.next=14;break}return t.next=14,e;case 14:return t.abrupt("return",!this.isUpdatePending);case 15:case"end":return t.stop()}}),t,this,[[1,6]])}))),function(){return i.apply(this,arguments)})},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){if(this.isUpdatePending){if(!this.hasUpdated){var t;if(null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this._$Ep){var e,i=d(this._$Ep);try{for(i.s();!(e=i.n()).done;){var n=b(e.value,2),r=n[0],a=n[1];this[r]=a}}catch(t){i.e(t)}finally{i.f()}this._$Ep=void 0}var o=this.constructor.elementProperties;if(o.size>0){var s,l=d(o);try{for(l.s();!(s=l.n()).done;){var c=b(s.value,2),u=c[0],h=c[1],p=h.wrapped,f=this[u];!0!==p||this._$AL.has(u)||void 0===f||this.C(u,void 0,h,f)}}catch(t){l.e(t)}finally{l.f()}}}var v=!1,m=this._$AL;try{var _;(v=this.shouldUpdate(m))?(this.willUpdate(m),null!==(_=this._$EO)&&void 0!==_&&_.forEach((function(t){var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(m)):this._$EM()}catch(m){throw v=!1,this._$EM(),m}v&&this._$AE(m)}}},{key:"willUpdate",value:function(t){}},{key:"_$AE",value:function(t){var e;null!==(e=this._$EO)&&void 0!==e&&e.forEach((function(t){var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}},{key:"_$EM",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$ES}},{key:"shouldUpdate",value:function(t){return!0}},{key:"update",value:function(t){var e=this;this._$Eq&&(this._$Eq=this._$Eq.forEach((function(t){return e._$ET(t,e[t])}))),this._$EM()}},{key:"updated",value:function(t){}},{key:"firstUpdated",value:function(t){}}],[{key:"addInitializer",value:function(t){var e;this._$Ei(),(null!==(e=this.l)&&void 0!==e?e:this.l=[]).push(t)}},{key:"observedAttributes",get:function(){return this.finalize(),this._$Eh&&w(this._$Eh.keys())}},{key:"createProperty",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K;if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){var i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&H(this.prototype,t,n)}}},{key:"getPropertyDescriptor",value:function(t,e,i){var n,r=null!==(n=R(this.prototype,t))&&void 0!==n?n:{get:function(){return this[e]},set:function(t){this[e]=t}},a=r.get,o=r.set;return{get:a,set:function(e){var n=null==a?void 0:a.call(this);null!=o&&o.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(t){var e;return null!==(e=this.elementProperties.get(t))&&void 0!==e?e:K}},{key:"_$Ei",value:function(){if(!this.hasOwnProperty(W("elementProperties"))){var t=I(this);t.finalize(),void 0!==t.l&&(this.l=w(t.l)),this.elementProperties=new Map(t.elementProperties)}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(W("finalized"))){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){var t,e=this.properties,i=d([].concat(w(L(e)),w(D(e))));try{for(i.s();!(t=i.n()).done;){var n=t.value;this.createProperty(n,e[n])}}catch(t){i.e(t)}finally{i.f()}}var r=this[Symbol.metadata];if(null!==r){var a=litPropertyMetadata.get(r);if(void 0!==a){var o,s=d(a);try{for(s.s();!(o=s.n()).done;){var l=b(o.value,2),c=l[0],u=l[1];this.elementProperties.set(c,u)}}catch(t){s.e(t)}finally{s.f()}}}this._$Eh=new Map;var h,p=d(this.elementProperties);try{for(p.s();!(h=p.n()).done;){var f=b(h.value,2),v=f[0],m=f[1],_=this._$Eu(v,m);void 0!==_&&this._$Eh.set(_,v)}}catch(t){p.e(t)}finally{p.f()}this.elementStyles=this.finalizeStyles(this.styles)}}},{key:"finalizeStyles",value:function(t){var e=[];if(Array.isArray(t)){var i,n=d(new Set(t.flat(1/0).reverse()));try{for(n.s();!(i=n.n()).done;){var r=i.value;e.unshift(U(r))}}catch(t){n.e(t)}finally{n.f()}}else void 0!==t&&e.push(U(t));return e}},{key:"_$Eu",value:function(t,e){var i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}}]);var i}(E(HTMLElement));Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[W("elementProperties")]=new Map,Y[W("finalized")]=new Map,null!=V&&V({ReactiveElement:Y}),(null!==(O=B.reactiveElementVersions)&&void 0!==O?O:B.reactiveElementVersions=[]).push("2.1.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Q=globalThis,X=Q.trustedTypes,tt=X?X.createPolicy("lit-html",{createHTML:function(t){return t}}):void 0,et="$lit$",it="lit$".concat(Math.random().toFixed(9).slice(2),"$"),nt="?"+it,rt="<".concat(nt,">"),at=document,ot=function(){return at.createComment("")},st=function(t){return null===t||"object"!=A(t)&&"function"!=typeof t},lt=Array.isArray,ct="[ \t\n\f\r]",dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,ht=/>/g,pt=RegExp(">|".concat(ct,"(?:([^\\s\"'>=/]+)(").concat(ct,"*=").concat(ct,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),ft=/'/g,vt=/"/g,mt=/^(?:script|style|textarea|title)$/i,_t=Symbol.for("lit-noChange"),gt=Symbol.for("lit-nothing"),yt=new WeakMap,bt=at.createTreeWalker(at,129);function $t(t,e){if(!lt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==tt?tt.createHTML(e):e}var wt=function(){return c((function t(e,i){var n,r=e.strings,a=e._$litType$;s(this,t),this.parts=[];var o=0,l=0,c=r.length-1,u=this.parts,h=function(t,e){for(var i,n=t.length-1,r=[],a=2===e?"<svg>":3===e?"<math>":"",o=dt,s=0;s<n;s++){for(var l=t[s],c=void 0,d=void 0,u=-1,h=0;h<l.length&&(o.lastIndex=h,null!==(d=o.exec(l)));){var p;h=o.lastIndex,o===dt?"!--"===d[1]?o=ut:void 0!==d[1]?o=ht:void 0!==d[2]?(mt.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=pt):void 0!==d[3]&&(o=pt):o===pt?">"===d[0]?(o=null!==(p=i)&&void 0!==p?p:dt,u=-1):void 0===d[1]?u=-2:(u=o.lastIndex-d[2].length,c=d[1],o=void 0===d[3]?pt:'"'===d[3]?vt:ft):o===vt||o===ft?o=pt:o===ut||o===ht?o=dt:(o=pt,i=void 0)}var f=o===pt&&t[s+1].startsWith("/>")?" ":"";a+=o===dt?l+rt:u>=0?(r.push(c),l.slice(0,u)+et+l.slice(u)+it+f):l+it+(-2===u?s:f)}return[$t(t,a+(t[n]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]}(r,a),p=b(h,2),f=p[0],v=p[1];if(this.el=t.createElement(f,i),bt.currentNode=this.el.content,2===a||3===a){var m=this.el.content.firstChild;m.replaceWith.apply(m,w(m.childNodes))}for(;null!==(n=bt.nextNode())&&u.length<c;){if(1===n.nodeType){if(n.hasAttributes()){var _,g=d(n.getAttributeNames());try{for(g.s();!(_=g.n()).done;){var y=_.value;if(y.endsWith(et)){var $=v[l++],k=n.getAttribute(y).split(it),A=/([.?@])?(.*)/.exec($);u.push({type:1,index:o,name:A[2],strings:k,ctor:"."===A[1]?St:"?"===A[1]?Ct:"@"===A[1]?Ot:Et}),n.removeAttribute(y)}else y.startsWith(it)&&(u.push({type:6,index:o}),n.removeAttribute(y))}}catch(t){g.e(t)}finally{g.f()}}if(mt.test(n.tagName)){var x=n.textContent.split(it),E=x.length-1;if(E>0){n.textContent=X?X.emptyScript:"";for(var S=0;S<E;S++)n.append(x[S],ot()),bt.nextNode(),u.push({type:2,index:++o});n.append(x[E],ot())}}}else if(8===n.nodeType)if(n.data===nt)u.push({type:2,index:o});else for(var C=-1;-1!==(C=n.data.indexOf(it,C+1));)u.push({type:7,index:o}),C+=it.length-1;o++}}),null,[{key:"createElement",value:function(t,e){var i=at.createElement("template");return i.innerHTML=t,i}}])}();function kt(t,e){var i,n,r,a,o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,l=arguments.length>3?arguments[3]:void 0;if(e===_t)return e;var c=void 0!==l?null===(i=s._$Co)||void 0===i?void 0:i[l]:s._$Cl,d=st(e)?void 0:e._$litDirective$;return(null===(n=c)||void 0===n?void 0:n.constructor)!==d&&(null!==(r=c)&&void 0!==r&&null!==(a=r._$AO)&&void 0!==a&&a.call(r,!1),void 0===d?c=void 0:(c=new d(t))._$AT(t,s,l),void 0!==l?(null!==(o=s._$Co)&&void 0!==o?o:s._$Co=[])[l]=c:s._$Cl=c),void 0!==c&&(e=kt(t,c._$AS(t,e.values),c,l)),e}var At=function(){return c((function t(e,i){s(this,t),this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}),[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(t){var e,i=this._$AD,n=i.el.content,r=i.parts,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:at).importNode(n,!0);bt.currentNode=a;for(var o=bt.nextNode(),s=0,l=0,c=r[0];void 0!==c;){var d;if(s===c.index){var u=void 0;2===c.type?u=new xt(o,o.nextSibling,this,t):1===c.type?u=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(u=new jt(o,this,t)),this._$AV.push(u),c=r[++l]}s!==(null===(d=c)||void 0===d?void 0:d.index)&&(o=bt.nextNode(),s++)}return bt.currentNode=at,a}},{key:"p",value:function(t){var e,i=0,n=d(this._$AV);try{for(n.s();!(e=n.n()).done;){var r=e.value;void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}catch(t){n.e(t)}finally{n.f()}}}])}(),xt=function(){function t(e,i,n,r){var a;s(this,t),this.type=2,this._$AH=gt,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=n,this.options=r,this._$Cv=null===(a=null==r?void 0:r.isConnected)||void 0===a||a}return c(t,[{key:"_$AU",get:function(){var t,e;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cv}},{key:"parentNode",get:function(){var t,e=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(t=e)||void 0===t?void 0:t.nodeType)&&(e=i.parentNode),e}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(t){t=kt(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),st(t)?t===gt||null==t||""===t?(this._$AH!==gt&&this._$AR(),this._$AH=gt):t!==this._$AH&&t!==_t&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):function(t){return lt(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator])}(t)?this.k(t):this._(t)}},{key:"O",value:function(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}},{key:"T",value:function(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}},{key:"_",value:function(t){this._$AH!==gt&&st(this._$AH)?this._$AA.nextSibling.data=t:this.T(at.createTextNode(t)),this._$AH=t}},{key:"$",value:function(t){var e,i=t.values,n=t._$litType$,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=wt.createElement($t(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(i);else{var a=new At(r,this),o=a.u(this.options);a.p(i),this.T(o),this._$AH=a}}},{key:"_$AC",value:function(t){var e=yt.get(t.strings);return void 0===e&&yt.set(t.strings,e=new wt(t)),e}},{key:"k",value:function(e){lt(this._$AH)||(this._$AH=[],this._$AR());var i,n,r=this._$AH,a=0,o=d(e);try{for(o.s();!(n=o.n()).done;){var s=n.value;a===r.length?r.push(i=new t(this.O(ot()),this.O(ot()),this,this.options)):i=r[a],i._$AI(s),a++}}catch(t){o.e(t)}finally{o.f()}a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}},{key:"_$AR",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,e=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){var i,n=t.nextSibling;t.remove(),t=n}}},{key:"setConnected",value:function(t){var e;void 0===this._$AM&&(this._$Cv=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}])}(),Et=function(){return c((function t(e,i,n,r,a){s(this,t),this.type=1,this._$AH=gt,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=a,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=gt}),[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,r=this.strings,a=!1;if(void 0===r)t=kt(this,t,e,0),(a=!st(t)||t!==this._$AH&&t!==_t)&&(this._$AH=t);else{var o,s,l=t;for(t=r[0],o=0;o<r.length-1;o++){var c;(s=kt(this,l[i+o],e,o))===_t&&(s=this._$AH[o]),a||(a=!st(s)||s!==this._$AH[o]),s===gt?t=gt:t!==gt&&(t+=(null!==(c=s)&&void 0!==c?c:"")+r[o+1]),this._$AH[o]=s}}a&&!n&&this.j(t)}},{key:"j",value:function(t){t===gt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}])}(),St=function(t){function e(){var t;return s(this,e),(t=o(this,e,arguments)).type=3,t}return f(e,t),c(e,[{key:"j",value:function(t){this.element[this.name]=t===gt?void 0:t}}])}(Et),Ct=function(t){function e(){var t;return s(this,e),(t=o(this,e,arguments)).type=4,t}return f(e,t),c(e,[{key:"j",value:function(t){this.element.toggleAttribute(this.name,!!t&&t!==gt)}}])}(Et),Ot=function(t){function e(t,i,n,r,a){var l;return s(this,e),(l=o(this,e,[t,i,n,r,a])).type=5,l}return f(e,t),c(e,[{key:"_$AI",value:function(t){var e;if((t=null!==(e=kt(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:gt)!==_t){var i=this._$AH,n=t===gt&&i!==gt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==gt&&(i===gt||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}}},{key:"handleEvent",value:function(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}])}(Et),jt=function(){return c((function t(e,i,n){s(this,t),this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}),[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){kt(this,t)}}])}(),Pt=Q.litHtmlPolyfillSupport;null!=Pt&&Pt(wt,xt),(null!==(J=Q.litHtmlVersions)&&void 0!==J?J:Q.litHtmlVersions=[]).push("3.3.0");
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Tt,zt,Mt,Ut=globalThis,Nt=Ut.ShadowRoot&&(void 0===Ut.ShadyCSS||Ut.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ht=Symbol(),Rt=new WeakMap,Lt=function(){return c((function t(e,i,n){if(s(this,t),this._$cssResult$=!0,n!==Ht)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}),[{key:"styleSheet",get:function(){var t=this.o,e=this.t;if(Nt&&void 0===t){var i=void 0!==e&&1===e.length;i&&(t=Rt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Rt.set(e,t))}return t}},{key:"toString",value:function(){return this.cssText}}])}(),Dt=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var r=1===t.length?t[0]:i.reduce((function(e,i,n){return e+function(t){if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(i)+t[n+1]}),t[0]);return new Lt(r,t,Ht)},It=Nt?function(t){return t}:function(t){return t instanceof CSSStyleSheet?function(t){var e,i="",n=d(t.cssRules);try{for(n.s();!(e=n.n()).done;){i+=e.value.cssText}}catch(t){n.e(t)}finally{n.f()}return function(t){return new Lt("string"==typeof t?t:t+"",void 0,Ht)}(i)}(t):t},Bt=Object.is,qt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,Vt=Object.getOwnPropertyNames,Wt=Object.getOwnPropertySymbols,Zt=Object.getPrototypeOf,Gt=globalThis,Kt=Gt.trustedTypes,Jt=Kt?Kt.emptyScript:"",Yt=Gt.reactiveElementPolyfillSupport,Qt=function(t,e){return t},Xt={toAttribute:function(t,e){switch(e){case Boolean:t=t?Jt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute:function(t,e){var i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},te=function(t,e){return!Bt(t,e)},ee={attribute:!0,type:String,converter:Xt,reflect:!1,useDefault:!1,hasChanged:te};null!==(Tt=Symbol.metadata)&&void 0!==Tt||(Symbol.metadata=Symbol("metadata")),null!==(zt=Gt.litPropertyMetadata)&&void 0!==zt||(Gt.litPropertyMetadata=new WeakMap);var ie,ne=function(t){function e(){var t;return s(this,e),(t=o(this,e))._$Ep=void 0,t.isUpdatePending=!1,t.hasUpdated=!1,t._$Em=null,t._$Ev(),t}return f(e,t),c(e,[{key:"_$Ev",value:function(){var t,e=this;this._$ES=new Promise((function(t){return e.enableUpdating=t})),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((function(t){return t(e)}))}},{key:"addController",value:function(t){var e,i;(null!==(e=this._$EO)&&void 0!==e?e:this._$EO=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}},{key:"removeController",value:function(t){var e;null===(e=this._$EO)||void 0===e||e.delete(t)}},{key:"_$E_",value:function(){var t,e=new Map,i=d(this.constructor.elementProperties.keys());try{for(i.s();!(t=i.n()).done;){var n=t.value;this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n])}}catch(t){i.e(t)}finally{i.f()}e.size>0&&(this._$Ep=e)}},{key:"createRenderRoot",value:function(){var t,e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return function(t,e){if(Nt)t.adoptedStyleSheets=e.map((function(t){return t instanceof CSSStyleSheet?t:t.styleSheet}));else{var i,n=d(e);try{for(n.s();!(i=n.n()).done;){var r=i.value,a=document.createElement("style"),o=Ut.litNonce;void 0!==o&&a.setAttribute("nonce",o),a.textContent=r.cssText,t.appendChild(a)}}catch(t){n.e(t)}finally{n.f()}}}(e,this.constructor.elementStyles),e}},{key:"connectedCallback",value:function(){var t,e;null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$EO)||void 0===e||e.forEach((function(t){var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}},{key:"enableUpdating",value:function(t){}},{key:"disconnectedCallback",value:function(){var t;null===(t=this._$EO)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}},{key:"attributeChangedCallback",value:function(t,e,i){this._$AK(t,i)}},{key:"_$ET",value:function(t,e){var i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){var r,a=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:Xt).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}},{key:"_$AK",value:function(t,e){var i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){var r,a,o,s,l=i.getPropertyOptions(n),c="function"==typeof l.converter?{fromAttribute:l.converter}:void 0!==(null===(r=l.converter)||void 0===r?void 0:r.fromAttribute)?l.converter:Xt;this._$Em=n,this[n]=null!==(a=null!==(o=c.fromAttribute(e,l.type))&&void 0!==o?o:null===(s=this._$Ej)||void 0===s?void 0:s.get(n))&&void 0!==a?a:null,this._$Em=null}}},{key:"requestUpdate",value:function(t,e,i){if(void 0!==t){var n,r,a,o=this.constructor,s=this[t];if(null!==(n=i)&&void 0!==n||(i=o.getPropertyOptions(t)),!((null!==(r=i.hasChanged)&&void 0!==r?r:te)(s,e)||i.useDefault&&i.reflect&&s===(null===(a=this._$Ej)||void 0===a?void 0:a.get(t))&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}},{key:"C",value:function(t,e,i,n){var r,a,o,s=i.useDefault,l=i.reflect,c=i.wrapped;s&&!(null!==(r=this._$Ej)&&void 0!==r?r:this._$Ej=new Map).has(t)&&(this._$Ej.set(t,null!==(a=null!=n?n:e)&&void 0!==a?a:this[t]),!0!==c||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===l&&this._$Em!==t&&(null!==(o=this._$Eq)&&void 0!==o?o:this._$Eq=new Set).add(t))}},{key:"_$EP",value:(i=a(g().mark((function t(){var e;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isUpdatePending=!0,t.prev=1,t.next=4,this._$ES;case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),Promise.reject(t.t0);case 9:if(e=this.scheduleUpdate(),t.t1=null!=e,!t.t1){t.next=14;break}return t.next=14,e;case 14:return t.abrupt("return",!this.isUpdatePending);case 15:case"end":return t.stop()}}),t,this,[[1,6]])}))),function(){return i.apply(this,arguments)})},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){if(this.isUpdatePending){if(!this.hasUpdated){var t;if(null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this._$Ep){var e,i=d(this._$Ep);try{for(i.s();!(e=i.n()).done;){var n=b(e.value,2),r=n[0],a=n[1];this[r]=a}}catch(t){i.e(t)}finally{i.f()}this._$Ep=void 0}var o=this.constructor.elementProperties;if(o.size>0){var s,l=d(o);try{for(l.s();!(s=l.n()).done;){var c=b(s.value,2),u=c[0],h=c[1],p=h.wrapped,f=this[u];!0!==p||this._$AL.has(u)||void 0===f||this.C(u,void 0,h,f)}}catch(t){l.e(t)}finally{l.f()}}}var v=!1,m=this._$AL;try{var _;(v=this.shouldUpdate(m))?(this.willUpdate(m),null!==(_=this._$EO)&&void 0!==_&&_.forEach((function(t){var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(m)):this._$EM()}catch(m){throw v=!1,this._$EM(),m}v&&this._$AE(m)}}},{key:"willUpdate",value:function(t){}},{key:"_$AE",value:function(t){var e;null!==(e=this._$EO)&&void 0!==e&&e.forEach((function(t){var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}},{key:"_$EM",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$ES}},{key:"shouldUpdate",value:function(t){return!0}},{key:"update",value:function(t){var e=this;this._$Eq&&(this._$Eq=this._$Eq.forEach((function(t){return e._$ET(t,e[t])}))),this._$EM()}},{key:"updated",value:function(t){}},{key:"firstUpdated",value:function(t){}}],[{key:"addInitializer",value:function(t){var e;this._$Ei(),(null!==(e=this.l)&&void 0!==e?e:this.l=[]).push(t)}},{key:"observedAttributes",get:function(){return this.finalize(),this._$Eh&&w(this._$Eh.keys())}},{key:"createProperty",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ee;if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){var i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&qt(this.prototype,t,n)}}},{key:"getPropertyDescriptor",value:function(t,e,i){var n,r=null!==(n=Ft(this.prototype,t))&&void 0!==n?n:{get:function(){return this[e]},set:function(t){this[e]=t}},a=r.get,o=r.set;return{get:a,set:function(e){var n=null==a?void 0:a.call(this);null!=o&&o.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(t){var e;return null!==(e=this.elementProperties.get(t))&&void 0!==e?e:ee}},{key:"_$Ei",value:function(){if(!this.hasOwnProperty(Qt("elementProperties"))){var t=Zt(this);t.finalize(),void 0!==t.l&&(this.l=w(t.l)),this.elementProperties=new Map(t.elementProperties)}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(Qt("finalized"))){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Qt("properties"))){var t,e=this.properties,i=d([].concat(w(Vt(e)),w(Wt(e))));try{for(i.s();!(t=i.n()).done;){var n=t.value;this.createProperty(n,e[n])}}catch(t){i.e(t)}finally{i.f()}}var r=this[Symbol.metadata];if(null!==r){var a=litPropertyMetadata.get(r);if(void 0!==a){var o,s=d(a);try{for(s.s();!(o=s.n()).done;){var l=b(o.value,2),c=l[0],u=l[1];this.elementProperties.set(c,u)}}catch(t){s.e(t)}finally{s.f()}}}this._$Eh=new Map;var h,p=d(this.elementProperties);try{for(p.s();!(h=p.n()).done;){var f=b(h.value,2),v=f[0],m=f[1],_=this._$Eu(v,m);void 0!==_&&this._$Eh.set(_,v)}}catch(t){p.e(t)}finally{p.f()}this.elementStyles=this.finalizeStyles(this.styles)}}},{key:"finalizeStyles",value:function(t){var e=[];if(Array.isArray(t)){var i,n=d(new Set(t.flat(1/0).reverse()));try{for(n.s();!(i=n.n()).done;){var r=i.value;e.unshift(It(r))}}catch(t){n.e(t)}finally{n.f()}}else void 0!==t&&e.push(It(t));return e}},{key:"_$Eu",value:function(t,e){var i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}}]);var i}(E(HTMLElement));ne.elementStyles=[],ne.shadowRootOptions={mode:"open"},ne[Qt("elementProperties")]=new Map,ne[Qt("finalized")]=new Map,null!=Yt&&Yt({ReactiveElement:ne}),(null!==(Mt=Gt.reactiveElementVersions)&&void 0!==Mt?Mt:Gt.reactiveElementVersions=[]).push("2.1.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var re=globalThis,ae=re.trustedTypes,oe=ae?ae.createPolicy("lit-html",{createHTML:function(t){return t}}):void 0,se="$lit$",le="lit$".concat(Math.random().toFixed(9).slice(2),"$"),ce="?"+le,de="<".concat(ce,">"),ue=document,he=function(){return ue.createComment("")},pe=function(t){return null===t||"object"!=A(t)&&"function"!=typeof t},fe=Array.isArray,ve="[ \t\n\f\r]",me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_e=/-->/g,ge=/>/g,ye=RegExp(">|".concat(ve,"(?:([^\\s\"'>=/]+)(").concat(ve,"*=").concat(ve,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),be=/'/g,$e=/"/g,we=/^(?:script|style|textarea|title)$/i,ke=function(t){return function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return{_$litType$:t,strings:e,values:n}}}(1),Ae=Symbol.for("lit-noChange"),xe=Symbol.for("lit-nothing"),Ee=new WeakMap,Se=ue.createTreeWalker(ue,129);function Ce(t,e){if(!fe(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==oe?oe.createHTML(e):e}var Oe=function(t,e){for(var i,n=t.length-1,r=[],a=2===e?"<svg>":3===e?"<math>":"",o=me,s=0;s<n;s++){for(var l=t[s],c=void 0,d=void 0,u=-1,h=0;h<l.length&&(o.lastIndex=h,null!==(d=o.exec(l)));){var p;h=o.lastIndex,o===me?"!--"===d[1]?o=_e:void 0!==d[1]?o=ge:void 0!==d[2]?(we.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=ye):void 0!==d[3]&&(o=ye):o===ye?">"===d[0]?(o=null!==(p=i)&&void 0!==p?p:me,u=-1):void 0===d[1]?u=-2:(u=o.lastIndex-d[2].length,c=d[1],o=void 0===d[3]?ye:'"'===d[3]?$e:be):o===$e||o===be?o=ye:o===_e||o===ge?o=me:(o=ye,i=void 0)}var f=o===ye&&t[s+1].startsWith("/>")?" ":"";a+=o===me?l+de:u>=0?(r.push(c),l.slice(0,u)+se+l.slice(u)+le+f):l+le+(-2===u?s:f)}return[Ce(t,a+(t[n]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]},je=function(){return c((function t(e,i){var n,r=e.strings,a=e._$litType$;s(this,t),this.parts=[];var o=0,l=0,c=r.length-1,u=this.parts,h=b(Oe(r,a),2),p=h[0],f=h[1];if(this.el=t.createElement(p,i),Se.currentNode=this.el.content,2===a||3===a){var v=this.el.content.firstChild;v.replaceWith.apply(v,w(v.childNodes))}for(;null!==(n=Se.nextNode())&&u.length<c;){if(1===n.nodeType){if(n.hasAttributes()){var m,_=d(n.getAttributeNames());try{for(_.s();!(m=_.n()).done;){var g=m.value;if(g.endsWith(se)){var y=f[l++],$=n.getAttribute(g).split(le),k=/([.?@])?(.*)/.exec(y);u.push({type:1,index:o,name:k[2],strings:$,ctor:"."===k[1]?Ue:"?"===k[1]?Ne:"@"===k[1]?He:Me}),n.removeAttribute(g)}else g.startsWith(le)&&(u.push({type:6,index:o}),n.removeAttribute(g))}}catch(t){_.e(t)}finally{_.f()}}if(we.test(n.tagName)){var A=n.textContent.split(le),x=A.length-1;if(x>0){n.textContent=ae?ae.emptyScript:"";for(var E=0;E<x;E++)n.append(A[E],he()),Se.nextNode(),u.push({type:2,index:++o});n.append(A[x],he())}}}else if(8===n.nodeType)if(n.data===ce)u.push({type:2,index:o});else for(var S=-1;-1!==(S=n.data.indexOf(le,S+1));)u.push({type:7,index:o}),S+=le.length-1;o++}}),null,[{key:"createElement",value:function(t,e){var i=ue.createElement("template");return i.innerHTML=t,i}}])}();function Pe(t,e){var i,n,r,a,o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,l=arguments.length>3?arguments[3]:void 0;if(e===Ae)return e;var c=void 0!==l?null===(i=s._$Co)||void 0===i?void 0:i[l]:s._$Cl,d=pe(e)?void 0:e._$litDirective$;return(null===(n=c)||void 0===n?void 0:n.constructor)!==d&&(null!==(r=c)&&void 0!==r&&null!==(a=r._$AO)&&void 0!==a&&a.call(r,!1),void 0===d?c=void 0:(c=new d(t))._$AT(t,s,l),void 0!==l?(null!==(o=s._$Co)&&void 0!==o?o:s._$Co=[])[l]=c:s._$Cl=c),void 0!==c&&(e=Pe(t,c._$AS(t,e.values),c,l)),e}var Te=function(){return c((function t(e,i){s(this,t),this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}),[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(t){var e,i=this._$AD,n=i.el.content,r=i.parts,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:ue).importNode(n,!0);Se.currentNode=a;for(var o=Se.nextNode(),s=0,l=0,c=r[0];void 0!==c;){var d;if(s===c.index){var u=void 0;2===c.type?u=new ze(o,o.nextSibling,this,t):1===c.type?u=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(u=new Re(o,this,t)),this._$AV.push(u),c=r[++l]}s!==(null===(d=c)||void 0===d?void 0:d.index)&&(o=Se.nextNode(),s++)}return Se.currentNode=ue,a}},{key:"p",value:function(t){var e,i=0,n=d(this._$AV);try{for(n.s();!(e=n.n()).done;){var r=e.value;void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}catch(t){n.e(t)}finally{n.f()}}}])}(),ze=function(){function t(e,i,n,r){var a;s(this,t),this.type=2,this._$AH=xe,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=n,this.options=r,this._$Cv=null===(a=null==r?void 0:r.isConnected)||void 0===a||a}return c(t,[{key:"_$AU",get:function(){var t,e;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cv}},{key:"parentNode",get:function(){var t,e=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(t=e)||void 0===t?void 0:t.nodeType)&&(e=i.parentNode),e}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(t){t=Pe(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),pe(t)?t===xe||null==t||""===t?(this._$AH!==xe&&this._$AR(),this._$AH=xe):t!==this._$AH&&t!==Ae&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):function(t){return fe(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator])}(t)?this.k(t):this._(t)}},{key:"O",value:function(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}},{key:"T",value:function(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}},{key:"_",value:function(t){this._$AH!==xe&&pe(this._$AH)?this._$AA.nextSibling.data=t:this.T(ue.createTextNode(t)),this._$AH=t}},{key:"$",value:function(t){var e,i=t.values,n=t._$litType$,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=je.createElement(Ce(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(i);else{var a=new Te(r,this),o=a.u(this.options);a.p(i),this.T(o),this._$AH=a}}},{key:"_$AC",value:function(t){var e=Ee.get(t.strings);return void 0===e&&Ee.set(t.strings,e=new je(t)),e}},{key:"k",value:function(e){fe(this._$AH)||(this._$AH=[],this._$AR());var i,n,r=this._$AH,a=0,o=d(e);try{for(o.s();!(n=o.n()).done;){var s=n.value;a===r.length?r.push(i=new t(this.O(he()),this.O(he()),this,this.options)):i=r[a],i._$AI(s),a++}}catch(t){o.e(t)}finally{o.f()}a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}},{key:"_$AR",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,e=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){var i,n=t.nextSibling;t.remove(),t=n}}},{key:"setConnected",value:function(t){var e;void 0===this._$AM&&(this._$Cv=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}])}(),Me=function(){return c((function t(e,i,n,r,a){s(this,t),this.type=1,this._$AH=xe,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=a,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=xe}),[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,r=this.strings,a=!1;if(void 0===r)t=Pe(this,t,e,0),(a=!pe(t)||t!==this._$AH&&t!==Ae)&&(this._$AH=t);else{var o,s,l=t;for(t=r[0],o=0;o<r.length-1;o++){var c;(s=Pe(this,l[i+o],e,o))===Ae&&(s=this._$AH[o]),a||(a=!pe(s)||s!==this._$AH[o]),s===xe?t=xe:t!==xe&&(t+=(null!==(c=s)&&void 0!==c?c:"")+r[o+1]),this._$AH[o]=s}}a&&!n&&this.j(t)}},{key:"j",value:function(t){t===xe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}])}(),Ue=function(t){function e(){var t;return s(this,e),(t=o(this,e,arguments)).type=3,t}return f(e,t),c(e,[{key:"j",value:function(t){this.element[this.name]=t===xe?void 0:t}}])}(Me),Ne=function(t){function e(){var t;return s(this,e),(t=o(this,e,arguments)).type=4,t}return f(e,t),c(e,[{key:"j",value:function(t){this.element.toggleAttribute(this.name,!!t&&t!==xe)}}])}(Me),He=function(t){function e(t,i,n,r,a){var l;return s(this,e),(l=o(this,e,[t,i,n,r,a])).type=5,l}return f(e,t),c(e,[{key:"_$AI",value:function(t){var e;if((t=null!==(e=Pe(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:xe)!==Ae){var i=this._$AH,n=t===xe&&i!==xe||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==xe&&(i===xe||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}}},{key:"handleEvent",value:function(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}])}(Me),Re=function(){return c((function t(e,i,n){s(this,t),this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}),[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){Pe(this,t)}}])}(),Le=re.litHtmlPolyfillSupport;null!=Le&&Le(je,ze),(null!==(ie=re.litHtmlVersions)&&void 0!==ie?ie:re.litHtmlVersions=[]).push("3.3.0");var De,Ie,Be=globalThis,qe=function(t){function e(){var t;return s(this,e),(t=o(this,e,arguments)).renderOptions={host:n(t)},t._$Do=void 0,t}return f(e,t),c(e,[{key:"createRenderRoot",value:function(){var t,i,n=$(e,"createRenderRoot",this)([]);return null!==(i=(t=this.renderOptions).renderBefore)&&void 0!==i||(t.renderBefore=n.firstChild),n}},{key:"update",value:function(t){var i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),$(e,"update",this)([t]),this._$Do=function(t,e,i){var n,r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e,a=r._$litPart$;if(void 0===a){var o,s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=a=new ze(e.insertBefore(he(),s),s,void 0,null!=i?i:{})}return a._$AI(t),a}(i,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var t;$(e,"connectedCallback",this)([]),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var t;$(e,"disconnectedCallback",this)([]),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}},{key:"render",value:function(){return Ae}}])}(ne);qe._$litElement$=!0,qe.finalized=!0,null===(De=Be.litElementHydrateSupport)||void 0===De||De.call(Be,{LitElement:qe});var Fe=Be.litElementPolyfillSupport;null==Fe||Fe({LitElement:qe}),(null!==(Ie=Be.litElementVersions)&&void 0!==Ie?Ie:Be.litElementVersions=[]).push("4.2.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Ve,We,Ze=function(t){return function(e,i){void 0!==i?i.addInitializer((function(){customElements.define(t,e)})):customElements.define(t,e)}},Ge={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:G};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Ke(t){return function(e,i){return"object"==A(i)?function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,n=i.kind,r=i.metadata,a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===n){var o=i.name;return{set:function(i){var n=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,n,t)},init:function(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){var s=i.name;return function(i){var n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+n)}(t,e,i):function(t,e,i){var n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0}(t,e,i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Je(t){return Ke(_(_({},t),{},{state:!0,attribute:!1}))}function Ye(t){return t.substr(0,t.indexOf("."))}function Qe(t){return t.substr(t.indexOf(".")+1)}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Ve||(Ve={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(We||(We={}));var Xe=function(t,e,i,n){n=n||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return r.detail=i,t.dispatchEvent(r),r},ti={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function ei(t,e){if(t in ti)return ti[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return e&&"off"===e?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===e?"mdi:window-closed":"mdi:window-open";case"lock":return e&&"unlocked"===e?"mdi:lock-open":"mdi:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"mdi:cast-connected":"mdi:cast";case"zwave":switch(e){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"mdi:bookmark"}}var ii={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},ni={binary_sensor:function(t,e){var i="off"===t;switch(null==e?void 0:e.attributes.device_class){case"battery":return i?"mdi:battery":"mdi:battery-outline";case"battery_charging":return i?"mdi:battery":"mdi:battery-charging";case"cold":return i?"mdi:thermometer":"mdi:snowflake";case"connectivity":return i?"mdi:server-network-off":"mdi:server-network";case"door":return i?"mdi:door-closed":"mdi:door-open";case"garage_door":return i?"mdi:garage":"mdi:garage-open";case"power":case"plug":return i?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return i?"mdi:check-circle":"mdi:alert-circle";case"smoke":return i?"mdi:check-circle":"mdi:smoke";case"heat":return i?"mdi:thermometer":"mdi:fire";case"light":return i?"mdi:brightness-5":"mdi:brightness-7";case"lock":return i?"mdi:lock":"mdi:lock-open";case"moisture":return i?"mdi:water-off":"mdi:water";case"motion":return i?"mdi:walk":"mdi:run";case"occupancy":case"presence":return i?"mdi:home-outline":"mdi:home";case"opening":return i?"mdi:square":"mdi:square-outline";case"running":return i?"mdi:stop":"mdi:play";case"sound":return i?"mdi:music-note-off":"mdi:music-note";case"update":return i?"mdi:package":"mdi:package-up";case"vibration":return i?"mdi:crop-portrait":"mdi:vibrate";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"mdi:garage-open":"mdi:garage";case"door":return e?"mdi:door-open":"mdi:door-closed";case"shutter":return e?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return e?"mdi:blinds-open":"mdi:blinds";case"window":return e?"mdi:window-open":"mdi:window-closed";default:return ei("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in ii)return ii[e];if("battery"===e){var i=Number(t.state);if(isNaN(i))return"mdi:battery-unknown";var n=10*Math.round(i/10);return n>=100?"mdi:battery":n<=0?"mdi:battery-alert":"hass:battery-"+n}var r=t.attributes.unit_of_measurement;return"°C"===r||"°F"===r?"mdi:thermometer":ei("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?ei("input_datetime"):"mdi:calendar":"mdi:clock"}},ri=1,ai=function(){return c((function t(e){s(this,t)}),[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AT",value:function(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}},{key:"_$AS",value:function(t,e){return this.update(t,e)}},{key:"update",value:function(t,e){return this.render.apply(this,w(e))}}])}(),oi="important",si=" !"+oi,li=function(t){return function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return{_$litDirective$:t,values:i}}}(function(t){function e(t){var i,n;if(s(this,e),n=o(this,e,[t]),t.type!==ri||"style"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");return n}return f(e,t),c(e,[{key:"render",value:function(t){return Object.keys(t).reduce((function(e,i){var n=t[i];return null==n?e:e+"".concat(i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase(),":").concat(n,";")}),"")}},{key:"update",value:function(t,e){var i=b(e,1)[0],n=t.element.style;if(void 0===this.ft)return this.ft=new Set(Object.keys(i)),this.render(i);var r,a=d(this.ft);try{for(a.s();!(r=a.n()).done;){var o=r.value;null==i[o]&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null)}}catch(t){a.e(t)}finally{a.f()}for(var s in i){var l=i[s];if(null!=l){this.ft.add(s);var c="string"==typeof l&&l.endsWith(si);s.includes("-")||c?n.setProperty(s,c?l.slice(0,-11):l,c?oi:""):n[s]=l}}return _t}}])}(ai));const ci="number";var di;!function(t){t.Disarmed="disarmed",t.Arming="arming",t.Pending="pending",t.Triggered="triggered",t.ArmedAway="armed_away",t.ArmedHome="armed_home",t.ArmedNight="armed_night",t.ArmedVacation="armed_vacation",t.ArmedCustomBypass="armed_custom_bypass"}(di||(di={}));const ui={[di.ArmedAway]:"hass:shield-lock",[di.ArmedHome]:"hass:shield-home",[di.ArmedNight]:"hass:shield-moon",[di.ArmedVacation]:"hass:shield-airplane",[di.ArmedCustomBypass]:"hass:security",[di.Disarmed]:"hass:shield-off",[di.Arming]:"hass:shield-outline",[di.Pending]:"hass:shield-outline",[di.Triggered]:"hass:bell-ring"},hi={[di.ArmedAway]:"mdi:lock",[di.ArmedHome]:"mdi:home",[di.ArmedNight]:"mdi:moon-waning-crescent",[di.ArmedVacation]:"mdi:airplane",[di.ArmedCustomBypass]:"mdi:shield",[di.Disarmed]:"hass:shield-off",[di.Arming]:"hass:shield-outline",[di.Pending]:"hass:shield-outline",[di.Triggered]:"hass:bell-ring"};var pi;!function(t){t.ArmAway="arm_away",t.ArmHome="arm_home",t.ArmNight="arm_night",t.ArmVacation="arm_vacation",t.ArmCustomBypass="arm_custom_bypass",t.Disarm="disarm",t.SwitchMode="switch_mode"}(pi||(pi={}));const fi={[pi.ArmAway]:di.ArmedAway,[pi.ArmHome]:di.ArmedHome,[pi.ArmNight]:di.ArmedNight,[pi.ArmVacation]:di.ArmedVacation,[pi.ArmCustomBypass]:di.ArmedCustomBypass,[pi.Disarm]:di.Disarmed};var vi;!function(t){t.Arm="arm",t.Trigger="trigger",t.FailedToArm="failed_to_arm",t.CommandNotAllowed="command_not_allowed",t.NoCodeProvided="no_code_provided",t.InvalidCodeProvided="invalid_code_provided",t.TriggerTimeExpired="trigger_time_expired",t.ReadyToArmModesChanged="ready_to_arm_modes_changed"}(vi||(vi={}));const mi=["arming","pending"],_i={type:"",entity:"",name:"",keep_keypad_visible:!1,use_clear_icon:!1,button_scale_actions:1,button_scale_keypad:1,states:{},show_messages:!0,show_name:!0,show_ready_indicator:!0,show_bypassed_sensors:!0},gi=2.5,yi={skip_delay:!1,force:!1};var bi={heading:"Možnosti aktivace",skip_delay:"Přeskočit čas pro vystup",force:"Bypass otevřených senzorů"},$i={keep_keypad_visible:"Zachovat klávesnici vždy viditelnou, i když není vyžadován žádný kód.",button_scale_actions:"Měřítko použité pro změnu velikosti tlačítek akcí.",button_scale_keypad:"Měřítko použité pro změnu velikosti tlačítek klávesnice.",use_clear_icon:"Zobrazit ikonu (namísto textu) na klávesnici pro vymazání zadávaného kódu.",show_messages:"Zobrazit diagnostické zprávy při spuštění alarmu nebo nemožnosti aktivace.",show_ready_indicator:"Zobrazit indikátor připraveno/nepřipraveno na tlačítkách režimu aktivace.",show_bypassed_sensors:"Zobrazit varování při aktivaci alarmu s přemostěnými senzory.",available_actions:"Dostupné akce:",action_dialog:{title:"Upravit zobrazení akce '{action}'",show_button:"Zobrazit tlačítko pro tuto akci",button_label:"Přepsat popisek tlačítka",state_label:"Přepsat popisek stavu"}},wi={blocking_sensors:"Nelze aktivovat kvůli následujícím senzorům",triggered_sensors:"Alarm byl spuštěn následujícími senzory",bypassed_sensors:"Jsou tam přemostěné senzory"},ki={arm_options:bi,editor:$i,errors:wi},Ai={heading:"Options for arming",skip_delay:"Skip exit delay",force:"Bypass open sensors"},xi={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale_actions:"Scaling factor to apply for resizing the action buttons.",button_scale_keypad:"Scaling factor to apply for resizing the keypad buttons.",use_clear_icon:"Show icon (instead of text) in keypad for clearing code input.",show_name:"Display entity name.",show_messages:"Display diagnostic messages when alarm is triggered or cannot be armed.",show_ready_indicator:"Show ready/not ready indicator on arm mode buttons.",show_bypassed_sensors:"Show warning message when alarm is armed with bypassed sensors.",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",show_button:"Show button for this action",button_label:"Override button label",state_label:"Override state label"}},Ei={blocking_sensors:"Blocking sensors",triggered_sensors:"Alarm triggered by",bypassed_sensors:"There are bypassed sensors"},Si={arm_options:Ai,editor:xi,errors:Ei},Ci={heading:"Opciones de armado",skip_delay:"Omitir el retardo de salida",force:"Pasar por alto los sensores abiertos"},Oi={keep_keypad_visible:"Mantener el teclado siempre visible, también cuando no se requiere ninguna entrada de código.",button_scale_actions:"Factor de escalado para cambiar el tamaño de los botones de acción.",button_scale_keypad:"Factor de escalado para cambiar el tamaño de los botones del teclado.",use_clear_icon:"Mostrar icono (en lugar de texto) en el teclado para borrar la entrada de código.",show_messages:"Mostrar mensajes de diagnóstico cuando se activa la alarma o no se puede activar.",show_ready_indicator:"Mostrar indicador listo/no listo en los botones de modo armado.",show_bypassed_sensors:"Mostrar advertencia cuando la alarma está activada con sensores omitidos.",available_actions:"Acciones disponibles:",action_dialog:{title:"Personalizar la visualización de la acción '{action}'",show_button:"mostrar botón para esta acción",button_label:"Sobrescribir el texto del botón",state_label:"Sobrescribir el texto de estado"}},ji={blocking_sensors:"No se pudo armar debido a los siguientes sensores",triggered_sensors:"La alarma fue disparada por los siguientes sensores",bypassed_sensors:"Hay sensores omitidos"},Pi={arm_options:Ci,editor:Oi,errors:ji},Ti={heading:"Options pour l'armement",skip_delay:"Ignorer le délai de sortie",force:"Bypasser les capteurs ouverts"},zi={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale_actions:"Facteur d'échelle à appliquer pour le redimensionnement des boutons des actions.",button_scale_keypad:"Facteur d'échelle à appliquer pour le redimensionnement des boutons du clavier.",use_clear_icon:"Afficher l'icône (au lieu du texte) sur le clavier pour effacer la saisie du code.",show_messages:"Afficher les messages de diagnostic lorsque l'alarme est déclenchée ou ne peut pas être armée.",show_ready_indicator:"Afficher l'indicateur prêt/pas prêt sur les boutons de mode d'armement.",show_bypassed_sensors:"Afficher un avertissement lorsque l'alarme est armée avec des capteurs ignorés.",available_actions:"Actions disponibles:",action_dialog:{title:"Personnaliser l'affichage de l'action '{action}'",show_button:"Afficher le bouton pour cette action",button_label:"Remplacer le libellé du bouton",state_label:"Remplacer l'étiquette d'état"}},Mi={blocking_sensors:"Impossible d'armer en raison du(es) capteur(s) suivant(s)",triggered_sensors:"L'alarme a été déclenchée par le(s) capteur(s) suivant(s)",bypassed_sensors:"Il y a des capteurs ignorés"},Ui={arm_options:Ti,editor:zi,errors:Mi},Ni={heading:"Opzioni di inserimento",skip_delay:"Ignorare il ritardo di uscita",force:"Ignorare i sensori aperti"},Hi={keep_keypad_visible:"Mantenere la tastiera sempre visibile, anche quando nessun codice è richiesto.",button_scale_actions:"Fattore di scala da applicare per ridimensionare i pulsanti di azione.",button_scale_keypad:"Fattore di scala da applicare per ridimensionare i pulsanti della tastiera.",use_clear_icon:"Mostrare l'icona (invece del testo) sulla tastiera per cancellare il codice digitato.",show_messages:"Mostrare messaggi diagnostici quando l'allarme viene attivato o non può essere inserito.",show_ready_indicator:"Mostra l'indicatore pronto/non pronto sui pulsanti della modalità di inserimento.",show_bypassed_sensors:"Mostra avviso quando l'allarme è armato con sensori esclusi.",available_actions:"Azioni disponibili:",action_dialog:{title:"Personalizzare la visualizzazione dell'azione '{action}'",show_button:"Mostra il pulsante per questa azione",button_label:"Sovrascrivere l'etichetta del pulsante",state_label:"Sovrascrivere l'etichetta di stato"}},Ri={blocking_sensors:"Impossibile inserire l'allarme a causa dei seguenti sensori",triggered_sensors:"L'allarme è stato attivato dai seguenti sensori",bypassed_sensors:"Sono presenti sensori esclusi"},Li={arm_options:Ni,editor:Hi,errors:Ri},Di={heading:"Opties voor inschakelen",skip_delay:"Sla vertraging over",force:"Negeer open sensoren"},Ii={keep_keypad_visible:"Houd het keypad altijd zichtbaar, ook wanneer er geen code vereist is.",button_scale_actions:"Schaalfactor actieknoppen",button_scale_keypad:"Schaalfactor keypadknoppen",use_clear_icon:"Toon pictogram (in plaats van tekst) in keypad om code-invoer te wissen.",show_messages:"Toon diagnostische berichten wanneer het alarm wordt geactiveerd of niet kan worden ingeschakeld.",show_ready_indicator:"Toon gereed/niet gereed-indicator op inschakelmodusknoppen.",show_bypassed_sensors:"Toon melding wanneer het alarm is ingeschakeld met omzeilde sensoren.",available_actions:"Beschikbare acties:",action_dialog:{title:"Weergave van actie '{action}' aanpassen",show_button:"Toon knop voor deze actie",button_label:"Knoplabel overschrijven",state_label:"Statuslabel overschrijven"}},Bi={blocking_sensors:"Kon niet inschakelen vanwege de volgende sensoren",triggered_sensors:"Alarm werd geactiveerd door de volgende sensoren",bypassed_sensors:"Er zijn omzeilde sensoren"},qi={arm_options:Di,editor:Ii,errors:Bi},Fi={heading:"Opções para armar",skip_delay:"Omitir tempo para sair",force:"Ignorar os sensores abertos"},Vi={keep_keypad_visible:"Mantenha o teclado sempre visível, mesmo quando não for necessária nenhuma entrada de código.",button_scale_actions:"Fator de escala para redimensionar botões de ação.",button_scale_keypad:"Fator de escala para redimensionar os botões do teclado.",use_clear_icon:"Mostre o ícone (em vez de texto) no teclado para limpar a entrada do código.",show_messages:"Mostrar mensagens de diagnóstico quando o alarme estiver disparado ou não puder ser armado.",show_ready_indicator:"Mostrar indicador de disponível/não disponível nos botões do modo de armar.",show_bypassed_sensors:"Mostrar aviso quando o alarme for ativado com sensores ignorados.",available_actions:"Ações disponíveis:",action_dialog:{title:"Personalize a exibição da ação '{action}'",show_button:"Mostrar botão para esta ação",button_label:"Substituir texto do botão",state_label:"Substituir texto de status"}},Wi={blocking_sensors:"Não foi possível armar devido aos seguintes sensores",triggered_sensors:"O alarme foi disparado pelos seguintes sensores",bypassed_sensors:"Existem sensores ignorados"},Zi={arm_options:Fi,editor:Vi,errors:Wi},Gi={heading:"警戒选项",skip_delay:"跳过离开延迟",force:"绕过开放的传感器"},Ki={keep_keypad_visible:"保持小键盘总是可见，即使不需要输入密码",button_scale_actions:"调整动作按键大小的缩放系数",button_scale_keypad:"调整小键盘按键大小的缩放系数",use_clear_icon:"在小键盘上显示图标（而不是文字），用于清除密码输入。",show_messages:"当警报被触发或无法警戒时，显示诊断信息。",show_ready_indicator:"在手臂模式按钮上显示就绪/未就绪指示器。",show_bypassed_sensors:"当警报配备旁路传感器时显示警告消息。",available_actions:"可用动作：",action_dialog:{title:"自定义动作'{action}'的显示",show_button:"显示此操作的按钮",button_label:"覆盖按钮标签",state_label:"覆盖状态标签"}},Ji={blocking_sensors:"由于以下传感器而无法警戒",triggered_sensors:"警报是由以下传感器触发的",bypassed_sensors:"有绕过的传感器"},Yi={arm_options:Gi,editor:Ki,errors:Ji},Qi={cs:Object.freeze({__proto__:null,arm_options:bi,default:ki,editor:$i,errors:wi}),en:Object.freeze({__proto__:null,arm_options:Ai,default:Si,editor:xi,errors:Ei}),es:Object.freeze({__proto__:null,arm_options:Ci,default:Pi,editor:Oi,errors:ji}),fr:Object.freeze({__proto__:null,arm_options:Ti,default:Ui,editor:zi,errors:Mi}),it:Object.freeze({__proto__:null,arm_options:Ni,default:Li,editor:Hi,errors:Ri}),nl:Object.freeze({__proto__:null,arm_options:Di,default:qi,editor:Ii,errors:Bi}),"pt-BR":Object.freeze({__proto__:null,arm_options:Fi,default:Zi,editor:Vi,errors:Wi}),"zh-Hans":Object.freeze({__proto__:null,arm_options:Gi,default:Yi,editor:Ki,errors:Ji})};function Xi(t,e,i="",n=""){const r=e.replace(/['"]+/g,"").replace("-","_");var a;try{a=t.split(".").reduce(((t,e)=>t[e]),Qi[r])}catch(e){a=t.split(".").reduce(((t,e)=>t[e]),Qi.en)}if(void 0===a&&(a=t.split(".").reduce(((t,e)=>t[e]),Qi.en)),""!==i&&""!==n){Array.isArray(i)||(i=[i]),Array.isArray(n)||(n=[n]);for(let t=0;t<i.length;t++)a=a.replace(i[t],n[t])}return a}function tn(t){return null!=t}function en(t){switch(typeof t){case"object":return 0==Object.keys(t).length;case"string":return 0==String(t).length;default:return!tn(t)}}const nn=(t,e)=>{let i={hide:!1,button_label:"",state_label:""};return(e.states||{}).hasOwnProperty(t)&&(i=Object.assign(Object.assign({},i),e.states[t])),i},rn=t=>{if(!t)return[];const e=t.attributes.supported_features||0;let i=[];return 2&e&&i.push(pi.ArmAway),1&e&&i.push(pi.ArmHome),4&e&&i.push(pi.ArmNight),32&e&&i.push(pi.ArmVacation),16&e&&i.push(pi.ArmCustomBypass),i},an=(t,e,i)=>{const n=Ye(t.entity_id),r=t.attributes.device_class,a=t.state;if(Object.values(di).includes(a)&&i){const t=nn(a,i);if(!en(t.state_label))return t.state_label}let o="";return r&&(o=e(`component.${n}.entity_component.${r}.state.${t.state}`)),o||(o=e(`component.${n}.entity_component._.state.${t.state}`)),o},on=t=>null!==t.attributes.code_format,sn=t=>t.callWS({type:"alarmo/entities"}),ln=t=>t.callWS({type:"alarmo/config"});let cn=class extends qe{constructor(){super(...arguments),this._entities=null,this._editAction=null}async firstUpdated(){sn(this.hass).then((t=>{this._entities=t.map((t=>t.entity_id))})).catch((t=>{var e;null===(e=this.hass)||void 0===e||e.callService("system_log","write",{message:`Failed to fetch entities: ${t}`,level:"error"})})),this._alarmoConfig=await ln(this.hass)}setConfig(t){!(null==t?void 0:t.button_scale_actions)&&(null==t?void 0:t.button_scale)&&(t=Object.assign(Object.assign({},t),{button_scale_actions:null==t?void 0:t.button_scale})),!(null==t?void 0:t.button_scale_keypad)&&(null==t?void 0:t.button_scale)&&(t=Object.assign(Object.assign({},t),{button_scale_keypad:null==t?void 0:t.button_scale})),this._config=Object.assign(Object.assign({},_i),t)}render(){var t,e,i;if(!this._config||!this.hass||!this._entities)return ke``;if(!this._entities.length)return ke`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const n=this._config.entity?this.hass.states[this._config.entity]:void 0,r=(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)===ci&&(this._alarmoConfig.code_arm_required||this._alarmoConfig.code_disarm_required);if(null!==this._editAction){const t=nn(fi[this._editAction],this._config);return ke`
        <div class="header">
          <div class="back-title">
            <ha-icon-button
              .label=${this.hass.localize("ui.common.back")}
              .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
              @click=${this._goBack}
            ></ha-icon-button>
            <span slot="title"
              >${Xi("editor.action_dialog.title",this.hass.language,"{action}",this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`))}</span
            >
          </div>
        </div>

        <div class="checkbox-item">
          <ha-checkbox
            ?checked=${!t.hide}
            ?disabled=${!t.hide&&1==rn(n).map((t=>fi[t])).filter((t=>!nn(t,this._config).hide)).length||this._editAction==pi.Disarm}
            @change=${t=>this._updateStateConfig(fi[this._editAction],t.target.checked?{hide:void 0}:{hide:!0})}
          >
          </ha-checkbox>
          <span
            @click=${t=>{const e=t.target.previousElementSibling;e.click(),e.blur()}}
          >
            ${Xi("editor.action_dialog.show_button",this.hass.language)}
          </span>
        </div>

        <div class="grid">
          <ha-textfield
            label="${Xi("editor.action_dialog.button_label",this.hass.language)}"
            .value="${t.button_label||""}"
            placeholder="${this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`)}"
            ?disabled=${t.hide}
            @input=${t=>this._updateStateConfig(fi[this._editAction],{button_label:String(t.target.value).trim()})}
          ></ha-textfield>

          <ha-textfield
            label="${Xi("editor.action_dialog.state_label",this.hass.language)}"
            .value="${t.state_label||""}"
            placeholder="${this.hass.localize(`component.alarm_control_panel.entity_component._.state.${fi[this._editAction]}`)}"
            @input=${t=>this._updateStateConfig(fi[this._editAction],{state_label:String(t.target.value).trim()})}
          ></ha-textfield>
        </div>
      `}return ke`
      <div class="card-config">
        <div class="grid">
          <ha-entity-picker
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
            .hass=${this.hass}
            .value="${this._config.entity||""}"
            .includeDomains=${["alarm_control_panel"]}
            .entityFilter=${t=>this._entities.includes(t.entity_id)}
            @change=${t=>this._updateConfig("entity",t.target.value)}
            allow-custom-entity
          ></ha-entity-picker>

          <ha-textfield
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._config.name||""}"
            @input=${t=>this._updateConfig("name",String(t.target.value).trim())}
          ></ha-textfield>
        </div>

        ${n?ke`
              <div class="config-item">
                <span>${Xi("editor.available_actions",this.hass.language)}</span>
              </div>
              <div class="config-row checkbox-list">
                ${[...rn(n),pi.Disarm].map((t=>{const e=rn(n).map((t=>fi[t])),i=nn(fi[t],this._config).hide;return ke`
                    <div class="checkbox-item ${i?"disabled":""}">
                      <ha-checkbox
                        ?checked=${!i}
                        ?disabled=${!i&&1==e.filter((t=>!nn(t,this._config).hide)).length||t==pi.Disarm}
                        @change=${e=>this._updateStateConfig(fi[t],e.target.checked?{hide:void 0}:{hide:!0})}
                      >
                      </ha-checkbox>
                      <span
                        @click=${t=>{const e=t.target.previousElementSibling;e.click(),e.blur()}}
                      >
                        ${this.hass.localize(`ui.card.alarm_control_panel.${t}`)}
                      </span>
                      <ha-icon-button
                        .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
                        style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
                        ?disabled=${nn(fi[t],this._config).hide}
                        @click=${()=>this._editActionClick(t)}
                      >
                      </ha-icon-button>
                    </div>
                  `}))}
              </div>
            `:""}

        <div class="grid">
          <ha-formfield .label=${Xi("editor.button_scale_actions",this.hass.language)}>
            <ha-slider
              value=${this._config.button_scale_actions||1}
              @change=${t=>this._updateConfig("button_scale_actions",Number(t.target.value))}
              min="${1}"
              max="${gi}"
              step="0.1"
              pin
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${Xi("editor.button_scale_keypad",this.hass.language)}>
            <ha-slider
              value=${this._config.button_scale_keypad||1}
              @change=${t=>this._updateConfig("button_scale_keypad",Number(t.target.value))}
              min="${1}"
              max="${gi}"
              step="0.1"
              pin
              ?disabled=${!n||!r}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${Xi("editor.use_clear_icon",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_clear_icon}
              @change=${t=>this._updateConfig("use_clear_icon",t.target.checked)}
              ?disabled=${!n||!r}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Xi("editor.show_messages",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_messages||!tn(this._config.show_messages)}
              @change=${t=>this._updateConfig("show_messages",t.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Xi("editor.show_name",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_name||!tn(this._config.show_name)}
              @change=${t=>this._updateConfig("show_name",t.target.checked)}
            ></ha-switch
            ></ha-formfield>

          <ha-formfield .label=${Xi("editor.keep_keypad_visible",this.hass.language)}>
            <ha-switch
              .checked=${this._config.keep_keypad_visible}
              @change=${t=>this._updateConfig("keep_keypad_visible",t.target.checked)}
              ?disabled=${!n||!r||(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_arm_required)==(null===(i=this._alarmoConfig)||void 0===i?void 0:i.code_disarm_required)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Xi("editor.show_ready_indicator",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_ready_indicator}
              @change=${t=>this._updateConfig("show_ready_indicator",t.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Xi("editor.show_bypassed_sensors",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_bypassed_sensors}
              @change=${t=>this._updateConfig("show_bypassed_sensors",t.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield></ha-formfield>
        </div>
      </div>
    `}_updateConfig(t,e){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[t]:e}),"entity"==t){const t=this._config.entity?this.hass.states[this._config.entity]:void 0;t&&t.attributes.code_arm_required!=t.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}Xe(this,"config-changed",{config:this._config})}}_updateStateConfig(t,e){var i;const n=t=>function(t,e){return t?Object.entries(t).filter((([t])=>e.includes(t))).reduce(((t,[e,i])=>Object.assign(t,{[e]:i})),{}):{}}(t,Object.keys(t).filter((e=>!en(t[e]))));let r=(null===(i=this._config)||void 0===i?void 0:i.states)||{};const a=n(Object.assign(Object.assign({},r[t]),e));r=n(Object.assign(Object.assign({},r),{[t]:a})),this._updateConfig("states",r)}_editActionClick(t){this._editAction=t}_goBack(){this._editAction=null}static get styles(){return Dt`
      div.config-row {
        font-size: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 12px;
      }
      div.config-item {
        padding-top: 20px;
      }
      div.config-row > * {
        display: flex;
        align-items: center;
      }
      ha-textfield {
        width: 100%;
      }
      div.grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px 8px;
      }
      div.grid > * {
        display: flex;
        flex-direction: column;
        flex: 1 0 300px;
      }
      div.checkbox-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0px 8px;
      }
      div.checkbox-item {
        display: flex;
        flex-direction: row;
        flex: 1 0 300px;
        font-size: 0.875rem;
        align-items: center;
      }
      div.checkbox-item.disabled {
        color: var(--disabled-text-color);
      }
      .checkbox-item span {
        cursor: pointer;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .back-title {
        display: flex;
        align-items: center;
        font-size: 18px;
      }
    `}};e([Ke({attribute:!1})],cn.prototype,"hass",void 0),e([Je()],cn.prototype,"_config",void 0),e([Je()],cn.prototype,"_alarmoConfig",void 0),e([Je()],cn.prototype,"_entities",void 0),e([Je()],cn.prototype,"_editAction",void 0),cn=e([Ze("alarmo-card-editor")],cn);var dn=Object.freeze({__proto__:null,get AlarmoCardEditor(){return cn}});class un extends qe{constructor(){super(...arguments),this.duration=0,this.datetime=null,this.timer=0}shouldUpdate(t){if(!t.size)return!0;const e=t.get("hass");if(!e||e.themes!==this.hass.themes||e.language!==this.hass.language)return!0;if(e.states[this.entity].state!==this.hass.states[this.entity].state||e.states[this.entity].attributes.delay!==this.hass.states[this.entity].attributes.delay){const t=e.states[this.entity].state,i=this.hass.states[this.entity].state;return mi.includes(i)?this.startTimer():mi.includes(t)&&this.stopTimer(),!0}return!1}firstUpdated(){const t=this.hass.states[this.entity].state;mi.includes(t)&&this.startTimer()}async startTimer(){var t,e;clearInterval(this.timer),(t=this.hass,e=this.entity,t.callWS({type:"alarmo/countdown",entity_id:e})).then((t=>{this.duration=t.delay,this.datetime=new Date((new Date).getTime()+1e3*t.remaining)})).catch((t=>{})),this.timer=window.setInterval((()=>{this.requestUpdate()}),1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const t=(this.datetime.getTime()-(new Date).getTime())/1e3;return t<0?(clearInterval(this.timer),0):t}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(t){return this.datetime&&this.duration?ke` ${Math.max(Math.round(this.getRemaining()),0)} `:ke` <ha-icon .icon=${ui[t]}></ha-icon> `}render(){let t=45,e=2*Math.PI*t;const i=Ye(this.entity),n=this.hass.states[this.entity],r=this.datetime&&this.duration;return ke`
      <ha-tile-icon
        data-domain=${i}
        data-state=${null==n?void 0:n.state}
      >
        <ha-state-icon
          slot="icon"
          .stateObj=${n}
          .hass=${this.hass}
        ></ha-state-icon>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="track ${n.state.split("_").shift()} ${r?"timer":""}">
          <circle cx="${50}" cy="${50}" r="${t}"></circle>
          <path
            stroke-dasharray="${(this.getFraction()*e).toFixed(2)} ${e.toFixed(2)}"
            class="remaining"
            d="
              M ${50}, ${50}
              m -${t}, 0
              a ${t},${t} 0 1,0 90,0
              a ${t},${t} 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      </ha-tile-icon>
    `}static get styles(){return Dt`
        ha-tile-icon {
            position: relative;
            --tile-icon-color: var(--tile-color);
        }
        ha-tile-icon[data-domain="alarm_control_panel"][data-state="pending"] ha-state-icon,
        ha-tile-icon[data-domain="alarm_control_panel"][data-state="arming"] ha-state-icon,
        ha-tile-icon[data-domain="alarm_control_panel"][data-state="triggered"] ha-state-icon {
            animation: pulse 1s infinite;
        }
        ha-tile-icon[data-domain="alarm_control_panel"][data-state="pending"] svg,
        ha-tile-icon[data-domain="alarm_control_panel"][data-state="arming"] svg,
        ha-tile-icon[data-domain="alarm_control_panel"][data-state="triggered"] svg {
            opacity: 1;
        }

        svg {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            display: block;
            transform: rotateZ(90deg) scale(1, -1);
            transition: 0.3s ease opacity;
            opacity: 0;
        }

        .track {
            stroke-width: 6px;
            stroke-linecap: round;
            stroke: var(--disabled-text-color);
            fill: none;
        }

        .track .remaining {
            transition: 0.3s linear stroke;
            stroke: var(--tile-color);
        }

        .track.arming .remaining,
        .track.pending .remaining {
            transition: 1s linear stroke-dasharray;
        }

        @keyframes pulse {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    `}}e([Ke()],un.prototype,"hass",void 0),e([Ke()],un.prototype,"entity",void 0),customElements.define("alarmo-state-icon",un);class hn extends qe{shouldUpdate(t){const e=t.get("hass");return!e||!(!this.entity||e.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return ke``;const t=this.entity in this.hass.states;let e=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(e=Object.assign(Object.assign({},e),{state:this.state}));const i=t?function(t){if(!t)return"mdi:bookmark";if(t.attributes.icon)return t.attributes.icon;var e=Ye(t.entity_id);return e in ni?ni[e](t):ei(e,t.state)}(e):"mdi:help-circle-outline",n=t?an(e,this.hass.localize):this.hass.localize("state.default.unavailable",this.hass.locale||{language:this.hass.language,number_format:Ve.language}),r=t?e.attributes.friendly_name||Qe(e.entity_id):this.entity;let a=!!this.state||"on"==e.state;return ke`
      <div class="badge-container" @click=${()=>Xe(this,"hass-more-info",{entityId:this.entity})}>
        <div class="label-badge ${a?"active":""}" id="badge">
          <div class="value">
            <ha-icon .icon=${i}></ha-icon>
            <div class="label">
              <span>${n}</span>
            </div>
          </div>
        </div>
        <div class="title">${r}</div>
      </div>
    `}static get styles(){return Dt`
      .badge-container {
        display: inline-block;
        text-align: center;
        vertical-align: top;
        padding: var(--ha-label-badge-padding, 0 0 0 0);
        cursor: pointer;
      }
      .label-badge {
        position: relative;
        display: block;
        margin: 0 auto;
        width: var(--ha-label-badge-size, 2.5em);
        text-align: center;
        height: var(--ha-label-badge-size, 2.5em);
        line-height: var(--ha-label-badge-size, 2.5em);
        font-size: var(--ha-label-badge-font-size, 1.5em);
        border-radius: 50%;
        border: 0.1em solid var(--primary-color);
        color: var(--label-badge-text-color, rgb(76, 76, 76));
        white-space: nowrap;
        background-color: none;
        background-size: cover;
        transition: border 0.3s ease-in-out;
      }
      .label-badge.active {
        border: 0.1em solid var(--label-badge-red);
      }
      .label-badge .value {
        font-size: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .label-badge .label {
        position: absolute;
        bottom: -1em;
        left: -0.2em;
        right: -0.2em;
        line-height: 1em;
        font-size: 0.5em;
      }
      .label-badge .label span {
        box-sizing: border-box;
        max-width: 100%;
        display: inline-block;
        background-color: var(--primary-color);
        color: var(--ha-label-badge-label-color, white);
        border-radius: 1em;
        padding: 9% 16% 8% 16%;
        font-weight: 500;
        overflow: hidden;
        text-transform: uppercase;
        text-overflow: ellipsis;
        transition: background-color 0.3s ease-in-out;
        text-transform: var(--ha-label-badge-label-text-transform, uppercase);
      }
      .label-badge.active .label span {
        background-color: var(--label-badge-red);
      }
      .badge-container .title {
        margin-top: 1em;
        font-size: var(--ha-label-badge-title-font-size, 0.9em);
        width: var(--ha-label-badge-title-width, 5em);
        font-weight: var(--ha-label-badge-title-font-weight, 400);
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: normal;
      }
    `}}e([Ke()],hn.prototype,"hass",void 0),e([Ke()],hn.prototype,"entity",void 0),e([Ke()],hn.prototype,"state",void 0),customElements.define("alarmo-sensor-badge",hn);class pn extends qe{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return ke`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}handleFocus(t){t.target.blur()}static get styles(){return Dt`
      button {
        width: 100%;
        border: none;
        background-color: rgba(var(--rgb-primary-text-color), 0.05);
        color: var(--primary-text-color);
        border-radius: 12px;
        padding: calc(var(--content-scale, 1) * 0.875rem);
        font-size: calc(var(--content-scale, 1) * 0.875rem);
        font-weight: var(--mdc-typography-button-font-weight, 500);
        letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857em);
        text-decoration: var(--mdc-typography-button-text-decoration, none);
        text-transform: var(--mdc-typography-button-text-transform, uppercase);
        -webkit-font-smoothing: antialiased;
        font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      button:not(:disabled) {
        cursor: pointer;
        transition: background-color 0.1s ease;
      }
      button:disabled {
        color: var(--disabled-text-color);
          background-color: transparent;
      }
      button:not(:disabled):hover {
          background-color: rgba(var(--rgb-primary-text-color), 0.08);
      }
      button:not(:disabled):active {
          background-color: rgba(var(--rgb-primary-text-color), 0.12);
      }
      button:focus {
        outline: none;
      }
      mwc-button {
        width: 100%;
      }
      ::slotted(ha-icon) {
        --mdc-icon-size: calc(var(--content-scale, 1) * 1.5rem);
        margin: calc(var(--content-scale, 1) * -0.25rem) 0px;
        display: flex;
      }
      ::slotted(ha-icon.leading) {
        margin-left: calc(var(--content-scale, 1) * -0.3rem);
        margin-right: calc(var(--content-scale, 1) * 0.3rem);
      }
      ::slotted span {
        display: flex;
      }
    `}}e([Ke({type:Boolean})],pn.prototype,"disabled",void 0),e([Ke({type:Boolean})],pn.prototype,"scaled",void 0),customElements.define("alarmo-button",pn);const fn=t=>{class i extends t{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const t=this.__unsubs.pop();t instanceof Promise?t.then((t=>t())):t()}this.__unsubs=void 0}}updated(t){super.updated(t),t.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return e([Ke({attribute:!1})],i.prototype,"hass",void 0),i};return t.AlarmoCard=class extends(fn(qe)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=void 0,this.armOptions=Object.assign({},yi),this.readyForArmModes=null,this.backendConnection=null,this.showBypassedSensors=!1,this.subscribedEntities=[],this._codeClearTimer=0}static async getConfigElement(){return await Promise.resolve().then((function(){return dn})),document.createElement("alarmo-card-editor")}static async getStubConfig(t){let e=Object.keys(t.states).find((t=>"alarm_control_panel"==Ye(t)));return await sn(t).then((t=>{const i=t.sort(((t,e)=>Number(t.area_id)-Number(e.area_id)));i.length&&(e=i[0].entity_id)})),{type:"custom:alarmo-card",entity:e}}async getCardSize(){var t;if(!this._config||!this.hass)return 9;const e=this.hass.states[this._config.entity];return e&&(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)===ci&&(on(e)||this._config.keep_keypad_visible)?9:4}setConfig(t){!(null==t?void 0:t.button_scale_actions)&&(null==t?void 0:t.button_scale)&&(t=Object.assign(Object.assign({},t),{button_scale_actions:null==t?void 0:t.button_scale})),!(null==t?void 0:t.button_scale_keypad)&&(null==t?void 0:t.button_scale)&&(t=Object.assign(Object.assign({},t),{button_scale_keypad:null==t?void 0:t.button_scale})),(t=>{if(!t||!t.entity||"alarm_control_panel"!==Ye(t.entity))throw new Error("Invalid configuration provided for entity");if(tn(t.button_scale_keypad)&&("number"!=typeof t.button_scale_keypad||t.button_scale_keypad<1||t.button_scale_keypad>gi))throw new Error("Invalid configuration provided for button_scale_keypad");if(tn(t.button_scale_actions)&&("number"!=typeof t.button_scale_actions||t.button_scale_actions<1||t.button_scale_actions>gi))throw new Error("Invalid configuration provided for button_scale_actions")})(t),this._config=Object.assign(Object.assign({},_i),t)}hassSubscribe(){return[this.hass.connection.subscribeMessage((t=>this._fetchData(t)),{type:"alarmo_updated"})]}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement(),await this.loadBackendConfig()}async loadBackendConfig(){this.backendConnection||sn(this.hass).then((t=>{const e=t.find((t=>t.entity_id==this._config.entity));e&&(this.area_id=e.area_id?e.area_id:null)})).then((()=>ln(this.hass))).then((t=>{this._alarmoConfig=t,this.backendConnection=!0})).then((()=>{return t=this.hass,e=this._config.entity,t.callWS({type:"alarmo/ready_to_arm_modes",entity_id:e});var t,e})).then((t=>{this.readyForArmModes=t.modes})).catch((t=>{this.backendConnection=!1}))}async _fetchData(t){if(t.data.area_id===this.area_id)switch(t.data.event){case vi.Arm:this._clearCode();break;case vi.Trigger:break;case vi.InvalidCodeProvided:case vi.NoCodeProvided:this._showCodeError(),this.subscribedEntities=[];break;case vi.FailedToArm:this.warning="blocking_sensors",this._clearCode();break;case vi.CommandNotAllowed:this._clearCode();break;case vi.TriggerTimeExpired:break;case vi.ReadyToArmModesChanged:this.readyForArmModes=t.data.modes}}shouldUpdate(t){if(t.has("_config"))return!0;const e=t.get("hass");if(!e||e.themes!==this.hass.themes||e.language!==this.hass.language||e.config.state!==this.hass.config.state)return!0;if(e.states[this._config.entity]!==this.hass.states[this._config.entity]){const t=e.states[this._config.entity],i=this.hass.states[this._config.entity];return!1===this.backendConnection&&(async()=>{await this.loadBackendConfig()})(),this.processStateUpdate(t,i),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some((t=>e.states[t]!==this.hass.states[t])))}processStateUpdate(t,e){e.state!=t.state&&(this.subscribedEntities=[]),(e.state==di.Disarmed||e.last_changed!==t.last_changed)&&this._clearCode()}render(){if(!this._config||!this.hass||null===this.backendConnection)return ke``;const t=this.hass.states[this._config.entity];if(!t)return ke`
        <hui-warning>
          ${"NOT_RUNNING"!==this.hass.config.state?this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]"):this.hass.localize("ui.panel.lovelace.warning.starting")}
        </hui-warning>
      `;if(!1===this.backendConnection)return ke`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `;this._config.name||t.attributes.friendly_name;const e=(t=>{if(!t||!t.state)return"var(--state-unavailable-color)";const e=t.state;return e==di.Disarmed?"var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)))":Object.values(di).includes(e)?`var(--state-alarm_control_panel-${e}-color, var(--state-alarm_control_panel-active-color, var(--state-active-color)))`:"var(--disabled-color, var(--state-inactive-color))"})(t),i=an(t,this.hass.localize,this._config),n=this.computeWarning();return ke`
      <ha-card style="${li({"--tile-color":e})}">
        ${t.state===di.Disarmed?ke`
            <ha-button-menu
              corner="BOTTOM_START"
              multi
              @action=${this._toggleArmOptions}
              @click=${t=>t.preventDefault()}
            >
              <ha-icon-button slot="trigger" .label=${this.hass.localize("ui.common.menu")} .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}>
              </ha-icon-button>
              <mwc-list-item noninteractive>
                  <span class="title">
                    ${Xi("arm_options.heading",this.hass.language)}
                  </span>
              </mwc-list-item>
              <mwc-list-item graphic="icon">
                <ha-icon
                  slot="graphic"
                  icon="${this.armOptions.skip_delay?"mdi:check":""}"
                  @click=${t=>{var e;null===(e=t.target.parentElement)||void 0===e||e.click(),t.stopPropagation()}}
                ></ha-icon>
                ${Xi("arm_options.skip_delay",this.hass.language)}
              </mwc-list-item>
              <mwc-list-item graphic="icon">
                <ha-icon
                  slot="graphic"
                  icon="${this.armOptions.force?"mdi:check":""}"
                  @click=${t=>{var e;null===(e=t.target.parentElement)||void 0===e||e.click(),t.stopPropagation()}}
                ></ha-icon>
                ${Xi("arm_options.force",this.hass.language)}
              </mwc-list-item>
            </ha-button-menu>
          `:""}

        <div class="container">
          <div class="content">
            <alarmo-state-icon
              .hass=${this.hass}
              .entity=${this._config.entity}
            >
            </alarmo-state-icon>

            ${this.warning?ke`
              <ha-tile-info
                id="info"
                .primary=${Xi("errors."+this.warning,this.hass.language)}
                .secondary=${n}
              ></ha-tile-info>`:ke`
              <ha-tile-info
                id="info"
                .primary=${i}
              ></ha-tile-info>`}
          </div>
          <div class="features">
            ${this.renderFeatures()}
          </div>
        </div>
      </ha-card>
    `}renderFeatures(){if(!this.hass||!this._config)return ke``;const t=this.hass.states[this._config.entity],e=t.state===di.Disarmed?rn(t).filter((t=>!nn(fi[t],this._config).hide)):[pi.Disarm],i=this._config.show_ready_indicator;return 0==e.length?ke``:ke`
      <div class="actions-container">
        ${e.map((e=>{const n=fi[e],r=nn(n,this._config),a=Array.isArray(this.readyForArmModes)&&this.readyForArmModes.includes(n);return ke`
            <div role="button" class="action-button"
                 @click=${i=>this._handleActionClick(i,this.hass,t,e)}
            >
              ${i?ke`
                  <ha-icon
                    .icon=${hi[n]}
                    style="${null===this.readyForArmModes||n===di.Disarmed?"color: var(--label-badge-grey)":a?"color: var(--success-color)":"color: var(--error-color)"}"
                    class="leading"
                  ></ha-icon>
                `:""}
              ${en(r.button_label)?ke`
                  <span>${this.hass.localize(`ui.card.alarm_control_panel.${e}`)}</span>
                `:ke`
                  <span>${r.button_label}</span>
                `}
            </div>
          `}))}
      </div>`}_renderInput(){if(!this.hass||!this._config)return ke``;const t=this.hass.states[this._config.entity];return on(t)?ke`
        <div id="code_input" class="code-input">

          ${this._input.length?this._input.split("").map((()=>ke`
              <div class="code-char">●</div>`)):ke`
            <div class="code-placeholder">Enter code</div>`}
      `:ke``}computeWarning(){var t;if(!this.hass||!this._config||!this._config.show_messages)return null;const e=this.hass.states[this._config.entity];return e.attributes.open_sensors&&e.state==di.Triggered||"blocking_sensors"==this.warning&&e.attributes.open_sensors?Object.keys(e.attributes.open_sensors).map((t=>{this.subscribedEntities.includes(t)||this.subscribedEntities.push(t);const e=t in this.hass.states;let i=Object.assign({},this.hass.states[t]);return e?i.attributes.friendly_name||Qe(i.entity_id):t})):e.state.startsWith("armed_")&&(null===(t=e.attributes.bypassed_sensors)||void 0===t?void 0:t.length)&&this._config.show_bypassed_sensors?e.attributes.bypassed_sensors.map((t=>{this.subscribedEntities.includes(t)||this.subscribedEntities.push(t);const e=t in this.hass.states;let i=Object.assign({},this.hass.states[t]);return e?i.attributes.friendly_name||Qe(i.entity_id):t})):null}_handlePadClick(t){const e=t.currentTarget.value;this._clearCodeError(),this._input="clear"===e?"":this._input+e}async _handleActionClick(t,e,i,n){const r=t.target;if(t.target.blur(),this._clearCodeError(),n==pi.Disarm){const t=await window.loadCardHelpers(),n=await t.showEnterCodeDialog(r,{codeFormat:i.attributes.code_format,title:e.localize("ui.card.alarm_control_panel.disarm"),submitText:e.localize("ui.card.alarm_control_panel.disarm")});if(null==n)throw new Error("Code dialog closed");this.hass.callService("alarmo","disarm",{entity_id:this._config.entity,code:n})}else this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this.armOptions),{entity_id:this._config.entity,mode:fi[n],code:this._input}));this.warning="",this.armOptions=Object.assign({},yi)}_showCodeError(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#code_input");e&&(e.classList.remove("error"),e.classList.add("error"),e.invalid=!0)}_clearCodeError(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#code_input");e&&e.classList.contains("error")&&(e.classList.remove("error"),e.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout((()=>{this._clearCode()}),12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_toggleArmOptions(t){switch(t.detail.index){case 0:this.armOptions=Object.assign(Object.assign({},this.armOptions),{skip_delay:!this.armOptions.skip_delay});break;case 1:this.armOptions=Object.assign(Object.assign({},this.armOptions),{force:!this.armOptions.force})}t.preventDefault();const e=t.target;setTimeout((()=>{e.firstElementChild.blur()}),50)}static get styles(){return Dt`
        :host {
            --tile-color: var(--state-inactive-color);
            -webkit-tap-highlight-color: transparent;
            --features-background: var(--disabled-color);
            --features-background-opacity: 0.2;
            --features-focused-opacity: 0.15;
            --features-color: var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)));
        }

        ha-card {
            --ha-ripple-color: var(--tile-color);
            --ha-ripple-hover-opacity: 0.04;
            --ha-ripple-pressed-opacity: 0.12;
            height: 100%;
            transition: box-shadow 180ms ease-in-out,
            border-color 180ms ease-in-out;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        ha-card.active {
            --tile-color: var(--state-icon-color);
        }

        .container {
            margin: calc(-1 * var(--ha-card-border-width, 1px));
            display: flex;
            flex-direction: column;
            flex: 1;
        }

        .container.horizontal {
            flex-direction: row;
        }

        .content {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px;
            flex: 1;
            min-width: 0;
            box-sizing: border-box;
            pointer-events: none;
            gap: 10px;
        }

        .features {
            --feature-color: var(--tile-color);
            padding: 0 12px 12px 12px;
        }

        .actions-container {
            position: relative;
            display: flex;
            gap: 10px;
            height: 42px;
            border-radius: 12px;
            overflow: hidden;
        }

        .actions-container::before {
            position: absolute;
            content: "";
            top: 0px;
            left: 0px;
            height: 100%;
            width: 100%;
            background: var(--features-background);
            opacity: var(--features-background-opacity);
        }

        .action-button {
            --mdc-icon-size: 20px;
            cursor: pointer;
            position: relative;
            flex: 1;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            overflow: hidden;
            z-index: 0;
            font-weight: 500;
            gap: 8px;
        }

        .action-button::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: var(--features-color);
            opacity: 0;
            transition: background-color ease-in-out 180ms, opacity ease-in-out 80ms;
        }

        .action-button:hover::before {
            opacity: var(--features-focused-opacity);
        }

        ha-tile-icon {
            position: relative;
            padding: 6px;
            margin: -6px;
        }

        ha-tile-badge {
            position: absolute;
            top: 3px;
            right: 3px;
            inset-inline-end: 3px;
            inset-inline-start: initial;
        }

        ha-tile-info {
            position: relative;
            min-width: 0;
            transition: background-color 180ms ease-in-out;
            box-sizing: border-box;
        }

        ha-button-menu {
            position: absolute;
            right: 4px;
            top: 4px;
        }

        mwc-list-item {
            --mdc-theme-secondary: var(--primary-color);
            --mdc-list-item-graphic-margin: 16px;
        }

        mwc-list-item .title {
            font-weight: 500;
            font-size: 1.1em;
        }
    `}},e([Ke({attribute:!1})],t.AlarmoCard.prototype,"hass",void 0),e([Je()],t.AlarmoCard.prototype,"_config",void 0),e([Je()],t.AlarmoCard.prototype,"_alarmoConfig",void 0),e([Je()],t.AlarmoCard.prototype,"_input",void 0),e([Je()],t.AlarmoCard.prototype,"warning",void 0),e([Je()],t.AlarmoCard.prototype,"area_id",void 0),e([Je()],t.AlarmoCard.prototype,"armOptions",void 0),e([Je()],t.AlarmoCard.prototype,"readyForArmModes",void 0),e([Je()],t.AlarmoCard.prototype,"backendConnection",void 0),e([Je()],t.AlarmoCard.prototype,"showBypassedSensors",void 0),t.AlarmoCard=e([Ze("alarmo-card")],t.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card",name:"Alarmo Card",description:"Card for operating Alarmo through Lovelace.",preview:!0}),console.info(`%c  ALARMO-CARD  \n%c  Version: ${"v1.5.2".padEnd(7," ")}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),t}({});
