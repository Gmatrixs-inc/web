(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71b2cff8"],{"34c3":function(t,e,n){},"5a60":function(t,e,n){t.exports=n.p+"static/img/tipslogo.d4d054a2.png"},8447:function(t,e,n){"use strict";n("e2da")},9028:function(t,e,n){"use strict";n("34c3")},"99af":function(t,e,n){"use strict";var a=n("23e7"),i=n("da84"),c=n("d039"),r=n("e8b5"),o=n("861d"),s=n("7b0b"),l=n("07fa"),u=n("8418"),d=n("65f0"),f=n("1dde"),p=n("b622"),g=n("2d00"),v=p("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",b=i.TypeError,w=g>=51||!c((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),C=f("concat"),x=function(t){if(!o(t))return!1;var e=t[v];return void 0!==e?!!e:r(t)},_=!w||!C;a({target:"Array",proto:!0,forced:_},{concat:function(t){var e,n,a,i,c,r=s(this),o=d(r,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(c=-1===e?r:arguments[e],x(c)){if(i=l(c),f+i>m)throw b(h);for(n=0;n<i;n++,f++)n in c&&u(o,f,c[n])}else{if(f>=m)throw b(h);u(o,f++,c)}return o.length=f,o}})},a7ce:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ad"},[a("div",{staticClass:"adbox"},[a("div",{staticClass:"jump",on:{click:t.jumpLink}},[a("img",{staticClass:"adimg",attrs:{src:n("5a60"),alt:""}})]),a("div",{staticClass:"content"},[t._t("default")],2)])])},i=[],c={name:"AD",components:{},mounted:function(){this.$nextTick((function(){}))},methods:{jumpLink:function(){this.$router.push({path:"/"})}},updated:function(){}},r=c,o=(n("8447"),n("2877")),s=Object(o["a"])(r,a,i,!1,null,"d25a6216",null);e["a"]=s.exports},ded3:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ad-info"},[n("COMADBOX",[n("div",{staticClass:"container"},[n("div",{staticClass:"navb"},[n("a-breadcrumb",{attrs:{separator:">"}},[n("a-breadcrumb-item",[n("router-link",{attrs:{to:"/ad"}},[t._v(" Latest News ")])],1),n("a-breadcrumb-item",[t._v(" Application Center ")])],1)],1),n("div",{staticStyle:{"padding-top":"4vh"}},[n("a-spin",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),n("a-empty",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&!t.list.length,expression:"!loading&&!list.length"}]})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.list.length,expression:"list.length"}],staticClass:"scrollWrap-box flex justify-content"},[n("BetterScroll",{ref:"scroll1",staticClass:"recommend_wrapper scrollwrap-list"},[n("div",{staticClass:"content-box"},t._l(t.list,(function(e,a){return n("div",{key:e.id,staticClass:"content-box-item",class:{active:t.active==e.id},on:{click:function(n){return t.getAdInfoContent(e.id)}}},[t._v(" "+t._s(e.title)+" ")])})),0)]),n("BetterScroll",{ref:"scroll",staticClass:"recommend_wrapper scrollwrap-content"},[n("div",{staticClass:"scrollwrap-content"},[n("h2",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.content.title))]),n("h6",{staticStyle:{color:"#6f6f6f","font-weight":"normal"}},[t._v(" "+t._s(t.content.ctime)+" ")]),n("div",{staticClass:"scrollContent"},[n("h5",{domProps:{innerHTML:t._s(t.content.content)}})])])])],1)])])],1)},i=[],c=n("1da1"),r=(n("4795"),n("96cf"),n("b75d")),o=n("a7ce"),s=n("d54c"),l=n("ff02"),u={name:"ADInfo",components:{COMADBOX:o["a"],SELECTION6:r["a"],BetterScroll:s["a"]},data:function(){return{list:[],content:"",total:0,pagesize:12,pagenum:1,loading:!0,lang:"cn",active:null}},mounted:function(){var t=this;this.$nextTick((function(){t.getAdInfoData()}))},methods:{getAdInfoData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,a,i,c,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,Object(l["a"])({lang:t.lang,id:t.$route.query.id});case 3:n=e.sent,a=n.data,i=a.code,c=a.data,c.info,r=c.list,a.msg,1==i&&(t.active=t.$route.query.id,t.getAdInfoContent(t.$route.query.id),t.list=r),t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()},getAdInfoContent:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,i,c,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.active=t,n.next=3,Object(l["a"])({lang:e.lang,id:t});case 3:a=n.sent,i=a.data,c=i.code,r=i.data,o=r.info,r.list,i.msg,1==c&&(e.content=o,setTimeout((function(){e.$refs.scroll.refresh(),e.$refs.scroll1.refresh()}),1e3));case 6:case"end":return n.stop()}}),n)})))()}},updated:function(){this.$refs.scroll.refresh(),this.$refs.scroll1.refresh()}},d=u,f=(n("9028"),n("2877")),p=Object(f["a"])(d,a,i,!1,null,"d09fed0a",null);e["default"]=p.exports},e2da:function(t,e,n){},ff02:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return l}));n("99af");var a=n("4ec3"),i=n("4360"),c=i["a"].state.control.lang,r=function(t){return Object(a["a"])("/api/article/index/lang/".concat(c,"/page/").concat(t.pagenum,"/pagesize/").concat(t.pagesize))},o=function(t){return Object(a["a"])("/api/article/content/lang/".concat(c,"/id/").concat(t.id))},s=function(t){return Object(a["a"])("/api/faq/index/lang/".concat(c,"/page/").concat(t.pagenum,"/pagesize/").concat(t.pagesize))},l=function(t){return Object(a["a"])("/api/faq/content/lang/".concat(c,"/id/").concat(t.id))}}}]);