"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[82714],{807472:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(727418),o=n.n(r),i=n(45697),a=n.n(i),l=n(558422),c=n.n(l),s=n(485294),u=n.n(s),f=n(472986),p=n.n(f),d=n(805346);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,E(r.key),r)}}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function O(e,t,n){return(t=E(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){var t=function(e){if("object"!=m(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}var C=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return O(e=function(e,t,n){return t=h(t),function(e,t){if(t&&("object"==m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,g()?Reflect.construct(t,n||[],h(e).constructor):t.apply(e,n))}(this,t,[].concat(r)),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(d.Z,{msgId:"loading"}),c().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),O(e,"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),O(e,"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),O(e,"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:b({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),n=this.props.draggable?c().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&v(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(c().Component);O(C,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),O(C,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const P=C},975480:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(558422),o=n.n(r);const i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},694745:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(558422),o=n.n(r),i=n(294184),a=n.n(i),l=n(271418),c=n(807472),s=n(80717),u=n(867076),f=n(819081),p=n.n(f),d=n(975480),m={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},y={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const b=(0,u.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,i=e.loadingText,u=e.onClose,f=void 0===u?function(){}:u,b=e.title,v=void 0===b?"":b,g=e.clickOutEnabled,h=void 0===g||g,w=e.showClose,O=void 0===w||w,E=e.disabledClose,C=void 0!==E&&E,P=e.showFullscreen,S=void 0!==P&&P,j=e.fullscreenType,N=void 0===j?"full":j,k=e.buttons,Z=void 0===k?[]:k,T=e.size,x=void 0===T?"":T,R=e.bodyClassName,I=void 0===R?"":R,z=e.children,V=e.draggable,_=void 0!==V&&V,A=e.fullscreenState,M=e.onFullscreen,D=e.fade,L=void 0!==D&&D,F=e.fitContent,G=e.modalClassName,B=void 0===G?"":G,U=e.dialogClassName,W=void 0===U?"":U,q=e.enableFooter,X=void 0===q||q,K=m[x]||"",Y=S&&"expanded"===A&&y.className[N]||"",$=n?o().createElement("div",{className:"modal-fixed ".concat(B," ")+(_?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:h?f:function(){},containerClassName:"ms-resizable-modal",draggable:_,modal:!0,className:a()("modal-dialog modal-content",K,Y,W,{"ms-fit-content":F})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},v),S&&y.className[N]&&o().createElement(l.gG,{className:"ms-header-btn",onClick:function(){return M("expanded"===A?"collapsed":"expanded")},glyph:y.glyph[A][N]}),O&&f&&o().createElement(l.gG,{glyph:"1-close",className:"ms-header-btn",onClick:f,disabled:C}))),o().createElement("div",{role:"body",className:I},z),X&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(d.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?i:null),o().createElement(s.Z,{buttons:Z})))):null;return L?o().createElement(p(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},$):$}))},212610:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(558422),o=n.n(r),i=n(867076),a=n(957557),l=n.n(a),c=n(815135);const s=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,n=e.noTooltipWhenDisabled;return!(void 0!==n&&n&&t)}),c.Z,(function(e){return function(t){return o().createElement(e,l()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(558422),o=n.n(r),i=n(867076),a=n(45697),l=n.n(a),c=n(957557),s=n.n(c),u=n(271418),f=n(950966);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function v(e,t,n){return(t=g(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){var t=function(e){if("object"!=p(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}const h=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t,n){return t=y(t),function(e,t){if(t&&("object"==p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,m()?Reflect.construct(t,n||[],y(e).constructor):t.apply(e,n))}(this,n,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(n,t),r=n,(a=[{key:"renderPopover",value:function(){return o().createElement(u.J2,s()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,s()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(f.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&d(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,a}(o().Component),v(t,"propTypes",{popover:l().object}),v(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(558422),o=n.n(r),i=n(819081),a=n.n(i),l=n(271418),c=n(90085),s=["visible","Element","renderButton"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(null,arguments)}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,n=void 0===t?[]:t,r=e.btnGroupProps,i=void 0===r?{}:r,f=e.btnDefaultProps,p=void 0===f?{}:f,d=e.transitionProps,m=void 0===d?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:d,y=function(){return n.map((function(e,t){var n=e.visible,r=void 0===n||n,i=e.Element,a=e.renderButton,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,s);return r?a||i&&o().createElement(i,u({key:l.key||t},l))||o().createElement(c.Z,u({key:l.key||t},p,l)):null}))};return o().createElement(l.hE,i,m?o().createElement(a(),m,y()):y())}},90085:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(558422),o=n.n(r),i=n(867076),a=n(805346),l=n(957557),c=n.n(l),s=n(271418),u=n(532425),f=n(212610),p=n(617252),d=n(624847),m=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(null,arguments)}const b=(0,i.compose)(f.Z,p.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,n=e.loading,r=e.text,i=void 0===r?"":r,l=e.textId,f=e.glyphClassName,p=void 0===f?"":f,b=e.loaderProps,v=void 0===b?{}:b,g=e.children,h=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,m);return o().createElement(d.Z,c()(h,["pullRight","confirmNo","confirmYes"]),t&&!n?o().createElement(s.gG,{glyph:t,className:p}):null,l?o().createElement(a.Z,{msgId:l}):i,n?o().createElement(u.Z,y({className:"ms-loader".concat(h.bsStyle&&" ms-loader-"+h.bsStyle||"").concat(h.bsSize&&" ms-loader-"+h.bsSize||"")},v)):null,g)}))},271609:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(375875),o=n(737275),i=n(984596),a=n.n(i),l=n(692957);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u(e){var t=e||o.ZP.getConfigProp("contextPluginsConfiguration")||"configs/pluginsConfig.json",n=a()(t);return r.Z.all(n.map((function(e){return r.Z.get(e).then((function(e){return e.data})).catch((function(){return null}))}))).then((function(e){var t,n=function(e){if(Array.isArray(e))return e}(t=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=n[0],o=n.slice(1);if(!r)throw new Error("plugins configuration file is broken");return(0,l.ao)(r,o.filter((function(e){return e&&"object"===c(e)})))}))}},586300:(e,t,n)=>{n.d(t,{N4:()=>l,vq:()=>c,YD:()=>s,at:()=>u});var r=n(375875),o=n(271609),i=n(55035),a={},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/map.json";return a.newMapConfig?new Promise((function(e){return e(a.newMapConfig)})):r.Z.get(e).then((function(e){var t=e.data;return a.newMapConfig=t,t})).then((function(e){return window.overrideNewMapConfig?window.overrideNewMapConfig(e):e}))},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/geostory.json";return a.newGeoStoryConfig?new Promise((function(e){return e(a.newGeoStoryConfig)})):r.Z.get(e).then((function(e){var t=e.data;return a.newGeoStoryConfig=t,t})).then((function(e){return window.overrideNewGeoStoryConfig?window.overrideNewGeoStoryConfig(e):e}))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/static/mapstore/configs/styleTemplates.json";return a.styleTemplatesConfig?new Promise((function(e){return e(a.styleTemplatesConfig)})):r.Z.get(e).then((function(e){var t=e.data;return a.styleTemplatesConfig=null==t?void 0:t.templates,a.styleTemplatesConfig}))},u=function(){return null!=a&&a.pluginsConfig?Promise.resolve(a.pluginsConfig):(0,o.Z)((0,i.PX)("geoNodeSettings.staticPath","/static/")+"mapstore/configs/pluginsConfig.json").then((function(e){return a.pluginsConfig=e,e}))}},250109:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var r=n(558422),o=n.n(r),i=n(322843),a=n(171703),l=n(275982),c=n(22222),s=n(805346),u=n(693473),f=n(507412),p=n(995307),d=n(586300),m=n(782904),y=n(229698),b=n(49977),v=n(441609),g=n.n(v),h=n(12248),w=n(323827),O=n(299392),E=n(643892);const C={gnSetDefaultViewerEnabledPlugins:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState;return e.ofType(w.sP).filter((function(){return!g()((0,O.OV)(t()))})).switchMap((function(){var e,n,r=t(),o=null!==(e=null==r||null===(n=r.gnresource)||void 0===n?void 0:n.params)&&void 0!==e?e:{},i=o.pk,a=o.mapPk;if("new"===i&&a){var l,c,s=(null!==(l=(0,h.w7)(r))&&void 0!==l?l:[]).map((function(e){return e.name})),u=(null!==(c=(0,O.OV)(r))&&void 0!==c?c:[]).filter((function(e){return s.includes(e)}));return b.Observable.of((0,w.iR)(u))}return b.Observable.of((0,E.as)([]))}))}};var P=n(926976),S=n(694745),j=n(399534),N=n(535721),k=n(12530);function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}var T=["enabled","onSetControl","match","resourcesParams","location","defaultViewerPlugins","onReplaceLocation","onSetMapViewer","onManageLinkedResource","onSetDefaultViewerPlugins"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(null,arguments)}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return(t=function(e){var t=function(e){if("object"!=Z(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=Z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Z(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _=(0,a.connect)((0,c.P1)([function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t.mapViewersCatalog)||void 0===n?void 0:n.enabled},function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.params},function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[k.zj.LINK_RESOURCE])||void 0===n?void 0:n.loading},function(e){var t;return null==e||null===(t=e.router)||void 0===t?void 0:t.location}],(function(e,t,n,r){return{enabled:e,resourcesParams:t,loading:n,location:r}})),{onSetControl:m.Xg.bind(null,"mapViewersCatalog","enabled"),onReplaceLocation:l.gx,onSetMapViewer:w.DF,onManageLinkedResource:E.d7,onSetDefaultViewerPlugins:E.as})((function(e){var t,n,i=e.enabled,a=e.onSetControl,l=(e.match,e.resourcesParams),c=(e.location,e.defaultViewerPlugins),m=void 0===c?["Annotations","TOC","BackgroundSelector","Identify","QueryPanel","Measure","Print","MousePosition","Search","ScaleBox","GlobeViewSwitcher","ZoomAll","ZoomIn","ZoomOut","Timeline","MetadataExplorer","Widgets"]:c,y=(e.onReplaceLocation,e.onSetMapViewer),b=e.onManageLinkedResource,v=e.onSetDefaultViewerPlugins,g=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,T),h=(t=(0,r.useState)(""),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),w=h[0],O=h[1],E=l||{},C=E.pk,Z=E.mapPk;return(0,r.useEffect)((function(){return"new"===C&&Z&&(O("select"),v(m)),function(){O("")}}),[C,Z]),o().createElement(o().Fragment,null,o().createElement(j.Z,null,o().createElement(S.Z,{title:o().createElement(s.Z,{msgId:"link"===w?"gnviewer.selectLinkedMapViewer":"gnviewer.copyConfigurationFromTitle"}),show:i,size:"lg",clickOutEnabled:!1,onClose:function(){a(!1),O("")}},o().createElement(P.Z,x({},g,{placeholderId:"gnviewer.mapViewersCatalogFilterPlaceholder",noResultId:"gnviewer.mapViewersCatalogEntriesNoResults",onSelect:function(e){"link"===w?b({resourceType:N.P6.VIEWER,source:Z,target:e.pk,processType:k.zj.LINK_RESOURCE}):((0,d.at)().then((function(t){y({data:e.data},t)})),a(!1)),O("")},request:function(e){return(0,p.i9)(I(I(I({},e),{},{"filter{resource_type}":"mapviewer"},C&&"new"!==C&&{"filter{-pk}":C}),"link"!==w&&{"include[]":"data"}))},style:{position:"relative",width:"100%",height:"100%"}})))),o().createElement(j.Z,null,o().createElement(S.Z,{title:"",show:"select"===w,clickOutEnabled:!1,onClose:null,fitContent:!0,modalClassName:"gn-new-map-viewer-action"},o().createElement("div",{className:"gn-new-map-viewer-action-wrapper"},o().createElement("div",{className:"gn-new-map-viewer-action-card"},o().createElement("div",null,o().createElement(f.Z,{name:"link",className:"fa-4x"})),o().createElement(u.Z,{variant:"primary",onClick:function(){O("link"),a(!0)}},o().createElement(s.Z,{msgId:"gnviewer.linkToViewer"}))),o().createElement("div",{className:"gn-new-map-viewer-action-card"},o().createElement("div",null,o().createElement(f.Z,{name:"cogs",className:"fa-4x"})),o().createElement(u.Z,{variant:"primary",onClick:function(){return O("")}},o().createElement(s.Z,{msgId:"gnviewer.createNewViewer"})))))))})),A=(0,a.connect)((0,c.P1)([],(function(){return{}})),{onClick:m.Xg.bind(null,"mapViewersCatalog","enabled",!0)})((function(e){var t=e.onClick,n=e.size,r=e.variant;return o().createElement(u.Z,{size:n,onClick:function(){t()},variant:r},o().createElement(s.Z,{msgId:"gnviewer.copyConfigurationFrom"}))}));const M=(0,i.rx)("MapViewersCatalog",{component:_,containers:{ActionNavbar:{name:"MapViewersCatalog",Component:A}},epics:I(I({},y.Z),C),reducers:{}})}}]);