(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5744694e"],{"327c":function(t,e,n){},"89cb":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a}));n("99af");var i=n("4ec3"),o=n("4360"),r=o["a"].state.control.lang,s=function(t){return Object(i["a"])("/api/game/banner")},a=function(t){return Object(i["a"])("/api/game/index/lang/".concat(r,"/page/").concat(t.pagenum,"/pagesize/").concat(t.pagesize))}},"99af":function(t,e,n){"use strict";var i=n("23e7"),o=n("da84"),r=n("d039"),s=n("e8b5"),a=n("861d"),l=n("7b0b"),c=n("07fa"),u=n("8418"),h=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),v=f("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",y=o.TypeError,b=p>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),w=d("concat"),C=function(t){if(!a(t))return!1;var e=t[v];return void 0!==e?!!e:s(t)},E=!b||!w;i({target:"Array",proto:!0,forced:E},{concat:function(t){var e,n,i,o,r,s=l(this),a=h(s,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?s:arguments[e],C(r)){if(o=c(r),d+o>m)throw y(g);for(n=0;n<o;n++,d++)n in r&&u(a,d,r[n])}else{if(d>=m)throw y(g);u(a,d++,r)}return a.length=d,a}})},bc1b:function(t,e){(function(){var t,e,n,i,o,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var o;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,e,n,i)):null!=document.createEventObject?(o=document.createEventObject(),o.eventType=t):o.eventName=t,o},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o,r;for(r=this.keys,e=i=0,o=r.length;i<o;e=++i)if(n=r[e],n===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r,s;for(s=this.keys,n=o=0,r=s.length;o<r;n=++o)if(i=s[n],i===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!==typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!==typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,(function(t,e){return e.toUpperCase()})),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var e,n,i,o;if(this.stopped=!1,this.boxes=function(){var t,n,i,o;for(i=this.element.querySelectorAll("."+this.config.boxClass),o=[],t=0,n=i.length;t<n;t++)e=i[t],o.push(e);return o}.call(this),this.all=function(){var t,n,i,o;for(i=this.boxes,o=[],t=0,n=i.length;t<n;t++)e=i[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(o=this.boxes,n=0,i=o.length;n<i;n++)e=o[n],this.applyStyle(e,!0);if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new t(function(t){return function(e){var n,i,o,r,s;for(s=[],n=0,i=e.length;n<i;n++)r=e[n],s.push(function(){var t,e,n,i;for(n=r.addedNodes||[],i=[],t=0,e=n.length;t<e;t++)o=n[t],i.push(this.doSync(o));return i}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0})},o.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},o.prototype.sync=function(e){if(t.notSupported)return this.doSync(this.element)},o.prototype.doSync=function(t){var e,n,i,o,r;if(null==t&&(t=this.element),1===t.nodeType){for(t=t.parentNode||t,o=t.querySelectorAll("."+this.config.boxClass),r=[],n=0,i=o.length;n<i;n++)e=o[n],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},o.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},o.prototype.applyStyle=function(t,e){var n,i,o;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,i,n,o)}}(this))},o.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),o.prototype.resetStyle=function(){var t,e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;e<n;e++)t=i[e],o.push(t.style.visibility="visible");return o},o.prototype.resetAnimation=function(t){var e;if(t.type.toLowerCase().indexOf("animationend")>=0)return e=t.target||t.srcElement,e.className=e.className.replace(this.config.animateClass,"").trim()},o.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(t,e){var n,i,o,r;for(n in i=[],e)o=e[n],t[""+n]=o,i.push(function(){var e,i,s,a;for(s=this.vendors,a=[],e=0,i=s.length;e<i;e++)r=s[e],a.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=o);return a}.call(this));return i},o.prototype.vendorCSS=function(t,e){var n,o,r,s,a,l;for(a=i(t),s=a.getPropertyCSSValue(e),r=this.vendors,n=0,o=r.length;n<o;n++)l=r[n],s=s||a.getPropertyCSSValue("-"+l+"-"+e);return s},o.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;e<n;e++)t=i[e],t&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),!this.boxes.length&&!this.config.live))return this.stop()},o.prototype.offsetTop=function(t){var e;while(void 0===t.offsetTop)t=t.parentNode;e=t.offsetTop;while(t=t.offsetParent)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,r=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,o=r+Math.min(this.element.clientHeight,this.util().innerHeight())-n,i=this.offsetTop(t),e=i+t.clientHeight,i<=o&&e>=r},o.prototype.util=function(){return null!=this._util?this._util:this._util=new e},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}).call(this)},fc67:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"zhao",staticClass:"mcomponent-game"},[n("router-link",{attrs:{tag:t.div,to:"/game"}},[n("div",{staticClass:"back container"},[n("a-icon",{attrs:{type:"left",size:"large"}}),n("span",[t._v("返回")])],1)]),n("div",{staticClass:"comm-bg"},[n("div",{staticClass:"content container flex h870px justify-content"},[n("div",{staticClass:"content-right1 wow slideInRight"},[n("BetterScroll",{ref:"scroll",staticClass:"recommend_wrapper",attrs:{data:t.disLists}},[n("div",[n("div",{staticClass:"item-content-scroll"},[n("div",{staticClass:"title"},[t._v(t._s(t.info.title))]),n("div",{staticClass:"item-content-info"},[n("div",{staticClass:"infotitle"},[t._v("Warm prompt:")]),n("div",{staticClass:"infotitle"},[t._v(" "+t._s(t.info.metering)+"("+t._s(t.info.recommend)+") ")])]),n("div",{staticClass:"tips flex wrap"},t._l(t.info.tags,(function(e,i){return n("div",{key:i,staticClass:"tips-text"},[t._v(" "+t._s(e)+" ")])})),0)]),n("div",{staticClass:"imgbox"},t._l(t.info.imgs,(function(t,e){return n("div",{key:e,staticClass:"imgbox-img",staticStyle:{"background-size":"cover"},style:{background:"url("+t+") no-repeat center",backgroundSize:"cover"}})})),0)])])],1)])]),n("div",[n("SELECTION10")],1)],1)},o=[],r=n("1da1"),s=(n("96cf"),n("4795"),n("b75d")),a=n("9605"),l=n("d54c"),c=n("89cb"),u=n("bc1b"),h={name:"Game",components:{SELECTION6:s["a"],SELECTION10:a["a"],BetterScroll:l["a"],lang:"cn"},data:function(){return{bannerList:[],list:[],info:{},lang:"en"}},mounted:function(){var t=this;this.$nextTick((function(){t.setdonghua(),t.getBannerInfo()}))},updated:function(){},methods:{getBannerInfo:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,i,o,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["b"])({lang:t.lang,pagesize:1e3,pagenum:1});case 2:n=e.sent,i=n.data,o=i.code,r=i.data.list,i.msg,s=t.$route.query.index,1==o&&r.length&&(t.info=r[s],setTimeout((function(){t.$refs.scroll.refresh()}),500));case 6:case"end":return e.stop()}}),e)})))()},setdonghua:function(){var t=new u["WOW"]({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0});t.init()}},activated:function(){this.$refs.scroll.refresh()}},d=h,f=(n("fd23"),n("2877")),p=Object(f["a"])(d,i,o,!1,null,"a10abd18",null);e["default"]=p.exports},fd23:function(t,e,n){"use strict";n("327c")}}]);