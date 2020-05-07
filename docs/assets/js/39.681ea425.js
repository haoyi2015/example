(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{594:function(t,e,n){"use strict";n.r(e);var a=n(0),l=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"bankinput"}},[t._v("BankInput")]),t._v(" "),n("hr"),t._v(" "),n("Common-Democode",{attrs:{title:"基本用法",description:"通过基础的属性 [bankVal,plad,maxLen,bankReplace] 设置",descriptionMsg:"将 <code>bankReplace</code> 属性赋值为 'true/false' 来设置是否分割，并可通过 <code>maxLen</code> 属性来指定输入长度，通过<code>plad</code> 属性 <code>设置placeholder</code>，<code>bankVal</code>来设置初始值，通过<code>repLen</code>属性来设置分割位数，可通过<code>bankCall</code>设置回调[根据使用情况而定]"}},[n("ComBank"),t._v(" "),n("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('<template>\n  <div slot="header" style="width:100%">\n    <bank-input\n        :bankVal.sync="val"\n        :plad="plad"\n        :maxLen="16"\n        :bankReplace="true"\n        :repLen="4"\n        @bankCall="bankCall">\n    </bank-input>\n  </div>\n</template>\n<script>\n    import BankInput from \'./input/bank.vue\'\n    export default {\n    components: {\n        BankInput\n    },\n    data () {\n        return {\n        val: 622918911129,\n        plad: \'\'\n        }\n    },\n    methods: {\n        bankCall (v) {\n            console.log(v)\n        }\n    }\n    }\n<\/script>\n')])])])])],1),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数名")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("参数说明")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("参数值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("bankVal")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("6282822101910101")])]),t._v(" "),n("tr",[n("td",[t._v("bankReplace")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("是否开启分割")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("true/false")])]),t._v(" "),n("tr",[n("td",[t._v("maxLen")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("设置输入长度")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("...")])]),t._v(" "),n("tr",[n("td",[t._v("repLen")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("设置分割位数")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("默认4位")])]),t._v(" "),n("tr",[n("td",[t._v("plad")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("设置placeholder")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("...")])])])])],1)}),[],!1,null,null,null);e.default=l.exports}}]);