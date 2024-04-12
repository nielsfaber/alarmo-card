!function(e){"use strict";
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
    ***************************************************************************** */function t(e,t,s,i){var a,o=arguments.length,n=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(n=(o<3?a(n):o>3?a(t,s,n):a(t,s))||n);return o>3&&n&&Object.defineProperty(t,s,n),n
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}const s=window,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;class n{constructor(e,t,s){if(this._$cssResult$=!0,s!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(t,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const s=1===e.length?e[0]:t.reduce((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new n(s,e,a)},l=(e,t)=>{i?e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(t=>{const i=document.createElement("style"),a=s.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=t.cssText,e.appendChild(i)})},c=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,a))(t)})(e):e
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var d;const h=window,u=h.trustedTypes,p=u?u.emptyScript:"",m=h.reactiveElementPolyfillSupport,g={toAttribute(e,t){switch(t){case Boolean:e=e?p:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},_=(e,t)=>t!==e&&(t==t||e==e),b={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:_};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const i=this._$Ep(s,t);void 0!==i&&(this._$Ev.set(i,s),e.push(i))}),e}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const a=this[e];this[t]=i,this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||b}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of t)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Ep(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,s;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(s=e.hostConnected)||void 0===s||s.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return l(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=b){var i;const a=this.constructor._$Ep(e,s);if(void 0!==a&&!0===s.reflect){const o=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:g).toAttribute(t,s.type);this._$El=e,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$El=null}}_$AK(e,t){var s;const i=this.constructor,a=i._$Ev.get(e);if(void 0!==a&&this._$El!==a){const e=i.getPropertyOptions(a),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(s=e.converter)||void 0===s?void 0:s.fromAttribute)?e.converter:g;this._$El=a,this[a]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,s){let i=!0;void 0!==e&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||_)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((e,t)=>this[t]=e),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(s)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach((e,t)=>this._$EO(t,this[t],e)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var v;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:f}),(null!==(d=h.reactiveElementVersions)&&void 0!==d?d:h.reactiveElementVersions=[]).push("1.6.1");const y=window,w=y.trustedTypes,$=w?w.createPolicy("lit-html",{createHTML:e=>e}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,x="?"+k,A=`<${x}>`,C=document,S=()=>C.createComment(""),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,z=Array.isArray,O="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,j=/>/g,D=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,H=/"/g,N=/^(?:script|style|textarea|title)$/i,U=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),R=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Y=new WeakMap,B=C.createTreeWalker(C,129,null,!1),I=(e,t)=>{const s=e.length-1,i=[];let a,o=2===t?"<svg>":"",n=M;for(let t=0;t<s;t++){const s=e[t];let r,l,c=-1,d=0;for(;d<s.length&&(n.lastIndex=d,l=n.exec(s),null!==l);)d=n.lastIndex,n===M?"!--"===l[1]?n=T:void 0!==l[1]?n=j:void 0!==l[2]?(N.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=null!=a?a:M,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?D:'"'===l[3]?H:P):n===H||n===P?n=D:n===T||n===j?n=M:(n=D,a=void 0);const h=n===D&&e[t+1].startsWith("/>")?" ":"";o+=n===M?s+A:c>=0?(i.push(r),s.slice(0,c)+"$lit$"+s.slice(c)+k+h):s+k+(-2===c?(i.push(void 0),t):h)}const r=o+(e[s]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(r):r,i]};class q{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let a=0,o=0;const n=e.length-1,r=this.parts,[l,c]=I(e,t);if(this.el=q.createElement(l,s),B.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=B.nextNode())&&r.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(k)){const s=c[o++];if(e.push(t),void 0!==s){const e=i.getAttribute(s.toLowerCase()+"$lit$").split(k),t=/([.?@])?(.*)/.exec(s);r.push({type:1,index:a,name:t[2],strings:e,ctor:"."===t[1]?K:"?"===t[1]?G:"@"===t[1]?Q:W})}else r.push({type:6,index:a})}for(const t of e)i.removeAttribute(t)}if(N.test(i.tagName)){const e=i.textContent.split(k),t=e.length-1;if(t>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],S()),B.nextNode(),r.push({type:2,index:++a});i.append(e[t],S())}}}else if(8===i.nodeType)if(i.data===x)r.push({type:2,index:a});else{let e=-1;for(;-1!==(e=i.data.indexOf(k,e+1));)r.push({type:7,index:a}),e+=k.length-1}a++}}static createElement(e,t){const s=C.createElement("template");return s.innerHTML=e,s}}function F(e,t,s=e,i){var a,o,n,r;if(t===R)return t;let l=void 0!==i?null===(a=s._$Co)||void 0===a?void 0:a[i]:s._$Cl;const c=E(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,s,i)),void 0!==i?(null!==(n=(r=s)._$Co)&&void 0!==n?n:r._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(t=F(e,l._$AS(e,t.values),l,i)),t}class V{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:s},parts:i}=this._$AD,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:C).importNode(s,!0);B.currentNode=a;let o=B.nextNode(),n=0,r=0,l=i[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new Z(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new X(o,this,e)),this._$AV.push(t),l=i[++r]}n!==(null==l?void 0:l.index)&&(o=B.nextNode(),n++)}return a}v(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class Z{constructor(e,t,s,i){var a;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cp=null===(a=null==i?void 0:i.isConnected)||void 0===a||a}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=F(this,e,t),E(e)?e===L||null==e||""===e?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==R&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>z(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==L&&E(this._$AH)?this._$AA.nextSibling.data=e:this.$(C.createTextNode(e)),this._$AH=e}g(e){var t;const{values:s,_$litType$:i}=e,a="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=q.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===a)this._$AH.v(s);else{const e=new V(a,this),t=e.u(this.options);e.v(s),this.$(t),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new q(e)),t}T(e){z(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const a of e)i===t.length?t.push(s=new Z(this.k(S()),this.k(S()),this,this.options)):s=t[i],s._$AI(a),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class W{constructor(e,t,s,i,a){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,i){const a=this.strings;let o=!1;if(void 0===a)e=F(this,e,t,0),o=!E(e)||e!==this._$AH&&e!==R,o&&(this._$AH=e);else{const i=e;let n,r;for(e=a[0],n=0;n<a.length-1;n++)r=F(this,i[s+n],t,n),r===R&&(r=this._$AH[n]),o||(o=!E(r)||r!==this._$AH[n]),r===L?e=L:e!==L&&(e+=(null!=r?r:"")+a[n+1]),this._$AH[n]=r}o&&!i&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class K extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}}const J=w?w.emptyScript:"";class G extends W{constructor(){super(...arguments),this.type=4}j(e){e&&e!==L?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Q extends W{constructor(e,t,s,i,a){super(e,t,s,i,a),this.type=5}_$AI(e,t=this){var s;if((e=null!==(s=F(this,e,t,0))&&void 0!==s?s:L)===R)return;const i=this._$AH,a=e===L&&i!==L||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==L&&(i===L||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==s?s:this.element,e):this._$AH.handleEvent(e)}}class X{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){F(this,e)}}const ee=y.litHtmlPolyfillSupport;null==ee||ee(q,Z),(null!==(v=y.litHtmlVersions)&&void 0!==v?v:y.litHtmlVersions=[]).push("2.7.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var te,se;class ie extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{var i,a;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:t;let n=o._$litPart$;if(void 0===n){const e=null!==(a=null==s?void 0:s.renderBefore)&&void 0!==a?a:null;o._$litPart$=n=new Z(t.insertBefore(S(),e),e,void 0,null!=s?s:{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return R}}ie.finalized=!0,ie._$litElement$=!0,null===(te=globalThis.litElementHydrateSupport)||void 0===te||te.call(globalThis,{LitElement:ie});const ae=globalThis.litElementPolyfillSupport;null==ae||ae({LitElement:ie}),(null!==(se=globalThis.litElementVersions)&&void 0!==se?se:globalThis.litElementVersions=[]).push("3.3.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const oe=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:s,elements:i}=t;return{kind:s,elements:i,finisher(t){customElements.define(e,t)}}})(e,t)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,ne=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(s){s.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};function re(e){return(t,s)=>void 0!==s?((e,t,s)=>{t.constructor.createProperty(s,e)})(e,t,s):ne(e,t)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function le(e){return re({...e,state:!0})}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var ce;null===(ce=window.HTMLSlotElement)||void 0===ce||ce.prototype.assignedElements;var de=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,he="[^\\s]+",ue=/\[([^]*?)\]/gm;function pe(e,t){for(var s=[],i=0,a=e.length;i<a;i++)s.push(e[i].substr(0,t));return s}var me=function(e){return function(t,s){var i=s[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return i>-1?i:null}};function ge(e){for(var t=[],s=1;s<arguments.length;s++)t[s-1]=arguments[s];for(var i=0,a=t;i<a.length;i++){var o=a[i];for(var n in o)e[n]=o[n]}return e}var _e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],be=["January","February","March","April","May","June","July","August","September","October","November","December"],fe=pe(be,3),ve={dayNamesShort:pe(_e,3),dayNames:_e,monthNamesShort:fe,monthNames:be,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},ye=ge({},ve),we=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},$e={D:function(e){return String(e.getDate())},DD:function(e){return we(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return we(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return we(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return we(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return we(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return we(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return we(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return we(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return we(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return we(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return we(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+we(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+we(Math.floor(Math.abs(t)/60),2)+":"+we(Math.abs(t)%60,2)}},ke=function(e){return+e-1},xe=[null,"[1-9]\\d?"],Ae=[null,he],Ce=["isPm",he,function(e,t){var s=e.toLowerCase();return s===t.amPm[0]?0:s===t.amPm[1]?1:null}],Se=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var s=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?s:-s}return 0}],Ee=(me("monthNamesShort"),me("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var ze,Oe,Me=function(e,t,s){if(void 0===t&&(t=Ee.default),void 0===s&&(s={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var i=[];t=(t=Ee[t]||t).replace(ue,(function(e,t){return i.push(t),"@@@"}));var a=ge(ge({},ye),s);return(t=t.replace(de,(function(t){return $e[t](e,a)}))).replace(/@@@/g,(function(){return i.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();function Te(e){return e.substr(0,e.indexOf("."))}!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ze||(ze={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Oe||(Oe={}));var je=function(e,t,s,i){i=i||{},s=null==s?{}:s;var a=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return a.detail=s,e.dispatchEvent(a),a},De={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function Pe(e,t){if(e in De)return De[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"hass:bookmark"}}var He={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"},Ne={binary_sensor:function(e){var t=e.state&&"off"===e.state;switch(e.attributes.device_class){case"battery":return t?"hass:battery":"hass:battery-outline";case"cold":return t?"hass:thermometer":"hass:snowflake";case"connectivity":return t?"hass:server-network-off":"hass:server-network";case"door":return t?"hass:door-closed":"hass:door-open";case"garage_door":return t?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return t?"hass:shield-check":"hass:alert";case"heat":return t?"hass:thermometer":"hass:fire";case"light":return t?"hass:brightness-5":"hass:brightness-7";case"lock":return t?"hass:lock":"hass:lock-open";case"moisture":return t?"hass:water-off":"hass:water";case"motion":return t?"hass:walk":"hass:run";case"occupancy":return t?"hass:home-outline":"hass:home";case"opening":return t?"hass:square":"hass:square-outline";case"plug":return t?"hass:power-plug-off":"hass:power-plug";case"presence":return t?"hass:home-outline":"hass:home";case"sound":return t?"hass:music-note-off":"hass:music-note";case"vibration":return t?"hass:crop-portrait":"hass:vibrate";case"window":return t?"hass:window-closed":"hass:window-open";default:return t?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"hass:garage-open":"hass:garage";case"door":return t?"hass:door-open":"hass:door-closed";case"shutter":return t?"hass:window-shutter-open":"hass:window-shutter";case"blind":return t?"hass:blinds-open":"hass:blinds";case"window":return t?"hass:window-open":"hass:window-closed";default:return Pe("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in He)return He[t];if("battery"===t){var s=Number(e.state);if(isNaN(s))return"hass:battery-unknown";var i=10*Math.round(s/10);return i>=100?"hass:battery":i<=0?"hass:battery-alert":"hass:battery-"+i}var a=e.attributes.unit_of_measurement;return"°C"===a||"°F"===a?"hass:thermometer":Pe("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?Pe("input_datetime"):"hass:calendar":"hass:clock"}};const Ue=["1","2","3","4","5","6","7","8","9","","0","clear"];var Re;!function(e){e.Disarmed="disarmed",e.Arming="arming",e.Pending="pending",e.Triggered="triggered",e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedVacation="armed_vacation",e.ArmedCustomBypass="armed_custom_bypass"}(Re||(Re={}));const Le={[Re.ArmedAway]:"hass:shield-lock",[Re.ArmedHome]:"hass:shield-home",[Re.ArmedNight]:"hass:shield-moon",[Re.ArmedVacation]:"hass:shield-airplane",[Re.ArmedCustomBypass]:"hass:security",[Re.Disarmed]:"hass:shield-off",[Re.Arming]:"hass:shield-outline",[Re.Pending]:"hass:shield-outline",[Re.Triggered]:"hass:bell-ring"};var Ye;!function(e){e.ArmAway="arm_away",e.ArmHome="arm_home",e.ArmNight="arm_night",e.ArmVacation="arm_vacation",e.ArmCustomBypass="arm_custom_bypass",e.Disarm="disarm",e.SwitchMode="switch_mode"}(Ye||(Ye={}));const Be={[Ye.ArmAway]:Re.ArmedAway,[Ye.ArmHome]:Re.ArmedHome,[Ye.ArmNight]:Re.ArmedNight,[Ye.ArmVacation]:Re.ArmedVacation,[Ye.ArmCustomBypass]:Re.ArmedCustomBypass,[Ye.Disarm]:Re.Disarmed};var Ie;!function(e){e.Arm="arm",e.Trigger="trigger",e.FailedToArm="failed_to_arm",e.CommandNotAllowed="command_not_allowed",e.NoCodeProvided="no_code_provided",e.InvalidCodeProvided="invalid_code_provided",e.TriggerTimeExpired="trigger_time_expired",e.ReadyToArmModesChanged="ready_to_arm_modes_changed"}(Ie||(Ie={}));const qe=["arming","pending"],Fe={type:"",entity:"",name:"",keep_keypad_visible:!1,use_clear_icon:!1,button_scale_actions:1,button_scale_keypad:1,states:{},show_messages:!0,show_ready_indicator:!0,show_bypassed_sensors:!0},Ve={skip_delay:!1,force:!1};var Ze={heading:"Možnosti aktivace",skip_delay:"Přeskočit čas pro vystup",force:"Bypass otevřených senzorů"},We={keep_keypad_visible:"Zachovat klávesnici vždy viditelnou, i když není vyžadován žádný kód.",button_scale_actions:"Měřítko použité pro změnu velikosti tlačítek akcí.",button_scale_keypad:"Měřítko použité pro změnu velikosti tlačítek klávesnice.",use_clear_icon:"Zobrazit ikonu (namísto textu) na klávesnici pro vymazání zadávaného kódu.",show_messages:"Zobrazit diagnostické zprávy při spuštění alarmu nebo nemožnosti aktivace.",show_ready_indicator:"Zobrazit indikátor připraveno/nepřipraveno na tlačítkách režimu aktivace.",show_bypassed_sensors:"Zobrazit varování při aktivaci alarmu s přemostěnými senzory.",available_actions:"Dostupné akce:",action_dialog:{title:"Upravit zobrazení akce '{action}'",show_button:"Zobrazit tlačítko pro tuto akci",button_label:"Přepsat popisek tlačítka",state_label:"Přepsat popisek stavu"}},Ke={blocking_sensors:"Nelze aktivovat kvůli následujícím senzorům",triggered_sensors:"Alarm byl spuštěn následujícími senzory",bypassed_sensors:"Jsou tam přemostěné senzory"},Je={arm_options:Ze,editor:We,errors:Ke},Ge={heading:"Options for arming",skip_delay:"Skip exit delay",force:"Bypass open sensors"},Qe={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale_actions:"Scaling factor to apply for resizing the action buttons.",button_scale_keypad:"Scaling factor to apply for resizing the keypad buttons.",use_clear_icon:"Show icon (instead of text) in keypad for clearing code input.",show_messages:"Display diagnostic messages when alarm is triggered or cannot be armed.",show_ready_indicator:"Show ready/not ready indicator on arm mode buttons.",show_bypassed_sensors:"Show warning message when alarm is armed with bypassed sensors.",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",show_button:"Show button for this action",button_label:"Override button label",state_label:"Override state label"}},Xe={blocking_sensors:"Could not arm due to the following sensors",triggered_sensors:"Alarm was triggered by the following sensors",bypassed_sensors:"There are bypassed sensors"},et={arm_options:Ge,editor:Qe,errors:Xe},tt={heading:"Opciones de armado",skip_delay:"Omitir el retardo de salida",force:"Pasar por alto los sensores abiertos"},st={keep_keypad_visible:"Mantener el teclado siempre visible, también cuando no se requiere ninguna entrada de código.",button_scale_actions:"Factor de escalado para cambiar el tamaño de los botones de acción.",button_scale_keypad:"Factor de escalado para cambiar el tamaño de los botones del teclado.",use_clear_icon:"Mostrar icono (en lugar de texto) en el teclado para borrar la entrada de código.",show_messages:"Mostrar mensajes de diagnóstico cuando se activa la alarma o no se puede activar.",show_ready_indicator:"Mostrar indicador listo/no listo en los botones de modo armado.",show_bypassed_sensors:"Mostrar advertencia cuando la alarma está activada con sensores omitidos.",available_actions:"Acciones disponibles:",action_dialog:{title:"Personalizar la visualización de la acción '{action}'",show_button:"mostrar botón para esta acción",button_label:"Sobrescribir el texto del botón",state_label:"Sobrescribir el texto de estado"}},it={blocking_sensors:"No se pudo armar debido a los siguientes sensores",triggered_sensors:"La alarma fue disparada por los siguientes sensores",bypassed_sensors:"Hay sensores omitidos"},at={arm_options:tt,editor:st,errors:it},ot={heading:"Options pour l'armement",skip_delay:"Ignorer le délai de sortie",force:"Bypasser les capteurs ouverts"},nt={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale_actions:"Facteur d'échelle à appliquer pour le redimensionnement des boutons des actions.",button_scale_keypad:"Facteur d'échelle à appliquer pour le redimensionnement des boutons du clavier.",use_clear_icon:"Afficher l'icône (au lieu du texte) sur le clavier pour effacer la saisie du code.",show_messages:"Afficher les messages de diagnostic lorsque l'alarme est déclenchée ou ne peut pas être armée.",show_ready_indicator:"Afficher l'indicateur prêt/pas prêt sur les boutons de mode d'armement.",show_bypassed_sensors:"Afficher un avertissement lorsque l'alarme est armée avec des capteurs ignorés.",available_actions:"Actions disponibles:",action_dialog:{title:"Personnaliser l'affichage de l'action '{action}'",show_button:"Afficher le bouton pour cette action",button_label:"Remplacer le libellé du bouton",state_label:"Remplacer l'étiquette d'état"}},rt={blocking_sensors:"Impossible d'armer en raison du(es) capteur(s) suivant(s)",triggered_sensors:"L'alarme a été déclenchée par le(s) capteur(s) suivant(s)",bypassed_sensors:"Il y a des capteurs ignorés"},lt={arm_options:ot,editor:nt,errors:rt},ct={heading:"Opzioni di inserimento",skip_delay:"Ignorare il ritardo di uscita",force:"Ignorare i sensori aperti"},dt={keep_keypad_visible:"Mantenere la tastiera sempre visibile, anche quando nessun codice è richiesto.",button_scale_actions:"Fattore di scala da applicare per ridimensionare i pulsanti di azione.",button_scale_keypad:"Fattore di scala da applicare per ridimensionare i pulsanti della tastiera.",use_clear_icon:"Mostrare l'icona (invece del testo) sulla tastiera per cancellare il codice digitato.",show_messages:"Mostrare messaggi diagnostici quando l'allarme viene attivato o non può essere inserito.",show_ready_indicator:"Mostra l'indicatore pronto/non pronto sui pulsanti della modalità di inserimento.",show_bypassed_sensors:"Mostra avviso quando l'allarme è armato con sensori esclusi.",available_actions:"Azioni disponibili:",action_dialog:{title:"Personalizzare la visualizzazione dell'azione '{action}'",show_button:"Mostra il pulsante per questa azione",button_label:"Sovrascrivere l'etichetta del pulsante",state_label:"Sovrascrivere l'etichetta di stato"}},ht={blocking_sensors:"Impossibile inserire l'allarme a causa dei seguenti sensori",triggered_sensors:"L'allarme è stato attivato dai seguenti sensori",bypassed_sensors:"Sono presenti sensori esclusi"},ut={arm_options:ct,editor:dt,errors:ht},pt={heading:"Opties voor inschakelen",skip_delay:"Sla vertraging over",force:"Negeer open sensoren"},mt={keep_keypad_visible:"Houd het keypad altijd zichtbaar, ook wanneer er geen code vereist is.",button_scale_actions:"Schaalfactor actieknoppen",button_scale_keypad:"Schaalfactor keypadknoppen",use_clear_icon:"Toon pictogram (in plaats van tekst) in keypad om code-invoer te wissen.",show_messages:"Toon diagnostische berichten wanneer het alarm wordt geactiveerd of niet kan worden ingeschakeld.",show_ready_indicator:"Toon gereed/niet gereed-indicator op inschakelmodusknoppen.",show_bypassed_sensors:"Toon melding wanneer het alarm is ingeschakeld met omzeilde sensoren.",available_actions:"Beschikbare acties:",action_dialog:{title:"Weergave van actie '{action}' aanpassen",show_button:"Toon knop voor deze actie",button_label:"Knoplabel overschrijven",state_label:"Statuslabel overschrijven"}},gt={blocking_sensors:"Kon niet inschakelen vanwege de volgende sensoren",triggered_sensors:"Alarm werd geactiveerd door de volgende sensoren",bypassed_sensors:"Er zijn omzeilde sensoren"},_t={arm_options:pt,editor:mt,errors:gt},bt={heading:"警戒选项",skip_delay:"跳过离开延迟",force:"绕过开放的传感器"},ft={keep_keypad_visible:"保持小键盘总是可见，即使不需要输入密码",button_scale_actions:"调整动作按键大小的缩放系数",button_scale_keypad:"调整小键盘按键大小的缩放系数",use_clear_icon:"在小键盘上显示图标（而不是文字），用于清除密码输入。",show_messages:"当警报被触发或无法警戒时，显示诊断信息。",show_ready_indicator:"在手臂模式按钮上显示就绪/未就绪指示器。",show_bypassed_sensors:"当警报配备旁路传感器时显示警告消息。",available_actions:"可用动作：",action_dialog:{title:"自定义动作'{action}'的显示",show_button:"显示此操作的按钮",button_label:"覆盖按钮标签",state_label:"覆盖状态标签"}},vt={blocking_sensors:"由于以下传感器而无法警戒",triggered_sensors:"警报是由以下传感器触发的",bypassed_sensors:"有绕过的传感器"},yt={arm_options:bt,editor:ft,errors:vt},wt={cs:Object.freeze({__proto__:null,arm_options:Ze,editor:We,errors:Ke,default:Je}),en:Object.freeze({__proto__:null,arm_options:Ge,editor:Qe,errors:Xe,default:et}),es:Object.freeze({__proto__:null,arm_options:tt,editor:st,errors:it,default:at}),fr:Object.freeze({__proto__:null,arm_options:ot,editor:nt,errors:rt,default:lt}),it:Object.freeze({__proto__:null,arm_options:ct,editor:dt,errors:ht,default:ut}),nl:Object.freeze({__proto__:null,arm_options:pt,editor:mt,errors:gt,default:_t}),"zh-Hans":Object.freeze({__proto__:null,arm_options:bt,editor:ft,errors:vt,default:yt})};function $t(e,t,s="",i=""){const a=t.replace(/['"]+/g,"").replace("-","_");var o;try{o=e.split(".").reduce((e,t)=>e[t],wt[a])}catch(t){o=e.split(".").reduce((e,t)=>e[t],wt.en)}if(void 0===o&&(o=e.split(".").reduce((e,t)=>e[t],wt.en)),""!==s&&""!==i){Array.isArray(s)||(s=[s]),Array.isArray(i)||(i=[i]);for(let e=0;e<s.length;e++)o=o.replace(s[e],i[e])}return o}function kt(e){return null!=e}function xt(e){switch(typeof e){case"object":return 0==Object.keys(e).length;case"string":return 0==String(e).length;default:return!kt(e)}}const At=(e,t)=>{let s={hide:!1,button_label:"",state_label:""};return(t.states||{}).hasOwnProperty(e)&&(s=Object.assign(Object.assign({},s),t.states[e])),s},Ct=e=>{if(!e)return[];const t=e.attributes.supported_features||0;let s=[];return 2&t&&s.push(Ye.ArmAway),1&t&&s.push(Ye.ArmHome),4&t&&s.push(Ye.ArmNight),32&t&&s.push(Ye.ArmVacation),16&t&&s.push(Ye.ArmCustomBypass),s},St=(e,t,s)=>{const i=Te(e.entity_id),a=e.attributes.device_class,o=e.state;if(Object.values(Re).includes(o)&&s){const e=At(o,s);if(!xt(e.state_label))return e.state_label}let n="";return a&&(n=t(`component.${i}.entity_component.${a}.state.${e.state}`)),n||(n=t(`component.${i}.entity_component._.state.${e.state}`)),n},Et=e=>null!==e.attributes.code_format,zt=e=>e.callWS({type:"alarmo/entities"}),Ot=e=>e.callWS({type:"alarmo/config"});let Mt=class extends ie{constructor(){super(...arguments),this._entities=null,this._editAction=null}async firstUpdated(){zt(this.hass).then(e=>{this._entities=e.map(e=>e.entity_id)}).catch(e=>{}),this._alarmoConfig=await Ot(this.hass)}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),this._config=Object.assign(Object.assign({},Fe),e)}render(){var e,t,s;if(!this._config||!this.hass||!this._entities)return U``;if(!this._entities.length)return U`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const i=this._config.entity?this.hass.states[this._config.entity]:void 0,a="number"===(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)&&(this._alarmoConfig.code_arm_required||this._alarmoConfig.code_disarm_required);if(null!==this._editAction){const e=At(Be[this._editAction],this._config);return U`
      <div class="header">
        <div class="back-title">
          <ha-icon-button
            .label=${this.hass.localize("ui.common.back")}
            .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
            @click=${this._goBack}
          ></ha-icon-button>
          <span slot="title">${$t("editor.action_dialog.title",this.hass.language,"{action}",this.hass.localize("ui.card.alarm_control_panel."+this._editAction))}</span>
        </div>
      </div>

      <div class="checkbox-item">
        <ha-checkbox
          ?checked=${!e.hide}
          ?disabled=${!e.hide&&1==Ct(i).map(e=>Be[e]).filter(e=>!At(e,this._config).hide).length||this._editAction==Ye.Disarm}
          @change=${e=>this._updateStateConfig(Be[this._editAction],e.target.checked?{hide:void 0}:{hide:!0})}
        >
        </ha-checkbox>
        <span
          @click=${e=>{const t=e.target.previousElementSibling;t.click(),t.blur()}}
        >
          ${$t("editor.action_dialog.show_button",this.hass.language)}
        </span>
      </div>


      <div class="grid">

        <ha-textfield
          label="${$t("editor.action_dialog.button_label",this.hass.language)}"
          .value="${e.button_label||""}"
          placeholder="${this.hass.localize("ui.card.alarm_control_panel."+this._editAction)}"
          ?disabled=${e.hide}
          @input=${e=>this._updateStateConfig(Be[this._editAction],{button_label:String(e.target.value).trim()})}
        ></ha-textfield>

        <ha-textfield
          label="${$t("editor.action_dialog.state_label",this.hass.language)}"
          .value="${e.state_label||""}"
          placeholder="${this.hass.localize("component.alarm_control_panel.entity_component._.state."+Be[this._editAction])}"
          @input=${e=>this._updateStateConfig(Be[this._editAction],{state_label:String(e.target.value).trim()})}
        ></ha-textfield>

      </div>

      `}return U`
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

        ${i?U`
              <div class="config-item">
                <span>${$t("editor.available_actions",this.hass.language)}</span>
              </div>
              <div class="config-row checkbox-list">

                ${[...Ct(i),Ye.Disarm].map(e=>{const t=Ct(i).map(e=>Be[e]),s=At(Be[e],this._config).hide;return U`
                    <div class="checkbox-item ${s?"disabled":""}">
                      <ha-checkbox
                        ?checked=${!s}
                        ?disabled=${!s&&1==t.filter(e=>!At(e,this._config).hide).length||e==Ye.Disarm}
                        @change=${t=>this._updateStateConfig(Be[e],t.target.checked?{hide:void 0}:{hide:!0})}
                      >
                      </ha-checkbox>
                      <span
                        @click=${e=>{const t=e.target.previousElementSibling;t.click(),t.blur()}}
                      >
                        ${this.hass.localize("ui.card.alarm_control_panel."+e)}
                      </span>
                      <ha-icon-button
                        .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
                        style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
                        ?disabled=${At(Be[e],this._config).hide}
                        @click=${()=>this._editActionClick(e)}
                      >
                      </ha-icon-button>
                    </div>

                  `})}
              </div>
            `:""}

        <div class="grid">
          <ha-formfield .label=${$t("editor.button_scale_actions",this.hass.language)}>
            <ha-slider
              value=${this._config.button_scale_actions||1}
              @change=${e=>this._updateConfig("button_scale_actions",Number(e.target.value))}
              min="${1}"
              max="${2.5}"
              step="0.1"
              pin
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${$t("editor.button_scale_keypad",this.hass.language)}>
            <ha-slider
              value=${this._config.button_scale_keypad||1}
              @change=${e=>this._updateConfig("button_scale_keypad",Number(e.target.value))}
              min="${1}"
              max="${2.5}"
              step="0.1"
              pin
              ?disabled=${!i||!a}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${$t("editor.use_clear_icon",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_clear_icon}
              @change=${e=>this._updateConfig("use_clear_icon",e.target.checked)}
              ?disabled=${!i||!a}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${$t("editor.show_messages",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_messages||!kt(this._config.show_messages)}
              @change=${e=>this._updateConfig("show_messages",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${$t("editor.keep_keypad_visible",this.hass.language)}>
            <ha-switch
              .checked=${this._config.keep_keypad_visible}
              @change=${e=>this._updateConfig("keep_keypad_visible",e.target.checked)}
              ?disabled=${!i||!a||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_arm_required)==(null===(s=this._alarmoConfig)||void 0===s?void 0:s.code_disarm_required)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${$t("editor.show_ready_indicator",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_ready_indicator}
              @change=${e=>this._updateConfig("show_ready_indicator",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${$t("editor.show_bypassed_sensors",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_bypassed_sensors}
              @change=${e=>this._updateConfig("show_bypassed_sensors",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield
          ></ha-formfield>
        </div>
      </div>
    `}_updateConfig(e,t){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[e]:t}),"entity"==e){const e=this._config.entity?this.hass.states[this._config.entity]:void 0;e&&e.attributes.code_arm_required!=e.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}je(this,"config-changed",{config:this._config})}}_updateStateConfig(e,t){var s;const i=e=>function(e,t){return e?Object.entries(e).filter(([e])=>t.includes(e)).reduce((e,[t,s])=>Object.assign(e,{[t]:s}),{}):{}}(e,Object.keys(e).filter(t=>!xt(e[t])));let a=(null===(s=this._config)||void 0===s?void 0:s.states)||{};const o=i(Object.assign(Object.assign({},a[e]),t));a=i(Object.assign(Object.assign({},a),{[e]:o})),this._updateConfig("states",a)}_editActionClick(e){this._editAction=e}_goBack(){this._editAction=null}static get styles(){return r`
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
    `}};t([re({attribute:!1})],Mt.prototype,"hass",void 0),t([le()],Mt.prototype,"_config",void 0),t([le()],Mt.prototype,"_alarmoConfig",void 0),t([le()],Mt.prototype,"_entities",void 0),t([le()],Mt.prototype,"_editAction",void 0),Mt=t([oe("alarmo-card-editor")],Mt);var Tt=Object.freeze({__proto__:null,get AlarmoCardEditor(){return Mt}});class jt extends ie{constructor(){super(...arguments),this.duration=0,this.datetime=null,this.timer=0}shouldUpdate(e){if(!e.size)return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language)return!0;if(t.states[this.entity].state!==this.hass.states[this.entity].state||t.states[this.entity].attributes.delay!==this.hass.states[this.entity].attributes.delay){const e=t.states[this.entity].state,s=this.hass.states[this.entity].state;return qe.includes(s)?this.startTimer():qe.includes(e)&&this.stopTimer(),!0}return!1}firstUpdated(){const e=this.hass.states[this.entity].state;qe.includes(e)&&this.startTimer()}async startTimer(){var e,t;clearInterval(this.timer),(e=this.hass,t=this.entity,e.callWS({type:"alarmo/countdown",entity_id:t})).then(e=>{this.duration=e.delay,this.datetime=new Date((new Date).getTime()+1e3*e.remaining)}).catch(e=>{}),this.timer=window.setInterval(()=>{this.requestUpdate()},1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const e=(this.datetime.getTime()-(new Date).getTime())/1e3;return e<0?(clearInterval(this.timer),0):e}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(e){return this.datetime&&this.duration?U`
        ${Math.max(Math.round(this.getRemaining()),0)}
      `:U`
        <ha-icon .icon=${Le[e]}></ha-icon>
      `}render(){let e=45,t=2*Math.PI*e;const s=this.hass.states[this.entity],i=this.datetime&&this.duration;return U`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="track ${s.state.split("_").shift()} ${i?"timer":""}">
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
      <div class="overlay ${s.state.split("_").shift()} ${i?"timer":""}">
        <div class="value">
          ${this._stateValue(s.state)}
        </div>
      </div>
    `}static get styles(){return r`
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
      .disarmed, .armed {
        animation: none;
      }
      .triggered, .arming, .pending {
        animation: pulse 1s infinite;
      }
      .arming.timer, .pending.timer {
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
    `}}t([re()],jt.prototype,"hass",void 0),t([re()],jt.prototype,"entity",void 0),customElements.define("alarmo-state-badge",jt);class Dt extends ie{shouldUpdate(e){const t=e.get("hass");return!t||!(!this.entity||t.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return U``;const e=this.entity in this.hass.states;let t=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(t=Object.assign(Object.assign({},t),{state:this.state}));const s=e?function(e){if(!e)return"hass:bookmark";if(e.attributes.icon)return e.attributes.icon;var t=Te(e.entity_id);return t in Ne?Ne[t](e):Pe(t,e.state)}(t):"mdi:help-circle-outline",i=e?St(t,this.hass.localize):this.hass.localize("state.default.unavailable",this.hass.locale||{language:this.hass.language,number_format:ze.language}),a=e?t.attributes.friendly_name||function(e){return e.substr(e.indexOf(".")+1)}(t.entity_id):this.entity;let o=!!this.state||"on"==t.state;return U`
      <div class="badge-container" @click=${()=>je(this,"hass-more-info",{entityId:this.entity})}>
        <div class="label-badge ${o?"active":""}" id="badge">
          <div class="value">
            <ha-icon .icon=${s}></ha-icon>
            <div class="label">
              <span>${i}</span>
            </div>
          </div>
        </div>
        <div class="title">${a}</div>
      </div>
    `}static get styles(){return r`
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
    `}}t([re()],Dt.prototype,"hass",void 0),t([re()],Dt.prototype,"entity",void 0),t([re()],Dt.prototype,"state",void 0),customElements.define("alarmo-sensor-badge",Dt);class Pt extends ie{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return U`
      ${this.scaled?U`
            <button ?disabled=${this.disabled}>
              <slot></slot>
            </button>
          `:U`
            <mwc-button ?disabled=${this.disabled} ?outlined=${!this.disabled}>
              <slot></slot>
            </mwc-button>
          `}
    `}handleFocus(e){e.target.blur()}static get styles(){return r`
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
    `}}t([re({type:Boolean})],Pt.prototype,"disabled",void 0),t([re({type:Boolean})],Pt.prototype,"scaled",void 0),customElements.define("alarmo-button",Pt);const Ht=e=>{class s extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then(e=>e()):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([re({attribute:!1})],s.prototype,"hass",void 0),s};e.AlarmoCard=class extends(Ht(ie)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=void 0,this.armOptions=Object.assign({},Ve),this.readyForArmModes=null,this.backendConnection=null,this.showBypassedSensors=!1,this.subscribedEntities=[],this._codeClearTimer=0}static async getConfigElement(){return await Promise.resolve().then((function(){return Tt})),document.createElement("alarmo-card-editor")}static async getStubConfig(e){let t=Object.keys(e.states).find(e=>"alarm_control_panel"==Te(e));return await zt(e).then(e=>{const s=e.sort((e,t)=>Number(e.area_id)-Number(t.area_id));s.length&&(t=s[0].entity_id)}),{type:"custom:alarmo-card",entity:t}}async getCardSize(){var e;if(!this._config||!this.hass)return 9;const t=this.hass.states[this._config.entity];return t&&"number"===(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)&&(Et(t)||this._config.keep_keypad_visible)?9:4}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),(e=>{if(!e||!e.entity||"alarm_control_panel"!==Te(e.entity))throw new Error("Invalid configuration provided for entity");if(kt(e.button_scale_keypad)&&("number"!=typeof e.button_scale_keypad||e.button_scale_keypad<1||e.button_scale_keypad>2.5))throw new Error("Invalid configuration provided for button_scale_keypad");if(kt(e.button_scale_actions)&&("number"!=typeof e.button_scale_actions||e.button_scale_actions<1||e.button_scale_actions>2.5))throw new Error("Invalid configuration provided for button_scale_actions")})(e),this._config=Object.assign(Object.assign({},Fe),e)}hassSubscribe(){return[this.hass.connection.subscribeMessage(e=>this._fetchData(e),{type:"alarmo_updated"})]}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement(),await this.loadBackendConfig()}async loadBackendConfig(){this.backendConnection||zt(this.hass).then(e=>{let t=e.find(e=>e.entity_id==this._config.entity);t&&(this.area_id=t.area_id?t.area_id:null)}).then(()=>Ot(this.hass)).then(e=>{this._alarmoConfig=e,this.backendConnection=!0}).then(()=>{return e=this.hass,t=this._config.entity,e.callWS({type:"alarmo/ready_to_arm_modes",entity_id:t});var e,t}).then(e=>{this.readyForArmModes=e.modes}).catch(e=>{this.backendConnection=!1})}async _fetchData(e){if(e.data.area_id===this.area_id)switch(e.data.event){case Ie.Arm:this._clearCode();break;case Ie.Trigger:break;case Ie.InvalidCodeProvided:case Ie.NoCodeProvided:this._showCodeError(),this.subscribedEntities=[];break;case Ie.FailedToArm:this.warning="blocking_sensors",this._clearCode();break;case Ie.CommandNotAllowed:this._clearCode();break;case Ie.TriggerTimeExpired:break;case Ie.ReadyToArmModesChanged:this.readyForArmModes=e.data.modes}}shouldUpdate(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language||t.config.state!==this.hass.config.state)return!0;if(t.states[this._config.entity]!==this.hass.states[this._config.entity]){const e=t.states[this._config.entity],s=this.hass.states[this._config.entity];return!1===this.backendConnection&&(async()=>{await this.loadBackendConfig()})(),this.processStateUpdate(e,s),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some(e=>t.states[e]!==this.hass.states[e]))}processStateUpdate(e,t){t.state!=e.state&&(this.subscribedEntities=[]),(t.state==Re.Disarmed||t.last_changed!==e.last_changed)&&this._clearCode()}render(){var e,t;if(!this._config||!this.hass||null===this.backendConnection)return U``;const s=this.hass.states[this._config.entity];return s?!1===this.backendConnection?U`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `:U`
      <ha-card>
        ${s.state===Re.Disarmed?U`
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
                    ${$t("arm_options.heading",this.hass.language)}
                  </span>
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <ha-icon
                    slot="graphic"
                    icon="${this.armOptions.skip_delay?"mdi:check":""}"
                    @click=${e=>{var t;null===(t=e.target.parentElement)||void 0===t||t.click(),e.stopPropagation()}}
                  ></ha-icon>
                  ${$t("arm_options.skip_delay",this.hass.language)}
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <ha-icon
                    slot="graphic"
                    icon="${this.armOptions.force?"mdi:check":""}"
                    @click=${e=>{var t;null===(t=e.target.parentElement)||void 0===t||t.click(),e.stopPropagation()}}
                  ></ha-icon>
                  ${$t("arm_options.force",this.hass.language)}
                </mwc-list-item>
              </ha-button-menu>
            `:""}

        <div class="header">
          <div class="icon">
            <alarmo-state-badge
              .hass=${this.hass}
              .entity=${this._config.entity}
              @click=${()=>je(this,"hass-more-info",{entityId:this._config.entity})}
              style="--alarm-state-color: ${(e=>{if(!e||!e.state)return"var(--state-unavailable-color)";const t=e.state;return t==Re.Disarmed?"var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)))":Object.values(Re).includes(t)?`var(--state-alarm_control_panel-${t}-color, var(--state-alarm_control_panel-active-color, var(--state-active-color)))`:"var(--disabled-color, var(--state-inactive-color))"})(s)}"
            >
            </alarmo-state-badge>
          </div>
          <div class="summary">
            <div class="name">
              ${((e,t)=>xt(t.name)?e.attributes.friendly_name:t.name)(s,this._config)}
            </div>
            <div class="state">
              ${St(s,this.hass.localize,this._config)}
            </div>
          </div>
        </div>

        ${this._renderWarning()}

        <div id="armActions" class="actions">
          ${this._renderActions()}
        </div>

        ${Et(s)||this._config.keep_keypad_visible?U`
              <ha-textfield
                .value=${this._input}
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                ?disabled=${!Et(s)}
                @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputmode=${"number"===(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)?"numeric":"text"}
              ></ha-textfield>
            `:U``}
        ${!Et(s)&&!this._config.keep_keypad_visible||"number"!==(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)?U``:U`
              <div id="keypad" style="max-width: ${300*this._config.button_scale_keypad}px">
                ${Ue.map(e=>""===e?U`
                        <alarmo-button
                          disabled
                          style="--content-scale: ${this._config.button_scale_keypad}"
                          ?scaled=${1!=this._config.button_scale_keypad}
                        ></alarmo-button>
                      `:U`
                        <alarmo-button
                          .value="${e}"
                          @click=${this._handlePadClick}
                          ?disabled=${!Et(s)}
                          class="${"clear"!==e?"numberKey":""}"
                          style="--content-scale: ${this._config.button_scale_keypad}"
                          ?scaled=${1!=this._config.button_scale_keypad}
                        >
                          ${"clear"===e?this._config.use_clear_icon?U`<ha-icon icon="hass:backspace-outline"></ha-icon>`:U`<span>${this.hass.localize("ui.card.alarm_control_panel.clear_code")}</span>`:U`<span>${e}</span>`}
                        </alarmo-button>
                      `)}
              </div>
            `}
      </ha-card>
    `:U`
        <hui-warning>
          ${"NOT_RUNNING"!==this.hass.config.state?this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]"):this.hass.localize("ui.panel.lovelace.warning.starting")}
        </hui-warning>
      `}_renderActions(){if(!this.hass||!this._config)return U``;const e=this.hass.states[this._config.entity],t=e.state===Re.Disarmed?Ct(e).filter(e=>!At(Be[e],this._config).hide):[Ye.Disarm],s=this._config.show_ready_indicator;return t.map(e=>{const t=At(Be[e],this._config),i=Array.isArray(this.readyForArmModes)&&this.readyForArmModes.includes(Be[e]);return U`
        <alarmo-button
          @click=${t=>this._handleActionClick(t,e)}
          style="--content-scale: ${this._config.button_scale_actions}"
          ?scaled=${1!=this._config.button_scale_actions}
        >
          ${s&&e!=Ye.Disarm?U`
              <ha-icon
                icon="mdi:circle-medium"
                style="${null===this.readyForArmModes?"color: var(--label-badge-grey)":i?"color: var(--success-color)":"color: var(--error-color)"}"
                class="leading"
              ></ha-icon>`:""}
          ${xt(t.button_label)?U`<span>${this.hass.localize("ui.card.alarm_control_panel."+e)}</span>`:U`<span>${t.button_label}</span>`}
        </alarmo-button>
      `})}_renderWarning(){var e;if(!this.hass||!this._config||!this._config.show_messages)return U``;const t=this.hass.states[this._config.entity];return t.attributes.open_sensors&&t.state==Re.Triggered||"blocking_sensors"==this.warning&&t.attributes.open_sensors?U`
        <div class="messagebox">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${"blocking_sensors"==this.warning?$t("errors.blocking_sensors",this.hass.language):$t("errors.triggered_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${Object.entries(t.attributes.open_sensors).map(([e])=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),U`
                  <div class="badge">
                    <alarmo-sensor-badge
                      .hass=${this.hass}
                      .entity=${e}
                    > </alarmo-sensor-badge>
                  </div>
                `))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:t.state.startsWith("armed_")&&(null===(e=t.attributes.bypassed_sensors)||void 0===e?void 0:e.length)&&this._config.show_bypassed_sensors?U`
        <div class="messagebox warning">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${$t("errors.bypassed_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${t.attributes.bypassed_sensors.map(e=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),U`
                  <div class="badge">
                    <alarmo-sensor-badge
                      .hass=${this.hass}
                      .entity=${e}
                    > </alarmo-sensor-badge>
                  </div>
                `))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>`:U``}_handlePadClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._input="clear"===t?"":this._input+t}_handleActionClick(e,t){e.target.blur(),this._clearCodeError(),t==Ye.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._config.entity,code:this._input}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this.armOptions),{entity_id:this._config.entity,mode:Be[t],code:this._input})),this.warning="",this.armOptions=Object.assign({},Ve)}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&(t.classList.remove("error"),t.classList.add("error"),t.invalid=!0)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout(()=>{this._clearCode()},12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_toggleArmOptions(e){switch(e.detail.index){case 0:this.armOptions=Object.assign(Object.assign({},this.armOptions),{skip_delay:!this.armOptions.skip_delay});break;case 1:this.armOptions=Object.assign(Object.assign({},this.armOptions),{force:!this.armOptions.force})}e.preventDefault();const t=e.target;setTimeout(()=>{t.firstElementChild.blur()},50)}static get styles(){return r`
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
    `}},t([re({attribute:!1})],e.AlarmoCard.prototype,"hass",void 0),t([le()],e.AlarmoCard.prototype,"_config",void 0),t([le()],e.AlarmoCard.prototype,"_alarmoConfig",void 0),t([le()],e.AlarmoCard.prototype,"_input",void 0),t([le()],e.AlarmoCard.prototype,"warning",void 0),t([le()],e.AlarmoCard.prototype,"area_id",void 0),t([le()],e.AlarmoCard.prototype,"armOptions",void 0),t([le()],e.AlarmoCard.prototype,"readyForArmModes",void 0),t([le()],e.AlarmoCard.prototype,"backendConnection",void 0),t([le()],e.AlarmoCard.prototype,"showBypassedSensors",void 0),e.AlarmoCard=t([oe("alarmo-card")],e.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card",name:"Alarmo Card",description:"Card for operating Alarmo through Lovelace.",preview:!0}),console.info("%c  ALARMO-CARD  \n%c  Version: "+"v1.5.2".padEnd(7," "),"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray")}({});
