(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[22091],{322091:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var i=n(124852),a=n.n(i),o=n(414293),l=n.n(o),s=n(480681),d=n(472986),r=n.n(d),c=n(80717),u=n(805346),m=n(694745),v=n(399534);const p=function(e){var t=e.className,n=e.textContainerClassName,i=e.loading,o=void 0!==i&&i,s=e.detailsText;return a().createElement("div",{className:t},o?a().createElement(r(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}):l()(s)?a().createElement("div",{className:n},a().createElement(u.Z,{msgId:"maps.feedback.noDetailsAvailable"})):a().createElement("div",{className:n,dangerouslySetInnerHTML:{__html:s||""}}))},f=function(e){var t=e.children,n=e.loading,i=void 0!==n&&n,o=e.show,l=void 0!==o&&o,s=e.readOnly,d=void 0!==s&&s,r=e.title,c=e.detailsText,f=e.bodyClassName,g=e.onClose,h=void 0===g?function(){}:g,w=e.onSave,b=void 0===w?function(){}:w,E=a().createElement(p,{className:"ms-details-preview-container",textContainerClassName:"ms-details-preview",loading:i,detailsText:c});return a().createElement(v.Z,null,d?a().createElement(m.Z,{size:"lg",bodyClassName:"details-viewer-modal",showFullscreen:!0,fitContent:!0,onClose:function(){return h()},title:a().createElement(u.Z,{msgId:"map.details.title",msgParams:{name:r}}),show:l},E):a().createElement(m.Z,{show:l,title:a().createElement(u.Z,{msgId:"map.details.title",msgParams:{name:r}}),bodyClassName:f,size:"lg",clickOutEnabled:!1,showFullscreen:!0,fullscreenType:"full",onClose:function(){return h()},buttons:[{text:a().createElement(u.Z,{msgId:"map.details.back"}),onClick:function(){return h()}},{text:a().createElement(u.Z,{msgId:"map.details.save"}),onClick:function(){return b(c)}}]},t))};var g=n(406557),h=n.n(g),w=n(835420);const b={component:function(e){var t=e.modules,n=void 0===t?{toolbar:[[{size:["small",!1,"large","huge"]},"bold","italic","underline","blockquote"],[{list:"bullet"},{align:[]}],[{color:[]},{background:[]},"clean"],["image","link"]]}:t,i=e.editorState,o=e.onUpdateEditorState,l=void 0===o?function(){}:o;return a().createElement("div",{id:"ms-details-editor"},a().createElement(w.Z,{bounds:"#ms-details-editor",value:i||"<p><br></p>",onChange:function(e){l(e)},modules:n}))},detailsTextToEditorState:h(),editorStateToDetailsText:h(),containerBodyClass:"ms-details-quill-editor"};var E=n(867076),S=n(260808),C=n(629859);const k={QuillEditor:b,DraftJSEditor:{component:(0,E.compose)((0,E.withProps)((function(e){var t=e.editorState,n=e.onUpdateEditorState,i=void 0===n?function(){}:n;return{onEditorStateChange:function(e){i(e)},editorState:t,toolbar:{options:["fontFamily","blockType","inline","textAlign","colorPicker","list","link","remove","image"],image:{className:void 0,component:void 0,popupClassName:void 0,urlEnabled:!0,uploadEnabled:!0,alignmentEnabled:!0,uploadCallback:function(e){return new Promise((function(t,n){var i=new FileReader;i.addEventListener("load",(function(){t({data:{link:i.result}})})),e?i.readAsDataURL(e):n()}))},previewImage:!0,inputAccept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",alt:{present:!1,mandatory:!1},defaultSize:{height:"auto",width:"auto"}}}}})),S.Sq)(),detailsTextToEditorState:C.n0,editorStateToDetailsText:C.sc,containerBodyClass:"ms-details-draftjs-editor"}};function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},T.apply(null,arguments)}var y=(0,E.compose)((0,E.withState)("showPreview","setShowPreview",!1),(0,E.withHandlers)({onShowPreview:function(e){var t=e.setShowPreview,n=void 0===t?function(){}:t;return function(){n(!0)}},onHidePreview:function(e){var t=e.setShowPreview,n=void 0===t?function(){}:t;return function(){n(!1)}}}))((function(e){var t=e.loading,n=void 0!==t&&t,i=e.showPreview,o=void 0!==i&&i,d=e.editDetailsDisabled,m=e.detailsText,v=e.settings,p=void 0===v?{}:v,f=e.canUndo,g=void 0!==f&&f,h=e.onShowPreview,w=void 0===h?function(){}:h,b=e.onHidePreview,E=void 0===b?function(){}:b,S=e.onUndo,C=void 0===S?function(){}:S,k=e.onShowDetailsSheet,T=void 0===k?function(){}:k,y=e.onUpdate,N=void 0===y?function(){}:y,D=e.onUpdateResource,I=void 0===D?function(){}:D,x=e.onDelete,A=void 0===x?function(){}:x;return a().createElement("div",{className:"ms-section"+(o?" ms-transition":"")},a().createElement("div",{className:"mapstore-block-width"},a().createElement(s.X2,null,a().createElement(s.JX,{xs:6},a().createElement("div",{className:"m-label"},!n&&l()(m)?a().createElement(u.Z,{msgId:"map.details.add"}):a().createElement(u.Z,{msgId:"map.details.rowTitle"}))),a().createElement(s.JX,{xs:6},a().createElement("div",{className:"ms-details-sheet"},a().createElement("div",{className:"pull-right"},n?a().createElement(r(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}):null,!n&&a().createElement(c.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:o?"eye-open":"eye-close",visible:!!m,onClick:function(){return o?E():w()},disabled:n,tooltipId:o?"map.details.hidePreview":"map.details.showPreview"},{glyph:"undo",tooltipId:"map.details.undo",visible:g,onClick:function(){return C()},disabled:n},{glyph:"pencil-add",tooltipId:"map.details.add",visible:!m,onClick:function(){T(),N()},disabled:n},{glyph:"pencil",tooltipId:"map.details.edit",visible:!!m&&!d,onClick:function(){T(),N(m)},disabled:n},{glyph:"new-window",tooltipId:"map.details.showAsModal",visible:!!m,bsStyle:p.showAsModal?"success":"default",onClick:function(){return I("attributes.detailsSettings.showAsModal",!p.showAsModal)}},{glyph:"pushpin",tooltipId:"map.details.showAtStartup",visible:!!m,bsStyle:p.showAtStartup?"success":"default",onClick:function(){return I("attributes.detailsSettings.showAtStartup",!p.showAtStartup)}},{glyph:"trash",tooltipId:"map.details.delete",visible:!!m,onClick:function(){return A()},disabled:n}]})))))),m&&a().createElement("div",{className:"ms-details-preview-container"},""!==m?a().createElement("div",{className:"ms-details-preview",dangerouslySetInnerHTML:{__html:m}}):a().createElement("div",{className:"ms-details-preview"}," ",a().createElement(u.Z,{msgId:"maps.feedback.noDetailsAvailable"}))))}));const N=function(e){var t,n,i=e.loading,o=e.resource,s=void 0===o?{}:o,d=e.editor,r=void 0===d?"DraftJSEditor":d,c=e.editorProps,u=void 0===c?{}:c,m=e.editorState,v=e.savedDetailsText,p=e.detailsBackup,g=e.showDetailsSheet,h=e.setEditorState,w=void 0===h?function(){}:h,b=e.setDetailsBackup,E=void 0===b?function(){}:b,S=e.onUpdateResource,C=void 0===S?function(){}:S,N=e.onUpdateLinkedResource,D=void 0===N?function(){}:N,I=e.onShowDetailsSheet,x=void 0===I?function(){}:I,A=e.onHideDetailsSheet,P=void 0===A?function(){}:A,Z=k[r],U=Z.component,L=Z.editorStateToDetailsText,_=Z.detailsTextToEditorState,F=Z.containerBodyClass;return a().createElement(a().Fragment,null,a().createElement(y,{loading:i||s.saving,detailsText:v,detailsBackup:p,editDetailsDisabled:!l()(s.canEdit)&&!s.canEdit,settings:null===(t=s.attributes)||void 0===t?void 0:t.detailsSettings,canUndo:!!p,onUndo:function(){D("details",p,"DETAILS"),E()},onUpdate:function(e){return w(_(e))},onUpdateResource:C,onShowDetailsSheet:x,onDelete:function(){E(v),D("details","NODATA","DETAILS"),C("attributes.detailsSettings",{})}}),a().createElement(f,{loading:i,show:g,title:null===(n=s.metadata)||void 0===n?void 0:n.name,detailsText:m,bodyClassName:F,onClose:function(){P()},onSave:function(e){var t=L(e);P(),E(),t&&"<p><br></p>"!==t||(t=v),D("details",t||"NODATA","DETAILS")}},a().createElement(U,T({},u,{editorState:m,onUpdateEditorState:w}))))}},835420:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(124852);const a=(0,n(218291).Z)()((0,i.lazy)((function(){return Promise.all([n.e(72555),n.e(71167),n.e(11915)]).then(n.bind(n,811915))})))}}]);