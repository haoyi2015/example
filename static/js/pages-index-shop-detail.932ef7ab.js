(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-shop-detail"],{"5bbd":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 公用投影 */.yw-box-shadow[data-v-57d92712]{background:#fff;box-shadow:0 %?-20?% %?40?% 0 rgba(0,0,0,.03),0 %?20?% %?40?% 0 rgba(0,0,0,.03);border-radius:%?16?%}\n/* 公用按钮 */.yw-bnt-box-bg-color[data-v-57d92712]{background-image:-webkit-linear-gradient(left,#fc6000,#ffb36a);background-image:linear-gradient(90deg,#fc6000,#ffb36a)}\n/* 公用分类按钮/标签 标签高亮*/.yw-tag-box-bg-color[data-v-57d92712]{background-image:linear-gradient(90deg,#fc6000,#ffb36a);background-image:-webkit-linear-gradient(left,#fc6000,#ffb36a)}.yw-hrb[data-v-57d92712]{height:%?1?%;background-color:#eee;margin:0 %?20?% 0 %?20?%}\n/*字体颜色 颜色值 333333 */\n/*字体颜色 颜色值 ffffff */\n/*字体颜色 颜色值 999999 */\n/*字体颜色 颜色值 999999 */\n/*字体颜色 颜色值 FC6000 */\n/*字体颜色 颜色值 666666 */\n/*字体颜色 颜色值 F8F8F8 */\n/*字体颜色 颜色值 EEEEEE */\n/*字体颜色 颜色值 FF0000 */\n/*字体颜色 颜色值 FFFADA */\n/*字体颜色 颜色值 6B6B6B */\n/*字体颜色 颜色值 67D762 */\n/* 搜索 */.yw-ser-input[data-v-57d92712]{position:relative;height:%?60?%}.yw-ser-input[data-v-57d92712]:after{content:"";position:absolute;top:%?14?%;left:%?52?%;width:%?30?%;height:%?30?%;display:block;background-image:url(/static/eee6.png);background-repeat:no-repeat;background-size:100%}.yw-ser-input .uni-input-input[data-v-57d92712]{font-family:PingFangSC-Medium;font-size:%?24?%;color:#999;letter-spacing:0;text-align:left;width:%?518?%;height:%?60?%;padding-left:%?100?%}.input-placeholder[data-v-57d92712]{font-size:%?24?%;color:#999;margin:%?0?% 0 %?0?% %?100?%}.weui-actionsheet[data-v-57d92712]{position:fixed;left:0;bottom:0;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:5000;width:100%;background:#fff;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;transition:transform .3s,-webkit-transform .3s;overflow:hidden}.weui-actionsheet_toggle[data-v-57d92712]{-webkit-transform:translate(0);transform:translate(0)}.weui-media-box_appmsg[data-v-57d92712]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%;background:#fff;box-shadow:0 %?-20?% %?40?% 0 rgba(0,0,0,.03),0 10px 20px 0 rgba(0,0,0,.03);border-radius:%?16?%;margin-left:%?30?%;margin-right:%?30?%;padding-top:%?36?%;padding-bottom:%?36?%}.weui-media-box__hd[data-v-57d92712]{margin-right:%?40?%;width:%?80?%;height:%?80?%;line-height:%?80?%;text-align:center}.weui-media-box__thumb[data-v-57d92712]{width:100%;max-height:100%;vertical-align:top;border-radius:%?12?%}.weui-media-box__bd[data-v-57d92712]{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0;padding-left:%?20?%}.weui-media-box__title[data-v-57d92712]{font-family:PingFangSC-Semibold;font-size:%?28?%;color:#333;letter-spacing:.5px;color:var(--weui-FG-0);width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;word-wrap:break-word;word-break:break-all;font-weight:700}.weui-media-box__desc[data-v-57d92712]{color:var(--weui-FG-2);overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-family:PingFangSC-Regular;font-size:%?24?%;color:#999;letter-spacing:.43px;margin-top:%?12?%}\n/* 通用按钮 */.yw-bnt-big[data-v-57d92712]{font-family:PingFangSC-Semibold;font-size:%?32?%;color:#fff;letter-spacing:.57px;text-align:center;display:block;text-decoration:none;padding:%?20?% 0;margin:0 %?30?%;border-radius:%?50?%}.yw-tag-span-active[data-v-57d92712]{border:%?2?% solid #fc6000;border-radius:%?16?%;color:#fc6000;font-family:PingFangSC-Regular;font-size:%?18?%;letter-spacing:0;padding:0 %?6?%}.yw-text-ellipsis[data-v-57d92712]{width:%?348?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;word-wrap:break-word;word-break:break-all}.t-width[data-v-57d92712]{width:%?272?%;display:inline-block}.yw-no-data[data-v-57d92712]{font-family:PingFangSC-Regular;font-size:%?24?%;color:#ccc;letter-spacing:0;margin:%?60?% 0;text-align:center}.heds-title[data-v-57d92712]{font-family:PingFangSC-Semibold;font-size:%?48?%;color:#333;letter-spacing:.86px;margin-left:%?40?%;position:relative;padding-bottom:%?40?%;padding-top:%?40?%}.heds-title .arow[data-v-57d92712]{margin-left:%?20?%}.heds-title .arow .imgs[data-v-57d92712]{width:%?16?%;height:%?32?%}.heds-title span[data-v-57d92712]{width:%?30?%;height:%?30?%;position:absolute;top:50%;right:%?50?%;margin-top:%?-15?%;background-image:url(/static/ccc4.png);background-size:100%;background-repeat:no-repeat}.hed-fixed[data-v-57d92712]{position:fixed;top:0;left:0;width:100%;background:#fff;z-index:999}.hed-fixed-cont[data-v-57d92712]{padding-top:%?172?%}.screen-box.stickyClass[data-v-57d92712], .nav-list.stickyClass[data-v-57d92712], .yw-stickyClass[data-v-57d92712]{position:-webkit-sticky;position:sticky;top:0;z-index:999;background-color:#fff;padding:%?18?% 0}.nav-list.stickyClass[data-v-57d92712]{padding-bottom:%?32?%;padding-top:%?10?%}.yw-wm-nav-list[data-v-57d92712]{width:100%;margin-top:%?40?%}.yw-wm-nav-list a[data-v-57d92712]{color:#666}.yw-wm-nav-list span[data-v-57d92712]{font-family:PingFangSC-Medium;font-size:%?32?%;color:#666;letter-spacing:.57px;position:relative}.yw-wm-nav-list span.active[data-v-57d92712]::after{content:"";background-image:-webkit-linear-gradient(left,#fc6000,#ffb36a);background-image:linear-gradient(90deg,#fc6000,#ffb36a);border-radius:%?8?%;width:%?64?%;height:%?8?%;display:block;position:absolute;left:50%;bottom:%?-20?%;margin-left:%?-32?%}.yw-wm-nav-list .span-one[data-v-57d92712]{margin-left:%?120?%}.yw-wm-nav-list .span-two[data-v-57d92712]{margin-left:%?160?%;margin-right:%?160?%}.yw-wm-nav-list .span-two i[data-v-57d92712]{font-family:ArialMT;font-size:10px;color:#999;letter-spacing:.36px;font-style:normal;display:inline-block;position:absolute;bottom:0;margin-left:%?4?%}.move-enter-active[data-v-57d92712], .move-leave-active[data-v-57d92712]{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:all .4s;transition:all .4s}.move-enter-active i[data-v-57d92712], .move-leave-active i[data-v-57d92712]{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transition:all .4s;transition:all .4s}.move-enter[data-v-57d92712], .move-leave-to[data-v-57d92712]{opacity:0;-webkit-transform:translate3d(24px,0,0);transform:translate3d(24px,0,0);-webkit-transition:all .4s;transition:all .4s}.move-enter i[data-v-57d92712], .move-leave-to i[data-v-57d92712]{-webkit-transform:rotate(1turn);transform:rotate(1turn);-webkit-transition:all .4s;transition:all .4s}.nav-list[data-v-57d92712]{width:100%;margin-top:%?40?%;padding:%?26?% 0}.nav-list span[data-v-57d92712]{font-family:PingFangSC-Medium;font-size:%?32?%;color:#666;letter-spacing:.57px;position:relative}.nav-list span.active[data-v-57d92712]::after{content:"";background-image:-webkit-linear-gradient(left,#fc6000,#ffb36a);background-image:linear-gradient(90deg,#fc6000,#ffb36a);border-radius:%?8?%;width:%?64?%;height:%?8?%;display:block;position:absolute;left:50%;bottom:%?-20?%;margin-left:%?-32?%}.nav-list .span-one[data-v-57d92712]{margin-left:%?220?%}.nav-list .span-two[data-v-57d92712]{margin-left:%?160?%}.nav-list .span-two i[data-v-57d92712]{font-family:ArialMT;font-size:10px;color:#999;letter-spacing:.36px;font-style:normal;display:inline-block;position:absolute;bottom:0;margin-left:%?4?%}.hed-title[data-v-57d92712]{font-family:PingFangSC-Semibold;font-size:%?36?%;color:#333;letter-spacing:0;padding-left:%?28?%;margin-top:%?50?%}.hed-title a[data-v-57d92712]{font-family:PingFangSC-Regular;font-size:%?24?%;color:#999;letter-spacing:.43px;float:right;margin-right:%?60?%}.hed-title a .a-imgs[data-v-57d92712]{width:%?12?%;height:%?22?%;vertical-align:middle;margin-left:%?20?%}.rec-list[data-v-57d92712]{margin-left:%?30?%;margin-top:%?40?%;overflow:auto}.rec-list .box[data-v-57d92712]{min-width:100%;overflow:auto;width:700px}.rec-list .box .list-box[data-v-57d92712]{display:inline-block;margin-right:%?40?%}.rec-list .box .imgs-box[data-v-57d92712]{width:%?168?%;height:%?168?%;margin-right:%?28?%;position:relative}.rec-list .box .imgs-box .paim[data-v-57d92712]{border-radius:%?14?% 0 %?14?% 0;width:%?84?%;font-family:PingFangSC-Semibold;font-size:%?24?%;color:#fff;letter-spacing:0;position:absolute;top:0;left:0;text-align:center;padding:%?6?% 0}.rec-list .box .imgs-box .imgs[data-v-57d92712]{width:%?168?%;height:%?168?%;border-radius:%?12?%}.rec-list .box .dec p[data-v-57d92712]{font-family:PingFangSC-Semibold;font-size:%?32?%;color:#292929;letter-spacing:0;line-height:26px;font-weight:700}.rec-list .box .dec span[data-v-57d92712]{font-family:PingFangSC-Medium;font-size:%?28?%;color:#757575;letter-spacing:.5px;line-height:24px;padding-top:%?10?%}.rec-list .box .dec i[data-v-57d92712]{display:block;font-family:PingFangSC-Regular;font-size:%?24?%;color:#fc6000;letter-spacing:.43px;line-height:24px;font-style:normal;padding-top:%?10?%}.discount[data-v-57d92712]{margin:0 %?28?%;margin-top:%?60?%;background:#fff;box-shadow:0 -10px 20px 0 rgba(0,0,0,.03),0 10px 20px 0 rgba(0,0,0,.03);border-radius:%?16?%}.discount .title[data-v-57d92712]{text-align:center;padding-top:%?36?%}.discount .title span[data-v-57d92712]{font-family:PingFangSC-Medium;font-size:%?36?%;color:#fc6000;letter-spacing:.64px;line-height:25px}.discount .zk-list[data-v-57d92712]{margin:%?40?% %?32?% 0 %?32?%}.discount .zk-list .t-nav[data-v-57d92712]{background:rgba(252,96,0,.03);height:%?120?%}.discount .zk-list .t-nav span[data-v-57d92712]{display:inline-block;width:25%;font-family:PingFangSC-Medium;font-size:%?32?%;color:#333;text-align:center}.discount .zk-list .t-nav .one[data-v-57d92712]{width:%?120?%;padding-top:%?20?%;position:relative}.discount .zk-list .t-nav .one i[data-v-57d92712]{text-align:right;display:block;font-size:%?24?%}.discount .zk-list .t-nav .one em[data-v-57d92712]{text-align:left;font-size:%?24?%;top:%?8?%;display:inline-block;position:relative;left:%?-20?%}.discount .zk-list .t-nav .one[data-v-57d92712]:after{content:"";height:%?2?%;width:%?160?%;position:absolute;left:%?-19?%;top:%?60?%;background-color:#fc6000;-webkit-transform:rotate(45deg);display:block}.discount .zk-list .t-list-cont[data-v-57d92712]{padding:%?30?% 0}.discount .zk-list .t-list-cont span[data-v-57d92712]{display:inline-block;width:25%;font-family:PingFangSC-Medium;font-size:%?32?%;color:#333;text-align:center}.discount .zk-list .t-list-cont span.active[data-v-57d92712]{color:#fc6000}.discount .zk-list .t-list-cont.active[data-v-57d92712]{background:rgba(252,96,0,.03)}.tips-banner p[data-v-57d92712]{font-family:PingFangSC-Medium;font-size:%?28?%;color:#999;letter-spacing:.5px;padding:%?60?% 0 %?40?% 0;text-align:center}.tips-banner .dec[data-v-57d92712]{margin:0 %?30?%}.tips-banner .dec .imgs[data-v-57d92712]{width:100%;height:%?240?%;border-radius:%?12?%}.dec-cont[data-v-57d92712]{font-family:PingFangSC-Medium;font-size:%?28?%;color:#999;letter-spacing:0;line-height:24px;margin:%?40?% %?30?% 0 %?30?%}',""]),t.exports=a},"8a80":function(t,a,i){"use strict";var e,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("shop-header"),t._m(0),e("div",{staticClass:"hed-title"},[t._v("推荐菜品"),e("a",{attrs:{href:"#/pages/index/shop-recommend"}},[t._v("更多"),e("v-uni-image",{staticClass:"a-imgs",attrs:{src:i("c754"),mode:""}})],1)]),e("div",{staticClass:"rec-list"},[e("div",{staticClass:"box",style:t.width},t._l(6,(function(a){return e("div",{ref:"listDom",refInFor:!0,staticClass:"list-box"},[e("div",{staticClass:"weui-flex"},[e("div",{staticClass:"imgs-box"},[e("v-uni-image",{staticClass:"imgs",attrs:{src:i("5018"),mode:""}}),e("span",{staticClass:"paim yw-bnt-box-bg-color"},[t._v("TOP"+t._s(a))])],1),t._m(1,!0)])])})),0)]),e("div",{staticClass:"discount"},[t._m(2),e("div",{staticClass:"zk-list"},[t._m(3),t._l(6,(function(a){return e("div",{staticClass:"t-list-cont"},[e("span",[t._v(t._s(a)+"人")]),e("span",{staticClass:"active"},[t._v(t._s(a+1)+"折")]),e("span",{staticClass:"active"},[t._v("5折")]),e("span",{staticClass:"active"},[t._v(t._s(a+3)+"折")])])}))],2)]),e("div",{staticClass:"tips-banner"},[e("p",[t._v("1.2m以下儿童不计入人数，需成人1v1陪同")]),e("div",{staticClass:"dec"},[e("v-uni-image",{staticClass:"imgs",attrs:{src:i("5018"),mode:""}})],1)]),e("div",{staticClass:"hed-title"},[t._v("郑重承诺")]),t._m(4),e("div",{staticClass:"hed-title"},[t._v("经营理念")]),t._m(5),e("br")],1)},o=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"nav-list stickyClass"},[i("span",{staticClass:"span-one active"},[i("a",{attrs:{href:"#/pages/index/shop-detail"}},[t._v("店铺")])]),i("span",{staticClass:"span-two"},[i("a",{attrs:{href:"#/pages/index/shop-comment"}},[t._v("评价"),i("i",[t._v("666")])])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"dec"},[i("p",[t._v("三文鱼刺身")]),i("span",[t._v("￥68")]),i("i",[t._v("会员:5折")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"title"},[t._v("全店最低折扣"),i("span",[t._v("5折")]),t._v("起")])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"t-nav"},[i("span",{staticClass:"one"},[i("i",[t._v("消费")]),i("em",[t._v("会员")])]),i("span",[t._v("1人")]),i("span",[t._v("2-3人")]),i("span",[t._v("4+人")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"dec-cont"},[t._v("各商家折扣率长期固定不变动，（餐厅保持盈亏平衡即可）"),i("br"),t._v("只要是会员，一直按此折扣价格计算"),i("br"),t._v("非先提价再折扣，（明码实价，不虚标原价）"),i("br"),t._v("非短期促销行为，长期不靠食材差价赚钱，盈亏平衡即可"),i("br"),t._v("非单菜品折扣， 按总消费金额给于折扣，"),i("br"),t._v("周末节假日均可享受，假日不涨价或恢复原价"),i("br"),t._v("全国可用，不限地区城市")])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"dec-cont"},[t._v("把客户当朋友，会员就是自己人"),i("br"),t._v("不赚你的钱，仅收成本价")])}];i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}))},"91e7":function(t,a,i){var e=i("5bbd");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("7e1fb694",e,!0,{sourceMap:!1,shadowMode:!1})},"93c1":function(t,a,i){"use strict";i.r(a);var e=i("8a80"),n=i("b848");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("e62e");var s,d=i("f0c5"),r=Object(d["a"])(n["default"],e["b"],e["c"],!1,null,"57d92712",null,!1,e["a"],s);a["default"]=r.exports},b848:function(t,a,i){"use strict";i.r(a);var e=i("fa02"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},c754:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWCAYAAAD0OH0aAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAFgAAAAA5XHV+AAABh0lEQVQ4Ea2SMUvDUBDHm1QRdLGDVcQqiKMIaTsp0kU3RaG46dAPIP0ADoI4Cjq5ODq5OClUXRQtODRpTamDmzg7B9LY+ruQlNY0rYgHl/fe3f/37t57iUT+YrquF/GT37CqJ/poNpt5oMN+kAvE4/GcoiiPQHulUinfC3KBRCJhIV4HesGPqbQdBintiVqtNmFZ1hOxGXwznU5ft+dl3gFIwDTNWdu2BRqNRqOrmqYVJe5bAJAELS0wPHiiTCqVMr15xL8lf+2OIlBVdY1zDeEFqeoLugKS9FrZYjpGi7fVanVc4qGAJOXQ3FoOl3Nd9gVEgA3Slpz1SxY9K5TL5Q3EZ+jeqJIVoOstScIwjEyj0Sgg/MSXksnkeyhQqVQ0x3HuETjc1jLiVxGLBSrwBnPE5bFG8BWu+JmxZR1noI1JMnf0HWPM/hQL1QJ4nBg93xCbpucdxDIPmAvwSw/X6/UrsvPsvov4IqD0Ai7AjucIF4nt81inYWKJD8gH8RTQETsfyPpf7RunbpM+VrPU8QAAAABJRU5ErkJggg=="},e62e:function(t,a,i){"use strict";var e=i("91e7"),n=i.n(e);n.a},fa02:function(t,a,i){"use strict";var e=i("ee27");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("8227")),o={components:{ShopHeader:n.default},data:function(){return{title:"壹味会员",searchBarFixed:!1,width:""}},onLoad:function(){},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,a=document.querySelector("#searchBar").offsetTop;this.searchBarFixed=t>a}},mounted:function(){this.$nextTick((function(){console.log(this.$refs.listDom[0].clientWidth);var t=this.$refs.listDom[0],a=(t.clientWidth+t.offsetLeft+6)*this.$refs.listDom.length;console.log(this.$refs),this.width="width:".concat(a,"px")}))}};a.default=o}}]);