(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[22794,47310],{921914:(t,e,r)=>{"use strict";r.d(e,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>c,Pn:()=>l,DZ:()=>a,e8:()=>s,E0:()=>p,F9:()=>f,X_:()=>y,pb:()=>b,Re:()=>v,ih:()=>m,xy:()=>O,jL:()=>g,oz:()=>d,ph:()=>h,lF:()=>E,gG:()=>P,cb:()=>S,GI:()=>_,B1:()=>T,fv:()=>I,gc:()=>j,zX:()=>w,ZF:()=>N,Zb:()=>R,DW:()=>D,Xp:()=>F,Fm:()=>A,sV:()=>C,LU:()=>G,XP:()=>M,WU:()=>k,mK:()=>L,g:()=>U,ws:()=>Y,HP:()=>z,aN:()=>H,Pg:()=>W,u0:()=>q,TM:()=>V,PM:()=>Z,lK:()=>B,sv:()=>K,MO:()=>X,oO:()=>J,Mc:()=>Q,Zw:()=>$,RA:()=>tt,am:()=>et,ZM:()=>rt,wm:()=>nt,Y$:()=>ot,Qu:()=>it,kT:()=>ut});var n=r(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",c="CHANGE_MAPINFO_STATE",l="NEW_MAPINFO_REQUEST",a="PURGE_MAPINFO_RESULTS",s="CHANGE_MAPINFO_FORMAT",p="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",b="HIDE_REVERSE_GEOCODE",v="NO_QUERYABLE_LAYERS",m="CLEAR_WARNING",O="FEATURE_INFO_CLICK",g="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",d="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",h="TOGGLE_MAPINFO_STATE",E="UPDATE_CENTER_TO_MARKER",P="IDENTIFY:CHANGE_PAGE",S="IDENTIFY:CLOSE_IDENTIFY",_="IDENTIFY:CHANGE_FORMAT",T="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",I="IDENTIFY:EDIT_LAYER_FEATURES",j="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",w="IDENTIFY:SET_MAP_TRIGGER",N="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",R="IDENTIFY:SET_SHOW_IN_MAP_POPUP",D="IDENTIFY:IDENTIFY_IS_MOUNTED",F="IDENTIFY:INIT_PLUGIN";function A(t,e,r,n,i){return{type:o,data:e,reqId:t,requestParams:r,layerMetadata:n,layer:i}}function C(t,e,r,n){return{type:i,error:e,reqId:t,requestParams:r,layerMetadata:n}}function G(){return{type:v}}function M(){return{type:m}}function k(t,e){return{type:l,reqId:t,request:e}}function L(t){return{type:c,enabled:t}}function U(){return{type:a}}function Y(t){return{type:s,infoFormat:t}}function z(){return{type:p}}function H(){return{type:f}}function x(t){return{type:y,reverseGeocodeData:t.data}}function W(t){return function(e){n.Z.reverseGeocode(t).then((function(t){e(x(t))})).catch((function(t){e(x(t))}))}}function q(){return{type:b}}function V(){return{type:h}}function Z(t){return{type:E,status:t}}function B(t,e){return{type:O,point:t,layer:e,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,ignoreVisibilityLimits:arguments.length>5&&void 0!==arguments[5]&&arguments[5]}}function K(t){return{type:g,point:t}}function X(t){return{type:d,enabled:t}}function J(t){return{type:P,index:t}}var Q=function(){return{type:S}},$=function(t){return{type:_,format:t}},tt=function(t){return{type:T,showCoordinateEditor:t}},et=function(t){return{type:I,layer:t}},rt=function(t){return{type:j,query:t}},nt=function(t){return{type:w,trigger:t}},ot=function(t){return{type:R,value:t}},it=function(t){return{type:D,isMounted:t}},ut=function(t){return{type:F,cfg:t}}},647310:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(375875),o=r.n(n),i=r(472500),u=r.n(i),c=r(727418),l=r.n(c),a={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(t,e){var r=l()({q:t},a,e||{}),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(t,e){var r=l()({lat:t.lat,lon:t.lng},e||{},a),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},683520:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>G});var n=r(124852),o=r.n(n),i=r(45697),u=r.n(i),c=r(171703),l=r(264317),a=r(731255),s=r(55105),p=r(22222),f=r(727418),y=r.n(f),b=r(658252);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}var m=["children"],O=["children"];function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return(e=I(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function E(){return E=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},E.apply(null,arguments)}function P(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.includes(n))continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,I(n.key),n)}}function T(t,e,r){return e&&_(t.prototype,e),r&&_(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function I(t){var e=function(t){if("object"!=v(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==v(e)?e:e+""}function j(t,e,r){return e=N(e),function(t,e){if(e&&("object"==v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,w()?Reflect.construct(e,r||[],N(t).constructor):e.apply(t,r))}function w(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(w=function(){return!!t})()}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}function R(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}var F=function(t){function e(){return S(this,e),j(this,e,arguments)}return R(e,t),T(e,[{key:"render",value:function(){var t=this.props,e=t.children,r=P(t,m);return o().createElement(l.CSSTransitionGroup,E({},r,{transitionName:"toolbarexpand",transitionEnterTimeout:500,transitionLeaveTimeout:300}),e)}}])}(o().Component),A=function(t){function e(){return S(this,e),j(this,e,arguments)}return R(e,t),T(e,[{key:"render",value:function(){var t=this.props,e=t.children,r=P(t,O);return o().createElement("div",r,e)}}])}(o().Component),C=function(t){function e(){var t;S(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return h(t=j(this,e,[].concat(n)),"getPanel",(function(t){return!0===t.panel?t.plugin:t.panel})),h(t,"getPanels",(function(){return t.getTools().filter((function(t){return t.panel})).map((function(e){return{name:e.name,title:e.title,cfg:e.cfg,panel:t.getPanel(e),items:e.items,wrap:e.wrap||!1}}))})),h(t,"getTools",(function(){var e=t.props.items.filter((function(t){return!t.alwaysVisible}))||[];return t.props.items.filter((function(r){return r.alwaysVisible||1===e.length||t.props.allVisible})).filter((function(e){return!e.showWhen||e.showWhen(t.props)})).map((function(t,e){return y()({},t,{position:t.position||e})})).sort((function(t,e){return t.position-e.position}))})),t}return R(e,t),T(e,[{key:"render",value:function(){var t=this.props.disableAnimation?A:F;return o().createElement(b.Z,{id:this.props.id,className:"mapToolbar btn-group-"+this.props.layout,toolCfg:this.props.btnConfig,container:t,toolStyle:this.props.buttonStyle,activeStyle:this.props.pressedButtonStyle,toolSize:this.props.buttonSize,stateSelector:this.props.stateSelector,tools:this.getTools(),panels:this.getPanels(),activePanel:this.props.active,style:"vertical"!==this.props.layout?d(d({},this.props.style),{},{display:"flex"}):this.props.style,panelStyle:this.props.panelStyle,panelClassName:this.props.panelClassName})}}])}(o().Component);h(C,"propTypes",{id:u().string,tools:u().array,style:u().object,panelStyle:u().object,panelClassName:u().string,disableAnimation:u().bool,active:u().string,items:u().array,allVisible:u().bool,layout:u().string,stateSelector:u().string,buttonStyle:u().string,buttonSize:u().string,pressedButtonStyle:u().string,btnConfig:u().object}),h(C,"contextTypes",{messages:u().object,router:u().object}),h(C,"defaultProps",{id:"mapstore-toolbar",style:{},panelStyle:{minWidth:"300px",right:"52px",zIndex:100,position:"absolute",overflow:"auto",left:"450px"},panelClassName:"toolbar-panel",disableAnimation:!1,items:[],allVisible:!0,layout:"vertical",stateSelector:"toolbar",buttonStyle:"primary",buttonSize:null,pressedButtonStyle:"success",btnConfig:{className:"square-button"}});const G={ToolbarPlugin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"toolbar";return(0,c.connect)(function(t){return(0,p.P1)([function(e){return e.controls&&e.controls[t]&&e.controls[t].active},function(e){return e.controls&&e.controls[t]&&e.controls[t].expanded},a.Rd,function(t){return(0,s.ic)(t,{right:!0,bottom:!0})}],(function(e,r,n,o){return{active:e,allVisible:r,stateSelector:t,layout:n?"horizontal":"vertical",style:o}}))}(t))(C)},reducers:{controls:r(925108).Z}}},925108:(t,e,r)=>{"use strict";r.d(e,{Z:()=>p});var n=r(782904),o=r(727418),i=r.n(o),u=r(921914);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return(e=function(t){var e=function(t){if("object"!=c(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.kM:var r=e.property||"enabled";return i()({},t,s({},e.control,i()({},t[e.control],s({},r,!(t[e.control]||{})[r]))));case n.At:return!0===e.toggle&&t[e.control]&&t[e.control][e.property]===e.value?i()({},t,s({},e.control,i()({},t[e.control],s({},e.property,void 0)))):i()({},t,s({},e.control,i()({},t[e.control],s({},e.property,e.value))));case n.dc:return i()({},t,s({},e.control,i()({},t[e.control],e.properties)));case n.l:var o=Object.keys(t).filter((function(t){return-1===(e.skip||[]).indexOf(t)})).reduce((function(e,r){return i()(e,s({},r,i()({},t[r],!0===t[r].enabled?{enabled:!1}:{})))}),{});return i()({},t,o);case u.DW:return a(a({},t),{},{info:a(a({},t.info),{},{available:e.isMounted})});default:return t}}},55105:(t,e,r)=>{"use strict";r.d(e,{Ss:()=>b,Nr:()=>v,QJ:()=>m,ic:()=>O,Jz:()=>g,VM:()=>d,CF:()=>h,Ju:()=>E,Fc:()=>P,gQ:()=>S});var n=r(91175),o=r.n(n),i=r(288306),u=r.n(i),c=r(800827),l=r(552259),a=r(737275);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return(e=function(t){var e=function(t){if("object"!=s(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==s(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=function(t){return t.maplayout&&t.maplayout.layout||{}},v=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},m=function(t){return t.maplayout&&t.maplayout.boundingSidebarRect||{}},O=u()((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=b(t),o=m(t);return n&&Object.keys(n).filter((function(t){return e[t]})).reduce((function(t,e){var i;return f(f({},t),{},y({},e,r&&null!==(i=o[e])&&void 0!==i?i:n[e]))}),{})||{}}),(function(t,e,r){return JSON.stringify(b(t))+JSON.stringify(m(t))+JSON.stringify(e)+(r?"_isDock":"")})),g=function(t){var e;return!(null===(e=b(t))||void 0===e||!e.rightPanel)},d=function(t){var e,r=a.ZP.getConfigProp("mapLayout")||l.Ur;return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=b(t);return!!o()(e.filter((function(t){return r[t.key]})).map((function(t){return"not"===t.type?r[t.key]!==t.value&&r[t.key]:r[t.key]===t.value})))}(t,[{key:"bottom",value:null!==(e=null==r?void 0:r.bottom.sm)&&void 0!==e?e:0,type:"not"}])},h=function(t){var e=(0,c.Od)(t),r=v(t);return r&&e&&e.size&&{left:(0,l.pb)(r.left,e.size.width),bottom:(0,l.pb)(r.bottom,e.size.height),right:(0,l.pb)(r.right,e.size.width),top:(0,l.pb)(r.top,e.size.height)}},E=function(t){var e,r;return null!==(e=null==t||null===(r=t.maplayout)||void 0===r?void 0:r.dockPanels)&&void 0!==e?e:{left:[],right:[]}},P=function(t){return O(t,{height:!0,right:!0},!0)},S=function(t){return O(t,{right:!0},!0)}},34088:t=>{t.exports=function(){for(var t=arguments.length,e=[],r=0;r<t;r++)e[r]=arguments[r];if(0!==(e=e.filter((function(t){return null!=t}))).length)return 1===e.length?e[0]:e.reduce((function(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}))}}}]);