(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-saoma"],{"19cc":function(e,t,n){"use strict";var a=n("8af4"),c=n.n(a);c.a},"23ea":function(e,t,n){"use strict";n.r(t);var a=n("c690"),c=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=c.a},"6a55":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.scanCode.apply(void 0,arguments)}}},[e._v("扫码")]),n("v-uni-view",[e._v("扫码结果："+e._s(e.qrCodeRes))])],1)},o=[]},"8af4":function(e,t,n){var a=n("96fb");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var c=n("4f06").default;c("55920832",a,!0,{sourceMap:!1,shadowMode:!1})},"96fb":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".container[data-v-518af774]{padding:10px}",""]),e.exports=t},c690:function(e,t,n){"use strict";var a=n("4ea4");n("c975"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n("66f0")),o={data:function(){return{qrCodeRes:""}},methods:{scanCode:function(){this.scanCodeH5()},scanCodeAPP:function(){var e=this;uni.scanCode({scanType:["qrCode"],success:function(t){e.qrCodeRes=t.result}})},scanCodeH5:function(){var e=this;uni.chooseImage({count:1,success:function(t){c.default.qrcode.decode(e.getObjectURL(t.tempFiles[0])),c.default.qrcode.callback=function(t){if(t.indexOf("error")>=0)e.qrCodeRes="不合法二维码："+t;else{var n=e.decodeStr(t);e.qrCodeRes=n}}}})},getObjectURL:function(e){var t=null;return void 0!==window.createObjectURL?t=window.createObjectURL(e):void 0!==window.URL?t=window.URL.createObjectURL(e):void 0!==window.webkitURL&&(t=window.webkitURL.createObjectURL(e)),t},decodeStr:function(e){var t,n,a,c,o,r;t="",a=e.length,n=0;while(n<a)switch(c=e.charCodeAt(n++),c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:t+=e.charAt(n-1);break;case 12:case 13:o=e.charCodeAt(n++),t+=String.fromCharCode((31&c)<<6|63&o);break;case 14:o=e.charCodeAt(n++),r=e.charCodeAt(n++),t+=String.fromCharCode((15&c)<<12|(63&o)<<6|(63&r)<<0);break}return t}}};t.default=o},ffee:function(e,t,n){"use strict";n.r(t);var a=n("6a55"),c=n("23ea");for(var o in c)"default"!==o&&function(e){n.d(t,e,(function(){return c[e]}))}(o);n("19cc");var r,i=n("f0c5"),d=Object(i["a"])(c["default"],a["b"],a["c"],!1,null,"518af774",null,!1,a["a"],r);t["default"]=d.exports}}]);