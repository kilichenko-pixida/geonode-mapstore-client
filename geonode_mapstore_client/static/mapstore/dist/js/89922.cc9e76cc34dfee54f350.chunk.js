(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[89922,47310],{921914:(t,e,r)=>{"use strict";r.d(e,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>a,Pn:()=>c,DZ:()=>f,e8:()=>l,E0:()=>p,F9:()=>y,X_:()=>s,pb:()=>b,Re:()=>d,ih:()=>v,xy:()=>m,jL:()=>g,oz:()=>O,ph:()=>E,lF:()=>I,gG:()=>P,cb:()=>T,GI:()=>_,B1:()=>h,fv:()=>S,gc:()=>A,zX:()=>w,ZF:()=>j,Zb:()=>D,DW:()=>F,Xp:()=>N,Fm:()=>R,sV:()=>M,LU:()=>k,XP:()=>C,WU:()=>L,mK:()=>G,g:()=>U,ws:()=>Y,HP:()=>H,aN:()=>q,Pg:()=>W,u0:()=>Z,TM:()=>B,PM:()=>K,lK:()=>z,sv:()=>Q,MO:()=>V,oO:()=>J,Mc:()=>$,Zw:()=>x,RA:()=>tt,am:()=>et,ZM:()=>rt,wm:()=>nt,Y$:()=>ot,Qu:()=>it,kT:()=>ut});var n=r(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",f="PURGE_MAPINFO_RESULTS",l="CHANGE_MAPINFO_FORMAT",p="SHOW_MAPINFO_MARKER",y="HIDE_MAPINFO_MARKER",s="SHOW_REVERSE_GEOCODE",b="HIDE_REVERSE_GEOCODE",d="NO_QUERYABLE_LAYERS",v="CLEAR_WARNING",m="FEATURE_INFO_CLICK",g="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",O="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",E="TOGGLE_MAPINFO_STATE",I="UPDATE_CENTER_TO_MARKER",P="IDENTIFY:CHANGE_PAGE",T="IDENTIFY:CLOSE_IDENTIFY",_="IDENTIFY:CHANGE_FORMAT",h="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",S="IDENTIFY:EDIT_LAYER_FEATURES",A="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",w="IDENTIFY:SET_MAP_TRIGGER",j="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",D="IDENTIFY:SET_SHOW_IN_MAP_POPUP",F="IDENTIFY:IDENTIFY_IS_MOUNTED",N="IDENTIFY:INIT_PLUGIN";function R(t,e,r,n,i){return{type:o,data:e,reqId:t,requestParams:r,layerMetadata:n,layer:i}}function M(t,e,r,n){return{type:i,error:e,reqId:t,requestParams:r,layerMetadata:n}}function k(){return{type:d}}function C(){return{type:v}}function L(t,e){return{type:c,reqId:t,request:e}}function G(t){return{type:a,enabled:t}}function U(){return{type:f}}function Y(t){return{type:l,infoFormat:t}}function H(){return{type:p}}function q(){return{type:y}}function X(t){return{type:s,reverseGeocodeData:t.data}}function W(t){return function(e){n.Z.reverseGeocode(t).then((function(t){e(X(t))})).catch((function(t){e(X(t))}))}}function Z(){return{type:b}}function B(){return{type:E}}function K(t){return{type:I,status:t}}function z(t,e){return{type:m,point:t,layer:e,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,ignoreVisibilityLimits:arguments.length>5&&void 0!==arguments[5]&&arguments[5]}}function Q(t){return{type:g,point:t}}function V(t){return{type:O,enabled:t}}function J(t){return{type:P,index:t}}var $=function(){return{type:T}},x=function(t){return{type:_,format:t}},tt=function(t){return{type:h,showCoordinateEditor:t}},et=function(t){return{type:S,layer:t}},rt=function(t){return{type:A,query:t}},nt=function(t){return{type:w,trigger:t}},ot=function(t){return{type:D,value:t}},it=function(t){return{type:F,isMounted:t}},ut=function(t){return{type:N,cfg:t}}},647310:(t,e,r)=>{"use strict";r.d(e,{Z:()=>l});var n=r(375875),o=r.n(n),i=r(472500),u=r.n(i),a=r(727418),c=r.n(a),f={format:"json",bounded:0,polygon_geojson:1,priority:5};const l={geocode:function(t,e){var r=c()({q:t},f,e||{}),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(t,e){var r=c()({lat:t.lat,lon:t.lng},e||{},f),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},879504:(t,e,r)=>{"use strict";r.d(e,{Z:()=>I});var n=r(49977),o=r.n(n),i=r(91175),u=r.n(i),a=r(53001),c=r(782904),f=r(931273),l=r(580416),p=r(675110),y=r(31935),s=r(680833),b=r(577215);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){E(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function E(t,e,r){return(e=function(t){var e=function(t){if("object"!=d(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==d(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const I={accessMetadataExplorer:function(t){return t.ofType(a.xT).switchMap((function(){return o().Observable.of((0,c.Xg)("metadataexplorer","enabled",!0),(0,a.vw)(!1),(0,f.Dw)("default_map_backgrounds"))}))},addBackgroundPropertiesEpic:function(t){return t.ofType(a.oQ).switchMap((function(t){var e=t.modalParams,r=o().Observable.of((0,a.$c)(O(O({},e),{},{loading:!1})));return e.layer&&"wms"===e.layer.type?o().Observable.of((0,a.$c)(O(O({},e),{},{loading:!0}))).concat((0,s.kB)(e.layer).switchMap((function(t){return o().Observable.of((0,a.$c)(O(O({},e),{},{loading:!1,capabilities:(0,b.Br)(t)})))})).catch((function(){return r}))):r}))},setCurrentBackgroundLayerEpic:function(t,e){return t.ofType(a.Wv).switchMap((function(t){var r,n=t.layerId,i=e.getState(),u=(0,p.CA)(i,n);return(r=o().Observable).of.apply(r,v(u&&"background"===u.group?[(0,c.Xg)("backgroundSelector","tempLayer",u),(0,c.Xg)("backgroundSelector","currentLayer",u)]:[]))}))},updateTempBackgroundLayerEpic:function(t,e){return t.ofType(a.R3).take(1).switchMap((function(r){var n=r.id;return t.ofType(l.K$).switchMap((function(){var t,r=e.getState(),i=(0,p.CA)(r,n);return(0,p.DP)(r).id===i.id?(t=o().Observable).of.apply(t,v(i&&"background"===i.group?[(0,c.Xg)("backgroundSelector","tempLayer",i),(0,c.Xg)("backgroundSelector","currentLayer",i)]:[])):o().Observable.of((0,c.Xg)("backgroundSelector","tempLayer",i))}))}))},backgroundAddedEpic:function(t,e){return t.ofType(a.gC).mergeMap((function(t){var r=t.layerId,n=e.getState(),i=(0,p.CA)(n,r);return i?o().Observable.of((0,l.He)(i.id,{visibility:!0}),(0,a.ke)(i.id),(0,a.V3)()):o().Observable.empty()}))},backgroundEditedEpic:function(t,e){return t.ofType(a.dG).mergeMap((function(t){var r=t.layerId,n=e.getState();return(0,p.CA)(n,r)?o().Observable.of((0,a.V3)()):o().Observable.empty()}))},backgroundRemovedEpic:function(t,e){return t.ofType(a.H_).mergeMap((function(t){var r=t.backgroundId,n=e.getState(),i=(0,p.CA)(n,r),c=(0,y.TP)(n)||[],f=(0,p.DP)(n)||{},s=r===f.id?u()(c.filter((function(t){return t.id!==r&&!t.invalid}))):f;return i?o().Observable.of((0,l.ZF)(r,"layers"),(0,l.He)(s.id,{visibility:!0}),(0,a.ke)(s.id)):o().Observable.empty()}))},syncSelectedBackgroundEpic:function(t){return t.ofType(a.K2).take(1).switchMap((function(e){var r=e.id;return t.ofType(l.oE).filter((function(t){return t.layer.id===r})).switchMap((function(){return o().Observable.of((0,a.pW)(r))})).takeUntil(t.ofType(a.gC))}))}}},680833:(t,e,r)=>{"use strict";r.d(e,{kB:()=>g,HI:()=>O});var n=r(472500),o=r.n(n),i=(r(91175),r(490173)),u=r(49977),a=r(501157),c=r(375875),f=r.n(c),l=(r(916651),r(624262)),p=r(510284),y=r(233044),s=r(611847);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return(e=function(t){var e=function(t){if("object"!=b(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==b(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}i.default;var g=function(t){return u.Observable.defer((function(){return a.ZP.getCapabilities((0,l.Fh)(t))})).let(p.oB).map((function(e){return a.ZP.parseLayerCapabilities(e,t)}))},O=function(t){return function(t){return u.Observable.defer((function(){return f().get(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,r=t.search,n=void 0===r?{}:r,i=t.url,u=o().parse((0,s.eW)(n.url||i),!0);return o().format(v(v({},u),{},{search:void 0,query:v(v({},u.query),{},{service:"WMS",version:a.ID,layers:e,outputFormat:"application/json",request:"DescribeLayer"})}))}(t))})).let(p.oB)}(t).map((function(t){var e=t.data,r=void 0===e?{}:e;return r&&r.layerDescriptions[0]})).map((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).owsURL;return v(v({},t),{},{params:{},search:e?{type:"wfs",url:(0,y.cleanAuthParamsFromURL)(e)}:void 0})}))}},55105:(t,e,r)=>{"use strict";r.d(e,{Ss:()=>b,Nr:()=>d,QJ:()=>v,ic:()=>m,Jz:()=>g,VM:()=>O,CF:()=>E,Ju:()=>I,Fc:()=>P,gQ:()=>T});var n=r(91175),o=r.n(n),i=r(288306),u=r.n(i),a=r(800827),c=r(552259),f=r(737275);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return(e=function(t){var e=function(t){if("object"!=l(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==l(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=function(t){return t.maplayout&&t.maplayout.layout||{}},d=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},v=function(t){return t.maplayout&&t.maplayout.boundingSidebarRect||{}},m=u()((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=b(t),o=v(t);return n&&Object.keys(n).filter((function(t){return e[t]})).reduce((function(t,e){var i;return y(y({},t),{},s({},e,r&&null!==(i=o[e])&&void 0!==i?i:n[e]))}),{})||{}}),(function(t,e,r){return JSON.stringify(b(t))+JSON.stringify(v(t))+JSON.stringify(e)+(r?"_isDock":"")})),g=function(t){var e;return!(null===(e=b(t))||void 0===e||!e.rightPanel)},O=function(t){var e,r=f.ZP.getConfigProp("mapLayout")||c.Ur;return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=b(t);return!!o()(e.filter((function(t){return r[t.key]})).map((function(t){return"not"===t.type?r[t.key]!==t.value&&r[t.key]:r[t.key]===t.value})))}(t,[{key:"bottom",value:null!==(e=null==r?void 0:r.bottom.sm)&&void 0!==e?e:0,type:"not"}])},E=function(t){var e=(0,a.Od)(t),r=d(t);return r&&e&&e.size&&{left:(0,c.pb)(r.left,e.size.width),bottom:(0,c.pb)(r.bottom,e.size.height),right:(0,c.pb)(r.right,e.size.width),top:(0,c.pb)(r.top,e.size.height)}},I=function(t){var e,r;return null!==(e=null==t||null===(r=t.maplayout)||void 0===r?void 0:r.dockPanels)&&void 0!==e?e:{left:[],right:[]}},P=function(t){return m(t,{height:!0,right:!0},!0)},T=function(t){return m(t,{right:!0},!0)}}}]);