(function(e){function t(t){for(var a,o,r=t[0],i=t[1],u=t[2],f=0,d=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},s={app:0},c=[];function r(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-550550f6":"74b7d074","chunk-2d375571":"d9804f77","chunk-55a84f3d":"a29e9280","chunk-33b2b28e":"3c0a3eca","chunk-5320e42c":"fb570443","chunk-5744694e":"df461dd4","chunk-71b2cff8":"12482870","chunk-97cdbeb8":"f4fc27eb","chunk-a0ef5f64":"ea6e5262","chunk-141d930d":"6bc421e0"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-550550f6":1,"chunk-2d375571":1,"chunk-55a84f3d":1,"chunk-33b2b28e":1,"chunk-5320e42c":1,"chunk-5744694e":1,"chunk-71b2cff8":1,"chunk-97cdbeb8":1,"chunk-a0ef5f64":1,"chunk-141d930d":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="static/css/"+({}[e]||e)+"."+{"chunk-550550f6":"cfec8015","chunk-2d375571":"03e79316","chunk-55a84f3d":"96c1ecdf","chunk-33b2b28e":"76e4f526","chunk-5320e42c":"35ac95af","chunk-5744694e":"ed8c771f","chunk-71b2cff8":"3902d629","chunk-97cdbeb8":"e792d0b3","chunk-a0ef5f64":"823bfeb1","chunk-141d930d":"c104c407"}[e]+".css",s=i.p+a,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var u=c[r],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===a||f===s))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],f=u.getAttribute("data-href");if(f===a||f===s)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],l.parentNode.removeChild(l),n(c)},l.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){o[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=c);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=r(e);var d=new Error;u=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}s[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:f})}),12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";var a=n("2b0e"),o=n("2f62"),s={hideNave:!0,navidata:JSON.parse(localStorage.getItem("navidata")||"{}"),navifootdata:JSON.parse(localStorage.getItem("navifootdata")||"{}"),lang:localStorage.getItem("lang")||"en"},c={setHideNav:function(e,t){var n=e.commit;n("setHideNav",t)},setNaviData:function(e,t){var n=e.commit;n("setNaviData",t)},setNavifootdata:function(e,t){var n=e.commit;n("setNavifootdata",t)},setLang:function(e,t){var n=e.commit;n("setLang",t)}},r={setHideNav:function(e,t){e.hideNave=t},setNaviData:function(e,t){e.navidata=t,localStorage.setItem("navidata",JSON.stringify(t))},setNavifootdata:function(e,t){e.navifootdata=t,localStorage.setItem("navifootdata",JSON.stringify(t))},setLang:function(e,t){e.navifootdata=t,localStorage.setItem("lang",t)}},i={state:s,actions:c,mutations:r};a["default"].use(o["a"]);t["a"]=new o["a"].Store({modules:{control:i}})},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="4678"},"4ec3":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("d3b7"),n("c975");var a=n("bc3a"),o=n.n(a);n("4360");o.a.defaults.timeout=5e5,o.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(err)})),o.a.interceptors.response.use((function(e){return e}),(function(e){if(e&&e.response)switch(e.response.status){case 400:console.log("错误请求");break;case 401:console.log("未授权，请重新登录");break;case 403:console.log("拒绝访问");break;case 404:console.log("请求错误,未找到该资源");break;case 405:console.log("请求方法未允许");break;case 408:console.log("请求超时");break;case 500:console.log("服务器端出错");break;case 501:console.log("网络未实现");break;case 502:console.log("网络错误");break;case 503:console.log("服务不可用");break;case 504:console.log("网络超时");break;case 505:console.log("http版本不支持该请求");break;default:console.log("连接错误".concat(e.response.status))}else console.log("连接到服务器失败");return Promise.resolve(e.response)}));function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,a){o.a.get(e,{params:t}).then((function(e){n(e)}))["catch"]((function(e){a(e)}))}))}},"51c6":function(e,t,n){"use strict";n("bb34")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-locale-provider",[n("div",{attrs:{id:"app"}},[n("COMNAV",{directives:[{name:"show",rawName:"v-show",value:e.navistatus,expression:"navistatus"}]}),n("router-view"),n("div",[n("a-back-top")],1)],1)])},s=[],c=n("1da1"),r=n("5530"),i=(n("96cf"),n("2f62")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"com-nav"},[n("b-navbar",{attrs:{toggleable:"xl"}},[n("div",{staticClass:"container"},[n("b-navbar-brand",{staticClass:"com-nav-item-left",on:{click:e.jumptoHome}}),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{staticClass:"com-nav-item-right",attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[e._l(e.naidata,(function(t,a){return n("b-nav-item",{key:t.title,staticClass:"com-nav-right-item",attrs:{href:"#"},on:{click:function(n){return e.jumpTo(t,a)}}},[e._v(e._s(t.title))])})),n("b-nav-item",{directives:[{name:"show",rawName:"v-show",value:e.naidata.length,expression:"naidata.length"}],staticClass:"com-nav-right-item down",attrs:{href:"#"},on:{click:e.jumpToLink}},[n("b-navbar-brand",{staticClass:"com-nav-item-right-down"})],1)],2)],1)],1)])],1)},f=[],d=n("9274"),l={data:function(){return{current:["mail"],menuList:[]}},mixins:[d["a"]],computed:Object(r["a"])({},Object(i["c"])({naidata:function(e){return e.control.navidata}})),mounted:function(){},methods:{jumptoHome:function(){this.$router.push({path:"/"})},setHeight:function(e){return 1==e?document.getElementById("game".concat(e)).offsetHeight:2==e?document.getElementById("game1").offsetHeight+document.getElementById("game1-1").offsetHeight+document.getElementById("game1-2").offsetHeight+document.getElementById("game1-3").offsetHeight+document.getElementById("game".concat(e)).offsetHeight:3==e?document.getElementById("game1").offsetHeight+document.getElementById("game1-1").offsetHeight+document.getElementById("game1-2").offsetHeight+document.getElementById("game1-3").offsetHeight+document.getElementById("game2").offsetHeight+document.getElementById("game".concat(e)).offsetHeight:4==e?document.getElementById("game1").offsetHeight+document.getElementById("game1-1").offsetHeight+document.getElementById("game1-2").offsetHeight+document.getElementById("game1-3").offsetHeight+document.getElementById("game2").offsetHeight+document.getElementById("game3").offsetHeight+document.getElementById("game".concat(e)).offsetHeight:void 0},jumpToLink:function(){this.$router.push({path:"/sdk"})},jumpTo:function(e,t){this.isJump(e,t)}}},m=l,b=(n("51c6"),n("2877")),h=Object(b["a"])(m,u,f,!1,null,"189d0bf6",null),g=h.exports,j=n("a358"),p={components:{COMNAV:g},computed:Object(r["a"])({},Object(i["c"])({navistatus:function(e){return e.control.hideNave}})),data:function(){return{}},mounted:function(){this.getAllData()},watch:{$route:function(e,t){"/ad"!=e.path&&"/adinfo"!=e.path&&"/faq"!=e.path&&"/faqinfo"!=e.path&&"/gamemobile"!=e.path?this.setHideNav(!0):this.setHideNav(!1)}},methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["setNaviData","setHideNav","setNavifootdata"])),{},{getAllData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,o,s,c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(j["a"])({lang:e.lang});case 2:n=t.sent,a=n.data,o=a.code,s=a.data,c=s.topNavList,r=s.bottomNavList,a.msg,1==o&&(e.setNaviData(c),e.setNavifootdata(r));case 5:case"end":return t.stop()}}),t)})))()}})},v=p,k=(n("5c0b"),Object(b["a"])(v,o,s,!1,null,null,null)),y=k.exports,w=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));a["default"].use(w["a"]);var N=[{path:"/",name:"Home",component:function(e){return Promise.all([n.e("chunk-550550f6"),n.e("chunk-55a84f3d"),n.e("chunk-5320e42c")]).then(function(){var t=[n("16c0")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/game",name:"Game",component:function(e){return Promise.all([n.e("chunk-550550f6"),n.e("chunk-55a84f3d"),n.e("chunk-33b2b28e")]).then(function(){var t=[n("daca")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/gamemobile",name:"GameMobile",component:function(){return Promise.all([n.e("chunk-550550f6"),n.e("chunk-55a84f3d"),n.e("chunk-5744694e")]).then(n.bind(null,"fc67"))}},{path:"/ad",name:"Ad",component:function(){return Promise.all([n.e("chunk-550550f6"),n.e("chunk-2d375571")]).then(n.bind(null,"7918"))}},{path:"/adinfo",name:"ADInfo",component:function(){return Promise.all([n.e("chunk-550550f6"),n.e("chunk-71b2cff8")]).then(n.bind(null,"ded3"))}},{path:"/faq",name:"FAQ",component:function(){return Promise.all([n.e("chunk-550550f6"),n.e("chunk-a0ef5f64")]).then(n.bind(null,"7739"))}},{path:"/faqinfo",name:"FAQInfo",component:function(){return Promise.all([n.e("chunk-550550f6"),n.e("chunk-97cdbeb8")]).then(n.bind(null,"8b44"))}},{path:"/sdk",name:"SDK",component:function(e){return Promise.all([n.e("chunk-55a84f3d"),n.e("chunk-141d930d")]).then(function(){var t=[n("3fcf")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"*",redirect:"/",name:"notFound",hidden:!0}],E=new w["a"]({base:"",routes:N,scrollBehavior:function(e,t,n){return{x:0,y:0}}}),O=E,H=n("4360"),I=n("f23d"),z=(n("202f"),n("f9e3"),n("2dd8"),n("7212")),B=n.n(z),x=(n("14d3"),n("6db4")),S=n.n(x),P=(n("a7a3"),n("5f5b")),C=n("b1e0");a["default"].use(B.a),a["default"].use(P["a"]),a["default"].use(S.a),a["default"].use(C["a"]),a["default"].use(I["a"]),a["default"].config.productionTip=!1,new a["default"]({router:O,store:H["a"],render:function(e){return e(y)}}).$mount("#app"),O.afterEach((function(e,t,n){window.scrollTo(0,0)}))},"5c0b":function(e,t,n){"use strict";n("6605")},6605:function(e,t,n){},9274:function(e,t,n){"use strict";t["a"]={data:function(){return{}},methods:{isJump:function(e,t){var n=this.$createElement;e.path?"noopen"==e.path?this.$notification.open({message:"Tips",description:"Be Coming Soon",icon:n("a-icon",{attrs:{type:"smile"},style:"color: #108ee9"})}):window.location.href=e.path:"games"==e.code.toLowerCase()?this.$router.push({path:"/game"}):"/"!=this.$route.path?this.$router.push({path:"/"}):0==t?window.scrollTo(0,0):window.location.href="#".concat(e.code.toLowerCase())}}}},a358:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("4ec3"),o=n("4360"),s=o["a"].state.control.lang,c=function(e){return console.log(e),Object(a["a"])("/api/home/index/lang/".concat(s))}},bb34:function(e,t,n){}});