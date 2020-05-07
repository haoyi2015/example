(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{610:function(t,e,a){"use strict";a.r(e);var l=a(0),n=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"textarea"}},[t._v("Textarea")]),t._v(" "),a("hr"),t._v(" "),a("Common-Democode",{attrs:{title:"基本用法",description:"通过基础的属性 [maxLen,isCut,overCall] 设置",descriptionMsg:"将 <code>isCut</code> 属性赋值为 'true/false' 来设置是否截取，并可通过 <code>maxLen</code> 属性来指定输入长度（默认默认不限制），可通过<code>overCall</code>设置回调[根据使用情况而定]"}},[a("ComTextarea"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <div slot="header" style="width:100%">\n    <limit-textarea :maxLen="10" placeholder="最多输入10个字符"></limit-textarea>\n    <limit-textarea :maxLen="10" placeholder="最多输入10个字符" isCut @overCall="overCallVal"></limit-textarea>\n  </div>\n</template>\n<script>\n    import limitTextarea from \'./textarea\'\n    export default {\n    data() {\n        return {}\n    },\n    components: {\n        limitTextarea\n    },\n    methods: {\n        overCallVal (v) {\n            console.log(v)\n        }\n    }\n    }\n<\/script>\n')])])])])],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("参数说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("参数值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("maxLen")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("设置长度")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("默认无")])]),t._v(" "),a("tr",[a("td",[t._v("isCut")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("设置是否截取")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("true/false")])]),t._v(" "),a("tr",[a("td",[t._v("overCall")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("设置回调")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("回调值")])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);