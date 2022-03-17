var ne=Object.defineProperty,le=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var q=(u,d,s)=>d in u?ne(u,d,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[d]=s,V=(u,d)=>{for(var s in d||(d={}))oe.call(d,s)&&q(u,s,d[s]);if(T)for(var s of T(d))ce.call(d,s)&&q(u,s,d[s]);return u},X=(u,d)=>le(u,de(d));import{r as o,u as ae,E as ie,h as se}from"./vendor.7282221c.js";import{i as y,I as x}from"./index.8a0a8cf9.js";import{M as he}from"./index.dbdc8cbc.js";import{P as ue,j as n,a as r,A as pe}from"./index.48c8c336.js";import{B as m}from"./index.e0d7f962.js";function ke(){var O,$,w;const u=o.exports.useRef(null),d=o.exports.useRef(null),s=o.exports.useRef(null),g=o.exports.useRef(null),F=ae(),t=ie(pe,e=>e.user),{clearCart:J,addAddress:P,addProductToCart:Q,removeOneProductQuantity:z,removeProductFromCart:G,removeAddress:R,addCard:B,removeCard:I,createOrder:M}=se(ue),[j,p]=o.exports.useState(!1),[v,H]=o.exports.useState(""),[k,K]=o.exports.useState(""),[h,D]=o.exports.useState(0),[C,N]=o.exports.useState([]);o.exports.useEffect(()=>{t||F("/")},[F,t]);const b=o.exports.useMemo(()=>{var c;const e=((c=t==null?void 0:t.cart)==null?void 0:c.map(({price:l,quantity:a})=>l*a).reduce((l,a)=>l+a,0))||0,i=C.map(({price:l})=>l).reduce((l,a)=>l+a,0);return Math.max(e-i,0)},[C,t==null?void 0:t.cart]),L=o.exports.useCallback(({coupon:e})=>{var a,E;const i=JSON.parse(localStorage.getItem("@neo:coupon")||"[]");if(!i.find(({title:f})=>e===f)){(a=s.current)==null||a.setFieldError("coupon","That coupon does't exist");return}if(C.find(({title:f})=>f===e)){(E=s.current)==null||E.setFieldError("coupon","That coupon is already applied");return}const l=i.find(({title:f})=>e===f);l&&N(f=>[...f,X(V({},l),{title:e})])},[C]),U=o.exports.useCallback(e=>{N(i=>i.filter(c=>c.id!==e))},[]),W=o.exports.useCallback(()=>{p(!1),D(e=>e+1)},[]),Y=o.exports.useCallback(()=>{p(!0),D(e=>e-1)},[]),Z=o.exports.useCallback(({cep:e,neighborhood:i,street:c})=>{var l,a,E,f;if((l=t==null?void 0:t.addresses)==null?void 0:l.find(S=>S.cep===e)){(a=d.current)==null||a.setFieldError("cep","An address with this CEP already exists.");return}if((E=t==null?void 0:t.addresses)==null?void 0:E.find(S=>S.street===c)){(f=d.current)==null||f.setFieldError("street","An address with this street already exists.");return}P({cep:e,neighborhood:i,street:c})},[P,t==null?void 0:t.addresses]),A=o.exports.useCallback(()=>{var e,i;if(p(!1),h===0){p(!0);return}if(h===1){if(!v){p(!1);return}if(v){p(!0);return}if(d.current){const{cep:c,street:l,neighborhood:a}=(e=d.current)==null?void 0:e.getData();if(!c||!l||!a){p(!1);return}}}if(h===2){if(!k){p(!1);return}if(k){p(!0);return}if(g.current){const{cvv:c,expiration:l,number:a}=(i=g.current)==null?void 0:i.getData();if(!c||!l||!a){p(!1);return}}}},[v,k,h]),_=o.exports.useCallback(e=>{R(e)},[R]),ee=o.exports.useCallback(({number:e,expiration:i,cvv:c})=>{B({expiration:i,cvv:c,number:e})},[B]),re=o.exports.useCallback(e=>{I(e)},[I]),te=o.exports.useCallback(()=>{M({selectedAddressId:v,selectedCardId:k,cart:t==null?void 0:t.cart,coupons:C,total:b}),F("/checkout/success")},[C,M,F,v,k,b,t==null?void 0:t.cart]);return n("div",{children:[n("header",{children:[h===0&&r("h1",{children:"carrinho"}),h===1&&r("h1",{children:"entrega"}),h===2&&r("h1",{children:"pagamento"})]}),n("main",{children:[h===0&&n("div",{children:[r("ul",{children:(O=t==null?void 0:t.cart)==null?void 0:O.map(({id:e,name:i,price:c,productId:l,quantity:a})=>n("li",{children:[n("div",{children:[i," - ",c,r(m,{onClick:()=>G(l),children:"X"})]}),r("div",{children:a}),n("div",{children:[r(m,{onClick:()=>Q(l),children:"+"}),r(m,{disabled:a===1,onClick:()=>z(l),children:"-"})]})]},e))}),r(m,{onClick:J,children:"Clean cart"})]}),h===1&&n("div",{children:[r(m,{onClick:()=>{var e;return(e=u.current)==null?void 0:e.handleOpenModal()},children:"Add a new address"}),r("fieldset",{children:r("ul",{children:($=t==null?void 0:t.addresses)==null?void 0:$.map(({id:e,cep:i,street:c})=>n("li",{children:[n("label",{htmlFor:e,children:[r("input",{name:"address",value:e,id:e,type:"radio",onFocus:l=>{H(l.target.value),p(!0)}}),i," - ",c]}),r("button",{onClick:()=>_(e),children:"remove"})]},e))})}),r(he,{ref:u,visible:!1,children:n(y,{ref:d,onSubmit:Z,children:[r(x,{onChange:A,required:!0,name:"cep",label:"Enter your CEP",placeholder:"Cep",onBlur:()=>{var e;return(e=d.current)==null?void 0:e.setFieldError("cep","")},onFocus:()=>{var e;return(e=d.current)==null?void 0:e.setFieldError("cep","")}}),r(x,{onChange:A,required:!0,name:"street",label:"Enter your street",placeholder:"Street",onBlur:()=>{var e;return(e=d.current)==null?void 0:e.setFieldError("street","")},onFocus:()=>{var e;return(e=d.current)==null?void 0:e.setFieldError("street","")}}),r(x,{onChange:A,required:!0,name:"neighborhood",label:"Enter your neighborhood",placeholder:"Neighborhood"}),r(x,{name:"complement",label:"Enter your complement",placeholder:"Complement"}),r(m,{type:"submit",children:"Add address"})]})})]}),h===2&&n("div",{children:[n("ul",{children:[r("li",{children:"cart\xE3o"}),r("li",{children:"pix"})]}),n("ul",{children:[r("li",{children:n(y,{ref:g,onSubmit:ee,children:[r(x,{name:"number",label:"Card number",placeholder:"0000.000.0"}),r(x,{name:"expiration",label:"Card expiration",placeholder:"12/12"}),r(x,{name:"cvv",label:"CVV",placeholder:"021"}),r(m,{type:"submit",children:"create card"})]})}),(w=t==null?void 0:t.cards)==null?void 0:w.map(({id:e,number:i,expiration:c,cvv:l})=>n("li",{children:[n("label",{htmlFor:e,children:[r("input",{id:e,name:"card",value:e,type:"radio",onFocus:a=>{K(a.target.value),p(!0)}}),c," - ",l]}),r("strong",{children:i}),r("button",{onClick:()=>re(e),children:"delete"})]},e))]})]})]}),n("aside",{children:[n(y,{ref:s,onSubmit:L,children:[r(x,{name:"coupon",label:"Enter a coupon",placeholder:"Enter any coupon",onFocus:()=>{var e;return(e=s.current)==null?void 0:e.setFieldError("coupon","")},onBlur:()=>{var e;return(e=s.current)==null?void 0:e.setFieldError("coupon","")}}),r(m,{variant:"3D",children:"Apply"})]}),r("div",{children:r("ul",{children:C==null?void 0:C.map(e=>r("li",{children:n("p",{style:{color:"green"},children:["coupons: ",e==null?void 0:e.title," - ",e.price,r(m,{onClick:()=>U(e.id),children:"X"})]})},e.id))})}),r("div",{children:n("h3",{children:["$",b-b*.1]})}),n("div",{children:[n("h3",{children:["$",b-b*.1]}),n("p",{children:["12x de $",((b-b*.1)/10).toFixed(2)]}),r("p",{children:"sem juros"})]}),n("div",{children:[n("h3",{children:["$",b]}),r("p",{children:"10% de desconto"})]}),h>0&&r("div",{children:r(m,{onClick:Y,children:"Back"})}),h===2&&r("div",{children:r(m,{disabled:!j,onClick:te,children:"submit"})}),r("div",{children:r(m,{disabled:h!==0&&!j||h===2,onClick:W,children:"Next"})})]})]})}export{ke as default};