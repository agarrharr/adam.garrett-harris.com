!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(){var e=n(3).default;(0,r.render)(e)}var r=n(6);o()},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var o,r,i,a,u=[];for(a=arguments.length;a-- >2;)D.push(arguments[a]);for(n&&n.children&&(D.length||D.push(n.children),delete n.children);D.length;)if((r=D.pop())instanceof Array)for(a=r.length;a--;)D.push(r[a]);else null!=r&&r!==!1&&("number"!=typeof r&&r!==!0||(r=String(r)),i="string"==typeof r,i&&o?u[u.length-1]+=r:(u.push(r),o=i));var l=new t(e,n||void 0,u);return E.vnode&&E.vnode(l),l}function o(e,t){if(t)for(var n in t)e[n]=t[n];return e}function r(e){return o({},e)}function i(e,t){for(var n=t.split("."),o=0;o<n.length&&e;o++)e=e[n[o]];return e}function a(e){return"function"==typeof e}function u(e){return"string"==typeof e}function l(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function s(e,t){return n(e.nodeName,o(r(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function c(e,t,n){var o=t.split(".");return function(t){for(var r=t&&t.target||this,a={},l=a,s=u(n)?i(t,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:t,c=0;c<o.length-1;c++)l=l[o[c]]||(l[o[c]]=!c&&e.state[o[c]]||{});l[o[c]]=s,e.setState(a)}}function f(e){!e._dirty&&(e._dirty=!0)&&1==K.push(e)&&(E.debounceRendering||V)(p)}function p(){var e,t=K;for(K=[];e=t.pop();)e._dirty&&T(e)}function d(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function h(e,t){return e.nodeName(y(e),t||F)}function v(e,t){return u(t)?e instanceof Text:u(t.nodeName)?!e._componentConstructor&&m(e,t.nodeName):a(t.nodeName)?!e._componentConstructor||e._componentConstructor===t.nodeName||d(t):void 0}function m(e,t){return e.normalizedNodeName===t||I(e.nodeName)===I(t)}function y(e){var t=r(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function _(e,t,n,o,r){if("className"===t&&(t="class"),"class"===t&&o&&"object"==typeof o&&(o=l(o)),"key"===t);else if("class"!==t||r)if("style"===t){if((!o||u(o)||u(n))&&(e.style.cssText=o||""),o&&"object"==typeof o){if(!u(n))for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"!=typeof o[i]||J[i]?o[i]:o[i]+"px"}}else if("dangerouslySetInnerHTML"===t)e.innerHTML=o&&o.__html||"";else if("o"==t[0]&&"n"==t[1]){var s=e._listeners||(e._listeners={});t=I(t.substring(2)),o?s[t]||e.addEventListener(t,x,!!q[t]):s[t]&&e.removeEventListener(t,x,!!q[t]),s[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)g(e,t,null==o?"":o),null!=o&&o!==!1||e.removeAttribute(t);else{var c=r&&t.match(/^xlink\:?(.+)/);null==o||o===!1?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",I(c[1])):e.removeAttribute(t):"object"==typeof o||a(o)||(c?e.setAttributeNS("http://www.w3.org/1999/xlink",I(c[1]),o):e.setAttribute(t,o))}else e.className=o||""}function g(e,t,n){try{e[t]=n}catch(e){}}function x(e){return this._listeners[e.type](E.event&&E.event(e)||e)}function C(e){if(b(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||I(e.nodeName);(Q[t]||(Q[t]=[])).push(e)}}function N(e,t){var n=I(e),o=Q[n]&&Q[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return o.normalizedNodeName=n,o}function S(){for(var e;e=X.pop();)E.afterMount&&E.afterMount(e),e.componentDidMount&&e.componentDidMount()}function k(e,t,n,o,r,i){Y++||(Z=r instanceof SVGElement,$=e&&!(G in e));var a=w(e,t,n,o);return r&&a.parentNode!==r&&r.appendChild(a),--Y||($=!1,i||S()),a}function w(e,t,n,o){for(var r=t&&t.attributes;d(t);)t=h(t,n);if(null==t&&(t=""),u(t))return e&&e instanceof Text?e.nodeValue!=t&&(e.nodeValue=t):(e&&j(e),e=document.createTextNode(t)),e[G]=!0,e;if(a(t.nodeName))return R(e,t,n,o);var i=e,l=String(t.nodeName),s=Z,c=t.children;if(Z="svg"===l||"foreignObject"!==l&&Z,e){if(!m(e,l)){for(i=N(l,Z);e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),j(e)}}else i=N(l,Z);var f=i.firstChild,p=i[G];if(!p){i[G]=p={};for(var v=i.attributes,y=v.length;y--;)p[v[y].name]=v[y].value}return M(i,t.attributes,p),!$&&c&&1===c.length&&"string"==typeof c[0]&&f&&f instanceof Text&&!f.nextSibling?f.nodeValue!=c[0]&&(f.nodeValue=c[0]):(c&&c.length||f)&&U(i,c,n,o),r&&"function"==typeof r.ref&&(p.ref=r.ref)(i),Z=s,i}function U(e,t,n,o){var r,i,a,u,l=e.childNodes,s=[],c={},f=0,p=0,d=l.length,h=0,m=t&&t.length;if(d)for(var y=0;y<d;y++){var _=l[y],g=_[G],x=m?(i=_._component)?i.__key:g?g.key:null:null;null!=x?(f++,c[x]=_):($||g)&&(s[h++]=_)}if(m)for(var y=0;y<m;y++){a=t[y],u=null;var x=a.key;if(null!=x)f&&x in c&&(u=c[x],c[x]=void 0,f--);else if(!u&&p<h)for(r=p;r<h;r++)if(i=s[r],i&&v(i,a)){u=i,s[r]=void 0,r===h-1&&h--,r===p&&p++;break}u=w(u,a,n,o),u&&u!==e&&(y>=d?e.appendChild(u):u!==l[y]&&(u===l[y+1]&&b(l[y]),e.insertBefore(u,l[y]||null)))}if(f)for(var y in c)c[y]&&j(c[y]);for(;p<=h;)u=s[h--],u&&j(u)}function j(e,t){var n=e._component;if(n)A(n,!t);else{e[G]&&e[G].ref&&e[G].ref(null),t||C(e);for(var o;o=e.lastChild;)j(o,t)}}function M(e,t,n){for(var o in n)t&&o in t||null==n[o]||_(e,o,n[o],n[o]=void 0,Z);if(t)for(var r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||_(e,r,n[r],n[r]=t[r],Z)}function O(e){var t=e.constructor.name,n=ee[t];n?n.push(e):ee[t]=[e]}function B(e,t,n){var o=new e(t,n),r=ee[e.name];if(P.call(o,t,n),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function L(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&E.syncComponentUpdates===!1&&e.base?f(e):T(e,1,r)),e.__ref&&e.__ref(e))}function T(e,t,n,i){if(!e._disable){var u,l,s,c,f=e.props,p=e.state,v=e.context,m=e.prevProps||f,b=e.prevState||p,_=e.prevContext||v,g=e.base,x=e.nextBase,C=g||x,N=e._component;if(g&&(e.props=m,e.state=b,e.context=_,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(f,p,v)===!1?u=!0:e.componentWillUpdate&&e.componentWillUpdate(f,p,v),e.props=f,e.state=p,e.context=v),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!u){for(e.render&&(l=e.render(f,p,v)),e.getChildContext&&(v=o(r(v),e.getChildContext()));d(l);)l=h(l,v);var w,U,M=l&&l.nodeName;if(a(M)){var O=y(l);s=N,s&&s.constructor===M&&O.key==s.__key?L(s,O,1,v):(w=s,s=B(M,O,v),s.nextBase=s.nextBase||x,s._parentComponent=e,e._component=s,L(s,O,0,v),T(s,1,n,!0)),U=s.base}else c=C,w=N,w&&(c=e._component=null),(C||1===t)&&(c&&(c._component=null),U=k(c,l,v,n||!g,C&&C.parentNode,!0));if(C&&U!==C&&s!==N){var R=C.parentNode;R&&U!==R&&(R.replaceChild(U,C),w||(C._component=null,j(C)))}if(w&&A(w,U!==C),e.base=U,U&&!i){for(var P=e,W=e;W=W._parentComponent;)(P=W).base=U;U._component=P,U._componentConstructor=P.constructor}}!g||n?X.unshift(e):u||(e.componentDidUpdate&&e.componentDidUpdate(m,b,_),E.afterUpdate&&E.afterUpdate(e));var D,H=e._renderCallbacks;if(H)for(;D=H.pop();)D.call(e);Y||i||S()}}function R(e,t,n,o){for(var r=e&&e._component,i=e,a=r&&e._componentConstructor===t.nodeName,u=a,l=y(t);r&&!u&&(r=r._parentComponent);)u=r.constructor===t.nodeName;return r&&u&&(!o||r._component)?(L(r,l,3,n,o),e=r.base):(r&&!a&&(A(r,!0),e=i=null),r=B(t.nodeName,l,n),e&&!r.nextBase&&(r.nextBase=e,i=null),L(r,l,1,n,o),e=r.base,i&&e!==i&&(i._component=null,j(i))),e}function A(e,t){E.beforeUnmount&&E.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;if(o)A(o,t);else if(n){n[G]&&n[G].ref&&n[G].ref(null),e.nextBase=n,t&&(b(n),O(e));for(var r;r=n.lastChild;)j(r,!t)}e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function P(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function W(e,t,n){return k(n,e,{},!1,t)}var E={},D=[],H={},I=function(e){return H[e]||(H[e]=e.toLowerCase())},z="undefined"!=typeof Promise&&Promise.resolve(),V=z?function(e){z.then(e)}:setTimeout,F={},G="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",J={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},q={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},K=[],Q={},X=[],Y=0,Z=!1,$=!1,ee={};o(P.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=c(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r(n)),o(n,a(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),f(this)},forceUpdate:function(){T(this,2)},render:function(){}}),e.h=n,e.cloneElement=s,e.Component=P,e.render=W,e.rerender=p,e.options=E})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){}function i(e,t){if(e)return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){"function"!=typeof t&&null!==t||(e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t))}t.__esModule=!0,t.default=void 0;var u=n(1),l=n(8),s=o(l),c=function(e){function t(){r(this,t);var n=i(this,e.apply(this,arguments));return n.state.time=new Date,n}return a(t,e),t.prototype.componentDidMount=function(){var e=this;this.timer=setInterval(function(){e.setState({time:Date.now()})},1e3)},t.prototype.componentWillUnmount=function(){clearInterval(this.timer)},t.prototype.render=function(e,t){return console.log("render"),(0,u.h)("div",{class:s.default.Time},(0,u.h)("span",null,new Date(t.time).toLocaleTimeString()))},t}(u.Component);t.default=c},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){}function i(e,t){if(e)return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){"function"!=typeof t&&null!==t||(e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t))}t.__esModule=!0,t.default=void 0;var u=n(1),l=n(2),s=o(l),c=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){this.props.hideFacebook||!1;return(0,u.h)("div",{id:"time-widget"},(0,u.h)(s.default,null))},t}(u.Component);t.default=c},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,"._1CdhHIpiWB5x8uWt-fn2H2{color:#bbc7cc}",""]),t.locals={Time:"_1CdhHIpiWB5x8uWt-fn2H2"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){!function(e,o){o(t,n(1))}(this,function(e,t){"use strict";t="default"in t?t.default:t;var n="widget/config",o=function(e){return e.currentScript||function(){var t=e.getElementsByTagName("script");return t[t.length-1]}()},r=function(e){try{return JSON.parse(e.textContent)}catch(e){return null}},i=function(e){var i=void 0,a=!1,u=void 0,l=o(document);document.onreadystatechange=function(){a||"complete"!==document.readyState&&"loaded"!==document.readyState&&"interactive"!==document.readyState||(a=!0,u=l.parentNode,t.render(t.h(e),u,i),[].forEach.call(document.querySelectorAll("script[type]"),function(o){if(o.getAttribute("type")===n){var a=r(o);return a&&a.clone?a.clone===u.id?t.render(t.h(e),o.parentNode,i):void 0:null}}))}};e._getWidgetScriptTag=o,e._getTagContent=r,e.render=i,Object.defineProperty(e,"__esModule",{value:!0})})},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=d[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(s(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(s(o.parts[i],t));d[o.id]={id:o.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],u=r[2],l=r[3],s={css:a,media:u,sourceMap:l};n[i]?n[i].parts.push(s):t.push(n[i]={id:i,parts:[s]})}return t}function i(e,t){var n=m(),o=_[_.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),_.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=_.indexOf(e);t>=0&&_.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function s(e,t){var n,o,r;if(t.singleton){var i=b++;n=y||(y=u(t)),o=c.bind(null,n,i,!1),r=c.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=p.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),o=f.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function c(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,b=0,_=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var u=n[a],l=d[u.id];l.refs--,i.push(l)}if(e){var s=r(e);o(s,t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete d[l.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(4);"string"==typeof o&&(o=[[e.id,o,""]]);n(7)(o,{singleton:!0});o.locals&&(e.exports=o.locals)}])});
//# sourceMappingURL=bundle.js.map