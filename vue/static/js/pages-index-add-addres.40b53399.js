(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-add-addres"],{"47de":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e("69ec"),n={props:{type:{default:!1}},data:function(){return{title:"壹味会员",searchBarFixed:!1,height:"",clientNum:{},candelete:{},pageShow:!1,addresInfo:{name:"",phone:"",adds:"",numb:"",tag:"",sex:""},bntFlag:!1}},watch:{addresInfo:{handler:function(a,t){var e=a;this.bntFlag=(0,i.paramsValidate)(e)},deep:!0}},onLoad:function(){},methods:{handleScroll:function(){},save:function(a){a?this.$emit("addInfoAds",this.addresInfo):console.log("---------")},hide:function(){this.pageShow=!1}},mounted:function(){}};t.default=n},"48f7":function(a,t,e){"use strict";e.r(t);var i=e("47de"),n=e.n(i);for(var d in i)"default"!==d&&function(a){e.d(t,a,(function(){return i[a]}))}(d);t["default"]=n.a},5530:function(a,t,e){"use strict";var i,n=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"content"},[a.type?a._e():i("div",{staticClass:"heds-title"},[a._v("新增地址"),i("i",{staticClass:"arow"},[i("v-uni-image",{staticClass:"imgs",attrs:{src:e("c754"),mode:""}})],1),i("span",{on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.hide.apply(void 0,arguments)}}})]),i("div",{staticClass:"addres-form"},[i("div",{staticClass:"weui-flex flex-center"},[i("div",{staticClass:"label"},[a._v("联系人")]),i("div",{staticClass:"inputs"},[i("v-uni-input",{staticClass:"weui-input",attrs:{type:"text",placeholder:"输入姓名"},model:{value:a.addresInfo.name,callback:function(t){a.$set(a.addresInfo,"name",t)},expression:"addresInfo.name"}}),i("div",{staticClass:"tag-list"},[i("span",{class:1==a.addresInfo.sex?"tag active":"tag",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.addresInfo.sex=1}}},[a._v("先生")]),i("span",{class:2==a.addresInfo.sex?"tag active":"tag",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.addresInfo.sex=2}}},[a._v("女士")])])],1)]),i("div",{staticClass:"hrs"}),i("div",{staticClass:"weui-flex flex-center"},[i("div",{staticClass:"label"},[a._v("电话")]),i("div",{staticClass:"inputs"},[i("div",{staticClass:"div-input"},[i("v-uni-input",{staticClass:"weui-input",attrs:{type:"text",placeholder:"13456263321"},model:{value:a.addresInfo.phone,callback:function(t){a.$set(a.addresInfo,"phone",t)},expression:"addresInfo.phone"}})],1)])]),i("div",{staticClass:"hrs"}),i("div",{staticClass:"weui-flex flex-center"},[i("div",{staticClass:"label"},[a._v("地址")]),i("div",{staticClass:"inputs"},[i("div",{staticClass:"div-input"},[i("v-uni-input",{staticClass:"weui-input",attrs:{type:"text",placeholder:"老庙路与源北路交叉口"},model:{value:a.addresInfo.adds,callback:function(t){a.$set(a.addresInfo,"adds",t)},expression:"addresInfo.adds"}})],1)])]),i("div",{staticClass:"hrs"}),i("div",{staticClass:"weui-flex flex-center"},[i("div",{staticClass:"label"},[a._v("门牌号")]),i("div",{staticClass:"inputs"},[i("div",{staticClass:"div-input"},[i("v-uni-input",{staticClass:"weui-input",attrs:{type:"text",placeholder:"宇安大楼1243"},model:{value:a.addresInfo.numb,callback:function(t){a.$set(a.addresInfo,"numb",t)},expression:"addresInfo.numb"}})],1)])]),i("div",{staticClass:"hrs"}),i("div",{staticClass:"weui-flex flex-center"},[i("div",{staticClass:"label"},[a._v("标签")]),i("div",{staticClass:"inputs"},[i("span",{class:1==a.addresInfo.tag?"tag active":"tag",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.addresInfo.tag=1}}},[a._v("公司")]),i("span",{class:2==a.addresInfo.tag?"tag active":"tag",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.addresInfo.tag=2}}},[a._v("家")]),i("span",{class:3==a.addresInfo.tag?"tag active":"tag",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.addresInfo.tag=3}}},[a._v("学校")])])])]),i("div",{class:a.bntFlag?"ads-bnt yw-tag-box-bg-color active":"ads-bnt yw-tag-box-bg-color"},[i("a",{directives:[{name:"show",rawName:"v-show",value:a.bntFlag,expression:"bntFlag"}],on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.save(a.type)}}},[a._v("确定")]),i("a",{directives:[{name:"show",rawName:"v-show",value:!a.bntFlag,expression:"!bntFlag"}]},[a._v("确定")])])])},d=[];e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return d})),e.d(t,"a",(function(){return i}))},"69ec":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.paramsValidate=void 0;var i=function(a){var t=!0;for(var e in a)if("0"!=a[e]&&!a[e])return console.log("请完善数据!","middle"),!1;return t};t.paramsValidate=i},"8bc6":function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 公用投影 */.yw-box-shadow[data-v-336ed41f]{background:#fff;-webkit-box-shadow:0 %?-20?% %?40?% 0 rgba(0,0,0,.03),0 %?20?% %?40?% 0 rgba(0,0,0,.03);box-shadow:0 %?-20?% %?40?% 0 rgba(0,0,0,.03),0 %?20?% %?40?% 0 rgba(0,0,0,.03);border-radius:%?16?%}\r\n/* 公用按钮 */.yw-bnt-box-bg-color[data-v-336ed41f]{background-image:-webkit-linear-gradient(left,#fc6000,#ffb36a);background-image:-webkit-gradient(linear,left top,right top,from(#fc6000),to(#ffb36a));background-image:linear-gradient(90deg,#fc6000,#ffb36a)}\r\n/* 公用分类按钮/标签 标签高亮*/.yw-tag-box-bg-color[data-v-336ed41f]{background-image:-webkit-gradient(linear,left top,right top,from(#fc6000),to(#ffb36a));background-image:linear-gradient(90deg,#fc6000,#ffb36a);background-image:-webkit-linear-gradient(left,#fc6000,#ffb36a)}.yw-hrb[data-v-336ed41f]{height:%?1?%;background-color:#eee;margin:0 %?20?% 0 %?20?%}\r\n/*字体颜色 颜色值 333333 */\r\n/*字体颜色 颜色值 ffffff */\r\n/*字体颜色 颜色值 999999 */\r\n/*字体颜色 颜色值 999999 */\r\n/*字体颜色 颜色值 FC6000 */\r\n/*字体颜色 颜色值 666666 */\r\n/*字体颜色 颜色值 F8F8F8 */\r\n/*字体颜色 颜色值 EEEEEE */\r\n/*字体颜色 颜色值 FF0000 */\r\n/*字体颜色 颜色值 FFFADA */\r\n/*字体颜色 颜色值 6B6B6B */\r\n/*字体颜色 颜色值 67D762 */\r\n/* 搜索 */.yw-ser-input[data-v-336ed41f]{position:relative;height:%?60?%}.yw-ser-input[data-v-336ed41f]:after{content:"";position:absolute;top:%?14?%;left:%?52?%;width:%?30?%;height:%?30?%;display:block;background-image:url(/static/eee6.png);background-repeat:no-repeat;background-size:100%}.yw-ser-input .uni-input-input[data-v-336ed41f]{font-family:PingFangSC-Medium;font-size:%?24?%;color:#999;letter-spacing:0;text-align:left;width:%?518?%;height:%?60?%;padding-left:%?100?%}.input-placeholder[data-v-336ed41f]{font-size:%?24?%;color:#999;margin:%?0?% 0 %?0?% %?100?%}.weui-actionsheet[data-v-336ed41f]{position:fixed;left:0;bottom:0;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:5000;width:100%;background:#fff;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;transition:transform .3s,-webkit-transform .3s;overflow:hidden}.weui-actionsheet_toggle[data-v-336ed41f]{-webkit-transform:translate(0);transform:translate(0)}.weui-media-box_appmsg[data-v-336ed41f]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%;background:#fff;-webkit-box-shadow:0 %?-20?% %?40?% 0 rgba(0,0,0,.03),0 10px 20px 0 rgba(0,0,0,.03);box-shadow:0 %?-20?% %?40?% 0 rgba(0,0,0,.03),0 10px 20px 0 rgba(0,0,0,.03);border-radius:%?16?%;margin-left:%?30?%;margin-right:%?30?%;padding-top:%?36?%;padding-bottom:%?36?%}.weui-media-box__hd[data-v-336ed41f]{margin-right:%?40?%;width:%?80?%;height:%?80?%;line-height:%?80?%;text-align:center}.weui-media-box__thumb[data-v-336ed41f]{width:100%;max-height:100%;vertical-align:top;border-radius:%?12?%}.weui-media-box__bd[data-v-336ed41f]{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0;padding-left:%?20?%}.weui-media-box__title[data-v-336ed41f]{font-family:PingFangSC-Semibold;font-size:%?28?%;color:#333;letter-spacing:.5px;color:var(--weui-FG-0);width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;word-wrap:break-word;word-break:break-all;font-weight:700}.weui-media-box__desc[data-v-336ed41f]{color:var(--weui-FG-2);overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-family:PingFangSC-Regular;font-size:%?24?%;color:#999;letter-spacing:.43px;margin-top:%?12?%}\r\n/* 通用按钮 */.yw-bnt-big[data-v-336ed41f]{font-family:PingFangSC-Semibold;font-size:%?32?%;color:#fff;letter-spacing:.57px;text-align:center;display:block;text-decoration:none;padding:%?20?% 0;margin:0 %?30?%;border-radius:%?50?%}.yw-tag-span-active[data-v-336ed41f]{border:%?2?% solid #fc6000;border-radius:%?16?%;color:#fc6000;font-family:PingFangSC-Regular;font-size:%?18?%;letter-spacing:0;padding:0 %?6?%}.yw-text-ellipsis[data-v-336ed41f]{width:%?348?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;word-wrap:break-word;word-break:break-all}.t-width[data-v-336ed41f]{width:%?272?%;display:inline-block}.yw-no-data[data-v-336ed41f]{font-family:PingFangSC-Regular;font-size:%?24?%;color:#ccc;letter-spacing:0;margin:%?60?% 0;text-align:center}.heds-title[data-v-336ed41f]{font-family:PingFangSC-Semibold;font-size:%?48?%;color:#333;letter-spacing:.86px;margin-left:%?40?%;position:relative;padding-bottom:%?40?%;padding-top:%?40?%}.heds-title .arow[data-v-336ed41f]{margin-left:%?20?%}.heds-title .arow .imgs[data-v-336ed41f]{width:%?16?%;height:%?32?%}.heds-title span[data-v-336ed41f]{width:%?30?%;height:%?30?%;position:absolute;top:50%;right:%?50?%;margin-top:%?-15?%;background-image:url(/static/ccc4.png);background-size:100%;background-repeat:no-repeat}.hed-fixed[data-v-336ed41f]{position:fixed;top:0;left:0;width:100%;background:#fff;z-index:999}.hed-fixed-cont[data-v-336ed41f]{padding-top:%?172?%}.screen-box.stickyClass[data-v-336ed41f], .nav-list.stickyClass[data-v-336ed41f], .yw-stickyClass[data-v-336ed41f]{position:-webkit-sticky;position:sticky;top:0;z-index:999;background-color:#fff;padding:%?18?% 0}.nav-list.stickyClass[data-v-336ed41f]{padding-bottom:%?32?%;padding-top:%?10?%}.yw-wm-nav-list.yw-stickyClass[data-v-336ed41f]{padding-bottom:%?28?%;top:%?100?%}.yw-wm-nav-list[data-v-336ed41f]{width:100%;margin-top:%?40?%}.yw-wm-nav-list a[data-v-336ed41f]{color:#666}.yw-wm-nav-list span[data-v-336ed41f]{font-family:PingFangSC-Medium;font-size:%?32?%;color:#666;letter-spacing:.57px;position:relative}.yw-wm-nav-list span.active[data-v-336ed41f]::after{content:"";background-image:-webkit-gradient(linear,left top,right top,from(#fc6000),to(#ffb36a));background-image:-webkit-linear-gradient(left,#fc6000,#ffb36a);background-image:linear-gradient(90deg,#fc6000,#ffb36a);border-radius:%?8?%;width:%?64?%;height:%?8?%;display:block;position:absolute;left:50%;bottom:%?-20?%;margin-left:%?-32?%}.yw-wm-nav-list .span-one[data-v-336ed41f]{margin-left:%?120?%}.yw-wm-nav-list .span-two[data-v-336ed41f]{margin-left:%?160?%;margin-right:%?160?%}.yw-wm-nav-list .span-two i[data-v-336ed41f]{font-family:ArialMT;font-size:10px;color:#999;letter-spacing:.36px;font-style:normal;display:inline-block;position:absolute;bottom:0;margin-left:%?4?%}.move-enter-active[data-v-336ed41f], .move-leave-active[data-v-336ed41f]{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:all .4s;transition:all .4s}.move-enter-active i[data-v-336ed41f], .move-leave-active i[data-v-336ed41f]{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transition:all .4s;transition:all .4s}.move-enter[data-v-336ed41f], .move-leave-to[data-v-336ed41f]{opacity:0;-webkit-transform:translate3d(24px,0,0);transform:translate3d(24px,0,0);-webkit-transition:all .4s;transition:all .4s}.move-enter i[data-v-336ed41f], .move-leave-to i[data-v-336ed41f]{-webkit-transform:rotate(1turn);transform:rotate(1turn);-webkit-transition:all .4s;transition:all .4s}.addres-form[data-v-336ed41f]{background:#fff;-webkit-box-shadow:0 %?-20?% %?40?% 0 rgba(0,0,0,.03),0 %?20?% %?40?% 0 rgba(0,0,0,.03);box-shadow:0 %?-20?% %?40?% 0 rgba(0,0,0,.03),0 %?20?% %?40?% 0 rgba(0,0,0,.03);border-radius:%?16?%;margin:0 %?30?%;padding:%?40?% 0}.addres-form .hrs[data-v-336ed41f]{background:#eee;height:%?2?%;margin:%?32?% %?20?%}.addres-form .label[data-v-336ed41f]{font-family:PingFangSC-Medium;font-size:%?32?%;color:#000;letter-spacing:.53px;text-align:left;line-height:%?32?%;margin-left:%?20?%;width:%?136?%}.addres-form .inputs[data-v-336ed41f]{position:relative;width:80%}.addres-form .inputs .tag-list[data-v-336ed41f]{position:absolute;top:0;right:0}.addres-form .inputs .input-placeholder[data-v-336ed41f]{margin-left:0;font-size:%?32?%}.addres-form .inputs .div-input[data-v-336ed41f]{width:80%}.addres-form .inputs uni-input[data-v-336ed41f]{font-family:PingFangSC-Medium;font-size:%?32?%;color:#999;letter-spacing:.53px}.addres-form span.tag[data-v-336ed41f]{border:%?2?% solid #ccc;border-radius:%?31?%;font-family:PingFangSC-Medium;font-size:%?28?%;color:#999;letter-spacing:.5px;padding:%?6?% %?30?%;margin-right:%?20?%}.addres-form .tag.active[data-v-336ed41f]{border:%?2?% solid #fc6000;color:#fc6000}.ads-bnt[data-v-336ed41f]{opacity:.2;border-radius:%?50?%;height:%?100?%;margin:0 %?30?%;text-align:center;line-height:%?100?%;margin-top:%?60?%}.ads-bnt a[data-v-336ed41f]{font-family:PingFangSC-Semibold;font-size:%?32?%;color:#fff;letter-spacing:.57px;text-decoration:none;display:block}.ads-bnt.active[data-v-336ed41f]{opacity:1}',""]),a.exports=t},"9d11":function(a,t,e){"use strict";var i=e("f8f5"),n=e.n(i);n.a},a9f7:function(a,t,e){"use strict";e.r(t);var i=e("5530"),n=e("48f7");for(var d in n)"default"!==d&&function(a){e.d(t,a,(function(){return n[a]}))}(d);e("9d11");var r,o=e("f0c5"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"336ed41f",null,!1,i["a"],r);t["default"]=s.exports},c754:function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWCAYAAAD0OH0aAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAFgAAAAA5XHV+AAABh0lEQVQ4Ea2SMUvDUBDHm1QRdLGDVcQqiKMIaTsp0kU3RaG46dAPIP0ADoI4Cjq5ODq5OClUXRQtODRpTamDmzg7B9LY+ruQlNY0rYgHl/fe3f/37t57iUT+YrquF/GT37CqJ/poNpt5oMN+kAvE4/GcoiiPQHulUinfC3KBRCJhIV4HesGPqbQdBintiVqtNmFZ1hOxGXwznU5ft+dl3gFIwDTNWdu2BRqNRqOrmqYVJe5bAJAELS0wPHiiTCqVMr15xL8lf+2OIlBVdY1zDeEFqeoLugKS9FrZYjpGi7fVanVc4qGAJOXQ3FoOl3Nd9gVEgA3Slpz1SxY9K5TL5Q3EZ+jeqJIVoOstScIwjEyj0Sgg/MSXksnkeyhQqVQ0x3HuETjc1jLiVxGLBSrwBnPE5bFG8BWu+JmxZR1noI1JMnf0HWPM/hQL1QJ4nBg93xCbpucdxDIPmAvwSw/X6/UrsvPsvov4IqD0Ai7AjucIF4nt81inYWKJD8gH8RTQETsfyPpf7RunbpM+VrPU8QAAAABJRU5ErkJggg=="},f8f5:function(a,t,e){var i=e("8bc6");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("4f06").default;n("f4ae8e2a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);