(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[685],{45094:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register/register",function(){return r(76118)}])},76118:function(e,s,r){"use strict";r.r(s);var a=r(85893),l=r(67294),n=r(65400),t=r.n(n),i=r(31059),d=r(97538),o=r(51024),u=r(64749),c=r(88206);r(33299);let{Option:h}=u.default,m={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},p={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},x=()=>{let[e,s]=(0,l.useState)(!1),[r]=d.Z.useForm(),n=(0,a.jsx)(d.Z.Item,{name:"prefix",noStyle:!0,children:(0,a.jsxs)(u.default,{style:{width:70},children:[(0,a.jsx)(h,{value:"880",children:"+880"}),(0,a.jsx)(h,{value:"880",children:"+880"})]})});return(0,a.jsxs)("div",{style:{justifyContent:"center"},children:[(0,a.jsx)("h1",{children:"SignIn"}),(0,a.jsxs)(d.Z,{...m,form:r,name:"register",onFinish:e=>{console.log("Received values of form: ",e)},initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"880"},style:{maxWidth:600},scrollToFirstError:!0,children:[(0,a.jsx)(d.Z.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:(0,a.jsx)(o.default,{})}),(0,a.jsx)(d.Z.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:(0,a.jsx)(o.default.Password,{})}),(0,a.jsx)(d.Z.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},e=>{let{getFieldValue:s}=e;return{validator:(e,r)=>r&&s("password")!==r?Promise.reject(Error("The new password that you entered do not match!")):Promise.resolve()}}],children:(0,a.jsx)(o.default.Password,{})}),(0,a.jsx)(d.Z.Item,{name:"nickname",label:"Nickname",tooltip:"What do you want others to call you?",rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}],children:(0,a.jsx)(o.default,{})}),(0,a.jsx)(d.Z.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}],children:(0,a.jsx)(o.default,{addonBefore:n,style:{width:"100%"}})}),(0,a.jsx)(d.Z.Item,{name:"gender",label:"Gender",rules:[{required:!0,message:"Please select gender!"}],children:(0,a.jsxs)(u.default,{placeholder:"select your gender",children:[(0,a.jsx)(h,{value:"male",children:"Male"}),(0,a.jsx)(h,{value:"female",children:"Female"}),(0,a.jsx)(h,{value:"other",children:"Other"})]})}),(0,a.jsx)(d.Z.Item,{name:"agreement",valuePropName:"checked",rules:[{validator:(e,s)=>s?Promise.resolve():Promise.reject(Error("Should accept agreement"))}],...p,children:(0,a.jsxs)(i.default,{checked:e,onChange:e=>s(e.target.checked),children:["I have read the ",(0,a.jsx)("a",{href:"",children:"agreement"})]})}),(0,a.jsxs)(d.Z.Item,{...p,children:[(0,a.jsx)(t(),{disabled:!e,type:"primary",htmlType:"submit",children:"Register"}),"Or ",(0,a.jsx)("a",{href:"/login/login",children:"please login now!"})]})]})]})};x.getLayout=function(e){return(0,a.jsx)(c.Z,{children:e})},s.default=x}},function(e){e.O(0,[661,373,258,509,749,538,206,774,888,179],function(){return e(e.s=45094)}),_N_E=e.O()}]);