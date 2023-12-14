"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3859],{12376:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var a=l(85893),i=l(11151);const t={tags:["Tooling","Luxd APIs"],description:"The Luxd Postman collection includes all the public API calls that are available on Luxd instance, allowing you to quickly issue commands to your node and see the response, without having to copy and paste long and complicated `curl` commands.",pagination_label:"Luxd Install Script",sidebar_position:2},o="Making API Calls",s={id:"tooling/luxd-postman-collection/making-api-calls",title:"Making API Calls",description:"The Luxd Postman collection includes all the public API calls that are available on Luxd instance, allowing you to quickly issue commands to your node and see the response, without having to copy and paste long and complicated `curl` commands.",source:"@site/docs/tooling/luxd-postman-collection/making-api-calls.md",sourceDirName:"tooling/luxd-postman-collection",slug:"/tooling/luxd-postman-collection/making-api-calls",permalink:"/tooling/luxd-postman-collection/making-api-calls",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/tooling/luxd-postman-collection/making-api-calls.md",tags:[{label:"Tooling",permalink:"/tags/tooling"},{label:"Luxd APIs",permalink:"/tags/luxd-ap-is"}],version:"current",sidebarPosition:2,frontMatter:{tags:["Tooling","Luxd APIs"],description:"The Luxd Postman collection includes all the public API calls that are available on Luxd instance, allowing you to quickly issue commands to your node and see the response, without having to copy and paste long and complicated `curl` commands.",pagination_label:"Luxd Install Script",sidebar_position:2},sidebar:"tooling",previous:{title:"Luxd Install Script",permalink:"/tooling/luxd-postman-collection/setup"},next:{title:"Luxd Install Script",permalink:"/tooling/luxd-postman-collection/variables"}},c={},d=[{value:"How to Make an API Call",id:"how-to-make-an-api-call",level:2},{value:"Examples",id:"examples",level:2},{value:"C-Chain Public API Call",id:"c-chain-public-api-call",level:3},{value:"X-Chain Public API Call",id:"x-chain-public-api-call",level:3},{value:"P-Chain Public API Call",id:"p-chain-public-api-call",level:3},{value:"API Call Using Variables",id:"api-call-using-variables",level:3}];function r(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"making-api-calls",children:"Making API Calls"}),"\n",(0,a.jsx)(n.h2,{id:"how-to-make-an-api-call",children:"How to Make an API Call"}),"\n",(0,a.jsxs)(n.p,{children:["After ",(0,a.jsx)(n.a,{href:"../luxd-postman-collection/setup#setup",children:"installing Postman"}),"\nand importing the ",(0,a.jsx)(n.a,{href:"../luxd-postman-collection/setup#collection-import",children:"Lux collection"}),", you can choose an API to make the call."]}),"\n",(0,a.jsx)(n.p,{children:"You should also make sure the URL is the correct one for the call.\nThis URL consists of the base URL and the endpoint:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The base URL is set by an environment variable called ",(0,a.jsx)(n.code,{children:"baseURL"}),", and it is by\ndefault Lux's ",(0,a.jsx)(n.a,{href:"/tooling/rpc-providers#mainnet-rpc---public-api-server",children:"public API"}),".\nIf you need to make a local API call, simply change the URL to localhost.\nThis can be done by changing the value\nof the ",(0,a.jsx)(n.code,{children:"baseURL"})," variable or changing the URL directly on the call tab.\nCheck out the ",(0,a.jsx)(n.a,{href:"/tooling/rpc-providers",children:"RPC providers"})," to see all public URLs."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The API endpoint depends on which API is used. Please check out\n",(0,a.jsx)(n.a,{href:"/reference/luxd/c-chain/api",children:"our APIs"})," to find the proper endpoint."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The last step is to add the needed parameters for the call.\nFor example, if a user wants to fetch data\nabout a certain transaction, the transaction hash is needed. For fetching data about a\nblock, depending on the call used, the block hash or number will be required."}),"\n",(0,a.jsxs)(n.p,{children:["After clicking the ",(0,a.jsx)(n.strong,{children:"Send"})," button, if the call is successfully, the output will be displayed in the ",(0,a.jsx)(n.strong,{children:"Body"})," tab."]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:["Data visualization is available for a number of methods.\nLearn how to use it with the help of\n",(0,a.jsx)(n.a,{href:"/tooling/luxd-postman-collection/data-visualization",children:"this"})," guide."]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Make Call",src:l(93067).Z+"",width:"3342",height:"1870"})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"c-chain-public-api-call",children:"C-Chain Public API Call"}),"\n",(0,a.jsxs)(n.p,{children:["Fetching data about a C-Chain transaction using ",(0,a.jsx)(n.code,{children:"eth_getTransactionByHash"}),"."]}),"\n",(0,a.jsx)("iframe",{src:"https://www.youtube.com/embed/B9jVNOrrZ_w?modestbranding=1&rel=0&color=white&autoplay=0",allow:"autoplay",width:"1000",height:"800",frameborder:"0",allowfullscreen:!0}),"\n",(0,a.jsx)(n.h3,{id:"x-chain-public-api-call",children:"X-Chain Public API Call"}),"\n",(0,a.jsxs)(n.p,{children:["Fetching data about an X-Chain block using ",(0,a.jsx)(n.code,{children:"avm.getBlock"}),"."]}),"\n",(0,a.jsx)("iframe",{src:"https://www.youtube.com/embed/4Yu2G3Zvrdo?modestbranding=1&rel=0&color=white&autoplay=0",allow:"autoplay",width:"1000",height:"800",frameborder:"0",allowfullscreen:!0}),"\n",(0,a.jsx)(n.h3,{id:"p-chain-public-api-call",children:"P-Chain Public API Call"}),"\n",(0,a.jsxs)(n.p,{children:["Getting the current P-Chain height using ",(0,a.jsx)(n.code,{children:"platform.getHeight"}),"."]}),"\n",(0,a.jsx)("iframe",{src:"https://www.youtube.com/embed/9d5VPNcODDw?modestbranding=1&rel=0&color=white&autoplay=0",allow:"autoplay",width:"1000",height:"800",frameborder:"0",allowfullscreen:!0}),"\n",(0,a.jsx)(n.h3,{id:"api-call-using-variables",children:"API Call Using Variables"}),"\n",(0,a.jsxs)(n.p,{children:["Let\u2019s say we want fetch data about this ",(0,a.jsx)(n.code,{children:"0x20cb0c03dbbe39e934c7bb04979e3073cc2c93defa30feec41198fde8fabc9b8"}),"\nC-Chain transaction using both:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"eth_getTransactionReceipt"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"eth_getTransactionByHash"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"We can set up an environment variable with the transaction hash as value and use it on both calls."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Find out more about variables ",(0,a.jsx)(n.a,{href:"/tooling/luxd-postman-collection/variables",children:"here"}),"."]})}),"\n",(0,a.jsx)("iframe",{src:"https://www.youtube.com/embed/26xCiawBRjM?modestbranding=1&rel=0&color=white&autoplay=0",allow:"autoplay",width:"1000",height:"800",frameborder:"0",allowfullscreen:!0})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},93067:(e,n,l)=>{l.d(n,{Z:()=>a});const a=l.p+"assets/images/postman-38-make-api-call-c359f996a92dba7b05ac65d7f7d99dc4.png"},11151:(e,n,l)=>{l.d(n,{Z:()=>s,a:()=>o});var a=l(67294);const i={},t=a.createContext(i);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);