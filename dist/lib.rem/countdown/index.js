/*! vue-ydui v0.4.7 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CountDown=void 0;var r=n(41),i=o(r);e.CountDown=i.default},1:function(t,e){t.exports=function(t,e,n,o){var r,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),o){var s=u.computed||(u.computed={});Object.keys(o).forEach(function(t){var e=o[t];s[t]=function(){return e}})}return{esModule:r,exports:i,options:u}}},41:function(t,e,n){var o=n(1)(n(147),n(101),null,null);t.exports=o.exports},101:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{domProps:{innerHTML:t._s(t.str)}}),t._v(" "),t.showTpl?n("span",{ref:"tpl"},[t._t("default")],2):t._e()])},staticRenderFns:[]}},147:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-countdown",data:function(){return{str:"",timer:null,tempFormat:"",showTpl:!0}},props:{time:{type:String},format:{type:String,default:"{%d}天{%h}时{%m}分{%s}秒"},callback:{type:Function},doneText:{type:String,default:"已结束"}},methods:{run:function(){var t=this,e=Math.floor(new Date(this.time).getTime()/1e3);this.timer=setInterval(function(){var n=e-Math.floor((new Date).getTime()/1e3);n>0?t.str=t.timestampTotime(n):("function"==typeof t.callback&&t.callback(),t.str=t.doneText,clearInterval(t.timer))},1e3)},timestampTotime:function(t){var e=this.tempFormat,n={};n.s=t%60,t=Math.floor(t/60),n.m=t%60,t=Math.floor(t/60),n.h=t%24,n.d=Math.floor(t/24);var o=function(t){return t<=0?"00":t<10?"0"+t:t},r=["d","h","m","s"];return r.forEach(function(t){var r=o(n[t]).toString().split("");e=e.replace("{%"+t+"}",o(n[t])),e=e.replace("{%"+t+"0}",0!=~~r[0]?r[0]:""),e=e.replace("{%"+t+"1}",~~r[r.length-2]),e=e.replace("{%"+t+"2}",~~r[r.length-1])}),e}},mounted:function(){var t=this;this.$nextTick(function(){t.tempFormat=t.$slots.default?t.$refs.tpl.innerHTML:t.format,t.showTpl=!1,t.run()})},destroyed:function(){clearInterval(this.timer)}}}})});