(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[27157],{580416:(e,t,r)=>{"use strict";r.d(t,{yS:()=>n,Zz:()=>o,ms:()=>i,ih:()=>c,OX:()=>u,sb:()=>p,K$:()=>a,k7:()=>l,cX:()=>s,x9:()=>f,vs:()=>y,oE:()=>b,Po:()=>d,qv:()=>h,cI:()=>m,g6:()=>v,I4:()=>E,l$:()=>O,Xv:()=>g,k3:()=>S,CQ:()=>w,R8:()=>_,HN:()=>P,sH:()=>R,c7:()=>j,_7:()=>T,eF:()=>A,O6:()=>k,ED:()=>L,RP:()=>D,sF:()=>N,VP:()=>C,He:()=>Y,vO:()=>x,WO:()=>I,bh:()=>G,MK:()=>Z,ZF:()=>H,tV:()=>M,Dv:()=>B,Yz:()=>F,kI:()=>U,XG:()=>V,A4:()=>q,Rp:()=>W,$o:()=>X,ct:()=>$,oh:()=>z,$h:()=>K,ud:()=>Q,Qr:()=>J,LR:()=>ee,nN:()=>te,UG:()=>re,c9:()=>ne,Xy:()=>oe});var n="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",c="TOGGLE_NODE",u="SORT_NODE",p="REMOVE_NODE",a="UPDATE_NODE",l="MOVE_NODE",s="LAYER_LOADING",f="LAYER_LOAD",y="LAYER_ERROR",b="ADD_LAYER",d="ADD_GROUP",h="REMOVE_LAYER",m="SHOW_SETTINGS",v="HIDE_SETTINGS",E="UPDATE_SETTINGS",O="REFRESH_LAYERS",g="LAYERS:UPDATE_LAYERS_DIMENSION",S="LAYERS_REFRESHED",w="LAYERS_REFRESH_ERROR",_="LAYERS:BROWSE_DATA",P="LAYERS:DOWNLOAD",R="LAYERS:CLEAR_LAYERS",j="LAYERS:SELECT_NODE",T="LAYERS:FILTER_LAYERS",A="LAYERS:SHOW_LAYER_METADATA",k="LAYERS:HIDE_LAYER_METADATA",L="LAYERS:UPDATE_SETTINGS_PARAMS";function D(e,t,r){return{type:m,node:e,nodeType:t,options:r}}function N(){return{type:v}}function C(e){return{type:E,options:e}}function Y(e,t){return{type:n,newProperties:t,layer:e}}function x(e,t){return{type:o,layer:e,params:t}}function I(e,t){return{type:i,newProperties:t,group:e}}function G(e,t,r){return{type:c,node:e,nodeType:t,status:!r}}function Z(e,t){return{type:u,node:e,order:t,sortLayers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}function H(e,t){return{type:p,node:e,nodeType:t,removeEmpty:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function M(e,t,r){return{type:a,node:e,nodeType:t,options:r}}function B(e,t,r){return{type:l,node:e,groupId:t,index:r}}function F(e){return{type:s,layerId:e}}function U(e,t){return{type:f,layerId:e,error:t}}function V(e,t,r){return{type:y,layerId:e,tilesCount:t,tilesErrorCount:r}}function q(e){return{type:b,layer:e,foreground:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function W(e,t,r){return{type:d,group:e,parent:t,options:r,asFirst:arguments.length>3&&void 0!==arguments[3]&&arguments[3]}}function X(e){return{type:h,layerId:e}}function $(e,t){return{type:n,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function z(e){return{type:S,layers:e}}function K(e,t){return{type:w,layers:e,error:t}}function Q(e,t,r,n){return{type:g,dimension:e,value:t,options:r,layers:n}}function J(e){return{type:_,layer:e}}function ee(e){return{type:P,layer:e}}function te(){return{type:R}}function re(e,t,r){return{type:j,id:e,nodeType:t,ctrlKey:r}}function ne(e,t){return{type:A,metadataRecord:e,maskLoading:t}}function oe(e,t){return{type:L,newParams:e,update:t}}},352595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(461365).Z)(r(480681).aV)},145869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(124852),o=r.n(n),i=r(45697),c=r.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function a(e,t,r){return t=s(t),function(e,t){if(t&&("object"==u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,l()?Reflect.construct(t,r||[],s(e).constructor):t.apply(e,r))}function l(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(l=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function y(e,t,r){return(t=b(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&p(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);y(d,"propTypes",{disabled:c().bool,className:c().string,checked:c().bool,onChange:c().func,onClick:c().func}),y(d,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const h=d},112346:(e,t,r)=>{"use strict";r.d(t,{Z:()=>C});var n=r(124852),o=r.n(n),i=r(45697),c=r.n(i),u=r(480681),p=r(145869),a=r(80717),l=r(805346);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function y(e,t,r){return t=d(t),function(e,t){if(t&&("object"==s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,b()?Reflect.construct(t,r||[],d(e).constructor):t.apply(e,r))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function m(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this;return o().createElement(a.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},btnGroupProps:{style:{margin:5}},buttons:[{glyph:this.props.checked?"chevron-down":"chevron-left",visible:!0,disabled:this.props.disabled,tooltip:this.props.checked?o().createElement(l.Z,{msgId:"collapse"}):o().createElement(l.Z,{msgId:"expand"}),onClick:function(){return e.props.onClick(!e.props.checked)}}]})}}])&&f(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);m(E,"propTypes",{checked:c().bool,disabled:c().bool,onClick:c().func}),m(E,"defaultProps",{checked:!1,disabled:!1,onClick:function(){}});const O=E;var g=r(38560),S=r(82110);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,k(n.key),n)}}function P(e,t,r){return t=j(t),function(e,t){if(t&&("object"==w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,R()?Reflect.construct(t,r||[],j(e).constructor):t.apply(e,r))}function R(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(R=function(){return!!e})()}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function A(e,t,r){return(t=k(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){var t=function(e,t){if("object"!=w(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==w(t)?t:t+""}var L=function(){return o().createElement(g.Z,{className:"square-button-sm no-border switch-error"},o().createElement(u.gG,{glyph:"exclamation-mark",className:"text-danger"}))},D=function(){return o().createElement("div",{className:"switch-loading"},o().createElement(S.Z,{size:"small"}))},N=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return A(e=P(this,t,[].concat(n)),"state",{}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(t,e),r=t,(n=[{key:"renderHeader",value:function(){var e=this,t=this.props.useToolbar?O:p.Z;return o().createElement("div",null,o().createElement("div",{className:"pull-left"},this.props.title||this.props.header),o().createElement("div",{className:"pull-right"},this.props.locked?null:o().createElement(t,{disabled:this.props.disabled,checked:this.props.expanded,onClick:function(t){e.props.disabled||e.props.onSwitch(t)}}),this.props.error?o().createElement(L,null):null,this.props.loading?o().createElement(D,null):null,this.props.buttons.length>0&&this.props.expanded&&o().createElement(a.Z,{btnDefaultProps:{className:"square-button-sm no-border"},buttons:this.props.buttons})))}},{key:"render",value:function(){return o().createElement(u.s_,{className:"mapstore-switch-panel",collapsible:!0,expanded:this.props.expanded,defaultExpanded:this.props.defaultExpanded,header:this.renderHeader()},this.props.children)}}])&&_(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);A(N,"propTypes",{header:c().node,title:c().oneOfType([c().string,c().node]),defaultExpanded:c().string,expanded:c().bool,onSwitch:c().func,locked:c().bool,buttons:c().array,loading:c().bool,disabled:c().bool,error:c().any,useToolbar:c().bool}),A(N,"defaultProps",{title:"",disabled:!1,expanded:!1,onSwitch:function(){},locked:!1,buttons:[],useToolbar:!1});const C=N},202576:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(124852),o=r.n(n),i=r(180307),c=r.n(i),u=r(45697),p=r.n(u),a=r(480681),l=r(352595),s=r(950966);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,E(n.key),n)}}function b(e,t,r){return t=h(t),function(e,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,d()?Reflect.construct(t,r||[],h(e).constructor):t.apply(e,r))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t,r){return(t=E(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(t,e),r=t,(n=[{key:"renderPopover",value:function(){return o().createElement(a.J2,{id:this.props.id,placement:this.props.placement,positionLeft:this.props.left,positionTop:this.props.top,title:this.props.title,style:this.props.popoverStyle},this.props.text)}},{key:"renderContent",value:function(){var e=this;return o().createElement(a.gG,{ref:function(t){e.target=t},className:"text-".concat(this.props.bsStyle),glyph:this.props.glyph})}},{key:"render",value:function(){var e=this,t=!0===this.props.trigger?["hover","focus"]:this.props.trigger;return o().createElement("span",{className:"mapstore-info-popover"},this.props.trigger?o().createElement(s.Z,{trigger:t,placement:this.props.placement,overlay:this.renderPopover()},this.renderContent()):[this.renderContent(),o().createElement(l.Z,{placement:this.props.placement,show:!0,target:function(){return c().findDOMNode(e.target)}},this.renderPopover())])}}])&&y(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);v(O,"propTypes",{id:p().string,title:p().string,text:p().string,glyph:p().string,bsStyle:p().string,placement:p().string,left:p().number,top:p().number,trigger:p().oneOfType([p().array,p().bool]),popoverStyle:p().object}),v(O,"defaultProps",{id:"",title:"",text:"",placement:"right",left:200,top:50,glyph:"question-sign",bsStyle:"info",trigger:["hover","focus"]});const g=O}}]);