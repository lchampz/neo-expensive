(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[569],{2326:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login/oauth/authorize",function(){return c(6605)}])},678:function(a,b,c){"use strict";c.d(b,{a:function(){return f}});var d=c(5774),e=c(1746);function f(){return{user:(0,e.Sz)(d.Vo,function(a){return a.user})}}},6605:function(a,b,c){"use strict";c.r(b);var d=c(4776),e=c.n(d),f=c(6753),g=c(5632),h=c(2139),i=c(1746),j=c(6893),k=c(678),l=c(4687);function m(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function n(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function o(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}})(a,b)||p(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function p(a,b){if(a){if("string"==typeof a)return m(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return m(a,b)}}b.default=function(){var a=(0,k.a)().user,b=(0,g.useRouter)().push,c=(0,h.useState)(null),d=c[0],m=c[1],p=(0,h.useState)(null),q=p[0],r=p[1],s=(0,i.Sz)(j.Q,function(a){return a.set}),t=(0,i.Sz)(j.Q,function(a){return a.get});(0,h.useEffect)(function(){var a,b,c=window.location.href,d=o(null==c?void 0:c.split("?scope="),2)[1],f=o(null==d?void 0:d.split("&client_id="),2),g=f[0],h=f[1];g&&h&&(m({scope:g,clientId:h}),(a=e().mark(function a(){var b;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.h.get("/oauth/apps/".concat(h));case 2:r(b=a.sent.data);case 4:case"end":return a.stop()}},a)}),b=function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){n(f,d,e,g,h,"next",a)}function h(a){n(f,d,e,g,h,"throw",a)}g(void 0)})},function(){return b.apply(this,arguments)})())},[]),(0,h.useEffect)(function(){var c=t("@neo:access"),e=t("@neo:refresh"),f=t("@neo:authorization");if(!c||!e){b("/login?return_to=/login/oauth/authorize?scope=".concat(null==d?void 0:d.scope,"&client_id=").concat(null==d?void 0:d.clientId));return}if("true"===f&&a){var g=null==a?void 0:a.id;window.location.href="".concat(null==q?void 0:q.callback,"?code=").concat(g,"&source=neo")}},[q,b,null==d?void 0:d.clientId,null==d?void 0:d.scope,t,a]);var u=(0,h.useCallback)(function(){var b=null==a?void 0:a.id;window.location.href="".concat(null==q?void 0:q.callback,"?code=").concat(b,"&source=neo"),s("@neo:authorization","true",{maxAge:2592e5})},[null==q?void 0:q.callback,s,null==a?void 0:a.id]);return(0,f.BX)("div",{style:{color:"black"},children:[(0,f.BX)("div",{children:[(0,f.BX)("h3",{children:["authorize with scope: ",(0,f.tZ)("strong",{children:null==d?void 0:d.scope})]}),(0,f.tZ)("p",{children:null==q?void 0:q.description})]}),(0,f.BX)("div",{children:[(0,f.BX)("button",{onClick:u,children:["Authorize ",null==q?void 0:q.name]}),(0,f.tZ)("br",{}),(0,f.BX)("p",{children:["will redirect to ",(0,f.tZ)("strong",{children:null==q?void 0:q.homepage})]})]})]})}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=2326)}),_N_E=a.O()}])