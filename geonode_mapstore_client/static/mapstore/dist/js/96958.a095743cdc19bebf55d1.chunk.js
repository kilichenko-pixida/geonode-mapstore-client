(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[96958],{196958:(e,t,r)=>{"use strict";r.d(t,{t3:()=>I,WQ:()=>k,dM:()=>x,rK:()=>A,Lo:()=>M,gP:()=>C,S9:()=>E,AV:()=>T,Sc:()=>G,a3:()=>N,IC:()=>Q,wT:()=>J,cZ:()=>K,ek:()=>L,Qc:()=>U,Cf:()=>Z,dJ:()=>$,DR:()=>q,f1:()=>B,Pf:()=>H});var n=r(406557),i=r.n(n),o=r(92742),u=r.n(o),a=r(819873),l=r.n(a),c=r(630998),d=r.n(c),f=r(227361),v=r.n(f),s=r(701469),g=r.n(s),p=r(414293),h=r.n(p),m=r(747037),y=r.n(m),b=r(378889);function O(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var I=function(e,t,r){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;return d()(e,(function(e){return e<=r&&r<e+t}))}(t,r,e);return-1===n?n:n*r+e-t[n]},S={id:"empty_row",get:function(){}},k=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3?arguments[3]:void 0;return t[I(e,r,n)]||P({},S)},x=function(e,t){return t[e]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return g()(e)?e.reduce((function(e,t){return P(P({},e),{},j({},t.id,P(P({},e[t.id]),t.updated)))}),{}):{}},D=function(e,t){var r=Object.keys(t).filter((function(e){return"geometry"!==e})).reduce((function(e,r){return P(P({},e),{},j({},r,t[r]))}),{}),n=Object.keys(t).filter((function(e){return"geometry"===e})).reduce((function(e,r){return P(P({},e),{},j({},r,t[r]))}),{});return P(P(P({},e),n),{},{properties:P(P({},e&&e.properties||{}),r)})},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=d()(e,t);return n>=0?e.map((function(e,t){return t===n?r:e})):[].concat(O(e),[r])},M=function(e){return((0,b.getFeatureTypeProperties)(e)||[]).filter((function(e){return!(0,b.isGeometryType)(e)}))},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;return t.map((function(t){return r<=t&&t<=n?0:Math.abs(t-e)})).reduce((function(e,t,r,n){return t>n[e]&&r||e}),0)},V=function(e,t){return t.filter((function(t,r){return r!==e}))},_=function(e,t,r){return e.filter((function(e,n){return n<t||n>=t+r}))},C=function(e,t,r,n){for(var i,o,u=e;u<=t&&void 0===i;u++)-1===I(u*n,r,n)&&(i=u);for(var a=t;a>=e&&void 0===o;a--)-1===I(a*n,r,n)&&(o=a);return[i,o].filter((function(e){return void 0!==e}))},E=function(e,t,r){var n=e.startPage,i=e.endPage,o=C(n,i,t,r),u=o[1]-o[0]+1;return{startIndex:o[0]*r,maxFeatures:u*r}},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.editable,i=void 0!==n&&n,o=r.sortable,u=void 0===o||o,a=r.resizable,l=void 0===a||a,c=r.filterable,d=void 0===c||c,f=r.defaultSize,v=void 0===f?200:f,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},g=s.getEditor,p=void 0===g?function(){}:g,h=s.getFilterRenderer,m=void 0===h?function(){}:h,y=s.getFormatter,b=void 0===y?function(){}:y;return M(e).filter((function(e){return!(t[e.name]&&t[e.name].hide)})).map((function(e){return{sortable:u,key:e.name,width:t[e.name]&&t[e.name].width||v||void 0,name:t[e.name]&&t[e.name].label||e.name,resizable:l,editable:i,filterable:d,editor:p(e),formatter:b(e),filterRenderer:m(e,e.name)}}))},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},o=(0,b.findGeometryProperty)(r);return e.map((function(e){return P(P({},e),{},{events:e.events&&Object.keys(e.events).reduce((function(i,o){return P(P({},i),{},j({},o,(function(i,u){return e.events[o](t(u.rowIdx),u,r,n)})))}),{})},"geometry"===e.key&&o?{filterRenderer:i(P(P({},o),{},{localType:"geometry"}),o.name),filterable:!0,geometryPropName:o.name}:{})}))},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return Object.keys(e).reduce((function(o,u){return P(P({},o),{},j({},u,(function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return e[u].apply(e,a.concat([t,r,n,i]))})))}),{})},Q=function(e,t){return!!(0,b.getPropertyDesciptor)(e,t)},J=function(e,t,r){return(0,b.isValidValueForPropertyName)(e,(i=r,"geometry"===(n=t)?function(e){return v()((0,b.findGeometryProperty)(e),"name")}(i):n),r);var n,i},K=function(){return"EPSG:4326"},L=function(e,t,r){return function(n){return t.length>0?n._new:!e||e&&!!r[n.id]}},U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return D(e,t[e.id]||{})},W=/\s*(!==|!=|<>|<=|>=|===|==|=|<|>)?\s*(-?\d*\.?\d*)\s*/,Z=function(e,t){if("string"===t)return{newVal:u()(e),operator:"ilike"};var r,n=W.exec(e),i="=";return n?("!=="===(i=n[1]||"=")|"!="===i?i="<>":"==="===i|"=="===i&&(i="="),r=parseFloat(n[2])):r=parseFloat(e,10),{newVal:r,operator:i}},$=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.attribute,n=t.operator,o=t.value,u=t.type,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=(null===(e=a.groupFields)||void 0===e?void 0:e.filter((function(e){return r!==e.id&&1!==e.id})))||[];if(("string"===u||"number"===u)&&y()(o)&&-1!==(null==o?void 0:o.indexOf(","))){var c,d=(null==o?void 0:o.split(",").filter(i()))||[],f=(null===(c=a.filterFields)||void 0===c?void 0:c.filter((function(e){return r!==e.attribute})))||[];return P(P({},a),{},{groupFields:l.concat([{id:r,logic:"OR",groupId:1,index:0}]),filterFields:f.concat(d.map((function(e){var t=Z(e,u),n=t.operator,i=t.newVal;return{attribute:r,rowId:Date.now(),type:u,groupId:r,operator:n,value:i}}))),spatialField:a.spatialField,spatialFieldOperator:a.spatialFieldOperator})}return P(P({},a),{},{groupFields:l.concat([{id:1,logic:"AND",groupId:1,index:0}]),filterFields:"geometry"===u?a.filterFields:h()(o)?(a.filterFields||[]).filter((function(e){return e.attribute!==r})):z(a.filterFields||[],{attribute:r},{attribute:r,rowId:Date.now(),type:u,groupId:1,operator:n,value:o}),spatialField:"geometry"===u?o:a.spatialField,spatialFieldOperator:g()(o)?"OR":""})},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.startIndex,r=void 0===t?0:t,n=e.maxFeatures,i=void 0===n?1:n,o=e.totalFeatures,u=void 0===o?0:o,a=e.resultSize;return{page:Math.ceil(r/i),resultSize:a,size:i,total:u,maxPages:Math.ceil(u/i)-1}},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.endPage,n=t.startPage,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.pages,u=i.features,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=a.size,d=a.maxStoredPages,f=a.startIndex,s=C(n,r,o,c),g=s[1]-s[0]+1,p=v()(e,"features",[]);p.length!==g*c&&(p=p.concat(l()(Array(g*c-p.length>0?g*c-p.length:p.length),!1)));var h=o,m=u,y=h.length+g-Math.max(d,r-n+1);if(y>0)for(var b=n*c,O=r*c,w=b+(O-b)/2,F=0;F<y;F++){var P=R(w,o,b,O),j=P*c;h=V(P,h),m=_(u,j,c)}for(var I=[],S=0;S<g;S++)I.push(f+c*S);return{pages:h.concat(I),features:m.concat(p)}},H=function(e,t){var r=void 0;return t&&e&&(r=e.filter((function(e){var r,n;return!(null!==(r=null===(n=t[e.attribute])||void 0===n?void 0:n.hide)&&void 0!==r&&r)})).map((function(e){return e.attribute}))).length===e.length&&(r=void 0),r}}}]);