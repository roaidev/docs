"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1886],{22905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=t(85893),i=t(11151);const a={tags:["Build","Subnets"],description:"This how-to guide focuses on taking an already created permissioned Subnet and transforming it to an elastic (or permissionless) Subnet.",sidebar_label:"Make Subnet Permissionless",pagination_label:"Transform a Permissioned Subnet into an Elastic Subnet",sidebar_position:0},o="How to Transform a Permissioned Subnet into an Elastic Subnet",l={id:"build/subnet/elastic/transform-to-elastic-subnet",title:"How to Transform a Permissioned Subnet into an Elastic Subnet",description:"This how-to guide focuses on taking an already created permissioned Subnet and transforming it to an elastic (or permissionless) Subnet.",source:"@site/docs/build/subnet/elastic/transform-to-elastic-subnet.md",sourceDirName:"build/subnet/elastic",slug:"/build/subnet/elastic/transform-to-elastic-subnet",permalink:"/build/subnet/elastic/transform-to-elastic-subnet",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/build/subnet/elastic/transform-to-elastic-subnet.md",tags:[{label:"Build",permalink:"/tags/build"},{label:"Subnets",permalink:"/tags/subnets"}],version:"current",sidebarPosition:0,frontMatter:{tags:["Build","Subnets"],description:"This how-to guide focuses on taking an already created permissioned Subnet and transforming it to an elastic (or permissionless) Subnet.",sidebar_label:"Make Subnet Permissionless",pagination_label:"Transform a Permissioned Subnet into an Elastic Subnet",sidebar_position:0},sidebar:"build-subnet",previous:{title:"Deploy a Subnet with Multisig Authorization",permalink:"/build/subnet/deploy/custom-vm-subnet"},next:{title:"Elastic Subnets Parameters",permalink:"/build/subnet/elastic/elastic-parameters"}},r={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Elastic Subnet Transformation on Testnet and Mainnet",id:"elastic-subnet-transformation-on-testnet-and-mainnet",level:3},{value:"Results",id:"results",level:3},{value:"Adding Permissionless Validators to Elastic Subnet",id:"adding-permissionless-validators-to-elastic-subnet",level:2},{value:"Adding Permissionless Delegator to a Permissionless Validator in Elastic Subnet",id:"adding-permissionless-delegator-to-a-permissionless-validator-in-elastic-subnet",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"how-to-transform-a-permissioned-subnet-into-an-elastic-subnet",children:"How to Transform a Permissioned Subnet into an Elastic Subnet"}),"\n",(0,s.jsxs)(n.p,{children:["Elastic Subnets are permissionless Subnets. More information can be found ",(0,s.jsx)(n.a,{href:"/build/subnet/elastic/elastic-parameters",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This how-to guide focuses on taking an already created permissioned Subnet and transforming it to an\nelastic (or permissionless) Subnet."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/tooling/cli-guides/install-cli",children:"Lux-CLI installed"})}),"\n",(0,s.jsxs)(n.li,{children:["You have deployed a permissioned Subnet on ",(0,s.jsx)(n.a,{href:"/build/subnet/deploy/local-subnet",children:"local"}),", on\n",(0,s.jsx)(n.a,{href:"/build/subnet/deploy/testnet-subnet",children:"Testnet"})," or on ",(0,s.jsx)(n.a,{href:"/build/subnet/deploy/mainnet-subnet",children:"Mainnet"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(n.p,{children:["In the following commands, make sure to substitute the name of your Subnet configuration for\n",(0,s.jsx)(n.code,{children:"<subnetName>"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To transform your permissioned Subnet into an Elastic Subnet (NOTE: this action is irreversible), run"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"lux subnet elastic <subnetName>"})}),"\n",(0,s.jsxs)(n.p,{children:["and select the network that you want to transform the Subnet on. Alternatively, you can bypass this\nprompt by providing the ",(0,s.jsx)(n.code,{children:"--local"}),", ",(0,s.jsx)(n.code,{children:"--testnet"}),", or ",(0,s.jsx)(n.code,{children:"--mainnet"})," flag."]}),"\n",(0,s.jsxs)(n.p,{children:["Provide the name and the symbol for the permissionless Subnet's native token. You can also bypass\nthis prompt by providing the ",(0,s.jsx)(n.code,{children:"--tokenName"})," and ",(0,s.jsx)(n.code,{children:"--tokenSymbol"})," flags."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, select the Elastic Subnet config. You can choose to use the default values detailed\n",(0,s.jsx)(n.a,{href:"/build/subnet/elastic/elastic-parameters#primary-network-parameters-on-mainnet",children:"here"}),"\nor customize the Elastic Subnet config. To bypass the prompt, you can use ",(0,s.jsx)(n.code,{children:"--default"})," flag to use\nthe default Elastic Subnet config."]}),"\n",(0,s.jsx)(n.p,{children:"The command may take a couple minutes to run."}),"\n",(0,s.jsx)(n.h3,{id:"elastic-subnet-transformation-on-testnet-and-mainnet",children:"Elastic Subnet Transformation on Testnet and Mainnet"}),"\n",(0,s.jsx)(n.p,{children:"Elastic Subnet transformation on public network requires private key loaded into the tool, or a\nconnected ledger device."}),"\n",(0,s.jsxs)(n.p,{children:["Both stored key usage and ledger usage are enabled on Testnet (see more on creating keys\n",(0,s.jsx)(n.a,{href:"/build/subnet/deploy/testnet-subnet#private-key",children:"here"}),")\nwhile only ledger usage is enabled on Mainnet (see more on setting up your ledger\n",(0,s.jsx)(n.a,{href:"/build/subnet/deploy/mainnet-subnet#setting-up-your-ledger",children:"here"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["To transform a permissioned Subnet into Elastic Subnet on public networks, users are required to\nprovide the keys that control the Subnet defined during the Subnet deployment process (more info on\nkeys in Testnet can be found\n",(0,s.jsx)(n.a,{href:"/build/subnet/deploy/testnet-subnet#deploy-the-subnet",children:"here"}),",\nwhile more info on ledger signing in Mainnet can be found\n",(0,s.jsx)(n.a,{href:"/build/subnet/deploy/mainnet-subnet#deploy-the-subnet",children:"here"}),")."]}),"\n",(0,s.jsx)(n.h3,{id:"results",children:"Results"}),"\n",(0,s.jsx)(n.p,{children:"If all works as expected, you then have the option to automatically transform all existing\npermissioned validators to permissionless validators."}),"\n",(0,s.jsx)(n.p,{children:"You can also to skip automatic transformation at this point and choose to manually add\npermissionless validators later."}),"\n",(0,s.jsx)(n.p,{children:"You can use the output details such as the Asset ID and Elastic Subnet ID to connect to and\ninteract with your Elastic Subnet."}),"\n",(0,s.jsx)(n.h2,{id:"adding-permissionless-validators-to-elastic-subnet",children:"Adding Permissionless Validators to Elastic Subnet"}),"\n",(0,s.jsxs)(n.p,{children:["If you are running this command on local network, you will need to first remove permissioned\nvalidators (by running ",(0,s.jsx)(n.code,{children:"lux subnet removeValidator <subnetName>"}),") so that you can have a list\nof local nodes to choose from to be added as a permissionless validator in the Elastic Subnet."]}),"\n",(0,s.jsx)(n.p,{children:"To add permissionless validators to an Elastic Subnet, run"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"lux subnet join <subnetName> --elastic"})}),"\n",(0,s.jsxs)(n.p,{children:["You will be prompted with which node you would like to add as a permissionless validator. You can\nskip this prompt by using ",(0,s.jsx)(n.code,{children:"--nodeID"})," flag."]}),"\n",(0,s.jsxs)(n.p,{children:["You will then be prompted with the amount of the Subnet native token that you like to stake in the\nvalidator. Alternatively, you can bypass this prompt by providing the ",(0,s.jsx)(n.code,{children:"--stake-amount"})," flag. Note\nthat choosing to add the maximum validator stake amount (defined during Elastic Subnet\ntransformation step above) means that you effectively disable delegation in your validator."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, select when the validator will start validating and how long it will be validating for. You\ncan also bypass these prompts by using ",(0,s.jsx)(n.code,{children:"--start-time"})," and ",(0,s.jsx)(n.code,{children:"--staking-period"})," flags."]}),"\n",(0,s.jsx)(n.h2,{id:"adding-permissionless-delegator-to-a-permissionless-validator-in-elastic-subnet",children:"Adding Permissionless Delegator to a Permissionless Validator in Elastic Subnet"}),"\n",(0,s.jsx)(n.p,{children:"To add permissionless delegators, run"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"lux subnet addPermissionlessDelegator <subnetName>"})}),"\n",(0,s.jsxs)(n.p,{children:["You will be prompted with which Subnet validator you would like to delegate to. You can skip this\nprompt by using ",(0,s.jsx)(n.code,{children:"--nodeID"})," flag."]}),"\n",(0,s.jsxs)(n.p,{children:["You will then be prompted with the amount of the Subnet native token that you like to stake in the\nvalidator. Alternatively, you can bypass this prompt by providing the ",(0,s.jsx)(n.code,{children:"--stake-amount"})," flag. The\namount that can be delegated to a validator is detailed\n",(0,s.jsx)(n.a,{href:"/build/subnet/elastic/elastic-parameters#delegators-weight-checks",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, select when you want to start delegating and how long you want to delegate for. You can also\nbypass these prompts by using ",(0,s.jsx)(n.code,{children:"--start-time"})," and ",(0,s.jsx)(n.code,{children:"--staking-period"})," flags."]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(67294);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);