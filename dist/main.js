!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(){let e=document.querySelector("#content");e.innerHTML="";let t=document.createElement("h1"),n=document.createTextNode("Yum Yum's Family Restaurant");t.appendChild(n),e.appendChild(t);let r=document.createElement("img");r.src="images/buffet.jpg",e.appendChild(r);let o=document.createElement("p"),c=document.createTextNode("Come on over!");o.appendChild(c),e.appendChild(o)}n.r(t);let o=document.createElement("div"),c=document.querySelector("#content");document.body.insertBefore(o,c);let l=document.createElement("button");l.innerHTML="Home",o.appendChild(l),l.addEventListener("click",r);let d=document.createElement("button");d.innerHTML="Menu",o.appendChild(d),d.addEventListener("click",(function(){let e=document.querySelector("#content");e.innerHTML="";let t=document.createElement("div");e.appendChild(t);let n=document.createElement("h1");n.innerHTML="Menu",t.appendChild(n);let r=document.createElement("p");r.innerHTML="pineapple",t.appendChild(r)}));let u=document.createElement("button");u.innerHTML="Contact",o.appendChild(u),u.addEventListener("click",(function(){let e=document.querySelector("#content");e.innerHTML="";let t=document.createElement("div");e.appendChild(t);let n=document.createElement("h1");n.innerHTML="Contact Us",t.appendChild(n);let r=document.createElement("p");r.innerHTML="Email: this@that.com",t.appendChild(r)})),r(),micronesia,vanuatu}]);