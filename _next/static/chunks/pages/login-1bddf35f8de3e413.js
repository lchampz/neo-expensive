(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{4079:function(a){"use strict";var b=Object.assign.bind(Object);a.exports=b,a.exports.default=a.exports},9780:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return c(1455)}])},7145:function(a,b,c){"use strict";c.d(b,{f:function(){return f}});var d=c(1746),e=c(5774);function f(){return{login:(0,d.Sz)(e.Vo,function(a){return a.login})}}},1455:function(a,b,c){"use strict";c.r(b);var d=c(4776),e=c.n(d),f=c(6753),g=c(2139),h=c(5237),i=c(3955),j=c(5632),k=c(7145);function l(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function m(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function n(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){m(a,b,c[b])})}return a}var o=(0,h.default)(function(){return c.e(97).then(c.bind(c,9097))},{loadableGenerated:{webpack:function(){return[9097]}}});b.default=(0,g.memo)(function(){var a,b,c=(0,i.cI)(),d=c.register,h=c.handleSubmit,m=c.setError,p=c.formState.errors,q=(0,k.f)(),r=q.login,s=(0,j.useRouter)(),t=s.push,u=s.query,v=(0,g.useCallback)((a=e().mark(function a(b){var c,d,f,g,h;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=b.login,d=b.password,a.next=3,r({login:c,password:d});case 3:if(!(f=a.sent.errors)){a.next=7;break}return f.map(function(a){var b=a.field,c=a.message;return m(b,{message:c})}),a.abrupt("return");case 7:if(g=u.client_id,h=u.return_to){a.next=12;break}return t("/"),a.abrupt("return");case 12:if(!g){a.next=15;break}return t("".concat(h,"&client_id=").concat(g)),a.abrupt("return");case 15:return t("".concat(h)),a.abrupt("return");case 17:case"end":return a.stop()}},a)}),b=function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){l(f,d,e,g,h,"next",a)}function h(a){l(f,d,e,g,h,"throw",a)}g(void 0)})},function(a){return b.apply(this,arguments)}),[r,u,t,m]);return(0,f.BX)("div",{children:[(0,f.BX)("form",{onSubmit:h(v),children:[(0,f.BX)("div",{children:[(0,f.tZ)("input",n({type:"text",placeholder:"ID, email or username"},d("login",{required:!0}))),p.login&&(0,f.tZ)("span",{style:{color:"red"},children:p.login.message})]}),(0,f.BX)("div",{children:[(0,f.tZ)("input",n({type:"text",placeholder:"password"},d("password",{required:!0}))),p.password&&(0,f.tZ)("span",{style:{color:"red"},children:p.password.message})]}),(0,f.tZ)("button",{type:"submit",children:"submit"})]}),(0,f.tZ)(o,{href:"/",children:"go back"})]})})},5805:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}b.default=function(a,b){var c,d,g=f.default,i={loading:function(a){return a.error,a.isLoading,a.pastDelay,null}};(c=a,null!=(d=Promise)&&"undefined"!=typeof Symbol&&d[Symbol.hasInstance]?d[Symbol.hasInstance](c):c instanceof d)?i.loader=function(){return a}:"function"==typeof a?i.loader=a:"object"==typeof a&&(i=e({},i,a));var j=i=e({},i,b);if(j.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(j.suspense)return g(j);if(i.loadableGenerated&&delete(i=e({},i,i.loadableGenerated)).loadableGenerated,"boolean"==typeof i.ssr){if(!i.ssr)return delete i.ssr,h(g,i);delete i.ssr}return g(i)},g(c(2139));var f=g(c(2060));function g(a){return a&&a.__esModule?a:{default:a}}function h(a,b){return delete b.webpack,delete b.modules,a(b)}},6941:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.LoadableContext=void 0;var d,e=((d=c(2139))&&d.__esModule?d:{default:d}).default.createContext(null);b.LoadableContext=e},2060:function(a,b,c){"use strict";function d(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){e(a,b,c[b])})}return a}Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var g,h=(g=c(2139))&&g.__esModule?g:{default:g},i=c(6718),j=c(6941),k=[],l=[],m=!1;function n(a){var b=a(),c={loading:!0,loaded:null,error:null};return c.promise=b.then(function(a){return c.loading=!1,c.loaded=a,a}).catch(function(a){throw c.loading=!1,c.error=a,a}),c}var o=function(){var a,b,c;function e(a,b){!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=a,this._opts=b,this._callbacks=new Set(),this._delay=null,this._timeout=null,this.retry()}return a=e,b=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var a=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var b=this._res,c=this._opts;if(b.loading){if("number"==typeof c.delay)if(0===c.delay)this._state.pastDelay=!0;else{var d=this;this._delay=setTimeout(function(){d._update({pastDelay:!0})},c.delay)}if("number"==typeof c.timeout){var e=this;this._timeout=setTimeout(function(){e._update({timedOut:!0})},c.timeout)}}this._res.promise.then(function(){a._update({}),a._clearTimeouts()}).catch(function(b){a._update({}),a._clearTimeouts()}),this._update({})}},{key:"_update",value:function(a){this._state=f({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},a),this._callbacks.forEach(function(a){return a()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(a){var b=this;return this._callbacks.add(a),function(){b._callbacks.delete(a)}}}],d(a.prototype,b),c&&d(a,c),e}();function p(a){return(function(a,b){var c=function(){if(!e){var b=new o(a,d);e={getCurrentValue:b.getCurrentValue.bind(b),subscribe:b.subscribe.bind(b),retry:b.retry.bind(b),promise:b.promise.bind(b)}}return e.promise()},d=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},b);d.suspense&&(d.lazy=h.default.lazy(d.loader));var e=null;if(!m&&!d.suspense){var g=d.webpack&&1?d.webpack():d.modules;g&&l.push(function(a){var b=!0,d=!1,e=void 0;try{for(var f,h=g[Symbol.iterator]();!(b=(f=h.next()).done);b=!0){var i=f.value;if(-1!==a.indexOf(i))return c()}}catch(j){d=!0,e=j}finally{try{b||null==h.return||h.return()}finally{if(d)throw e}}})}var k=d.suspense?function(a,b){return h.default.createElement(d.lazy,f({},a,{ref:b}))}:function(a,b){c();var f=h.default.useContext(j.LoadableContext),g=i.useSubscription(e);return h.default.useImperativeHandle(b,function(){return{retry:e.retry}},[]),f&&Array.isArray(d.modules)&&d.modules.forEach(function(a){f(a)}),h.default.useMemo(function(){var b;return g.loading||g.error?h.default.createElement(d.loading,{isLoading:g.loading,pastDelay:g.pastDelay,timedOut:g.timedOut,error:g.error,retry:e.retry}):g.loaded?h.default.createElement((b=g.loaded)&&b.__esModule?b.default:b,a):null},[a,g])};return k.preload=function(){return!d.suspense&&c()},k.displayName="LoadableComponent",h.default.forwardRef(k)})(n,a)}function q(a,b){for(var c=[];a.length;){var d=a.pop();c.push(d(b))}return Promise.all(c).then(function(){if(a.length)return q(a,b)})}p.preloadAll=function(){return new Promise(function(a,b){q(k).then(a,b)})},p.preloadReady=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return new Promise(function(b){var c=function(){return m=!0,b()};q(l,a).then(c,c)})},window.__NEXT_PRELOADREADY=p.preloadReady,b.default=p},5237:function(a,b,c){a.exports=c(5805)},8186:function(a,b,c){"use strict";var d=c(4079),e=c(2139);b.useSubscription=function(a){var b=a.getCurrentValue,c=a.subscribe,f=e.useState(function(){return{getCurrentValue:b,subscribe:c,value:b()}});a=f[0];var g=f[1];return f=a.value,(a.getCurrentValue!==b||a.subscribe!==c)&&(f=b(),g({getCurrentValue:b,subscribe:c,value:f})),e.useDebugValue(f),e.useEffect(function(){function a(){if(!e){var a=b();g(function(e){return e.getCurrentValue!==b||e.subscribe!==c||e.value===a?e:d({},e,{value:a})})}}var e=!1,f=c(a);return a(),function(){e=!0,f()}},[b,c]),f}},6718:function(a,b,c){"use strict";a.exports=c(8186)}},function(a){a.O(0,[955,774,888,179],function(){return a(a.s=9780)}),_N_E=a.O()}])