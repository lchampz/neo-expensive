var d=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var p=(s,r)=>{var l={};for(var e in s)f.call(s,e)&&r.indexOf(e)<0&&(l[e]=s[e]);if(s!=null&&d)for(var e of d(s))r.indexOf(e)<0&&m.call(s,e)&&(l[e]=s[e]);return l};import{r as o}from"./vendor.e0ff885f.js";import{j as v,a as u}from"./index.dfd5fa78.js";const C=(M,e)=>{var a=M,{children:s,visible:r}=a,l=p(a,["children","visible"]);const[n,i]=o.exports.useState(r),t=o.exports.useCallback(b=>b,[]),x=o.exports.useCallback(()=>{i(!0)},[]),c=o.exports.useCallback(()=>{t(),i(!1)},[t]);return o.exports.useImperativeHandle(e,()=>({handleOpenModal:x,handleCloseModal:c,visible:n,onClose:t})),n?v("div",{children:[u("div",{children:s}),u("button",{onClick:c,children:"close modal"})]}):null};var w=o.exports.forwardRef(C);export{w as M};
