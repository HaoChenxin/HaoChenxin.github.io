(self.webpackChunkhcx_utils=self.webpackChunkhcx_utils||[]).push([[267],{35177:function(L,w,y){"use strict";var I=y(79107),j=y(36047),p=y(63235);function A(a,e){return C(a)||S(a,e)||_(a,e)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(a,e){if(a){if(typeof a=="string")return O(a,e);var t=Object.prototype.toString.call(a).slice(8,-1);if(t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set")return Array.from(a);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(a,e)}}function O(a,e){(e==null||e>a.length)&&(e=a.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=a[t];return n}function S(a,e){var t=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var n=[],o=!0,i=!1,u,d;try{for(t=t.call(a);!(o=(u=t.next()).done)&&(n.push(u.value),!(e&&n.length===e));o=!0);}catch(s){i=!0,d=s}finally{try{!o&&t.return!=null&&t.return()}finally{if(i)throw d}}return n}}function C(a){if(Array.isArray(a))return a}var x={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?e.const:"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var t=this,n=[];return Object.entries(e.properties||{}).forEach(function(o){var i,u=A(o,2),d=u[0],s=u[1];n.push("".concat(d).concat((i=e.required)!==null&&i!==void 0&&i.includes(d)?"":"?",": ").concat(s.type==="object"?"object":t.toString(s)))}),n.length?"{ ".concat(n.join("; ")," }"):"{}"},array:function(e){if(e.items){var t=this.getValidClassName(e.items);return t?"".concat(t,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var t=this,n=e.signature,o="oneOf"in n?n.oneOf:[n];return o.map(function(i){return"".concat(i.isAsync?"async ":"","(").concat(i.arguments.map(function(u){return"".concat(u.key,": ").concat(t.toString(u))}).join(", "),") => ").concat(t.toString(i.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(t){return JSON.stringify(t)}).join(" | ")},oneOf:function(e){var t=this;return e.oneOf.map(function(n){return t.getValidClassName(n)||t.toString(n)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},k=function(e){var t=useState(function(){return x.toString(e)}),n=A(t,2),o=n[0],i=n[1];return useEffect(function(){i(x.toString(e))},[e]),React.createElement("code",null,o)},W=function(e){var t,n=useRouteMeta(),o=n.frontmatter,i=useAtomAssets(),u=i.components,d=e.id||o.atomId,s=useIntl();if(!d)throw new Error("`id` properties if required for API component!");var r=u==null?void 0:u[d];return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,s.formatMessage({id:"api.component.name"})),React.createElement("th",null,s.formatMessage({id:"api.component.description"})),React.createElement("th",null,s.formatMessage({id:"api.component.type"})),React.createElement("th",null,s.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,r&&(t=r.propsConfig)!==null&&t!==void 0&&t.properties?Object.entries(r.propsConfig.properties).map(function(c){var l,v=A(c,2),g=v[0],m=v[1];return React.createElement("tr",{key:g},React.createElement("td",null,g),React.createElement("td",null,m.description||"--"),React.createElement("td",null,React.createElement(k,m)),React.createElement("td",null,React.createElement("code",null,(l=r.propsConfig.required)!==null&&l!==void 0&&l.includes(g)?s.formatMessage({id:"api.component.required"}):JSON.stringify(m.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},s.formatMessage({id:"api.component.".concat(u?"not.found":"unavailable")},{id:d}))))))},B=null},1217:function(L,w,y){"use strict";var I=y(36047);function j(){return j=Object.assign?Object.assign.bind():function(E){for(var _=1;_<arguments.length;_++){var O=arguments[_];for(var S in O)Object.prototype.hasOwnProperty.call(O,S)&&(E[S]=O[S])}return E},j.apply(this,arguments)}var p=function(_){return React.createElement("span",j({className:"dumi-default-badge"},_))},A=null},63235:function(L,w,y){"use strict";y.d(w,{Z:function(){return a}});var I=y(29087),j=y.n(I),p=y(36047),A=["children"];function E(e,t){return x(e)||C(e,t)||O(e,t)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(e,t){if(e){if(typeof e=="string")return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}}function S(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function C(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o=[],i=!0,u=!1,d,s;try{for(n=n.call(e);!(i=(d=n.next()).done)&&(o.push(d.value),!(t&&o.length===t));i=!0);}catch(r){u=!0,s=r}finally{try{!i&&n.return!=null&&n.return()}finally{if(u)throw s}}return o}}function x(e){if(Array.isArray(e))return e}function k(e,t){if(e==null)return{};var n=W(e,t),o,i;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(i=0;i<u.length;i++)o=u[i],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function W(e,t){if(e==null)return{};var n={},o=Object.keys(e),i,u;for(u=0;u<o.length;u++)i=o[u],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var B=function(t){var n=t.children,o=k(t,A),i=(0,p.useRef)(null),u=(0,p.useState)(!1),d=E(u,2),s=d[0],r=d[1],c=(0,p.useState)(!1),l=E(c,2),v=l[0],g=l[1];return(0,p.useEffect)(function(){var m=i.current;if(m){var b=j()(function(){r(m.scrollLeft>0),g(m.scrollLeft<m.scrollWidth-m.offsetWidth)},100);return b(),m.addEventListener("scroll",b),window.addEventListener("resize",b),function(){m.removeEventListener("scroll",b),window.removeEventListener("resize",b)}}},[]),p.createElement("div",{className:"dumi-default-table"},p.createElement("div",{className:"dumi-default-table-content",ref:i,"data-left-folded":s||void 0,"data-right-folded":v||void 0},p.createElement("table",o,n)))},a=B},29087:function(L,w,y){var I="Expected a function",j=NaN,p="[object Symbol]",A=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,O=/^0o[0-7]+$/i,S=parseInt,C=typeof y.g=="object"&&y.g&&y.g.Object===Object&&y.g,x=typeof self=="object"&&self&&self.Object===Object&&self,k=C||x||Function("return this")(),W=Object.prototype,B=W.toString,a=Math.max,e=Math.min,t=function(){return k.Date.now()};function n(r,c,l){var v,g,m,b,h,R,M=0,V=!1,N=!1,$=!0;if(typeof r!="function")throw new TypeError(I);c=s(c)||0,i(l)&&(V=!!l.leading,N="maxWait"in l,m=N?a(s(l.maxWait)||0,c):m,$="trailing"in l?!!l.trailing:$);function F(f){var T=v,P=g;return v=g=void 0,M=f,b=r.apply(P,T),b}function J(f){return M=f,h=setTimeout(D,c),V?F(f):b}function X(f){var T=f-R,P=f-M,z=c-T;return N?e(z,m-P):z}function H(f){var T=f-R,P=f-M;return R===void 0||T>=c||T<0||N&&P>=m}function D(){var f=t();if(H(f))return K(f);h=setTimeout(D,X(f))}function K(f){return h=void 0,$&&v?F(f):(v=g=void 0,b)}function G(){h!==void 0&&clearTimeout(h),M=0,v=R=g=h=void 0}function Z(){return h===void 0?b:K(t())}function U(){var f=t(),T=H(f);if(v=arguments,g=this,R=f,T){if(h===void 0)return J(R);if(N)return h=setTimeout(D,c),F(R)}return h===void 0&&(h=setTimeout(D,c)),b}return U.cancel=G,U.flush=Z,U}function o(r,c,l){var v=!0,g=!0;if(typeof r!="function")throw new TypeError(I);return i(l)&&(v="leading"in l?!!l.leading:v,g="trailing"in l?!!l.trailing:g),n(r,c,{leading:v,maxWait:c,trailing:g})}function i(r){var c=typeof r;return!!r&&(c=="object"||c=="function")}function u(r){return!!r&&typeof r=="object"}function d(r){return typeof r=="symbol"||u(r)&&B.call(r)==p}function s(r){if(typeof r=="number")return r;if(d(r))return j;if(i(r)){var c=typeof r.valueOf=="function"?r.valueOf():r;r=i(c)?c+"":c}if(typeof r!="string")return r===0?r:+r;r=r.replace(A,"");var l=_.test(r);return l||O.test(r)?S(r.slice(2),l?2:8):E.test(r)?j:+r}L.exports=o}}]);
