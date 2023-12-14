"use strict";(self.webpackChunklux_docs=self.webpackChunklux_docs||[]).push([[706],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5719:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={},l="Create an EVM Subnet on Fuji Testnet Using Subnet-CLI",u={unversionedId:"subnets/create-a-fuji-subnet-subnet-cli",id:"subnets/create-a-fuji-subnet-subnet-cli",title:"Create an EVM Subnet on Fuji Testnet Using Subnet-CLI",description:"For the latest tool to deploy a Subnet on Fuji, please refer to this article. This artical is still applicable for Mainnet deploy with a Ledger.",source:"@site/docs/subnets/create-a-fuji-subnet-subnet-cli.md",sourceDirName:"subnets",slug:"/subnets/create-a-fuji-subnet-subnet-cli",permalink:"/subnets/create-a-fuji-subnet-subnet-cli",draft:!1,editUrl:"https://github.com/luxdefi/network-docs/edit/main/docs/subnets/create-a-fuji-subnet-subnet-cli.md",tags:[],version:"current",frontMatter:{},sidebar:"subnets",previous:{title:"Deploying Subnet with EVM Based Blockchain using LuxJS",permalink:"/subnets/create-a-evm-blockchain-on-subnet-with-luxjs"},next:{title:"Customize Your EVM-Powered Subnet",permalink:"/subnets/customize-a-subnet"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Fuji Testnet",id:"fuji-testnet",level:3},{value:"Subnet-cli",id:"subnet-cli",level:3},{value:"Private Key",id:"private-key",level:3},{value:"Virtual Machine",id:"virtual-machine",level:2},{value:"Build Binary",id:"build-binary",level:3},{value:"Move Binary",id:"move-binary",level:3},{value:"Subnet-cli Wizard",id:"subnet-cli-wizard",level:2},{value:"Add New Subnet to Node Whitelist",id:"add-new-subnet-to-node-whitelist",level:2},{value:"Restart Node",id:"restart-node",level:2},{value:"Next Step",id:"next-step",level:2},{value:"Appendix",id:"appendix",level:2},{value:"Connect with Metamask",id:"connect-with-metamask",level:3},{value:"Other Tools",id:"other-tools",level:3}],d={toc:c};function h(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-an-evm-subnet-on-fuji-testnet-using-subnet-cli"},"Create an EVM Subnet on Fuji Testnet Using Subnet-CLI"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For the latest tool to deploy a Subnet on Fuji, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/subnets/create-a-fuji-subnet"},"this article"),". This artical is still applicable for Mainnet deploy with a Ledger.")),(0,o.kt)("p",null,"After trying out a Subnet on a local box by following ",(0,o.kt)("a",{parentName:"p",href:"/subnets/create-a-local-subnet"},"this tutorial"),", next step is to try it out on Fuji Testnet."),(0,o.kt)("p",null,"In this article, we show how to do the following on Fuji Testnet."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a virtual machine based on subnet-evm."),(0,o.kt)("li",{parentName:"ul"},"Add a node as a validator to the primary network."),(0,o.kt)("li",{parentName:"ul"},"Create a Subnet."),(0,o.kt)("li",{parentName:"ul"},"Add the same node to the newly created Subnet."),(0,o.kt)("li",{parentName:"ul"},"Create a blockchain with the specified virtual machine.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The same steps can be applied on Mainnet, see ",(0,o.kt)("a",{parentName:"p",href:"/subnets/subnet-cli#network-selection"},"here")," on how to switch to Mainnet when using ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-cli"),". Furthermore, you should practice using Ledger by following ",(0,o.kt)("a",{parentName:"p",href:"/subnets/subnet-cli#ledger-support"},"this")," before deploying on Mainnet."),(0,o.kt)("p",{parentName:"admonition"},"All IDs in this article are for illustration purpose. They can be different in your own run-through of this tutorial.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1+ nodes running on Fuji Testnet (does not need to be a validator)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/luxdefi/subnet-cli"},(0,o.kt)("inlineCode",{parentName:"a"},"subnet-cli"))," installed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subnet-cli")," private key with some Fuji LUX")),(0,o.kt)("h3",{id:"fuji-testnet"},"Fuji Testnet"),(0,o.kt)("p",null,"For this tutorial, we recommend that you follow ",(0,o.kt)("a",{parentName:"p",href:"/nodes/build/run-lux-node-manually#connect-to-fuji-testnet"},"Run an Lux Node Manually")," and this step particularly to start your node on Fuji:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"To connect to the Fuji Testnet instead of the main net, use argument ",(0,o.kt)("inlineCode",{parentName:"em"},"--network-id=fuji"))),(0,o.kt)("p",null,"To get the NodeID of this Fuji node, call the following curl command to ",(0,o.kt)("a",{parentName:"p",href:"/apis/luxd/apis/info#infogetnodeid"},"info.getNodeID"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getNodeID"\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n')),(0,o.kt)("p",null,"The response should look something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "nodeID": "NodeID-5mb46qkSBj81k9g9e4VFjGGSbaaSLFRzD"\n  },\n  "id": 1\n}\n')),(0,o.kt)("p",null,"That portion that says, ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeID-5mb46qkSBj81k9g9e4VFjGGSbaaSLFRzD")," is ths NodeID, the entire thing. We will need this id in the later section when calling ",(0,o.kt)("a",{parentName:"p",href:"#subnet-cli-wizard"},"subnet-cli wizard"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"With more data on Fuji testnet, it may take a while to bootstrap Fuji Testnet from scratch.")),(0,o.kt)("h3",{id:"subnet-cli"},"Subnet-cli"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/luxdefi/subnet-cli.git;\ncd subnet-cli;\ngo install -v .;\n")),(0,o.kt)("p",null,"Once you have installed it, run ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-cli")," on your console to confirm it is\nworking as expected (",(0,o.kt)("em",{parentName:"p"},"make sure your $GOBIN is in your $PATH"),"):"),(0,o.kt)("h3",{id:"private-key"},"Private Key"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"subnet-cli create key\n")),(0,o.kt)("p",null,"This creates a file ",(0,o.kt)("inlineCode",{parentName:"p"},".subnet-cli.pk")," under the current directory with a private key. By default,\n",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-cli")," uses the key specified in file ",(0,o.kt)("inlineCode",{parentName:"p"},".subnet-cli.pk")," on the P-Chain to pay for the transaction fee, unless ",(0,o.kt)("inlineCode",{parentName:"p"},"--private-key-path")," is used to overwrite. Please make sure that you have enough fund on this P-Chain address to pay for transactions."),(0,o.kt)("p",null,"To get fund on this key on Fuji TestNet, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"User your private key in the ",(0,o.kt)("inlineCode",{parentName:"li"},".subnet-cli.pk")," file on the ",(0,o.kt)("a",{parentName:"li",href:"https://wallet.lux.network"},"web wallet")," to access this wallet. (Private Key is the first option on the ",(0,o.kt)("a",{parentName:"li",href:"https://wallet.lux.network"},"web wallet"),"). And pick ",(0,o.kt)("strong",{parentName:"li"},"Fuji")," on the top right corner as the network and locate your C-Chain address which starts with ",(0,o.kt)("inlineCode",{parentName:"li"},"0x"),"."),(0,o.kt)("li",{parentName:"ol"},"Request funds from the ",(0,o.kt)("a",{parentName:"li",href:"https://faucet.lux.network"},"faucet")," using your C-Chain address."),(0,o.kt)("li",{parentName:"ol"},"Move the test funds from the C-Chain to the P-Chain by clicking on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Cross Chain")," on the left side of the web wallet (more details can be found on the ",(0,o.kt)("a",{parentName:"li",href:"/quickstart/cross-chain-transfers"},"tutorial between C/P chains"),").")),(0,o.kt)("p",null,"After following these 3 steps, your test key should now have a balance on the P-Chain on Fuji Testnet."),(0,o.kt)("p",null,"Check ",(0,o.kt)("a",{parentName:"p",href:"/subnets/subnet-cli#subnet-cli-create-key"},"here")," for more info."),(0,o.kt)("h2",{id:"virtual-machine"},"Virtual Machine"),(0,o.kt)("p",null,"Lux is a network composed of multiple blockchains. Each blockchain is an instance of a ",(0,o.kt)("a",{parentName:"p",href:"/subnets/#virtual-machines"},"Virtual Machine (VM)"),", much like an object in an object-oriented language is an instance of a class.\nThat is, the VM defines the behavior of the blockchain."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/luxdefi/subnet-evm"},"Subnet-evm")," is the VM that defines the Subnet Contract Chains. Subnet-evm is a simplified version of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/luxdefi/coreth"},"Lux C-Chain"),"."),(0,o.kt)("p",null,"This chain implements the Ethereum Virtual Machine and supports Solidity smart contracts as well as most other Ethereum client functionality."),(0,o.kt)("h3",{id:"build-binary"},"Build Binary"),(0,o.kt)("p",null,"First, you'll need to compile the subnet-evm into a binary that LuxGo can interact with. To do this, first install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/luxdefi/subnet-evm"},(0,o.kt)("inlineCode",{parentName:"a"},"subnet-evm"))," (assumes you don't\nyet have the ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-evm")," repository downloaded):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/luxdefi/subnet-evm.git\ncd subnet-evm\n")),(0,o.kt)("p",null,"Create a VMID with string ",(0,o.kt)("inlineCode",{parentName:"p"},"subnetevm")," which you can change to whatever you like.\nThis command is used to generate a valid VMID based on some string to uniquely\nidentify a VM. This should stay the same for all versions of the VM, so it\nshould be based on a word rather than the hash of some code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"subnet-cli create VMID subnetevm\n")),(0,o.kt)("p",null,"This will prints this output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"created a new VMID srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy from subnetevm\n")),(0,o.kt)("p",null,"Now issue this command to build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/build.sh build/srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy\n")),(0,o.kt)("h3",{id:"move-binary"},"Move Binary"),(0,o.kt)("p",null,"Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-evm")," binary is built, you'll need to move it to LuxGo's\nplugin directory (within the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/maintain/luxd-config-flags#--build-dir-string"},"--build-dir"),") so it can be run by your node.\nWhen building ",(0,o.kt)("inlineCode",{parentName:"p"},"luxd")," from source (see ",(0,o.kt)("a",{parentName:"p",href:"/nodes/build/run-lux-node-manually#connect-to-fuji-testnet"},"Run an Lux Node Manually"),"), this defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"luxd/build/plugins")," in which ",(0,o.kt)("inlineCode",{parentName:"p"},"luxd"),"\nis the directory where you have checked out LuxGo project.\nThis build directory is structured as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build-dir\n|_luxd (note: this is the LuxGo binary, not a directory)\n|_plugins\n  |_evm\n")),(0,o.kt)("p",null,"To put the ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-evm")," binary in the right place, run the following command\n(assuming the ",(0,o.kt)("inlineCode",{parentName:"p"},"luxd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-evm")," repos are in the same folder):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mv ./subnet-evm/build/srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy ./luxd/build/plugins;\n")),(0,o.kt)("h2",{id:"subnet-cli-wizard"},"Subnet-cli Wizard"),(0,o.kt)("p",null,"The easiest and fastest way to get your new Subnet off the ground is to use the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/luxdefi/subnet-cli"},(0,o.kt)("inlineCode",{parentName:"a"},"subnet-cli")),". This powerful CLI can\nadd validators, create Subnets, and create blockchains. Documentation of subnet-cli can be found ",(0,o.kt)("a",{parentName:"p",href:"/subnets/subnet-cli"},"here"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-cli")," DOES NOT need to be run on the same host where you are\nrunning your validator. By default, it interfaces exclusively with the public\nLux API Endpoints.")),(0,o.kt)("p",null,"To make it as easy as possible to get started, the ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-cli")," also provides\na ",(0,o.kt)("inlineCode",{parentName:"p"},"wizard")," command that takes care of EVERYTHING for you. TL;DR, type one\ncommand and you'll have a Subnet with a running ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-evm")," instance a few minutes\nlater."),(0,o.kt)("p",null,"Run the following command to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"NodeID-5mb46qkSBj81k9g9e4VFjGGSbaaSLFRzD")," (which was created ",(0,o.kt)("a",{parentName:"li",href:"#fuji-testnet"},"above"),") as a validator to the primary network (comma separated if multiple validators, and skipping any that already exist);"),(0,o.kt)("li",{parentName:"ul"},"Create a Subnet;"),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"NodeID-5mb46qkSBj81k9g9e4VFjGGSbaaSLFRzD")," to the Subnet;"),(0,o.kt)("li",{parentName:"ul"},"Create a new blockhain with a virtual machine whose id is ",(0,o.kt)("inlineCode",{parentName:"li"},"srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"subnet-cli wizard \\\n--node-ids=NodeID-5mb46qkSBj81k9g9e4VFjGGSbaaSLFRzD \\\n--vm-genesis-path=my-genesis.json \\\n--vm-id=srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy \\\n--chain-name=subnetevm\n")),(0,o.kt)("p",null,"By default, the private key in ",(0,o.kt)("inlineCode",{parentName:"p"},".subnet-cli.pk")," file which was created from ",(0,o.kt)("a",{parentName:"p",href:"#subnet-cli-private-key"},"the step above")," is used to pay the cost of this transaction.\nYou can use ",(0,o.kt)("inlineCode",{parentName:"p"},"--private-key-path")," to specify a different file."),(0,o.kt)("p",null,"As mentioned before, the ",(0,o.kt)("inlineCode",{parentName:"p"},"vm-id")," was generated by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-cli create VMID subnetevm"),". You can\nuse any value here, the only important thing is to make sure the binary you have generated has the same name."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can find an example of a genesis file to use when launching your own\n",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-evm")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/luxdefi/subnet-evm/blob/master/networks/11111/genesis.json"},"networks folder"),". Note: please remove ",(0,o.kt)("inlineCode",{parentName:"p"},"airdropHash")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"airdropAmount")," fields if you want to start with it.")),(0,o.kt)("p",null,"As part of the return of ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-cli wizard"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"Subnet ID")," value will be returned which will be needed in next step. See ",(0,o.kt)("a",{parentName:"p",href:"/subnets/subnet-cli#subnet-cli-wizard"},"here")," for more detailed logs."),(0,o.kt)("h2",{id:"add-new-subnet-to-node-whitelist"},"Add New Subnet to Node Whitelist"),(0,o.kt)("p",null,"During the execution of the ",(0,o.kt)("inlineCode",{parentName:"p"},"wizard")," command, you will be prompted to add your\nnew subnetID to your node. This is done using the ",(0,o.kt)("inlineCode",{parentName:"p"},"whitelisted-subnets")," config.\nYou can provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"whitelisted-subnets")," argument by modifying your config\nfile (reference ",(0,o.kt)("a",{parentName:"p",href:"/nodes/maintain/luxd-config-flags#whitelist"},"here"),") or providing an argument on startup."),(0,o.kt)("p",null,"Example Config File:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "network-id": "fuji",\n  "health-check-frequency": "2s",\n  "log-display-level": "INFO",\n  "log-level": "INFO",\n  "whitelisted-subnets": "p433wpuXyJiDhyazPYyZMJeaoPSW76CBZ2x7wrVPLgvokotXz"\n}\n')),(0,o.kt)("p",null,"Example Node Args:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"--whitelisted-subnets=p433wpuXyJiDhyazPYyZMJeaoPSW76CBZ2x7wrVPLgvokotXz --network-id=fuji\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"p433wpuXyJiDhyazPYyZMJeaoPSW76CBZ2x7wrVPLgvokotXz")," is an example of subnet-id, please replace it with your correct subnet-id.")),(0,o.kt)("h2",{id:"restart-node"},"Restart Node"),(0,o.kt)("p",null,"Once you've updated your config, you'll need to restart your LuxGo node for the changes to take effect."),(0,o.kt)("p",null,"If you completed the steps successfully, you'll see the node print out something like these (ignore the exact value of all ids, they are just for illustraction purpose):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"INFO [01-25|16:47:04] chains/manager.go#246: creating chain:\n    ID: 2AM3vsuLoJdGBGqX2ibE8RGEq4Lg7g4bot6BT1Z7B9dH5corUD\n    VMID:sqja3uK17MJxfC7AN8nGadBw9JK5BcrsNwNynsqP5Gih8M5Bm\nINFO [01-25|16:47:04] api/server/server.go#203: adding route /ext/bc/2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm/events\nINFO [01-25|16:47:04] api/server/server.go#203: adding route /ext/bc/2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm\nINFO [01-25|16:47:04] api/server/server.go#203: adding route /ext/bc/2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm/wallet\nINFO [01-25|16:47:04] <2AM3vsuLoJdGBGqX2ibE8RGEq4Lg7g4bot6BT1Z7B9dH5corUD Chain> snow/engine/snowman/transitive.go#67: initializing consensus engine\nINFO [01-25|16:47:04] <2AM3vsuLoJdGBGqX2ibE8RGEq4Lg7g4bot6BT1Z7B9dH5corUD Chain> snow/engine/snowman/bootstrap/bootstrapper.go#225: Starting bootstrap...\nINFO [01-25|16:47:04] <P Chain> snow/engine/snowman/bootstrap/bootstrapper.go#458: waiting for the remaining chains in this subnet to finish syncing\nINFO [01-25|16:47:04] api/server/server.go#203: adding route /ext/bc/2AM3vsuLoJdGBGqX2ibE8RGEq4Lg7g4bot6BT1Z7B9dH5corUD/public\nINFO [01-25|16:47:04] <2AM3vsuLoJdGBGqX2ibE8RGEq4Lg7g4bot6BT1Z7B9dH5corUD Chain> snow/engine/common/bootstrapper.go#235: Bootstrapping started syncing with 2 vertices in the accepted frontier\nINFO [01-25|16:47:05] <2AM3vsuLoJdGBGqX2ibE8RGEq4Lg7g4bot6BT1Z7B9dH5corUD Chain> snow/engine/snowman/bootstrap/bootstrapper.go#419: bootstrapping fetched 69 blocks. Executing state transitions...\nINFO [01-25|16:47:06] <2AM3vsuLoJdGBGqX2ibE8RGEq4Lg7g4bot6BT1Z7B9dH5corUD Chain> snow/engine/common/queue/jobs.go#181: executed 69 operations\nINFO [01-25|16:47:06] <2AM3vsuLoJdGBGqX2ibE8RGEq4Lg7g4bot6BT1Z7B9dH5corUD Chain> snow/engine/snowman/transitive.go#354: bootstrapping finished with 2DUxceCx71L5TLTeLpKUQxSBVm8vTKPmFs2usAyRnusUzs4Q4M as the last accepted block\n")),(0,o.kt)("p",null,"If you didn't put the ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-evm")," binary in the right place, you'll see something\nlike:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"INFO [01-26|05:54:19] chains/manager.go#246: creating chain:\n    ID: 2AM3vsuLoJdGBGqX2ibE8RGEq4Lg7g4bot6BT1Z7B9dH5corUD\n    VMID:sqja3uK17MJxfC7AN8nGadBw9JK5BcrsNwNynsqP5Gih8M5Bm\nERROR[01-26|05:54:19] chains/manager.go#270: error creating chain 2AM3vsuLoJdGBGqX2ibE8RGEq4Lg7g4bot6BT1Z7B9dH5corUD: error while looking up VM: there is no ID with alias sqja3uK17MJxfC7AN8nGadBw9JK5BcrsNwNynsqP5Gih8M5Bm\n")),(0,o.kt)("h2",{id:"next-step"},"Next Step"),(0,o.kt)("p",null,"Next step is to deploy the Subnet on to the Mainnet, see ",(0,o.kt)("a",{parentName:"p",href:"/subnets/setup-dfk-node"},"this")," using DeFi Kingdoms Subnet as an example."),(0,o.kt)("h2",{id:"appendix"},"Appendix"),(0,o.kt)("h3",{id:"connect-with-metamask"},"Connect with Metamask"),(0,o.kt)("p",null,"Subnet-evm supports almost every tool that C-Chain and EVM supports. For instance, let's connect Metamask with our subnet-evm."),(0,o.kt)("p",null,"First we need to create a new network in Metamask. It can be added in Settings > Networks > Add a network."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Network Name"),": Any name to indicate this network."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"New RPC URL"),": This must be the RPC URL of our node. In this case it is ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9650/ext/bc/zZtgbGDPpJaz7zWL6cXi1sSJRW1sMQH4s119GURVYGPXkrUaE/rpc")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Chain ID"),": The Chain ID specified in genesis. In this case ",(0,o.kt)("inlineCode",{parentName:"p"},"13213"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Currency Symbol"),": Any symbol for this token."),(0,o.kt)("p",null,"It should look like:\n",(0,o.kt)("img",{alt:"Add Network",src:n(8098).Z,width:"2560",height:"1382"})),(0,o.kt)("p",null,"Now we can access our account with initial balance. We used ",(0,o.kt)("inlineCode",{parentName:"p"},"0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC")," as our initial account. The private key of this account is ",(0,o.kt)("inlineCode",{parentName:"p"},"56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027"),". This private key is publicly shared, so don't use this account in mainnet or testnets. The genesis block allocates 333,333,333,333,333,333,333 coins to this account, which is equivalent to ",(0,o.kt)("inlineCode",{parentName:"p"},"333.3333")," SET."),(0,o.kt)("p",null,"Let's import this private key into Metamask."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on Metamask."),(0,o.kt)("li",{parentName:"ul"},'From "My Accounts" click on "Import Account":\n',(0,o.kt)("img",{alt:"Import Account",src:n(2665).Z,width:"700",height:"1210"}))),(0,o.kt)("p",null,'Now you can import your private key in this screen. When you pasted your private key, click on "Import". You should be able to see your account with some balances in it. For example:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Account with Balance",src:n(7557).Z,width:"2560",height:"1306"})),(0,o.kt)("p",null,"Now we can send funds to another account:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Click on "Send" in your Metamask.'),(0,o.kt)("li",{parentName:"ul"},'Input an address or select "Transfer between my accounts"'),(0,o.kt)("li",{parentName:"ul"},"Select an address"),(0,o.kt)("li",{parentName:"ul"},"Input your amount. It should be look like this")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Account with Balance",src:n(3162).Z,width:"2560",height:"1306"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on Next"),(0,o.kt)("li",{parentName:"ul"},"You can inspect your transaction in this screen:\n",(0,o.kt)("img",{alt:"Account with Balance",src:n(8719).Z,width:"2560",height:"1306"}))),(0,o.kt)("p",null,"For example let's verify the base fee is indeed the configured one. Remind that in our genesis we specified ",(0,o.kt)("inlineCode",{parentName:"p"},"minBaseFee"),' as 13000000000 which is equivalent to 13 Gwei. Let\'s click "Edit" above on the "Estimated gas fee" section.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Gas Fee",src:n(1470).Z,width:"2560",height:"1306"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Click on "Save" in the "Edit priority" dialog when you\'re done.'),(0,o.kt)("li",{parentName:"ul"},'Now we can confirm our transaction. Click on "Confirm"'),(0,o.kt)("li",{parentName:"ul"},"After a while your transaction will be confirmed. When confirmed it should look like this:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirmed",src:n(7339).Z,width:"2560",height:"1306"})),(0,o.kt)("p",null,"You can inspect your confirmed transaction."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirmed Inspect",src:n(1287).Z,width:"2560",height:"1306"})),(0,o.kt)("h3",{id:"other-tools"},"Other Tools"),(0,o.kt)("p",null,"You can use subnet-evm just like you use C-Chain and EVM tools. Only differences are ",(0,o.kt)("inlineCode",{parentName:"p"},"chainID")," and RPC URL. For example you can follow this article to ",(0,o.kt)("a",{parentName:"p",href:"/subnets/deploy-a-smart-contract-on-your-evm"},"Deploy a Smart Contract on Your Subnet EVM Using Remix and Metamask"),". Or you can deploy your contracts with ",(0,o.kt)("a",{parentName:"p",href:"/dapps/smart-contracts/using-hardhat-with-the-lux-c-chain"},"hardhat quick start guide")," by changing ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"chainId")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"hardhat.config.ts"),"."))}h.isMDXComponent=!0},8098:function(e,t,n){t.Z=n.p+"assets/images/sevm-m1-0cf7bf3796336bb504cf8d35d2d766b2.png"},2665:function(e,t,n){t.Z=n.p+"assets/images/sevm-m2-2d5d018def70e7ab24a0b969d419a967.png"},7557:function(e,t,n){t.Z=n.p+"assets/images/sevm-m3-e40f2446dc9ab02e4bc03249f626a644.png"},3162:function(e,t,n){t.Z=n.p+"assets/images/sevm-m4-fb625a203ce0797caed58b493ad97ca5.png"},8719:function(e,t,n){t.Z=n.p+"assets/images/sevm-m5-4d4501dd35d427eb487069c607e64ff1.png"},1470:function(e,t,n){t.Z=n.p+"assets/images/sevm-m6-72a192f7ac21d3bf82691630faa4d378.png"},7339:function(e,t,n){t.Z=n.p+"assets/images/sevm-m7-01ff39950fbc851768ed06a25b5b031d.png"},1287:function(e,t,n){t.Z=n.p+"assets/images/sevm-m8-8aa98e82ad136a79aa2361467f484b6a.png"}}]);