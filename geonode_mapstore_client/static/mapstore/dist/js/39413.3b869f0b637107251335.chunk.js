(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[39413],{378426:(t,i,e)=>{"use strict";e.d(i,{Z:()=>u});var n=e(665045),r=e(919629),o=e(558493),s=e(9520),a="length",h=function(t){function i(i,e){t.call(this,i),this.element=e}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i}(s.ZP);const u=function(t){function i(i,e){t.call(this);var n=e||{};if(this.unique_=!!n.unique,this.array_=i||[],this.unique_)for(var r=0,o=this.array_.length;r<o;++r)this.assertUnique_(this.array_[r],r);this.updateLength_()}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.clear=function(){for(;this.getLength()>0;)this.pop()},i.prototype.extend=function(t){for(var i=0,e=t.length;i<e;++i)this.push(t[i]);return this},i.prototype.forEach=function(t){for(var i=this.array_,e=0,n=i.length;e<n;++e)t(i[e],e,i)},i.prototype.getArray=function(){return this.array_},i.prototype.item=function(t){return this.array_[t]},i.prototype.getLength=function(){return this.get(a)},i.prototype.insertAt=function(t,i){this.unique_&&this.assertUnique_(i),this.array_.splice(t,0,i),this.updateLength_(),this.dispatchEvent(new h(r.Z.ADD,i))},i.prototype.pop=function(){return this.removeAt(this.getLength()-1)},i.prototype.push=function(t){this.unique_&&this.assertUnique_(t);var i=this.getLength();return this.insertAt(i,t),this.getLength()},i.prototype.remove=function(t){for(var i=this.array_,e=0,n=i.length;e<n;++e)if(i[e]===t)return this.removeAt(e)},i.prototype.removeAt=function(t){var i=this.array_[t];return this.array_.splice(t,1),this.updateLength_(),this.dispatchEvent(new h(r.Z.REMOVE,i)),i},i.prototype.setAt=function(t,i){var e=this.getLength();if(t<e){this.unique_&&this.assertUnique_(i,t);var n=this.array_[t];this.array_[t]=i,this.dispatchEvent(new h(r.Z.REMOVE,n)),this.dispatchEvent(new h(r.Z.ADD,i))}else{for(var o=e;o<t;++o)this.insertAt(o,void 0);this.insertAt(t,i)}},i.prototype.updateLength_=function(){this.set(a,this.array_.length)},i.prototype.assertUnique_=function(t,i){for(var e=0,r=this.array_.length;e<r;++e)if(this.array_[e]===t&&e!==i)throw new n.Z(58)},i}(o.ZP)},919629:(t,i,e)=>{"use strict";e.d(i,{Z:()=>n});const n={ADD:"add",REMOVE:"remove"}},611256:(t,i,e)=>{"use strict";e.d(i,{Z:()=>n});const n={IDLE:0,LOADING:1,LOADED:2,ERROR:3}},208913:(t,i,e)=>{"use strict";e.d(i,{XC:()=>a,_2:()=>l,BB:()=>p});var n=e(438906),r=e(921882),o=/^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,s=/^([a-z]*)$/i;function a(t){return"string"==typeof t?t:p(t)}var h,u,c=(h={},u=0,function(t){var i;if(h.hasOwnProperty(t))i=h[t];else{if(u>=1024){var e=0;for(var r in h)0==(3&e++)&&(delete h[r],--u)}i=function(t){var i,e,r,a,h;if(s.exec(t)&&(t=function(t){var i=document.createElement("div");if(i.style.color=t,""!==i.style.color){document.body.appendChild(i);var e=getComputedStyle(i).color;return document.body.removeChild(i),e}return""}(t)),o.exec(t)){var u,c=t.length-1;u=c<=4?1:2;var l=4===c||8===c;i=parseInt(t.substr(1+0*u,u),16),e=parseInt(t.substr(1+1*u,u),16),r=parseInt(t.substr(1+2*u,u),16),a=l?parseInt(t.substr(1+3*u,u),16):255,1==u&&(i=(i<<4)+i,e=(e<<4)+e,r=(r<<4)+r,l&&(a=(a<<4)+a)),h=[i,e,r,a/255]}else 0==t.indexOf("rgba(")?f(h=t.slice(5,-1).split(",").map(Number)):0==t.indexOf("rgb(")?((h=t.slice(4,-1).split(",").map(Number)).push(1),f(h)):(0,n.h)(!1,14);return h}(t),h[t]=i,++u}return i});function l(t){return Array.isArray(t)?t:c(t)}function f(t){return t[0]=(0,r.uZ)(t[0]+.5|0,0,255),t[1]=(0,r.uZ)(t[1]+.5|0,0,255),t[2]=(0,r.uZ)(t[2]+.5|0,0,255),t[3]=(0,r.uZ)(t[3],0,1),t}function p(t){var i=t[0];i!=(0|i)&&(i=i+.5|0);var e=t[1];e!=(0|e)&&(e=e+.5|0);var n=t[2];return n!=(0|n)&&(n=n+.5|0),"rgba("+i+","+e+","+n+","+(void 0===t[3]?1:t[3])+")"}},545120:(t,i,e)=>{"use strict";e.d(i,{y:()=>r});var n=e(208913);function r(t){return Array.isArray(t)?(0,n.BB)(t):t}},267644:(t,i,e)=>{"use strict";e.d(i,{oj:()=>o,$A:()=>s,XV:()=>a,hg:()=>h,hN:()=>u,tr:()=>c});var n,r,o="ol-hidden",s="ol-selectable",a="ol-unselectable",h="ol-control",u="ol-collapsed",c=(r={},function(t){if(n||(n=document.createElement("div").style),!(t in r)){n.font=t;var i=n.fontFamily;if(n.font="",!i)return null;r[t]=i.split(/,\s?/)}return r[t]})},591358:(t,i,e)=>{"use strict";e.d(i,{V:()=>r,vw:()=>o,G$:()=>s,tK:()=>a,MP:()=>h,XQ:()=>u,De:()=>c,Qm:()=>l,GQ:()=>f,NL:()=>p});var n="undefined"!=typeof navigator?navigator.userAgent.toLowerCase():"",r=-1!==n.indexOf("firefox"),o=-1!==n.indexOf("safari")&&-1==n.indexOf("chrom"),s=-1!==n.indexOf("webkit")&&-1==n.indexOf("edge"),a=-1!==n.indexOf("macintosh"),h=window.devicePixelRatio||1,u=function(){var t=!1;try{t=!!document.createElement("canvas").getContext("2d").setLineDash}catch(t){}return t}(),c="geolocation"in navigator,l="ontouchstart"in window,f="PointerEvent"in window,p=!!navigator.msPointerEnabled},556510:(t,i,e)=>{"use strict";e.d(i,{Z:()=>n});const n={IMAGE:"image",VECTOR:"vector"}},508835:function(t){t.exports=function(){"use strict";function t(e,n,r,o,s){for(;o>r;){if(o-r>600){var a=o-r+1,h=n-r+1,u=Math.log(a),c=.5*Math.exp(2*u/3),l=.5*Math.sqrt(u*c*(a-c)/a)*(h-a/2<0?-1:1);t(e,n,Math.max(r,Math.floor(n-h*c/a+l)),Math.min(o,Math.floor(n+(a-h)*c/a+l)),s)}var f=e[n],p=r,d=o;for(i(e,r,n),s(e[o],f)>0&&i(e,r,o);p<d;){for(i(e,p,d),p++,d--;s(e[p],f)<0;)p++;for(;s(e[d],f)>0;)d--}0===s(e[r],f)?i(e,r,d):i(e,++d,o),d<=n&&(r=d+1),n<=d&&(o=d-1)}}function i(t,i,e){var n=t[i];t[i]=t[e],t[e]=n}function e(t,i){return t<i?-1:t>i?1:0}return function(i,n,r,o,s){t(i,n,r||0,o||i.length-1,s||e)}}()},46358:(t,i,e)=>{"use strict";t.exports=r,t.exports.default=r;var n=e(508835);function r(t,i){if(!(this instanceof r))return new r(t,i);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&this._initFormat(i),this.clear()}function o(t,i,e){if(!e)return i.indexOf(t);for(var n=0;n<i.length;n++)if(e(t,i[n]))return n;return-1}function s(t,i){a(t,0,t.children.length,i,t)}function a(t,i,e,n,r){r||(r=_(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var o,s=i;s<e;s++)o=t.children[s],h(r,t.leaf?n(o):o);return r}function h(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function u(t,i){return t.minX-i.minX}function c(t,i){return t.minY-i.minY}function l(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function d(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function _(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function g(t,i,e,r,o){for(var s,a=[i,e];a.length;)(e=a.pop())-(i=a.pop())<=r||(s=i+Math.ceil((e-i)/r/2)*r,n(t,s,i,e,o),a.push(i,s,s,e))}r.prototype={all:function(){return this._all(this.data,[])},search:function(t){var i=this.data,e=[],n=this.toBBox;if(!d(t,i))return e;for(var r,o,s,a,h=[];i;){for(r=0,o=i.children.length;r<o;r++)s=i.children[r],d(t,a=i.leaf?n(s):s)&&(i.leaf?e.push(s):p(t,a)?this._all(s,e):h.push(s));i=h.pop()}return e},collides:function(t){var i=this.data,e=this.toBBox;if(!d(t,i))return!1;for(var n,r,o,s,a=[];i;){for(n=0,r=i.children.length;n<r;n++)if(o=i.children[n],d(t,s=i.leaf?e(o):o)){if(i.leaf||p(t,s))return!0;a.push(o)}i=a.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0,e=t.length;i<e;i++)this.insert(t[i]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=_([]),this},remove:function(t,i){if(!t)return this;for(var e,n,r,s,a=this.data,h=this.toBBox(t),u=[],c=[];a||u.length;){if(a||(a=u.pop(),n=u[u.length-1],e=c.pop(),s=!0),a.leaf&&-1!==(r=o(t,a.children,i)))return a.children.splice(r,1),u.push(a),this._condense(u),this;s||a.leaf||!p(a,h)?n?(e++,a=n.children[e],s=!1):a=null:(u.push(a),c.push(e),e=0,n=a,a=a.children[0])}return this},toBBox:function(t){return t},compareMinX:u,compareMinY:c,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,i){for(var e=[];t;)t.leaf?i.push.apply(i,t.children):e.push.apply(e,t.children),t=e.pop();return i},_build:function(t,i,e,n){var r,o=e-i+1,a=this._maxEntries;if(o<=a)return s(r=_(t.slice(i,e+1)),this.toBBox),r;n||(n=Math.ceil(Math.log(o)/Math.log(a)),a=Math.ceil(o/Math.pow(a,n-1))),(r=_([])).leaf=!1,r.height=n;var h,u,c,l,f=Math.ceil(o/a),p=f*Math.ceil(Math.sqrt(a));for(g(t,i,e,p,this.compareMinX),h=i;h<=e;h+=p)for(g(t,h,c=Math.min(h+p-1,e),f,this.compareMinY),u=h;u<=c;u+=f)l=Math.min(u+f-1,c),r.children.push(this._build(t,u,l,n-1));return s(r,this.toBBox),r},_chooseSubtree:function(t,i,e,n){for(var r,o,s,a,h,u,c,f,p,d;n.push(i),!i.leaf&&n.length-1!==e;){for(c=f=1/0,r=0,o=i.children.length;r<o;r++)h=l(s=i.children[r]),p=t,d=s,(u=(Math.max(d.maxX,p.maxX)-Math.min(d.minX,p.minX))*(Math.max(d.maxY,p.maxY)-Math.min(d.minY,p.minY))-h)<f?(f=u,c=h<c?h:c,a=s):u===f&&h<c&&(c=h,a=s);i=a||i.children[0]}return i},_insert:function(t,i,e){var n=this.toBBox,r=e?t:n(t),o=[],s=this._chooseSubtree(r,this.data,i,o);for(s.children.push(t),h(s,r);i>=0&&o[i].children.length>this._maxEntries;)this._split(o,i),i--;this._adjustParentBBoxes(r,o,i)},_split:function(t,i){var e=t[i],n=e.children.length,r=this._minEntries;this._chooseSplitAxis(e,r,n);var o=this._chooseSplitIndex(e,r,n),a=_(e.children.splice(o,e.children.length-o));a.height=e.height,a.leaf=e.leaf,s(e,this.toBBox),s(a,this.toBBox),i?t[i-1].children.push(a):this._splitRoot(e,a)},_splitRoot:function(t,i){this.data=_([t,i]),this.data.height=t.height+1,this.data.leaf=!1,s(this.data,this.toBBox)},_chooseSplitIndex:function(t,i,e){var n,r,o,s,h,u,c,f,p,d,_,g,m,v;for(u=c=1/0,n=i;n<=e-i;n++)p=r=a(t,0,n,this.toBBox),d=o=a(t,n,e,this.toBBox),void 0,void 0,void 0,void 0,_=Math.max(p.minX,d.minX),g=Math.max(p.minY,d.minY),m=Math.min(p.maxX,d.maxX),v=Math.min(p.maxY,d.maxY),s=Math.max(0,m-_)*Math.max(0,v-g),h=l(r)+l(o),s<u?(u=s,f=n,c=h<c?h:c):s===u&&h<c&&(c=h,f=n);return f},_chooseSplitAxis:function(t,i,e){var n=t.leaf?this.compareMinX:u,r=t.leaf?this.compareMinY:c;this._allDistMargin(t,i,e,n)<this._allDistMargin(t,i,e,r)&&t.children.sort(n)},_allDistMargin:function(t,i,e,n){t.children.sort(n);var r,o,s=this.toBBox,u=a(t,0,i,s),c=a(t,e-i,e,s),l=f(u)+f(c);for(r=i;r<e-i;r++)o=t.children[r],h(u,t.leaf?s(o):o),l+=f(u);for(r=e-i-1;r>=i;r--)o=t.children[r],h(c,t.leaf?s(o):o),l+=f(c);return l},_adjustParentBBoxes:function(t,i,e){for(var n=e;n>=0;n--)h(i[n],t)},_condense:function(t){for(var i,e=t.length-1;e>=0;e--)0===t[e].children.length?e>0?(i=t[e-1].children).splice(i.indexOf(t[e]),1):this.clear():s(t[e],this.toBBox)},_initFormat:function(t){var i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}},968509:(t,i,e)=>{"use strict";e.d(i,{Df:()=>h,bL:()=>u,mb:()=>c,X9:()=>l,He:()=>f,rc:()=>p,V4:()=>d,Tx:()=>_,PH:()=>g,ru:()=>m,oB:()=>v,yC:()=>y,GK:()=>x,Uh:()=>O,fk:()=>C,Ux:()=>S,qs:()=>b,Oz:()=>X,AE:()=>Y});var n=e(267644),r=e(85386),o=e(913580),s=e(83482),a=e(782359),h="10px sans-serif",u=[0,0,0,1],c="round",l=[],f=0,p="round",d=10,_=[0,0,0,1],g="center",m="middle",v=[0,0,0,0],y=1,x=new s.Z,k={},w=null,M={},O=function(){var t,i,e=k,r="32px ",s=["monospace","serif"],a=s.length,h="wmytzilWMYTZIL@#/&?$%10";function u(t){for(var e=D(),n=100;n<=700;n+=300){for(var o=n+" ",u=!0,c=0;c<a;++c){var l=s[c];if(e.font=o+r+l,i=e.measureText(h).width,t!=l){e.font=o+r+t+","+l;var f=e.measureText(h).width;u=u&&f!=i}}if(u)return!0}return!1}function c(){var i=!0;for(var n in e)e[n]<60&&(u(n)?(e[n]=60,(0,o.ZH)(M),w=null,x.clear()):(++e[n],i=!1));i&&(clearInterval(t),t=void 0)}return function(i){var r=(0,n.tr)(i);if(r)for(var o=0,s=r.length;o<s;++o){var a=r[o];a in e||(e[a]=60,u(a)||(e[a]=0,void 0===t&&(t=setInterval(c,32))))}}}();function D(){return w||(w=(0,r.E4)(1,1)),w}var I,L,C=(L=M,function(t){var i=L[t];return null==i&&(I||((I=document.createElement("span")).textContent="M",I.style.margin=I.style.padding="0 !important",I.style.position="absolute !important",I.style.left="-99999px !important"),I.style.font=t,document.body.appendChild(I),i=L[t]=I.offsetHeight,document.body.removeChild(I)),i});function S(t,i){var e=D();return t!=e.font&&(e.font=t),e.measureText(i).width}function b(t,i,e,n){0!==i&&(t.translate(e,n),t.rotate(i),t.translate(-e,-n))}var X=(0,a.Ue)();function Y(t,i,e,n,r,o,s,a,h,u,c){var l;1!=e&&(l=t.globalAlpha,t.globalAlpha=l*e),i&&t.setTransform.apply(t,i),t.drawImage(n,r,o,s,a,h,u,s*c,a*c),l&&(t.globalAlpha=l),i&&t.setTransform.apply(t,X)}},409371:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>n});const n=function(t){function i(i){var e=i||{};t.call(this,{points:1/0,fill:e.fill,radius:e.radius,stroke:e.stroke,atlasManager:e.atlasManager})}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.clone=function(){var t=new i({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),atlasManager:this.atlasManager_});return t.setOpacity(this.getOpacity()),t.setScale(this.getScale()),t},i.prototype.setRadius=function(t){this.radius_=t,this.render_(this.atlasManager_)},i}(e(218663).default)},898185:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>s});var n=e(949179),r=e(208913),o=function(t){var i=t||{};this.color_=void 0!==i.color?i.color:null,this.checksum_=void 0};o.prototype.clone=function(){var t=this.getColor();return new o({color:Array.isArray(t)?t.slice():t||void 0})},o.prototype.getColor=function(){return this.color_},o.prototype.setColor=function(t){this.color_=t,this.checksum_=void 0},o.prototype.getChecksum=function(){if(void 0===this.checksum_){var t=this.color_;t?Array.isArray(t)||"string"==typeof t?this.checksum_="f"+(0,r.XC)(t):this.checksum_=(0,n.sq)(this.color_):this.checksum_="f-"}return this.checksum_};const s=o},548039:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>o});var n=e(949179),r=function(t){this.opacity_=t.opacity,this.rotateWithView_=t.rotateWithView,this.rotation_=t.rotation,this.scale_=t.scale};r.prototype.clone=function(){return new r({opacity:this.getOpacity(),scale:this.getScale(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView()})},r.prototype.getOpacity=function(){return this.opacity_},r.prototype.getRotateWithView=function(){return this.rotateWithView_},r.prototype.getRotation=function(){return this.rotation_},r.prototype.getScale=function(){return this.scale_},r.prototype.getSnapToPixel=function(){return!1},r.prototype.getAnchor=function(){return(0,n.O3)()},r.prototype.getImage=function(t){return(0,n.O3)()},r.prototype.getHitDetectionImage=function(t){return(0,n.O3)()},r.prototype.getImageState=function(){return(0,n.O3)()},r.prototype.getImageSize=function(){return(0,n.O3)()},r.prototype.getHitDetectionImageSize=function(){return(0,n.O3)()},r.prototype.getOrigin=function(){return(0,n.O3)()},r.prototype.getSize=function(){return(0,n.O3)()},r.prototype.setOpacity=function(t){this.opacity_=t},r.prototype.setRotateWithView=function(t){this.rotateWithView_=t},r.prototype.setRotation=function(t){this.rotation_=t},r.prototype.setScale=function(t){this.scale_=t},r.prototype.setSnapToPixel=function(t){},r.prototype.listenImageChange=function(t,i){return(0,n.O3)()},r.prototype.load=function(){(0,n.O3)()},r.prototype.unlistenImageChange=function(t,i){(0,n.O3)()};const o=r},218663:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>u});var n=e(208913),r=e(545120),o=e(85386),s=e(591358),a=e(611256),h=e(968509);const u=function(t){function i(i){var e=void 0!==i.rotateWithView&&i.rotateWithView;t.call(this,{opacity:1,rotateWithView:e,rotation:void 0!==i.rotation?i.rotation:0,scale:1}),this.checksums_=null,this.canvas_=null,this.hitDetectionCanvas_=null,this.fill_=void 0!==i.fill?i.fill:null,this.origin_=[0,0],this.points_=i.points,this.radius_=void 0!==i.radius?i.radius:i.radius1,this.radius2_=i.radius2,this.angle_=void 0!==i.angle?i.angle:0,this.stroke_=void 0!==i.stroke?i.stroke:null,this.anchor_=null,this.size_=null,this.imageSize_=null,this.hitDetectionImageSize_=null,this.atlasManager_=i.atlasManager,this.render_(this.atlasManager_)}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.clone=function(){var t=new i({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),atlasManager:this.atlasManager_});return t.setOpacity(this.getOpacity()),t.setScale(this.getScale()),t},i.prototype.getAnchor=function(){return this.anchor_},i.prototype.getAngle=function(){return this.angle_},i.prototype.getFill=function(){return this.fill_},i.prototype.getHitDetectionImage=function(t){return this.hitDetectionCanvas_},i.prototype.getImage=function(t){return this.canvas_},i.prototype.getImageSize=function(){return this.imageSize_},i.prototype.getHitDetectionImageSize=function(){return this.hitDetectionImageSize_},i.prototype.getImageState=function(){return a.Z.LOADED},i.prototype.getOrigin=function(){return this.origin_},i.prototype.getPoints=function(){return this.points_},i.prototype.getRadius=function(){return this.radius_},i.prototype.getRadius2=function(){return this.radius2_},i.prototype.getSize=function(){return this.size_},i.prototype.getStroke=function(){return this.stroke_},i.prototype.listenImageChange=function(t,i){},i.prototype.load=function(){},i.prototype.unlistenImageChange=function(t,i){},i.prototype.render_=function(t){var i,e,n="",a="",u=0,c=null,l=0,f=0;this.stroke_&&(null===(e=this.stroke_.getColor())&&(e=h.Tx),e=(0,r.y)(e),void 0===(f=this.stroke_.getWidth())&&(f=h.yC),c=this.stroke_.getLineDash(),l=this.stroke_.getLineDashOffset(),s.XQ||(c=null,l=0),void 0===(a=this.stroke_.getLineJoin())&&(a=h.rc),void 0===(n=this.stroke_.getLineCap())&&(n=h.mb),void 0===(u=this.stroke_.getMiterLimit())&&(u=h.V4));var p=2*(this.radius_+f)+1,d={strokeStyle:e,strokeWidth:f,size:p,lineCap:n,lineDash:c,lineDashOffset:l,lineJoin:a,miterLimit:u};if(void 0===t){var _=(0,o.E4)(p,p);this.canvas_=_.canvas,i=p=this.canvas_.width,this.draw_(d,_,0,0),this.createHitDetectionCanvas_(d)}else{p=Math.round(p);var g,m=!this.fill_;m&&(g=this.drawHitDetectionCanvas_.bind(this,d));var v=this.getChecksum(),y=t.add(v,p,p,this.draw_.bind(this,d),g);this.canvas_=y.image,this.origin_=[y.offsetX,y.offsetY],i=y.image.width,m?(this.hitDetectionCanvas_=y.hitImage,this.hitDetectionImageSize_=[y.hitImage.width,y.hitImage.height]):(this.hitDetectionCanvas_=this.canvas_,this.hitDetectionImageSize_=[i,i])}this.anchor_=[p/2,p/2],this.size_=[p,p],this.imageSize_=[i,i]},i.prototype.draw_=function(t,i,e,n){var o,s,a;i.setTransform(1,0,0,1,0,0),i.translate(e,n),i.beginPath();var u=this.points_;if(u===1/0)i.arc(t.size/2,t.size/2,this.radius_,0,2*Math.PI,!0);else{var c=void 0!==this.radius2_?this.radius2_:this.radius_;for(c!==this.radius_&&(u*=2),o=0;o<=u;o++)s=2*o*Math.PI/u-Math.PI/2+this.angle_,a=o%2==0?this.radius_:c,i.lineTo(t.size/2+a*Math.cos(s),t.size/2+a*Math.sin(s))}if(this.fill_){var l=this.fill_.getColor();null===l&&(l=h.bL),i.fillStyle=(0,r.y)(l),i.fill()}this.stroke_&&(i.strokeStyle=t.strokeStyle,i.lineWidth=t.strokeWidth,t.lineDash&&(i.setLineDash(t.lineDash),i.lineDashOffset=t.lineDashOffset),i.lineCap=t.lineCap,i.lineJoin=t.lineJoin,i.miterLimit=t.miterLimit,i.stroke()),i.closePath()},i.prototype.createHitDetectionCanvas_=function(t){if(this.hitDetectionImageSize_=[t.size,t.size],this.fill_)this.hitDetectionCanvas_=this.canvas_;else{var i=(0,o.E4)(t.size,t.size);this.hitDetectionCanvas_=i.canvas,this.drawHitDetectionCanvas_(t,i,0,0)}},i.prototype.drawHitDetectionCanvas_=function(t,i,e,r){i.setTransform(1,0,0,1,0,0),i.translate(e,r),i.beginPath();var o=this.points_;if(o===1/0)i.arc(t.size/2,t.size/2,this.radius_,0,2*Math.PI,!0);else{var s,a,u,c=void 0!==this.radius2_?this.radius2_:this.radius_;for(c!==this.radius_&&(o*=2),s=0;s<=o;s++)u=2*s*Math.PI/o-Math.PI/2+this.angle_,a=s%2==0?this.radius_:c,i.lineTo(t.size/2+a*Math.cos(u),t.size/2+a*Math.sin(u))}i.fillStyle=(0,n.XC)(h.bL),i.fill(),this.stroke_&&(i.strokeStyle=t.strokeStyle,i.lineWidth=t.strokeWidth,t.lineDash&&(i.setLineDash(t.lineDash),i.lineDashOffset=t.lineDashOffset),i.stroke()),i.closePath()},i.prototype.getChecksum=function(){var t=this.stroke_?this.stroke_.getChecksum():"-",i=this.fill_?this.fill_.getChecksum():"-";if(!this.checksums_||t!=this.checksums_[1]||i!=this.checksums_[2]||this.radius_!=this.checksums_[3]||this.radius2_!=this.checksums_[4]||this.angle_!=this.checksums_[5]||this.points_!=this.checksums_[6]){var e="r"+t+i+(void 0!==this.radius_?this.radius_.toString():"-")+(void 0!==this.radius2_?this.radius2_.toString():"-")+(void 0!==this.angle_?this.angle_.toString():"-")+(void 0!==this.points_?this.points_.toString():"-");this.checksums_=[e,t,i,this.radius_,this.radius2_,this.angle_,this.points_]}return this.checksums_[0]},i}(e(548039).default)},120767:(t,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>o});var n=e(949179),r=function(t){var i=t||{};this.color_=void 0!==i.color?i.color:null,this.lineCap_=i.lineCap,this.lineDash_=void 0!==i.lineDash?i.lineDash:null,this.lineDashOffset_=i.lineDashOffset,this.lineJoin_=i.lineJoin,this.miterLimit_=i.miterLimit,this.width_=i.width,this.checksum_=void 0};r.prototype.clone=function(){var t=this.getColor();return new r({color:Array.isArray(t)?t.slice():t||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})},r.prototype.getColor=function(){return this.color_},r.prototype.getLineCap=function(){return this.lineCap_},r.prototype.getLineDash=function(){return this.lineDash_},r.prototype.getLineDashOffset=function(){return this.lineDashOffset_},r.prototype.getLineJoin=function(){return this.lineJoin_},r.prototype.getMiterLimit=function(){return this.miterLimit_},r.prototype.getWidth=function(){return this.width_},r.prototype.setColor=function(t){this.color_=t,this.checksum_=void 0},r.prototype.setLineCap=function(t){this.lineCap_=t,this.checksum_=void 0},r.prototype.setLineDash=function(t){this.lineDash_=t,this.checksum_=void 0},r.prototype.setLineDashOffset=function(t){this.lineDashOffset_=t,this.checksum_=void 0},r.prototype.setLineJoin=function(t){this.lineJoin_=t,this.checksum_=void 0},r.prototype.setMiterLimit=function(t){this.miterLimit_=t,this.checksum_=void 0},r.prototype.setWidth=function(t){this.width_=t,this.checksum_=void 0},r.prototype.getChecksum=function(){return void 0===this.checksum_&&(this.checksum_="s",this.color_?"string"==typeof this.color_?this.checksum_+=this.color_:this.checksum_+=(0,n.sq)(this.color_):this.checksum_+="-",this.checksum_+=","+(void 0!==this.lineCap_?this.lineCap_.toString():"-")+","+(this.lineDash_?this.lineDash_.toString():"-")+","+(void 0!==this.lineDashOffset_?this.lineDashOffset_:"-")+","+(void 0!==this.lineJoin_?this.lineJoin_:"-")+","+(void 0!==this.miterLimit_?this.miterLimit_.toString():"-")+","+(void 0!==this.width_?this.width_.toString():"-")),this.checksum_};const o=r},831219:(t,i,e)=>{"use strict";e.r(i),e.d(i,{toFunction:()=>u,createDefaultStyle:()=>l,createEditingStyle:()=>f,default:()=>d});var n=e(438906),r=e(28795),o=e(409371),s=e(898185),a=e(120767),h=function(t){var i=t||{};this.geometry_=null,this.geometryFunction_=p,void 0!==i.geometry&&this.setGeometry(i.geometry),this.fill_=void 0!==i.fill?i.fill:null,this.image_=void 0!==i.image?i.image:null,this.renderer_=void 0!==i.renderer?i.renderer:null,this.stroke_=void 0!==i.stroke?i.stroke:null,this.text_=void 0!==i.text?i.text:null,this.zIndex_=i.zIndex};function u(t){var i,e;"function"==typeof t?i=t:(Array.isArray(t)?e=t:((0,n.h)("function"==typeof t.getZIndex,41),e=[t]),i=function(){return e});return i}h.prototype.clone=function(){var t=this.getGeometry();return t&&"object"==typeof t&&(t=t.clone()),new h({geometry:t,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})},h.prototype.getRenderer=function(){return this.renderer_},h.prototype.setRenderer=function(t){this.renderer_=t},h.prototype.getGeometry=function(){return this.geometry_},h.prototype.getGeometryFunction=function(){return this.geometryFunction_},h.prototype.getFill=function(){return this.fill_},h.prototype.setFill=function(t){this.fill_=t},h.prototype.getImage=function(){return this.image_},h.prototype.setImage=function(t){this.image_=t},h.prototype.getStroke=function(){return this.stroke_},h.prototype.setStroke=function(t){this.stroke_=t},h.prototype.getText=function(){return this.text_},h.prototype.setText=function(t){this.text_=t},h.prototype.getZIndex=function(){return this.zIndex_},h.prototype.setGeometry=function(t){"function"==typeof t?this.geometryFunction_=t:"string"==typeof t?this.geometryFunction_=function(i){return i.get(t)}:t?void 0!==t&&(this.geometryFunction_=function(){return t}):this.geometryFunction_=p,this.geometry_=t},h.prototype.setZIndex=function(t){this.zIndex_=t};var c=null;function l(t,i){if(!c){var e=new s.default({color:"rgba(255,255,255,0.4)"}),n=new a.default({color:"#3399CC",width:1.25});c=[new h({image:new o.default({fill:e,stroke:n,radius:5}),fill:e,stroke:n})]}return c}function f(){var t={},i=[255,255,255,1],e=[0,153,255,1];return t[r.Z.POLYGON]=[new h({fill:new s.default({color:[255,255,255,.5]})})],t[r.Z.MULTI_POLYGON]=t[r.Z.POLYGON],t[r.Z.LINE_STRING]=[new h({stroke:new a.default({color:i,width:5})}),new h({stroke:new a.default({color:e,width:3})})],t[r.Z.MULTI_LINE_STRING]=t[r.Z.LINE_STRING],t[r.Z.CIRCLE]=t[r.Z.POLYGON].concat(t[r.Z.LINE_STRING]),t[r.Z.POINT]=[new h({image:new o.default({radius:6,fill:new s.default({color:e}),stroke:new a.default({color:i,width:1.5})}),zIndex:1/0})],t[r.Z.MULTI_POINT]=t[r.Z.POINT],t[r.Z.GEOMETRY_COLLECTION]=t[r.Z.POLYGON].concat(t[r.Z.LINE_STRING],t[r.Z.POINT]),t}function p(t){return t.getGeometry()}const d=h}}]);