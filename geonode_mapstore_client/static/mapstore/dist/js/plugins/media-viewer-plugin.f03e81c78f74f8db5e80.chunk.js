(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[92184],{134990:(e,t,n)=>{"use strict";n.d(t,{D7:()=>c,mN:()=>l,vb:()=>s,KT:()=>f,QK:()=>E,cc:()=>p,Gx:()=>O,XH:()=>d,lX:()=>m,tP:()=>y,Dq:()=>v,LE:()=>S,SW:()=>R,si:()=>T,i2:()=>g,IY:()=>b,Zf:()=>h,ij:()=>_,Hb:()=>G,Mk:()=>P,c:()=>N,NZ:()=>D,Cx:()=>w,wb:()=>C,km:()=>I,un:()=>A,Ro:()=>U,jr:()=>j,ZY:()=>Y,EQ:()=>L,W$:()=>k,mk:()=>M,U3:()=>x,aF:()=>Z,IH:()=>V,rp:()=>W,D_:()=>B,zJ:()=>F,wJ:()=>H,OS:()=>z,YP:()=>Q,Ct:()=>q,Od:()=>X,y6:()=>$,g5:()=>J,_e:()=>K,DF:()=>ee,GD:()=>te,K0:()=>ne,kB:()=>re,Xn:()=>oe,G5:()=>ie,Vx:()=>ue,RZ:()=>ae,pB:()=>ce,$A:()=>le,m7:()=>se,YM:()=>fe,o2:()=>Ee,ql:()=>pe,c0:()=>Oe,Fu:()=>de,WE:()=>me,fD:()=>ye,EE:()=>ve});var r=n(747037),o=n.n(r),i=n(455877),u=n.n(i),a=n(192579),c="GEOSTORY:ADD",l="GEOSTORY:ADD_RESOURCE",s="GEOSTORY:CHANGE_MODE",f="GEOSTORY:CLEAR_SAVE_ERROR",E="GEOSTORY:EDIT_RESOURCE",p="GEOSTORY:EDIT_WEBPAGE",O="GEOSTORY:SCROLLING",d="GEOSTORY:LOAD_GEOSTORY",m="GEOSTORY:LOADING_GEOSTORY",y="GEOSTORY:MOVE",v="GEOSTORY:REMOVE",S="GEOSTORY:SAVE_STORY",R="GEOSTORY:SAVE_ERROR",T="GEOSTORY:STORY_SAVED",g="GEOSTORY:SELECT_CARD",b="GEOSTORY:SET_CONTROL",h="GEOSTORY:SET_RESOURCE",_="GEOSTORY:SET_CURRENT_STORY",G="GEOSTORY:SET_WEBPAGE_URL",P="GEOSTORY:TOGGLE_CARD_PREVIEW",N="GEOSTORY:TOGGLE_SETTINGS_PANEL",D="GEOSTORY:TOGGLE_SETTING",w="GEOSTORY:TOGGLE_CONTENT_FOCUS",C="GEOSTORY:UPDATE",I="GEOSTORY:UPDATE_SETTING",A="GEOSTORY:UPDATE_CURRENT_PAGE",U="GEOSTORY:REMOVE_RESOURCE",j="GEOSTORY:SET_PENDING_CHANGES",Y="GEOSTORY:SET_UPDATE_URL_SCROLL",L="GEOSTORY:UPDATE_MEDIA_EDITOR_SETTINGS",k="GEOSTORY:HIDE_CAROUSEL_ITEMS",M="GEOSTORY:ENABLE_DRAW",x="GEOSTORY:EXPORT",Z="GEOSTORY:IMPORT",V=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e};return{type:c,id:n&&n.id||u()(),path:e,position:t,element:o()(n)&&(0,a.nq)(n,r)||n}},W=function(e,t,n){return{type:l,id:e,mediaType:t,data:n}},B=function(e){return{type:s,mode:e?a.nl.EDIT:a.nl.VIEW}},F=function(e,t,n){return{type:E,id:e,mediaType:t,data:n}},H=function(e,t){return{type:d,id:e,options:t}},z=function(e){return{type:"GEOSTORY:GEOSTORY_LOADED",id:e}},Q=function(){return{type:m,value:arguments.length>0&&void 0!==arguments[0]&&arguments[0],name:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading"}},q=function(e){return{type:"GEOSTORY:LOAD_GEOSTORY_ERROR",error:e}},X=function(e){return{type:v,path:e}},$=function(e){return{type:R,error:e}},J=function(e,t){return{type:b,control:e,value:t}},K=function(e){return{type:g,card:e}},ee=function(e){return{type:h,resource:e}},te=function(e){return{type:T,id:e}},ne=function(e){return{type:_,story:e}},re=function(){return{type:P}},oe=function(e){return{type:D,option:e}},ie=function(){return{type:N,withSave:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},ue=function(e,t){return{type:C,path:e,element:t,mode:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"replace"}},ae=function(e){var t=e.sectionId,n=e.columnId;return{type:A,sectionId:t,columnId:n}},ce=function(e,t,n){return{type:y,source:e,target:t,position:n}},le=function(e,t,n,r,o){return{type:w,status:e,target:t,selector:n,hideContent:r,path:o}},se=function(e,t){return{type:I,prop:e,value:t}},fe=function(e){return{type:G,src:e}},Ee=function(e){var t=e.path;return{type:p,path:t,owner:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GEOSTORY"}},pe=function(e,t){return{type:U,id:e,mediaType:t}},Oe=function(e){return{type:j,value:e}},de=function(e){return{type:L,mediaEditorSettings:e}},me=function(e){return{type:O,status:e}},ye=function(e,t){return{type:k,sectionId:e,showContentId:t}},ve=function(e){return{type:M,drawOptions:e}}},452826:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(124852),o=n.n(r),i=n(218291),u=n(532425),a=n(580628),c=n(480681),l=n(192579),s=n(805346);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=(0,i.Z)()((0,r.lazy)((function(){return n.e(70390).then(n.bind(n,970390))}))),v=(0,a.Z)((function(e){var t=e.src,n=e.width,i=e.height,a=e.resolution,l=e.thumbnail,f=e.controls,E=e.play,O=e.onPlay,m=void 0===O?function(){}:O,v=e.onStart,S=void 0===v?function(){}:v,R=e.fit,T=e.loop,g=e.volume,b=void 0===g?1:g,h=e.muted,_=E,G=d((0,r.useState)(_),2),P=G[0],N=G[1],D=d((0,r.useState)(),2),w=D[0],C=D[1],I=d((0,r.useState)(E),2),A=I[0],U=I[1],j="cover"===R,Y=d((0,r.useState)(!1),2),L=Y[0],k=Y[1];(0,r.useEffect)((function(){!P&&_&&(N(!0),U(!0)),P&&S(P)}),[P,_]);var M,x=(M=n/i,j?M<a?[i*a,i]:[n,n/a]:"contain"===R?M<a?[n,n/a]:[i*a,i]:[n,n/a]),Z="contain"===R||j?i:x[1],V=!j&&f,W=!!j||T;return o().createElement("div",{className:"ms-video",style:{position:"relative",width:n,height:Z,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}},t&&o().createElement(o().Fragment,null,P&&o().createElement(y,{url:t,width:x[0],height:x[1],playing:_,loop:W,volume:b,muted:h,style:j?{left:"50%",top:"50%",transform:"translate(-50%, -50%)",position:"absolute"}:{},controls:V,pip:!1,fileConfig:{attributes:{controlsList:"nodownload",disablePictureInPicture:!0}},youtubeConfig:{playerVars:{controls:V?2:0,modestbranding:1,rel:0}},onReady:function(){return U(!1)},onError:function(e){C(e),(""+e).includes("NotAllowedError")&&(m(!1),k(!0),U(!1))},onPause:function(){m(!1)},onPlay:function(){m(!0),L&&(C(!1),k(!1))}}),(!P||P&&(A||w))&&o().createElement("div",{className:"ms-video-cover",style:p(p({position:"absolute",width:x[0],height:x[1],display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 1.0)"},!(A||w)&&{cursor:"pointer"}),!_&&l&&{backgroundImage:"url(".concat(l,")"),backgroundSize:j?"cover":"640px auto",backgroundPosition:"center",backgroundRepeat:"no-repeat"}),onClick:function(){L?(k(!1),C(!1)):U(!0),N(!0),m(!0)}},A&&o().createElement(u.Z,{size:70}),w&&!L&&o().createElement("div",{className:"text-center"},o().createElement(c.Glyphicon,{glyph:"alert",style:{fontSize:x[1]/4>100?100:x[1]/4,mixBlendMode:"difference",color:"#ffffff"}}),o().createElement("h3",null,o().createElement(s.Z,{msgId:"geostory.errors.loading.video"}))," "),(!(A||w)&&!_||w&&L)&&o().createElement(c.Glyphicon,{glyph:"play",style:{fontSize:x[1]/4>100?100:x[1]/4,mixBlendMode:"difference",color:"#ffffff"}}))),!V&&!L&&o().createElement("div",{className:"ms-video-mask-cover",style:{position:"absolute",width:x[0],height:x[1]}}))}));const S=function(e){var t=e.id,n=e.src,i=e.resolution,u=void 0===i?16/9:i,a=e.autoplay,c=e.inView,s=e.description,f=e.showCaption,E=e.caption,p=void 0===E?s:E,O=e.thumbnail,m=e.credits,y=e.controls,S=void 0===y||y,R=e.fit,T=e.loop,g=e.muted,b=e.onPlay,h=void 0===b?function(){}:b,_=e.mode,G=e.containerInView,P=(void 0===G||G)&&c,N=d((0,r.useState)(!1),2),D=N[0],w=N[1],C=function(e){w(e),h(e)};return(0,r.useEffect)((function(){_===l.nl.EDIT&&C(!1)}),[_]),(0,r.useEffect)((function(){_===l.nl.VIEW&&P&&(a||"cover"===R)&&C(!0)}),[P,a,R,_]),(0,r.useEffect)((function(){_===l.nl.VIEW&&!P&&D&&C(!1)}),[P,D,_]),o().createElement("div",{id:t,key:"".concat(t,"-").concat(R,"-").concat(_),className:"ms-media ms-media-video"},o().createElement(v,{src:n,play:D&&_===l.nl.VIEW,resolution:u,thumbnail:O,controls:S&&_===l.nl.VIEW,onPlay:C,fit:R,loop:T,muted:g}),m&&o().createElement("div",{className:"ms-media-credits"},o().createElement("small",null,m)),f&&p&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,p)))}},399534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(461365),o=n(356936);const i=(0,r.Z)(o.h_)},324684:(e,t,n)=>{"use strict";n.d(t,{F:()=>i,y:()=>u});var r=n(227361),o=n.n(r),i=function(e){return o()(e,"router.location.pathname")||"/"},u=function(e){return o()(e,"router.location.search")||""}},727693:(e,t,n)=>{"use strict";n.d(t,{r:()=>r,D:()=>o});var r={GEOSTORY:"geostory",GEOSTORE:"geostore"},o={type:"osm",title:"Open Street Map",name:"mapnik",source:"osm",group:"background",visibility:!0,id:"mapnik__0",loading:!1,loadingError:!1}},643892:(e,t,n)=>{"use strict";n.d(t,{W:()=>r,Zf:()=>o,Eu:()=>i,Vy:()=>u,YB:()=>a,xm:()=>c,_f:()=>l,ek:()=>s,cd:()=>f,pt:()=>E,ww:()=>p,tR:()=>O,Js:()=>d,p2:()=>m,ZH:()=>y,eQ:()=>v,ql:()=>S,$X:()=>R,nS:()=>T,ih:()=>g,J5:()=>b,uA:()=>h,Pv:()=>_,_Z:()=>G,dh:()=>P,IH:()=>N,e3:()=>D,Oq:()=>w,Q$:()=>C,DF:()=>I,id:()=>A,Br:()=>U,bI:()=>j,U5:()=>Y,e5:()=>L,b3:()=>k,mN:()=>M,QN:()=>x,HV:()=>Z,xe:()=>V,vA:()=>W,gw:()=>B,qs:()=>F,CB:()=>H,vg:()=>z,Z0:()=>Q,lf:()=>q,jQ:()=>X,nk:()=>$,X7:()=>J,nO:()=>K,F4:()=>ee,EU:()=>te,Rk:()=>ne,V1:()=>re});var r="GEONODE:RESOURCE_LOADING",o="GEONODE:SET_RESOURCE",i="GEONODE:RESOURCE_ERROR",u="GEONODE:UPDATE_RESOURCE_PROPERTIES",a="GEONODE:SET_RESOURCE_TYPE",c="GEONODE:SET_NEW_RESOURCE",l="GEONODE:SET_RESOURCE_ID",s="GEONODE:SET_RESOURCE_PERMISSIONS",f="GEONODE:EDIT_TITLE_RESOURCE",E="GEONODE:EDIT_ABSTRACT_RESOURCE",p="GEONODE:EDIT_THUMBNAIL_RESOURCE",O="GEONODE:SET_FAVORITE_RESOURCE",d="GEONODE:SET_MAP_THUMBNAIL",m="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",y="GEONODE:REQUEST_RESOURCE_CONFIG",v="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",S="GEONODE:LOADING_RESOURCE_CONFIG",R="GEONODE:RESET_RESOURCE_STATE",T="GEONODE:RESOURCE_CONFIG_ERROR",g="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",b="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",h="GEONODE:RESET_GEO_LIMITS",_="GEONODE:PROCESS_RESOURCES",G="GEONODE_SET_RESOURCE_THUMBNAIL",P="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",N="GEONODE_DOWNLOAD_RESOURCE",D="GEONODE_DOWNLOAD_COMPLETE",w="GEONODE_UPDATE_SINGLE_RESOURCE";function C(){return{type:r}}function I(e){return{type:o,data:e}}function A(e){return{type:w,data:e}}function U(e){return{type:f,title:e}}function j(e){return{type:E,abstract:e}}function Y(e){return{type:p,thumbnailUrl:e,thumbnailChanged:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"}}function L(){return{type:G}}function k(e){return{type:a,resourceType:e}}function M(e){return{type:i,error:e}}function x(e){return{type:u,properties:e}}function Z(){return{type:c}}function V(e){return{type:l,id:e}}function W(e){return{type:m,permissions:e}}function B(e){return{type:O,favorite:e}}function F(e){return{type:P,enabled:e}}function H(e){return{type:d,bbox:e}}function z(e,t,n){return{type:y,resourceType:e,pk:t,options:n}}function Q(e){return{type:v,resourceType:e}}function q(e){return{type:S,loading:e}}function X(e){return{type:T,message:e}}function $(){return{type:R}}function J(e){return{type:g,compactPermissions:e}}function K(e){return{type:b,compactPermissions:e}}function ee(){return{type:h}}function te(e,t,n){return{type:_,processType:e,resources:t,redirectTo:n}}function ne(e){return{type:N,resource:e}}function re(e){return{type:D,resource:e}}},991288:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(124852),o=n.n(r),i=n(507412),u=n(805346);function a(e){var t=e.msgId,n=e.icon;return o().createElement("div",{className:"gn-main-event-container"},o().createElement("div",{className:"gn-main-event-content"},o().createElement("div",{className:"gn-main-event-text"},o().createElement("div",{className:"gn-main-icon"},o().createElement(i.Z,{name:n})),t&&o().createElement(u.Z,{msgId:t}))))}a.defaultProps={msgId:"",icon:"exclamation"};const c=a},219741:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>G});var r=n(124852),o=n.n(r),i=n(322843),u=n(882017),a=n(532425),c=n(595440);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=n(991288),E=n(535721);function p(e){var t=e.url;return o().createElement("div",{className:"gn-main-event-container"},o().createElement("iframe",{frameBorder:"0",key:t,src:t,style:{width:"100%",height:"100%"}}))}p.defaultProps={url:""};const O=p;var d=["resource"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var y=(0,r.lazy)((function(){return Promise.all([n.e(235),n.e(4333)]).then(n.bind(n,504333))})),v={image:u.ZP,video:u.ZP,pdf:function(e){var t=e.src,n=l((0,r.useState)(null),2),i=n[0],u=n[1],s=l((0,r.useState)(!1),2),f=s[0],E=s[1];return(0,r.useEffect)((function(){E(!0),(0,c.hn)(t).then((function(e){E(!1),u(e)})).finally((function(){E(!1)}))}),[]),f?o().createElement("div",{className:"pdf-loader"},o().createElement(a.Z,{size:70})):o().createElement("iframe",{className:"gn-pdf-viewer",type:"application/pdf",frameBorder:"0",scrolling:"auto",height:"100%",width:"100%",src:i})},gltf:y,pcd:y,unsupported:function(e){var t=e.url,n=void 0===t?"":t;return o().createElement(O,{url:n})}},S={video:{mode:"view",inView:!0,fit:"contain"},image:{fit:"contain",enableFullscreen:!0,loaderComponent:function(){return o().createElement("div",{className:"pdf-loader"},o().createElement(a.Z,{size:70}))}},pdf:{},unsupported:{}};const R=function(e){var t=e.resource,n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,d),i=(0,E.NN)(),u=t&&(i[t.subtype]||i[t.resource_type])||{},a=u.hasPermission,l=u.metadataPreviewUrl,s=void 0===l?function(){}:l,p=(null==t?void 0:t.pk)&&a&&a(t);if(t&&p){var O=(0,c.if)(t.extension),y=v[O];return o().createElement(r.Suspense,{fallback:null},o().createElement(y,m({mediaType:O},S[O],n[O],{description:t.abstract,id:t.pk,thumbnail:function(){return(0,E.Ql)(null==t?void 0:t.thumbnail_url)},src:t.href,url:t?s(t):""})))}return o().createElement(f.Z,{msgId:"gnhome.permissionsMissing"})};var T=n(171703),g=n(22222),b=n(572036),h=(0,T.connect)((0,g.P1)([function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.data)||null},function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading)||!1}],(function(e,t,n){return{resource:e,loading:t,editMode:n}})))(R),_=(0,T.connect)((0,g.P1)([],(function(){return{}})),{})((function(e){return o().createElement("div",{className:"gn-media-viewer"},o().createElement(h,e))}));const G=(0,i.rx)("MediaViewer",{component:_,containers:{},epics:{},reducers:{gnresource:b.Z}})},572036:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(618446),o=n.n(r),i=n(441609),u=n.n(i),a=n(643892),c=n(535721),l=["data"],s=["features"],f=["features"],E=["features"];function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v={selectedLayerPermissions:[],data:{},permissions:[]};const S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.$X:return v;case a.ql:return m(m({},e),{},{configError:void 0,loadingResourceConfig:t.loading});case a.nS:return m(m({},e),{},{loading:!1,configError:t.message});case a.W:return m(m({},e),{},{loading:!0});case a.Zf:var n,r,i=t.data||{},p=(i.data,m({},O(i,l))),d=null===(n=e.data)||void 0===n?void 0:n.linkedResources;return u()(d)||p.pk!==(null===(r=e.data)||void 0===r?void 0:r.pk)||(p.linkedResources=d),m(m({},e),{},{error:null,initialResource:m({},t.data),data:p,loading:!1,isNew:!1});case a.Eu:return m(m({},e),{},{initialResource:null,data:null,error:t.error,loading:!1});case a.Vy:return m(m({},e),{},{data:m(m({},e.data),t.properties)});case a.YB:return m(m({},e),{},{type:t.resourceType});case a.xm:return m(m({},v),{},{isNew:!0});case a._f:return m(m({},e),{},{id:t.id});case a.ek:return m(m({},e),{},{permissions:t.permissions});case a.cd:return m(m({},e),{},{data:m(m({},null==e?void 0:e.data),{},{title:null==t?void 0:t.title,name:null==t?void 0:t.title})});case a.pt:return m(m({},e),{},{data:m(m({},null==e?void 0:e.data),{},{abstract:null==t?void 0:t.abstract})});case a.ww:return m(m({},e),{},{data:m(m({},null==e?void 0:e.data),{},{thumbnail_url:null==t?void 0:t.thumbnailUrl,thumbnailChanged:null==t?void 0:t.thumbnailChanged})});case a._Z:return m(m({},e),{},{data:m(m({},null==e?void 0:e.data),{},{updatingThumbnail:!0})});case a.dh:return m(m({},e),{},{showMapThumbnail:t.enabled});case a.p2:return m(m({},e),{},{selectedLayerPermissions:t.permissions});case a.ih:return m(m({},e),{},{initialCompactPermissions:t.compactPermissions,compactPermissions:t.compactPermissions,isCompactPermissionsChanged:!1,geoLimits:[]});case a.J5:return m(m({},e),{},{compactPermissions:t.compactPermissions,isCompactPermissionsChanged:!o()((0,c.go)(e.initialCompactPermissions),(0,c.go)(t.compactPermissions)),geoLimits:(0,c.vB)(t.compactPermissions)});case a.uA:if(e.compactPermissions){var y=e.compactPermissions,S=y.users,R=y.organizations,T=y.groups;return m(m({},e),{},{compactPermissions:{users:S.map((function(e){return e.features,O(e,s)})),organizations:R.map((function(e){return e.features,O(e,f)})),groups:T.map((function(e){return e.features,O(e,E)}))},geoLimits:[]})}return e;default:return e}}},945177:(e,t,n)=>{"use strict";var r=n(595318);t.__esModule=!0,t.default=void 0;var o,i=r(n(250139)),u="clearTimeout",a=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-l)),r=setTimeout(e,n);return l=t,r},c=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};i.default&&["","webkit","moz","o","ms"].some((function(e){var t=c(e,"request");if(t in window)return u=c(e,"cancel"),a=function(e){return window[t](e)}}));var l=(new Date).getTime();(o=function(e){return a(e)}).cancel=function(e){window[u]&&"function"==typeof window[u]&&window[u](e)};var s=o;t.default=s,e.exports=t.default},23279:(e,t,n)=>{var r=n(513218),o=n(707771),i=n(14841),u=Math.max,a=Math.min;e.exports=function(e,t,n){var c,l,s,f,E,p,O=0,d=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=c,r=l;return c=l=void 0,O=t,f=e.apply(r,n)}function S(e){var n=e-p;return void 0===p||n>=t||n<0||m&&e-O>=s}function R(){var e=o();if(S(e))return T(e);E=setTimeout(R,function(e){var n=t-(e-p);return m?a(n,s-(e-O)):n}(e))}function T(e){return E=void 0,y&&c?v(e):(c=l=void 0,f)}function g(){var e=o(),n=S(e);if(c=arguments,l=this,p=e,n){if(void 0===E)return function(e){return O=e,E=setTimeout(R,t),d?v(e):f}(p);if(m)return clearTimeout(E),E=setTimeout(R,t),v(p)}return void 0===E&&(E=setTimeout(R,t)),f}return t=i(t)||0,r(n)&&(d=!!n.leading,s=(m="maxWait"in n)?u(i(n.maxWait)||0,t):s,y="trailing"in n?!!n.trailing:y),g.cancel=function(){void 0!==E&&clearTimeout(E),O=0,c=p=l=E=void 0},g.flush=function(){return void 0===E?f:T(o())},g}},707771:(e,t,n)=>{var r=n(555639);e.exports=function(){return r.Date.now()}}}]);