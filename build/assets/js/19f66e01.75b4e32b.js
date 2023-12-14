"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9823],{24915:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(85893),i=t(11151);const r={tags:["Tooling","Lux-CLI"],description:"This guide demonstrates how to run Lux-CLI in a docker container.",pagination_label:"How to Run Lux-CLI with Docker",sidebar_label:"Run with Docker",sidebar_position:1},s="How to Run Lux-CLI with Docker",c={id:"tooling/cli-guides/run-with-docker",title:"How to Run Lux-CLI with Docker",description:"This guide demonstrates how to run Lux-CLI in a docker container.",source:"@site/docs/tooling/cli-guides/run-with-docker.md",sourceDirName:"tooling/cli-guides",slug:"/tooling/cli-guides/run-with-docker",permalink:"/tooling/cli-guides/run-with-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/tooling/cli-guides/run-with-docker.md",tags:[{label:"Tooling",permalink:"/tags/tooling"},{label:"Lux-CLI",permalink:"/tags/lux-cli"}],version:"current",sidebarPosition:1,frontMatter:{tags:["Tooling","Lux-CLI"],description:"This guide demonstrates how to run Lux-CLI in a docker container.",pagination_label:"How to Run Lux-CLI with Docker",sidebar_label:"Run with Docker",sidebar_position:1},sidebar:"tooling",previous:{title:"Install Lux-CLI",permalink:"/tooling/cli-guides/install-cli"},next:{title:"How to Import a Subnet into Lux-CLI",permalink:"/tooling/cli-guides/import-subnet"}},u={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"how-to-run-lux-cli-with-docker",children:"How to Run Lux-CLI with Docker"}),"\n",(0,o.jsx)(n.p,{children:"To run Lux-CLI in a docker container, you need to enable ipv6."}),"\n",(0,o.jsxs)(n.p,{children:["Edit ",(0,o.jsx)(n.code,{children:"/etc/docker/daemon.json"}),". Add this snippet then restart the docker service."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "ipv6": true,\n  "fixed-cidr-v6": "fd00::/80"\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var o=t(67294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);