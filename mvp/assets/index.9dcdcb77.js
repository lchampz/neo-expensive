import{u as d,r as t}from"./vendor.7282221c.js";import{F as c}from"./index.esm.4ec74241.js";import{i as f,I as p}from"./index.8a0a8cf9.js";import{B as h}from"./index.e0d7f962.js";import{j as i,a as o}from"./index.48c8c336.js";function S(){const s=d(),r=t.exports.useRef(null),[n,l]=t.exports.useState(!1),u=t.exports.useCallback(({email:e})=>{var a;if(!JSON.parse(localStorage.getItem("@neo:user")||"[]").find(m=>m.email===e)){(a=r.current)==null||a.setFieldError("email","Could not find a user with that e-mail.");return}s(`/password/redeem?email=${e}`)},[s]);return i("div",{children:[o("h1",{children:"forgot your password?"}),i(f,{ref:r,onSubmit:u,children:[o(p,{name:"email",label:"E-mail",placeholder:"Enter your e-mail",icon:o(c,{}),onChange:e=>l(!!e.target.value),onFocus:()=>{var e;return(e=r.current)==null?void 0:e.setFieldError("email","")},onBlur:()=>{var e;return(e=r.current)==null?void 0:e.setFieldError("email","")}}),o(h,{disabled:!n,type:"submit",children:"Send confirmation"})]})]})}export{S as default};