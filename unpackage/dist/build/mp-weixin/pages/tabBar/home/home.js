(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/home/home"],{"155d":function(t,n,o){"use strict";o.r(n);var e=o("9c0d"),i=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,function(){return e[t]})}(a);n["default"]=i.a},"2ef6":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return i})},"6b80":function(t,n,o){"use strict";var e=o("d045"),i=o.n(e);i.a},9748:function(t,n,o){"use strict";(function(t){o("8211"),o("921b");e(o("66fd"));var n=e(o("d9f5"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])},"9c0d":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=function(){return o.e("components/pageHeader").then(o.bind(null,"6411"))},i={data:function(){return{swiperList:[],categoryList:[],promotion:[],goodsList:[],filterby:"all",page:1,size:6,loadingText:"正在加载....",currentSwiper:0}},components:{pageHeader:e},onLoad:function(){this.initData(),this.loadData()},methods:{handleGoods:function(n){t.navigateTo({url:"../../goods/goods?goodsInfo="+JSON.stringify(n)})},handlePromotion:function(n){t.showToast({title:n.title,icon:"none"})},handleCategory:function(n){t.navigateTo({url:"../../goods/goodsList?name="+n.name})},initData:function(){var t=this;this.request({url:"https://www.wudongming.top/uni/mall_list",success:function(n){t.swiperList=n.data.swiperList,t.categoryList=n.data.categoryList,t.promotion=n.data.promotion}})},swiperChange:function(t){this.currentSwiper=t.detail.current},loadData:function(){var t=this;this.request({url:"https://www.wudongming.top/uni/type_list/0/".concat(this.page,"/").concat(this.size),success:function(n){n.data.length>0?n.data.forEach(function(n){t.goodsList.push(n)}):t.loadingText="到底了"}})},onReachBottom:function(){this.page++,this.loadData()}}};n.default=i}).call(this,o("543d")["default"])},d045:function(t,n,o){},d9f5:function(t,n,o){"use strict";o.r(n);var e=o("2ef6"),i=o("155d");for(var a in i)"default"!==a&&function(t){o.d(n,t,function(){return i[t]})}(a);o("6b80");var u=o("2877"),s=Object(u["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=s.exports}},[["9748","common/runtime","common/vendor"]]]);