(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{579:function(t,e,n){"use strict";n.r(e);n(22);var o=n(38),a=n(26),i={components:{Actionsheet:a.a,ActionsheetItem:a.b},data:function(){return{options:[{value:"1",label:"编辑"},{value:"2",label:"收藏"},{value:"3",label:"分享"},{value:"4",label:"删除",disabled:!0}],open1:!1,open2:!1,open3:!1}},methods:{actionsheetShow:function(t){1==t?this.open1=!0:2==t?this.open2=!0:3==t&&(this.open3=!0)},actionsheetJS:function(){var t=this;this.$actionsheet({title:"JS调用",options:Object(o.a)(this.options)}).then((function(e){t.handleAction(e)})).catch((function(){console.log("close")}))},handleAction:function(t){var e=this.options.filter((function(e){return e.value===t}))[0].label;this.$toast({message:"您点击了“".concat(e,"”")})}}},s=n(0),c=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"},attrs:{slot:"header"},slot:"header"},[n("button",{staticClass:"dt-button dt-button--primary",on:{click:function(e){return t.actionsheetShow(1)}}},[t._v("实例1")]),t._v(" "),n("button",{staticClass:"dt-button dt-button--primary",on:{click:function(e){return t.actionsheetShow(2)}}},[t._v("实例2")]),t._v(" "),n("button",{staticClass:"dt-button dt-button--primary",on:{click:function(e){return t.actionsheetShow(3)}}},[t._v("实例3")]),t._v(" "),n("button",{staticClass:"dt-button dt-button--success",on:{click:t.actionsheetJS}},[t._v("JS方式使用")]),t._v(" "),n("actionsheet",{attrs:{open:t.open1},on:{"update:open":function(e){t.open1=e},action:t.handleAction}},t._l(t.options,(function(e){return n("actionsheet-item",{key:e.value,attrs:{value:e.value,disabled:e.disabled}},[t._v(t._s(e.label))])})),1),t._v(" "),n("actionsheet",{attrs:{open:t.open2,cancel:!0,title:"标题文字"},on:{"update:open":function(e){t.open2=e},action:t.handleAction}},t._l(t.options,(function(e){return n("actionsheet-item",{key:e.value,attrs:{value:e.value,disabled:e.disabled}},[t._v(t._s(e.label))])})),1),t._v(" "),n("actionsheet",{attrs:{type:"menu",open:t.open3},on:{"update:open":function(e){t.open3=e},action:t.handleAction}},t._l(t.options,(function(e){return n("actionsheet-item",{key:e.value,attrs:{value:e.value,disabled:e.disabled}},[t._v(t._s(e.label))])})),1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);