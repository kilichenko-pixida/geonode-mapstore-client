"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[31232],{587401:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(45697),o=n.n(r),i=n(558422),c=n.n(i),u=n(271418);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function m(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(e){if("object"!=l(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}var y=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return m(e=function(e,t,n){return t=f(t),function(e,t){if(t&&("object"==l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,p()?Reflect.construct(t,n||[],f(e).constructor):t.apply(e,n))}(this,t,[].concat(r)),"onChange",(function(t){e.props.onChange(t.target.value)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.items.map((function(e){return c().createElement("option",{key:e.value,value:e.value},e.name)}));return c().createElement(u.cw,null,this.props.label?c().createElement(u.J$,null,this.props.label):null,c().createElement(u.NI,{ref:"input",value:this.props.selected,componentClass:"select",onChange:this.onChange},e))}}])&&a(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(c().Component);m(y,"propTypes",{items:o().array,label:o().string,onChange:o().func,selected:o().string}),m(y,"defaultProps",{items:[],label:"Choice",onChange:function(){},selected:""});const v=y},294883:(e,t,n)=>{n.r(t),n.d(t,{projectionSelector:()=>g,Projection:()=>P,default:()=>w});var r=n(558422),o=n.n(r),i=n(45697),c=n.n(i),u=n(171703),l=n(322843),a=n(384965),p=n(986069),f=n(145959),s=n(587401),m=n(86638),b=n(552259),y=n(307887);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return(t=function(e){var t=function(e){if("object"!=v(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==v(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){var t,n,r,o,i,c,u;return null!==(t=null!==(n=null==e||null===(r=e.print)||void 0===r||null===(o=r.spec)||void 0===o||null===(i=o.params)||void 0===i?void 0:i.projection)&&void 0!==n?n:null==e||null===(c=e.print)||void 0===c||null===(u=c.map)||void 0===u?void 0:u.projection)&&void 0!==t?t:"EPSG:3857"};function O(e,t){var n=g(e),r=(0,y.normalizeSRS)(n),o=(0,b.yu)(r),i=(0,a.mapProjectionSelector)(e),c=(0,y.normalizeSRS)(i);return j(j({},t),{},r!==c?{scale:o[t.zoom],zoom:t.zoom,projection:r}:{scale:o[t.zoom],zoom:t.zoom})}var P=function(e,t){var n,i,c=e.projection,u=e.items,l=e.onChangeParameter,p=e.allowPreview,f=void 0!==p&&p,b=e.projections,v=e.enabled,d=void 0===v||v,j=e.onRefresh,h=void 0===j?function(){}:j;function P(e){l("params.projection",e),h()}return(0,r.useEffect)((function(){d&&(0,a.addValidator)("projection","map-preview",function(e){return function(t){var n=g(t),r=(0,a.mapProjectionSelector)(t);return e||(0,y.normalizeSRS)(n)===(0,y.normalizeSRS)(r)?{valid:!0}:{valid:!1,errors:["print.projectionmismatch"]}}}(f))}),[f]),(0,r.useEffect)((function(){d&&(P(c),(0,a.addMapTransformer)("projection",O))}),[]),d?o().createElement(o().Fragment,null,o().createElement(s.Z,{selected:c,onChange:P,items:(n=u,i=b,i?i.filter((function(e){return n.find((function(t){return t.value===e.value}))})):n),label:(0,m.S$)(t.messages,"print.projection")})):null};P.contextTypes={messages:c().object};const w=(0,l.rx)("PrintProjection",{component:(0,u.connect)((function(e){var t,n;return{spec:(null==e||null===(t=e.print)||void 0===t?void 0:t.spec)||{},map:null==e||null===(n=e.print)||void 0===n?void 0:n.map,projection:g(e),items:Object.keys((0,y.getAvailableCRS)()).map((function(e){return{name:e,value:e}}))}}),{onChangeParameter:p.d$})(P),reducers:{print:f.Z},containers:{Print:{priority:1,target:"left-panel",position:4}}})}}]);