"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[650],{76790:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=a(85893),c=a(11151);const r={tags:["Build","Dapps"],description:"The goal of this guide is to lay out best practices regarding writing, testing and deployment of smart contracts to Lux's C-Chain using Hardhat.",sidebar_label:"Hardhat",pagination_label:"Using Hardhat with the Lux C-Chain",sidebar_position:0},s="Using Hardhat with the Lux C-Chain",i={id:"build/dapp/smart-contracts/toolchains/hardhat",title:"Using Hardhat with the Lux C-Chain",description:"The goal of this guide is to lay out best practices regarding writing, testing and deployment of smart contracts to Lux's C-Chain using Hardhat.",source:"@site/docs/build/dapp/smart-contracts/toolchains/hardhat.md",sourceDirName:"build/dapp/smart-contracts/toolchains",slug:"/build/dapp/smart-contracts/toolchains/hardhat",permalink:"/build/dapp/smart-contracts/toolchains/hardhat",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/build/dapp/smart-contracts/toolchains/hardhat.md",tags:[{label:"Build",permalink:"/tags/build"},{label:"Dapps",permalink:"/tags/dapps"}],version:"current",sidebarPosition:0,frontMatter:{tags:["Build","Dapps"],description:"The goal of this guide is to lay out best practices regarding writing, testing and deployment of smart contracts to Lux's C-Chain using Hardhat.",sidebar_label:"Hardhat",pagination_label:"Using Hardhat with the Lux C-Chain",sidebar_position:0},sidebar:"build-dapp",previous:{title:"Verifying Smart Contracts Using Hardhat and Snowtrace",permalink:"/build/dapp/smart-contracts/verification/verify-hardhat"},next:{title:"Using thirdweb with the Lux C-Chain",permalink:"/build/dapp/smart-contracts/toolchains/thirdweb"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"NodeJS and Yarn",id:"nodejs-and-yarn",level:3},{value:"Luxd and Lux Netrunner",id:"luxd-and-lux-netrunner",level:3},{value:"Solidity and Lux",id:"solidity-and-lux",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"Write Contracts",id:"write-contracts",level:2},{value:"Hardhat Config",id:"hardhat-config",level:2},{value:"Hardhat Tasks",id:"hardhat-tasks",level:2},{value:"Accounts",id:"accounts",level:3},{value:"Balances",id:"balances",level:3},{value:"ERC20 Balances",id:"erc20-balances",level:3},{value:"Hardhat Help",id:"hardhat-help",level:2},{value:"Typical Lux Netrunner Workflow",id:"typical-lux-netrunner-workflow",level:2},{value:"Run Lux Netrunner",id:"run-lux-netrunner",level:3},{value:"Start the Server",id:"start-the-server",level:3},{value:"Start a New Lux Network with Five Nodes",id:"start-a-new-lux-network-with-five-nodes",level:3},{value:"Fund Accounts",id:"fund-accounts",level:3},{value:"Compile Smart Contracts",id:"compile-smart-contracts",level:3},{value:"Deploy Smart Contracts",id:"deploy-smart-contracts",level:2},{value:"Interact with Smart Contract",id:"interact-with-smart-contract",level:3},{value:"Summary",id:"summary",level:2}];function l(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"using-hardhat-with-the-lux-c-chain",children:"Using Hardhat with the Lux C-Chain"}),"\n",(0,t.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(e.p,{children:["The goal of this guide is to lay out best practices regarding writing, testing\nand deployment of smart contracts to Lux's C-Chain. We'll be building\nsmart contracts with development environment ",(0,t.jsx)(e.a,{href:"https://hardhat.org",children:"Hardhat"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(e.h3,{id:"nodejs-and-yarn",children:"NodeJS and Yarn"}),"\n",(0,t.jsxs)(e.p,{children:["First, install the LTS (long-term support) version of\n",(0,t.jsx)(e.a,{href:"https://nodejs.org/en",children:"NodeJS"}),". This is ",(0,t.jsx)(e.code,{children:"18.x"})," at the time of writing. NodeJS\nbundles ",(0,t.jsx)(e.code,{children:"npm"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Next, install ",(0,t.jsx)(e.a,{href:"https://yarnpkg.com",children:"yarn"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"npm install -g yarn\n"})}),"\n",(0,t.jsx)(e.h3,{id:"luxd-and-lux-netrunner",children:"Luxd and Lux Netrunner"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"https://github.com/luxdefi/luxd",children:"Luxd"})," is an Lux node\nimplementation written in Go.\n",(0,t.jsx)(e.a,{href:"/tooling/netrunner",children:"Lux Netrunner"})," is a tool to quickly deploy local test\nnetworks. Together, you can deploy local test networks and run tests on them."]}),"\n",(0,t.jsx)(e.h3,{id:"solidity-and-lux",children:"Solidity and Lux"}),"\n",(0,t.jsxs)(e.p,{children:["It is also helpful to have a basic understanding of ",(0,t.jsx)(e.a,{href:"https://docs.soliditylang.org",children:"Solidity"})," and Lux."]}),"\n",(0,t.jsx)(e.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsxs)(e.p,{children:["Clone the ",(0,t.jsx)(e.a,{href:"https://github.com/luxdefi/smart-contract-quickstart",children:"quickstart\nrepository"})," and\ninstall the necessary packages via ",(0,t.jsx)(e.code,{children:"yarn"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"git clone https://github.com/luxdefi/smart-contract-quickstart.git\ncd smart-contract-quickstart\nyarn\n"})}),"\n",(0,t.jsxs)(e.admonition,{type:"info",children:[(0,t.jsx)(e.p,{children:"The repository cloning method used is HTTPS, but SSH can be used too:"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"git clone git@github.com:luxdefi/smart-contract-quickstart.git"})}),(0,t.jsxs)(e.p,{children:["You can find more about SSH and how to use it\n",(0,t.jsx)(e.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh",children:"here"}),"."]})]}),"\n",(0,t.jsx)(e.h2,{id:"write-contracts",children:"Write Contracts"}),"\n",(0,t.jsxs)(e.p,{children:["Edit the ",(0,t.jsx)(e.code,{children:"ExampleERC20.sol"})," contract in ",(0,t.jsx)(e.code,{children:"contracts/"}),". ",(0,t.jsx)(e.code,{children:"ExampleERC20.sol"})," is an\n",(0,t.jsx)(e.a,{href:"https://openzeppelin.com",children:"Open Zeppelin"}),"\n",(0,t.jsx)(e.a,{href:"https://eips.ethereum.org/EIPS/eip-20",children:"ERC20"})," contract. ERC20 is a popular\nsmart contract interface. You can also add your own contracts."]}),"\n",(0,t.jsx)(e.h2,{id:"hardhat-config",children:"Hardhat Config"}),"\n",(0,t.jsxs)(e.p,{children:["Hardhat uses ",(0,t.jsx)(e.code,{children:"hardhat.config.js"})," as the configuration file. You can define\ntasks, networks, compilers and more in that file. For more information see\n",(0,t.jsx)(e.a,{href:"https://hardhat.org/config/",children:"here"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Here is an example pre-configured ",(0,t.jsx)(e.code,{children:"hardhat.config.ts"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:'import { task } from "hardhat/config";\nimport { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";\nimport { BigNumber } from "ethers";\nimport "@nomiclabs/hardhat-waffle";\n\n// When using the hardhat network, you may choose to fork Testnet or Lux Mainnet\n// This will allow you to debug contracts using the hardhat network while keeping the current network state\n// To enable forking, turn one of these booleans on, and then run your tasks/scripts using ``--network hardhat``\n// For more information go to the hardhat guide\n// https://hardhat.org/hardhat-network/\n// https://hardhat.org/guides/mainnet-forking.html\nconst FORK_FUJI = false;\nconst FORK_MAINNET = false;\nconst forkingData = FORK_FUJI\n  ? {\n      url: "https://api.lux-test.network/ext/bc/C/rpc",\n    }\n  : FORK_MAINNET\n  ? {\n      url: "https://api.lux.network/ext/bc/C/rpc",\n    }\n  : undefined;\n\nexport default {\n  solidity: {\n    compilers: [\n      {\n        version: "0.5.16",\n      },\n      {\n        version: "0.6.2",\n      },\n      {\n        version: "0.6.4",\n      },\n      {\n        version: "0.7.0",\n      },\n      {\n        version: "0.8.0",\n      },\n    ],\n  },\n  networks: {\n    hardhat: {\n      gasPrice: 225000000000,\n      chainId: !forkingData ? 43112 : undefined, //Only specify a chainId if we are not forking\n      forking: forkingData,\n    },\n    local: {\n      url: "http://localhost:9650/ext/bc/C/rpc",\n      gasPrice: 225000000000,\n      chainId: 43112,\n      accounts: [\n        "0x56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027",\n        "0x7b4198529994b0dc604278c99d153cfd069d594753d471171a1d102a10438e07",\n        "0x15614556be13730e9e8d6eacc1603143e7b96987429df8726384c2ec4502ef6e",\n        "0x31b571bf6894a248831ff937bb49f7754509fe93bbd2517c9c73c4144c0e97dc",\n        "0x6934bef917e01692b789da754a0eae31a8536eb465e7bff752ea291dad88c675",\n        "0xe700bdbdbc279b808b1ec45f8c2370e4616d3a02c336e68d85d4668e08f53cff",\n        "0xbbc2865b76ba28016bc2255c7504d000e046ae01934b04c694592a6276988630",\n        "0xcdbfd34f687ced8c6968854f8a99ae47712c4f4183b78dcc4a903d1bfe8cbf60",\n        "0x86f78c5416151fe3546dece84fda4b4b1e36089f2dbc48496faf3a950f16157c",\n        "0x750839e9dbbd2a0910efe40f50b2f3b2f2f59f5580bb4b83bd8c1201cf9a010a",\n      ],\n    },\n    testnet: {\n      url: "https://api.lux-test.network/ext/bc/C/rpc",\n      gasPrice: 225000000000,\n      chainId: 43113,\n      accounts: [],\n    },\n    mainnet: {\n      url: "https://api.lux.network/ext/bc/C/rpc",\n      gasPrice: 225000000000,\n      chainId: 43114,\n      accounts: [],\n    },\n  },\n};\n'})}),"\n",(0,t.jsx)(e.p,{children:"This configures necessary network information to provide smooth interaction with\nLux. There are also some pre-defined private keys for testing on a local\ntest network."}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsx)(e.p,{children:"The port in this tutorial uses 9650. Depending on how you start your local\nnetwork, it could be different."})}),"\n",(0,t.jsx)(e.h2,{id:"hardhat-tasks",children:"Hardhat Tasks"}),"\n",(0,t.jsxs)(e.p,{children:["You can define custom hardhat tasks in ",(0,t.jsx)(e.code,{children:"hardhat.config.ts"}),".\nThere are two tasks included as examples: ",(0,t.jsx)(e.code,{children:"accounts"})," and ",(0,t.jsx)(e.code,{children:"balances"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:'task(\n  "accounts",\n  "Prints the list of accounts",\n  async (args, hre): Promise<void> => {\n    const accounts: SignerWithAddress[] = await hre.ethers.getSigners();\n    accounts.forEach((account: SignerWithAddress): void => {\n      console.log(account.address);\n    });\n  }\n);\n\ntask(\n  "balances",\n  "Prints the list of LUX account balances",\n  async (args, hre): Promise<void> => {\n    const accounts: SignerWithAddress[] = await hre.ethers.getSigners();\n    for (const account of accounts) {\n      const balance: BigNumber = await hre.ethers.provider.getBalance(\n        account.address\n      );\n      console.log(`${account.address} has balance ${balance.toString()}`);\n    }\n  }\n);\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"npx hardhat accounts"})," prints the list of accounts. ",(0,t.jsx)(e.code,{children:"npx hardhat balances"})," prints the list of\nLUX account balances. As with other ",(0,t.jsx)(e.code,{children:"yarn"})," scripts you can pass in a\n",(0,t.jsx)(e.code,{children:"--network"})," flag to hardhat tasks."]}),"\n",(0,t.jsx)(e.h3,{id:"accounts",children:"Accounts"}),"\n",(0,t.jsx)(e.p,{children:"Prints a list of accounts on the local Lux Netrunner network."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"npx hardhat accounts --network local\n0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC\n0x9632a79656af553F58738B0FB750320158495942\n0x55ee05dF718f1a5C1441e76190EB1a19eE2C9430\n0x4Cf2eD3665F6bFA95cE6A11CFDb7A2EF5FC1C7E4\n0x0B891dB1901D4875056896f28B6665083935C7A8\n0x01F253bE2EBF0bd64649FA468bF7b95ca933BDe2\n0x78A23300E04FB5d5D2820E23cc679738982e1fd5\n0x3C7daE394BBf8e9EE1359ad14C1C47003bD06293\n0x61e0B3CD93F36847Abbd5d40d6F00a8eC6f3cfFB\n0x0Fa8EA536Be85F32724D57A37758761B86416123\n"})}),"\n",(0,t.jsx)(e.h3,{id:"balances",children:"Balances"}),"\n",(0,t.jsx)(e.p,{children:"Prints a list of accounts and their corresponding LUX balances on the local\nLux Netrunner network."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"npx hardhat balances --network local\n0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC has balance 50000000000000000000000000\n0x9632a79656af553F58738B0FB750320158495942 has balance 0\n0x55ee05dF718f1a5C1441e76190EB1a19eE2C9430 has balance 0\n0x4Cf2eD3665F6bFA95cE6A11CFDb7A2EF5FC1C7E4 has balance 0\n0x0B891dB1901D4875056896f28B6665083935C7A8 has balance 0\n0x01F253bE2EBF0bd64649FA468bF7b95ca933BDe2 has balance 0\n0x78A23300E04FB5d5D2820E23cc679738982e1fd5 has balance 0\n0x3C7daE394BBf8e9EE1359ad14C1C47003bD06293 has balance 0\n0x61e0B3CD93F36847Abbd5d40d6F00a8eC6f3cfFB has balance 0\n0x0Fa8EA536Be85F32724D57A37758761B86416123 has balance 0\n"})}),"\n",(0,t.jsx)(e.p,{children:"Notice that the first account is already funded. This is because this address is\npre-funded in the local network genesis file."}),"\n",(0,t.jsx)(e.h3,{id:"erc20-balances",children:"ERC20 Balances"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'task(\n  "check-erc20-balance",\n  "Prints out the ERC20 balance of your account"\n).setAction(async function (taskArguments, hre) {\n  const genericErc20Abi = require("./erc20.abi.json");\n  const tokenContractAddress = "0x...";\n  const provider = ethers.getDefaultProvider(\n    "https://api.lux.network/ext/bc/C/rpc"\n  );\n  const contract = new ethers.Contract(\n    tokenContractAddress,\n    genericErc20Abi,\n    provider\n  );\n  const balance = await contract.balanceOf("0x...");\n  console.log(`Balance in wei: ${balance}`);\n});\n'})}),"\n",(0,t.jsxs)(e.p,{children:["This will return the result in wei. If you want to know the exact amount of\ntoken with its token name then you need to divide it with its decimal.\n",(0,t.jsx)(e.code,{children:"erc20.abi.json"})," can be ",(0,t.jsx)(e.a,{target:"_blank",href:a(87318).Z+"",children:"found here"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["The example uses the ",(0,t.jsx)(e.a,{href:"/reference/luxd/c-chain/api#endpoints",children:"C-Chain Public\nAPI"})," for the provider. For a local\nLux network use ",(0,t.jsx)(e.code,{children:"http://127.0.0.1:9650/ext/bc/C/rpc"})," and for Testnet\nuse ",(0,t.jsx)(e.code,{children:"https://api.lux-test.network/ext/bc/C/rpc"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"hardhat-help",children:"Hardhat Help"}),"\n",(0,t.jsxs)(e.p,{children:["Run ",(0,t.jsx)(e.code,{children:"yarn hardhat"})," to list Hardhat's version, usage instructions, global options and available tasks."]}),"\n",(0,t.jsx)(e.h2,{id:"typical-lux-netrunner-workflow",children:"Typical Lux Netrunner Workflow"}),"\n",(0,t.jsx)(e.h3,{id:"run-lux-netrunner",children:"Run Lux Netrunner"}),"\n",(0,t.jsx)(e.p,{children:"First confirm you have the latest Luxd built."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"cd /path/to/luxd\ngit fetch -p\ngit checkout master\n./scripts/build.sh\n"})}),"\n",(0,t.jsxs)(e.p,{children:["(Note that you can also ",(0,t.jsx)(e.a,{href:"https://github.com/luxdefi/luxd/releases",children:"download pre-compiled Luxd\nbinaries"})," rather than building\nfrom source.)"]}),"\n",(0,t.jsxs)(e.p,{children:["Confirm you have Lux Netrunner installed by following the steps\nlisted ",(0,t.jsx)(e.a,{href:"/tooling/netrunner",children:"here"})]}),"\n",(0,t.jsx)(e.p,{children:"Start Lux Netrunner and run a script to start a new local network."}),"\n",(0,t.jsx)(e.h3,{id:"start-the-server",children:"Start the Server"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:'$ cd /path/to/Lux-Network-Runner\n$ netrunner server \\\n--log-level debug \\\n--port=":8080" \\\n--grpc-gateway-port=":8081"\n'})}),"\n",(0,t.jsx)(e.h3,{id:"start-a-new-lux-network-with-five-nodes",children:"Start a New Lux Network with Five Nodes"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'# replace execPath with the path to Luxd on your machine\n# e.g., ${HOME}/go/src/github.com/luxdefi/luxd/build/luxd\n$ LUXD_EXEC_PATH="luxd"\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'$ netrunner control start \\\n--log-level debug \\\n--endpoint="0.0.0.0:8080" \\\n--number-of-nodes=5 \\\n--luxd-path ${LUXD_EXEC_PATH}\n'})}),"\n",(0,t.jsx)(e.p,{children:"Now you're running a local Lux network with 5 nodes."}),"\n",(0,t.jsx)(e.h3,{id:"fund-accounts",children:"Fund Accounts"}),"\n",(0,t.jsxs)(e.p,{children:["Transfer 1,000 LUX from the X-Chain to each of the 10 accounts in\n",(0,t.jsx)(e.code,{children:"hardhat.config.ts"})," with the script\n",(0,t.jsx)(e.a,{href:"https://github.com/luxdefi/smart-contract-quickstart/blob/main/scripts/fund-cchain-addresses.js",children:(0,t.jsx)(e.code,{children:"fund-cchain-addresses"})}),".\nFunding these accounts is a prerequisite for deploying and interacting with\nsmart contracts."]}),"\n",(0,t.jsxs)(e.p,{children:["Note: If you see ",(0,t.jsx)(e.code,{children:'Error: Invalid JSON RPC response: "API call rejected because chain is not done bootstrapping"'}),", you need to wait until network is\nbootstrapped and ready to use. It should not take too long."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"$ cd /path/to/smart-contract-quickstart\n$ yarn fund-cchain-addresses\nyarn run v1.22.4\nnpx hardhat run scripts/fund-cchain-addresses.js\nExporting 1000 LUX to each address on the C-Chain...\n2b75ae74ScLkWe5GVFTYJoP2EniMywkcZySQUoFGN2EJLiPDgp\nImporting LUX to the C-Chain...\n2dyXcQGiCk1ckCX4Fs8nLgL8GJgsM72f9Ga13rX5v9TAguVJYM\n\u2728  Done in 5.03s.\n"})}),"\n",(0,t.jsx)(e.p,{children:"Confirm each of the accounts are funded with 1000 LUX."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"$ yarn balances --network local\nyarn run v1.22.4\nnpx hardhat balances --network local\n0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC has balance 50000001000000000000000000\n0x9632a79656af553F58738B0FB750320158495942 has balance 1000000000000000000\n0x55ee05dF718f1a5C1441e76190EB1a19eE2C9430 has balance 1000000000000000000\n0x4Cf2eD3665F6bFA95cE6A11CFDb7A2EF5FC1C7E4 has balance 1000000000000000000\n0x0B891dB1901D4875056896f28B6665083935C7A8 has balance 1000000000000000000\n0x01F253bE2EBF0bd64649FA468bF7b95ca933BDe2 has balance 1000000000000000000\n0x78A23300E04FB5d5D2820E23cc679738982e1fd5 has balance 1000000000000000000\n0x3C7daE394BBf8e9EE1359ad14C1C47003bD06293 has balance 1000000000000000000\n0x61e0B3CD93F36847Abbd5d40d6F00a8eC6f3cfFB has balance 1000000000000000000\n0x0Fa8EA536Be85F32724D57A37758761B86416123 has balance 1000000000000000000\n\u2728  Done in 0.72s.\n"})}),"\n",(0,t.jsx)(e.p,{children:"Send each of the accounts some LUX from the first account."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"$ yarn send-lux-wallet-signer --network local\nyarn run v1.22.4\nnpx hardhat run scripts/sendAvaWalletSigner.ts --network local\nSeeding addresses with LUX\n\u2728  Done in 1.33s.\n"})}),"\n",(0,t.jsx)(e.p,{children:"Confirm that the balances are updated"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"$ yarn balances --network local\nyarn run v1.22.4\nnpx hardhat balances --network local\n0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC has balance 49999999995275000000000000\n0x9632a79656af553F58738B0FB750320158495942 has balance 1000010000000000000000\n0x55ee05dF718f1a5C1441e76190EB1a19eE2C9430 has balance 1000010000000000000000\n0x4Cf2eD3665F6bFA95cE6A11CFDb7A2EF5FC1C7E4 has balance 1000010000000000000000\n0x0B891dB1901D4875056896f28B6665083935C7A8 has balance 1000010000000000000000\n0x01F253bE2EBF0bd64649FA468bF7b95ca933BDe2 has balance 1000010000000000000000\n0x78A23300E04FB5d5D2820E23cc679738982e1fd5 has balance 1000010000000000000000\n0x3C7daE394BBf8e9EE1359ad14C1C47003bD06293 has balance 1000010000000000000000\n0x61e0B3CD93F36847Abbd5d40d6F00a8eC6f3cfFB has balance 1000010000000000000000\n0x0Fa8EA536Be85F32724D57A37758761B86416123 has balance 1000010000000000000000\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Note: If you see ",(0,t.jsx)(e.code,{children:"Error HH108: Cannot connect to the network local. Please make sure your node is running, and check your internet connection and networks config"}),", ensure that you are using a valid Node Port. See which ports the Nodes\nare using by running the command:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:'$ cd /path/to/netrunner\n$ netrunner control uris \\\n--log-level debug \\\n--endpoint="0.0.0.0:8080"\n'})}),"\n",(0,t.jsx)(e.h3,{id:"compile-smart-contracts",children:"Compile Smart Contracts"}),"\n",(0,t.jsxs)(e.p,{children:["In\n",(0,t.jsx)(e.a,{href:"https://github.com/luxdefi/smart-contract-quickstart/blob/main/package.json",children:(0,t.jsx)(e.code,{children:"package.json"})}),"\nthere's a ",(0,t.jsx)(e.code,{children:"compile"})," script."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'"compile": "npx hardhat compile",\n'})}),"\n",(0,t.jsxs)(e.p,{children:["Run ",(0,t.jsx)(e.code,{children:"yarn compile"})," to make sure your project compiles."]}),"\n",(0,t.jsx)(e.p,{children:"Compile the smart contract."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"$ yarn compile\nyarn run v1.22.4\nrimraf ./build/\nnpx hardhat compile\nCompiling 1 file with 0.6.4\nCompilation finished successfully\n\u2728  Done in 2.13s.\n"})}),"\n",(0,t.jsx)(e.h2,{id:"deploy-smart-contracts",children:"Deploy Smart Contracts"}),"\n",(0,t.jsxs)(e.p,{children:["Hardhat enables deploying to multiple environments. In\n",(0,t.jsx)(e.a,{href:"https://github.com/luxdefi/smart-contract-quickstart/blob/main/package.json",children:"package.json"}),"\nthere is a script for deploying."]}),"\n",(0,t.jsxs)(e.p,{children:["Edit the deployment script in ",(0,t.jsx)(e.code,{children:"scripts/deploy.ts"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'"deploy": "npx hardhat run scripts/deploy.ts",\n'})}),"\n",(0,t.jsxs)(e.p,{children:["You can choose which environment that you want to deploy to by passing in the\n",(0,t.jsx)(e.code,{children:"--network"})," flag with ",(0,t.jsx)(e.code,{children:"local"})," (for example a local network created with Lux\nNetrunner), ",(0,t.jsx)(e.code,{children:"testnet"}),", or ",(0,t.jsx)(e.code,{children:"mainnet"})," for each respective environment. If you\ndon't pass in ",(0,t.jsx)(e.code,{children:"--network"})," then it will default to the hardhat network. For\nexample, if you want to deploy to Mainnet:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"yarn deploy --network mainnet\n"})}),"\n",(0,t.jsx)(e.p,{children:"Deploy the contract to your local network"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"$ yarn deploy --network local\nyarn run v1.22.4\nnpx hardhat run scripts/deploy.ts --network local\nCoin deployed to: 0x17aB05351fC94a1a67Bf3f56DdbB941aE6\n\u2728  Done in 1.28s.\n"})}),"\n",(0,t.jsxs)(e.p,{children:["We now have a token deployed at ",(0,t.jsx)(e.code,{children:"0x17aB05351fC94a1a67Bf3f56DdbB941aE6"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"interact-with-smart-contract",children:"Interact with Smart Contract"}),"\n",(0,t.jsxs)(e.p,{children:["Hardhat has a developer console to interact with contracts and the network. For\nmore information about Hardhat's console see\n",(0,t.jsx)(e.a,{href:"https://hardhat.org/guides/hardhat-console.html",children:"here"}),". Hardhat console is a\nNodeJS-REPL, and you can use different tools in it.\n",(0,t.jsx)(e.a,{href:"https://docs.ethers.io/v5/",children:"Ethers"})," is the library that we'll use to interact\nwith our network."]}),"\n",(0,t.jsx)(e.p,{children:"You can open console with:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:'$ yarn console --network local\nyarn run v1.22.11\nnpx hardhat console --network local\nWelcome to Node.js v16.2.0.\nType ".help" for more information.\n>\n'})}),"\n",(0,t.jsx)(e.p,{children:"Get the contract instance with factory and contract address to interact with our contract:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"> const Coin = await ethers.getContractFactory('ExampleERC20');\nundefined\n> const coin = await Coin.attach('0x17aB05351fC94a1a67Bf3f56DdbB941aE6')\nundefined\n"})}),"\n",(0,t.jsxs)(e.p,{children:["The first line retrieves contract factory with ABI & bytecode. The second line\nretrieves an instance of that contract factory with given contract address.\nRecall that our contract was already deployed to\n",(0,t.jsx)(e.code,{children:"0x17aB05351fC94a1a67Bf3f56DdbB941aE6"})," in the previous step."]}),"\n",(0,t.jsx)(e.p,{children:"Fetch the accounts:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"> let accounts = await ethers.provider.listAccounts()\nundefined\n> accounts\n[\n  '0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC',\n  '0x9632a79656af553F58738B0FB750320158495942',\n  '0x55ee05dF718f1a5C1441e76190EB1a19eE2C9430',\n  '0x4Cf2eD3665F6bFA95cE6A11CFDb7A2EF5FC1C7E4',\n  '0x0B891dB1901D4875056896f28B6665083935C7A8',\n  '0x01F253bE2EBF0bd64649FA468bF7b95ca933BDe2',\n  '0x78A23300E04FB5d5D2820E23cc679738982e1fd5',\n  '0x3C7daE394BBf8e9EE1359ad14C1C47003bD06293',\n  '0x61e0B3CD93F36847Abbd5d40d6F00a8eC6f3cfFB',\n  '0x0Fa8EA536Be85F32724D57A37758761B86416123'\n]\n"})}),"\n",(0,t.jsxs)(e.p,{children:["This is exactly the same account list as in ",(0,t.jsx)(e.code,{children:"yarn accounts"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Now we can interact with our ",(0,t.jsx)(e.code,{children:"ERC-20"})," contract:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"> let value = await coin.balanceOf(accounts[0])\nundefined\n> value.toString()\n'123456789'\n> value = await coin.balanceOf(accounts[1])\nBigNumber { _hex: '0x00', _isBigNumber: true }\n> value.toString()\n'0'\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"account[0]"})," has a balance because ",(0,t.jsx)(e.code,{children:"account[0]"})," is the default account. The\ncontract is deployed with this account. The constructor of\n",(0,t.jsx)(e.a,{href:"https://github.com/luxdefi/smart-contract-quickstart/blob/main/contracts/ERC20.sol",children:"ERC20.sol"}),"\nmints ",(0,t.jsx)(e.code,{children:"TOTAL_SUPPLY"})," of 123456789 token to the deployer of the contract."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"accounts[1]"})," currently has no balance. Send some tokens to ",(0,t.jsx)(e.code,{children:"accounts[1]"}),", which is ",(0,t.jsx)(e.code,{children:"0x9632a79656af553F58738B0FB750320158495942"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"> let result = await coin.transfer(accounts[1], 100)\nundefined\n> result\n{\n  hash: '0x35eec91011f9089ba7689479617a90baaf8590395b5c80bb209fa7000e4848a5',\n  type: 0,\n  accessList: null,\n  blockHash: null,\n  blockNumber: null,\n  transactionIndex: null,\n  confirmations: 0,\n  from: '0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC',\n  gasPrice: BigNumber { _hex: '0x34630b8a00', _isBigNumber: true },\n  gasLimit: BigNumber { _hex: '0x8754', _isBigNumber: true },\n  to: '0x17aB05351fC94a1a67Bf3f56DdbB941aE6c63E25',\n  value: BigNumber { _hex: '0x00', _isBigNumber: true },\n  nonce: 3,\n  data: '0xa9059cbb0000000000000000000000009632a79656af553f58738b0fb7503201584959420000000000000000000000000000000000000000000000000000000000000064',\n  r: '0xc2b9680771c092a106eadb2887e5bff41fcda166c8e00f36ae79b196bbc53d36',\n  s: '0x355138cb5e2b9f20c15626638750775cfc9423881db374d732a8549d05ebf601',\n  v: 86260,\n  creates: null,\n  chainId: 43112,\n  wait: [Function (anonymous)]\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Note: Since this is a local network, we did not need to wait until transaction\nis accepted. However for other networks like ",(0,t.jsx)(e.code,{children:"testnet"})," or ",(0,t.jsx)(e.code,{children:"mainnet"})," you need to\nwait until transaction is accepted with: ",(0,t.jsx)(e.code,{children:"await result.wait()"}),"."]}),"\n",(0,t.jsx)(e.p,{children:"Now we can ensure that tokens are transferred:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"> value = await coin.balanceOf(accounts[0])\nBigNumber { _hex: '0x075bccb1', _isBigNumber: true }\n> value.toString()\n'123456689'\n> value = await coin.balanceOf(accounts[1])\nBigNumber { _hex: '0x64', _isBigNumber: true }\n> value.toString()\n'100'\n"})}),"\n",(0,t.jsxs)(e.p,{children:['As you might noticed there was no "sender" information in ',(0,t.jsx)(e.code,{children:"await coin.transfer(accounts[1], 100)"}),"; this is because ",(0,t.jsx)(e.code,{children:"ethers"})," uses the first signer\nas the default signer. In our case this is ",(0,t.jsx)(e.code,{children:"account[0]"}),". If we want to use\nanother account we need to connect with it first."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"> let signer1 = await ethers.provider.getSigner(1)\n> let contractAsSigner1 = coin.connect(signer1)\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Now we can call the contract with ",(0,t.jsx)(e.code,{children:"signer1"}),", which is ",(0,t.jsx)(e.code,{children:"account[1]"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"> await contractAsSigner1.transfer(accounts[0], 5)\n{\n  hash: '0x807947f1c40bb723ac312739d238b62764ae3c3387c6cdbbb6534501577382dd',\n  type: 0,\n  accessList: null,\n  blockHash: null,\n  blockNumber: null,\n  transactionIndex: null,\n  confirmations: 0,\n  from: '0x9632a79656af553F58738B0FB750320158495942',\n  gasPrice: BigNumber { _hex: '0x34630b8a00', _isBigNumber: true },\n  gasLimit: BigNumber { _hex: '0x8754', _isBigNumber: true },\n  to: '0x17aB05351fC94a1a67Bf3f56DdbB941aE6c63E25',\n  value: BigNumber { _hex: '0x00', _isBigNumber: true },\n  nonce: 2,\n  data: '0xa9059cbb0000000000000000000000008db97c7cece249c2b98bdc0226cc4c2a57bf52fc0000000000000000000000000000000000000000000000000000000000000005',\n  r: '0xcbf126dd0b109491d037c5f3af754ef2d0d7d06149082b13d0e27e502d3adc5b',\n  s: '0x5978521804dd15674147cc6b532b8801c4d3a0e94f41f5d7ffaced14b9262504',\n  v: 86259,\n  creates: null,\n  chainId: 43112,\n  wait: [Function (anonymous)]\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"Let's check balances now:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"> value = await coin.balanceOf(accounts[0])\nBigNumber { _hex: '0x075bccb6', _isBigNumber: true }\n> value.toString()\n'123456694'\n> value = await coin.balanceOf(accounts[1])\nBigNumber { _hex: '0x5f', _isBigNumber: true }\n> value.toString()\n'95'\n"})}),"\n",(0,t.jsxs)(e.p,{children:["We've successfully transferred 5 tokes from ",(0,t.jsx)(e.code,{children:"accounts[1]"})," to ",(0,t.jsx)(e.code,{children:"accounts[0]"})]}),"\n",(0,t.jsx)(e.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(e.p,{children:"Now you have the tools you need to launch a local Lux network, create a\nHardhat project, as well as create, compile, deploy and interact with Solidity\ncontracts."}),"\n",(0,t.jsxs)(e.p,{children:["Join our ",(0,t.jsx)(e.a,{href:"https://chat.lux.network",children:"Discord Server"})," to learn more and ask any questions you may have."]})]})}function h(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},87318:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/files/erc20.abi-a562e36ad30a4d751911073568ea0546.json"},11151:(n,e,a)=>{a.d(e,{Z:()=>i,a:()=>s});var t=a(67294);const c={},r=t.createContext(c);function s(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);