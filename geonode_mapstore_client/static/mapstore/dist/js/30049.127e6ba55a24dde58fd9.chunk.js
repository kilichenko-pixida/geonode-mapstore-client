(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[30049],{830049:(e,t,r)=>{"use strict";r.d(t,{H2:()=>T,R9:()=>O,_P:()=>S,st:()=>I,NG:()=>F,xV:()=>j,kD:()=>x,kf:()=>L,$O:()=>N,mL:()=>U,vg:()=>R,ok:()=>q});var n=r(717621),a=r.n(n),o=r(409669),i=r.n(o),s=r(414293),l=r.n(s),u=r(513218),c=r.n(u),f=r(433506),h=r(42648);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}var v=["image"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return w(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var k=function(e){return["between","double2bool","in","parseBoolean","strEndsWith","strEqualsIgnoreCase","strMatches","strStartsWith"].includes(null==e?void 0:e.name)},T=function(e){return["abs","acos","asin","atan","atan2","ceil","cos","exp","floor","log","max","min","modulo","pi","pow","random","rint","round","sin","sqrt","strIndexOf","strLastIndexOf","strLength","tan","toDegrees","toRadians"].includes(null==e?void 0:e.name)},O=function(e){return["numberFormat","strAbbreviate","strCapitalize","strConcat","strDefaultIfBlank","strReplace","strStripAccents","strSubstring","strSubstringStart","strToLowerCase","strToUpperCase","strTrim"].includes(null==e?void 0:e.name)},M=function(e){return["property"].includes(null==e?void 0:e.name)},P=function(e){return"attribute"===(null==e?void 0:e.type)||["msMarkerIcon"].includes(null==e?void 0:e.name)},S=function(e){return k(e)||T(e)||O(e)||M(e)||P(e)},C=function(e){return(null!=e&&e.getProperties?e.getProperties():null==e?void 0:e.properties)||{}},I={evaluateFunction:function(e,t){var r=C(t);if("property"===e.name){if(!t)throw new Error("Could not evalute 'property' function. Feature ".concat(t," is not defined."));return O(e.args[0])?r[I.evaluateStringFunction(e.args[0],t)]:r[e.args[0]]}return O(e)?I.evaluateStringFunction(e,t):T(e)?I.evaluateNumberFunction(e,t):k(e)?I.evaluateBooleanFunction(e,t):M(e)?I.evaluateUnknownFunction(e,t):P(e)?I.evaluateMapStoreFunction(e,t):null},evaluateBooleanFunction:function(e,t){var r=e.args.map((function(e){return S(e)?I.evaluateFunction(e,t):e}));switch(e.name){case"between":return r[0]>=r[1]&&r[0]<=r[2];case"double2bool":default:return!1;case"in":return r.slice(1).includes(r[0]);case"parseBoolean":return!!r[0];case"strEndsWith":return r[0].endsWith(r[1]);case"strEqualsIgnoreCase":return r[0].toLowerCase()===r[1].toLowerCase();case"strMatches":return new RegExp(r[1]).test(r[0]);case"strStartsWith":return r[0].startsWith(r[1])}},evaluateNumberFunction:function(e,t){if("pi"===e.name)return Math.PI;if("random"===e.name)return(0,h.I)();var r=e.args.map((function(e){return S(e)?I.evaluateFunction(e,t):e}));switch(e.name){case"abs":return Math.abs(r[0]);case"acos":return Math.acos(r[0]);case"asin":return Math.asin(r[0]);case"atan":return Math.atan(r[0]);case"atan2":case"rint":default:return r[0];case"ceil":return Math.ceil(r[0]);case"cos":return Math.cos(r[0]);case"exp":return Math.exp(r[0]);case"floor":return Math.floor(r[0]);case"log":return Math.log(r[0]);case"max":return Math.max.apply(Math,g(r));case"min":return Math.min.apply(Math,g(r));case"modulo":return r[0]%r[1];case"pow":return Math.pow(r[0],r[1]);case"round":return Math.round(r[0]);case"sin":return Math.sin(r[0]);case"sqrt":return Math.sqrt(r[0]);case"strIndexOf":return r[0].indexOf(r[1]);case"strLastIndexOf":return r[0].lastIndexOf(r[1]);case"strLength":return r[0].length;case"tan":return Math.tan(r[0]);case"toDegrees":return r[0]*(180/Math.PI);case"toRadians":return r[0]*(Math.PI/180)}},evaluateUnknownFunction:function(e,t){var r=e.args.map((function(e){return S(e)?I.evaluateFunction(e,t):e})),n=C(t);return"property"===e.name?n[r[0]]:r[0]},evaluateStringFunction:function(e,t){var r,n=e.args.map((function(e){return S(e)?I.evaluateFunction(e,t):e}));switch(e.name){case"numberFormat":case"strAbbreviate":default:return n[0];case"strCapitalize":var a,o=n[0].toLowerCase().split(" "),i=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=y(e))){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}(o);try{for(i.s();!(a=i.n()).done;){var s=a.value;s=s.charAt(0).toUpperCase()+s.substring(1)}}catch(e){i.e(e)}finally{i.f()}return o.join(" ");case"strConcat":return n.join();case"strDefaultIfBlank":return(null===(r=n[0])||void 0===r?void 0:r.length)<1?n[1]:n[0];case"strReplace":return!0===n[3]?n[0].replaceAll(n[1],n[2]):n[0].replace(n[1],n[2]);case"strStripAccents":return n[0].normalize("NFKD").replace(/[\u0300-\u036f]/g,"");case"strSubstring":return n[0].substring(n[1],n[2]);case"strSubstringStart":return n[0].substring(n[1]);case"strToLowerCase":return n[0].toLowerCase();case"strToUpperCase":return n[0].toUpperCase();case"strTrim":return n[0].trim()}},evaluateMapStoreFunction:function(e,t){if("attribute"===e.type)return I.evaluateFunction({name:"property",args:[e.name]},t);var r=e.args.map((function(e){return S(e)?I.evaluateFunction(e,t):e}));return"msMarkerIcon"===e.name?f.Z.markers.extra.markerToDataUrl({iconColor:r[0].color,iconShape:r[0].shape,iconGlyph:r[0].glyph}):r[0]}},F=function e(t,r){var n=C(t),a=!0,o=!1;({"&&":!0,"||":!0,"!":!0})[r[0]]&&(o=!0);try{var i,s,l;if(o)switch(r[0]){case"&&":i=!0,r.slice(1).forEach((function(r){e(t,r)||(i=!1)})),a=i;break;case"||":i=!1,r.slice(1).forEach((function(r){e(t,r)&&(i=!0)})),a=i;break;case"!":a=!undefined.geoStylerFilterToOlParserFilter(t,r[1]);break;default:throw new Error("Cannot parse Filter. Unknown combination or negation operator.")}else switch(s=S(r[1])?I.evaluateFunction(r[1],t):n[r[1]],l=S(r[2])?n[I.evaluateFunction(r[2],t)]:r[2],r[0]){case"==":a=""+s==""+l;break;case"*=":"string"==typeof l&&"string"==typeof s&&(a=!(l.length>s.length)&&-1!==s.indexOf(l));break;case"!=":a=""+s!=""+l;break;case"<":a=Number(s)<Number(l);break;case"<=":a=Number(s)<=Number(l);break;case">":a=Number(s)>Number(l);break;case">=":a=Number(s)>=Number(l);break;default:throw new Error("Cannot parse Filter. Unknown comparison operator.")}}catch(e){throw new Error("Cannot parse Filter. Invalid structure.")}return a},j=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"n.v.",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e,t){return t},a=C(e),o=t||"",i=new RegExp("\\{\\{(.*?)\\}\\}","g"),s=o.match(i);return s&&s.forEach((function(e){for(var t=0,i=0,s=Object.entries(a);i<s.length;i++){var l=(f=s[i],h=2,function(e){if(Array.isArray(e))return e}(f)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,s=[],l=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return s}}(f,h)||y(f,h)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=l[0],c=l[1];if(e.slice(2,e.length-2).toLowerCase()===u.toLowerCase()){o=o.replace(e,n(u,c));break}t++}var f,h;t===Object.keys(a).length&&(o=o.replace(e,r))})),o},A={},x=function(e,t){var r,n,a,o,i,s,l,u,c,f,h,m,v,d,p,b,g;return c=(n="msMarkerIcon"===(null==t||null===(r=t.image)||void 0===r?void 0:r.name)?t:e).image,f=n.color,h=n.fillOpacity,m=n.strokeColor,v=n.strokeOpacity,d=n.strokeWidth,p=n.strokeDasharray,b=n.radius,g=n.wellKnownName,c?"msMarkerIcon"===(null==c?void 0:c.name)?"msMarkerIcon:".concat(null==c||null===(a=c.args)||void 0===a||null===(o=a[0])||void 0===o?void 0:o.color,":").concat(null==c||null===(i=c.args)||void 0===i||null===(s=i[0])||void 0===s?void 0:s.shape,":").concat(null==c||null===(l=c.args)||void 0===l||null===(u=l[0])||void 0===u?void 0:u.glyph):c:[g,f,h,m,v,(p||[]).join("_"),d,b].join(":")},E=function(e){var t=e.image,r=x(e);return A[r]?Promise.resolve(A[r]):new Promise((function(e,n){var a=new Image,o=t;if(c()(o)&&"msMarkerIcon"===o.name)try{var i=o.args[0];o=f.Z.markers.extra.markerToDataUrl({iconColor:i.color,iconShape:i.shape,iconGlyph:i.glyph})}catch(e){n(r)}a.crossOrigin="anonymous",a.onload=function(){A[r]={id:r,image:a,src:o,width:a.naturalWidth,height:a.naturalHeight},e(A[r])},a.onerror=function(){n(r)},a.src=o}))},D=function(e,t,r,n,a){var o=n*a/2,i=n/2;e.moveTo(t-o,r-i),e.lineTo(t+o,r-i),e.lineTo(t+o,r-o),e.lineTo(t+i,r-o),e.lineTo(t+i,r+o),e.lineTo(t+o,r+o),e.lineTo(t+o,r+i),e.lineTo(t-o,r+i),e.lineTo(t-o,r+o),e.lineTo(t-i,r+o),e.lineTo(t-i,r-o),e.lineTo(t-o,r-o),e.closePath()},L=function(e){var t=x(e);if(A[t]){var r=A[t],n=r.image;return p(p({},function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(r,v)),{},{canvas:n})}var o=!(null==e||!e.strokeWidth||null==e||!e.strokeOpacity),i=!(null==e||!e.fillOpacity||(e.wellKnownName||"").includes("shape://")),s=document.createElement("canvas"),l=s.getContext("2d"),u=e.radius,c=o?e.strokeWidth/2:4,f=c,h=c,m=u+c,d=u+c,b=2*e.radius,g=2*e.radius;if(s.setAttribute("width",b+2*c),s.setAttribute("height",g+2*c),i){var y=a()(e.color);y.setAlpha(e.fillOpacity),l.fillStyle=y.toRgbString()}if(o){var w=a()(e.strokeColor);w.setAlpha(e.strokeOpacity),l.strokeStyle=w.toRgbString(),l.lineWidth=e.strokeWidth,l.lineJoin="round",l.lineCap="round",e.strokeDasharray&&l.setLineDash(e.strokeDasharray)}switch(e.wellKnownName){case"Circle":default:l.arc(m,d,u,0,2*Math.PI);break;case"Square":l.rect(f,h,b,g);break;case"Triangle":var k=Math.sqrt(3)*u,T=k/3,O=(g-k)/2;l.moveTo(m,d+O-2*T),l.lineTo(m+u,d+O+T),l.lineTo(m-u,d+O+T),l.closePath();break;case"Star":!function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5,a=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,i=Math.PI/2*3,s=t,l=r,u=Math.PI/n;e.moveTo(t,r-a);for(var c=0;c<n;c++)s=t+Math.cos(i)*a,l=r+Math.sin(i)*a,e.lineTo(s,l),i+=u,s=t+Math.cos(i)*o,l=r+Math.sin(i)*o,e.lineTo(s,l),i+=u;e.lineTo(t,r-a),e.closePath()}(l,m,d,5,u,u/2);break;case"Cross":D(l,m,d,2*u,.2);break;case"X":l.translate(m,d),l.rotate(45*Math.PI/180),l.translate(-m,-d),D(l,m,d,2*u,.2);break;case"shape://vertline":l.moveTo(m,h),l.lineTo(m,g),l.closePath();break;case"shape://horline":l.moveTo(f,d),l.lineTo(b,d),l.closePath();break;case"shape://slash":l.translate(m,d),l.rotate(45*Math.PI/180),l.translate(-m,-d),l.moveTo(m,h),l.lineTo(m,g),l.closePath();break;case"shape://backslash":l.translate(m,d),l.rotate(-45*Math.PI/180),l.translate(-m,-d),l.moveTo(m,h),l.lineTo(m,g);break;case"shape://dot":l.moveTo(m-1,d-1),l.lineTo(m+1,d+1),l.closePath();break;case"shape://plus":l.moveTo(m,h),l.lineTo(m,g),l.moveTo(f,d),l.lineTo(b,d),l.closePath();break;case"shape://times":l.translate(m,d),l.rotate(45*Math.PI/180),l.translate(-m,-d),l.moveTo(m,h),l.lineTo(m,g),l.moveTo(f,d),l.lineTo(b,d),l.closePath();break;case"shape://oarrow":l.moveTo(f,h),l.lineTo(b,d),l.lineTo(f,g);break;case"shape://carrow":l.moveTo(f,h),l.lineTo(b,d),l.lineTo(f,g),l.closePath()}return i&&l.fill(),o&&l.stroke(),{width:b,height:g,canvas:s}},N=function(e){var t=x(e);return A[t]?Promise.resolve(A[t]):new Promise((function(r,n){var a,o,s,u;if(null!==(a=document)&&void 0!==a&&a.createElement||n(t),null!=e&&null!==(o=e.wellKnownName)&&void 0!==o&&o.includes(".svg"))(s=e.wellKnownName,u={fillColor:e.color,fillOpacity:e.fillOpacity,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWidth:e.strokeWidth,strokeDasharray:e.strokeDasharray,size:2*e.radius},new Promise((function(e,t){i().get(s,{"Content-Type":"image/svg+xml;charset=utf-8"}).then((function(r){var n,a=window.URL||window.webkitURL||window,o=(new DOMParser).parseFromString(r.data,"image/svg+xml").firstElementChild,i=u.size||32,s=null!==(n=u.strokeWidth)&&void 0!==n?n:1,c=i+s,f=i+s;o.setAttribute("fill",u.fillColor||"#FFCC33"),o.setAttribute("fill-opacity",l()(u.fillOpacity)?.2:u.fillOpacity),o.setAttribute("stroke",u.strokeColor||"#FFCC33"),o.setAttribute("stroke-opacity",l()(u.strokeOpacity)?1:u.strokeOpacity),o.setAttribute("stroke-width",s),o.setAttribute("width",c),o.setAttribute("height",f),o.setAttribute("stroke-dasharray",u.strokeDasharray||"none");var h=document.createElement("div");h.appendChild(o);var m=new Blob([h.innerHTML],{type:"image/svg+xml;charset=utf-8"}),v=a.createObjectURL(m),d=new Image;d.onload=function(){try{var r=document.createElement("canvas");r.width=c,r.height=f,r.getContext("2d").drawImage(d,r.width/2-d.width/2,r.height/2-d.height/2),e({width:c,height:f,canvas:r})}catch(e){t(e)}},d.onerror=function(e){t(e)},d.src=v})).catch((function(e){t(e)}))}))).then((function(e){var n=e.width,a=e.height,o=e.canvas;A[t]={id:t,image:o,src:o.toDataURL(),width:n,height:a},r(A[t])})).catch((function(){n(t)}));else{var c=L(e),f=c.width,h=c.height,m=c.canvas;A[t]={id:t,image:m,src:m.toDataURL(),width:f,height:h},r(A[t])}}))},U=function(e,t){return e?Object.keys(e).reduce((function(r,n){return p(p({},r),{},b({},n,S(e[n])?I.evaluateFunction(e[n],t):e[n]))}),{}):{}},W=!1,R=function(e,t){var n=(e||{}).rules,a=(void 0===n?[]:n).reduce((function(e,r){var n=((null==r?void 0:r.symbolizers)||[]).filter((function(e){var t=e.kind;return["Mark","Icon"].includes(t)}));if(!n.some((function(e){return Object.keys(e).some((function(t){var r;return!(null===(r=e[t])||void 0===r||!r.name)}))})))return[].concat(g(e),g(n));var a=t.features||[],o=void 0===r.filter?a:a.filter((function(e){return F(e,r.filter)}));return[].concat(g(e),g(n.reduce((function(e,t){return[].concat(g(e),g((o||[]).map((function(e){var r;return p(p({},U(t,e)),"msMarkerIcon"===(null==t||null===(r=t.image)||void 0===r?void 0:r.name)&&{image:t.image})}))))}),[])))}),[]),o=a.filter((function(e){return"Mark"===e.kind})),i=a.filter((function(e){return"Icon"===e.kind}));return(W?Promise.resolve():r.e(50957).then(r.bind(r,950957)).then((function(){return document.fonts.load("1rem FontAwesome").then((function(){return W=!0}))}))).then((function(){return new Promise((function(e){o.length>0||i.length>0?Promise.all([].concat(g(o.map(N)),g(i.map(E)))).then((function(t){e(t)})):e([])}))}))},q=function(e){var t=x(e);return A[t]||{}}}}]);