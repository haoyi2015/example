(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{538:function(t,e,i){"use strict";i.r(e);i(27);var n={name:"Mimit",props:{placeholder:{type:String,default:"请输入内容"},rows:{type:Number,default:4},maxLen:{type:Number,default:20},isCut:{type:Boolean,default:!1},value:{type:[String,Number],default:""},overCall:{type:Function,default:function(){}}},data:function(){return{isOver:!1,num:this.maxLen,currentValue:""}},methods:{handleInput:function(t){var e=t.target.value;this.$emit("input",e),this.setCurrentValue(e),this.$emit("change",e)},strlen:function(t){for(var e=0,i=0;i<t.length;i++){var n=t.charCodeAt(i);n>=1&&n<=126||65376<=n&&n<=65439?e++:e+=2}return e},setCurrentValue:function(t){var e=t.length;if(this.currentValue=t,e<=this.maxLen)this.isOver=!1,this.num=this.maxLen-e,this.$emit("overCall",this.currentValue);else{if(this.isCut)return this.currentValue=t.substring(0,this.maxLen),this.num=e>this.maxLen?0:e-this.maxLen,void this.$emit("overCall",this.currentValue);this.isOver=!0,this.num=e-this.maxLen,this.$emit("overCall",this.currentValue)}}},watch:{}},a=i(0),s=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"m__warp"},[i("textarea",t._b({staticClass:"m__limit--textarea",class:{"m__limit-over":t.isOver},domProps:{value:t.currentValue},on:{input:t.handleInput}},"textarea",t.$props,!1)),t._v(" "),i("span",{staticClass:"m__limit--text"},[t._v("\n    "+t._s(t.isOver?"已超出":"还可以输入")),i("span",{staticClass:"m__limit--num",class:{"m__limit--num-over":t.isOver}},[t._v(t._s(t.num))]),t._v("个字\n  ")])])}),[],!1,null,null,null);e.default=s.exports}}]);