(window.webpackJsonp=window.webpackJsonp||[]).push([[8,14],{500:function(e,t,o){},526:function(e,t,o){"use strict";var n=o(500);o.n(n).a},527:function(e,t,o){},541:function(e,t,o){"use strict";o.r(t);var n={props:{copyCont:{type:"",required:!1},copyBnt:{type:"",required:!1},copyCall:Function},methods:{clipboardFun:function(e){var t=e,o=t.target.attributes["data-content"],n=o&&o.nodeValue?o.nodeValue:t.target.innerText,s=null,i=document.getElementById("copyTarget");(s=document.createElement("div")).id="copyTarget",s.style.opacity="0",s.innerText=n,document.body.appendChild(s);try{var c=document.createRange();c.selectNode(s),window.getSelection().removeAllRanges(),window.getSelection().addRange(c),document.execCommand("copy"),window.getSelection().removeAllRanges(),console.log("复制成功"),this.$emit("copyCall",this.copyCont),null!=i&&i.parentNode.removeChild(i)}catch(t){console.log("复制失败"),this.$emit("copyCall","fail"),null!=i&&i.remove()}}}},s=(o(526),o(0)),i=Object(s.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("i",{attrs:{"data-content":this.copyCont},on:{click:this.clipboardFun}},[this._v(this._s(this.copyBnt))])])}),[],!1,null,null,null);t.default=i.exports},571:function(e,t,o){"use strict";var n=o(527);o.n(n).a},584:function(e,t,o){"use strict";o.r(t);var n={name:"DemoPage",props:["title","description","descriptionMsg"],components:{Clipboard:o(541).default},data:function(){return{isShow:!1,codeTextBtn:"显示代码",getPreText:""}},methods:{handleToggleShow:function(){this.isShow=!this.isShow,this.codeTextBtn=this.isShow?"隐藏代码":"显示代码"},copyCall:function(e){this.$toast({message:"复制成功",type:"success",align:"center"}),console.log("复制成功")}},mounted:function(){this.getPreText=document.getElementsByTagName("pre")[0].innerText||""}},s=(o(571),o(0)),i=Object(s.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"code"},[o("div",{staticClass:"code--title"},[o("h2",[e._v(e._s(e.title))]),e._v(" "),o("small",[e._v(e._s(e.description))])]),e._v(" "),o("div",{staticClass:"code--demo"},[o("div",{staticClass:"code-content"},[e._t("default")],2)]),e._v(" "),o("div",{staticClass:"code--description",domProps:{innerHTML:e._s(e.descriptionMsg)}}),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"code--segment",class:{show:e.isShow}},[e._t("codeText")],2),e._v(" "),e.$slots.codeText?o("div",{staticClass:"code--button"},[o("a",{attrs:{href:"javascript:;"},on:{click:e.handleToggleShow}},[e._v(e._s(e.codeTextBtn))]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"copy-right"},[o("clipboard",{attrs:{copyCont:e.getPreText,copyBnt:"复制代码"},on:{copyCall:e.copyCall}})],1)]):e._e()])}),[],!1,null,"37605628",null);t.default=i.exports}}]);