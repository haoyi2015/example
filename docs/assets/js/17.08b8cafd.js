(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{498:function(e,t,a){},521:function(e,t,a){"use strict";var n=a(498);a.n(n).a},541:function(e,t,a){"use strict";a.r(t);a(27),a(13),a(166);var n={componentName:"mkSwitch",props:{swvalue:{type:[Boolean,String,Number]},disabled:{type:Boolean},name:{type:String,default:function(){return Math.random().toString(36).substr(2)}},value:{type:[Boolean,String,Number],default:!1},onValue:{default:!0},offValue:{default:!1},small:{type:Boolean},switchCall:{type:Function,default:function(){}}},methods:{handleChange:function(e){var t=e.target.checked?this.onValue:this.offValue;this.$emit("input",t).$emit("change",t).$emit("switchCall",[e.target.value,t])}}},l=(a(521),a(0)),u=Object(l.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["mk-switch--wrapper",{"is-disabled":e.disabled,"mk-switch--small":e.small}]},[a("input",{attrs:{name:e.name,type:"checkbox"},domProps:{checked:e.onValue==e.value,value:e.swvalue},on:{change:e.handleChange}}),e._v(" "),a("button",{attrs:{type:"button",tabindex:"-2"}})])}),[],!1,null,"1d47a027",null);t.default=u.exports}}]);