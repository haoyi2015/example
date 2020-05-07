(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{606:function(t,e,n){"use strict";n.r(e);var o=n(0),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"popup"}},[t._v("Popup")]),t._v(" "),n("hr"),t._v(" "),n("Common-Democode",{attrs:{title:"基本用法",description:"通过Popup可避免返回关闭页面",descriptionMsg:"将<code>direction</code> 属性赋值为 top, right, bottom, left "}},[n("ComPopup"),t._v(" "),n("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('<template>\n  <div slot="header" style="width:100%">\n    <button v-for="(bnt,index) in bntVal" :key="index" class="dt-button dt-button--primary" @click="popupShow(bnt)">使用</button>\n    <popup :open.sync="openFullTitle" :full="true" title="title" :direction="direction">\n      <div style="padding:0 0.2rem">\n      新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。\n      学习开始时，播放了有关生态环境保护的专题片。随后，何立峰、姜大明、陈吉宁、陈政高、陈雷同志先后发言，他们结合本部门工作实际谈了对推进生态文明建设、推动绿色发展、加强环境保护等方面的体会和意见。\n      </div>\n    </popup>\n  </div>\n</template>\n<script>\n  import Popup from \'./popup\'\n  export default {\n    components: {\n      Popup\n    },\n    data () {\n      return {\n        openFullTitle: false,\n        direction: \'right\',\n        bntVal: [\'top\',\'right\',\'bottom\',\'left\']\n      }\n    },\n    methods: {\n      popupShow (v) {\n        this.openFullTitle = true\n        this.direction = v\n      }\n    }\n  }\n<\/script>\n')])])])])],1),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数名")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("参数说明")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("参数值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("direction")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("显示位置")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("[top,right,bottom,left]")])])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);