var q0=Object.defineProperty;var Y0=(t,e,n)=>e in t?q0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Na=(t,e,n)=>Y0(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function $0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vp={exports:{}},fl={},Wp={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),K0=Symbol.for("react.portal"),Z0=Symbol.for("react.fragment"),Q0=Symbol.for("react.strict_mode"),J0=Symbol.for("react.profiler"),ev=Symbol.for("react.provider"),tv=Symbol.for("react.context"),nv=Symbol.for("react.forward_ref"),iv=Symbol.for("react.suspense"),rv=Symbol.for("react.memo"),sv=Symbol.for("react.lazy"),rf=Symbol.iterator;function av(t){return t===null||typeof t!="object"?null:(t=rf&&t[rf]||t["@@iterator"],typeof t=="function"?t:null)}var jp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xp=Object.assign,qp={};function Ss(t,e,n){this.props=t,this.context=e,this.refs=qp,this.updater=n||jp}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yp(){}Yp.prototype=Ss.prototype;function Xu(t,e,n){this.props=t,this.context=e,this.refs=qp,this.updater=n||jp}var qu=Xu.prototype=new Yp;qu.constructor=Xu;Xp(qu,Ss.prototype);qu.isPureReactComponent=!0;var sf=Array.isArray,$p=Object.prototype.hasOwnProperty,Yu={current:null},Kp={key:!0,ref:!0,__self:!0,__source:!0};function Zp(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)$p.call(e,i)&&!Kp.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Sa,type:t,key:s,ref:a,props:r,_owner:Yu.current}}function ov(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $u(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function lv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var af=/\/+/g;function kl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lv(""+t.key):e.toString(36)}function Mo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Sa:case K0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+kl(a,0):i,sf(r)?(n="",t!=null&&(n=t.replace(af,"$&/")+"/"),Mo(r,e,n,"",function(c){return c})):r!=null&&($u(r)&&(r=ov(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(af,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",sf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+kl(s,o);a+=Mo(s,e,n,l,r)}else if(l=av(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+kl(s,o++),a+=Mo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Da(t,e,n){if(t==null)return t;var i=[],r=0;return Mo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function cv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Eo={transition:null},uv={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Eo,ReactCurrentOwner:Yu};function Qp(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Da,forEach:function(t,e,n){Da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Da(t,function(){e++}),e},toArray:function(t){return Da(t,function(e){return e})||[]},only:function(t){if(!$u(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Ss;Ve.Fragment=Z0;Ve.Profiler=J0;Ve.PureComponent=Xu;Ve.StrictMode=Q0;Ve.Suspense=iv;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uv;Ve.act=Qp;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Xp({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Yu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)$p.call(e,l)&&!Kp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Sa,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:tv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ev,_context:t},t.Consumer=t};Ve.createElement=Zp;Ve.createFactory=function(t){var e=Zp.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:nv,render:t}};Ve.isValidElement=$u;Ve.lazy=function(t){return{$$typeof:sv,_payload:{_status:-1,_result:t},_init:cv}};Ve.memo=function(t,e){return{$$typeof:rv,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Eo.transition;Eo.transition={};try{t()}finally{Eo.transition=e}};Ve.unstable_act=Qp;Ve.useCallback=function(t,e){return Zt.current.useCallback(t,e)};Ve.useContext=function(t){return Zt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Zt.current.useEffect(t,e)};Ve.useId=function(){return Zt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Zt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Zt.current.useRef(t)};Ve.useState=function(t){return Zt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Zt.current.useTransition()};Ve.version="18.3.1";Wp.exports=Ve;var Xe=Wp.exports;const dv=$0(Xe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv=Xe,hv=Symbol.for("react.element"),pv=Symbol.for("react.fragment"),mv=Object.prototype.hasOwnProperty,gv=fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vv={key:!0,ref:!0,__self:!0,__source:!0};function Jp(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)mv.call(e,i)&&!vv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:hv,type:t,key:s,ref:a,props:r,_owner:gv.current}}fl.Fragment=pv;fl.jsx=Jp;fl.jsxs=Jp;Vp.exports=fl;var x=Vp.exports,Vc={},em={exports:{}},xn={},tm={exports:{}},nm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,G){var C=I.length;I.push(G);e:for(;0<C;){var b=C-1>>>1,B=I[b];if(0<r(B,G))I[b]=G,I[C]=B,C=b;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var G=I[0],C=I.pop();if(C!==G){I[0]=C;e:for(var b=0,B=I.length,U=B>>>1;b<U;){var V=2*(b+1)-1,Z=I[V],ee=V+1,Q=I[ee];if(0>r(Z,C))ee<B&&0>r(Q,Z)?(I[b]=Q,I[ee]=C,b=ee):(I[b]=Z,I[V]=C,b=V);else if(ee<B&&0>r(Q,C))I[b]=Q,I[ee]=C,b=ee;else break e}}return G}function r(I,G){var C=I.sortIndex-G.sortIndex;return C!==0?C:I.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,d=null,h=3,m=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=I)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function M(I){if(y=!1,v(I),!_)if(n(l)!==null)_=!0,$(L);else{var G=n(c);G!==null&&J(M,G.startTime-I)}}function L(I,G){_=!1,y&&(y=!1,u(z),z=-1),m=!0;var C=h;try{for(v(G),d=n(l);d!==null&&(!(d.expirationTime>G)||I&&!q());){var b=d.callback;if(typeof b=="function"){d.callback=null,h=d.priorityLevel;var B=b(d.expirationTime<=G);G=t.unstable_now(),typeof B=="function"?d.callback=B:d===n(l)&&i(l),v(G)}else i(l);d=n(l)}if(d!==null)var U=!0;else{var V=n(c);V!==null&&J(M,V.startTime-G),U=!1}return U}finally{d=null,h=C,m=!1}}var R=!1,P=null,z=-1,E=5,T=-1;function q(){return!(t.unstable_now()-T<E)}function K(){if(P!==null){var I=t.unstable_now();T=I;var G=!0;try{G=P(!0,I)}finally{G?ae():(R=!1,P=null)}}else R=!1}var ae;if(typeof g=="function")ae=function(){g(K)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,H=D.port2;D.port1.onmessage=K,ae=function(){H.postMessage(null)}}else ae=function(){p(K,0)};function $(I){P=I,R||(R=!0,ae())}function J(I,G){z=p(function(){I(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,$(L))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var C=h;h=G;try{return I()}finally{h=C}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var C=h;h=I;try{return G()}finally{h=C}},t.unstable_scheduleCallback=function(I,G,C){var b=t.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?b+C:b):C=b,I){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=C+B,I={id:f++,callback:G,priorityLevel:I,startTime:C,expirationTime:B,sortIndex:-1},C>b?(I.sortIndex=C,e(c,I),n(l)===null&&I===n(c)&&(y?(u(z),z=-1):y=!0,J(M,C-b))):(I.sortIndex=B,e(l,I),_||m||(_=!0,$(L))),I},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(I){var G=h;return function(){var C=h;h=G;try{return I.apply(this,arguments)}finally{h=C}}}})(nm);tm.exports=nm;var xv=tm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=Xe,vn=xv;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var im=new Set,na={};function Er(t,e){us(t,e),us(t+"Capture",e)}function us(t,e){for(na[t]=e,t=0;t<e.length;t++)im.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=Object.prototype.hasOwnProperty,yv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,of={},lf={};function Sv(t){return Wc.call(lf,t)?!0:Wc.call(of,t)?!1:yv.test(t)?lf[t]=!0:(of[t]=!0,!1)}function Mv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ev(t,e,n,i){if(e===null||typeof e>"u"||Mv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ku=/[\-:]([a-z])/g;function Zu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ku,Zu);Ot[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ku,Zu);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ku,Zu);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qu(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ev(e,n,r,i)&&(n=null),i||r===null?Sv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),Ju=Symbol.for("react.strict_mode"),jc=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),sm=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),Xc=Symbol.for("react.suspense"),qc=Symbol.for("react.suspense_list"),td=Symbol.for("react.memo"),Ti=Symbol.for("react.lazy"),am=Symbol.for("react.offscreen"),cf=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=cf&&t[cf]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,zl;function Gs(t){if(zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zl=e&&e[1]||""}return`
`+zl+t}var Bl=!1;function Hl(t,e){if(!t||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Gs(t):""}function wv(t){switch(t.tag){case 5:return Gs(t.type);case 16:return Gs("Lazy");case 13:return Gs("Suspense");case 19:return Gs("SuspenseList");case 0:case 2:case 15:return t=Hl(t.type,!1),t;case 11:return t=Hl(t.type.render,!1),t;case 1:return t=Hl(t.type,!0),t;default:return""}}function Yc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case Gr:return"Portal";case jc:return"Profiler";case Ju:return"StrictMode";case Xc:return"Suspense";case qc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sm:return(t.displayName||"Context")+".Consumer";case rm:return(t._context.displayName||"Context")+".Provider";case ed:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case td:return e=t.displayName||null,e!==null?e:Yc(t.type)||"Memo";case Ti:e=t._payload,t=t._init;try{return Yc(t(e))}catch{}}return null}function Tv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yc(e);case 8:return e===Ju?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function om(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bv(t){var e=om(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ia(t){t._valueTracker||(t._valueTracker=bv(t))}function lm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=om(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Io(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $c(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function uf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cm(t,e){e=e.checked,e!=null&&Qu(t,"checked",e,!1)}function Kc(t,e){cm(t,e);var n=Wi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zc(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function df(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zc(t,e,n){(e!=="number"||Io(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vs=Array.isArray;function ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ff(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Vs(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wi(n)}}function um(t,e){var n=Wi(e.value),i=Wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function hf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fa,fm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Av=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(t){Av.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xs[e]=Xs[t]})});function hm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xs.hasOwnProperty(t)&&Xs[t]?(""+e).trim():e+"px"}function pm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=hm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Cv=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eu(t,e){if(e){if(Cv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function tu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nu=null;function nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var iu=null,is=null,rs=null;function pf(t){if(t=wa(t)){if(typeof iu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=vl(e),iu(t.stateNode,t.type,e))}}function mm(t){is?rs?rs.push(t):rs=[t]:is=t}function gm(){if(is){var t=is,e=rs;if(rs=is=null,pf(t),e)for(t=0;t<e.length;t++)pf(e[t])}}function vm(t,e){return t(e)}function xm(){}var Gl=!1;function _m(t,e,n){if(Gl)return t(e,n);Gl=!0;try{return vm(t,e,n)}finally{Gl=!1,(is!==null||rs!==null)&&(xm(),gm())}}function ra(t,e){var n=t.stateNode;if(n===null)return null;var i=vl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var ru=!1;if(hi)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{ru=!1}function Rv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var qs=!1,Fo=null,Oo=!1,su=null,Pv={onError:function(t){qs=!0,Fo=t}};function Lv(t,e,n,i,r,s,a,o,l){qs=!1,Fo=null,Rv.apply(Pv,arguments)}function Nv(t,e,n,i,r,s,a,o,l){if(Lv.apply(this,arguments),qs){if(qs){var c=Fo;qs=!1,Fo=null}else throw Error(ie(198));Oo||(Oo=!0,su=c)}}function wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ym(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mf(t){if(wr(t)!==t)throw Error(ie(188))}function Dv(t){var e=t.alternate;if(!e){if(e=wr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return mf(r),t;if(s===i)return mf(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Sm(t){return t=Dv(t),t!==null?Mm(t):null}function Mm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mm(t);if(e!==null)return e;t=t.sibling}return null}var Em=vn.unstable_scheduleCallback,gf=vn.unstable_cancelCallback,Uv=vn.unstable_shouldYield,Iv=vn.unstable_requestPaint,xt=vn.unstable_now,Fv=vn.unstable_getCurrentPriorityLevel,id=vn.unstable_ImmediatePriority,wm=vn.unstable_UserBlockingPriority,ko=vn.unstable_NormalPriority,Ov=vn.unstable_LowPriority,Tm=vn.unstable_IdlePriority,hl=null,Zn=null;function kv(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:Hv,zv=Math.log,Bv=Math.LN2;function Hv(t){return t>>>=0,t===0?32:31-(zv(t)/Bv|0)|0}var Oa=64,ka=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ws(o):(s&=a,s!==0&&(i=Ws(s)))}else a=n&~r,a!==0?i=Ws(a):s!==0&&(i=Ws(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function Gv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Bn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Gv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function au(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bm(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function Vl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function Wv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Am(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cm,sd,Rm,Pm,Lm,ou=!1,za=[],Di=null,Ui=null,Ii=null,sa=new Map,aa=new Map,Ai=[],jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vf(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(e.pointerId)}}function Ps(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wa(e),e!==null&&sd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Xv(t,e,n,i,r){switch(e){case"focusin":return Di=Ps(Di,t,e,n,i,r),!0;case"dragenter":return Ui=Ps(Ui,t,e,n,i,r),!0;case"mouseover":return Ii=Ps(Ii,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return sa.set(s,Ps(sa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,aa.set(s,Ps(aa.get(s)||null,t,e,n,i,r)),!0}return!1}function Nm(t){var e=lr(t.target);if(e!==null){var n=wr(e);if(n!==null){if(e=n.tag,e===13){if(e=ym(n),e!==null){t.blockedOn=e,Lm(t.priority,function(){Rm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);nu=i,n.target.dispatchEvent(i),nu=null}else return e=wa(n),e!==null&&sd(e),t.blockedOn=n,!1;e.shift()}return!0}function xf(t,e,n){wo(t)&&n.delete(e)}function qv(){ou=!1,Di!==null&&wo(Di)&&(Di=null),Ui!==null&&wo(Ui)&&(Ui=null),Ii!==null&&wo(Ii)&&(Ii=null),sa.forEach(xf),aa.forEach(xf)}function Ls(t,e){t.blockedOn===e&&(t.blockedOn=null,ou||(ou=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,qv)))}function oa(t){function e(r){return Ls(r,t)}if(0<za.length){Ls(za[0],t);for(var n=1;n<za.length;n++){var i=za[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Di!==null&&Ls(Di,t),Ui!==null&&Ls(Ui,t),Ii!==null&&Ls(Ii,t),sa.forEach(e),aa.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)Nm(n),n.blockedOn===null&&Ai.shift()}var ss=xi.ReactCurrentBatchConfig,Bo=!0;function Yv(t,e,n,i){var r=Je,s=ss.transition;ss.transition=null;try{Je=1,ad(t,e,n,i)}finally{Je=r,ss.transition=s}}function $v(t,e,n,i){var r=Je,s=ss.transition;ss.transition=null;try{Je=4,ad(t,e,n,i)}finally{Je=r,ss.transition=s}}function ad(t,e,n,i){if(Bo){var r=lu(t,e,n,i);if(r===null)Jl(t,e,i,Ho,n),vf(t,i);else if(Xv(r,t,e,n,i))i.stopPropagation();else if(vf(t,i),e&4&&-1<jv.indexOf(t)){for(;r!==null;){var s=wa(r);if(s!==null&&Cm(s),s=lu(t,e,n,i),s===null&&Jl(t,e,i,Ho,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Jl(t,e,i,null,n)}}var Ho=null;function lu(t,e,n,i){if(Ho=null,t=nd(i),t=lr(t),t!==null)if(e=wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ym(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ho=t,null}function Dm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fv()){case id:return 1;case wm:return 4;case ko:case Ov:return 16;case Tm:return 536870912;default:return 16}default:return 16}}var Ri=null,od=null,To=null;function Um(){if(To)return To;var t,e=od,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return To=r.slice(t,1<i?1-i:void 0)}function bo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function _f(){return!1}function _n(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ba:_f,this.isPropagationStopped=_f,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ld=_n(Ms),Ea=ht({},Ms,{view:0,detail:0}),Kv=_n(Ea),Wl,jl,Ns,pl=ht({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ns&&(Ns&&t.type==="mousemove"?(Wl=t.screenX-Ns.screenX,jl=t.screenY-Ns.screenY):jl=Wl=0,Ns=t),Wl)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),yf=_n(pl),Zv=ht({},pl,{dataTransfer:0}),Qv=_n(Zv),Jv=ht({},Ea,{relatedTarget:0}),Xl=_n(Jv),ex=ht({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),tx=_n(ex),nx=ht({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ix=_n(nx),rx=ht({},Ms,{data:0}),Sf=_n(rx),sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ox={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ox[t])?!!e[t]:!1}function cd(){return lx}var cx=ht({},Ea,{key:function(t){if(t.key){var e=sx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ax[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cd,charCode:function(t){return t.type==="keypress"?bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ux=_n(cx),dx=ht({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mf=_n(dx),fx=ht({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cd}),hx=_n(fx),px=ht({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),mx=_n(px),gx=ht({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vx=_n(gx),xx=[9,13,27,32],ud=hi&&"CompositionEvent"in window,Ys=null;hi&&"documentMode"in document&&(Ys=document.documentMode);var _x=hi&&"TextEvent"in window&&!Ys,Im=hi&&(!ud||Ys&&8<Ys&&11>=Ys),Ef=" ",wf=!1;function Fm(t,e){switch(t){case"keyup":return xx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Om(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function yx(t,e){switch(t){case"compositionend":return Om(e);case"keypress":return e.which!==32?null:(wf=!0,Ef);case"textInput":return t=e.data,t===Ef&&wf?null:t;default:return null}}function Sx(t,e){if(Wr)return t==="compositionend"||!ud&&Fm(t,e)?(t=Um(),To=od=Ri=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Im&&e.locale!=="ko"?null:e.data;default:return null}}var Mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Mx[t.type]:e==="textarea"}function km(t,e,n,i){mm(i),e=Go(e,"onChange"),0<e.length&&(n=new ld("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var $s=null,la=null;function Ex(t){$m(t,0)}function ml(t){var e=qr(t);if(lm(e))return t}function wx(t,e){if(t==="change")return e}var zm=!1;if(hi){var ql;if(hi){var Yl="oninput"in document;if(!Yl){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),Yl=typeof bf.oninput=="function"}ql=Yl}else ql=!1;zm=ql&&(!document.documentMode||9<document.documentMode)}function Af(){$s&&($s.detachEvent("onpropertychange",Bm),la=$s=null)}function Bm(t){if(t.propertyName==="value"&&ml(la)){var e=[];km(e,la,t,nd(t)),_m(Ex,e)}}function Tx(t,e,n){t==="focusin"?(Af(),$s=e,la=n,$s.attachEvent("onpropertychange",Bm)):t==="focusout"&&Af()}function bx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(la)}function Ax(t,e){if(t==="click")return ml(e)}function Cx(t,e){if(t==="input"||t==="change")return ml(e)}function Rx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:Rx;function ca(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Wc.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Cf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rf(t,e){var n=Cf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cf(n)}}function Hm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gm(){for(var t=window,e=Io();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Io(t.document)}return e}function dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Px(t){var e=Gm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hm(n.ownerDocument.documentElement,n)){if(i!==null&&dd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Rf(n,s);var a=Rf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Lx=hi&&"documentMode"in document&&11>=document.documentMode,jr=null,cu=null,Ks=null,uu=!1;function Pf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uu||jr==null||jr!==Io(i)||(i=jr,"selectionStart"in i&&dd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ks&&ca(Ks,i)||(Ks=i,i=Go(cu,"onSelect"),0<i.length&&(e=new ld("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=jr)))}function Ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xr={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},$l={},Vm={};hi&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function gl(t){if($l[t])return $l[t];if(!Xr[t])return t;var e=Xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vm)return $l[t]=e[n];return t}var Wm=gl("animationend"),jm=gl("animationiteration"),Xm=gl("animationstart"),qm=gl("transitionend"),Ym=new Map,Lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,e){Ym.set(t,e),Er(e,[t])}for(var Kl=0;Kl<Lf.length;Kl++){var Zl=Lf[Kl],Nx=Zl.toLowerCase(),Dx=Zl[0].toUpperCase()+Zl.slice(1);qi(Nx,"on"+Dx)}qi(Wm,"onAnimationEnd");qi(jm,"onAnimationIteration");qi(Xm,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(qm,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function Nf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Nv(i,e,void 0,t),t.currentTarget=null}function $m(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Nf(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Nf(r,o,c),s=l}}}if(Oo)throw t=su,Oo=!1,su=null,t}function st(t,e){var n=e[mu];n===void 0&&(n=e[mu]=new Set);var i=t+"__bubble";n.has(i)||(Km(e,t,2,!1),n.add(i))}function Ql(t,e,n){var i=0;e&&(i|=4),Km(n,t,i,e)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function ua(t){if(!t[Ga]){t[Ga]=!0,im.forEach(function(n){n!=="selectionchange"&&(Ux.has(n)||Ql(n,!1,t),Ql(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ga]||(e[Ga]=!0,Ql("selectionchange",!1,e))}}function Km(t,e,n,i){switch(Dm(e)){case 1:var r=Yv;break;case 4:r=$v;break;default:r=ad}n=r.bind(null,e,n,t),r=void 0,!ru||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Jl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=lr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}_m(function(){var c=s,f=nd(n),d=[];e:{var h=Ym.get(t);if(h!==void 0){var m=ld,_=t;switch(t){case"keypress":if(bo(n)===0)break e;case"keydown":case"keyup":m=ux;break;case"focusin":_="focus",m=Xl;break;case"focusout":_="blur",m=Xl;break;case"beforeblur":case"afterblur":m=Xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=hx;break;case Wm:case jm:case Xm:m=tx;break;case qm:m=mx;break;case"scroll":m=Kv;break;case"wheel":m=vx;break;case"copy":case"cut":case"paste":m=ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Mf}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=ra(g,u),M!=null&&y.push(da(g,M,v)))),p)break;g=g.return}0<y.length&&(h=new m(h,_,null,n,f),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==nu&&(_=n.relatedTarget||n.fromElement)&&(lr(_)||_[pi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?lr(_):null,_!==null&&(p=wr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=yf,M="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Mf,M="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?h:qr(m),v=_==null?h:qr(_),h=new y(M,g+"leave",m,n,f),h.target=p,h.relatedTarget=v,M=null,lr(f)===c&&(y=new y(u,g+"enter",_,n,f),y.target=v,y.relatedTarget=p,M=y),p=M,m&&_)t:{for(y=m,u=_,g=0,v=y;v;v=Tr(v))g++;for(v=0,M=u;M;M=Tr(M))v++;for(;0<g-v;)y=Tr(y),g--;for(;0<v-g;)u=Tr(u),v--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=Tr(y),u=Tr(u)}y=null}else y=null;m!==null&&Df(d,h,m,y,!1),_!==null&&p!==null&&Df(d,p,_,y,!0)}}e:{if(h=c?qr(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var L=wx;else if(Tf(h))if(zm)L=Cx;else{L=bx;var R=Tx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=Ax);if(L&&(L=L(t,c))){km(d,L,n,f);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Zc(h,"number",h.value)}switch(R=c?qr(c):window,t){case"focusin":(Tf(R)||R.contentEditable==="true")&&(jr=R,cu=c,Ks=null);break;case"focusout":Ks=cu=jr=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,Pf(d,n,f);break;case"selectionchange":if(Lx)break;case"keydown":case"keyup":Pf(d,n,f)}var P;if(ud)e:{switch(t){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Wr?Fm(t,n)&&(z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Im&&n.locale!=="ko"&&(Wr||z!=="onCompositionStart"?z==="onCompositionEnd"&&Wr&&(P=Um()):(Ri=f,od="value"in Ri?Ri.value:Ri.textContent,Wr=!0)),R=Go(c,z),0<R.length&&(z=new Sf(z,t,null,n,f),d.push({event:z,listeners:R}),P?z.data=P:(P=Om(n),P!==null&&(z.data=P)))),(P=_x?yx(t,n):Sx(t,n))&&(c=Go(c,"onBeforeInput"),0<c.length&&(f=new Sf("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=P))}$m(d,e)})}function da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Go(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ra(t,n),s!=null&&i.unshift(da(t,s,r)),s=ra(t,e),s!=null&&i.push(da(t,s,r))),t=t.return}return i}function Tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Df(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ra(n,s),l!=null&&a.unshift(da(n,l,o))):r||(l=ra(n,s),l!=null&&a.push(da(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Ix=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function Uf(t){return(typeof t=="string"?t:""+t).replace(Ix,`
`).replace(Fx,"")}function Va(t,e,n){if(e=Uf(e),Uf(t)!==e&&n)throw Error(ie(425))}function Vo(){}var du=null,fu=null;function hu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,Ox=typeof clearTimeout=="function"?clearTimeout:void 0,If=typeof Promise=="function"?Promise:void 0,kx=typeof queueMicrotask=="function"?queueMicrotask:typeof If<"u"?function(t){return If.resolve(null).then(t).catch(zx)}:pu;function zx(t){setTimeout(function(){throw t})}function ec(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),oa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);oa(e)}function Fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ff(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Es=Math.random().toString(36).slice(2),$n="__reactFiber$"+Es,fa="__reactProps$"+Es,pi="__reactContainer$"+Es,mu="__reactEvents$"+Es,Bx="__reactListeners$"+Es,Hx="__reactHandles$"+Es;function lr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ff(t);t!==null;){if(n=t[$n])return n;t=Ff(t)}return e}t=n,n=t.parentNode}return null}function wa(t){return t=t[$n]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function vl(t){return t[fa]||null}var gu=[],Yr=-1;function Yi(t){return{current:t}}function ot(t){0>Yr||(t.current=gu[Yr],gu[Yr]=null,Yr--)}function rt(t,e){Yr++,gu[Yr]=t.current,t.current=e}var ji={},Wt=Yi(ji),sn=Yi(!1),gr=ji;function ds(t,e){var n=t.type.contextTypes;if(!n)return ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function Wo(){ot(sn),ot(Wt)}function Of(t,e,n){if(Wt.current!==ji)throw Error(ie(168));rt(Wt,e),rt(sn,n)}function Zm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Tv(t)||"Unknown",r));return ht({},n,i)}function jo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,gr=Wt.current,rt(Wt,t),rt(sn,sn.current),!0}function kf(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Zm(t,e,gr),i.__reactInternalMemoizedMergedChildContext=t,ot(sn),ot(Wt),rt(Wt,t)):ot(sn),rt(sn,n)}var oi=null,xl=!1,tc=!1;function Qm(t){oi===null?oi=[t]:oi.push(t)}function Gx(t){xl=!0,Qm(t)}function $i(){if(!tc&&oi!==null){tc=!0;var t=0,e=Je;try{var n=oi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,xl=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),Em(id,$i),r}finally{Je=e,tc=!1}}return null}var $r=[],Kr=0,Xo=null,qo=0,Mn=[],En=0,vr=null,ci=1,ui="";function nr(t,e){$r[Kr++]=qo,$r[Kr++]=Xo,Xo=t,qo=e}function Jm(t,e,n){Mn[En++]=ci,Mn[En++]=ui,Mn[En++]=vr,vr=t;var i=ci;t=ui;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ci=1<<32-Bn(e)+r|n<<r|i,ui=s+t}else ci=1<<s|n<<r|i,ui=t}function fd(t){t.return!==null&&(nr(t,1),Jm(t,1,0))}function hd(t){for(;t===Xo;)Xo=$r[--Kr],$r[Kr]=null,qo=$r[--Kr],$r[Kr]=null;for(;t===vr;)vr=Mn[--En],Mn[En]=null,ui=Mn[--En],Mn[En]=null,ci=Mn[--En],Mn[En]=null}var mn=null,pn=null,lt=!1,Fn=null;function eg(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vr!==null?{id:ci,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xu(t){if(lt){var e=pn;if(e){var n=e;if(!zf(t,e)){if(vu(t))throw Error(ie(418));e=Fi(n.nextSibling);var i=mn;e&&zf(t,e)?eg(i,n):(t.flags=t.flags&-4097|2,lt=!1,mn=t)}}else{if(vu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,lt=!1,mn=t}}}function Bf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Wa(t){if(t!==mn)return!1;if(!lt)return Bf(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hu(t.type,t.memoizedProps)),e&&(e=pn)){if(vu(t))throw tg(),Error(ie(418));for(;e;)eg(t,e),e=Fi(e.nextSibling)}if(Bf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Fi(t.stateNode.nextSibling):null;return!0}function tg(){for(var t=pn;t;)t=Fi(t.nextSibling)}function fs(){pn=mn=null,lt=!1}function pd(t){Fn===null?Fn=[t]:Fn.push(t)}var Vx=xi.ReactCurrentBatchConfig;function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function ja(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hf(t){var e=t._init;return e(t._payload)}function ng(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Bi(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,v,M){return g===null||g.tag!==6?(g=lc(v,u.mode,M),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,M){var L=v.type;return L===Vr?f(u,g,v.props.children,M,v.key):g!==null&&(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ti&&Hf(L)===g.type)?(M=r(g,v.props),M.ref=Ds(u,g,v),M.return=u,M):(M=Do(v.type,v.key,v.props,null,u.mode,M),M.ref=Ds(u,g,v),M.return=u,M)}function c(u,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=cc(v,u.mode,M),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function f(u,g,v,M,L){return g===null||g.tag!==7?(g=fr(v,u.mode,M,L),g.return=u,g):(g=r(g,v),g.return=u,g)}function d(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=lc(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ua:return v=Do(g.type,g.key,g.props,null,u.mode,v),v.ref=Ds(u,null,g),v.return=u,v;case Gr:return g=cc(g,u.mode,v),g.return=u,g;case Ti:var M=g._init;return d(u,M(g._payload),v)}if(Vs(g)||Cs(g))return g=fr(g,u.mode,v,null),g.return=u,g;ja(u,g)}return null}function h(u,g,v,M){var L=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return L!==null?null:o(u,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ua:return v.key===L?l(u,g,v,M):null;case Gr:return v.key===L?c(u,g,v,M):null;case Ti:return L=v._init,h(u,g,L(v._payload),M)}if(Vs(v)||Cs(v))return L!==null?null:f(u,g,v,M,null);ja(u,v)}return null}function m(u,g,v,M,L){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,o(g,u,""+M,L);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ua:return u=u.get(M.key===null?v:M.key)||null,l(g,u,M,L);case Gr:return u=u.get(M.key===null?v:M.key)||null,c(g,u,M,L);case Ti:var R=M._init;return m(u,g,v,R(M._payload),L)}if(Vs(M)||Cs(M))return u=u.get(v)||null,f(g,u,M,L,null);ja(g,M)}return null}function _(u,g,v,M){for(var L=null,R=null,P=g,z=g=0,E=null;P!==null&&z<v.length;z++){P.index>z?(E=P,P=null):E=P.sibling;var T=h(u,P,v[z],M);if(T===null){P===null&&(P=E);break}t&&P&&T.alternate===null&&e(u,P),g=s(T,g,z),R===null?L=T:R.sibling=T,R=T,P=E}if(z===v.length)return n(u,P),lt&&nr(u,z),L;if(P===null){for(;z<v.length;z++)P=d(u,v[z],M),P!==null&&(g=s(P,g,z),R===null?L=P:R.sibling=P,R=P);return lt&&nr(u,z),L}for(P=i(u,P);z<v.length;z++)E=m(P,u,z,v[z],M),E!==null&&(t&&E.alternate!==null&&P.delete(E.key===null?z:E.key),g=s(E,g,z),R===null?L=E:R.sibling=E,R=E);return t&&P.forEach(function(q){return e(u,q)}),lt&&nr(u,z),L}function y(u,g,v,M){var L=Cs(v);if(typeof L!="function")throw Error(ie(150));if(v=L.call(v),v==null)throw Error(ie(151));for(var R=L=null,P=g,z=g=0,E=null,T=v.next();P!==null&&!T.done;z++,T=v.next()){P.index>z?(E=P,P=null):E=P.sibling;var q=h(u,P,T.value,M);if(q===null){P===null&&(P=E);break}t&&P&&q.alternate===null&&e(u,P),g=s(q,g,z),R===null?L=q:R.sibling=q,R=q,P=E}if(T.done)return n(u,P),lt&&nr(u,z),L;if(P===null){for(;!T.done;z++,T=v.next())T=d(u,T.value,M),T!==null&&(g=s(T,g,z),R===null?L=T:R.sibling=T,R=T);return lt&&nr(u,z),L}for(P=i(u,P);!T.done;z++,T=v.next())T=m(P,u,z,T.value,M),T!==null&&(t&&T.alternate!==null&&P.delete(T.key===null?z:T.key),g=s(T,g,z),R===null?L=T:R.sibling=T,R=T);return t&&P.forEach(function(K){return e(u,K)}),lt&&nr(u,z),L}function p(u,g,v,M){if(typeof v=="object"&&v!==null&&v.type===Vr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ua:e:{for(var L=v.key,R=g;R!==null;){if(R.key===L){if(L=v.type,L===Vr){if(R.tag===7){n(u,R.sibling),g=r(R,v.props.children),g.return=u,u=g;break e}}else if(R.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ti&&Hf(L)===R.type){n(u,R.sibling),g=r(R,v.props),g.ref=Ds(u,R,v),g.return=u,u=g;break e}n(u,R);break}else e(u,R);R=R.sibling}v.type===Vr?(g=fr(v.props.children,u.mode,M,v.key),g.return=u,u=g):(M=Do(v.type,v.key,v.props,null,u.mode,M),M.ref=Ds(u,g,v),M.return=u,u=M)}return a(u);case Gr:e:{for(R=v.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=cc(v,u.mode,M),g.return=u,u=g}return a(u);case Ti:return R=v._init,p(u,g,R(v._payload),M)}if(Vs(v))return _(u,g,v,M);if(Cs(v))return y(u,g,v,M);ja(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=lc(v,u.mode,M),g.return=u,u=g),a(u)):n(u,g)}return p}var hs=ng(!0),ig=ng(!1),Yo=Yi(null),$o=null,Zr=null,md=null;function gd(){md=Zr=$o=null}function vd(t){var e=Yo.current;ot(Yo),t._currentValue=e}function _u(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function as(t,e){$o=t,md=Zr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(md!==t)if(t={context:t,memoizedValue:e,next:null},Zr===null){if($o===null)throw Error(ie(308));Zr=t,$o.dependencies={lanes:0,firstContext:t}}else Zr=Zr.next=t;return e}var cr=null;function xd(t){cr===null?cr=[t]:cr.push(t)}function rg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,xd(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bi=!1;function _d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Oi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,xd(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function Ao(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rd(t,n)}}function Gf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ko(t,e,n,i){var r=t.updateQueue;bi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,f=c=l=null,o=s;do{var h=o.lane,m=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(h=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=ht({},d,h);break e;case 2:bi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=d):f=f.next=m,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);_r|=a,t.lanes=a,t.memoizedState=d}}function Vf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ta={},Qn=Yi(Ta),ha=Yi(Ta),pa=Yi(Ta);function ur(t){if(t===Ta)throw Error(ie(174));return t}function yd(t,e){switch(rt(pa,e),rt(ha,t),rt(Qn,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jc(e,t)}ot(Qn),rt(Qn,e)}function ps(){ot(Qn),ot(ha),ot(pa)}function ag(t){ur(pa.current);var e=ur(Qn.current),n=Jc(e,t.type);e!==n&&(rt(ha,t),rt(Qn,n))}function Sd(t){ha.current===t&&(ot(Qn),ot(ha))}var dt=Yi(0);function Zo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nc=[];function Md(){for(var t=0;t<nc.length;t++)nc[t]._workInProgressVersionPrimary=null;nc.length=0}var Co=xi.ReactCurrentDispatcher,ic=xi.ReactCurrentBatchConfig,xr=0,ft=null,Mt=null,Lt=null,Qo=!1,Zs=!1,ma=0,Wx=0;function zt(){throw Error(ie(321))}function Ed(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function wd(t,e,n,i,r,s){if(xr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Co.current=t===null||t.memoizedState===null?Yx:$x,t=n(i,r),Zs){s=0;do{if(Zs=!1,ma=0,25<=s)throw Error(ie(301));s+=1,Lt=Mt=null,e.updateQueue=null,Co.current=Kx,t=n(i,r)}while(Zs)}if(Co.current=Jo,e=Mt!==null&&Mt.next!==null,xr=0,Lt=Mt=ft=null,Qo=!1,e)throw Error(ie(300));return t}function Td(){var t=ma!==0;return ma=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ft.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Rn(){if(Mt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Lt===null?ft.memoizedState:Lt.next;if(e!==null)Lt=e,Mt=t;else{if(t===null)throw Error(ie(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Lt===null?ft.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function ga(t,e){return typeof e=="function"?e(t):e}function rc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((xr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,ft.lanes|=f,_r|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Vn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,_r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Vn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function og(){}function lg(t,e){var n=ft,i=Rn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,bd(dg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,va(9,ug.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(ie(349));xr&30||cg(n,e,r)}return r}function cg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ug(t,e,n,i){e.value=n,e.getSnapshot=i,fg(e)&&hg(t)}function dg(t,e,n){return n(function(){fg(e)&&hg(t)})}function fg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function hg(t){var e=mi(t,1);e!==null&&Hn(e,t,1,-1)}function Wf(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},e.queue=t,t=t.dispatch=qx.bind(null,ft,t),[e.memoizedState,t]}function va(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function pg(){return Rn().memoizedState}function Ro(t,e,n,i){var r=qn();ft.flags|=t,r.memoizedState=va(1|e,n,void 0,i===void 0?null:i)}function _l(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var a=Mt.memoizedState;if(s=a.destroy,i!==null&&Ed(i,a.deps)){r.memoizedState=va(e,n,s,i);return}}ft.flags|=t,r.memoizedState=va(1|e,n,s,i)}function jf(t,e){return Ro(8390656,8,t,e)}function bd(t,e){return _l(2048,8,t,e)}function mg(t,e){return _l(4,2,t,e)}function gg(t,e){return _l(4,4,t,e)}function vg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xg(t,e,n){return n=n!=null?n.concat([t]):null,_l(4,4,vg.bind(null,e,t),n)}function Ad(){}function _g(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ed(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function yg(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ed(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Sg(t,e,n){return xr&21?(Vn(n,e)||(n=bm(),ft.lanes|=n,_r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function jx(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=ic.transition;ic.transition={};try{t(!1),e()}finally{Je=n,ic.transition=i}}function Mg(){return Rn().memoizedState}function Xx(t,e,n){var i=zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Eg(t))wg(e,n);else if(n=rg(t,e,n,i),n!==null){var r=Kt();Hn(n,t,i,r),Tg(n,e,i)}}function qx(t,e,n){var i=zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eg(t))wg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Vn(o,a)){var l=e.interleaved;l===null?(r.next=r,xd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=rg(t,e,r,i),n!==null&&(r=Kt(),Hn(n,t,i,r),Tg(n,e,i))}}function Eg(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function wg(t,e){Zs=Qo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Tg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rd(t,n)}}var Jo={readContext:Cn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},Yx={readContext:Cn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:jf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ro(4194308,4,vg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ro(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ro(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Xx.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:Wf,useDebugValue:Ad,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Wf(!1),e=t[0];return t=jx.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=qn();if(lt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Nt===null)throw Error(ie(349));xr&30||cg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,jf(dg.bind(null,i,s,t),[t]),i.flags|=2048,va(9,ug.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=Nt.identifierPrefix;if(lt){var n=ui,i=ci;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Wx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$x={readContext:Cn,useCallback:_g,useContext:Cn,useEffect:bd,useImperativeHandle:xg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:yg,useReducer:rc,useRef:pg,useState:function(){return rc(ga)},useDebugValue:Ad,useDeferredValue:function(t){var e=Rn();return Sg(e,Mt.memoizedState,t)},useTransition:function(){var t=rc(ga)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:og,useSyncExternalStore:lg,useId:Mg,unstable_isNewReconciler:!1},Kx={readContext:Cn,useCallback:_g,useContext:Cn,useEffect:bd,useImperativeHandle:xg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:yg,useReducer:sc,useRef:pg,useState:function(){return sc(ga)},useDebugValue:Ad,useDeferredValue:function(t){var e=Rn();return Mt===null?e.memoizedState=t:Sg(e,Mt.memoizedState,t)},useTransition:function(){var t=sc(ga)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:og,useSyncExternalStore:lg,useId:Mg,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yl={isMounted:function(t){return(t=t._reactInternals)?wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=zi(t),s=fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(Hn(e,t,r,i),Ao(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=zi(t),s=fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(Hn(e,t,r,i),Ao(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=zi(t),r=fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Oi(t,r,i),e!==null&&(Hn(e,t,i,n),Ao(e,t,i))}};function Xf(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ca(n,i)||!ca(r,s):!0}function bg(t,e,n){var i=!1,r=ji,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=an(e)?gr:Wt.current,i=e.contextTypes,s=(i=i!=null)?ds(t,r):ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function qf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&yl.enqueueReplaceState(e,e.state,null)}function Su(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},_d(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=an(e)?gr:Wt.current,r.context=ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yl.enqueueReplaceState(r,r.state,null),Ko(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e){try{var n="",i=e;do n+=wv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ac(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Zx=typeof WeakMap=="function"?WeakMap:Map;function Ag(t,e,n){n=fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){tl||(tl=!0,Nu=i),Mu(t,e)},n}function Cg(t,e,n){n=fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Mu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mu(t,e),typeof i!="function"&&(ki===null?ki=new Set([this]):ki.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Yf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Zx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=d_.bind(null,t,e,n),e.then(t,t))}function $f(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fi(-1,1),e.tag=2,Oi(n,e,1))),n.lanes|=1),t)}var Qx=xi.ReactCurrentOwner,rn=!1;function Yt(t,e,n,i){e.child=t===null?ig(e,null,n,i):hs(e,t.child,n,i)}function Zf(t,e,n,i,r){n=n.render;var s=e.ref;return as(e,r),i=wd(t,e,n,i,s,r),n=Td(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(lt&&n&&fd(e),e.flags|=1,Yt(t,e,i,r),e.child)}function Qf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Rg(t,e,s,i,r)):(t=Do(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ca,n(a,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Bi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Rg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ca(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,gi(t,e,r)}return Eu(t,e,n,i,r)}function Pg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Jr,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(Jr,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(Jr,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(Jr,hn),hn|=i;return Yt(t,e,r,n),e.child}function Lg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Eu(t,e,n,i,r){var s=an(n)?gr:Wt.current;return s=ds(e,s),as(e,r),n=wd(t,e,n,i,s,r),i=Td(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(lt&&i&&fd(e),e.flags|=1,Yt(t,e,n,r),e.child)}function Jf(t,e,n,i,r){if(an(n)){var s=!0;jo(e)}else s=!1;if(as(e,r),e.stateNode===null)Po(t,e),bg(e,n,i),Su(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=an(n)?gr:Wt.current,c=ds(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&qf(e,a,i,c),bi=!1;var h=e.memoizedState;a.state=h,Ko(e,i,a,r),l=e.memoizedState,o!==i||h!==l||sn.current||bi?(typeof f=="function"&&(yu(e,n,f,i),l=e.memoizedState),(o=bi||Xf(e,n,o,i,h,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,sg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Un(e.type,o),a.props=c,d=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=an(n)?gr:Wt.current,l=ds(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||h!==l)&&qf(e,a,i,l),bi=!1,h=e.memoizedState,a.state=h,Ko(e,i,a,r);var _=e.memoizedState;o!==d||h!==_||sn.current||bi?(typeof m=="function"&&(yu(e,n,m,i),_=e.memoizedState),(c=bi||Xf(e,n,c,i,h,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return wu(t,e,n,i,s,r)}function wu(t,e,n,i,r,s){Lg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&kf(e,n,!1),gi(t,e,s);i=e.stateNode,Qx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=hs(e,t.child,null,s),e.child=hs(e,null,o,s)):Yt(t,e,o,s),e.memoizedState=i.state,r&&kf(e,n,!0),e.child}function Ng(t){var e=t.stateNode;e.pendingContext?Of(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Of(t,e.context,!1),yd(t,e.containerInfo)}function eh(t,e,n,i,r){return fs(),pd(r),e.flags|=256,Yt(t,e,n,i),e.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function bu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dg(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(dt,r&1),t===null)return xu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=El(a,i,0,null),t=fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bu(n),e.memoizedState=Tu,t):Cd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Jx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Bi(o,s):(s=fr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?bu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Tu,i}return s=t.child,t=s.sibling,i=Bi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Cd(t,e){return e=El({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xa(t,e,n,i){return i!==null&&pd(i),hs(e,t.child,null,n),t=Cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Jx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=ac(Error(ie(422))),Xa(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=El({mode:"visible",children:i.children},r,0,null),s=fr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&hs(e,t.child,null,a),e.child.memoizedState=bu(a),e.memoizedState=Tu,s);if(!(e.mode&1))return Xa(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=ac(s,i,void 0),Xa(t,e,a,i)}if(o=(a&t.childLanes)!==0,rn||o){if(i=Nt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),Hn(i,t,r,-1))}return Ud(),i=ac(Error(ie(421))),Xa(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=f_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Fi(r.nextSibling),mn=e,lt=!0,Fn=null,t!==null&&(Mn[En++]=ci,Mn[En++]=ui,Mn[En++]=vr,ci=t.id,ui=t.overflow,vr=e),e=Cd(e,i.children),e.flags|=4096,e)}function th(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_u(t.return,e,n)}function oc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ug(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&th(t,n,e);else if(t.tag===19)th(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Zo(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),oc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Zo(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}oc(e,!0,n,null,s);break;case"together":oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Po(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function e_(t,e,n){switch(e.tag){case 3:Ng(e),fs();break;case 5:ag(e);break;case 1:an(e.type)&&jo(e);break;case 4:yd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Yo,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Dg(t,e,n):(rt(dt,dt.current&1),t=gi(t,e,n),t!==null?t.sibling:null);rt(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ug(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Pg(t,e,n)}return gi(t,e,n)}var Ig,Au,Fg,Og;Ig=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Au=function(){};Fg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ur(Qn.current);var s=null;switch(n){case"input":r=$c(t,r),i=$c(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=Qc(t,r),i=Qc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vo)}eu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(na.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(na.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Og=function(t,e,n,i){n!==i&&(e.flags|=4)};function Us(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function t_(t,e,n){var i=e.pendingProps;switch(hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return an(e.type)&&Wo(),Bt(e),null;case 3:return i=e.stateNode,ps(),ot(sn),ot(Wt),Md(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(Iu(Fn),Fn=null))),Au(t,e),Bt(e),null;case 5:Sd(e);var r=ur(pa.current);if(n=e.type,t!==null&&e.stateNode!=null)Fg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Bt(e),null}if(t=ur(Qn.current),Wa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[fa]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<js.length;r++)st(js[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":uf(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":ff(i,s),st("invalid",i)}eu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Va(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Va(i.textContent,o,t),r=["children",""+o]):na.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&st("scroll",i)}switch(n){case"input":Ia(i),df(i,s,!0);break;case"textarea":Ia(i),hf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vo)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[$n]=e,t[fa]=i,Ig(t,e,!1,!1),e.stateNode=t;e:{switch(a=tu(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<js.length;r++)st(js[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":uf(t,i),r=$c(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),st("invalid",t);break;case"textarea":ff(t,i),r=Qc(t,i),st("invalid",t);break;default:r=i}eu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?pm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ia(t,l):typeof l=="number"&&ia(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(na.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&Qu(t,s,l,a))}switch(n){case"input":Ia(t),df(t,i,!1);break;case"textarea":Ia(t),hf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ns(t,!!i.multiple,s,!1):i.defaultValue!=null&&ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)Og(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=ur(pa.current),ur(Qn.current),Wa(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Va(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Va(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Bt(e),null;case 13:if(ot(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&pn!==null&&e.mode&1&&!(e.flags&128))tg(),fs(),e.flags|=98560,s=!1;else if(s=Wa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[$n]=e}else fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Fn!==null&&(Iu(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Et===0&&(Et=3):Ud())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return ps(),Au(t,e),t===null&&ua(e.stateNode.containerInfo),Bt(e),null;case 10:return vd(e.type._context),Bt(e),null;case 17:return an(e.type)&&Wo(),Bt(e),null;case 19:if(ot(dt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Us(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Zo(t),a!==null){for(e.flags|=128,Us(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>gs&&(e.flags|=128,i=!0,Us(s,!1),e.lanes=4194304)}else{if(!i)if(t=Zo(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Us(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!lt)return Bt(e),null}else 2*xt()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,i=!0,Us(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=dt.current,rt(dt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Dd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function n_(t,e){switch(hd(e),e.tag){case 1:return an(e.type)&&Wo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),ot(sn),ot(Wt),Md(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sd(e),null;case 13:if(ot(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(dt),null;case 4:return ps(),null;case 10:return vd(e.type._context),null;case 22:case 23:return Dd(),null;case 24:return null;default:return null}}var qa=!1,Vt=!1,i_=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function Cu(t,e,n){try{n()}catch(i){gt(t,e,i)}}var nh=!1;function r_(t,e){if(du=Bo,t=Gm(),dd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++f===i&&(l=a),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fu={focusedElem:t,selectionRange:n},Bo=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Un(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){gt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return _=nh,nh=!1,_}function Qs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Cu(e,n,s)}r=r.next}while(r!==i)}}function Sl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ru(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kg(t){var e=t.alternate;e!==null&&(t.alternate=null,kg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[fa],delete e[mu],delete e[Bx],delete e[Hx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zg(t){return t.tag===5||t.tag===3||t.tag===4}function ih(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vo));else if(i!==4&&(t=t.child,t!==null))for(Pu(t,e,n),t=t.sibling;t!==null;)Pu(t,e,n),t=t.sibling}function Lu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Lu(t,e,n),t=t.sibling;t!==null;)Lu(t,e,n),t=t.sibling}var Dt=null,In=!1;function _i(t,e,n){for(n=n.child;n!==null;)Bg(t,e,n),n=n.sibling}function Bg(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:Vt||Qr(n,e);case 6:var i=Dt,r=In;Dt=null,_i(t,e,n),Dt=i,In=r,Dt!==null&&(In?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(In?(t=Dt,n=n.stateNode,t.nodeType===8?ec(t.parentNode,n):t.nodeType===1&&ec(t,n),oa(t)):ec(Dt,n.stateNode));break;case 4:i=Dt,r=In,Dt=n.stateNode.containerInfo,In=!0,_i(t,e,n),Dt=i,In=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Cu(n,e,a),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!Vt&&(Qr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){gt(n,e,o)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,_i(t,e,n),Vt=i):_i(t,e,n);break;default:_i(t,e,n)}}function rh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new i_),e.forEach(function(i){var r=h_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Dt=o.stateNode,In=!1;break e;case 3:Dt=o.stateNode.containerInfo,In=!0;break e;case 4:Dt=o.stateNode.containerInfo,In=!0;break e}o=o.return}if(Dt===null)throw Error(ie(160));Bg(s,a,r),Dt=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hg(e,t),e=e.sibling}function Hg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Xn(t),i&4){try{Qs(3,t,t.return),Sl(3,t)}catch(y){gt(t,t.return,y)}try{Qs(5,t,t.return)}catch(y){gt(t,t.return,y)}}break;case 1:Pn(e,t),Xn(t),i&512&&n!==null&&Qr(n,n.return);break;case 5:if(Pn(e,t),Xn(t),i&512&&n!==null&&Qr(n,n.return),t.flags&32){var r=t.stateNode;try{ia(r,"")}catch(y){gt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&cm(r,s),tu(o,a);var c=tu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],d=l[a+1];f==="style"?pm(r,d):f==="dangerouslySetInnerHTML"?fm(r,d):f==="children"?ia(r,d):Qu(r,f,d,c)}switch(o){case"input":Kc(r,s);break;case"textarea":um(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ns(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?ns(r,!!s.multiple,s.defaultValue,!0):ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[fa]=s}catch(y){gt(t,t.return,y)}}break;case 6:if(Pn(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){gt(t,t.return,y)}}break;case 3:if(Pn(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{oa(e.containerInfo)}catch(y){gt(t,t.return,y)}break;case 4:Pn(e,t),Xn(t);break;case 13:Pn(e,t),Xn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ld=xt())),i&4&&rh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||f,Pn(e,t),Vt=c):Pn(e,t),Xn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(xe=t,f=t.child;f!==null;){for(d=xe=f;xe!==null;){switch(h=xe,m=h.child,h.tag){case 0:case 11:case 14:case 15:Qs(4,h,h.return);break;case 1:Qr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){gt(i,n,y)}}break;case 5:Qr(h,h.return);break;case 22:if(h.memoizedState!==null){ah(d);continue}}m!==null?(m.return=h,xe=m):ah(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=hm("display",a))}catch(y){gt(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){gt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pn(e,t),Xn(t),i&4&&rh(t);break;case 21:break;default:Pn(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zg(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ia(r,""),i.flags&=-33);var s=ih(t);Lu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=ih(t);Pu(t,o,a);break;default:throw Error(ie(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function s_(t,e,n){xe=t,Gg(t)}function Gg(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||qa;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Vt;o=qa;var c=Vt;if(qa=a,(Vt=l)&&!c)for(xe=r;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?oh(r):l!==null?(l.return=a,xe=l):oh(r);for(;s!==null;)xe=s,Gg(s),s=s.sibling;xe=r,qa=o,Vt=c}sh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):sh(t)}}function sh(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Sl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vf(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vf(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&oa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Vt||e.flags&512&&Ru(e)}catch(h){gt(e,e.return,h)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function ah(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function oh(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sl(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{Ru(e)}catch(l){gt(e,s,l)}break;case 5:var a=e.return;try{Ru(e)}catch(l){gt(e,a,l)}}}catch(l){gt(e,e.return,l)}if(e===t){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var a_=Math.ceil,el=xi.ReactCurrentDispatcher,Rd=xi.ReactCurrentOwner,An=xi.ReactCurrentBatchConfig,qe=0,Nt=null,St=null,It=0,hn=0,Jr=Yi(0),Et=0,xa=null,_r=0,Ml=0,Pd=0,Js=null,en=null,Ld=0,gs=1/0,ai=null,tl=!1,Nu=null,ki=null,Ya=!1,Pi=null,nl=0,ea=0,Du=null,Lo=-1,No=0;function Kt(){return qe&6?xt():Lo!==-1?Lo:Lo=xt()}function zi(t){return t.mode&1?qe&2&&It!==0?It&-It:Vx.transition!==null?(No===0&&(No=bm()),No):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Dm(t.type)),t):1}function Hn(t,e,n,i){if(50<ea)throw ea=0,Du=null,Error(ie(185));Ma(t,n,i),(!(qe&2)||t!==Nt)&&(t===Nt&&(!(qe&2)&&(Ml|=n),Et===4&&Ci(t,It)),on(t,i),n===1&&qe===0&&!(e.mode&1)&&(gs=xt()+500,xl&&$i()))}function on(t,e){var n=t.callbackNode;Vv(t,e);var i=zo(t,t===Nt?It:0);if(i===0)n!==null&&gf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gf(n),e===1)t.tag===0?Gx(lh.bind(null,t)):Qm(lh.bind(null,t)),kx(function(){!(qe&6)&&$i()}),n=null;else{switch(Am(i)){case 1:n=id;break;case 4:n=wm;break;case 16:n=ko;break;case 536870912:n=Tm;break;default:n=ko}n=Kg(n,Vg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vg(t,e){if(Lo=-1,No=0,qe&6)throw Error(ie(327));var n=t.callbackNode;if(os()&&t.callbackNode!==n)return null;var i=zo(t,t===Nt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=il(t,i);else{e=i;var r=qe;qe|=2;var s=jg();(Nt!==t||It!==e)&&(ai=null,gs=xt()+500,dr(t,e));do try{c_();break}catch(o){Wg(t,o)}while(!0);gd(),el.current=s,qe=r,St!==null?e=0:(Nt=null,It=0,e=Et)}if(e!==0){if(e===2&&(r=au(t),r!==0&&(i=r,e=Uu(t,r))),e===1)throw n=xa,dr(t,0),Ci(t,i),on(t,xt()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!o_(r)&&(e=il(t,i),e===2&&(s=au(t),s!==0&&(i=s,e=Uu(t,s))),e===1))throw n=xa,dr(t,0),Ci(t,i),on(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:ir(t,en,ai);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=Ld+500-xt(),10<e)){if(zo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=pu(ir.bind(null,t,en,ai),e);break}ir(t,en,ai);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Bn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*a_(i/1960))-i,10<i){t.timeoutHandle=pu(ir.bind(null,t,en,ai),i);break}ir(t,en,ai);break;case 5:ir(t,en,ai);break;default:throw Error(ie(329))}}}return on(t,xt()),t.callbackNode===n?Vg.bind(null,t):null}function Uu(t,e){var n=Js;return t.current.memoizedState.isDehydrated&&(dr(t,e).flags|=256),t=il(t,e),t!==2&&(e=en,en=n,e!==null&&Iu(e)),t}function Iu(t){en===null?en=t:en.push.apply(en,t)}function o_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~Pd,e&=~Ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function lh(t){if(qe&6)throw Error(ie(327));os();var e=zo(t,0);if(!(e&1))return on(t,xt()),null;var n=il(t,e);if(t.tag!==0&&n===2){var i=au(t);i!==0&&(e=i,n=Uu(t,i))}if(n===1)throw n=xa,dr(t,0),Ci(t,e),on(t,xt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ir(t,en,ai),on(t,xt()),null}function Nd(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(gs=xt()+500,xl&&$i())}}function yr(t){Pi!==null&&Pi.tag===0&&!(qe&6)&&os();var e=qe;qe|=1;var n=An.transition,i=Je;try{if(An.transition=null,Je=1,t)return t()}finally{Je=i,An.transition=n,qe=e,!(qe&6)&&$i()}}function Dd(){hn=Jr.current,ot(Jr)}function dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ox(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(hd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wo();break;case 3:ps(),ot(sn),ot(Wt),Md();break;case 5:Sd(i);break;case 4:ps();break;case 13:ot(dt);break;case 19:ot(dt);break;case 10:vd(i.type._context);break;case 22:case 23:Dd()}n=n.return}if(Nt=t,St=t=Bi(t.current,null),It=hn=e,Et=0,xa=null,Pd=Ml=_r=0,en=Js=null,cr!==null){for(e=0;e<cr.length;e++)if(n=cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}cr=null}return t}function Wg(t,e){do{var n=St;try{if(gd(),Co.current=Jo,Qo){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Qo=!1}if(xr=0,Lt=Mt=ft=null,Zs=!1,ma=0,Rd.current=null,n===null||n.return===null){Et=1,xa=e,St=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=It,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=$f(a);if(m!==null){m.flags&=-257,Kf(m,a,o,s,e),m.mode&1&&Yf(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Yf(s,c,e),Ud();break e}l=Error(ie(426))}}else if(lt&&o.mode&1){var p=$f(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Kf(p,a,o,s,e),pd(ms(l,o));break e}}s=l=ms(l,o),Et!==4&&(Et=2),Js===null?Js=[s]:Js.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Ag(s,l,e);Gf(s,u);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ki===null||!ki.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Cg(s,o,e);Gf(s,M);break e}}s=s.return}while(s!==null)}qg(n)}catch(L){e=L,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function jg(){var t=el.current;return el.current=Jo,t===null?Jo:t}function Ud(){(Et===0||Et===3||Et===2)&&(Et=4),Nt===null||!(_r&268435455)&&!(Ml&268435455)||Ci(Nt,It)}function il(t,e){var n=qe;qe|=2;var i=jg();(Nt!==t||It!==e)&&(ai=null,dr(t,e));do try{l_();break}catch(r){Wg(t,r)}while(!0);if(gd(),qe=n,el.current=i,St!==null)throw Error(ie(261));return Nt=null,It=0,Et}function l_(){for(;St!==null;)Xg(St)}function c_(){for(;St!==null&&!Uv();)Xg(St)}function Xg(t){var e=$g(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?qg(t):St=e,Rd.current=null}function qg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=n_(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,St=null;return}}else if(n=t_(n,e,hn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Et===0&&(Et=5)}function ir(t,e,n){var i=Je,r=An.transition;try{An.transition=null,Je=1,u_(t,e,n,i)}finally{An.transition=r,Je=i}return null}function u_(t,e,n,i){do os();while(Pi!==null);if(qe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Wv(t,s),t===Nt&&(St=Nt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ya||(Ya=!0,Kg(ko,function(){return os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var a=Je;Je=1;var o=qe;qe|=4,Rd.current=null,r_(t,n),Hg(n,t),Px(fu),Bo=!!du,fu=du=null,t.current=n,s_(n),Iv(),qe=o,Je=a,An.transition=s}else t.current=n;if(Ya&&(Ya=!1,Pi=t,nl=r),s=t.pendingLanes,s===0&&(ki=null),kv(n.stateNode),on(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(tl)throw tl=!1,t=Nu,Nu=null,t;return nl&1&&t.tag!==0&&os(),s=t.pendingLanes,s&1?t===Du?ea++:(ea=0,Du=t):ea=0,$i(),null}function os(){if(Pi!==null){var t=Am(nl),e=An.transition,n=Je;try{if(An.transition=null,Je=16>t?16:t,Pi===null)var i=!1;else{if(t=Pi,Pi=null,nl=0,qe&6)throw Error(ie(331));var r=qe;for(qe|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(xe=c;xe!==null;){var f=xe;switch(f.tag){case 0:case 11:case 15:Qs(8,f,s)}var d=f.child;if(d!==null)d.return=f,xe=d;else for(;xe!==null;){f=xe;var h=f.sibling,m=f.return;if(kg(f),f===c){xe=null;break}if(h!==null){h.return=m,xe=h;break}xe=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qs(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,xe=u;break e}xe=s.return}}var g=t.current;for(xe=g;xe!==null;){a=xe;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,xe=v;else e:for(a=g;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Sl(9,o)}}catch(L){gt(o,o.return,L)}if(o===a){xe=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,xe=M;break e}xe=o.return}}if(qe=r,$i(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(hl,t)}catch{}i=!0}return i}finally{Je=n,An.transition=e}}return!1}function ch(t,e,n){e=ms(n,e),e=Ag(t,e,1),t=Oi(t,e,1),e=Kt(),t!==null&&(Ma(t,1,e),on(t,e))}function gt(t,e,n){if(t.tag===3)ch(t,t,n);else for(;e!==null;){if(e.tag===3){ch(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ki===null||!ki.has(i))){t=ms(n,t),t=Cg(e,t,1),e=Oi(e,t,1),t=Kt(),e!==null&&(Ma(e,1,t),on(e,t));break}}e=e.return}}function d_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(It&n)===n&&(Et===4||Et===3&&(It&130023424)===It&&500>xt()-Ld?dr(t,0):Pd|=n),on(t,e)}function Yg(t,e){e===0&&(t.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var n=Kt();t=mi(t,e),t!==null&&(Ma(t,e,n),on(t,n))}function f_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Yg(t,n)}function h_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Yg(t,n)}var $g;$g=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,e_(t,e,n);rn=!!(t.flags&131072)}else rn=!1,lt&&e.flags&1048576&&Jm(e,qo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Po(t,e),t=e.pendingProps;var r=ds(e,Wt.current);as(e,n),r=wd(null,e,i,t,r,n);var s=Td();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,jo(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,_d(e),r.updater=yl,e.stateNode=r,r._reactInternals=e,Su(e,i,t,n),e=wu(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&fd(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Po(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=m_(i),t=Un(i,t),r){case 0:e=Eu(null,e,i,t,n);break e;case 1:e=Jf(null,e,i,t,n);break e;case 11:e=Zf(null,e,i,t,n);break e;case 14:e=Qf(null,e,i,Un(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Eu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Jf(t,e,i,r,n);case 3:e:{if(Ng(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,sg(t,e),Ko(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ms(Error(ie(423)),e),e=eh(t,e,i,n,r);break e}else if(i!==r){r=ms(Error(ie(424)),e),e=eh(t,e,i,n,r);break e}else for(pn=Fi(e.stateNode.containerInfo.firstChild),mn=e,lt=!0,Fn=null,n=ig(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fs(),i===r){e=gi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return ag(e),t===null&&xu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,hu(i,r)?a=null:s!==null&&hu(i,s)&&(e.flags|=32),Lg(t,e),Yt(t,e,a,n),e.child;case 6:return t===null&&xu(e),null;case 13:return Dg(t,e,n);case 4:return yd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=hs(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Zf(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,rt(Yo,i._currentValue),i._currentValue=a,s!==null)if(Vn(s.value,a)){if(s.children===r.children&&!sn.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_u(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),_u(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,as(e,n),r=Cn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),Qf(t,e,i,r,n);case 15:return Rg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Po(t,e),e.tag=1,an(i)?(t=!0,jo(e)):t=!1,as(e,n),bg(e,i,r),Su(e,i,r,n),wu(null,e,i,!0,t,n);case 19:return Ug(t,e,n);case 22:return Pg(t,e,n)}throw Error(ie(156,e.tag))};function Kg(t,e){return Em(t,e)}function p_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new p_(t,e,n,i)}function Id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function m_(t){if(typeof t=="function")return Id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ed)return 11;if(t===td)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Do(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Id(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Vr:return fr(n.children,r,s,e);case Ju:a=8,r|=8;break;case jc:return t=bn(12,n,e,r|2),t.elementType=jc,t.lanes=s,t;case Xc:return t=bn(13,n,e,r),t.elementType=Xc,t.lanes=s,t;case qc:return t=bn(19,n,e,r),t.elementType=qc,t.lanes=s,t;case am:return El(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rm:a=10;break e;case sm:a=9;break e;case ed:a=11;break e;case td:a=14;break e;case Ti:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=bn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function fr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function El(t,e,n,i){return t=bn(22,t,i,e),t.elementType=am,t.lanes=n,t.stateNode={isHidden:!1},t}function lc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function cc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function g_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Fd(t,e,n,i,r,s,a,o,l){return t=new g_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_d(s),t}function v_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Zg(t){if(!t)return ji;t=t._reactInternals;e:{if(wr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(an(n))return Zm(t,n,e)}return e}function Qg(t,e,n,i,r,s,a,o,l){return t=Fd(n,i,!0,t,r,s,a,o,l),t.context=Zg(null),n=t.current,i=Kt(),r=zi(n),s=fi(i,r),s.callback=e??null,Oi(n,s,r),t.current.lanes=r,Ma(t,r,i),on(t,i),t}function wl(t,e,n,i){var r=e.current,s=Kt(),a=zi(r);return n=Zg(n),e.context===null?e.context=n:e.pendingContext=n,e=fi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Oi(r,e,a),t!==null&&(Hn(t,r,a,s),Ao(t,r,a)),a}function rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function uh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Od(t,e){uh(t,e),(t=t.alternate)&&uh(t,e)}function x_(){return null}var Jg=typeof reportError=="function"?reportError:function(t){console.error(t)};function kd(t){this._internalRoot=t}Tl.prototype.render=kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));wl(t,e,null,null)};Tl.prototype.unmount=kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){wl(null,t,null,null)}),e[pi]=null}};function Tl(t){this._internalRoot=t}Tl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&Nm(t)}};function zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dh(){}function __(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=rl(a);s.call(c)}}var a=Qg(e,i,t,0,null,!1,!1,"",dh);return t._reactRootContainer=a,t[pi]=a.current,ua(t.nodeType===8?t.parentNode:t),yr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=rl(l);o.call(c)}}var l=Fd(t,0,!1,null,null,!1,!1,"",dh);return t._reactRootContainer=l,t[pi]=l.current,ua(t.nodeType===8?t.parentNode:t),yr(function(){wl(e,l,n,i)}),l}function Al(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=rl(a);o.call(l)}}wl(e,a,t,r)}else a=__(n,e,t,r,i);return rl(a)}Cm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(rd(e,n|1),on(e,xt()),!(qe&6)&&(gs=xt()+500,$i()))}break;case 13:yr(function(){var i=mi(t,1);if(i!==null){var r=Kt();Hn(i,t,1,r)}}),Od(t,1)}};sd=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Kt();Hn(e,t,134217728,n)}Od(t,134217728)}};Rm=function(t){if(t.tag===13){var e=zi(t),n=mi(t,e);if(n!==null){var i=Kt();Hn(n,t,e,i)}Od(t,e)}};Pm=function(){return Je};Lm=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};iu=function(t,e,n){switch(e){case"input":if(Kc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=vl(i);if(!r)throw Error(ie(90));lm(i),Kc(i,r)}}}break;case"textarea":um(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};vm=Nd;xm=yr;var y_={usingClientEntryPoint:!1,Events:[wa,qr,vl,mm,gm,Nd]},Is={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S_={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sm(t),t===null?null:t.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||x_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{hl=$a.inject(S_),Zn=$a}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y_;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(e))throw Error(ie(200));return v_(t,e,null,n)};xn.createRoot=function(t,e){if(!zd(t))throw Error(ie(299));var n=!1,i="",r=Jg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Fd(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,ua(t.nodeType===8?t.parentNode:t),new kd(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Sm(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return yr(t)};xn.hydrate=function(t,e,n){if(!bl(e))throw Error(ie(200));return Al(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!zd(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Jg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Qg(e,null,t,1,n??null,r,!1,s,a),t[pi]=e.current,ua(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Tl(e)};xn.render=function(t,e,n){if(!bl(e))throw Error(ie(200));return Al(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!bl(t))throw Error(ie(40));return t._reactRootContainer?(yr(function(){Al(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};xn.unstable_batchedUpdates=Nd;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!bl(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Al(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function e0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e0)}catch(t){console.error(t)}}e0(),em.exports=xn;var M_=em.exports,fh=M_;Vc.createRoot=fh.createRoot,Vc.hydrateRoot=fh.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),bt=(t,e)=>{const n=Xe.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},f)=>Xe.createElement("svg",{ref:f,...E_,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${w_(t)}`,o].join(" "),...c},[...e.map(([d,h])=>Xe.createElement(d,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=bt("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=bt("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=bt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=bt("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=bt("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=bt("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=bt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=bt("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=bt("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=bt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=bt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=bt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=bt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=bt("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=bt("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=bt("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=bt("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=bt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=bt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);class I_{constructor(){Na(this,"ctx",null);Na(this,"isMuted",!1);Na(this,"ambientInterval",null)}initCtx(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted&&this.ambientInterval&&(window.clearInterval(this.ambientInterval),this.ambientInterval=null),this.isMuted}getMutedState(){return this.isMuted}playGong(){if(!this.isMuted)try{if(this.initCtx(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(55,this.ctx.currentTime+2.5),n.gain.setValueAtTime(.4,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+2.8),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+3)}catch{}}playChopstickClick(){if(!this.isMuted)try{if(this.initCtx(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(200,this.ctx.currentTime+.08),n.gain.setValueAtTime(.3,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.08),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.09)}catch{}}playWuxiBlast(){if(!this.isMuted)try{if(this.initCtx(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(40,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(600,this.ctx.currentTime+1.2),n.gain.setValueAtTime(.1,this.ctx.currentTime),n.gain.linearRampToValueAtTime(.5,this.ctx.currentTime+1),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+2.5),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+2.6);const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(880,this.ctx.currentTime+1),i.frequency.exponentialRampToValueAtTime(1760,this.ctx.currentTime+1.5),r.gain.setValueAtTime(.01,this.ctx.currentTime),r.gain.setValueAtTime(.4,this.ctx.currentTime+1),r.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+3),i.connect(r),r.connect(this.ctx.destination),i.start(this.ctx.currentTime+.9),i.stop(this.ctx.currentTime+3.1)}catch{}}playFluteNote(e=440){if(!this.isMuted)try{if(this.initCtx(),!this.ctx)return;const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(e,this.ctx.currentTime),n.frequency.linearRampToValueAtTime(e*1.01,this.ctx.currentTime+.5),n.frequency.linearRampToValueAtTime(e,this.ctx.currentTime+1),i.gain.setValueAtTime(.001,this.ctx.currentTime),i.gain.linearRampToValueAtTime(.08,this.ctx.currentTime+.3),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+2.2),n.connect(i),i.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+2.3)}catch{}}startAmbientSoundscape(){if(this.ambientInterval)return;const e=[293.66,329.63,392,440,523.25,587.33,659.25];this.ambientInterval=window.setInterval(()=>{if(!this.isMuted){const n=e[Math.floor(Math.random()*e.length)];this.playFluteNote(n)}},3500)}}const Qe=new I_,F_=({lang:t,onToggleLang:e})=>{const[n,i]=Xe.useState(Qe.getMutedState()),r=()=>{const s=Qe.toggleMute();i(s),s||(Qe.startAmbientSoundscape(),Qe.playGong())};return x.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 px-2.5 sm:px-4 md:px-8 py-2.5 sm:py-3.5 glass-panel border-b border-gold-500/30 bg-slate-950/90 backdrop-blur-md shadow-lg shadow-slate-950/50",children:x.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[x.jsxs("a",{href:"#",className:"flex min-w-0 items-center gap-2 sm:gap-3 group",children:[x.jsx("div",{className:"w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-gradient-to-tr from-gold-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 font-black text-xl sm:text-2xl shadow-lg shadow-gold-500/30 group-hover:scale-110 transition-transform border-2 border-gold-300 animate-pulse",children:"🐼"}),x.jsxs("div",{className:"min-w-0",children:[x.jsx("span",{className:"block truncate font-cinzel text-xs sm:text-lg md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gold-300 via-amber-400 to-yellow-200 tracking-wide",children:t==="bn"?"কুংফু পান্ডা স্টোরিবুক":"KUNG FU PANDA"}),x.jsx("span",{className:"hidden sm:block text-[10px] text-emerald-400 tracking-widest uppercase font-extrabold",children:t==="bn"?"ভ্যালি অফ পিস কার্টুন গ্যালারি":"Valley of Peace Cartoon Legends"})]})]}),x.jsxs("div",{className:"hidden md:flex items-center gap-7 text-sm font-bold text-slate-300",children:[x.jsxs("a",{href:"#story-chapters",className:"hover:text-gold-400 transition-colors flex items-center gap-1.5 hover:scale-105",onClick:()=>Qe.playChopstickClick(),children:[x.jsx(A_,{className:"w-4 h-4 text-emerald-400"}),t==="bn"?"গল্পসমূহ":"Movie Chapters"]}),x.jsxs("a",{href:"#character-codex",className:"hover:text-gold-400 transition-colors flex items-center gap-1.5 hover:scale-105",onClick:()=>Qe.playChopstickClick(),children:[x.jsx(i0,{className:"w-4 h-4 text-rose-400"}),t==="bn"?"চরিত্রসমূহ":"Character Codex"]}),x.jsxs("a",{href:"#dumpling-game",className:"hover:text-gold-400 transition-colors flex items-center gap-1.5 hover:scale-105",onClick:()=>Qe.playChopstickClick(),children:[x.jsx(t0,{className:"w-4 h-4 text-amber-400"}),t==="bn"?"ডাম্পলিং গেম":"Dumpling Battle"]}),x.jsxs("a",{href:"#inner-peace",className:"hover:text-gold-400 transition-colors flex items-center gap-1.5 hover:scale-105",onClick:()=>Qe.playChopstickClick(),children:[x.jsx("span",{className:"text-emerald-400 font-extrabold",children:"☯"}),t==="bn"?"চি মেডিটেশন":"Chi Meditation"]})]}),x.jsxs("div",{className:"shrink-0 flex items-center gap-1.5 sm:gap-3",children:[x.jsxs("button",{onClick:()=>{Qe.playChopstickClick(),e()},className:"flex items-center gap-2 px-2 sm:px-3.5 py-2 rounded-2xl bg-slate-900 border-2 border-slate-700 hover:border-gold-500/60 text-xs font-extrabold text-slate-200 hover:text-gold-400 transition-all shadow-md active:scale-95",title:t==="bn"?"Switch to English":"বাংলায় দেখুন",children:[x.jsx(P_,{className:"w-4 h-4 text-gold-400"}),x.jsx("span",{className:"hidden sm:inline uppercase tracking-wider font-black",children:t==="bn"?"BN (বাংলা)":"EN (English)"})]}),x.jsx("button",{onClick:r,className:`p-2.5 rounded-2xl border-2 transition-all ${n?"bg-slate-900 border-slate-800 text-slate-400":"bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-lg shadow-emerald-500/30"}`,title:n?"Unmute Ambient Zen Music":"Mute Ambient Music",children:n?x.jsx(s0,{className:"w-5 h-5"}):x.jsx(r0,{className:"w-5 h-5 animate-pulse"})})]})]})})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="160",O_=0,mh=1,k_=2,o0=1,z_=2,si=3,Xi=0,ln=1,li=2,Hi=0,ls=1,gh=2,vh=3,xh=4,B_=5,ar=100,H_=101,G_=102,_h=103,yh=104,V_=200,W_=201,j_=202,X_=203,Fu=204,Ou=205,q_=206,Y_=207,$_=208,K_=209,Z_=210,Q_=211,J_=212,ey=213,ty=214,ny=0,iy=1,ry=2,sl=3,sy=4,ay=5,oy=6,ly=7,l0=0,cy=1,uy=2,Gi=0,dy=1,fy=2,hy=3,py=4,my=5,gy=6,c0=300,vs=301,xs=302,ku=303,zu=304,Rl=306,Bu=1e3,kn=1001,Hu=1002,$t=1003,Sh=1004,uc=1005,wn=1006,vy=1007,_a=1008,Vi=1009,xy=1010,_y=1011,Hd=1012,u0=1013,Li=1014,Ni=1015,ya=1016,d0=1017,f0=1018,hr=1020,yy=1021,zn=1023,Sy=1024,My=1025,pr=1026,_s=1027,Ey=1028,h0=1029,wy=1030,p0=1031,m0=1033,dc=33776,fc=33777,hc=33778,pc=33779,Mh=35840,Eh=35841,wh=35842,Th=35843,g0=36196,bh=37492,Ah=37496,Ch=37808,Rh=37809,Ph=37810,Lh=37811,Nh=37812,Dh=37813,Uh=37814,Ih=37815,Fh=37816,Oh=37817,kh=37818,zh=37819,Bh=37820,Hh=37821,mc=36492,Gh=36494,Vh=36495,Ty=36283,Wh=36284,jh=36285,Xh=36286,v0=3e3,mr=3001,by=3200,Ay=3201,x0=0,Cy=1,Tn="",Ut="srgb",vi="srgb-linear",Gd="display-p3",Pl="display-p3-linear",al="linear",at="srgb",ol="rec709",ll="p3",br=7680,qh=519,Ry=512,Py=513,Ly=514,_0=515,Ny=516,Dy=517,Uy=518,Iy=519,Yh=35044,$h="300 es",Gu=1035,di=2e3,cl=2001;class ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gc=Math.PI/180,ul=180/Math.PI;function ba(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function Fy(t,e){return(t%e+e)%e}function vc(t,e,n){return(1-n)*t+n*e}function Kh(t){return(t&t-1)===0&&t!==0}function Vu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],m=i[5],_=i[8],y=r[0],p=r[3],u=r[6],g=r[1],v=r[4],M=r[7],L=r[2],R=r[5],P=r[8];return s[0]=a*y+o*g+l*L,s[3]=a*p+o*v+l*R,s[6]=a*u+o*M+l*P,s[1]=c*y+f*g+d*L,s[4]=c*p+f*v+d*R,s[7]=c*u+f*M+d*P,s[2]=h*y+m*g+_*L,s[5]=h*p+m*v+_*R,s[8]=h*u+m*M+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=f*a-o*c,h=o*l-f*s,m=c*s-a*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*c-f*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(xc.makeScale(e,n)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new Ge;function y0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Oy(){const t=dl("canvas");return t.style.display="block",t}const Zh={};function ta(t){t in Zh||(Zh[t]=!0,console.warn(t))}const Qh=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jh=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ka={[vi]:{transfer:al,primaries:ol,toReference:t=>t,fromReference:t=>t},[Ut]:{transfer:at,primaries:ol,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Pl]:{transfer:al,primaries:ll,toReference:t=>t.applyMatrix3(Jh),fromReference:t=>t.applyMatrix3(Qh)},[Gd]:{transfer:at,primaries:ll,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Jh),fromReference:t=>t.applyMatrix3(Qh).convertLinearToSRGB()}},ky=new Set([vi,Pl]),et={enabled:!0,_workingColorSpace:vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ky.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ka[e].toReference,r=Ka[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ka[t].primaries},getTransfer:function(t){return t===Tn?al:Ka[t].transfer}};function cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _c(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ar;class S0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ar===void 0&&(Ar=dl("canvas")),Ar.width=e.width,Ar.height=e.height;const i=Ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ar}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=cs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(cs(n[i]/255)*255):n[i]=cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zy=0;class M0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=ba(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(yc(r[a].image)):s.push(yc(r[a]))}else s=yc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function yc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?S0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let By=0;class cn extends ws{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=kn,r=kn,s=wn,a=_a,o=zn,l=Vi,c=cn.DEFAULT_ANISOTROPY,f=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=ba(),this.name="",this.source=new M0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===mr?Ut:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bu:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Hu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bu:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Hu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?mr:v0}set encoding(e){ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mr?Ut:Tn}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=c0;cn.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,n=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],m=l[5],_=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(m+1)/2,L=(u+1)/2,R=(f+h)/4,P=(d+y)/4,z=(_+p)/4;return v>M&&v>L?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=P/i):M>L?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=z/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=P/s,r=z/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-_)*(p-_)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(d-y)/g,this.z=(h-f)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hy extends ws{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ct(0,0,e,n),this.scissorTest=!1,this.viewport=new ct(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ta("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===mr?Ut:Tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new M0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends Hy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class E0 extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gy extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Aa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(d!==y||l!==h||c!==m||f!==_){let p=1-o;const u=l*h+c*m+f*_+d*y,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const L=Math.sqrt(v),R=Math.atan2(L,u*g);p=Math.sin(p*R)/L,o=Math.sin(o*R)/L}const M=o*g;if(l=l*p+h*M,c=c*p+m*M,f=f*p+_*M,d=d*p+y*M,p===1-o){const L=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=L,c*=L,f*=L,d*=L}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+f*d+l*m-c*h,e[n+1]=l*_+f*h+c*d-o*m,e[n+2]=c*_+f*m+o*h-l*d,e[n+3]=f*_-o*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),d=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"YXZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"ZXY":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"ZYX":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"YZX":this._x=h*f*d+c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d-h*m*_;break;case"XZY":this._x=h*f*d-c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ep.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ep.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*f,this.y=i+l*f+o*c-s*d,this.z=r+l*d+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new k,ep=new Aa;class Ca{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Za.copy(i.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Qa.subVectors(this.max,Os),Cr.subVectors(e.a,Os),Rr.subVectors(e.b,Os),Pr.subVectors(e.c,Os),yi.subVectors(Rr,Cr),Si.subVectors(Pr,Rr),Qi.subVectors(Cr,Pr);let n=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-Qi.z,Qi.y,yi.z,0,-yi.x,Si.z,0,-Si.x,Qi.z,0,-Qi.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-Qi.y,Qi.x,0];return!Mc(n,Cr,Rr,Pr,Qa)||(n=[1,0,0,0,1,0,0,0,1],!Mc(n,Cr,Rr,Pr,Qa))?!1:(Ja.crossVectors(yi,Si),n=[Ja.x,Ja.y,Ja.z],Mc(n,Cr,Rr,Pr,Qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new k,new k,new k,new k,new k,new k,new k,new k],Ln=new k,Za=new Ca,Cr=new k,Rr=new k,Pr=new k,yi=new k,Si=new k,Qi=new k,Os=new k,Qa=new k,Ja=new k,Ji=new k;function Mc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ji.fromArray(t,s);const o=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),l=e.dot(Ji),c=n.dot(Ji),f=i.dot(Ji);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Vy=new Ca,ks=new k,Ec=new k;class Ll{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Vy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const n=ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Ec)),this.expandByPoint(ks.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new k,wc=new k,eo=new k,Mi=new k,Tc=new k,to=new k,bc=new k;class w0{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wc.copy(e).add(n).multiplyScalar(.5),eo.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(wc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(eo),o=Mi.dot(this.direction),l=-Mi.dot(eo),c=Mi.lengthSq(),f=Math.abs(1-a*a);let d,h,m,_;if(f>0)if(d=a*l-o,h=a*o-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const y=1/f;d*=y,h*=y,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(wc).addScaledVector(eo,h),m}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Tc.subVectors(n,e),to.subVectors(i,e),bc.crossVectors(Tc,to);let a=this.direction.dot(bc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);const l=o*this.direction.dot(to.crossVectors(Mi,to));if(l<0)return null;const c=o*this.direction.dot(Tc.cross(Mi));if(c<0||l+c>a)return null;const f=-o*Mi.dot(bc);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,s,a,o,l,c,f,d,h,m,_,y,p){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,d,h,m,_,y,p)}set(e,n,i,r,s,a,o,l,c,f,d,h,m,_,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=m,u[7]=_,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),a=1/Lr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*f,m=a*d,_=o*f,y=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=m+_*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,_=c*f,y=c*d;n[0]=h+y*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*d,n[5]=a*f,n[9]=-o,n[2]=m*o-_,n[6]=y+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,_=c*f,y=c*d;n[0]=h-y*o,n[4]=-a*d,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*f,n[9]=y-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,m=a*d,_=o*f,y=o*d;n[0]=l*f,n[4]=_*c-m,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,y=o*c;n[0]=l*f,n[4]=y-h*d,n[8]=_*d+m,n[1]=d,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*d+_,n[10]=h-y*d}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,y=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+y,n[5]=a*f,n[9]=m*d-_,n[2]=_*d-m,n[6]=o*f,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wy,e,jy)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ei.crossVectors(i,dn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ei.crossVectors(i,dn)),Ei.normalize(),no.crossVectors(dn,Ei),r[0]=Ei.x,r[4]=no.x,r[8]=dn.x,r[1]=Ei.y,r[5]=no.y,r[9]=dn.y,r[2]=Ei.z,r[6]=no.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],m=i[13],_=i[2],y=i[6],p=i[10],u=i[14],g=i[3],v=i[7],M=i[11],L=i[15],R=r[0],P=r[4],z=r[8],E=r[12],T=r[1],q=r[5],K=r[9],ae=r[13],D=r[2],H=r[6],$=r[10],J=r[14],I=r[3],G=r[7],C=r[11],b=r[15];return s[0]=a*R+o*T+l*D+c*I,s[4]=a*P+o*q+l*H+c*G,s[8]=a*z+o*K+l*$+c*C,s[12]=a*E+o*ae+l*J+c*b,s[1]=f*R+d*T+h*D+m*I,s[5]=f*P+d*q+h*H+m*G,s[9]=f*z+d*K+h*$+m*C,s[13]=f*E+d*ae+h*J+m*b,s[2]=_*R+y*T+p*D+u*I,s[6]=_*P+y*q+p*H+u*G,s[10]=_*z+y*K+p*$+u*C,s[14]=_*E+y*ae+p*J+u*b,s[3]=g*R+v*T+M*D+L*I,s[7]=g*P+v*q+M*H+L*G,s[11]=g*z+v*K+M*$+L*C,s[15]=g*E+v*ae+M*J+L*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],m=e[14],_=e[3],y=e[7],p=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*m-i*l*m)+y*(+n*l*m-n*c*h+s*a*h-r*a*m+r*c*f-s*l*f)+p*(+n*c*d-n*o*m-s*a*d+i*a*m+s*o*f-i*c*f)+u*(-r*o*f-n*l*d+n*o*h+r*a*d-i*a*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],m=e[11],_=e[12],y=e[13],p=e[14],u=e[15],g=d*p*c-y*h*c+y*l*m-o*p*m-d*l*u+o*h*u,v=_*h*c-f*p*c-_*l*m+a*p*m+f*l*u-a*h*u,M=f*y*c-_*d*c+_*o*m-a*y*m-f*o*u+a*d*u,L=_*d*l-f*y*l-_*o*h+a*y*h+f*o*p-a*d*p,R=n*g+i*v+r*M+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=g*P,e[1]=(y*h*s-d*p*s-y*r*m+i*p*m+d*r*u-i*h*u)*P,e[2]=(o*p*s-y*l*s+y*r*c-i*p*c-o*r*u+i*l*u)*P,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*m-i*l*m)*P,e[4]=v*P,e[5]=(f*p*s-_*h*s+_*r*m-n*p*m-f*r*u+n*h*u)*P,e[6]=(_*l*s-a*p*s-_*r*c+n*p*c+a*r*u-n*l*u)*P,e[7]=(a*h*s-f*l*s+f*r*c-n*h*c-a*r*m+n*l*m)*P,e[8]=M*P,e[9]=(_*d*s-f*y*s-_*i*m+n*y*m+f*i*u-n*d*u)*P,e[10]=(a*y*s-_*o*s+_*i*c-n*y*c-a*i*u+n*o*u)*P,e[11]=(f*o*s-a*d*s-f*i*c+n*d*c+a*i*m-n*o*m)*P,e[12]=L*P,e[13]=(f*y*r-_*d*r+_*i*h-n*y*h-f*i*p+n*d*p)*P,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*p-n*o*p)*P,e[15]=(a*d*r-f*o*r+f*i*l-n*d*l-a*i*h+n*o*h)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,d=o+o,h=s*c,m=s*f,_=s*d,y=a*f,p=a*d,u=o*d,g=l*c,v=l*f,M=l*d,L=i.x,R=i.y,P=i.z;return r[0]=(1-(y+u))*L,r[1]=(m+M)*L,r[2]=(_-v)*L,r[3]=0,r[4]=(m-M)*R,r[5]=(1-(h+u))*R,r[6]=(p+g)*R,r[7]=0,r[8]=(_+v)*P,r[9]=(p-g)*P,r[10]=(1-(h+y))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Lr.set(r[0],r[1],r[2]).length();const a=Lr.set(r[4],r[5],r[6]).length(),o=Lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,f=1/a,d=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=f,Nn.elements[5]*=f,Nn.elements[6]*=f,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,n.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=di){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(o===di)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===cl)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(a-s),h=(n+e)*c,m=(i+r)*f;let _,y;if(o===di)_=(a+s)*d,y=-2*d;else if(o===cl)_=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Lr=new k,Nn=new _t,Wy=new k(0,0,0),jy=new k(1,1,1),Ei=new k,no=new k,dn=new k,tp=new _t,np=new Aa;class Nl{constructor(e=0,n=0,i=0,r=Nl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nl.DEFAULT_ORDER="XYZ";class T0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xy=0;const ip=new k,Nr=new Aa,ni=new _t,io=new k,zs=new k,qy=new k,Yy=new Aa,rp=new k(1,0,0),sp=new k(0,1,0),ap=new k(0,0,1),$y={type:"added"},Ky={type:"removed"};class Ft extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new k,n=new Nl,i=new Aa,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ge}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new T0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(rp,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(ap,e)}translateOnAxis(e,n){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rp,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?io.copy(e):io.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(zs,io,this.up):ni.lookAt(io,zs,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(ni),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($y)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ky)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Yy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new k(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new k,ii=new k,Ac=new k,ri=new k,Dr=new k,Ur=new k,op=new k,Cc=new k,Rc=new k,Pc=new k;let ro=!1;class On{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ii.subVectors(i,n),Ac.subVectors(e,n);const a=Dn.dot(Dn),o=Dn.dot(ii),l=Dn.dot(Ac),c=ii.dot(ii),f=ii.dot(Ac),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-o*f)*h,_=(a*f-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(e,n,i,r,s,a,o,l){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ii.subVectors(e,n),Dn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Dn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Dr.subVectors(r,i),Ur.subVectors(s,i),Cc.subVectors(e,i);const l=Dr.dot(Cc),c=Ur.dot(Cc);if(l<=0&&c<=0)return n.copy(i);Rc.subVectors(e,r);const f=Dr.dot(Rc),d=Ur.dot(Rc);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Dr,a);Pc.subVectors(e,s);const m=Dr.dot(Pc),_=Ur.dot(Pc);if(_>=0&&m<=_)return n.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Ur,o);const p=f*_-m*d;if(p<=0&&d-f>=0&&m-_>=0)return op.subVectors(s,r),o=(d-f)/(d-f+(m-_)),n.copy(r).addScaledVector(op,o);const u=1/(p+y+h);return a=y*u,o=h*u,n.copy(i).addScaledVector(Dr,a).addScaledVector(Ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},so={h:0,s:0,l:0};function Lc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=Fy(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Lc(a,s,e+1/3),this.g=Lc(a,s,e),this.b=Lc(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ut){const i=b0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=_c(e.r),this.g=_c(e.g),this.b=_c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return et.fromWorkingColorSpace(Gt.copy(this),e),Math.round(tn(Gt.r*255,0,255))*65536+Math.round(tn(Gt.g*255,0,255))*256+Math.round(tn(Gt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Ut){et.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==Ut?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+n,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wi),e.getHSL(so);const i=vc(wi.h,so.h,n),r=vc(wi.s,so.s,n),s=vc(wi.l,so.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new $e;$e.NAMES=b0;let Zy=0;class Ts extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=ba(),this.name="",this.type="Material",this.blending=ls,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fu,this.blendDst=Ou,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ou&&(i.blendDst=this.blendDst),this.blendEquation!==ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vd extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=l0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new k,ao=new Ke;class Gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ao.fromBufferAttribute(this,n),ao.applyMatrix3(e),this.setXY(n,ao.x,ao.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yh&&(e.usage=this.usage),e}}class A0 extends Gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class C0 extends Gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gn extends Gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Qy=0;const Sn=new _t,Nc=new Ft,Ir=new k,fn=new Ca,Bs=new Ca,Rt=new k;class Wn extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=ba(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y0(e)?C0:A0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ll);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(fn.min,Bs.min),fn.expandByPoint(Rt),Rt.addVectors(fn.max,Bs.max),fn.expandByPoint(Rt)):(fn.expandByPoint(Bs.min),fn.expandByPoint(Bs.max))}fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Rt.fromBufferAttribute(o,c),l&&(Ir.fromBufferAttribute(e,c),Rt.add(Ir)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let T=0;T<o;T++)c[T]=new k,f[T]=new k;const d=new k,h=new k,m=new k,_=new Ke,y=new Ke,p=new Ke,u=new k,g=new k;function v(T,q,K){d.fromArray(r,T*3),h.fromArray(r,q*3),m.fromArray(r,K*3),_.fromArray(a,T*2),y.fromArray(a,q*2),p.fromArray(a,K*2),h.sub(d),m.sub(d),y.sub(_),p.sub(_);const ae=1/(y.x*p.y-p.x*y.y);isFinite(ae)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(ae),g.copy(m).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(ae),c[T].add(u),c[q].add(u),c[K].add(u),f[T].add(g),f[q].add(g),f[K].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let T=0,q=M.length;T<q;++T){const K=M[T],ae=K.start,D=K.count;for(let H=ae,$=ae+D;H<$;H+=3)v(i[H+0],i[H+1],i[H+2])}const L=new k,R=new k,P=new k,z=new k;function E(T){P.fromArray(s,T*3),z.copy(P);const q=c[T];L.copy(q),L.sub(P.multiplyScalar(P.dot(q))).normalize(),R.crossVectors(z,q);const ae=R.dot(f[T])<0?-1:1;l[T*4]=L.x,l[T*4+1]=L.y,l[T*4+2]=L.z,l[T*4+3]=ae}for(let T=0,q=M.length;T<q;++T){const K=M[T],ae=K.start,D=K.count;for(let H=ae,$=ae+D;H<$;H+=3)E(i[H+0]),E(i[H+1]),E(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,f=new k,d=new k;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,p),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f);let m=0,_=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*f;for(let u=0;u<f;u++)h[_++]=c[m++]}return new Gn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lp=new _t,er=new w0,oo=new Ll,cp=new k,Fr=new k,Or=new k,kr=new k,Dc=new k,lo=new k,co=new Ke,uo=new Ke,fo=new Ke,up=new k,dp=new k,fp=new k,ho=new k,po=new k;class Kn extends Ft{constructor(e=new Wn,n=new Vd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],d=s[l];f!==0&&(Dc.fromBufferAttribute(d,e),a?lo.addScaledVector(Dc,f):lo.addScaledVector(Dc.sub(n),f))}n.add(lo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(oo.containsPoint(er.origin)===!1&&(er.intersectSphere(oo,cp)===null||er.origin.distanceToSquared(cp)>(e.far-e.near)**2))&&(lp.copy(s).invert(),er.copy(e.ray).applyMatrix4(lp),!(i.boundingBox!==null&&er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=a[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,L=v;M<L;M+=3){const R=o.getX(M),P=o.getX(M+1),z=o.getX(M+2);r=mo(this,u,e,i,c,f,d,R,P,z),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=_,u=y;p<u;p+=3){const g=o.getX(p),v=o.getX(p+1),M=o.getX(p+2);r=mo(this,a,e,i,c,f,d,g,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=a[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,L=v;M<L;M+=3){const R=M,P=M+1,z=M+2;r=mo(this,u,e,i,c,f,d,R,P,z),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=_,u=y;p<u;p+=3){const g=p,v=p+1,M=p+2;r=mo(this,a,e,i,c,f,d,g,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Jy(t,e,n,i,r,s,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Xi,o),l===null)return null;po.copy(o),po.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(po);return c<n.near||c>n.far?null:{distance:c,point:po.clone(),object:t}}function mo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Fr),t.getVertexPosition(l,Or),t.getVertexPosition(c,kr);const f=Jy(t,e,n,i,Fr,Or,kr,ho);if(f){r&&(co.fromBufferAttribute(r,o),uo.fromBufferAttribute(r,l),fo.fromBufferAttribute(r,c),f.uv=On.getInterpolation(ho,Fr,Or,kr,co,uo,fo,new Ke)),s&&(co.fromBufferAttribute(s,o),uo.fromBufferAttribute(s,l),fo.fromBufferAttribute(s,c),f.uv1=On.getInterpolation(ho,Fr,Or,kr,co,uo,fo,new Ke),f.uv2=f.uv1),a&&(up.fromBufferAttribute(a,o),dp.fromBufferAttribute(a,l),fp.fromBufferAttribute(a,c),f.normal=On.getInterpolation(ho,Fr,Or,kr,up,dp,fp,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};On.getNormal(Fr,Or,kr,d.normal),f.face=d}return f}class Ra extends Wn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(f,3)),this.setAttribute("uv",new gn(d,2));function _(y,p,u,g,v,M,L,R,P,z,E){const T=M/P,q=L/z,K=M/2,ae=L/2,D=R/2,H=P+1,$=z+1;let J=0,I=0;const G=new k;for(let C=0;C<$;C++){const b=C*q-ae;for(let B=0;B<H;B++){const U=B*T-K;G[y]=U*g,G[p]=b*v,G[u]=D,c.push(G.x,G.y,G.z),G[y]=0,G[p]=0,G[u]=R>0?1:-1,f.push(G.x,G.y,G.z),d.push(B/P),d.push(1-C/z),J+=1}}for(let C=0;C<z;C++)for(let b=0;b<P;b++){const B=h+b+H*C,U=h+b+H*(C+1),V=h+(b+1)+H*(C+1),Z=h+(b+1)+H*C;l.push(B,U,Z),l.push(U,V,Z),I+=6}o.addGroup(m,I,E),m+=I,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=ys(t[n]);for(const r in i)e[r]=i[r]}return e}function eS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function R0(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const tS={clone:ys,merge:qt};var nS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nS,this.fragmentShader=iS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=eS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class P0 extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends P0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ul*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zr=-90,Br=1;class rS extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(zr,Br,e,n);r.layers=this.layers,this.add(r);const s=new nn(zr,Br,e,n);s.layers=this.layers,this.add(s);const a=new nn(zr,Br,e,n);a.layers=this.layers,this.add(a);const o=new nn(zr,Br,e,n);o.layers=this.layers,this.add(o);const l=new nn(zr,Br,e,n);l.layers=this.layers,this.add(l);const c=new nn(zr,Br,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class L0 extends cn{constructor(e,n,i,r,s,a,o,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:vs,super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sS extends Sr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ta("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mr?Ut:Tn),this.texture=new L0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ra(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Hi});s.uniforms.tEquirect.value=n;const a=new Kn(r,s),o=n.minFilter;return n.minFilter===_a&&(n.minFilter=wn),new rS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Uc=new k,aS=new k,oS=new Ge;class rr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Uc.subVectors(i,n).cross(aS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Uc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||oS.getNormalMatrix(e),r=this.coplanarPoint(Uc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Ll,go=new k;class Wd{constructor(e=new rr,n=new rr,i=new rr,r=new rr,s=new rr,a=new rr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],m=r[8],_=r[9],y=r[10],p=r[11],u=r[12],g=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-m,M-u).normalize(),i[1].setComponents(l+s,h+c,p+m,M+u).normalize(),i[2].setComponents(l+a,h+f,p+_,M+g).normalize(),i[3].setComponents(l-a,h-f,p-_,M-g).normalize(),i[4].setComponents(l-o,h-d,p-y,M-v).normalize(),n===di)i[5].setComponents(l+o,h+d,p+y,M+v).normalize();else if(n===cl)i[5].setComponents(o,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(go.x=r.normal.x>0?e.max.x:e.min.x,go.y=r.normal.y>0?e.max.y:e.min.y,go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function N0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function lS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,m=d.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,f,d){const h=f.array,m=f._updateRange,_=f.updateRanges;if(t.bindBuffer(d,c),m.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let y=0,p=_.length;y<p;y++){const u=_[y];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:a,remove:o,update:l}}class jd extends Wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,d=e/o,h=n/l,m=[],_=[],y=[],p=[];for(let u=0;u<f;u++){const g=u*h-a;for(let v=0;v<c;v++){const M=v*d-s;_.push(M,-g,0),y.push(0,0,1),p.push(v/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const v=g+c*u,M=g+c*(u+1),L=g+1+c*(u+1),R=g+1+c*u;m.push(v,M,R),m.push(M,L,R)}this.setIndex(m),this.setAttribute("position",new gn(_,3)),this.setAttribute("normal",new gn(y,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.width,e.height,e.widthSegments,e.heightSegments)}}var cS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_S=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,MS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ES=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,NS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,US=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zS="gl_FragColor = linearToOutputTexel( gl_FragColor );",BS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,HS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$S=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,QS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_M=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,TM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,NM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$M=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,BE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:cS,alphahash_pars_fragment:uS,alphamap_fragment:dS,alphamap_pars_fragment:fS,alphatest_fragment:hS,alphatest_pars_fragment:pS,aomap_fragment:mS,aomap_pars_fragment:gS,batching_pars_vertex:vS,batching_vertex:xS,begin_vertex:_S,beginnormal_vertex:yS,bsdfs:SS,iridescence_fragment:MS,bumpmap_pars_fragment:ES,clipping_planes_fragment:wS,clipping_planes_pars_fragment:TS,clipping_planes_pars_vertex:bS,clipping_planes_vertex:AS,color_fragment:CS,color_pars_fragment:RS,color_pars_vertex:PS,color_vertex:LS,common:NS,cube_uv_reflection_fragment:DS,defaultnormal_vertex:US,displacementmap_pars_vertex:IS,displacementmap_vertex:FS,emissivemap_fragment:OS,emissivemap_pars_fragment:kS,colorspace_fragment:zS,colorspace_pars_fragment:BS,envmap_fragment:HS,envmap_common_pars_fragment:GS,envmap_pars_fragment:VS,envmap_pars_vertex:WS,envmap_physical_pars_fragment:nM,envmap_vertex:jS,fog_vertex:XS,fog_pars_vertex:qS,fog_fragment:YS,fog_pars_fragment:$S,gradientmap_pars_fragment:KS,lightmap_fragment:ZS,lightmap_pars_fragment:QS,lights_lambert_fragment:JS,lights_lambert_pars_fragment:eM,lights_pars_begin:tM,lights_toon_fragment:iM,lights_toon_pars_fragment:rM,lights_phong_fragment:sM,lights_phong_pars_fragment:aM,lights_physical_fragment:oM,lights_physical_pars_fragment:lM,lights_fragment_begin:cM,lights_fragment_maps:uM,lights_fragment_end:dM,logdepthbuf_fragment:fM,logdepthbuf_pars_fragment:hM,logdepthbuf_pars_vertex:pM,logdepthbuf_vertex:mM,map_fragment:gM,map_pars_fragment:vM,map_particle_fragment:xM,map_particle_pars_fragment:_M,metalnessmap_fragment:yM,metalnessmap_pars_fragment:SM,morphcolor_vertex:MM,morphnormal_vertex:EM,morphtarget_pars_vertex:wM,morphtarget_vertex:TM,normal_fragment_begin:bM,normal_fragment_maps:AM,normal_pars_fragment:CM,normal_pars_vertex:RM,normal_vertex:PM,normalmap_pars_fragment:LM,clearcoat_normal_fragment_begin:NM,clearcoat_normal_fragment_maps:DM,clearcoat_pars_fragment:UM,iridescence_pars_fragment:IM,opaque_fragment:FM,packing:OM,premultiplied_alpha_fragment:kM,project_vertex:zM,dithering_fragment:BM,dithering_pars_fragment:HM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:VM,shadowmap_pars_fragment:WM,shadowmap_pars_vertex:jM,shadowmap_vertex:XM,shadowmask_pars_fragment:qM,skinbase_vertex:YM,skinning_pars_vertex:$M,skinning_vertex:KM,skinnormal_vertex:ZM,specularmap_fragment:QM,specularmap_pars_fragment:JM,tonemapping_fragment:eE,tonemapping_pars_fragment:tE,transmission_fragment:nE,transmission_pars_fragment:iE,uv_pars_fragment:rE,uv_pars_vertex:sE,uv_vertex:aE,worldpos_vertex:oE,background_vert:lE,background_frag:cE,backgroundCube_vert:uE,backgroundCube_frag:dE,cube_vert:fE,cube_frag:hE,depth_vert:pE,depth_frag:mE,distanceRGBA_vert:gE,distanceRGBA_frag:vE,equirect_vert:xE,equirect_frag:_E,linedashed_vert:yE,linedashed_frag:SE,meshbasic_vert:ME,meshbasic_frag:EE,meshlambert_vert:wE,meshlambert_frag:TE,meshmatcap_vert:bE,meshmatcap_frag:AE,meshnormal_vert:CE,meshnormal_frag:RE,meshphong_vert:PE,meshphong_frag:LE,meshphysical_vert:NE,meshphysical_frag:DE,meshtoon_vert:UE,meshtoon_frag:IE,points_vert:FE,points_frag:OE,shadow_vert:kE,shadow_frag:zE,sprite_vert:BE,sprite_frag:HE},ce={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Yn={basic:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:qt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:qt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:qt([ce.points,ce.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:qt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:qt([ce.common,ce.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:qt([ce.sprite,ce.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:qt([ce.common,ce.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:qt([ce.lights,ce.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Yn.physical={uniforms:qt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const vo={r:0,b:0,g:0};function GE(t,e,n,i,r,s,a){const o=new $e(0);let l=s===!0?0:1,c,f,d=null,h=0,m=null;function _(p,u){let g=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),g=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Rl)?(f===void 0&&(f=new Kn(new Ra(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:ys(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=et.getTransfer(v.colorSpace)!==at,(d!==v||h!==v.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Kn(new jd(2,2),new Mr({name:"BackgroundMaterial",uniforms:ys(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(vo,R0(t)),i.buffers.color.setClear(vo.r,vo.g,vo.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(o,l)},render:_}}function VE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,f=!1;function d(D,H,$,J,I){let G=!1;if(a){const C=y(J,$,H);c!==C&&(c=C,m(c.object)),G=u(D,J,$,I),G&&g(D,J,$,I)}else{const C=H.wireframe===!0;(c.geometry!==J.id||c.program!==$.id||c.wireframe!==C)&&(c.geometry=J.id,c.program=$.id,c.wireframe=C,G=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(G||f)&&(f=!1,z(D,H,$,J),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function y(D,H,$){const J=$.wireframe===!0;let I=o[D.id];I===void 0&&(I={},o[D.id]=I);let G=I[H.id];G===void 0&&(G={},I[H.id]=G);let C=G[J];return C===void 0&&(C=p(h()),G[J]=C),C}function p(D){const H=[],$=[],J=[];for(let I=0;I<r;I++)H[I]=0,$[I]=0,J[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:J,object:D,attributes:{},index:null}}function u(D,H,$,J){const I=c.attributes,G=H.attributes;let C=0;const b=$.getAttributes();for(const B in b)if(b[B].location>=0){const V=I[B];let Z=G[B];if(Z===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),V===void 0||V.attribute!==Z||Z&&V.data!==Z.data)return!0;C++}return c.attributesNum!==C||c.index!==J}function g(D,H,$,J){const I={},G=H.attributes;let C=0;const b=$.getAttributes();for(const B in b)if(b[B].location>=0){let V=G[B];V===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(V=D.instanceColor));const Z={};Z.attribute=V,V&&V.data&&(Z.data=V.data),I[B]=Z,C++}c.attributes=I,c.attributesNum=C,c.index=J}function v(){const D=c.newAttributes;for(let H=0,$=D.length;H<$;H++)D[H]=0}function M(D){L(D,0)}function L(D,H){const $=c.newAttributes,J=c.enabledAttributes,I=c.attributeDivisors;$[D]=1,J[D]===0&&(t.enableVertexAttribArray(D),J[D]=1),I[D]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),I[D]=H)}function R(){const D=c.newAttributes,H=c.enabledAttributes;for(let $=0,J=H.length;$<J;$++)H[$]!==D[$]&&(t.disableVertexAttribArray($),H[$]=0)}function P(D,H,$,J,I,G,C){C===!0?t.vertexAttribIPointer(D,H,$,I,G):t.vertexAttribPointer(D,H,$,J,I,G)}function z(D,H,$,J){if(i.isWebGL2===!1&&(D.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const I=J.attributes,G=$.getAttributes(),C=H.defaultAttributeValues;for(const b in G){const B=G[b];if(B.location>=0){let U=I[b];if(U===void 0&&(b==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),b==="instanceColor"&&D.instanceColor&&(U=D.instanceColor)),U!==void 0){const V=U.normalized,Z=U.itemSize,ee=n.get(U);if(ee===void 0)continue;const Q=ee.buffer,ue=ee.type,ge=ee.bytesPerElement,pe=i.isWebGL2===!0&&(ue===t.INT||ue===t.UNSIGNED_INT||U.gpuType===u0);if(U.isInterleavedBufferAttribute){const Se=U.data,F=Se.stride,je=U.offset;if(Se.isInstancedInterleavedBuffer){for(let oe=0;oe<B.locationSize;oe++)L(B.location+oe,Se.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let oe=0;oe<B.locationSize;oe++)M(B.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let oe=0;oe<B.locationSize;oe++)P(B.location+oe,Z/B.locationSize,ue,V,F*ge,(je+Z/B.locationSize*oe)*ge,pe)}else{if(U.isInstancedBufferAttribute){for(let Se=0;Se<B.locationSize;Se++)L(B.location+Se,U.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Se=0;Se<B.locationSize;Se++)M(B.location+Se);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let Se=0;Se<B.locationSize;Se++)P(B.location+Se,Z/B.locationSize,ue,V,Z*ge,Z/B.locationSize*Se*ge,pe)}}else if(C!==void 0){const V=C[b];if(V!==void 0)switch(V.length){case 2:t.vertexAttrib2fv(B.location,V);break;case 3:t.vertexAttrib3fv(B.location,V);break;case 4:t.vertexAttrib4fv(B.location,V);break;default:t.vertexAttrib1fv(B.location,V)}}}}R()}function E(){K();for(const D in o){const H=o[D];for(const $ in H){const J=H[$];for(const I in J)_(J[I].object),delete J[I];delete H[$]}delete o[D]}}function T(D){if(o[D.id]===void 0)return;const H=o[D.id];for(const $ in H){const J=H[$];for(const I in J)_(J[I].object),delete J[I];delete H[$]}delete o[D.id]}function q(D){for(const H in o){const $=o[H];if($[D.id]===void 0)continue;const J=$[D.id];for(const I in J)_(J[I].object),delete J[I];delete $[D.id]}}function K(){ae(),f=!0,c!==l&&(c=l,m(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:ae,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:q,initAttributes:v,enableAttribute:M,disableUnusedAttributes:R}}function WE(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(f[_],d[_]);else{m.multiDrawArraysWEBGL(s,f,0,d,0,h);let _=0;for(let y=0;y<h;y++)_+=d[y];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function jE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,M=a||e.has("OES_texture_float"),L=v&&M,R=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:L,maxSamples:R}}function XE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new rr,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!p)s?f(null):c();else{const g=s?0:i,v=g*4;let M=u.clippingState||null;l.value=M,M=f(_,h,v,m);for(let L=0;L!==v;++L)M[L]=n[L];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,_){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const u=m+y*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,M=m;v!==y;++v,M+=4)a.copy(d[v]).applyMatrix4(g,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function qE(t){let e=new WeakMap;function n(a,o){return o===ku?a.mapping=vs:o===zu&&(a.mapping=xs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ku||o===zu)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new sS(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class YE extends P0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const es=4,hp=[.125,.215,.35,.446,.526,.582],or=20,Ic=new YE,pp=new $e;let Fc=null,Oc=0,kc=0;const sr=(1+Math.sqrt(5))/2,Hr=1/sr,mp=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,sr,Hr),new k(0,sr,-Hr),new k(Hr,0,sr),new k(-Hr,0,sr),new k(sr,Hr,0),new k(-sr,Hr,0)];class gp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Oc,kc),e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vs||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ya,format:zn,colorSpace:vi,depthBuffer:!1},r=vp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$E(s)),this._blurMaterial=KE(s,e,n)}return r}_compileMaterial(e){const n=new Kn(this._lodPlanes[0],e);this._renderer.compile(n,Ic)}_sceneToCubeUV(e,n,i,r){const o=new nn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(pp),f.toneMapping=Gi,f.autoClear=!1;const m=new Vd({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new Kn(new Ra,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(pp),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const v=this._cubeSize;xo(r,g*v,u>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===vs||e.mapping===xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Kn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;xo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ic)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=mp[(r-1)%mp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Kn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*or-1),y=s/_,p=isFinite(s)?1+Math.floor(f*y):or;p>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${or}`);const u=[];let g=0;for(let P=0;P<or;++P){const z=P/y,E=Math.exp(-z*z/2);u.push(E),P===0?g+=E:P<p&&(g+=2*E)}for(let P=0;P<u.length;P++)u[P]=u[P]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const M=this._sizeLods[r],L=3*M*(r>v-es?r-v+es:0),R=4*(this._cubeSize-M);xo(n,L,R,3*M,2*M),l.setRenderTarget(n),l.render(d,Ic)}}function $E(t){const e=[],n=[],i=[];let r=t;const s=t-es+1+hp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-es?l=hp[a-t+es-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,_=6,y=3,p=2,u=1,g=new Float32Array(y*_*m),v=new Float32Array(p*_*m),M=new Float32Array(u*_*m);for(let R=0;R<m;R++){const P=R%3*2/3-1,z=R>2?0:-1,E=[P,z,0,P+2/3,z,0,P+2/3,z+1,0,P,z,0,P+2/3,z+1,0,P,z+1,0];g.set(E,y*_*R),v.set(h,p*_*R);const T=[R,R,R,R,R,R];M.set(T,u*_*R)}const L=new Wn;L.setAttribute("position",new Gn(g,y)),L.setAttribute("uv",new Gn(v,p)),L.setAttribute("faceIndex",new Gn(M,u)),e.push(L),r>es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function vp(t,e,n){const i=new Sr(t,e,n);return i.texture.mapping=Rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function KE(t,e,n){const i=new Float32Array(or),r=new k(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function xp(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function _p(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ku||l===zu,f=l===vs||l===xs;if(c||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new gp(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new gp(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function QE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JE(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const y=m[_];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,_=d.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let v=0,M=g.length;v<M;v+=3){const L=g[v+0],R=g[v+1],P=g[v+2];h.push(L,R,R,P,P,L)}}else if(_!==void 0){const g=_.array;y=_.version;for(let v=0,M=g.length/3-1;v<M;v+=3){const L=v+0,R=v+1,P=v+2;h.push(L,R,R,P,P,L)}}else return;const p=new(y0(h)?C0:A0)(h,1);p.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function e1(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function f(m,_){t.drawElements(s,_,o,m*l),n.update(_,s,1)}function d(m,_,y){if(y===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,o,m*l,y),n.update(_,s,y)}function h(m,_,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<y;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,o,m,0,y);let u=0;for(let g=0;g<y;g++)u+=_[g];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function t1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function n1(t,e){return t[0]-e[0]}function i1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function r1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new ct,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let p=s.get(f);if(p===void 0||p.count!==y){let H=function(){ae.dispose(),s.delete(f),f.removeEventListener("dispose",H)};var m=H;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,L=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],z=f.morphAttributes.color||[];let E=0;v===!0&&(E=1),M===!0&&(E=2),L===!0&&(E=3);let T=f.attributes.position.count*E,q=1;T>e.maxTextureSize&&(q=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const K=new Float32Array(T*q*4*y),ae=new E0(K,T,q,y);ae.type=Ni,ae.needsUpdate=!0;const D=E*4;for(let $=0;$<y;$++){const J=R[$],I=P[$],G=z[$],C=T*q*4*$;for(let b=0;b<J.count;b++){const B=b*D;v===!0&&(a.fromBufferAttribute(J,b),K[C+B+0]=a.x,K[C+B+1]=a.y,K[C+B+2]=a.z,K[C+B+3]=0),M===!0&&(a.fromBufferAttribute(I,b),K[C+B+4]=a.x,K[C+B+5]=a.y,K[C+B+6]=a.z,K[C+B+7]=0),L===!0&&(a.fromBufferAttribute(G,b),K[C+B+8]=a.x,K[C+B+9]=a.y,K[C+B+10]=a.z,K[C+B+11]=G.itemSize===4?a.w:1)}}p={count:y,texture:ae,size:new Ke(T,q)},s.set(f,p),f.addEventListener("dispose",H)}let u=0;for(let v=0;v<h.length;v++)u+=h[v];const g=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let y=i[f.id];if(y===void 0||y.length!==_){y=[];for(let M=0;M<_;M++)y[M]=[M,0];i[f.id]=y}for(let M=0;M<_;M++){const L=y[M];L[0]=M,L[1]=h[M]}y.sort(i1);for(let M=0;M<8;M++)M<_&&y[M][1]?(o[M][0]=y[M][0],o[M][1]=y[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(n1);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let g=0;for(let M=0;M<8;M++){const L=o[M],R=L[0],P=L[1];R!==Number.MAX_SAFE_INTEGER&&P?(p&&f.getAttribute("morphTarget"+M)!==p[R]&&f.setAttribute("morphTarget"+M,p[R]),u&&f.getAttribute("morphNormal"+M)!==u[R]&&f.setAttribute("morphNormal"+M,u[R]),r[M]=P,g+=P):(p&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),u&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const v=f.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function s1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class D0 extends cn{constructor(e,n,i,r,s,a,o,l,c,f){if(f=f!==void 0?f:pr,f!==pr&&f!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===pr&&(i=Li),i===void 0&&f===_s&&(i=hr),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const U0=new cn,I0=new D0(1,1);I0.compareFunction=_0;const F0=new E0,O0=new Gy,k0=new L0,yp=[],Sp=[],Mp=new Float32Array(16),Ep=new Float32Array(9),wp=new Float32Array(4);function bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=yp[r];if(s===void 0&&(s=new Float32Array(r),yp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Dl(t,e){let n=Sp[e];n===void 0&&(n=new Int32Array(e),Sp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function a1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function o1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function l1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function c1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function u1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;wp.set(i),t.uniformMatrix2fv(this.addr,!1,wp),Tt(n,i)}}function d1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Ep.set(i),t.uniformMatrix3fv(this.addr,!1,Ep),Tt(n,i)}}function f1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Mp.set(i),t.uniformMatrix4fv(this.addr,!1,Mp),Tt(n,i)}}function h1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function p1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function m1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function g1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function v1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function x1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function _1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function S1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?I0:U0;n.setTexture2D(e||s,r)}function M1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||O0,r)}function E1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||k0,r)}function w1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||F0,r)}function T1(t){switch(t){case 5126:return a1;case 35664:return o1;case 35665:return l1;case 35666:return c1;case 35674:return u1;case 35675:return d1;case 35676:return f1;case 5124:case 35670:return h1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return v1;case 36294:return x1;case 36295:return _1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return w1}}function b1(t,e){t.uniform1fv(this.addr,e)}function A1(t,e){const n=bs(e,this.size,2);t.uniform2fv(this.addr,n)}function C1(t,e){const n=bs(e,this.size,3);t.uniform3fv(this.addr,n)}function R1(t,e){const n=bs(e,this.size,4);t.uniform4fv(this.addr,n)}function P1(t,e){const n=bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function L1(t,e){const n=bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function N1(t,e){const n=bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function D1(t,e){t.uniform1iv(this.addr,e)}function U1(t,e){t.uniform2iv(this.addr,e)}function I1(t,e){t.uniform3iv(this.addr,e)}function F1(t,e){t.uniform4iv(this.addr,e)}function O1(t,e){t.uniform1uiv(this.addr,e)}function k1(t,e){t.uniform2uiv(this.addr,e)}function z1(t,e){t.uniform3uiv(this.addr,e)}function B1(t,e){t.uniform4uiv(this.addr,e)}function H1(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||U0,s[a])}function G1(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||O0,s[a])}function V1(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||k0,s[a])}function W1(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||F0,s[a])}function j1(t){switch(t){case 5126:return b1;case 35664:return A1;case 35665:return C1;case 35666:return R1;case 35674:return P1;case 35675:return L1;case 35676:return N1;case 5124:case 35670:return D1;case 35667:case 35671:return U1;case 35668:case 35672:return I1;case 35669:case 35673:return F1;case 5125:return O1;case 36294:return k1;case 36295:return z1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return H1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return W1}}class X1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=T1(n.type)}}class q1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=j1(n.type)}}class Y1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const zc=/(\w+)(\])?(\[|\.)?/g;function Tp(t,e){t.seq.push(e),t.map[e.id]=e}function $1(t,e,n){const i=t.name,r=i.length;for(zc.lastIndex=0;;){const s=zc.exec(i),a=zc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Tp(n,c===void 0?new X1(o,t,e):new q1(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Y1(o),Tp(n,d)),n=d}}}class Uo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);$1(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function bp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const K1=37297;let Z1=0;function Q1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function J1(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===ll&&n===ol?i="LinearDisplayP3ToLinearSRGB":e===ol&&n===ll&&(i="LinearSRGBToLinearDisplayP3"),t){case vi:case Pl:return[i,"LinearTransferOETF"];case Ut:case Gd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ap(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Q1(t.getShaderSource(e),a)}else return r}function ew(t,e){const n=J1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function tw(t,e){let n;switch(e){case dy:n="Linear";break;case fy:n="Reinhard";break;case hy:n="OptimizedCineon";break;case py:n="ACESFilmic";break;case gy:n="AgX";break;case my:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function nw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ts).join(`
`)}function iw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ts).join(`
`)}function rw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ts(t){return t!==""}function Cp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(t){return t.replace(aw,lw)}const ow=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lw(t,e){let n=Oe[e];if(n===void 0){const i=ow.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wu(n)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pp(t){return t.replace(cw,uw)}function uw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===o0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===z_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function fw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case vs:case xs:e="ENVMAP_TYPE_CUBE";break;case Rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function pw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case l0:e="ENVMAP_BLENDING_MULTIPLY";break;case cy:e="ENVMAP_BLENDING_MIX";break;case uy:e="ENVMAP_BLENDING_ADD";break}return e}function mw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=dw(n),c=fw(n),f=hw(n),d=pw(n),h=mw(n),m=n.isWebGL2?"":nw(n),_=iw(n),y=rw(s),p=r.createProgram();let u,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ts).join(`
`),u.length>0&&(u+=`
`),g=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ts).join(`
`),g.length>0&&(g+=`
`)):(u=[Lp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),g=[m,Lp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Gi?tw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,ew("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ts).join(`
`)),a=Wu(a),a=Cp(a,n),a=Rp(a,n),o=Wu(o),o=Cp(o,n),o=Rp(o,n),a=Pp(a),o=Pp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=v+u+a,L=v+g+o,R=bp(r,r.VERTEX_SHADER,M),P=bp(r,r.FRAGMENT_SHADER,L);r.attachShader(p,R),r.attachShader(p,P),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function z(K){if(t.debug.checkShaderErrors){const ae=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(R).trim(),H=r.getShaderInfoLog(P).trim();let $=!0,J=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,R,P);else{const I=Ap(r,R,"vertex"),G=Ap(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+I+`
`+G)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(D===""||H==="")&&(J=!1);J&&(K.diagnostics={runnable:$,programLog:ae,vertexShader:{log:D,prefix:u},fragmentShader:{log:H,prefix:g}})}r.deleteShader(R),r.deleteShader(P),E=new Uo(r,p),T=sw(r,p)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=r.getProgramParameter(p,K1)),q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Z1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=P,this}let vw=0;class xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new _w(e),n.set(e,i)),i}}class _w{constructor(e){this.id=vw++,this.code=e,this.usedTimes=0}}function yw(t,e,n,i,r,s,a){const o=new T0,l=new xw,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function p(E,T,q,K,ae){const D=K.fog,H=ae.geometry,$=E.isMeshStandardMaterial?K.environment:null,J=(E.isMeshStandardMaterial?n:e).get(E.envMap||$),I=J&&J.mapping===Rl?J.image.height:null,G=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const C=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,b=C!==void 0?C.length:0;let B=0;H.morphAttributes.position!==void 0&&(B=1),H.morphAttributes.normal!==void 0&&(B=2),H.morphAttributes.color!==void 0&&(B=3);let U,V,Z,ee;if(G){const jt=Yn[G];U=jt.vertexShader,V=jt.fragmentShader}else U=E.vertexShader,V=E.fragmentShader,l.update(E),Z=l.getVertexShaderID(E),ee=l.getFragmentShaderID(E);const Q=t.getRenderTarget(),ue=ae.isInstancedMesh===!0,ge=ae.isBatchedMesh===!0,pe=!!E.map,Se=!!E.matcap,F=!!J,je=!!E.aoMap,oe=!!E.lightMap,Me=!!E.bumpMap,me=!!E.normalMap,We=!!E.displacementMap,be=!!E.emissiveMap,A=!!E.metalnessMap,S=!!E.roughnessMap,W=E.anisotropy>0,re=E.clearcoat>0,ne=E.iridescence>0,se=E.sheen>0,Ee=E.transmission>0,de=W&&!!E.anisotropyMap,_e=re&&!!E.clearcoatMap,Ae=re&&!!E.clearcoatNormalMap,De=re&&!!E.clearcoatRoughnessMap,te=ne&&!!E.iridescenceMap,Ye=ne&&!!E.iridescenceThicknessMap,ke=se&&!!E.sheenColorMap,Le=se&&!!E.sheenRoughnessMap,Te=!!E.specularMap,ye=!!E.specularColorMap,Fe=!!E.specularIntensityMap,Ze=Ee&&!!E.transmissionMap,pt=Ee&&!!E.thicknessMap,Be=!!E.gradientMap,le=!!E.alphaMap,N=E.alphaTest>0,fe=!!E.alphaHash,he=!!E.extensions,Pe=!!H.attributes.uv1,Ce=!!H.attributes.uv2,tt=!!H.attributes.uv3;let nt=Gi;return E.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(nt=t.toneMapping),{isWebGL2:f,shaderID:G,shaderType:E.type,shaderName:E.name,vertexShader:U,fragmentShader:V,defines:E.defines,customVertexShaderID:Z,customFragmentShaderID:ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ge,instancing:ue,instancingColor:ue&&ae.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Q===null?t.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:vi,map:pe,matcap:Se,envMap:F,envMapMode:F&&J.mapping,envMapCubeUVHeight:I,aoMap:je,lightMap:oe,bumpMap:Me,normalMap:me,displacementMap:h&&We,emissiveMap:be,normalMapObjectSpace:me&&E.normalMapType===Cy,normalMapTangentSpace:me&&E.normalMapType===x0,metalnessMap:A,roughnessMap:S,anisotropy:W,anisotropyMap:de,clearcoat:re,clearcoatMap:_e,clearcoatNormalMap:Ae,clearcoatRoughnessMap:De,iridescence:ne,iridescenceMap:te,iridescenceThicknessMap:Ye,sheen:se,sheenColorMap:ke,sheenRoughnessMap:Le,specularMap:Te,specularColorMap:ye,specularIntensityMap:Fe,transmission:Ee,transmissionMap:Ze,thicknessMap:pt,gradientMap:Be,opaque:E.transparent===!1&&E.blending===ls,alphaMap:le,alphaTest:N,alphaHash:fe,combine:E.combine,mapUv:pe&&y(E.map.channel),aoMapUv:je&&y(E.aoMap.channel),lightMapUv:oe&&y(E.lightMap.channel),bumpMapUv:Me&&y(E.bumpMap.channel),normalMapUv:me&&y(E.normalMap.channel),displacementMapUv:We&&y(E.displacementMap.channel),emissiveMapUv:be&&y(E.emissiveMap.channel),metalnessMapUv:A&&y(E.metalnessMap.channel),roughnessMapUv:S&&y(E.roughnessMap.channel),anisotropyMapUv:de&&y(E.anisotropyMap.channel),clearcoatMapUv:_e&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&y(E.sheenRoughnessMap.channel),specularMapUv:Te&&y(E.specularMap.channel),specularColorMapUv:ye&&y(E.specularColorMap.channel),specularIntensityMapUv:Fe&&y(E.specularIntensityMap.channel),transmissionMapUv:Ze&&y(E.transmissionMap.channel),thicknessMapUv:pt&&y(E.thicknessMap.channel),alphaMapUv:le&&y(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(me||W),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Ce,vertexUv3s:tt,pointsUvs:ae.isPoints===!0&&!!H.attributes.uv&&(pe||le),fog:!!D,useFog:E.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ae.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:B,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:nt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:pe&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===li,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:he&&E.extensions.derivatives===!0,extensionFragDepth:he&&E.extensions.fragDepth===!0,extensionDrawBuffers:he&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const q in E.defines)T.push(q),T.push(E.defines[q]);return E.isRawShaderMaterial===!1&&(g(T,E),v(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function g(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function v(E,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),E.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function M(E){const T=_[E.type];let q;if(T){const K=Yn[T];q=tS.clone(K.uniforms)}else q=E.uniforms;return q}function L(E,T){let q;for(let K=0,ae=c.length;K<ae;K++){const D=c[K];if(D.cacheKey===T){q=D,++q.usedTimes;break}}return q===void 0&&(q=new gw(t,T,E,s),c.push(q)),q}function R(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function P(E){l.remove(E)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:M,acquireProgram:L,releaseProgram:R,releaseShaderCache:P,programs:c,dispose:z}}function Sw(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Mw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Np(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,m,_,y,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:y,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=y,u.group=p),e++,u}function o(d,h,m,_,y,p){const u=a(d,h,m,_,y,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,h,m,_,y,p){const u=a(d,h,m,_,y,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||Mw),i.length>1&&i.sort(h||Np),r.length>1&&r.sort(h||Np)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function Ew(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Dp,t.set(i,[a])):r>=s.length?(a=new Dp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ww(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new $e};break;case"SpotLight":n={position:new k,direction:new k,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function Tw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let bw=0;function Aw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Cw(t,e){const n=new ww,i=Tw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new k);const s=new k,a=new _t,o=new _t;function l(f,d){let h=0,m=0,_=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let y=0,p=0,u=0,g=0,v=0,M=0,L=0,R=0,P=0,z=0,E=0;f.sort(Aw);const T=d===!0?Math.PI:1;for(let K=0,ae=f.length;K<ae;K++){const D=f[K],H=D.color,$=D.intensity,J=D.distance,I=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=H.r*$*T,m+=H.g*$*T,_+=H.b*$*T;else if(D.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(D.sh.coefficients[G],$);E++}else if(D.isDirectionalLight){const G=n.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const C=D.shadow,b=i.get(D);b.shadowBias=C.bias,b.shadowNormalBias=C.normalBias,b.shadowRadius=C.radius,b.shadowMapSize=C.mapSize,r.directionalShadow[y]=b,r.directionalShadowMap[y]=I,r.directionalShadowMatrix[y]=D.shadow.matrix,M++}r.directional[y]=G,y++}else if(D.isSpotLight){const G=n.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(H).multiplyScalar($*T),G.distance=J,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,r.spot[u]=G;const C=D.shadow;if(D.map&&(r.spotLightMap[P]=D.map,P++,C.updateMatrices(D),D.castShadow&&z++),r.spotLightMatrix[u]=C.matrix,D.castShadow){const b=i.get(D);b.shadowBias=C.bias,b.shadowNormalBias=C.normalBias,b.shadowRadius=C.radius,b.shadowMapSize=C.mapSize,r.spotShadow[u]=b,r.spotShadowMap[u]=I,R++}u++}else if(D.isRectAreaLight){const G=n.get(D);G.color.copy(H).multiplyScalar($),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=G,g++}else if(D.isPointLight){const G=n.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity*T),G.distance=D.distance,G.decay=D.decay,D.castShadow){const C=D.shadow,b=i.get(D);b.shadowBias=C.bias,b.shadowNormalBias=C.normalBias,b.shadowRadius=C.radius,b.shadowMapSize=C.mapSize,b.shadowCameraNear=C.camera.near,b.shadowCameraFar=C.camera.far,r.pointShadow[p]=b,r.pointShadowMap[p]=I,r.pointShadowMatrix[p]=D.shadow.matrix,L++}r.point[p]=G,p++}else if(D.isHemisphereLight){const G=n.get(D);G.skyColor.copy(D.color).multiplyScalar($*T),G.groundColor.copy(D.groundColor).multiplyScalar($*T),r.hemi[v]=G,v++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const q=r.hash;(q.directionalLength!==y||q.pointLength!==p||q.spotLength!==u||q.rectAreaLength!==g||q.hemiLength!==v||q.numDirectionalShadows!==M||q.numPointShadows!==L||q.numSpotShadows!==R||q.numSpotMaps!==P||q.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+P-z,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=E,q.directionalLength=y,q.pointLength=p,q.spotLength=u,q.rectAreaLength=g,q.hemiLength=v,q.numDirectionalShadows=M,q.numPointShadows=L,q.numSpotShadows=R,q.numSpotMaps=P,q.numLightProbes=E,r.version=bw++)}function c(f,d){let h=0,m=0,_=0,y=0,p=0;const u=d.matrixWorldInverse;for(let g=0,v=f.length;g<v;g++){const M=f[g];if(M.isDirectionalLight){const L=r.directional[h];L.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),h++}else if(M.isSpotLight){const L=r.spot[_];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),_++}else if(M.isRectAreaLight){const L=r.rectArea[y];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(u),o.identity(),a.copy(M.matrixWorld),a.premultiply(u),o.extractRotation(a),L.halfWidth.set(M.width*.5,0,0),L.halfHeight.set(0,M.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){const L=r.hemi[p];L.direction.setFromMatrixPosition(M.matrixWorld),L.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Up(t,e){const n=new Cw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Rw(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Up(t,e),n.set(s,[l])):a>=o.length?(l=new Up(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Pw extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=by,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lw extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Uw(t,e,n){let i=new Wd;const r=new Ke,s=new Ke,a=new ct,o=new Pw({depthPacking:Ay}),l=new Lw,c={},f=n.maxTextureSize,d={[Xi]:ln,[ln]:Xi,[li]:li},h=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Nw,fragmentShader:Dw}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Wn;_.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Kn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=o0;let u=this.type;this.render=function(R,P,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),q=t.getActiveMipmapLevel(),K=t.state;K.setBlending(Hi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ae=u!==si&&this.type===si,D=u===si&&this.type!==si;for(let H=0,$=R.length;H<$;H++){const J=R[H],I=J.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const G=I.getFrameExtents();if(r.multiply(G),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/G.x),r.x=s.x*G.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/G.y),r.y=s.y*G.y,I.mapSize.y=s.y)),I.map===null||ae===!0||D===!0){const b=this.type!==si?{minFilter:$t,magFilter:$t}:{};I.map!==null&&I.map.dispose(),I.map=new Sr(r.x,r.y,b),I.map.texture.name=J.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const C=I.getViewportCount();for(let b=0;b<C;b++){const B=I.getViewport(b);a.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),K.viewport(a),I.updateMatrices(J,b),i=I.getFrustum(),M(P,z,I.camera,J,this.type)}I.isPointLightShadow!==!0&&this.type===si&&g(I,z),I.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(E,T,q)};function g(R,P){const z=e.update(y);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Sr(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(P,null,z,h,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(P,null,z,m,y,null)}function v(R,P,z,E){let T=null;const q=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(q!==void 0)T=q;else if(T=z.isPointLight===!0?l:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const K=T.uuid,ae=P.uuid;let D=c[K];D===void 0&&(D={},c[K]=D);let H=D[ae];H===void 0&&(H=T.clone(),D[ae]=H,P.addEventListener("dispose",L)),T=H}if(T.visible=P.visible,T.wireframe=P.wireframe,E===si?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:d[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const K=t.properties.get(T);K.light=z}return T}function M(R,P,z,E,T){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===si)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const ae=e.update(R),D=R.material;if(Array.isArray(D)){const H=ae.groups;for(let $=0,J=H.length;$<J;$++){const I=H[$],G=D[I.materialIndex];if(G&&G.visible){const C=v(R,G,E,T);R.onBeforeShadow(t,R,P,z,ae,C,I),t.renderBufferDirect(z,null,ae,C,R,I),R.onAfterShadow(t,R,P,z,ae,C,I)}}}else if(D.visible){const H=v(R,D,E,T);R.onBeforeShadow(t,R,P,z,ae,H,null),t.renderBufferDirect(z,null,ae,H,R,null),R.onAfterShadow(t,R,P,z,ae,H,null)}}const K=R.children;for(let ae=0,D=K.length;ae<D;ae++)M(K[ae],P,z,E,T)}function L(R){R.target.removeEventListener("dispose",L);for(const z in c){const E=c[z],T=R.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function Iw(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const fe=new ct;let he=null;const Pe=new ct(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!N&&(t.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){N=Ce},setClear:function(Ce,tt,nt,At,jt){jt===!0&&(Ce*=At,tt*=At,nt*=At),fe.set(Ce,tt,nt,At),Pe.equals(fe)===!1&&(t.clearColor(Ce,tt,nt,At),Pe.copy(fe))},reset:function(){N=!1,he=null,Pe.set(-1,0,0,0)}}}function s(){let N=!1,fe=null,he=null,Pe=null;return{setTest:function(Ce){Ce?ge(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(Ce){fe!==Ce&&!N&&(t.depthMask(Ce),fe=Ce)},setFunc:function(Ce){if(he!==Ce){switch(Ce){case ny:t.depthFunc(t.NEVER);break;case iy:t.depthFunc(t.ALWAYS);break;case ry:t.depthFunc(t.LESS);break;case sl:t.depthFunc(t.LEQUAL);break;case sy:t.depthFunc(t.EQUAL);break;case ay:t.depthFunc(t.GEQUAL);break;case oy:t.depthFunc(t.GREATER);break;case ly:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=Ce}},setLocked:function(Ce){N=Ce},setClear:function(Ce){Pe!==Ce&&(t.clearDepth(Ce),Pe=Ce)},reset:function(){N=!1,fe=null,he=null,Pe=null}}}function a(){let N=!1,fe=null,he=null,Pe=null,Ce=null,tt=null,nt=null,At=null,jt=null;return{setTest:function(it){N||(it?ge(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(it){fe!==it&&!N&&(t.stencilMask(it),fe=it)},setFunc:function(it,Xt,jn){(he!==it||Pe!==Xt||Ce!==jn)&&(t.stencilFunc(it,Xt,jn),he=it,Pe=Xt,Ce=jn)},setOp:function(it,Xt,jn){(tt!==it||nt!==Xt||At!==jn)&&(t.stencilOp(it,Xt,jn),tt=it,nt=Xt,At=jn)},setLocked:function(it){N=it},setClear:function(it){jt!==it&&(t.clearStencil(it),jt=it)},reset:function(){N=!1,fe=null,he=null,Pe=null,Ce=null,tt=null,nt=null,At=null,jt=null}}}const o=new r,l=new s,c=new a,f=new WeakMap,d=new WeakMap;let h={},m={},_=new WeakMap,y=[],p=null,u=!1,g=null,v=null,M=null,L=null,R=null,P=null,z=null,E=new $e(0,0,0),T=0,q=!1,K=null,ae=null,D=null,H=null,$=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,G=0;const C=t.getParameter(t.VERSION);C.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(C)[1]),I=G>=1):C.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),I=G>=2);let b=null,B={};const U=t.getParameter(t.SCISSOR_BOX),V=t.getParameter(t.VIEWPORT),Z=new ct().fromArray(U),ee=new ct().fromArray(V);function Q(N,fe,he,Pe){const Ce=new Uint8Array(4),tt=t.createTexture();t.bindTexture(N,tt),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<he;nt++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,Ce):t.texImage2D(fe+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ce);return tt}const ue={};ue[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ue[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ge(t.DEPTH_TEST),l.setFunc(sl),be(!1),A(mh),ge(t.CULL_FACE),me(Hi);function ge(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function pe(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Se(N,fe){return m[N]!==fe?(t.bindFramebuffer(N,fe),m[N]=fe,i&&(N===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=fe),N===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function F(N,fe){let he=y,Pe=!1;if(N)if(he=_.get(fe),he===void 0&&(he=[],_.set(fe,he)),N.isWebGLMultipleRenderTargets){const Ce=N.texture;if(he.length!==Ce.length||he[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,nt=Ce.length;tt<nt;tt++)he[tt]=t.COLOR_ATTACHMENT0+tt;he.length=Ce.length,Pe=!0}}else he[0]!==t.COLOR_ATTACHMENT0&&(he[0]=t.COLOR_ATTACHMENT0,Pe=!0);else he[0]!==t.BACK&&(he[0]=t.BACK,Pe=!0);Pe&&(n.isWebGL2?t.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function je(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const oe={[ar]:t.FUNC_ADD,[H_]:t.FUNC_SUBTRACT,[G_]:t.FUNC_REVERSE_SUBTRACT};if(i)oe[_h]=t.MIN,oe[yh]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(oe[_h]=N.MIN_EXT,oe[yh]=N.MAX_EXT)}const Me={[V_]:t.ZERO,[W_]:t.ONE,[j_]:t.SRC_COLOR,[Fu]:t.SRC_ALPHA,[Z_]:t.SRC_ALPHA_SATURATE,[$_]:t.DST_COLOR,[q_]:t.DST_ALPHA,[X_]:t.ONE_MINUS_SRC_COLOR,[Ou]:t.ONE_MINUS_SRC_ALPHA,[K_]:t.ONE_MINUS_DST_COLOR,[Y_]:t.ONE_MINUS_DST_ALPHA,[Q_]:t.CONSTANT_COLOR,[J_]:t.ONE_MINUS_CONSTANT_COLOR,[ey]:t.CONSTANT_ALPHA,[ty]:t.ONE_MINUS_CONSTANT_ALPHA};function me(N,fe,he,Pe,Ce,tt,nt,At,jt,it){if(N===Hi){u===!0&&(pe(t.BLEND),u=!1);return}if(u===!1&&(ge(t.BLEND),u=!0),N!==B_){if(N!==g||it!==q){if((v!==ar||R!==ar)&&(t.blendEquation(t.FUNC_ADD),v=ar,R=ar),it)switch(N){case ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gh:t.blendFunc(t.ONE,t.ONE);break;case vh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case vh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,L=null,P=null,z=null,E.set(0,0,0),T=0,g=N,q=it}return}Ce=Ce||fe,tt=tt||he,nt=nt||Pe,(fe!==v||Ce!==R)&&(t.blendEquationSeparate(oe[fe],oe[Ce]),v=fe,R=Ce),(he!==M||Pe!==L||tt!==P||nt!==z)&&(t.blendFuncSeparate(Me[he],Me[Pe],Me[tt],Me[nt]),M=he,L=Pe,P=tt,z=nt),(At.equals(E)===!1||jt!==T)&&(t.blendColor(At.r,At.g,At.b,jt),E.copy(At),T=jt),g=N,q=!1}function We(N,fe){N.side===li?pe(t.CULL_FACE):ge(t.CULL_FACE);let he=N.side===ln;fe&&(he=!he),be(he),N.blending===ls&&N.transparent===!1?me(Hi):me(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const Pe=N.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),W(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function be(N){K!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),K=N)}function A(N){N!==O_?(ge(t.CULL_FACE),N!==ae&&(N===mh?t.cullFace(t.BACK):N===k_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),ae=N}function S(N){N!==D&&(I&&t.lineWidth(N),D=N)}function W(N,fe,he){N?(ge(t.POLYGON_OFFSET_FILL),(H!==fe||$!==he)&&(t.polygonOffset(fe,he),H=fe,$=he)):pe(t.POLYGON_OFFSET_FILL)}function re(N){N?ge(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function ne(N){N===void 0&&(N=t.TEXTURE0+J-1),b!==N&&(t.activeTexture(N),b=N)}function se(N,fe,he){he===void 0&&(b===null?he=t.TEXTURE0+J-1:he=b);let Pe=B[he];Pe===void 0&&(Pe={type:void 0,texture:void 0},B[he]=Pe),(Pe.type!==N||Pe.texture!==fe)&&(b!==he&&(t.activeTexture(he),b=he),t.bindTexture(N,fe||ue[N]),Pe.type=N,Pe.texture=fe)}function Ee(){const N=B[b];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function de(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(N){Z.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function Ze(N){ee.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),ee.copy(N))}function pt(N,fe){let he=d.get(fe);he===void 0&&(he=new WeakMap,d.set(fe,he));let Pe=he.get(N);Pe===void 0&&(Pe=t.getUniformBlockIndex(fe,N.name),he.set(N,Pe))}function Be(N,fe){const Pe=d.get(fe).get(N);f.get(fe)!==Pe&&(t.uniformBlockBinding(fe,Pe,N.__bindingPointIndex),f.set(fe,Pe))}function le(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},b=null,B={},m={},_=new WeakMap,y=[],p=null,u=!1,g=null,v=null,M=null,L=null,R=null,P=null,z=null,E=new $e(0,0,0),T=0,q=!1,K=null,ae=null,D=null,H=null,$=null,Z.set(0,0,t.canvas.width,t.canvas.height),ee.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ge,disable:pe,bindFramebuffer:Se,drawBuffers:F,useProgram:je,setBlending:me,setMaterial:We,setFlipSided:be,setCullFace:A,setLineWidth:S,setPolygonOffset:W,setScissorTest:re,activeTexture:ne,bindTexture:se,unbindTexture:Ee,compressedTexImage2D:de,compressedTexImage3D:_e,texImage2D:Te,texImage3D:ye,updateUBOMapping:pt,uniformBlockBinding:Be,texStorage2D:ke,texStorage3D:Le,texSubImage2D:Ae,texSubImage3D:De,compressedTexSubImage2D:te,compressedTexSubImage3D:Ye,scissor:Fe,viewport:Ze,reset:le}}function Fw(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return m?new OffscreenCanvas(A,S):dl("canvas")}function y(A,S,W,re){let ne=1;if((A.width>re||A.height>re)&&(ne=re/Math.max(A.width,A.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const se=S?Vu:Math.floor,Ee=se(ne*A.width),de=se(ne*A.height);d===void 0&&(d=_(Ee,de));const _e=W?_(Ee,de):d;return _e.width=Ee,_e.height=de,_e.getContext("2d").drawImage(A,0,0,Ee,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ee+"x"+de+")."),_e}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Kh(A.width)&&Kh(A.height)}function u(A){return o?!1:A.wrapS!==kn||A.wrapT!==kn||A.minFilter!==$t&&A.minFilter!==wn}function g(A,S){return A.generateMipmaps&&S&&A.minFilter!==$t&&A.minFilter!==wn}function v(A){t.generateMipmap(A)}function M(A,S,W,re,ne=!1){if(o===!1)return S;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=S;if(S===t.RED&&(W===t.FLOAT&&(se=t.R32F),W===t.HALF_FLOAT&&(se=t.R16F),W===t.UNSIGNED_BYTE&&(se=t.R8)),S===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(se=t.R8UI),W===t.UNSIGNED_SHORT&&(se=t.R16UI),W===t.UNSIGNED_INT&&(se=t.R32UI),W===t.BYTE&&(se=t.R8I),W===t.SHORT&&(se=t.R16I),W===t.INT&&(se=t.R32I)),S===t.RG&&(W===t.FLOAT&&(se=t.RG32F),W===t.HALF_FLOAT&&(se=t.RG16F),W===t.UNSIGNED_BYTE&&(se=t.RG8)),S===t.RGBA){const Ee=ne?al:et.getTransfer(re);W===t.FLOAT&&(se=t.RGBA32F),W===t.HALF_FLOAT&&(se=t.RGBA16F),W===t.UNSIGNED_BYTE&&(se=Ee===at?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function L(A,S,W){return g(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==$t&&A.minFilter!==wn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){return A===$t||A===Sh||A===uc?t.NEAREST:t.LINEAR}function P(A){const S=A.target;S.removeEventListener("dispose",P),E(S),S.isVideoTexture&&f.delete(S)}function z(A){const S=A.target;S.removeEventListener("dispose",z),q(S)}function E(A){const S=i.get(A);if(S.__webglInit===void 0)return;const W=A.source,re=h.get(W);if(re){const ne=re[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(A),Object.keys(re).length===0&&h.delete(W)}i.remove(A)}function T(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const W=A.source,re=h.get(W);delete re[S.__cacheKey],a.memory.textures--}function q(A){const S=A.texture,W=i.get(A),re=i.get(S);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(W.__webglFramebuffer[ne]))for(let se=0;se<W.__webglFramebuffer[ne].length;se++)t.deleteFramebuffer(W.__webglFramebuffer[ne][se]);else t.deleteFramebuffer(W.__webglFramebuffer[ne]);W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer[ne])}else{if(Array.isArray(W.__webglFramebuffer))for(let ne=0;ne<W.__webglFramebuffer.length;ne++)t.deleteFramebuffer(W.__webglFramebuffer[ne]);else t.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&t.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ne=0;ne<W.__webglColorRenderbuffer.length;ne++)W.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(W.__webglColorRenderbuffer[ne]);W.__webglDepthRenderbuffer&&t.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,se=S.length;ne<se;ne++){const Ee=i.get(S[ne]);Ee.__webglTexture&&(t.deleteTexture(Ee.__webglTexture),a.memory.textures--),i.remove(S[ne])}i.remove(S),i.remove(A)}let K=0;function ae(){K=0}function D(){const A=K;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),K+=1,A}function H(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function $(A,S){const W=i.get(A);if(A.isVideoTexture&&We(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(W,A,S);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+S)}function J(A,S){const W=i.get(A);if(A.version>0&&W.__version!==A.version){Z(W,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+S)}function I(A,S){const W=i.get(A);if(A.version>0&&W.__version!==A.version){Z(W,A,S);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+S)}function G(A,S){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ee(W,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+S)}const C={[Bu]:t.REPEAT,[kn]:t.CLAMP_TO_EDGE,[Hu]:t.MIRRORED_REPEAT},b={[$t]:t.NEAREST,[Sh]:t.NEAREST_MIPMAP_NEAREST,[uc]:t.NEAREST_MIPMAP_LINEAR,[wn]:t.LINEAR,[vy]:t.LINEAR_MIPMAP_NEAREST,[_a]:t.LINEAR_MIPMAP_LINEAR},B={[Ry]:t.NEVER,[Iy]:t.ALWAYS,[Py]:t.LESS,[_0]:t.LEQUAL,[Ly]:t.EQUAL,[Uy]:t.GEQUAL,[Ny]:t.GREATER,[Dy]:t.NOTEQUAL};function U(A,S,W){if(W?(t.texParameteri(A,t.TEXTURE_WRAP_S,C[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,C[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,C[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,b[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,b[S.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==kn||S.wrapT!==kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,R(S.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==$t&&S.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,B[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===$t||S.minFilter!==uc&&S.minFilter!==_a||S.type===Ni&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===ya&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function V(A,S){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",P));const re=S.source;let ne=h.get(re);ne===void 0&&(ne={},h.set(re,ne));const se=H(S);if(se!==A.__cacheKey){ne[se]===void 0&&(ne[se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ne[se].usedTimes++;const Ee=ne[A.__cacheKey];Ee!==void 0&&(ne[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&T(S)),A.__cacheKey=se,A.__webglTexture=ne[se].texture}return W}function Z(A,S,W){let re=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=t.TEXTURE_3D);const ne=V(A,S),se=S.source;n.bindTexture(re,A.__webglTexture,t.TEXTURE0+W);const Ee=i.get(se);if(se.version!==Ee.__version||ne===!0){n.activeTexture(t.TEXTURE0+W);const de=et.getPrimaries(et.workingColorSpace),_e=S.colorSpace===Tn?null:et.getPrimaries(S.colorSpace),Ae=S.colorSpace===Tn||de===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const De=u(S)&&p(S.image)===!1;let te=y(S.image,De,!1,r.maxTextureSize);te=be(S,te);const Ye=p(te)||o,ke=s.convert(S.format,S.colorSpace);let Le=s.convert(S.type),Te=M(S.internalFormat,ke,Le,S.colorSpace,S.isVideoTexture);U(re,S,Ye);let ye;const Fe=S.mipmaps,Ze=o&&S.isVideoTexture!==!0&&Te!==g0,pt=Ee.__version===void 0||ne===!0,Be=L(S,te,Ye);if(S.isDepthTexture)Te=t.DEPTH_COMPONENT,o?S.type===Ni?Te=t.DEPTH_COMPONENT32F:S.type===Li?Te=t.DEPTH_COMPONENT24:S.type===hr?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:S.type===Ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===pr&&Te===t.DEPTH_COMPONENT&&S.type!==Hd&&S.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Li,Le=s.convert(S.type)),S.format===_s&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,S.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=hr,Le=s.convert(S.type))),pt&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,Te,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Te,te.width,te.height,0,ke,Le,null));else if(S.isDataTexture)if(Fe.length>0&&Ye){Ze&&pt&&n.texStorage2D(t.TEXTURE_2D,Be,Te,Fe[0].width,Fe[0].height);for(let le=0,N=Fe.length;le<N;le++)ye=Fe[le],Ze?n.texSubImage2D(t.TEXTURE_2D,le,0,0,ye.width,ye.height,ke,Le,ye.data):n.texImage2D(t.TEXTURE_2D,le,Te,ye.width,ye.height,0,ke,Le,ye.data);S.generateMipmaps=!1}else Ze?(pt&&n.texStorage2D(t.TEXTURE_2D,Be,Te,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,ke,Le,te.data)):n.texImage2D(t.TEXTURE_2D,0,Te,te.width,te.height,0,ke,Le,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Te,Fe[0].width,Fe[0].height,te.depth);for(let le=0,N=Fe.length;le<N;le++)ye=Fe[le],S.format!==zn?ke!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,te.depth,ke,ye.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,Te,ye.width,ye.height,te.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,te.depth,ke,Le,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,Te,ye.width,ye.height,te.depth,0,ke,Le,ye.data)}else{Ze&&pt&&n.texStorage2D(t.TEXTURE_2D,Be,Te,Fe[0].width,Fe[0].height);for(let le=0,N=Fe.length;le<N;le++)ye=Fe[le],S.format!==zn?ke!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,ye.width,ye.height,ke,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,le,Te,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,le,0,0,ye.width,ye.height,ke,Le,ye.data):n.texImage2D(t.TEXTURE_2D,le,Te,ye.width,ye.height,0,ke,Le,ye.data)}else if(S.isDataArrayTexture)Ze?(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Te,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ke,Le,te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,te.width,te.height,te.depth,0,ke,Le,te.data);else if(S.isData3DTexture)Ze?(pt&&n.texStorage3D(t.TEXTURE_3D,Be,Te,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ke,Le,te.data)):n.texImage3D(t.TEXTURE_3D,0,Te,te.width,te.height,te.depth,0,ke,Le,te.data);else if(S.isFramebufferTexture){if(pt)if(Ze)n.texStorage2D(t.TEXTURE_2D,Be,Te,te.width,te.height);else{let le=te.width,N=te.height;for(let fe=0;fe<Be;fe++)n.texImage2D(t.TEXTURE_2D,fe,Te,le,N,0,ke,Le,null),le>>=1,N>>=1}}else if(Fe.length>0&&Ye){Ze&&pt&&n.texStorage2D(t.TEXTURE_2D,Be,Te,Fe[0].width,Fe[0].height);for(let le=0,N=Fe.length;le<N;le++)ye=Fe[le],Ze?n.texSubImage2D(t.TEXTURE_2D,le,0,0,ke,Le,ye):n.texImage2D(t.TEXTURE_2D,le,Te,ke,Le,ye);S.generateMipmaps=!1}else Ze?(pt&&n.texStorage2D(t.TEXTURE_2D,Be,Te,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ke,Le,te)):n.texImage2D(t.TEXTURE_2D,0,Te,ke,Le,te);g(S,Ye)&&v(re),Ee.__version=se.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ee(A,S,W){if(S.image.length!==6)return;const re=V(A,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+W);const se=i.get(ne);if(ne.version!==se.__version||re===!0){n.activeTexture(t.TEXTURE0+W);const Ee=et.getPrimaries(et.workingColorSpace),de=S.colorSpace===Tn?null:et.getPrimaries(S.colorSpace),_e=S.colorSpace===Tn||Ee===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,De=S.image[0]&&S.image[0].isDataTexture,te=[];for(let le=0;le<6;le++)!Ae&&!De?te[le]=y(S.image[le],!1,!0,r.maxCubemapSize):te[le]=De?S.image[le].image:S.image[le],te[le]=be(S,te[le]);const Ye=te[0],ke=p(Ye)||o,Le=s.convert(S.format,S.colorSpace),Te=s.convert(S.type),ye=M(S.internalFormat,Le,Te,S.colorSpace),Fe=o&&S.isVideoTexture!==!0,Ze=se.__version===void 0||re===!0;let pt=L(S,Ye,ke);U(t.TEXTURE_CUBE_MAP,S,ke);let Be;if(Ae){Fe&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,ye,Ye.width,Ye.height);for(let le=0;le<6;le++){Be=te[le].mipmaps;for(let N=0;N<Be.length;N++){const fe=Be[N];S.format!==zn?Le!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N,0,0,fe.width,fe.height,Le,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N,ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N,0,0,fe.width,fe.height,Le,Te,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N,ye,fe.width,fe.height,0,Le,Te,fe.data)}}}else{Be=S.mipmaps,Fe&&Ze&&(Be.length>0&&pt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,ye,te[0].width,te[0].height));for(let le=0;le<6;le++)if(De){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,te[le].width,te[le].height,Le,Te,te[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ye,te[le].width,te[le].height,0,Le,Te,te[le].data);for(let N=0;N<Be.length;N++){const he=Be[N].image[le].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N+1,0,0,he.width,he.height,Le,Te,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N+1,ye,he.width,he.height,0,Le,Te,he.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Le,Te,te[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ye,Le,Te,te[le]);for(let N=0;N<Be.length;N++){const fe=Be[N];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N+1,0,0,Le,Te,fe.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N+1,ye,Le,Te,fe.image[le])}}}g(S,ke)&&v(t.TEXTURE_CUBE_MAP),se.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Q(A,S,W,re,ne,se){const Ee=s.convert(W.format,W.colorSpace),de=s.convert(W.type),_e=M(W.internalFormat,Ee,de,W.colorSpace);if(!i.get(S).__hasExternalTextures){const De=Math.max(1,S.width>>se),te=Math.max(1,S.height>>se);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,se,_e,De,te,S.depth,0,Ee,de,null):n.texImage2D(ne,se,_e,De,te,0,Ee,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),me(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ne,i.get(W).__webglTexture,0,Me(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,ne,i.get(W).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(A,S,W){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let re=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(W||me(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ni?re=t.DEPTH_COMPONENT32F:ne.type===Li&&(re=t.DEPTH_COMPONENT24));const se=Me(S);me(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,re,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,re,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const re=Me(S);W&&me(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,S.width,S.height):me(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const re=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<re.length;ne++){const se=re[ne],Ee=s.convert(se.format,se.colorSpace),de=s.convert(se.type),_e=M(se.internalFormat,Ee,de,se.colorSpace),Ae=Me(S);W&&me(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,_e,S.width,S.height):me(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,_e,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,_e,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ge(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const re=i.get(S.depthTexture).__webglTexture,ne=Me(S);if(S.depthTexture.format===pr)me(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(S.depthTexture.format===_s)me(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function pe(A){const S=i.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ge(S.__webglFramebuffer,A)}else if(W){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]=t.createRenderbuffer(),ue(S.__webglDepthbuffer[re],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),ue(S.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Se(A,S,W){const re=i.get(A);S!==void 0&&Q(re.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&pe(A)}function F(A){const S=A.texture,W=i.get(A),re=i.get(S);A.addEventListener("dispose",z),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=S.version,a.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,se=A.isWebGLMultipleRenderTargets===!0,Ee=p(A)||o;if(ne){W.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[de]=[];for(let _e=0;_e<S.mipmaps.length;_e++)W.__webglFramebuffer[de][_e]=t.createFramebuffer()}else W.__webglFramebuffer[de]=t.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)W.__webglFramebuffer[de]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const de=A.texture;for(let _e=0,Ae=de.length;_e<Ae;_e++){const De=i.get(de[_e]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&me(A)===!1){const de=se?S:[S];W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let _e=0;_e<de.length;_e++){const Ae=de[_e];W.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[_e]);const De=s.convert(Ae.format,Ae.colorSpace),te=s.convert(Ae.type),Ye=M(Ae.internalFormat,De,te,Ae.colorSpace,A.isXRRenderTarget===!0),ke=Me(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,Ye,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,W.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(W.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),U(t.TEXTURE_CUBE_MAP,S,Ee);for(let de=0;de<6;de++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)Q(W.__webglFramebuffer[de][_e],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else Q(W.__webglFramebuffer[de],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(S,Ee)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const de=A.texture;for(let _e=0,Ae=de.length;_e<Ae;_e++){const De=de[_e],te=i.get(De);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),U(t.TEXTURE_2D,De,Ee),Q(W.__webglFramebuffer,A,De,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),g(De,Ee)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?de=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,re.__webglTexture),U(de,S,Ee),o&&S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)Q(W.__webglFramebuffer[_e],A,S,t.COLOR_ATTACHMENT0,de,_e);else Q(W.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,de,0);g(S,Ee)&&v(de),n.unbindTexture()}A.depthBuffer&&pe(A)}function je(A){const S=p(A)||o,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,ne=W.length;re<ne;re++){const se=W[re];if(g(se,S)){const Ee=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,de=i.get(se).__webglTexture;n.bindTexture(Ee,de),v(Ee),n.unbindTexture()}}}function oe(A){if(o&&A.samples>0&&me(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,re=A.height;let ne=t.COLOR_BUFFER_BIT;const se=[],Ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(A),_e=A.isWebGLMultipleRenderTargets===!0;if(_e)for(let Ae=0;Ae<S.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){se.push(t.COLOR_ATTACHMENT0+Ae),A.depthBuffer&&se.push(Ee);const De=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(De===!1&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),_e&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]),De===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ee]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ee])),_e){const te=i.get(S[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,W,re,0,0,W,re,ne,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let Ae=0;Ae<S.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]);const De=i.get(S[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Me(A){return Math.min(r.maxSamples,A.samples)}function me(A){const S=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function We(A){const S=a.render.frame;f.get(A)!==S&&(f.set(A,S),A.update())}function be(A,S){const W=A.colorSpace,re=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Gu||W!==vi&&W!==Tn&&(et.getTransfer(W)===at?o===!1?e.has("EXT_sRGB")===!0&&re===zn?(A.format=Gu,A.minFilter=wn,A.generateMipmaps=!1):S=S0.sRGBToLinear(S):(re!==zn||ne!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}this.allocateTextureUnit=D,this.resetTextureUnits=ae,this.setTexture2D=$,this.setTexture2DArray=J,this.setTexture3D=I,this.setTextureCube=G,this.rebindTextures=Se,this.setupRenderTarget=F,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=me}function Ow(t,e,n){const i=n.isWebGL2;function r(s,a=Tn){let o;const l=et.getTransfer(a);if(s===Vi)return t.UNSIGNED_BYTE;if(s===d0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===f0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===xy)return t.BYTE;if(s===_y)return t.SHORT;if(s===Hd)return t.UNSIGNED_SHORT;if(s===u0)return t.INT;if(s===Li)return t.UNSIGNED_INT;if(s===Ni)return t.FLOAT;if(s===ya)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===yy)return t.ALPHA;if(s===zn)return t.RGBA;if(s===Sy)return t.LUMINANCE;if(s===My)return t.LUMINANCE_ALPHA;if(s===pr)return t.DEPTH_COMPONENT;if(s===_s)return t.DEPTH_STENCIL;if(s===Gu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ey)return t.RED;if(s===h0)return t.RED_INTEGER;if(s===wy)return t.RG;if(s===p0)return t.RG_INTEGER;if(s===m0)return t.RGBA_INTEGER;if(s===dc||s===fc||s===hc||s===pc)if(l===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===dc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===dc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===pc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mh||s===Eh||s===wh||s===Th)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Mh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Eh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Th)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===g0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===bh||s===Ah)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===bh)return l===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ah)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ch||s===Rh||s===Ph||s===Lh||s===Nh||s===Dh||s===Uh||s===Ih||s===Fh||s===Oh||s===kh||s===zh||s===Bh||s===Hh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ch)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rh)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ph)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lh)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nh)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dh)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uh)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ih)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fh)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Oh)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===kh)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zh)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bh)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hh)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mc||s===Gh||s===Vh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===mc)return l===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ty||s===Wh||s===jh||s===Xh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===mc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Wh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===jh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class kw extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _o extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zw={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _o;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Bw extends ws{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,m=null,_=null;const y=n.getContextAttributes();let p=null,u=null;const g=[],v=[],M=new Ke;let L=null;const R=new nn;R.layers.enable(1),R.viewport=new ct;const P=new nn;P.layers.enable(2),P.viewport=new ct;const z=[R,P],E=new kw;E.layers.enable(1),E.layers.enable(2);let T=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let V=g[U];return V===void 0&&(V=new Bc,g[U]=V),V.getTargetRaySpace()},this.getControllerGrip=function(U){let V=g[U];return V===void 0&&(V=new Bc,g[U]=V),V.getGripSpace()},this.getHand=function(U){let V=g[U];return V===void 0&&(V=new Bc,g[U]=V),V.getHandSpace()};function K(U){const V=v.indexOf(U.inputSource);if(V===-1)return;const Z=g[V];Z!==void 0&&(Z.update(U.inputSource,U.frame,c||a),Z.dispatchEvent({type:U.type,data:U.inputSource}))}function ae(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",D);for(let U=0;U<g.length;U++){const V=v[U];V!==null&&(v[U]=null,g[U].disconnect(V))}T=null,q=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,u=null,B.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",D),y.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,V),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Sr(m.framebufferWidth,m.framebufferHeight,{format:zn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let V=null,Z=null,ee=null;y.depth&&(ee=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,V=y.stencil?_s:pr,Z=y.stencil?hr:Li);const Q={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Q),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Sr(h.textureWidth,h.textureHeight,{format:zn,type:Vi,depthTexture:new D0(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ue=e.properties.get(u);ue.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),B.setContext(r),B.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(U){for(let V=0;V<U.removed.length;V++){const Z=U.removed[V],ee=v.indexOf(Z);ee>=0&&(v[ee]=null,g[ee].disconnect(Z))}for(let V=0;V<U.added.length;V++){const Z=U.added[V];let ee=v.indexOf(Z);if(ee===-1){for(let ue=0;ue<g.length;ue++)if(ue>=v.length){v.push(Z),ee=ue;break}else if(v[ue]===null){v[ue]=Z,ee=ue;break}if(ee===-1)break}const Q=g[ee];Q&&Q.connect(Z)}}const H=new k,$=new k;function J(U,V,Z){H.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(Z.matrixWorld);const ee=H.distanceTo($),Q=V.projectionMatrix.elements,ue=Z.projectionMatrix.elements,ge=Q[14]/(Q[10]-1),pe=Q[14]/(Q[10]+1),Se=(Q[9]+1)/Q[5],F=(Q[9]-1)/Q[5],je=(Q[8]-1)/Q[0],oe=(ue[8]+1)/ue[0],Me=ge*je,me=ge*oe,We=ee/(-je+oe),be=We*-je;V.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(be),U.translateZ(We),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const A=ge+We,S=pe+We,W=Me-be,re=me+(ee-be),ne=Se*pe/S*A,se=F*pe/S*A;U.projectionMatrix.makePerspective(W,re,ne,se,A,S),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function I(U,V){V===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(V.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;E.near=P.near=R.near=U.near,E.far=P.far=R.far=U.far,(T!==E.near||q!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,q=E.far);const V=U.parent,Z=E.cameras;I(E,V);for(let ee=0;ee<Z.length;ee++)I(Z[ee],V);Z.length===2?J(E,R,P):E.projectionMatrix.copy(R.projectionMatrix),G(U,E,V)};function G(U,V,Z){Z===null?U.matrix.copy(V.matrixWorld):(U.matrix.copy(Z.matrixWorld),U.matrix.invert(),U.matrix.multiply(V.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(V.projectionMatrix),U.projectionMatrixInverse.copy(V.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=ul*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(U){l=U,h!==null&&(h.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let C=null;function b(U,V){if(f=V.getViewerPose(c||a),_=V,f!==null){const Z=f.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ee=!1;Z.length!==E.cameras.length&&(E.cameras.length=0,ee=!0);for(let Q=0;Q<Z.length;Q++){const ue=Z[Q];let ge=null;if(m!==null)ge=m.getViewport(ue);else{const Se=d.getViewSubImage(h,ue);ge=Se.viewport,Q===0&&(e.setRenderTargetTextures(u,Se.colorTexture,h.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(u))}let pe=z[Q];pe===void 0&&(pe=new nn,pe.layers.enable(Q),pe.viewport=new ct,z[Q]=pe),pe.matrix.fromArray(ue.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ue.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(ge.x,ge.y,ge.width,ge.height),Q===0&&(E.matrix.copy(pe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ee===!0&&E.cameras.push(pe)}}for(let Z=0;Z<g.length;Z++){const ee=v[Z],Q=g[Z];ee!==null&&Q!==void 0&&Q.update(ee,V,c||a)}C&&C(U,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),_=null}const B=new N0;B.setAnimationLoop(b),this.setAnimationLoop=function(U){C=U},this.dispose=function(){}}}function Hw(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,R0(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===ln&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===ln&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ln&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Gw(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const M=v.program;i.uniformBlockBinding(g,M)}function c(g,v){let M=r[g.id];M===void 0&&(_(g),M=f(g),r[g.id]=M,g.addEventListener("dispose",p));const L=v.program;i.updateUBOMapping(g,L);const R=e.render.frame;s[g.id]!==R&&(h(g),s[g.id]=R)}function f(g){const v=d();g.__bindingPointIndex=v;const M=t.createBuffer(),L=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,L,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function d(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],M=g.uniforms,L=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,P=M.length;R<P;R++){const z=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,T=z.length;E<T;E++){const q=z[E];if(m(q,R,E,L)===!0){const K=q.__offset,ae=Array.isArray(q.value)?q.value:[q.value];let D=0;for(let H=0;H<ae.length;H++){const $=ae[H],J=y($);typeof $=="number"||typeof $=="boolean"?(q.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,K+D,q.__data)):$.isMatrix3?(q.__data[0]=$.elements[0],q.__data[1]=$.elements[1],q.__data[2]=$.elements[2],q.__data[3]=0,q.__data[4]=$.elements[3],q.__data[5]=$.elements[4],q.__data[6]=$.elements[5],q.__data[7]=0,q.__data[8]=$.elements[6],q.__data[9]=$.elements[7],q.__data[10]=$.elements[8],q.__data[11]=0):($.toArray(q.__data,D),D+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,K,q.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,M,L){const R=g.value,P=v+"_"+M;if(L[P]===void 0)return typeof R=="number"||typeof R=="boolean"?L[P]=R:L[P]=R.clone(),!0;{const z=L[P];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return L[P]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function _(g){const v=g.uniforms;let M=0;const L=16;for(let P=0,z=v.length;P<z;P++){const E=Array.isArray(v[P])?v[P]:[v[P]];for(let T=0,q=E.length;T<q;T++){const K=E[T],ae=Array.isArray(K.value)?K.value:[K.value];for(let D=0,H=ae.length;D<H;D++){const $=ae[D],J=y($),I=M%L;I!==0&&L-I<J.boundary&&(M+=L-I),K.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=M,M+=J.storage}}}const R=M%L;return R>0&&(M+=L-R),g.__size=M,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class z0{constructor(e={}){const{canvas:n=Oy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const v=this;let M=!1,L=0,R=0,P=null,z=-1,E=null;const T=new ct,q=new ct;let K=null;const ae=new $e(0);let D=0,H=n.width,$=n.height,J=1,I=null,G=null;const C=new ct(0,0,H,$),b=new ct(0,0,H,$);let B=!1;const U=new Wd;let V=!1,Z=!1,ee=null;const Q=new _t,ue=new Ke,ge=new k,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return P===null?J:1}let F=i;function je(w,O){for(let X=0;X<w.length;X++){const Y=w[X],j=n.getContext(Y,O);if(j!==null)return j}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bd}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",fe,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),F=je(O,w),F===null)throw je(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let oe,Me,me,We,be,A,S,W,re,ne,se,Ee,de,_e,Ae,De,te,Ye,ke,Le,Te,ye,Fe,Ze;function pt(){oe=new QE(F),Me=new jE(F,oe,e),oe.init(Me),ye=new Ow(F,oe,Me),me=new Iw(F,oe,Me),We=new t1(F),be=new Sw,A=new Fw(F,oe,me,be,Me,ye,We),S=new qE(v),W=new ZE(v),re=new lS(F,Me),Fe=new VE(F,oe,re,Me),ne=new JE(F,re,We,Fe),se=new s1(F,ne,re,We),ke=new r1(F,Me,A),De=new XE(be),Ee=new yw(v,S,W,oe,Me,Fe,De),de=new Hw(v,be),_e=new Ew,Ae=new Rw(oe,Me),Ye=new GE(v,S,W,me,se,h,l),te=new Uw(v,se,Me),Ze=new Gw(F,We,Me,me),Le=new WE(F,oe,We,Me),Te=new e1(F,oe,We,Me),We.programs=Ee.programs,v.capabilities=Me,v.extensions=oe,v.properties=be,v.renderLists=_e,v.shadowMap=te,v.state=me,v.info=We}pt();const Be=new Bw(v,F);this.xr=Be,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(H,$,!1))},this.getSize=function(w){return w.set(H,$)},this.setSize=function(w,O,X=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,$=O,n.width=Math.floor(w*J),n.height=Math.floor(O*J),X===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(H*J,$*J).floor()},this.setDrawingBufferSize=function(w,O,X){H=w,$=O,J=X,n.width=Math.floor(w*X),n.height=Math.floor(O*X),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(C)},this.setViewport=function(w,O,X,Y){w.isVector4?C.set(w.x,w.y,w.z,w.w):C.set(w,O,X,Y),me.viewport(T.copy(C).multiplyScalar(J).floor())},this.getScissor=function(w){return w.copy(b)},this.setScissor=function(w,O,X,Y){w.isVector4?b.set(w.x,w.y,w.z,w.w):b.set(w,O,X,Y),me.scissor(q.copy(b).multiplyScalar(J).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(w){me.setScissorTest(B=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){G=w},this.getClearColor=function(w){return w.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(w=!0,O=!0,X=!0){let Y=0;if(w){let j=!1;if(P!==null){const ve=P.texture.format;j=ve===m0||ve===p0||ve===h0}if(j){const ve=P.texture.type,we=ve===Vi||ve===Li||ve===Hd||ve===hr||ve===d0||ve===f0,Re=Ye.getClearColor(),Ne=Ye.getClearAlpha(),ze=Re.r,Ue=Re.g,Ie=Re.b;we?(m[0]=ze,m[1]=Ue,m[2]=Ie,m[3]=Ne,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=ze,_[1]=Ue,_[2]=Ie,_[3]=Ne,F.clearBufferiv(F.COLOR,0,_))}else Y|=F.COLOR_BUFFER_BIT}O&&(Y|=F.DEPTH_BUFFER_BIT),X&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),_e.dispose(),Ae.dispose(),be.dispose(),S.dispose(),W.dispose(),se.dispose(),Fe.dispose(),Ze.dispose(),Ee.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",jt),Be.removeEventListener("sessionend",it),ee&&(ee.dispose(),ee=null),Xt.stop()};function le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=We.autoReset,O=te.enabled,X=te.autoUpdate,Y=te.needsUpdate,j=te.type;pt(),We.autoReset=w,te.enabled=O,te.autoUpdate=X,te.needsUpdate=Y,te.type=j}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function he(w){const O=w.target;O.removeEventListener("dispose",he),Pe(O)}function Pe(w){Ce(w),be.remove(w)}function Ce(w){const O=be.get(w).programs;O!==void 0&&(O.forEach(function(X){Ee.releaseProgram(X)}),w.isShaderMaterial&&Ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,X,Y,j,ve){O===null&&(O=pe);const we=j.isMesh&&j.matrixWorld.determinant()<0,Re=V0(w,O,X,Y,j);me.setMaterial(Y,we);let Ne=X.index,ze=1;if(Y.wireframe===!0){if(Ne=ne.getWireframeAttribute(X),Ne===void 0)return;ze=2}const Ue=X.drawRange,Ie=X.attributes.position;let vt=Ue.start*ze,un=(Ue.start+Ue.count)*ze;ve!==null&&(vt=Math.max(vt,ve.start*ze),un=Math.min(un,(ve.start+ve.count)*ze)),Ne!==null?(vt=Math.max(vt,0),un=Math.min(un,Ne.count)):Ie!=null&&(vt=Math.max(vt,0),un=Math.min(un,Ie.count));const Ct=un-vt;if(Ct<0||Ct===1/0)return;Fe.setup(j,Y,Re,X,Ne);let Jn,ut=Le;if(Ne!==null&&(Jn=re.get(Ne),ut=Te,ut.setIndex(Jn)),j.isMesh)Y.wireframe===!0?(me.setLineWidth(Y.wireframeLinewidth*Se()),ut.setMode(F.LINES)):ut.setMode(F.TRIANGLES);else if(j.isLine){let He=Y.linewidth;He===void 0&&(He=1),me.setLineWidth(He*Se()),j.isLineSegments?ut.setMode(F.LINES):j.isLineLoop?ut.setMode(F.LINE_LOOP):ut.setMode(F.LINE_STRIP)}else j.isPoints?ut.setMode(F.POINTS):j.isSprite&&ut.setMode(F.TRIANGLES);if(j.isBatchedMesh)ut.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)ut.renderInstances(vt,Ct,j.count);else if(X.isInstancedBufferGeometry){const He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ul=Math.min(X.instanceCount,He);ut.renderInstances(vt,Ct,Ul)}else ut.render(vt,Ct)};function tt(w,O,X){w.transparent===!0&&w.side===li&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,La(w,O,X),w.side=Xi,w.needsUpdate=!0,La(w,O,X),w.side=li):La(w,O,X)}this.compile=function(w,O,X=null){X===null&&(X=w),p=Ae.get(X),p.init(),g.push(p),X.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),w!==X&&w.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(v._useLegacyLights);const Y=new Set;return w.traverse(function(j){const ve=j.material;if(ve)if(Array.isArray(ve))for(let we=0;we<ve.length;we++){const Re=ve[we];tt(Re,X,j),Y.add(Re)}else tt(ve,X,j),Y.add(ve)}),g.pop(),p=null,Y},this.compileAsync=function(w,O,X=null){const Y=this.compile(w,O,X);return new Promise(j=>{function ve(){if(Y.forEach(function(we){be.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){j(w);return}setTimeout(ve,10)}oe.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let nt=null;function At(w){nt&&nt(w)}function jt(){Xt.stop()}function it(){Xt.start()}const Xt=new N0;Xt.setAnimationLoop(At),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(w){nt=w,Be.setAnimationLoop(w),w===null?Xt.stop():Xt.start()},Be.addEventListener("sessionstart",jt),Be.addEventListener("sessionend",it),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(O),O=Be.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,P),p=Ae.get(w,g.length),p.init(),g.push(p),Q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),U.setFromProjectionMatrix(Q),Z=this.localClippingEnabled,V=De.init(this.clippingPlanes,Z),y=_e.get(w,u.length),y.init(),u.push(y),jn(w,O,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(I,G),this.info.render.frame++,V===!0&&De.beginShadows();const X=p.state.shadowsArray;if(te.render(X,w,O),V===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(y,w),p.setupLights(v._useLegacyLights),O.isArrayCamera){const Y=O.cameras;for(let j=0,ve=Y.length;j<ve;j++){const we=Y[j];Zd(y,w,we,we.viewport)}}else Zd(y,w,O);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,O),Fe.resetDefaultState(),z=-1,E=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function jn(w,O,X,Y){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||U.intersectsSprite(w)){Y&&ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);const we=se.update(w),Re=w.material;Re.visible&&y.push(w,we,Re,X,ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||U.intersectsObject(w))){const we=se.update(w),Re=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ge.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ge.copy(we.boundingSphere.center)),ge.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(Re)){const Ne=we.groups;for(let ze=0,Ue=Ne.length;ze<Ue;ze++){const Ie=Ne[ze],vt=Re[Ie.materialIndex];vt&&vt.visible&&y.push(w,we,vt,X,ge.z,Ie)}}else Re.visible&&y.push(w,we,Re,X,ge.z,null)}}const ve=w.children;for(let we=0,Re=ve.length;we<Re;we++)jn(ve[we],O,X,Y)}function Zd(w,O,X,Y){const j=w.opaque,ve=w.transmissive,we=w.transparent;p.setupLightsView(X),V===!0&&De.setGlobalState(v.clippingPlanes,X),ve.length>0&&G0(j,ve,O,X),Y&&me.viewport(T.copy(Y)),j.length>0&&Pa(j,O,X),ve.length>0&&Pa(ve,O,X),we.length>0&&Pa(we,O,X),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function G0(w,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ve=Me.isWebGL2;ee===null&&(ee=new Sr(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?ya:Vi,minFilter:_a,samples:ve?4:0})),v.getDrawingBufferSize(ue),ve?ee.setSize(ue.x,ue.y):ee.setSize(Vu(ue.x),Vu(ue.y));const we=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(ae),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Re=v.toneMapping;v.toneMapping=Gi,Pa(w,X,Y),A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee);let Ne=!1;for(let ze=0,Ue=O.length;ze<Ue;ze++){const Ie=O[ze],vt=Ie.object,un=Ie.geometry,Ct=Ie.material,Jn=Ie.group;if(Ct.side===li&&vt.layers.test(Y.layers)){const ut=Ct.side;Ct.side=ln,Ct.needsUpdate=!0,Qd(vt,X,Y,un,Ct,Jn),Ct.side=ut,Ct.needsUpdate=!0,Ne=!0}}Ne===!0&&(A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee)),v.setRenderTarget(we),v.setClearColor(ae,D),v.toneMapping=Re}function Pa(w,O,X){const Y=O.isScene===!0?O.overrideMaterial:null;for(let j=0,ve=w.length;j<ve;j++){const we=w[j],Re=we.object,Ne=we.geometry,ze=Y===null?we.material:Y,Ue=we.group;Re.layers.test(X.layers)&&Qd(Re,O,X,Ne,ze,Ue)}}function Qd(w,O,X,Y,j,ve){w.onBeforeRender(v,O,X,Y,j,ve),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(v,O,X,Y,w,ve),j.transparent===!0&&j.side===li&&j.forceSinglePass===!1?(j.side=ln,j.needsUpdate=!0,v.renderBufferDirect(X,O,Y,j,w,ve),j.side=Xi,j.needsUpdate=!0,v.renderBufferDirect(X,O,Y,j,w,ve),j.side=li):v.renderBufferDirect(X,O,Y,j,w,ve),w.onAfterRender(v,O,X,Y,j,ve)}function La(w,O,X){O.isScene!==!0&&(O=pe);const Y=be.get(w),j=p.state.lights,ve=p.state.shadowsArray,we=j.state.version,Re=Ee.getParameters(w,j.state,ve,O,X),Ne=Ee.getProgramCacheKey(Re);let ze=Y.programs;Y.environment=w.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(w.isMeshStandardMaterial?W:S).get(w.envMap||Y.environment),ze===void 0&&(w.addEventListener("dispose",he),ze=new Map,Y.programs=ze);let Ue=ze.get(Ne);if(Ue!==void 0){if(Y.currentProgram===Ue&&Y.lightsStateVersion===we)return ef(w,Re),Ue}else Re.uniforms=Ee.getUniforms(w),w.onBuild(X,Re,v),w.onBeforeCompile(Re,v),Ue=Ee.acquireProgram(Re,Ne),ze.set(Ne,Ue),Y.uniforms=Re.uniforms;const Ie=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=De.uniform),ef(w,Re),Y.needsLights=j0(w),Y.lightsStateVersion=we,Y.needsLights&&(Ie.ambientLightColor.value=j.state.ambient,Ie.lightProbe.value=j.state.probe,Ie.directionalLights.value=j.state.directional,Ie.directionalLightShadows.value=j.state.directionalShadow,Ie.spotLights.value=j.state.spot,Ie.spotLightShadows.value=j.state.spotShadow,Ie.rectAreaLights.value=j.state.rectArea,Ie.ltc_1.value=j.state.rectAreaLTC1,Ie.ltc_2.value=j.state.rectAreaLTC2,Ie.pointLights.value=j.state.point,Ie.pointLightShadows.value=j.state.pointShadow,Ie.hemisphereLights.value=j.state.hemi,Ie.directionalShadowMap.value=j.state.directionalShadowMap,Ie.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ie.spotShadowMap.value=j.state.spotShadowMap,Ie.spotLightMatrix.value=j.state.spotLightMatrix,Ie.spotLightMap.value=j.state.spotLightMap,Ie.pointShadowMap.value=j.state.pointShadowMap,Ie.pointShadowMatrix.value=j.state.pointShadowMatrix),Y.currentProgram=Ue,Y.uniformsList=null,Ue}function Jd(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Uo.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function ef(w,O){const X=be.get(w);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function V0(w,O,X,Y,j){O.isScene!==!0&&(O=pe),A.resetTextureUnits();const ve=O.fog,we=Y.isMeshStandardMaterial?O.environment:null,Re=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:vi,Ne=(Y.isMeshStandardMaterial?W:S).get(Y.envMap||we),ze=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ue=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ie=!!X.morphAttributes.position,vt=!!X.morphAttributes.normal,un=!!X.morphAttributes.color;let Ct=Gi;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ct=v.toneMapping);const Jn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ut=Jn!==void 0?Jn.length:0,He=be.get(Y),Ul=p.state.lights;if(V===!0&&(Z===!0||w!==E)){const yn=w===E&&Y.id===z;De.setState(Y,w,yn)}let mt=!1;Y.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ul.state.version||He.outputColorSpace!==Re||j.isBatchedMesh&&He.batching===!1||!j.isBatchedMesh&&He.batching===!0||j.isInstancedMesh&&He.instancing===!1||!j.isInstancedMesh&&He.instancing===!0||j.isSkinnedMesh&&He.skinning===!1||!j.isSkinnedMesh&&He.skinning===!0||j.isInstancedMesh&&He.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&He.instancingColor===!1&&j.instanceColor!==null||He.envMap!==Ne||Y.fog===!0&&He.fog!==ve||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==De.numPlanes||He.numIntersection!==De.numIntersection)||He.vertexAlphas!==ze||He.vertexTangents!==Ue||He.morphTargets!==Ie||He.morphNormals!==vt||He.morphColors!==un||He.toneMapping!==Ct||Me.isWebGL2===!0&&He.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,He.__version=Y.version);let Ki=He.currentProgram;mt===!0&&(Ki=La(Y,O,j));let tf=!1,As=!1,Il=!1;const kt=Ki.getUniforms(),Zi=He.uniforms;if(me.useProgram(Ki.program)&&(tf=!0,As=!0,Il=!0),Y.id!==z&&(z=Y.id,As=!0),tf||E!==w){kt.setValue(F,"projectionMatrix",w.projectionMatrix),kt.setValue(F,"viewMatrix",w.matrixWorldInverse);const yn=kt.map.cameraPosition;yn!==void 0&&yn.setValue(F,ge.setFromMatrixPosition(w.matrixWorld)),Me.logarithmicDepthBuffer&&kt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&kt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,As=!0,Il=!0)}if(j.isSkinnedMesh){kt.setOptional(F,j,"bindMatrix"),kt.setOptional(F,j,"bindMatrixInverse");const yn=j.skeleton;yn&&(Me.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),kt.setValue(F,"boneTexture",yn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(kt.setOptional(F,j,"batchingTexture"),kt.setValue(F,"batchingTexture",j._matricesTexture,A));const Fl=X.morphAttributes;if((Fl.position!==void 0||Fl.normal!==void 0||Fl.color!==void 0&&Me.isWebGL2===!0)&&ke.update(j,X,Ki),(As||He.receiveShadow!==j.receiveShadow)&&(He.receiveShadow=j.receiveShadow,kt.setValue(F,"receiveShadow",j.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Zi.envMap.value=Ne,Zi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),As&&(kt.setValue(F,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&W0(Zi,Il),ve&&Y.fog===!0&&de.refreshFogUniforms(Zi,ve),de.refreshMaterialUniforms(Zi,Y,J,$,ee),Uo.upload(F,Jd(He),Zi,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Uo.upload(F,Jd(He),Zi,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&kt.setValue(F,"center",j.center),kt.setValue(F,"modelViewMatrix",j.modelViewMatrix),kt.setValue(F,"normalMatrix",j.normalMatrix),kt.setValue(F,"modelMatrix",j.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const yn=Y.uniformsGroups;for(let Ol=0,X0=yn.length;Ol<X0;Ol++)if(Me.isWebGL2){const nf=yn[Ol];Ze.update(nf,Ki),Ze.bind(nf,Ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ki}function W0(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function j0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,O,X){be.get(w.texture).__webglTexture=O,be.get(w.depthTexture).__webglTexture=X;const Y=be.get(w);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const X=be.get(w);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,X=0){P=w,L=O,R=X;let Y=!0,j=null,ve=!1,we=!1;if(w){const Ne=be.get(w);Ne.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1):Ne.__webglFramebuffer===void 0?A.setupRenderTarget(w):Ne.__hasExternalTextures&&A.rebindTextures(w,be.get(w.texture).__webglTexture,be.get(w.depthTexture).__webglTexture);const ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(we=!0);const Ue=be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?j=Ue[O][X]:j=Ue[O],ve=!0):Me.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?j=be.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?j=Ue[X]:j=Ue,T.copy(w.viewport),q.copy(w.scissor),K=w.scissorTest}else T.copy(C).multiplyScalar(J).floor(),q.copy(b).multiplyScalar(J).floor(),K=B;if(me.bindFramebuffer(F.FRAMEBUFFER,j)&&Me.drawBuffers&&Y&&me.drawBuffers(w,j),me.viewport(T),me.scissor(q),me.setScissorTest(K),ve){const Ne=be.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ne.__webglTexture,X)}else if(we){const Ne=be.get(w.texture),ze=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ne.__webglTexture,X||0,ze)}z=-1},this.readRenderTargetPixels=function(w,O,X,Y,j,ve,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){me.bindFramebuffer(F.FRAMEBUFFER,Re);try{const Ne=w.texture,ze=Ne.format,Ue=Ne.type;if(ze!==zn&&ye.convert(ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Ue===ya&&(oe.has("EXT_color_buffer_half_float")||Me.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Ue!==Vi&&ye.convert(Ue)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Ni&&(Me.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-Y&&X>=0&&X<=w.height-j&&F.readPixels(O,X,Y,j,ye.convert(ze),ye.convert(Ue),ve)}finally{const Ne=P!==null?be.get(P).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(w,O,X=0){const Y=Math.pow(2,-X),j=Math.floor(O.image.width*Y),ve=Math.floor(O.image.height*Y);A.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,w.x,w.y,j,ve),me.unbindTexture()},this.copyTextureToTexture=function(w,O,X,Y=0){const j=O.image.width,ve=O.image.height,we=ye.convert(X.format),Re=ye.convert(X.type);A.setTexture2D(X,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Y,w.x,w.y,j,ve,we,Re,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Y,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,Y,w.x,w.y,we,Re,O.image),Y===0&&X.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(w,O,X,Y,j=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=w.max.x-w.min.x+1,we=w.max.y-w.min.y+1,Re=w.max.z-w.min.z+1,Ne=ye.convert(Y.format),ze=ye.convert(Y.type);let Ue;if(Y.isData3DTexture)A.setTexture3D(Y,0),Ue=F.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)A.setTexture2DArray(Y,0),Ue=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ie=F.getParameter(F.UNPACK_ROW_LENGTH),vt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),un=F.getParameter(F.UNPACK_SKIP_PIXELS),Ct=F.getParameter(F.UNPACK_SKIP_ROWS),Jn=F.getParameter(F.UNPACK_SKIP_IMAGES),ut=X.isCompressedTexture?X.mipmaps[j]:X.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ut.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ut.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,w.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,w.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,w.min.z),X.isDataTexture||X.isData3DTexture?F.texSubImage3D(Ue,j,O.x,O.y,O.z,ve,we,Re,Ne,ze,ut.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ue,j,O.x,O.y,O.z,ve,we,Re,Ne,ut.data)):F.texSubImage3D(Ue,j,O.x,O.y,O.z,ve,we,Re,Ne,ze,ut),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ie),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,vt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,un),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ct),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Jn),j===0&&Y.generateMipmaps&&F.generateMipmap(Ue),me.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),me.unbindTexture()},this.resetState=function(){L=0,R=0,P=null,me.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Gd?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Pl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?mr:v0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mr?Ut:vi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vw extends z0{}Vw.prototype.isWebGL1Renderer=!0;class Ww extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class B0 extends Ts{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ip=new _t,ju=new w0,yo=new Ll,So=new k;class jw extends Ft{constructor(e=new Wn,n=new B0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),yo.radius+=s,e.ray.intersectsSphere(yo)===!1)return;Ip.copy(r).invert(),ju.copy(e.ray).applyMatrix4(Ip);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=h,y=m;_<y;_++){const p=c.getX(_);So.fromBufferAttribute(d,p),Fp(So,p,l,r,e,n,this)}}else{const h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=h,y=m;_<y;_++)So.fromBufferAttribute(d,_),Fp(So,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fp(t,e,n,i,r,s,a){const o=ju.distanceSqToPoint(t);if(o<n){const l=new k;ju.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Xw extends cn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qd extends Wn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],d=new k,h=new k,m=[],_=[],y=[],p=[];for(let u=0;u<=i;u++){const g=[],v=u/i;let M=0;u===0&&a===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let L=0;L<=n;L++){const R=L/n;d.x=-e*Math.cos(r+R*s)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(r+R*s)*Math.sin(a+v*o),_.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),p.push(R+M,1-v),g.push(c++)}f.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const v=f[u][g+1],M=f[u][g],L=f[u+1][g],R=f[u+1][g+1];(u!==0||a>0)&&m.push(v,M,R),(u!==i-1||l<Math.PI)&&m.push(M,L,R)}this.setIndex(m),this.setAttribute("position",new gn(_,3)),this.setAttribute("normal",new gn(y,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yd extends Wn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],f=new k,d=new k,h=new k;for(let m=0;m<=i;m++)for(let _=0;_<=r;_++){const y=_/r*s,p=m/i*Math.PI*2;d.x=(e+n*Math.cos(p))*Math.cos(y),d.y=(e+n*Math.cos(p))*Math.sin(y),d.z=n*Math.sin(p),o.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){const y=(r+1)*m+_-1,p=(r+1)*(m-1)+_-1,u=(r+1)*(m-1)+_,g=(r+1)*m+_;a.push(y,p,g),a.push(p,u,g)}this.setIndex(a),this.setAttribute("position",new gn(o,3)),this.setAttribute("normal",new gn(l,3)),this.setAttribute("uv",new gn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qw extends Ts{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x0,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $d extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Hc=new _t,Op=new k,kp=new k;class H0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wd,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Op.setFromMatrixPosition(e.matrixWorld),n.position.copy(Op),kp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(kp),n.updateMatrixWorld(),Hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Yw extends H0{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=ul*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $w extends $d{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Yw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zp=new _t,Hs=new k,Gc=new k;class Kw extends H0{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hs),Gc.copy(i.position),Gc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Gc),i.updateMatrixWorld(),r.makeTranslation(-Hs.x,-Hs.y,-Hs.z),zp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zp)}}class Zw extends $d{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Kw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qw extends $d{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Bp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Bp(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);const Pt=({id:t,className:e="",size:n="md",animated:i=!0})=>{const r={sm:"w-12 h-12 text-2xl",md:"w-20 h-20 text-4xl",lg:"w-32 h-32 text-6xl",xl:"w-48 h-48 text-8xl"}[n],s=i?"hover:scale-110 transition-all duration-300 transform":"";switch(t){case"po":return x.jsx("div",{className:`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-700 via-amber-600 to-amber-400 p-3 shadow-xl shadow-amber-900/30 border-4 border-amber-400 ${r} ${s} ${e}`,children:x.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full drop-shadow-md",children:[x.jsx("circle",{cx:"50",cy:"50",r:"46",fill:"#f59e0b",opacity:"0.3",className:"animate-pulse"}),x.jsx("circle",{cx:"24",cy:"22",r:"14",fill:"#0f172a"}),x.jsx("circle",{cx:"76",cy:"22",r:"14",fill:"#0f172a"}),x.jsx("ellipse",{cx:"50",cy:"52",rx:"36",ry:"32",fill:"#ffffff"}),x.jsx("ellipse",{cx:"36",cy:"48",rx:"11",ry:"14",fill:"#0f172a",transform:"rotate(-12 36 48)"}),x.jsx("ellipse",{cx:"64",cy:"48",rx:"11",ry:"14",fill:"#0f172a",transform:"rotate(12 64 48)"}),x.jsx("circle",{cx:"37",cy:"47",r:"4",fill:"#10b981"}),x.jsx("circle",{cx:"38",cy:"46",r:"1.5",fill:"#ffffff"}),x.jsx("circle",{cx:"63",cy:"47",r:"4",fill:"#10b981"}),x.jsx("circle",{cx:"62",cy:"46",r:"1.5",fill:"#ffffff"}),x.jsx("ellipse",{cx:"50",cy:"58",rx:"6",ry:"4",fill:"#0f172a"}),x.jsx("path",{d:"M 40 66 Q 50 76 60 66",stroke:"#0f172a",strokeWidth:"3.5",strokeLinecap:"round",fill:"none"}),x.jsx("path",{d:"M 16 34 Q 50 24 84 34",stroke:"#ef4444",strokeWidth:"6",strokeLinecap:"round",fill:"none"}),x.jsx("circle",{cx:"84",cy:"34",r:"3",fill:"#f59e0b"})]})});case"shifu":return x.jsx("div",{className:`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-900 via-amber-700 to-amber-500 p-3 shadow-xl border-4 border-amber-400 ${r} ${s} ${e}`,children:x.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full drop-shadow-md",children:[x.jsx("polygon",{points:"12,38 32,10 38,40",fill:"#c2410c"}),x.jsx("polygon",{points:"18,34 30,16 34,36",fill:"#ffedd5"}),x.jsx("polygon",{points:"88,38 68,10 62,40",fill:"#c2410c"}),x.jsx("polygon",{points:"82,34 70,16 66,36",fill:"#ffedd5"}),x.jsx("ellipse",{cx:"50",cy:"52",rx:"34",ry:"28",fill:"#ea580c"}),x.jsx("ellipse",{cx:"50",cy:"56",rx:"26",ry:"20",fill:"#ffedd5"}),x.jsx("path",{d:"M 24 38 Q 36 30 46 44",stroke:"#ffffff",strokeWidth:"4",strokeLinecap:"round",fill:"none"}),x.jsx("path",{d:"M 76 38 Q 64 30 54 44",stroke:"#ffffff",strokeWidth:"4",strokeLinecap:"round",fill:"none"}),x.jsx("circle",{cx:"36",cy:"48",r:"4",fill:"#047857"}),x.jsx("circle",{cx:"64",cy:"48",r:"4",fill:"#047857"}),x.jsx("ellipse",{cx:"50",cy:"54",rx:"4",ry:"3",fill:"#451a03"}),x.jsx("path",{d:"M 40 64 L 28 76 M 60 64 L 72 76",stroke:"#ffffff",strokeWidth:"3",strokeLinecap:"round"})]})});case"oogway":return x.jsx("div",{className:`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-emerald-900 via-teal-700 to-emerald-500 p-3 shadow-xl border-4 border-emerald-400 ${r} ${s} ${e}`,children:x.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full drop-shadow-md",children:[x.jsx("circle",{cx:"50",cy:"50",r:"42",fill:"#065f46",stroke:"#047857",strokeWidth:"4"}),x.jsx("path",{d:"M 30 30 L 70 30 L 80 50 L 70 70 L 30 70 L 20 50 Z",fill:"#047857",opacity:"0.4"}),x.jsx("ellipse",{cx:"50",cy:"45",rx:"20",ry:"24",fill:"#10b981"}),x.jsx("ellipse",{cx:"42",cy:"42",rx:"3",ry:"4",fill:"#064e3b"}),x.jsx("ellipse",{cx:"58",cy:"42",rx:"3",ry:"4",fill:"#064e3b"}),x.jsx("path",{d:"M 38 36 Q 42 32 46 36",stroke:"#ec4899",strokeWidth:"2",fill:"none"}),x.jsx("path",{d:"M 54 36 Q 58 32 62 36",stroke:"#ec4899",strokeWidth:"2",fill:"none"}),x.jsx("path",{d:"M 42 54 Q 50 60 58 54",stroke:"#064e3b",strokeWidth:"3",strokeLinecap:"round",fill:"none"}),x.jsx("path",{d:"M 30 68 C 40 60 60 60 70 68 L 74 90 L 26 90 Z",fill:"#99f6e4"})]})});case"tigress":return x.jsx("div",{className:`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-rose-800 via-amber-700 to-amber-500 p-3 shadow-xl border-4 border-amber-400 ${r} ${s} ${e}`,children:x.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full drop-shadow-md",children:[x.jsx("polygon",{points:"20,26 36,12 40,32",fill:"#d97706"}),x.jsx("polygon",{points:"80,26 64,12 60,32",fill:"#d97706"}),x.jsx("ellipse",{cx:"50",cy:"52",rx:"34",ry:"30",fill:"#f59e0b"}),x.jsx("ellipse",{cx:"50",cy:"60",rx:"20",ry:"16",fill:"#fef3c7"}),x.jsx("path",{d:"M 50 24 L 50 34 M 40 28 L 44 36 M 60 28 L 56 36",stroke:"#0f172a",strokeWidth:"3.5",strokeLinecap:"round"}),x.jsx("path",{d:"M 22 46 L 30 48 M 78 46 L 70 48",stroke:"#0f172a",strokeWidth:"3",strokeLinecap:"round"}),x.jsx("polygon",{points:"30,42 42,46 32,52",fill:"#0f172a"}),x.jsx("circle",{cx:"36",cy:"46",r:"2.5",fill:"#facc15"}),x.jsx("polygon",{points:"70,42 58,46 68,52",fill:"#0f172a"}),x.jsx("circle",{cx:"64",cy:"46",r:"2.5",fill:"#facc15"}),x.jsx("polygon",{points:"46,58 54,58 50,63",fill:"#be123c"}),x.jsx("path",{d:"M 44 68 Q 50 64 56 68",stroke:"#0f172a",strokeWidth:"3",fill:"none"})]})});case"tailung":return x.jsx("div",{className:`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-800 to-sky-800 p-3 shadow-xl border-4 border-sky-600 ${r} ${s} ${e}`,children:x.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full drop-shadow-md",children:[x.jsx("circle",{cx:"50",cy:"50",r:"44",fill:"#38bdf8",opacity:"0.2",className:"animate-pulse"}),x.jsx("polygon",{points:"18,30 32,14 38,36",fill:"#64748b"}),x.jsx("polygon",{points:"82,30 68,14 62,36",fill:"#64748b"}),x.jsx("ellipse",{cx:"50",cy:"52",rx:"34",ry:"30",fill:"#94a3b8"}),x.jsx("ellipse",{cx:"50",cy:"60",rx:"22",ry:"16",fill:"#f1f5f9"}),x.jsx("circle",{cx:"28",cy:"38",r:"3",fill:"#334155"}),x.jsx("circle",{cx:"72",cy:"38",r:"3",fill:"#334155"}),x.jsx("ellipse",{cx:"36",cy:"46",rx:"6",ry:"5",fill:"#0284c7"}),x.jsx("ellipse",{cx:"36",cy:"46",rx:"2",ry:"4",fill:"#f0f9ff"}),x.jsx("ellipse",{cx:"64",cy:"46",rx:"6",ry:"5",fill:"#0284c7"}),x.jsx("ellipse",{cx:"64",cy:"46",rx:"2",ry:"4",fill:"#f0f9ff"}),x.jsx("path",{d:"M 40 64 Q 50 56 60 64",stroke:"#0f172a",strokeWidth:"3",fill:"none"})]})});case"shen":return x.jsx("div",{className:`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-rose-950 via-rose-900 to-rose-700 p-3 shadow-xl border-4 border-rose-500 ${r} ${s} ${e}`,children:x.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full drop-shadow-md",children:[x.jsx("path",{d:"M 10 60 Q 50 10 90 60 Z",fill:"#fff1f2",stroke:"#be123c",strokeWidth:"3"}),x.jsx("circle",{cx:"24",cy:"36",r:"4",fill:"#be123c"}),x.jsx("circle",{cx:"50",cy:"20",r:"4",fill:"#be123c"}),x.jsx("circle",{cx:"76",cy:"36",r:"4",fill:"#be123c"}),x.jsx("ellipse",{cx:"50",cy:"50",rx:"16",ry:"24",fill:"#ffffff"}),x.jsx("polygon",{points:"50,56 42,68 58,68",fill:"#e11d48"}),x.jsx("circle",{cx:"44",cy:"46",r:"3.5",fill:"#9f1239"}),x.jsx("circle",{cx:"56",cy:"46",r:"3.5",fill:"#9f1239"})]})});case"kai":return x.jsx("div",{className:`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-emerald-950 via-teal-900 to-emerald-700 p-3 shadow-xl border-4 border-emerald-500 ${r} ${s} ${e}`,children:x.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full drop-shadow-md",children:[x.jsx("path",{d:"M 30 40 Q 10 20 6 4",stroke:"#10b981",strokeWidth:"8",strokeLinecap:"round",fill:"none"}),x.jsx("path",{d:"M 70 40 Q 90 20 94 4",stroke:"#10b981",strokeWidth:"8",strokeLinecap:"round",fill:"none"}),x.jsx("ellipse",{cx:"50",cy:"54",rx:"28",ry:"26",fill:"#1f2937"}),x.jsx("ellipse",{cx:"50",cy:"64",rx:"18",ry:"12",fill:"#374151"}),x.jsx("ellipse",{cx:"38",cy:"48",rx:"5",ry:"4",fill:"#34d399"}),x.jsx("ellipse",{cx:"62",cy:"48",rx:"5",ry:"4",fill:"#34d399"}),x.jsx("circle",{cx:"50",cy:"70",r:"7",stroke:"#f59e0b",strokeWidth:"3",fill:"none"})]})});case"chameleon":return x.jsx("div",{className:`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-purple-950 via-purple-800 to-indigo-700 p-3 shadow-xl border-4 border-purple-400 ${r} ${s} ${e}`,children:x.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full drop-shadow-md",children:[x.jsx("circle",{cx:"50",cy:"50",r:"42",fill:"#a855f7",opacity:"0.25",className:"animate-spin-slow"}),x.jsx("path",{d:"M 24 60 C 24 30 76 30 76 60 Z",fill:"#06b6d4"}),x.jsx("circle",{cx:"38",cy:"46",r:"8",fill:"#d946ef"}),x.jsx("circle",{cx:"38",cy:"46",r:"4",fill:"#facc15"}),x.jsx("circle",{cx:"62",cy:"46",r:"8",fill:"#d946ef"}),x.jsx("circle",{cx:"62",cy:"46",r:"4",fill:"#facc15"})]})});case"zhen":return x.jsx("div",{className:`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-800 via-amber-600 to-amber-400 p-3 shadow-xl border-4 border-amber-400 ${r} ${s} ${e}`,children:x.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full drop-shadow-md",children:[x.jsx("polygon",{points:"16,34 32,10 40,36",fill:"#c2410c"}),x.jsx("polygon",{points:"22,30 32,16 36,34",fill:"#ffffff"}),x.jsx("polygon",{points:"84,34 68,10 60,36",fill:"#c2410c"}),x.jsx("polygon",{points:"78,30 68,16 64,34",fill:"#ffffff"}),x.jsx("polygon",{points:"22,44 78,44 50,80",fill:"#ea580c"}),x.jsx("polygon",{points:"34,44 66,44 50,74",fill:"#ffffff"}),x.jsx("ellipse",{cx:"38",cy:"46",rx:"4",ry:"5",fill:"#451a03"}),x.jsx("ellipse",{cx:"62",cy:"46",rx:"4",ry:"5",fill:"#451a03"}),x.jsx("circle",{cx:"50",cy:"74",r:"3.5",fill:"#0f172a"})]})});case"ping":return x.jsx("div",{className:`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-teal-900 via-teal-700 to-emerald-500 p-3 shadow-xl border-4 border-teal-400 ${r} ${s} ${e}`,children:x.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full drop-shadow-md",children:[x.jsx("path",{d:"M 32 30 C 24 16 76 16 68 30 Z",fill:"#ffffff",stroke:"#cbd5e1",strokeWidth:"2"}),x.jsx("rect",{x:"34",y:"28",width:"32",height:"10",fill:"#ffffff"}),x.jsx("ellipse",{cx:"50",cy:"54",rx:"20",ry:"24",fill:"#f8fafc"}),x.jsx("polygon",{points:"50,56 36,66 64,66",fill:"#f97316"}),x.jsx("circle",{cx:"42",cy:"48",r:"3",fill:"#0f172a"}),x.jsx("circle",{cx:"58",cy:"48",r:"3",fill:"#0f172a"})]})});case"lishan":return x.jsx("div",{className:`relative flex items-center justify-center rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-800 to-amber-600 p-3 shadow-xl border-4 border-amber-500 ${r} ${s} ${e}`,children:x.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full drop-shadow-md",children:[x.jsx("circle",{cx:"20",cy:"26",r:"14",fill:"#0f172a"}),x.jsx("circle",{cx:"80",cy:"26",r:"14",fill:"#0f172a"}),x.jsx("ellipse",{cx:"50",cy:"54",rx:"38",ry:"32",fill:"#ffffff"}),x.jsx("ellipse",{cx:"34",cy:"50",rx:"12",ry:"14",fill:"#0f172a",transform:"rotate(-15 34 50)"}),x.jsx("ellipse",{cx:"66",cy:"50",rx:"12",ry:"14",fill:"#0f172a",transform:"rotate(15 66 50)"}),x.jsx("circle",{cx:"35",cy:"49",r:"4",fill:"#f59e0b"}),x.jsx("circle",{cx:"65",cy:"49",r:"4",fill:"#f59e0b"}),x.jsx("path",{d:"M 38 66 Q 50 78 62 66",stroke:"#0f172a",strokeWidth:"4",strokeLinecap:"round",fill:"none"})]})});default:return x.jsx("div",{className:`relative flex items-center justify-center rounded-3xl bg-slate-900 border-2 border-amber-500/40 ${r} ${e}`,children:x.jsx("span",{children:"🥋"})})}},eT=({lang:t})=>{const e=Xe.useRef(null);return Xe.useEffect(()=>{const n=e.current;if(!n)return;const i=new Ww,r=new nn(45,n.clientWidth/n.clientHeight,.1,1e3);r.position.set(0,0,10);const s=new z0({alpha:!0,antialias:!0});s.setSize(n.clientWidth,n.clientHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(s.domElement);const a=new Qw(16774634,1.4);i.add(a);const o=new $w(16436245,8);o.position.set(5,8,8),o.angle=Math.PI/4,i.add(o);const l=new Zw(1096065,6,20);l.position.set(-5,-2,5),i.add(l);const c=new qd(1.6,32,32),f=new qw({color:16436245,roughness:.2,metalness:.8,emissive:14251782,emissiveIntensity:.6}),d=new Kn(c,f);i.add(d);const h=new Yd(2.6,.04,16,100),m=new Vd({color:16436245,transparent:!0,opacity:.7}),_=new Kn(h,m);i.add(_);const y=220,p=new Wn,u=new Float32Array(y*3);for(let D=0;D<y*3;D+=3)u[D]=(Math.random()-.5)*20,u[D+1]=Math.random()*15-5,u[D+2]=(Math.random()-.5)*15;p.setAttribute("position",new Gn(u,3));const g=document.createElement("canvas");g.width=32,g.height=32;const v=g.getContext("2d");v&&(v.fillStyle="#f472b6",v.beginPath(),v.arc(16,16,12,0,Math.PI*2),v.fill());const M=new Xw(g),L=new B0({size:.35,map:M,transparent:!0,opacity:.85,depthWrite:!1}),R=new jw(p,L);i.add(R);let P=0,z=0;const E=D=>{const H=n.getBoundingClientRect();P=(D.clientX-H.left)/n.clientWidth*2-1,z=-((D.clientY-H.top)/n.clientHeight)*2+1};window.addEventListener("mousemove",E);let T,q=new Jw;const K=()=>{T=requestAnimationFrame(K);const D=q.getElapsedTime();d.position.y=Math.sin(D*1.5)*.2,d.rotation.y=D*.5+P*.3,d.rotation.x=Math.sin(D*.8)*.1-z*.2,_.rotation.z=D*.8;const H=R.geometry.attributes.position.array;for(let $=1;$<y*3;$+=3)H[$]-=.03,H[$-1]+=Math.sin(D+$)*.01,H[$]<-8&&(H[$]=10);R.geometry.attributes.position.needsUpdate=!0,s.render(i,r)};K();const ae=()=>{n&&(r.aspect=n.clientWidth/n.clientHeight,r.updateProjectionMatrix(),s.setSize(n.clientWidth,n.clientHeight))};return window.addEventListener("resize",ae),()=>{window.removeEventListener("mousemove",E),window.removeEventListener("resize",ae),cancelAnimationFrame(T),n.contains(s.domElement)&&n.removeChild(s.domElement)}},[]),x.jsxs("section",{className:"relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-12 px-4",children:[x.jsxs("div",{className:"relative z-10 flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-6",children:[x.jsx(Pt,{id:"po",size:"md"}),x.jsx(Pt,{id:"shifu",size:"md"}),x.jsx(Pt,{id:"oogway",size:"md"}),x.jsx(Pt,{id:"tigress",size:"md"}),x.jsx(Pt,{id:"tailung",size:"md"}),x.jsx(Pt,{id:"shen",size:"md"}),x.jsx(Pt,{id:"kai",size:"md"}),x.jsx(Pt,{id:"chameleon",size:"md"}),x.jsx(Pt,{id:"zhen",size:"md"})]}),x.jsxs("div",{className:"relative z-10 inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel text-gold-400 border-2 border-gold-500/40 text-xs md:text-sm font-bold tracking-wider uppercase mb-6 shadow-xl shadow-gold-500/20 animate-pulse",children:[x.jsx(Cl,{className:"w-4 h-4 text-gold-400"}),t==="bn"?"কুংফু পান্ডা অ্যানিমেটেড কার্টুন লিজেন্ড":"The Sacred Cartoon Legend of Po & Masters"]}),x.jsxs("h1",{className:"relative z-10 font-cinzel text-5xl md:text-7xl lg:text-8xl font-black text-center tracking-tight leading-none mb-6",children:[x.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-gold-400 to-amber-500 text-glow-gold",children:"KUNG FU PANDA"}),x.jsx("br",{}),x.jsx("span",{className:"text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300",children:t==="bn"?"পো-র লিজেন্ডারি কার্টুন গল্পগ্রন্থ":"The Legendary Animated Journey"})]}),x.jsx("p",{className:"relative z-10 max-w-2xl text-center text-slate-300 text-lg md:text-xl font-medium mb-8 leading-relaxed",children:t==="bn"?"নুডল স্যুপের বাটি থেকে শুরু করে প্রাচীন চি শক্তি অর্জন পর্যন্ত কুংফু পান্ডা সিরিজের সম্পূর্ণ কাহিনীর কার্টুন ইলাস্ট্রেশনযুক্ত গল্পগ্রন্থ।":"From noodle bowl dreams to mastering the ancient energy of Chi. Explore the animated cartoon storybook of the valley’s greatest warrior."}),x.jsx("div",{className:"relative z-10 w-full max-w-4xl h-[340px] md:h-[400px] cursor-pointer group flex items-center justify-center",children:x.jsx("div",{ref:e,className:"w-full h-full"})}),x.jsx("div",{className:"relative z-10 flex justify-center items-center mt-6",children:x.jsxs("a",{href:"#story-chapters",onClick:()=>Qe.playGong(),className:"flex items-center gap-3 px-10 py-4.5 rounded-2xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-slate-950 font-black text-xl hover:brightness-110 transition-all shadow-2xl shadow-gold-500/30 active:scale-95 border-2 border-gold-300",children:[x.jsx(t0,{className:"w-6 h-6 text-red-600 animate-bounce"}),t==="bn"?"গল্প পড়া শুরু করুন":"Begin Story Journey"]})})]})},tT=({chapters:t,lang:e})=>{const[n,i]=Xe.useState(null),[r,s]=Xe.useState(!1),[a,o]=Xe.useState("all"),l=t.filter(d=>a==="all"?!0:d.movie.toLowerCase()===a.toLowerCase()),c=d=>{if("speechSynthesis"in window){if(r){window.speechSynthesis.cancel(),s(!1);return}const h=new SpeechSynthesisUtterance(d);h.rate=.95,h.pitch=1,h.lang=e==="bn"?"bn-BD":"en-US",h.onend=()=>s(!1),h.onerror=()=>s(!1),s(!0),window.speechSynthesis.speak(h)}},f=d=>{switch(d){case 1:return"po";case 2:return"shifu";case 3:return"shen";case 4:return"kai";case 5:return"zhen";default:return"po"}};return x.jsxs("section",{id:"story-chapters",className:"relative py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16",children:[x.jsxs("div",{className:"text-center space-y-4",children:[x.jsxs("span",{className:"px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-500/20 to-amber-500/20 border-2 border-gold-500/40 text-gold-400 font-cinzel text-xs md:text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-gold-500/10",children:[x.jsx(hh,{className:"w-4 h-4 text-gold-400"}),e==="bn"?"কার্টুন মহাকাব্যিক গল্পকাহিনী":"Illustrated Sacred Chronicles"]}),x.jsx("h2",{className:"font-cinzel text-4xl md:text-6xl font-extrabold text-slate-100 drop-shadow-lg",children:e==="bn"?"কুংফু পান্ডা সিরিজের কাহিনীর অধ্যায়সমূহ":"Kung Fu Panda Movie Chapters"}),x.jsx("p",{className:"text-slate-300 max-w-2xl mx-auto text-base md:text-lg",children:e==="bn"?"নুডলস বয় পো-র সাধারণ জীবন থেকে শুরু করে ড্রাগন ওয়ারিয়র, পরম মনঃশান্তি ও স্পিরিচুয়াল লিডার হওয়ার রোমাঞ্চকর কার্টুন কাহিনী।":"Follow Po’s grand journey from noodle shop dreamer to Dragon Warrior, Chi Master, and Spiritual Leader."}),x.jsx("div",{className:"flex flex-wrap justify-center items-center gap-3 pt-4",children:[{id:"all",label:e==="bn"?"সব অধ্যায়":"All Chapters"},{id:"kung fu panda 1",label:"Kung Fu Panda 1"},{id:"kung fu panda 2",label:"Kung Fu Panda 2"},{id:"kung fu panda 3",label:"Kung Fu Panda 3"},{id:"kung fu panda 4",label:"Kung Fu Panda 4"}].map(d=>x.jsx("button",{onClick:()=>{Qe.playChopstickClick(),o(d.id)},className:`px-5 py-2.5 rounded-2xl font-cinzel text-xs md:text-sm font-bold tracking-wider uppercase transition-all border-2 ${a===d.id?"bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 border-gold-400 shadow-xl shadow-gold-500/25 scale-105":"glass-panel text-slate-300 border-slate-700/80 hover:text-gold-400 hover:border-gold-500/40"}`,children:d.label},d.id))})]}),x.jsx("div",{className:"space-y-24",children:l.map((d,h)=>{const m=h%2===0;return x.jsxs("div",{id:`chapter-${d.id}`,className:"relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group",children:[x.jsx("div",{className:`absolute -inset-4 rounded-3xl opacity-20 blur-3xl transition-opacity group-hover:opacity-30 pointer-events-none ${d.visualTheme==="gold"?"bg-gold-500":d.visualTheme==="jade"?"bg-emerald-500":d.visualTheme==="red"?"bg-rose-500":d.visualTheme==="purple"?"bg-purple-500":"bg-teal-500"}`}),x.jsxs("div",{className:`lg:col-span-7 space-y-6 ${m?"lg:order-1":"lg:order-2"}`,children:[x.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[x.jsx("span",{className:"px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-400 font-cinzel text-xs font-bold uppercase tracking-wider",children:e==="bn"?`অধ্যায় 0${d.id}`:`Chapter 0${d.id}`}),x.jsxs("span",{className:"px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5",children:[x.jsx(R_,{className:"w-3.5 h-3.5 text-gold-400"}),d.movie]}),x.jsx("span",{className:"text-slate-400 text-xs font-medium tracking-widest uppercase",children:d.location[e]})]}),x.jsx("h3",{className:"font-cinzel text-3xl md:text-5xl font-black text-slate-100 leading-tight",children:d.title[e]}),x.jsxs("p",{className:"text-gold-400 font-medium text-lg md:text-xl italic",children:['"',d.subtitle[e],'"']}),x.jsx("div",{className:"space-y-4 text-slate-300 text-base md:text-lg leading-relaxed",children:d.storyText[e].map((_,y)=>x.jsx("p",{children:_},y))}),x.jsxs("div",{onClick:()=>Qe.playFluteNote(523.25),className:"cursor-pointer p-6 rounded-2xl glass-panel border-l-4 border-l-gold-500 space-y-2 hover:border-gold-400 transition-all group/quote",children:[x.jsxs("div",{className:"flex items-center gap-2 text-gold-400",children:[x.jsx(n0,{className:"w-5 h-5"}),x.jsx("span",{className:"font-cinzel font-bold text-sm tracking-wider uppercase",children:e==="bn"?"গুরুবাণী ও জ্ঞানবাক্য":"Master Wisdom"})]}),x.jsxs("p",{className:"text-slate-100 font-serif italic text-lg md:text-xl leading-relaxed",children:['"',d.quote.text[e],'"']}),x.jsxs("p",{className:"text-right text-gold-400/80 font-bold text-sm",children:["— ",d.quote.author[e]]})]}),x.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-3",children:[x.jsxs("button",{onClick:()=>{Qe.playChopstickClick(),c(d.storyText[e].join(" "))},className:`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all border-2 ${r?"bg-rose-500/20 border-rose-500/50 text-rose-400 animate-pulse":"bg-slate-900 border-slate-700 text-slate-200 hover:border-gold-500/50 hover:text-gold-400"}`,children:[r?x.jsx(s0,{className:"w-4 h-4"}):x.jsx(r0,{className:"w-4 h-4 text-gold-400"}),r?e==="bn"?"পড়া বন্ধ করুন":"Stop Voice Narration":e==="bn"?"ভয়েসে গল্প শুনুন":"Listen to Story"]}),x.jsxs("button",{onClick:()=>{Qe.playGong(),i(d)},className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 hover:brightness-110 shadow-lg shadow-gold-500/20 transition-all",children:[x.jsx(hh,{className:"w-4 h-4"}),e==="bn"?"ফুলস্ক্রিন বই আকারে পড়ুন":"Read Storybook Mode"]}),x.jsxs("span",{className:"px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5",children:[x.jsx(Cl,{className:"w-4 h-4 text-gold-400"}),d.keyMoment[e]]})]})]}),x.jsx("div",{className:`lg:col-span-5 ${m?"lg:order-2":"lg:order-1"}`,children:x.jsxs("div",{className:"relative rounded-3xl p-6 glass-panel border-2 border-gold-500/40 shadow-2xl flex flex-col items-center justify-center text-center space-y-6 hover:scale-[1.02] transition-transform duration-500",children:[x.jsx(Pt,{id:f(d.id),size:"xl"}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("span",{className:"px-3.5 py-1 rounded-full bg-gold-500 text-slate-950 font-black text-xs uppercase tracking-wider inline-block shadow-md",children:d.badge[e]}),x.jsx("h4",{className:"font-cinzel text-2xl font-extrabold text-slate-100",children:d.title[e]})]})]})})]},d.id)})}),n&&x.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg animate-fade-in",children:x.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] glass-panel border-2 border-gold-500/50 rounded-3xl p-6 md:p-10 overflow-y-auto space-y-8 shadow-2xl",children:[x.jsx("button",{onClick:()=>{Qe.playChopstickClick(),i(null),r&&window.speechSynthesis.cancel()},className:"absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-gold-400 transition-colors",children:x.jsx(a0,{className:"w-6 h-6"})}),x.jsxs("div",{className:"flex flex-col items-center text-center space-y-3",children:[x.jsx(Pt,{id:f(n.id),size:"lg"}),x.jsx("span",{className:"px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest",children:n.movie}),x.jsx("h2",{className:"font-cinzel text-3xl md:text-5xl font-extrabold text-slate-100",children:n.title[e]}),x.jsxs("p",{className:"text-gold-400 italic text-lg",children:['"',n.subtitle[e],'"']})]}),x.jsx("div",{className:"p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6 text-slate-200 text-lg md:text-xl leading-relaxed",children:n.storyText[e].map((d,h)=>x.jsx("p",{className:"first-letter:text-4xl first-letter:font-bold first-letter:text-gold-400",children:d},h))}),x.jsxs("div",{className:"p-6 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-center space-y-2",children:[x.jsxs("p",{className:"font-serif italic text-xl text-gold-300",children:['"',n.quote.text[e],'"']}),x.jsxs("p",{className:"font-bold text-sm text-gold-400",children:["— ",n.quote.author[e]]})]})]})})]})};var Kd={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var C=new OffscreenCanvas(1,1),b=C.getContext("2d");b.fillRect(0,0,1,1);var B=C.transferToImageBitmap();b.createPattern(B,"no-repeat")}catch{return!1}return!0}();function l(){}function c(C){var b=n.exports.Promise,B=b!==void 0?b:e.Promise;return typeof B=="function"?new B(C):(C(l,l),null)}var f=function(C,b){return{transform:function(B){if(C)return B;if(b.has(B))return b.get(B);var U=new OffscreenCanvas(B.width,B.height),V=U.getContext("2d");return V.drawImage(B,0,0),b.set(B,U),U},clear:function(){b.clear()}}}(o,new Map),d=function(){var C=Math.floor(16.666666666666668),b,B,U={},V=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(b=function(Z){var ee=Math.random();return U[ee]=requestAnimationFrame(function Q(ue){V===ue||V+C-1<ue?(V=ue,delete U[ee],Z()):U[ee]=requestAnimationFrame(Q)}),ee},B=function(Z){U[Z]&&cancelAnimationFrame(U[Z])}):(b=function(Z){return setTimeout(Z,C)},B=function(Z){return clearTimeout(Z)}),{frame:b,cancel:B}}(),h=function(){var C,b,B={};function U(V){function Z(ee,Q){V.postMessage({options:ee||{},callback:Q})}V.init=function(Q){var ue=Q.transferControlToOffscreen();V.postMessage({canvas:ue},[ue])},V.fire=function(Q,ue,ge){if(b)return Z(Q,null),b;var pe=Math.random().toString(36).slice(2);return b=c(function(Se){function F(je){je.data.callback===pe&&(delete B[pe],V.removeEventListener("message",F),b=null,f.clear(),ge(),Se())}V.addEventListener("message",F),Z(Q,pe),B[pe]=F.bind(null,{data:{callback:pe}})}),b},V.reset=function(){V.postMessage({reset:!0});for(var Q in B)B[Q](),delete B[Q]}}return function(){if(C)return C;if(!i&&s){var V=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{C=new Worker(URL.createObjectURL(new Blob([V])))}catch(Z){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Z),null}U(C)}return C}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(C,b){return b?b(C):C}function y(C){return C!=null}function p(C,b,B){return _(C&&y(C[b])?C[b]:m[b],B)}function u(C){return C<0?0:Math.floor(C)}function g(C,b){return Math.floor(Math.random()*(b-C))+C}function v(C){return parseInt(C,16)}function M(C){return C.map(L)}function L(C){var b=String(C).replace(/[^0-9a-f]/gi,"");return b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),{r:v(b.substring(0,2)),g:v(b.substring(2,4)),b:v(b.substring(4,6))}}function R(C){var b=p(C,"origin",Object);return b.x=p(b,"x",Number),b.y=p(b,"y",Number),b}function P(C){C.width=document.documentElement.clientWidth,C.height=document.documentElement.clientHeight}function z(C){var b=C.getBoundingClientRect();C.width=b.width,C.height=b.height}function E(C){var b=document.createElement("canvas");return b.style.position="fixed",b.style.top="0px",b.style.left="0px",b.style.pointerEvents="none",b.style.zIndex=C,b}function T(C,b,B,U,V,Z,ee,Q,ue){C.save(),C.translate(b,B),C.rotate(Z),C.scale(U,V),C.arc(0,0,1,ee,Q,ue),C.restore()}function q(C){var b=C.angle*(Math.PI/180),B=C.spread*(Math.PI/180);return{x:C.x,y:C.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:C.startVelocity*.5+Math.random()*C.startVelocity,angle2D:-b+(.5*B-Math.random()*B),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:C.color,shape:C.shape,tick:0,totalTicks:C.ticks,decay:C.decay,drift:C.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:C.gravity*3,ovalScalar:.6,scalar:C.scalar,flat:C.flat}}function K(C,b){b.x+=Math.cos(b.angle2D)*b.velocity+b.drift,b.y+=Math.sin(b.angle2D)*b.velocity+b.gravity,b.velocity*=b.decay,b.flat?(b.wobble=0,b.wobbleX=b.x+10*b.scalar,b.wobbleY=b.y+10*b.scalar,b.tiltSin=0,b.tiltCos=0,b.random=1):(b.wobble+=b.wobbleSpeed,b.wobbleX=b.x+10*b.scalar*Math.cos(b.wobble),b.wobbleY=b.y+10*b.scalar*Math.sin(b.wobble),b.tiltAngle+=.1,b.tiltSin=Math.sin(b.tiltAngle),b.tiltCos=Math.cos(b.tiltAngle),b.random=Math.random()+2);var B=b.tick++/b.totalTicks,U=b.x+b.random*b.tiltCos,V=b.y+b.random*b.tiltSin,Z=b.wobbleX+b.random*b.tiltCos,ee=b.wobbleY+b.random*b.tiltSin;if(C.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+(1-B)+")",C.beginPath(),a&&b.shape.type==="path"&&typeof b.shape.path=="string"&&Array.isArray(b.shape.matrix))C.fill(J(b.shape.path,b.shape.matrix,b.x,b.y,Math.abs(Z-U)*.1,Math.abs(ee-V)*.1,Math.PI/10*b.wobble));else if(b.shape.type==="bitmap"){var Q=Math.PI/10*b.wobble,ue=Math.abs(Z-U)*.1,ge=Math.abs(ee-V)*.1,pe=b.shape.bitmap.width*b.scalar,Se=b.shape.bitmap.height*b.scalar,F=new DOMMatrix([Math.cos(Q)*ue,Math.sin(Q)*ue,-Math.sin(Q)*ge,Math.cos(Q)*ge,b.x,b.y]);F.multiplySelf(new DOMMatrix(b.shape.matrix));var je=C.createPattern(f.transform(b.shape.bitmap),"no-repeat");je.setTransform(F),C.globalAlpha=1-B,C.fillStyle=je,C.fillRect(b.x-pe/2,b.y-Se/2,pe,Se),C.globalAlpha=1}else if(b.shape==="circle")C.ellipse?C.ellipse(b.x,b.y,Math.abs(Z-U)*b.ovalScalar,Math.abs(ee-V)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI):T(C,b.x,b.y,Math.abs(Z-U)*b.ovalScalar,Math.abs(ee-V)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI);else if(b.shape==="star")for(var oe=Math.PI/2*3,Me=4*b.scalar,me=8*b.scalar,We=b.x,be=b.y,A=5,S=Math.PI/A;A--;)We=b.x+Math.cos(oe)*me,be=b.y+Math.sin(oe)*me,C.lineTo(We,be),oe+=S,We=b.x+Math.cos(oe)*Me,be=b.y+Math.sin(oe)*Me,C.lineTo(We,be),oe+=S;else C.moveTo(Math.floor(b.x),Math.floor(b.y)),C.lineTo(Math.floor(b.wobbleX),Math.floor(V)),C.lineTo(Math.floor(Z),Math.floor(ee)),C.lineTo(Math.floor(U),Math.floor(b.wobbleY));return C.closePath(),C.fill(),b.tick<b.totalTicks}function ae(C,b,B,U,V){var Z=b.slice(),ee=C.getContext("2d"),Q,ue,ge=c(function(pe){function Se(){Q=ue=null,ee.clearRect(0,0,U.width,U.height),f.clear(),V(),pe()}function F(){i&&!(U.width===r.width&&U.height===r.height)&&(U.width=C.width=r.width,U.height=C.height=r.height),!U.width&&!U.height&&(B(C),U.width=C.width,U.height=C.height),ee.clearRect(0,0,U.width,U.height),Z=Z.filter(function(je){return K(ee,je)}),Z.length?Q=d.frame(F):Se()}Q=d.frame(F),ue=Se});return{addFettis:function(pe){return Z=Z.concat(pe),ge},canvas:C,promise:ge,reset:function(){Q&&d.cancel(Q),ue&&ue()}}}function D(C,b){var B=!C,U=!!p(b||{},"resize"),V=!1,Z=p(b,"disableForReducedMotion",Boolean),ee=s&&!!p(b||{},"useWorker"),Q=ee?h():null,ue=B?P:z,ge=C&&Q?!!C.__confetti_initialized:!1,pe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Se;function F(oe,Me,me){for(var We=p(oe,"particleCount",u),be=p(oe,"angle",Number),A=p(oe,"spread",Number),S=p(oe,"startVelocity",Number),W=p(oe,"decay",Number),re=p(oe,"gravity",Number),ne=p(oe,"drift",Number),se=p(oe,"colors",M),Ee=p(oe,"ticks",Number),de=p(oe,"shapes"),_e=p(oe,"scalar"),Ae=!!p(oe,"flat"),De=R(oe),te=We,Ye=[],ke=C.width*De.x,Le=C.height*De.y;te--;)Ye.push(q({x:ke,y:Le,angle:be,spread:A,startVelocity:S,color:se[te%se.length],shape:de[g(0,de.length)],ticks:Ee,decay:W,gravity:re,drift:ne,scalar:_e,flat:Ae}));return Se?Se.addFettis(Ye):(Se=ae(C,Ye,ue,Me,me),Se.promise)}function je(oe){var Me=Z||p(oe,"disableForReducedMotion",Boolean),me=p(oe,"zIndex",Number);if(Me&&pe)return c(function(S){S()});B&&Se?C=Se.canvas:B&&!C&&(C=E(me),document.body.appendChild(C)),U&&!ge&&ue(C);var We={width:C.width,height:C.height};Q&&!ge&&Q.init(C),ge=!0,Q&&(C.__confetti_initialized=!0);function be(){if(Q){var S={getBoundingClientRect:function(){if(!B)return C.getBoundingClientRect()}};ue(S),Q.postMessage({resize:{width:S.width,height:S.height}});return}We.width=We.height=null}function A(){Se=null,U&&(V=!1,e.removeEventListener("resize",be)),B&&C&&(document.body.contains(C)&&document.body.removeChild(C),C=null,ge=!1)}return U&&!V&&(V=!0,e.addEventListener("resize",be,!1)),Q?Q.fire(oe,We,A):F(oe,We,A)}return je.reset=function(){Q&&Q.reset(),Se&&Se.reset()},je}var H;function $(){return H||(H=D(null,{useWorker:!0,resize:!0})),H}function J(C,b,B,U,V,Z,ee){var Q=new Path2D(C),ue=new Path2D;ue.addPath(Q,new DOMMatrix(b));var ge=new Path2D;return ge.addPath(ue,new DOMMatrix([Math.cos(ee)*V,Math.sin(ee)*V,-Math.sin(ee)*Z,Math.cos(ee)*Z,B,U])),ge}function I(C){if(!a)throw new Error("path confetti are not supported in this browser");var b,B;typeof C=="string"?b=C:(b=C.path,B=C.matrix);var U=new Path2D(b),V=document.createElement("canvas"),Z=V.getContext("2d");if(!B){for(var ee=1e3,Q=ee,ue=ee,ge=0,pe=0,Se,F,je=0;je<ee;je+=2)for(var oe=0;oe<ee;oe+=2)Z.isPointInPath(U,je,oe,"nonzero")&&(Q=Math.min(Q,je),ue=Math.min(ue,oe),ge=Math.max(ge,je),pe=Math.max(pe,oe));Se=ge-Q,F=pe-ue;var Me=10,me=Math.min(Me/Se,Me/F);B=[me,0,0,me,-Math.round(Se/2+Q)*me,-Math.round(F/2+ue)*me]}return{type:"path",path:b,matrix:B}}function G(C){var b,B=1,U="#000000",V='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof C=="string"?b=C:(b=C.text,B="scalar"in C?C.scalar:B,V="fontFamily"in C?C.fontFamily:V,U="color"in C?C.color:U);var Z=10*B,ee=""+Z+"px "+V,Q=new OffscreenCanvas(Z,Z),ue=Q.getContext("2d");ue.font=ee;var ge=ue.measureText(b),pe=Math.ceil(ge.actualBoundingBoxRight+ge.actualBoundingBoxLeft),Se=Math.ceil(ge.actualBoundingBoxAscent+ge.actualBoundingBoxDescent),F=2,je=ge.actualBoundingBoxLeft+F,oe=ge.actualBoundingBoxAscent+F;pe+=F+F,Se+=F+F,Q=new OffscreenCanvas(pe,Se),ue=Q.getContext("2d"),ue.font=ee,ue.fillStyle=U,ue.fillText(b,je,oe);var Me=1/B;return{type:"bitmap",bitmap:Q.transferToImageBitmap(),matrix:[Me,0,0,Me,-pe*Me/2,-Se*Me/2]}}n.exports=function(){return $().apply(this,arguments)},n.exports.reset=function(){$().reset()},n.exports.create=D,n.exports.shapeFromPath=I,n.exports.shapeFromText=G})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Kd,!1);const Hp=Kd.exports;Kd.exports.create;const nT=({lang:t})=>{const[e,n]=Xe.useState(0),[i,r]=Xe.useState(0),[s,a]=Xe.useState(!1),[o,l]=Xe.useState(30),[c,f]=Xe.useState([]),[d,h]=Xe.useState(0),[m,_]=Xe.useState(null),y=Xe.useRef(null),p=Xe.useRef([]),u=L=>L>=300?t==="bn"?{rank:"🐉 ড্রাগন ওয়ারিয়র মাস্টার",badge:"Dragon Warrior"}:{rank:"🐉 Dragon Warrior Master",badge:"Dragon Warrior"}:L>=180?t==="bn"?{rank:"🥋 জেড প্যালেস যোদ্ধা",badge:"Jade Warrior"}:{rank:"🥋 Jade Palace Warrior",badge:"Jade Warrior"}:L>=80?t==="bn"?{rank:"🥢 চপস্টিক মাস্টার",badge:"Chopstick Novice"}:{rank:"🥢 Chopstick Master",badge:"Chopstick Novice"}:t==="bn"?{rank:"🍜 নুডল শপ শিক্ষানবিস",badge:"Noodle Apprentice"}:{rank:"🍜 Noodle Shop Apprentice",badge:"Noodle Apprentice"},g=()=>{Qe.playGong(),n(0),h(0),l(30),a(!0),f([]),p.current=[]};Xe.useEffect(()=>{if(!s)return;if(o<=0){a(!1),Qe.playWuxiBlast(),Hp({particleCount:140,spread:85,origin:{y:.6},colors:["#d97706","#10b981","#f59e0b","#ffffff"]}),e>i&&r(e);return}const L=setInterval(()=>{l(R=>R-1)},1e3);return()=>clearInterval(L)},[s,o,e,i]),Xe.useEffect(()=>{if(!s)return;const L=setInterval(()=>{if(p.current.length<6){const R=Math.random();let P;R>.85?P={id:Date.now()+Math.random(),x:Math.random()*80+10,y:-10,speed:Math.random()*2+2.5,size:60,type:"peach",emoji:"🍑",points:50}:R>.6?P={id:Date.now()+Math.random(),x:Math.random()*80+10,y:-10,speed:Math.random()*2+2,size:55,type:"noodle",emoji:"🍜",points:25}:R>.3?P={id:Date.now()+Math.random(),x:Math.random()*80+10,y:-10,speed:Math.random()*2+1.8,size:48,type:"cookie",emoji:"🥠",points:15}:P={id:Date.now()+Math.random(),x:Math.random()*80+10,y:-10,speed:Math.random()*2+1.5,size:52,type:"dumpling",emoji:"🥟",points:10},p.current=[...p.current,P],f(p.current)}},750);return()=>clearInterval(L)},[s]),Xe.useEffect(()=>{if(!s)return;let L=0,R=performance.now();const P=z=>{const E=Math.min((z-R)/1e3,.1);R=z,p.current=p.current.map(T=>({...T,y:T.y+T.speed*E*10})).filter(T=>T.y<105),f(p.current),L=requestAnimationFrame(P)};return L=requestAnimationFrame(P),()=>cancelAnimationFrame(L)},[s]);const v=(L,R)=>{var z;R.stopPropagation(),Qe.playChopstickClick();const P=(z=y.current)==null?void 0:z.getBoundingClientRect();if(P){const E=R.clientX-P.left,T=R.clientY-P.top,q=["SKADOOSH!","NOODLE POWER!","INNER PEACE!","SECRET INGREDIENT!","PO’S FAVORITE!"],K=L.type==="peach"?"🍑 +50 & BONUS!":q[Math.floor(Math.random()*q.length)];_({text:K,x:E,y:T}),setTimeout(()=>_(null),850)}L.type==="peach"&&(l(E=>E+3),Qe.playFluteNote(587.33)),p.current=p.current.filter(E=>E.id!==L.id),f(p.current),n(E=>E+L.points+d*2),h(E=>E+1),Hp({particleCount:L.type==="peach"?35:15,spread:45,origin:{x:R.clientX/window.innerWidth,y:R.clientY/window.innerHeight}})},M=u(e);return x.jsx("section",{id:"dumpling-game",className:"py-20 px-4 max-w-5xl mx-auto",children:x.jsxs("div",{className:"relative rounded-3xl glass-panel border-2 border-amber-500/30 p-8 md:p-12 overflow-hidden shadow-2xl",children:[x.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"}),x.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"}),x.jsxs("div",{className:"text-center space-y-3 mb-8",children:[x.jsxs("div",{className:"flex justify-center items-center gap-4 mb-2",children:[x.jsx(Pt,{id:"shifu",size:"sm"}),x.jsx(Pt,{id:"po",size:"md"}),x.jsx(Pt,{id:"ping",size:"sm"})]}),x.jsxs("span",{className:"px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 font-cinzel text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2",children:[x.jsx(D_,{className:"w-4 h-4 text-amber-400"}),t==="bn"?"পো ও শিফুর চপস্টিক গেম":"Po & Master Shifu’s Noodle Battle"]}),x.jsx("h2",{className:"font-cinzel text-3xl md:text-5xl font-black text-slate-100",children:t==="bn"?"কুংফু পান্ডা নুডল ও ডাম্পলিং প্রতিযোগিতা":"Kung Fu Panda Noodle & Dumpling Sparring"}),x.jsx("p",{className:"text-slate-300 max-w-xl mx-auto text-sm md:text-base",children:t==="bn"?"চপস্টিক দিয়ে আকাশ থেকে পড়া ডাম্পলিং (🥟), নুডল স্যুপ (🍜), ও পবিত্র পিচ (🍑) ধরুন! আপনার চপস্টিক দক্ষতা প্রমাণ করুন।":"Use your chopsticks to catch falling Dumplings (🥟), Secret Noodles (🍜), and Peaches of Wisdom (🍑) mid-air!"})]}),x.jsxs("div",{className:"flex flex-wrap justify-between items-center gap-4 p-4.5 rounded-2xl bg-slate-900/90 border border-slate-800 mb-6",children:[x.jsxs("div",{className:"flex items-center gap-6",children:[x.jsxs("div",{children:[x.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold block",children:t==="bn"?"স্কোর":"Score"}),x.jsx("p",{className:"font-cinzel text-2xl md:text-3xl font-black text-amber-400",children:e})]}),x.jsxs("div",{children:[x.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold block",children:t==="bn"?"কম্বো":"Combo"}),x.jsxs("p",{className:"font-cinzel text-xl md:text-2xl font-extrabold text-emerald-400",children:["x",d]})]})]}),x.jsxs("div",{className:"px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs md:text-sm font-bold flex items-center gap-2",children:[x.jsx(T_,{className:"w-4 h-4 text-amber-400"}),x.jsx("span",{children:M.rank})]}),x.jsxs("div",{className:"flex items-center gap-6",children:[x.jsxs("div",{children:[x.jsx("span",{className:"text-xs text-slate-400 uppercase font-bold block",children:t==="bn"?"অবশিষ্ট সময়":"Time Left"}),x.jsxs("p",{className:"font-cinzel text-2xl md:text-3xl font-black text-rose-400",children:[o,"s"]})]}),x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx(N_,{className:"w-5 h-5 text-amber-400"}),x.jsxs("div",{children:[x.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-bold block",children:t==="bn"?"সেরা রেকর্ড":"Best Record"}),x.jsxs("span",{className:"font-extrabold text-slate-200",children:[i," pts"]})]})]})]})]}),x.jsxs("div",{ref:y,className:"relative w-full h-[380px] md:h-[420px] rounded-2xl bg-slate-950/90 border-2 border-slate-800 overflow-hidden cursor-crosshair flex flex-col justify-center items-center select-none",children:[m&&x.jsx("div",{style:{left:m.x,top:m.y},className:"absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 font-black text-2xl md:text-3xl text-amber-300 drop-shadow-[0_0_12px_rgba(245,158,11,0.9)] animate-bounce z-30",children:m.text}),s?x.jsx(x.Fragment,{children:c.map(L=>x.jsx("div",{onPointerDown:R=>v(L,R),style:{left:`${L.x}%`,top:`${L.y}%`,fontSize:`${L.size}px`},className:"absolute cursor-pointer touch-none transition-transform hover:scale-125 active:scale-90 animate-pulse filter drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]",children:L.emoji},L.id))}):x.jsxs("div",{className:"text-center space-y-6 z-10 px-4 flex flex-col items-center",children:[x.jsx(Pt,{id:"po",size:"lg"}),x.jsx("h3",{className:"font-cinzel text-2xl md:text-3xl font-extrabold text-slate-100",children:t==="bn"?"পো ও শিফুর চপস্টিক পরীক্ষায় প্রস্তুত?":"Ready for Po & Master Shifu’s Test?"}),x.jsx("p",{className:"text-slate-400 text-sm max-w-md mx-auto",children:t==="bn"?"ডাম্পলিং ও নুডলস ধরার জন্য চপস্টিক ব্যবহার করুন এবং ড্রাগন ওয়ারিয়র র্যাঙ্ক অর্জন করুন!":"Catch falling dumplings and noodle bowls to claim the Dragon Warrior Master Rank!"}),x.jsxs("button",{onClick:g,className:"px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-gold-500 to-amber-600 text-slate-950 font-black text-lg hover:brightness-110 shadow-xl shadow-amber-500/25 active:scale-95 transition-all inline-flex items-center gap-2 border-2 border-amber-300",children:[x.jsx(Cl,{className:"w-5 h-5"}),t==="bn"?"গেম শুরু করুন":"Start Noodle Battle"]})]})]})]})})},iT=({characters:t,lang:e})=>{const[n,i]=Xe.useState("all"),[r,s]=Xe.useState(null),a=t.filter(l=>n==="all"?!0:l.role===n),o=[{id:"all",label:e==="bn"?"সকল চরিত্র":"All Characters"},{id:"hero",label:e==="bn"?"নায়কগণ":"Heroes"},{id:"master",label:e==="bn"?"মাস্টারগণ":"Masters"},{id:"furious_five",label:e==="bn"?"ফিউরিয়াস ফাইভ":"Furious Five"},{id:"villain",label:e==="bn"?"খলনায়কগণ":"Villains"},{id:"ally",label:e==="bn"?"সহযোদ্ধা ও পরিবার":"Allies & Family"}];return x.jsxs("section",{id:"character-codex",className:"py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12",children:[x.jsxs("div",{className:"text-center space-y-4",children:[x.jsxs("span",{className:"px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-500/20 to-emerald-500/20 border-2 border-gold-500/40 text-gold-400 font-cinzel text-xs md:text-sm font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-gold-500/10",children:[x.jsx(i0,{className:"w-4 h-4 text-emerald-400"}),e==="bn"?"জেড প্যালেস কার্টুন গ্যালারি":"Jade Palace Cartoon Codex"]}),x.jsx("h2",{className:"font-cinzel text-4xl md:text-6xl font-extrabold text-slate-100 drop-shadow-lg",children:e==="bn"?"কুংফু পান্ডা চরিত্র পঞ্জি":"Master & Character Codex"}),x.jsx("p",{className:"text-slate-300 max-w-2xl mx-auto text-base md:text-lg",children:e==="bn"?"কুংফু পান্ডা সিরিজের সমস্ত বীর, মাস্টার, ফিউরিয়াস ফাইভ ও খলনায়কদের কার্টুন ইলাস্ট্রেশন, ক্ষমতা ও গল্প।":"Explore custom cartoon artworks, combat stats, and legend bios of every hero, master, and villain."})]}),x.jsx("div",{className:"flex flex-wrap justify-center items-center gap-3",children:o.map(l=>x.jsx("button",{onClick:()=>{Qe.playChopstickClick(),i(l.id)},className:`px-5 py-2.5 rounded-2xl font-cinzel text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 border-2 ${n===l.id?"bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 border-gold-400 shadow-xl shadow-gold-500/30 scale-105":"glass-panel text-slate-300 border-slate-700/80 hover:text-gold-400 hover:border-gold-500/50"}`,children:l.label},l.id))}),x.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:a.map(l=>x.jsxs("div",{onClick:()=>{Qe.playFluteNote(440),s(l)},className:"group relative rounded-3xl glass-panel border-2 border-slate-800 p-6 space-y-6 hover:border-gold-500/60 hover:shadow-2xl hover:shadow-gold-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between",children:[x.jsx("div",{className:"absolute top-0 right-0 w-36 h-36 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-all pointer-events-none"}),x.jsxs("div",{className:"space-y-4",children:[x.jsxs("div",{className:"flex items-center gap-4",children:[x.jsx(Pt,{id:l.id,size:"md"}),x.jsxs("div",{className:"flex-1 min-w-0",children:[x.jsx("span",{className:"text-[11px] font-bold text-emerald-400 tracking-wider uppercase block truncate",children:l.title[e]}),x.jsx("h3",{className:"font-cinzel text-2xl font-black text-slate-100 group-hover:text-gold-400 transition-colors truncate",children:l.name[e]})]})]}),x.jsxs("div",{className:"relative p-3 rounded-2xl bg-slate-900/90 border border-gold-500/30 text-slate-200 italic text-xs md:text-sm",children:['"',l.quote[e],'"']}),x.jsx("p",{className:"text-slate-300 text-xs md:text-sm leading-relaxed line-clamp-3",children:l.description[e]})]}),x.jsxs("div",{className:"space-y-4 pt-4 border-t border-slate-800",children:[x.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between text-xs",children:[x.jsx("span",{className:"text-slate-400 font-semibold uppercase",children:e==="bn"?"বিশেষ কৌশল":"Signature Move"}),x.jsxs("span",{className:"font-bold text-gold-400 flex items-center gap-1",children:[x.jsx(ph,{className:"w-3.5 h-3.5 text-gold-400"}),l.specialMove[e]]})]}),x.jsxs("div",{className:"space-y-2 text-xs",children:[x.jsxs("div",{children:[x.jsxs("div",{className:"flex justify-between font-medium text-slate-300 mb-0.5",children:[x.jsx("span",{children:e==="bn"?"চপলতা (Agility)":"Agility"}),x.jsxs("span",{children:[l.stats.agility,"%"]})]}),x.jsx("div",{className:"w-full h-1.5 rounded-full bg-slate-800 overflow-hidden",children:x.jsx("div",{className:"h-full bg-amber-400 rounded-full transition-all duration-1000",style:{width:`${l.stats.agility}%`}})})]}),x.jsxs("div",{children:[x.jsxs("div",{className:"flex justify-between font-medium text-slate-300 mb-0.5",children:[x.jsx("span",{children:e==="bn"?"চি শক্তি (Chi)":"Chi Energy"}),x.jsxs("span",{children:[l.stats.chi,"%"]})]}),x.jsx("div",{className:"w-full h-1.5 rounded-full bg-slate-800 overflow-hidden",children:x.jsx("div",{className:"h-full bg-emerald-400 rounded-full transition-all duration-1000",style:{width:`${l.stats.chi}%`}})})]})]})]})]},l.id))}),r&&x.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-fade-in",children:x.jsxs("div",{className:"relative w-full max-w-2xl rounded-3xl glass-panel border-2 border-gold-500/60 p-6 md:p-10 space-y-6 shadow-2xl overflow-hidden",children:[x.jsx("button",{onClick:()=>{Qe.playChopstickClick(),s(null)},className:"absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-gold-400 transition-colors",children:x.jsx(a0,{className:"w-6 h-6"})}),x.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left",children:[x.jsx(Pt,{id:r.id,size:"xl"}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("span",{className:"px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider",children:r.title[e]}),x.jsx("h2",{className:"font-cinzel text-3xl md:text-4xl font-extrabold text-slate-100",children:r.name[e]}),x.jsxs("p",{className:"font-serif italic text-gold-300 text-lg",children:['"',r.quote[e],'"']})]})]}),x.jsxs("div",{className:"p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 text-slate-200 text-sm md:text-base leading-relaxed",children:[x.jsxs("h4",{className:"font-cinzel text-gold-400 font-bold uppercase text-xs tracking-wider flex items-center gap-1.5",children:[x.jsx(Cl,{className:"w-4 h-4 text-gold-400"}),e==="bn"?"চরিত্রের পূর্ণ বিবরণ":"Full Character Bio"]}),x.jsx("p",{children:r.description[e]})]}),x.jsxs("div",{className:"p-4 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-between text-sm",children:[x.jsx("span",{className:"font-bold text-slate-300",children:e==="bn"?"সিগনেচার কুংফু কৌশল":"Signature Move"}),x.jsxs("span",{className:"font-black text-gold-400 flex items-center gap-1 text-base",children:[x.jsx(ph,{className:"w-5 h-5 text-gold-400"}),r.specialMove[e]]})]})]})})]})},rT=({lang:t})=>{const[e,n]=Xe.useState("Inhale"),[i,r]=Xe.useState(!1),[s,a]=Xe.useState(4);Xe.useEffect(()=>{if(!i)return;const c=setInterval(()=>{a(f=>f<=1?e==="Inhale"?(n("Hold"),Qe.playFluteNote(587.33),4):e==="Hold"?(n("Exhale"),Qe.playFluteNote(392),4):(n("Inhale"),Qe.playFluteNote(440),4):f-1)},1e3);return()=>clearInterval(c)},[i,e]);const o=()=>{const c=!i;r(c),c&&(Qe.startAmbientSoundscape(),Qe.playGong())},l=()=>t==="bn"?e==="Inhale"?"শ্বাস নিন (Inhale)":e==="Hold"?"শ্বাস ধরে রাখুন (Hold)":"শ্বাস ছাড়ুন (Exhale)":e;return x.jsx("section",{id:"inner-peace",className:"py-20 px-4 max-w-5xl mx-auto",children:x.jsxs("div",{className:"relative rounded-3xl glass-panel border border-emerald-500/40 p-8 md:p-12 overflow-hidden text-center shadow-2xl",children:[x.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"}),x.jsxs("div",{className:"space-y-3 mb-10",children:[x.jsxs("span",{className:"px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-cinzel text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5",children:[x.jsx("span",{className:"text-emerald-400 font-extrabold",children:"☯"}),t==="bn"?"ওগওয়ের স্পিরিট রিয়েলম সাধনা":"Master Oogway’s Sanctuary"]}),x.jsx("h2",{className:"font-cinzel text-3xl md:text-5xl font-extrabold text-slate-100",children:t==="bn"?"ইনার পিস ও চি মেডিটেশন":"Inner Peace & Chi Meditation"}),x.jsx("p",{className:"text-slate-300 max-w-lg mx-auto text-sm md:text-base",children:t==="bn"?'"তোমার মন হলো এই পানির মতো, যখন মন অশান্ত থাকে তখন সত্য দেখা কঠিন। কিন্তু মনকে শান্ত হতে দিলে উত্তর আপনাতেই পরিষ্কার হয়ে ওঠে।"':'"Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear."'})]}),x.jsxs("div",{className:"relative w-64 h-64 md:w-80 md:h-80 mx-auto my-8 flex items-center justify-center",children:[x.jsx("div",{className:`absolute inset-0 rounded-full border-2 border-emerald-400/40 transition-all duration-1000 ${i&&e==="Inhale"?"scale-125 bg-emerald-500/20 blur-sm":i&&e==="Hold"?"scale-125 bg-gold-500/20 blur-md":"scale-90 bg-transparent"}`}),x.jsx("div",{className:`absolute w-48 h-48 rounded-full border border-gold-400/60 transition-all duration-1000 flex items-center justify-center ${i&&e==="Inhale"?"scale-110 shadow-[0_0_50px_rgba(16,185,129,0.5)]":"scale-95 shadow-none"}`,children:x.jsxs("div",{className:"text-center space-y-2 z-10",children:[x.jsx("span",{className:"text-5xl block animate-spin-slow",children:"☯️"}),i?x.jsxs("div",{children:[x.jsx("span",{className:"font-cinzel text-xl md:text-2xl font-extrabold text-gold-300 block uppercase",children:l()}),x.jsx("span",{className:"text-4xl font-black text-emerald-400",children:s})]}):x.jsx("span",{className:"font-cinzel text-xs font-semibold text-slate-400 uppercase tracking-widest block",children:t==="bn"?"শুরু করতে নিচে ক্লিক করুন":"Click Below to Begin"})]})})]}),x.jsxs("button",{onClick:o,className:`px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl inline-flex items-center gap-2 active:scale-95 ${i?"bg-slate-800 text-rose-400 border border-rose-500/40 hover:bg-slate-700":"bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 hover:brightness-110 shadow-emerald-500/25"}`,children:[x.jsx(U_,{className:"w-5 h-5"}),i?t==="bn"?"মেডিটেশন বিরতি দিন":"Pause Meditation":t==="bn"?"চি মেডিটেশন শুরু করুন":"Begin Chi Breathing"]})]})})},Gp=[{avatarId:"oogway",text:{en:"Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.",bn:"গতকাল একটি ইতিহাস, আগামীকাল একটি রহস্য, কিন্তু আজকের দিনটি একটি পরম উপহার।"},author:{en:"Grand Master Oogway",bn:"গ্র্যান্ড মাস্টার ওগওয়ে"},context:{en:"Under the Sacred Peach Tree of Heavenly Wisdom",bn:"পবিত্র পিচ গাছের নিচে"}},{avatarId:"po",text:{en:"There is no secret ingredient. It's just you.",bn:"গোপন বলে আলাদা কিছু নেই, তোমার নিজের ওপর বিশ্বাসই আসল গোপন উপাদান।"},author:{en:"Mr. Ping / Po",bn:"মি. পিং / পো"},context:{en:"Discovered inside the reflection of the Dragon Scroll",bn:"ড্রাগন স্ক্রোলের ফাঁকা প্রতিচ্ছবিতে আবিষ্কৃত"}},{avatarId:"oogway",text:{en:"Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear.",bn:"তোমার মন হলো শান্ত পানির মতো, যখন অস্থির থাকে তখন স্পষ্ট দেখা যায় না। কিন্তু স্থির হলে উত্তর নিজেই ভেসে ওঠে।"},author:{en:"Grand Master Oogway",bn:"গ্র্যান্ড মাস্টার ওগওয়ে"},context:{en:"Teaching Master Shifu about patience and faith",bn:"মাস্টার শিফুকে বিশ্বাস ও ধৈর্যের শিক্ষা"}},{avatarId:"oogway",text:{en:"One often meets his destiny on the road he takes to avoid it.",bn:"যে পথ মানুষ বিপদ এড়াতে বেছে নেয়, সেই পথেই প্রায়শই সে নিজের ভাগ্যের মুখোমুখি হয়।"},author:{en:"Grand Master Oogway",bn:"গ্র্যান্ড মাস্টার ওগওয়ে"},context:{en:"Foreseeing Tai Lung's escape from Chorh-Gom Prison",bn:"তাই লাংয়ের বন্দিদশা থেকে পালানোর ভবিষ্যৎবাণী"}},{avatarId:"shifu",text:{en:"If you only do what you can do, you will never be more than you are now.",bn:"তুমি যদি কেবল সাধ্যের কাজগুলোই করতে থাকো, তবে কখনো নিজের চেয়ে বড় কিছু হতে পারবে না।"},author:{en:"Master Shifu",bn:"মাস্টার শিফু"},context:{en:"Training Po to become the Master of Chi",bn:"পো-কে চি শক্তি অর্জনের ট্রেনিংয়ের সময়ে"}},{avatarId:"po",text:{en:"I'm not a big fat panda. I'm THE big fat panda!",bn:"আমি সাধারণ কোনো মোটাসোটা পান্ডা নই, আমি হলাম সেই একমাত্র লেজেন্ডারি পান্ডা!"},author:{en:"Po the Dragon Warrior",bn:"পো ড্রাগন ওয়ারিয়র"},context:{en:"Before executing the Wuxi Finger Hold",bn:"উসি ফিঙ্গার হোল্ড প্রয়োগ করার পূর্বে"}}],sT=({lang:t})=>{const[e,n]=Xe.useState(0),[i,r]=Xe.useState(!1),s=()=>{Qe.playFluteNote(523.25),n(l=>(l+1)%Gp.length)},a=Gp[e],o=()=>{Qe.playChopstickClick(),navigator.clipboard.writeText(`"${a.text[t]}" — ${a.author[t]}`),r(!0),setTimeout(()=>r(!1),2e3)};return x.jsx("section",{className:"py-16 px-4 max-w-4xl mx-auto",children:x.jsxs("div",{className:"relative rounded-3xl glass-panel border-2 border-gold-500/40 p-8 md:p-12 space-y-6 shadow-2xl text-center flex flex-col items-center",children:[x.jsx(Pt,{id:a.avatarId,size:"md"}),x.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 text-gold-400 font-cinzel text-xs font-bold uppercase tracking-wider",children:[x.jsx(n0,{className:"w-3.5 h-3.5 text-gold-400"}),t==="bn"?"প্রাচীন কার্টুন গুরুবাণী স্ক্রোল":"Scroll of Ancient Wisdom"]}),x.jsx("h2",{className:"font-cinzel text-2xl md:text-3xl font-extrabold text-slate-100",children:t==="bn"?"মহামতি ওগওয়ে ও শিফুর অমর উক্তি":"Wisdom of the Grand Masters"}),x.jsxs("div",{className:"py-4 space-y-4",children:[x.jsxs("p",{className:"font-serif italic text-xl md:text-2xl text-amber-200 leading-relaxed max-w-2xl mx-auto",children:['"',a.text[t],'"']}),x.jsxs("div",{className:"space-y-1",children:[x.jsxs("p",{className:"font-bold text-gold-400 font-cinzel text-lg",children:["— ",a.author[t]]}),x.jsx("p",{className:"text-xs text-slate-400 italic",children:a.context[t]})]})]}),x.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-4 pt-2",children:[x.jsxs("button",{onClick:s,className:"px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-slate-950 font-bold text-sm hover:brightness-110 shadow-lg shadow-gold-500/20 active:scale-95 transition-all inline-flex items-center gap-2",children:[x.jsx(L_,{className:"w-4 h-4"}),t==="bn"?"পরবর্তী পরম বাক্য":"Next Master Quote"]}),x.jsxs("button",{onClick:o,className:"px-6 py-3 rounded-xl glass-panel text-slate-300 font-semibold text-sm hover:text-gold-400 hover:border-gold-500/40 active:scale-95 transition-all inline-flex items-center gap-2",children:[i?x.jsx(b_,{className:"w-4 h-4 text-emerald-400"}):x.jsx(C_,{className:"w-4 h-4"}),i?t==="bn"?"কপি করা হয়েছে!":"Copied!":t==="bn"?"উক্তি কপি করুন":"Copy Quote"]})]})]})})},aT=({lang:t})=>x.jsx("footer",{className:"relative border-t border-gold-500/20 bg-slate-950 py-12 px-4 text-center",children:x.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[x.jsxs("div",{className:"flex justify-center items-center gap-3",children:[x.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-tr from-gold-500 to-amber-300 flex items-center justify-center text-slate-950 text-xl font-bold",children:"🐼"}),x.jsx("span",{className:"font-cinzel text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-amber-200",children:t==="bn"?"কুংফু পান্ডা মহাকাব্যিক ওয়েবসাইট":"KUNG FU PANDA STORYBOOK"})]}),x.jsx("p",{className:"text-slate-400 text-sm max-w-md mx-auto leading-relaxed",children:t==="bn"?"পো, মাস্টার শিফু, গ্র্যান্ড মাস্টার ওগওয়ে এবং ফিউরিয়াস ফাইভের স্মরণে তৈরি একটি ডিজিটাল গল্পগ্রন্থ।":"Crafted with React, Three.js WebGL, and ancient martial arts wisdom. Dedicated to Po, Master Shifu, and the Furious Five."}),x.jsxs("div",{className:"pt-4 flex justify-center items-center gap-2 text-xs text-slate-500",children:[x.jsx("span",{className:"text-gold-400 font-bold",children:"Skadoosh! (স্ক্যাডুশ!)"}),x.jsx("span",{children:"•"}),x.jsx("span",{className:"text-emerald-400 font-semibold",children:t==="bn"?'"বিশ্বাসই আসল শক্তি"':'"There is no secret ingredient."'})]}),x.jsx("p",{className:"pt-2 text-[11px] italic tracking-wide text-slate-500/80",children:"Made by Nazeha Mosharaf"})]})}),oT=()=>x.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 overflow-hidden select-none",children:[x.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#060911] via-[#0b101d] to-[#060911]"}),x.jsx("div",{className:"absolute inset-0 opacity-20 bg-[linear-gradient(115deg,transparent_0%,rgba(251,191,36,0.08)_45%,transparent_46%),linear-gradient(25deg,transparent_0%,rgba(16,185,129,0.06)_50%,transparent_51%)] bg-[length:180px_180px]"}),x.jsx("div",{className:"absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-amber-600/10 via-rose-500/5 to-transparent rounded-full blur-[140px]"}),x.jsx("div",{className:"absolute bottom-10 left-10 w-[550px] h-[550px] bg-emerald-600/10 rounded-full blur-[150px]"}),x.jsx("div",{className:"absolute top-1/3 -right-20 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[140px]"}),x.jsx("div",{className:"absolute top-24 left-[6%] opacity-10 animate-bounce-slow text-6xl filter blur-[1px]",children:"🐼"}),x.jsx("div",{className:"absolute top-48 right-[8%] opacity-10 animate-pulse text-6xl filter blur-[1px]",children:"🦊"}),x.jsx("div",{className:"absolute top-[45%] left-[4%] opacity-10 animate-float text-6xl filter blur-[1px]",children:"🐢"}),x.jsx("div",{className:"absolute top-[62%] right-[5%] opacity-10 animate-bounce-slow text-6xl filter blur-[1px]",children:"🐯"}),x.jsxs("svg",{className:"absolute bottom-0 left-0 w-full h-[55vh] min-h-[280px] opacity-30 object-cover",viewBox:"0 0 1440 600",fill:"none",preserveAspectRatio:"none",children:[x.jsx("path",{d:"M 0 600 L 0 320 Q 180 200 360 340 T 720 280 T 1080 360 T 1440 260 L 1440 600 Z",fill:"#03060c"}),x.jsx("path",{d:"M 660 360 L 660 300 L 620 300 L 680 240 L 640 240 L 720 160 L 800 240 L 760 240 L 820 300 L 780 300 L 780 360 Z",fill:"#050812"}),x.jsx("path",{d:"M 600 300 Q 720 260 840 300 M 620 240 Q 720 210 820 240 M 660 160 Q 720 140 780 160",stroke:"#d97706",strokeWidth:"2",opacity:"0.3",fill:"none"}),x.jsx("path",{d:"M 0 600 L 0 420 Q 240 360 480 460 Q 720 380 960 480 Q 1200 400 1440 460 L 1440 600 Z",fill:"#020409"})]}),x.jsx("svg",{className:"absolute top-20 left-10 w-64 h-32 opacity-10 animate-float",viewBox:"0 0 200 100",fill:"#fef3c7",children:x.jsx("path",{d:"M 20 60 Q 40 20 80 40 Q 120 10 160 50 Q 180 60 180 80 Q 180 100 120 90 Q 60 100 20 60 Z"})}),x.jsx("svg",{className:"absolute top-40 right-16 w-80 h-40 opacity-10 animate-pulse",viewBox:"0 0 200 100",fill:"#fef3c7",children:x.jsx("path",{d:"M 20 60 Q 40 20 80 40 Q 120 10 160 50 Q 180 60 180 80 Q 180 100 120 90 Q 60 100 20 60 Z"})}),x.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020409]/80 to-transparent"}),x.jsx("div",{className:"absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-emerald-950/30 to-transparent border-r border-amber-500/10 hidden md:block"}),x.jsx("div",{className:"absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-emerald-950/30 to-transparent border-l border-amber-500/10 hidden md:block"})]}),lT=[{id:"po",name:{en:"Po Ping (The Dragon Warrior)",bn:"পো পিং (ড্রাগন ওয়ারিয়র)"},title:{en:"The Dragon Warrior & Master of Chi",bn:"ড্রাগন ওয়ারিয়র এবং মাস্টার অফ চি"},quote:{en:"Skadoosh!",bn:"স্ক্যাডুশ! (Skadoosh!)"},description:{en:"A clumsy yet golden-hearted panda who rose from a noodle shop assistant to become the legendary Dragon Warrior, Master of Chi, and Spiritual Leader of the Valley of Peace.",bn:"নুডলস দোকানের সহকারী থেকে শুরু করে নিজের অদম্য সাহস ও শুভ্র হৃদয় দিয়ে পো হয়ে ওঠে উপত্যকার সেরা ড্রাগন ওয়ারিয়র ও চি শক্তির মাস্টার।"},image:"🐼",role:"hero",stats:{agility:88,chi:100,appetite:100,wisdom:95},specialMove:{en:"Wuxi Finger Hold & Golden Chi Dragon",bn:"উসি ফিঙ্গার হোল্ড ও গোল্ডেন চি ড্রাগন"}},{id:"shifu",name:{en:"Master Shifu",bn:"মাস্টার শিফু"},title:{en:"Senior Master of Jade Palace",bn:"জেড প্যালেসের প্রবীণ গুরু"},quote:{en:"Inner Peace... Inner Peace...",bn:"ইনার পিস... মনের অন্তরের পরম শান্তি..."},description:{en:"A legendary Red Panda master who trained the Furious Five and Po. Strict and disciplined, he learned the ultimate power of faith and inner peace from Grand Master Oogway.",bn:"ফিউরিয়াস ফাইভ ও পো-র সম্মানিত গুরু। কঠোর নিয়মানুবর্তী হলেও গ্র্যান্ড মাস্টার ওগওয়ের কাছ থেকে আত্মবিশ্বাস ও পরম শান্তির শিক্ষা লাভ করেছেন।"},image:"🦊",role:"master",stats:{agility:96,chi:90,appetite:40,wisdom:96},specialMove:{en:"Nerve Strike & Dumpling Chopstick Parry",bn:"নার্ভ স্ট্রাইক ও চপস্টিক পাররি"}},{id:"oogway",name:{en:"Grand Master Oogway",bn:"গ্র্যান্ড মাস্টার ওগওয়ে"},title:{en:"Founder of Kung Fu & Spirit Realm Sage",bn:"কুংফু-র জনক ও স্পিরিট রিয়েলমের ঋষি"},quote:{en:"Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.",bn:"গতকাল একটি ইতিহাস, আগামীকাল একটি রহস্য, কিন্তু আজকের দিনটি একটি উপহার।"},description:{en:"An ancient Galapagos tortoise of infinite wisdom who created Kung Fu thousands of years ago and foresaw Po as the true Dragon Warrior.",bn:"হাজার বছর আগে কুংফু আবিষ্কার করা প্রাচীন মহামতি কাচ্ছাপ। যিনি পো-র ভেতরের ড্রাগন ওয়ারিয়রকে প্রথম চিনতে পেরেছিলেন।"},image:"🐢",role:"master",stats:{agility:85,chi:100,appetite:30,wisdom:100},specialMove:{en:"Peach Blossom Chi Touch & Spirit Realm Portal",bn:"পিচ ব্লসম চি টাচ ও স্পিরিট পোর্টাল"}},{id:"tigress",name:{en:"Master Tigress",bn:"মাস্টার টাইগ্রেস"},title:{en:"Leader of the Furious Five",bn:"ফিউরিয়াস ফাইভের দলনেত্রী"},quote:{en:"The Dragon Warrior did not quit. And neither will I.",bn:"ড্রাগন ওয়ারিয়র কখনো হার মানেনি, আমিও মানবো না।"},description:{en:"The strongest and most disciplined member of the Furious Five. Though initially skeptical of Po, she became his most loyal companion and fierce defender.",bn:"ফিউরিয়াস ফাইভের সবচেয়ে শক্তিশালী ও অনুশাসিত যোদ্ধা। প্রথমে পো-কে সন্দেহ করলেও পরবর্তীতে তার সেরা বন্ধু ও সহযোদ্ধা হয়ে ওঠে।"},image:"🐯",role:"furious_five",stats:{agility:98,chi:84,appetite:60,wisdom:88},specialMove:{en:"Tiger Claw & Iron Strike",bn:"টাইগার ক্ল ও আয়রন থ্রাস্ট"}},{id:"viper",name:{en:"Master Viper",bn:"মাস্টার ভাইপার"},title:{en:"Ribbon Master of Grace & Agility",bn:"সৌন্দর্য ও গতিময়তার ফিতা মাস্টার"},quote:{en:"Kindness is the highest form of strength.",bn:"দয়া ও সহমর্মিতাই সবচেয়ে বড় শক্তি।"},description:{en:"Born without venomous fangs, Viper mastered ribbon dancing kung fu, using precision, compassion, and lightning speed to disarm any opponent.",bn:"বিষাক্ত দাঁত ছাড়া জন্মগ্রহণ করা সত্ত্বেও নিজের ফিতা নৃত্যের কুংফু দিয়ে তীব্র গতি ও দক্ষতার মাধ্যমে শত্রুকে পরাস্ত করেন।"},image:"🐍",role:"furious_five",stats:{agility:95,chi:80,appetite:45,wisdom:85},specialMove:{en:"Ribbon Whip Wrap & Shadow Coils",bn:"রিবন হুইপ ওয়াইন্ড ও শ্যাডো কয়েল"}},{id:"monkey",name:{en:"Master Monkey",bn:"মাস্টার মাঙ্কি"},title:{en:"Acrobatic Master of Playful Acrobatics",bn:"অ্যাক্রোবেটিক কুংফু মাস্টার"},quote:{en:"Fun and fight go hand in hand!",bn:"মজা আর যুদ্ধ একসাথে চলে!"},description:{en:"Friendly, humorous, and incredibly nimble, Monkey fights with staff precision and unpredictable acrobatic acrobatics.",bn:"হাসিখুশি ও অত্যন্ত চটপটে যোদ্ধা যিনি নিজের লাঠি এবং অনন্য শারীরিক কসরত দিয়ে শত্রুকে ধাঁধায় ফেলে দেন।"},image:"🐒",role:"furious_five",stats:{agility:96,chi:81,appetite:75,wisdom:80},specialMove:{en:"Monkey Staff Spin & Tail Sweep",bn:"মাঙ্কি স্টাফ স্পিন ও টেইল সুইপ"}},{id:"mantis",name:{en:"Master Mantis",bn:"মাস্টার মেন্টিস"},title:{en:"The Tiny Titan of Pressure Points",bn:"আকুপ্রেসারের পিগমি মাস্টার"},quote:{en:"Size means nothing when you hit the exact pressure point!",bn:"সঠিক প্রেসার পয়েন্টে আঘাত করতে পারলে শরীরের আকার কোনো বিষয় না!"},description:{en:"Smallest of the Furious Five, Mantis possesses colossal strength and supreme mastery over acupuncture and pressure point strikes.",bn:"আকারে সবচেয়ে ছোট হলেও অগাধ শক্তি এবং শরীরের সুনির্দিষ্ট প্রেসার পয়েন্টে আঘাত করার অদ্ভুত ক্ষমতার অধিকারী।"},image:"🦗",role:"furious_five",stats:{agility:99,chi:83,appetite:50,wisdom:82},specialMove:{en:"Pinpoint Nerve Paralysis",bn:"পিনপয়েন্ট নার্ভ প্যারালাইসিস"}},{id:"crane",name:{en:"Master Crane",bn:"মাস্টার ক্রেন"},title:{en:"Aerial Tactician of Wind",bn:"বাতাস ও আকাশের কৌশলী মাস্টার"},quote:{en:"Keep a calm head, and the wind will guide your wings.",bn:"মাথা ঠান্ডা রাখো, বাতাস নিজেই তোমার ডানা গাইড করবে।"},description:{en:"The peaceful mediator of the team who controls gusts of wind with his massive wings and glides effortlessly in combat.",bn:"শান্ত স্বভাবের বক পাখি যিনি ডানার ঝাপটায় প্রবল বাতাস সৃষ্টি করে যুদ্ধক্ষেত্র নিয়ন্ত্রণ করেন।"},image:"🦩",role:"furious_five",stats:{agility:94,chi:82,appetite:40,wisdom:87},specialMove:{en:"Tornado Wing Gust & Sky Glide",bn:"টরনেডো উইং গাস্ট ও স্কাই গ্লাইড"}},{id:"tailung",name:{en:"Tai Lung",bn:"তাই লাং"},title:{en:"The Ferocious Snow Leopard",bn:"ভয়ংকর স্নো লেপার্ড"},quote:{en:"Finally! A worthy opponent! Our battle will be LEGENDARY!",bn:"অবশেষে! একজন যোগ্য প্রতিদ্বন্দ্বী! আমাদের লড়াই হবে ইতিহাস!"},description:{en:"Master Shifu’s first pupil who succumbed to pride and rage after being denied the Dragon Scroll, breaking out of Chorh-Gom prison to challenge Po.",bn:"মাস্টার শিফুর প্রথম শিষ্য যিনি অহংকার ও ক্ষোভে পথভ্রষ্ট হন এবং ড্রাগন স্ক্রোলের জন্য পুরো ভ্যালিতে তাণ্ডব চালান।"},image:"🐆",role:"villain",stats:{agility:97,chi:86,appetite:60,wisdom:65},specialMove:{en:"Blue Fire Nerve Block Punch",bn:"ব্লু ফায়ার নার্ভ ব্লক পাঞ্চ"}},{id:"shen",name:{en:"Lord Shen",bn:"লর্ড শেন"},title:{en:"Peacock Master of Fireworks & Cannons",bn:"বারুদ ও কামানের ময়ূর শাসক"},quote:{en:"The only cause of unhappiness is not accepting what is.",bn:"অসুখী হওয়ার একমাত্র কারণ হলো যা সত্যি তা মেনে না নেওয়া।"},description:{en:"An aristocratic peacock who sought to conquer China using devastating metal gunpowder cannons and blade-sharp feather daggers.",bn:"এক অহংকারী ময়ূর শাসক যিনি নিজের বারুদ ও কামানের শক্তিতে পুরো চীন জয় করতে চেয়েছিল।"},image:"🦚",role:"villain",stats:{agility:93,chi:72,appetite:40,wisdom:82},specialMove:{en:"Feather Dagger Barrage & Cannon Fire",bn:"ফেদার ড্যাগার ব্যারেজ ও ক্যানন ফায়ার"}},{id:"kai",name:{en:"General Kai (The Collector)",bn:"জেনারেল কাই (দ্য কালেক্টর)"},title:{en:"Supreme Jade Warrior of Spirit Realm",bn:"স্পিরিট রিয়েলমের গ্রীন জেডের সেনাপতি"},quote:{en:"I am Kai! Maker of Widows, Conqueror of Beasts!",bn:"আমি কাই! সমস্ত বীরদের সংহারক ও চি সংগ্রহকারী!"},description:{en:"Oogway’s former brother-in-arms who stole the Chi of thousands of masters in the Spirit Realm to create an army of Jade Zombies.",bn:"ওগওয়ের প্রাচীন যুদ্ধসঙ্গী যিনি সমস্ত মাস্টারদের চি চুরি করে জেডের তৈরি অনুগত সৈন্যবাহিনী গড়ে তুলেছিলেন।"},image:"🐂",role:"villain",stats:{agility:89,chi:98,appetite:70,wisdom:75},specialMove:{en:"Jade Chain Blade Lash & Chi Steal",bn:"জেড চেইন ব্লেড ল্যাশ ও চি স্টিল"}},{id:"chameleon",name:{en:"The Chameleon",bn:"দ্য কেমেলিয়ন"},title:{en:"Shape-shifting Sorceress of Juniper City",bn:"জুনিপার সিটির রূপ পরিবর্তনকারী জাদুকরী"},quote:{en:"Why learn kung fu when I can steal every master’s strength?",bn:"অন্যের সব শক্তি চুরি করতে পারলে কষ্ট করে কুংফু শেখার কী দরকার?"},description:{en:"A powerful sorceress who could transform into any creature and absorb the kung fu abilities of every villain from the Spirit Realm.",bn:"এক শক্তিশালী জাদুকরী যিনি যেকোনো প্রাণীর রূপ ধারণ করতে পারতেন এবং সমস্ত খলনায়কদের কুংফু কৌশল নিজের ভেতর শুষে নিতেন।"},image:"🦎",role:"villain",stats:{agility:92,chi:94,appetite:55,wisdom:88},specialMove:{en:"Spirit Realm Form Shift & Chi Drain",bn:"স্পিরিট শিফট ও চি ড্রেন"}},{id:"zhen",name:{en:"Zhen",bn:"ঝেন"},title:{en:"The Clever Corsac Fox & Spiritual Successor",bn:"চতুর ফক্স ও হবু স্পিরিচুয়াল লিডার"},quote:{en:"Trust is hard to earn, but essential to give.",bn:"বিশ্বাস অর্জন করা কঠিন, কিন্তু কাউকে বিশ্বাস করা জরুরি।"},description:{en:"A quick-witted street-smart fox thief from Juniper City who redeemed herself, teamed up with Po, and became the candidate for the next Dragon Warrior.",bn:"জুনিপার সিটির চতুর শিয়াল চোর যিনি পরবর্তীতে পো-র সাথে দল বেঁধে ভ্যালি রক্ষা করেন এবং পরবর্তী ড্রাগন ওয়ারিয়র হওয়ার যোগ্যতা লাভ করেন।"},image:"🦊",role:"hero",stats:{agility:95,chi:82,appetite:65,wisdom:85},specialMove:{en:"Shadow Fox Vault & Staff Spin",bn:"শ্যাডো ফক্স ভল্ট ও স্টাফ স্পিন"}},{id:"ping",name:{en:"Mr. Ping",bn:"মি. পিং"},title:{en:"Master Noodle Chef & Loving Adoptive Father",bn:"মাস্টার নুডল শেফ ও ভালোবাসাময় বাবা"},quote:{en:"The secret ingredient of my Secret Ingredient Soup is... NOTHING!",bn:"আমার স্পেশাল স্যুপের গোপন উপাদান হলো... কিছুই না! বিশ্বাসই মূল শক্তি!"},description:{en:"A caring goose noodle chef who raised Po with unconditional love and revealed the true wisdom behind the Secret Ingredient Soup.",bn:"এক মমতাময় হাঁস শেফ যিনি পো-কে পরম স্নেহে বড় করেছেন এবং শিখিয়েছেন যে নিজের প্রতি আত্মবিশ্বাসই সবচেয়ে বড় গোপন উপাদান।"},image:"🦆",role:"ally",stats:{agility:70,chi:50,appetite:90,wisdom:92},specialMove:{en:"Secret Ingredient Soup Cleaver Slash",bn:"সিক্রেট ইনগ্রেডিয়েন্ট নুডল স্যুপ সার্ভ"}},{id:"lishan",name:{en:"Li Shan",bn:"লি শান"},title:{en:"Po’s Biological Panda Father",bn:"পো-র জন্মদাতা বাবা"},quote:{en:"Pandas don’t walk! We roll!",bn:"পান্ডারা হেঁটে চলায় সময় নষ্ট করে না, আমরা গড়িয়ে চলি!"},description:{en:"Po’s jovial, dumpling-loving biological father who leads the secret Panda Village and helped Po reconnect with his panda roots.",bn:"পো-র হাসিখুশি আসল বাবা যিনি লুকানো পান্ডা গ্রামের নেতা এবং পো-কে আসল পান্ডাদের মতো চি শক্তি ব্যবহারে সাহায্য করেন।"},image:"🐼",role:"ally",stats:{agility:65,chi:88,appetite:100,wisdom:80},specialMove:{en:"Panda Village Cannonball Roll",bn:"পান্ডা ভিলেজ ক্যাননবল রোল"}}],cT=[{id:1,movie:"Kung Fu Panda 1",title:{en:"The Noodle Shop & Sacred Dragon Selection",bn:"নুডলস দোকান ও পবিত্র ড্রাগন নির্বাচন"},subtitle:{en:"From Bowls of Soup to Fireworks Destiny",bn:"স্যুপের বাটি থেকে আগুনের আতশবাজির ভাগ্যের যাত্রা"},location:{en:"Valley of Peace & Jade Palace Courtyard",bn:"ভ্যালি অফ পিস ও জেড প্যালেস"},storyText:{en:["In the serene Valley of Peace, Po worked alongside his adoptive father Mr. Ping, chopping radishes and boiling broth for secret ingredient soup. Yet every night, Po dreamed of standing alongside the Furious Five in epic kung fu battles.","When Grand Master Oogway called a gathering at Jade Palace to name the Dragon Warrior, Po arrived late to locked gates. Refusing to give up, Po strapped fireworks to a chair, launched into the clouds, and crashed directly in front of Master Oogway.",'Oogway smiled warmly and pointed his trembling finger at Po: "The Universe has brought us the Dragon Warrior!"'],bn:["শান্তিপূর্ণ ভ্যালি অফ পিসে পো তার বাবা মি. পিংয়ের সাথে নুডলস দোকানে কাজ করত। কিন্তু প্রতি রাতে সে স্বপ্ন দেখত ফিউরিয়াস ফাইভের পাশে দাঁড়িয়ে বীরের মতো কুংফু যুদ্ধ করার।","গ্র্যান্ড মাস্টার ওগওয়ে যখন ড্রাগন ওয়ারিয়র নির্বাচনের জন্য অনুষ্ঠান ডাকলেন, পো দরজায় পৌঁছাতে দেরি করে ফেলে। হার না মেনে একটি চেয়ারে অগুনতি আতশবাজি বেঁধে নিজেকে আকাশে উড়িয়ে দেয় এবং ঠিক ওগওয়ের সামনে এসে পড়ে।",'মহামতি ওগওয়ে মৃদু হেসে আঙুল তুলে বললেন: "মহাবিশ্ব আমাদের আসল ড্রাগন ওয়ারিয়রকে পাঠিয়ে দিয়েছে!"']},quote:{text:{en:"There are no accidents.",bn:"পৃথিবীতে কোনো কিছুই দুর্ঘটনাবশত ঘটে না।"},author:{en:"Grand Master Oogway",bn:"গ্র্যান্ড মাস্টার ওগওয়ে"}},keyMoment:{en:"Fireworks Launch & Oogway's Sacred Point",bn:"আতশবাজিতে উড্ডয়ন ও ওগওয়ের ঐতিহাসিক সিদ্ধান্ত"},badge:{en:"Origin Awakening",bn:"ভাগ্যের সূচনা"},visualTheme:"gold"},{id:2,movie:"Kung Fu Panda 1",title:{en:"Sacred Dumpling Training & Defeating Tai Lung",bn:"পবিত্র ডাম্পলিং ট্রেনিং ও তাই লাং পরাস্ত"},subtitle:{en:"The Blank Scroll & The Wuxi Finger Hold",bn:"ফাঁকা স্ক্রোল ও বিখ্যাত উসি ফিঙ্গার হোল্ড"},location:{en:"Sacred Peach Tree & Valley Arena",bn:"পবিত্র পিচ গাছ ও ভ্যালি এরিনা"},storyText:{en:["Master Shifu doubted Po until he realized food was Po's ultimate motivator. Training with pairs of bamboo chopsticks over fresh steamed dumplings, Shifu helped Po unlock his innate reflexes and balance.",'Yet when Po unrolled the golden Dragon Scroll, it was completely blank! Despondent, Po returned to the noodle shop where Mr. Ping revealed: "The secret ingredient is nothing! To make something special, you just have to believe it is special."','Realizing the scroll was a mirror of self-belief, Po faced the fierce snow leopard Tai Lung and ended the battle with the legendary Wuxi Finger Hold: "Skadoosh!"'],bn:["মাস্টার শিফু বুঝতে পারলেন যে খাবারের প্রতি ভালোবাসাই পো-র শক্তির চাবিকাঠি। গরম ডাম্পলিং ও চপস্টিক নিয়ে ট্রেনিংয়ের মাধ্যমে শিফু পো-কে একজন চটপটে কুংফু মাস্টারে রূপান্তর করলেন।",'কিন্তু সোনার তৈরি ড্রাগন স্ক্রোলটি খুলে পো স্তম্ভিত হয়ে গেল—তাতে কিছুই লেখা ছিল না, কেবল নিজের মুখচ্ছবি দেখা যাচ্ছিল! হতাশ পো-কে তার বাবা বর অভয় দিয়ে বললেন: "আমার স্যুপে গোপন কোনো উপাদান ছিল না, বিশ্বাসই হলো আসল গোপন জিনিস!"','নিজের শক্তির রহস্য বুঝে পেয়ে পো ভয়ংকর স্নো লেপার্ড তাই লাংকে হারিয়ে বিখ্যাত উসি ফিঙ্গার হোল্ড প্রয়োগ করল: "স্ক্যাডুশ!"']},quote:{text:{en:"There is no secret ingredient. It's just you.",bn:"গোপন বলে আলাদা কিছু নেই, তোমার নিজের ওপর বিশ্বাসই আসল।"},author:{en:"Po Ping",bn:"পো পিং"}},keyMoment:{en:"Chopstick Battle & Skadoosh Finger Hold",bn:"চপস্টিক যুদ্ধ ও স্ক্যাডুশ ফিঙ্গার হোল্ড"},badge:{en:"Dragon Warrior Awakened",bn:"ড্রাগন ওয়ারিয়র জাগ্রত"},visualTheme:"jade"},{id:3,movie:"Kung Fu Panda 2",title:{en:"Inner Peace & The Fireworks Cannon Threat",bn:"ইনার পিস ও লর্ড শেনের রক্তিম কামান"},subtitle:{en:"Confronting Lord Shen & Unlocking the Past",bn:"লর্ড শেনের মুখোমুখি ও অতীতের স্মৃতি উদ্ধার"},location:{en:"Gongmen City & Ruined Panda Village",bn:"গংমেন সিটি ও ধ্বংসপ্রাপ্ত পান্ডা গ্রাম"},storyText:{en:["Lord Shen, the ambitious peacock ruler of Gongmen City, constructed a terrifying metal cannon that threatened to destroy kung fu forever.","During the battle, memories of Po's infancy resurfaced. With guidance from the Soothsayer, Po uncovered how his mother sacrificed herself to save him from Shen's raid, allowing him to process his grief and achieve true Inner Peace.","Standing at the harbor, Po used Inner Peace to catch burning cannonballs out of mid-air like raindrops, swirling them gracefully and sending them crashing back into Shen's flagship."],bn:["গংমেন সিটির ময়ূর শাসক লর্ড শেন বারুদ ও কামানের ব্যবহারে পুরো চীনে কুংফু বিলুপ্ত করার চক্রান্ত করে।",'যুদ্ধের সময় পো তার শৈশবের হারিয়ে যাওয়া স্মৃতি ফিরে পায়। জানতে পারে কীভাবে তার মা নিজের জীবন দিয়ে তাকে বাঁচিয়েছিলেন। এই সত্য মেনে নিয়ে পো পরম মনঃশান্তি বা "ইনার পিস" অর্জন করে।',"সমুদ্রের বুকে পো তার পরম মনঃশান্তি ব্যবহার করে শূন্যে ধেয়ে আসা জলন্ত কামানের গোলা ধরে ফেলে এবং তা দিয়ে শেনের যুদ্ধজাহাজ ধ্বংস করে দেয়।"]},quote:{text:{en:"Your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story — who you choose to be.",bn:"তোমার গল্পের শুরুটা হয়তো সুন্দর ছিল না, কিন্তু তা দিয়ে তোমাকে মাপা যায় না। গল্পের বাকি অংশটুকু তুমি কী বেছে নাও, সেটাই আসল।"},author:{en:"The Soothsayer",bn:"দ্য সুথসেয়ার (ভবিষ্যদ্বক্তা)"}},keyMoment:{en:"Catching Cannonballs with Water-like Inner Peace",bn:"ইনার পিস দিয়ে কামানের গোলা ঘুরিয়ে ফিরিয়ে দেওয়া"},badge:{en:"Inner Peace Mastery",bn:"পরম মনঃশান্তি অর্জন"},visualTheme:"red"},{id:4,movie:"Kung Fu Panda 3",title:{en:"The Spirit Realm & Master of Chi",bn:"স্পিরিট রিয়েলম ও চি শক্তির চূড়ান্ত বিজয়"},subtitle:{en:"Reconnecting with Panda Heritage to Defeat General Kai",bn:"জেনারেল কাইকে পরাস্ত করতে আসল পান্ডা বংশের পাশে দাঁড়ানো"},location:{en:"Secret Panda Village & Spirit Realm",bn:"পাহাড়ের গোপন পান্ডা গ্রাম ও আধ্যাত্মিক জগত"},storyText:{en:["General Kai escaped the Spirit Realm after capturing the Chi of all ancient kung fu masters. Meanwhile, Po reunited with his biological father Li Shan, who brought him to the hidden Panda Village.","Po realized that mastering Chi is not about turning pandas into rigid warriors, but empowering each panda to be their true authentic self — rolling, eating, and playing with passion.","When Kai threatened his family, Po dragged Kai into the Spirit Realm, where the combined Chi of the Panda Village transformed Po into a towering golden Chi Dragon, defeating Kai forever."],bn:["স্পিরিট রিয়েলম থেকে পালিয়ে আসা জেনারেল কাই সমস্ত মাস্টারের চি শক্তি চুরি করে নেয়। ঠিক সেই সময় পো তার জন্মদাতা বাবা লি শানের সাথে গোপন পান্ডা গ্রামে যায়।","পো বুঝতে পারে চি শক্তি অর্জনের জন্য পান্ডাদের আলাদা কোনো সামরিক ট্রেনিং দরকার নেই, তাদের নিজস্ব পান্ডাসুলভ আনন্দ ও বৈশিষ্ট্যই তাদের শক্তি।","কাই যখন সবাইকে আক্রমণ করে, পো কাইকে স্পিরিট রিয়েলমে নিয়ে যায়। পুরো পান্ডা গ্রামের সম্মিলিত ভালবাসা ও চি শক্তিতে পো এক সুবিশাল সোনার চি ড্রাগনে রূপান্তরিত হয়ে কাইকে চিরতরে ধ্বংস করে।"]},quote:{text:{en:"I'm not a big fat panda. I'm THE big fat panda!",bn:"আমি স্রেফ কোনো সাধারণ মোটাসোটা পান্ডা নই, আমি হলাম সেই একমাত্র লেজেন্ডারি পান্ডা!"},author:{en:"Po, Master of Chi",bn:"পো, চি শক্তির মাস্টার"}},keyMoment:{en:"Summoning the Giant Golden Chi Dragon",bn:"গোল্ডেন চি ড্রাগনের অবতরণ"},badge:{en:"Master of Chi",bn:"মাস্টার অফ চি"},visualTheme:"purple"},{id:5,movie:"Kung Fu Panda 4",title:{en:"The Spiritual Leader & The Chameleon",bn:"স্পিরিচুয়াল লিডার ও দ্য কেমেলিয়নের পতন"},subtitle:{en:"Passing the Staff of Wisdom to Zhen",bn:"জ্ঞানদণ্ড হস্তান্তরের মাধ্যমে নতুন ড্রাগন ওয়ারিয়র নির্বাচন"},location:{en:"Juniper City & The Spirit Realm Gates",bn:"জুনিপার সিটি ও স্পিরিট রিয়েলম গেট"},storyText:{en:["Master Shifu informed Po that he must step up to become the Spiritual Leader of the Valley of Peace, requiring him to choose a worthy successor to take over as Dragon Warrior.","Po teamed up with Zhen, a street-smart corsac fox thief, to track down The Chameleon — a shape-shifting sorceress who summoned past villains to absorb their combat talents.","By trusting Zhen and combining his spiritual wisdom with her agility, Po stripped the Chameleon of her stolen power, restored peace to China, and passed the Wisdom Staff to Zhen as the new Dragon Warrior."],bn:['মাস্টার শিফু পো-কে জানান যে এখন তার ভ্যালি অফ পিসের আত্মিক নেতা বা "স্পিরিচুয়াল লিডার" হওয়ার সময় এসেছে এবং তার জায়গায় নতুন ড্রাগন ওয়ারিয়র নির্বাচন করতে হবে।','পো চতুর শিয়াল ঝেনের সাথে জোট বেঁধে রূপ পরিবর্তনকারী জাদুকরী "দ্য কেমেলিয়ন"-এর মুখোমুখি হয়, যিনি স্পিরিট রিয়েলম থেকে পুরনো খলনায়কদের ডেকে এনে তাদের শক্তি চুরি করছিলেন।',"ঝেনকে বিশ্বাস করে ও যৌথ কুংফু কৌশলে পো দ্য কেমেলিয়নকে পরাস্ত করে। এরপর পো সগৌরবে ঝেনকে পরবর্তী ড্রাগন ওয়ারিয়র হিসেবে তৈরি করার দায়িত্ব নেয়।"]},quote:{text:{en:"Change is not a loss of who you were, but an opening to who you can become.",bn:"পরিবর্তন মানে পুরনোকে হারিয়ে ফেলা নয়, বরং নতুন সম্ভাবনার দুয়ার খুলে দেওয়া।"},author:{en:"Po Ping",bn:"পো পিং"}},keyMoment:{en:"Passing Wisdom Staff to Zhen",bn:"নতুন ড্রাগন ওয়ারিয়র ঝেনকে জ্ঞানদণ্ড প্রদান"},badge:{en:"Spiritual Ascension",bn:"আধ্যাত্মিক উত্তরণ"},visualTheme:"emerald"}];function uT(){const[t,e]=Xe.useState("en"),n=()=>{e(i=>i==="en"?"bn":"en")};return x.jsxs("div",{className:"relative min-h-screen bg-slate-950 text-slate-100 selection:bg-gold-500 selection:text-slate-950 font-sans overflow-x-hidden",children:[x.jsx(oT,{}),x.jsxs("div",{className:"relative z-10",children:[x.jsx(F_,{lang:t,onToggleLang:n}),x.jsx(eT,{lang:t}),x.jsx(tT,{chapters:cT,lang:t}),x.jsx(sT,{lang:t}),x.jsx(iT,{characters:lT,lang:t}),x.jsx(nT,{lang:t}),x.jsx(rT,{lang:t}),x.jsx(aT,{lang:t})]})]})}Vc.createRoot(document.getElementById("root")).render(x.jsx(dv.StrictMode,{children:x.jsx(uT,{})}));
