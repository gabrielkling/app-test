(this["webpackJsonpapp-test"]=this["webpackJsonpapp-test"]||[]).push([[12],{124:function(e,s,t){"use strict";var a=t(101),c=t(8),o=t(108),r=t(104),n=t(106),i=t.n(n).a||n,l=function(e){function s(){return null!==e&&e.apply(this,arguments)||this}return Object(a.b)(s,e),s.prototype.shouldComponentUpdate=function(e){var s=this.props,t=s.values,c=Object(a.c)(s,["values"]),o=e.values,r=Object(a.c)(e,["values"]);return!i(o,t)||!i(c,r)},s.prototype.render=function(){var e=this;return c.createElement(o.a.Consumer,null,(function(s){Object(r.c)(s);var t=s.formatMessage,o=s.textComponent,n=void 0===o?c.Fragment:o,i=e.props,l=i.id,d=i.description,b=i.defaultMessage,m=i.values,u=i.children,j=i.tagName,f=void 0===j?n:j,h=t({id:l,description:d,defaultMessage:b},m);return Array.isArray(h)||(h=[h]),"function"===typeof u?u(h):f?c.createElement.apply(c,Object(a.d)([f,null],h)):h}))},s.displayName="FormattedMessage",s}(c.Component);s.a=l},130:function(e,s,t){"use strict";var a=t(14),c=t(19),o=t(8),r=t.n(o),n=t(43),i=t.n(n),l=t(88),d=t.n(l),b=t(89),m=i.a.oneOfType([i.a.number,i.a.string]),u=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:m,offset:m})]),j={tag:b.l,xs:u,sm:u,md:u,lg:u,xl:u,className:i.a.string,cssModule:i.a.object,widths:i.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,s,t){return!0===t||""===t?e?"col":"col-"+s:"auto"===t?e?"col-auto":"col-"+s+"-auto":e?"col-"+t:"col-"+s+"-"+t},p=function(e){var s=e.className,t=e.cssModule,o=e.widths,n=e.tag,i=Object(c.a)(e,["className","cssModule","widths","tag"]),l=[];o.forEach((function(s,a){var c=e[s];if(delete i[s],c||""===c){var o=!a;if(Object(b.g)(c)){var r,n=o?"-":"-"+s+"-",m=h(o,s,c.size);l.push(Object(b.i)(d()(((r={})[m]=c.size||""===c.size,r["order"+n+c.order]=c.order||0===c.order,r["offset"+n+c.offset]=c.offset||0===c.offset,r)),t))}else{var u=h(o,s,c);l.push(u)}}})),l.length||l.push("col");var m=Object(b.i)(d()(s,l),t);return r.a.createElement(n,Object(a.a)({},i,{className:m}))};p.propTypes=j,p.defaultProps=f,s.a=p},131:function(e,s,t){"use strict";var a=t(14),c=t(19),o=t(8),r=t.n(o),n=t(43),i=t.n(n),l=t(88),d=t.n(l),b=t(89),m=i.a.oneOfType([i.a.number,i.a.string]),u={tag:b.l,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},j={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var s=e.className,t=e.cssModule,o=e.noGutters,n=e.tag,i=e.form,l=e.widths,m=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),u=[];l.forEach((function(s,t){var a=e[s];if(delete m[s],a){var c=!t;u.push(c?"row-cols-"+a:"row-cols-"+s+"-"+a)}}));var j=Object(b.i)(d()(s,o?"no-gutters":null,i?"form-row":"row",u),t);return r.a.createElement(n,Object(a.a)({},m,{className:j}))};f.propTypes=u,f.defaultProps=j,s.a=f},161:function(e,s,t){"use strict";var a=t(14),c=t(19),o=t(8),r=t.n(o),n=t(43),i=t.n(n),l=t(88),d=t.n(l),b=t(89),m={tag:b.l,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},u=function(e){var s=e.className,t=e.cssModule,o=e.color,n=e.body,i=e.inverse,l=e.outline,m=e.tag,u=e.innerRef,j=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(b.i)(d()(s,"card",!!i&&"text-white",!!n&&"card-body",!!o&&(l?"border":"bg")+"-"+o),t);return r.a.createElement(m,Object(a.a)({},j,{className:f,ref:u}))};u.propTypes=m,u.defaultProps={tag:"div"},s.a=u},162:function(e,s,t){"use strict";var a=t(14),c=t(19),o=t(8),r=t.n(o),n=t(43),i=t.n(n),l=t(88),d=t.n(l),b=t(89),m={tag:b.l,className:i.a.string,cssModule:i.a.object},u=function(e){var s=e.className,t=e.cssModule,o=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),i=Object(b.i)(d()(s,"card-title"),t);return r.a.createElement(o,Object(a.a)({},n,{className:i}))};u.propTypes=m,u.defaultProps={tag:"div"},s.a=u},245:function(e,s,t){"use strict";t.r(s);var a=t(24),c=t(8),o=t(131),r=t(161),n=t(162),i=t(92),l=t(96),d=t(93),b=t(10);s.default=()=>(Object(c.useEffect)((()=>(document.body.classList.add("background"),document.body.classList.add("no-footer"),()=>{document.body.classList.remove("background"),document.body.classList.remove("no-footer")})),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"fixed-background"}),Object(a.jsx)("main",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(o.a,{className:"h-100",children:Object(a.jsx)(l.a,{xxs:"12",md:"10",className:"mx-auto my-auto",children:Object(a.jsxs)(r.a,{className:"auth-card",children:[Object(a.jsxs)("div",{className:"position-relative image-side ",children:[Object(a.jsx)("p",{className:"text-white h2",children:"MAGIC IS IN THE DETAILS"}),Object(a.jsx)("p",{className:"white mb-0",children:"Yes, it is indeed!"})]}),Object(a.jsxs)("div",{className:"form-side",children:[Object(a.jsx)(i.b,{to:"/",className:"white",children:Object(a.jsx)("span",{className:"logo-single"})}),Object(a.jsx)(n.a,{className:"mb-4",children:Object(a.jsx)(d.a,{id:"pages.error-title"})}),Object(a.jsx)("p",{className:"mb-0 text-muted text-small mb-0",children:Object(a.jsx)(d.a,{id:"pages.error-code"})}),Object(a.jsx)("p",{className:"display-1 font-weight-bold mb-5",children:"404"}),Object(a.jsx)(i.b,{to:b.b,className:"btn btn-primary btn-shadow btn-lg",children:Object(a.jsx)(d.a,{id:"pages.go-back-home"})})]})]})})})})})]}))},246:function(e,s,t){"use strict";t.r(s);var a=t(24),c=t(8),o=t(131),r=t(161),n=t(162),i=t(92),l=t(96),d=t(93),b=t(10);s.default=()=>(Object(c.useEffect)((()=>(document.body.classList.add("background"),document.body.classList.add("no-footer"),()=>{document.body.classList.remove("background"),document.body.classList.remove("no-footer")})),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"fixed-background"}),Object(a.jsx)("main",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(o.a,{className:"h-100",children:Object(a.jsx)(l.a,{xxs:"12",md:"10",className:"mx-auto my-auto",children:Object(a.jsxs)(r.a,{className:"auth-card",children:[Object(a.jsxs)("div",{className:"position-relative image-side ",children:[Object(a.jsx)("p",{className:"text-white h2",children:"MAGIC IS IN THE DETAILS"}),Object(a.jsx)("p",{className:"white mb-0",children:"Yes, it is indeed!"})]}),Object(a.jsxs)("div",{className:"form-side",children:[Object(a.jsx)(i.b,{to:"/",className:"white",children:Object(a.jsx)("span",{className:"logo-single"})}),Object(a.jsx)(n.a,{className:"mb-4",children:Object(a.jsx)(d.a,{id:"unauthorized.title"})}),Object(a.jsx)("p",{className:"mb-0 text-muted text-small mb-0",children:Object(a.jsx)(d.a,{id:"unauthorized.detail"})}),Object(a.jsx)("p",{className:"display-1 font-weight-bold mb-5",children:"503"}),Object(a.jsx)(i.b,{to:b.b,className:"btn btn-primary btn-shadow btn-lg",children:Object(a.jsx)(d.a,{id:"pages.go-back-home"})})]})]})})})})})]}))},93:function(e,s,t){"use strict";var a=t(1),c=t(24),o=(t(8),t(124)),r=t(108);s.a=Object(r.c)((e=>Object(c.jsx)(o.a,Object(a.a)({},e))),{withRef:!1})},96:function(e,s,t){"use strict";t.d(s,"a",(function(){return r})),t.d(s,"b",(function(){return n}));var a=t(1),c=t(24),o=(t(8),t(130));const r=e=>Object(c.jsx)(o.a,Object(a.a)(Object(a.a)({},e),{},{widths:["xxs","xs","sm","md","lg","xl","xxl"]})),n=({className:e})=>Object(c.jsx)("div",{className:"separator ".concat(e)})}}]);