(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[61633],{807472:(e,n,t)=>{"use strict";t.d(n,{Z:()=>S});var r=t(727418),o=t.n(r),i=t(45697),a=t.n(i),p=t(124852),l=t.n(p),s=t(485294),c=t.n(s),u=t(472986),d=t.n(u),f=t(805346);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){x(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function h(e,n,t){return n=w(n),function(e,n){if(n&&("object"==m(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,v()?Reflect.construct(n,t||[],w(e).constructor):n.apply(e,t))}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function P(e,n){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},P(e,n)}function x(e,n,t){return(n=O(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){var n=function(e){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!=m(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(n)?n:n+""}var j=function(e){function n(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return x(e=h(this,n,[].concat(r)),"renderLoading",(function(){return e.props.maskLoading?l().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},l().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},l().createElement(f.Z,{msgId:"loading"}),l().createElement(d(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),x(e,"renderRole",(function(n){return l().Children.toArray(e.props.children).filter((function(e){return e.props.role===n}))})),x(e,"hasRole",(function(n){return l().Children.toArray(e.props.children).filter((function(e){return e.props.role===n})).length>0})),x(e,"onClickOut",(function(n){e.props.onClickOut&&e.mask===n.target&&e.props.onClickOut(n)})),e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&P(e,n)}(n,e),t=n,(r=[{key:"render",value:function(){var e=this,n=l().createElement("div",{id:this.props.id,style:b({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},l().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),l().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?l().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):l().createElement("span",null)),t=this.props.draggable?l().createElement(c(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},n):n,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?l().createElement("div",{ref:function(n){e.mask=n},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},t):t}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r}(l().Component);x(j,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),x(j,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const S=j},19664:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>ue});var r=t(893379),o=t.n(r),i=t(72954);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=t(91175),p=t.n(a),l=t(984596),s=t.n(l),c=t(414293),u=t.n(c),d=t(727418),f=t.n(d),m=t(45697),g=t.n(m),b=t(124852),y=t.n(b),h=t(480681),v=t(322843),w=t(22222),P=t(782904),x=t(986069),O=t(805346),j=t(807472),S=t(145959),E=t(49977),C=t.n(E),k=t(699573);const N={addPrintTransformerEpic:function(e){return e.ofType(x.iY).switchMap((function(e){return(0,k.addTransformer)(e.name,e.transformer,e.position),C().Observable.of((0,x.G_)(e.name))}))}};var A=t(650148),I=t(675110),B=t(308316),T=t(800827),L=t(93152),M=t(916651),R=t(86638),_=t(552259),Z=t(624262),z=t(218721),D=t.n(z),F=t(264721),U=t.n(F),W=t(569893),X=t(898631),G=["validations"],$=["style"];function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function K(){return K=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},K.apply(null,arguments)}function H(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function V(e){return function(e){if(Array.isArray(e))return re(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||te(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,pe(r.key),r)}}function q(e,n,t){return n=ee(n),function(e,n){if(n&&("object"==J(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Q()?Reflect.construct(n,t||[],ee(e).constructor):n.apply(e,t))}function Q(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Q=function(){return!!e})()}function ee(e){return ee=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ee(e)}function ne(e,n){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},ne(e,n)}function te(e,n){if(e){if("string"==typeof e)return re(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?re(e,n):void 0}}function re(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?oe(Object(t),!0).forEach((function(n){ae(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ae(e,n,t){return(n=pe(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function pe(e){var n=function(e){if("object"!=J(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!=J(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==J(n)?n:n+""}var le=function(){return null};function se(e){return e.plugin?e:ie(ie({},e),{},{plugin:le})}function ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!e.loadingError&&"cog"!==e.type}const ue={PrintPlugin:f()({loadPlugin:function(e){Promise.all([Promise.all([t.e(66756),t.e(94192),t.e(39151),t.e(76389)]).then(t.bind(t,174884)),Promise.resolve().then(t.bind(t,699573))]).then((function(n){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,p=[],l=!0,s=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(p.push(r.value),p.length!==n);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(s)throw o}}return p}}(t,r)||te(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1],l=i.default.standardItems,c=a.getDefaultPrintingService,d=a.getLayoutName,f=a.getPrintScales,m=a.getNearestZoom,b=function(e){function n(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return ae(e=q(this,n,[].concat(r)),"state",{activeAccordionPanel:0}),ae(e,"getAlternativeBackground",(function(n,t,r){var o=p()(s()(t).map((function(e){return{type:e}})).filter((function(n){return e.isAllowed(n,r)})));return o?p()(n.filter((function(e){return e.type===o.type}))):null})),ae(e,"getItems",(function(n){var t,r,o=e.props.items.filter((function(e){return!n||e.target===n})),i=(t=l[n],r=e.props.items,t.map((function(e){return function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).find((function(n){return n.target===e.id}));return null!=n?n:e}(e,r)})).map(se)).map((function(e){return ie(ie({},e),{},{target:n})}));return[].concat(V(i),V(o)).sort((function(e,n){var t,r;return(null!==(t=e.position)&&void 0!==t?t:0)-(null!==(r=n.position)&&void 0!==r?r:0)}))})),ae(e,"getMapConfiguration",(function(){var n=e.props.printingService.getMapConfiguration();return ie(ie({},n),{},{layers:e.filterLayers(n.layers,e.props.useFixedScales?n.scaleZoom:n.zoom,n.projection)})})),ae(e,"getMapSize",(function(n){var t=n||e.getLayout();return{width:e.props.mapWidth,height:t&&t.map.height/t.map.width*e.props.mapWidth||270}})),ae(e,"getPreviewResolution",(function(n,t){var r=(0,_.Vj)(_.$v,t),o=Math.round(n);return(e.props.useFixedScales?f(e.props.capabilities)[o]:e.props.scales[o])/r})),ae(e,"getLayout",(function(n){var t=n||e.props,r=t.getLayoutName,o=t.printSpec,i=t.capabilities,a=r(o);return p()(i.layouts.filter((function(e){return e.name===a})))})),ae(e,"renderWarning",(function(e){return e?null:y().createElement(h.X2,null,y().createElement(h.JX,{xs:12},y().createElement("div",{className:"print-warning"},y().createElement("span",null,y().createElement(O.Z,{msgId:"print.layoutWarning"})))))})),ae(e,"renderItem",(function(n,t){var r,o,i=t.validations,a=H(t,G),p=null!==(r=n.component)&&void 0!==r?r:n.plugin,l=e.props,s=(l.style,H(l,$)),c=e.props[n.id+"Options"];return y().createElement(p,K({role:"body"},s,n.cfg,a,c,{validation:null==i?void 0:i[null!==(o=n.id)&&void 0!==o?o:n.name]}))})),ae(e,"renderItems",(function(n,t){return e.getItems(n).map((function(n){return e.renderItem(n,t)}))})),ae(e,"renderAccordion",(function(n,t){var r=e.getItems(n);return y().createElement(h.eh,{accordion:!0,activeKey:e.state.activeAccordionPanel,onSelect:function(n){e.setState({activeAccordionPanel:n})}},r.map((function(n,r){var o,i,a;return y().createElement(h.s_,{header:(0,R.S$)(e.context.messages,null!==(o=null!==(i=null===(a=n.cfg)||void 0===a?void 0:a.title)&&void 0!==i?i:n.title)&&void 0!==o?o:""),eventKey:r,collapsible:!0},e.renderItem(n,t))})))})),ae(e,"renderPrintPanel",(function(){var n=e.getLayout(),t=e.getMapConfiguration(),r={layout:n,map:t,layoutName:e.props.getLayoutName(e.props.printSpec),mapSize:e.getMapSize(n),resolutions:(0,_.MR)(null==t?void 0:t.projection),onRefresh:function(){return e.configurePrintMap()},notAllowedLayers:e.isBackgroundIgnored(e.props.layers,null==t?void 0:t.projection),actionConfig:e.props.submitConfig,validations:e.props.printingService.validate(),rotation:u()(e.props.printSpec.rotation)?0:(0,M.convertDegreesToRadian)(Number(e.props.printSpec.rotation)),actions:{print:e.print,addParameter:e.addParameter}};return y().createElement(h.rj,{fluid:!0,role:"body"},e.renderError(),e.renderWarning(n),y().createElement(h.X2,null,y().createElement(h.JX,{xs:12,md:6},e.renderItems("left-panel",r),e.renderAccordion("left-panel-accordion",r)),y().createElement(h.JX,{xs:12,md:6,style:{textAlign:"center"}},e.renderItems("right-panel",r),e.renderItems("buttons",r),e.renderDownload())))})),ae(e,"renderDownload",(function(){return e.props.pdfUrl&&!e.props.usePreview?y().createElement("iframe",{src:e.props.pdfUrl,style:{visibility:"hidden",display:"none"}}):null})),ae(e,"renderError",(function(){return e.props.error?y().createElement(h.X2,null,y().createElement(h.JX,{xs:12},y().createElement("div",{className:"print-error"},y().createElement("span",null,e.props.error)))):null})),ae(e,"renderPreviewPanel",(function(){return e.renderItems("preview-panel",e.props.previewOptions)})),ae(e,"renderBody",(function(){return e.props.pdfUrl&&e.props.usePreview?e.renderPreviewPanel():e.renderPrintPanel()})),ae(e,"addParameter",(function(n,t){e.props.addPrintParameter("params."+n,t)})),ae(e,"isCompatibleWithSRS",(function(e,n){return"EPSG:3857"===e||U()(["wms","wfs","vector","graticule","empty","arcgis"],n.type)||"wmts"===n.type&&D()(n.allowedSRS,e)})),ae(e,"isAllowed",(function(n,t){return-1===e.props.ignoreLayers.indexOf(n.type)&&e.isCompatibleWithSRS((0,M.normalizeSRS)(t),n)})),ae(e,"isBackgroundIgnored",(function(n,t){return!p()((n||e.props.layers).filter((function(n){return"background"===n.group&&n.visibility&&e.isAllowed(n,t)})))})),ae(e,"filterLayers",(function(n,t,r){var o=e.getPreviewResolution(t,r),i=n.filter((function(n){return n.visibility&&(0,Z.T4)(n,o)&&e.isAllowed(n,r)}));if(e.isBackgroundIgnored(n,r)&&e.props.defaultBackground&&e.props.printSpec.defaultBackground){var a=e.getAlternativeBackground(n,e.props.defaultBackground);return a?[ie(ie({},a),{},{visibility:!0})].concat(V(i)):i}return i})),ae(e,"configurePrintMap",(function(n){var t=n||e.props,r=t.map,o=t.capabilities,i=t.minZoom,a=t.configurePrintMap,p=t.useFixedScales,l=t.getZoomForExtent,s=t.maxZoom,c=t.currentLocale,u=t.scales,d=t.layers;if(r&&r.bbox&&o){var g=(0,M.reprojectBbox)([r.bbox.bounds.minx,r.bbox.bounds.miny,r.bbox.bounds.maxx,r.bbox.bounds.maxy],r.bbox.crs,r.projection),b=e.getMapSize();if(p){var y=l(g,b,i,s),h=f(o),v=m(r.zoom,h),w=h[v];a(r.center,y,v,w,d,r.projection,c)}else{var P=u[r.zoom];a(r.center,r.zoom,r.zoom,P,d,r.projection,c)}}})),ae(e,"print",(function(){var n;e.props.setPage(0),e.props.onBeforePrint(),e.props.printingService.print({layers:null===(n=e.getMapConfiguration())||void 0===n?void 0:n.layers,scales:e.props.useFixedScales?f(e.props.capabilities):void 0}).then((function(n){return e.props.onPrint(e.props.capabilities.createURL,ie(ie({},n),e.props.overrideOptions))})).catch((function(n){e.props.printError("Error in printing:"+n.message)}))})),e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&ne(e,n)}(n,e),t=n,(r=[{key:"UNSAFE_componentWillMount",value:function(){this.configurePrintMap()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var n=e.open&&!this.props.open,t=this.props.open&&this.props.syncMapPreview&&(0,_.nd)(this.props.map,e.map),r=e.printSpec.defaultBackground!==this.props.printSpec.defaultBackground||e.printSpec.additionalLayers!==this.props.printSpec.additionalLayers;(n||t||r)&&this.configurePrintMap(e)}},{key:"render",value:function(){return(this.props.capabilities||this.props.error)&&this.props.open?this.props.withContainer?this.props.withPanelAsContainer?y().createElement(h.s_,{className:"mapstore-print-panel",header:y().createElement("span",null,y().createElement("span",{className:"print-panel-title"},y().createElement(O.Z,{msgId:"print.paneltitle"})),y().createElement("span",{className:"print-panel-close panel-close",onClick:this.props.toggleControl})),style:this.props.style},this.renderBody()):y().createElement(j.Z,{start:{x:0,y:80},id:"mapstore-print-panel",style:ie({zIndex:1990},this.props.style)},y().createElement("span",{role:"header"},y().createElement("span",{className:"print-panel-title"},y().createElement(O.Z,{msgId:"print.paneltitle"})),y().createElement("button",{onClick:this.props.toggleControl,className:"print-panel-close close"},this.props.closeGlyph?y().createElement(h.gG,{glyph:this.props.closeGlyph}):y().createElement("span",null,"×"))),this.renderBody()):this.renderBody():null}}])&&Y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r}(y().Component);ae(b,"propTypes",{map:g().object,layers:g().array,capabilities:g().object,printSpec:g().object,printSpecTemplate:g().object,withContainer:g().bool,withPanelAsContainer:g().bool,open:g().bool,pdfUrl:g().string,title:g().string,style:g().object,mapWidth:g().number,mapType:g().string,alternatives:g().array,toggleControl:g().func,onBeforePrint:g().func,setPage:g().func,onPrint:g().func,printError:g().func,configurePrintMap:g().func,getLayoutName:g().func,error:g().string,getZoomForExtent:g().func,minZoom:g().number,maxZoom:g().number,usePreview:g().bool,mapPreviewOptions:g().object,syncMapPreview:g().bool,useFixedScales:g().bool,scales:g().array,ignoreLayers:g().array,defaultBackground:g().oneOfType([g().string,g().arrayOf(g().string)]),closeGlyph:g().string,submitConfig:g().object,previewOptions:g().object,currentLocale:g().string,overrideOptions:g().object,items:g().array,addPrintParameter:g().func,printingService:g().object}),ae(b,"contextTypes",{messages:g().object,plugins:g().object,loadedPlugins:g().object}),ae(b,"defaultProps",{withContainer:!0,withPanelAsContainer:!1,title:"print.paneltitle",toggleControl:function(){},onBeforePrint:function(){},setPage:function(){},onPrint:function(){},configurePrintMap:function(){},printSpecTemplate:{},getLayoutName:d,getZoomForExtent:_.LF,pdfUrl:null,mapWidth:370,mapType:X.Bk.OPENLAYERS,minZoom:1,maxZoom:23,usePreview:!0,mapPreviewOptions:{enableScalebox:!1,enableRefresh:!1},syncMapPreview:!0,useFixedScales:!1,scales:[],ignoreLayers:["google","bing"],defaultBackground:["osm","wms","empty"],closeGlyph:"1-close",submitConfig:{buttonConfig:{bsSize:"small",bsStyle:"primary"},glyph:""},previewOptions:{buttonStyle:"primary"},style:{},currentLocale:"en-US",overrideOptions:{},items:[],printingService:c()});var S=(0,w.P1)([function(e){return e.controls.print&&e.controls.print.enabled||e.controls.toolbar&&"print"===e.controls.toolbar.active},function(e){return e.print&&e.print.capabilities},A.DX,function(e){return e.print&&e.print.pdfUrl},function(e){return e.print&&e.print.error},T.Od,I.l2,W.K,T.up,function(e){return e.browser&&(!e.browser.ie||e.browser.ie11)},B.Pz,L.$v],(function(e,n,t,r,o,i,a,p,l,s,c,u){return{open:e,capabilities:n,printSpec:t,pdfUrl:r,error:o,map:i,layers:[].concat(V(a.filter(ce)),V(null!=t&&t.additionalLayers?p.map((function(e){return e.options})).filter((function(e){var n="vector"===e.type,t=Array.isArray(e.features)&&e.features.length>0;return!e.loadingError&&(!n||n&&t)})):[])),scales:l,usePreview:s,currentLocale:c,mapType:u}})),E=(0,v.$j)(S,{toggleControl:P.Xi.bind(null,"print",null),onPrint:x.gV,printError:x.OS,onBeforePrint:x.MW,setPage:P.Xg.bind(null,"print","currentPage"),configurePrintMap:x.h9,addPrintParameter:x.eT})(b);e(E)}))},enabler:function(e){return e.print&&e.print.enabled||e.toolbar&&"print"===e.toolbar.active}},{disablePluginIf:"{state('mapType') === 'cesium' || !state('printEnabled')}",Toolbar:{name:"print",position:7,help:y().createElement(O.Z,{msgId:"helptexts.print"}),tooltip:"printbutton",icon:y().createElement(h.gG,{glyph:"print"}),exclusive:!0,panel:!0,priority:1},BurgerMenu:{name:"print",position:2,tooltip:"printToolTip",text:y().createElement(O.Z,{msgId:"printbutton"}),icon:y().createElement(h.gG,{glyph:"print"}),action:P.Xi.bind(null,"print",null),priority:3,doNotHide:!0},SidebarMenu:{name:"print",position:3,tooltip:"printbutton",text:y().createElement(O.Z,{msgId:"printbutton"}),icon:y().createElement(h.gG,{glyph:"print"}),action:P.Xi.bind(null,"print",null),doNotHide:!0,toggle:!0,priority:2}}),reducers:{print:S.Z},epics:ie({},N)}},569893:(e,n,t)=>{"use strict";t.d(n,{K:()=>i});var r=t(227361),o=t.n(r),i=function(e){return o()(e,"additionallayers")||[]}},72954:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(923645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".msgapi #mappreview-scalebox {\n    position: relative;\n    top: -36px;\n    width: 150px;\n    left: 10px;\n}\n\n.msgapi .print-error {\n    height: 100px;\n    color: #600;\n    background-color: #E8BABA;\n    border: solid #600 1px;\n    border-radius: 10px;\n    padding: 10px;\n}\n.msgapi .print-error span, .msgapi .print-warning span {\n    display: inline-block;\n    max-height: 80px;\n    overflow: auto;\n    width: 100%;\n}\n.msgapi .print-warning {\n    height: 50px;\n    color: #660;\n    background-color: #E6E8BA;\n    border: solid #660 1px;\n    border-radius: 10px;\n    padding: 10px;\n}\n.msgapi .print-preview-panel .spinner {\n    display: inline-block;\n}\n\n.msgapi .print-mappreview-refresh {\n    position: relative;\n    top: -83px;\n    right: -155px;\n    z-index: 1000;\n}\n.msgapi #mapstore-print-panel.modal-dialog {\n    z-index: 2000;\n}\n\n.msgapi #mapstore-print-panel .modal-body {\n    max-height: calc(100vh - 190px);\n    overflow-y: auto;\n}\n\n.msgapi .mapstore-print-panel {\n    width: 850px;\n    position: absolute;\n    top: 50px;\n    right: 60px;\n    zIndex: 100;\n}\n\n.msgapi .mapstore-print-preview-img-wrapper {\n    position: relative;\n    top: 0;\n    height: 500px;\n    width: 100%;\n    overflow: auto;\n}\n\n.msgapi .mapstore-print-preview-img-wrapper img {\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.msgapi .mapstore-print-panel .form-inline label {\n    margin-right: 20px;\n}\n\n.msgapi .mapstore-print-panel .print-download {\n    margin-right: 10px;\n    display: inline-block;\n    width: 30px;\n    height: 34px;\n    border: solid 1px #CCC;\n    padding: 7px;\n    border-radius: 4px;\n    padding-right: 25px;\n    padding-left: 11px;\n    top: 2px;\n    position: relative;\n}\n\n.msgapi .print-layout .panel-title {\n    padding-left: 10px;\n}\n\n.msgapi .print-layout .panel-title a{\n    text-decoration: none;\n}\n\n.msgapi .print-layout .panel-title a:hover{\n    color: #d6d6d6;\n}\n\n.msgapi .print-legend-options .panel-title {\n    padding-left: 10px;\n}\n\n.msgapi .print-legend-options .panel-title a{\n    text-decoration: none;\n}\n\n.msgapi .print-legend-options .panel-title a:hover{\n    color: #d6d6d6;\n}\n\n\n@media (min-width: 992px) {\n    .msgapi #mapstore-print-panel {\n        width: 825px;\n    }\n}\n\n@media (max-width: 991px) {\n    .msgapi #mapstore-print-panel {\n        width: 700px;\n    }\n}\n\n@media (max-width: 767px) {\n    .msgapi #mapstore-print-panel {\n        width: 98%;\n    }\n}\n\n.msgapi #mapstore-print-panel .modal-body .print-mappreview-refresh {\n    top: -96px;\n}\n\n.msgapi #mapstore-print-panel .print-submit {\n    float: right;\n}\n\n@media (min-width: 768px) {\n    .msgapi #mapstore-print-panel input[type=radio] {\n        margin: 0 8px 0 20px;\n    }\n}\n\n.msgapi #mapstore-print-panel .print-map-preview {\n    margin-bottom: 15px;\n}\n\n.msgapi #mapstore-print-panel .panel-default {\n    border: none;\n}\n\n.msgapi #mapstore-print-panel .panel-heading .panel-title {\n    font-weight: bold;\n}\n\n.msgapi #mapstore-print-panel .panel-heading {\n    padding-left: 0;\n    background-color: transparent;\n}\n\n.msgapi #mapstore-print-panel .panel-body {\n    padding: 10px;\n}\n\n.msgapi #mapstore-print-panel .form-control {\n    padding: 0 10px;\n    height: 25px;\n}\n\n.msgapi #mapstore-print-panel .print-download {\n    margin-right: 10px;\n}\n\n.msgapi #mapstore-print-panel .print-legend-options .container-fluid {\n    padding-left: 0;\n    padding-right: 0;\n}\n",""]);const i=o}}]);