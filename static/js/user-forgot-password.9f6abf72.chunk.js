(this["webpackJsonpapp-test"]=this["webpackJsonpapp-test"]||[]).push([[6],{251:function(e,s,a){"use strict";a.r(s);var t=a(24),c=a(99),r=a(8),l=a(131),o=a(161),i=a(162),n=a(233),j=a(234),b=a(128),d=a(92),m=a(133),u=a(36),x=a(96),O=a(93),h=a(2),p=a(117);const f=e=>{let s;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(s="Invalid email address"):s="Please enter your email address",s};s.default=Object(u.b)((({authUser:e})=>({forgotUserMail:e.forgotUserMail,loading:e.loading,error:e.error})),{forgotPasswordAction:h.hb})((({history:e,forgotUserMail:s,loading:a,error:u,forgotPasswordAction:h})=>{const N=Object(r.useState)("demo@coloredstrategies.com"),g=Object(c.a)(N,1)[0];Object(r.useEffect)((()=>{u?p.b.warning(u,"Forgot Password Error",3e3,null,null,""):a||"success"!==s||p.b.success("Please check your email.","Forgot Password Success",3e3,null,null,"")}),[u,s,a]);const w={email:g};return Object(t.jsx)(l.a,{className:"h-100",children:Object(t.jsx)(x.a,{xxs:"12",md:"10",className:"mx-auto my-auto",children:Object(t.jsxs)(o.a,{className:"auth-card",children:[Object(t.jsxs)("div",{className:"position-relative image-side ",children:[Object(t.jsx)("p",{className:"text-white h2",children:"MAGIC IS IN THE DETAILS"}),Object(t.jsxs)("p",{className:"white mb-0",children:["Please use your e-mail to reset your password. ",Object(t.jsx)("br",{}),"If you are not a member, please"," ",Object(t.jsx)(d.b,{to:"/user/register",className:"white",children:"register"}),"."]})]}),Object(t.jsxs)("div",{className:"form-side",children:[Object(t.jsx)(d.b,{to:"/",className:"white",children:Object(t.jsx)("span",{className:"logo-single"})}),Object(t.jsx)(i.a,{className:"mb-4",children:Object(t.jsx)(O.a,{id:"user.forgot-password"})}),Object(t.jsx)(m.c,{initialValues:w,onSubmit:s=>{a||""!==s.email&&h(s,e)},children:({errors:e,touched:s})=>Object(t.jsxs)(m.b,{className:"av-tooltip tooltip-label-bottom",children:[Object(t.jsxs)(n.a,{className:"form-group has-float-label",children:[Object(t.jsx)(j.a,{children:Object(t.jsx)(O.a,{id:"user.email"})}),Object(t.jsx)(m.a,{className:"form-control",name:"email",validate:f}),e.email&&s.email&&Object(t.jsx)("div",{className:"invalid-feedback d-block",children:e.email})]}),Object(t.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(t.jsx)(d.b,{to:"/user/forgot-password",children:Object(t.jsx)(O.a,{id:"user.forgot-password-question"})}),Object(t.jsxs)(b.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(a?"show-spinner":""),size:"lg",children:[Object(t.jsxs)("span",{className:"spinner d-inline-block",children:[Object(t.jsx)("span",{className:"bounce1"}),Object(t.jsx)("span",{className:"bounce2"}),Object(t.jsx)("span",{className:"bounce3"})]}),Object(t.jsx)("span",{className:"label",children:Object(t.jsx)(O.a,{id:"user.reset-password-button"})})]})]})]})})]})]})})})}))},93:function(e,s,a){"use strict";var t=a(1),c=a(24),r=(a(8),a(124)),l=a(108);s.a=Object(l.c)((e=>Object(c.jsx)(r.a,Object(t.a)({},e))),{withRef:!1})},96:function(e,s,a){"use strict";a.d(s,"a",(function(){return l})),a.d(s,"b",(function(){return o}));var t=a(1),c=a(24),r=(a(8),a(130));const l=e=>Object(c.jsx)(r.a,Object(t.a)(Object(t.a)({},e),{},{widths:["xxs","xs","sm","md","lg","xl","xxl"]})),o=({className:e})=>Object(c.jsx)("div",{className:"separator ".concat(e)})}}]);