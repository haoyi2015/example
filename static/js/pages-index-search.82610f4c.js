(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-search"],{"51be":function(t,a,e){"use strict";var i=e("ee27");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("ae22")),o=i(e("81c2")),r=i(e("dbcb")),s={components:{FootBox:n.default,YwSlider:o.default},data:function(){return{title:"壹味会员",searchBarFixed:!1,dowMore:!1,typeTagActive:1,nFlag:1,sFlag:1,shopList:r.default.data.data}},onLoad:function(){},methods:{typeTag:function(t){this.dowMore=4==t,this.typeTagActive=t},saveSet:function(){this.dowMore=!1},nShopTag:function(t){this.nFlag=t},shopTag:function(t){this.sFlag=t},goodDetail:function(t){sessionStorage.setItem("shop",JSON.stringify(t))},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,a=document.querySelector("#searchBar").offsetTop;this.searchBarFixed=t>a}},mounted:function(){}};a.default=s},8265:function(t,a,e){"use strict";var i=e("ae82"),n=e.n(i);n.a},8983:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAkCAYAAACE7WrnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAJAAAAAC0yP9zAAADCklEQVRIDa2VX0hTcRTHt2VCtIIEH/xTbYUjkTTYbOVGjIgZOiKI6qlAyNVDkFEPQT0EBfUQFPgQPQURBC4lH2r9Q1aIttiiJ1/0wQeZIAWWrZZrW58zf3dsTu1e7cBvv3N/95zPPed7f/tdk+k/2bq1cFwuV29tbe22RCIRN68W5HQ675F7gZFjBFdVEZA7JF9kiJmxL5YFX/9va2vrbaIvaRlAHgcCgW5DraHJzVwud7UI8sRut58KhUIZ3RUBuV4MARbSIALWVRGaXCP2hiSI0c6A1Wo9GYlE/iys6AABuULwrUKC2TxIZcfj8XhaW5N5xdYQ9jIxBQj+c9o5sRgioGVbQ5MennxXgsRo52V1dfXRcDj8e2Gl9HdJEJDzQHq1UCBv0OQImqS0tcVzGQhNzhF0vyhwqLKyMjA6OvqraK3MLQGhSXc2m31AVH6dSt5RWQea/CzLXLRQEBtIVzGEuOGqqqpOPRBh5p+MJqd58kOu82AqGUGTdjT5IUF6zAzkGJA+grXqohUVFf5oNPpdD0CLkWQ5DrRKYvjtRiEC06oQf00moB5GVii06GJ65Xa7N8u1EbPEYrF+xO0iKQ9jdmcymbDP57MaAkkwsEcWi+UMrhybUlnb3NzcC7/fv1Gu9VjhqOUA/1xfX58AEiBRtsX2VCrlqamp6Zueni75py8FLoDkJrBPfBVmcDtVsI15v81mC01NTRXOHnWvZCoByR2eHqurq/uK26Ei7ez4vQ6HIzQ5ObksrAwkyVT2Edg33MMKtjOdTjtbWlqeTkxMZNRaybQkSCKAfUCzJJr5VUZDMpnc4/V6+8fGxspgy4IUbATN5CA7pGCO2dnZZl5APxJo2yV/a0WQRJAwDEwqOJjPMJl2se+a0GwAzQqwf4IU7D2ayZbwKVjj/Px8I20O0GZ+7+kCSTKaRYCtxz2gYE202eDxeJ4JTDdIwYZ4ARt4AV4F2w1sRzAYHDQEUrC3aLYJv03BmsfHx7caBkkyL+A1sC24+xiiUfHHgkuDxunayzhrMG3l8L/wSyNlo0NcLAAAAABJRU5ErkJggg=="},"89a5":function(t,a,e){"use strict";var i,n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"content"},[i("div",{staticClass:"ser-top-shop"},[i("a",{staticClass:"a-back"},[i("v-uni-image",{staticClass:"imgs",attrs:{src:e("8983"),mode:""}})],1),i("div",{staticClass:"head-search"},[i("v-uni-input",{staticClass:"yw-ser-input",attrs:{placeholder:"必胜客全场5折了"}})],1)]),i("div",{staticClass:"m-top"},[t._l(6,(function(a){return t._e()})),t._e(),t._e(),t._e(),t._e(),t._e(),t._l(3,(function(a){return t._e()})),i("div",{staticClass:"screen-box stickyClass"},[i("div",{staticClass:"n-box"},[i("div",{class:1==t.typeTagActive?"multiple active":"multiple",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.typeTag(1)}}},[t._v("综合排序")]),i("div",{class:2==t.typeTagActive?"volume active":"volume",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.typeTag(2)}}},[t._v("销量")]),i("div",{class:3==t.typeTagActive?"gap active":"gap",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.typeTag(3)}}},[t._v("距离")]),i("div",{class:4==t.typeTagActive?"screen active":"screen",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.typeTag(4)}}},[t._v("筛选"),i("v-uni-image",{staticClass:"imgs",attrs:{src:e("5356"),mode:""}})],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.dowMore,expression:"dowMore"}],staticClass:"screen-box-dow"},[i("div",{staticClass:"src-cont"},[i("div",{staticClass:"sd-title"},[t._v("优惠活动")]),i("div",{staticClass:"sd-tag"},[i("span",{class:1==t.nFlag?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.nShopTag(1)}}},[t._v("新店开张")]),i("span",{class:2==t.nFlag?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.nShopTag(2)}}},[t._v("5折优惠")]),i("span",{class:3==t.nFlag?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.nShopTag(3)}}},[t._v("免运费")])]),i("div",{staticClass:"sd-title mt"},[t._v("商家服务")]),i("div",{staticClass:"sd-tag"},[i("span",{class:1==t.sFlag?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.shopTag(1)}}},[t._v("外卖派送")]),i("span",{class:2==t.sFlag?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.shopTag(2)}}},[t._v("到店自取")]),i("span",{class:3==t.sFlag?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.shopTag(3)}}},[t._v("到店堂吃")])]),t._m(2),i("div",{staticClass:"sd-tag yw-slider"},[i("yw-slider")],1),i("div",{staticClass:"sd-bnt"},[i("a",{staticClass:"mr",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.saveSet.apply(void 0,arguments)}}},[t._v("重置")]),i("a",{staticClass:"active",attrs:{href:"javascript:;"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.saveSet.apply(void 0,arguments)}}},[t._v("确定"),i("i",[t._v("（999+家商户）")])])])])])]),i("div",{staticClass:"relation-list-end"},[i("div",{staticClass:"shop-list"},t._l(t.shopList.poilist,(function(a,n){return i("a",{attrs:{href:"#/pages/index/waimai-detail"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goodDetail(a)}}},[i("div",{staticClass:"box"},[i("div",{staticClass:"img"},[i("v-uni-image",{staticClass:"imgs",attrs:{src:a.pic_url}})],1),i("div",{staticClass:"flex dec"},[i("p",{staticClass:"yw-text-ellipsis"},[t._v(t._s(a.name))]),i("div",{staticClass:"fenshu"},[i("i",[i("v-uni-image",{staticClass:"icon-star",attrs:{src:e("2e06"),mode:""}}),t._v(t._s(a.wm_poi_score))],1),i("span",[t._v("月销"+t._s(a.min_price))])]),i("div",{staticClass:"peisong"},[t._v("¥60起送｜配送费约¥5"),i("span",{staticClass:"t-right"},[t._v(t._s(a.support_pay)+"km  "+t._s(a.avg_delivery_time)+"分钟")])]),i("span",{staticClass:"zkj"},[t._v(t._s(a.min_price/2)+"折")])])])])})),0)])],2),i("div",{staticClass:"yw-no-data"},[t._v("已经到底啦，不要往下看了（//▽//）")])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"re-text"},[t._v("酱汁满串烧烤（世博店）"),e("p",[t._v("起送¥20 配送¥2.3 3.4km")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"re-text"},[t._v("酱汁满串烧烤（世博店）"),e("p",[t._v("起送¥20 配送¥2.3 3.4km")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sd-title mt"},[t._v("人均价格"),e("i",[t._v("¥60以下")])])}];e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}))},"9a2f":function(t,a,e){"use strict";e.r(a);var i=e("51be"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},a635:function(t,a,e){"use strict";e.r(a);var i=e("89a5"),n=e("9a2f");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("8265");var r,s=e("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"d9e0f008",null,!1,i["a"],r);a["default"]=d.exports},ae82:function(t,a,e){var i=e("e4b4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("6ce43e29",i,!0,{sourceMap:!1,shadowMode:!1})},e4b4:function(t,a,e){var i=e("24fb"),n=e("1de5"),o=e("0a37");a=i(!1);var r=n(o);a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 公用投影 */.yw-box-shadow[data-v-d9e0f008]{background:#fff;-webkit-box-shadow:0 %?-20?% %?40?% 0 rgba(0,0,0,.03),0 %?20?% %?40?% 0 rgba(0,0,0,.03);box-shadow:0 %?-20?% %?40?% 0 rgba(0,0,0,.03),0 %?20?% %?40?% 0 rgba(0,0,0,.03);border-radius:%?16?%}\r\n/* 公用按钮 */.yw-bnt-box-bg-color[data-v-d9e0f008]{background-image:-webkit-linear-gradient(left,#fc6000,#ffb36a);background-image:-webkit-gradient(linear,left top,right top,from(#fc6000),to(#ffb36a));background-image:linear-gradient(90deg,#fc6000,#ffb36a)}\r\n/* 公用分类按钮/标签 标签高亮*/.yw-tag-box-bg-color[data-v-d9e0f008]{background-image:-webkit-gradient(linear,left top,right top,from(#fc6000),to(#ffb36a));background-image:linear-gradient(90deg,#fc6000,#ffb36a);background-image:-webkit-linear-gradient(left,#fc6000,#ffb36a)}.yw-hrb[data-v-d9e0f008]{height:%?1?%;background-color:#eee;margin:0 %?20?% 0 %?20?%}\r\n/*字体颜色 颜色值 333333 */\r\n/*字体颜色 颜色值 ffffff */\r\n/*字体颜色 颜色值 999999 */\r\n/*字体颜色 颜色值 999999 */\r\n/*字体颜色 颜色值 FC6000 */\r\n/*字体颜色 颜色值 666666 */\r\n/*字体颜色 颜色值 F8F8F8 */\r\n/*字体颜色 颜色值 EEEEEE */\r\n/*字体颜色 颜色值 FF0000 */\r\n/*字体颜色 颜色值 FFFADA */\r\n/*字体颜色 颜色值 6B6B6B */\r\n/*字体颜色 颜色值 67D762 */\r\n/* 搜索 */.yw-ser-input[data-v-d9e0f008]{position:relative;height:%?60?%}.yw-ser-input[data-v-d9e0f008]:after{content:"";position:absolute;top:%?14?%;left:%?52?%;width:%?30?%;height:%?30?%;display:block;background-image:url(/static/eee6.png);background-repeat:no-repeat;background-size:100%}.yw-ser-input .uni-input-input[data-v-d9e0f008]{font-family:PingFangSC-Medium;font-size:%?24?%;color:#999;letter-spacing:0;text-align:left;width:%?518?%;height:%?60?%;padding-left:%?100?%}.input-placeholder[data-v-d9e0f008]{font-size:%?24?%;color:#999;margin:%?0?% 0 %?0?% %?100?%}.weui-actionsheet[data-v-d9e0f008]{position:fixed;left:0;bottom:0;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:5000;width:100%;background:#fff;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;transition:transform .3s,-webkit-transform .3s;overflow:hidden}.weui-actionsheet_toggle[data-v-d9e0f008]{-webkit-transform:translate(0);transform:translate(0)}.weui-media-box_appmsg[data-v-d9e0f008]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%;background:#fff;-webkit-box-shadow:0 %?-20?% %?40?% 0 rgba(0,0,0,.03),0 10px 20px 0 rgba(0,0,0,.03);box-shadow:0 %?-20?% %?40?% 0 rgba(0,0,0,.03),0 10px 20px 0 rgba(0,0,0,.03);border-radius:%?16?%;margin-left:%?30?%;margin-right:%?30?%;padding-top:%?36?%;padding-bottom:%?36?%}.weui-media-box__hd[data-v-d9e0f008]{margin-right:%?40?%;width:%?80?%;height:%?80?%;line-height:%?80?%;text-align:center}.weui-media-box__thumb[data-v-d9e0f008]{width:100%;max-height:100%;vertical-align:top;border-radius:%?12?%}.weui-media-box__bd[data-v-d9e0f008]{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0;padding-left:%?20?%}.weui-media-box__title[data-v-d9e0f008]{font-family:PingFangSC-Semibold;font-size:%?28?%;color:#333;letter-spacing:.5px;color:var(--weui-FG-0);width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;word-wrap:break-word;word-break:break-all;font-weight:700}.weui-media-box__desc[data-v-d9e0f008]{color:var(--weui-FG-2);overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-family:PingFangSC-Regular;font-size:%?24?%;color:#999;letter-spacing:.43px;margin-top:%?12?%}\r\n/* 通用按钮 */.yw-bnt-big[data-v-d9e0f008]{font-family:PingFangSC-Semibold;font-size:%?32?%;color:#fff;letter-spacing:.57px;text-align:center;display:block;text-decoration:none;padding:%?20?% 0;margin:0 %?30?%;border-radius:%?50?%}.yw-tag-span-active[data-v-d9e0f008]{border:%?2?% solid #fc6000;border-radius:%?16?%;color:#fc6000;font-family:PingFangSC-Regular;font-size:%?18?%;letter-spacing:0;padding:0 %?6?%}.yw-text-ellipsis[data-v-d9e0f008]{width:%?348?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;word-wrap:break-word;word-break:break-all}.t-width[data-v-d9e0f008]{width:%?272?%;display:inline-block}.yw-no-data[data-v-d9e0f008]{font-family:PingFangSC-Regular;font-size:%?24?%;color:#ccc;letter-spacing:0;margin:%?60?% 0;text-align:center}.heds-title[data-v-d9e0f008]{font-family:PingFangSC-Semibold;font-size:%?48?%;color:#333;letter-spacing:.86px;margin-left:%?40?%;position:relative;padding-bottom:%?40?%;padding-top:%?40?%}.heds-title .arow[data-v-d9e0f008]{margin-left:%?20?%}.heds-title .arow .imgs[data-v-d9e0f008]{width:%?16?%;height:%?32?%}.heds-title span[data-v-d9e0f008]{width:%?30?%;height:%?30?%;position:absolute;top:50%;right:%?50?%;margin-top:%?-15?%;background-image:url(/static/ccc4.png);background-size:100%;background-repeat:no-repeat}.hed-fixed[data-v-d9e0f008]{position:fixed;top:0;left:0;width:100%;background:#fff;z-index:999}.hed-fixed-cont[data-v-d9e0f008]{padding-top:%?172?%}.screen-box.stickyClass[data-v-d9e0f008], .nav-list.stickyClass[data-v-d9e0f008], .yw-stickyClass[data-v-d9e0f008]{position:-webkit-sticky;position:sticky;top:0;z-index:999;background-color:#fff;padding:%?18?% 0}.nav-list.stickyClass[data-v-d9e0f008]{padding-bottom:%?32?%;padding-top:%?10?%}.yw-wm-nav-list.yw-stickyClass[data-v-d9e0f008]{padding-bottom:%?28?%;top:%?100?%}.yw-wm-nav-list[data-v-d9e0f008]{width:100%;margin-top:%?40?%}.yw-wm-nav-list a[data-v-d9e0f008]{color:#666}.yw-wm-nav-list span[data-v-d9e0f008]{font-family:PingFangSC-Medium;font-size:%?32?%;color:#666;letter-spacing:.57px;position:relative}.yw-wm-nav-list span.active[data-v-d9e0f008]::after{content:"";background-image:-webkit-gradient(linear,left top,right top,from(#fc6000),to(#ffb36a));background-image:-webkit-linear-gradient(left,#fc6000,#ffb36a);background-image:linear-gradient(90deg,#fc6000,#ffb36a);border-radius:%?8?%;width:%?64?%;height:%?8?%;display:block;position:absolute;left:50%;bottom:%?-20?%;margin-left:%?-32?%}.yw-wm-nav-list .span-one[data-v-d9e0f008]{margin-left:%?120?%}.yw-wm-nav-list .span-two[data-v-d9e0f008]{margin-left:%?160?%;margin-right:%?160?%}.yw-wm-nav-list .span-two i[data-v-d9e0f008]{font-family:ArialMT;font-size:10px;color:#999;letter-spacing:.36px;font-style:normal;display:inline-block;position:absolute;bottom:0;margin-left:%?4?%}.move-enter-active[data-v-d9e0f008], .move-leave-active[data-v-d9e0f008]{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:all .4s;transition:all .4s}.move-enter-active i[data-v-d9e0f008], .move-leave-active i[data-v-d9e0f008]{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transition:all .4s;transition:all .4s}.move-enter[data-v-d9e0f008], .move-leave-to[data-v-d9e0f008]{opacity:0;-webkit-transform:translate3d(24px,0,0);transform:translate3d(24px,0,0);-webkit-transition:all .4s;transition:all .4s}.move-enter i[data-v-d9e0f008], .move-leave-to i[data-v-d9e0f008]{-webkit-transform:rotate(1turn);transform:rotate(1turn);-webkit-transition:all .4s;transition:all .4s}.cxl[data-v-d9e0f008]{padding-bottom:%?100?%}.m-top[data-v-d9e0f008]{padding-top:%?100?%}.head-search[data-v-d9e0f008]{background:#f8f8f8;border-radius:%?30?%;height:%?60?%;margin-top:%?20?%;margin-left:13%;margin-right:4%;overflow:hidden}.ser-top-shop[data-v-d9e0f008]{background:#fff;position:fixed;width:100%;top:0;left:0;z-index:99;height:%?100?%}.a-back[data-v-d9e0f008]{display:block;position:relative}.a-back .imgs[data-v-d9e0f008]{width:%?18?%;height:%?36?%;position:absolute;top:%?34?%;left:%?28?%}.yw-hrb.mt[data-v-d9e0f008]{margin-top:%?30?%;margin-left:0;margin-right:0}.screen-box.stickyClass[data-v-d9e0f008]{top:%?99?%}.relation-list[data-v-d9e0f008]{margin:0 %?30?%;margin-top:%?40?%}.relation-list .re-img .imgs[data-v-d9e0f008]{width:%?72?%;height:%?72?%;border-radius:%?12?%}.relation-list .re-text[data-v-d9e0f008]{font-family:PingFangSC-Semibold;font-size:%?28?%;color:#333;letter-spacing:.5px;margin-left:%?20?%}.relation-list .re-text p[data-v-d9e0f008]{font-family:PingFangSC-Regular;font-size:%?24?%;color:#999;letter-spacing:.43px}.relation-list-end .shop-list[data-v-d9e0f008]{margin-top:%?50?%}.relation-list-end .shop-list .icon-star[data-v-d9e0f008]{width:%?20?%;height:%?20?%;margin-right:%?12?%}.relation-list-end .shop-list div.box[data-v-d9e0f008]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?62?%;text-decoration:none}.relation-list-end .shop-list div.box div.flex[data-v-d9e0f008]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.relation-list-end .shop-list div.box .img[data-v-d9e0f008]{margin-left:4%}.relation-list-end .shop-list div.box .img[data-v-d9e0f008], .relation-list-end .shop-list div.box .imgs[data-v-d9e0f008]{width:%?160?%;height:%?160?%;border-radius:%?15?%}.relation-list-end .shop-list div.box .dec[data-v-d9e0f008]{margin-left:2.7%;position:relative}.relation-list-end .shop-list div.box .dec span.zkj[data-v-d9e0f008]{font-family:PingFangSC-Semibold;font-size:%?24?%;color:#fc6000;letter-spacing:.43px;border:1px solid #fec9c0;border-radius:8.4px;display:inline-block;min-width:%?64?%;min-height:%?34?%;padding:0 %?16?%;position:absolute;top:0;right:%?24?%}.relation-list-end .shop-list div.box .dec p[data-v-d9e0f008]{font-family:PingFangSC-Semibold;font-size:%?32?%;color:#333;letter-spacing:0}.relation-list-end .shop-list div.box .dec .fenshu i[data-v-d9e0f008]{font-family:PingFangSC-Semibold;font-size:%?24?%;color:#fc6000;letter-spacing:.43px;font-style:normal;display:inline-block}.relation-list-end .shop-list div.box .dec .fenshu span[data-v-d9e0f008]{font-family:PingFangSC-Regular;font-size:%?24?%;color:#333;letter-spacing:.43px;padding-left:%?20?%;display:inline-block}.relation-list-end .shop-list div.box .dec .peisong[data-v-d9e0f008]{font-family:PingFangSC-Regular;font-size:%?24?%;color:#999;letter-spacing:.43px;margin-top:%?28?%}.relation-list-end .shop-list div.box .dec .peisong .t-right[data-v-d9e0f008]{text-align:right;float:right;margin-right:%?24?%}.re-title[data-v-d9e0f008]{font-family:PingFangSC-Semibold;font-size:%?28?%;color:#333;letter-spacing:.5px;margin:0 %?30?%;margin-top:%?40?%}.re-tag[data-v-d9e0f008]{margin:0 %?30?%}.re-tag span[data-v-d9e0f008]{font-family:PingFangSC-Regular;font-size:%?24?%;color:#333;letter-spacing:0;padding:%?10?% %?24?%;background:#f8f8f8;border-radius:%?30?%;margin-top:%?20?%;margin-right:%?20?%;display:inline-block}.screen-box[data-v-d9e0f008]{font-family:PingFangSC-Medium;font-size:%?28?%;color:#666;letter-spacing:0;position:relative}.screen-box .n-box[data-v-d9e0f008]{position:relative;width:92%;margin-left:4%;margin-right:4%}.screen-box .multiple[data-v-d9e0f008]{font-family:PingFangSC-Semibold;font-size:%?28?%;position:relative}.screen-box .multiple[data-v-d9e0f008]:after{content:"";background:url('+r+");background-size:100%;display:block;width:%?20?%;height:%?10?%;position:absolute;right:%?-32?%;bottom:%?10?%}.screen-box .volume[data-v-d9e0f008]{margin-left:%?64?%}.screen-box .gap[data-v-d9e0f008]{margin-left:%?60?%}.screen-box .active[data-v-d9e0f008]{font-family:PingFangSC-Semibold;font-size:%?28?%;color:#333;font-weight:700}.screen-box .screen[data-v-d9e0f008]{position:absolute;top:0;right:0}.screen-box .screen .imgs[data-v-d9e0f008]{width:%?22?%;height:%?22?%;margin-left:%?16?%}.screen-box div[data-v-d9e0f008]{display:inline-block}.screen-box .screen-box-dow[data-v-d9e0f008]{margin:0 %?30?%}.screen-box .screen-box-dow .sd-title[data-v-d9e0f008]{font-family:PingFangSC-Medium;font-size:%?28?%;color:#666;letter-spacing:.39px;text-align:left;margin-top:%?40?%;width:100%}.screen-box .screen-box-dow .sd-title i[data-v-d9e0f008]{color:#fc6000;margin-left:%?26?%}.screen-box .screen-box-dow .mt[data-v-d9e0f008]{margin-top:%?60?%}.screen-box .screen-box-dow .sd-tag[data-v-d9e0f008]{margin-top:%?40?%}.screen-box .screen-box-dow .sd-tag span[data-v-d9e0f008]{background:#f8f8f8;border-radius:%?30?%;font-family:PingFangSC-Regular;font-size:%?28?%;color:#333;letter-spacing:0;margin-right:%?18?%;display:inline-block;padding:%?10?% %?24?%}.screen-box .screen-box-dow .sd-tag .active[data-v-d9e0f008]{color:#fff;background-image:-webkit-gradient(linear,left top,right top,from(#fc6000),to(#ffb36a));background-image:-webkit-linear-gradient(left,#fc6000,#ffb36a);background-image:linear-gradient(90deg,#fc6000,#ffb36a)}.screen-box .screen-box-dow .yw-slider[data-v-d9e0f008]{width:100%;margin-top:%?60?%}.screen-box .screen-box-dow .sd-bnt[data-v-d9e0f008]{margin-top:%?60?%}.screen-box .screen-box-dow .sd-bnt a[data-v-d9e0f008]{display:inline-block;background:#f8f8f8;border:1px solid #eee;border-radius:%?36?%;font-family:PingFangSC-Regular;font-size:%?28?%;color:#999;letter-spacing:.39px;width:%?330?%;text-align:center;padding:%?16?% 0}.screen-box .screen-box-dow .sd-bnt a i[data-v-d9e0f008]{color:#fff;font-size:%?24?%}.screen-box .screen-box-dow .sd-bnt a.mr[data-v-d9e0f008]{margin-right:%?20?%}.screen-box .screen-box-dow .sd-bnt .active[data-v-d9e0f008]{color:#fff;background-image:-webkit-gradient(linear,left top,right top,from(#fc6000),to(#ffb36a));background-image:-webkit-linear-gradient(left,#fc6000,#ffb36a);background-image:linear-gradient(90deg,#fc6000,#ffb36a)}.screen-box .screen-box-dow .src-cont[data-v-d9e0f008]{position:relative}",""]),t.exports=a}}]);