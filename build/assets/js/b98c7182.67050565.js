"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8675],{37937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var o=n(85893),s=n(11151);const l={},r="AllowList",d={id:"deprecated/tutorials-contest/2022/local-subnet-development/precompiles/AllowList",title:"AllowList",description:"",source:"@site/docs/deprecated/tutorials-contest/2022/local-subnet-development/precompiles/AllowList.md",sourceDirName:"deprecated/tutorials-contest/2022/local-subnet-development/precompiles",slug:"/deprecated/tutorials-contest/2022/local-subnet-development/precompiles/AllowList",permalink:"/deprecated/tutorials-contest/2022/local-subnet-development/precompiles/AllowList",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/deprecated/tutorials-contest/2022/local-subnet-development/precompiles/AllowList.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function i(e){const t={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"allowlist",children:"AllowList"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-solidity",children:"// (c) 2022-2023, Lux Partners, Inc. All rights reserved.\n// See the file LICENSE for licensing terms.\n\n// SPDX-License-Identifier: MIT\n\npragma solidity >=0.8.0;\n\ninterface AllowListInterface {\n    // Set [addr] to have the admin role over the allow list\n    function setAdmin(address addr) external;\n\n    // Set [addr] to be enabled on the allow list\n    function setEnabled(address addr) external;\n\n    // Set [addr] to have no role over the allow list\n    function setNone(address addr) external;\n\n    // Read the status of [addr]\n    function readAllowList(address addr) external view returns (uint256);\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var o=n(67294);const s={},l=o.createContext(s);function r(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);