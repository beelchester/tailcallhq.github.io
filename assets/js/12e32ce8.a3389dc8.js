/*! For license information please see 12e32ce8.a3389dc8.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[788],{65033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var n=a(74848),r=a(28453),i=a(22806);const o={title:"Design a GraphQL Schema So Good, It'll Make REST APIs Cry - Part 4",authors:[{name:"Amit Singh",title:"Head of Growth and Strategy @ Tailcall",url:"https://github.com/amitksingh1490",image_url:"https://avatars.githubusercontent.com/u/23661702?v=5"}],tags:["GraphQL","API","Schema","Design","Best Practices"],description:"Learn how to remove schema elements without causing disruptions. Strategies to handle breaking changes and maintain backward compatibility.",image:"/images/blog/quiz-part4.png",hide_table_of_contents:!0,slug:"graphql-schema-part-2-3"},s=void 0,l={permalink:"/blog/graphql-schema-part-2-3",source:"@site/blog/graphql-schema-part-2-3-2024-07-23.mdx",title:"Design a GraphQL Schema So Good, It'll Make REST APIs Cry - Part 4",description:"Learn how to remove schema elements without causing disruptions. Strategies to handle breaking changes and maintain backward compatibility.",date:"2024-07-23T00:00:00.000Z",tags:[{inline:!0,label:"GraphQL",permalink:"/blog/tags/graph-ql"},{inline:!0,label:"API",permalink:"/blog/tags/api"},{inline:!0,label:"Schema",permalink:"/blog/tags/schema"},{inline:!0,label:"Design",permalink:"/blog/tags/design"},{inline:!0,label:"Best Practices",permalink:"/blog/tags/best-practices"}],readingTime:6.665,hasTruncateMarker:!0,authors:[{name:"Amit Singh",title:"Head of Growth and Strategy @ Tailcall",url:"https://github.com/amitksingh1490",image_url:"https://avatars.githubusercontent.com/u/23661702?v=5",imageURL:"https://avatars.githubusercontent.com/u/23661702?v=5"}],frontMatter:{title:"Design a GraphQL Schema So Good, It'll Make REST APIs Cry - Part 4",authors:[{name:"Amit Singh",title:"Head of Growth and Strategy @ Tailcall",url:"https://github.com/amitksingh1490",image_url:"https://avatars.githubusercontent.com/u/23661702?v=5",imageURL:"https://avatars.githubusercontent.com/u/23661702?v=5"}],tags:["GraphQL","API","Schema","Design","Best Practices"],description:"Learn how to remove schema elements without causing disruptions. Strategies to handle breaking changes and maintain backward compatibility.",image:"/images/blog/quiz-part4.png",hide_table_of_contents:!0,slug:"graphql-schema-part-2-3"},unlisted:!1,prevItem:{title:"Exploring GraphiQL: The In-Browser IDE for GraphQL",permalink:"/blog/exploring-graphiql"},nextItem:{title:"Design a GraphQL Schema So Good, It'll Make REST APIs Cry - Part 3",permalink:"/blog/graphql-schema-part-2-2"}},c={authorsImageUrls:[void 0]},h=[{value:"What Do You Already Know? \ud83e\udde0\ud83d\udcab",id:"what-do-you-already-know-",level:2}];function m(e){const t={h2:"h2",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"what-do-you-already-know-",children:"What Do You Already Know? \ud83e\udde0\ud83d\udcab"}),"\n",(0,n.jsx)(i.A,{title:"GraphQL Schema Change",questions:[{id:1,text:"What is a critical consideration before removing a field from a GraphQL schema?",options:["Ensuring the field is no longer in use by any clients","Providing a detailed explanation in the schema documentation","Immediately notifying all clients via email","Replacing the field with a temporary placeholder"],correctAnswer:0},{id:2,text:"Why is it recommended to deprecate a field before removing it?",options:["To avoid immediate schema validation errors","To provide clients with time to migrate to the new schema","To enhance schema performance temporarily","To test the removal process in a staging environment"],correctAnswer:1},{id:3,text:"What is the best practice for handling arguments that cannot be deprecated directly in GraphQL?",options:["Removing the argument immediately and updating the resolver","Indicating the deprecation through the argument's description","Notifying clients to ignore the argument","Using schema validation to enforce the change"],correctAnswer:1},{id:4,text:"What is a key risk when removing a type that is part of a union or implements an interface?",options:["It will cause performance degradation","It cannot be documented properly","It may break queries that rely on the type","It requires changing the schema version"],correctAnswer:2},{id:5,text:"How can you minimize disruption when removing an argument from a GraphQL query?",options:["Immediately notify all clients","Provide a new query or field that does not use the argument","Deprecate the entire query","Change the schema version"],correctAnswer:1},{id:8,text:"What is the primary goal of providing a deprecation period before removing a schema element?",options:["To test the impact of the removal on server performance","To allow clients sufficient time to adjust their queries","To prepare the documentation for the change","To gradually phase out old schema versions"],correctAnswer:1}]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},22806:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(96540);const r=(...e)=>e.filter(((e,t,a)=>Boolean(e)&&a.indexOf(e)===t)).join(" ");var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const o=(0,n.forwardRef)((({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:s="",children:l,iconNode:c,...h},m)=>(0,n.createElement)("svg",{ref:m,...i,width:t,height:t,stroke:e,strokeWidth:o?24*Number(a)/Number(t):a,className:r("lucide",s),...h},[...c.map((([e,t])=>(0,n.createElement)(e,t))),...Array.isArray(l)?l:[l]]))),s=(e,t)=>{const a=(0,n.forwardRef)((({className:a,...i},s)=>{return(0,n.createElement)(o,{ref:s,iconNode:t,className:r(`lucide-${l=e,l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,a),...i});var l}));return a.displayName=`${e}`,a},l=s("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),c=s("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),h=s("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var m=a(22375),d=a(74848);const g=()=>(0,d.jsx)("svg",{className:"w-5 h-5 inline-block mr-2",viewBox:"0 0 24 24",fill:"currentColor",children:(0,d.jsx)("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),u=e=>{let{questions:t,title:a}=e;const[r,i]=(0,n.useState)(0),[o,s]=(0,n.useState)(0),[u,p]=(0,n.useState)(!1),[x,b]=(0,n.useState)(null);return(0,d.jsxs)("div",{className:"max-w-2xl mx-auto p-6 bg-gradient-to-r from-purple-100 to-blue-100 shadow-lg rounded-xl",children:[(0,d.jsxs)("h2",{className:"text-3xl font-bold mb-6 text-center text-gray-800",children:[a," Quiz!"]}),u?(0,d.jsxs)("div",{className:"text-center",children:[(0,d.jsxs)("p",{className:"text-2xl mb-4 font-semibold text-gray-700",children:["You scored ",o," out of ",t.length]}),o>3?(0,d.jsxs)("div",{className:"flex flex-col items-center",children:[(0,d.jsx)("p",{className:"text-5xl mb-4",children:"\ud83c\udf89"}),(0,d.jsx)("p",{className:"text-green-600 font-bold text-xl",children:"Congratulations! You're a GraphQL schema change expert!"})]}):(0,d.jsxs)("div",{className:"flex flex-col items-center",children:[(0,d.jsx)(l,{size:64,className:"text-red-500 mb-4"}),(0,d.jsx)("p",{className:"text-red-600 font-bold text-xl",children:"Keep learning about schema changes. You'll get there!"})]}),(0,d.jsx)("div",{className:"mt-6 space-y-3",children:(0,d.jsxs)("button",{onClick:()=>((e,t,a,n)=>{(0,m.p8)(n,"score","score shared");const r=`I scored ${t} out of ${a} on the ${n} Quiz! Test your knowledge too!`,i=document.location.href;let o="";"twitter"===e&&(o=`https://twitter.com/intent/tweet?text=${encodeURIComponent(r)}&url=${encodeURIComponent(i)}&via=tailcallhq`),window.open(o,"_blank")})("twitter",o,t.length,a),className:"w-full bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-md flex items-center justify-center",children:[(0,d.jsx)(g,{})," Share on X (Twitter)"]})}),(0,d.jsx)("button",{onClick:()=>{(0,m.p8)(a,"Click","reset Clicked"),i(0),s(0),p(!1),b(null)},className:"mt-6 bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors duration-300 shadow-md w-full",children:"Retry Quiz"})]}):(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{className:"mb-4 text-lg font-semibold text-gray-600",children:["Question ",r+1,"/",t.length]}),(0,d.jsx)("p",{className:"text-xl font-bold mb-6 text-gray-800",children:t[r].text}),(0,d.jsx)("div",{className:"space-y-3",children:t[r].options.map(((e,n)=>(0,d.jsxs)("button",{onClick:()=>{return e=n,(0,m.p8)(a,"Click","Answer Clicked"),b(e),e===t[r].correctAnswer&&s(o+1),void setTimeout((()=>{b(null);const e=r+1;e<t.length?i(e):p(!0)}),1e3);var e},className:"w-full text-left p-4 rounded-lg transition-all duration-300 "+(null===x?"bg-white hover:bg-gray-100 shadow-md":x===n?n===t[r].correctAnswer?"bg-green-500 text-white":"bg-red-500 text-white":"bg-white"),disabled:null!==x,children:[(0,d.jsx)("span",{className:"text-lg font-medium",children:e}),x===n&&(0,d.jsx)("span",{className:"float-right",children:n===t[r].correctAnswer?(0,d.jsx)(c,{className:"inline text-white",size:24}):(0,d.jsx)(h,{className:"inline text-white",size:24})})]},n)))})]})]})}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var n=a(96540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);