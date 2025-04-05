var AlarmoCard=function(e){"use strict";function t(e,t,i,a){var o,n=arguments.length,r=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t,i,a,o,n,r){try{var s=e[n](r),l=s.value}catch(e){return void i(e)}s.done?t(l):Promise.resolve(l).then(a,o)}function n(e,t,i){return t=u(t),function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}(e,_()?Reflect.construct(t,i||[],u(e).constructor):t.apply(e,i))}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,k(a.key),a)}}function l(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=x(e))||t){i&&(e=i);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r=!0,s=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return r=e.done,e},e:function(e){s=!0,n=e},f:function(){try{r||null==i.return||i.return()}finally{if(s)throw n}}}}function d(e,t,i){return(t=k(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,i){var a=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(a){var o=Object.getOwnPropertyDescriptor(a,t);return o.get?o.get.call(arguments.length<3?e:i):o.value}},h.apply(null,arguments)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_=function(){return!!e})()}function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(Object(i),!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function m(){m=function(){return t};var e,t={},i=Object.prototype,a=i.hasOwnProperty,o=Object.defineProperty||function(e,t,i){e[t]=i.value},n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",s=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(e,t,i){return Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,i){return e[t]=i}}function d(e,t,i,a){var n=t&&t.prototype instanceof v?t:v,r=Object.create(n.prototype),s=new z(a||[]);return o(r,"_invoke",{value:O(e,i,s)}),r}function h(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var u="suspendedStart",p="suspendedYield",_="executing",g="completed",f={};function v(){}function b(){}function y(){}var w={};c(w,r,(function(){return this}));var k=Object.getPrototypeOf,$=k&&k(k(T([])));$&&$!==i&&a.call($,r)&&(w=$);var x=y.prototype=v.prototype=Object.create(w);function A(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function i(o,n,r,s){var l=h(e[o],e,n);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){i("next",e,r,s)}),(function(e){i("throw",e,r,s)})):t.resolve(d).then((function(e){c.value=e,r(c)}),(function(e){return i("throw",e,r,s)}))}s(l.arg)}var n;o(this,"_invoke",{value:function(e,a){function o(){return new t((function(t,o){i(e,a,t,o)}))}return n=n?n.then(o,o):o()}})}function O(t,i,a){var o=u;return function(n,r){if(o===_)throw Error("Generator is already running");if(o===g){if("throw"===n)throw r;return{value:e,done:!0}}for(a.method=n,a.arg=r;;){var s=a.delegate;if(s){var l=E(s,a);if(l){if(l===f)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(o===u)throw o=g,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);o=_;var c=h(t,i,a);if("normal"===c.type){if(o=a.done?g:p,c.arg===f)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(o=g,a.method="throw",a.arg=c.arg)}}}function E(t,i){var a=i.method,o=t.iterator[a];if(o===e)return i.delegate=null,"throw"===a&&t.iterator.return&&(i.method="return",i.arg=e,E(t,i),"throw"===i.method)||"return"!==a&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+a+"' method")),f;var n=h(o,t.iterator,i.arg);if("throw"===n.type)return i.method="throw",i.arg=n.arg,i.delegate=null,f;var r=n.arg;return r?r.done?(i[t.resultName]=r.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,f):r:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,f)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function T(t){if(t||""===t){var i=t[r];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,n=function i(){for(;++o<t.length;)if(a.call(t,o))return i.value=t[o],i.done=!1,i;return i.value=e,i.done=!0,i};return n.next=n}}throw new TypeError(typeof t+" is not iterable")}return b.prototype=y,o(x,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:b,configurable:!0}),b.displayName=c(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},A(C.prototype),c(C.prototype,s,(function(){return this})),t.AsyncIterator=C,t.async=function(e,i,a,o,n){void 0===n&&(n=Promise);var r=new C(d(e,i,a,o),n);return t.isGeneratorFunction(i)?r:r.next().then((function(e){return e.done?e.value:r.next()}))},A(x),c(x,l,"Generator"),c(x,r,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),i=[];for(var a in t)i.push(a);return i.reverse(),function e(){for(;i.length;){var a=i.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=T,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var i in this)"t"===i.charAt(0)&&a.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function o(a,o){return s.type="throw",s.arg=t,i.next=a,o&&(i.method="next",i.arg=e),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],s=r.completion;if("root"===r.tryLoc)return o("end");if(r.tryLoc<=this.prev){var l=a.call(r,"catchLoc"),c=a.call(r,"finallyLoc");if(l&&c){if(this.prev<r.catchLoc)return o(r.catchLoc,!0);if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else if(l){if(this.prev<r.catchLoc)return o(r.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return o(r.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var r=n?n.completion:{};return r.type=e,r.arg=t,n?(this.method="next",this.next=n.finallyLoc,f):this.complete(r)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),j(i),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var a=i.completion;if("throw"===a.type){var o=a.arg;j(i)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,i,a){return this.delegate={iterator:T(t),resultName:i,nextLoc:a},"next"===this.method&&(this.arg=e),f}},t}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,o,n,r,s=[],l=!0,c=!1;try{if(n=(i=i.call(e)).next,0===t);else for(;!(l=(a=n.call(i)).done)&&(s.push(a.value),s.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=i.return&&(r=i.return(),Object(r)!==r))return}finally{if(c)throw o}}return s}}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t,i,a){var o=h(u(e.prototype),t,i);return 2&a&&"function"==typeof o?function(e){return o.apply(i,e)}:o}function w(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t);if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:t+""}function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function x(e,t){if(e){if("string"==typeof e)return i(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}function A(e){var t="function"==typeof Map?new Map:void 0;return A=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return function(e,t,i){if(_())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var o=new(e.bind.apply(e,a));return i&&v(o,i.prototype),o}(e,arguments,u(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),v(i,e)},A(e)
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}"function"==typeof SuppressedError&&SuppressedError;var C,O,E,S=globalThis,j=S.ShadowRoot&&(void 0===S.ShadyCSS||S.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),T=new WeakMap,P=function(){return l((function e(t,i,a){if(r(this,e),this._$cssResult$=!0,a!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}),[{key:"styleSheet",get:function(){var e=this.o,t=this.t;if(j&&void 0===e){var i=void 0!==t&&1===t.length;i&&(e=T.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&T.set(t,e))}return e}},{key:"toString",value:function(){return this.cssText}}])}(),L=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var o=1===e.length?e[0]:i.reduce((function(t,i,a){return t+function(e){if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(i)+e[a+1]}),e[0]);return new P(o,e,z)},M=j?function(e){return e}:function(e){return e instanceof CSSStyleSheet?function(e){var t,i="",a=c(e.cssRules);try{for(a.s();!(t=a.n()).done;){i+=t.value.cssText}}catch(e){a.e(e)}finally{a.f()}return function(e){return new P("string"==typeof e?e:e+"",void 0,z)}(i)}(e):e},N=Object.is,U=Object.defineProperty,D=Object.getOwnPropertyDescriptor,R=Object.getOwnPropertyNames,H=Object.getOwnPropertySymbols,B=Object.getPrototypeOf,I=globalThis,F=I.trustedTypes,q=F?F.emptyScript:"",V=I.reactiveElementPolyfillSupport,Z=function(e,t){return e},W={toAttribute:function(e,t){switch(t){case Boolean:e=e?q:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){var i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},G=function(e,t){return!N(e,t)},K={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:G};null!==(C=Symbol.metadata)&&void 0!==C||(Symbol.metadata=Symbol("metadata")),null!==(O=I.litPropertyMetadata)&&void 0!==O||(I.litPropertyMetadata=new WeakMap);var J,Y=function(e){function t(){var e;return r(this,t),(e=n(this,t))._$Ep=void 0,e.isUpdatePending=!1,e.hasUpdated=!1,e._$Em=null,e._$Ev(),e}return p(t,e),l(t,[{key:"_$Ev",value:function(){var e,t=this;this._$ES=new Promise((function(e){return t.enableUpdating=e})),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((function(e){return e(t)}))}},{key:"addController",value:function(e){var t,i;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}},{key:"removeController",value:function(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}},{key:"_$E_",value:function(){var e,t=new Map,i=c(this.constructor.elementProperties.keys());try{for(i.s();!(e=i.n()).done;){var a=e.value;this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a])}}catch(e){i.e(e)}finally{i.f()}t.size>0&&(this._$Ep=t)}},{key:"createRenderRoot",value:function(){var e,t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return function(e,t){if(j)e.adoptedStyleSheets=t.map((function(e){return e instanceof CSSStyleSheet?e:e.styleSheet}));else{var i,a=c(t);try{for(a.s();!(i=a.n()).done;){var o=i.value,n=document.createElement("style"),r=S.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=o.cssText,e.appendChild(n)}}catch(e){a.e(e)}finally{a.f()}}}(t,this.constructor.elementStyles),t}},{key:"connectedCallback",value:function(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach((function(e){var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}},{key:"enableUpdating",value:function(e){}},{key:"disconnectedCallback",value:function(){var e;null===(e=this._$EO)||void 0===e||e.forEach((function(e){var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}},{key:"attributeChangedCallback",value:function(e,t,i){this._$AK(e,i)}},{key:"_$EC",value:function(e,t){var i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){var o,n=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:W).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}},{key:"_$AK",value:function(e,t){var i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){var o,n=i.getPropertyOptions(a),r="function"==typeof n.converter?{fromAttribute:n.converter}:void 0!==(null===(o=n.converter)||void 0===o?void 0:o.fromAttribute)?n.converter:W;this._$Em=a,this[a]=r.fromAttribute(t,n.type),this._$Em=null}}},{key:"requestUpdate",value:function(e,t,i){if(void 0!==e){var a;if(null!=i||(i=this.constructor.getPropertyOptions(e)),!(null!==(a=i.hasChanged)&&void 0!==a?a:G)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}},{key:"P",value:function(e,t,i){var a;this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(null!==(a=this._$Ej)&&void 0!==a?a:this._$Ej=new Set).add(e)}},{key:"_$ET",value:(i=function(e){return function(){var t=this,i=arguments;return new Promise((function(a,n){var r=e.apply(t,i);function s(e){o(r,a,n,s,l,"next",e)}function l(e){o(r,a,n,s,l,"throw",e)}s(void 0)}))}}(m().mark((function e(){var t;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isUpdatePending=!0,e.prev=1,e.next=4,this._$ES;case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),Promise.reject(e.t0);case 9:if(t=this.scheduleUpdate(),e.t1=null!=t,!e.t1){e.next=14;break}return e.next=14,t;case 14:return e.abrupt("return",!this.isUpdatePending);case 15:case"end":return e.stop()}}),e,this,[[1,6]])}))),function(){return i.apply(this,arguments)})},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){if(this.isUpdatePending){if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){var t,i=c(this._$Ep);try{for(i.s();!(t=i.n()).done;){var a=b(t.value,2),o=a[0],n=a[1];this[o]=n}}catch(e){i.e(e)}finally{i.f()}this._$Ep=void 0}var r=this.constructor.elementProperties;if(r.size>0){var s,l=c(r);try{for(l.s();!(s=l.n()).done;){var d=b(s.value,2),h=d[0],u=d[1];!0!==u.wrapped||this._$AL.has(h)||void 0===this[h]||this.P(h,this[h],u)}}catch(e){l.e(e)}finally{l.f()}}}var p=!1,_=this._$AL;try{var g;(p=this.shouldUpdate(_))?(this.willUpdate(_),null!==(g=this._$EO)&&void 0!==g&&g.forEach((function(e){var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(_)):this._$EU()}catch(_){throw p=!1,this._$EU(),_}p&&this._$AE(_)}}},{key:"willUpdate",value:function(e){}},{key:"_$AE",value:function(e){var t;null!==(t=this._$EO)&&void 0!==t&&t.forEach((function(e){var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}},{key:"_$EU",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$ES}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;this._$Ej&&(this._$Ej=this._$Ej.forEach((function(e){return t._$EC(e,t[e])}))),this._$EU()}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}}],[{key:"addInitializer",value:function(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}},{key:"observedAttributes",get:function(){return this.finalize(),this._$Eh&&w(this._$Eh.keys())}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K;if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){var i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&U(this.prototype,e,a)}}},{key:"getPropertyDescriptor",value:function(e,t,i){var a,o=null!==(a=D(this.prototype,e))&&void 0!==a?a:{get:function(){return this[t]},set:function(e){this[t]=e}},n=o.get,r=o.set;return{get:function(){return null==n?void 0:n.call(this)},set:function(t){var a=null==n?void 0:n.call(this);r.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:K}},{key:"_$Ei",value:function(){if(!this.hasOwnProperty(Z("elementProperties"))){var e=B(this);e.finalize(),void 0!==e.l&&(this.l=w(e.l)),this.elementProperties=new Map(e.elementProperties)}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(Z("finalized"))){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Z("properties"))){var e,t=this.properties,i=c([].concat(w(R(t)),w(H(t))));try{for(i.s();!(e=i.n()).done;){var a=e.value;this.createProperty(a,t[a])}}catch(e){i.e(e)}finally{i.f()}}var o=this[Symbol.metadata];if(null!==o){var n=litPropertyMetadata.get(o);if(void 0!==n){var r,s=c(n);try{for(s.s();!(r=s.n()).done;){var l=b(r.value,2),d=l[0],h=l[1];this.elementProperties.set(d,h)}}catch(e){s.e(e)}finally{s.f()}}}this._$Eh=new Map;var u,p=c(this.elementProperties);try{for(p.s();!(u=p.n()).done;){var _=b(u.value,2),g=_[0],f=_[1],m=this._$Eu(g,f);void 0!==m&&this._$Eh.set(m,g)}}catch(e){p.e(e)}finally{p.f()}this.elementStyles=this.finalizeStyles(this.styles)}}},{key:"finalizeStyles",value:function(e){var t=[];if(Array.isArray(e)){var i,a=c(new Set(e.flat(1/0).reverse()));try{for(a.s();!(i=a.n()).done;){var o=i.value;t.unshift(M(o))}}catch(e){a.e(e)}finally{a.f()}}else void 0!==e&&t.push(M(e));return t}},{key:"_$Eu",value:function(e,t){var i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}}]);var i}(A(HTMLElement));Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[Z("elementProperties")]=new Map,Y[Z("finalized")]=new Map,null!=V&&V({ReactiveElement:Y}),(null!==(E=I.reactiveElementVersions)&&void 0!==E?E:I.reactiveElementVersions=[]).push("2.0.4");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Q=globalThis,X=Q.trustedTypes,ee=X?X.createPolicy("lit-html",{createHTML:function(e){return e}}):void 0,te="$lit$",ie="lit$".concat(Math.random().toFixed(9).slice(2),"$"),ae="?"+ie,oe="<".concat(ae,">"),ne=document,re=function(){return ne.createComment("")},se=function(e){return null===e||"object"!=$(e)&&"function"!=typeof e},le=Array.isArray,ce="[ \t\n\f\r]",de=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,he=/-->/g,ue=/>/g,pe=RegExp(">|".concat(ce,"(?:([^\\s\"'>=/]+)(").concat(ce,"*=").concat(ce,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),_e=/'/g,ge=/"/g,fe=/^(?:script|style|textarea|title)$/i,me=function(e){return function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return{_$litType$:e,strings:t,values:a}}}(1),ve=Symbol.for("lit-noChange"),be=Symbol.for("lit-nothing"),ye=new WeakMap,we=ne.createTreeWalker(ne,129);function ke(e,t){if(!le(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ee?ee.createHTML(t):t}var $e=function(e,t){for(var i,a=e.length-1,o=[],n=2===t?"<svg>":3===t?"<math>":"",r=de,s=0;s<a;s++){for(var l=e[s],c=void 0,d=void 0,h=-1,u=0;u<l.length&&(r.lastIndex=u,null!==(d=r.exec(l)));)u=r.lastIndex,r===de?"!--"===d[1]?r=he:void 0!==d[1]?r=ue:void 0!==d[2]?(fe.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=pe):void 0!==d[3]&&(r=pe):r===pe?">"===d[0]?(r=null!=i?i:de,h=-1):void 0===d[1]?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=void 0===d[3]?pe:'"'===d[3]?ge:_e):r===ge||r===_e?r=pe:r===he||r===ue?r=de:(r=pe,i=void 0);var p=r===pe&&e[s+1].startsWith("/>")?" ":"";n+=r===de?l+oe:h>=0?(o.push(c),l.slice(0,h)+te+l.slice(h)+ie+p):l+ie+(-2===h?s:p)}return[ke(e,n+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]},xe=function(){return l((function e(t,i){var a,o=t.strings,n=t._$litType$;r(this,e),this.parts=[];var s=0,l=0,d=o.length-1,h=this.parts,u=b($e(o,n),2),p=u[0],_=u[1];if(this.el=e.createElement(p,i),we.currentNode=this.el.content,2===n||3===n){var g=this.el.content.firstChild;g.replaceWith.apply(g,w(g.childNodes))}for(;null!==(a=we.nextNode())&&h.length<d;){if(1===a.nodeType){if(a.hasAttributes()){var f,m=c(a.getAttributeNames());try{for(m.s();!(f=m.n()).done;){var v=f.value;if(v.endsWith(te)){var y=_[l++],k=a.getAttribute(v).split(ie),$=/([.?@])?(.*)/.exec(y);h.push({type:1,index:s,name:$[2],strings:k,ctor:"."===$[1]?Se:"?"===$[1]?je:"@"===$[1]?ze:Ee}),a.removeAttribute(v)}else v.startsWith(ie)&&(h.push({type:6,index:s}),a.removeAttribute(v))}}catch(e){m.e(e)}finally{m.f()}}if(fe.test(a.tagName)){var x=a.textContent.split(ie),A=x.length-1;if(A>0){a.textContent=X?X.emptyScript:"";for(var C=0;C<A;C++)a.append(x[C],re()),we.nextNode(),h.push({type:2,index:++s});a.append(x[A],re())}}}else if(8===a.nodeType)if(a.data===ae)h.push({type:2,index:s});else for(var O=-1;-1!==(O=a.data.indexOf(ie,O+1));)h.push({type:7,index:s}),O+=ie.length-1;s++}}),null,[{key:"createElement",value:function(e,t){var i=ne.createElement("template");return i.innerHTML=e,i}}])}();function Ae(e,t){var i,a,o,n,r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,l=arguments.length>3?arguments[3]:void 0;if(t===ve)return t;var c=void 0!==l?null===(i=s._$Co)||void 0===i?void 0:i[l]:s._$Cl,d=se(t)?void 0:t._$litDirective$;return(null===(a=c)||void 0===a?void 0:a.constructor)!==d&&(null!==(o=c)&&void 0!==o&&null!==(n=o._$AO)&&void 0!==n&&n.call(o,!1),void 0===d?c=void 0:(c=new d(e))._$AT(e,s,l),void 0!==l?(null!==(r=s._$Co)&&void 0!==r?r:s._$Co=[])[l]=c:s._$Cl=c),void 0!==c&&(t=Ae(e,c._$AS(e,t.values),c,l)),t}var Ce=function(){return l((function e(t,i){r(this,e),this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}),[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(e){var t,i=this._$AD,a=i.el.content,o=i.parts,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:ne).importNode(a,!0);we.currentNode=n;for(var r=we.nextNode(),s=0,l=0,c=o[0];void 0!==c;){var d;if(s===c.index){var h=void 0;2===c.type?h=new Oe(r,r.nextSibling,this,e):1===c.type?h=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(h=new Te(r,this,e)),this._$AV.push(h),c=o[++l]}s!==(null===(d=c)||void 0===d?void 0:d.index)&&(r=we.nextNode(),s++)}return we.currentNode=ne,n}},{key:"p",value:function(e){var t,i=0,a=c(this._$AV);try{for(a.s();!(t=a.n()).done;){var o=t.value;void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}}catch(e){a.e(e)}finally{a.f()}}}])}(),Oe=function(){function e(t,i,a,o){var n;r(this,e),this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=a,this.options=o,this._$Cv=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}return l(e,[{key:"_$AU",get:function(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}},{key:"parentNode",get:function(){var e,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=i.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(e){e=Ae(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),se(e)?e===be||null==e||""===e?(this._$AH!==be&&this._$AR(),this._$AH=be):e!==this._$AH&&e!==ve&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):function(e){return le(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator])}(e)?this.k(e):this._(e)}},{key:"O",value:function(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}},{key:"T",value:function(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}},{key:"_",value:function(e){this._$AH!==be&&se(this._$AH)?this._$AA.nextSibling.data=e:this.T(ne.createTextNode(e)),this._$AH=e}},{key:"$",value:function(e){var t,i=e.values,a=e._$litType$,o="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=xe.createElement(ke(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.p(i);else{var n=new Ce(o,this),r=n.u(this.options);n.p(i),this.T(r),this._$AH=n}}},{key:"_$AC",value:function(e){var t=ye.get(e.strings);return void 0===t&&ye.set(e.strings,t=new xe(e)),t}},{key:"k",value:function(t){le(this._$AH)||(this._$AH=[],this._$AR());var i,a,o=this._$AH,n=0,r=c(t);try{for(r.s();!(a=r.n()).done;){var s=a.value;n===o.length?o.push(i=new e(this.O(re()),this.O(re()),this,this.options)):i=o[n],i._$AI(s),n++}}catch(e){r.e(e)}finally{r.f()}n<o.length&&(this._$AR(i&&i._$AB.nextSibling,n),o.length=n)}},{key:"_$AR",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){var i,a=e.nextSibling;e.remove(),e=a}}},{key:"setConnected",value:function(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}])}(),Ee=function(){return l((function e(t,i,a,o,n){r(this,e),this.type=1,this._$AH=be,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=n,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=be}),[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,o=this.strings,n=!1;if(void 0===o)e=Ae(this,e,t,0),(n=!se(e)||e!==this._$AH&&e!==ve)&&(this._$AH=e);else{var r,s,l=e;for(e=o[0],r=0;r<o.length-1;r++)(s=Ae(this,l[i+r],t,r))===ve&&(s=this._$AH[r]),n||(n=!se(s)||s!==this._$AH[r]),s===be?e=be:e!==be&&(e+=(null!=s?s:"")+o[r+1]),this._$AH[r]=s}n&&!a&&this.j(e)}},{key:"j",value:function(e){e===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}])}(),Se=function(e){function t(){var e;return r(this,t),(e=n(this,t,arguments)).type=3,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element[this.name]=e===be?void 0:e}}])}(Ee),je=function(e){function t(){var e;return r(this,t),(e=n(this,t,arguments)).type=4,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element.toggleAttribute(this.name,!!e&&e!==be)}}])}(Ee),ze=function(e){function t(e,i,a,o,s){var l;return r(this,t),(l=n(this,t,[e,i,a,o,s])).type=5,l}return p(t,e),l(t,[{key:"_$AI",value:function(e){var t;if((e=null!==(t=Ae(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:be)!==ve){var i=this._$AH,a=e===be&&i!==be||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==be&&(i===be||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}}},{key:"handleEvent",value:function(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}])}(Ee),Te=function(){return l((function e(t,i,a){r(this,e),this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a}),[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){Ae(this,e)}}])}(),Pe=Q.litHtmlPolyfillSupport;null!=Pe&&Pe(xe,Oe),(null!==(J=Q.litHtmlVersions)&&void 0!==J?J:Q.litHtmlVersions=[]).push("3.2.1");var Le,Me,Ne=function(e){function t(){var e;return r(this,t),(e=n(this,t,arguments)).renderOptions={host:a(e)},e._$Do=void 0,e}return p(t,e),l(t,[{key:"createRenderRoot",value:function(){var e,i,a=y(t,"createRenderRoot",this,3)([]);return null!==(i=(e=this.renderOptions).renderBefore)&&void 0!==i||(e.renderBefore=a.firstChild),a}},{key:"update",value:function(e){var i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),y(t,"update",this,3)([e]),this._$Do=function(e,t,i){var a,o=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:t,n=o._$litPart$;if(void 0===n){var r,s=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new Oe(t.insertBefore(re(),s),s,void 0,null!=i?i:{})}return n._$AI(e),n}(i,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var e;y(t,"connectedCallback",this,3)([]),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var e;y(t,"disconnectedCallback",this,3)([]),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}},{key:"render",value:function(){return ve}}])}(Y);Ne._$litElement$=!0,Ne.finalized=!0,null===(Le=globalThis.litElementHydrateSupport)||void 0===Le||Le.call(globalThis,{LitElement:Ne});var Ue=globalThis.litElementPolyfillSupport;null==Ue||Ue({LitElement:Ne}),(null!==(Me=globalThis.litElementVersions)&&void 0!==Me?Me:globalThis.litElementVersions=[]).push("4.1.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var De=function(e){return function(t,i){void 0!==i?i.addInitializer((function(){customElements.define(e,t)})):customElements.define(e,t)}},Re={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:G},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,a=i.kind,o=i.metadata,n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(i.name,e),"accessor"===a){var r=i.name;return{set:function(i){var a=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,a,e)},init:function(t){return void 0!==t&&this.P(r,void 0,e),t}}}if("setter"===a){var s=i.name;return function(i){var a=this[s];t.call(this,i),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+a)};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Be(e){return function(t,i){return"object"==$(i)?He(e,t,i):function(e,t,i){var a=t.hasOwnProperty(i);return t.constructor.createProperty(i,a?f(f({},e),{},{wrapped:!0}):e),a?Object.getOwnPropertyDescriptor(t,i):void 0}(e,t,i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Ie(e){return Be(f(f({},e),{},{state:!0,attribute:!1}))}const Fe="number";var qe;!function(e){e.Disarmed="disarmed",e.Arming="arming",e.Pending="pending",e.Triggered="triggered",e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedVacation="armed_vacation",e.ArmedCustomBypass="armed_custom_bypass"}(qe||(qe={}));const Ve={[qe.ArmedAway]:"hass:shield-lock",[qe.ArmedHome]:"hass:shield-home",[qe.ArmedNight]:"hass:shield-moon",[qe.ArmedVacation]:"hass:shield-airplane",[qe.ArmedCustomBypass]:"hass:security",[qe.Disarmed]:"hass:shield-off",[qe.Arming]:"hass:shield-outline",[qe.Pending]:"hass:shield-outline",[qe.Triggered]:"hass:bell-ring"};var Ze;!function(e){e.ArmAway="arm_away",e.ArmHome="arm_home",e.ArmNight="arm_night",e.ArmVacation="arm_vacation",e.ArmCustomBypass="arm_custom_bypass",e.Disarm="disarm",e.SwitchMode="switch_mode"}(Ze||(Ze={}));const We={[Ze.ArmAway]:qe.ArmedAway,[Ze.ArmHome]:qe.ArmedHome,[Ze.ArmNight]:qe.ArmedNight,[Ze.ArmVacation]:qe.ArmedVacation,[Ze.ArmCustomBypass]:qe.ArmedCustomBypass,[Ze.Disarm]:qe.Disarmed};var Ge;!function(e){e.Disarm="disarm",e.Arm="arm",e.Trigger="trigger",e.FailedToArm="failed_to_arm",e.CommandNotAllowed="command_not_allowed",e.NoCodeProvided="no_code_provided",e.InvalidCodeProvided="invalid_code_provided",e.TriggerTimeExpired="trigger_time_expired",e.ReadyToArmModesChanged="ready_to_arm_modes_changed"}(Ge||(Ge={}));const Ke="alarmo_updated",Je=["arming","pending"],Ye={type:"",entity:"",name:"",keep_keypad_visible:!1,use_clear_icon:!1,button_scale_actions:1,button_scale_keypad:1,states:{},show_messages:!0,show_ready_indicator:!0,show_bypassed_sensors:!0,use_code_dialog:!1},Qe=2.5,Xe={skip_delay:!1,force:!1};var et="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",tt={heading:"Možnosti aktivace",skip_delay:"Přeskočit čas pro vystup",force:"Bypass otevřených senzorů"},it={keep_keypad_visible:"Zachovat klávesnici vždy viditelnou, i když není vyžadován žádný kód.",button_scale_actions:"Měřítko použité pro změnu velikosti tlačítek akcí.",button_scale_keypad:"Měřítko použité pro změnu velikosti tlačítek klávesnice.",use_clear_icon:"Zobrazit ikonu (namísto textu) na klávesnici pro vymazání zadávaného kódu.",show_messages:"Zobrazit diagnostické zprávy při spuštění alarmu nebo nemožnosti aktivace.",show_ready_indicator:"Zobrazit indikátor připraveno/nepřipraveno na tlačítkách režimu aktivace.",show_bypassed_sensors:"Zobrazit varování při aktivaci alarmu s přemostěnými senzory.",use_code_dialog:"Zobrazte klávesnici pro zadání kódu jako vyskakovací dialog.",available_actions:"Dostupné akce:",action_dialog:{title:"Upravit zobrazení akce '{action}'",show_button:"Zobrazit tlačítko pro tuto akci",button_label:"Přepsat popisek tlačítka",state_label:"Přepsat popisek stavu"}},at={blocking_sensors:"Nelze aktivovat kvůli následujícím senzorům",triggered_sensors:"Alarm byl spuštěn následujícími senzory",bypassed_sensors:"Jsou tam přemostěné senzory"},ot={arm_options:tt,editor:it,errors:at},nt={heading:"Scharfschaltungsoptionen",skip_delay:"Ausgangsverzögerung überspringen",force:"Offene Sensoren ignorieren"},rt={keep_keypad_visible:"Zeige das Pin-Eingabefeld immer an, auch wenn kein Code erfordert ist.",button_scale_actions:"Skalierungsfaktor für Buttongröße der Aktionen.",button_scale_keypad:"Skalierungsfaktor für Buttongröße der Pin-Eingabefeld.",use_clear_icon:"Anzeige eines Symbols (anstelle von Text) im Tastenfeld für die Eingabe des Codes.",show_messages:"Anzeige von Diagnosemeldungen, wenn der Alarm ausgelöst wird oder nicht scharf geschaltet werden kann.",show_ready_indicator:"Zeigt die Bereitschafts-/Nicht-Bereitschaftsanzeige auf den Scharfschaltmodus-Tasten an.",show_bypassed_sensors:"Warnung anzeigen, wenn der Alarm mit umgangenen Sensoren aktiviert wird.",use_code_dialog:"Zeigen Sie die Tastatur zur Codeeingabe als Popup-Dialog an.",available_actions:"Verfügbare Aktionen:",action_dialog:{title:"Anzeige der Aktion '{action}' anpassen",show_button:"Taste für diese Aktion anzeigen",button_label:"Überschreibung der Tastenbeschriftung",state_label:"Überschreibung der Statusbezeichnung"}},st={blocking_sensors:"Konnte nicht scharf geschaltet werden, da folgende Sensoren geöffnet sind",triggered_sensors:"Alarm wurde durch folgende Sensoren ausgelöst",bypassed_sensors:"Es gibt umgangene Sensoren"},lt={arm_options:nt,editor:rt,errors:st},ct={heading:"Επιλογές για όπλισμα",skip_delay:"Παράλειψη καθυστέρησης εξόδου",force:"Παράκαμψη ανοιχτών αισθητήρων"},dt={keep_keypad_visible:"Κράτησε το πληκτρολόγιο πάντα ορατό, ακόμη και όταν δεν απαιτείται εισαγωγή κωδικού.",button_scale_actions:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών ενεργειών.",button_scale_keypad:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών του πληκτρολογίου.",use_clear_icon:"Εμφάνιση εικονιδίου (αντί κειμένου) στο πληκτρολόγιο για εκκαθάριση της εισαγωγής κωδικού.",show_messages:"Εμφάνιση διαγνωστικών μηνυμάτων όταν ενεργοποιείται ο συναγερμός ή δεν μπορεί να οπλιστεί.",show_ready_indicator:"Εμφάνιση ένδειξης έτοιμο/μη έτοιμο στα κουμπιά λειτουργίας όπλισης.",show_bypassed_sensors:"Εμφάνιση προειδοποιητικού μηνύματος όταν ο συναγερμός οπλίζεται με παρακαμφθέντες αισθητήρες.",use_code_dialog:"Εμφανίστε το πληκτρολόγιο για την εισαγωγή του κωδικού ως αναδυόμενο παράθυρο διαλόγου.",available_actions:"Διαθέσιμες ενέργειες:",action_dialog:{title:"Προσαρμογή εμφάνισης της ενέργειας '{action}'",show_button:"Εμφάνιση κουμπιού για αυτήν την ενέργεια",button_label:"Αντικατάσταση ετικέτας κουμπιού",state_label:"Αντικατάσταση ετικέτας κατάστασης"}},ht={blocking_sensors:"Δεν ήταν δυνατή η όπλιση λόγω των ακόλουθων αισθητήρων",triggered_sensors:"Ο συναγερμός ενεργοποιήθηκε από τους ακόλουθους αισθητήρες",bypassed_sensors:"Υπάρχουν παρακαμφθέντες αισθητήρες"},ut={arm_options:ct,editor:dt,errors:ht},pt={heading:"Options for arming",skip_delay:"Skip exit delay",force:"Bypass open sensors"},_t={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale_actions:"Scaling factor to apply for resizing the action buttons.",button_scale_keypad:"Scaling factor to apply for resizing the keypad buttons.",use_clear_icon:"Show icon (instead of text) in keypad for clearing code input.",show_messages:"Display diagnostic messages when alarm is triggered or cannot be armed.",show_ready_indicator:"Show ready/not ready indicator on arm mode buttons.",show_bypassed_sensors:"Show warning message when alarm is armed with bypassed sensors.",use_code_dialog:"Display the keypad for entering the code as a popup dialog.",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",show_button:"Show button for this action",button_label:"Override button label",state_label:"Override state label"}},gt={blocking_sensors:"Could not arm due to the following sensors",triggered_sensors:"Alarm was triggered by the following sensors",bypassed_sensors:"There are bypassed sensors"},ft={arm_options:pt,editor:_t,errors:gt},mt={heading:"Opciones de armado",skip_delay:"Omitir el retardo de salida",force:"Pasar por alto los sensores abiertos"},vt={keep_keypad_visible:"Mantener el teclado siempre visible, también cuando no se requiere ninguna entrada de código.",button_scale_actions:"Factor de escalado para cambiar el tamaño de los botones de acción.",button_scale_keypad:"Factor de escalado para cambiar el tamaño de los botones del teclado.",use_clear_icon:"Mostrar icono (en lugar de texto) en el teclado para borrar la entrada de código.",show_messages:"Mostrar mensajes de diagnóstico cuando se activa la alarma o no se puede activar.",show_ready_indicator:"Mostrar indicador listo/no listo en los botones de modo armado.",show_bypassed_sensors:"Mostrar advertencia cuando la alarma está activada con sensores omitidos.",use_code_dialog:"Muestra el teclado para ingresar el código como un cuadro de diálogo emergente.",available_actions:"Acciones disponibles:",action_dialog:{title:"Personalizar la visualización de la acción '{action}'",show_button:"mostrar botón para esta acción",button_label:"Sobrescribir el texto del botón",state_label:"Sobrescribir el texto de estado"}},bt={blocking_sensors:"No se pudo armar debido a los siguientes sensores",triggered_sensors:"La alarma fue disparada por los siguientes sensores",bypassed_sensors:"Hay sensores omitidos"},yt={arm_options:mt,editor:vt,errors:bt},wt={heading:"Options pour l'armement",skip_delay:"Ignorer le délai de sortie",force:"Bypasser les capteurs ouverts"},kt={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale_actions:"Facteur d'échelle à appliquer pour le redimensionnement des boutons des actions.",button_scale_keypad:"Facteur d'échelle à appliquer pour le redimensionnement des boutons du clavier.",use_clear_icon:"Afficher l'icône (au lieu du texte) sur le clavier pour effacer la saisie du code.",show_messages:"Afficher les messages de diagnostic lorsque l'alarme est déclenchée ou ne peut pas être armée.",show_ready_indicator:"Afficher l'indicateur prêt/pas prêt sur les boutons de mode d'armement.",show_bypassed_sensors:"Afficher un avertissement lorsque l'alarme est armée avec des capteurs ignorés.",use_code_dialog:"Affichez le clavier pour saisir le code sous forme de boîte de dialogue contextuelle.",available_actions:"Actions disponibles:",action_dialog:{title:"Personnaliser l'affichage de l'action '{action}'",show_button:"Afficher le bouton pour cette action",button_label:"Remplacer le libellé du bouton",state_label:"Remplacer l'étiquette d'état"}},$t={blocking_sensors:"Impossible d'armer en raison du(es) capteur(s) suivant(s)",triggered_sensors:"L'alarme a été déclenchée par le(s) capteur(s) suivant(s)",bypassed_sensors:"Il y a des capteurs ignorés"},xt={arm_options:wt,editor:kt,errors:$t},At={heading:"Opzioni di inserimento",skip_delay:"Ignorare il ritardo di uscita",force:"Ignorare i sensori aperti"},Ct={keep_keypad_visible:"Mantenere la tastiera sempre visibile, anche quando nessun codice è richiesto.",button_scale_actions:"Fattore di scala da applicare per ridimensionare i pulsanti di azione.",button_scale_keypad:"Fattore di scala da applicare per ridimensionare i pulsanti della tastiera.",use_clear_icon:"Mostrare l'icona (invece del testo) sulla tastiera per cancellare il codice digitato.",show_messages:"Mostrare messaggi diagnostici quando l'allarme viene attivato o non può essere inserito.",show_ready_indicator:"Mostra l'indicatore pronto/non pronto sui pulsanti della modalità di inserimento.",show_bypassed_sensors:"Mostra avviso quando l'allarme è armato con sensori esclusi.",use_code_dialog:"Visualizza la tastiera per l'immissione del codice come finestra di dialogo popup.",available_actions:"Azioni disponibili:",action_dialog:{title:"Personalizzare la visualizzazione dell'azione '{action}'",show_button:"Mostra il pulsante per questa azione",button_label:"Sovrascrivere l'etichetta del pulsante",state_label:"Sovrascrivere l'etichetta di stato"}},Ot={blocking_sensors:"Impossibile inserire l'allarme a causa dei seguenti sensori",triggered_sensors:"L'allarme è stato attivato dai seguenti sensori",bypassed_sensors:"Sono presenti sensori esclusi"},Et={arm_options:At,editor:Ct,errors:Ot},St={heading:"Opties voor inschakelen",skip_delay:"Sla vertraging over",force:"Negeer open sensoren"},jt={keep_keypad_visible:"Houd het keypad altijd zichtbaar, ook wanneer er geen code vereist is.",button_scale_actions:"Schaalfactor actieknoppen",button_scale_keypad:"Schaalfactor keypadknoppen",use_clear_icon:"Toon pictogram (in plaats van tekst) in keypad om code-invoer te wissen.",show_messages:"Toon diagnostische berichten wanneer het alarm wordt geactiveerd of niet kan worden ingeschakeld.",show_ready_indicator:"Toon gereed/niet gereed-indicator op inschakelmodusknoppen.",show_bypassed_sensors:"Toon melding wanneer het alarm is ingeschakeld met omzeilde sensoren.",use_code_dialog:"Geef het toetsenbord voor het invoeren van de code weer als een pop-upvenster.",available_actions:"Beschikbare acties:",action_dialog:{title:"Weergave van actie '{action}' aanpassen",show_button:"Toon knop voor deze actie",button_label:"Knoplabel overschrijven",state_label:"Statuslabel overschrijven"}},zt={blocking_sensors:"Kon niet inschakelen vanwege de volgende sensoren",triggered_sensors:"Alarm werd geactiveerd door de volgende sensoren",bypassed_sensors:"Er zijn omzeilde sensoren"},Tt={arm_options:St,editor:jt,errors:zt},Pt={heading:"Opções para armar",skip_delay:"Omitir tempo para sair",force:"Ignorar os sensores abertos"},Lt={keep_keypad_visible:"Mantenha o teclado sempre visível, mesmo quando não for necessária nenhuma entrada de código.",button_scale_actions:"Fator de escala para redimensionar botões de ação.",button_scale_keypad:"Fator de escala para redimensionar os botões do teclado.",use_clear_icon:"Mostre o ícone (em vez de texto) no teclado para limpar a entrada do código.",show_messages:"Mostrar mensagens de diagnóstico quando o alarme estiver disparado ou não puder ser armado.",show_ready_indicator:"Mostrar indicador de disponível/não disponível nos botões do modo de armar.",show_bypassed_sensors:"Mostrar aviso quando o alarme for ativado com sensores ignorados.",use_code_dialog:"Exiba o teclado para inserir o código como uma caixa de diálogo pop-up.",available_actions:"Ações disponíveis:",action_dialog:{title:"Personalize a exibição da ação '{action}'",show_button:"Mostrar botão para esta ação",button_label:"Substituir texto do botão",state_label:"Substituir texto de status"}},Mt={blocking_sensors:"Não foi possível armar devido aos seguintes sensores",triggered_sensors:"O alarme foi disparado pelos seguintes sensores",bypassed_sensors:"Existem sensores ignorados"},Nt={arm_options:Pt,editor:Lt,errors:Mt},Ut={heading:"Варианты постановки на охрану",skip_delay:"Задержка перед выходом",force:"Обход датчиков открытия"},Dt={keep_keypad_visible:"Клавиатура всегда видима, даже если ввод кода не требуется.",button_scale_actions:"Коэффициент масштабирования для изменения размера кнопок действий.",button_scale_keypad:"Коэффициент масштабирования для изменения размера кнопок клавиатуры.",use_clear_icon:"Отображение иконки (вместо текста) на клавиатуре для очистки ввода кода.",show_messages:"Вывод диагностических сообщений, когда срабатывает сигнализация или ее невозможно включить.",show_ready_indicator:"Отображать индикатор готовности/неготовности на кнопках режима охраны.",show_bypassed_sensors:"Вывод предупреждающего сообщения, когда сигнализация включена с помощью обходных датчиков.",use_code_dialog:"Отобразить клавиатуру для ввода кода в виде всплывающего диалогового окна.",available_actions:"Доступные действия:",action_dialog:{title:"Настройка отображения действия '{action}'",show_button:"Показать кнопку для этого действия",button_label:"Измененение названия кнопки",state_label:"Изменение названия состояния"}},Rt={blocking_sensors:"Не удалось включить охрану из-за следующих датчиков",triggered_sensors:"Сигнал тревоги был вызван следующими датчиками",bypassed_sensors:"Есть обходные датчики"},Ht={arm_options:Ut,editor:Dt,errors:Rt},Bt={heading:"Alternativ vid aktivering",skip_delay:"Hoppa över lämna fördröjning",force:"Förbikoppla öppna sensorer"},It={keep_keypad_visible:"Håll knappsatsen alltid synlig, även när ingen kodinmatning krävs.",button_scale_actions:"Ändra storlek på åtgärdsknapparna.",button_scale_keypad:"Ändra storlek på knapparna på knappsatsen.",use_clear_icon:"Visa ikon (istället för text) på knappsatsen för att radera kodinmatning.",show_messages:"Visa diagnostiska meddelanden när larmet utlöses eller inte kan aktiveras.",show_ready_indicator:"Visa redo/ej redo-indikator på lägesknapparna.",show_bypassed_sensors:"Visa varningsmeddelande när larmet är aktiverat med förbikopplade sensorer.",use_code_dialog:"Visa knappsatsen för att ange koden som en popup-dialogruta.",available_actions:"Tillgängliga åtgärder:",action_dialog:{title:"Anpassa visningen av åtgärden '{action}'",show_button:"Visa knapp för denna åtgärd",button_label:"Anpassad knappetikett",state_label:"Anpassad tillståndsetikett"}},Ft={blocking_sensors:"Kunde inte aktivera på grund av följande sensorer",triggered_sensors:"Larmet utlöstes av följande sensorer",bypassed_sensors:"Det finns förbikopplade sensorer"},qt={arm_options:Bt,editor:It,errors:Ft},Vt={heading:"警戒选项",skip_delay:"跳过离开延迟",force:"绕过开放的传感器"},Zt={keep_keypad_visible:"保持小键盘总是可见，即使不需要输入密码",button_scale_actions:"调整动作按键大小的缩放系数",button_scale_keypad:"调整小键盘按键大小的缩放系数",use_clear_icon:"在小键盘上显示图标（而不是文字），用于清除密码输入。",show_messages:"当警报被触发或无法警戒时，显示诊断信息。",show_ready_indicator:"在手臂模式按钮上显示就绪/未就绪指示器。",show_bypassed_sensors:"当警报配备旁路传感器时显示警告消息。",use_code_dialog:"以弹出对话框的形式显示用于输入代码的键盘。",available_actions:"可用动作：",action_dialog:{title:"自定义动作'{action}'的显示",show_button:"显示此操作的按钮",button_label:"覆盖按钮标签",state_label:"覆盖状态标签"}},Wt={blocking_sensors:"由于以下传感器而无法警戒",triggered_sensors:"警报是由以下传感器触发的",bypassed_sensors:"有绕过的传感器"},Gt={arm_options:Vt,editor:Zt,errors:Wt},Kt={cs:Object.freeze({__proto__:null,arm_options:tt,default:ot,editor:it,errors:at}),de:Object.freeze({__proto__:null,arm_options:nt,default:lt,editor:rt,errors:st}),el:Object.freeze({__proto__:null,arm_options:ct,default:ut,editor:dt,errors:ht}),en:Object.freeze({__proto__:null,arm_options:pt,default:ft,editor:_t,errors:gt}),es:Object.freeze({__proto__:null,arm_options:mt,default:yt,editor:vt,errors:bt}),fr:Object.freeze({__proto__:null,arm_options:wt,default:xt,editor:kt,errors:$t}),it:Object.freeze({__proto__:null,arm_options:At,default:Et,editor:Ct,errors:Ot}),nl:Object.freeze({__proto__:null,arm_options:St,default:Tt,editor:jt,errors:zt}),"pt-BR":Object.freeze({__proto__:null,arm_options:Pt,default:Nt,editor:Lt,errors:Mt}),ru:Object.freeze({__proto__:null,arm_options:Ut,default:Ht,editor:Dt,errors:Rt}),sv:Object.freeze({__proto__:null,arm_options:Bt,default:qt,editor:It,errors:Ft}),"zh-Hans":Object.freeze({__proto__:null,arm_options:Vt,default:Gt,editor:Zt,errors:Wt})};function Jt(e,t,i="",a=""){const o=t.replace(/['"]+/g,"");var n;try{n=e.split(".").reduce(((e,t)=>e[t]),Kt[o])}catch(t){n=e.split(".").reduce(((e,t)=>e[t]),Kt.en)}if(void 0===n&&(n=e.split(".").reduce(((e,t)=>e[t]),Kt.en)),""!==i&&""!==a){Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]);for(let e=0;e<i.length;e++)n=n.replace(i[e],a[e])}return n}function Yt(e){return null!=e}function Qt(e){switch(typeof e){case"object":return 0==Object.keys(e).length;case"string":return 0==String(e).length;default:return!Yt(e)}}function Xt(e){return e.substring(0,e.indexOf("."))}const ei=(e,t)=>{let i={hide:!1,button_label:"",state_label:""};return(t.states||{}).hasOwnProperty(e)&&(i=Object.assign(Object.assign({},i),t.states[e])),i},ti=e=>{if(!e)return[];const t=e.attributes.supported_features||0;let i=[];return 2&t&&i.push(Ze.ArmAway),1&t&&i.push(Ze.ArmHome),4&t&&i.push(Ze.ArmNight),32&t&&i.push(Ze.ArmVacation),16&t&&i.push(Ze.ArmCustomBypass),i},ii=(e,t,i)=>{const a=Xt(e.entity_id),o=e.attributes.device_class,n=e.state;if(Object.values(qe).includes(n)&&i){const e=ei(n,i);if(!Qt(e.state_label))return e.state_label}let r="";return o&&(r=t(`component.${a}.entity_component.${o}.state.${e.state}`)),r||(r=t(`component.${a}.entity_component._.state.${e.state}`)),r},ai=e=>null!==e.attributes.code_format,oi=e=>e.callWS({type:"alarmo/entities"}),ni=e=>e.callWS({type:"alarmo/config"}),ri=(e,t,i,a)=>{a=a||{},i=null==i?{}:i;const o=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return o.detail=i,e.dispatchEvent(o),o};let si=class extends Ne{constructor(){super(...arguments),this._entities=null,this._editAction=null}async firstUpdated(){oi(this.hass).then((e=>{this._entities=e.map((e=>e.entity_id))})).catch((e=>{var t;null===(t=this.hass)||void 0===t||t.callService("system_log","write",{message:`Failed to fetch entities: ${e}`,level:"error"})})),this._alarmoConfig=await ni(this.hass)}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),this._config=Object.assign(Object.assign({},Ye),e)}render(){var e,t,i,a,o,n;if(!this._config||!this.hass||!this._entities)return me``;if(!this._entities.length)return me`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const r=this._config.entity?this.hass.states[this._config.entity]:void 0,s=(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Fe&&(this._alarmoConfig.code_arm_required||this._alarmoConfig.code_disarm_required);if(null!==this._editAction){const e=ei(We[this._editAction],this._config);return me`
        <div class="header">
          <div class="back-title">
            <ha-icon-button
              .label=${this.hass.localize("ui.common.back")}
              .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
              @click=${this._goBack}
            ></ha-icon-button>
            <span slot="title"
              >${Jt("editor.action_dialog.title",this.hass.language,"{action}",this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`))}</span
            >
          </div>
        </div>

        <div class="checkbox-item">
          <ha-checkbox
            ?checked=${!e.hide}
            ?disabled=${!e.hide&&1==ti(r).map((e=>We[e])).filter((e=>!ei(e,this._config).hide)).length||this._editAction==Ze.Disarm}
            @change=${e=>this._updateStateConfig(We[this._editAction],e.target.checked?{hide:void 0}:{hide:!0})}
          >
          </ha-checkbox>
          <span
            @click=${e=>{const t=e.target.previousElementSibling;t.click(),t.blur()}}
          >
            ${Jt("editor.action_dialog.show_button",this.hass.language)}
          </span>
        </div>

        <div class="grid">
          <ha-textfield
            label="${Jt("editor.action_dialog.button_label",this.hass.language)}"
            .value="${e.button_label||""}"
            placeholder="${this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`)}"
            ?disabled=${e.hide}
            @input=${e=>this._updateStateConfig(We[this._editAction],{button_label:String(e.target.value).trim()})}
          ></ha-textfield>

          <ha-textfield
            label="${Jt("editor.action_dialog.state_label",this.hass.language)}"
            .value="${e.state_label||""}"
            placeholder="${this.hass.localize(`component.alarm_control_panel.entity_component._.state.${We[this._editAction]}`)}"
            @input=${e=>this._updateStateConfig(We[this._editAction],{state_label:String(e.target.value).trim()})}
          ></ha-textfield>
        </div>
      `}return me`
      <div class="card-config">
        <div class="grid">
          <ha-entity-picker
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
            .hass=${this.hass}
            .value="${this._config.entity||""}"
            .includeDomains=${["alarm_control_panel"]}
            .entityFilter=${e=>this._entities.includes(e.entity_id)}
            @change=${e=>this._updateConfig("entity",e.target.value)}
            allow-custom-entity
          ></ha-entity-picker>

          <ha-textfield
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._config.name||""}"
            @input=${e=>this._updateConfig("name",String(e.target.value).trim())}
          ></ha-textfield>
        </div>

        ${r?me`
              <div class="config-item">
                <span>${Jt("editor.available_actions",this.hass.language)}</span>
              </div>
              <div class="config-row checkbox-list">
                ${[...ti(r),Ze.Disarm].map((e=>{const t=ti(r).map((e=>We[e])),i=ei(We[e],this._config).hide;return me`
                    <div class="checkbox-item ${i?"disabled":""}">
                      <ha-checkbox
                        ?checked=${!i}
                        ?disabled=${!i&&1==t.filter((e=>!ei(e,this._config).hide)).length||e==Ze.Disarm}
                        @change=${t=>this._updateStateConfig(We[e],t.target.checked?{hide:void 0}:{hide:!0})}
                      >
                      </ha-checkbox>
                      <span
                        @click=${e=>{const t=e.target.previousElementSibling;t.click(),t.blur()}}
                      >
                        ${this.hass.localize(`ui.card.alarm_control_panel.${e}`)}
                      </span>
                      <ha-icon-button
                        .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
                        style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
                        ?disabled=${ei(We[e],this._config).hide}
                        @click=${()=>this._editActionClick(e)}
                      >
                      </ha-icon-button>
                    </div>
                  `}))}
              </div>
            `:""}

        <div class="grid">
          <ha-formfield .label=${Jt("editor.button_scale_actions",this.hass.language)}>
            <ha-slider
              value=${this._config.button_scale_actions||1}
              @change=${e=>this._updateConfig("button_scale_actions",Number(e.target.value))}
              min="${1}"
              max="${Qe}"
              step="0.1"
              labeled
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${Jt("editor.button_scale_keypad",this.hass.language)}>
            <ha-slider
              value=${this._config.button_scale_keypad||1}
              @change=${e=>this._updateConfig("button_scale_keypad",Number(e.target.value))}
              min="${1}"
              max="${Qe}"
              step="0.1"
              labeled
              ?disabled=${!r||!s||(null===(t=this._config)||void 0===t?void 0:t.use_code_dialog)}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${Jt("editor.use_clear_icon",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_clear_icon}
              @change=${e=>this._updateConfig("use_clear_icon",e.target.checked)}
              ?disabled=${!r||!s||(null===(i=this._config)||void 0===i?void 0:i.use_code_dialog)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Jt("editor.keep_keypad_visible",this.hass.language)}>
            <ha-switch
              .checked=${this._config.keep_keypad_visible}
              @change=${e=>this._updateConfig("keep_keypad_visible",e.target.checked)}
              ?disabled=${!r||!s||(null===(a=this._alarmoConfig)||void 0===a?void 0:a.code_arm_required)==(null===(o=this._alarmoConfig)||void 0===o?void 0:o.code_disarm_required)||(null===(n=this._config)||void 0===n?void 0:n.use_code_dialog)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Jt("editor.use_code_dialog",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_code_dialog}
              @change=${e=>this._updateConfig("use_code_dialog",e.target.checked)}
              ?disabled=${!r||!s}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Jt("editor.show_messages",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_messages||!Yt(this._config.show_messages)}
              @change=${e=>this._updateConfig("show_messages",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Jt("editor.show_ready_indicator",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_ready_indicator}
              @change=${e=>this._updateConfig("show_ready_indicator",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Jt("editor.show_bypassed_sensors",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_bypassed_sensors}
              @change=${e=>this._updateConfig("show_bypassed_sensors",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield></ha-formfield>
        </div>
      </div>
    `}_updateConfig(e,t){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[e]:t}),"entity"==e){const e=this._config.entity?this.hass.states[this._config.entity]:void 0;e&&e.attributes.code_arm_required!=e.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}ri(this,"config-changed",{config:this._config})}}_updateStateConfig(e,t){var i;const a=e=>function(e,t){return e?Object.entries(e).filter((([e])=>t.includes(e))).reduce(((e,[t,i])=>Object.assign(e,{[t]:i})),{}):{}}(e,Object.keys(e).filter((t=>!Qt(e[t]))));let o=(null===(i=this._config)||void 0===i?void 0:i.states)||{};const n=a(Object.assign(Object.assign({},o[e]),t));o=a(Object.assign(Object.assign({},o),{[e]:n})),this._updateConfig("states",o)}_editActionClick(e){this._editAction=e}_goBack(){this._editAction=null}static get styles(){return L`
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
    `}};t([Be({attribute:!1})],si.prototype,"hass",void 0),t([Ie()],si.prototype,"_config",void 0),t([Ie()],si.prototype,"_alarmoConfig",void 0),t([Ie()],si.prototype,"_entities",void 0),t([Ie()],si.prototype,"_editAction",void 0),si=t([De("alarmo-card-editor")],si);var li,ci,di=Object.freeze({__proto__:null,get AlarmoCardEditor(){return si}});class hi extends Ne{constructor(){super(...arguments),this.duration=0,this.datetime=null,this.timer=0}shouldUpdate(e){if(!e.size)return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language)return!0;if(t.states[this.entity].state!==this.hass.states[this.entity].state||t.states[this.entity].attributes.delay!==this.hass.states[this.entity].attributes.delay){const e=t.states[this.entity].state,i=this.hass.states[this.entity].state;return Je.includes(i)?this.startTimer():Je.includes(e)&&this.stopTimer(),!0}return!1}firstUpdated(){const e=this.hass.states[this.entity].state;Je.includes(e)&&this.startTimer()}async startTimer(){var e,t;clearInterval(this.timer),(e=this.hass,t=this.entity,e.callWS({type:"alarmo/countdown",entity_id:t})).then((e=>{this.duration=e.delay,this.datetime=new Date((new Date).getTime()+1e3*e.remaining)})).catch((e=>{})),this.timer=window.setInterval((()=>{this.requestUpdate()}),1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const e=(this.datetime.getTime()-(new Date).getTime())/1e3;return e<0?(clearInterval(this.timer),0):e}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(e){return this.datetime&&this.duration?me` ${Math.max(Math.round(this.getRemaining()),0)} `:me` <ha-icon .icon=${Ve[e]}></ha-icon> `}render(){let e=45,t=2*Math.PI*e;const i=this.hass.states[this.entity],a=this.datetime&&this.duration;return me`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="track ${i.state.split("_").shift()} ${a?"timer":""}">
          <circle cx="${50}" cy="${50}" r="${e}"></circle>
          <path
            stroke-dasharray="${(this.getFraction()*t).toFixed(2)} ${t.toFixed(2)}"
            class="remaining"
            d="
              M ${50}, ${50}
              m -${e}, 0
              a ${e},${e} 0 1,0 90,0
              a ${e},${e} 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <div class="overlay ${i.state.split("_").shift()} ${a?"timer":""}">
        <div class="value">${this._stateValue(i.state)}</div>
      </div>
    `}static get styles(){return L`
      :host {
        width: 60px;
        height: 60px;
        cursor: pointer;
      }
      svg {
        width: 100%;
        height: 100%;
        display: block;
        transform: rotateZ(90deg) scale(1, -1);
      }
      .track {
        stroke-width: 4px;
        stroke-linecap: round;
        stroke: var(--disabled-text-color);
        fill: none;
      }
      .track .remaining {
        transition: 0.3s linear stroke;
        stroke: var(--alarm-state-color);
      }
      .track.arming .remaining,
      .track.pending .remaining {
        transition: 1s linear stroke-dasharray;
      }
      .overlay {
        position: absolute;
        margin-top: -60px;
        margin-left: 0;
        width: 60px;
        height: 60px;
        font-size: 1.5em;
        white-space: nowrap;
      }
      .value {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        color: var(--alarm-state-color);
        transition: 0.3s linear color;
        display: flex;
        flex: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-weight: 500;
      }
      .value ha-icon {
        --mdc-icon-size: 1.2em;
      }
      .disarmed,
      .armed {
        animation: none;
      }
      .triggered,
      .arming,
      .pending {
        animation: pulse 1s infinite;
      }
      .arming.timer,
      .pending.timer {
        animation: none;
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
    `}}t([Be()],hi.prototype,"hass",void 0),t([Be()],hi.prototype,"entity",void 0),customElements.define("alarmo-state-badge",hi),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(li||(li={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ci||(ci={}));class ui extends Ne{shouldUpdate(e){const t=e.get("hass");return!t||!(!this.entity||t.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return me``;const e=this.entity in this.hass.states;let t=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(t=Object.assign(Object.assign({},t),{state:this.state}));const i=e?ii(t,this.hass.localize):this.hass.localize("state.default.unavailable",this.hass.locale||{language:this.hass.language,number_format:li.language}),a=e?t.attributes.friendly_name||(o=t.entity_id).substring(o.indexOf(".")+1):this.entity;var o;let n=!!this.state||"on"==t.state;return me`
      <div class="badge-container" @click=${()=>ri(this,"hass-more-info",{entityId:this.entity})}>
        <div class="label-badge ${n?"active":""}" id="badge">
          <div class="value">
            <ha-state-icon
              .hass=${this.hass}
              .stateObj=${t}
            ></ha-state-icon>
            <div class="label">
              <span>${i}</span>
            </div>
          </div>
        </div>
        <div class="title">${a}</div>
      </div>
    `}static get styles(){return L`
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
    `}}t([Be()],ui.prototype,"hass",void 0),t([Be()],ui.prototype,"entity",void 0),t([Be()],ui.prototype,"state",void 0),customElements.define("alarmo-sensor-badge",ui);class pi extends Ne{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return me`
      ${this.scaled?me`
            <button ?disabled=${this.disabled}>
              <slot></slot>
            </button>
          `:me`
            <mwc-button ?disabled=${this.disabled} ?outlined=${!this.disabled}>
              <slot></slot>
            </mwc-button>
          `}
    `}handleFocus(e){e.target.blur()}static get styles(){return L`
      button {
        width: 100%;
        border-width: calc(var(--content-scale, 1) * 1px);
        border-color: var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12));
        color: var(--mdc-theme-primary, #6200ee);
        border-radius: var(--mdc-shape-small, 4px);
        padding: calc(var(--content-scale, 1) * 0.875rem);
        background-color: transparent;
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
        border: none;
      }
      button:not(:disabled):hover {
        background-color: rgba(var(--rgb-primary-color), 0.06);
      }
      button:not(:disabled):active {
        background-color: rgba(var(--rgb-primary-color), 0.12);
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
    `}}t([Be({type:Boolean})],pi.prototype,"disabled",void 0),t([Be({type:Boolean})],pi.prototype,"scaled",void 0),customElements.define("alarmo-button",pi);const _i=e=>{class i extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([Be({attribute:!1})],i.prototype,"hass",void 0),i},gi=["1","2","3","4","5","6","7","8","9","0","clear","submit"];let fi=class extends(_i(Ne)){constructor(){super(...arguments),this._input="",this._showClearButton=!1,this._narrow=!1,this._codeClearTimer=0,this.createCloseHeading=(e,t)=>{var i;return me`
  <div class="header_title">
    <ha-icon-button
      .label=${null!==(i=null==e?void 0:e.localize("ui.common.close"))&&void 0!==i?i:"Close"}
      .path=${et}
      dialogAction="close"
      class="header_button"
    ></ha-icon-button>
    <span>${t}</span>
  </div>
`}}hassSubscribe(){return[this.hass.connection.subscribeMessage((e=>this._fetchData(e)),{type:Ke})]}async _fetchData(e){var t;if(e.data.area_id===(null===(t=this._params)||void 0===t?void 0:t.area_id))switch(e.data.event){case Ge.Disarm:case Ge.Arm:case Ge.Trigger:this._confirm(e.data.event);break;case Ge.InvalidCodeProvided:case Ge.NoCodeProvided:this._showCodeError();break;case Ge.FailedToArm:case Ge.CommandNotAllowed:this._confirm(e.data.event);case Ge.TriggerTimeExpired:case Ge.ReadyToArmModesChanged:}}shouldUpdate(e){const t=e.get("hass");return!(!e.has("_params")&&this._params)||(!!e.has("_input")||(!t||t.states[this._params.entity_id]!==this.hass.states[this._params.entity_id]&&(t.states[this._params.entity_id],this.hass.states[this._params.entity_id],!0)))}firstUpdated(e){super.firstUpdated(e),this.addEventListener("keypress",(e=>{"Enter"===e.key&&this._input.length&&this._submit()}))}async showDialog(e){this._params=e,this._input="",this._narrow=matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,await this.updateComplete}closeDialog(){return this._params=void 0,this._showClearButton=!1,!0}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code");t&&(t.classList.remove("error"),t.classList.add("error"),t.invalid=!0)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout((()=>{this._clearCode()}),12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_submit(){var e;const t=null!==(e=this._input)&&void 0!==e?e:"";this._clearCodeError(),this._params.action==Ze.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._params.entity_id,code:t}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this._params.armOptions),{entity_id:this._params.entity_id,mode:We[this._params.action],code:t}))}_confirm(e){var t,i;null===(i=null===(t=this._params)||void 0===t?void 0:t.confirm)||void 0===i||i.call(t,e),this.closeDialog()}_cancel(){var e,t;null===(t=null===(e=this._params)||void 0===e?void 0:e.cancel)||void 0===t||t.call(e),this.closeDialog()}_numberClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._setCodeClearTimer(),this._input=this._input+t,this._showClearButton=!0}_clear(){this._input="",this._showClearButton=!1}render(){if(!this._params||!this.hass)return be;return"text"===this._params.code_format?me`
        <ha-dialog
          open
          @closed=${this._cancel}
          .heading=${this.hass.localize("ui.dialogs.enter_code.title")}
        >
          <ha-textfield
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputmode="text"
            @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
            @focus=${this._clearCodeError}
          ></ha-textfield>
          <ha-button slot="secondaryAction" dialogAction="cancel">
            ${this.hass.localize("ui.common.cancel")}
          </ha-button>
          <ha-button @click=${this._submit} slot="primaryAction">
            ${this.hass.localize("ui.common.submit")}
          </ha-button>
        </ha-dialog>
      `:me`
      <ha-dialog
        open
        .heading=${this.createCloseHeading(this.hass,this.hass.localize("ui.dialogs.enter_code.title"))}
        @closed=${this._cancel}
        hideActions
      >
        <div class="container">
          <ha-textfield
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputmode="numeric"
            @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
            @focus=${this._clearCodeError}
          ></ha-textfield>
          <div class="keypad">
            ${gi.map((e=>""===e?me`<span></span>`:"clear"===e?me`
                      <ha-control-button
                        @click=${this._clear}
                        class="clear"
                        .disabled=${!this._showClearButton}
                        .label=${this.hass.localize("ui.common.clear")}
                      >
                        <ha-svg-icon path=${et}></ha-svg-icon>
                      </ha-control-button>
                    `:"submit"===e?me`
                        <ha-control-button
                          @click=${this._submit}
                          class="submit"
                          .label=${this.hass.localize("ui.common.submit")}
                        >
                          <ha-svg-icon path=${"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}></ha-svg-icon>
                        </ha-control-button>
                      `:me`
                        <ha-control-button
                          .value=${e}
                          @click=${this._numberClick}
                          .label=${e}
                        >
                          ${e}
                        </ha-control-button>
                      `))}
          </div>
        </div>
      </ha-dialog>
    `}};fi.styles=L`
    ha-dialog {
      /* Place above other dialogs */
      --dialog-z-index: 104;
    }
    ha-textfield {
      width: 100%;
      max-width: 240px;
      margin: 0px auto;
      text-align: center;
      margin-left: calc(50% - 240px / 2);
      margin-bottom: 18.5px;
    }
    ha-textfield.error {
      animation: shake 0.2s ease-in-out 0s 2;
      margin-bottom: 0px;
    }
    @keyframes shake {
      0% {
        margin-left: calc(50% - 240px / 2);
      }
      25% {
        margin-left: calc(50% - 240px / 2 + 10px);
      }
      75% {
        margin-left: calc(50% - 240px / 2 - 10px);
      }
      100% {
        margin-left: calc(50% - 240px / 2);
      }
    }
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .keypad {
      --keypad-columns: 3;
      margin-top: 12px;
      padding: 12px;
      display: grid;
      grid-template-columns: repeat(var(--keypad-columns), auto);
      grid-auto-rows: auto;
      grid-gap: 24px;
      justify-items: center;
      align-items: center;
    }
    .clear {
      grid-row-start: 4;
      grid-column-start: 0;
    }
    @media all and (max-height: 450px) {
      .keypad {
        --keypad-columns: 6;
      }
      .clear {
        grid-row-start: 1;
        grid-column-start: 6;
      }
    }

    ha-control-button {
      width: 56px;
      height: 56px;
      --control-button-border-radius: 28px;
      --mdc-icon-size: 24px;
      font-size: 24px;
    }
    .submit {
      --control-button-background-color: var(--green-color);
      --control-button-icon-color: var(--green-color);
    }
    .clear {
      --control-button-background-color: var(--red-color);
      --control-button-icon-color: var(--red-color);
    }
    .hidden {
      display: none;
    }
    .buttons {
      margin-top: 12px;
    }
  `,t([Be({attribute:!1})],fi.prototype,"hass",void 0),t([Ie()],fi.prototype,"_params",void 0),t([Ie()],fi.prototype,"_input",void 0),t([Ie()],fi.prototype,"_showClearButton",void 0),t([Ie()],fi.prototype,"_narrow",void 0),fi=t([De("alarmo-code-dialog")],fi);var mi=Object.freeze({__proto__:null,get AlarmoCodeDialog(){return fi}});const vi=["1","2","3","4","5","6","7","8","9","","0","clear"];return e.AlarmoCard=class extends(_i(Ne)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=void 0,this.armOptions=Object.assign({},Xe),this.readyForArmModes=null,this.backendConnection=null,this.showBypassedSensors=!1,this.subscribedEntities=[],this._codeClearTimer=0}static async getConfigElement(){return await Promise.resolve().then((function(){return di})),document.createElement("alarmo-card-editor")}static async getStubConfig(e){let t=Object.keys(e.states).find((e=>"alarm_control_panel"==Xt(e)));return await oi(e).then((e=>{const i=e.sort(((e,t)=>Number(e.area_id)-Number(t.area_id)));i.length&&(t=i[0].entity_id)})),{type:"custom:alarmo-card",entity:t}}async getCardSize(){var e;if(!this._config||!this.hass)return 9;const t=this.hass.states[this._config.entity];return t&&(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Fe?!ai(t)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?4:9:4}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),(e=>{if(!e||!e.entity||"alarm_control_panel"!==Xt(e.entity))throw new Error("Invalid configuration provided for entity");if(Yt(e.button_scale_keypad)&&("number"!=typeof e.button_scale_keypad||e.button_scale_keypad<1||e.button_scale_keypad>Qe))throw new Error("Invalid configuration provided for button_scale_keypad");if(Yt(e.button_scale_actions)&&("number"!=typeof e.button_scale_actions||e.button_scale_actions<1||e.button_scale_actions>Qe))throw new Error("Invalid configuration provided for button_scale_actions")})(e),this._config=Object.assign(Object.assign({},Ye),e)}hassSubscribe(){return[this.hass.connection.subscribeMessage((e=>this._fetchData(e)),{type:Ke})]}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement(),await this.loadBackendConfig()}async loadBackendConfig(){this.backendConnection||oi(this.hass).then((e=>{const t=e.find((e=>e.entity_id==this._config.entity));t&&(this.area_id=t.area_id?t.area_id:null)})).then((()=>ni(this.hass))).then((e=>{this._alarmoConfig=e,this.backendConnection=!0})).then((()=>{return e=this.hass,t=this._config.entity,e.callWS({type:"alarmo/ready_to_arm_modes",entity_id:t});var e,t})).then((e=>{this.readyForArmModes=e.modes})).catch((e=>{this.backendConnection=!1}))}async _fetchData(e){if(e.data.area_id===this.area_id)switch(e.data.event){case Ge.Arm:this._clearCode();break;case Ge.Trigger:break;case Ge.InvalidCodeProvided:case Ge.NoCodeProvided:this._showCodeError(),this.subscribedEntities=[];break;case Ge.FailedToArm:this.warning="blocking_sensors",this._clearCode();break;case Ge.CommandNotAllowed:this._clearCode();break;case Ge.TriggerTimeExpired:break;case Ge.ReadyToArmModesChanged:this.readyForArmModes=e.data.modes}}shouldUpdate(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language||t.config.state!==this.hass.config.state)return!0;if(t.states[this._config.entity]!==this.hass.states[this._config.entity]){const e=t.states[this._config.entity],i=this.hass.states[this._config.entity];return!1===this.backendConnection&&(async()=>{await this.loadBackendConfig()})(),this.processStateUpdate(e,i),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some((e=>t.states[e]!==this.hass.states[e])))}processStateUpdate(e,t){t.state!=e.state&&(this.subscribedEntities=[]),(t.state==qe.Disarmed||t.last_changed!==e.last_changed)&&this._clearCode()}render(){var e,t;if(!this._config||!this.hass||null===this.backendConnection)return me``;const i=this.hass.states[this._config.entity];return i?!1===this.backendConnection?me`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `:me`
      <ha-card>
        ${i.state===qe.Disarmed?me`
              <ha-button-menu
                corner="BOTTOM_START"
                multi
                @action=${this._toggleArmOptions}
                @click=${e=>e.preventDefault()}
              >
                <ha-icon-button slot="trigger" .label=${this.hass.localize("ui.common.menu")} .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}>
                </ha-icon-button>
                <mwc-list-item noninteractive>
                  <span class="title">
                    ${Jt("arm_options.heading",this.hass.language)}
                  </span>
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <ha-icon
                    slot="graphic"
                    icon="${this.armOptions.skip_delay?"mdi:check":""}"
                    @click=${e=>{var t;null===(t=e.target.parentElement)||void 0===t||t.click(),e.stopPropagation()}}
                  ></ha-icon>
                  ${Jt("arm_options.skip_delay",this.hass.language)}
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <ha-icon
                    slot="graphic"
                    icon="${this.armOptions.force?"mdi:check":""}"
                    @click=${e=>{var t;null===(t=e.target.parentElement)||void 0===t||t.click(),e.stopPropagation()}}
                  ></ha-icon>
                  ${Jt("arm_options.force",this.hass.language)}
                </mwc-list-item>
              </ha-button-menu>
            `:""}

        <div class="header">
          <div class="icon">
            <alarmo-state-badge
              .hass=${this.hass}
              .entity=${this._config.entity}
              @click=${()=>ri(this,"hass-more-info",{entityId:this._config.entity})}
              style="--alarm-state-color: ${(e=>{if(!e||!e.state)return"var(--state-unavailable-color)";const t=e.state;return t==qe.Disarmed?"var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)))":Object.values(qe).includes(t)?`var(--state-alarm_control_panel-${t}-color, var(--state-alarm_control_panel-active-color, var(--state-active-color)))`:"var(--disabled-color, var(--state-inactive-color))"})(i)}"
            >
            </alarmo-state-badge>
          </div>
          <div class="summary">
            <div class="name">
              ${((e,t)=>Qt(t.name)?e.attributes.friendly_name:t.name)(i,this._config)}
            </div>
            <div class="state">
              ${ii(i,this.hass.localize,this._config)}
            </div>
          </div>
        </div>

        ${this._renderWarning()}

        <div id="armActions" class="actions">
          ${this._renderActions()}
        </div>

        ${!ai(i)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?me``:me`
              <ha-textfield
                .value=${this._input}
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                ?disabled=${!ai(i)}
                @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputmode=${(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Fe?"numeric":"text"}
              ></ha-textfield>
            `}
        ${!ai(i)&&!this._config.keep_keypad_visible||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)!==Fe||this._config.use_code_dialog?me``:me`
          <div id="keypad" style="max-width: ${300*this._config.button_scale_keypad}px">
            ${vi.map((e=>""===e?me`
              <alarmo-button
                disabled
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
              ></alarmo-button>
            `:me`
              <alarmo-button
                .value="${e}"
                @click=${this._handlePadClick}
                ?disabled=${!ai(i)}
                class="${"clear"!==e?"numberKey":""}"
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
              >
                ${"clear"===e?this._config.use_clear_icon?me`<ha-icon icon="hass:backspace-outline"></ha-icon>`:me`<span>${this.hass.localize("ui.card.alarm_control_panel.clear_code")}</span>`:me` <span>${e}</span>`}
              </alarmo-button>
            `))}
          </div>
        `}
      </ha-card>
    `:me`
        <hui-warning>
          ${"NOT_RUNNING"!==this.hass.config.state?this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]"):this.hass.localize("ui.panel.lovelace.warning.starting")}
        </hui-warning>
      `}_renderActions(){if(!this.hass||!this._config)return me``;const e=this.hass.states[this._config.entity],t=e.state===qe.Disarmed?ti(e).filter((e=>!ei(We[e],this._config).hide)):[Ze.Disarm],i=this._config.show_ready_indicator;return t.map((e=>{const t=ei(We[e],this._config),a=Array.isArray(this.readyForArmModes)&&this.readyForArmModes.includes(We[e]);return me`
        <alarmo-button
          @click=${t=>this._handleActionClick(t,e)}
          style="--content-scale: ${this._config.button_scale_actions}"
          ?scaled=${1!=this._config.button_scale_actions}
        >
          ${i&&e!=Ze.Disarm?me`
                <ha-icon
                  icon="mdi:circle-medium"
                  style="${null===this.readyForArmModes?"color: var(--label-badge-grey)":a?"color: var(--success-color)":"color: var(--error-color)"}"
                  class="leading"
                ></ha-icon>
              `:""}
          ${Qt(t.button_label)?me`
                <span>${this.hass.localize(`ui.card.alarm_control_panel.${e}`)}</span>
              `:me`
                <span>${t.button_label}</span>
              `}
        </alarmo-button>
      `}))}_renderWarning(){var e;if(!this.hass||!this._config||!this._config.show_messages)return me``;const t=this.hass.states[this._config.entity];return t.attributes.open_sensors&&t.state==qe.Triggered||"blocking_sensors"==this.warning&&t.attributes.open_sensors?me`
        <div class="messagebox">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${"blocking_sensors"==this.warning?Jt("errors.blocking_sensors",this.hass.language):Jt("errors.triggered_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${Object.entries(t.attributes.open_sensors).map((([e])=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),me`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `)))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:t.state.startsWith("armed_")&&(null===(e=t.attributes.bypassed_sensors)||void 0===e?void 0:e.length)&&this._config.show_bypassed_sensors?me`
        <div class="messagebox warning">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${Jt("errors.bypassed_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${t.attributes.bypassed_sensors.map((e=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),me`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `)))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:me``}_handlePadClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._input="clear"===t?"":this._input+t}async _handleActionClick(e,t){var i;e.target.blur(),this._clearCodeError();const a=this.hass.states[this._config.entity];if((null===(i=this._config)||void 0===i?void 0:i.use_code_dialog)&&ai(a)){const i=await new Promise((i=>{const a=e.target,o={code_format:this._alarmoConfig.code_format,area_id:this.area_id,entity_id:this._config.entity,action:t,armOptions:this.armOptions,cancel:()=>{i(null)},confirm:e=>{i(e)}};ri(a,"show-dialog",{dialogTag:"alarmo-code-dialog",dialogImport:()=>Promise.resolve().then((function(){return mi})),dialogParams:o})}));i!=Ge.Arm&&i!=Ge.Disarm||(this.warning="",this.armOptions=Object.assign({},Xe))}else t==Ze.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._config.entity,code:this._input}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this.armOptions),{entity_id:this._config.entity,mode:We[t],code:this._input})),this.warning="",this.armOptions=Object.assign({},Xe)}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&(t.classList.remove("error"),t.classList.add("error"),t.invalid=!0)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout((()=>{this._clearCode()}),12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_toggleArmOptions(e){switch(e.detail.index){case 0:this.armOptions=Object.assign(Object.assign({},this.armOptions),{skip_delay:!this.armOptions.skip_delay});break;case 1:this.armOptions=Object.assign(Object.assign({},this.armOptions),{force:!this.armOptions.force})}e.preventDefault();const t=e.target;setTimeout((()=>{t.firstElementChild.blur()}),50)}static get styles(){return L`
      ha-card {
        padding-bottom: 16px;
        position: relative;
        height: 100%;
        box-sizing: border-box;
      }
      .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0px auto;
        padding: 20px 0px;
        box-sizing: border-box;
      }
      .header .icon {
        display: flex;
        padding-right: 20px;
      }
      .header .summary {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .header .name {
        font-size: 24px;
        display: flex;
      }
      .header .state {
        font-size: 14px;
        display: flex;
      }
      .actions {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .actions alarmo-button {
        margin: 0 8px 8px;
      }
      ha-textfield {
        margin: 8px auto;
        max-width: 200px;
        text-align: center;
        margin-left: calc(50% - 200px / 2);
      }
      ha-textfield.error {
        animation: shake 0.2s ease-in-out 0s 2;
      }
      #keypad {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        width: 100%;
      }
      #keypad alarmo-button {
        padding: 8px;
        width: 30%;
        box-sizing: border-box;
      }
      @keyframes shake {
        0% {
          margin-left: calc(50% - 200px / 2);
        }
        25% {
          margin-left: calc(50% - 200px / 2 + 10px);
        }
        75% {
          margin-left: calc(50% - 200px / 2 - 10px);
        }
        100% {
          margin-left: calc(50% - 200px / 2);
        }
      }
      div.messagebox {
        width: 90%;
        margin: 0px auto 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        --border-color: var(--label-badge-red);
      }
      div.messagebox.warning {
        --border-color: var(--label-badge-yellow);
      }
      div.messagebox.warning alarmo-sensor-badge {
        --label-badge-red: var(--label-badge-yellow);
      }
      div.messagebox-left {
        display: flex;
        width: 10px;
        border: 1px solid var(--border-color);
        border-width: 1px 0px 1px 1px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      div.messagebox-right {
        display: flex;
        width: 10px;
        border: 1px solid var(--border-color);
        border-width: 1px 1px 1px 0px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      div.messagebox-inner {
        flex-direction: column;
        border-bottom: 1px solid var(--border-color);
        flex: 1 1;
      }
      div.messagebox .description {
        display: flex;
        flex-direction: row;
      }
      div.messagebox .description span {
        color: var(--label-badge-red);
        font-weight: 500;
        display: flex;
        margin-top: -10px;
        padding: 0px 5px;
        flex-shrink: 2;
      }
      div.messagebox.warning .description span {
        color: #d0863d;
      }
      div.messagebox .description-filler {
        flex: 1;
        border-top: 1px solid var(--border-color);
        min-width: 5px;
      }
      div.messagebox .description ha-icon {
        --mdc-icon-size: 24px;
        margin: 0px 4px 0px 0px;
      }
      div.messagebox .content {
        display: flex;
        flex-basis: 100%;
        padding: 5px;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        color: var(--primary-text-color);
      }
      div.messagebox .content .badge {
        width: 64px;
        margin: 5px 0px;
        justify-content: center;
        align-items: center;
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
    `}},t([Be({attribute:!1})],e.AlarmoCard.prototype,"hass",void 0),t([Ie()],e.AlarmoCard.prototype,"_config",void 0),t([Ie()],e.AlarmoCard.prototype,"_alarmoConfig",void 0),t([Ie()],e.AlarmoCard.prototype,"_input",void 0),t([Ie()],e.AlarmoCard.prototype,"warning",void 0),t([Ie()],e.AlarmoCard.prototype,"area_id",void 0),t([Ie()],e.AlarmoCard.prototype,"armOptions",void 0),t([Ie()],e.AlarmoCard.prototype,"readyForArmModes",void 0),t([Ie()],e.AlarmoCard.prototype,"backendConnection",void 0),t([Ie()],e.AlarmoCard.prototype,"showBypassedSensors",void 0),e.AlarmoCard=t([De("alarmo-card")],e.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card",name:"Alarmo Card",description:"Card for operating Alarmo through Lovelace.",preview:!0}),console.info(`%c  ALARMO-CARD  \n%c  Version: ${"v1.6.1".padEnd(7," ")}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),e}({});
