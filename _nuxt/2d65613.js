(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{323:function(t,e,n){var content=n(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("ee24d304",content,!0,{sourceMap:!1})},324:function(t,e,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("ca897d46",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";function o(t){return`scrollama__debug-offset--${t}`}function r({id:t,offsetVal:e,stepEl:n}){!function({id:t,offsetVal:e,stepClass:n}){const r=document.createElement("div");r.id=o(t),r.className="scrollama__debug-offset",r.style.position="fixed",r.style.left="0",r.style.width="100%",r.style.height="0",r.style.borderTop="2px dashed black",r.style.zIndex="9999";const p=document.createElement("p");p.innerHTML=`".${n}" trigger: <span>${e}</span>`,p.style.fontSize="12px",p.style.fontFamily="monospace",p.style.color="black",p.style.margin="0",p.style.padding="6px",r.appendChild(p),document.body.appendChild(r)}({id:t,offsetVal:e,stepClass:n[0].className})}function c({id:t,index:e,state:n}){const o=`scrollama__debug-step--${t}-${e}`,r=document.getElementById(`${o}_above`),c=document.getElementById(`${o}_below`),l="enter"===n?"block":"none";r&&(r.style.display=l),c&&(c.style.display=l)}function l(){const t=["stepAbove","stepBelow","stepProgress","viewportAbove","viewportBelow"];let e={},n={},l=null,d=[],f=[],v=[],w=[],m=0,h=0,x=0,_=0,y=0,C=0,I=!1,k=!1,M=!1,E=!1,S=!1,$=!1,N="down",z="percent";const T=[];function j(t){console.error(`scrollama error: ${t}`)}function H(){e={stepEnter:()=>{},stepExit:()=>{},stepProgress:()=>{}},n={}}function R(t){const{top:e}=t.getBoundingClientRect();return e+window.pageYOffset-(document.body.clientTop||0)}function A(element){return+element.getAttribute("data-scrollama-index")}function Z(){window.pageYOffset>y?N="down":window.pageYOffset<y&&(N="up"),y=window.pageYOffset}function L(t){n[t]&&n[t].forEach((t=>t.disconnect()))}function B(){x=window.innerHeight,_=function(){const{body:body}=document,html=document.documentElement;return Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight)}();h=m*("pixels"===z?1:x),I&&(f=d.map((t=>t.getBoundingClientRect().height)),v=d.map(R),k&&K()),M&&function({id:t,offsetMargin:e,offsetVal:n,format:r}){const c="pixels"===r?"px":"",l=o(t),d=document.getElementById(l);d.style.top=`${e}px`,d.querySelector("span").innerText=`${n}${c}`}({id:l,offsetMargin:h,offsetVal:m,format:z})}function O(e){if(e&&!k){if(!I)return j("scrollama error: enable() called before scroller was ready"),void(k=!1);K()}!e&&k&&t.forEach(L),k=e}function P(element,progress){const t=A(element);void 0!==progress&&(w[t].progress=progress);const n={element:element,index:t,progress:w[t].progress};"enter"===w[t].state&&e.stepProgress(n)}function D(t,e){if("above"===e)for(let i=0;i<t;i+=1){const t=w[i];"enter"!==t.state&&"down"!==t.direction?(G(d[i],"down",!1),J(d[i],"down")):"enter"===t.state&&J(d[i],"down")}else if("below"===e)for(let i=w.length-1;i>t;i-=1){const t=w[i];"enter"===t.state&&J(d[i],"up"),"down"===t.direction&&(G(d[i],"up",!1),J(d[i],"up"))}}function G(element,t,n=!0){const o=A(element),r={element:element,index:o,direction:t};w[o].direction=t,w[o].state="enter",S&&n&&"down"===t&&D(o,"above"),S&&n&&"up"===t&&D(o,"below"),e.stepEnter&&!T[o]&&(e.stepEnter(r,w),M&&c({id:l,index:o,state:"enter"}),$&&(T[o]=!0)),E&&P(element)}function J(element,t){const n=A(element),o={element:element,index:n,direction:t};E&&("down"===t&&w[n].progress<1?P(element,1):"up"===t&&w[n].progress>0&&P(element,0)),w[n].direction=t,w[n].state="exit",e.stepExit(o,w),M&&c({id:l,index:n,state:"exit"})}function Y([t]){Z();const{isIntersecting:e,boundingClientRect:n,target:o}=t,{top:r,bottom:c}=n,l=r-h,d=c-h,f=A(o),v=w[f];e&&l<=0&&d>=0&&"down"===N&&"enter"!==v.state&&G(o,N),!e&&l>0&&"up"===N&&"enter"===v.state&&J(o,N)}function F([t]){Z();const{isIntersecting:e,boundingClientRect:n,target:o}=t,{top:r,bottom:c}=n,l=r-h,d=c-h,f=A(o),v=w[f];e&&l<=0&&d>=0&&"up"===N&&"enter"!==v.state&&G(o,N),!e&&d<0&&"down"===N&&"enter"===v.state&&J(o,N)}function V([t]){Z();const{isIntersecting:e,target:n}=t,o=A(n),r=w[o];e&&"down"===N&&"down"!==r.direction&&"enter"!==r.state&&(G(n,"down"),J(n,"down"))}function U([t]){Z();const{isIntersecting:e,target:n}=t,o=A(n),r=w[o];e&&"up"===N&&"down"===r.direction&&"enter"!==r.state&&(G(n,"up"),J(n,"up"))}function W([t]){Z();const{isIntersecting:e,intersectionRatio:n,boundingClientRect:o,target:r}=t,{bottom:c}=o;e&&c-h>=0&&P(r,+n)}function X(){n.stepProgress=d.map(((t,i)=>{const e=`${f[i]-h}px 0px ${-x+h}px 0px`,n=function(t){const e=Math.ceil(t/C),n=[],o=1/e;for(let i=0;i<e;i+=1)n.push(i*o);return n}(f[i]),o=new IntersectionObserver(W,{rootMargin:e,threshold:n});return o.observe(t),o}))}function K(){t.forEach(L),n.viewportAbove=d.map(((t,i)=>{const e=_-v[i],n=h-x-f[i],o=new IntersectionObserver(V,{rootMargin:`${e}px 0px ${n}px 0px`});return o.observe(t),o})),n.viewportBelow=d.map(((t,i)=>{const e=-h-f[i],n=h-x+f[i]+_,o=new IntersectionObserver(U,{rootMargin:`${e}px 0px ${n}px 0px`});return o.observe(t),o})),n.stepAbove=d.map(((t,i)=>{const e=-h+f[i],n=new IntersectionObserver(Y,{rootMargin:`${e}px 0px ${h-x}px 0px`});return n.observe(t),n})),n.stepBelow=d.map(((t,i)=>{const e=-h,n=h-x+f[i],o=new IntersectionObserver(F,{rootMargin:`${e}px 0px ${n}px 0px`});return o.observe(t),o})),E&&X()}function Q(element){return!(!element||1!==element.nodeType)&&(function(element){const style=window.getComputedStyle(element);return("scroll"===style.overflowY||"auto"===style.overflowY)&&element.scrollHeight>element.clientHeight}(element)?element:Q(element.parentNode))}const tt={};return tt.setup=({step:t,parent:e,offset:n=.5,progress:progress=!1,threshold:o=4,debug:c=!1,order:f=!0,once:v=!1})=>{if(H(),l=function(){const a="abcdefghijklmnopqrstuv",t=a.length,e=Date.now();return`${[0,0,0].map((e=>a[Math.floor(Math.random()*t)])).join("")}${e}`}(),d=function(t,e=document){return"string"==typeof t?Array.from(e.querySelectorAll(t)):t instanceof Element?[t]:t instanceof NodeList?Array.from(t):t instanceof Array?t:[]}(t,e),!d.length)return j("no step elements"),tt;const h=d.reduce(((t,s)=>t||Q(s.parentNode)),!1);return h&&console.error("scrollama error: step elements cannot be children of a scrollable element. Remove any css on the parent element with overflow: scroll; or overflow: auto; on elements with fixed height.",h),M=c,E=progress,S=f,$=v,tt.offsetTrigger(n),C=Math.max(1,+o),I=!0,M&&r({id:l,stepEl:d,offsetVal:m}),d.forEach(((t,i)=>t.setAttribute("data-scrollama-index",i))),w=d.map((()=>({direction:null,state:null,progress:0}))),B(),tt.enable(),tt},tt.resize=()=>(B(),tt),tt.enable=()=>(O(!0),tt),tt.disable=()=>(O(!1),tt),tt.destroy=()=>{O(!1),H()},tt.offsetTrigger=t=>{if(null===t)return m;if("number"==typeof t)z="percent",t>1&&j("offset value is greater than 1. Fallback to 1."),t<0&&j("offset value is lower than 0. Fallback to 0."),m=Math.min(Math.max(0,t),1);else if("string"==typeof t&&t.indexOf("px")>0){const e=+t.replace("px","");isNaN(e)?(j("offset value must be in 'px' format. Fallback to 0.5."),m=.5):(z="pixels",m=e)}else j("offset value does not include 'px'. Fallback to 0.5."),m=.5;return tt},tt.onStepEnter=t=>("function"==typeof t?e.stepEnter=t:j("onStepEnter requires a function"),tt),tt.onStepExit=t=>("function"==typeof t?e.stepExit=t:j("onStepExit requires a function"),tt),tt.onStepProgress=t=>("function"==typeof t?e.stepProgress=t:j("onStepProgress requires a function"),tt),tt}function d(template,style,script,t,e,n,o,r,c,l){"boolean"!=typeof o&&(c=r,r=o,o=!1);const d="function"==typeof script?script.options:script;let f;if(template&&template.render&&(d.render=template.render,d.staticRenderFns=template.staticRenderFns,d._compiled=!0,e&&(d.functional=!0)),t&&(d._scopeId=t),n?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=f):style&&(f=o?function(t){style.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){style.call(this,r(t))}),f)if(d.functional){const t=d.render;d.render=function(e,n){return f.call(n),t(e,n)}}else{const t=d.beforeCreate;d.beforeCreate=t?[].concat(t,f):[f]}return script}const f=d({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"scrollama__steps"},[t._t("default")],2)},staticRenderFns:[]},undefined,{inheritAttrs:!1,name:"Scrollama",mounted(){this._scroller=l(),this.setup()},beforeDestroy(){this._scroller.destroy()},computed:{opts(){return Object.assign({},{step:Array.from(this.$el.children),progress:!!this.$listeners["step-progress"]},this.$attrs)}},methods:{setup(){this._scroller.destroy(),this._scroller.setup(this.opts).onStepProgress((t=>{this.$emit("step-progress",t)})).onStepEnter((t=>{this.$emit("step-enter",t)})).onStepExit((t=>{this.$emit("step-exit",t)})),window.addEventListener("resize",this.handleResize)},handleResize(){this._scroller.resize()}}},undefined,false,undefined,!1,void 0,void 0,void 0);e.a=f},355:function(t,e,n){t.exports=n.p+"img/01_newspaper.c49d5e8.png"},356:function(t,e,n){t.exports=n.p+"img/02_newspaper.ecbe4af.png"},357:function(t,e,n){t.exports=n.p+"img/03_newspaper.26f40c2.png"},358:function(t,e,n){t.exports=n.p+"img/04_newspaper.9ee27e2.png"},359:function(t,e,n){t.exports=n.p+"img/click_2.df548e1.svg"},360:function(t,e,n){t.exports=n.p+"img/timeline_newspaper.3916bc3.svg"},361:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTguNSIgY3k9IjE4LjUiIHI9IjE2LjUiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE4LjUgMTguNSkiIGZpbGw9ImJsYWNrIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPHBhdGggZD0iTTIwLjcwMDIgMTAuOEwxMi4yMzg3IDE4LjVMMjAuNzAwMiAyNi4yIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"},362:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTguNSIgY3k9IjE4LjUiIHI9IjE2LjUiIHRyYW5zZm9ybT0icm90YXRlKC05MCAxOC41IDE4LjUpIiBmaWxsPSJibGFjayIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGQ9Ik0xNi4yOTk4IDI2LjJMMjQuNzYxMyAxOC41TDE2LjI5OTggMTAuOCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},363:function(t,e,n){"use strict";n(323)},364:function(t,e,n){var o=n(43)(!1);o.push([t.i,".newspaper-slick .slick-next[data-v-46d9c944]{width:33px;right:-50px}.newspaper-slick .slick-prev[data-v-46d9c944]{width:33px;left:-50px}",""]),t.exports=o},365:function(t,e,n){"use strict";n(324)},366:function(t,e,n){var o=n(43)(!1);o.push([t.i,".newspaper-box[data-v-46d9c944]{max-width:1280px;margin:auto}.newspaper_1[data-v-46d9c944]{transform:rotate(-13.28deg);position:relative;left:10%;top:5%;cursor:pointer}@media(max-width:600px){.newspaper_1[data-v-46d9c944]{left:unset;top:unset;transform:rotate(5deg);max-width:95%}}.newspaper_2[data-v-46d9c944]{transform:rotate(-7.68deg);cursor:pointer}@media(max-width:600px){.newspaper_2[data-v-46d9c944]{transform:rotate(5deg);max-width:95%}}.newspaper_3[data-v-46d9c944]{transform:rotate(7.68deg);position:relative;right:5%;cursor:pointer}@media(max-width:600px){.newspaper_3[data-v-46d9c944]{right:unset;transform:rotate(5deg);max-width:95%}}.newspaper_4[data-v-46d9c944]{transform:rotate(13.28deg);position:relative;right:10%;top:5%;cursor:pointer}@media(max-width:600px){.newspaper_4[data-v-46d9c944]{right:unset;top:unset;transform:rotate(5deg);max-width:95%}}.long-arrow[data-v-46d9c944]{height:80px;border-left:3px dashed #fff;width:2px;margin:auto}@media(max-width:600px){.long-arrow[data-v-46d9c944]{height:40px}}.short-arrow[data-v-46d9c944]{height:40px;border-left:3px dashed #fff;width:2px;margin:auto}.newspaper-text[data-v-46d9c944]{max-width:470px;margin:auto}.circle[data-v-46d9c944]{width:50vh;height:50vh;margin:25vh auto;transition:.5s;background:#fff;filter:blur(29px);border-radius:50%}@media(max-width:600px){.circle[data-v-46d9c944]{width:180px;height:180px;margin:40vh auto;filter:blur(15px);transform:scale(2)}}.scaled[data-v-46d9c944]{transform:scale(10);filter:unset}.circle-text[data-v-46d9c944]{position:absolute;top:0;left:0;right:0;bottom:0;width:50vh;height:50vh;margin:auto;display:flex;justify-content:center;align-items:center}@media(max-width:600px){.circle-text[data-v-46d9c944]{width:300px;height:300px}}.circle-text-2[data-v-46d9c944],.fade[data-v-46d9c944]{opacity:0}.fadeIn[data-v-46d9c944]{opacity:1}.circle-scale[data-v-46d9c944]{position:sticky;position:-webkit-sticky;top:0}@media(max-width:600px){img[data-v-46d9c944]{max-width:95%}}.newspaper[data-v-46d9c944]:hover{opacity:.5}.wrap-modal-slider[data-v-46d9c944]{opacity:0;transition:all .3s}.wrap-modal-slider.open[data-v-46d9c944]{opacity:1}",""]),t.exports=o},393:function(t,e,n){"use strict";n.r(e);n(34);var o={components:{Scrollama:n(327).a},data:function(){return{newspaper_1:n(355),newspaper_2:n(356),newspaper_3:n(357),newspaper_4:n(358),click:n(359),timeline_newspaper:n(360),button_left_newspaper:n(361),button_right_newspaper:n(362),isFade:!1,slickOptions:{slidesToShow:1,slidesToScroll:1,speed:500,dots:!1,arrows:!0,infinite:!1,adaptiveHeight:!0,responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]}}},methods:{showNewspaperText:function(t){var e=this;this.$refs["newspaper-modal"].show(),this.$nextTick((function(){e.$refs.newspaper.goTo(t)})),setTimeout((function(){document.getElementById("wrap-modal-slider").classList.add("open")}),500)},handler:function(t){t.element;var e=t.index;t.direction;this.isFade=e>=1},onHandleCloseModal:function(){document.getElementById("wrap-modal-slider").classList.remove("open")}}},r=(n(363),n(365),n(65)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"\n      bg-black\n      min-h-screen\n      h-auto-mobile\n      py-5\n      d-flex\n      flex-column\n      justify-content-around\n    "},[t._m(0),t._v(" "),n("div",{staticClass:"text-center"},[n("div",{staticClass:"my-4"},[n("img",{attrs:{src:t.timeline_newspaper,alt:"timeline_newspaper"}})]),t._v(" "),n("p",{staticClass:"wv-font-anuphan wv-b3 text-white text-center mb-3"},[t._v("\n        ยังคงอยู่เสมอมา\n      ")]),t._v(" "),n("img",{attrs:{src:t.click,alt:"click"}})]),t._v(" "),n("div",{staticClass:"text-center my-5"},[n("b-row",{staticClass:"text-white newspaper-box",attrs:{"no-gutters":""}},[n("b-col",{attrs:{cols:"12",sm:"3"}},[n("p",{staticClass:"wv-font-anuphan wv-b3 mb-3"},[t._v("\n            ช่วงรัฐบาล"),n("br"),t._v("จอมพลสฤษดิ์ ธนะรัชต์\n          ")]),t._v(" "),n("div",[n("div",{staticClass:"long-arrow"}),t._v(" "),n("font-awesome-icon",{staticClass:"text-white",attrs:{icon:["fas","chevron-down"]}})],1),t._v(" "),n("img",{staticClass:"newspaper_1 mt-5 newspaper",attrs:{src:t.newspaper_1,alt:"",width:"100%"},on:{click:function(e){return t.showNewspaperText(0)}}})]),t._v(" "),n("b-col",{attrs:{cols:"12",sm:"3"}},[n("p",{staticClass:"wv-font-anuphan wv-b3 mb-3"},[t._v("\n            ช่วงหลังเหตุการณ์"),n("br"),t._v("6 ตุลาคม 2519\n          ")]),t._v(" "),n("div",[n("div",{staticClass:"short-arrow"}),t._v(" "),n("font-awesome-icon",{staticClass:"text-white",attrs:{icon:["fas","chevron-down"]}})],1),t._v(" "),n("img",{staticClass:"newspaper_2 mt-5 newspaper",attrs:{src:t.newspaper_2,alt:"",width:"100%"},on:{click:function(e){return t.showNewspaperText(1)}}})]),t._v(" "),n("b-col",{attrs:{cols:"12",sm:"3"}},[n("p",{staticClass:"wv-font-anuphan wv-b3 mb-3"},[t._v("\n            ช่วงรัฐบาลประยุทธ์"),n("br"),t._v("ที่มาจากการรัฐประหาร\n          ")]),t._v(" "),n("div",[n("div",{staticClass:"short-arrow"}),t._v(" "),n("font-awesome-icon",{staticClass:"text-white",attrs:{icon:["fas","chevron-down"]}})],1),t._v(" "),n("img",{staticClass:"newspaper_3 mt-5 newspaper",attrs:{src:t.newspaper_3,alt:"",width:"100%"},on:{click:function(e){return t.showNewspaperText(2)}}})]),t._v(" "),n("b-col",{attrs:{cols:"12",sm:"3"}},[n("p",{staticClass:"wv-font-anuphan wv-b3 mb-3"},[t._v("\n            ช่วงรัฐบาลประยุทธ์ที่มาจากการเลือกตั้งด้วยกติกาไม่เป็นธรรม\n          ")]),t._v(" "),n("div",[n("div",{staticClass:"long-arrow"}),t._v(" "),n("font-awesome-icon",{staticClass:"text-white",attrs:{icon:["fas","chevron-down"]}})],1),t._v(" "),n("img",{staticClass:"newspaper_4 mt-5 newspaper",attrs:{src:t.newspaper_4,alt:"",width:"100%"},on:{click:function(e){return t.showNewspaperText(3)}}})])],1)],1)]),t._v(" "),n("div",{staticClass:"bg-black h-100vh overflow-hidden circle-scale"},[n("div",{staticClass:"position-relative mb-5"},[n("div",{staticClass:"circle",class:{scaled:t.isFade}}),t._v(" "),n("h2",{staticClass:"wv-b2 circle-text wv-font-kondolar text-center flex-column",class:{fade:t.isFade}},[t._v("\n        หากจะกล่าวว่า"),n("br"),t._v(" "),n("span",{staticClass:"wv-font-black"},[t._v("“ประเทศนี้เป็นประชาธิปไตย”")]),n("br"),t._v(" "),n("span",{staticClass:"wv-font-black"},[t._v("“ยุติธรรมทำลาย”")]),t._v("\n        ต้องถูกแก้ไขและยับยั้งอย่างจริงจัง"),n("br"),n("br"),t._v("\n\n        เพื่อไม่ให้เรื่องราวเหล่านี้"),n("br"),t._v("เกิดกับคนไทยคนใดอีกต่อไป\n      ")]),t._v(" "),n("h2",{staticClass:"\n          wv-h5\n          circle-text circle-text-2\n          wv-font-kondolar wv-font-black\n          text-center\n          flex-column\n        ",class:{fadeIn:t.isFade}},[t._v("\n        การต่อต้าน และยับยั้ง"),n("br"),t._v("\n        “ยุติธรรมทำลาย”"),n("br"),t._v("\n        เพื่อปกป้อง “สิทธิเสรีภาพ”"),n("br"),t._v("\n        ของประชาชนไทย\n      ")])])]),t._v(" "),n("Scrollama",{attrs:{offset:.9},on:{"step-enter":t.handler}},[n("div",{staticClass:"h-100vh"},[t._v("1")]),t._v(" "),n("div",{staticClass:"h-100vh"},[t._v("1")]),t._v(" "),n("div",{staticClass:"h-100vh"},[t._v("1")])]),t._v(" "),n("b-modal",{ref:"newspaper-modal",attrs:{id:"newspaper-modal","hide-footer":"","hide-header":"","no-fade":"",centered:""},on:{hide:function(e){return t.onHandleCloseModal()}}},[n("div",{staticClass:"wrap-modal-slider",attrs:{id:"wrap-modal-slider"}},[n("VueSlickCarousel",t._b({ref:"newspaper",staticClass:"newspaper-slick",attrs:{id:"newspaper-slick"},scopedSlots:t._u([{key:"prevArrow",fn:function(e){return[n("img",{attrs:{src:t.button_left_newspaper,alt:"button_left_default"}})]}},{key:"nextArrow",fn:function(e){return[n("img",{attrs:{src:t.button_right_newspaper,alt:"button_right_default"}})]}}])},"VueSlickCarousel",t.slickOptions,!1),[n("div",{staticClass:"p-3 text-white bg-black wv-font-anuphan wv-b3 newspaper-text"},[n("p",{staticClass:"yellow mb-1 wv-font-black"},[t._v("\n            ช่วงรัฐบาลจอมพลสฤษดิ์ ธนะรัชต์\n          ")]),t._v(" "),n("p",{staticClass:"m-0"},[t._v("\n            มีการใช้พระราชบัญญัติว่าด้วยการกระทำอันเป็น คอมมิวนิสต์ พ.ศ.2495\n            เป็นเครื่องมือในการจัดการ นักการเมือง อดีตรัฐมนตรี\n            นักหนังสือพิมพ์หรือ นักเขียน ทนายความ ครูอาจารย์ นิสิตนักศึกษา\n            ปัญญาชน รวมทั้งกรรมการสหภาพแรงงาน\n            ทำให้มีผู้ถูกจับด้วยข้อหาดังกล่าวจำนวน 190 คน\n          ")])]),t._v(" "),n("div",{staticClass:"p-3 text-white bg-black wv-font-anuphan wv-b3 newspaper-text"},[n("p",{staticClass:"yellow mb-1 wv-font-black"},[t._v("\n            ช่วงหลังเหตุการณ์ 6 ตุลาคม 2519\n          ")]),t._v(" "),n("p",{staticClass:"m-0"},[t._v("\n            มีการใช้กฎหมายดำเนินคดีกับนักศึกษาและประชาชน จำนวนมาก\n            มีผู้ถูกจับไม่น้อยกว่า 3,094 คน มีผู้ถูกดำเนินคดีทั้งสิ้น 106 คน\n            ภายใต้ข้อหาต่าง ๆ เช่น การกระทำอันเป็นคอมมิวนิสต์ กบฏ มั่วสุมกัน\n            ตั้งแต่สิบคนขึ้นไป มั่วสุมสมคบกันตั้งแต่ห้าคนขึ้นไป เป็นซ่องโจร\n          ")])]),t._v(" "),n("div",{staticClass:"p-3 text-white bg-black wv-font-anuphan wv-b3 newspaper-text"},[n("p",{staticClass:"yellow mb-1 wv-font-black"},[t._v("\n            ช่วงรัฐบาลประยุทธ์ที่มาจากการรัฐประหาร\n          ")]),t._v(" "),n("p",{staticClass:"m-0"},[t._v("\n            มีการใช้ข้อหา\n            “ฝ่าฝืนคำสั่งห้ามมั่วสุ่มหรือชุมนุมทางการเมืองตั้งแต่ 5 คน ขึ้นไป”\n            ตามประกาศ คสช. ที่ 7/2557 และคำสั่งหัวหน้า คสช. ที่ 3/2558\n            ดำเนินคดีกับผู้เคลื่อนไหวแสดงออกทางการเมือง อย่างน้อย 428 คน\n            และใช้ พ.ร.บ.การชุมนุมสาธารณะฯ ดำเนินคดีควบคู่ไปกับคำสั่งหัวหน้า\n            คสช. อย่างน้อย 276 คน"),n("br"),n("br"),t._v("\n            มีการใช้ข้อหา “ยุยงปลุกปั่น” ตามประมวลกฎหมายอาญา มาตรา 116\n            ดำเนินคดีกับผู้แสดงความคิดเห็นหรือเผยแพร่ข้อมูลวิพากษ์วิจารณ์ คสช.\n            หรือเป็นผู้นำปราศรัยในการชุมนุมต่าง ๆ อย่างน้อย 124 คน"),n("br"),n("br"),t._v("\n            มีการใช้ พ.ร.บ.คอมพิวเตอร์ฯ\n            ดำเนินคดีกับผู้แสดงความคิดเห็นทางการเมืองบนโลกออนไลน์ อย่างน้อย\n            197 คน\n          ")])]),t._v(" "),n("div",{staticClass:"p-3 text-white bg-black wv-font-anuphan wv-b3 newspaper-text"},[n("p",{staticClass:"yellow mb-1 wv-font-black"},[t._v("\n            ช่วงรัฐบาลประยุทธ์ที่มาจากการเลือกตั้ง ด้วยกติกาไม่เป็นธรรม\n          ")]),t._v(" "),n("p",{staticClass:"m-0"},[t._v("\n            มีการใช้ พ.ร.บ.การชุมนุมสาธารณะฯ ดำเนินคดีกับ\n            ประชาชนที่ออกมาชุมนุมทางการเมือง อย่างน้อย 28 คน"),n("br"),n("br"),t._v("\n\n            มีการใช้ พ.ร.บ.คอมพิวเตอร์ฯ\n            ดำเนินคดีกับผู้แสดงความคิดเห็นทางการเมืองบนโลกออนไลน์ อย่างน้อย 42\n            คน\n          ")])])])],1)])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"\n          wv-font-kondolar wv-font-black\n          text-center\n          wv-h5\n          text-white\n          mb-3\n        "},[t._v("\n        ประเทศไทย กับ “ยุติธรรมทำลาย”"),n("br"),t._v("เป็น “ของคู่กัน”\n      ")]),t._v(" "),n("p",{staticClass:"wv-font-anuphan wv-b6 text-white text-center"},[t._v("\n        (คลิกที่หนังสือพิมพ์เพื่ออ่านรายละเอียด)\n      ")])])}],!1,null,"46d9c944",null);e.default=component.exports}}]);