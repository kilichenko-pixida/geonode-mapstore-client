(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[27432],{243120:(e,t,r)=>{var n={"./cesium.js":[61133,65792,86103,77458,45110,39512,9340,27962,66287,36882,50172,25199,65794,89437],"./leaflet.js":[48507,96259,45243,42201,92916,51410,66287,23977,36882,88181,35701,83436,17091,37161],"./openlayers.js":[434637,96259,31660,4962,38250,64678,54499,37104,35010,69868,13461,68686,32494,40630,78373,85388,4564,28353,67019,66287,23977,36882,57424,13581,39151,6909,60641,74843,5904,16037],"./sink.js":[871405,5442]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(o)))}o.keys=()=>Object.keys(n),o.id=243120,e.exports=o},461928:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(124852),o=r.n(n),i=r(45697),u=r.n(i),c=r(747037),p=r.n(c),a=["impl","name"];function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(null,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function d(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}var O=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return d(e=function(e,t,r){return t=v(t),function(e,t){if(t&&("object"==s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,b()?Reflect.construct(t,r||[],v(e).constructor):t.apply(e,r))}(this,t,[].concat(n)),"getTool",(function(t){var r=e.props.plugins;return p()(t)?{name:t,impl:r.tools[t]}:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({name:t.name,impl:r.tools[t.name]},t)})),d(e,"renderLayers",(function(){var t=e.props.map&&e.props.map.projection||"EPSG:3857",r=e.props.plugins.Layer;return e.props.layers.map((function(n,i){return o().createElement(r,{type:n.type,srs:t,position:i,key:n.id||n.name,options:n,env:n.localizedLayerStyles?e.props.env:[]},e.renderLayerContent(n,t))}))})),d(e,"renderLayerContent",(function(t,r){if(t.features&&"vector"===t.type){var n=e.props.plugins.Feature;return t.features.map((function(e){return o().createElement(n,{key:e.id,msId:e.id,type:e.type,crs:r,geometry:e.geometry,features:e.features,featuresCrs:t.featuresCrs||"EPSG:4326",layerStyle:t.style,style:e.style||t.style||null,properties:e.properties})}))}return null})),d(e,"renderTools",(function(){return e.props.tools.filter((function(t){var r,n,o;return null===(r=e.props)||void 0===r||null===(n=r.plugins)||void 0===n||null===(o=n.tools)||void 0===o?void 0:o[p()(t)?t:null==t?void 0:t.name]})).map((function(t){var r=e.getTool(t),n=r.impl,i=r.name,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,a);return o().createElement(n,l({key:i},u))}))})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.plugins.Map,t=this.props.map&&this.props.map.projection||"EPSG:3857";return this.props.map&&e?o().createElement(e,l({projectionDefs:this.props.projectionDefs,style:this.props.styleMap,id:this.props.id,zoomControl:this.props.zoomControl,center:{x:0,y:0},zoom:1,hookRegister:this.props.hookRegister,mapStateSource:this.props.mapStateSource||this.props.id},this.props.options,this.props.map,{projection:t},this.props.eventHandlers),this.renderLayers(),this.renderTools(),this.props.children):null}}])&&y(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);d(O,"propTypes",{id:u().string,options:u().object,map:u().object,mapStateSource:u().string,eventHandlers:u().object,styleMap:u().object,layers:u().array,hookRegister:u().object,projectionDefs:u().array,plugins:u().any,tools:u().array,getLayerProps:u().func,env:u().array,zoomControl:u().bool}),d(O,"defaultProps",{id:"__base_map__",options:{},map:{},styleMap:{},tools:[],projectionDefs:[],eventHandlers:{onMapViewChanges:function(){},onClick:function(){},onMouseMove:function(){},onLayerLoading:function(){},onLayerError:function(){}},env:[],zoomControl:!1});const g=O},91812:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(867076),o=r(438482);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e){if("object"!=i(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(0,n.compose)((0,n.withStateHandlers)((function(){return{resize:0}}),{onResize:function(e){var t=e.resize,r=void 0===t?0:t;return function(){return{resize:r+1}}}}),(0,o.Z)({debounceTime:e}),(0,n.withProps)((function(e){var t=e.options,r=e.resize;return{options:c(c({},t),{},{resize:r})}})))}},319180:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(45697),u=r.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(null,arguments)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function y(e,t,r){return(t=b(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){var t=function(e){if("object"!=c(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}const v=function(e){var t=function(t){function n(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return y(e=function(e,t,r){return t=l(t),function(e,t){if(t&&("object"==c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,s()?Reflect.construct(t,r||[],l(e).constructor):t.apply(e,r))}(this,n,[].concat(r)),"state",{plugins:{}}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(n,t),i=n,(u=[{key:"componentDidMount",value:function(){this.setPlugins(this.props),this._isMounted=!0}},{key:"componentWillUpdate",value:function(e){e.mapType!==this.props.mapType&&this.setPlugins(e)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var t=this.state.plugins;return o().createElement(e,p({},this.props,{plugins:t}))}},{key:"setPlugins",value:function(e){var t=this;e.mapType&&r(243120)("./"+e.mapType+".js").then((function(e){t._isMounted&&(t.setState({plugins:e.default()}),t.props.onMapTypeLoaded())}))}}])&&a(i.prototype,u),Object.defineProperty(i,"prototype",{writable:!1}),i;var i,u}(o().Component);return y(t,"propTypes",{mapType:u().string,onMapTypeLoaded:u().func}),y(t,"defaultProps",{onMapTypeLoaded:function(){}}),t.displayName="".concat(e.displayName,"WithMapType"),t}},469705:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(867076);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return(t=function(e){var t=function(e){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p=(0,n.compose)((0,n.withHandlers)({onMapViewChanges:function(e){var t=e.map,r=void 0===t?{}:t,n=e.onMapViewChanges,o=void 0===n?function(){}:n;return function(e,t,n,i,c,p,a,s,l,f){o(u(u({},r),{},{center:e,bbox:u(u({},r.bbox),n),zoom:t,size:i,mapStateSource:c,projection:p,resolution:s,orientate:l,zoomToExtentHandler:f}))}}}),(0,n.withPropsOnChange)(["onMapViewChanges","eventHandlers"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onMapViewChanges,r=void 0===t?function(){}:t,n=e.eventHandlers;return{eventHandlers:u(u({},void 0===n?{}:n),{},{onMapViewChanges:r})}})))},438482:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(124852),o=r.n(n),i=r(23279),u=r.n(i),c=r(45697),p=r.n(c),a=r(180307),s=r.n(a),l=r(391033);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function d(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}const O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.debounceTime,r=e.querySelector,n=e.closest,i=void 0!==n&&n;return function(e){var n;return n=function(n){function c(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),d(n=function(e,t,r){return t=v(t),function(e,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,b()?Reflect.construct(t,r||[],v(e).constructor):t.apply(e,r))}(this,c,[e]),"findDomNode",(function(){if(!n.isMounded)return null;var e=s().findDOMNode(n);return e&&i&&r?e.closest(r||"*"):e&&(r?e.querySelector(r):e)})),n.width=void 0,n.height=void 0,n.skipOnMount=e.skipOnMount,n.div=null,n.onResize=u()((function(){var e;return(e=n.props).onResize.apply(e,arguments)}),void 0!==t?t:e.debounceTime||1e3),n.ro=new l.Z((function(e){e.forEach((function(e){var t=e.contentRect,r=t.width,o=t.height,i=n.props.handleWidth&&n.width!==r,u=n.props.handleHeight&&n.height!==o;n.skipOnMount||!i&&!u||n.onResize({width:r,height:o}),n.width=r,n.height=o,n.skipOnMount=!1}))})),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(c,n),p=c,(a=[{key:"componentDidMount",value:function(){this.isMounded=!0,this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentDidUpdate",value:function(){this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentWillUnmount",value:function(){var e=this.findDomNode();e&&this.ro&&this.ro.unobserve&&this.ro.unobserve(e)}},{key:"render",value:function(){return o().createElement(e,this.props)}}])&&y(p.prototype,a),Object.defineProperty(p,"prototype",{writable:!1}),p;var p,a}(o().Component),d(n,"propTypes",{handleWidth:p().bool,handleHeight:p().bool,onResize:p().func}),d(n,"defaultProps",{onResize:function(){},handleWidth:!0,handleHeight:!0}),n}}}}]);