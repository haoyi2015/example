(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{596:function(t,e,l){"use strict";l.r(e);var s=l(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"swipeout"}},[t._v("Swipeout")]),t._v(" "),l("hr"),t._v(" "),l("Common-Democode",{attrs:{title:"基本用法",description:"通过基础的属性 [disabled,small,on／off-value] 设置",descriptionMsg:"将 <code>disabled</code> 属性赋值为 'true/false' 来设置是否禁止点击，并可通过 <code>small</code> 属性来指定大小（默认default可不设置） 和 <code>on／off-value</code> 属性 <code>on开启，off关闭</code> 来设置开启状态，可通过<code>switchCall</code>设置回调[根据使用情况而定]"}},[l("ComSwipeout"),t._v(" "),l("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[t._v('<template>\n  <div slot="header" style="width:100%">\n    <div class="sw-list">\n        <div slot="title" class="left-s">开关状态</div>\n        <mk-switch slot="value" v-model="checked"/>\n    </div>\n    <div class="sw-list">\n        <div slot="title" class="left-s">开关状态</div>\n        <mk-switch slot="value" name="" v-model="value" on-value="1" off-value="0" />\n    </div>\n    <div class="sw-list">\n        <div slot="title" class="left-s">开关状态 </div>\n        <mk-switch @switchCall="swFun" small slot="value" v-model="checked"/>\n    </div>\n  </div>\n</template>\n<script>\n    import MkSwitch from \'./switch\'\n    export default {\n        components: {\n            MkSwitch\n        },\n        data () {\n            return {\n                checked: true,\n                value: \'0\'\n            }\n        },\n        methods: {\n            swFun (value) {\n                console.log(value)\n            }\n        }\n    }\n<\/script>\n')])])])])],1),t._v(" "),l("table",[l("thead",[l("tr",[l("th",[t._v("参数名")]),t._v(" "),l("th",{staticStyle:{"text-align":"center"}},[t._v("参数说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"right"}},[t._v("参数值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",[t._v("disabled")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("是否禁止")]),t._v(" "),l("td",{staticStyle:{"text-align":"right"}},[t._v("true/false")])]),t._v(" "),l("tr",[l("td",[t._v("small")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("显示类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"right"}},[t._v("default small")])]),t._v(" "),l("tr",[l("td",[t._v("on／off-value")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("设置选中状态")]),t._v(" "),l("td",{staticStyle:{"text-align":"right"}},[t._v("on／off  on-value与v-model值设置一直标示选中")])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);