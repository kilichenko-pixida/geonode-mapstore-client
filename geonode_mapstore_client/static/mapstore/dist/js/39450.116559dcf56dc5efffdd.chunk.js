(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[39450,3774],{286320:(t,e,n)=>{"use strict";function r(t){return Math.pow(t,3)}function i(t){return 1-r(1-t)}function o(t){return 3*t*t-2*t*t*t}function s(t){return t}n.d(e,{YQ:()=>r,Vv:()=>i,rd:()=>o,GE:()=>s})},685246:(t,e,n)=>{"use strict";n.d(e,{Z:()=>m});var r=n(677701);class i extends r.Z{constructor(t){super(t=t||{})}}const o=i;var s=n(704089),a=n(611256),h=n(706908),l=n(782359),u=n(421915),c=n(218672);class g extends s.Z{constructor(t){super(t),this.image_=null}getImage(){return this.image_?this.image_.getImage():null}prepareFrame(t){const e=t.layerStatesArray[t.layerIndex],n=t.pixelRatio,r=t.viewState,i=r.resolution,o=this.getLayer().getSource(),s=t.viewHints;let l=t.extent;if(void 0!==e.extent&&(l=(0,u.Ed)(l,(0,c.dY)(e.extent,r.projection))),!s[h.Z.ANIMATING]&&!s[h.Z.INTERACTING]&&!(0,u.xb)(l))if(o){const t=r.projection,e=o.getImage(l,i,n,t);e&&(this.loadImage(e)?this.image_=e:e.getState()===a.Z.EMPTY&&(this.image_=null))}else this.image_=null;return!!this.image_}getData(t){const e=this.frameState;if(!e)return null;const n=this.getLayer(),r=(0,l.nn)(e.pixelToCoordinateTransform,t.slice()),i=n.getExtent();if(i&&!(0,u.b8)(i,r))return null;const o=this.image_.getExtent(),s=this.getImage(),a=(0,u.dz)(o),h=Math.floor(s.width*((r[0]-o[0])/a));if(h<0||h>=s.width)return null;const c=(0,u.Cr)(o),g=Math.floor(s.height*((o[3]-r[1])/c));return g<0||g>=s.height?null:this.getImageData(s,h,g)}renderFrame(t,e){const n=this.image_,r=n.getExtent(),i=n.getResolution(),o=n.getPixelRatio(),s=t.layerStatesArray[t.layerIndex],a=t.pixelRatio,h=t.viewState,g=h.center,d=a*i/(h.resolution*o),m=t.extent,f=h.resolution,p=h.rotation,x=Math.round((0,u.dz)(m)/f*a),v=Math.round((0,u.Cr)(m)/f*a);(0,l.qC)(this.pixelTransform,t.size[0]/2,t.size[1]/2,1/a,1/a,p,-x/2,-v/2),(0,l.nb)(this.inversePixelTransform,this.pixelTransform);const I=(0,l.BB)(this.pixelTransform);this.useContainer(e,I,this.getBackground(t));const w=this.context,_=w.canvas;_.width!=x||_.height!=v?(_.width=x,_.height=v):this.containerReused||w.clearRect(0,0,x,v);let y=!1,b=!0;if(s.extent){const e=(0,c.dY)(s.extent,h.projection);b=(0,u.kK)(e,t.extent),y=b&&!(0,u.r4)(e,t.extent),y&&this.clipUnrotated(w,t,e)}const R=this.getImage(),T=(0,l.qC)(this.tempTransform,x/2,v/2,d,d,0,o*(r[0]-g[0])/i,o*(g[1]-r[3])/i);this.renderedResolution=i*a/o;const E=R.width*T[0],M=R.height*T[3];if(this.getLayer().getSource().getInterpolate()||(w.imageSmoothingEnabled=!1),this.preRender(w,t),b&&E>=.5&&M>=.5){const t=T[4],e=T[5],n=s.opacity;let r;1!==n&&(r=w.globalAlpha,w.globalAlpha=n),w.drawImage(R,0,0,+R.width,+R.height,t,e,E,M),1!==n&&(w.globalAlpha=r)}return this.postRender(w,t),y&&w.restore(),w.imageSmoothingEnabled=!0,I!==_.style.transform&&(_.style.transform=I),this.container}}const d=g,m=class extends o{constructor(t){super(t)}createRenderer(){return new d(this)}getData(t){return super.getData(t)}}},938642:(t,e,n)=>{"use strict";n.d(e,{h$:()=>i,YP:()=>o,gE:()=>s,Gw:()=>a});var r=n(921882);function i(t){if(void 0!==t)return 0}function o(t){if(void 0!==t)return t}function s(t){const e=2*Math.PI/t;return function(t,n){return n?t:void 0!==t?t=Math.floor(t/e+.5)*e:void 0}}function a(t){return t=t||(0,r.Yr)(5),function(e,n){return n?e:void 0!==e?Math.abs(e)<=t?0:e:void 0}}}}]);