(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1157,9081],{99534:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(61365),a=r(69334);const o=(0,n.Z)(a.h_)},85428:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(67294),a=r.n(n),o=r(45697),l=r.n(o),c=["href","readOnly","children"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function i(e){var t=e.href,r=e.readOnly,n=e.children,o=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,c);return r?n:a().createElement("a",s({href:t},o),n)}i.propTypes={href:l().string,readOnly:l().bool.isRequired,children:l().any},i.defaultProps={href:"",readOnly:!1};const u=i},60330:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n.Z});var n=r(85428)},285:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(67294),a=r.n(n),o=r(45697),l=r.n(o),c=r(36693),s=r(5346),i=r(97842);function u(e){var t=e.options,r=e.actions,n=e.onAction,o=e.resource,l=e.buildHrefByTemplate;return a().createElement("div",{className:"gn-resource-action-buttons"},a().createElement(c.Z,{className:"gn-card-options",pullRight:!0},a().createElement(c.Z.Toggle,{id:"gn-card-options-".concat(o.pk),variant:"default",size:"sm",noCaret:!0},a().createElement(i.Z,{name:"ellipsis-v"})),a().createElement(c.Z.Menu,{className:"gn-card-dropdown"},t.map((function(e){return"button"===e.type&&r[e.action]?a().createElement(c.Z.Item,{key:e.action,onClick:function(){return n(r[e.action],[o])}},a().createElement(i.Z,{name:e.icon})," ",a().createElement(s.Z,{msgId:e.labelId})):a().createElement(c.Z.Item,{key:e.href,href:l(o,e.href)},a().createElement(i.Z,{name:e.icon})," ",a().createElement(s.Z,{msgId:e.labelId}))})))))}u.propTypes={options:l().array,actions:l().object,onAction:l().func,resource:l().object,buildHrefByTemplate:l().func},u.defaultProps={options:[],actions:{},resource:{},onAction:function(){},buildHrefByTemplate:function(){}};const d=u},28376:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n.Z});var n=r(285)},34065:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(67294),a=r.n(n),o=r(45697),l=r.n(o),c=r(77593),s=r(60330),i=["resource","readOnly","formatHref"];function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function d(e){var t,r,n=e.resource,o=e.readOnly,l=e.formatHref,d=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,i);return a().createElement("p",u({className:"card-text gn-card-user"},d),(null===(t=n.owner)||void 0===t?void 0:t.avatar)&&a().createElement("img",{src:n.owner.avatar,alt:(0,c.vW)(n.owner),className:"gn-card-author-image"}),a().createElement(s.Z,{readOnly:o,href:l({query:{"filter{owner.username.in}":null===(r=n.owner)||void 0===r?void 0:r.username}})},n.owner&&(0,c.vW)(n.owner)))}d.propTypes={resource:l().object,readOnly:l().bool,formatHref:l().func,props:l().any},d.defaultProps={resource:{},readOnly:!1,formatHref:function(){return"#"}};const m=d},39399:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(67294),a=r.n(n),o=r(57588);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}o.Dropdown.Item=o.MenuItem,o.Dropdown.Divider=function(e){return a().createElement(o.MenuItem,l({},e,{divider:!0}))};const c=o.Dropdown},36693:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n.Z});var n=r(39399)},69582:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(67294),a=r.n(n),o=r(5346),l=r(97842),c=r(93473),s=r(51605),i=r(35721),u=r(89239),d=r(60330),m=r(34065),p=r(28376);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=(0,n.forwardRef)((function(e,t){var r,g,v=e.data,y=e.active,E=e.options,b=e.formatHref,h=e.getTypesInfo,O=e.layoutCardsStyle,Z=e.buildHrefByTemplate,w=e.readOnly,N=e.actions,j=e.onAction,k=e.className,C=e.loading,I=e.featured,P=e.onClick,T=v,S=h(),_=(S[T.subtype]||S[T.resource_type]||{}).icon,R=T&&(S[T.subtype]||S[T.resource_type])||{},A=R.formatDetailUrl,D=void 0===A?function(e){return null==e?void 0:e.detail_url}:A,x=R.canPreviewed,H=(null==T?void 0:T.pk)&&D(T),z=(null==T?void 0:T.pk)&&x&&x(T),U=(null==T?void 0:T.pk)&&(0,i.J7)(T),B=(r=(0,n.useState)(!1),g=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}}(r,g)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(r,g)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),L=B[0],M=B[1],q="list"===O?"card-img-left":"card-img-top";return a().createElement("div",{ref:t,onClick:function(){P(v)},className:"gn-resource-card".concat(y?" active":"").concat(w?" read-only":""," gn-card-type-").concat(O," ").concat("list"===O?"rounded-0":"").concat(k?" ".concat(k):"")},!w&&a().createElement("a",{className:"gn-resource-card-link",href:b({pathname:"/detail/".concat(T.resource_type,"/").concat(T.pk)})}),!w&&E&&E.length>0&&"grid"===O&&a().createElement(p.Z,{buildHrefByTemplate:Z,actions:N,resource:T,options:E,readOnly:w,onAction:j}),a().createElement("div",{className:"card-resource-".concat(O)},L?a().createElement("div",{className:"".concat(q," card-img-placeholder")}):a().createElement("img",{className:q,src:T.thumbnail_url,onError:function(){return M(!0)}}),a().createElement("div",{className:"gn-resource-card-body-wrapper"},a().createElement("div",{className:"card-body"},a().createElement("div",{className:"card-title"},_&&!C&&a().createElement(a().Fragment,null,a().createElement(d.Z,{readOnly:w,href:b({query:{"filter{resource_type.in}":T.resource_type}})},a().createElement(l.Z,{name:_}))),C&&a().createElement(s.Z,null),a().createElement(d.Z,{className:I?"gn-featured-card-title":"gn-card-title",readOnly:w,href:b({pathname:"/detail/".concat(T.resource_type,"/").concat(T.pk)})},T.title)),a().createElement(u.Z,{resource:T}),a().createElement("p",{className:"card-text gn-card-description"},T.raw_abstract?T.raw_abstract:"..."),!w&&E&&E.length>0&&"list"===O&&a().createElement(p.Z,{buildHrefByTemplate:Z,actions:N,resource:T,options:E,readOnly:w,onAction:j})),a().createElement("div",{className:"gn-footer-wrapper"},a().createElement("div",{className:"gn-card-footer",style:{padding:E&&0===E.length?"0 0.25rem 0 0.5rem":"0 0.5rem"}},a().createElement(m.Z,{resource:T,readOnly:w,formatHref:b}),a().createElement("div",{className:"gn-card-actions"},!w&&(H||U)&&a().createElement("div",{className:"".concat(E&&0===E.length?"gn-card-view-editor-right":"gn-card-view-editor")},a().createElement(c.Z,{variant:"primary",href:z?H:U,rel:"noopener noreferrer"},a().createElement(o.Z,{msgId:"gnhome.view"})))))))))}));g.defaultProps={links:[],theme:"light",getTypesInfo:i.NN,formatHref:function(){return"#"},featured:!1,onClick:function(){}};const v=g},57914:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n.Z});var n=r(69582)},99469:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(67294),a=r.n(n),o=r(5346),l=r(45697),c=r.n(l),s=r(41609),i=r.n(s),u=r(35721),d=function(e){var t=e.resource,r=void 0===t?{}:t,n=(0,u.fu)(r),l=n.isApproved,c=n.isPublished,s=n.isProcessing,d=n.isCopying,m=n.isDeleting,p=n.isDeleted;return i()(r)?null:a().createElement("p",null,!s&&!l&&a().createElement("span",{className:"gn-resource-status gn-resource-status-warning"},a().createElement(o.Z,{msgId:"gnviewer.underApproval"})),!s&&!c&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(o.Z,{msgId:"gnviewer.unpublish"})),m&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(o.Z,{msgId:"gnviewer.deleting"})),p&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(o.Z,{msgId:"gnviewer.deleted"})),d&&a().createElement("span",{className:"gn-resource-status gn-resource-status-primary"},a().createElement(o.Z,{msgId:"gnviewer.cloning"})))};d.propTypes={isApproved:c().bool,isPublished:c().bool},d.defaultProps={isApproved:!0,isPublished:!0};const m=d},89239:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n.Z});var n=r(99469)},28261:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(67294),a=r.n(n),o=r(45697),l=r.n(o),c=["id","className","style","children"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function i(e){var t=e.id,r=e.className,n=e.style,o=e.children,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,c),i=r?" "+r:"";return a().createElement(a().Fragment,null,a().createElement("div",s({},l,{id:t,className:"gn-spinner".concat(i),style:n}),a().createElement("div",null)),o)}i.propTypes={id:l().string,className:l().string,style:l().object},i.defaultProps={};const u=i},51605:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n.Z});var n=r(28261)},60466:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var n=r(67294),a=r.n(n),o=r(22843),l=r(33664),c=r(22222),s=r(5346),i=r(93473),u=r(94745),d=r(99534),m=r(82904),p=r(3828),f=r(43892),g=r(57914),v=r(12530),y=r(32425),E=(0,l.connect)((0,c.P1)([function(e){var t,r;return null==e||null===(t=e.controls)||void 0===t||null===(r=t[v.zj.DELETE_RESOURCE])||void 0===r?void 0:r.value},function(e){var t,r;return null==e||null===(t=e.controls)||void 0===t||null===(r=t[v.zj.DELETE_RESOURCE])||void 0===r?void 0:r.loading}],(function(e,t){return{resources:e,enabled:!!e,loading:t}})),{onClose:m.Xg.bind(null,v.zj.DELETE_RESOURCE,"value",void 0),onDelete:f.EU.bind(null,v.zj.DELETE_RESOURCE)})((function(e){var t=e.enabled,r=e.resources,n=void 0===r?[]:r,o=e.onClose,l=void 0===o?function(){}:o,c=e.onDelete,i=void 0===c?function(){}:c,m=e.redirectTo,p=void 0===m?"/":m,f=e.loading;return a().createElement(d.Z,null,a().createElement(u.Z,{title:a().createElement(s.Z,{msgId:"gnviewer.deleteResourceTitle",msgParams:{count:n.length}}),show:t,fitContent:!0,clickOutEnabled:!1,modalClassName:"gn-simple-dialog",buttons:f?[]:[{text:a().createElement(s.Z,{msgId:"gnviewer.deleteResourceNo",msgParams:{count:n.length}}),onClick:function(){return l()}},{text:a().createElement(s.Z,{msgId:"gnviewer.deleteResourceYes",msgParams:{count:n.length}}),bsStyle:"danger",onClick:function(){return i(n,p)}}],onClose:f?null:function(){return l()}},a().createElement("ul",{className:"gn-card-grid",style:{listStyleType:"none",padding:"0.5rem",margin:0}},n.map((function(e,t){return a().createElement("li",{style:{padding:"0.25rem 0"},key:e.pk+"-"+t},a().createElement(g.Z,{data:e,layoutCardsStyle:"list",readOnly:!0}))}))),f&&a().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},a().createElement(y.Z,{size:70}))))})),b=(0,l.connect)((0,c.P1)([p.yK],(function(e){return{resource:e}})),{onClick:m.Xg.bind(null,v.zj.DELETE_RESOURCE,"value")})((function(e){var t=e.onClick,r=e.size,n=e.resource;return a().createElement(i.Z,{variant:"danger",size:r,onClick:function(){t([n])}},a().createElement(s.Z,{msgId:"gnhome.delete"}))}));const h=(0,o.rx)("DeleteResource",{component:E,containers:{ActionNavbar:{name:"DeleteResource",Component:b}},epics:{},reducers:{}})},19081:(e,t,r)=>{"use strict";e.exports=r(1174)}}]);