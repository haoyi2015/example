(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{529:function(e,t,i){"use strict";i.r(t);i(42);var n={componentName:"Tab",mixins:[i(93).c],props:["underlineWidth"],updated:function(){this.computedStyle()},destroyed:function(){window.removeEventListener("resize",this.$computedStyle)},methods:{afterMounted:function(){this.computedStyle(),window.addEventListener("resize",this.computedStyle)},computedStyle:function(){var e=this;this.$nextTick((function(){var t=e.$el.querySelector(".mk-tab-underline"),i=e.$el.querySelector(".is-active");if(i){var n=i.offsetWidth,s=n,d=i.offsetLeft;"auto"===e.underlineWidth||0===e.underlineWidth?(s=i.children[0].offsetWidth,d=i.offsetLeft+(n-s)/2):e.underlineWidth&&(s=e.underlineWidth,d=i.offsetLeft+(n-e.underlineWidth)/2),requestAnimationFrame((function(){t.style.cssText="width: ".concat(s,"px;left:").concat(d,"px;display:block")}))}}))},handleChange:function(e){e!==this.active&&(this.$emit("update:active",e).$emit("change",e),this.computedStyle())}}},s=i(0),d=Object(s.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:["mk-flexbox","mk-tab"],attrs:{onselectstart:"return false;"}},[this._t("default"),this._v(" "),t("div",{staticClass:"mk-tab-underline"})],2)}),[],!1,null,null,null);t.default=d.exports}}]);