"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[77236],{747812:(e,n,t)=>{t.r(n),t.d(n,{TextInput:()=>m,default:()=>g});var r=t(124852),a=t.n(r),o=t(45697),l=t.n(o),c=t(171703),s=t(322843),i=t(86638),u=t(986069),p=t(271418),d=t(227361),v=t.n(d);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(null,arguments)}var m=function(e,n){var t=e.spec,o=e.property,l=e.label,c=e.placeholder,s=e.actions,u=e.onChangeParameter,d=e.path,m=void 0===d?"params.":d,g=e.type,h=void 0===g?"text":g,b=e.additionalProperty,y=void 0===b||b,P=e.disabled,x=m+o;return(0,r.useEffect)((function(){var e;y&&s.addParameter(o,null!==(e=v()(t,x))&&void 0!==e?e:"")}),[]),a().createElement(p.cw,null,l&&a().createElement(p.J$,null,(0,i.S$)(n.messages,l))||null,a().createElement(p.NI,f({},function(e){return"textarea"!==e?{type:e}:{componentClass:e}}(h),{value:v()(t,x),placeholder:c&&(0,i.S$)(n.messages,c),onChange:function(e){return u(x,e.target.value)},disabled:P})))};m.contextTypes={messages:l().object};const g=(0,s.rx)("PrintTextInput",{component:(0,c.connect)((function(e){var n;return{spec:(null==e||null===(n=e.print)||void 0===n?void 0:n.spec)||{}}}),{onChangeParameter:u.d$})(m),containers:{Print:{priority:1}}})}}]);