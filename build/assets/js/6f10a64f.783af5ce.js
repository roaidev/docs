"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3902],{91771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(85893),a=t(11151);const c={tags:["Build","Dapps"],description:"Launching any new or existing Solidity decentralized app on Lux C-Chain fosters the same developer experience as Ethereum, but benefits from the security, speed, and interoperability of the Lux Network.",sidebar_label:"Truffle",pagination_label:"Using Truffle with the Lux C-Chain"},i="Using Truffle with the Lux C-Chain",o={id:"deprecated/truffle",title:"Using Truffle with the Lux C-Chain",description:"Launching any new or existing Solidity decentralized app on Lux C-Chain fosters the same developer experience as Ethereum, but benefits from the security, speed, and interoperability of the Lux Network.",source:"@site/docs/deprecated/truffle.md",sourceDirName:"deprecated",slug:"/deprecated/truffle",permalink:"/deprecated/truffle",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/deprecated/truffle.md",tags:[{label:"Build",permalink:"/tags/build"},{label:"Dapps",permalink:"/tags/dapps"}],version:"current",frontMatter:{tags:["Build","Dapps"],description:"Launching any new or existing Solidity decentralized app on Lux C-Chain fosters the same developer experience as Ethereum, but benefits from the security, speed, and interoperability of the Lux Network.",sidebar_label:"Truffle",pagination_label:"Using Truffle with the Lux C-Chain"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Start up a Local Lux Network",id:"start-up-a-local-lux-network",level:2},{value:"Create Truffle Directory and Install Dependencies",id:"create-truffle-directory-and-install-dependencies",level:2},{value:"Update truffle-config.js",id:"update-truffle-configjs",level:2},{value:"Add Storage.sol",id:"add-storagesol",level:2},{value:"Add New Migration",id:"add-new-migration",level:2},{value:"Compile Contracts with Truffle",id:"compile-contracts-with-truffle",level:2},{value:"Accounts on C-Chain",id:"accounts-on-c-chain",level:2},{value:"Truffle Accounts",id:"truffle-accounts",level:3},{value:"Scripting Account Funding",id:"scripting-account-funding",level:3},{value:"Fund Your Account",id:"fund-your-account",level:3},{value:"Personal APIs",id:"personal-apis",level:3},{value:"Run Migrations",id:"run-migrations",level:2},{value:"Interacting with Your Contract",id:"interacting-with-your-contract",level:2},{value:"Writing a number to the blockchain",id:"writing-a-number-to-the-blockchain",level:3},{value:"Reading a Number From the Blockchain",id:"reading-a-number-from-the-blockchain",level:3},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"using-truffle-with-the-lux-c-chain",children:"Using Truffle with the Lux C-Chain"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This document has been deprecated and is no longer maintained. It may contain incorrect/obsolete information."})}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.trufflesuite.com",children:"Truffle Suite"})," is a toolkit for launching\ndecentralized applications (dapps) on the EVM. With Truffle you can write and\ncompile smart contracts, build artifacts, run migrations and interact with\ndeployed contracts. This tutorial illustrates how Truffle can be used with\nLux's C-Chain, which is an instance of the EVM."]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.p,{children:["You've completed ",(0,r.jsx)(n.a,{href:"/nodes/run/node-manually",children:"Run an Lux Node"})," and are familiar with\n",(0,r.jsx)(n.a,{href:"/learn/lux/lux-platform",children:"Lux's architecture"}),". You've also\nperformed a cross-chain swap via this ",(0,r.jsx)(n.a,{href:"https://support.lux.network/en/articles/6169872-how-to-make-a-cross-chain-transfer-in-the-wallet",children:"this\ntutorial"}),"\nto get funds to your C-Chain address."]}),"\n",(0,r.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/luxdefi/netrunner",children:"Lux Network\nRunner"})," is a tool for\nrunning a local Lux network. It's similar to Truffle's\n",(0,r.jsx)(n.a,{href:"https://www.trufflesuite.com/ganache",children:"Ganache"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nodejs.org/en",children:"NodeJS"})," v8.9.4 or later."]}),"\n",(0,r.jsxs)(n.li,{children:["Truffle, which you can install with ",(0,r.jsx)(n.code,{children:"npm install -g truffle"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"start-up-a-local-lux-network",children:"Start up a Local Lux Network"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/luxdefi/netrunner",children:"Lux Netrunner"}),"\nallows you to spin up private test network deployments. Start a local five node\nLux network:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"cd /path/to/netrunner\n# start a five node staking network\n./go run examples/local/fivenodenetwork/main.go\n"})}),"\n",(0,r.jsx)(n.p,{children:"A five node Lux network is running on your machine. Network will run until you Ctrl + C to exit."}),"\n",(0,r.jsx)(n.h2,{id:"create-truffle-directory-and-install-dependencies",children:"Create Truffle Directory and Install Dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["Open a new terminal tab to so we can create a ",(0,r.jsx)(n.code,{children:"truffle"})," directory and install some further dependencies."]}),"\n",(0,r.jsxs)(n.p,{children:["First, navigate to the directory within which you intend to create your ",(0,r.jsx)(n.code,{children:"truffle"})," working directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"cd /path/to/directory\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create and enter a new directory named ",(0,r.jsx)(n.code,{children:"truffle"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"mkdir truffle; cd truffle\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"npm"})," to install ",(0,r.jsx)(n.a,{href:"https://web3js.readthedocs.io",children:"web3"}),", which is a library\nthrough which we can talk to the EVM and\n",(0,r.jsx)(n.a,{href:"/tooling/luxjs-overview",children:"LuxJS"})," which is used for cross chain\nswaps."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"npm install web3 lux -s\n"})}),"\n",(0,r.jsx)(n.p,{children:"We'll use web3 to set an HTTP Provider which is how web3 will speak to the EVM.\nLastly, create a boilerplate truffle project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"truffle init\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The local development network pre-funds some static addresses when created.\nWe'll use\n",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@truffle/hdwallet-provider",children:"@truffle/hdwallet-provider"}),"\nto use these pre-funded addresses as our accounts."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"npm install @truffle/hdwallet-provider\n"})}),"\n",(0,r.jsx)(n.h2,{id:"update-truffle-configjs",children:"Update truffle-config.js"}),"\n",(0,r.jsxs)(n.p,{children:["One of the files created when you ran ",(0,r.jsx)(n.code,{children:"truffle init"})," is ",(0,r.jsx)(n.code,{children:"truffle-config.js"}),". Add the following to ",(0,r.jsx)(n.code,{children:"truffle-config.js"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'const Web3 = require("web3");\nconst HDWalletProvider = require("@truffle/hdwallet-provider");\n\nconst protocol = "http";\nconst ip = "localhost";\nconst port = 9650;\nWeb3.providers.HttpProvider.prototype.sendAsync =\n  Web3.providers.HttpProvider.prototype.send;\nconst provider = new Web3.providers.HttpProvider(\n  `${protocol}://${ip}:${port}/ext/bc/C/rpc`\n);\n\nconst privateKeys = [\n  "0x56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027",\n  "0x7b4198529994b0dc604278c99d153cfd069d594753d471171a1d102a10438e07",\n  "0x15614556be13730e9e8d6eacc1603143e7b96987429df8726384c2ec4502ef6e",\n  "0x31b571bf6894a248831ff937bb49f7754509fe93bbd2517c9c73c4144c0e97dc",\n  "0x6934bef917e01692b789da754a0eae31a8536eb465e7bff752ea291dad88c675",\n  "0xe700bdbdbc279b808b1ec45f8c2370e4616d3a02c336e68d85d4668e08f53cff",\n  "0xbbc2865b76ba28016bc2255c7504d000e046ae01934b04c694592a6276988630",\n  "0xcdbfd34f687ced8c6968854f8a99ae47712c4f4183b78dcc4a903d1bfe8cbf60",\n  "0x86f78c5416151fe3546dece84fda4b4b1e36089f2dbc48496faf3a950f16157c",\n  "0x750839e9dbbd2a0910efe40f50b2f3b2f2f59f5580bb4b83bd8c1201cf9a010a",\n];\n\nmodule.exports = {\n  networks: {\n    development: {\n      provider: () => {\n        return new HDWalletProvider({\n          privateKeys: privateKeys,\n          providerOrUrl: provider,\n        });\n      },\n      network_id: "*",\n      gas: 3000000,\n      gasPrice: 225000000000,\n    },\n  },\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Note that you can change the ",(0,r.jsx)(n.code,{children:"protocol"}),", ",(0,r.jsx)(n.code,{children:"ip"})," and ",(0,r.jsx)(n.code,{children:"port"})," if you want to direct\nAPI calls to a different Luxd node. Also note that we're setting the\n",(0,r.jsx)(n.code,{children:"gasPrice"})," and ",(0,r.jsx)(n.code,{children:"gas"})," to the appropriate values for the Lux C-Chain."]}),"\n",(0,r.jsx)(n.h2,{id:"add-storagesol",children:"Add Storage.sol"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"contracts"})," directory add a new file called ",(0,r.jsx)(n.code,{children:"Storage.sol"})," and add the following block of code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"// SPDX-License-Identifier: MIT\npragma solidity >=0.4.22 <0.9.0;\n\n/**\n * @title Storage\n * @dev Store & retrieve value in a variable\n */\ncontract Storage {\n\n    uint256 number;\n\n    /**\n     * @dev Store value in variable\n     * @param num value to store\n     */\n    function store(uint256 num) public {\n        number = num;\n    }\n\n    /**\n     * @dev Return value\n     * @return value of 'number'\n     */\n    function retrieve() public view returns (uint256){\n        return number;\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Storage"})," is a solidity smart contract which lets us write a number to the\nblockchain via a ",(0,r.jsx)(n.code,{children:"store"})," function and then read the number back from the\nblockchain via a ",(0,r.jsx)(n.code,{children:"retrieve"})," function."]}),"\n",(0,r.jsx)(n.h2,{id:"add-new-migration",children:"Add New Migration"}),"\n",(0,r.jsxs)(n.p,{children:["Create a new file in the ",(0,r.jsx)(n.code,{children:"migrations"})," directory named ",(0,r.jsx)(n.code,{children:"2_deploy_contracts.js"}),",\nand add the following block of code. This handles deploying the ",(0,r.jsx)(n.code,{children:"Storage"})," smart\ncontract to the blockchain."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'const Storage = artifacts.require("Storage");\n\nmodule.exports = function (deployer) {\n  deployer.deploy(Storage);\n};\n'})}),"\n",(0,r.jsx)(n.h2,{id:"compile-contracts-with-truffle",children:"Compile Contracts with Truffle"}),"\n",(0,r.jsxs)(n.p,{children:["Any time you make a change to ",(0,r.jsx)(n.code,{children:"Storage.sol"})," you need to run ",(0,r.jsx)(n.code,{children:"truffle compile"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"truffle compile\n"})}),"\n",(0,r.jsx)(n.p,{children:"You should see:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"Compiling your contracts...\n===========================\n> Compiling ./contracts/Migrations.sol\n> Compiling ./contracts/Storage.sol\n> Artifacts written to /path/to/build/contracts\n> Compiled successfully using:\n   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang\n"})}),"\n",(0,r.jsx)(n.h2,{id:"accounts-on-c-chain",children:"Accounts on C-Chain"}),"\n",(0,r.jsxs)(n.p,{children:["When deploying smart contracts to the C-Chain, truffle will default to the first\navailable account provided by your C-Chain client as the ",(0,r.jsx)(n.code,{children:"from"})," address used\nduring migrations. We have added some pre-defined private keys as our accounts\nin the ",(0,r.jsx)(n.code,{children:"truffle-config.json"}),". The first and default account should have some\npre-funded LUX."]}),"\n",(0,r.jsx)(n.h3,{id:"truffle-accounts",children:"Truffle Accounts"}),"\n",(0,r.jsx)(n.p,{children:"You can view imported accounts with truffle console."}),"\n",(0,r.jsx)(n.p,{children:"To open the truffle console:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"truffle console --network development\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note: If you see ",(0,r.jsx)(n.code,{children:'Error: Invalid JSON RPC response: "API call rejected because chain is not done bootstrapping"'}),", you need to wait until network is\nbootstrapped and ready to use. It should not take too long."]}),"\n",(0,r.jsx)(n.p,{children:"Inside truffle console:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"truffle(development)> accounts\n[\n  '0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC',\n  '0x9632a79656af553F58738B0FB750320158495942',\n  '0x55ee05dF718f1a5C1441e76190EB1a19eE2C9430',\n  '0x4Cf2eD3665F6bFA95cE6A11CFDb7A2EF5FC1C7E4',\n  '0x0B891dB1901D4875056896f28B6665083935C7A8',\n  '0x01F253bE2EBF0bd64649FA468bF7b95ca933BDe2',\n  '0x78A23300E04FB5d5D2820E23cc679738982e1fd5',\n  '0x3C7daE394BBf8e9EE1359ad14C1C47003bD06293',\n  '0x61e0B3CD93F36847Abbd5d40d6F00a8eC6f3cfFB',\n  '0x0Fa8EA536Be85F32724D57A37758761B86416123'\n]\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can see balances with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"truffle(development)> await web3.eth.getBalance(accounts[0])\n'50000000000000000000000000'\n\ntruffle(development)> await web3.eth.getBalance(accounts[1])\n'0'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Notice that ",(0,r.jsx)(n.code,{children:"accounts[0]"})," (default account) has some balance, while ",(0,r.jsx)(n.code,{children:"accounts[1]"})," has no balance."]}),"\n",(0,r.jsx)(n.h3,{id:"scripting-account-funding",children:"Scripting Account Funding"}),"\n",(0,r.jsxs)(n.p,{children:["There is a convenient script that funds the ",(0,r.jsx)(n.code,{children:"accounts"})," list . You can find it\n",(0,r.jsx)(n.a,{href:"https://raw.githubusercontent.com/luxdefi/docs/master/scripts/fund-cchain-addresses.js",children:"here"}),".\nYou can also download it using this command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"wget -nd -m https://raw.githubusercontent.com/luxdefi/docs/master/scripts/fund-cchain-addresses.js\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can run the script with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"truffle exec fund-cchain-addresses.js --network development\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Script will fund 1000 LUX to each account in ",(0,r.jsx)(n.code,{children:"accounts"})," list above. After\nsuccessfully running the script you can check balances with:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"truffle(development)> await web3.eth.getBalance(accounts[0]);\n'50000001000000000000000000'\ntruffle(development)> await web3.eth.getBalance(accounts[1]);\n'1000000000000000000'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fund-your-account",children:"Fund Your Account"}),"\n",(0,r.jsxs)(n.p,{children:["If you wish to fund accounts your own, follow the steps in this\n",(0,r.jsx)(n.a,{href:"https://support.lux.network/en/articles/6169872-how-to-make-a-cross-chain-transfer-in-the-wallet",children:"tutorial"}),".\nYou'll need to send at least ",(0,r.jsx)(n.code,{children:"135422040"})," nLUX to the account to cover the cost\nof contract deployments."]}),"\n",(0,r.jsx)(n.h3,{id:"personal-apis",children:"Personal APIs"}),"\n",(0,r.jsxs)(n.p,{children:["Personal APIs interact with node\u2019s accounts. ",(0,r.jsx)(n.code,{children:"web3"})," has some functions that uses\nit, e.g: ",(0,r.jsx)(n.code,{children:"web3.eth.personal.newAccount"}),", ",(0,r.jsx)(n.code,{children:"web3.eth.personal.unlockAccount"}),"\netc... However this API is disabled by default. It can be activated with\n",(0,r.jsx)(n.code,{children:"C-chain"}),"/",(0,r.jsx)(n.code,{children:"Coreth"})," configs. The Lux Netrunner currently does not\nsupport activating this API. So if you want to use these features you need to\nrun your own network manually with ",(0,r.jsx)(n.code,{children:"internal-private-personal"})," API enabled via\nthe ",(0,r.jsx)(n.code,{children:"eth-apis"})," flag. See and\n",(0,r.jsx)(n.a,{href:"/nodes/configure/chain-config-flags#c-chain-configs",children:"C-Chain Configs"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"run-migrations",children:"Run Migrations"}),"\n",(0,r.jsxs)(n.p,{children:["Now everything is in place to run migrations and deploy the ",(0,r.jsx)(n.code,{children:"Storage"})," contract:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"truffle(development)> migrate --network development\n"})}),"\n",(0,r.jsx)(n.p,{children:"You should see:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"Compiling your contracts...\n===========================\n> Everything is up to date, there is nothing to compile.\n\nMigrations dry-run (simulation)\n===============================\n> Network name:    'development-fork'\n> Network id:      1\n> Block gas limit: 99804786 (0x5f2e672)\n\n\n1_initial_migration.js\n======================\n\n   Deploying 'Migrations'\n   ----------------------\n   > block number:        4\n   > block timestamp:     1607734632\n   > account:             0x34Cb796d4D6A3e7F41c4465C65b9056Fe2D3B8fD\n   > balance:             1000.91683679\n   > gas used:            176943 (0x2b32f)\n   > gas price:           225 gwei\n   > value sent:          0 ETH\n   > total cost:          0.08316321 ETH\n\n   -------------------------------------\n   > Total cost:          0.08316321 ETH\n\n2_deploy_contracts.js\n=====================\n\n   Deploying 'Storage'\n   -------------------\n   > block number:        6\n   > block timestamp:     1607734633\n   > account:             0x34Cb796d4D6A3e7F41c4465C65b9056Fe2D3B8fD\n   > balance:             1000.8587791\n   > gas used:            96189 (0x177bd)\n   > gas price:           225 gwei\n   > value sent:          0 ETH\n   > total cost:          0.04520883 ETH\n\n   -------------------------------------\n   > Total cost:          0.04520883 ETH\n\nSummary\n=======\n> Total deployments:   2\n> Final cost:          0.13542204 ETH\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you didn't create an account on the C-Chain you'll see this error:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"Error: Expected parameter 'from' not passed to function.\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you didn't fund the account, you'll see this error:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"Error:  *** Deployment Failed ***\n\n\"Migrations\" could not deploy due to insufficient funds\n   * Account:  0x090172CD36e9f4906Af17B2C36D662E69f162282\n   * Balance:  0 wei\n   * Message:  sender doesn't have enough funds to send tx. The upfront cost is: 1410000000000000000 and the sender's account only has: 0\n   * Try:\n      + Using an adequately funded account\n"})}),"\n",(0,r.jsx)(n.h2,{id:"interacting-with-your-contract",children:"Interacting with Your Contract"}),"\n",(0,r.jsxs)(n.p,{children:["Now the ",(0,r.jsx)(n.code,{children:"Storage"})," contract has been deployed. Let's write a number to the\nblockchain and then read it back. Open the truffle console again:"]}),"\n",(0,r.jsxs)(n.p,{children:["Get an instance of the deployed ",(0,r.jsx)(n.code,{children:"Storage"})," contract:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"truffle(development)> let instance = await Storage.deployed()\n"})}),"\n",(0,r.jsx)(n.p,{children:"This returns:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"undefined\n"})}),"\n",(0,r.jsx)(n.h3,{id:"writing-a-number-to-the-blockchain",children:"Writing a number to the blockchain"}),"\n",(0,r.jsxs)(n.p,{children:["Now that you have an instance of the ",(0,r.jsx)(n.code,{children:"Storage"})," contract, call it's ",(0,r.jsx)(n.code,{children:"store"}),"\nmethod and pass in a number to write to the blockchain."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"truffle(development) > instance.store(1234);\n"})}),"\n",(0,r.jsx)(n.p,{children:"You should see something like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  tx: '0x10afbc5e0b9fa0c1ef1d9ec3cdd673e7947bd8760b22b8cdfe08f27f3a93ef1e',\n  receipt: {\n    blockHash: '0x8bacbce7c9d835db524bb856288e3a73a6afbe49ab34abd8cd8826db0240eb21',\n    blockNumber: 9,\n    contractAddress: null,\n    cumulativeGasUsed: 26458,\n    from: '0x34cb796d4d6a3e7f41c4465c65b9056fe2d3b8fd',\n    gasUsed: 26458,\n    logs: [],\n    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n    status: true,\n    to: '0x0d507b0467baef742f9cc0e671eddbdf6df41d33',\n    transactionHash: '0x10afbc5e0b9fa0c1ef1d9ec3cdd673e7947bd8760b22b8cdfe08f27f3a93ef1e',\n    transactionIndex: 0,\n    rawLogs: []\n  },\n  logs: []\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"reading-a-number-from-the-blockchain",children:"Reading a Number From the Blockchain"}),"\n",(0,r.jsxs)(n.p,{children:["To read the number from the blockchain, call the ",(0,r.jsx)(n.code,{children:"retrieve"})," method of the ",(0,r.jsx)(n.code,{children:"Storage"})," contract instance."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"truffle(development)> let i = await instance.retrieve()\n"})}),"\n",(0,r.jsx)(n.p,{children:"This should return:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"undefined;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The result of the call to ",(0,r.jsx)(n.code,{children:"retrieve"})," is a ",(0,r.jsx)(n.code,{children:"BN"})," (big number). Call its ",(0,r.jsx)(n.code,{children:".toNumber"})," method to see the value:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"truffle(development) > i.toNumber();\n"})}),"\n",(0,r.jsx)(n.p,{children:"You should see the number you stored."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"1234;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"Now you have the tools you need to launch a local Lux network, create a\ntruffle project, as well as create, compile, deploy and interact with Solidity\ncontracts."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(67294);const a={},c=r.createContext(a);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);