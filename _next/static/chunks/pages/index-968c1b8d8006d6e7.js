(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3255:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(8097)}])},8097:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return h}});var d=c(2322),e=c(9097),f=c(3210),g=c(1746),h=function(){var a={user:(0,g.Sz)(f.V,function(a){return a.user})}.user;return(0,d.jsxs)("main",{children:[(0,d.jsx)("h1",{children:"main page"}),a&&(0,d.jsxs)("h2",{style:{color:"red"},children:["Hello ",a.name]}),(0,d.jsx)("div",{children:(0,d.jsx)(e.default,{href:"/login",children:(0,d.jsx)("a",{children:"Go to login"})})}),(0,d.jsx)("div",{children:(0,d.jsx)(e.default,{href:"/register",children:(0,d.jsx)("a",{children:"Go to register"})})})]})}},162:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function e(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}})(a,b)||f(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function f(a,b){if(a){if("string"==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return d(a,b)}}b.default=void 0;var g,h=(g=c(2784))&&g.__esModule?g:{default:g},i=c(9918),j=c(3642),k=c(2030),l={};function m(a,b,c,d){if(a&&i.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;l[b+"%"+c+(e?"%"+e:"")]=!0}}b.default=function(a){var b,c=!1!==a.prefetch,d=j.useRouter(),f=h.default.useMemo(function(){var b=e(i.resolveHref(d,a.href,!0),2),c=b[0],f=b[1];return{href:c,as:a.as?i.resolveHref(d,a.as):f||c}},[d,a.href,a.as]),g=f.href,n=f.as,o=a.children,p=a.replace,q=a.shallow,r=a.scroll,s=a.locale;"string"==typeof o&&(o=h.default.createElement("a",null,o));var t=(b=h.default.Children.only(o))&&"object"==typeof b&&b.ref,u=e(k.useIntersection({rootMargin:"200px"}),2),v=u[0],w=u[1],x=h.default.useCallback(function(a){v(a),t&&("function"==typeof t?t(a):"object"==typeof t&&(t.current=a))},[t,v]);h.default.useEffect(function(){var a=w&&c&&i.isLocalURL(g),b=void 0!==s?s:d&&d.locale,e=l[g+"%"+n+(b?"%"+b:"")];a&&!e&&m(d,g,n,{locale:b})},[n,g,w,s,c,d]);var y={ref:x,onClick:function(a){var c,e,f,h,j,k,l,m,o,t;b.props&&"function"==typeof b.props.onClick&&b.props.onClick(a),a.defaultPrevented||(c=a,e=d,f=g,h=n,j=p,k=q,l=r,m=s,"A"===c.currentTarget.nodeName.toUpperCase()&&((t=(o=c).currentTarget.target)&&"_self"!==t||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.nativeEvent&&2===o.nativeEvent.which||!i.isLocalURL(f))||(c.preventDefault(),e[j?"replace":"push"](f,h,{shallow:k,locale:m,scroll:l})))}};if(y.onMouseEnter=function(a){b.props&&"function"==typeof b.props.onMouseEnter&&b.props.onMouseEnter(a),i.isLocalURL(g)&&m(d,g,n,{priority:!0})},a.passHref||"a"===b.type&&!("href"in b.props)){var z=void 0!==s?s:d&&d.locale,A=d&&d.isLocaleDomain&&i.getDomainLocale(n,z,d&&d.locales,d&&d.domainLocales);y.href=A||i.addBasePath(i.addLocale(n,z,d&&d.defaultLocale))}return h.default.cloneElement(b,y)}},2030:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function e(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}})(a,b)||f(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function f(a,b){if(a){if("string"==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return d(a,b)}}Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b=a.rootRef,c=a.rootMargin,d=a.disabled||!i,f=g.useRef(),k=e(g.useState(!1),2),l=k[0],m=k[1],n=e(g.useState(b?b.current:null),2),o=n[0],p=n[1],q=g.useCallback(function(a){f.current&&(f.current(),f.current=void 0),!d&&!l&&a&&a.tagName&&(f.current=j(a,function(a){return a&&m(a)},{root:o,rootMargin:c}))},[d,o,c,l]);return g.useEffect(function(){if(!i&&!l){var a=h.requestIdleCallback(function(){return m(!0)});return function(){return h.cancelIdleCallback(a)}}},[l]),g.useEffect(function(){b&&p(b.current)},[b]),[q,l]};var g=c(2784),h=c(9071),i="undefined"!=typeof IntersectionObserver;function j(a,b,c){var d=m(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){if(g.delete(a),f.unobserve(a),0===g.size){f.disconnect(),k.delete(e);var b=l.findIndex(function(a){return a.root===e.root&&a.margin===e.margin});b> -1&&l.splice(b,1)}}}var k=new Map(),l=[];function m(a){var b,c={root:a.root||null,margin:a.rootMargin||""},d=l.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d?b=k.get(d):(b=k.get(c),l.push(c)),b)return b;var e=new Map(),f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return k.set(c,b={id:c,observer:f,elements:e}),b}},9097:function(a,b,c){a.exports=c(162)}},function(a){a.O(0,[774,888,179],function(){return a(a.s=3255)}),_N_E=a.O()}])