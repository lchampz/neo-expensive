(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4079:function(a){"use strict";var b=Object.assign.bind(Object);a.exports=b,a.exports.default=a.exports},3255:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(3202)}])},370:function(a,b,c){"use strict";c.d(b,{a:function(){return f}});var d=c(1746),e=c(5774);function f(){return{logout:(0,d.Sz)(e.Vo,function(a){return a.logout})}}},678:function(a,b,c){"use strict";c.d(b,{a:function(){return f}});var d=c(5774),e=c(1746);function f(){return{user:(0,e.Sz)(d.Vo,function(a){return a.user})}}},3202:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return m}});var d=c(6753),e=c(2139),f=c(5237),g=c(1746);function h(){return e.default.createElement("div",null,e.default.createElement("p",null,"my icon"))}var i=c(678),j=c(370),k=c(5774),l=(0,f.default)(function(){return c.e(97).then(c.bind(c,9097))},{loadableGenerated:{webpack:function(){return[9097]}}}),m=(0,e.memo)(function(){var a=(0,i.a)().user,b=(0,j.a)().logout,c=(0,e.useMemo)(function(){return null!=a&&!!a.githubId},[a]),f=(0,g.Sz)(k.Vo,function(a){return a.disconnectAccount});return console.log({user:a}),(0,d.BX)("main",{children:[(0,d.tZ)("h1",{style:{color:"black"},children:"This is a work in progress :)"}),(0,d.tZ)("a",{href:"/neo-expensive/old/index.html",children:"Go to the old website"}),(0,d.tZ)("a",{href:"/neo-expensive/mvp/index.html",children:"Go to MVP"}),!a&&(0,d.BX)("div",{children:[(0,d.tZ)("div",{children:(0,d.tZ)(l,{href:"/login",children:(0,d.tZ)("a",{children:"Go to login"})})}),(0,d.tZ)("div",{children:(0,d.tZ)(l,{href:"/register",children:(0,d.tZ)("a",{children:"Go to register"})})}),(0,d.tZ)("div",{children:(0,d.tZ)(l,{href:"/forgot-password",children:(0,d.tZ)("a",{children:"forgot password"})})}),(0,d.tZ)("div",{children:(0,d.tZ)(l,{href:"".concat("https://neo-expensive-api.herokuapp.com","/users/login/oauth/github"),children:(0,d.tZ)("a",{children:"login with github"})})}),(0,d.tZ)("div",{children:(0,d.tZ)(l,{href:"".concat("https://neo-expensive-api.herokuapp.com","/users/login/oauth/neo"),children:(0,d.tZ)("a",{children:"login with neo-expensive"})})})]}),(0,d.tZ)("div",{children:(0,d.tZ)(l,{href:"/status",children:(0,d.tZ)("a",{children:"check all our services stautses"})})}),a&&(0,d.BX)("div",{children:[(0,d.BX)("div",{children:[(0,d.BX)("h2",{style:{color:"red"},children:["Hello ",a.name]}),(0,d.tZ)("a",{children:(0,d.tZ)("button",{onClick:function(){return b()},children:"logout"})})]}),(0,d.tZ)("div",{children:(0,d.tZ)("a",{children:(0,d.tZ)("button",{onClick:function(){return f()},children:"disconnect my account from every browser"})})}),(0,d.tZ)("div",{children:(0,d.tZ)(l,{href:"/user/".concat(a.username),children:(0,d.tZ)("a",{children:"go to settings page"})})}),(0,d.tZ)("div",{children:(0,d.tZ)(l,{href:"/recover-password",children:(0,d.tZ)("a",{children:c?"create a password":"set new password"})})}),(0,d.tZ)("img",{width:"100",src:a.avatarUrl,alt:""}),(0,d.tZ)("div",{children:(0,d.tZ)("pre",{style:{color:"black"},children:JSON.stringify(a,null,2)})})]}),(0,d.tZ)(h,{})]})})},5805:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}b.default=function(a,b){var c,d,g=f.default,i={loading:function(a){return a.error,a.isLoading,a.pastDelay,null}};(c=a,null!=(d=Promise)&&"undefined"!=typeof Symbol&&d[Symbol.hasInstance]?d[Symbol.hasInstance](c):c instanceof d)?i.loader=function(){return a}:"function"==typeof a?i.loader=a:"object"==typeof a&&(i=e({},i,a));var j=i=e({},i,b);if(j.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(j.suspense)return g(j);if(i.loadableGenerated&&delete(i=e({},i,i.loadableGenerated)).loadableGenerated,"boolean"==typeof i.ssr){if(!i.ssr)return delete i.ssr,h(g,i);delete i.ssr}return g(i)},g(c(2139));var f=g(c(2060));function g(a){return a&&a.__esModule?a:{default:a}}function h(a,b){return delete b.webpack,delete b.modules,a(b)}},6941:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.LoadableContext=void 0;var d,e=((d=c(2139))&&d.__esModule?d:{default:d}).default.createContext(null);b.LoadableContext=e},2060:function(a,b,c){"use strict";function d(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){e(a,b,c[b])})}return a}Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var g,h=(g=c(2139))&&g.__esModule?g:{default:g},i=c(6718),j=c(6941),k=[],l=[],m=!1;function n(a){var b=a(),c={loading:!0,loaded:null,error:null};return c.promise=b.then(function(a){return c.loading=!1,c.loaded=a,a}).catch(function(a){throw c.loading=!1,c.error=a,a}),c}var o=function(){var a,b,c;function e(a,b){!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=a,this._opts=b,this._callbacks=new Set(),this._delay=null,this._timeout=null,this.retry()}return a=e,b=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var a=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var b=this._res,c=this._opts;if(b.loading){if("number"==typeof c.delay)if(0===c.delay)this._state.pastDelay=!0;else{var d=this;this._delay=setTimeout(function(){d._update({pastDelay:!0})},c.delay)}if("number"==typeof c.timeout){var e=this;this._timeout=setTimeout(function(){e._update({timedOut:!0})},c.timeout)}}this._res.promise.then(function(){a._update({}),a._clearTimeouts()}).catch(function(b){a._update({}),a._clearTimeouts()}),this._update({})}},{key:"_update",value:function(a){this._state=f({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},a),this._callbacks.forEach(function(a){return a()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(a){var b=this;return this._callbacks.add(a),function(){b._callbacks.delete(a)}}}],d(a.prototype,b),c&&d(a,c),e}();function p(a){return(function(a,b){var c=function(){if(!e){var b=new o(a,d);e={getCurrentValue:b.getCurrentValue.bind(b),subscribe:b.subscribe.bind(b),retry:b.retry.bind(b),promise:b.promise.bind(b)}}return e.promise()},d=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},b);d.suspense&&(d.lazy=h.default.lazy(d.loader));var e=null;if(!m&&!d.suspense){var g=d.webpack&&1?d.webpack():d.modules;g&&l.push(function(a){var b=!0,d=!1,e=void 0;try{for(var f,h=g[Symbol.iterator]();!(b=(f=h.next()).done);b=!0){var i=f.value;if(-1!==a.indexOf(i))return c()}}catch(j){d=!0,e=j}finally{try{b||null==h.return||h.return()}finally{if(d)throw e}}})}var k=d.suspense?function(a,b){return h.default.createElement(d.lazy,f({},a,{ref:b}))}:function(a,b){c();var f=h.default.useContext(j.LoadableContext),g=i.useSubscription(e);return h.default.useImperativeHandle(b,function(){return{retry:e.retry}},[]),f&&Array.isArray(d.modules)&&d.modules.forEach(function(a){f(a)}),h.default.useMemo(function(){var b;return g.loading||g.error?h.default.createElement(d.loading,{isLoading:g.loading,pastDelay:g.pastDelay,timedOut:g.timedOut,error:g.error,retry:e.retry}):g.loaded?h.default.createElement((b=g.loaded)&&b.__esModule?b.default:b,a):null},[a,g])};return k.preload=function(){return!d.suspense&&c()},k.displayName="LoadableComponent",h.default.forwardRef(k)})(n,a)}function q(a,b){for(var c=[];a.length;){var d=a.pop();c.push(d(b))}return Promise.all(c).then(function(){if(a.length)return q(a,b)})}p.preloadAll=function(){return new Promise(function(a,b){q(k).then(a,b)})},p.preloadReady=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[];return new Promise(function(b){var c=function(){return m=!0,b()};q(l,a).then(c,c)})},window.__NEXT_PRELOADREADY=p.preloadReady,b.default=p},5237:function(a,b,c){a.exports=c(5805)},8186:function(a,b,c){"use strict";var d=c(4079),e=c(2139);b.useSubscription=function(a){var b=a.getCurrentValue,c=a.subscribe,f=e.useState(function(){return{getCurrentValue:b,subscribe:c,value:b()}});a=f[0];var g=f[1];return f=a.value,(a.getCurrentValue!==b||a.subscribe!==c)&&(f=b(),g({getCurrentValue:b,subscribe:c,value:f})),e.useDebugValue(f),e.useEffect(function(){function a(){if(!e){var a=b();g(function(e){return e.getCurrentValue!==b||e.subscribe!==c||e.value===a?e:d({},e,{value:a})})}}var e=!1,f=c(a);return a(),function(){e=!0,f()}},[b,c]),f}},6718:function(a,b,c){"use strict";a.exports=c(8186)}},function(a){a.O(0,[774,888,179],function(){return a(a.s=3255)}),_N_E=a.O()}])