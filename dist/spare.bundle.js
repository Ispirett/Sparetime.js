!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};!function(){function t(){var t=this;this.attr=function(e,n){return t.element.setAttribute(e,n),t.methodList()},this.Class=function(){for(var e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return(e=t.element.classList).add.apply(e,n),t.methodList()},this.html=function(e){return t.element.innerHTML=""+e,t.methodList()},this.append=function(){for(var e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return(e=t.element).append.apply(e,n),t.methodList()}}Object.defineProperty(t.prototype,"element",{get:function(){return this._element},set:function(t){this._element=t},enumerable:!0,configurable:!0}),t.prototype.methodList=function(){var t=this._methods={Class:this.Class,attr:this.attr,html:this.html,element:this.element,append:this.append};return r({},t)},t.prototype.create=function(t){return this.element=document.createElement(t),this.methodList()},t.prototype.sel=function(t){return this.element=document.querySelector(t),this.methodList()},t.copy=function(){return new t}}()}]);