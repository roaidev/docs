"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6097],{55018:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(85893),l=i(11151);const o={tags:["Tooling","Lux-CLI"],description:"This guide demonstrates how to install Lux-CLI.",pagination_label:"Install Lux-CLI",sidebar_label:"Install Lux-CLI",sidebar_position:0},s="Install Lux-CLI",r={id:"tooling/cli-guides/install-cli",title:"Install Lux-CLI",description:"This guide demonstrates how to install Lux-CLI.",source:"@site/docs/tooling/cli-guides/install-cli.md",sourceDirName:"tooling/cli-guides",slug:"/tooling/cli-guides/install-cli",permalink:"/tooling/cli-guides/install-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/tooling/cli-guides/install-cli.md",tags:[{label:"Tooling",permalink:"/tags/tooling"},{label:"Lux-CLI",permalink:"/tags/lux-cli"}],version:"current",sidebarPosition:0,frontMatter:{tags:["Tooling","Lux-CLI"],description:"This guide demonstrates how to install Lux-CLI.",pagination_label:"Install Lux-CLI",sidebar_label:"Install Lux-CLI",sidebar_position:0},sidebar:"tooling",previous:{title:"Lux-CLI",permalink:"/tooling/cli"},next:{title:"How to Run Lux-CLI with Docker",permalink:"/tooling/cli-guides/run-with-docker"}},a={},c=[{value:"Compatibility",id:"compatibility",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Adding Lux-CLI to Your PATH",id:"adding-lux-cli-to-your-path",level:2},{value:"Checking Your Installation",id:"checking-your-installation",level:2},{value:"Updating",id:"updating",level:2},{value:"Building from Source",id:"building-from-source",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"install-lux-cli",children:"Install Lux-CLI"}),"\n",(0,t.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsx)(n.p,{children:"Lux-CLI runs on Linux and Mac. Windows is currently not supported."}),"\n",(0,t.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,t.jsx)(n.p,{children:"To download a binary for the latest release, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"curl -sSfL https://raw.githubusercontent.com/luxdefi/cli/main/scripts/install.sh | sh -s\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The script installs the binary inside the ",(0,t.jsx)(n.code,{children:"~/bin"})," directory. If the directory doesn't exist,\nit will be created."]}),"\n",(0,t.jsx)(n.h2,{id:"adding-lux-cli-to-your-path",children:"Adding Lux-CLI to Your PATH"}),"\n",(0,t.jsxs)(n.p,{children:["To call the ",(0,t.jsx)(n.code,{children:"lux"})," binary from anywhere, you'll need to add it to your system path. If you installed\nthe binary into the default location, you can run the following snippet to add it to your path."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"export PATH=~/bin:$PATH\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To add it to your path permanently, add an export command to your shell initialization script. If\nyou run ",(0,t.jsx)(n.code,{children:"bash"}),", use ",(0,t.jsx)(n.code,{children:".bashrc"}),". If you run ",(0,t.jsx)(n.code,{children:"zsh"}),", use ",(0,t.jsx)(n.code,{children:".zshrc"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"export PATH=~/bin:$PATH >> .bashrc\n"})}),"\n",(0,t.jsx)(n.h2,{id:"checking-your-installation",children:"Checking Your Installation"}),"\n",(0,t.jsxs)(n.p,{children:["You can test your installation by running ",(0,t.jsx)(n.code,{children:"lux --version"}),". The tool should print the running version."]}),"\n",(0,t.jsx)(n.h2,{id:"updating",children:"Updating"}),"\n",(0,t.jsx)(n.p,{children:"To update your installation, you need to delete your current binary and download the latest version\nusing the preceding steps."}),"\n",(0,t.jsx)(n.h2,{id:"building-from-source",children:"Building from Source"}),"\n",(0,t.jsxs)(n.p,{children:["The source code is available in this ",(0,t.jsx)(n.a,{href:"https://github.com/luxdefi/cli",children:"GitHub repository"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["After you've cloned the repository, checkout the tag you'd like to run. You can compile the code by\nrunning ",(0,t.jsx)(n.code,{children:"./scripts/build.sh"})," from the top level directory."]}),"\n",(0,t.jsxs)(n.p,{children:["The build script names the binary ",(0,t.jsx)(n.code,{children:"./bin/lux"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var t=i(67294);const l={},o=t.createContext(l);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);