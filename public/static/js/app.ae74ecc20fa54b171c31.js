webpackJsonp([1],{40:function(n,e){},41:function(n,e,t){t(85);var r=t(14)(t(48),t(93),"data-v-4338925e",null);n.exports=r.exports},42:function(n,e,t){t(87);var r=t(14)(t(49),t(95),"data-v-6d5aa06c",null);n.exports=r.exports},43:function(n,e,t){t(86);var r=t(14)(t(46),t(94),"data-v-66680e6c",null);n.exports=r.exports},44:function(n,e,t){t(88);var r=t(14)(t(47),t(96),"data-v-77093727",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),u=t(24),a=t.n(u),l=t(42),c=t.n(l),d=t(41),m=t.n(d),f=t(40);t.n(f);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 🏎️🏎️🏎️🏎️🏎️🏎️\n* 大家好，我是铁曦\n* 五月了，还在奔赴大厂的努力路上,投递得需要一份简历撒\n* 说做就做🚀！\n*/\n\n/* 首先来个小过渡🔭 */\n* {\n  transition: all .3s;\n}\n/* 整个背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字又距离太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 加个高亮哇 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 再加点3D效果🪐 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 写作前我先整个md编辑器😀 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好啦! 我要开始写简历了☄️ */\n\n\n","\n/* enenen...好像差点什么😆\n * 对了，这是 Markdown 格式的，我必须要对 HR 更友好撒\n * Easy! 那就简单转换一下\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"张铁曦\n----\n\n初级前端工程师，实现未实现的,跳动未跳动的😆。\n\n技能\n----\n\n* 前端开发\n* SSR开发\n* 小程序开发\n* App开发\n\n工作经历\n----\n\n1. 百词斩\n2. 成都茂松软件有限公司\n\n链接\n----\n\n* [GitHub](https://github.com/Y13iiuZ)\n* [公众号](Y24iiuX)\n\n> 感谢可爱的你耐心地看完😘！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=a()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=a()(s.a.mark(function e(){var r,u,a,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:u=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),a=u-r.length,this.currentStyle.length<u?(l=this.currentStyle.length-a,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),u=t(24),a=t.n(u),l=t(42),c=t.n(l),d=t(41),m=t.n(d),f=t(40);t.n(f);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 🏎️🏎️🏎️🏎️🏎️🏎️\n* 大家好，我是铁曦\n* 五月了，还在奔赴大厂的努力路上,投递得需要一份简历撒\n* 说做就做🚀！\n*/\n\n/* 首先来个小过渡🔭 */\n* {\n  transition: all .3s;\n}\n/* 整个背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字又距离太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 加个高亮哇 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 再加点3D效果🪐 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 写作前我先整个md编辑器😀 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好啦! 我要开始写简历了☄️ */\n\n\n","\n/* enenen...好像差点什么😆\n * 对了，这是 Markdown 格式的，我必须要对 HR 更友好撒\n * Easy! 那就简单转换一下\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"张铁曦\n----\n\n初级前端工程师，实现未实现的,跳动未跳动的😆。\n\n技能\n----\n\n* 前端开发\n* SSR开发\n* 小程序开发\n* App开发\n\n工作经历\n----\n\n1. 百词斩\n2. 成都茂松软件有限公司\n\n链接\n----\n\n* [GitHub](https://github.com/Y13iiuZ)\n* [公众号](Y24iiuX)\n\n> 感谢可爱的你耐心地看完😘！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=a()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=a()(s.a.mark(function e(){var r,u,a,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:u=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),a=u-r.length,this.currentStyle.length<u?(l=this.currentStyle.length-a,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(89),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),u=t.n(s),a=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(a>500?i.a:u.a)}})},85:function(n,e){},86:function(n,e){},87:function(n,e){},88:function(n,e){},93:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.ae74ecc20fa54b171c31.js.map