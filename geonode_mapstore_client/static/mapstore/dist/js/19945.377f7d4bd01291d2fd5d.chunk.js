(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[19945],{893526:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(319180),o=r(91812),a=r(937981),i=r(469705),s=r(867076),c=r(57068),u=r(1979),l=r(323010),p=r(461928);const f=(0,s.compose)(i.Z,(0,o.Z)(0),n.Z,l.ZP,u.yM,a.Z,c.e)(p.Z)},323010:(e,t,r)=>{"use strict";r.d(t,{dV:()=>x,ZP:()=>_});var n=r(124852),o=r.n(n),a=r(867076),i=r(423570),s=r.n(i),c=r(755745),u=r.n(c),l=r(165442),p=r.n(l),f=r(747359),d=r(1979),y=r(618446),m=r.n(y),b=r(624262),v=r(107412),O=r(49977),h=r(249243),g=r(313311),j=r.n(g),w=r(171703),P=r(134990),S=r(866113),C=["rawPos"],E=["PopupSupport","tools"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(this,arguments)}function k(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e){return e&&0===e.indexOf("geostory-vector")}var x=(0,a.compose)((0,w.connect)((function(e){return{sections:(0,S.NR)(e)}}),{onClickMarker:P.Vx}),(0,a.withHandlers)({onClickMarker:function(e){var t=e.onClickMarker,r=void 0===t?function(){}:t,n=e.sections,a=void 0===n?{}:n;return function(e,t,n){var i=j()(e,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.queryParams,n=(r=void 0===r?{}:r).request,o=e.layerMetadata,a=(o=void 0===o?{}:o).title;return!n&&a.toLowerCase()===t}))||{},s=i.response,c=(s=void 0===s?{}:s).features,u=T(c=void 0===c?[]:c,1)[0],l=(u=void 0===u?{}:u).contentRefId,p=j()(a,(function(e){var t=e.contents;return j()(t,{id:l})})),f={popups:[]};if(p){var d=j()(p.contents,{id:l})||{},y=d.id,m=d.title,b=void 0===m?"":m;r('sections[{"id":"'.concat(p.id,'"}].contents[{"id":"').concat(y,'"}].carouselToggle'),!0),b&&(f={popups:n.map((function(e){return Z(Z({},e),{},{component:function(){return o().createElement("div",{className:"ms-geostory-carousel-viewer"},b)}})}))})}return f}}})),F=(0,a.mapPropsStream)((function(e){var t=(0,a.createEventHandler)(),r=t.stream,n=t.handler;return r.withLatestFrom(e.map((function(e){return{map:e.map,layers:e.layers,options:e.options}})).distinctUntilChanged((function(e,t){return m()(e,t)}))).switchMap((function(e){var t=T(e,2),r=t[0],n=r.point,o=r.layerInfo,a=t[1],i=a.map,c=a.layers,l=void 0===c?[]:c,f=a.options,y=(f=void 0===f?{}:f).mapOptions,m=(y=void 0===y?{}:y).mapInfoFormat,g=void 0===m?(0,d.GA)():m,j=l.filter((function(e){return(0,b.T4)(e,i.resolution)&&(0,v.y_)(e)}));D(o)&&(j=j.filter((function(e){var t=e.id;return o===t})));var w=["SLD_BODY"],P=["buffer","cql_filter","filter","propertyName"];return 0===j.length?O.Observable.of({requests:[{}],responses:[{response:{features:[]}}],validResponses:[]}):O.Observable.from(j).mergeMap((function(e){var t=(0,v.Fm)(e,{format:g,map:i,point:n,currentLocale:"en-US"}),r=t.url,o=t.request,a=t.metadata,c=r,l=o,f=Z(Z({},(0,v.K7)(e,P,w)),l),d=s()();return(r?(0,h.y)(c,f,e).map((function(e){return e.data.exceptions?{reqId:d,exceptions:e.data.exceptions,queryParams:l,layerMetadata:a}:{data:e.data,reqId:d,queryParams:l,layerMetadata:Z(Z({},a),{},{features:e.features,featuresCrs:e.featuresCrs})}})):O.Observable.of(function(e,t,r){var n={type:"Feature",properties:{},geometry:{type:"Point",coordinates:[t.lng,t.lat]}},o=r&&r.units;switch(o){case"m":default:o="meters";break;case"deg":o="degrees";break;case"mi":o="miles"}var a=r&&r.resolution||1,i=u()(n,(r.buffer||1)*a,o);return{data:{crs:null,features:(e.features||[]).filter((function(e){try{return"FeatureCollection"===e.type&&e.features&&e.features.length?e.features.reduce((function(e,t){var n=t.properties.useGeodesicLines&&t.properties.geometryGeodesic?Z(Z({},t),{},{geometry:t.properties.geometryGeodesic}):t;return e||p()(i,a&&r.buffer&&o?u()(n,1,"meters"):n)}),!1):p()(i,a&&r.buffer&&o?u()(e,1,"meters"):e)}catch(e){return!1}})),totalFeatures:"unknown",type:"FeatureCollection"},queryParams:t,layerMetadata:r}}(e,o,a))).catch((function(e){return{error:e.data||e.statusText||e.status,reqId:d,queryParams:l,layerMetadata:a}})).startWith({start:!0,reqId:d,request:f})})).scan((function(e,t){var r=e.requests,n=e.responses,a=e.validResponses;if(t.start){var i=t.reqId,s=t.request;return{requests:r.concat({reqId:i,request:s}),responses:n,validResponses:a}}var c=t.data,u=t.queryParams,l=t.layerMetadata,p=(0,v.Te)(g),f=n.concat({response:c,queryParams:u,layerMetadata:l});return{requests:r,validResponses:p.getValidResponses(f),responses:f,layerInfo:o}}),{requests:[],responses:[],validResponses:[],layerInfo:o})})).startWith({requests:[],responses:[]}).combineLatest(e,(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Z(Z({},t),{},{mapInfo:e,getFeatureInfoHandler:n})}))}));const _=(0,a.branch)((function(e){var t=e.map,r=(t=void 0===t?{}:t).mapInfoControl,n=void 0!==r&&r;return!e.isDrawEnabled&&n}),(0,a.compose)(F,(0,a.withStateHandlers)({popups:[]},{onClick:function(e,t){var r=t.getFeatureInfoHandler,n=void 0===r?function(){}:r,o=t.map,a=(o=void 0===o?{}:o).mapInfoControl;return function(e,t){var r=e.rawPos,o=void 0===r?[]:r,i=k(e,C);return D(t)||a?(n({point:i,layerInfo:t}),{popups:[{position:{coordinates:o},id:s()()}]}):{popups:[]}}},onPopupClose:function(){return function(){return{popups:[]}}}}),(0,a.withPropsOnChange)(["mapInfo","popups"],(function(e){var t=e.mapInfo,r=e.popups,n=e.options,a=(n=void 0===n?{}:n).mapOptions,i=(a=void 0===a?{}:a).mapInfoFormat,s=void 0===i?(0,d.GA)():i,c=e.onClickMarker,u=void 0===c?function(){}:c,l=t.responses,p=t.requests,y=t.validResponses,m=t.layerInfo;return D(m)?u(y,m,r):{popups:r.map((function(e){return Z(Z({},e),{},{component:function(){return o().createElement(f.Z,{renderValidOnly:!0,responses:l,requests:p,validResponses:y,format:s,showEmptyMessageGFI:!0,missingResponses:(p||[]).length-(l||[]).length})}})}))}})),(0,a.withPropsOnChange)(["plugins","onPopupClose","popups"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.plugins,r=e.popups,n=e.onPopupClose,a=t.PopupSupport,i=t.tools,s=void 0===i?{}:i,c=k(t,E);if(!a)return{};var u=function(e){return o().createElement(a,I({},e,{popups:r,onPopupClose:n}))};return{plugins:Z(Z({},c),{},{tools:Z(Z({},s),{},{popup:u})})}}))))},916788:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(124852),o=r.n(n),a=r(675263),i=r.n(a),s=r(1206),c=r.n(s),u=r(196797),l=r.n(u),p=r(867076);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function O(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(s,e);var t,r,n,a,i=(n=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(n);if(a){var r=h(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return O(this,e)});function s(){return m(this,s),i.apply(this,arguments)}return t=s,(r=[{key:"componentDidMount",value:function(){l()(this._node)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.src!==this.props.src&&l()(this._node)}},{key:"render",value:function(){var e=this,t=this.props,r=t.id,n=t.src,a=t.fit,i=void 0===a?"cover":a,s=t.enableFullscreen,u=void 0===s||s,l=t.fullscreen,p=t.onClick,f=t.description,d=t.showCaption,m=t.caption,b=void 0===m?f:m,v=t.credits,O=t.loaderStyle,h=this.props.loaderComponent,g=this.props.errorComponent;return o().createElement("div",{id:r,className:"ms-media ms-media-image"},n&&"error"!==this.props.status&&o().createElement("img",{ref:function(t){e._node=t},src:n,onLoad:function(){return e.props.onChangeStatus("loaded")},onError:function(){return e.props.onChangeStatus("error")},onClick:u?function(){return p(!0)}:void 0,style:{objectFit:i,fontFamily:"object-fit: ".concat(i),cursor:u?"pointer":"default"}}),n&&!this.props.status&&h&&o().createElement(h,{style:y({},O)}),"error"===this.props.status&&g&&o().createElement(g,null),v&&o().createElement("div",{className:"ms-media-credits"},o().createElement("small",null,v)),d&&b&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,b)),u&&l?o().createElement(c(),{mainSrc:n,onCloseRequest:function(){return p(!1)}}):null)}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(n.Component);g(j,"propTypes",{src:i().string,id:i().string,fit:i().string,description:i().string,showCaption:i().bool,credits:i().string,altText:i().string,enableFullscreen:i().bool,fullscreen:i().bool,onClick:i().func,onChangeStatus:i().func,status:i().string,loaderComponent:i().oneOfType([i().element,i().func]),errorComponent:i().oneOfType([i().element,i().func]),caption:i().string,loaderStyle:i().object});const w=(0,p.compose)((0,p.withState)("fullscreen","onClick",!1),(0,p.withState)("status","onChangeStatus",""))(j)},225138:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(124852),o=r.n(n),a=r(867076),i=r(757588),s=r(893526),c=r(192579),u=r(727693),l=r(399534),p=r(815135),f=r(580628),d=r(282467),y=["id","map","fit","editMap","onMapViewChanges","eventHandlers","expandable","active","setActive","width","height","size","showCaption","caption","mapType","onMapTypeLoaded","layers","children"],m=["layers","mapOptions","description"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function v(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var P=(0,p.Z)(d.Z);const S=(0,a.compose)((0,a.withState)("active","setActive",!1),f.Z)((function(e){var t=e.id,r=e.map,a=void 0===r?{layers:[u.D0]}:r,p=e.fit,f=e.editMap,d=void 0!==f&&f,O=e.onMapViewChanges,h=e.eventHandlers,j=e.expandable,S=void 0!==j&&j,C=e.active,E=e.setActive,I=e.width,k=e.height,T=e.size,M=e.showCaption,q=e.caption,Z=e.mapType,A=void 0===Z?"leaflet":Z,D=e.onMapTypeLoaded,x=e.layers,F=e.children,_=w(e,y),R=a.data?a.data:a,N=R.layers,L=void 0===N?[]:N,z=R.mapOptions,V=void 0===z?{}:z,H=R.description,W=w(R,m),G=q||H,U=S?C?{zoomControl:!1,interactive:!0,mapOptions:{scrollWheelZoom:!0,interactions:{mouseWheelZoom:!0,dragPan:!0}}}:{zoomControl:!1,interactive:!1,mapOptions:{scrollWheelZoom:!1,interactions:{mouseWheelZoom:!1,dragPan:!1}}}:{mapOptions:V},B=d?{mapOptions:g(g({},V),{},{interactions:g(g({},V.interactions),{},{mouseWheelZoom:W.zoomControl})})}:U,$=!_.isDrawEnabled&&W.mapInfoControl&&!(S&&!C),K=o().createElement(o().Fragment,null,o().createElement(s.Z,b({},_,{key:S?"overlay":"block",onMapViewChanges:O,eventHandlers:h,map:g(g({},W),{},{id:"media-".concat(t),resize:I+"-"+k+"_"+T,className:"aaaa",style:g({cursor:$?"pointer":"default"},S&&!C&&{pointerEvents:"none",touchAction:"none"})}),layers:x?[].concat(v(L),v(x)):L,tools:$?["popup"]:[],options:(0,c.kn)(B),mapType:A,onMapTypeLoaded:D}),n.Children.map(F,(function(e){return e?(0,n.cloneElement)(e,{mapType:A}):null}))),S&&!d&&o().createElement(P,{className:"ms-expand-media-button",onClick:function(){return E(!C)},tooltipId:C?"geostory.closeFullscreenMap":"geostory.showFullscreenMap",tooltipPosition:"left"},o().createElement(i.Glyphicon,{glyph:C?"1-close":"1-full-screen"})));return o().createElement("div",{className:"ms-media ms-media-map ".concat(V.zoomPosition||""),style:{objectFit:p}},C&&S?o().createElement(l.Z,null,o().createElement("div",{className:"ms-expanded-media-container"},K)):K,M&&G&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,G)))}))},882017:(e,t,r)=>{"use strict";r.d(t,{Ln:()=>y,ZP:()=>b});var n=r(124852),o=r.n(n),a=r(675263),i=r.n(a),s=r(916788),c=r(225138),u=r(452826),l=["debounceTime","mediaViewer","children"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=s.Z,y={image:s.Z,map:c.Z,video:u.Z},m=function(e){var t,r,a=e.debounceTime,i=e.mediaViewer,s=e.children,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l),u="".concat(c.id).concat(c.resourceId?"-".concat(c.resourceId):""),m=(t=(0,n.useState)({}),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=m[0],v=m[1],O=void 0===b[u]||b[u],h=i||y[c.mediaType||c.type]||d;return o().createElement(h,p({sectionType:c.sectionType,debounceTime:a,loading:b,isLoading:O,onLoad:v,loadingId:u},c),s)};m.propTypes={id:i().string,lazy:i().bool,mediaType:i().string,type:i().string,debounceTime:i().number},m.defaultProps={id:"",lazy:!0,mediaType:"",type:""};const b=m},532425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(675263),o=r.n(n),a=r(124852),i=r.n(a);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,a=e.hidden;return i().createElement("div",{className:o,style:c({width:t,height:t,overflow:"hidden"},n)},!a&&i().createElement("div",{className:"mapstore-".concat(l(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const f=p}}]);