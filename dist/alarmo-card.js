var AlarmoCard=function(e){"use strict";function t(e,t,i,s){var a,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;let r=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(t,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new r(i,e,a)},l=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,a))(t)})(e):e,{is:d,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:_}=Object,g=globalThis,m=g.trustedTypes,b=m?m.emptyScript:"",v=g.reactiveElementPolyfillSupport,f=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},$=(e,t)=>!d(e,t),w={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&c(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:a}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const o=s?.call(this);a?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const e=this.properties,t=[...p(e),...u(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(s)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const s of t){const t=document.createElement("style"),a=i.litNonce;void 0!==a&&t.setAttribute("nonce",a),t.textContent=s.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=s;const o=a.fromAttribute(t,e.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(e,t,i,s=!1,a){if(void 0!==e){const o=this.constructor;if(!1===s&&(a=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??$)(a,t)||i.useDefault&&i.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:a},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==a||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[f("elementProperties")]=new Map,k[f("finalized")]=new Map,v?.({ReactiveElement:k}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const x=globalThis,A=e=>e,C=x.trustedTypes,z=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,O="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+S,j=`<${E}>`,T=document,M=()=>T.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,N="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,I=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,q=/"/g,B=/^(?:script|style|textarea|title)$/i,V=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),F=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),W=new WeakMap,G=T.createTreeWalker(T,129);function K(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,s=[];let a,o=2===t?"<svg>":3===t?"<math>":"",r=D;for(let t=0;t<i;t++){const i=e[t];let n,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===D?"!--"===l[1]?r=H:void 0!==l[1]?r=R:void 0!==l[2]?(B.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=I):void 0!==l[3]&&(r=I):r===I?">"===l[0]?(r=a??D,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,n=l[1],r=void 0===l[3]?I:'"'===l[3]?q:U):r===q||r===U?r=I:r===H||r===R?r=D:(r=I,a=void 0);const h=r===I&&e[t+1].startsWith("/>")?" ":"";o+=r===D?i+j:d>=0?(s.push(n),i.slice(0,d)+O+i.slice(d)+S+h):i+S+(-2===d?t:h)}return[K(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class Y{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let a=0,o=0;const r=e.length-1,n=this.parts,[l,d]=J(e,t);if(this.el=Y.createElement(l,i),G.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=G.nextNode())&&n.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(O)){const t=d[o++],i=s.getAttribute(e).split(S),r=/([.?@])?(.*)/.exec(t);n.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?ie:"?"===r[1]?se:"@"===r[1]?ae:te}),s.removeAttribute(e)}else e.startsWith(S)&&(n.push({type:6,index:a}),s.removeAttribute(e));if(B.test(s.tagName)){const e=s.textContent.split(S),t=e.length-1;if(t>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],M()),G.nextNode(),n.push({type:2,index:++a});s.append(e[t],M())}}}else if(8===s.nodeType)if(s.data===E)n.push({type:2,index:a});else{let e=-1;for(;-1!==(e=s.data.indexOf(S,e+1));)n.push({type:7,index:a}),e+=S.length-1}a++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function Q(e,t,i=e,s){if(t===F)return t;let a=void 0!==s?i._$Co?.[s]:i._$Cl;const o=P(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(e),a._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=a:i._$Cl=a),void 0!==a&&(t=Q(e,a._$AS(e,t.values),a,s)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??T).importNode(t,!0);G.currentNode=s;let a=G.nextNode(),o=0,r=0,n=i[0];for(;void 0!==n;){if(o===n.index){let t;2===n.type?t=new ee(a,a.nextSibling,this,e):1===n.type?t=new n.ctor(a,n.name,n.strings,this,e):6===n.type&&(t=new oe(a,this,e)),this._$AV.push(t),n=i[++r]}o!==n?.index&&(a=G.nextNode(),o++)}return G.currentNode=T,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),P(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Z&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Y.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new X(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new Y(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const a of e)s===t.length?t.push(i=new ee(this.O(M()),this.O(M()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,a){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(e,t=this,i,s){const a=this.strings;let o=!1;if(void 0===a)e=Q(this,e,t,0),o=!P(e)||e!==this._$AH&&e!==F,o&&(this._$AH=e);else{const s=e;let r,n;for(e=a[0],r=0;r<a.length-1;r++)n=Q(this,s[i+r],t,r),n===F&&(n=this._$AH[r]),o||=!P(n)||n!==this._$AH[r],n===Z?e=Z:e!==Z&&(e+=(n??"")+a[r+1]),this._$AH[r]=n}o&&!s&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}}class se extends te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}}class ae extends te{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??Z)===F)return;const i=this._$AH,s=e===Z&&i!==Z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==Z&&(i===Z||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const re=x.litHtmlPolyfillSupport;re?.(Y,ee),(x.litHtmlVersions??=[]).push("3.3.3");const ne=globalThis;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class le extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let a=s._$litPart$;if(void 0===a){const e=i?.renderBefore??null;s._$litPart$=a=new ee(t.insertBefore(M(),e),e,void 0,i??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}le._$litElement$=!0,le.finalized=!0,ne.litElementHydrateSupport?.({LitElement:le});const de=ne.litElementPolyfillSupport;de?.({LitElement:le}),(ne.litElementVersions??=[]).push("4.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const ce=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},he={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},pe=(e=he,t,i)=>{const{kind:s,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,a,e,!0,i)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const a=this[s];t.call(this,i),this.requestUpdate(s,a,e,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function ue(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function _e(e){return ue({...e,state:!0,attribute:!1})}const ge="number";var me;!function(e){e.Disarmed="disarmed",e.Arming="arming",e.Pending="pending",e.Triggered="triggered",e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedVacation="armed_vacation",e.ArmedCustomBypass="armed_custom_bypass"}(me||(me={}));const be={[me.ArmedAway]:"hass:shield-lock",[me.ArmedHome]:"hass:shield-home",[me.ArmedNight]:"hass:shield-moon",[me.ArmedVacation]:"hass:shield-airplane",[me.ArmedCustomBypass]:"hass:security",[me.Disarmed]:"hass:shield-off",[me.Arming]:"hass:shield-outline",[me.Pending]:"hass:shield-outline",[me.Triggered]:"hass:bell-ring"};var ve;!function(e){e.ArmAway="arm_away",e.ArmHome="arm_home",e.ArmNight="arm_night",e.ArmVacation="arm_vacation",e.ArmCustomBypass="arm_custom_bypass",e.Disarm="disarm"}(ve||(ve={}));const fe={[ve.ArmAway]:"mdi:lock",[ve.ArmHome]:"mdi:home",[ve.ArmNight]:"mdi:moon-waning-crescent",[ve.ArmVacation]:"mdi:airplane",[ve.ArmCustomBypass]:"mdi:shield",[ve.Disarm]:"mdi:shield-off"},ye={[ve.ArmAway]:me.ArmedAway,[ve.ArmHome]:me.ArmedHome,[ve.ArmNight]:me.ArmedNight,[ve.ArmVacation]:me.ArmedVacation,[ve.ArmCustomBypass]:me.ArmedCustomBypass,[ve.Disarm]:me.Disarmed};var $e;!function(e){e.Disarm="disarm",e.Arm="arm",e.Trigger="trigger",e.FailedToArm="failed_to_arm",e.CommandNotAllowed="command_not_allowed",e.NoCodeProvided="no_code_provided",e.InvalidCodeProvided="invalid_code_provided",e.TriggerTimeExpired="trigger_time_expired",e.ReadyToArmModesChanged="ready_to_arm_modes_changed"}($e||($e={}));const we="alarmo_updated",ke=["arming","pending"],xe={type:"",entity:"",name:"",code:"",keep_keypad_visible:!1,button_scale_actions:1,button_scale_keypad:1,states:{},show_messages:!0,show_ready_indicator:!0,show_bypassed_sensors:!0,use_code_dialog:!1,hide_keypad:!1},Ae=2.5,Ce={skip_delay:!1,force:!1};var ze;!function(e){e.Red="red",e.Pink="pink",e.Purple="purple",e.DeepPurple="deep-purple",e.Indigo="indigo",e.Blue="blue",e.LightBlue="light-blue",e.Cyan="cyan",e.Teal="teal",e.Green="green",e.LightGreen="light-green",e.Lime="lime",e.Yellow="yellow",e.Amber="amber",e.Orange="orange",e.DeepOrange="deep-orange",e.Brown="brown",e.LightGrey="light-grey",e.Grey="grey",e.DarkGrey="dark-grey",e.BlueGrey="blue-grey",e.Black="black",e.White="white"}(ze||(ze={}));var Oe={heading:"Možnosti aktivace",skip_delay:"Přeskočit čas pro vystup",force:"Bypass otevřených senzorů"},Se={keep_keypad_visible:"Zachovat klávesnici vždy viditelnou, i když není vyžadován žádný kód.",button_scale_actions:"Měřítko použité pro změnu velikosti tlačítek akcí.",button_scale_keypad:"Měřítko použité pro změnu velikosti tlačítek klávesnice.",show_messages:"Zobrazit diagnostické zprávy při spuštění alarmu nebo nemožnosti aktivace.",show_ready_indicator:"Zobrazit indikátor připraveno/nepřipraveno na tlačítkách režimu aktivace.",show_bypassed_sensors:"Zobrazit varování při aktivaci alarmu s přemostěnými senzory.",use_code_dialog:"Zobrazte klávesnici pro zadání kódu jako vyskakovací dialog.",hide_keypad:"Skrýt tlačítka klávesnice pro zadávání kódu.",available_actions:"Dostupné akce:",action_dialog:{title:"Upravit zobrazení akce '{action}'",show_button:{title:"Viditelnost akčního tlačítka",options:{always:"Vždy zobrazeno",never:"Nikdy zobrazeno",disarmed:"Zobrazit pouze při odzbrojení",armed:"Zobrazit pouze při zapnutí"}},button_label:"Přepsat popisek tlačítka",button_icon:"Ikona zobrazeného tlačítka",state_label:"Přepsat popisek stavu",color:"Přepsat barvu použitou pro akci"}},Ee={invalid_pin:"Neplatný",blocking_sensors:"Nelze aktivovat kvůli následujícím senzorům",triggered_sensors:"Alarm byl spuštěn následujícími senzory",bypassed_sensors:"Jsou tam přemostěné senzory"},je={arm_options:Oe,editor:Se,errors:Ee},Te={heading:"Scharfschaltungsoptionen",skip_delay:"Ausgangsverzögerung überspringen",force:"Offene Sensoren ignorieren"},Me={keep_keypad_visible:"Zeige das Pin-Eingabefeld immer an, auch wenn kein Code erfordert ist.",button_scale_actions:"Skalierungsfaktor für Buttongröße der Aktionen.",button_scale_keypad:"Skalierungsfaktor für Buttongröße der Pin-Eingabefeld.",show_messages:"Anzeige von Diagnosemeldungen, wenn der Alarm ausgelöst wird oder nicht scharf geschaltet werden kann.",show_ready_indicator:"Zeigt die Bereitschafts-/Nicht-Bereitschaftsanzeige auf den Scharfschaltmodus-Tasten an.",show_bypassed_sensors:"Warnung anzeigen, wenn der Alarm mit umgangenen Sensoren aktiviert wird.",use_code_dialog:"Zeigen Sie die Tastatur zur Codeeingabe als Popup-Dialog an.",hide_keypad:"Blenden Sie die Tasten der Tastatur zur Codeeingabe aus.",available_actions:"Verfügbare Aktionen:",action_dialog:{title:"Anzeige der Aktion '{action}' anpassen",show_button:{title:"Sichtbarkeit der Aktionsschaltfläche",options:{always:"Immer angezeigt",never:"Nie angezeigt",disarmed:"Nur im deaktivierten Zustand anzeigen",armed:"Nur im aktivierten Zustand anzeigen"}},button_label:"Überschreibung der Tastenbeschriftung",button_icon:"Angezeigtes Schaltflächensymbol",state_label:"Überschreibung der Statusbezeichnung",color:"Die für die Aktion verwendete Farbe überschreiben"}},Pe={invalid_pin:"Ungültig",blocking_sensors:"Konnte nicht scharf geschaltet werden, da folgende Sensoren geöffnet sind",triggered_sensors:"Alarm wurde durch folgende Sensoren ausgelöst",bypassed_sensors:"Es gibt umgangene Sensoren"},Le={arm_options:Te,editor:Me,errors:Pe},Ne={heading:"Επιλογές για όπλισμα",skip_delay:"Παράλειψη καθυστέρησης εξόδου",force:"Παράκαμψη ανοιχτών αισθητήρων"},De={keep_keypad_visible:"Κράτησε το πληκτρολόγιο πάντα ορατό, ακόμη και όταν δεν απαιτείται εισαγωγή κωδικού.",button_scale_actions:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών ενεργειών.",button_scale_keypad:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών του πληκτρολογίου.",show_messages:"Εμφάνιση διαγνωστικών μηνυμάτων όταν ενεργοποιείται ο συναγερμός ή δεν μπορεί να οπλιστεί.",show_ready_indicator:"Εμφάνιση ένδειξης έτοιμο/μη έτοιμο στα κουμπιά λειτουργίας όπλισης.",show_bypassed_sensors:"Εμφάνιση προειδοποιητικού μηνύματος όταν ο συναγερμός οπλίζεται με παρακαμφθέντες αισθητήρες.",use_code_dialog:"Εμφανίστε το πληκτρολόγιο για την εισαγωγή του κωδικού ως αναδυόμενο παράθυρο διαλόγου.",hide_keypad:"Απόκρυψη των κουμπιών του πληκτρολογίου για την εισαγωγή του κωδικού.",available_actions:"Διαθέσιμες ενέργειες:",action_dialog:{title:"Προσαρμογή εμφάνισης της ενέργειας '{action}'",show_button:{title:"Ορατότητα κουμπιού ενέργειας",options:{always:"Εμφανίζεται πάντα",never:"Ποτέ δεν εμφανίζεται",disarmed:"Εμφάνιση μόνο όταν είναι αφοπλισμένο",armed:"Εμφάνιση μόνο όταν είναι οπλισμένο"}},button_icon:"Εμφανιζόμενο εικονίδιο κουμπιού",state_label:"Αντικατάσταση ετικέτας κατάστασης",color:"Παράκαμψη χρώματος που χρησιμοποιείται για την ενέργεια"}},He={invalid_pin:"Ακυρος",blocking_sensors:"Δεν ήταν δυνατή η όπλιση λόγω των ακόλουθων αισθητήρων",triggered_sensors:"Ο συναγερμός ενεργοποιήθηκε από τους ακόλουθους αισθητήρες",bypassed_sensors:"Υπάρχουν παρακαμφθέντες αισθητήρες"},Re={arm_options:Ne,editor:De,errors:He},Ie={heading:"Options for arming",skip_delay:"Skip exit delay",force:"Bypass open sensors"},Ue={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale_actions:"Scaling factor to apply for resizing the action buttons.",button_scale_keypad:"Scaling factor to apply for resizing the keypad buttons.",show_messages:"Display diagnostic messages when alarm is triggered or cannot be armed.",show_ready_indicator:"Show ready/not ready indicator on arm mode buttons.",show_bypassed_sensors:"Show warning message when alarm is armed with bypassed sensors.",code:"Override alarm code for this card instance.",use_code_dialog:"Display the keypad for entering the code as a popup dialog.",hide_keypad:"Hide the keypad buttons for entering the code.",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",show_button:{title:"Button visibility",options:{always:"Always shown",never:"Never shown",disarmed:"Show only when disarmed",armed:"Hide only when disarmed"}},button_label:"Override displayed action label",button_icon:"Override displayed icon",state_label:"Override displayed state label",color:"Override color used for the action"}},qe={invalid_pin:"Invalid",blocking_sensors:"Could not arm due to the following sensors",triggered_sensors:"Alarm was triggered by the following sensors",bypassed_sensors:"There are bypassed sensors"},Be={arm_options:Ie,editor:Ue,errors:qe},Ve={heading:"Opciones de armado",skip_delay:"Omitir el retardo de salida",force:"Pasar por alto los sensores abiertos"},Fe={keep_keypad_visible:"Mantener el teclado siempre visible, también cuando no se requiere ninguna entrada de código.",button_scale_actions:"Factor de escalado para cambiar el tamaño de los botones de acción.",button_scale_keypad:"Factor de escalado para cambiar el tamaño de los botones del teclado.",show_messages:"Mostrar mensajes de diagnóstico cuando se activa la alarma o no se puede activar.",show_ready_indicator:"Mostrar indicador listo/no listo en los botones de modo armado.",show_bypassed_sensors:"Mostrar advertencia cuando la alarma está activada con sensores omitidos.",use_code_dialog:"Muestra el teclado para ingresar el código como un cuadro de diálogo emergente.",hide_keypad:"Ocultar los botones del teclado para ingresar el código.",available_actions:"Acciones disponibles:",action_dialog:{title:"Personalizar la visualización de la acción '{action}'",show_button:{title:"Visibilidad del botón de acción",options:{always:"Mostrar siempre",never:"Ocultar siempre",disarmed:"Mostrar solo si desarmada",armed:"Ocultar solo si desarmada"}},button_label:"Sobrescribir el texto del botón",button_icon:"Icono de botón mostrado",state_label:"Sobrescribir el texto de estado",color:"Anular el color utilizado para la acción"}},Ze={invalid_pin:"Inválido",blocking_sensors:"No se pudo armar debido a los siguientes sensores",triggered_sensors:"La alarma fue disparada por los siguientes sensores",bypassed_sensors:"Hay sensores omitidos"},We={arm_options:Ve,editor:Fe,errors:Ze},Ge={heading:"Options pour l'armement",skip_delay:"Ignorer le délai de sortie",force:"Bypasser les capteurs ouverts"},Ke={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale_actions:"Facteur d'échelle à appliquer pour le redimensionnement des boutons des actions.",button_scale_keypad:"Facteur d'échelle à appliquer pour le redimensionnement des boutons du clavier.",show_messages:"Afficher les messages de diagnostic lorsque l'alarme est déclenchée ou ne peut pas être armée.",show_ready_indicator:"Afficher l'indicateur prêt/pas prêt sur les boutons de mode d'armement.",show_bypassed_sensors:"Afficher un avertissement lorsque l'alarme est armée avec des capteurs ignorés.",use_code_dialog:"Affichez le clavier pour saisir le code sous forme de boîte de dialogue contextuelle.",hide_keypad:"Masquer les boutons du clavier pour saisir le code.",available_actions:"Actions disponibles:",action_dialog:{title:"Personnaliser l'affichage de l'action '{action}'",show_button:{title:"Visibilité du bouton d'action",options:{always:"Toujours affiché",never:"Jamais affiché",disarmed:"Afficher uniquement si désarmé",armed:"Afficher uniquement si armé"}},button_label:"Remplacer le libellé du bouton",button_icon:"Icône de bouton affichée",state_label:"Remplacer l'étiquette d'état",color:"Remplacer la couleur utilisée pour l'action"}},Je={invalid_pin:"Invalide",blocking_sensors:"Impossible d'armer en raison du(es) capteur(s) suivant(s)",triggered_sensors:"L'alarme a été déclenchée par le(s) capteur(s) suivant(s)",bypassed_sensors:"Il y a des capteurs ignorés"},Ye={arm_options:Ge,editor:Ke,errors:Je},Qe={heading:"Opzioni di inserimento",skip_delay:"Ignorare il ritardo di uscita",force:"Ignorare i sensori aperti"},Xe={keep_keypad_visible:"Mantenere la tastiera sempre visibile, anche quando nessun codice è richiesto.",button_scale_actions:"Fattore di scala da applicare per ridimensionare i pulsanti di azione.",button_scale_keypad:"Fattore di scala da applicare per ridimensionare i pulsanti della tastiera.",show_messages:"Mostrare messaggi diagnostici quando l'allarme viene attivato o non può essere inserito.",show_ready_indicator:"Mostra l'indicatore pronto/non pronto sui pulsanti della modalità di inserimento.",show_bypassed_sensors:"Mostra avviso quando l'allarme è armato con sensori esclusi.",use_code_dialog:"Visualizza la tastiera per l'immissione del codice come finestra di dialogo popup.",hide_keypad:"Nascondi i pulsanti della tastiera per l'inserimento del codice.",available_actions:"Azioni disponibili:",action_dialog:{title:"Personalizzare la visualizzazione dell'azione '{action}'",show_button:{title:"Visibilità del pulsante di azione",options:{always:"Sempre visualizzato",never:"Mai visualizzato",disarmed:"Mostra solo quando disarmato",armed:"Mostra solo quando disarmato"}},button_label:"Sovrascrivere l'etichetta del pulsante",button_icon:"Icona del pulsante visualizzato",state_label:"Sovrascrivere l'etichetta di stato",color:"Sostituisci il colore utilizzato per l'azione"}},et={invalid_pin:"Non valido",blocking_sensors:"Impossibile inserire l'allarme a causa dei seguenti sensori",triggered_sensors:"L'allarme è stato attivato dai seguenti sensori",bypassed_sensors:"Sono presenti sensori esclusi"},tt={arm_options:Qe,editor:Xe,errors:et},it={heading:"Opties voor inschakelen",skip_delay:"Sla vertraging over",force:"Negeer open sensoren"},st={keep_keypad_visible:"Houd het keypad altijd zichtbaar, ook wanneer er geen code vereist is.",button_scale_actions:"Schaalfactor actieknoppen",button_scale_keypad:"Schaalfactor keypadknoppen",show_messages:"Toon diagnostische berichten wanneer het alarm wordt geactiveerd of niet kan worden ingeschakeld.",show_ready_indicator:"Toon gereed/niet gereed-indicator op inschakelmodusknoppen.",show_bypassed_sensors:"Toon melding wanneer het alarm is ingeschakeld met omzeilde sensoren.",code:"Overschrijf alarm code voor deze kaart.",use_code_dialog:"Geef het toetsenbord voor het invoeren van de code weer als een pop-upvenster.",hide_keypad:"Verberg het toetsenbord voor het invoeren van de code.",available_actions:"Beschikbare acties:",action_dialog:{title:"Weergave van actie '{action}' aanpassen",show_button:{title:"Actieknop weergave",options:{always:"Altijd zichtbaar",never:"Nooit zichtbaar",disarmed:"Toon alleen bij uitgeschakeld",armed:"Zichtbaar tenzij uitgeschakeld"}},button_label:"Weergegeven naam voor actie",button_icon:"Weergegeven icoon voor actie",state_label:"Weergegeven status",color:"Weergegeven kleur voor action"}},at={invalid_pin:"Ongeldig",blocking_sensors:"Kon niet inschakelen vanwege de volgende sensoren",triggered_sensors:"Alarm werd geactiveerd door de volgende sensoren",bypassed_sensors:"Er zijn omzeilde sensoren"},ot={arm_options:it,editor:st,errors:at},rt={heading:"Opções para armar",skip_delay:"Omitir tempo para sair",force:"Ignorar os sensores abertos"},nt={keep_keypad_visible:"Mantenha o teclado sempre visível, mesmo quando não for necessária nenhuma entrada de código.",button_scale_actions:"Fator de escala para redimensionar botões de ação.",button_scale_keypad:"Fator de escala para redimensionar os botões do teclado.",show_messages:"Mostrar mensagens de diagnóstico quando o alarme estiver disparado ou não puder ser armado.",show_ready_indicator:"Mostrar indicador de disponível/não disponível nos botões do modo de armar.",show_bypassed_sensors:"Mostrar aviso quando o alarme for ativado com sensores ignorados.",use_code_dialog:"Exiba o teclado para inserir o código como uma caixa de diálogo pop-up.",hide_keypad:"Oculte os botões do teclado para inserir o código.",available_actions:"Ações disponíveis:",action_dialog:{title:"Personalize a exibição da ação '{action}'",show_button:{title:"Visibilidade do botão de ação",options:{always:"Sempre visível",never:"Sempre visível",disarmed:"Mostrar somente quando desarmado",armed:"Mostrar somente quando armado"}},button_label:"Substituir texto do botão",button_icon:"Ícone de botão exibido",state_label:"Substituir texto de status",color:"Substituir a cor usada para a ação"}},lt={invalid_pin:"Inválido",blocking_sensors:"Não foi possível armar devido aos seguintes sensores",triggered_sensors:"O alarme foi disparado pelos seguintes sensores",bypassed_sensors:"Existem sensores ignorados"},dt={arm_options:rt,editor:nt,errors:lt},ct={heading:"Варианты постановки на охрану",skip_delay:"Задержка перед выходом",force:"Обход датчиков открытия"},ht={keep_keypad_visible:"Клавиатура всегда видима, даже если ввод кода не требуется.",button_scale_actions:"Коэффициент масштабирования для изменения размера кнопок действий.",button_scale_keypad:"Коэффициент масштабирования для изменения размера кнопок клавиатуры.",show_messages:"Вывод диагностических сообщений, когда срабатывает сигнализация или ее невозможно включить.",show_ready_indicator:"Отображать индикатор готовности/неготовности на кнопках режима охраны.",show_bypassed_sensors:"Вывод предупреждающего сообщения, когда сигнализация включена с помощью обходных датчиков.",use_code_dialog:"Отобразить клавиатуру для ввода кода в виде всплывающего диалогового окна.",hide_keypad:"Скрыть кнопки клавиатуры для ввода кода.",available_actions:"Доступные действия:",action_dialog:{title:"Настройка отображения действия '{action}'",show_button:{title:"Видимость кнопки действия",options:{always:"Показывать всегда",never:"Показывать никогда",disarmed:"Показывать только при снятии с охраны",armed:"Показывать только при поддержании под охраной"}},button_label:"Измененение названия кнопки",button_icon:"Отображаемый значок кнопки",state_label:"Изменение названия состояния",color:"Переопределить цвет, используемый для действия"}},pt={invalid_pin:"Неверный",blocking_sensors:"Не удалось включить охрану из-за следующих датчиков",triggered_sensors:"Сигнал тревоги был вызван следующими датчиками",bypassed_sensors:"Есть обходные датчики"},ut={arm_options:ct,editor:ht,errors:pt},_t={heading:"Alternativ vid aktivering",skip_delay:"Hoppa över lämna fördröjning",force:"Förbikoppla öppna sensorer"},gt={keep_keypad_visible:"Håll knappsatsen alltid synlig, även när ingen kodinmatning krävs.",button_scale_actions:"Ändra storlek på åtgärdsknapparna.",button_scale_keypad:"Ändra storlek på knapparna på knappsatsen.",show_messages:"Visa diagnostiska meddelanden när larmet utlöses eller inte kan aktiveras.",show_ready_indicator:"Visa redo/ej redo-indikator på lägesknapparna.",show_bypassed_sensors:"Visa varningsmeddelande när larmet är aktiverat med förbikopplade sensorer.",use_code_dialog:"Visa knappsatsen för att ange koden som en popup-dialogruta.",hide_keypad:"Dölj knapparna på tangentbordet för att ange koden.",available_actions:"Tillgängliga åtgärder:",action_dialog:{title:"Anpassa visningen av åtgärden '{action}'",show_button:{title:"Synlighet för åtgärdsknapp",options:{always:"Visas alltid",never:"Visas aldrig",disarmed:"Visa endast vid avaktivering",armed:"Visa endast vid aktivering"}},button_label:"Anpassad knappetikett",button_icon:"Visad knappikon",state_label:"Anpassad tillståndsetikett",color:"Åsidosättningsfärg som används för åtgärden"}},mt={invalid_pin:"Ogiltig",blocking_sensors:"Kunde inte aktivera på grund av följande sensorer",triggered_sensors:"Larmet utlöstes av följande sensorer",bypassed_sensors:"Det finns förbikopplade sensorer"},bt={arm_options:_t,editor:gt,errors:mt},vt={heading:"警戒选项",skip_delay:"跳过离开延迟",force:"绕过开放的传感器"},ft={keep_keypad_visible:"保持小键盘总是可见，即使不需要输入密码",button_scale_actions:"调整动作按键大小的缩放系数",button_scale_keypad:"调整小键盘按键大小的缩放系数",show_messages:"当警报被触发或无法警戒时，显示诊断信息。",show_ready_indicator:"在手臂模式按钮上显示就绪/未就绪指示器。",show_bypassed_sensors:"当警报配备旁路传感器时显示警告消息。",use_code_dialog:"以弹出对话框的形式显示用于输入代码的键盘。",hide_keypad:"隐藏用于输入代码的键盘按钮。",available_actions:"可用动作：",action_dialog:{title:"自定义动作'{action}'的显示",show_button:{title:"操作按钮可见性",options:{always:"始终显示",never:"从不显示",disarmed:"仅在解除武装时显示",armed:"仅在武装时显示"}},button_label:"覆盖按钮标签",button_icon:"显示的按钮图标",state_label:"覆盖状态标签",color:"覆盖操作使用的颜色"}},yt={invalid_pin:"无效的",blocking_sensors:"由于以下传感器而无法警戒",triggered_sensors:"警报是由以下传感器触发的",bypassed_sensors:"有绕过的传感器"},$t={arm_options:vt,editor:ft,errors:yt},wt={cs:Object.freeze({__proto__:null,arm_options:Oe,default:je,editor:Se,errors:Ee}),de:Object.freeze({__proto__:null,arm_options:Te,default:Le,editor:Me,errors:Pe}),el:Object.freeze({__proto__:null,arm_options:Ne,default:Re,editor:De,errors:He}),en:Object.freeze({__proto__:null,arm_options:Ie,default:Be,editor:Ue,errors:qe}),es:Object.freeze({__proto__:null,arm_options:Ve,default:We,editor:Fe,errors:Ze}),fr:Object.freeze({__proto__:null,arm_options:Ge,default:Ye,editor:Ke,errors:Je}),it:Object.freeze({__proto__:null,arm_options:Qe,default:tt,editor:Xe,errors:et}),nl:Object.freeze({__proto__:null,arm_options:it,default:ot,editor:st,errors:at}),"pt-BR":Object.freeze({__proto__:null,arm_options:rt,default:dt,editor:nt,errors:lt}),ru:Object.freeze({__proto__:null,arm_options:ct,default:ut,editor:ht,errors:pt}),sv:Object.freeze({__proto__:null,arm_options:_t,default:bt,editor:gt,errors:mt}),"zh-Hans":Object.freeze({__proto__:null,arm_options:vt,default:$t,editor:ft,errors:yt})};function kt(e,t,i="",s=""){const a=t.replace(/['"]+/g,"");var o;try{o=e.split(".").reduce((e,t)=>e[t],wt[a])}catch(t){o=e.split(".").reduce((e,t)=>e[t],wt.en)}if(void 0===o&&(o=e.split(".").reduce((e,t)=>e[t],wt.en)),""!==i&&""!==s){Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s]);for(let e=0;e<i.length;e++)o=o.replace(i[e],s[e])}return o}function xt(e){return null!=e}function At(e){switch(typeof e){case"object":return 0==Object.keys(e).length;case"string":return 0==String(e).length;default:return!xt(e)}}function Ct(e){return e.substring(0,e.indexOf("."))}const zt=(e,t)=>{let i={hide:!1};return(t.states||{}).hasOwnProperty(e)&&(i=Object.assign(Object.assign({},i),t.states[e])),i},Ot=e=>{if(!e)return[];const t=e.attributes.supported_features||0;let i=[];return 2&t&&i.push(ve.ArmAway),1&t&&i.push(ve.ArmHome),4&t&&i.push(ve.ArmNight),32&t&&i.push(ve.ArmVacation),16&t&&i.push(ve.ArmCustomBypass),i},St=(e,t,i)=>{const s=Ct(e.entity_id),a=e.attributes.device_class,o=e.state;if(Object.values(me).includes(o)&&i){const e=zt(o,i);if(!At(e.state_label))return e.state_label}let r="";return a&&(r=t(`component.${s}.entity_component.${a}.state.${e.state}`)),r||(r=t(`component.${s}.entity_component._.state.${e.state}`)),r},Et=(e,t,i=!1)=>{if(!e||!e.state)return"var(--state-unavailable-color)";let s=e.state;if(i){const i=Object.values(ve).map(e=>ye[e]);if(!i.includes(s)){const t=e.attributes.arm_mode;t&&(s=t)}const a=[ve.Disarm,...Ot(e)].filter(e=>!zt(ye[e],t).hide);1==a.length&&(s=ye[a[0]])}if(Object.keys(t.states||{}).includes(s)&&xt((t.states[s]||{}).color)){const e=t.states[s].color;return Object.values(ze).includes(e)?`var(--${e}-color)`:e}return s==me.Disarmed?"var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)))":Object.values(me).includes(s)?`var(--state-alarm_control_panel-${s}-color, var(--state-alarm_control_panel-active-color, var(--state-active-color)))`:"var(--disabled-color, var(--state-inactive-color))"},jt=e=>e.callWS({type:"alarmo/entities"}),Tt=e=>e.callWS({type:"alarmo/config"}),Mt=(e,t,i,s)=>{const a=new CustomEvent(t,{detail:null!=i?i:{},bubbles:!0,cancelable:Boolean(void 0),composed:!0});return e.dispatchEvent(a),a};let Pt=class extends le{constructor(){super(...arguments),this._entities=null,this._editAction=null}async firstUpdated(){jt(this.hass).then(e=>{this._entities=e.map(e=>e.entity_id)}).catch(e=>{var t;null===(t=this.hass)||void 0===t||t.callService("system_log","write",{message:`Failed to fetch entities: ${e}`,level:"error"})}),this._alarmoConfig=await Tt(this.hass)}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),this._config=Object.assign(Object.assign({},xe),e)}render(){var e,t,i,s,a,o,r,n;if(!this._config||!this.hass||!this._entities)return V``;if(!this._entities.length)return V`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const l=this._config.entity?this.hass.states[this._config.entity]:void 0,d=(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===ge&&(this._alarmoConfig.code_arm_required||this._alarmoConfig.code_disarm_required);if(null!==this._editAction){const e=zt(ye[this._editAction],this._config);return V`
        <div class="header">
          <div class="back-title">
            <ha-icon-button
              .label=${this.hass.localize("ui.common.back")}
              .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
              @click=${this._goBack}
            ></ha-icon-button>
            <span slot="title"
              >${kt("editor.action_dialog.title",this.hass.language,"{action}",this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`))}</span
            >
          </div>
        </div>

        <div>
          <span>${kt("editor.action_dialog.show_button.title",this.hass.language)}</span>
          <div style="display: flex; flex-direction: row">
            <ha-formfield label="${kt("editor.action_dialog.show_button.options.always",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="never"
                @change=${()=>this._updateStateConfig(ye[this._editAction],{hide:void 0})}
                ?checked=${!xt(e.hide)||[!1,"never"].includes(e.hide)}
              >
              </ha-radio>
            </ha-formfield>

            <ha-formfield label="${kt("editor.action_dialog.show_button.options.never",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="always"
                @change=${()=>this._updateStateConfig(ye[this._editAction],{hide:"always"})}
                ?checked=${[!0,"always"].includes(e.hide||!1)}
              >
              </ha-radio>
            </ha-formfield>

            ${this._editAction==ve.Disarm?V` <ha-formfield
                    label="${kt("editor.action_dialog.show_button.options.armed",this.hass.language)}"
                  >
                    <ha-radio
                      name="show_button"
                      value="disarmed"
                      @change=${()=>this._updateStateConfig(ye[this._editAction],{hide:"disarmed"})}
                      ?checked=${"disarmed"==e.hide}
                    >
                    </ha-radio>
                  </ha-formfield>`:V`
                    <ha-formfield
                      label="${kt("editor.action_dialog.show_button.options.disarmed",this.hass.language)}"
                    >
                      <ha-radio
                        name="show_button"
                        value="armed"
                        @change=${()=>this._updateStateConfig(ye[this._editAction],{hide:"armed"})}
                        ?checked=${"armed"==e.hide}
                      >
                      </ha-radio>
                    </ha-formfield>
                  `}
          </div>
        </div>

        <div class="grid">
          <ha-input
            label="${kt("editor.action_dialog.button_label",this.hass.language)}"
            .value="${e.button_label||""}"
            placeholder="${this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`)}"
            ?disabled=${e.hide}
            @input=${e=>this._updateStateConfig(ye[this._editAction],{button_label:String(e.target.value).trim()})}
          ></ha-input>

          <ha-icon-picker
            .hass=${this.hass}
            label="${kt("editor.action_dialog.button_icon",this.hass.language)}"
            .value="${e.button_icon||fe[this._editAction]}"
            ?disabled=${e.hide}
            @value-changed=${e=>this._updateStateConfig(ye[this._editAction],{button_icon:e.detail.value})}
          >
          </ha-icon-picker>

          <ha-input
            label="${kt("editor.action_dialog.state_label",this.hass.language)}"
            .value="${e.state_label||""}"
            placeholder="${this.hass.localize(`component.alarm_control_panel.entity_component._.state.${ye[this._editAction]}`)}"
            @input=${e=>this._updateStateConfig(ye[this._editAction],{state_label:String(e.target.value).trim()})}
          ></ha-input>

          <ha-select
            .icon=${xt(e.color)}
            label="${kt("editor.action_dialog.color",this.hass.language)}"
            .value=${e.color}
            @closed=${e=>{e.stopPropagation()}}
            @selected=${e=>{e.stopPropagation();const t=e.target.value;this._updateStateConfig(ye[this._editAction],{color:t||void 0})}}
            fixedMenuPosition
            naturalMenuWidth
            clearable
          >
            ${e.color?V`
                    <span slot="icon">
                      <span
                        class="circle-color"
                        style="--circle-color: ${Object.values(ze).includes(e.color)?`var(--${e.color}-color)`:e.color}"
                      >
                      </span>
                    </span>
                  `:Z}
            ${xt(e.color)&&e.color.length&&!Object.values(ze).includes(e.color)?V`
                    <ha-list-item .value=${e.color} graphic="icon">
                      ${e.color}
                      <span slot="graphic">
                        <span class="circle-color" style="--circle-color: ${e.color}"> </span>
                      </span>
                    </ha-list-item>
                  `:Z}
            ${Object.values(ze).map(e=>V`
                <ha-list-item .value=${e} graphic="icon">
                  ${this.hass.localize(`ui.components.color-picker.colors.${e}`)||e}
                  <span slot="graphic">
                    <span class="circle-color" style="--circle-color: ${`var(--${e}-color)`}"> </span>
                    <span class="circle-color" style="--circle-color: ${`var(--${e}-color)`}"> </span>
                  </span>
                </ha-list-item>
              `)}
          </ha-select>
        </div>
      `}return V`
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

          <ha-input
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._config.name||""}"
            @input=${e=>this._updateConfig("name",String(e.target.value).trim())}
          ></ha-input>

          <ha-input
            type="password"
            .label="${kt("editor.code",this.hass.language)} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._config.code||""}"
            @input=${e=>this._updateConfig("code",String(e.target.value))}
          ></ha-input>
        </div>

        ${l?V`
                <div class="config-item">
                  <span>${kt("editor.available_actions",this.hass.language)}</span>
                </div>
                <div class="config-row">${this._renderActionOptions()}</div>
              `:""}

        <div class="grid">
          <ha-formfield .label=${kt("editor.button_scale_actions",this.hass.language)}>
            <ha-slider
              .value=${this._config.button_scale_actions||1}
              @change=${e=>this._updateConfig("button_scale_actions",Number(e.target.value))}
              min="${1}"
              max="${Ae}"
              step="0.1"
              labeled
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${kt("editor.button_scale_keypad",this.hass.language)}>
            <ha-slider
              .value=${this._config.button_scale_keypad||1}
              @change=${e=>this._updateConfig("button_scale_keypad",Number(e.target.value))}
              min="${1}"
              max="${Ae}"
              step="0.1"
              labeled
              ?disabled=${!l||!d||(null===(t=this._config)||void 0===t?void 0:t.use_code_dialog)}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${kt("editor.hide_keypad",this.hass.language)}>
            <ha-switch
              .checked=${this._config.hide_keypad}
              @change=${e=>this._updateConfig("hide_keypad",e.target.checked)}
              ?disabled=${!l||!d}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${kt("editor.keep_keypad_visible",this.hass.language)}>
            <ha-switch
              .checked=${this._config.keep_keypad_visible}
              @change=${e=>this._updateConfig("keep_keypad_visible",e.target.checked)}
              ?disabled=${!l||!d||(null===(i=this._alarmoConfig)||void 0===i?void 0:i.code_arm_required)==(null===(s=this._alarmoConfig)||void 0===s?void 0:s.code_disarm_required)||(null===(a=this._config)||void 0===a?void 0:a.use_code_dialog)||(null===(o=this._config)||void 0===o?void 0:o.hide_keypad)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${kt("editor.use_code_dialog",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_code_dialog}
              @change=${e=>this._updateConfig("use_code_dialog",e.target.checked)}
              ?disabled=${!l||!(null===(r=this._alarmoConfig)||void 0===r?void 0:r.code_arm_required)&&!(null===(n=this._alarmoConfig)||void 0===n?void 0:n.code_disarm_required)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${kt("editor.show_messages",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_messages||!xt(this._config.show_messages)}
              @change=${e=>this._updateConfig("show_messages",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${kt("editor.show_ready_indicator",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_ready_indicator}
              @change=${e=>this._updateConfig("show_ready_indicator",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${kt("editor.show_bypassed_sensors",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_bypassed_sensors}
              @change=${e=>this._updateConfig("show_bypassed_sensors",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield></ha-formfield>
        </div>
      </div>
    `}_renderActionOptions(){if(!this._config||!this.hass||!this._config.entity)return Z;const e=this.hass.states[this._config.entity],t=Ot(e);let i=[ve.Disarm,...t].map(e=>({id:e,label:this.hass.localize(`ui.card.alarm_control_panel.${e}`),hidden:["always",!0].includes(zt(ye[e],this._config).hide||!1),order:zt(ye[e],this._config).button_order}));return i.sort((e,t)=>e.hidden&&!t.hidden?1:t.hidden&&!e.hidden?-1:xt(e.order)||xt(t.order)?xt(e.order)&&!xt(t.order)?-1:!xt(e.order)&&xt(t.order)?1:e.order-t.order:0),V`
      <ha-sortable
        handle-selector=".handle"
        draggable-selector=".draggable"
        @item-moved=${e=>this._handleActionsMoved(e,i.map(e=>ye[e.id]))}
      >
        <div class="sortable-list">
          ${i.map((e,t)=>V`
          <div class="sortable-item ${e.hidden?"":"draggable"}"">
            <ha-svg-icon
              class="handle"
              style="cursor: grab"
              .path=${"M21 11H3V9H21V11M21 13H3V15H21V13Z"}
            ></ha-svg-icon>

            <ha-icon-button
              .path=${e.hidden?"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z":"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}
              style="${e.hidden?"":"color: var(--primary-color)"}"
              ?disabled=${!e.hidden&&i.filter(e=>!e.hidden).length<=2||e.id==ve.Disarm}
              @click=${s=>{if(this._updateStateConfig(ye[e.id],e.hidden?{hide:void 0}:{hide:"always"}),e.hidden){let e=new CustomEvent("",{detail:{oldIdx:t,nexIdx:i.filter(e=>!e.hidden).length}});this._handleActionsMoved(e,i.map(e=>ye[e.id]))}s.target.blur()}}
            >
            </ha-icon-button>
            <span>${e.label}</span>
            <ha-icon-button
              .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
              style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
              ?disabled=${e.hidden}
              @click=${()=>this._editActionClick(e.id)}
            >
            </ha-icon-button>
          </div>
        `)}
        </div>
      </ha-sortable>
    `}_handleActionsMoved(e,t){const i=e.detail.oldIndex,s=e.detail.newIndex;let a=t[i];t=t.filter((e,t)=>t!=i),t.splice(s,0,a);let o=Object.assign({},this._config.states);t.forEach((e,t)=>{o=Object.assign(Object.assign({},o),{[e]:Object.assign(Object.assign({},o[e]||{}),{button_order:t+1})})}),this._updateConfig("states",o)}_updateConfig(e,t){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[e]:t}),"entity"==e){const e=this._config.entity?this.hass.states[this._config.entity]:void 0;e&&e.attributes.code_arm_required!=e.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}Mt(this,"config-changed",{config:this._config})}}_updateStateConfig(e,t){var i;const s=e=>function(e,t){return e?Object.entries(e).filter(([e])=>t.includes(e)).reduce((e,[t,i])=>Object.assign(e,{[t]:i}),{}):{}}(e,Object.keys(e).filter(t=>xt(e[t]||"string"==typeof e[t])));let a=(null===(i=this._config)||void 0===i?void 0:i.states)||{};const o=s(Object.assign(Object.assign({},a[e]),t));a=s(Object.assign(Object.assign({},a),{[e]:o})),this._updateConfig("states",a)}_editActionClick(e){this._editAction=e}_goBack(){this._editAction=null}static get styles(){return n`
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
      ha-input {
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
      div.sortable-list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 0px 8px;
      }
      div.sortable-item {
        display: flex;
        font-size: 0.875rem;
        align-items: center;
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
      .circle-color {
        display: block;
        background-color: var(--circle-color, var(--divider-color));
        border: 1px solid var(--outline-color);
        border-radius: var(--ha-border-radius-pill);
        width: 20px;
        height: 20px;
        box-sizing: border-box;
      }
    `}};t([ue({attribute:!1})],Pt.prototype,"hass",void 0),t([_e()],Pt.prototype,"_config",void 0),t([_e()],Pt.prototype,"_alarmoConfig",void 0),t([_e()],Pt.prototype,"_entities",void 0),t([_e()],Pt.prototype,"_editAction",void 0),Pt=t([ce("alarmo-card-editor")],Pt);var Lt,Nt,Dt=Object.freeze({__proto__:null,get AlarmoCardEditor(){return Pt}});class Ht extends le{constructor(){super(...arguments),this.duration=0,this.datetime=null,this.timer=0,this._touchStarted=!1,this._hover=!1}shouldUpdate(e){if(!e.size)return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language)return!0;if(t.states[this.entity].state!==this.hass.states[this.entity].state||t.states[this.entity].attributes.delay!==this.hass.states[this.entity].attributes.delay){const e=t.states[this.entity].state,i=this.hass.states[this.entity].state;return ke.includes(i)?this.startTimer():ke.includes(e)&&this.stopTimer(),!0}return!1}firstUpdated(){const e=this.hass.states[this.entity].state;ke.includes(e)&&this.startTimer(),this.addEventListener("click",this.handleClick),this.addEventListener("touchstart",()=>{this._touchStarted=!0}),this.addEventListener("touchend",()=>{setTimeout(()=>{this._touchStarted=!1},10)}),this.addEventListener("mouseenter",()=>{this._touchStarted||(this._hover=!0)}),this.addEventListener("mouseleave",()=>{this._hover=!1})}async startTimer(){var e,t;clearInterval(this.timer),(e=this.hass,t=this.entity,e.callWS({type:"alarmo/countdown",entity_id:t})).then(e=>{this.duration=e.delay,this.datetime=new Date((new Date).getTime()+1e3*e.remaining)}).catch(e=>{}),this.timer=window.setInterval(()=>{this.requestUpdate()},1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const e=(this.datetime.getTime()-(new Date).getTime())/1e3;return e<0?(clearInterval(this.timer),0):e}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(e){return this._hover&&ke.includes(e)&&this.timer?V` <ha-icon icon="mdi:skip-forward"></ha-icon> `:this.datetime&&this.duration?V` ${Math.max(Math.round(this.getRemaining()),0)} `:V` <ha-icon .icon=${be[e]}></ha-icon> `}handleClick(){const e=this.hass.states[this.entity].state;ke.includes(e)&&this.timer?this.hass.callService("alarmo","skip_delay",{entity_id:this.entity}):Mt(this,"hass-more-info",{entityId:this.entity})}render(){let e=45,t=2*Math.PI*e;const i=this.hass.states[this.entity],s=this.datetime&&this.duration;return V`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="track ${i.state.split("_").shift()} ${s?"timer":""}">
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
      <div class="overlay ${i.state.split("_").shift()} ${s?"timer":""}">
        <div class="value">${this._stateValue(i.state)}</div>
      </div>
    `}static get styles(){return n`
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
    `}}t([ue()],Ht.prototype,"hass",void 0),t([ue()],Ht.prototype,"entity",void 0),t([_e()],Ht.prototype,"_hover",void 0),customElements.define("alarmo-state-badge",Ht),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Lt||(Lt={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Nt||(Nt={}));class Rt extends le{shouldUpdate(e){const t=e.get("hass");return!t||!(!this.entity||t.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return V``;const e=this.entity in this.hass.states;let t=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(t=Object.assign(Object.assign({},t),{state:this.state}));const i=e?St(t,this.hass.localize):this.hass.localize("state.default.unavailable",this.hass.locale||{language:this.hass.language,number_format:Lt.language}),s=e?t.attributes.friendly_name||(a=t.entity_id).substring(a.indexOf(".")+1):this.entity;var a;let o=!!this.state||"on"==t.state;return V`
      <div class="badge-container" @click=${()=>Mt(this,"hass-more-info",{entityId:this.entity})}>
        <div class="label-badge ${o?"active":""}" id="badge">
          <div class="value">
            <ha-state-icon .hass=${this.hass} .stateObj=${t}></ha-state-icon>
            <ha-state-icon .hass=${this.hass} .stateObj=${t}></ha-state-icon>
            <div class="label">
              <span>${i}</span>
            </div>
          </div>
        </div>
        <div class="title">${s}</div>
      </div>
    `}static get styles(){return n`
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
    `}}t([ue()],Rt.prototype,"hass",void 0),t([ue()],Rt.prototype,"entity",void 0),t([ue()],Rt.prototype,"state",void 0),customElements.define("alarmo-sensor-badge",Rt);class It extends le{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return V`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}handleFocus(e){e.target.blur()}static get styles(){return n`
      button {
        position: relative;
        width: 100%;
        height: 100%;
        border: 1px solid var(--alarmo-button-border-color, var(--outline-color));
        border-radius: var(--alarmo-button-border-radius, 8px);
        background: transparent;
        color: var(--alarmo-button-color, var(--primary-color));
        padding: calc(var(--content-scale, 1) * 0.875rem);
        font-size: calc(var(--content-scale, 1) * var(--alarmo-button-font-size));
        letter-spacing: 0.04em;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        z-index: 1;
        transition: border-color 0.1s ease-in-out;
      }
      button:before {
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        border-radius: var(--alarmo-button-border-radius, 8px);
        background: var(--alarmo-button-background-color, var(--card-background-color));
        opacity: var(--alarmo-button-background-opacity, 0);
        z-index: -2;
        transition: opacity 0.1s ease-in-out;
      }
      button:not(:disabled):hover:before {
        background: var(--alarmo-button-background-color, var(--primary-color));
        opacity: calc(var(--alarmo-button-background-opacity, 0) + 0.12);
      }
      button:not(:disabled) {
        cursor: pointer;
      }
      button:disabled {
        color: var(--disabled-text-color);
      }
      button:not(:disabled):active:before {
        opacity: calc(var(--alarmo-button-background-opacity, 0) + 0.24);
      }
      button:not(:disabled):active {
        border: 1px solid var(--alarmo-button-border-color, var(--outline-hover-color));
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
    `}}t([ue({type:Boolean})],It.prototype,"disabled",void 0),t([ue({type:Boolean})],It.prototype,"scaled",void 0),customElements.define("alarmo-button",It);const Ut=e=>{class i extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then(e=>e()):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([ue({attribute:!1})],i.prototype,"hass",void 0),i},qt=["1","2","3","4","5","6","7","8","9","0","clear","submit"];let Bt=class extends(Ut(le)){constructor(){super(...arguments),this._input="",this._showClearButton=!1,this._narrow=!1,this._codeClearTimer=0}hassSubscribe(){return[this.hass.connection.subscribeMessage(e=>this._fetchData(e),{type:we})]}async _fetchData(e){var t;if(e.data.area_id===(null===(t=this._params)||void 0===t?void 0:t.area_id))switch(e.data.event){case $e.Disarm:case $e.Arm:case $e.Trigger:this._confirm(e.data.event);break;case $e.InvalidCodeProvided:case $e.NoCodeProvided:this._showCodeError();break;case $e.FailedToArm:case $e.CommandNotAllowed:this._confirm(e.data.event);case $e.TriggerTimeExpired:case $e.ReadyToArmModesChanged:}}shouldUpdate(e){const t=e.get("hass");return!(!e.has("_params")&&this._params)||(!!e.has("_input")||(!t||t.states[this._params.entity_id]!==this.hass.states[this._params.entity_id]&&(t.states[this._params.entity_id],this.hass.states[this._params.entity_id],!0)))}firstUpdated(e){super.firstUpdated(e),this.addEventListener("keypress",e=>{"Enter"===e.key&&this._input.length&&this._submit()})}async showDialog(e){this._params=e,this._input="",this._narrow=matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,await this.updateComplete}closeDialog(){return this._params=void 0,this._showClearButton=!1,!0}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code");t&&(t.classList.remove("error"),t.classList.add("error"),t.hint=kt("errors.invalid_pin",this.hass.language))}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.hint="",this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout(()=>{this._clearCode()},12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_submit(){var e;const t=null!==(e=this._input)&&void 0!==e?e:"";this._clearCodeError(),this._params.action==ve.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._params.entity_id,code:t}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this._params.armOptions),{entity_id:this._params.entity_id,mode:ye[this._params.action],code:t}))}_confirm(e){var t,i;null===(i=null===(t=this._params)||void 0===t?void 0:t.confirm)||void 0===i||i.call(t,e),this.closeDialog()}_cancel(){var e,t;null===(t=null===(e=this._params)||void 0===e?void 0:e.cancel)||void 0===t||t.call(e),this.closeDialog()}_numberClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._setCodeClearTimer(),this._input=this._input+t,this._showClearButton=!0}_clear(){this._input="",this._showClearButton=!1}render(){if(!this._params||!this.hass)return Z;return"text"===this._params.code_format?V`
        <ha-dialog
          open
          @closed=${this._cancel}
          header-title="${this.hass.localize("ui.dialogs.enter_code.title")}"
          width="small"
        >
          <ha-input
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputmode="text"
            @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
            @focus=${this._clearCodeError}
          ></ha-input>
          <ha-dialog-footer>
            <ha-button slot="secondaryAction" data-dialog="close" appearance="plain">
              ${this.hass.localize("ui.common.cancel")}
            </ha-button>
            <ha-button @click=${this._submit} slot="primaryAction">
              ${this.hass.localize("ui.common.submit")}
            </ha-button>
          </ha-dialog-footer>
        </ha-dialog>
      `:V`
      <ha-dialog
        open
        header-title="${this.hass.localize("ui.dialogs.enter_code.title")}"
        @closed=${this._cancel}
        width="small"
      >
        <div class="container">
          <ha-input
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputmode="numeric"
            @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
            @focus=${this._clearCodeError}
          ></ha-input>
          <div class="keypad">
            ${qt.map(e=>""===e?V`<span></span>`:"clear"===e?V`
                      <ha-control-button
                        @click=${this._clear}
                        class="clear"
                        .disabled=${!this._showClearButton}
                        .label=${this.hass.localize("ui.common.clear")}
                      >
                        <ha-svg-icon path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}></ha-svg-icon>
                      </ha-control-button>
                    `:"submit"===e?V`
                        <ha-control-button
                          @click=${this._submit}
                          class="submit"
                          .label=${this.hass.localize("ui.common.submit")}
                        >
                          <ha-svg-icon path=${"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}></ha-svg-icon>
                        </ha-control-button>
                      `:V`
                        <ha-control-button .value=${e} @click=${this._numberClick} .label=${e}>
                          ${e}
                        </ha-control-button>
                      `)}
          </div>
        </div>
      </ha-dialog>
    `}};Bt.styles=n`
    ha-dialog {
      /* Place above other dialogs */
      --dialog-z-index: 104;
    }
    ha-input {
      width: 100%;
      max-width: 240px;
      margin: 0px auto;
      text-align: center;
      margin-left: calc(50% - 240px / 2);
      margin-bottom: 18.5px;
    }
    ha-input.error {
      animation: shake 0.2s ease-in-out 0s 2;
      margin-bottom: 0px;
      --ha-color-border-neutral-loud: var(--ha-color-on-danger-quiet);
    }
    ha-input.error:not([value='']) {
      --secondary-text-color: var(--ha-color-on-danger-quiet);
    }
    ha-input.error::part(wa-hint) {
      color: var(--ha-color-on-danger-quiet);
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
  `,t([ue({attribute:!1})],Bt.prototype,"hass",void 0),t([_e()],Bt.prototype,"_params",void 0),t([_e()],Bt.prototype,"_input",void 0),t([_e()],Bt.prototype,"_showClearButton",void 0),t([_e()],Bt.prototype,"_narrow",void 0),Bt=t([ce("alarmo-code-dialog")],Bt);var Vt=Object.freeze({__proto__:null,get AlarmoCodeDialog(){return Bt}});let Ft=class extends le{render(){if(!this.hass||!this.config)return Z;const e=this.hass.states[this.config.entity];let t=e.state;const i=Object.values(ve).map(e=>ye[e]);if(!i.includes(t)){const i=e.attributes.arm_mode;i&&(t=i)}return V` <div class="container">${this._renderOptions(t)}</div> `}_renderOptions(e){const t=this.hass.states[this.config.entity],i=[ve.Disarm,...Ot(t)].filter(e=>{const i=zt(ye[e],this.config).hide;if("boolean"==typeof i||!xt(i))return!i;switch(i){case"always":return!1;case"never":return!0;case"armed":return"disarmed"==t.state;case"disarmed":return"disarmed"!==t.state}}),s=i.map(e=>zt(ye[e],this.config)).some(e=>!xt(e.button_label)||e.button_label.length);return i.sort((e,t)=>{const i=zt(ye[e],this.config).button_order,s=zt(ye[t],this.config).button_order;return xt(i)||xt(s)?xt(i)&&!xt(s)?-1:!xt(i)&&xt(s)?1:i-s:0}),i.map(i=>{const a=xt(this.readyForArmModes)&&!this.readyForArmModes.includes(ye[i])&&i!=ve.Disarm,o=zt(ye[i],this.config);return V`
        <div
          class="button ${ye[i]==e?"selected":""}"
          @click=${e=>this._handleClick(e,i)}
        >
          <div class="content ${s?"has-text":""}">
            <ha-icon icon="${At(o.button_icon)?fe[i]:o.button_icon}"></ha-icon>
            ${ye[i]!=e&&xt(this.readyForArmModes)?V`
                    <ha-icon
                      icon="${"mdi:circle-medium"}"
                      class="badge ${a?"error":"success"}"
                    ></ha-icon>
                  `:Z}
            <span>
              ${xt(o.button_label)?o.button_label:i==ve.Disarm&&t.state!==me.Disarmed?this.hass.localize(`ui.card.alarm_control_panel.${i}`):this.hass.localize(`ui.card.alarm_control_panel.modes.${ye[i]}`)}
            </span>
          </div>
        </div>
      `})}_handleClick(e,t){Mt(this,"button-clicked",{ev:e,action:t})}static get styles(){return n`
      :host {
        width: 100%;
        display: inline-block;
        padding: 0px 10px;
        box-sizing: border-box;
      }
      div.container {
        position: relative;
        display: flex;
        width: 100%;
        gap: 0px;
        flex-wrap: wrap;
        padding: 4px;
        box-sizing: border-box;
        --selected-color: var(--alarm-state-color);
      }
      div.container::before {
        content: '';
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--primary-text-color);
        opacity: 0.05;
        border-radius: calc(var(--content-scale, 1) * 18px);
      }
      div.button {
        cursor: pointer;
        position: relative;
        flex: 1;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        /* For safari border-radius overflow */
        z-index: 0;
      }
      div.content {
        display: flex;
        position: relative;
        inline-size: calc(100% - 4px);
        border-radius: calc(var(--content-scale, 1) * 6px);
        height: calc(var(--content-scale, 1) * 26px);
        color: var(--primary-text-color);
        --mdc-icon-size: calc(var(--content-scale, 1) * 22px);
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-direction: column;
        padding: 8px 2px;
        overvlow: hidden;
        flex: 1;
        gap: 4px;
        transition: color ease-in-out 180ms;
        transition: color ease-in-out 180ms;
      }
      div.content.has-text {
        height: calc(var(--content-scale, 1) * 40px);
      }
      div.content::before {
        content: '';
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--selected-color);
        opacity: 0;
        border-radius: calc(var(--content-scale, 1) * 14px);
        transition:
          background-color ease-in-out 180ms,
          opacity ease-in-out 80ms;
      }
      div.content.focused::before,
      div.content:hover::before {
        opacity: 0.24;
      }
      div.button.selected .content::before {
        opacity: 1;
      }
      div.content ha-icon {
        display: flex;
      }
      div.content span {
        display: flex;
        max-width: calc(100% - 4px);
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        overflow-wrap: break-word;
        text-overflow: clip;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;
        word-break: break-word;
        font-weight: 400;
        font-size: calc(var(--content-scale, 1) * 1rem);
      }
      div.button.selected div.content ha-icon,
      div.button.selected div.content {
      div.button.selected div.content ha-icon,
      div.button.selected div.content {
        color: white;
      }
      @media (max-width: 280px) {
        div.container {
          flex-direction: column;
        }
      }
      div.content ha-icon.badge {
        position: absolute;
        top: 0px;
        margin-left: calc(var(--content-scale, 1) * 28px);
      }
      div.content ha-icon.success {
        color: var(--green-color);
      }
      div.content ha-icon.error {
        color: var(--red-color);
      }
    `}};t([ue({attribute:!1})],Ft.prototype,"hass",void 0),t([ue({attribute:!1})],Ft.prototype,"config",void 0),t([ue({attribute:!1})],Ft.prototype,"readyForArmModes",void 0),Ft=t([ce("alarmo-actions-bar")],Ft);const Zt=["1","2","3","4","5","6","7","8","9","","0","clear"];return e.AlarmoCard=class extends(Ut(le)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=void 0,this.armOptions=Object.assign({},Ce),this.readyForArmModes=null,this.backendConnection=null,this.showBypassedSensors=!1,this.subscribedEntities=[],this._codeClearTimer=0}static async getConfigElement(){return await Promise.resolve().then(function(){return Dt}),document.createElement("alarmo-card-editor")}static async getStubConfig(e){let t=Object.keys(e.states).find(e=>"alarm_control_panel"==Ct(e));return await jt(e).then(e=>{const i=e.sort((e,t)=>Number(e.area_id)-Number(t.area_id));i.length&&(t=i[0].entity_id)}),{type:"custom:alarmo-card",entity:t}}async getCardSize(){var e;if(!this._config||!this.hass)return 9;const t=this.hass.states[this._config.entity];return t&&(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===ge?!this._isCodeInputRequired(t)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?4:9:4}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),(e=>{if(!e||!e.entity||"alarm_control_panel"!==Ct(e.entity))throw new Error("Invalid configuration provided for entity");if(xt(e.code)&&"string"!=typeof e.code)throw new Error("Invalid configuration provided for code");if(xt(e.button_scale_keypad)&&("number"!=typeof e.button_scale_keypad||e.button_scale_keypad<1||e.button_scale_keypad>Ae))throw new Error("Invalid configuration provided for button_scale_keypad");if(xt(e.button_scale_actions)&&("number"!=typeof e.button_scale_actions||e.button_scale_actions<1||e.button_scale_actions>Ae))throw new Error("Invalid configuration provided for button_scale_actions")})(e),this._config=Object.assign(Object.assign({},xe),e)}hassSubscribe(){return[this.hass.connection.subscribeMessage(e=>this._fetchData(e),{type:we})]}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement(),await this.loadBackendConfig()}async loadBackendConfig(){this.backendConnection||jt(this.hass).then(e=>{const t=e.find(e=>e.entity_id==this._config.entity);t&&(this.area_id=t.area_id?t.area_id:null)}).then(()=>Tt(this.hass)).then(e=>{this._alarmoConfig=e,this.backendConnection=!0}).then(()=>{return e=this.hass,t=this._config.entity,e.callWS({type:"alarmo/ready_to_arm_modes",entity_id:t});var e,t}).then(e=>{this.readyForArmModes=e.modes}).catch(e=>{this.backendConnection=!1})}async _fetchData(e){if(e.data.area_id===this.area_id)switch(e.data.event){case $e.Arm:this._clearCode();break;case $e.Trigger:break;case $e.InvalidCodeProvided:case $e.NoCodeProvided:this._showCodeError(),this.subscribedEntities=[];break;case $e.FailedToArm:this.warning="blocking_sensors",this._last_command=e.data.command,this._last_code=this._getActiveCode(),this._clearCode();break;case $e.CommandNotAllowed:this._clearCode();break;case $e.TriggerTimeExpired:break;case $e.ReadyToArmModesChanged:this.readyForArmModes=e.data.modes}}shouldUpdate(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language||t.config.state!==this.hass.config.state)return!0;if(t.states[this._config.entity]!==this.hass.states[this._config.entity]){const e=t.states[this._config.entity],i=this.hass.states[this._config.entity];return!1===this.backendConnection&&(async()=>{await this.loadBackendConfig()})(),this.processStateUpdate(e,i),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some(e=>t.states[e]!==this.hass.states[e]))}processStateUpdate(e,t){t.state!=e.state&&(this.subscribedEntities=[]),(t.state==me.Disarmed||t.last_changed!==e.last_changed)&&this._clearCode()}_getConfiguredCode(){var e,t;const i=(null===(t=null===(e=this._config)||void 0===e?void 0:e.code)||void 0===t?void 0:t.trim())||"";return i.length?i:void 0}_getActiveCode(){return this._getConfiguredCode()||this._input}_isCodeInputRequired(e){return(e=>null!==e.attributes.code_format)(e)&&!this._getConfiguredCode()}render(){var e,t;if(!this._config||!this.hass||null===this.backendConnection)return V``;const i=this.hass.states[this._config.entity];return i?!1===this.backendConnection?V`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `:V`
      <ha-card>
        ${i.state===me.Disarmed?V`
                <ha-dropdown placement="bottom-end" id="cornerMenu">
                  <ha-icon-button
                    slot="trigger"
                    .label=${this.hass.localize("ui.common.menu")}
                    .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}
                  >
                  </ha-icon-button>
                  <span class="title"> ${kt("arm_options.heading",this.hass.language)} </span>
                  <ha-dropdown-item @click=${e=>this._toggleArmOptions(e,"skip_delay")}>
                    <ha-icon
                      icon="mdi:check"
                      style="${this.armOptions.skip_delay?"":"visibility: hidden"}"
                    ></ha-icon>
                    ${kt("arm_options.skip_delay",this.hass.language)}
                  </ha-dropdown-item>
                  <ha-dropdown-item @click=${e=>this._toggleArmOptions(e,"force")}>
                    <ha-icon icon="mdi:check" style="${this.armOptions.force?"":"visibility: hidden"}"></ha-icon>
                    ${kt("arm_options.force",this.hass.language)}
                  </ha-dropdown-item>
                </ha-dropdown>
              `:""}

        <div class="header">
          <div class="icon">
            <alarmo-state-badge
              .hass=${this.hass}
              .entity=${this._config.entity}
              style="--alarm-state-color: ${Et(i,this._config)}"
            >
            </alarmo-state-badge>
          </div>
          <div class="summary">
            <div class="name">${((e,t)=>At(t.name)?e.attributes.friendly_name:t.name)(i,this._config)}</div>
            <div class="state">${St(i,this.hass.localize,this._config)}</div>
          </div>
        </div>

        ${this._renderWarning()}

        <div id="actions" class="actions">${this._renderActions()}</div>
        <div id="actions" class="actions">${this._renderActions()}</div>

        ${!this._isCodeInputRequired(i)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?V``:V`
                <ha-input
                  .value=${this._input}
                  .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                  ?disabled=${!this._isCodeInputRequired(i)}
                  @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
                  @focus=${this._clearCodeError}
                  type="password"
                  id="code_input"
                  .inputmode=${(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===ge?"numeric":"text"}
                ></ha-input>
              `}
        ${!this._isCodeInputRequired(i)&&!this._config.keep_keypad_visible||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)!==ge||this._config.use_code_dialog||this._config.hide_keypad?V``:V`
                <div id="keypad" class="keypad" style="max-width: ${300*this._config.button_scale_keypad}px">
                  ${Zt.map(e=>""===e?V`
                          <alarmo-button
                            disabled
                            style="--content-scale: ${this._config.button_scale_keypad}"
                            ?scaled=${1!=this._config.button_scale_keypad}
                            class="placeholder"
                          ></alarmo-button>
                        `:V`
                          <alarmo-button
                            .value="${e}"
                            @click=${this._handlePadClick}
                            ?disabled=${!this._isCodeInputRequired(i)||"clear"===e&&!this._input.length}
                            class="${"clear"!==e?"numberKey":"clear"}"
                            style="--content-scale: ${this._config.button_scale_keypad}"
                            ?scaled=${1!=this._config.button_scale_keypad}
                          >
                            ${"clear"===e?V`<ha-icon
                                    icon="mdi:close"
                                    style="--mdc-icon-size: calc(${this._config.button_scale_keypad} * 24px)"
                                  ></ha-icon>`:V` <span>${e}</span>`}
                          </alarmo-button>
                        `)}
                </div>
              `}
      </ha-card>
    `:V`
        <hui-warning>
          ${"NOT_RUNNING"!==this.hass.config.state?this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]"):this.hass.localize("ui.panel.lovelace.warning.starting")}
        </hui-warning>
      `}_renderActions(){if(!this.hass||!this._config)return V``;const e=this.hass.states[this._config.entity],t=this._config.show_ready_indicator;return V`
      <alarmo-actions-bar
        @button-clicked=${e=>this._handleActionClick(e,e.detail.action)}
        .hass=${this.hass}
        .config=${this._config}
        .readyForArmModes=${t?this.readyForArmModes:void 0}
        style="--alarm-state-color: ${Et(e,this._config,!0)}; --content-scale: ${this._config.button_scale_actions}"
      ></alarmo-actions-bar>
    `}_renderWarning(){var e;if(!this.hass||!this._config||!this._config.show_messages)return V``;const t=this.hass.states[this._config.entity];return t.attributes.open_sensors&&t.state==me.Triggered||"blocking_sensors"==this.warning&&t.attributes.open_sensors?V`
        <div class="messagebox">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${"blocking_sensors"==this.warning?kt("errors.blocking_sensors",this.hass.language):kt("errors.triggered_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${Object.entries(t.attributes.open_sensors).map(([e])=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),V`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `))}
            </div>
            ${"blocking_sensors"==this.warning&&t.attributes.open_sensors?V`
                    <alarmo-button
                      @click=${this._forceRetryClick}
                      style="--content-scale: ${this._config.button_scale_actions}"
                      ?scaled=${1!=this._config.button_scale_actions}
                    >
                      <span>${kt("arm_options.force",this.hass.language)}</span>
                    </alarmo-button>
                  `:""}
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:t.state.startsWith("armed_")&&(null===(e=t.attributes.bypassed_sensors)||void 0===e?void 0:e.length)&&this._config.show_bypassed_sensors?V`
        <div class="messagebox warning">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${kt("errors.bypassed_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${t.attributes.bypassed_sensors.map(e=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),V`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:V``}_handlePadClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._input="clear"===t?"":this._input+t}async _handleActionClick(e,t){var i;e.target.blur(),this._clearCodeError();const s=this.hass.states[this._config.entity],a=this._getActiveCode();if((null===(i=this._config)||void 0===i?void 0:i.use_code_dialog)&&!this._config.hide_keypad&&this._isCodeInputRequired(s)){const i=await new Promise(i=>{const s=e.target,a={code_format:this._alarmoConfig.code_format,area_id:this.area_id,entity_id:this._config.entity,action:t,armOptions:this.armOptions,cancel:()=>{i(null)},confirm:e=>{i(e)}};Mt(s,"show-dialog",{dialogTag:"alarmo-code-dialog",dialogImport:()=>Promise.resolve().then(function(){return Vt}),dialogParams:a})});i!=$e.Arm&&i!=$e.Disarm||(this.warning="",this.armOptions=Object.assign({},Ce))}else t==ve.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._config.entity,code:a}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this.armOptions),{entity_id:this._config.entity,mode:ye[t],code:a})),this.warning="",this.armOptions=Object.assign({},Ce)}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&(t.classList.remove("error"),t.classList.add("error"),t.hint=kt("errors.invalid_pin",this.hass.language))}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.hint="",this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout(()=>{this._clearCode()},12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_toggleArmOptions(e,t){e.stopImmediatePropagation(),e.target.blur(),"skip_delay"==t?this.armOptions=Object.assign(Object.assign({},this.armOptions),{skip_delay:!this.armOptions.skip_delay}):"force"==t&&(this.armOptions=Object.assign(Object.assign({},this.armOptions),{force:!this.armOptions.force}))}_forceRetryClick(){if(!this.hass||!this._config||!this._last_command)return;let e=this._last_command;this.hass.callService("alarmo","arm",{entity_id:this._config.entity,mode:ye[e],code:this._last_code,force:!0}),this._last_command=void 0,this._last_code=void 0}static get styles(){return n`
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
        margin: 0px 50px;
      }
      .header .icon {
        display: flex;
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
        margin: 0 8px 8px;
      }
      ha-input {
        margin: 15px auto;
        max-width: 200px;
        text-align: center;
        margin-left: calc(50% - 200px / 2);
        margin-right: calc(50% - 200px / 2);
      }
      ha-input.error {
        animation: shake 0.2s ease-in-out 0s 2;
        --ha-color-border-neutral-loud: var(--ha-color-on-danger-quiet);
      }
      ha-input.error:not([value='']) {
        --secondary-text-color: var(--ha-color-on-danger-quiet);
      }
      ha-input.error::part(wa-hint) {
        color: var(--ha-color-on-danger-quiet);
      }
      #keypad {
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        direction: ltr;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-auto-rows: auto;
        grid-gap: var(--ha-space-4, 16px);
      }
      #keypad alarmo-button {
        width: calc(var(--content-scale, 1) * 56px);
        height: calc(var(--content-scale, 1) * 56px);
        --alarmo-button-font-size: 24px;
        --alarmo-button-background-color: var(--primary-text-color);
        --alarmo-button-background-opacity: 0.05;
        --alarmo-button-border-radius: 50%;
        --alarmo-button-border-color: none;
        --alarmo-button-color: var(--primary-text-color);
        font-weight: 500;
      }
      #keypad alarmo-button.clear:not([disabled]) {
        --alarmo-button-background-color: var(--red-color);
        --alarmo-button-color: var(--red-color);
        --alarmo-button-background-opacity: 0.1;
        --alarmo-button-background-opacity: 0.1;
      }
      #keypad alarmo-button.placeholder {
        visibility: hidden;
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
      ha-dropdown {
        display: block;
        position: absolute;
        right: 4px;
        top: 4px;
      }
      ha-dropdown span.title {
        font-weight: bold;
        display: flex;
        height: 32px;
        align-items: center;
        padding: 0px 8px;
      }
      @media all and (max-width: 250px) {
        ha-dropdown {
          display: none;
        }
      }
    `}},t([ue({attribute:!1})],e.AlarmoCard.prototype,"hass",void 0),t([_e()],e.AlarmoCard.prototype,"_config",void 0),t([_e()],e.AlarmoCard.prototype,"_alarmoConfig",void 0),t([_e()],e.AlarmoCard.prototype,"_input",void 0),t([_e()],e.AlarmoCard.prototype,"warning",void 0),t([_e()],e.AlarmoCard.prototype,"area_id",void 0),t([_e()],e.AlarmoCard.prototype,"armOptions",void 0),t([_e()],e.AlarmoCard.prototype,"readyForArmModes",void 0),t([_e()],e.AlarmoCard.prototype,"backendConnection",void 0),t([_e()],e.AlarmoCard.prototype,"showBypassedSensors",void 0),e.AlarmoCard=t([ce("alarmo-card")],e.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card",name:"Alarmo Card",description:"Card for operating Alarmo through Lovelace.",preview:!0}),console.info(`%c  ALARMO-CARD  \n%c  Version: ${"v1.6.9".padEnd(7," ")}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),e}({});
