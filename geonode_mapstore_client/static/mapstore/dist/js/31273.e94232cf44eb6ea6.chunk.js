/*! For license information please see 31273.e94232cf44eb6ea6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[31273],{931273:(t,e,r)=>{r.d(e,{WX:()=>c,r7:()=>l,V3:()=>s,HR:()=>f,xi:()=>p,ur:()=>d,vK:()=>v,nm:()=>m,QF:()=>y,zZ:()=>h,uN:()=>b,Bz:()=>w,im:()=>O,CO:()=>S,$X:()=>A,Mt:()=>E,Oq:()=>T,YO:()=>C,PR:()=>x,wI:()=>L,bv:()=>R,mh:()=>P,$Y:()=>G,eA:()=>_,UT:()=>I,cS:()=>D,l7:()=>j,l3:()=>M,Kz:()=>N,vg:()=>F,xM:()=>k,do:()=>W,lb:()=>B,yu:()=>V,Xp:()=>U,c$:()=>H,tt:()=>q,nX:()=>Z,BG:()=>X,Rc:()=>$,K4:()=>Y,Dw:()=>z,dL:()=>Q,In:()=>K,r1:()=>J,XW:()=>tt,L8:()=>et,i3:()=>rt,XM:()=>nt,X7:()=>ot,M3:()=>it,N3:()=>at,SU:()=>ut,wo:()=>ct,ye:()=>lt,m:()=>st,wl:()=>ft,bu:()=>pt,A4:()=>dt,vG:()=>vt,Wf:()=>mt,Ts:()=>yt,IT:()=>gt,XS:()=>ht,tx:()=>bt,We:()=>wt,nx:()=>Ot,kC:()=>St,E9:()=>At,zX:()=>Et,QT:()=>Tt});var n=r(659551),o=r(501157),i=r(603475),a=r(932354),u=r(197395),c=(n.ZP,o.ZP,i.ZP,a.Z,"CATALOG:ADD_LAYERS_FROM_CATALOGS"),l="CATALOG:ADD_LAYER_AND_DESCRIBE",s="CATALOG:TEXT_SEARCH",f="CATALOG:RECORD_LIST_LOADED",p="CATALOG:RESET_CATALOG",d="CATALOG:CATALOG_CLOSE",v="CATALOG:RECORD_LIST_LOAD_ERROR",m="CATALOG:CHANGE_CATALOG_FORMAT",y="CATALOG:ADD_LAYER_ERROR",g="CATALOG:DESCRIBE_ERROR",h="CATALOG:CHANGE_SELECTED_SERVICE",b="CATALOG:CHANGE_CATALOG_MODE",w="CATALOG:CHANGE_METADATA_TEMPLATE",O="CATALOG:CHANGE_TITLE",S="CATALOG:CHANGE_TEXT",A="CATALOG:CHANGE_TYPE",E="CATALOG:CHANGE_SERVICE_PROPERTY",T="CATALOG:CHANGE_SERVICE_FORMAT",C="CATALOG:FOCUS_SERVICES_LIST",x="CATALOG:CHANGE_URL",L="CATALOG:ADD_CATALOG_SERVICE",R="CATALOG:DELETE_CATALOG_SERVICE",P="CATALOG:ADD_SERVICE",G="CATALOG:DELETE_SERVICE",_="CATALOG:SAVING_SERVICE",I="CATALOG:GET_METADATA_RECORD_BY_ID",D="CATALOG:SET_LOADING",j="CATALOG:SHOW_FORMAT_ERROR",M="CATALOG:TOGGLE_TEMPLATE",N="CATALOG:TOGGLE_THUMBNAIL",F="CATALOG:TOGGLE_ADVANCED_SETTINGS",k="CATALOG:FORMAT_OPTIONS_FETCH",W="CATALOG:FORMAT_OPTIONS_LOADING",B="CATALOG:SET_FORMAT_OPTIONS",V="CATALOG:NEW_SERVICE_STATUS",U="CATALOG:INIT_PLUGIN";function H(){return{type:c,layers:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],sources:arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],options:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]}}function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.format,r=t.url,n=t.startPosition,o=t.maxRecords,i=t.text,a=t.options;return{type:s,format:e,url:r,startPosition:n,maxRecords:o,text:i,options:void 0===a?{}:a}}function Z(t,e){return{type:f,searchOptions:t,result:e}}function X(t){return{type:m,format:t}}function $(t){return{type:_,status:t}}function Y(){return{type:D,loading:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}}function z(t){return{type:h,service:t}}function Q(t){return{type:C,status:t}}function K(t,e){return{type:b,mode:t,isNew:e}}function J(t){return{type:O,title:t}}function tt(t){return{type:S,text:t}}function et(t,e){return{type:E,property:t,value:e}}function rt(t){return{type:T,format:t}}function nt(t){return{type:A,newType:t}}function ot(t){return{type:x,url:t}}function it(t){return{type:P,options:t}}function at(t){return{type:L,service:t}}function ut(t){return{type:R,service:t}}function ct(){return{type:G}}function lt(){return{type:p}}function st(t){return{type:v,error:t}}function ft(){return{type:d}}function pt(t,e){return{type:g,layer:t,error:e}}var dt=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).zoomToLayer;return{type:l,layer:t,zoomToLayer:void 0!==e&&e}};function vt(t){return{type:y,error:t}}var mt=function(t){return{type:w,metadataTemplate:t}},yt=function(){return{type:F}},gt=function(){return{type:M}},ht=function(){return{type:N}},bt=function(t,e){return{type:k,url:t,force:e}},wt=function(t){return{type:W,loading:t}},Ot=function(t,e){return{type:B,formats:t,url:e}},St=function(t){return{type:j,status:t}};function At(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,u.vU)({title:"catalog.notification.errorTitle",message:"catalog.notification.errorSearchingRecords",values:{records:t}})}var Et=function(t){return{type:V,status:t}},Tt=function(t){return{type:U,options:t}}},659551:(t,e,r)=>{r.d(e,{_b:()=>F,kv:()=>X,ZP:()=>Q});var n=r(472500),o=r.n(n),i=r(227361),a=r.n(i),u=r(91175),c=r.n(u),l=r(610928),s=r.n(l),f=r(941106),p=r.n(f),d=r(414293),v=r.n(d),m=r(984596),y=r.n(m),g=r(441609),h=r.n(g),b=r(727418),w=r.n(b),O=r(505055),S=r.n(O),A=r(375875),E=r(737275),T=r(307887),C=r(501157),x=r(658918),L=r(611847);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function P(){P=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),u=new _(n||[]);return o(a,"_invoke",{value:C(t,r,u)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",d="suspendedYield",v="executing",m="completed",y={};function g(){}function h(){}function b(){}var w={};l(w,a,(function(){return this}));var O=Object.getPrototypeOf,S=O&&O(O(I([])));S&&S!==r&&n.call(S,a)&&(w=S);var A=b.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==R(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,r,n){var o=p;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=x(u,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?m:d,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function x(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,x(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(R(e)+" is not iterable")}return h.prototype=b,o(A,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:h,configurable:!0}),h.displayName=l(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,c,"GeneratorFunction")),t.prototype=Object.create(A),t},e.awrap=function(t){return{__await:t}},E(T.prototype),l(T.prototype,u,(function(){return this})),e.AsyncIterator=T,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new T(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(A),l(A,c,"Generator"),l(A,a,(function(){return this})),l(A,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function G(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return I(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){M(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function M(t,e,r){return(e=function(t){var e=function(t){if("object"!=R(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==R(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var N=function(t){var e=o().parse((0,L.eW)(t),!0);return o().format(w()({},e,{search:null},{query:w()({service:"CSW",version:"2.0.2"},e.query,{request:void 0})}))},F=function(t){return'<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gmi="http://www.isotc211.org/2005/gmi" '+'xmlns:ows="http://www.opengis.net/ows" service="CSW" version="2.0.2" resultType="results" startPosition="'.concat(t.startPosition,'" maxRecords="').concat(t.maxRecords,'">')+'<csw:Query typeNames="csw:Record"><csw:ElementSetName>full</csw:ElementSetName><csw:Constraint version="1.1.0"><ogc:Filter>'+(t.filterXml||"")+"</ogc:Filter></csw:Constraint>"+(t.sortBy||"")+"</csw:Query></csw:GetRecords>"},k=function(t){var e=Object.keys(t||{}).reduce((function(e,r){var n=0===r.indexOf("dc:"),o=0===r.indexOf("dct:");if(n||o){var i=n?r.replace("dc:",""):r.replace("dct:",""),a=t[r];return"references"===i&&(a=y()(t[r]).map((function(t){var e;return{value:(0,E.$F)(null==t?void 0:t._),scheme:null==t||null===(e=t.$)||void 0===e?void 0:e.scheme}}))),"URI"===i&&(a=y()(t[r]).map((function(t){var e,r,n;return{description:null==t||null===(e=t.$)||void 0===e?void 0:e.description,name:null==t||null===(r=t.$)||void 0===r?void 0:r.name,protocol:null==t||null===(n=t.$)||void 0===n?void 0:n.protocol,value:null==t?void 0:t._}}))),j(j({},e),{},M({},i,a))}return e}),{});return h()(e)?null:e},W=function(t){var e,r=null==t?void 0:t["ows:ExceptionReport"];return r?(null==r||null===(e=r["ows:Exception"])||void 0===e?void 0:e["ows:ExceptionText"])||"GenericError":""},B=function(t,e,r){if(!e.name)return null;switch(t){case"wms":case"wfs":var n=0!==e.value.indexOf("http")?(r&&r.catalogURL||"")+"/"+e.value:e.value;return{type:e.protocol||e.scheme,url:n,SRS:[],params:{name:e.name}};case"arcgis":return{type:"arcgis",url:e.value,SRS:[],params:{name:e.name}};default:return null}},V=[/^OGC:WMS-(.*)-http-get-map/g,/^OGC:WMS/g],U=[/^OGC:WFS-(.*)-http-get-(capabilities|feature)/g,/^OGC:WFS/g],H=/serviceType\/ogc\/wms/g,q=/serviceType\/ogc\/wfs/g,Z=V.concat(H),X=function(t,e){var r,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=(null==t?void 0:t.URI)&&y()(t.URI),a=v()(null==e?void 0:e.type)||"wms"===(null==e?void 0:e.type),u="wfs"===(null==e?void 0:e.type);if(i){if(a){var l=c()(i.map((function(t){if(t.protocol){if(V.some((function(e){return t.protocol.match(e)})))return t;if(t.protocol.match(H))return function(t){var e=new Map(Array.from(new URLSearchParams(t.value)).map((function(t){var e=_(t,2),r=e[0],n=e[1];return[r.toLowerCase(),n]}))),r=e.get("layers"),n=e.get("version");return!!r&&j(j({},t),{},{protocol:"OGC:WMS",name:r,value:"".concat(t.value.match(/[^\?]+[\?]+/g),"SERVICE=WMS").concat(n&&"&VERSION=".concat(n))})}(t)}return!1})).filter((function(t){return t})));if(l)return B("wms",l,e)}if(u){var s=c()(i.map((function(t){if(t.protocol){if(U.some((function(e){return t.protocol.match(e)})))return t;if(t.protocol.match(q))return function(t){var e=new Map(Array.from(new URLSearchParams(t.value)).map((function(t){var e=_(t,2),r=e[0],n=e[1];return[r.toLowerCase(),n]}))).get("typename");return!!e&&j(j({},t),{},{protocol:"OGC:WFS",name:e,value:"".concat(t.value.match(/[^\?]+[\?]+/g),"service=WFS")})}(t)}return!1})).filter((function(t){return t})));if(s)return B("wfs",s,e)}}if(null!=t&&null!==(r=t.references)&&void 0!==r&&r.length){var f=y()(t.references),p=c()(f.filter((function(t){return t.scheme&&V.some((function(e){return t.scheme.match(e)}))}))),d=c()(f.filter((function(t){return t.scheme&&U.some((function(e){return t.scheme.match(e)}))})));if(a&&p){var m=o().parse((0,L.eW)(p.value),!0),g=m.query&&m.query.layers||t.alternative;return B("wms",j(j({},p),{},{value:o().format(m),name:g}),e)}if(u&&d){var h=o().parse((0,L.eW)(d.value),!0),b=h.query&&h.query.layers||t.alternative;return B("wfs",j(j({},d),{},{value:o().format(h),name:b}),e)}if(n){var w=c()(f.filter((function(t){return t.scheme&&"WWW:DOWNLOAD-REST_MAP"===t.scheme})));if(w)return B("arcgis",j(j({},w),{},{name:t.alternative}),e)}}return null},$={},Y=function(){var t,e=(t=P().mark((function t(e){var r,n,o,i;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",e);case 2:if(null==(r=e.records)||!r.length){t.next=10;break}return n=r.map((function(t){var e;if((null==t||null===(e=t.dc)||void 0===e?void 0:e.format)===x.X){var r,n,o=null===(r=t.dc)||void 0===r||null===(n=r.URI)||void 0===n?void 0:n.value;return(0,x.F)(o)}return Promise.resolve(null)})),t.next=7,Promise.all(n);case 7:return o=t.sent,i=r.map((function(t,e){var r,n,i=o[e];if(!i||null==i||null===(r=i.bbox)||void 0===r||!r.bounds||null==i||null===(n=i.bbox)||void 0===n||!n.crs)return t;var a=(0,T.getExtentFromNormalized)(i.bbox.bounds,i.bbox.crs);return j(j({},t),{},{boundingBox:{extent:a.extent,crs:i.bbox.crs}})})),t.abrupt("return",j(j({},e),{},{records:i}));case 10:return t.abrupt("return",e);case 11:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){G(i,n,o,a,u,"next",t)}function u(t){G(i,n,o,a,u,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}(),z={parseUrl:N,getRecordById:function(t){return A.Z.get(t).then((function(t){if(t){var e,r,n;S().parseString(t.data,{explicitArray:!1},(function(t,e){n=e}));var o=null===(e=n)||void 0===e||null===(r=e["csw:GetRecordByIdResponse"])||void 0===r?void 0:r["csw:Record"],i=k(o);if(i)return{dc:i};var a=W(n);if(a)return{error:a}}return null}))},getRecords:function(t,e,r,n,o){var i=function(t,e,r){var n,o,i,a=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).options,u=(void 0===a?{}:a).service,c=null!=u?u:{},l=c.filter,s=c.sortBy,f=(null==l?void 0:l.staticFilter)||"<ogc:Or>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>http://purl.org/dc/dcmitype/Dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n       </ogc:Or>",d="<ogc:And>\n        ".concat(p()((null==l?void 0:l.dynamicFilter)||"<ogc:PropertyIsLike wildCard='%' singleChar='_' escapeChar='\\'><ogc:PropertyName>csw:AnyText</ogc:PropertyName> <ogc:Literal>%${searchText}%</ogc:Literal> </ogc:PropertyIsLike> ")({searchText:r}),"\n        ").concat(f,"\n    </ogc:And>"),v=null!=s&&s.name?(i=(o={name:null==s?void 0:s.name,order:null!==(n=null==s?void 0:s.order)&&void 0!==n?n:"ASC"}).order,"<ogc:SortBy><ogc:SortProperty>"+"<ogc:PropertyName>".concat(o.name,"</ogc:PropertyName>")+"<ogc:SortOrder>".concat(i,"</ogc:SortOrder>")+"</ogc:SortProperty></ogc:SortBy>"):"";return F({filterXml:r?d:f,startPosition:t,maxRecords:e,sortBy:v})}(e,r,n,o);return A.Z.post(N(t),i,{headers:{"Content-Type":"application/xml"}}).then((function(t){var e=function(t){var e,r,n;if(!t)return null;S().parseString(t.data,{explicitArray:!1},(function(t,e){n=e}));var o=null===(e=n)||void 0===e||null===(r=e["csw:GetRecordsResponse"])||void 0===r?void 0:r["csw:SearchResults"];if(o){var i,a,u,c=(null==o?void 0:o["csw:Record"])||(null==o?void 0:o["gmd:MD_Metadata"]),l=c?y()(c).map((function(t){var e,r,n,o=function(t){if(null!=t&&t["ows:BoundingBox"]){var e=y()(t["ows:BoundingBox"])[0],r=function(t){var e,r,n,o,i=null!==(e=null==t||null===(r=t.$)||void 0===r?void 0:r.crs)&&void 0!==e?e:"",a=null===(n=i.match(/[\w-]*:[\w-]*:[\w-]*:[\w-]*:[\w-]*:[^:]*:(([\w-]+\s[\w-]+)|[\w-]*)/))||void 0===n?void 0:n[0],u=(0,T.makeNumericEPSG)(null===(o=i.match(/EPSG:[0-9]+/))||void 0===o?void 0:o[0])||(0,T.extractCrsFromURN)(a)||s()(i.split(":"));return u?"EPSG:"===u.slice(0,5)?{crs:(0,T.makeNumericEPSG)(u),extractedCrs:u}:{crs:(0,T.makeNumericEPSG)("EPSG:".concat(u)),extractedCrs:u}:{crs:"EPSG:4326",extractedCrs:u}}(e),n=r.crs,o=r.extractedCrs,i=((null==e?void 0:e["ows:LowerCorner"])||"-180 -90").split(" ").map(parseFloat),a=((null==e?void 0:e["ows:UpperCorner"])||"180 90").split(" ").map(parseFloat);return"EPSG:4326"===n&&"CRS84"!==o&&"OGC:CRS84"!==o&&(i=[i[1],i[0]],a=[a[1],a[0]]),{extent:(0,T.makeBboxFromOWS)(i,a),crs:"EPSG:4326"}}return null}(t),i=k(t);return j(j({dateStamp:null==t||null===(e=t["gmd:dateStamp"])||void 0===e?void 0:e["gco:Date"],fileIdentifier:null==t||null===(r=t["gmd:fileIdentifier"])||void 0===r?void 0:r["gco:CharacterString"],identificationInfo:null==t||null===(n=t["gmd:identificationInfo"])||void 0===n?void 0:n["gmd:AbstractMD_Identification"]},o&&{boundingBox:o}),i&&{dc:i})})):null,f=l?l.map((function(t){var e,r=t.dc,n=void 0===r?{}:r;return y()((null==n||null===(e=n.references)||void 0===e?void 0:e.length)>0?n.references:n.URI)})).flat():void 0;return{result:j({numberOfRecordsMatched:parseFloat(null==o||null===(i=o.$)||void 0===i?void 0:i.numberOfRecordsMatched),numberOfRecordsReturned:parseFloat(null==o||null===(a=o.$)||void 0===a?void 0:a.numberOfRecordsReturned),nextRecord:parseFloat(null==o||null===(u=o.$)||void 0===u?void 0:u.nextRecord)},l&&{records:l}),_dcRef:f}}var p=W(n);return p?{error:p}:null}(t)||{},r=e.error,n=e._dcRef,i=e.result;return i?function(t,e,r){if(!a()(r,"options.service.autoSetVisibilityLimits",!1))return e;var n=((null==t?void 0:t.find((function(t){return Z.some((function(e){var r,n;return(null==t||null===(r=t.scheme)||void 0===r?void 0:r.match(e))||(null==t||null===(n=t.protocol)||void 0===n?void 0:n.match(e))}))})))||{}).value,o=_(n&&n.split("?")||[],1)[0];if(!o)return j({},e);var i=$[o],u=!h()(i);return Promise.resolve(u?i:C.ZP.getCapabilities(o+"?version=").then((function(t){return C.ZP.flatLayers(t.Capability)})).catch((function(){return[]}))).then((function(t){var r;return u||($[o]=t),j(j({},e),{},{records:null==e||null===(r=e.records)||void 0===r?void 0:r.map((function(e){var r=a()(X(null==e?void 0:e.dc,null,!1),"params.name",""),n=t.find((function(t){return t.Name===r}))||{},o=n.MinScaleDenominator,i=n.MaxScaleDenominator;return j(j({},e),(!v()(o)||!v()(i))&&{capabilities:{MaxScaleDenominator:i,MinScaleDenominator:o}})}))})}))}(n,i,o):r?{error:r}:null})).then((function(t){return Y(t)}))},textSearch:function(t,e,r,n,o){return new Promise((function(i){i(z.getRecords(t,e,r,n,o))}))},workspaceSearch:function(t,e,r,n,o){var i=o||"%",a=n&&"%"+n+"%"||"%";return z.getRecords(t,e,r,"",{options:{service:{filter:{staticFilter:'<ogc:PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\\\"><ogc:PropertyName>dc:identifier</ogc:PropertyName>'+"<ogc:Literal>".concat(i+":"+a,"</ogc:Literal>")+"</ogc:PropertyIsLike>"}}}})},reset:function(){}};const Q=z},658918:(t,e,r)=>{r.d(e,{F:()=>d,X:()=>v});var n=r(375875),o=r(307887),i=r(552259),a=r(598223);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return(e=function(t){var e=function(t){if("object"!=u(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var d=function(t){return n.Z.get(t).then((function(t){var e,n=t.data;return(e=n,Promise.all([r.e(86103),r.e(77458),r.e(45110),r.e(39512),r.e(9340),r.e(82582)]).then(r.bind(r,509340)).then((function(t){var r,n,a,u,c=t,s=void 0!==(null==e||null===(r=e.asset)||void 0===r?void 0:r.version)?e.asset.version:"1.0",p=function(t,e){var r,n,a,u,c,l;if(null!=e&&null!==(r=e.root)&&void 0!==r&&null!==(n=r.boundingVolume)&&void 0!==n&&n.region){var s=f(e.root.boundingVolume.region,4),p=s[0],d=s[1],v=s[2],m=s[3];return{bounds:{minx:(0,o.convertRadianToDegrees)(p),miny:(0,o.convertRadianToDegrees)(d),maxx:(0,o.convertRadianToDegrees)(v),maxy:(0,o.convertRadianToDegrees)(m)},crs:"EPSG:4326"}}var y=t.Matrix4.fromArray(e.root.transform||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);if(null!=e&&null!==(a=e.root)&&void 0!==a&&null!==(u=a.boundingVolume)&&void 0!==u&&u.box){var g=f(e.root.boundingVolume.box,3),h=g[0],b=g[1],w=g[2],O=t.Matrix4.multiplyByPoint(y,new t.Cartesian3(h,b,w),new t.Cartesian3),S=t.Matrix4.getMatrix3(y,new t.Matrix4),A=t.Matrix3.multiply(S,t.Matrix3.fromArray(e.root.boundingVolume.box,3,new t.Matrix3),new t.Matrix3),E=t.BoundingSphere.fromOrientedBoundingBox(new t.OrientedBoundingBox(O,A)),T=t.Cartographic.fromCartesian(E.center);if(!T)return null;var C=(0,o.convertRadianToDegrees)(T.longitude),x=(0,o.convertRadianToDegrees)(T.latitude),L=E.radius/i.Wm.degrees;return{bounds:{minx:C-L,miny:x-L,maxx:C+L,maxy:x+L},crs:"EPSG:4326"}}if(null!=e&&null!==(c=e.root)&&void 0!==c&&null!==(l=c.boundingVolume)&&void 0!==l&&l.sphere){var R=f(e.root.boundingVolume.sphere,4),P=R[0],G=R[1],_=R[2],I=R[3],D=t.Matrix4.multiplyByPoint(y,new t.Cartesian3(P,G,_),new t.Cartesian3),j=t.Matrix4.getScale(y,new t.Matrix4),M=I*t.Cartesian3.maximumComponent(j)/i.Wm.degrees,N=t.Cartographic.fromCartesian(D);if(!N)return null;var F=(0,o.convertRadianToDegrees)(N.longitude),k=(0,o.convertRadianToDegrees)(N.latitude);return{bounds:{minx:F-M,miny:k-M,maxx:F+M,maxy:k+M},crs:"EPSG:4326"}}return null}(c,e),d=(u=((null==e||null===(n=e.root)||void 0===n||null===(a=n.content)||void 0===a?void 0:a.uri)||"").split(/\./g))[u.length-1],v=null==e?void 0:e.properties;return l(l({version:s},p&&{bbox:p}),{},{format:d,properties:v})}))).then((function(t){return l({tileset:n},t)}))})).catch((function(t){return(0,a.H)(t),{tileset:{}}}))},v="3D Tiles"},603475:(t,e,r)=>{r.d(e,{hn:()=>E,ZP:()=>T});var n=r(375875),o=r(737275),i=r(472500),a=r.n(i),u=r(727418),c=r.n(u),l=r(505055),s=r.n(l),f=r(984596),p=r.n(f),d=r(307887),v=r(611847),m=r(707294);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return(e=function(t){var e=function(t){if("object"!=y(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==y(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var w={},O=function(t){var e=a().parse((0,v.eW)(t),!0);return a().format(c()({},e,{search:null},{query:c()({SERVICE:"WMTS",VERSION:"1.0.0",REQUEST:"GetCapabilities"},e.query)}))},S=function(t,e,r,n,o){for(var i=t.Capabilities.Contents,a=(0,m.G6)(t),u=(0,m.s5)(t),l=i.TileMatrixSet&&p()(i.TileMatrixSet)||[],s=[],f=l.length,v=0;v<f;v++)s.push((0,d.getEPSGCode)(l[v]["ows:SupportedCRS"]));var y=i.Layer,g=p()(y).filter((function(t){return!n||-1!==t["ows:Identifier"].toLowerCase().indexOf(n.toLowerCase())||t["ows:Title"]&&-1!==t["ows:Title"].toLowerCase().indexOf(n.toLowerCase())}));return{numberOfRecordsMatched:g.length,numberOfRecordsReturned:Math.min(r,g.length),nextRecord:e+Math.min(r,g.length)+1,records:g.filter((function(t,n){return n>=e-1&&n<e-1+r})).map((function(t){return c()({},t,{SRS:s,TileMatrixSet:l,queryable:!!(0,m.b4)(a,"GetFeatureInfo","KVP"),requestEncoding:u,style:(0,m.EN)(t),format:(0,m.JY)(t),formats:p()(t.Format),GetTileURL:(0,m.b4)(a,"GetTile",u),capabilitiesURL:o})}))}},A={parseUrl:O,getRecords:function(t,e,r,i){var a=w[t];return a&&(new Date).getTime()<a.timestamp+1e3*((0,o.u8)("cacheExpire")||60)?new Promise((function(n){n(S(a.data,e,r,i,t))})):n.Z.get(O(t)).then((function(n){var o;return s().parseString(n.data,{explicitArray:!1},(function(t,e){o=e})),w[t]={timestamp:(new Date).getTime(),data:o},S(o,e,r,i,t)}))},getCapabilities:function(t,e){null!=e&&e.force&&w[t]&&delete w[t];var r=w[t];return r&&(new Date).getTime()<r.timestamp+1e3*((0,o.u8)("cacheExpire")||60)?new Promise((function(t){t(r.data)})):n.Z.get(O(t)).then((function(e){var r;return s().parseString(e.data,{explicitArray:!1},(function(t,e){r=e})),w[t]={timestamp:(new Date).getTime(),data:r},r}))},textSearch:function(t,e,r,n){return A.getRecords(t,e,r,n)},reset:function(){Object.keys(w).forEach((function(t){delete w[t]}))}},E=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0;return A.getCapabilities(t,{force:null==r?void 0:r.force}).then((function(t){var r,n,o,i,a=e.split(":"),u=p()((null==t||null===(r=t.Capabilities)||void 0===r||null===(n=r.Contents)||void 0===n?void 0:n.Layer)||[]).find((function(t){return t["ows:Identifier"]===a[1]||t["ows:Identifier"]===e})),c=p()((null==u?void 0:u.TileMatrixSetLink)||[]).map((function(t){return t.TileMatrixSet})),l=p()((null==t||null===(o=t.Capabilities)||void 0===o||null===(i=o.Contents)||void 0===i?void 0:i.TileMatrixSet)||[]).filter((function(t){return c.includes(t["ows:Identifier"])})),s=l.map((function(t){var e=t.TileMatrix.map((function(t){return t.TopLeftCorner.split(" ").map(parseFloat)})),r=t.TileMatrix.map((function(t){return[parseFloat(t.TileWidth),parseFloat(t.TileHeight)]})),n=e[0],o=r[0],i=e.every((function(t){return n[0]===t[0]&&n[1]===t[1]})),a=r.every((function(t){return o[0]===t[0]&&o[1]===t[1]}));return h(h({id:t["ows:Identifier"],crs:(0,d.getEPSGCode)(t["ows:SupportedCRS"]),scales:t.TileMatrix.map((function(t){return parseFloat(t.ScaleDenominator)}))},i?{origin:n}:{origins:e}),a?{tileSize:o}:{tileSizes:r})}));return{tileMatrixSets:l,tileMatrixSetLinks:c,tileGrids:s,styles:p()((null==u?void 0:u.Style)||[]).map((function(t){return t["ows:Identifier"]})),formats:p()((null==u?void 0:u.Format)||[])}}))};const T=A},932354:(t,e,r)=>{r.d(e,{Z:()=>u});var n=r(227361),o=r.n(n),i=r(737275),a=function(t,e,r,n){var a=o()(i.ZP.getDefaults(),"initialState.defaultState.catalog.default.staticServices.default_map_backgrounds.backgrounds").filter((function(t){return!n||t.title.indexOf(n)>-1})),u=a.filter((function(t,n){return n>=e-1&&n<r+e-1}));return new Promise((function(t){return t({numberOfRecordsMatched:a.length,numberOfRecordsReturned:u.length,records:u,service:{Name:"Background Provider"}})}))};const u={getRecords:a,reset:function(){},textSearch:function(t,e,r,n){return a(0,e,r,n)}}}}]);