"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5310],{80226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=n(85893),s=n(11151);const i={tags:["Build","Subnets"],description:"Planning a successful Subnet deployment starts by determining your application's needs.",sidebar_label:"Getting Started",pagination_label:"What's the Subnet Development Lifecycle?"},a="What's the Subnet Development Lifecycle?",r={id:"build/subnet/getting-started",title:"What's the Subnet Development Lifecycle?",description:"Planning a successful Subnet deployment starts by determining your application's needs.",source:"@site/docs/build/subnet/getting-started.md",sourceDirName:"build/subnet",slug:"/build/subnet/getting-started",permalink:"/build/subnet/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/build/subnet/getting-started.md",tags:[{label:"Build",permalink:"/tags/build"},{label:"Subnets",permalink:"/tags/subnets"}],version:"current",frontMatter:{tags:["Build","Subnets"],description:"Planning a successful Subnet deployment starts by determining your application's needs.",sidebar_label:"Getting Started",pagination_label:"What's the Subnet Development Lifecycle?"},sidebar:"build-subnet",previous:{title:"Subnets Overview",permalink:"/build/subnet/"},next:{title:"When to Build on a Subnet vs. on the C-Chain",permalink:"/build/subnet/c-chain-vs-subnet"}},u={},l=[{value:"Figure Out Your Needs",id:"figure-out-your-needs",level:2},{value:"Decide What Type of Subnet You Want",id:"decide-what-type-of-subnet-you-want",level:3},{value:"EVM-Based Subnets",id:"evm-based-subnets",level:4},{value:"Experimental Subnets",id:"experimental-subnets",level:4},{value:"Custom Subnets",id:"custom-subnets",level:4},{value:"Determine Tokenomics",id:"determine-tokenomics",level:3},{value:"Decide how to Customize Your Subnet",id:"decide-how-to-customize-your-subnet",level:3},{value:"Learn Lux-CLI",id:"learn-lux-cli",level:2},{value:"Deploy Your Subnet Locally",id:"deploy-your-subnet-locally",level:3},{value:"Deploy Your Subnet to Testnet",id:"deploy-your-subnet-to-testnet",level:3},{value:"Deploy Your Subnet to Mainnet",id:"deploy-your-subnet-to-mainnet",level:3},{value:"Start Developing Custom VMs",id:"start-developing-custom-vms",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"whats-the-subnet-development-lifecycle",children:"What's the Subnet Development Lifecycle?"}),"\n",(0,o.jsx)(t.p,{children:"As you begin your Subnet journey, it's useful to look at the lifecycle of taking a Subnet from idea\nto production."}),"\n",(0,o.jsx)(t.h2,{id:"figure-out-your-needs",children:"Figure Out Your Needs"}),"\n",(0,o.jsxs)(t.p,{children:["The first step of planning your Subnet is determining your application's needs. What features do you\nneed that the Lux C-Chain doesn't provide? Perhaps you want your own gas token or only want\nto allow access to KYCed customers. ",(0,o.jsx)(t.a,{href:"/build/subnet/c-chain-vs-subnet",children:"When to Build on a Subnet vs. on the C-Chain"}),"\ncan help you make the decision."]}),"\n",(0,o.jsx)(t.h3,{id:"decide-what-type-of-subnet-you-want",children:"Decide What Type of Subnet You Want"}),"\n",(0,o.jsx)(t.p,{children:"Once you've decided to use a Subnet, you need to decide what type of Subnet to build. This means\nchoosing a virtual machine (VM) to create your Subnet with. Broadly speaking, there are three types\nof VMs to choose from:"}),"\n",(0,o.jsx)(t.h4,{id:"evm-based-subnets",children:"EVM-Based Subnets"}),"\n",(0,o.jsxs)(t.p,{children:["EVM-based Subnets are forks of the Lux C-Chain. They support Solidity\nsmart contracts and standard ",(0,o.jsx)(t.a,{href:"/reference/luxd/c-chain/api#ethereum-apis",children:"Ethereum APIs"}),".\n",(0,o.jsx)(t.a,{href:"https://github.com/luxdefi/subnet-evm",children:"Subnet-EVM"})," is Lux Partners' implementation\nof an EVM-Based Subnet."]}),"\n",(0,o.jsx)(t.p,{children:"Subnet-EVM is far and away the safest and most popular choice to build your Subnet with. It has the\nmost mature developer tooling and receives regular updates by the Lux Partners team."}),"\n",(0,o.jsx)(t.h4,{id:"experimental-subnets",children:"Experimental Subnets"}),"\n",(0,o.jsxs)(t.p,{children:["Experimental Subnets are proof-of-concept VMs developed by Lux Partners. They include the\n",(0,o.jsx)(t.a,{href:"/build/vm/create/golang-vm-simple",children:"TimestampVM Go"}),",\n",(0,o.jsx)(t.a,{href:"/build/vm/create/rust-vm",children:"TimestampVMRust"}),", and others. These VMs are demo software\nand aren't ready for production environments. Although they do receive periodic updates, the Ava\nLabs team hasn't audited their performance and security, internally or externally. However, these\nopen source projects are intended to inspire the community, and provide novel capabilities not\navailable inside the EVM."]}),"\n",(0,o.jsx)(t.p,{children:"If you're looking to push the boundaries of what's possible with Subnets, this is a great place to\nget started."}),"\n",(0,o.jsx)(t.h4,{id:"custom-subnets",children:"Custom Subnets"}),"\n",(0,o.jsxs)(t.p,{children:["Custom Subnets are an open-ended interface that allow developers to build any VM they can dream.\nThese VMs may be a fork of an existing VM such as Subnet-EVM, or even a\nnon-Lux-native VM such as Solana's virtual machine. Alternatively, you can build your VM\nentirely from scratch using almost any programming language. See ",(0,o.jsx)(t.a,{href:"/build/vm/intro",children:"Introduction to VMs"})," for advice on getting started."]}),"\n",(0,o.jsx)(t.h3,{id:"determine-tokenomics",children:"Determine Tokenomics"}),"\n",(0,o.jsx)(t.p,{children:"Subnets are powered by gas tokens. When you build a Subnet, you have the option to decide what token\nyou use and optionally, how you distribute it. You may use LUX, an existing C-Chain token, or a\nbrand new token. You'll need to decide how much of the supply you want to use to reward validators,\nwhat kind of emitting schedule you want, and how much to airdrop. Blocks may burn transaction fees\nor give them to validators as a block reward."}),"\n",(0,o.jsx)(t.h3,{id:"decide-how-to-customize-your-subnet",children:"Decide how to Customize Your Subnet"}),"\n",(0,o.jsxs)(t.p,{children:["After you've selected your VM, you may want to customize it. This may mean airdropping tokens to\nyour team in the genesis, setting how gas fees rates on your network, or changing the\nbehavior of your VM via precompiles. These customizations are hard to get right on paper and usually\nrequire some trial and error to determine correctly. See ",(0,o.jsx)(t.a,{href:"/build/subnet/upgrade/customize-a-subnet",children:"Customize Your EVM-Powered Subnet"})," for instructions on configuring Subnet-EVM."]}),"\n",(0,o.jsx)(t.h2,{id:"learn-lux-cli",children:"Learn Lux-CLI"}),"\n",(0,o.jsx)(t.p,{children:"Now that you've specified your Subnet requirements, the next step is learning Lux-CLI."}),"\n",(0,o.jsxs)(t.p,{children:["Lux-CLI is the best tool for rapidly prototyping Subnets and deploying them to production. You\ncan use it throughout the entire Subnet development lifecycle. To get started, take a look at ",(0,o.jsx)(t.a,{href:"/build/subnet/hello-subnet",children:"Build Your First Subnet"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"deploy-your-subnet-locally",children:"Deploy Your Subnet Locally"}),"\n",(0,o.jsx)(t.p,{children:"The first stage of Subnet development involves testing your Subnet on your local machine or on a\nprivate cloud server such as Amazon EC2. The goal of this phase is to lock-in your Subnet\ncustomizations and create your full-stack dapp without the constraints of deploying on a public\nnetwork."}),"\n",(0,o.jsx)(t.p,{children:"Development is extremely quick and updates take seconds to minutes to apply. In this phase,\nyou should restrict dapp access to trusted parties. Because you're interacting with a local copy of\nthe Lux network, you can't access production state or other production Subnets."}),"\n",(0,o.jsx)(t.h3,{id:"deploy-your-subnet-to-testnet",children:"Deploy Your Subnet to Testnet"}),"\n",(0,o.jsx)(t.p,{children:"The second stage of Subnet development involves deploying your Subnet and your dapp to the Testnet\nTestnet. This phase tests your ability to run validator nodes, coordinate all parties involved in\nthe Subnet, and monitor network health. You can also practice using Ledgers to manage Subnet\ntransactions."}),"\n",(0,o.jsx)(t.p,{children:"The Subnet is publicly visible and you may want to allow external users to test your\ndapp. Development on Testnet is significantly slower than with local development. Updates may now take\nhours to days to apply. It's important to do as much local testing as possible before moving to\nTestnet."}),"\n",(0,o.jsx)(t.h3,{id:"deploy-your-subnet-to-mainnet",children:"Deploy Your Subnet to Mainnet"}),"\n",(0,o.jsx)(t.p,{children:"The final stage of Subnet development is creating your Subnet on Mainnet and deploying your dapp.\nIt's time to let your real users in."}),"\n",(0,o.jsx)(t.p,{children:"Once your Subnet is in production, you have little flexibility\nto change it. Some alterations are possible, but they require days to weeks to implement and roll\nout."}),"\n",(0,o.jsx)(t.p,{children:"Your focus should shift to preserving network stability and upgrading your nodes as needed."}),"\n",(0,o.jsx)(t.h2,{id:"start-developing-custom-vms",children:"Start Developing Custom VMs"}),"\n",(0,o.jsx)(t.p,{children:"If you've mastered Subnet-EVM and are looking for an additional challenge, consider building a\ncustom VM. The Lux network supports far more than just the EVM. Current VMs only scratch the\nsurface of what's possible."}),"\n",(0,o.jsx)(t.p,{children:"Some ideas:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Port an existing blockchain project to Lux. For example: Use Bitcoin's VM or Solana's VM."}),"\n",(0,o.jsx)(t.li,{children:"Create an app-specific VM instead of a general purpose VM. For example, create a DEX\nor a CLOB VM instead of something like the EVM."}),"\n",(0,o.jsx)(t.li,{children:"Create a more efficient implementation of the EVM."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(67294);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);