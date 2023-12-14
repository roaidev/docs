"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8520],{84039:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(85893),s=n(11151);const o={},a="BurnOrLock.js",c={id:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/burnOrLock.js",title:"BurnOrLock.js",description:"",source:"@site/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/burnOrLock.js.md",sourceDirName:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts",slug:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/burnOrLock.js",permalink:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/burnOrLock.js",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/scripts/burnOrLock.js.md",tags:[],version:"current",frontMatter:{}},i={},l=[];function d(t){const e={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"burnorlockjs",children:"BurnOrLock.js"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'const { ethers } = require("ethers");\nconst dotenv = require("dotenv");\n\nconst chains = require("../constants/chains");\n/* Get contract addresses from the file we generated by running the deploy script */\nconst {\n\tLUX_BRIDGE_ADDRESS,\n\tLUX_TOKEN_ADDRESS,\n\tSUBNET_BRIDGE_ADDRESS,\n} = require("../variables/contractAddresses");\n/* Get ABIs of the contracts directly from the artifact folder created by hardhat after each compilation */\nconst SUBNET_BRIDGE_ABI =\n\trequire("../artifacts/contracts/Bridge/SubnetBridge.sol/SubnetBridge").abi;\nconst LUX_BRIDGE_ABI =\n\trequire("../artifacts/contracts/Bridge/LuxBridge.sol/LuxBridge").abi;\nconst LUX_TOKEN_ABI =\n\trequire("../artifacts/contracts/Token/LuxToken.sol/LuxToken").abi;\ndotenv.config();\n\n/* \n  BurnOrLock script that allows us to both burn and lock tokens\n  On Lux it allows us to lock ERC20 tokens\n  On Subnet it allows us to burn native tokens\n*/\nmodule.exports = burnOrLock = async (from, amount) => {\n\tlet provider;\n\tlet signer;\n\tlet bridgeContract;\n\t/* This script takes command line argument to indicate which chain we are using */\n\tif (from === "lux") {\n\t\t/* Initialize; provider, signer and tokenContract */\n\t\tprovider = new ethers.providers.JsonRpcProvider(chains.lux.rpcUrl);\n\t\tsigner = new ethers.Wallet(process.env.BRIDGE_USER_PRIVATE_KEY, provider);\n\t\tconst tokenContract = new ethers.Contract(\n\t\t\tLUX_TOKEN_ADDRESS,\n\t\t\tLUX_TOKEN_ABI,\n\t\t\tsigner\n\t\t);\n\n\t\t/* Approve bridge to use the token of the sender before trying to lock tokens */\n\t\tconst approveTx = await tokenContract.approve(\n\t\t\tLUX_BRIDGE_ADDRESS,\n\t\t\tethers.utils.parseEther(amount)\n\t\t);\n\t\tawait approveTx.wait();\n\n\t\t/* Initialize bridgeContract  */\n\t\tbridgeContract = new ethers.Contract(\n\t\t\tLUX_BRIDGE_ADDRESS,\n\t\t\tLUX_BRIDGE_ABI,\n\t\t\tsigner\n\t\t);\n\n\t\t/* User locks ERC20 tokens to the bridge */\n\t\tconst lockTx = await bridgeContract.lock(\n\t\t\tsigner.address,\n\t\t\tethers.utils.parseEther(amount)\n\t\t);\n\t\tconst minedTx = await lockTx.wait();\n\n\t\tconsole.log("Successfully locked amount on lux: ", amount);\n\t\tconsole.log("At block: ", minedTx.blockNumber);\n\t\t/* Get user\'s ERC20 balance after lock */\n\t\tconst newUserBalance = await tokenContract.balanceOf(signer.address);\n\t\t/* Get bridge\'s ERC20 balance after lock */\n\t\tconst newBridgeBalance = await tokenContract.balanceOf(LUX_BRIDGE_ADDRESS);\n\t\tconsole.log(\n\t\t\t"Updated balance of user after lock: ",\n\t\t\tethers.utils.formatEther(newUserBalance)\n\t\t);\n\t\tconsole.log(\n\t\t\t"Updated balance of bridge after lock: ",\n\t\t\tethers.utils.formatEther(newBridgeBalance)\n\t\t);\n\t} else if (from === "subnet") {\n\t\t/* Initialize; provider, signer and tokenContract */\n\t\tprovider = new ethers.providers.JsonRpcProvider(chains.subnet.rpcUrl);\n\t\tsigner = new ethers.Wallet(process.env.BRIDGE_USER_PRIVATE_KEY, provider);\n\t\tbridgeContract = new ethers.Contract(\n\t\t\tSUBNET_BRIDGE_ADDRESS,\n\t\t\tSUBNET_BRIDGE_ABI,\n\t\t\tsigner\n\t\t);\n\t\t/* User burns native tokens */\n\t\tconst burnTx = await bridgeContract.burn(signer.address, {\n\t\t\tvalue: ethers.utils.parseEther(amount),\n\t\t});\n\t\tconst minedTx = await burnTx.wait();\n\t\tconsole.log("Successfully burned amount on subnet: ", amount);\n\t\tconsole.log("At block: ", minedTx.blockNumber);\n\n\t\t/* Get user\'s native token balance after burn */\n\t\tconst newUserBalance = await signer.getBalance();\n\t\tconsole.log(\n\t\t\t"Updated balance of user after burn: ",\n\t\t\tethers.utils.formatEther(newUserBalance)\n\t\t);\n\t} else {\n\t\treturn;\n\t}\n};\n'})})]})}function u(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>a});var r=n(67294);const s={},o=r.createContext(s);function a(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);