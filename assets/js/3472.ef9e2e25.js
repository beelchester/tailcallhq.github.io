/*! For license information please see 3472.ef9e2e25.js.LICENSE.txt */
(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3472],{29813:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});n(96540);var r=n(11062),i=n(74848);function a(e){let{children:t,fallback:n}=e;return(0,r.A)()?(0,i.jsx)(i.Fragment,{children:t?.()}):n??null}},7227:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:n,children:t})}},49489:(e,t,n)=>{"use strict";n.d(t,{A:()=>E});var r=n(96540),i=n(34164),a=n(24245),o=n(56347),s=n(36494),l=n(62814),u=n(45167),c=n(69900);function f(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return f(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,f]=h({queryString:n,groupId:i}),[m,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,c.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),g=(()=>{const e=u??m;return p({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),f(e),v(e)}),[f,v,a]),tabValues:a}}var v=n(11062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),i=s[n].value;i!==r&&(u(t),o(i))},f=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:f,onClick:c,...a,className:(0,i.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function V(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,b.jsx)(y,{...t,...e}),(0,b.jsx)(w,{...t,...e})]})}function E(e){const t=(0,v.A)();return(0,b.jsx)(V,{...e,children:f(e.children)},String(t))}},76991:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CountUp:()=>i});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=function(){function e(e,t,n){var i=this;this.endVal=t,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){i.startTime||(i.startTime=e);var t=e-i.startTime;i.remaining=i.duration-t,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(t,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(t,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(t/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),t<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(e){var t,n,r,a,o=e<0?"-":"";t=Math.abs(e).toFixed(i.options.decimalPlaces);var s=(t+="").split(".");if(n=s[0],r=s.length>1?i.options.decimal+s[1]:"",i.options.useGrouping){a="";for(var l=3,u=0,c=0,f=n.length;c<f;++c)i.options.useIndianSeparators&&4===c&&(l=2,u=1),0!==c&&u%l==0&&(a=i.options.separator+a),u++,a=n[f-c-1]+a;n=a}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]}))),o+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<t&&i>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>i||r>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t;if(this.el){var n=this.formattingFn(e);(null===(t=this.options.plugin)||void 0===t?void 0:t.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},25858:(e,t,n)=>{var r="Expected a function",i=NaN,a="[object Symbol]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,d="object"==typeof self&&self&&self.Object===Object&&self,p=f||d||Function("return this")(),h=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return p.Date.now()};function b(e,t,n){var i,a,o,s,l,u,c=0,f=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function h(t){var n=i,r=a;return i=a=void 0,c=t,s=e.apply(r,n)}function b(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=o}function V(){var e=g();if(b(e))return E(e);l=setTimeout(V,function(e){var n=t-(e-u);return d?v(n,o-(e-c)):n}(e))}function E(e){return l=void 0,p&&i?h(e):(i=a=void 0,s)}function O(){var e=g(),n=b(e);if(i=arguments,a=this,u=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(V,t),f?h(e):s}(u);if(d)return l=setTimeout(V,t),h(u)}return void 0===l&&(l=setTimeout(V,t)),s}return t=w(t)||0,y(n)&&(f=!!n.leading,o=(d="maxWait"in n)?m(w(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=u=a=l=void 0},O.flush=function(){return void 0===l?s:E(g())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&h.call(e)==a}(e))return i;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=l.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):s.test(e)?i:+e}e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),b(e,t,{leading:i,maxWait:t,trailing:a})}},84722:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(96540);const i=(...e)=>e.filter(((e,t,n)=>Boolean(e)&&n.indexOf(e)===t)).join(" ");var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const o=(0,r.forwardRef)((({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:s="",children:l,iconNode:u,...c},f)=>(0,r.createElement)("svg",{ref:f,...a,width:t,height:t,stroke:e,strokeWidth:o?24*Number(n)/Number(t):n,className:i("lucide",s),...c},[...u.map((([e,t])=>(0,r.createElement)(e,t))),...Array.isArray(l)?l:[l]]))),s=(e,t)=>{const n=(0,r.forwardRef)((({className:n,...a},s)=>{return(0,r.createElement)(o,{ref:s,iconNode:t,className:i(`lucide-${l=e,l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,n),...a});var l}));return n.displayName=`${e}`,n}},48635:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=(0,n(84722).A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},64856:(e,t,n)=>{"use strict";var r=n(96540),i=n(76991);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function l(e,t,n){return(t=s(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,o,s=[],l=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){u=!0,i=e}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function h(e){var t=r.useRef(e);return p((function(){t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(void 0,n)}),[])}var m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],v={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},g=function(e){var t=Object.fromEntries(Object.entries(e).filter((function(e){return void 0!==f(e,2)[1]}))),n=r.useMemo((function(){return o(o({},v),t)}),[e]),a=n.ref,s=n.startOnMount,l=n.enableReinitialize,u=n.delay,d=n.onEnd,p=n.onStart,g=n.onPauseResume,b=n.onReset,y=n.onUpdate,w=c(n,m),V=r.useRef(),E=r.useRef(),O=r.useRef(!1),j=h((function(){return function(e,t){var n=t.decimal,r=t.decimals,a=t.duration,o=t.easingFn,s=t.end,l=t.formattingFn,u=t.numerals,c=t.prefix,f=t.separator,d=t.start,p=t.suffix,h=t.useEasing,m=t.useGrouping,v=t.useIndianSeparators,g=t.enableScrollSpy,b=t.scrollSpyDelay,y=t.scrollSpyOnce,w=t.plugin;return new i.CountUp(e,s,{startVal:d,duration:a,decimal:n,decimalPlaces:r,easingFn:o,formattingFn:l,numerals:u,separator:f,prefix:c,suffix:p,plugin:w,useEasing:h,useIndianSeparators:v,useGrouping:m,enableScrollSpy:g,scrollSpyDelay:b,scrollSpyOnce:y})}("string"==typeof a?a:a.current,w)})),S=h((function(e){var t=V.current;if(t&&!e)return t;var n=j();return V.current=n,n})),x=h((function(){var e=function(){return S(!0).start((function(){null==d||d({pauseResume:C,reset:A,start:R,update:N})}))};u&&u>0?E.current=setTimeout(e,1e3*u):e(),null==p||p({pauseResume:C,reset:A,update:N})})),C=h((function(){S().pauseResume(),null==g||g({reset:A,start:R,update:N})})),A=h((function(){S().el&&(E.current&&clearTimeout(E.current),S().reset(),null==b||b({pauseResume:C,start:R,update:N}))})),N=h((function(e){S().update(e),null==y||y({pauseResume:C,reset:A,start:R})})),R=h((function(){A(),x()})),k=h((function(e){s&&(e&&A(),x())}));return r.useEffect((function(){O.current?l&&k(!0):(O.current=!0,k())}),[l,O,k,u,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),r.useEffect((function(){return function(){A()}}),[A]),{start:R,pauseResume:C,reset:A,update:N,getCountUp:S}},b=["className","redraw","containerProps","children","style"];t.Ay=function(e){var t=e.className,n=e.redraw,i=e.containerProps,a=e.children,s=e.style,l=c(e,b),f=r.useRef(null),d=r.useRef(!1),p=g(o(o({},l),{},{ref:f,startOnMount:"function"!=typeof a||0===e.delay,enableReinitialize:!1})),m=p.start,v=p.reset,y=p.update,w=p.pauseResume,V=p.getCountUp,E=h((function(){m()})),O=h((function(t){e.preserveValue||v(),y(t)})),j=h((function(){"function"!=typeof e.children||f.current instanceof Element?V():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){j()}),[j]),r.useEffect((function(){d.current&&O(e.end)}),[e.end,O]);var S=n&&e;return r.useEffect((function(){n&&d.current&&E()}),[E,n,S]),r.useEffect((function(){!n&&d.current&&E()}),[E,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),r.useEffect((function(){d.current=!0}),[]),"function"==typeof a?a({countUpRef:f,start:m,reset:v,update:y,pauseResume:w,getCountUp:V}):r.createElement("span",u({className:t,ref:f,style:s},i),void 0!==e.start?V().formattingFn(e.start):"")}},51521:(e,t,n)=>{var r=n(96540);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(r);!function(e){if(!e||"undefined"==typeof window)return;const t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');const o=r.forwardRef((function({style:e={},className:t="",autoFill:n=!1,play:i=!0,pauseOnHover:o=!1,pauseOnClick:s=!1,direction:l="left",speed:u=50,delay:c=0,loop:f=0,gradient:d=!1,gradientColor:p="white",gradientWidth:h=200,onFinish:m,onCycleComplete:v,onMount:g,children:b},y){const[w,V]=r.useState(0),[E,O]=r.useState(0),[j,S]=r.useState(1),[x,C]=r.useState(!1),A=r.useRef(null),N=y||A,R=r.useRef(null),k=r.useCallback((()=>{if(R.current&&N.current){const e=N.current.getBoundingClientRect(),t=R.current.getBoundingClientRect();let r=e.width,i=t.width;"up"!==l&&"down"!==l||(r=e.height,i=t.height),S(n&&r&&i&&i<r?Math.ceil(r/i):1),V(r),O(i)}}),[n,N,l]);r.useEffect((()=>{if(x&&(k(),R.current&&N.current)){const e=new ResizeObserver((()=>k()));return e.observe(N.current),e.observe(R.current),()=>{e&&e.disconnect()}}}),[k,N,x]),r.useEffect((()=>{k()}),[k,b]),r.useEffect((()=>{C(!0)}),[]),r.useEffect((()=>{"function"==typeof g&&g()}),[]);const P=r.useMemo((()=>n?E*j/u:E<w?w/u:E/u),[n,w,E,j,u]),T=r.useMemo((()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!i||o?"paused":"running","--pause-on-click":!i||o&&!s||s?"paused":"running","--width":"up"===l||"down"===l?"100vh":"100%","--transform":"up"===l?"rotate(-90deg)":"down"===l?"rotate(90deg)":"none"})),[e,i,o,s,l]),F=r.useMemo((()=>({"--gradient-color":p,"--gradient-width":"number"==typeof h?`${h}px`:h})),[p,h]),I=r.useMemo((()=>({"--play":i?"running":"paused","--direction":"left"===l?"normal":"reverse","--duration":`${P}s`,"--delay":`${c}s`,"--iteration-count":f?`${f}`:"infinite","--min-width":n?"auto":"100%"})),[i,l,P,c,f,n]),D=r.useMemo((()=>({"--transform":"up"===l?"rotate(90deg)":"down"===l?"rotate(-90deg)":"none"})),[l]),M=r.useCallback((e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map(((e,t)=>a.default.createElement(r.Fragment,{key:t},r.Children.map(b,(e=>a.default.createElement("div",{style:D,className:"rfm-child"},e))))))),[D,b]);return x?a.default.createElement("div",{ref:N,style:T,className:"rfm-marquee-container "+t},d&&a.default.createElement("div",{style:F,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:I,onAnimationIteration:v,onAnimationEnd:m},a.default.createElement("div",{className:"rfm-initial-child-container",ref:R},r.Children.map(b,(e=>a.default.createElement("div",{style:D,className:"rfm-child"},e)))),M(j-1)),a.default.createElement("div",{className:"rfm-marquee",style:I},M(j))):null}));t.A=o},66830:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(96540)),i=s(n(5556)),a=s(n(25858)),o=s(n(2833));function s(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var u=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).isVisible=function(e,t,r){var i=e.top,a=e.left,o=e.bottom,s=e.right,l=e.width,u=e.height,c=n.props,f=c.offset,d=c.partialVisibility;if(i+s+o+a===0)return!1;var p=0-f,h=0-f,m=t+f,v=r+f;return d?i+u>=p&&a+l>=h&&o-u<=v&&s-l<=m:i>=p&&a>=h&&o<=v&&s<=m},n.isComponentVisible=function(){setTimeout((function(){if(n.nodeRef&&n.nodeRef.getBoundingClientRect){var e=document.documentElement,t=n.props.once,r=n.nodeRef.getBoundingClientRect(),i=window.innerWidth||e.clientWidth,a=window.innerHeight||e.clientHeight,o=n.isVisible(r,i,a);o&&t&&n.removeListener(),n.setState({isVisible:o})}}),0)},n.setNodeRef=function(e){return n.nodeRef=e},n.ownProps=Object.keys(i.propTypes),n.state={isVisible:!1},n.throttleCb=(0,a.default)(n.isComponentVisible,n.props.throttleInterval),t.nodeRef&&n.setNodeRef(t.nodeRef),n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=i.prototype;return s.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},s.componentDidUpdate=function(e){(0,o.default)(this.getChildProps(this.props),this.getChildProps(e))||this.isComponentVisible()},s.componentWillUnmount=function(){this.removeListener()},s.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},s.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},s.getChildProps=function(e){var t=this;void 0===e&&(e=this.props);var n={};return Object.keys(e).forEach((function(r){-1===t.ownProps.indexOf(r)&&(n[r]=e[r])})),n},s.getChildren=function(){var e=this;return"function"==typeof this.props.children?this.props.children(l({},this.getChildProps(),{isVisible:this.state.isVisible})):r.default.Children.map(this.props.children,(function(t){return r.default.cloneElement(t,l({},e.getChildProps(),{isVisible:e.state.isVisible}))}))},s.render=function(){var e=this.props,t=e.className,n=e.style,i=e.nodeRef,a=e.tag,o=l({},t&&{className:t},n&&{style:n});return r.default.createElement(a,l({ref:!i&&this.setNodeRef},o),this.getChildren())},i}(r.PureComponent);t.default=u,u.propTypes={once:i.default.bool,throttleInterval:function(e,t,n){var r=e[t];return!Number.isInteger(r)||r<0?new Error("The "+t+" prop you provided to "+n+" is not a valid integer >= 0."):null},children:i.default.oneOfType([i.default.func,i.default.element,i.default.arrayOf(i.default.element)]),style:i.default.object,className:i.default.string,offset:i.default.number,partialVisibility:i.default.bool,nodeRef:i.default.object,tag:i.default.string},u.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"}},20093:(e,t,n)=>{"use strict";var r;t.A=void 0;var i=((r=n(66830))&&r.__esModule?r:{default:r}).default;t.A=i}}]);