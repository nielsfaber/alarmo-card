var AlarmoCard=function(e){"use strict";function t(e,t,i,a){var s,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,i,a,s,o,n){try{var r=e[o](n),l=r.value}catch(e){return void i(e)}r.done?t(l):Promise.resolve(l).then(a,s)}function o(e,t,i){return t=u(t),function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}(e,_()?Reflect.construct(t,i||[],u(e).constructor):t.apply(e,i))}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,$(a.key),a)}}function l(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=A(e))||t){i&&(e=i);var a=0,s=function(){};return{s:s,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,n=!0,r=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return n=e.done,e},e:function(e){r=!0,o=e},f:function(){try{n||null==i.return||i.return()}finally{if(r)throw o}}}}function d(e,t,i){return(t=$(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,i){var a=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(a){var s=Object.getOwnPropertyDescriptor(a,t);return s.get?s.get.call(arguments.length<3?e:i):s.value}},h.apply(null,arguments)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(_=function(){return!!e})()}function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(Object(i),!0).forEach(function(t){d(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function f(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
var e,t,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.toStringTag||"@@toStringTag";function o(i,a,s,o){var l=a&&a.prototype instanceof r?a:r,c=Object.create(l.prototype);return v(c,"_invoke",function(i,a,s){var o,r,l,c=0,d=s||[],h=!1,u={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,i){return o=t,r=0,l=e,u.n=i,n}};function p(i,a){for(r=i,l=a,t=0;!h&&c&&!s&&t<d.length;t++){var s,o=d[t],p=u.p,_=o[2];i>3?(s=_===a)&&(l=o[(r=o[4])?5:(r=3,3)],o[4]=o[5]=e):o[0]<=p&&((s=i<2&&p<o[1])?(r=0,u.v=a,u.n=o[1]):p<_&&(s=i<3||o[0]>a||a>_)&&(o[4]=i,o[5]=a,u.n=_,r=0))}if(s||i>1)return n;throw h=!0,a}return function(s,d,_){if(c>1)throw TypeError("Generator is already running");for(h&&1===d&&p(d,_),r=d,l=_;(t=r<2?e:l)||!h;){o||(r?r<3?(r>1&&(u.n=-1),p(r,l)):u.n=l:u.v=l);try{if(c=2,o){if(r||(s="next"),t=o[s]){if(!(t=t.call(o,l)))throw TypeError("iterator result is not an object");if(!t.done)return t;l=t.value,r<2&&(r=0)}else 1===r&&(t=o.return)&&t.call(o),r<2&&(l=TypeError("The iterator does not provide a '"+s+"' method"),r=1);o=e}else if((t=(h=u.n<0)?l:i.call(a,u))!==n)break}catch(t){o=e,r=1,l=t}finally{c=1}}return{value:t,done:h}}}(i,s,o),!0),c}var n={};function r(){}function l(){}function c(){}t=Object.getPrototypeOf;var d=[][a]?t(t([][a]())):(v(t={},a,function(){return this}),t),h=c.prototype=r.prototype=Object.create(d);function u(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,v(e,s,"GeneratorFunction")),e.prototype=Object.create(h),e}return l.prototype=c,v(h,"constructor",c),v(c,"constructor",l),l.displayName="GeneratorFunction",v(c,s,"GeneratorFunction"),v(h),v(h,s,"Generator"),v(h,a,function(){return this}),v(h,"toString",function(){return"[object Generator]"}),(f=function(){return{w:o,m:u}})()}function v(e,t,i,a){var s=Object.defineProperty;try{s({},"",{})}catch(e){s=0}v=function(e,t,i,a){function o(t,i){v(e,t,function(e){return this._invoke(t,i,e)})}t?s?s(e,t,{value:i,enumerable:!a,configurable:!a,writable:!a}):e[t]=i:(o("next",0),o("throw",1),o("return",2))},v(e,t,i,a)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,s,o,n,r=[],l=!0,c=!1;try{if(o=(i=i.call(e)).next,0===t);else for(;!(l=(a=o.call(i)).done)&&(r.push(a.value),r.length!==t);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=i.return&&(n=i.return(),Object(n)!==n))return}finally{if(c)throw s}}return r}}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t,i,a){var s=h(u(e.prototype),t,i);return 2&a&&"function"==typeof s?function(e){return s.apply(i,e)}:s}function w(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t);if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:t+""}function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function A(e,t){if(e){if("string"==typeof e)return i(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}function C(e){var t="function"==typeof Map?new Map:void 0;return C=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return function(e,t,i){if(_())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var s=new(e.bind.apply(e,a));return i&&b(s,i.prototype),s}(e,arguments,u(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),b(i,e)},C(e)
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}"function"==typeof SuppressedError&&SuppressedError;var O,S,E,j=globalThis,z=j.ShadowRoot&&(void 0===j.ShadyCSS||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,T=Symbol(),P=new WeakMap,M=function(){return l(function e(t,i,a){if(n(this,e),this._$cssResult$=!0,a!==T)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i},[{key:"styleSheet",get:function(){var e=this.o,t=this.t;if(z&&void 0===e){var i=void 0!==t&&1===t.length;i&&(e=P.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&P.set(t,e))}return e}},{key:"toString",value:function(){return this.cssText}}])}(),D=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=1===e.length?e[0]:i.reduce(function(t,i,a){return t+function(e){if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(i)+e[a+1]},e[0]);return new M(s,e,T)},L=z?function(e){return e}:function(e){return e instanceof CSSStyleSheet?function(e){var t,i="",a=c(e.cssRules);try{for(a.s();!(t=a.n()).done;){i+=t.value.cssText}}catch(e){a.e(e)}finally{a.f()}return function(e){return new M("string"==typeof e?e:e+"",void 0,T)}(i)}(e):e},R=Object.is,N=Object.defineProperty,U=Object.getOwnPropertyDescriptor,H=Object.getOwnPropertyNames,B=Object.getOwnPropertySymbols,I=Object.getPrototypeOf,q=globalThis,F=q.trustedTypes,V=F?F.emptyScript:"",Z=q.reactiveElementPolyfillSupport,W=function(e,t){return e},G={toAttribute:function(e,t){switch(t){case Boolean:e=e?V:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){var i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},K=function(e,t){return!R(e,t)},J={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:K};null!==(O=Symbol.metadata)&&void 0!==O||(Symbol.metadata=Symbol("metadata")),null!==(S=q.litPropertyMetadata)&&void 0!==S||(q.litPropertyMetadata=new WeakMap);var Q,X=function(e){function t(){var e;return n(this,t),(e=o(this,t))._$Ep=void 0,e.isUpdatePending=!1,e.hasUpdated=!1,e._$Em=null,e._$Ev(),e}return p(t,e),l(t,[{key:"_$Ev",value:function(){var e,t=this;this._$ES=new Promise(function(e){return t.enableUpdating=e}),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach(function(e){return e(t)})}},{key:"addController",value:function(e){var t,i;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}},{key:"removeController",value:function(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}},{key:"_$E_",value:function(){var e,t=new Map,i=c(this.constructor.elementProperties.keys());try{for(i.s();!(e=i.n()).done;){var a=e.value;this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a])}}catch(e){i.e(e)}finally{i.f()}t.size>0&&(this._$Ep=t)}},{key:"createRenderRoot",value:function(){var e,t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return function(e,t){if(z)e.adoptedStyleSheets=t.map(function(e){return e instanceof CSSStyleSheet?e:e.styleSheet});else{var i,a=c(t);try{for(a.s();!(i=a.n()).done;){var s=i.value,o=document.createElement("style"),n=j.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=s.cssText,e.appendChild(o)}}catch(e){a.e(e)}finally{a.f()}}}(t,this.constructor.elementStyles),t}},{key:"connectedCallback",value:function(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach(function(e){var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}},{key:"enableUpdating",value:function(e){}},{key:"disconnectedCallback",value:function(){var e;null===(e=this._$EO)||void 0===e||e.forEach(function(e){var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}},{key:"attributeChangedCallback",value:function(e,t,i){this._$AK(e,i)}},{key:"_$ET",value:function(e,t){var i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){var s,o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:G).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}},{key:"_$AK",value:function(e,t){var i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){var s,o,n,r=i.getPropertyOptions(a),l="function"==typeof r.converter?{fromAttribute:r.converter}:void 0!==(null===(s=r.converter)||void 0===s?void 0:s.fromAttribute)?r.converter:G;this._$Em=a;var c=l.fromAttribute(t,r.type);this[a]=null!==(o=null!=c?c:null===(n=this._$Ej)||void 0===n?void 0:n.get(a))&&void 0!==o?o:c,this._$Em=null}}},{key:"requestUpdate",value:function(e,t,i){if(void 0!==e){var a,s,o=this.constructor,n=this[e];if(null!=i||(i=o.getPropertyOptions(e)),!((null!==(a=i.hasChanged)&&void 0!==a?a:K)(n,t)||i.useDefault&&i.reflect&&n===(null===(s=this._$Ej)||void 0===s?void 0:s.get(e))&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}},{key:"C",value:function(e,t,i,a){var s,o,n,r=i.useDefault,l=i.reflect,c=i.wrapped;r&&!(null!==(s=this._$Ej)&&void 0!==s?s:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,null!==(o=null!=a?a:t)&&void 0!==o?o:this[e]),!0!==c||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===l&&this._$Em!==e&&(null!==(n=this._$Eq)&&void 0!==n?n:this._$Eq=new Set).add(e))}},{key:"_$EP",value:(i=function(e){return function(){var t=this,i=arguments;return new Promise(function(a,o){var n=e.apply(t,i);function r(e){s(n,a,o,r,l,"next",e)}function l(e){s(n,a,o,r,l,"throw",e)}r(void 0)})}}(f().m(function e(){var t,i;return f().w(function(e){for(;;)switch(e.p=e.n){case 0:return this.isUpdatePending=!0,e.p=1,e.n=2,this._$ES;case 2:e.n=4;break;case 3:e.p=3,i=e.v,Promise.reject(i);case 4:if(null==(t=this.scheduleUpdate())){e.n=5;break}return e.n=5,t;case 5:return e.a(2,!this.isUpdatePending)}},e,this,[[1,3]])})),function(){return i.apply(this,arguments)})},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){if(this.isUpdatePending){if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){var t,i=c(this._$Ep);try{for(i.s();!(t=i.n()).done;){var a=y(t.value,2),s=a[0],o=a[1];this[s]=o}}catch(e){i.e(e)}finally{i.f()}this._$Ep=void 0}var n=this.constructor.elementProperties;if(n.size>0){var r,l=c(n);try{for(l.s();!(r=l.n()).done;){var d=y(r.value,2),h=d[0],u=d[1],p=u.wrapped,_=this[h];!0!==p||this._$AL.has(h)||void 0===_||this.C(h,void 0,u,_)}}catch(e){l.e(e)}finally{l.f()}}}var g=!1,m=this._$AL;try{var f;(g=this.shouldUpdate(m))?(this.willUpdate(m),null!==(f=this._$EO)&&void 0!==f&&f.forEach(function(e){var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(m)):this._$EM()}catch(m){throw g=!1,this._$EM(),m}g&&this._$AE(m)}}},{key:"willUpdate",value:function(e){}},{key:"_$AE",value:function(e){var t;null!==(t=this._$EO)&&void 0!==t&&t.forEach(function(e){var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}},{key:"_$EM",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$ES}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;this._$Eq&&(this._$Eq=this._$Eq.forEach(function(e){return t._$ET(e,t[e])})),this._$EM()}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}}],[{key:"addInitializer",value:function(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}},{key:"observedAttributes",get:function(){return this.finalize(),this._$Eh&&w(this._$Eh.keys())}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J;if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){var i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&N(this.prototype,e,a)}}},{key:"getPropertyDescriptor",value:function(e,t,i){var a,s=null!==(a=U(this.prototype,e))&&void 0!==a?a:{get:function(){return this[t]},set:function(e){this[t]=e}},o=s.get,n=s.set;return{get:o,set:function(t){var a=null==o?void 0:o.call(this);null!=n&&n.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:J}},{key:"_$Ei",value:function(){if(!this.hasOwnProperty(W("elementProperties"))){var e=I(this);e.finalize(),void 0!==e.l&&(this.l=w(e.l)),this.elementProperties=new Map(e.elementProperties)}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(W("finalized"))){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){var e,t=this.properties,i=c([].concat(w(H(t)),w(B(t))));try{for(i.s();!(e=i.n()).done;){var a=e.value;this.createProperty(a,t[a])}}catch(e){i.e(e)}finally{i.f()}}var s=this[Symbol.metadata];if(null!==s){var o=litPropertyMetadata.get(s);if(void 0!==o){var n,r=c(o);try{for(r.s();!(n=r.n()).done;){var l=y(n.value,2),d=l[0],h=l[1];this.elementProperties.set(d,h)}}catch(e){r.e(e)}finally{r.f()}}}this._$Eh=new Map;var u,p=c(this.elementProperties);try{for(p.s();!(u=p.n()).done;){var _=y(u.value,2),g=_[0],m=_[1],f=this._$Eu(g,m);void 0!==f&&this._$Eh.set(f,g)}}catch(e){p.e(e)}finally{p.f()}this.elementStyles=this.finalizeStyles(this.styles)}}},{key:"finalizeStyles",value:function(e){var t=[];if(Array.isArray(e)){var i,a=c(new Set(e.flat(1/0).reverse()));try{for(a.s();!(i=a.n()).done;){var s=i.value;t.unshift(L(s))}}catch(e){a.e(e)}finally{a.f()}}else void 0!==e&&t.push(L(e));return t}},{key:"_$Eu",value:function(e,t){var i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}}]);var i}(C(HTMLElement));X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[W("elementProperties")]=new Map,X[W("finalized")]=new Map,null!=Z&&Z({ReactiveElement:X}),(null!==(E=q.reactiveElementVersions)&&void 0!==E?E:q.reactiveElementVersions=[]).push("2.1.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var Y=globalThis,ee=Y.trustedTypes,te=ee?ee.createPolicy("lit-html",{createHTML:function(e){return e}}):void 0,ie="$lit$",ae="lit$".concat(Math.random().toFixed(9).slice(2),"$"),se="?"+ae,oe="<".concat(se,">"),ne=document,re=function(){return ne.createComment("")},le=function(e){return null===e||"object"!=x(e)&&"function"!=typeof e},ce=Array.isArray,de="[ \t\n\f\r]",he=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,pe=/>/g,_e=RegExp(">|".concat(de,"(?:([^\\s\"'>=/]+)(").concat(de,"*=").concat(de,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),ge=/'/g,me=/"/g,fe=/^(?:script|style|textarea|title)$/i,ve=function(e){return function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];return{_$litType$:e,strings:t,values:a}}}(1),be=Symbol.for("lit-noChange"),ye=Symbol.for("lit-nothing"),ke=new WeakMap,we=ne.createTreeWalker(ne,129);function $e(e,t){if(!ce(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==te?te.createHTML(t):t}var xe=function(e,t){for(var i,a=e.length-1,s=[],o=2===t?"<svg>":3===t?"<math>":"",n=he,r=0;r<a;r++){for(var l=e[r],c=void 0,d=void 0,h=-1,u=0;u<l.length&&(n.lastIndex=u,null!==(d=n.exec(l)));)u=n.lastIndex,n===he?"!--"===d[1]?n=ue:void 0!==d[1]?n=pe:void 0!==d[2]?(fe.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=_e):void 0!==d[3]&&(n=_e):n===_e?">"===d[0]?(n=null!=i?i:he,h=-1):void 0===d[1]?h=-2:(h=n.lastIndex-d[2].length,c=d[1],n=void 0===d[3]?_e:'"'===d[3]?me:ge):n===me||n===ge?n=_e:n===ue||n===pe?n=he:(n=_e,i=void 0);var p=n===_e&&e[r+1].startsWith("/>")?" ":"";o+=n===he?l+oe:h>=0?(s.push(c),l.slice(0,h)+ie+l.slice(h)+ae+p):l+ae+(-2===h?r:p)}return[$e(e,o+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]},Ae=function(){return l(function e(t,i){var a,s=t.strings,o=t._$litType$;n(this,e),this.parts=[];var r=0,l=0,d=s.length-1,h=this.parts,u=y(xe(s,o),2),p=u[0],_=u[1];if(this.el=e.createElement(p,i),we.currentNode=this.el.content,2===o||3===o){var g=this.el.content.firstChild;g.replaceWith.apply(g,w(g.childNodes))}for(;null!==(a=we.nextNode())&&h.length<d;){if(1===a.nodeType){if(a.hasAttributes()){var m,f=c(a.getAttributeNames());try{for(f.s();!(m=f.n()).done;){var v=m.value;if(v.endsWith(ie)){var b=_[l++],k=a.getAttribute(v).split(ae),$=/([.?@])?(.*)/.exec(b);h.push({type:1,index:r,name:$[2],strings:k,ctor:"."===$[1]?je:"?"===$[1]?ze:"@"===$[1]?Te:Ee}),a.removeAttribute(v)}else v.startsWith(ae)&&(h.push({type:6,index:r}),a.removeAttribute(v))}}catch(e){f.e(e)}finally{f.f()}}if(fe.test(a.tagName)){var x=a.textContent.split(ae),A=x.length-1;if(A>0){a.textContent=ee?ee.emptyScript:"";for(var C=0;C<A;C++)a.append(x[C],re()),we.nextNode(),h.push({type:2,index:++r});a.append(x[A],re())}}}else if(8===a.nodeType)if(a.data===se)h.push({type:2,index:r});else for(var O=-1;-1!==(O=a.data.indexOf(ae,O+1));)h.push({type:7,index:r}),O+=ae.length-1;r++}},null,[{key:"createElement",value:function(e,t){var i=ne.createElement("template");return i.innerHTML=e,i}}])}();function Ce(e,t){var i,a,s,o,n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,l=arguments.length>3?arguments[3]:void 0;if(t===be)return t;var c=void 0!==l?null===(i=r._$Co)||void 0===i?void 0:i[l]:r._$Cl,d=le(t)?void 0:t._$litDirective$;return(null===(a=c)||void 0===a?void 0:a.constructor)!==d&&(null!==(s=c)&&void 0!==s&&null!==(o=s._$AO)&&void 0!==o&&o.call(s,!1),void 0===d?c=void 0:(c=new d(e))._$AT(e,r,l),void 0!==l?(null!==(n=r._$Co)&&void 0!==n?n:r._$Co=[])[l]=c:r._$Cl=c),void 0!==c&&(t=Ce(e,c._$AS(e,t.values),c,l)),t}var Oe=function(){return l(function e(t,i){n(this,e),this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i},[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(e){var t,i=this._$AD,a=i.el.content,s=i.parts,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:ne).importNode(a,!0);we.currentNode=o;for(var n=we.nextNode(),r=0,l=0,c=s[0];void 0!==c;){var d;if(r===c.index){var h=void 0;2===c.type?h=new Se(n,n.nextSibling,this,e):1===c.type?h=new c.ctor(n,c.name,c.strings,this,e):6===c.type&&(h=new Pe(n,this,e)),this._$AV.push(h),c=s[++l]}r!==(null===(d=c)||void 0===d?void 0:d.index)&&(n=we.nextNode(),r++)}return we.currentNode=ne,o}},{key:"p",value:function(e){var t,i=0,a=c(this._$AV);try{for(a.s();!(t=a.n()).done;){var s=t.value;void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}catch(e){a.e(e)}finally{a.f()}}}])}(),Se=function(){function e(t,i,a,s){var o;n(this,e),this.type=2,this._$AH=ye,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=a,this.options=s,this._$Cv=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}return l(e,[{key:"_$AU",get:function(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}},{key:"parentNode",get:function(){var e,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=i.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(e){e=Ce(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),le(e)?e===ye||null==e||""===e?(this._$AH!==ye&&this._$AR(),this._$AH=ye):e!==this._$AH&&e!==be&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):function(e){return ce(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator])}(e)?this.k(e):this._(e)}},{key:"O",value:function(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}},{key:"T",value:function(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}},{key:"_",value:function(e){this._$AH!==ye&&le(this._$AH)?this._$AA.nextSibling.data=e:this.T(ne.createTextNode(e)),this._$AH=e}},{key:"$",value:function(e){var t,i=e.values,a=e._$litType$,s="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=Ae.createElement($e(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.p(i);else{var o=new Oe(s,this),n=o.u(this.options);o.p(i),this.T(n),this._$AH=o}}},{key:"_$AC",value:function(e){var t=ke.get(e.strings);return void 0===t&&ke.set(e.strings,t=new Ae(e)),t}},{key:"k",value:function(t){ce(this._$AH)||(this._$AH=[],this._$AR());var i,a,s=this._$AH,o=0,n=c(t);try{for(n.s();!(a=n.n()).done;){var r=a.value;o===s.length?s.push(i=new e(this.O(re()),this.O(re()),this,this.options)):i=s[o],i._$AI(r),o++}}catch(e){n.e(e)}finally{n.f()}o<s.length&&(this._$AR(i&&i._$AB.nextSibling,o),s.length=o)}},{key:"_$AR",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e!==this._$AB;){var i,a=e.nextSibling;e.remove(),e=a}}},{key:"setConnected",value:function(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}])}(),Ee=function(){return l(function e(t,i,a,s,o){n(this,e),this.type=1,this._$AH=ye,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=ye},[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,s=this.strings,o=!1;if(void 0===s)e=Ce(this,e,t,0),(o=!le(e)||e!==this._$AH&&e!==be)&&(this._$AH=e);else{var n,r,l=e;for(e=s[0],n=0;n<s.length-1;n++)(r=Ce(this,l[i+n],t,n))===be&&(r=this._$AH[n]),o||(o=!le(r)||r!==this._$AH[n]),r===ye?e=ye:e!==ye&&(e+=(null!=r?r:"")+s[n+1]),this._$AH[n]=r}o&&!a&&this.j(e)}},{key:"j",value:function(e){e===ye?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}])}(),je=function(e){function t(){var e;return n(this,t),(e=o(this,t,arguments)).type=3,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element[this.name]=e===ye?void 0:e}}])}(Ee),ze=function(e){function t(){var e;return n(this,t),(e=o(this,t,arguments)).type=4,e}return p(t,e),l(t,[{key:"j",value:function(e){this.element.toggleAttribute(this.name,!!e&&e!==ye)}}])}(Ee),Te=function(e){function t(e,i,a,s,r){var l;return n(this,t),(l=o(this,t,[e,i,a,s,r])).type=5,l}return p(t,e),l(t,[{key:"_$AI",value:function(e){var t;if((e=null!==(t=Ce(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:ye)!==be){var i=this._$AH,a=e===ye&&i!==ye||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==ye&&(i===ye||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}}},{key:"handleEvent",value:function(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}])}(Ee),Pe=function(){return l(function e(t,i,a){n(this,e),this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a},[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){Ce(this,e)}}])}(),Me=Y.litHtmlPolyfillSupport;null!=Me&&Me(Ae,Se),(null!==(Q=Y.litHtmlVersions)&&void 0!==Q?Q:Y.litHtmlVersions=[]).push("3.3.1");var De,Le,Re=globalThis,Ne=function(e){function t(){var e;return n(this,t),(e=o(this,t,arguments)).renderOptions={host:a(e)},e._$Do=void 0,e}return p(t,e),l(t,[{key:"createRenderRoot",value:function(){var e,i,a=k(t,"createRenderRoot",this,3)([]);return null!==(i=(e=this.renderOptions).renderBefore)&&void 0!==i||(e.renderBefore=a.firstChild),a}},{key:"update",value:function(e){var i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),k(t,"update",this,3)([e]),this._$Do=function(e,t,i){var a,s=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:t,o=s._$litPart$;if(void 0===o){var n,r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=o=new Se(t.insertBefore(re(),r),r,void 0,null!=i?i:{})}return o._$AI(e),o}(i,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var e;k(t,"connectedCallback",this,3)([]),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var e;k(t,"disconnectedCallback",this,3)([]),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}},{key:"render",value:function(){return be}}])}(X);Ne._$litElement$=!0,Ne.finalized=!0,null===(De=Re.litElementHydrateSupport)||void 0===De||De.call(Re,{LitElement:Ne});var Ue=Re.litElementPolyfillSupport;null==Ue||Ue({LitElement:Ne}),(null!==(Le=Re.litElementVersions)&&void 0!==Le?Le:Re.litElementVersions=[]).push("4.2.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var He=function(e){return function(t,i){void 0!==i?i.addInitializer(function(){customElements.define(e,t)}):customElements.define(e,t)}},Be={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:K},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,a=i.kind,s=i.metadata,o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===a){var n=i.name;return{set:function(i){var a=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,a,e)},init:function(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===a){var r=i.name;return function(i){var a=this[r];t.call(this,i),this.requestUpdate(r,a,e)}}throw Error("Unsupported decorator location: "+a)};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function qe(e){return function(t,i){return"object"==x(i)?Ie(e,t,i):function(e,t,i){var a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0}(e,t,i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Fe(e){return qe(m(m({},e),{},{state:!0,attribute:!1}))}var Ve="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";const Ze="number";var We;!function(e){e.Disarmed="disarmed",e.Arming="arming",e.Pending="pending",e.Triggered="triggered",e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedVacation="armed_vacation",e.ArmedCustomBypass="armed_custom_bypass"}(We||(We={}));const Ge={[We.ArmedAway]:"hass:shield-lock",[We.ArmedHome]:"hass:shield-home",[We.ArmedNight]:"hass:shield-moon",[We.ArmedVacation]:"hass:shield-airplane",[We.ArmedCustomBypass]:"hass:security",[We.Disarmed]:"hass:shield-off",[We.Arming]:"hass:shield-outline",[We.Pending]:"hass:shield-outline",[We.Triggered]:"hass:bell-ring"};var Ke;!function(e){e.ArmAway="arm_away",e.ArmHome="arm_home",e.ArmNight="arm_night",e.ArmVacation="arm_vacation",e.ArmCustomBypass="arm_custom_bypass",e.Disarm="disarm"}(Ke||(Ke={})),Ke.ArmAway,Ke.ArmHome,Ke.ArmNight,Ke.ArmVacation,Ke.ArmCustomBypass,Ke.Disarm;const Je={[Ke.ArmAway]:We.ArmedAway,[Ke.ArmHome]:We.ArmedHome,[Ke.ArmNight]:We.ArmedNight,[Ke.ArmVacation]:We.ArmedVacation,[Ke.ArmCustomBypass]:We.ArmedCustomBypass,[Ke.Disarm]:We.Disarmed};var Qe;!function(e){e.Disarm="disarm",e.Arm="arm",e.Trigger="trigger",e.FailedToArm="failed_to_arm",e.CommandNotAllowed="command_not_allowed",e.NoCodeProvided="no_code_provided",e.InvalidCodeProvided="invalid_code_provided",e.TriggerTimeExpired="trigger_time_expired",e.ReadyToArmModesChanged="ready_to_arm_modes_changed"}(Qe||(Qe={}));const Xe="alarmo_updated",Ye=["arming","pending"],et={type:"",entity:"",name:"",keep_keypad_visible:!1,use_clear_icon:!1,button_scale_actions:1,button_scale_keypad:1,states:{},show_messages:!0,show_ready_indicator:!0,show_bypassed_sensors:!0,use_code_dialog:!1,hide_keypad:!1},tt=2.5,it={skip_delay:!1,force:!1};var at={heading:"Možnosti aktivace",skip_delay:"Přeskočit čas pro vystup",force:"Bypass otevřených senzorů"},st={keep_keypad_visible:"Zachovat klávesnici vždy viditelnou, i když není vyžadován žádný kód.",button_scale_actions:"Měřítko použité pro změnu velikosti tlačítek akcí.",button_scale_keypad:"Měřítko použité pro změnu velikosti tlačítek klávesnice.",use_clear_icon:"Zobrazit ikonu (namísto textu) na klávesnici pro vymazání zadávaného kódu.",show_messages:"Zobrazit diagnostické zprávy při spuštění alarmu nebo nemožnosti aktivace.",show_ready_indicator:"Zobrazit indikátor připraveno/nepřipraveno na tlačítkách režimu aktivace.",show_bypassed_sensors:"Zobrazit varování při aktivaci alarmu s přemostěnými senzory.",use_code_dialog:"Zobrazte klávesnici pro zadání kódu jako vyskakovací dialog.",hide_keypad:"Skrýt tlačítka klávesnice pro zadávání kódu.",available_actions:"Dostupné akce:",action_dialog:{title:"Upravit zobrazení akce '{action}'",show_button:"Zobrazit tlačítko pro tuto akci",button_label:"Přepsat popisek tlačítka",state_label:"Přepsat popisek stavu"}},ot={blocking_sensors:"Nelze aktivovat kvůli následujícím senzorům",triggered_sensors:"Alarm byl spuštěn následujícími senzory",bypassed_sensors:"Jsou tam přemostěné senzory"},nt={arm_options:at,editor:st,errors:ot},rt={heading:"Scharfschaltungsoptionen",skip_delay:"Ausgangsverzögerung überspringen",force:"Offene Sensoren ignorieren"},lt={keep_keypad_visible:"Zeige das Pin-Eingabefeld immer an, auch wenn kein Code erfordert ist.",button_scale_actions:"Skalierungsfaktor für Buttongröße der Aktionen.",button_scale_keypad:"Skalierungsfaktor für Buttongröße der Pin-Eingabefeld.",use_clear_icon:"Anzeige eines Symbols (anstelle von Text) im Tastenfeld für die Eingabe des Codes.",show_messages:"Anzeige von Diagnosemeldungen, wenn der Alarm ausgelöst wird oder nicht scharf geschaltet werden kann.",show_ready_indicator:"Zeigt die Bereitschafts-/Nicht-Bereitschaftsanzeige auf den Scharfschaltmodus-Tasten an.",show_bypassed_sensors:"Warnung anzeigen, wenn der Alarm mit umgangenen Sensoren aktiviert wird.",use_code_dialog:"Zeigen Sie die Tastatur zur Codeeingabe als Popup-Dialog an.",hide_keypad:"Blenden Sie die Tasten der Tastatur zur Codeeingabe aus.",available_actions:"Verfügbare Aktionen:",action_dialog:{title:"Anzeige der Aktion '{action}' anpassen",show_button:"Taste für diese Aktion anzeigen",button_label:"Überschreibung der Tastenbeschriftung",state_label:"Überschreibung der Statusbezeichnung"}},ct={blocking_sensors:"Konnte nicht scharf geschaltet werden, da folgende Sensoren geöffnet sind",triggered_sensors:"Alarm wurde durch folgende Sensoren ausgelöst",bypassed_sensors:"Es gibt umgangene Sensoren"},dt={arm_options:rt,editor:lt,errors:ct},ht={heading:"Επιλογές για όπλισμα",skip_delay:"Παράλειψη καθυστέρησης εξόδου",force:"Παράκαμψη ανοιχτών αισθητήρων"},ut={keep_keypad_visible:"Κράτησε το πληκτρολόγιο πάντα ορατό, ακόμη και όταν δεν απαιτείται εισαγωγή κωδικού.",button_scale_actions:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών ενεργειών.",button_scale_keypad:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών του πληκτρολογίου.",use_clear_icon:"Εμφάνιση εικονιδίου (αντί κειμένου) στο πληκτρολόγιο για εκκαθάριση της εισαγωγής κωδικού.",show_messages:"Εμφάνιση διαγνωστικών μηνυμάτων όταν ενεργοποιείται ο συναγερμός ή δεν μπορεί να οπλιστεί.",show_ready_indicator:"Εμφάνιση ένδειξης έτοιμο/μη έτοιμο στα κουμπιά λειτουργίας όπλισης.",show_bypassed_sensors:"Εμφάνιση προειδοποιητικού μηνύματος όταν ο συναγερμός οπλίζεται με παρακαμφθέντες αισθητήρες.",use_code_dialog:"Εμφανίστε το πληκτρολόγιο για την εισαγωγή του κωδικού ως αναδυόμενο παράθυρο διαλόγου.",hide_keypad:"Απόκρυψη των κουμπιών του πληκτρολογίου για την εισαγωγή του κωδικού.",available_actions:"Διαθέσιμες ενέργειες:",action_dialog:{title:"Προσαρμογή εμφάνισης της ενέργειας '{action}'",show_button:"Εμφάνιση κουμπιού για αυτήν την ενέργεια",button_label:"Αντικατάσταση ετικέτας κουμπιού",state_label:"Αντικατάσταση ετικέτας κατάστασης"}},pt={blocking_sensors:"Δεν ήταν δυνατή η όπλιση λόγω των ακόλουθων αισθητήρων",triggered_sensors:"Ο συναγερμός ενεργοποιήθηκε από τους ακόλουθους αισθητήρες",bypassed_sensors:"Υπάρχουν παρακαμφθέντες αισθητήρες"},_t={arm_options:ht,editor:ut,errors:pt},gt={heading:"Options for arming",skip_delay:"Skip exit delay",force:"Bypass open sensors"},mt={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale_actions:"Scaling factor to apply for resizing the action buttons.",button_scale_keypad:"Scaling factor to apply for resizing the keypad buttons.",use_clear_icon:"Show icon (instead of text) in keypad for clearing code input.",show_messages:"Display diagnostic messages when alarm is triggered or cannot be armed.",show_ready_indicator:"Show ready/not ready indicator on arm mode buttons.",show_bypassed_sensors:"Show warning message when alarm is armed with bypassed sensors.",use_code_dialog:"Display the keypad for entering the code as a popup dialog.",hide_keypad:"Hide the keypad buttons for entering the code.",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",show_button:"Show button for this action",button_label:"Override button label",state_label:"Override state label"}},ft={blocking_sensors:"Could not arm due to the following sensors",triggered_sensors:"Alarm was triggered by the following sensors",bypassed_sensors:"There are bypassed sensors"},vt={arm_options:gt,editor:mt,errors:ft},bt={heading:"Opciones de armado",skip_delay:"Omitir el retardo de salida",force:"Pasar por alto los sensores abiertos"},yt={keep_keypad_visible:"Mantener el teclado siempre visible, también cuando no se requiere ninguna entrada de código.",button_scale_actions:"Factor de escalado para cambiar el tamaño de los botones de acción.",button_scale_keypad:"Factor de escalado para cambiar el tamaño de los botones del teclado.",use_clear_icon:"Mostrar icono (en lugar de texto) en el teclado para borrar la entrada de código.",show_messages:"Mostrar mensajes de diagnóstico cuando se activa la alarma o no se puede activar.",show_ready_indicator:"Mostrar indicador listo/no listo en los botones de modo armado.",show_bypassed_sensors:"Mostrar advertencia cuando la alarma está activada con sensores omitidos.",use_code_dialog:"Muestra el teclado para ingresar el código como un cuadro de diálogo emergente.",hide_keypad:"Ocultar los botones del teclado para ingresar el código.",available_actions:"Acciones disponibles:",action_dialog:{title:"Personalizar la visualización de la acción '{action}'",show_button:"mostrar botón para esta acción",button_label:"Sobrescribir el texto del botón",state_label:"Sobrescribir el texto de estado"}},kt={blocking_sensors:"No se pudo armar debido a los siguientes sensores",triggered_sensors:"La alarma fue disparada por los siguientes sensores",bypassed_sensors:"Hay sensores omitidos"},wt={arm_options:bt,editor:yt,errors:kt},$t={heading:"Options pour l'armement",skip_delay:"Ignorer le délai de sortie",force:"Bypasser les capteurs ouverts"},xt={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale_actions:"Facteur d'échelle à appliquer pour le redimensionnement des boutons des actions.",button_scale_keypad:"Facteur d'échelle à appliquer pour le redimensionnement des boutons du clavier.",use_clear_icon:"Afficher l'icône (au lieu du texte) sur le clavier pour effacer la saisie du code.",show_messages:"Afficher les messages de diagnostic lorsque l'alarme est déclenchée ou ne peut pas être armée.",show_ready_indicator:"Afficher l'indicateur prêt/pas prêt sur les boutons de mode d'armement.",show_bypassed_sensors:"Afficher un avertissement lorsque l'alarme est armée avec des capteurs ignorés.",use_code_dialog:"Affichez le clavier pour saisir le code sous forme de boîte de dialogue contextuelle.",hide_keypad:"Masquer les boutons du clavier pour saisir le code.",available_actions:"Actions disponibles:",action_dialog:{title:"Personnaliser l'affichage de l'action '{action}'",show_button:"Afficher le bouton pour cette action",button_label:"Remplacer le libellé du bouton",state_label:"Remplacer l'étiquette d'état"}},At={blocking_sensors:"Impossible d'armer en raison du(es) capteur(s) suivant(s)",triggered_sensors:"L'alarme a été déclenchée par le(s) capteur(s) suivant(s)",bypassed_sensors:"Il y a des capteurs ignorés"},Ct={arm_options:$t,editor:xt,errors:At},Ot={heading:"Opzioni di inserimento",skip_delay:"Ignorare il ritardo di uscita",force:"Ignorare i sensori aperti"},St={keep_keypad_visible:"Mantenere la tastiera sempre visibile, anche quando nessun codice è richiesto.",button_scale_actions:"Fattore di scala da applicare per ridimensionare i pulsanti di azione.",button_scale_keypad:"Fattore di scala da applicare per ridimensionare i pulsanti della tastiera.",use_clear_icon:"Mostrare l'icona (invece del testo) sulla tastiera per cancellare il codice digitato.",show_messages:"Mostrare messaggi diagnostici quando l'allarme viene attivato o non può essere inserito.",show_ready_indicator:"Mostra l'indicatore pronto/non pronto sui pulsanti della modalità di inserimento.",show_bypassed_sensors:"Mostra avviso quando l'allarme è armato con sensori esclusi.",use_code_dialog:"Visualizza la tastiera per l'immissione del codice come finestra di dialogo popup.",hide_keypad:"Nascondi i pulsanti della tastiera per l'inserimento del codice.",available_actions:"Azioni disponibili:",action_dialog:{title:"Personalizzare la visualizzazione dell'azione '{action}'",show_button:"Mostra il pulsante per questa azione",button_label:"Sovrascrivere l'etichetta del pulsante",state_label:"Sovrascrivere l'etichetta di stato"}},Et={blocking_sensors:"Impossibile inserire l'allarme a causa dei seguenti sensori",triggered_sensors:"L'allarme è stato attivato dai seguenti sensori",bypassed_sensors:"Sono presenti sensori esclusi"},jt={arm_options:Ot,editor:St,errors:Et},zt={heading:"Opties voor inschakelen",skip_delay:"Sla vertraging over",force:"Negeer open sensoren"},Tt={keep_keypad_visible:"Houd het keypad altijd zichtbaar, ook wanneer er geen code vereist is.",button_scale_actions:"Schaalfactor actieknoppen",button_scale_keypad:"Schaalfactor keypadknoppen",use_clear_icon:"Toon pictogram (in plaats van tekst) in keypad om code-invoer te wissen.",show_messages:"Toon diagnostische berichten wanneer het alarm wordt geactiveerd of niet kan worden ingeschakeld.",show_ready_indicator:"Toon gereed/niet gereed-indicator op inschakelmodusknoppen.",show_bypassed_sensors:"Toon melding wanneer het alarm is ingeschakeld met omzeilde sensoren.",use_code_dialog:"Geef het toetsenbord voor het invoeren van de code weer als een pop-upvenster.",hide_keypad:"Verberg het toetsenbord voor het invoeren van de code.",available_actions:"Beschikbare acties:",action_dialog:{title:"Weergave van actie '{action}' aanpassen",show_button:"Toon knop voor deze actie",button_label:"Knoplabel overschrijven",state_label:"Statuslabel overschrijven"}},Pt={blocking_sensors:"Kon niet inschakelen vanwege de volgende sensoren",triggered_sensors:"Alarm werd geactiveerd door de volgende sensoren",bypassed_sensors:"Er zijn omzeilde sensoren"},Mt={arm_options:zt,editor:Tt,errors:Pt},Dt={heading:"Opções para armar",skip_delay:"Omitir tempo para sair",force:"Ignorar os sensores abertos"},Lt={keep_keypad_visible:"Mantenha o teclado sempre visível, mesmo quando não for necessária nenhuma entrada de código.",button_scale_actions:"Fator de escala para redimensionar botões de ação.",button_scale_keypad:"Fator de escala para redimensionar os botões do teclado.",use_clear_icon:"Mostre o ícone (em vez de texto) no teclado para limpar a entrada do código.",show_messages:"Mostrar mensagens de diagnóstico quando o alarme estiver disparado ou não puder ser armado.",show_ready_indicator:"Mostrar indicador de disponível/não disponível nos botões do modo de armar.",show_bypassed_sensors:"Mostrar aviso quando o alarme for ativado com sensores ignorados.",use_code_dialog:"Exiba o teclado para inserir o código como uma caixa de diálogo pop-up.",hide_keypad:"Oculte os botões do teclado para inserir o código.",available_actions:"Ações disponíveis:",action_dialog:{title:"Personalize a exibição da ação '{action}'",show_button:"Mostrar botão para esta ação",button_label:"Substituir texto do botão",state_label:"Substituir texto de status"}},Rt={blocking_sensors:"Não foi possível armar devido aos seguintes sensores",triggered_sensors:"O alarme foi disparado pelos seguintes sensores",bypassed_sensors:"Existem sensores ignorados"},Nt={arm_options:Dt,editor:Lt,errors:Rt},Ut={heading:"Варианты постановки на охрану",skip_delay:"Задержка перед выходом",force:"Обход датчиков открытия"},Ht={keep_keypad_visible:"Клавиатура всегда видима, даже если ввод кода не требуется.",button_scale_actions:"Коэффициент масштабирования для изменения размера кнопок действий.",button_scale_keypad:"Коэффициент масштабирования для изменения размера кнопок клавиатуры.",use_clear_icon:"Отображение иконки (вместо текста) на клавиатуре для очистки ввода кода.",show_messages:"Вывод диагностических сообщений, когда срабатывает сигнализация или ее невозможно включить.",show_ready_indicator:"Отображать индикатор готовности/неготовности на кнопках режима охраны.",show_bypassed_sensors:"Вывод предупреждающего сообщения, когда сигнализация включена с помощью обходных датчиков.",use_code_dialog:"Отобразить клавиатуру для ввода кода в виде всплывающего диалогового окна.",hide_keypad:"Скрыть кнопки клавиатуры для ввода кода.",available_actions:"Доступные действия:",action_dialog:{title:"Настройка отображения действия '{action}'",show_button:"Показать кнопку для этого действия",button_label:"Измененение названия кнопки",state_label:"Изменение названия состояния"}},Bt={blocking_sensors:"Не удалось включить охрану из-за следующих датчиков",triggered_sensors:"Сигнал тревоги был вызван следующими датчиками",bypassed_sensors:"Есть обходные датчики"},It={arm_options:Ut,editor:Ht,errors:Bt},qt={heading:"Alternativ vid aktivering",skip_delay:"Hoppa över lämna fördröjning",force:"Förbikoppla öppna sensorer"},Ft={keep_keypad_visible:"Håll knappsatsen alltid synlig, även när ingen kodinmatning krävs.",button_scale_actions:"Ändra storlek på åtgärdsknapparna.",button_scale_keypad:"Ändra storlek på knapparna på knappsatsen.",use_clear_icon:"Visa ikon (istället för text) på knappsatsen för att radera kodinmatning.",show_messages:"Visa diagnostiska meddelanden när larmet utlöses eller inte kan aktiveras.",show_ready_indicator:"Visa redo/ej redo-indikator på lägesknapparna.",show_bypassed_sensors:"Visa varningsmeddelande när larmet är aktiverat med förbikopplade sensorer.",use_code_dialog:"Visa knappsatsen för att ange koden som en popup-dialogruta.",hide_keypad:"Dölj knapparna på tangentbordet för att ange koden.",available_actions:"Tillgängliga åtgärder:",action_dialog:{title:"Anpassa visningen av åtgärden '{action}'",show_button:"Visa knapp för denna åtgärd",button_label:"Anpassad knappetikett",state_label:"Anpassad tillståndsetikett"}},Vt={blocking_sensors:"Kunde inte aktivera på grund av följande sensorer",triggered_sensors:"Larmet utlöstes av följande sensorer",bypassed_sensors:"Det finns förbikopplade sensorer"},Zt={arm_options:qt,editor:Ft,errors:Vt},Wt={heading:"警戒选项",skip_delay:"跳过离开延迟",force:"绕过开放的传感器"},Gt={keep_keypad_visible:"保持小键盘总是可见，即使不需要输入密码",button_scale_actions:"调整动作按键大小的缩放系数",button_scale_keypad:"调整小键盘按键大小的缩放系数",use_clear_icon:"在小键盘上显示图标（而不是文字），用于清除密码输入。",show_messages:"当警报被触发或无法警戒时，显示诊断信息。",show_ready_indicator:"在手臂模式按钮上显示就绪/未就绪指示器。",show_bypassed_sensors:"当警报配备旁路传感器时显示警告消息。",use_code_dialog:"以弹出对话框的形式显示用于输入代码的键盘。",hide_keypad:"隐藏用于输入代码的键盘按钮。",available_actions:"可用动作：",action_dialog:{title:"自定义动作'{action}'的显示",show_button:"显示此操作的按钮",button_label:"覆盖按钮标签",state_label:"覆盖状态标签"}},Kt={blocking_sensors:"由于以下传感器而无法警戒",triggered_sensors:"警报是由以下传感器触发的",bypassed_sensors:"有绕过的传感器"},Jt={arm_options:Wt,editor:Gt,errors:Kt},Qt={cs:Object.freeze({__proto__:null,arm_options:at,default:nt,editor:st,errors:ot}),de:Object.freeze({__proto__:null,arm_options:rt,default:dt,editor:lt,errors:ct}),el:Object.freeze({__proto__:null,arm_options:ht,default:_t,editor:ut,errors:pt}),en:Object.freeze({__proto__:null,arm_options:gt,default:vt,editor:mt,errors:ft}),es:Object.freeze({__proto__:null,arm_options:bt,default:wt,editor:yt,errors:kt}),fr:Object.freeze({__proto__:null,arm_options:$t,default:Ct,editor:xt,errors:At}),it:Object.freeze({__proto__:null,arm_options:Ot,default:jt,editor:St,errors:Et}),nl:Object.freeze({__proto__:null,arm_options:zt,default:Mt,editor:Tt,errors:Pt}),"pt-BR":Object.freeze({__proto__:null,arm_options:Dt,default:Nt,editor:Lt,errors:Rt}),ru:Object.freeze({__proto__:null,arm_options:Ut,default:It,editor:Ht,errors:Bt}),sv:Object.freeze({__proto__:null,arm_options:qt,default:Zt,editor:Ft,errors:Vt}),"zh-Hans":Object.freeze({__proto__:null,arm_options:Wt,default:Jt,editor:Gt,errors:Kt})};function Xt(e,t,i="",a=""){const s=t.replace(/['"]+/g,"");var o;try{o=e.split(".").reduce((e,t)=>e[t],Qt[s])}catch(t){o=e.split(".").reduce((e,t)=>e[t],Qt.en)}if(void 0===o&&(o=e.split(".").reduce((e,t)=>e[t],Qt.en)),""!==i&&""!==a){Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]);for(let e=0;e<i.length;e++)o=o.replace(i[e],a[e])}return o}function Yt(e){return null!=e}function ei(e){switch(typeof e){case"object":return 0==Object.keys(e).length;case"string":return 0==String(e).length;default:return!Yt(e)}}function ti(e){return e.substring(0,e.indexOf("."))}const ii=(e,t)=>{let i={hide:!1,button_label:"",state_label:""};return(t.states||{}).hasOwnProperty(e)&&(i=Object.assign(Object.assign({},i),t.states[e])),i},ai=e=>{if(!e)return[];const t=e.attributes.supported_features||0;let i=[];return 2&t&&i.push(Ke.ArmAway),1&t&&i.push(Ke.ArmHome),4&t&&i.push(Ke.ArmNight),32&t&&i.push(Ke.ArmVacation),16&t&&i.push(Ke.ArmCustomBypass),i},si=(e,t,i)=>{const a=ti(e.entity_id),s=e.attributes.device_class,o=e.state;if(Object.values(We).includes(o)&&i){const e=ii(o,i);if(!ei(e.state_label))return e.state_label}let n="";return s&&(n=t(`component.${a}.entity_component.${s}.state.${e.state}`)),n||(n=t(`component.${a}.entity_component._.state.${e.state}`)),n},oi=e=>null!==e.attributes.code_format,ni=e=>e.callWS({type:"alarmo/entities"}),ri=e=>e.callWS({type:"alarmo/config"}),li=(e,t,i,a)=>{a=a||{},i=null==i?{}:i;const s=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return s.detail=i,e.dispatchEvent(s),s};let ci=class extends Ne{constructor(){super(...arguments),this._entities=null,this._editAction=null}async firstUpdated(){ni(this.hass).then(e=>{this._entities=e.map(e=>e.entity_id)}).catch(e=>{var t;null===(t=this.hass)||void 0===t||t.callService("system_log","write",{message:`Failed to fetch entities: ${e}`,level:"error"})}),this._alarmoConfig=await ri(this.hass)}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),this._config=Object.assign(Object.assign({},et),e)}render(){var e,t,i,a,s,o,n;if(!this._config||!this.hass||!this._entities)return ve``;if(!this._entities.length)return ve`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const r=this._config.entity?this.hass.states[this._config.entity]:void 0,l=(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ze&&(this._alarmoConfig.code_arm_required||this._alarmoConfig.code_disarm_required);if(null!==this._editAction){const e=ii(Je[this._editAction],this._config);return ve`
        <div class="header">
          <div class="back-title">
            <ha-icon-button
              .label=${this.hass.localize("ui.common.back")}
              .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
              @click=${this._goBack}
            ></ha-icon-button>
            <span slot="title"
              >${Xt("editor.action_dialog.title",this.hass.language,"{action}",this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`))}</span
            >
          </div>
        </div>

        <div class="checkbox-item">
          <ha-checkbox
            ?checked=${!e.hide}
            ?disabled=${!e.hide&&1==ai(r).map(e=>Je[e]).filter(e=>!ii(e,this._config).hide).length||this._editAction==Ke.Disarm}
            @change=${e=>this._updateStateConfig(Je[this._editAction],e.target.checked?{hide:void 0}:{hide:!0})}
          >
          </ha-checkbox>
          <span
            @click=${e=>{const t=e.target.previousElementSibling;t.click(),t.blur()}}
          >
            ${Xt("editor.action_dialog.show_button",this.hass.language)}
          </span>
        </div>

        <div class="grid">
          <ha-textfield
            label="${Xt("editor.action_dialog.button_label",this.hass.language)}"
            .value="${e.button_label||""}"
            placeholder="${this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`)}"
            ?disabled=${e.hide}
            @input=${e=>this._updateStateConfig(Je[this._editAction],{button_label:String(e.target.value).trim()})}
          ></ha-textfield>

          <ha-textfield
            label="${Xt("editor.action_dialog.state_label",this.hass.language)}"
            .value="${e.state_label||""}"
            placeholder="${this.hass.localize(`component.alarm_control_panel.entity_component._.state.${Je[this._editAction]}`)}"
            @input=${e=>this._updateStateConfig(Je[this._editAction],{state_label:String(e.target.value).trim()})}
          ></ha-textfield>
        </div>
      `}return ve`
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

        ${r?ve`
              <div class="config-item">
                <span>${Xt("editor.available_actions",this.hass.language)}</span>
              </div>
              <div class="config-row checkbox-list">
                ${[...ai(r),Ke.Disarm].map(e=>{const t=ai(r).map(e=>Je[e]),i=ii(Je[e],this._config).hide;return ve`
                    <div class="checkbox-item ${i?"disabled":""}">
                      <ha-checkbox
                        ?checked=${!i}
                        ?disabled=${!i&&1==t.filter(e=>!ii(e,this._config).hide).length||e==Ke.Disarm}
                        @change=${t=>this._updateStateConfig(Je[e],t.target.checked?{hide:void 0}:{hide:!0})}
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
                        ?disabled=${ii(Je[e],this._config).hide}
                        @click=${()=>this._editActionClick(e)}
                      >
                      </ha-icon-button>
                    </div>
                  `})}
              </div>
            `:""}

        <div class="grid">
          <ha-formfield .label=${Xt("editor.button_scale_actions",this.hass.language)}>
            <ha-slider
              value=${this._config.button_scale_actions||1}
              @change=${e=>this._updateConfig("button_scale_actions",Number(e.target.value))}
              min="${1}"
              max="${tt}"
              step="0.1"
              labeled
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${Xt("editor.button_scale_keypad",this.hass.language)}>
            <ha-slider
              value=${this._config.button_scale_keypad||1}
              @change=${e=>this._updateConfig("button_scale_keypad",Number(e.target.value))}
              min="${1}"
              max="${tt}"
              step="0.1"
              labeled
              ?disabled=${!r||!l||(null===(t=this._config)||void 0===t?void 0:t.use_code_dialog)}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${Xt("editor.use_clear_icon",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_clear_icon}
              @change=${e=>this._updateConfig("use_clear_icon",e.target.checked)}
              ?disabled=${!r||!l||(null===(i=this._config)||void 0===i?void 0:i.use_code_dialog)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Xt("editor.hide_keypad",this.hass.language)}>
            <ha-switch
              .checked=${this._config.hide_keypad}
              @change=${e=>this._updateConfig("hide_keypad",e.target.checked)}
              ?disabled=${!r||!l}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Xt("editor.keep_keypad_visible",this.hass.language)}>
            <ha-switch
              .checked=${this._config.keep_keypad_visible}
              @change=${e=>this._updateConfig("keep_keypad_visible",e.target.checked)}
              ?disabled=${!r||!l||(null===(a=this._alarmoConfig)||void 0===a?void 0:a.code_arm_required)==(null===(s=this._alarmoConfig)||void 0===s?void 0:s.code_disarm_required)||(null===(o=this._config)||void 0===o?void 0:o.use_code_dialog)||(null===(n=this._config)||void 0===n?void 0:n.hide_keypad)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Xt("editor.use_code_dialog",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_code_dialog}
              @change=${e=>this._updateConfig("use_code_dialog",e.target.checked)}
              ?disabled=${!r||!l||this._config.hide_keypad}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Xt("editor.show_messages",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_messages||!Yt(this._config.show_messages)}
              @change=${e=>this._updateConfig("show_messages",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Xt("editor.show_ready_indicator",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_ready_indicator}
              @change=${e=>this._updateConfig("show_ready_indicator",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Xt("editor.show_bypassed_sensors",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_bypassed_sensors}
              @change=${e=>this._updateConfig("show_bypassed_sensors",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield></ha-formfield>
        </div>
      </div>
    `}_updateConfig(e,t){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[e]:t}),"entity"==e){const e=this._config.entity?this.hass.states[this._config.entity]:void 0;e&&e.attributes.code_arm_required!=e.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}li(this,"config-changed",{config:this._config})}}_updateStateConfig(e,t){var i;const a=e=>function(e,t){return e?Object.entries(e).filter(([e])=>t.includes(e)).reduce((e,[t,i])=>Object.assign(e,{[t]:i}),{}):{}}(e,Object.keys(e).filter(t=>!ei(e[t])));let s=(null===(i=this._config)||void 0===i?void 0:i.states)||{};const o=a(Object.assign(Object.assign({},s[e]),t));s=a(Object.assign(Object.assign({},s),{[e]:o})),this._updateConfig("states",s)}_editActionClick(e){this._editAction=e}_goBack(){this._editAction=null}static get styles(){return D`
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
    `}};t([qe({attribute:!1})],ci.prototype,"hass",void 0),t([Fe()],ci.prototype,"_config",void 0),t([Fe()],ci.prototype,"_alarmoConfig",void 0),t([Fe()],ci.prototype,"_entities",void 0),t([Fe()],ci.prototype,"_editAction",void 0),ci=t([He("alarmo-card-editor")],ci);var di,hi,ui=Object.freeze({__proto__:null,get AlarmoCardEditor(){return ci}});class pi extends Ne{constructor(){super(...arguments),this.duration=0,this.datetime=null,this.timer=0,this._touchStarted=!1,this._hover=!1}shouldUpdate(e){if(!e.size)return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language)return!0;if(t.states[this.entity].state!==this.hass.states[this.entity].state||t.states[this.entity].attributes.delay!==this.hass.states[this.entity].attributes.delay){const e=t.states[this.entity].state,i=this.hass.states[this.entity].state;return Ye.includes(i)?this.startTimer():Ye.includes(e)&&this.stopTimer(),!0}return!1}firstUpdated(){const e=this.hass.states[this.entity].state;Ye.includes(e)&&this.startTimer(),this.addEventListener("click",this.handleClick),this.addEventListener("touchstart",()=>{this._touchStarted=!0}),this.addEventListener("touchend",()=>{setTimeout(()=>{this._touchStarted=!1},10)}),this.addEventListener("mouseenter",()=>{this._touchStarted||(this._hover=!0)}),this.addEventListener("mouseleave",()=>{this._hover=!1})}async startTimer(){var e,t;clearInterval(this.timer),(e=this.hass,t=this.entity,e.callWS({type:"alarmo/countdown",entity_id:t})).then(e=>{this.duration=e.delay,this.datetime=new Date((new Date).getTime()+1e3*e.remaining)}).catch(e=>{}),this.timer=window.setInterval(()=>{this.requestUpdate()},1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const e=(this.datetime.getTime()-(new Date).getTime())/1e3;return e<0?(clearInterval(this.timer),0):e}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(e){return this._hover&&Ye.includes(e)&&this.timer?ve` <ha-icon icon="mdi:skip-forward"></ha-icon> `:this.datetime&&this.duration?ve` ${Math.max(Math.round(this.getRemaining()),0)} `:ve` <ha-icon .icon=${Ge[e]}></ha-icon> `}handleClick(){const e=this.hass.states[this.entity].state;Ye.includes(e)&&this.timer?this.hass.callService("alarmo","skip_delay",{entity_id:this.entity}):li(this,"hass-more-info",{entityId:this.entity})}render(){let e=45,t=2*Math.PI*e;const i=this.hass.states[this.entity],a=this.datetime&&this.duration;return ve`
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
    `}static get styles(){return D`
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
    `}}t([qe()],pi.prototype,"hass",void 0),t([qe()],pi.prototype,"entity",void 0),t([Fe()],pi.prototype,"_hover",void 0),customElements.define("alarmo-state-badge",pi),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(di||(di={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(hi||(hi={}));class _i extends Ne{shouldUpdate(e){const t=e.get("hass");return!t||!(!this.entity||t.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return ve``;const e=this.entity in this.hass.states;let t=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(t=Object.assign(Object.assign({},t),{state:this.state}));const i=e?si(t,this.hass.localize):this.hass.localize("state.default.unavailable",this.hass.locale||{language:this.hass.language,number_format:di.language}),a=e?t.attributes.friendly_name||(s=t.entity_id).substring(s.indexOf(".")+1):this.entity;var s;let o=!!this.state||"on"==t.state;return ve`
      <div class="badge-container" @click=${()=>li(this,"hass-more-info",{entityId:this.entity})}>
        <div class="label-badge ${o?"active":""}" id="badge">
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
    `}static get styles(){return D`
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
    `}}t([qe()],_i.prototype,"hass",void 0),t([qe()],_i.prototype,"entity",void 0),t([qe()],_i.prototype,"state",void 0),customElements.define("alarmo-sensor-badge",_i);class gi extends Ne{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return ve`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}handleFocus(e){e.target.blur()}static get styles(){return D`
      button {
        position: relative;
        width: 100%;
        border: 1px solid var(--outline-color);
        border-radius: 4px;
        background: transparent;
        color: var(--wa-color-brand-on-normal);
        padding: calc(var(--content-scale, 1) * 0.875rem);
        font-size: calc(var(--content-scale, 1) * 1rem);
        letter-spacing: 0.04em;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        z-index: 1;
        transition: border-color 0.1s ease;
      }
      button:before {
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        border-radius: 4px;
        background: var(--primary-color);
        opacity: 0;
        z-index: -2;
        transition: opacity 0.1s ease-in-out;
      }
      button:not(:disabled) {
        cursor: pointer;
      }
      button:disabled {
        color: var(--disabled-text-color);
        border: none;
      }
      button:not(:disabled):hover {
        border: 1px solid var(--outline-color);
      }
      button:not(:disabled):hover:before {
        opacity: 0.12;
      }
      button:not(:disabled):active {
        border: 1px solid var(--outline-hover-color);
      }
      button:not(:disabled):active:before {
        opacity: 0.24;
      }
      button:focus {
        outline: none;
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
    `}}t([qe({type:Boolean})],gi.prototype,"disabled",void 0),t([qe({type:Boolean})],gi.prototype,"scaled",void 0),customElements.define("alarmo-button",gi);const mi=e=>{class i extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then(e=>e()):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([qe({attribute:!1})],i.prototype,"hass",void 0),i},fi=["1","2","3","4","5","6","7","8","9","0","clear","submit"];let vi=class extends(mi(Ne)){constructor(){super(...arguments),this._input="",this._showClearButton=!1,this._narrow=!1,this._codeClearTimer=0,this.createCloseHeading=(e,t)=>{var i;return ve`
  <div class="header_title">
    <ha-icon-button
      .label=${null!==(i=null==e?void 0:e.localize("ui.common.close"))&&void 0!==i?i:"Close"}
      .path=${Ve}
      dialogAction="close"
      class="header_button"
    ></ha-icon-button>
    <span>${t}</span>
  </div>
`}}hassSubscribe(){return[this.hass.connection.subscribeMessage(e=>this._fetchData(e),{type:Xe})]}async _fetchData(e){var t;if(e.data.area_id===(null===(t=this._params)||void 0===t?void 0:t.area_id))switch(e.data.event){case Qe.Disarm:case Qe.Arm:case Qe.Trigger:this._confirm(e.data.event);break;case Qe.InvalidCodeProvided:case Qe.NoCodeProvided:this._showCodeError();break;case Qe.FailedToArm:case Qe.CommandNotAllowed:this._confirm(e.data.event);case Qe.TriggerTimeExpired:case Qe.ReadyToArmModesChanged:}}shouldUpdate(e){const t=e.get("hass");return!(!e.has("_params")&&this._params)||(!!e.has("_input")||(!t||t.states[this._params.entity_id]!==this.hass.states[this._params.entity_id]&&(t.states[this._params.entity_id],this.hass.states[this._params.entity_id],!0)))}firstUpdated(e){super.firstUpdated(e),this.addEventListener("keypress",e=>{"Enter"===e.key&&this._input.length&&this._submit()})}async showDialog(e){this._params=e,this._input="",this._narrow=matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,await this.updateComplete}closeDialog(){return this._params=void 0,this._showClearButton=!1,!0}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code");t&&(t.classList.remove("error"),t.classList.add("error"),t.invalid=!0)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout(()=>{this._clearCode()},12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_submit(){var e;const t=null!==(e=this._input)&&void 0!==e?e:"";this._clearCodeError(),this._params.action==Ke.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._params.entity_id,code:t}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this._params.armOptions),{entity_id:this._params.entity_id,mode:Je[this._params.action],code:t}))}_confirm(e){var t,i;null===(i=null===(t=this._params)||void 0===t?void 0:t.confirm)||void 0===i||i.call(t,e),this.closeDialog()}_cancel(){var e,t;null===(t=null===(e=this._params)||void 0===e?void 0:e.cancel)||void 0===t||t.call(e),this.closeDialog()}_numberClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._setCodeClearTimer(),this._input=this._input+t,this._showClearButton=!0}_clear(){this._input="",this._showClearButton=!1}render(){if(!this._params||!this.hass)return ye;return"text"===this._params.code_format?ve`
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
      `:ve`
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
            ${fi.map(e=>""===e?ve`<span></span>`:"clear"===e?ve`
                      <ha-control-button
                        @click=${this._clear}
                        class="clear"
                        .disabled=${!this._showClearButton}
                        .label=${this.hass.localize("ui.common.clear")}
                      >
                        <ha-svg-icon path=${Ve}></ha-svg-icon>
                      </ha-control-button>
                    `:"submit"===e?ve`
                        <ha-control-button
                          @click=${this._submit}
                          class="submit"
                          .label=${this.hass.localize("ui.common.submit")}
                        >
                          <ha-svg-icon path=${"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}></ha-svg-icon>
                        </ha-control-button>
                      `:ve`
                        <ha-control-button
                          .value=${e}
                          @click=${this._numberClick}
                          .label=${e}
                        >
                          ${e}
                        </ha-control-button>
                      `)}
          </div>
        </div>
      </ha-dialog>
    `}};vi.styles=D`
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
  `,t([qe({attribute:!1})],vi.prototype,"hass",void 0),t([Fe()],vi.prototype,"_params",void 0),t([Fe()],vi.prototype,"_input",void 0),t([Fe()],vi.prototype,"_showClearButton",void 0),t([Fe()],vi.prototype,"_narrow",void 0),vi=t([He("alarmo-code-dialog")],vi);var bi=Object.freeze({__proto__:null,get AlarmoCodeDialog(){return vi}});const yi=["1","2","3","4","5","6","7","8","9","","0","clear"];return e.AlarmoCard=class extends(mi(Ne)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=void 0,this.armOptions=Object.assign({},it),this.readyForArmModes=null,this.backendConnection=null,this.showBypassedSensors=!1,this.subscribedEntities=[],this._codeClearTimer=0}static async getConfigElement(){return await Promise.resolve().then(function(){return ui}),document.createElement("alarmo-card-editor")}static async getStubConfig(e){let t=Object.keys(e.states).find(e=>"alarm_control_panel"==ti(e));return await ni(e).then(e=>{const i=e.sort((e,t)=>Number(e.area_id)-Number(t.area_id));i.length&&(t=i[0].entity_id)}),{type:"custom:alarmo-card",entity:t}}async getCardSize(){var e;if(!this._config||!this.hass)return 9;const t=this.hass.states[this._config.entity];return t&&(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ze?!oi(t)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?4:9:4}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),(e=>{if(!e||!e.entity||"alarm_control_panel"!==ti(e.entity))throw new Error("Invalid configuration provided for entity");if(Yt(e.button_scale_keypad)&&("number"!=typeof e.button_scale_keypad||e.button_scale_keypad<1||e.button_scale_keypad>tt))throw new Error("Invalid configuration provided for button_scale_keypad");if(Yt(e.button_scale_actions)&&("number"!=typeof e.button_scale_actions||e.button_scale_actions<1||e.button_scale_actions>tt))throw new Error("Invalid configuration provided for button_scale_actions")})(e),this._config=Object.assign(Object.assign({},et),e)}hassSubscribe(){return[this.hass.connection.subscribeMessage(e=>this._fetchData(e),{type:Xe})]}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement(),await this.loadBackendConfig()}async loadBackendConfig(){this.backendConnection||ni(this.hass).then(e=>{const t=e.find(e=>e.entity_id==this._config.entity);t&&(this.area_id=t.area_id?t.area_id:null)}).then(()=>ri(this.hass)).then(e=>{this._alarmoConfig=e,this.backendConnection=!0}).then(()=>{return e=this.hass,t=this._config.entity,e.callWS({type:"alarmo/ready_to_arm_modes",entity_id:t});var e,t}).then(e=>{this.readyForArmModes=e.modes}).catch(e=>{this.backendConnection=!1})}async _fetchData(e){if(e.data.area_id===this.area_id)switch(e.data.event){case Qe.Arm:this._clearCode();break;case Qe.Trigger:break;case Qe.InvalidCodeProvided:case Qe.NoCodeProvided:this._showCodeError(),this.subscribedEntities=[];break;case Qe.FailedToArm:this.warning="blocking_sensors",this._last_command=e.data.command,this._last_code=this._input,this._clearCode();break;case Qe.CommandNotAllowed:this._clearCode();break;case Qe.TriggerTimeExpired:break;case Qe.ReadyToArmModesChanged:this.readyForArmModes=e.data.modes}}shouldUpdate(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language||t.config.state!==this.hass.config.state)return!0;if(t.states[this._config.entity]!==this.hass.states[this._config.entity]){const e=t.states[this._config.entity],i=this.hass.states[this._config.entity];return!1===this.backendConnection&&(async()=>{await this.loadBackendConfig()})(),this.processStateUpdate(e,i),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some(e=>t.states[e]!==this.hass.states[e]))}processStateUpdate(e,t){t.state!=e.state&&(this.subscribedEntities=[]),(t.state==We.Disarmed||t.last_changed!==e.last_changed)&&this._clearCode()}render(){var e,t;if(!this._config||!this.hass||null===this.backendConnection)return ve``;const i=this.hass.states[this._config.entity];return i?!1===this.backendConnection?ve`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `:ve`
      <ha-card>
        ${i.state===We.Disarmed?ve`
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
                    ${Xt("arm_options.heading",this.hass.language)}
                  </span>
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <ha-icon
                    slot="graphic"
                    icon="${this.armOptions.skip_delay?"mdi:check":""}"
                    @click=${e=>{var t;null===(t=e.target.parentElement)||void 0===t||t.click(),e.stopPropagation()}}
                  ></ha-icon>
                  ${Xt("arm_options.skip_delay",this.hass.language)}
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <ha-icon
                    slot="graphic"
                    icon="${this.armOptions.force?"mdi:check":""}"
                    @click=${e=>{var t;null===(t=e.target.parentElement)||void 0===t||t.click(),e.stopPropagation()}}
                  ></ha-icon>
                  ${Xt("arm_options.force",this.hass.language)}
                </mwc-list-item>
              </ha-button-menu>
            `:""}

        <div class="header">
          <div class="icon">
            <alarmo-state-badge
              .hass=${this.hass}
              .entity=${this._config.entity}
              style="--alarm-state-color: ${(e=>{if(!e||!e.state)return"var(--state-unavailable-color)";const t=e.state;return t==We.Disarmed?"var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)))":Object.values(We).includes(t)?`var(--state-alarm_control_panel-${t}-color, var(--state-alarm_control_panel-active-color, var(--state-active-color)))`:"var(--disabled-color, var(--state-inactive-color))"})(i)}"
            >
            </alarmo-state-badge>
          </div>
          <div class="summary">
            <div class="name">
              ${((e,t)=>ei(t.name)?e.attributes.friendly_name:t.name)(i,this._config)}
            </div>
            <div class="state">
              ${si(i,this.hass.localize,this._config)}
            </div>
          </div>
        </div>

        ${this._renderWarning()}

        <div id="armActions" class="actions">
          ${this._renderActions()}
        </div>

        ${!oi(i)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?ve``:ve`
              <ha-textfield
                .value=${this._input}
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                ?disabled=${!oi(i)}
                @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputmode=${(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ze?"numeric":"text"}
              ></ha-textfield>
            `}
        ${!oi(i)&&!this._config.keep_keypad_visible||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)!==Ze||this._config.use_code_dialog||this._config.hide_keypad?ve``:ve`
          <div id="keypad" style="max-width: ${300*this._config.button_scale_keypad}px">
            ${yi.map(e=>""===e?ve`
              <alarmo-button
                disabled
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
              ></alarmo-button>
            `:ve`
              <alarmo-button
                .value="${e}"
                @click=${this._handlePadClick}
                ?disabled=${!oi(i)}
                class="${"clear"!==e?"numberKey":""}"
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
              >
                ${"clear"===e?this._config.use_clear_icon?ve`<ha-icon icon="hass:backspace-outline"></ha-icon>`:ve`<span>${this.hass.localize("ui.card.alarm_control_panel.clear_code")}</span>`:ve` <span>${e}</span>`}
              </alarmo-button>
            `)}
          </div>
        `}
      </ha-card>
    `:ve`
        <hui-warning>
          ${"NOT_RUNNING"!==this.hass.config.state?this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]"):this.hass.localize("ui.panel.lovelace.warning.starting")}
        </hui-warning>
      `}_renderActions(){if(!this.hass||!this._config)return ve``;const e=this.hass.states[this._config.entity],t=e.state===We.Disarmed?ai(e).filter(e=>!ii(Je[e],this._config).hide):[Ke.Disarm],i=this._config.show_ready_indicator;return t.map(e=>{const t=ii(Je[e],this._config),a=Array.isArray(this.readyForArmModes)&&this.readyForArmModes.includes(Je[e]);return ve`
        <alarmo-button
          @click=${t=>this._handleActionClick(t,e)}
          style="--content-scale: ${this._config.button_scale_actions}"
          ?scaled=${1!=this._config.button_scale_actions}
        >
          ${i&&e!=Ke.Disarm?ve`
                <ha-icon
                  icon="mdi:circle-medium"
                  style="${null===this.readyForArmModes?"color: var(--label-badge-grey)":a?"color: var(--success-color)":"color: var(--error-color)"}"
                  class="leading"
                ></ha-icon>
              `:""}
          ${ei(t.button_label)?ve`
                <span>${this.hass.localize(`ui.card.alarm_control_panel.${e}`)}</span>
              `:ve`
                <span>${t.button_label}</span>
              `}
        </alarmo-button>
      `})}_renderWarning(){var e;if(!this.hass||!this._config||!this._config.show_messages)return ve``;const t=this.hass.states[this._config.entity];return t.attributes.open_sensors&&t.state==We.Triggered||"blocking_sensors"==this.warning&&t.attributes.open_sensors?ve`
        <div class="messagebox">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${"blocking_sensors"==this.warning?Xt("errors.blocking_sensors",this.hass.language):Xt("errors.triggered_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${Object.entries(t.attributes.open_sensors).map(([e])=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),ve`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `))}
            </div>
          ${"blocking_sensors"==this.warning&&t.attributes.open_sensors?ve`
            <alarmo-button
              @click=${this._forceRetryClick}
              style="--content-scale: ${this._config.button_scale_actions}"
              ?scaled=${1!=this._config.button_scale_actions}
            >
              <span>${Xt("arm_options.force",this.hass.language)}</span>
            </alarmo-button>
          `:""}
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:t.state.startsWith("armed_")&&(null===(e=t.attributes.bypassed_sensors)||void 0===e?void 0:e.length)&&this._config.show_bypassed_sensors?ve`
        <div class="messagebox warning">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${Xt("errors.bypassed_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${t.attributes.bypassed_sensors.map(e=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),ve`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:ve``}_handlePadClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._input="clear"===t?"":this._input+t}async _handleActionClick(e,t){var i;e.target.blur(),this._clearCodeError();const a=this.hass.states[this._config.entity];if((null===(i=this._config)||void 0===i?void 0:i.use_code_dialog)&&!this._config.hide_keypad&&oi(a)){const i=await new Promise(i=>{const a=e.target,s={code_format:this._alarmoConfig.code_format,area_id:this.area_id,entity_id:this._config.entity,action:t,armOptions:this.armOptions,cancel:()=>{i(null)},confirm:e=>{i(e)}};li(a,"show-dialog",{dialogTag:"alarmo-code-dialog",dialogImport:()=>Promise.resolve().then(function(){return bi}),dialogParams:s})});i!=Qe.Arm&&i!=Qe.Disarm||(this.warning="",this.armOptions=Object.assign({},it))}else t==Ke.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._config.entity,code:this._input}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this.armOptions),{entity_id:this._config.entity,mode:Je[t],code:this._input})),this.warning="",this.armOptions=Object.assign({},it)}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&(t.classList.remove("error"),t.classList.add("error"),t.invalid=!0)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout(()=>{this._clearCode()},12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_toggleArmOptions(e){switch(e.detail.index){case 0:this.armOptions=Object.assign(Object.assign({},this.armOptions),{skip_delay:!this.armOptions.skip_delay});break;case 1:this.armOptions=Object.assign(Object.assign({},this.armOptions),{force:!this.armOptions.force})}e.preventDefault();const t=e.target;setTimeout(()=>{t.firstElementChild.blur()},50)}_forceRetryClick(){if(!this.hass||!this._config||!this._last_command)return;let e=this._last_command;this.hass.callService("alarmo","arm",{entity_id:this._config.entity,mode:Je[e],code:this._last_code,force:!0})}static get styles(){return D`
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
        gap: 20px;
      }
      .header .icon {
        display: flex;
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
        margin-right: calc(50% - 200px / 2);
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
        direction: ltr;
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
      div.messagebox alarmo-button {
        display: flex;
        justify-self: center;
        margin-bottom: 10px;
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
    `}},t([qe({attribute:!1})],e.AlarmoCard.prototype,"hass",void 0),t([Fe()],e.AlarmoCard.prototype,"_config",void 0),t([Fe()],e.AlarmoCard.prototype,"_alarmoConfig",void 0),t([Fe()],e.AlarmoCard.prototype,"_input",void 0),t([Fe()],e.AlarmoCard.prototype,"warning",void 0),t([Fe()],e.AlarmoCard.prototype,"area_id",void 0),t([Fe()],e.AlarmoCard.prototype,"armOptions",void 0),t([Fe()],e.AlarmoCard.prototype,"readyForArmModes",void 0),t([Fe()],e.AlarmoCard.prototype,"backendConnection",void 0),t([Fe()],e.AlarmoCard.prototype,"showBypassedSensors",void 0),e.AlarmoCard=t([He("alarmo-card")],e.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card",name:"Alarmo Card",description:"Card for operating Alarmo through Lovelace.",preview:!0}),console.info(`%c  ALARMO-CARD  \n%c  Version: ${"v1.6.3".padEnd(7," ")}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),e}({});
