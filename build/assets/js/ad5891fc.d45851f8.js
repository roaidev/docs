"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2864],{41382:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=t(85893),s=t(11151);const r={},o="Set up Your Development Environment for Local Subnet Development",l={id:"deprecated/tutorials-contest/2022/local-subnet-development/README",title:"Set up Your Development Environment for Local Subnet Development",description:"These tutorials were published as a snapshot of when they were written,",source:"@site/docs/deprecated/tutorials-contest/2022/local-subnet-development/README.md",sourceDirName:"deprecated/tutorials-contest/2022/local-subnet-development",slug:"/deprecated/tutorials-contest/2022/local-subnet-development/",permalink:"/deprecated/tutorials-contest/2022/local-subnet-development/",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/deprecated/tutorials-contest/2022/local-subnet-development/README.md",tags:[],version:"current",frontMatter:{}},c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Step 1: Install Lux-Cli",id:"step-1-install-lux-cli",level:2},{value:"Installing in Custom Location",id:"installing-in-custom-location",level:3},{value:"Add Lux Command Permanently",id:"add-lux-command-permanently",level:3},{value:"MacOS",id:"macos",level:4},{value:"Linux",id:"linux",level:4},{value:"Step 2: Create the Subnet",id:"step-2-create-the-subnet",level:2},{value:"Step 3: Deploy the Subnet",id:"step-3-deploy-the-subnet",level:2},{value:"Step 4: Interact with the Subnet",id:"step-4-interact-with-the-subnet",level:2},{value:"Step 4.1: Using Remix",id:"step-41-using-remix",level:3},{value:"Access Funded Accounts",id:"access-funded-accounts",level:4},{value:"Step 4.2: Using Hardhat",id:"step-42-using-hardhat",level:3},{value:"Step 5: Interact with Precompiles (Optional)",id:"step-5-interact-with-precompiles-optional",level:2},{value:"General Steps to Interact with Precompiles",id:"general-steps-to-interact-with-precompiles",level:3},{value:"Interact with Contract Deployer Allow List",id:"interact-with-contract-deployer-allow-list",level:4},{value:"Interact with Transaction Allow List",id:"interact-with-transaction-allow-list",level:4},{value:"Interact with Native Minter",id:"interact-with-native-minter",level:4},{value:"Customize the Subnet",id:"customize-the-subnet",level:2},{value:"Troubleshoot Common Issues",id:"troubleshoot-common-issues",level:2},{value:"Step 1: Install Lux-Cli",id:"step-1-install-lux-cli-1",level:3},{value:"Step 2: Create the Subnet",id:"step-2-create-the-subnet-1",level:3},{value:"Step 3: Deploy the Subnet",id:"step-3-deploy-the-subnet-1",level:3},{value:"Step 4: Interact with the Subnet",id:"step-4-interact-with-the-subnet-1",level:3},{value:"Step 5: Interact with Precompiles (Optional)",id:"step-5-interact-with-precompiles-optional-1",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"set-up-your-development-environment-for-local-subnet-development",children:"Set up Your Development Environment for Local Subnet Development"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"These tutorials were published as a snapshot of when they were written,\nand may contain out-of-date-information.\nFor up-to-date information, please reach out to the owners of these\nprojects."})}),"\n",(0,i.jsxs)(n.p,{children:["If you are not familiar with Subnets, virtual machines or similar terminology\nyou can refer to ",(0,i.jsx)(n.a,{href:"https://docs.lux.network/subnets",children:"Subnet Overview"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["This tutorial's goal is to deploy and start a basic Subnet in your local\nmachine. So that you can interact with the Subnet using\n",(0,i.jsx)(n.a,{href:"https://remix.ethereum.org/",children:"Remix"})," and ",(0,i.jsx)(n.a,{href:"https://hardhat.org/",children:"Hardhat"}),". In\nthis tutorial we will be using\n",(0,i.jsx)(n.a,{href:"https://github.com/luxdefi/cli",children:"cli"})," to create and deploy\nthe Subnet. If you ever encounter an error, refer to ",(0,i.jsx)(n.a,{href:"#troubleshoot-common-issues",children:"Troubleshoot Common\nIssues"})," section."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["cli is in beta version. So it might get updated fairly frequently. It\nis best to refer to the latest version from its ",(0,i.jsx)(n.a,{href:"https://github.com/luxdefi/cli",children:"github\npage"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to customize your Subnet you can refer to the optional ",(0,i.jsx)(n.a,{href:"#customize-the-subnet",children:"Customize\nthe Subnet"})," section, while creating your Subnet."]}),"\n",(0,i.jsx)(n.p,{children:"Steps to follow:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install cli"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create the Subnet"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Deploy the Subnet"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Interact with the Subnet"}),"\n",(0,i.jsx)(n.p,{children:"4.1 Using Remix"}),"\n",(0,i.jsx)(n.p,{children:"4.2 Using Hardhat"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Interact with Precompiles (Optional)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Mac or Linux environment"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-1-install-lux-cli",children:"Step 1: Install Lux-Cli"}),"\n",(0,i.jsxs)(n.p,{children:["To build cli you have to first install Golang. Follow the instructions here: ",(0,i.jsx)(n.a,{href:"https://go.dev/doc/install",children:"https://go.dev/doc/install"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"After downloading Golang, to download cli's latest version, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -sSfL https://raw.githubusercontent.com/luxdefi/cli/main/scripts/install.sh | sh -s\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This command will download the bin to the ",(0,i.jsx)(n.code,{children:"./"})," (relative to where the command\nhas run). To download in a custom location refer to ",(0,i.jsx)(n.a,{href:"#installing-in-custom-location",children:"Installing in Custom\nLocation"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"To add lux to PATH, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd bin;\\\nexport PATH=$PWD:$PATH\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This command will add cli to the PATH temporarily, which means that,\nwhen you reopen your terminal you would not be able to run 'lux' command.\nSo, to add it permanently refer to ",(0,i.jsx)(n.a,{href:"#add-command-permanently",children:"Add Lux Command\nPermanently"})," section."]})}),"\n",(0,i.jsx)(n.h3,{id:"installing-in-custom-location",children:"Installing in Custom Location"}),"\n",(0,i.jsx)(n.p,{children:"To download the binary to a specific directory, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -sSfL https://raw.githubusercontent.com/luxdefi/cli/main/scripts/install.sh | sh -s -- -b <relative-directory>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"add-lux-command-permanently",children:"Add Lux Command Permanently"}),"\n",(0,i.jsx)(n.p,{children:"To add lux command to your path:"}),"\n",(0,i.jsx)(n.h4,{id:"macos",children:"MacOS"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open shell config file.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you are using ",(0,i.jsx)(n.code,{children:"zsh"})," shell, open ",(0,i.jsx)(n.code,{children:"${HOME}/.zprofile"})," in a text editor."]}),"\n",(0,i.jsxs)(n.li,{children:["If you are suing ",(0,i.jsx)(n.code,{children:"bash"})," shell, open ",(0,i.jsx)(n.code,{children:"${HOME}/.bash_profile"})," in a text editor."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Add this line, ",(0,i.jsx)(n.code,{children:' export PATH="<path-of-bin-directory>:${PATH}"'})," to the file."]}),"\n",(0,i.jsxs)(n.li,{children:["Restart the terminal and run ",(0,i.jsx)(n.code,{children:"lux"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"linux",children:"Linux"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open shell config file, ",(0,i.jsx)(n.code,{children:"${HOME}/.bashrc"})," in a text editor."]}),"\n",(0,i.jsxs)(n.li,{children:["Add this line, ",(0,i.jsx)(n.code,{children:'export PATH="<path-of-bin-directory>:${PATH}"'})," to the file."]}),"\n",(0,i.jsxs)(n.li,{children:["Restart the terminal and run ",(0,i.jsx)(n.code,{children:"lux"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you have run the installation command at ",(0,i.jsx)(n.code,{children:"$HOME"})," directory.\n",(0,i.jsx)(n.code,{children:"<path-of-bin-directory>"})," would be ",(0,i.jsx)(n.code,{children:"${HOME}/bin"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"step-2-create-the-subnet",children:"Step 2: Create the Subnet"}),"\n",(0,i.jsx)(n.p,{children:"To create the Subnet, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lux subnet create <subnetName>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When you run this command you will be walked through the customization of the\nSubnet. You can learn more about the configuration details at ",(0,i.jsx)(n.a,{href:"#customize-the-subnet",children:"Customize the\nSubnet"})," section."]}),"\n",(0,i.jsx)(n.p,{children:"Example walk through:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Choose your VM"}),": SubnetEVM"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ChainId"}),": 676767"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Token symbol"}),": SUB"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"How would you like to set the fees"}),": Low disk use..."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"How would you like to distribute the funds"}),": Airdrop 1 million tokens to the default address"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Advanced: Would you like to add a custom precompile to modify the EVM?"}),": No"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You have successfully created the genesis file for your Subnet. You can read more about genesis ",(0,i.jsx)(n.a,{href:"/build/subnet/upgrade/customize-a-subnet#genesis",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"To see details about the Subnet, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lux subnet describe <subnetName>\n"})}),"\n",(0,i.jsx)(n.p,{children:"To see the genesis file directly, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lux subnet describe <subnetName> --genesis\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-3-deploy-the-subnet",children:"Step 3: Deploy the Subnet"}),"\n",(0,i.jsx)(n.p,{children:"To deploy the Subnet locally, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lux subnet deploy <subnetName> -l\n"})}),"\n",(0,i.jsx)(n.p,{children:"After a successful deployment, an example of what you would see:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Network ready to use. Local network node endpoints:\n+-------+------------+-------------------------------------------------------------------------------------+\n| NODE  |     VM     |                                         URL                                         |\n+-------+------------+-------------------------------------------------------------------------------------+\n| node1 | subnetName | http://127.0.0.1:9650/ext/bc/2KY4TYoJwuJWLeSfj4Mae4t4sBCwGrx48QyGWg3zWwP5PhZjHV/rpc |\n+-------+------------+-------------------------------------------------------------------------------------+\n| node2 | subnetName | http://127.0.0.1:9652/ext/bc/2KY4TYoJwuJWLeSfj4Mae4t4sBCwGrx48QyGWg3zWwP5PhZjHV/rpc |\n+-------+------------+-------------------------------------------------------------------------------------+\n| node3 | subnetName | http://127.0.0.1:9654/ext/bc/2KY4TYoJwuJWLeSfj4Mae4t4sBCwGrx48QyGWg3zWwP5PhZjHV/rpc |\n+-------+------------+-------------------------------------------------------------------------------------+\n| node4 | subnetName | http://127.0.0.1:9656/ext/bc/2KY4TYoJwuJWLeSfj4Mae4t4sBCwGrx48QyGWg3zWwP5PhZjHV/rpc |\n+-------+------------+-------------------------------------------------------------------------------------+\n| node5 | subnetName | http://127.0.0.1:9658/ext/bc/2KY4TYoJwuJWLeSfj4Mae4t4sBCwGrx48QyGWg3zWwP5PhZjHV/rpc |\n+-------+------------+-------------------------------------------------------------------------------------+\n\nMetaMask connection details (any node URL from above works):\nRPC URL:          http://127.0.0.1:9650/ext/bc/2KY4TYoJwuJWLeSfj4Mae4t4sBCwGrx48QyGWg3zWwP5PhZjHV/rpc\nFunded address:   0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC with 1000000 (10^18) - private key: 56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027\nNetwork name:     subnetName\nChain ID:         676767\nCurrency Symbol:  SUB\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to save ",(0,i.jsx)(n.code,{children:"MetaMask connection details"}),". You will need the relevant\ninformation (RPC URL, Funded address, etc.) to interact with your Subnet."]}),"\n",(0,i.jsx)(n.p,{children:"Important thing to keep in mind is that, now that you have deployed your Subnet,\nit has started running in your local machine. So, after you are done interacting\nwith your Subnet you can stop it."}),"\n",(0,i.jsx)(n.p,{children:"To stop running the Subnet, you could run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lux network stop\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"When you stop running the Subnet it will save the state of the Subnet and when\nit starts again it will continue from that state."})}),"\n",(0,i.jsx)(n.p,{children:"To start running the Subnet, you could run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lux network start\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"When you restart the Subnet RPC urls will not change. Therefore, you do not have\nto adjust the network in your MetaMask or anywhere else."})}),"\n",(0,i.jsx)(n.h2,{id:"step-4-interact-with-the-subnet",children:"Step 4: Interact with the Subnet"}),"\n",(0,i.jsxs)(n.p,{children:["This tutorial will cover interacting with the Subnet through\n",(0,i.jsx)(n.a,{href:"https://remix.ethereum.org/",children:"Remix"})," and ",(0,i.jsx)(n.a,{href:"https://hardhat.org/",children:"Hardhat"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"step-41-using-remix",children:"Step 4.1: Using Remix"}),"\n",(0,i.jsxs)(n.p,{children:["First, we will be adding our Subnet to ",(0,i.jsx)(n.a,{href:"https://metamask.io/",children:"MetaMask"}),". To add\nthe Subnet, refer to ",(0,i.jsx)(n.a,{href:"/build/subnet/utility/deploy-smart-contract-to-subnet#step-1-setting-up-metamask",children:"Deploy a Smart Contract on Your Subnet-EVM Using Remix and MetaMask"}),"\nyou should replace the values with your Subnet values that are printed out after\nyou have created it. If your balance is zero after you add Subnet to the\nMetaMask, refer to ",(0,i.jsx)(n.a,{href:"#access-funded-accounts",children:"Access Funded Accounts"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Example Values:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Network Name: <subnetName>\nNew RPC URL: http://127.0.0.1:9650/ext/bc/2KY4TYoJwuJWLeSfj4Mae4t4sBCwGrx48QyGWg3zWwP5PhZjHV/rpc\nChainID: 676767\nSymbol: SUB\n"})}),"\n",(0,i.jsx)(n.h4,{id:"access-funded-accounts",children:"Access Funded Accounts"}),"\n",(0,i.jsxs)(n.p,{children:["If you followed the exact steps in this tutorial, you would see that your\nbalance on MetaMask is zero. That is because we have only airdropped to the\ndefault account which is ",(0,i.jsx)(n.code,{children:"0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC"}),".\nTherefore, your account on MetaMask has zero tokens and cannot send any\ntransactions. So, to interact with the chain we have to use the address that is\nairdropped."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Steps to import the airdropped account","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open your MetaMask extension"}),"\n",(0,i.jsx)(n.li,{children:"Click on the account image"}),"\n",(0,i.jsx)(n.li,{children:'Click "Import Account"'}),"\n",(0,i.jsx)(n.li,{children:"Select type: Private Key"}),"\n",(0,i.jsxs)(n.li,{children:["Enter private key of the default airdrop account, which is ",(0,i.jsx)(n.code,{children:"56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027"})]}),"\n",(0,i.jsx)(n.li,{children:'Click "Import"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-42-using-hardhat",children:"Step 4.2: Using Hardhat"}),"\n",(0,i.jsxs)(n.p,{children:["To interact with the Subnet using Hardhat, refer to ",(0,i.jsx)(n.a,{href:"https://docs.lux.network/dapps/smart-contracts/using-hardhat-with-the-c-chain",children:"Using Hardhat with the\nLux\nC-Chain"}),".\nIt is very similar to interacting with C-Chain. You only have to change\n",(0,i.jsx)(n.code,{children:"hardhat.config.ts"})," file. Inside that file, find the exported JavaScript object and\ninside of it find ",(0,i.jsx)(n.code,{children:"networks"}),". Add a new network which will be your Subnet."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'subnet: {\n  url: "<yourRpcUrl>",\n  chainId: <yourChainId>,\n  accounts: ["<accounts-private-key>"]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Example Values:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'subnet: {\n  url: "http://127.0.0.1:9650/ext/bc/2KY4TYoJwuJWLeSfj4Mae4t4sBCwGrx48QyGWg3zWwP5PhZjHV/rpc",\n  chainId: 676767,\n  accounts: ["56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027"]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Example Updated File: ",(0,i.jsx)(n.a,{href:"/deprecated/tutorials-contest/2022/local-subnet-development/hardhat.config.ts",children:"hardhat.config.ts"})]}),"\n",(0,i.jsxs)(n.p,{children:["Now you can run any commands ran in the tutorial with ",(0,i.jsx)(n.code,{children:"--network subnet"})," parameter"]}),"\n",(0,i.jsx)(n.p,{children:"Example command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn deploy --network subnet\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-5-interact-with-precompiles-optional",children:"Step 5: Interact with Precompiles (Optional)"}),"\n",(0,i.jsx)(n.p,{children:"If you have followed the tutorial as it is, you do not need this part. Since, in\nthis tutorial we did not add any precompiles to the Subnet. Therefore, this step\nis optional and helpful only if you are trying to extend your Subnet with\nprecompiles."}),"\n",(0,i.jsxs)(n.p,{children:["To checkout current precompiles provided by Lux Partners refer to\n",(0,i.jsx)(n.a,{href:"/build/subnet/upgrade/customize-a-subnet#precompiles",children:"this"}),". There\nare 3 precompiles shared by Lux Partners at the time this documentation is written."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/build/subnet/upgrade/customize-a-subnet#restricting-smart-contract-deployers",children:"Contract Deployer Allow List"}),":\nrestricts the addresses who can deploy contracts"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/build/subnet/upgrade/customize-a-subnet#restricting-who-can-submit-transactions",children:"Transaction Allow List"}),":\nrestricts the addresses who can send transactions"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/build/subnet/upgrade/customize-a-subnet#minting-native-coins",children:"Native Minter"}),":\nallows given addresses to mint native token"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This tutorial will show how to interact with them using Remix."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Before trying to interact with any of the precompiles make sure to add them\nwhile ",(0,i.jsx)(n.a,{href:"#step-2-create-the-subnet",children:"Creating the Subnet"}),". You can not add them\nafterwards."]})}),"\n",(0,i.jsx)(n.h3,{id:"general-steps-to-interact-with-precompiles",children:"General Steps to Interact with Precompiles"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["While creating the Subnet you will be prompted ",(0,i.jsx)(n.code,{children:"Advanced: Would you like to add a custom precompile to modify the EVM?:"})," answer ",(0,i.jsx)(n.code,{children:"Yes"})," then choose the\nprecompile you would like to add. Continue by selecting ",(0,i.jsx)(n.code,{children:"Add Admin"}),", it will\nask for an address. This address is your account's public address, it allows\nothers to interact with your account. To get your account's public address,\nopen your MetaMask extension, hover over your account's label (which is\n'Account 1' for the image) and click to copy the address to your clipboard.\nPaste that address to the command line to use your MetaMask account as the\nadmin of the precompile. Do not forget that you can always get more details\nby selecting ",(0,i.jsx)(n.code,{children:"More info"})," inside the command line."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"MetaMask Account Public Address",src:t(44308).Z+"",width:"353",height:"185"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["If you are adding the ",(0,i.jsx)(n.code,{children:"Transaction allow list"})," precompile, make sure to add\nthe airdrop receiver address as admin so that the address with funds could\nsend transactions."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.a,{href:"https://remix.ethereum.org",children:"remix"})," and make sure that your MetaMask is\nusing your Subnet and the remix's environment is using ",(0,i.jsx)(n.code,{children:"Injected Web3"}),". Then,\ncreate a solidity file with respective recommended file name and add the\nrespective precompile interface, refer to specific precompile to see details."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Load precompile to the respective address, refer to specific precompile to see their addresses."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Call precompile functions."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"interact-with-contract-deployer-allow-list",children:"Interact with Contract Deployer Allow List"}),"\n",(0,i.jsxs)(n.p,{children:["Recommended file name: ",(0,i.jsx)(n.code,{children:"IContractDeployerAllowList.sol"})]}),"\n",(0,i.jsxs)(n.p,{children:["Precompile Interface: ",(0,i.jsx)(n.a,{href:"/deprecated/tutorials-contest/2022/local-subnet-development/precompiles/AllowList",children:"Contract Deployer Allow List"})]}),"\n",(0,i.jsxs)(n.p,{children:["Precompile address: ",(0,i.jsx)(n.code,{children:"0x0200000000000000000000000000000000000000"})]}),"\n",(0,i.jsxs)(n.p,{children:["There are 2 main roles for Contract Deployer Allow List precompile; ",(0,i.jsx)(n.code,{children:"Admin"})," and ",(0,i.jsx)(n.code,{children:"Deployer"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Admin"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Can add new admins and deployers"}),"\n",(0,i.jsx)(n.li,{children:"Can deploy contracts"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Deployer"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Can deploy contracts"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To check the role of an address run ",(0,i.jsx)(n.code,{children:"readAllowList"})," function. It returns 0, 1 or\n2, corresponding to the roles ",(0,i.jsx)(n.code,{children:"None"}),", ",(0,i.jsx)(n.code,{children:"Deployer"}),", and ",(0,i.jsx)(n.code,{children:"Admin"})," respectively."]}),"\n",(0,i.jsx)(n.h4,{id:"interact-with-transaction-allow-list",children:"Interact with Transaction Allow List"}),"\n",(0,i.jsxs)(n.p,{children:["Recommended file name: ",(0,i.jsx)(n.code,{children:"ITxAllowList.sol"})]}),"\n",(0,i.jsxs)(n.p,{children:["Precompile interface: ",(0,i.jsx)(n.a,{href:"/deprecated/tutorials-contest/2022/local-subnet-development/precompiles/AllowList",children:"Transaction Allow List"})]}),"\n",(0,i.jsxs)(n.p,{children:["Precompile address: ",(0,i.jsx)(n.code,{children:"0x0200000000000000000000000000000000000002"})]}),"\n",(0,i.jsxs)(n.p,{children:["There are 2 main roles for Transaction Deployer Allow List precompile; ",(0,i.jsx)(n.code,{children:"Admin"})," and ",(0,i.jsx)(n.code,{children:"Allowed"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Admin"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Can add new admins and alloweds"}),"\n",(0,i.jsx)(n.li,{children:"Can send transactions"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Allowed"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Can send transactions"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To check the role of an address run ",(0,i.jsx)(n.code,{children:"readAllowList"})," function. It returns 0, 1 or\n2, corresponding to the roles ",(0,i.jsx)(n.code,{children:"None"}),", ",(0,i.jsx)(n.code,{children:"Allowed"}),", and ",(0,i.jsx)(n.code,{children:"Admin"})," respectively."]}),"\n",(0,i.jsx)(n.h4,{id:"interact-with-native-minter",children:"Interact with Native Minter"}),"\n",(0,i.jsxs)(n.p,{children:["Recommended file name: ",(0,i.jsx)(n.code,{children:"INativeMinter.sol"})]}),"\n",(0,i.jsxs)(n.p,{children:["Precompile interface: ",(0,i.jsx)(n.a,{href:"/deprecated/tutorials-contest/2022/local-subnet-development/precompiles/NativeMinter",children:"Native Minter"})]}),"\n",(0,i.jsxs)(n.p,{children:["Precompile address: ",(0,i.jsx)(n.code,{children:"0x0200000000000000000000000000000000000001"})]}),"\n",(0,i.jsxs)(n.p,{children:["There are 2 main roles for NativeMinter precompile; ",(0,i.jsx)(n.code,{children:"Admin"})," and ",(0,i.jsx)(n.code,{children:"Minter"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Admin"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Can add new admins and minters"}),"\n",(0,i.jsx)(n.li,{children:"Can mint native token"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Minter"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Can mint native token"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To check the role of an address run ",(0,i.jsx)(n.code,{children:"readAllowList"})," function. It returns 0, 1 or\n2, corresponding to the roles ",(0,i.jsx)(n.code,{children:"None"}),", ",(0,i.jsx)(n.code,{children:"Minter"}),", and ",(0,i.jsx)(n.code,{children:"Admin"})," respectively."]}),"\n",(0,i.jsx)(n.h2,{id:"customize-the-subnet",children:"Customize the Subnet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VM"}),": To understand and create your custom VM you can refer to\n",(0,i.jsx)(n.a,{href:"https://docs.lux.network/subnets/create-a-virtual-machine-vm",children:"this"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ChainId"}),": You want your ",(0,i.jsx)(n.code,{children:"ChainId"})," parameter to be unique. To make sure that\nyour Subnet is secure against replay attacks. To see registered ",(0,i.jsx)(n.code,{children:"ChainIds"})," you\ncan check ",(0,i.jsx)(n.a,{href:"https://chainlist.org/",children:"chainlist.org"}),". At the top right of the\nsite make sure to turn on the button to include testnets."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Gas Parameters"}),": Lux Partners recommends the low-low option and C-Chain currently\nuses this option. But, if you know what you are doing you are free to\ncustomize. Note that higher disk usage has some trade offs, it would require\nmore processing power and cause it to be more expensive to maintain."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Airdrop Address"}),": You would not like to use the default address in\nproduction, that is receiving the 1 million tokens. Because, it is a\ncompromised wallet, which means that its private key is well known by others.\nIf you add a custom address to receive airdrop. Lux-cli will ask you to\ngive an amount in LUX, in that case do not enter the value thinking as in\n",(0,i.jsx)(n.code,{children:"ether"})," but in ",(0,i.jsx)(n.code,{children:"gwei"})," to correctly airdrop the amount you want. As an example,\nto airdrop ",(0,i.jsx)(n.code,{children:"1"})," whole token, as in one ether, you would enter the value\n",(0,i.jsx)(n.code,{children:"1000000000"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Precompiles"}),": You can learn what precompiles are by referring to\n",(0,i.jsx)(n.a,{href:"/build/subnet/upgrade/customize-a-subnet#precompiles",children:"this"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"troubleshoot-common-issues",children:"Troubleshoot Common Issues"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-install-lux-cli-1",children:"Step 1: Install Lux-Cli"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lux"}),", ",(0,i.jsx)(n.code,{children:"lux subnet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"command not found: lux"'})," It means that the directory containing\n",(0,i.jsx)(n.code,{children:"lux"})," command is not added to the PATH environment variable. It could\nbe caused by following reasons; - You have added the wrong ",(0,i.jsx)(n.code,{children:"bin"})," directory to your environment variables. - Make sure to find where the ",(0,i.jsx)(n.code,{children:"bin"})," directory is and run ",(0,i.jsx)(n.code,{children:"export PATH=$PWD:$PATH"})," inside the ",(0,i.jsx)(n.code,{children:"bin"})," directory. - You have added it to the PATH environment variable temporarily and\nrestarted your terminal. - You can either add the ",(0,i.jsx)(n.code,{children:"bin"})," directory to the PATH environment variable\nagain by running ",(0,i.jsx)(n.code,{children:"export PATH=$PWD:$PATH"})," inside the downloaded ",(0,i.jsx)(n.code,{children:"bin"}),"\ndirectory or you can refer to ",(0,i.jsx)(n.a,{href:"#add-command-permanently",children:"Add Lux Command\nPermanently"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-2-create-the-subnet-1",children:"Step 2: Create the Subnet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"lux subnet create <subnetName>"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"Error: configuration already exists."'})," It means that you have already\ncreated a Subnet with the same name. To check if that is the case, you can\nrun ",(0,i.jsx)(n.code,{children:"lux subnet list"})," which would list the Subnets you have. If you\nhave a Subnet with the same name, you can try to create with a different\nname, delete the existing Subnet by running ",(0,i.jsx)(n.code,{children:"lux subnet delete <subnetName>"}),"\nor overwrite the existing one by running ",(0,i.jsx)(n.code,{children:"lux subnet create <subnetName> --force"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-3-deploy-the-subnet-1",children:"Step 3: Deploy the Subnet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"lux subnet deploy <subnetName> -l"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"Subnet <subnetName> has already been deployed"'})," As it says, it means that\nyour Subnet has already been deployed. To check currently running\nblockchains run ",(0,i.jsx)(n.code,{children:"lux network status"}),". If it provides network\ninformation, try to connect to your Subnet using MetaMask to check if\neverything's all right. If it does not provide network information or you are\nhaving problems with interacting with your Subnet. Run ",(0,i.jsx)(n.code,{children:"lux network clean"}),", this command will stop the local network and delete the state. Then,\nrun ",(0,i.jsx)(n.code,{children:"lux subnet deploy <subnetName> -l"})," again."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"Error: failed to query network health: ..."'}),"\nYou can check logs which are located at ",(0,i.jsx)(n.code,{children:"$HOME/.cli"})," or try to run the command once more."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-4-interact-with-the-subnet-1",children:"Step 4: Interact with the Subnet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Errors are generally covered in the linked tutorials. Be sure to check them out."}),"\n",(0,i.jsxs)(n.li,{children:["When you try to interact with the Subnet you might try to interact with an\naccount that has no balance. Make sure that you have followed ",(0,i.jsx)(n.a,{href:"#access-funded-accounts",children:"Access Funded\nAccounts"}),". If you are having a problem interacting\nusing Hardhat, make sure that the private key corresponds to an account which\nhas balance."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-5-interact-with-precompiles-optional-1",children:"Step 5: Interact with Precompiles (Optional)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Common issues are troubleshooted at the official lux docs, to check them out refer to ",(0,i.jsx)(n.a,{href:"/build/subnet/upgrade/customize-a-subnet#precompiles",children:"this"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.code,{children:"Contract Deployer Allow List"}),", refer to ",(0,i.jsx)(n.a,{href:"/build/subnet/upgrade/customize-a-subnet#restricting-smart-contract-deployers",children:"this"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.code,{children:"Transaction Allow List"}),", refer to ",(0,i.jsx)(n.a,{href:"/build/subnet/upgrade/customize-a-subnet#restricting-who-can-submit-transactions",children:"this"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.code,{children:"Native Minter"}),", refer to ",(0,i.jsx)(n.a,{href:"/build/subnet/upgrade/customize-a-subnet#minting-native-coins",children:"this"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"That is it! That is how you could create and deploy your local Subnet from scratch."}),"\n",(0,i.jsx)(n.p,{children:"In this tutorial, we learned:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Installing and using cli."}),"\n",(0,i.jsx)(n.li,{children:"Creating a Subnet and customizing it."}),"\n",(0,i.jsx)(n.li,{children:"Deploying the Subnet locally for local development."}),"\n",(0,i.jsx)(n.li,{children:"Interacting with locally deployed Subnet using Remix and Hardhat."}),"\n",(0,i.jsx)(n.li,{children:"Optionally, we learned how to interact with precompiles."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},44308:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/accountPublicAddress-eac412ac7926be1f977f7a3ce618ebf3.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(67294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);