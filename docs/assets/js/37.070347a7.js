(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{607:function(t,e,n){"use strict";n.r(e);var i=n(0),l=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"actionsheet"}},[t._v("Actionsheet")]),t._v(" "),n("hr"),t._v(" "),n("Common-Democode",{attrs:{title:"基本用法",description:"通过基础title，options配置使用",descriptionMsg:"描述"}},[n("ComActionsheet"),t._v(" "),n("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("<template>\n  <div slot=\"header\" style=\"width:100%\">\n    <div>1</div>\n  </div>\n</template>\n<script>\n  import { Actionsheet, ActionsheetItem } from '../components/actionsheet/index.js'\n  export default {\n    components: {\n      Actionsheet,\n      ActionsheetItem\n    },\n    data () {\n      return {\n        options: [\n          {\n            value: '1',\n            label: '编辑'\n          },\n          {\n            value: '2',\n            label: '收藏'\n          },\n          {\n            value: '3',\n            label: '分享'\n          },\n          {\n            value: '4',\n            label: '删除',\n            disabled: true\n          }\n        ],\n        open1: false,\n        open2: false,\n        open3: false\n      }\n    },\n    methods: {\n      actionsheetShow (index) {\n        if(index == 1){\n            this.open1 = true\n        }else if(index == 2){\n            this.open2 = true\n        }else if(index == 3){\n            this.open3 = true\n        }\n      },\n      actionsheetJS () {\n        let self = this\n          this.$actionsheet({\n            title: 'JS调用',\n            options: [...this.options]\n          }).then((value) => {\n            self.handleAction(value)\n          }).catch(() => {\n            console.log('close')\n          })\n      },\n      handleAction (value) {\n        let label = this.options.filter((item) => {\n          return item.value === value\n        })[0].label\n        this.$toast({message: `您点击了“${label}”`})\n      }\n    }\n  }\n<\/script>\n")])])])])],1),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数名")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("参数说明")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("参数值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("提示内容")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("内容标题")])]),t._v(" "),n("tr",[n("td",[t._v("options")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("菜单参数")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("数组对象")])])])])],1)}),[],!1,null,null,null);e.default=l.exports}}]);