/*! For license information please see 708.df2d1b95.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[708],{254:function(t,n,r){r.d(n,{Mm:function(){return p},SU:function(){return f},r2:function(){return l},sO:function(){return d},z1:function(){return h}});var e=r(861),o=r(243),i=r(686),a=r.n(i);function c(){c=function(){return t};var t={},n=Object.prototype,r=n.hasOwnProperty,e=Object.defineProperty||function(t,n,r){t[n]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(P){s=function(t,n,r){return t[n]=r}}function l(t,n,r,o){var i=n&&n.prototype instanceof h?n:h,a=Object.create(i.prototype),c=new E(o||[]);return e(a,"_invoke",{value:Z(t,r,c)}),a}function p(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var f={};function h(){}function d(){}function v(){}var y={};s(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(k([])));m&&m!==n&&r.call(m,i)&&(y=m);var x=v.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function b(t,n){function o(e,i,a,c){var u=p(t[e],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;e(this,"_invoke",{value:function(t,r){function e(){return new n((function(n,e){o(t,r,n,e)}))}return i=i?i.then(e,e):e()}})}function Z(t,n,r){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===e)throw e="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e="executing";var u=p(t,n,r);if("normal"===u.type){if(e=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(e="completed",r.method="throw",r.arg=u.arg)}}}function L(t,n){var r=n.method,e=t.iterator[r];if(void 0===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=void 0,L(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=p(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,f;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function _(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function j(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=v,e(x,"constructor",{value:v,configurable:!0}),e(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===d||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(n,r,e,o,i){void 0===i&&(i=Promise);var a=new b(l(n,r,e,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,u,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(r,e){return a.type="throw",a.arg=t,n.next=r,e&&(n.method="next",n.arg=void 0),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var u="c0ec3039a6ea9335ddc382eb1bd446f2",s="https://api.themoviedb.org/3",l="https://image.tmdb.org/t/p/w300/",p="https://via.placeholder.com/300x200/ccc/333?text=Not+Found+Image",f=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"/movie/popular?api_key=").concat(u));case 3:return n=t.sent,r=n.data.results.slice(0,20),t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),console.error(t.t0),a().Notify.warning("Error fetching movies:",t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(n));case 3:return r=t.sent,e=r.data.results.slice(0,20),t.abrupt("return",e);case 8:throw t.prev=8,t.t0=t.catch(0),console.error(t.t0),a().Notify.warning("Error searching movies:",t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"/movie/").concat(n,"?api_key=").concat(u));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()},594:function(t,n,r){r.d(n,{Z:function(){return b}});r(791);var e,o,i,a,c,u,s=r(254),l=r(168),p=r(867),f=r(87),h=p.ZP.ul(e||(e=(0,l.Z)(["\n  margin: 0 auto;\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  //flex-wrap: wrap;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 250px);\n  gap: 10px;\n  "]))),d=p.ZP.li(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 15px;\n"]))),v=(0,p.ZP)(f.OL)(i||(i=(0,l.Z)(["\n  height: 200px;\n  border-radius: 15px;\n  \n"]))),y=p.ZP.img(a||(a=(0,l.Z)(["\nheight: 200px;\n  border-radius: 15px ;\n"]))),g=p.ZP.div(c||(c=(0,l.Z)(["\n  padding: 0 10px ;\n  display: flex;\n  position: relative;\n  bottom: 35px;\n  height: 35px;\n  border-radius: 0 0 15px 15px ;\n  background-color: rgba(0, 0, 0, 0.6);\n  "]))),m=p.ZP.p(u||(u=(0,l.Z)(["\n  margin: 0 auto;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 11px;\n\n"]))),x=r(950),w=r(184),b=function(t){var n=t.movies;return(0,w.jsx)(x.$,{children:(0,w.jsx)(h,{children:n.map((function(t){return null!==t.backdrop_path&&(0,w.jsx)(d,{children:(0,w.jsxs)(v,{to:"/movies/".concat(t.id),children:[(0,w.jsx)(y,{src:null!==t&&void 0!==t&&t.backdrop_path?s.r2+(null===t||void 0===t?void 0:t.backdrop_path):s.Mm,alt:(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)}),(0,w.jsx)(g,{children:(0,w.jsx)(m,{children:t.title})})]})},t.id)}))})})}},708:function(t,n,r){r.r(n),r.d(n,{default:function(){return m}});var e,o,i,a,c,u,s=r(439),l=r(791),p=r(254),f=r(168),h=r(867),d=h.ZP.h1(e||(e=(0,f.Z)(["\n  padding: 10px 0\n"]))),v=(h.ZP.ul(o||(o=(0,f.Z)(["\n  margin: 0 auto;\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  // display: grid;\n  // grid-template-columns: repeat(auto-fit, 250px);\n"]))),h.ZP.li(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 15px;\n"]))),h.ZP.img(a||(a=(0,f.Z)(["\n  height: 100%;\n  border-radius: 15px ;\n"]))),h.ZP.div(c||(c=(0,f.Z)(["\n  position: relative;\n  bottom: 40px;\n  border-radius: 0 0 15px 15px ;\n  background-color: rgba(0, 0, 0, 0.6);\n"]))),h.ZP.p(u||(u=(0,f.Z)(["\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 0;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 1.5 vw;\n\n"]))),r(950)),y=r(594),g=r(184);function m(){var t=(0,l.useState)([]),n=(0,s.Z)(t,2),r=n[0],e=n[1];return(0,l.useEffect)((function(){(0,p.SU)().then((function(t){e(t)})).catch((function(t){console.error(t)}))}),[]),(0,g.jsxs)(v.$,{children:[(0,g.jsx)(d,{children:"Trending today"}),(0,g.jsx)(y.Z,{movies:r})," "]})}},950:function(t,n,r){r.d(n,{$:function(){return i}});var e,o=r(168),i=r(867).ZP.section(e||(e=(0,o.Z)(["\n  text-align: center;\n  max-width: 1280px;\n  margin: 0 auto;\n  \n  @media (min-width: 280px) {\n    max-width: 767px;\n  }\n\n  @media (min-width: 768px) {\n    max-width: 1279px;\n\n  }\n"])))}}]);
//# sourceMappingURL=708.df2d1b95.chunk.js.map