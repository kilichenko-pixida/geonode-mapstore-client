(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[89974],{764453:(t,e,i)=>{"use strict";i.r(e);var n=i(608010),r=i(438225),s=i(365952),o=i(578487),a=i(421915),c=i(921882),h=i(450596),u=i(570701);class l extends s.Z{constructor(t){super({attributions:(t=t||{}).attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,interpolate:t.interpolate,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:t.tileGrid,tileLoadFunction:t.tileLoadFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition,zDirection:t.zDirection}),this.params_=t.params||{},this.hidpi_=void 0===t.hidpi||t.hidpi,this.tmpExtent_=(0,a.lJ)(),this.setKey(this.getKeyForParams_())}getKeyForParams_(){let t=0;const e=[];for(const i in this.params_)e[t++]=i+"-"+this.params_[i];return e.join("/")}getParams(){return this.params_}getRequestUrl_(t,e,i,n,r,s){const a=this.urls;if(!a)return;const h=r.getCode().split(/:(?=\d+$)/).pop();let l;s.SIZE=e[0]+","+e[1],s.BBOX=i.join(","),s.BBOXSR=h,s.IMAGESR=h,s.DPI=Math.round(s.DPI?s.DPI*n:90*n),l=1==a.length?a[0]:a[(0,c.$W)((0,u.vp)(t),a.length)];const d=l.replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage");return(0,o.B)(d,s)}getTilePixelRatio(t){return this.hidpi_?t:1}updateParams(t){Object.assign(this.params_,t),this.setKey(this.getKeyForParams_())}tileUrlFunction(t,e,i){let n=this.getTileGrid();if(n||(n=this.getTileGridForProjection(i)),n.getResolutions().length<=t[0])return;1==e||this.hidpi_||(e=1);const r=n.getTileCoordExtent(t,this.tmpExtent_);let s=(0,h.Pq)(n.getTileSize(t[0]),this.tmpSize);1!=e&&(s=(0,h.bA)(s,e,this.tmpSize));const o={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};return Object.assign(o,this.params_),this.getRequestUrl_(t,s,r,e,i,o)}}const d=l;(0,n.registerType)("arcgis",{create:function(t){return new r.Z({opacity:void 0!==t.opacity?t.opacity:1,visible:!1!==t.visibility,zIndex:t.zIndex,source:new d({params:{LAYERS:"show:".concat(parseInt(t.name||0,10))},url:t.url})})}})},102022:(t,e,i)=>{"use strict";i.d(e,{K:()=>u,Z:()=>l});var n=i(173381),r=i(29217),s=i(611256),o=i(591358),a=i(421915),c=i(613002);class h extends r.Z{constructor(t,e,i,n,r,o,a){super(t,e,i,s.Z.IDLE),this.src_=n,this.image_=new Image,null!==r&&(this.image_.crossOrigin=r),this.context_=a,this.unlisten_=null,this.state=s.Z.IDLE,this.imageLoadFunction_=o}getImage(){if(this.state==s.Z.LOADED&&this.context_&&!(this.image_ instanceof HTMLCanvasElement)){const t=this.context_.canvas;t.width=this.image_.width,t.height=this.image_.height,this.context_.drawImage(this.image_,0,0),this.image_=this.context_.canvas}return this.image_}handleImageError_(){this.state=s.Z.ERROR,this.unlistenImage_(),this.changed()}handleImageLoad_(){void 0===this.resolution&&(this.resolution=(0,a.Cr)(this.extent)/this.image_.height),this.state=s.Z.LOADED,this.unlistenImage_(),this.changed()}load(){this.state!=s.Z.IDLE&&this.state!=s.Z.ERROR||(this.state=s.Z.LOADING,this.changed(),this.imageLoadFunction_(this,this.src_),this.unlisten_=u(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}setImage(t){this.image_=t,this.resolution=(0,a.Cr)(this.extent)/this.image_.height}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}}function u(t,e,i){const r=t;let s=!0,a=!1,h=!1;const u=[(0,c.Vx)(r,n.Z.LOAD,(function(){h=!0,a||e()}))];return r.src&&o.Tp?(a=!0,r.decode().then((function(){s&&e()})).catch((function(t){s&&(h?e():i())}))):u.push((0,c.Vx)(r,n.Z.ERROR,i)),function(){s=!1,u.forEach(c.bN)}}const l=h},29217:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var n=i(66575),r=i(173381),s=i(949179);class o extends n.Z{constructor(t,e,i,n){super(),this.extent=t,this.pixelRatio_=i,this.resolution=e,this.state=n}changed(){this.dispatchEvent(r.Z.CHANGE)}getExtent(){return this.extent}getImage(){return(0,s.O3)()}getPixelRatio(){return this.pixelRatio_}getResolution(){return this.resolution}getState(){return this.state}load(){(0,s.O3)()}}const a=o},611256:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}},208913:(t,e,i)=>{"use strict";i.d(e,{XC:()=>a,mL:()=>h,_2:()=>u,BB:()=>d,e1:()=>g});var n=i(438906),r=i(921882);const s=/^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,o=/^([a-z]*)$|^hsla?\(.*\)$/i;function a(t){return"string"==typeof t?t:d(t)}function c(t){const e=document.createElement("div");if(e.style.color=t,""!==e.style.color){document.body.appendChild(e);const t=getComputedStyle(e).color;return document.body.removeChild(e),t}return""}const h=function(){const t={};let e=0;return function(i){let r;if(t.hasOwnProperty(i))r=t[i];else{if(e>=1024){let i=0;for(const n in t)3&i++||(delete t[n],--e)}r=function(t){let e,i,r,a,h;if(o.exec(t)&&(t=c(t)),s.exec(t)){const n=t.length-1;let s;s=n<=4?1:2;const o=4===n||8===n;e=parseInt(t.substr(1+0*s,s),16),i=parseInt(t.substr(1+1*s,s),16),r=parseInt(t.substr(1+2*s,s),16),a=o?parseInt(t.substr(1+3*s,s),16):255,1==s&&(e=(e<<4)+e,i=(i<<4)+i,r=(r<<4)+r,o&&(a=(a<<4)+a)),h=[e,i,r,a/255]}else t.startsWith("rgba(")?(h=t.slice(5,-1).split(",").map(Number),l(h)):t.startsWith("rgb(")?(h=t.slice(4,-1).split(",").map(Number),h.push(1),l(h)):(0,n.h)(!1,14);return h}(i),t[i]=r,++e}return r}}();function u(t){return Array.isArray(t)?t:h(t)}function l(t){return t[0]=(0,r.uZ)(t[0]+.5|0,0,255),t[1]=(0,r.uZ)(t[1]+.5|0,0,255),t[2]=(0,r.uZ)(t[2]+.5|0,0,255),t[3]=(0,r.uZ)(t[3],0,1),t}function d(t){let e=t[0];e!=(0|e)&&(e=e+.5|0);let i=t[1];i!=(0|i)&&(i=i+.5|0);let n=t[2];return n!=(0|n)&&(n=n+.5|0),"rgba("+e+","+i+","+n+","+(void 0===t[3]?1:Math.round(100*t[3])/100)+")"}function g(t){return o.test(t)&&(t=c(t)),s.test(t)||t.startsWith("rgba(")||t.startsWith("rgb(")}},85386:(t,e,i)=>{"use strict";i.d(e,{E4:()=>r,jy:()=>s,iO:()=>o,Pb:()=>a,$H:()=>c,ZF:()=>h,ep:()=>u,hF:()=>l});var n=i(591358);function r(t,e,i,r){let s;return s=i&&i.length?i.shift():n.Id?new OffscreenCanvas(t||300,e||300):document.createElement("canvas"),t&&(s.width=t),e&&(s.height=e),s.getContext("2d",r)}function s(t){const e=t.canvas;e.width=1,e.height=1,t.clearRect(0,0,1,1)}function o(t){let e=t.offsetWidth;const i=getComputedStyle(t);return e+=parseInt(i.marginLeft,10)+parseInt(i.marginRight,10),e}function a(t){let e=t.offsetHeight;const i=getComputedStyle(t);return e+=parseInt(i.marginTop,10)+parseInt(i.marginBottom,10),e}function c(t,e){const i=e.parentNode;i&&i.replaceChild(t,e)}function h(t){return t&&t.parentNode?t.parentNode.removeChild(t):null}function u(t){for(;t.lastChild;)t.removeChild(t.lastChild)}function l(t,e){const i=t.childNodes;for(let n=0;;++n){const r=i[n],s=e[n];if(!r&&!s)break;r!==s&&(r?s?t.insertBefore(s,r):(t.removeChild(r),--n):t.appendChild(s))}}},286320:(t,e,i)=>{"use strict";function n(t){return Math.pow(t,3)}function r(t){return 1-n(1-t)}function s(t){return 3*t*t-2*t*t*t}function o(t){return t}i.d(e,{YQ:()=>n,Vv:()=>r,rd:()=>s,GE:()=>o})},938642:(t,e,i)=>{"use strict";i.d(e,{h$:()=>r,YP:()=>s,gE:()=>o,Gw:()=>a});var n=i(921882);function r(t){if(void 0!==t)return 0}function s(t){if(void 0!==t)return t}function o(t){const e=2*Math.PI/t;return function(t,i){return i?t:void 0!==t?t=Math.floor(t/e+.5)*e:void 0}}function a(t){return t=t||(0,n.Yr)(5),function(e,i){return i?e:void 0!==e?Math.abs(e)<=t?0:e:void 0}}},450596:(t,e,i)=>{"use strict";function n(t,e,i){return void 0===i&&(i=[0,0]),i[0]=t[0]+2*e,i[1]=t[1]+2*e,i}function r(t){return t[0]>0&&t[1]>0}function s(t,e,i){return void 0===i&&(i=[0,0]),i[0]=t[0]*e+.5|0,i[1]=t[1]*e+.5|0,i}function o(t,e){return Array.isArray(t)?t:(void 0===e?e=[t,t]:(e[0]=t,e[1]=t),e)}i.d(e,{f3:()=>n,py:()=>r,bA:()=>s,Pq:()=>o})}}]);