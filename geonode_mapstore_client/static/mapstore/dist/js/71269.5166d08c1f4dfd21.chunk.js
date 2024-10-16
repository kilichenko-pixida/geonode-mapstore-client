"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[71269],{362520:(e,t,r)=>{r.d(t,{dn:()=>n,NS:()=>o,Kn:()=>i,FV:()=>u,Vd:()=>l,yS:()=>c});var n="MAP_LAYOUT:UPDATE_MAP_LAYOUT",o="MAP_LAYOUT:UPDATE_DOCK_PANELS",i="MAP_LAYOUT:FORCE_UPDATE_MAP_LAYOUT";function u(e){return{type:n,layout:e}}function l(e){return{type:o,name:e,action:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"add",location:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"right"}}function c(){return{type:i}}},55105:(e,t,r)=>{r.d(t,{Ss:()=>b,Nr:()=>m,QJ:()=>d,ic:()=>g,Jz:()=>v,VM:()=>h,CF:()=>O,Ju:()=>S,Fc:()=>P,gQ:()=>j});var n=r(91175),o=r.n(n),i=r(288306),u=r.n(i),l=r(800827),c=r(552259),a=r(737275);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return(t=function(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){return e.maplayout&&e.maplayout.layout||{}},m=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},d=function(e){return e.maplayout&&e.maplayout.boundingSidebarRect||{}},g=u()((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=b(e),o=d(e);return n&&Object.keys(n).filter((function(e){return t[e]})).reduce((function(e,t){var i;return p(p({},e),{},y({},t,r&&null!==(i=o[t])&&void 0!==i?i:n[t]))}),{})||{}}),(function(e,t,r){return JSON.stringify(b(e))+JSON.stringify(d(e))+JSON.stringify(t)+(r?"_isDock":"")})),v=function(e){var t;return!(null===(t=b(e))||void 0===t||!t.rightPanel)},h=function(e){var t,r=a.ZP.getConfigProp("mapLayout")||c.Ur;return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=b(e);return!!o()(t.filter((function(e){return r[e.key]})).map((function(e){return"not"===e.type?r[e.key]!==e.value&&r[e.key]:r[e.key]===e.value})))}(e,[{key:"bottom",value:null!==(t=null==r?void 0:r.bottom.sm)&&void 0!==t?t:0,type:"not"}])},O=function(e){var t=(0,l.Od)(e),r=m(e);return r&&t&&t.size&&{left:(0,c.pb)(r.left,t.size.width),bottom:(0,c.pb)(r.bottom,t.size.height),right:(0,c.pb)(r.right,t.size.width),top:(0,c.pb)(r.top,t.size.height)}},S=function(e){var t,r;return null!==(t=null==e||null===(r=e.maplayout)||void 0===r?void 0:r.dockPanels)&&void 0!==t?t:{left:[],right:[]}},P=function(e){return g(e,{height:!0,right:!0},!0)},j=function(e){return g(e,{right:!0},!0)}},957914:(e,t,r)=>{r.d(t,{Z:()=>n.Z});var n=r(205342)},926976:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(124852),o=r.n(n),i=r(45697),u=r.n(i),l=r(271418),c=r(805346),a=r(693473),s=r(957914),f=r(597610),p=r(17594),y=r(51605),b=r(532425),m=r(697111),d=r(993451);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}var v=["onChange","value"];function h(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||E(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return(t=function(e){var t=function(e){if("object"!=g(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==g(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,l=[],c=!0,a=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(a)throw o}}return l}}(e,t)||E(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){if(e){if("string"==typeof e)return w(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A.apply(null,arguments)}var C=(0,d.Z)("placeholder")(l.NI),T=(0,m.Z)("onChange","value")((function(e){var t=e.onChange,r=e.value,n=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,v);return o().createElement(C,A({},n,{value:r,onChange:function(e){return t(e.target.value)}}))}));function k(e){var t=e.request,r=e.responseToEntries,i=e.pageSize,u=e.style,m=e.placeholderId,d=e.onSelect,g=e.onClose,v=e.titleId,O=e.noResultId,P=e.loading,E=e.params,w=(0,n.useRef)(),A=j((0,n.useState)([]),2),C=A[0],k=A[1],N=j((0,n.useState)(!1),2),I=N[0],D=N[1],L=j((0,n.useState)(1),2),Z=L[0],R=L[1],_=j((0,n.useState)(!1),2),z=_[0],M=_[1],U=j((0,n.useState)(""),2),J=U[0],F=U[1],H=(0,n.useRef)(),Y=I||!!P;(0,f.Z)({scrollContainer:w.current,shouldScroll:function(){return!I&&z},onLoad:function(){R(Z+1)}});var q=(0,n.useRef)();return q.current=function(e){!I&&t&&(w.current&&e.reset&&(w.current.scrollTop=0),D(!0),t(S(S({},E),{},{q:J,page:e.page,pageSize:i})).then((function(t){if(H.current){var n=r(t);M(t.isNextPageAvailable),k(1===e.page?n:[].concat(h(C),h(n))),D(!1)}})).catch((function(){H.current&&D(!1)})))},(0,n.useEffect)((function(){return H.current=!0,function(){H.current=!1}}),[]),(0,n.useEffect)((function(){Z>1&&q.current({page:Z})}),[Z]),(0,n.useEffect)((function(){R(1),q.current({page:1,reset:!0})}),[J]),o().createElement("div",{className:"gn-resources-catalog",style:u},g&&o().createElement("div",{className:"gn-resources-catalog-head"},o().createElement("div",{className:"gn-resources-catalog-title"},o().createElement(c.Z,{msgId:v})),o().createElement(a.Z,{className:"square-button",onClick:function(){return g()}},o().createElement(l.gG,{glyph:"1-close"}))),o().createElement("div",{className:"gn-resources-catalog-filter"},o().createElement(T,{placeholder:m,value:J,debounceTime:300,onChange:function(e){return F(e)}}),J&&!I&&o().createElement(a.Z,{onClick:function(){return F("")}},o().createElement(p.Z,{name:"times"})),I&&o().createElement(y.Z,null)),o().createElement("div",{ref:w,className:"gn-resources-catalog-body"},o().createElement("ul",{className:"gn-resources-catalog-list"},C.map((function(e){return o().createElement("li",{key:e.pk},o().createElement(s.Z,{data:e,readOnly:!0,layoutCardsStyle:"list",onClick:function(){return function(e){d(e)}(e)}}))})),0===C.length&&!I&&o().createElement("div",{className:"gn-resources-catalog-alert"},o().createElement(c.Z,{msgId:O})))),Y&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(b.Z,{size:70})))}k.propTypes={request:u().func,responseToEntries:u().func,pageSize:u().number,placeholderId:u().string,onClose:u().func,onSelect:u().func,titleId:u().string,noResultId:u().string},k.defaultProps={responseToEntries:function(e){return e.resources},pageSize:10,placeholderId:"gnviewer.resourcesCatalogFilterPlaceholder",titleId:"gnviewer.resourcesCatalogTitle",noResultId:"gnviewer.resourcesCatalogEntriesNoResults",onSelect:function(){}};const N=k},229698:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(782904),o=r(362520),i=r(55105),u=r(737275),l=r(226735);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e){if("object"!=c(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p={gnUpdateDatasetsCatalogMapLayout:function(e,t){return e.ofType(o.dn,n.At).filter((function(){var e,r,n;return null===(e=t.getState())||void 0===e||null===(r=e.controls)||void 0===r||null===(n=r.datasetsCatalog)||void 0===n?void 0:n.enabled})).filter((function(e){return e.source!==l.O.PANEL})).map((function(e){var r,n,c,a=e.layout,f=(0,u.u8)("mapLayout")||{left:{sm:300,md:500,lg:600},right:{md:658},bottom:{sm:30}},p=(0,i.QJ)(t.getState()),y=null!==(r=t.getState())&&void 0!==r&&null!==(n=r.controls)&&void 0!==n&&null!==(c=n.drawer)&&void 0!==c&&c.enabled?f.left.sm:null,b=(0,o.FV)(s(s(s(s({},(0,i.Ss)(t.getState())),a),{},{right:f.right.md},y&&{left:y}),{},{boundingMapRect:s(s({},(null==a?void 0:a.boundingMapRect)||{}),{},{right:f.right.md},y&&{left:y}),boundingSidebarRect:s(s({},p),null==a?void 0:a.boundingSidebarRect)}));return s(s({},b),{},{source:l.O.PANEL})}))}}},597610:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(124852);const o=function(e){var t=e.scrollContainer,r=e.shouldScroll,o=void 0===r?function(){return!0}:r,i=e.onLoad,u=e.offset,l=void 0===u?200:u,c=(0,n.useRef)({});c.current=function(){(t?t.scrollTop:document.body.scrollTop||document.documentElement.scrollTop)+(t?t.clientHeight:window.innerHeight)>=(t?t.scrollHeight:document.body.scrollHeight||document.documentElement.scrollHeight)-l&&o()&&i()},(0,n.useEffect)((function(){var e=t||window;function r(){c.current()}return e.addEventListener("scroll",r),function(){e.removeEventListener("scroll",r)}}),[t])}},226735:(e,t,r)=>{r.d(t,{O:()=>n});var n={PANEL:"PANEL"}}}]);