(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{499:function(e,t,n){},523:function(e,t,n){"use strict";var i=n(499);n.n(i).a},540:function(e,t,n){"use strict";n.r(t);n(22),n(46),n(27),n(47);var i={name:"m-slide",computed:{wrapperStyle:function(){return{transform:"translate3d(".concat(this.offset,"px, 0, 0)"),transition:this.draging?"none":".6s cubic-bezier(0.18, 0.89, 0.32, 1)"}}},data:function(){return{delAreaWidth:70,open:!1,offset:0,draging:!1,componentName:"m-slide"}},props:{threshold:{type:Number,default:35},delCls:{type:String,default:"m-slide__del-red"},delText:{type:String,default:"删除"}},methods:{getTouch:function(e){return e.changedTouches[0]||e.targetTouches[0]},isAngleLeft:function(e,t){var n=Math.abs(e),i=Math.abs(t);return!(n<5||n>=5&&i>=1.73*n)},setOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.open=e,this.offset=e?-this.delAreaWidth:0},closeOther:function(){var e=this;this.$parent.$children.filter((function(t){return t.$el.classList.contains(e.componentName)&&t.open&&t!==e})).forEach((function(e){e.setOpen(!1)}))}},directives:{slide:{bind:function(e,t,n){var i,s,o,l,r=n.context;e.addEventListener("touchstart",(function(e){var t=r.getTouch(e),n=t.clientX,o=t.clientY;i=n,s=o,r.draging=!0})),e.addEventListener("touchmove",(function(e){var t=r.getTouch(e),n=t.clientX,a=t.clientY;o=n-i,l=a-s,r.isAngleLeft(o,l)&&Math.abs(o)<=r.delAreaWidth&&(o<0&&!r.open||o>0&&r.open)&&(event.preventDefault(),r.offset=r.open?o-r.delAreaWidth:o)})),e.addEventListener("touchend",(function(t){var n=r.getTouch(t),a=n.clientX,c=n.clientY;o=a-i,l=c-s,r.draging=!1,o>0&&o>r.threshold||o<0&&o>-r.threshold?(r.open=!1,r.offset=0):r.isAngleLeft(o,l)&&(o>0&&o<=r.threshold||o<0&&o<=-r.threshold)&&(r.open=!0,r.offset=-r.delAreaWidth,r.closeOther.call(r,e),r.$emit("slip-open",r))}))}}}},s=(n(523),n(0)),o=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"slide",rawName:"v-slide"}],class:e.componentName},[n("div",{ref:"slideItem",staticClass:"m-slide__top",style:e.wrapperStyle},[e.$slots.item?e._t("item"):e._t("default")],2),e._v(" "),n("div",{class:"m-slide__del "+e.delCls,on:{click:function(t){return e.$emit("del-click")}}},[e.$slots.del?e._t("del"):n("span",[e._v(e._s(e.delText))])],2)])}),[],!1,null,null,null);t.default=o.exports}}]);