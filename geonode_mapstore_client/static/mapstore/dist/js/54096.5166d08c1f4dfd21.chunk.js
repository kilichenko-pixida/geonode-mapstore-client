"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[54096],{54096:(e,t,n)=>{n.r(t),n.d(t,{default:()=>X});var r=n(124852),i=n.n(r),o=n(271418),a=n(455877),l=n.n(a),u=n(606162),c=n.n(u),s=n(21090),d=n(406557),f=n.n(d),p=n(590937),m=n(624847),v=n(815135);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var g=(0,v.Z)(m.Z),b=function(e){return e.replace(/\./g,"-")};const h=(0,p.Ej)("option",{beginDrag:function(e){return{id:e.id,index:e.index}}},(function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging()}}))((0,p.GR)("option",{drop:function(e){var t=e.onMoveEnd;(void 0===t?function(){}:t)()},hover:function(e,t){var n=t.getItem(),r=e.id,i=e.index,o=e.onMove,a=void 0===o?function(){}:o,l=document.querySelector("[data-id=item-".concat(b(r),"]"));if(null==l||!l.getBoundingClientRect)return null;var u=n.index,c=i;if(u===c)return null;var s=l.getBoundingClientRect(),d=(s.bottom-s.top)/2,f=t.getClientOffset().y-s.top;return u<c&&f<d||u>c&&f>d||(a(u,c),n.index=c),null}},(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}}))((function(e){var t,n,a=e.id,l=e.title,u=e.selected,c=e.onSelect,s=e.onRemove,d=e.isDragging,f=e.connectDragPreview,p=e.connectDropTarget,m=e.connectDragSource,v=e.isSortable,h=(0,r.useRef)(),w=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],u=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,i=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),E=w[0],S=w[1],O=d?0:1,I=v?m(i().createElement("div",{className:"grab-handle",onClick:function(e){return e.stopPropagation()}},i().createElement(o.gG,{glyph:"grab-handle"}))):null,T=i().createElement("li",{"data-id":"item-".concat(b(a)),className:"ms-map-views-item".concat(u?" selected":"").concat(E?" focus":""),style:{opacity:O},onClick:function(){var e;return null==h||null===(e=h.current)||void 0===e?void 0:e.click()},tabIndex:0},I,i().createElement("div",{className:"ms-map-views-item-title"},l),i().createElement("div",{onClick:function(e){return e.stopPropagation()}},i().createElement("button",{ref:h,style:{left:0,visibility:"hidden",position:"absolute",width:0,height:0,overflow:"hidden"},onClick:c,onFocus:function(){return S(!0)},onBlur:function(){return S(!1)}},"select ",l," item"),s&&i().createElement(g,{className:"square-button-md",bsStyle:u?"primary":"default",onClick:s,tooltipId:"mapViews.removeView"},i().createElement(o.gG,{glyph:"trash"}))));return v?f(p(T)):T}))),w=function(e){var t=e.views,n=e.selectedId,r=e.onSelect,o=e.onRemove,a=e.onMove,l=e.onMoveEnd,u=e.options,c=e.edit;return i().createElement("div",{className:"ms-map-views-list"},i().createElement("div",{className:"ms-map-views-list-header"},u),i().createElement("div",{className:"ms-map-views-list-body"},i().createElement("ul",null,t.map((function(e,t){return i().createElement(h,{key:e.id,id:e.id,selected:n===e.id,index:t,title:e.title,onSelect:function(){return r(e)},onRemove:c?function(){return o(e)}:void 0,isSortable:!!c,onMove:a,onMoveEnd:l})})))))};var E=["left","active"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(null,arguments)}var O=(0,v.Z)((function(e){var t=e.left,n=e.active,r=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,E);return i().createElement("div",S({},r,{className:"ms-map-view-progress-tick".concat(n?" active":""),style:{left:t}}))}));const I=function(e){var t=e.play,n=e.progress,r=e.segments,o=e.totalLength,a=e.onSelect,l=e.currentIndex;return i().createElement("div",{className:"ms-map-view-progress-container".concat(t?" playing":"")},i().createElement("div",{className:"ms-map-view-progress-bar",style:{width:"".concat(n,"%")}}),null==r?void 0:r.map((function(e,t){var n=e.duration,r=e.view;return i().createElement(O,{key:t,tooltip:null==r?void 0:r.title,active:t<=l,tooltipPosition:"bottom",left:"".concat(Math.round(n/o*100),"%"),onClick:function(){return a(r)}})})))};var T=n(638445),P=n(379853),C=n(805346),N=n(532425),V=n(898631),j=["mapType","onSelectView","onUpdateViews","onUpdateResources","onUpdateServices","views","selectedId","defaultTitle","layers","locale","resources","services","selectedService","defaultServices","defaultSelectedService","edit","hide"];function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(null,arguments)}function D(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],u=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,i=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){if(e){if("string"==typeof e)return G(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e,t,n){return(t=function(e){var t=function(e){if("object"!=k(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==k(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=(0,v.Z)(m.Z),F=q(q(q({},V.Bk.LEAFLET,(0,r.lazy)((function(){return n.e(93004).then(n.bind(n,943289))}))),V.Bk.OPENLAYERS,(0,r.lazy)((function(){return n.e(93336).then(n.bind(n,177628))}))),V.Bk.CESIUM,(0,r.lazy)((function(){return Promise.all([n.e(65792),n.e(86103),n.e(77458),n.e(45110),n.e(39512),n.e(9340),n.e(50172),n.e(78384)]).then(n.bind(n,858979))}))),L=(0,r.lazy)((function(){return Promise.all([n.e(82515),n.e(74998),n.e(91533)]).then(n.bind(n,291533))})),_="UPDATE_VIEWS_STATE",B="UNDO_VIEWS_STATE",z="REDO_VIEWS_STATE",H=q({},_,(function(e,t){return M(M({},e),t)})),W=(0,s.ZP)((function(e,t){return(H[t.type]||f())(e,t.payload)}),{limit:20,undoType:B,redoType:z,jumpType:"",jumpToPastType:"",jumpToFutureType:"",clearHistoryType:""}),$=function(e){var t;return null!==(t=null==e?void 0:e.reduce((function(e,t){var n;return e+1e3*(null!==(n=null==t?void 0:t.duration)&&void 0!==n?n:P.Ih.DURATION)}),0))&&void 0!==t?t:0};const X=function(e){var t,n,a,u,s,d,f=e.mapType,p=e.onSelectView,m=void 0===p?function(){}:p,v=e.onUpdateViews,y=void 0===v?function(){}:v,g=e.onUpdateResources,b=void 0===g?function(){}:g,h=e.onUpdateServices,E=void 0===h?function(){}:h,S=e.views,O=void 0===S?[]:S,V=e.selectedId,k=e.defaultTitle,x=void 0===k?"Map View":k,G=e.layers,U=e.locale,q=e.resources,H=void 0===q?[]:q,X=e.services,Y=e.selectedService,J=(e.defaultServices,e.defaultSelectedService),K=e.edit,Q=e.hide,ee=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,j),te=R((0,r.useReducer)(W,{}),2),ne=te[0],re=te[1],ie=function(e){return re({type:_,payload:{views:e}})};(0,r.useEffect)((function(){var e;re({type:_,payload:{views:(e={views:O,resources:H}).views,resources:e.resources}})}),[]);var oe=R((0,r.useState)(0),2),ae=oe[0],le=oe[1],ue=R((0,r.useState)({}),2),ce=ue[0],se=ue[1];function de(e){var t;e===B&&(t=null==ne?void 0:ne.past[(null==ne?void 0:ne.past.length)-1]),e===z&&(t=null==ne?void 0:ne.future[(null==ne?void 0:ne.future.length)-1]),re({type:e}),y(t.views),b(t.resources),le(ae+1)}var fe=(null==ne?void 0:ne.present)||{},pe=fe.views,me=void 0===pe?[]:pe,ve=fe.resources,ye=void 0===ve?[]:ve,ge=R((0,r.useState)(""),2),be=ge[0],he=ge[1],we=R((0,r.useState)(!0),2),Ee=we[0],Se=we[1],Oe=R((0,r.useState)(!1),2),Ie=Oe[0],Te=Oe[1],Pe=R((0,r.useState)(!1),2),Ce=Pe[0],Ne=Pe[1],Ve=me.find((function(e){return e.id===V})),je=me.indexOf(Ve),ke=R((0,r.useState)(!1),2),Ae=ke[0],De=ke[1],Re=(0,r.useRef)();function xe(e){var t=me.length>0&&c()(me.map((function(e){var t,n=new RegExp("".concat(x," \\(([0-9]+)\\)")),r=null===(t=(e.title||"").match(n))||void 0===t?void 0:t[1];return r?parseFloat(r):void 0})).filter((function(e){return void 0!==e}))),n=t&&!isNaN(t)?t:0,r=M(M({duration:P.Ih.DURATION,flyTo:!0},e||Re.current.getView()),{},{title:"".concat(x," (").concat(n+1,")"),id:l()()}),i=-1===je?[].concat(D(me),[r]):me.reduce((function(e,t,n){return[].concat(D(e),n===je?[t,r]:[t])}),[]);ie(i),m(r.id),y(i),X||0!==me.length||E(J)}function Ge(e,t){var n;e&&null!=Re&&null!==(n=Re.current)&&void 0!==n&&n.setView&&Re.current.setView(t?e:M(M({},e),{},{flyTo:!1})),m(e.id)}var Ue=(0,r.useRef)();Ue.current=me;var Me=(0,r.useCallback)((function(e,t){var n=D(Ue.current);n.splice(e,1),n.splice(t,0,Ue.current[e]),ie(n)}),[]);function qe(e){me[je+e]&&Ge(me[je+e])}var Ze=function(e){var t=e.currentIndex,n=e.views,i=e.onInit,o=e.onChangeView,a=R((0,r.useState)(!1),2),l=a[0],u=a[1],c=R((0,r.useState)(0),2),s=c[0],d=c[1],f=$(n),p=n.map((function(e,t){return{view:e,duration:$(n.filter((function(e,n){return n<t})))}}));return(0,r.useEffect)((function(){var e,n;l||d(Math.round((null!==(e=null==p||null===(n=p[t])||void 0===n?void 0:n.duration)&&void 0!==e?e:0)/f*100))}),[t,l]),(0,r.useEffect)((function(){function e(){"visible"!==document.visibilityState&&u(!1)}var r,a=!1;if(l){var c,s=Date.now(),m=-1===t?0:t,v=null==p||null===(c=p[m])||void 0===c?void 0:c.duration,y=s,g=n[m>=n.length?0:m];i(g);var b=function(){if(!a){var e,t;r=requestAnimationFrame(b);var i=Date.now(),l=i-s,u=1e3*(null!==(e=null===(t=g)||void 0===t?void 0:t.duration)&&void 0!==e?e:P.Ih.DURATION);if(l>=u){s=Date.now();var c=m>=n.length?0:m,p=c+1>=n.length?0:c+1,h=n[p];o(h),g=h,m=p}var w=i+v-y,E=Math.round(w/f*100);Math.round(l/u*100)%5==0&&d(E),w>=f&&(y=Date.now(),v=0)}};b(m),document.addEventListener("visibilitychange",e)}return function(){a=!0,r&&cancelAnimationFrame(r),l&&document.removeEventListener("visibilitychange",e)}}),[l]),{play:l,setPlay:u,navigationProgress:s,viewsTimeSegments:p,viewsTimeTotalLength:f}}({currentIndex:je,views:me,onInit:function(e){Ge(e),he("")},onChangeView:function(e){Ge(e,!0)}}),Fe=Ze.play,Le=Ze.setPlay,_e=Ze.navigationProgress,Be=Ze.viewsTimeSegments,ze=Ze.viewsTimeTotalLength,He=(0,r.useRef)(!1);(0,r.useEffect)((function(){Ae&&!He.current&&(He.current=!0,Ve&&setTimeout((function(){Re.current.setView(M(M({},Ve),{},{flyTo:!1}))}),500))}),[Ae]);var We=F[f];return!We||!K&&0===(null==me?void 0:me.length)||Q?null:i().createElement(i().Fragment,null,i().createElement(r.Suspense,{fallback:i().createElement("div",null)},i().createElement(We,A({},ee,{selectedId:V,views:me,apiRef:function(e){Re.current=e,Ae||De(!0)},showViewsGeometries:Ie,resources:ye,showClipGeometries:Ce}))),K&&0===(null==me?void 0:me.length)?i().createElement("div",{className:"ms-map-views"},i().createElement("div",{className:"ms-map-views-wrapper"},i().createElement("div",{className:"ms-map-views-header"},i().createElement("div",{className:"ms-map-views-title"},i().createElement(C.Z,{msgId:"mapViews.addInitialView"})),i().createElement(o.Si,null,i().createElement(o.hE,null,((null==ne||null===(t=ne.past)||void 0===t?void 0:t.length)||0)>0&&i().createElement(Z,{bsStyle:"primary",className:"square-button-md",disabled:0===((null==ne||null===(n=ne.past)||void 0===n?void 0:n.length)||0),onClick:function(){return de(B)},tooltipId:"mapViews.undoChanges",tooltipPosition:"bottom"},i().createElement(o.gG,{glyph:"undo"})),i().createElement(Z,{bsStyle:"primary",className:"square-button-md",onClick:xe.bind(null,void 0),tooltipId:"mapViews.addNewView",tooltipPosition:"bottom"},i().createElement(o.gG,{glyph:"plus"}))))))):i().createElement("div",{className:"ms-map-views",onClick:function(e){return e.stopPropagation()}},i().createElement("div",{className:"ms-map-views-wrapper"},i().createElement(I,{play:Fe,currentIndex:je,progress:_e,segments:Be,totalLength:ze,onSelect:function(e){Fe&&Le(!1),Ge(e)}}),i().createElement("div",{className:"ms-map-views-header"},null!=Ve&&Ve.description&&!be?i().createElement(Z,{className:"square-button-md no-border",style:{borderRadius:"50%",marginRight:4},onClick:function(){return Se(!Ee)},tooltipId:Ee?"mapViews.hideDescription":"mapViews.showDescription",tooltipPosition:"bottom"},i().createElement(o.gG,{glyph:Ee?"chevron-down":"chevron-right"})):null,i().createElement("div",{className:"ms-map-views-title"},"settings"===be?i().createElement(T.Z,{key:"".concat(null==Ve?void 0:Ve.id,"-").concat(ae),value:null==Ve?void 0:Ve.title,onChange:function(e){return t={title:e},n=me.map((function(e){return e.id===Ve.id?M(M({},e),t):e})),ie(n),void y(n);var t,n}}):null==Ve?void 0:Ve.title),i().createElement(o.Si,null,!Fe&&i().createElement(o.hE,null,i().createElement(Z,{bsStyle:"list"===be?"success":"primary",className:"square-button-md",active:"list"===be,onClick:function(){return he("list"!==be?"list":"")},tooltipId:"list"===be?"mapViews.hideViewsList":"mapViews.showViewsList",tooltipPosition:"bottom"},i().createElement(o.gG,{glyph:"list"}))),!Fe&&K&&i().createElement(o.hE,null,i().createElement(Z,{bsStyle:"primary",className:"square-button-md",disabled:"settings"===be,onClick:xe.bind(null,void 0),tooltipId:Ve?"mapViews.addNewViewBelowSelected":"mapViews.addNewView",tooltipPosition:"bottom"},i().createElement(o.gG,{glyph:"plus"})),i().createElement(Z,{bsStyle:"primary",className:"square-button-md",disabled:!Ve||"settings"===be,onClick:xe.bind(null,Ve),tooltipId:"mapViews.copyCurrentView",tooltipPosition:"bottom"},i().createElement(o.gG,{glyph:"duplicate"})),i().createElement(Z,{bsStyle:"settings"===be?"success":"primary",className:"square-button-md",active:"settings"===be,disabled:!Ve,onClick:function(){return he("settings"!==be?"settings":"")},tooltipId:"settings"===be?"mapViews.stopEdit":"mapViews.edit",tooltipPosition:"bottom"},i().createElement(o.gG,{glyph:"pencil"})),i().createElement(Z,{bsStyle:"primary",className:"square-button-md",disabled:0===((null==ne||null===(a=ne.past)||void 0===a?void 0:a.length)||0),onClick:function(){return de(B)},tooltipId:"mapViews.undoChanges",tooltipPosition:"bottom"},i().createElement(o.gG,{glyph:"undo"})),i().createElement(Z,{bsStyle:"primary",className:"square-button-md",disabled:0===((null==ne||null===(u=ne.future)||void 0===u?void 0:u.length)||0),onClick:function(){return de(z)},tooltipId:"mapViews.redoChanges",tooltipPosition:"bottom"},i().createElement(o.gG,{glyph:"redo"}))),i().createElement(o.hE,null,i().createElement(Z,{bsStyle:"primary",className:"square-button-md",onClick:function(){return Ge(me[0])},disabled:0===je||Fe,tooltipId:"mapViews.gotToFirstView",tooltipPosition:"bottom"},i().createElement(o.gG,{glyph:"fast-backward"})),i().createElement(Z,{bsStyle:"primary",className:"square-button-md",onClick:function(){return qe(-1)},disabled:!me[je-1]||Fe,tooltipId:"mapViews.gotToPreviousView",tooltipPosition:"bottom"},i().createElement(o.gG,{glyph:"step-backward"})),i().createElement(Z,{bsStyle:"primary",className:"square-button-md",active:!!Fe,disabled:1===(null==me?void 0:me.length),onClick:function(){return Le(!Fe)},tooltipId:Fe?"mapViews.pause":"mapViews.play",tooltipPosition:"bottom"},i().createElement(o.gG,{glyph:Fe?"pause":"play"})),i().createElement(Z,{bsStyle:"primary",className:"square-button-md",onClick:function(){return qe(1)},disabled:!me[je+1]||Fe,tooltipId:"mapViews.gotToNextView",tooltipPosition:"bottom"},i().createElement(o.gG,{glyph:"step-forward"})),i().createElement(Z,{bsStyle:"primary",className:"square-button-md",onClick:function(){return Ge(me[(null==me?void 0:me.length)-1])},disabled:je===(null==me?void 0:me.length)-1||Fe,tooltipId:"mapViews.gotToLastView",tooltipPosition:"bottom"},i().createElement(o.gG,{glyph:"fast-forward"}))))),i().createElement("div",{className:"ms-map-views-body"},"list"===be&&i().createElement(w,{views:me,edit:K,selectedId:null==Ve?void 0:Ve.id,onSelect:Ge,onMove:Me,onMoveEnd:function(){y(me)},onRemove:function(e){var t=me.filter((function(t){return t.id!==e.id}));ie(t),y(t)},options:i().createElement(i().Fragment,null,(null===(s=Re.current)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.showClipGeometriesEnabled)&&i().createElement(o.XZ,{checked:Ie,onChange:function(){return Te(!Ie)}},i().createElement(C.Z,{msgId:"mapViews.showViewsGeometries"})))}),"settings"===be&&Ve&&i().createElement(r.Suspense,{fallback:i().createElement("div",{style:{display:"flex",justifyContent:"center",padding:8,width:"100%"}},i().createElement(N.Z,{size:30}))},i().createElement(L,{key:"".concat(Ve.id,"-").concat(ae),expandedSections:ce,onExpandSection:function(e){return se((function(t){return M(M({},t),e)}))},view:Ve,api:Re.current,onChange:function(e){var t=me.map((function(t){return t.id===e.id?e:t}));ie(t),y(t)},onCaptureView:function(e){var t=me.map((function(t){return t.id===e.id?M(M({},e),Re.current.getView()):t}));ie(t),y(t)},layers:G,locale:U,services:X,selectedService:Y,resources:ye,onUpdateResource:function(e,t){var n=ye.find((function(t){return t.id===e}))?ye.map((function(n){return n.id===e?{id:e,data:t}:n})):[].concat(D(ye),[{id:e,data:t}]);!function(e){re({type:_,payload:{resources:e}})}(n),b(n)},showClipGeometries:Ce,onShowClipGeometries:Ne})))),!be&&Ee&&(null==Ve?void 0:Ve.description)&&i().createElement("div",{className:"ms-map-views-description"},i().createElement("div",{dangerouslySetInnerHTML:{__html:Ve.description}}))))}},638445:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(124852),i=n.n(r),o=n(271418),a=n(697111),l=n(993451),u=["debounceTime"],c=["fallbackValue"];function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],u=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,i=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(null,arguments)}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=(0,a.Z)("onChange","value")((0,l.Z)("placeholder")((function(e){e.debounceTime;var t=p(e,u);return i().createElement(o.NI,f({},t,{onChange:function(e){return t.onChange(e.target.value)}}))})));const v=function(e){var t,n,o=e.fallbackValue,a=p(e,c),l=s((0,r.useState)(null!==(t=a.value)&&void 0!==t?t:o),2),u=l[0],d=l[1],v=s((0,r.useState)(null!==(n=a.value)&&void 0!==n?n:o),2),y=v[0],g=v[1],b=s((0,r.useState)(0),2),h=b[0],w=b[1],E=(0,r.useRef)(!1),S=(0,r.useRef)();function O(e){var t=!isNaN(parseFloat(e));return t&&void 0!==a.min&&e<a.min?{changed:!0,value:a.min}:t&&void 0!==a.max&&e>a.max?{changed:!0,value:a.max}:{changed:!1,value:t?parseFloat(e):e}}return S.current=u,(0,r.useEffect)((function(){var e;S.current!==a.value&&d(null!==(e=a.value)&&void 0!==e?e:o)}),[a.value]),i().createElement(m,f({},a,{key:h,value:u,onChange:function(e){if(E.current){var t=e,n=!0;if("number"===a.type){var r=O(t).changed;(""===t||r)&&(n=!1)}d(t),n&&a.onChange(t)}},onChangeNoDebounce:g,onBlur:function(){if("number"===a.type)if(""===y)a.onChange(void 0),d(o),w((function(e){return e+1}));else{var e=O(y).value;a.onChange(e),w((function(e){return e+1})),d(e)}E.current=!1},onFocus:function(){E.current=!0}}))}},21090:(e,t)=>{var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.ZP=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r=t.debug;var l={initialState:t.initialState,initTypes:f(t.initTypes,["@@redux/INIT","@@INIT"]),limit:t.limit,filter:t.filter||function(){return!0},undoType:t.undoType||a.UNDO,redoType:t.redoType||a.REDO};return l.history=t.initialHistory||d(l.initialState),0===l.initTypes.length&&console.warn("redux-undo: supply at least one action type in initTypes to ensure initial state"),function(t,a){!function(e,t){if(r){var n=["action",e.type];console.group?(n.unshift("%credux-undo","font-style: italic"),console.groupCollapsed.apply(console,n),console.log("received",{state:t,action:e})):i.apply(void 0,n)}}(a,t);var f=void 0;switch(a.type){case l.undoType:return f=function(e){i("undo",{history:e});var t=e.past,n=e.present,r=e.future;return t.length<=0?e:{past:t.slice(0,t.length-1),present:t[t.length-1],future:[n].concat(r)}}(t),i("after undo",f),o(),f?s(t,f):t;case l.redoType:return f=function(e){i("redo",{history:e});var t=e.past,n=e.present,r=e.future;return r.length<=0?e:{future:r.slice(1,r.length),present:r[0],past:[].concat(t,[n])}}(t),i("after redo",f),o(),f?s(t,f):t;default:if(f=e(t&&t.present,a),l.initTypes.some((function(e){return e===a.type})))return i("reset history due to init action"),o(),c(n({},t,d(f)));if(l.filter&&"function"==typeof l.filter&&!l.filter(a,f,t&&t.present))return i("filter prevented action, not storing it"),o(),c(n({},t,{present:f}));var p=function(e,t,n){i("insert",{state:t,history:e,free:n-u(e)});var r=e.past,o=e.present,a=n&&u(e)>=n;return void 0===o?{past:[],present:t,future:[]}:{past:[].concat(r.slice(a?1:0),[o]),present:t,future:[]}}(t&&void 0!==t.present?t:l.history,f,l.limit);return i("after insert",{history:p,free:l.limit-u(p)}),o(),c(n({},t,p))}}};var r=void 0;function i(){if(r){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];console.group||t.unshift("%credux-undo","font-style: italic"),console.log.apply(console,t)}}function o(){if(r)return console.groupEnd&&console.groupEnd()}var a={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO"};t.MF=a;var l={undo:function(){return{type:a.UNDO}},redo:function(){return{type:a.REDO}}};function u(e){var t=e.past,n=e.future;return t.length+1+n.length}function c(e){return n({},e,{history:e})}function s(e,t){return c(n({},e,t))}function d(e){return{past:[],present:e,future:[]}}function f(e){var t=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return Array.isArray(e)?e:"string"==typeof e?[e]:t}t.zF=l}}]);