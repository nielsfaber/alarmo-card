!function(t){"use strict";
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
    ***************************************************************************** */function e(t,e,i,s){var a,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=new Map;class r{constructor(t,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=a.get(this.cssText);return i&&void 0===t&&(a.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const n=t=>new r("string"==typeof t?t:t+"",s),o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,s)},l=(t,e)=>{i?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)})},c=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return n(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var d,h;const u={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:m};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))}),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const a=this[t];this[e]=s,this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=p){var s,a;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const n=(null!==(a=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==a?a:u.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Ei=null}}_$AK(t,e){var i,s,a;const r=this.constructor,n=r._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=r.getPropertyOptions(n),o=t.converter,l=null!==(a=null!==(s=null===(i=o)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof o?o:null)&&void 0!==a?a:u.fromAttribute;this._$Ei=n,this[n]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((t,e)=>this[e]=t),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach((t,e)=>this._$Eg(e,this[e],t)),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var f,b;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null===(d=globalThis.reactiveElementPlatformSupport)||void 0===d||d.call(globalThis,{ReactiveElement:g}),(null!==(h=globalThis.reactiveElementVersions)&&void 0!==h?h:globalThis.reactiveElementVersions=[]).push("1.0.0-rc.4");const _=globalThis.trustedTypes,v=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,$="?"+y,w=`<${$}>`,x=document,A=(t="")=>x.createComment(t),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,T=/>/g,D=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,M=/'/g,z=/"/g,N=/^(?:script|style|textarea)$/i,O=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),P=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),U=new WeakMap,j=x.createTreeWalker(x,129,null,!1),R=(t,e)=>{const i=t.length-1,s=[];let a,r=2===e?"<svg>":"",n=S;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===S?"!--"===l[1]?n=E:void 0!==l[1]?n=T:void 0!==l[2]?(N.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=null!=a?a:S,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,o=l[1],n=void 0===l[3]?D:'"'===l[3]?z:M):n===z||n===M?n=D:n===E||n===T?n=S:(n=D,a=void 0);const h=n===D&&t[e+1].startsWith("/>")?" ":"";r+=n===S?i+w:c>=0?(s.push(o),i.slice(0,c)+"$lit$"+i.slice(c)+y+h):i+y+(-2===c?(s.push(void 0),e):h)}const o=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==v?v.createHTML(o):o,s]};class Y{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let a=0,r=0;const n=t.length-1,o=this.parts,[l,c]=R(t,e);if(this.el=Y.createElement(l,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=j.nextNode())&&o.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=c[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);o.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?V:"@"===e[1]?Z:F})}else o.push({type:6,index:a})}for(const e of t)s.removeAttribute(e)}if(N.test(s.tagName)){const t=s.textContent.split(y),e=t.length-1;if(e>0){s.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],A()),j.nextNode(),o.push({type:2,index:++a});s.append(t[e],A())}}}else if(8===s.nodeType)if(s.data===$)o.push({type:2,index:a});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)o.push({type:7,index:a}),t+=y.length-1}a++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,s){var a,r,n,o;if(e===P)return e;let l=void 0!==s?null===(a=i._$Cl)||void 0===a?void 0:a[s]:i._$Cu;const c=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(n=(o=i)._$Cl)&&void 0!==n?n:o._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=L(t,l._$AS(t,e.values),l,s)),e}class I{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);j.currentNode=a;let r=j.nextNode(),n=0,o=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new B(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new W(r,this,t)),this.v.push(e),l=s[++o]}n!==(null==l?void 0:l.index)&&(r=j.nextNode(),n++)}return a}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,s){var a;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(a=null==s?void 0:s.isConnected)||void 0===a||a}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),k(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==P&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return C(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==H&&k(this._$AH)?this._$AA.nextSibling.data=t:this.S(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,a="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===a)this._$AH.m(i);else{const t=new I(a,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=U.get(t.strings);return void 0===e&&U.set(t.strings,e=new Y(t)),e}M(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const a of t)s===e.length?e.push(i=new B(this.A(A()),this.A(A()),this,this.options)):i=e[s],i._$AI(a),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,s,a){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const a=this.strings;let r=!1;if(void 0===a)t=L(this,t,e,0),r=!k(t)||t!==this._$AH&&t!==P,r&&(this._$AH=t);else{const s=t;let n,o;for(t=a[0],n=0;n<a.length-1;n++)o=L(this,s[i+n],e,n),o===P&&(o=this._$AH[n]),r||(r=!k(o)||o!==this._$AH[n]),o===H?t=H:t!==H&&(t+=(null!=o?o:"")+a[n+1]),this._$AH[n]=o}r&&!s&&this.k(t)}k(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends F{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===H?void 0:t}}class V extends F{constructor(){super(...arguments),this.type=4}k(t){t&&t!==H?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Z extends F{constructor(t,e,i,s,a){super(t,e,i,s,a),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=L(this,t,e,0))&&void 0!==i?i:H)===P)return;const s=this._$AH,a=t===H&&s!==H||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==H&&(s===H||a);a&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var K,J,G;null===(f=globalThis.litHtmlPlatformSupport)||void 0===f||f.call(globalThis,Y,B),(null!==(b=globalThis.litHtmlVersions)&&void 0!==b?b:globalThis.litHtmlVersions=[]).push("2.0.0-rc.5");class X extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,a;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=r._$litPart$;if(void 0===n){const t=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:null;r._$litPart$=n=new B(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return P}}X.finalized=!0,X._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:X}),null===(J=globalThis.litElementPlatformSupport)||void 0===J||J.call(globalThis,{LitElement:X}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.0.0-rc.4");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const Q=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,tt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function et(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):tt(t,e)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function it(t){return et({...t,state:!0})}var st=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,at="[^\\s]+",rt=/\[([^]*?)\]/gm;function nt(t,e){for(var i=[],s=0,a=t.length;s<a;s++)i.push(t[s].substr(0,e));return i}var ot=function(t){return function(e,i){var s=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return s>-1?s:null}};function lt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var s=0,a=e;s<a.length;s++){var r=a[s];for(var n in r)t[n]=r[n]}return t}var ct=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dt=["January","February","March","April","May","June","July","August","September","October","November","December"],ht=nt(dt,3),ut={dayNamesShort:nt(ct,3),dayNames:ct,monthNamesShort:ht,monthNames:dt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},mt=lt({},ut),pt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},gt={D:function(t){return String(t.getDate())},DD:function(t){return pt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return pt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return pt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return pt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return pt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return pt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return pt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return pt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return pt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return pt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return pt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+pt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+pt(Math.floor(Math.abs(e)/60),2)+":"+pt(Math.abs(e)%60,2)}},ft=function(t){return+t-1},bt=[null,"[1-9]\\d?"],_t=[null,at],vt=["isPm",at,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],yt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],$t=(ot("monthNamesShort"),ot("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var wt,xt,At=function(t,e,i){if(void 0===e&&(e=$t.default),void 0===i&&(i={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var s=[];e=(e=$t[e]||e).replace(rt,(function(t,e){return s.push(e),"@@@"}));var a=lt(lt({},mt),i);return(e=e.replace(st,(function(e){return gt[e](t,a)}))).replace(/@@@/g,(function(){return s.shift()}))},kt=function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleDateString(e.language,{year:"numeric",month:"long",day:"numeric"})}:function(t){return At(t,"mediumDate")},Ct=function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleString(e.language,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}:function(t){return At(t,"haDateTime")},St=function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleTimeString(e.language,{hour:"numeric",minute:"2-digit"})}:function(t){return At(t,"shortTime")};function Et(t){return t.substr(0,t.indexOf("."))}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(wt||(wt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(xt||(xt={}));var Tt=function(t,e,i){var s;switch(null==e?void 0:e.number_format){case wt.comma_decimal:s=["en-US","en"];break;case wt.decimal_comma:s=["de","es","it"];break;case wt.space_comma:s=["fr","sv","cs"];break;case wt.system:s=void 0;break;default:s=null==e?void 0:e.language}if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},!Number.isNaN(Number(t))&&Intl&&(null==e?void 0:e.number_format)!==wt.none)try{return new Intl.NumberFormat(s,Dt(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,Dt(t,i)).format(Number(t))}return t?t.toString():""},Dt=function(t,e){var i=e||{};if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var s=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=s,i.maximumFractionDigits=s}return i};function Mt(t,e,i,s){var a=void 0!==s?s:e.state;if("unknown"===a||"unavailable"===a)return t("state.default."+a);if(e.attributes.unit_of_measurement)return Tt(a,i)+" "+e.attributes.unit_of_measurement;var r=function(t){return Et(t.entity_id)}(e);if("input_datetime"===r){var n;if(!e.attributes.has_time)return n=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),kt(n,i);if(!e.attributes.has_date){var o=new Date;return n=new Date(o.getFullYear(),o.getMonth(),o.getDay(),e.attributes.hour,e.attributes.minute),St(n,i)}return n=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),Ct(n,i)}return"humidifier"===r&&"on"===a&&e.attributes.humidity?e.attributes.humidity+" %":"counter"===r||"number"===r?Tt(a,i):e.attributes.device_class&&t("component."+r+".state."+e.attributes.device_class+"."+e.state)||t("component."+r+".state._."+e.state)||e.state}var zt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var a=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return a.detail=i,t.dispatchEvent(a),a},Nt={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function Ot(t,e){if(t in Nt)return Nt[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return e&&"off"===e?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===e?"hass:window-closed":"hass:window-open";case"lock":return e&&"unlocked"===e?"hass:lock-open":"hass:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"hass:cast-connected":"hass:cast";case"zwave":switch(e){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"hass:bookmark"}}var Pt={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"},Ht={binary_sensor:function(t){var e=t.state&&"off"===t.state;switch(t.attributes.device_class){case"battery":return e?"hass:battery":"hass:battery-outline";case"cold":return e?"hass:thermometer":"hass:snowflake";case"connectivity":return e?"hass:server-network-off":"hass:server-network";case"door":return e?"hass:door-closed":"hass:door-open";case"garage_door":return e?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return e?"hass:shield-check":"hass:alert";case"heat":return e?"hass:thermometer":"hass:fire";case"light":return e?"hass:brightness-5":"hass:brightness-7";case"lock":return e?"hass:lock":"hass:lock-open";case"moisture":return e?"hass:water-off":"hass:water";case"motion":return e?"hass:walk":"hass:run";case"occupancy":return e?"hass:home-outline":"hass:home";case"opening":return e?"hass:square":"hass:square-outline";case"plug":return e?"hass:power-plug-off":"hass:power-plug";case"presence":return e?"hass:home-outline":"hass:home";case"sound":return e?"hass:music-note-off":"hass:music-note";case"vibration":return e?"hass:crop-portrait":"hass:vibrate";case"window":return e?"hass:window-closed":"hass:window-open";default:return e?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"hass:garage-open":"hass:garage";case"door":return e?"hass:door-open":"hass:door-closed";case"shutter":return e?"hass:window-shutter-open":"hass:window-shutter";case"blind":return e?"hass:blinds-open":"hass:blinds";case"window":return e?"hass:window-open":"hass:window-closed";default:return Ot("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in Pt)return Pt[e];if("battery"===e){var i=Number(t.state);if(isNaN(i))return"hass:battery-unknown";var s=10*Math.round(i/10);return s>=100?"hass:battery":s<=0?"hass:battery-alert":"hass:battery-"+s}var a=t.attributes.unit_of_measurement;return"°C"===a||"°F"===a?"hass:thermometer":Ot("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?Ot("input_datetime"):"hass:calendar":"hass:clock"}};const Ut=["1","2","3","4","5","6","7","8","9","","0","clear"];var jt;!function(t){t.Disarmed="disarmed",t.Arming="arming",t.Pending="pending",t.Triggered="triggered",t.ArmedAway="armed_away",t.ArmedHome="armed_home",t.ArmedNight="armed_night",t.ArmedCustomBypass="armed_custom_bypass"}(jt||(jt={}));const Rt={[jt.ArmedAway]:"hass:shield-lock",[jt.ArmedHome]:"hass:shield-home",[jt.ArmedNight]:"hass:shield-home",[jt.ArmedCustomBypass]:"hass:security",[jt.Disarmed]:"hass:shield-check",[jt.Arming]:"hass:shield-outline",[jt.Pending]:"hass:shield-outline",[jt.Triggered]:"hass:bell-ring"};var Yt;!function(t){t.ArmAway="arm_away",t.ArmHome="arm_home",t.ArmNight="arm_night",t.ArmCustomBypass="arm_custom_bypass",t.Disarm="disarm"}(Yt||(Yt={}));const Lt={[Yt.ArmAway]:jt.ArmedAway,[Yt.ArmHome]:jt.ArmedHome,[Yt.ArmNight]:jt.ArmedNight,[Yt.ArmCustomBypass]:jt.ArmedCustomBypass,[Yt.Disarm]:jt.Disarmed};var It;!function(t){t.Arm="arm",t.Trigger="trigger",t.FailedToArm="failed_to_arm",t.CommandNotAllowed="command_not_allowed",t.NoCodeProvided="no_code_provided",t.InvalidCodeProvided="invalid_code_provided",t.TriggerTimeExpired="trigger_time_expired"}(It||(It={}));const Bt=["arming","pending"],Ft={type:"",entity:"",name:"",keep_keypad_visible:!1,use_clear_icon:!1,button_scale:1,states:{}};var qt={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale:"Scaling factor to apply for resizing the buttons.",use_clear_icon:"Show icon (instead of text) in keypad for clearing code input.",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",button_label:"Override button label",state_label:"Override state label"}},Vt={blocking_sensors:"Could not arm due to the following sensors",triggered_sensors:"Alarm was triggered by the following sensors"},Zt={armed_away:"Armed Away",armed_home:"Armed Home",armed_night:"Armed Night",armed_custom_bypass:"Armed Custom Bypass"},Wt={editor:qt,errors:Vt,modes:Zt},Kt={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale:"Scaling factor to apply for resizing the buttons."},Jt={blocking_sensors:"Impossible d'armer en raison des capteurs suivants",triggered_sensors:"L'alarme a été déclenchée par les capteurs suivants"},Gt={editor:Kt,errors:Jt},Xt={en:Object.freeze({__proto__:null,editor:qt,errors:Vt,modes:Zt,default:Wt}),fr:Object.freeze({__proto__:null,editor:Kt,errors:Jt,default:Gt})};function Qt(t,e,i="",s=""){const a=e.replace(/['"]+/g,"").replace("-","_");var r;try{r=t.split(".").reduce((t,e)=>t[e],Xt[a])}catch(e){r=t.split(".").reduce((t,e)=>t[e],Xt.en)}if(void 0===r&&(r=t.split(".").reduce((t,e)=>t[e],Xt.en)),""!==i&&""!==s){Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s]);for(let t=0;t<i.length;t++)r=r.replace(i[t],s[t])}return r}function te(t){return null!=t}function ee(t){switch(typeof t){case"object":return 0==Object.keys(t).length;case"string":return 0==String(t).length;default:return!te(t)}}const ie=(t,e)=>{let i={hide:!1,button_label:"",state_label:""};return(e.states||{}).hasOwnProperty(t)&&(i=Object.assign(Object.assign({},i),e.states[t])),i},se=t=>{if(!t)return[];const e=t.attributes.supported_features||0;let i=[];return 2&e&&i.push(Yt.ArmAway),1&e&&i.push(Yt.ArmHome),4&e&&i.push(Yt.ArmNight),16&e&&i.push(Yt.ArmCustomBypass),i},ae=t=>t.attributes.code_format&&(t.state===jt.Disarmed&&t.attributes.code_arm_required||t.state!==jt.Disarmed&&t.attributes.code_disarm_required);let re=class extends X{async showDialog(t){this._params=t}closeDialog(){return this._params=void 0,!0}_createCloseHeading(){return O`
  <span class="header_title">${Qt("editor.action_dialog.title",this.hass.language,"{action}",this.hass.localize("ui.card.alarm_control_panel."+this._params.action))}</span>
  <mwc-icon-button
    aria-label=${this.hass.localize("ui.dialogs.generic.close")}
    dialogAction="close"
    class="header_button"
  >
    <ha-icon icon="hass:close"></ha-icon>
  </mwc-icon-button>
`}render(){return this._params?O`
      <ha-dialog
        open
        scrimClickAction
        .heading=${this._createCloseHeading()}
        @keydown=${this._ignoreKeydown}
        @closed=${this._cancel}
      >

      <paper-input
        label="${Qt("editor.action_dialog.button_label",this.hass.language)}"
        .value="${this._params.config.button_label||""}"
        placeholder="${this.hass.localize("ui.card.alarm_control_panel."+this._params.action)}"
        @change=${t=>this._updateConfig({button_label:String(t.target.value).trim()})}
      ></paper-input>

      <paper-input
        label="${Qt("editor.action_dialog.state_label",this.hass.language)}"
        .value="${this._params.config.state_label||""}"
        placeholder="${this.hass.localize("component.alarm_control_panel.state._."+Lt[this._params.action])}"
        @change=${t=>this._updateConfig({state_label:String(t.target.value).trim()})}
      ></paper-input>
        
        <div slot="primaryAction">
          <mwc-button @click=${this._cancel}>
            ${this.hass.localize("ui.common.cancel")}
          </mwc-button>
        </div>
        <div slot="secondaryAction">
          <mwc-button @click=${this._save}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>
        </div>
      </ha-dialog>
    `:O``}_ignoreKeydown(t){t.stopPropagation()}_cancel(t){t&&t.stopPropagation(),this.closeDialog()}_save(t){var e;t&&t.stopPropagation(),null===(e=this._params)||void 0===e||e.confirm(this._params.config),this.closeDialog()}_updateConfig(t){this._params&&(this._params=Object.assign(Object.assign({},this._params),{config:Object.assign(Object.assign({},this._params.config),t)}))}static get styles(){return o`
        paper-dialog-scrollable {
          --paper-dialog-scrollable: {
            -webkit-overflow-scrolling: auto;
          }
        }
        /* force smooth scrolling for iOS 10 */
        paper-dialog-scrollable.can-scroll {
          --paper-dialog-scrollable: {
            -webkit-overflow-scrolling: touch;
          }
        }
        .paper-dialog-buttons {
          align-items: flex-end;
          padding: 8px;
          padding-bottom: max(env(safe-area-inset-bottom), 8px);
        }
        @media all and (min-width: 450px) and (min-height: 500px) {
          ha-paper-dialog {
            min-width: 400px;
          }
        }
        @media all and (max-width: 450px), all and (max-height: 500px) {
          paper-dialog,
          ha-paper-dialog {
            margin: 0;
            width: calc(
              100% - env(safe-area-inset-right) - env(safe-area-inset-left)
            ) !important;
            min-width: calc(
              100% - env(safe-area-inset-right) - env(safe-area-inset-left)
            ) !important;
            max-width: calc(
              100% - env(safe-area-inset-right) - env(safe-area-inset-left)
            ) !important;
            max-height: calc(100% - var(--header-height));
            position: fixed !important;
            bottom: 0px;
            left: env(safe-area-inset-left);
            right: env(safe-area-inset-right);
            overflow: scroll;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
          }
        }
        /* mwc-dialog (ha-dialog) styles */
        ha-dialog {
          --mdc-dialog-min-width: 400px;
          --mdc-dialog-max-width: 600px;
          --mdc-dialog-heading-ink-color: var(--primary-text-color);
          --mdc-dialog-content-ink-color: var(--primary-text-color);
          --justify-action-buttons: space-between;
        }
        ha-dialog .form {
          padding-bottom: 24px;
          color: var(--primary-text-color);
        }
        a {
          color: var(--primary-color);
        }
        /* make dialog fullscreen on small screens */
        @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-dialog {
            --mdc-dialog-min-width: calc(
              100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
            );
            --mdc-dialog-max-width: calc(
              100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
            );
            --mdc-dialog-min-height: 100%;
            --mdc-dialog-max-height: 100%;
            --mdc-shape-medium: 0px;
            --vertial-align-dialog: flex-end;
          }
        }
        mwc-button.warning {
          --mdc-theme-primary: var(--error-color);
        }
        .error {
          color: var(--error-color);
        }
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-dialog {
            --mdc-dialog-max-height: 100%;
            height: 100%;
          }
        }
        @media all and (min-width: 850px) {
          ha-dialog {
            --mdc-dialog-min-width: 550px;
          }
        }
        ha-dialog {
          --mdc-dialog-max-width: 550px;
          --dialog-content-padding: 2px 24px 20px 24px;
          --dialog-z-index: 5;
        }
        .spinner, ha-card {
          width: calc(50% - 8px);
          text-align: center;
          margin: 4px;
        }
        ha-card {
          box-sizing: border-box;
          padding: 8px;
          color: var(--secondary-text-color);
          font-size: 16px;
          cursor: pointer;
        }
        ha-svg-icon {
          padding-bottom: 4px;
          --mdc-icon-size: 38px;
        }
        span.header {
          font-weight: 600;
        }
      `}};e([et({attribute:!1})],re.prototype,"hass",void 0),e([it()],re.prototype,"_params",void 0),re=e([Q("alarmo-action-config-dialog")],re);var ne=Object.freeze({__proto__:null,get AlarmoActionConfigDialog(){return re}});const oe=t=>t.callWS({type:"alarmo/entities"});let le=class extends X{constructor(){super(...arguments),this._entities=[]}async firstUpdated(){oe(this.hass).then(t=>{this._entities=t.map(t=>t.entity_id)}).catch(t=>{})}setConfig(t){this._config=Object.assign({},t)}render(){if(!this._config||!this.hass)return O``;if(!this._entities.length)return O`
        <hui-warning>
         Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const t=this._config.entity?this.hass.states[this._config.entity]:void 0;return O`
      <div class="card-config">
        <ha-entity-picker
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
          .hass=${this.hass}
          .value="${this._config.entity||""}"
          .includeDomains=${["alarm_control_panel"]}
          .entityFilter=${t=>this._entities.includes(t.entity_id)}
          @change=${t=>this._updateConfig("entity",t.target.value)}
          allow-custom-entity
        ></ha-entity-picker>

        <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .value="${this._config.name||""}"
          @change=${t=>this._updateConfig("name",String(t.target.value).trim())}
        ></paper-input>

        ${t?O`
          <div class="config-item">
            <span>${Qt("editor.available_actions",this.hass.language)}</span>
          </div>
          <div class="config-row">
    ${[...se(t),Yt.Disarm].map(e=>{const i=se(t).map(t=>Lt[t]),s=ie(Lt[e],this._config).hide;return O`
        <div class="config-item-50 ${s?"disabled":""}">
          <ha-checkbox
            ?checked=${!s}
            ?disabled=${!s&&1==i.filter(t=>!ie(t,this._config).hide).length||e==Yt.Disarm}
            @change=${t=>this._updateStateConfig(Lt[e],t.target.checked?{hide:void 0}:{hide:!0})}
          >
          </ha-checkbox>
          ${this.hass.localize("ui.card.alarm_control_panel."+e)}
          <ha-icon-button
            icon="hass:pencil"
            style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
            ?disabled=${ie(Lt[e],this._config).hide}
            @click=${t=>this._openActionLabelDialog(t,e)}
          >
          </ha-icon-button>
        </span>
      `})}
          </div>
        `:""}
        ${t&&t.attributes.code_arm_required!==t.attributes.code_disarm_required?O`
        <ha-formfield
          .label=${Qt("editor.keep_keypad_visible",this.hass.language)}
        >
          <ha-switch
            .checked=${this._config.keep_keypad_visible}
            @change=${t=>this._updateConfig("keep_keypad_visible",t.target.checked)}
          ></ha-switch
        ></ha-formfield>`:""}
        <ha-formfield
          .label=${Qt("editor.button_scale",this.hass.language)}
        >
          <ha-slider
            value=${this._config.button_scale||1}
            @change=${t=>this._updateConfig("button_scale",Number(t.target.value))}
            min="${1}"
            max="${2.5}"
            step="0.1"
            pin
          ></ha-slider>
        </ha-formfield>

        <ha-formfield
          .label=${Qt("editor.use_clear_icon",this.hass.language)}
        >
          <ha-switch
            .checked=${this._config.use_clear_icon}
            @change=${t=>this._updateConfig("use_clear_icon",t.target.checked)}
          ></ha-switch
        ></ha-formfield>
      </div>
    `}_updateConfig(t,e){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[t]:e}),"entity"==t){const t=this._config.entity?this.hass.states[this._config.entity]:void 0;t&&t.attributes.code_arm_required!=t.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}zt(this,"config-changed",{config:this._config})}}_updateStateConfig(t,e){var i;const s=t=>function(t,e){return t?Object.entries(t).filter(([t])=>e.includes(t)).reduce((t,[e,i])=>Object.assign(t,{[e]:i}),{}):{}}(t,Object.keys(t).filter(e=>!ee(t[e])));let a=(null===(i=this._config)||void 0===i?void 0:i.states)||{};const r=s(Object.assign(Object.assign({},a[t]),e));a=s(Object.assign(Object.assign({},a),{[t]:r})),this._updateConfig("states",a)}_openActionLabelDialog(t,e){const i={action:e,config:ie(Lt[e],this._config),confirm:t=>{this._updateStateConfig(Lt[e],t)}};zt(t.target,"show-dialog",{dialogTag:"alarmo-action-config-dialog",dialogImport:()=>Promise.resolve().then((function(){return ne})),dialogParams:i})}static get styles(){return o`
      ha-formfield {
        padding: 20px 0px;
      }
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
      div.config-item-50 {
        width: 50%;
      }
      @media all and (max-width: 300px) {
        div.config-item-50 {
          width: 100%;
        }
      }
      span.disabled { 
        color: var(--disabled-text-color);
      }
    `}};e([et({attribute:!1})],le.prototype,"hass",void 0),e([it()],le.prototype,"_config",void 0),e([it()],le.prototype,"_entities",void 0),le=e([Q("alarmo-card-editor")],le);var ce=Object.freeze({__proto__:null,get AlarmoCardEditor(){return le}});class de extends X{constructor(){super(...arguments),this.duration=0,this.datetime=null,this.timer=0,this.offset=0}shouldUpdate(t){if(!t.size)return!0;const e=t.get("hass");if(!e||e.themes!==this.hass.themes||e.language!==this.hass.language)return!0;if(e.states[this.entity].state!==this.hass.states[this.entity].state){const t=e.states[this.entity].state,i=this.hass.states[this.entity].state;return Bt.includes(i)?this.startTimer():Bt.includes(t)&&this.stopTimer(),!0}return!1}firstUpdated(){const t=this.hass.states[this.entity].state;Bt.includes(t)&&this.startTimer()}startTimer(){clearInterval(this.timer);const t=this.hass.states[this.entity];if(!t.attributes.expiration||!t.attributes.delay)return;this.duration=t.attributes.delay,this.datetime=new Date(t.attributes.expiration),this.offset=0;const e=this.getRemaining();this.offset=e-this.duration,this.timer=window.setInterval(()=>{this.requestUpdate()},1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const t=(this.datetime.getTime()-(new Date).getTime())/1e3-this.offset;return t<0?(clearInterval(this.timer),0):t}getTime(){const t=Math.round(this.getRemaining());return t<=0?"":t}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(t){return this.datetime&&this.duration?O`
        ${this.getTime()}
      `:O`
        <ha-icon .icon=${Rt[t]}></ha-icon>
      `}render(){let t=45,e=2*Math.PI*t;const i=this.hass.states[this.entity],s=this.datetime&&this.duration;return O`
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g class="track ${i.state.split("_").shift()} ${s?"timer":""}">
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
      <div class="overlay ${i.state.split("_").shift()} ${s?"timer":""}">
        <div class="value">
          ${this._stateValue(i.state)}
        </div>
      </div>
      `}static get styles(){return o`
      :host {
        --alarm-color-disarmed: var(--label-badge-green);
        --alarm-color-pending: var(--label-badge-yellow);
        --alarm-color-triggered: var(--label-badge-red);
        --alarm-color-armed: var(--label-badge-red);
        width: 60px;
        height: 60px;
        cursor: pointer;
      }
      svg {
        overflow: visible;
        display: block;
        transform: scaleX(-1);
      }
      .track {
        stroke-width: 3;
        stroke-linecap: round;
        stroke: lightgray;
        fill: none;
      }
      .track .remaining {
        transform: rotate(90deg);
        transform-origin: center;
        transition: 0.3s linear stroke;
        stroke: var(--alarm-state-color);
      }
      .track.arming .remaining, .track.pending .remaining {
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
      .disarmed {
        --alarm-state-color: var(--alarm-color-disarmed);
      }
      .triggered {
        --alarm-state-color: var(--alarm-color-triggered);
        animation: pulse 1s infinite;
      }
      .arming, .pending {
        --alarm-state-color: var(--alarm-color-pending);
        animation: pulse 1s infinite;
      }
      .arming.timer, .pending.timer {
        --alarm-state-color: var(--primary-color);
        animation: none;
      }
      .armed {
        --alarm-state-color: var(--alarm-color-armed);
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
    `}}e([et()],de.prototype,"hass",void 0),e([et()],de.prototype,"entity",void 0),customElements.define("alarmo-state-badge",de);class he extends X{shouldUpdate(t){const e=t.get("hass");return!e||!(!this.entity||e.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return O``;let t=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(t=Object.assign(Object.assign({},t),{state:this.state}));const e=function(t){if(!t)return"hass:bookmark";if(t.attributes.icon)return t.attributes.icon;var e=Et(t.entity_id);return e in Ht?Ht[e](t):Ot(e,t.state)}(t),i=Mt(this.hass.localize,t,this.hass.locale||{language:this.hass.language,number_format:wt.language}),s=t.attributes.friendly_name||function(t){return t.substr(t.indexOf(".")+1)}(t.entity_id);let a=!!this.state||"on"==t.state;return O`
      <div
        class="badge-container"
        @click=${()=>zt(this,"hass-more-info",{entityId:this.entity})}
      >
        <div class="label-badge ${a?"active":""}" id="badge">
          <div class="value">
            <ha-icon .icon=${e}></ha-icon>
            <div class="label">
              <span>${i}</span>
            </div>
          </div>
        </div>
        <div class="title">${s}</div>
      </div>
        
    `}static get styles(){return o`
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
      `}}e([et()],he.prototype,"hass",void 0),e([et()],he.prototype,"entity",void 0),e([et()],he.prototype,"state",void 0),customElements.define("alarmo-sensor-badge",he);class ue extends X{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return O`
      ${this.scaled?O`
      <button
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>`:O`
      <mwc-button
        ?disabled=${this.disabled}
        ?outlined=${!this.disabled}
      >
        <slot></slot>
      </mwc-button>
    `}
    `}handleFocus(t){t.target.blur()}static get styles(){return o`
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
        background-color: rgba(var(--rgb-primary-color),0.06);
      }
      button:not(:disabled):active {
        background-color: rgba(var(--rgb-primary-color),0.12);
      }
      button:focus {
        outline: none;
      }
      mwc-button {
        width: 100%;
      }
      ::slotted(ha-icon) {
        --mdc-icon-size: calc(var(--content-scale, 1) * 1.25rem);
      }
    `}}e([et({type:Boolean})],ue.prototype,"disabled",void 0),e([et({type:Boolean})],ue.prototype,"scaled",void 0),customElements.define("alarmo-button",ue);const me=t=>{class i extends t{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const t=this.__unsubs.pop();t instanceof Promise?t.then(t=>t()):t()}this.__unsubs=void 0}}updated(t){super.updated(t),t.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return e([et({attribute:!1})],i.prototype,"hass",void 0),i};t.AlarmoCard=class extends(me(X)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=null,this.subscribedEntities=[],this._codeClearTimer=0}static async getConfigElement(){return await Promise.resolve().then((function(){return ce})),document.createElement("alarmo-card-editor")}async getCardSize(){if(!this._config||!this.hass)return 9;const t=this.hass.states[this._config.entity];return t&&"number"===t.attributes.code_format&&(ae(t)||this._config.keep_keypad_visible)?9:4}setConfig(t){(t=>{if(!t||!t.entity||"alarm_control_panel"!==Et(t.entity))throw new Error("Invalid configuration provided for entity");if(te(t.button_scale)&&("number"!=typeof t.button_scale||t.button_scale<1||t.button_scale>2.5))throw new Error("Invalid configuration provided for button_scale")})(t),this._config=Object.assign(Object.assign({},Ft),t)}hassSubscribe(){return[this.hass.connection.subscribeMessage(t=>this._fetchData(t),{type:"alarmo_updated"})]}async firstUpdated(){oe(this.hass).then(t=>{let e=t.find(t=>t.entity_id==this._config.entity);e&&(this.area_id=e.area_id)}).catch(t=>{})}async _fetchData(t){if(t.data.area_id===this.area_id)switch(t.data.event){case It.Arm:this._clearCode();break;case It.Trigger:break;case It.InvalidCodeProvided:case It.NoCodeProvided:this._showCodeError(),this.subscribedEntities=[];break;case It.FailedToArm:this.warning="blocking_sensors",this._clearCode();break;case It.CommandNotAllowed:this._clearCode();break;case It.TriggerTimeExpired:}}shouldUpdate(t){if(t.has("_config"))return!0;const e=t.get("hass");if(!e||e.themes!==this.hass.themes||e.language!==this.hass.language)return!0;if(e.states[this._config.entity]!==this.hass.states[this._config.entity]){const t=e.states[this._config.entity],i=this.hass.states[this._config.entity];return this.processStateUpdate(t,i),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some(t=>e.states[t]!==this.hass.states[t]))}processStateUpdate(t,e){e.state!=t.state&&(this.subscribedEntities=[]),e.state==jt.Disarmed&&this._clearCode()}render(){if(!this._config||!this.hass)return O``;const t=this.hass.states[this._config.entity];return t?null===this.area_id?O`
        <hui-warning>
         Could not establish a connection with the alarmo integration. Please check if it is installed and the correct entity is selected in the card settings.
        </hui-warning>
      `:O`
      <ha-card>

        <div class="header">
          <div class="icon">
            <alarmo-state-badge
              .hass=${this.hass}
              .entity=${this._config.entity}
              @click=${()=>zt(this,"hass-more-info",{entityId:this._config.entity})}
            >
            </alarmo-state-badge>
          </div>
          <div class="summary">
            <div class="name">
              ${((t,e)=>ee(e.name)?t.attributes.friendly_name:e.name)(t,this._config)}
            </div>
            <div class="state">
              ${((t,e,i)=>{const s=t.state;if(Object.values(jt).includes(s)){const t=ie(s,i);if(!ee(t.state_label))return t.state_label}return e("component.alarm_control_panel.state._."+t.state)})(t,this.hass.localize,this._config)}
            </div>
          </div>
        </div>
        
        ${this._renderWarning()}

        <div id="armActions" class="actions">
          ${this._renderActions()}
        </div>

        ${ae(t)||this._config.keep_keypad_visible?O`
              <paper-input
                .value=${this._input}
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                ?disabled=${!ae(t)}
                @value-changed=${t=>{this._clearCodeError(),this._input=t.target.value,this._setCodeClearTimer()}}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputmode=${"number"===t.attributes.code_format?"numeric":"text"}
              ></paper-input>
            `:O``}
        ${!ae(t)&&!this._config.keep_keypad_visible||"number"!==t.attributes.code_format?O``:O`
          <div
            id="keypad"
            style="max-width: ${300*this._config.button_scale}px"
          >
        ${Ut.map(e=>""===e?O` 
              <alarmo-button
                disabled
                style="--content-scale: ${this._config.button_scale}"
                ?scaled=${1!=this._config.button_scale}
              ></alarmo-button> `:O`
              <alarmo-button
                .value="${e}"
                @click=${this._handlePadClick}
                ?disabled=${!ae(t)}
                class="${"clear"!==e?"numberKey":""}"
                style="--content-scale: ${this._config.button_scale}"
                ?scaled=${1!=this._config.button_scale}
              >
                ${"clear"===e?this._config.use_clear_icon?O`<ha-icon icon="hass:backspace-outline"></ha-icon>`:this.hass.localize("ui.card.alarm_control_panel.clear_code"):e}
              </alarmo-button>
            `)}
          </div>
      `}
      </ha-card>
    `:O`
        <hui-warning>
         ${"NOT_RUNNING"!==this.hass.config.state?this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]"):this.hass.localize("ui.panel.lovelace.warning.starting")}
        </hui-warning>
      `}_renderActions(){if(!this.hass||!this._config)return O``;const t=this.hass.states[this._config.entity];return(t.state===jt.Disarmed?se(t).filter(t=>!ie(Lt[t],this._config).hide):[Yt.Disarm]).map(t=>{const e=ie(Lt[t],this._config);return O`
        <alarmo-button
          @click=${e=>this._handleActionClick(e,t)}
          style="--content-scale: ${this._config.button_scale}"
          ?scaled=${1!=this._config.button_scale}
        >
        ${ee(e.button_label)?this.hass.localize("ui.card.alarm_control_panel."+t):e.button_label}
        </alarmo-button>
        `})}_renderWarning(){if(!this.hass||!this._config)return O``;const t=this.hass.states[this._config.entity];return t.attributes.open_sensors&&t.state==jt.Triggered||"blocking_sensors"==this.warning&&t.attributes.open_sensors?O`
          <div class="message">
            <div class="description">
              <span>
              <ha-icon icon="hass:alert"></ha-icon>
        ${"blocking_sensors"==this.warning?Qt("errors.blocking_sensors",this.hass.language):Qt("errors.triggered_sensors",this.hass.language)}
        </span>
          </div>
          <div class="content">
            ${Object.entries(t.attributes.open_sensors).map(([t])=>(this.subscribedEntities.includes(t)||this.subscribedEntities.push(t),O`
            <div class="badge">
              <alarmo-sensor-badge
                .hass=${this.hass}
                .entity=${t}
              >
              </alarmo-sensor-badge>
            </div>`))}
        </div>
          </div>`:O``}_handlePadClick(t){const e=t.currentTarget.value;this._clearCodeError(),this._input="clear"===e?"":this._input+e}_handleActionClick(t,e){t.target.blur(),this._clearCodeError(),this.hass.callService("alarm_control_panel","alarm_"+e,{entity_id:this._config.entity,code:this._input}),this.warning=""}_showCodeError(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#code_input");e&&(e.classList.remove("error"),e.classList.add("error"),e.invalid=!0)}_clearCodeError(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#code_input");e&&e.classList.contains("error")&&(e.classList.remove("error"),e.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout(()=>{this._clearCode()},12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}static get styles(){return o`
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
        margin: 0 4px 4px;
      }
      paper-input {
        margin: 0 auto 8px;
        max-width: 150px;
        text-align: center;
        margin-left: calc(50% - 150px/2);
      }
      paper-input.error {
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
        padding: 4px;
        width: 30%;
        box-sizing: border-box;
      }
      @keyframes shake {
        0% { margin-left: calc(50% - 150px/2); }
        25% { margin-left: calc(50% - 150px/2 + 10px); }
        75% { margin-left: calc(50% - 150px/2 - 10px); }
        100% { margin-left: calc(50% - 150px/2); }
      }
      div.message {
        border-radius: 4px;
        width: 90%;
        margin: 0px auto 20px;
        box-sizing: border-box;
        border: 1px solid var(--label-badge-red);
        display: flex;
        flex-direction: column;
        position: relative;
      }
      div.message .description {
        padding: 5px 5px 0px 5px;
        margin: -15px auto 0px;
        color: var(--label-badge-red);
        font-weight: 500;
      }
      div.message .description span {
        background: var(--card-background-color);
        padding-right: 5px;
      }
      div.message .description ha-icon {
        --mdc-icon-size: 24px;
        margin: 0px 0px 0px 0px;
      }
      div.message .content {
        display: flex;
        padding: 5px;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        color: var(--primary-text-color);
      }
      div.message .content .badge {
        width: 64px;
        margin: 5px 0px;
        justify-content: center;
        align-items: center;
      }
    `}},e([et({attribute:!1})],t.AlarmoCard.prototype,"hass",void 0),e([it()],t.AlarmoCard.prototype,"_config",void 0),e([it()],t.AlarmoCard.prototype,"_input",void 0),e([it()],t.AlarmoCard.prototype,"warning",void 0),e([it()],t.AlarmoCard.prototype,"area_id",void 0),t.AlarmoCard=e([Q("alarmo-card")],t.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card",name:"Alarmo Card",description:"Card for operating Alarmo through Lovelace."}),console.info("%c  ALARMO-CARD  \n%c  Version: "+"v1.1.0".padEnd(7," "),"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray")}({});
