"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3283],{97897:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=n(85893),r=n(11151);const s={},a="relayer.js",c={id:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/relayer.js",title:"relayer.js",description:"",source:"@site/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/relayer.js.md",sourceDirName:"deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes",slug:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/relayer.js",permalink:"/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/relayer.js",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/deprecated/tutorials-contest/2022/erc20-as-subnet-gas-token/codes/relayer.js.md",tags:[],version:"current",frontMatter:{}},i={},l=[];function d(t){const e={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"relayerjs",children:"relayer.js"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'const { ethers } = require("ethers");\nconst dotenv = require("dotenv");\n\n/* Get needed util functions */\nconst initProviders = require("./utils/initProviders");\nconst initSigners = require("./utils/initSigners");\nconst initContracts = require("./utils/initContracts");\n\ndotenv.config();\n\n/* Relayer application\n \nCould be run by\n  \t`node ./relayer.js`,\n  \t`node ./relayer.js <luxBlockNumber>`,\n  \t`node ./relayer.js <luxBlockNumber> <subnetBlockNumber>`,\n  \t`node ./relayer.js -1 <subnetBlockNumber>`\n \nWhen run with `node ./relayer.js`:\n  \tRelayer will subscribe to events from recent blocks on Lux and Subnet\n  \tTherefore, it might not process an event that is emitted 1000 blocks ago\n  \tIf you want to start the relayer and make a transaction, current way of running is what you are looking for\n \nWhen run with `node ./relayer.js <luxBlockNumber> <subnetBlockNumber>`\n  \tRelayer will look for events on Lux and Subnet from the block number you provided\n  \tand will iterate through the next 10 blocks for the event. Will process observed event\n  \tTherefore, if you have a burn or lock event emitted 1000 blocks ago, you can process it by giving the right blockNumber\n  \tIf you want to start the relayer to process an old burn or lock event, current way of running is what you are looking for\n  \nWhen run with `node ./relayer.js -1 <subnetBlockNumber>` or `node ./relayer.js <luxBlockNumber>`\n  \tRelayer will look for events on either Lux or Subnet from the block number you provided\n  \tand will iterate through the next 10 blocks for the event. Will process observed event\n  \t"-1" as block number means do not process any old blocks for that chain.\n  \tTherefore, `node ./relayer.js -1 <subnetBlockNumber>` will only process events for the subnet.\n  \tIf you want to start the relayer to process an old burn or lock event just on one chain, current way of running is what you are looking for\n*/\nconst main = async () => {\n\t/* \n    \tIf there is a need for sending transactions\n      \tAdd it to the txs array.\n      \tBecause of the `setInterval()` relayer will send transactions every 5 seconds if at least 1 transaction exists\n      \tWe wait 5 seconds in between transactions to make sure we do not replace our own transactions before they are added to a block.\n   \t */\n\tlet txs = [];\n\n\t/* Init providers, signers and bridgeContracts */\n\tconst providers = initProviders();\n\tconst signers = initSigners(providers);\n\tconst bridgeContracts = initContracts(signers);\n\n\t/* \n\t\tFor Lux\n\t\t\tRelayer gets command line arguments\n\t\t\tIf command line argument exists and it is not -1\n\t\t\tThen process next 10 blocks and process events from these block number\n\t */\n\tif (process.argv[2] && parseInt(process.argv[2]) !== -1) {\n\t\tconst startBlock = parseInt(process.argv[2]);\n\t\tconst recentBlock = await providers.lux.getBlockNumber();\n\t\t/*\n\t\t\tIf startBlock + 10 exceeds the recent block it would throw an error.\n\t\t\tSince we would be trying to process blocks that are not there.\n\t\t\tTherefore, we set endBlock to the smaller one of two\n     \t */\n\t\tconst endBlock =\n\t\t\tstartBlock + 10 >= recentBlock ? recentBlock : startBlock + 10;\n\t\t/* Reset blockNumber of the provider to process those blocks */\n\t\tproviders.lux.resetEventsBlock(startBlock);\n\t\t/* Create new bridge contract instance because provider is changed */\n\t\tconst localBridgeContracts = initContracts(signers);\n\t\t/* Filter events for "Transfer" event */\n\t\tconst filter = localBridgeContracts.lux.admin.filters.Transfer();\n\t\t/* Query contract for old events in between startBlock and endBlock with given filter */\n\t\tlet oldLuxEvents = await localBridgeContracts.lux.admin.queryFilter(\n\t\t\tfilter,\n\t\t\tstartBlock,\n\t\t\tendBlock\n\t\t);\n\t\t/* Format oldEvents as if they are transactions */\n\t\toldLuxEvents = oldLuxEvents.map((event) => ({\n\t\t\tchain: "subnet",\n\t\t\tto: event.args.to,\n\t\t\tamount: event.args.amount,\n\t\t\tnonce: event.args.nonce,\n\t\t}));\n\n\t\t/*\n\t\t\tSince we are looking for old events\n\t\t\tThey might have been already processed\n\t\t\tTherefore, check if corresponding nonce is already processed or not\n\t\t\tIf not, add it to the txs array\n\t\t */\n\t\tawait Promise.all(\n\t\t\toldLuxEvents.map(async (event) => {\n\t\t\t\tconst { to, amount, nonce } = event;\n\t\t\t\tconsole.log("OLD: Lock happened on lux");\n\t\t\t\tconsole.log(\n\t\t\t\t\t`OLD: Transfer: to: ${to},  amount: ${ethers.utils.formatEther(\n\t\t\t\t\t\tamount\n\t\t\t\t\t)}, nonce: ${nonce}`\n\t\t\t\t);\n\t\t\t\t/* Check if nonce is processed or not */\n\t\t\t\tconst isProcessed =\n\t\t\t\t\tawait localBridgeContracts.subnet.admin.processedNonces(nonce);\n\t\t\t\tif (!isProcessed) {\n\t\t\t\t\t/* If not processed add tx to txs array */\n\t\t\t\t\tconsole.log("OLD: is not processed, will mint on subnet\\n");\n\t\t\t\t\ttxs.push(event);\n\t\t\t\t} else {\n\t\t\t\t\tconsole.log("OLD: is already processed\\n");\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t}\n\n\t// Pretty familiar as above, provider is changed\n\t/* \n\t\tFor Subnet\n      \t\tRelayer gets command line arguments\n      \t\tIf command line argument exists and it is not -1\n     \t\tThen process next 10 blocks and process events from these block number\n  \t */\n\tif (process.argv[3] && parseInt(process.argv[3]) !== -1) {\n\t\tconst startBlock = parseInt(process.argv[3]);\n\t\tconst recentBlock = await providers.subnet.getBlockNumber();\n\t\t/* \n      \t\tIf startBlock + 10 exceeds the recent block it would throw an error.\n      \t\tSince we would be trying to process blocks that are not there.\n      \t\tTherefore, we set endBlock to the smaller one of two   \n\t\t */\n\t\tconst endBlock =\n\t\t\tstartBlock + 10 >= recentBlock ? recentBlock : startBlock + 10;\n\t\t/* Reset blockNumber of the provider to process those blocks */\n\t\tproviders.subnet.resetEventsBlock(startBlock);\n\t\t/* Create new bridge contract instance because provider is changed */\n\t\tconst localBridgeContracts = initContracts(signers);\n\t\t/* Filter events for "Transfer" event */\n\t\tconst filter = localBridgeContracts.subnet.admin.filters.Transfer();\n\t\t/* Query contract for old events in between startBlock and endBlock with given filter */\n\t\tlet oldSubnetEvents = await localBridgeContracts.subnet.admin.queryFilter(\n\t\t\tfilter,\n\t\t\tstartBlock,\n\t\t\tendBlock\n\t\t);\n\t\t/* Format oldEvents as if they are transactions */\n\t\toldSubnetEvents = oldSubnetEvents.map((event) => ({\n\t\t\tchain: "lux",\n\t\t\tto: event.args.to,\n\t\t\tamount: event.args.amount,\n\t\t\tnonce: event.args.nonce,\n\t\t}));\n\n\t\t/* \n      \t\tSince we are looking for old events\n     \t\tThey might have been already processed\n     \t\tTherefore, check if corresponding nonce is already processed or not\n      \t\tIf not, add it to the txs array\n\t\t */\n\t\tawait Promise.all(\n\t\t\toldSubnetEvents.map(async (event) => {\n\t\t\t\tconst { to, amount, nonce } = event;\n\t\t\t\tconsole.log("OLD: Burned happened on subnet");\n\t\t\t\tconsole.log(\n\t\t\t\t\t`OLD: Transfer: to: ${to},  amount: ${ethers.utils.formatEther(\n\t\t\t\t\t\tamount\n\t\t\t\t\t)}, nonce: ${nonce}`\n\t\t\t\t);\n\t\t\t\t/* Check if nonce is processed or not */\n\t\t\t\tconst isProcessed =\n\t\t\t\t\tawait localBridgeContracts.lux.admin.processedNonces(nonce);\n\t\t\t\tif (!isProcessed) {\n\t\t\t\t\t/* If not processed add tx to txs array */\n\t\t\t\t\tconsole.log("OLD: is not processed, will release on subnet\\n");\n\t\t\t\t\ttxs.push(event);\n\t\t\t\t} else {\n\t\t\t\t\tconsole.log("OLD: is already processed\\n");\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t}\n\n\t/* With above 2 functions we have processed old blocks */\n\tconsole.log("\\n\\nOld events processed");\n\n\t/* \n\t\tNow we subscribe to bridgeContract events on both chains\n\t\tWhich allows us to run a function whenever a new event is observed\n  \t */\n\n\t/* Subscribe to bridge events on lux */\n\tbridgeContracts.lux.admin.on(\n\t\t/* Subscribe to "Transfer" event */\n\t\t"Transfer",\n\t\tasync (from, to, amount, date, nonce, type) => {\n\t\t\t/*\n        \t\ttype 0 means it is a release event\n        \t\ttype 1 means it is a lock event\n \n        \t\tWe only care for lock events as relayer. On lock events we will mint on subnet\n       \t\t\tWe have added the release event for frontend applications.\n\t\t\t */\n\t\t\tif (type === 1) {\n\t\t\t\tconsole.log("Lock happened on lux");\n\t\t\t\tconsole.log(\n\t\t\t\t\t`Transfer: from: ${from}, to: ${to}, amount: ${ethers.utils.formatEther(\n\t\t\t\t\t\tamount\n\t\t\t\t\t)}, date: ${date}, nonce: ${nonce}, type: ${type}`\n\t\t\t\t);\n\t\t\t\t/* Check if nonce is processed or not */\n\t\t\t\ttry {\n\t\t\t\t\tconst isProcessed = await bridgeContracts.subnet.admin.processedNonces(\n\t\t\t\t\t\tnonce\n\t\t\t\t\t);\n\t\t\t\t\tif (!isProcessed) {\n\t\t\t\t\t\t/* If not processed add tx to txs array */\n\t\t\t\t\t\tconsole.log("is not processed, will mint on subnet\\n");\n\t\t\t\t\t\ttxs.push({ chain: "subnet", to, amount, nonce });\n\t\t\t\t\t} else {\n\t\t\t\t\t\tconsole.log("is already processed\\n");\n\t\t\t\t\t}\n\t\t\t\t} catch (error) {\n\t\t\t\t\tconsole.log("error while checking processedNonces on subnet bridge: ", error);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t);\n\n\t/* Subscribe to bridge events on subnet */\n\tbridgeContracts.subnet.admin.on(\n\t\t/* Subscribe to "Transfer" event */\n\t\t"Transfer",\n\t\tasync (from, to, amount, date, nonce, type) => {\n\t\t\t/*\n        \t\ttype 0 means it is a mint event\n        \t\ttype 1 means it is a burn event\n \n        \t\tWe only care for burn events as relayer. On burn events we will release on subnet\n        \t\tWe have added the mint event for frontend applications.\n\t\t\t */\n\t\t\tif (type === 1) {\n\t\t\t\tconsole.log("Burn happened on subnet");\n\t\t\t\tconsole.log(\n\t\t\t\t\t`Transfer: from: ${from}, to: ${to}, amount: ${ethers.utils.formatEther(\n\t\t\t\t\t\tamount\n\t\t\t\t\t)}, date: ${date}, nonce: ${nonce}, type: ${type}`\n\t\t\t\t);\n\t\t\t\t/* Check if nonce is processed or not */\n\t\t\t\ttry {\n\t\t\t\t\tconst isProcessed = await bridgeContracts.lux.admin.processedNonces(\n\t\t\t\t\t\tnonce\n\t\t\t\t\t);\n\t\t\t\t\tif (!isProcessed) {\n\t\t\t\t\t\t/* If not processed add tx to txs array */\n\t\t\t\t\t\tconsole.log("is not processed, will release on lux\\n");\n\t\t\t\t\t\ttxs.push({ chain: "lux", to, amount, nonce });\n\t\t\t\t\t} else {\n\t\t\t\t\t\tconsole.log("is already processed\\n");\n\t\t\t\t\t}\n\t\t\t\t} catch {\n\t\t\t\t\tconsole.log("error while checking processedNonces on lux bridge: ", error);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t);\n\tconsole.log("Started listening for new events\\n\\n");\n\n\t/* \n\t\tThis function gets to run each 5 seconds and it sends `mint` or `release` transactions to the bridge contract\n\t\tWe wait 5 seconds in between transactions to make sure we do not replace our own transactions before they are added to a block.\n\t */\n\tsetInterval(async () => {\n\t\t/* If there is no transaction to send, do nothing */\n\t\tif (txs.length > 0) {\n\t\t\t/* \n        \t\tIf provided blockNumbers for lux or subnet are close to current blocks of the chains\n        \t\tThen a transaction might get added to the txs array twice. Once processing old blocks (but pretty recent) and once subscribed to new events. Therefore, we have to eliminate same txs by filtering.\n\t\t\t */\n            txs = txs.filter((value, index) => {\n                const _value = JSON.stringify(value);\n                return index === txs.findIndex(obj => {\n                    return JSON.stringify(obj) === _value;\n                })\n            });\n\t\t\tconsole.log("txs: ", txs);\n\t\t\tlet tx;\n\t\t\t/* Remove the first element from the array and destructure it */\n\t\t\tconst { chain, to, amount, nonce } = txs.shift();\n\t\t\t/* Check which chain the transaction will be sent to  */\n\t\t\ttry {\n\t\t\t\tif (chain === "lux") {\n\t\t\t\t\t/* Call `release()` on lux */\n\t\t\t\t\ttx = await bridgeContracts[chain].admin.release(to, amount, nonce);\n\t\t\t\t} else if (chain === "subnet") {\n\t\t\t\t\t/* Call `mint()` on subnet */\n\t\t\t\t\ttx = await bridgeContracts[chain].admin.mint(to, amount, nonce);\n\t\t\t\t} else return;\n\t\t\t\tawait tx.wait();\n\t\t\t\tconsole.log("transaction processed, token minted or released");\n\t\t\t} catch (error) {\n\t\t\t\tconsole.log("error sending transaction: ", error);\n\t\t\t}\n\t\t}\n\t}, 5000);\n};\n\nmain().catch((error) => {\n\tconsole.error(error);\n\tprocess.exitCode = 1;\n});\n'})})]})}function u(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>a});var o=n(67294);const r={},s=o.createContext(r);function a(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);