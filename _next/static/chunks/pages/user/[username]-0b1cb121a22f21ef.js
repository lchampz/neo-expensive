(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[293],{4079:function(a){"use strict";var b=Object.assign.bind(Object);a.exports=b,a.exports.default=a.exports},1484:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[username]",function(){return c(9752)}])},370:function(a,b,c){"use strict";c.d(b,{a:function(){return f}});var d=c(1746),e=c(5774);function f(){return{logout:(0,d.Sz)(e.Vo,function(a){return a.logout})}}},678:function(a,b,c){"use strict";c.d(b,{a:function(){return f}});var d=c(5774),e=c(1746);function f(){return{user:(0,e.Sz)(d.Vo,function(a){return a.user})}}},9752:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return v}});var d=c(4776),e=c.n(d),f=c(6753),g=c(5237),h=c(5632),i=c(2066),j=c(1746),k=c(2139),l=c(8326),m=c(4687),n=c(5774),o=c(6893),p=c(678),q=c(370);function r(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function s(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function t(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){s(f,d,e,g,h,"next",a)}function h(a){s(f,d,e,g,h,"throw",a)}g(void 0)})}}var u=(0,g.default)(function(){return c.e(97).then(c.bind(c,9097))},{loadableGenerated:{webpack:function(){return[9097]}}}),v=!0;b.default=function(a){var b=a.username,c=function(a){x(function(b){return(null==b?void 0:b.filter(function(b){return b.name!==a}))||b}),y.remove(a)},d=(0,p.a)().user,g=(0,h.useRouter)().push,s=(0,q.a)().logout,v=(0,k.useState)(null),w=v[0],x=v[1],y=(0,j.qp)(o.Q),z=(0,j.Sz)(l.J,function(a){return a.theme}),A=(0,j.Sz)(l.J,function(a){return a.language}),B=(0,j.Sz)(l.J,function(a){return a.installTheme}),C=(0,j.Sz)(l.J,function(a){return a.resetDefault}),D=(0,j.Sz)(l.J,function(a){return a.installLanguage}),E=(0,k.useMemo)(function(){return(null==d?void 0:d.username)===b},[null==d?void 0:d.username,b]),F=(0,i.useQuery)("fetch-user",t(e().mark(function a(){var c,d,f,h,i,j,k,l,o,p;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m.h.post("/users/username",{username:b});case 3:return d=(c=a.sent).data,a.abrupt("return",{user:d});case 8:return a.prev=8,a.t0=a.catch(0),(null==(f=a.t0.response)?void 0:f.data.error)!=="jwt expired"&&g("/login"),h=y.get("@neo:refresh"),a.next=15,m.h.post("/auth/refresh-token",{refresh_token:h});case 15:return j=(i=a.sent.data).accessToken,k=i.refreshToken,y.set("@neo:access",j,{maxAge:n.aM}),k&&y.set("@neo:refresh",k,{maxAge:n.T1}),m.h.defaults.headers.authorization="bearer ".concat(j),a.next=22,m.h.get("/users/profile");case 22:return l=a.sent,a.next=25,m.h.get("/users/".concat(l.data.id));case 25:return p=(o=a.sent).data,a.abrupt("return",{user:p});case 28:case"end":return a.stop()}},a,null,[[0,8]])}))),G=F.data,H=F.isLoading,I=F.error;function J(){return(J=t(e().mark(function a(){var b,c,d,f,g;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=y.get("@neo:refresh"),a.prev=1,a.next=4,m.h.get("/auth/refresh-token/".concat(b));case 4:if(!(d=(c=a.sent).data)){a.next=9;break}return a.next=9,m.h.delete("/auth/refresh-token",{data:{id:d.id}});case 9:a.next=15;break;case 11:a.prev=11,a.t0=a.catch(1),console.log(null===(f=a.t0)|| void 0===f?void 0:null===(g=f.response)|| void 0===g?void 0:g.data);case 15:y.remove("@neo:refresh"),y.remove("@neo:authorization");case 17:case"end":return a.stop()}},a,null,[[1,11]])}))).apply(this,arguments)}return H?(0,f.tZ)("div",{children:(0,f.tZ)("h1",{style:{color:"black"},children:"loading..."})}):I?(0,f.tZ)("div",{children:(0,f.tZ)("p",{children:"without data"})}):(0,f.BX)("div",{style:{color:"black"},children:[(0,f.tZ)("p",{style:{color:"black"},children:null==G?void 0:G.user.id}),!E&&(0,f.BX)("div",{children:[(0,f.tZ)("p",{children:"not logged in?"}),(0,f.tZ)("button",{onClick:function(){return g("/login?return_to=/user/".concat(b))},children:"login now"})]}),E&&(0,f.BX)("div",{children:[(0,f.tZ)("div",{children:(0,f.tZ)(u,{href:"/user/".concat(null==G?void 0:G.user.name,"/developer"),children:"developer settings"})}),(0,f.tZ)("div",{children:(0,f.tZ)(u,{href:"/user/".concat(null==G?void 0:G.user.name,"/sessions"),children:"see my sessions"})}),(0,f.tZ)("div",{children:(0,f.tZ)("button",{onClick:C,children:"reset to defaults"})}),(0,f.tZ)("div",{children:(0,f.tZ)("button",{onClick:s,children:"logout"})}),(0,f.BX)("div",{children:[(0,f.tZ)("button",{onClick:function(){var a=Object.entries(y.getAll()),b={"@neo:access":"makes sure you're authenticated to our server","@neo:refresh":"keeps you logged in the app","@neo:authorization":"knows wheter you've pressed the neo-expensive oauth button once","@neo:theme":"the current theme you're using","@neo:language":"the current language you're using"};x(a.map(function(a){var c,d,e=(d=2,function(a){if(Array.isArray(a))return a}(c=a)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(c,d)||function(a,b){if(a){if("string"==typeof a)return r(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return r(a,b)}}(c,d)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=e[0],g=e[1];return{name:f,description:b[f]||"not yet documented",value:g}}))},children:"see my data"}),(0,f.tZ)("br",{}),w&&(0,f.tZ)("button",{onClick:function(){return J.apply(this,arguments)},children:"delete all stored data but keep me logged in"}),(0,f.BX)("ul",{children:[(0,f.tZ)("strong",{children:"deleting @neo:access and @neo:refresh will log you out"}),w&&w.map(function(a){var b=a.name,d=a.description,e=a.value;return(0,f.BX)("li",{children:[(0,f.tZ)("strong",{children:b})," ",e,(0,f.tZ)("br",{}),(0,f.BX)("p",{children:["description: ",d]}),(0,f.tZ)("button",{onClick:function(){return c(b)},children:"delete"}),(0,f.tZ)("br",{}),(0,f.tZ)("br",{})]},b)})]})]})]}),(0,f.BX)("section",{children:[(0,f.BX)("div",{children:[(0,f.tZ)("h3",{style:{color:"black"},children:"Themes"}),(0,f.BX)("p",{style:{color:"black"},children:["current theme: ",(0,f.tZ)("strong",{children:z})]})]}),E&&(0,f.BX)("div",{children:[(0,f.tZ)("div",{children:(0,f.tZ)("button",{onClick:function(){return B({theme:"dark"})},children:"install dark theme"})}),(0,f.tZ)("div",{children:(0,f.tZ)("button",{onClick:function(){return B({theme:"light"})},children:"install light theme"})}),(0,f.tZ)("div",{children:(0,f.tZ)("button",{onClick:function(){return B({theme:"neon"})},children:"install neon theme"})})]})]}),(0,f.BX)("section",{children:[(0,f.BX)("div",{children:[(0,f.tZ)("h3",{style:{color:"black"},children:"Languages"}),(0,f.BX)("p",{style:{color:"black"},children:["current theme: ",(0,f.tZ)("strong",{children:A})]})]}),E&&(0,f.BX)("div",{children:[(0,f.tZ)("button",{onClick:function(){return D({language:"pt-BR"})},children:"install portuguese language"}),(0,f.tZ)("button",{onClick:function(){return D({language:"en-US"})},children:"install english language"})]})]})]})}},5805:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}b.default=function(a,b){var c,d,g=f.default,i={loading:function(a){return a.error,a.isLoading,a.pastDelay,null}};(c=a,null!=(d=Promise)&&"undefined"!=typeof Symbol&&d[Symbol.hasInstance]?d[Symbol.hasInstance](c):c instanceof d)?i.loader=function(){return a}:"function"==typeof a?i.loader=a:"object"==typeof a&&(i=e({},i,a));var j=i=e({},i,b);if(j.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(j.suspense)return g(j);if(i.loadableGenerated&&delete(i=e({},i,i.loadableGenerated)).loadableGenerated,"boolean"==typeof i.ssr){if(!i.ssr)return delete i.ssr,h(g,i);delete i.ssr}return g(i)},g(c(2139));var f=g(c(2060));function g(a){return a&&a.__esModule?a:{default:a}}function h(a,b){return delete b.webpack,delete b.modules,a(b)}},6941:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.LoadableContext=void 0;var d,e=((d=c(2139))&&d.__esModule?d:{default:d}).default.createContext(null);b.LoadableContext=e},2060:function(a,b,c){"use strict";function d(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){e(a,b,c[b])})}return a}Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var g,h=(g=c(2139))&&g.__esModule?g:{default:g},i=c(6718),j=c(6941),k=[],l=[],m=!1;function n(a){var b=a(),c={loading:!0,loaded:null,error:null};return c.promise=b.then(function(a){return c.loading=!1,c.loaded=a,a}).catch(function(a){throw c.loading=!1,c.error=a,a}),c}var o=function(){var a,b,c;function e(a,b){!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=a,this._opts=b,this._callbacks=new Set(),this._delay=null,this._timeout=null,this.retry()}return a=e,b=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var a=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var b=this._res,c=this._opts;if(b.loading){if("number"==typeof c.delay)if(0===c.delay)this._state.pastDelay=!0;else{var d=this;this._delay=setTimeout(function(){d._update({pastDelay:!0})},c.delay)}if("number"==typeof c.timeout){var e=this;this._timeout=setTimeout(function(){e._update({timedOut:!0})},c.timeout)}}this._res.promise.then(function(){a._update({}),a._clearTimeouts()}).catch(function(b){a._update({}),a._clearTimeouts()}),this._update({})}},{key:"_update",value:function(a){this._state=f({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},a),this._callbacks.forEach(function(a){return a()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(a){var b=this;return this._callbacks.add(a),function(){b._callbacks.delete(a)}}}],d(a.prototype,b),c&&d(a,c),e}();function p(a){return(function(a,b){var c=function(){if(!e){var b=new o(a,d);e={getCurrentValue:b.getCurrentValue.bind(b),subscribe:b.subscribe.bind(b),retry:b.retry.bind(b),promise:b.promise.bind(b)}}return e.promise()},d=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},b);d.suspense&&(d.lazy=h.default.lazy(d.loader));var e=null;if(!m&&!d.suspense){var g=d.webpack&&1?d.webpack():d.modules;g&&l.push(function(a){var b=!0,d=!1,e=void 0;try{for(var f,h=g[Symbol.iterator]();!(b=(f=h.next()).done);b=!0){var i=f.value;if(-1!==a.indexOf(i))return c()}}catch(j){d=!0,e=j}finally{try{b||null==h.return||h.return()}finally{if(d)throw e}}})}var k=d.suspense?function(a,b){return h.default.createElement(d.lazy,f({},a,{ref:b}))}:function(a,b){c();var f=h.default.useContext(j.LoadableContext),g=i.useSubscription(e);return h.default.useImperativeHandle(b,function(){return{retry:e.retry}},[]),f&&Array.isArray(d.modules)&&d.modules.forEach(function(a){f(a)}),h.default.useMemo(function(){var b;return g.loading||g.error?h.default.createElement(d.loading,{isLoading:g.loading,pastDelay:g.pastDelay,timedOut:g.timedOut,error:g.error,retry:e.retry}):g.loaded?h.default.createElement((b=g.loaded)&&b.__esModule?b.default:b,a):null},[a,g])};return k.preload=function(){return!d.suspense&&c()},k.displayName="LoadableComponent",h.default.forwardRef(k)})(n,a)}function q(a,b){for(var c=[];a.length;){var d=a.pop();c.push(d(b))}return Promise.all(c).then(function(){if(a.length)return q(a,b)})}p.preloadAll=function(){return new Promise(function(a,b){q(k).then(a,b)})},p.preloadReady=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return new Promise(function(b){var c=function(){return m=!0,b()};q(l,a).then(c,c)})},window.__NEXT_PRELOADREADY=p.preloadReady,b.default=p},5237:function(a,b,c){a.exports=c(5805)},8186:function(a,b,c){"use strict";var d=c(4079),e=c(2139);b.useSubscription=function(a){var b=a.getCurrentValue,c=a.subscribe,f=e.useState(function(){return{getCurrentValue:b,subscribe:c,value:b()}});a=f[0];var g=f[1];return f=a.value,(a.getCurrentValue!==b||a.subscribe!==c)&&(f=b(),g({getCurrentValue:b,subscribe:c,value:f})),e.useDebugValue(f),e.useEffect(function(){function a(){if(!e){var a=b();g(function(e){return e.getCurrentValue!==b||e.subscribe!==c||e.value===a?e:d({},e,{value:a})})}}var e=!1,f=c(a);return a(),function(){e=!0,f()}},[b,c]),f}},6718:function(a,b,c){"use strict";a.exports=c(8186)}},function(a){a.O(0,[774,888,179],function(){return a(a.s=1484)}),_N_E=a.O()}])