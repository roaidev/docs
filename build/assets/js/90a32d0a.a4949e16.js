"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3727],{73144:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=s(85893),r=s(11151);const o={},i="InitProviders.js",c={id:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initProviders.js",title:"InitProviders.js",description:"",source:"@site/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initProviders.js.md",sourceDirName:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils",slug:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initProviders.js",permalink:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initProviders.js",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/utils/initProviders.js.md",tags:[],version:"current",frontMatter:{}},d={},a=[];function u(e){const t={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"initprovidersjs",children:"InitProviders.js"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'const { ethers } = require("ethers");\nconst chains = require("../constants/chains");\n\nmodule.exports = () => {\n\t/* Create providers for both chains */\n\tconst luxProvider = new ethers.providers.JsonRpcProvider(chains.lux.rpcUrl);\n\tconst subnetProvider = new ethers.providers.JsonRpcProvider(\n\t\tchains.subnet.rpcUrl\n\t);\n\treturn { lux: luxProvider, subnet: subnetProvider };\n};\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>i});var n=s(67294);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);