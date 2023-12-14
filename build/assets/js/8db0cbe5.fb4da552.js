"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6163],{38747:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=i(85893),r=i(11151);const o={tags:["Nodes","Luxd"],description:"The quickest way to learn about Lux is to run a node and interact with the network. This tutorial demonstrates how to install and run an Lux node, and connect to the Lux Network by compiling a node from source and running it manually.",sidebar_label:"Manually",pagination_label:"Run an Lux Node Manually",sidebar_position:0,keywords:["lux node","run a node","rpc","rpc node","track mainnet","lux mainnet","build from source","binary","luxd","blockchain node"]},s="Run an Lux Node Manually",a={id:"nodes/run/node-manually",title:"Run an Lux Node Manually",description:"The quickest way to learn about Lux is to run a node and interact with the network. This tutorial demonstrates how to install and run an Lux node, and connect to the Lux Network by compiling a node from source and running it manually.",source:"@site/docs/nodes/run/node-manually.md",sourceDirName:"nodes/run",slug:"/nodes/run/node-manually",permalink:"/nodes/run/node-manually",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/nodes/run/node-manually.md",tags:[{label:"Nodes",permalink:"/tags/nodes"},{label:"Luxd",permalink:"/tags/luxd"}],version:"current",sidebarPosition:0,frontMatter:{tags:["Nodes","Luxd"],description:"The quickest way to learn about Lux is to run a node and interact with the network. This tutorial demonstrates how to install and run an Lux node, and connect to the Lux Network by compiling a node from source and running it manually.",sidebar_label:"Manually",pagination_label:"Run an Lux Node Manually",sidebar_position:0,keywords:["lux node","run a node","rpc","rpc node","track mainnet","lux mainnet","build from source","binary","luxd","blockchain node"]},sidebar:"nodes",previous:{title:"System Requirements for Running an Lux Node",permalink:"/nodes/system-requirements"},next:{title:"Preparing Your Environment",permalink:"/nodes/run/with-installer/preparing-your-environment"}},d={},l=[{value:"Hardware and OS Requirements",id:"hardware-and-os-requirements",level:2},{value:"Run an Lux Node from Source",id:"run-an-lux-node-from-source",level:2},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Build and Start",id:"build-and-start",level:3},{value:"1. Set the $GOPATH",id:"1-set-the-gopath",level:4},{value:"2. Create a directory in your <code>$GOPATH</code>",id:"2-create-a-directory-in-your-gopath",level:4},{value:"3. Clone Luxd",id:"3-clone-luxd",level:4},{value:"4. Run the Build Script",id:"4-run-the-build-script",level:4},{value:"5. Start the Node",id:"5-start-the-node",level:4},{value:"Run with a Pre-Built Binary",id:"run-with-a-pre-built-binary",level:2},{value:"Download",id:"download",level:3},{value:"MacOS",id:"macos",level:4},{value:"Linux(PCs or Cloud Providers)",id:"linuxpcs-or-cloud-providers",level:4},{value:"Linux(Arm64)",id:"linuxarm64",level:4},{value:"Start the Node",id:"start-the-node",level:3},{value:"MacOS",id:"macos-1",level:4},{value:"Linux",id:"linux",level:4},{value:"Run with Docker",id:"run-with-docker",level:2},{value:"Networking",id:"networking",level:2},{value:"Bootstrapping",id:"bootstrapping",level:2},{value:"Check Bootstrapping Progress",id:"check-bootstrapping-progress",level:3},{value:"RPC",id:"rpc",level:2},{value:"Going Further",id:"going-further",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"run-an-lux-node-manually",children:"Run an Lux Node Manually"}),"\n",(0,t.jsx)(n.p,{children:"The quickest way to learn about Lux is to run a node and interact with the network."}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial, we will:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Install Luxd and run an Lux node"}),"\n",(0,t.jsx)(n.li,{children:"Connect to Lux"}),"\n"]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Other Options"}),(0,t.jsx)("p",{children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To use a third-party service to host your node or run a\nvalidator, ",(0,t.jsx)(n.a,{href:"/nodes/run/third-party/aws-node",children:"see here"})," for dedicated tutorials."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you're just interested in setting up a node for staking,\nit's recommended to follow the\n",(0,t.jsx)(n.a,{href:"/nodes/run/with-installer/installing-luxd",children:"Luxd Install Script"}),"\ntutorial."]}),"\n"]}),"\n"]})})]}),"\n",(0,t.jsx)(n.h2,{id:"hardware-and-os-requirements",children:"Hardware and OS Requirements"}),"\n",(0,t.jsx)(n.p,{children:"Lux is an incredibly lightweight protocol, so nodes can run on commodity\nhardware. Note that as network usage increases, hardware requirements may\nchange."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CPU: Equivalent of 8 AWS vCPU"}),"\n",(0,t.jsx)(n.li,{children:"RAM: 16 GiB"}),"\n",(0,t.jsx)(n.li,{children:"Storage: 1 TiB SSD"}),"\n",(0,t.jsx)(n.li,{children:"OS: Ubuntu 20.04 or MacOS >= 12"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Please do not try running a node on an HDD, as you may get poor and random\nread/write latencies, therefore reducing performance and reliability."})}),"\n",(0,t.jsx)(n.h2,{id:"run-an-lux-node-from-source",children:"Run an Lux Node from Source"}),"\n",(0,t.jsx)(n.p,{children:"The following steps walk through downloading the Luxd source code and locally\nbuilding the binary program."}),"\n",(0,t.jsx)(n.h3,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.a,{href:"https://gcc.gnu.org/",children:"gcc"})]}),"\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.a,{href:"https://go.dev/",children:"go"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"build-and-start",children:"Build and Start"}),"\n",(0,t.jsxs)(n.h4,{id:"1-set-the-gopath",children:["1. Set the ",(0,t.jsx)(n.a,{href:"https://github.com/golang/go/wiki/SettingGOPATH",children:"$GOPATH"})]}),"\n",(0,t.jsxs)(n.h4,{id:"2-create-a-directory-in-your-gopath",children:["2. Create a directory in your ",(0,t.jsx)(n.code,{children:"$GOPATH"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir -p $GOPATH/src/github.com/luxdefi\n"})}),"\n",(0,t.jsx)(n.h4,{id:"3-clone-luxd",children:"3. Clone Luxd"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"$GOPATH"}),", clone ",(0,t.jsx)(n.a,{href:"https://github.com/luxdefi/luxd",children:"Luxd"}),",\nthe consensus engine and node implementation that is the core of the Lux\nNetwork."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxdefi\ngit clone https://github.com/luxdefi/luxd.git\n"})}),"\n",(0,t.jsx)(n.h4,{id:"4-run-the-build-script",children:"4. Run the Build Script"}),"\n",(0,t.jsxs)(n.p,{children:["From the ",(0,t.jsx)(n.code,{children:"luxd"})," directory, run the build script"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxdefi/luxd\n./scripts/build.sh\n"})}),"\n",(0,t.jsx)(n.h4,{id:"5-start-the-node",children:"5. Start the Node"}),"\n",(0,t.jsx)(n.p,{children:"On Lux Mainnet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxdefi/luxd\n./build/luxd\n"})}),"\n",(0,t.jsx)(n.p,{children:"On Testnet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd $GOPATH/src/github.com/luxdefi/luxd\n./build/luxd --network-id=testnet\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["To kill the node, press ",(0,t.jsx)(n.code,{children:"Ctrl + C"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"run-with-a-pre-built-binary",children:"Run with a Pre-Built Binary"}),"\n",(0,t.jsxs)(n.p,{children:["To download a pre-built binary instead of building from source, go\nto the ",(0,t.jsx)(n.a,{href:"https://github.com/luxdefi/luxd/releases",children:"Luxd releases page"}),",\nand select the desired version."]}),"\n",(0,t.jsx)(n.h3,{id:"download",children:"Download"}),"\n",(0,t.jsxs)(n.p,{children:["Under ",(0,t.jsx)(n.code,{children:"Assets"}),", select the appropriate file."]}),"\n",(0,t.jsx)(n.h4,{id:"macos",children:"MacOS"}),"\n",(0,t.jsxs)(n.p,{children:["Download: ",(0,t.jsx)(n.code,{children:"luxd-macos-<VERSION>.zip"})]}),"\n",(0,t.jsx)(n.p,{children:"Unzip:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-zsh",children:"unzip luxd-macos-<VERSION>.zip\n"})}),"\n",(0,t.jsxs)(n.p,{children:["the resulting folder, ",(0,t.jsx)(n.code,{children:"luxd-<VERSION>"}),", contains the binaries."]}),"\n",(0,t.jsx)(n.h4,{id:"linuxpcs-or-cloud-providers",children:"Linux(PCs or Cloud Providers)"}),"\n",(0,t.jsxs)(n.p,{children:["Download: ",(0,t.jsx)(n.code,{children:"luxd-linux-amd64-<VERSION>.tar.gz"})]}),"\n",(0,t.jsx)(n.p,{children:"Unzip:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tar -xvf luxd-linux-amd64-<VERSION>.tar.gz\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The resulting folder, ",(0,t.jsx)(n.code,{children:"luxd-<VERSION>-linux"}),", contains the binaries."]}),"\n",(0,t.jsx)(n.h4,{id:"linuxarm64",children:"Linux(Arm64)"}),"\n",(0,t.jsxs)(n.p,{children:["Download: ",(0,t.jsx)(n.code,{children:"luxd-linux-arm64-<VERSION>.tar.gz"})]}),"\n",(0,t.jsx)(n.p,{children:"Unzip:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tar -xvf luxd-linux-arm64-<VERSION>.tar.gz\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The resulting folder, ",(0,t.jsx)(n.code,{children:"luxd-<VERSION>-linux"}),", contains the binaries."]}),"\n",(0,t.jsx)(n.h3,{id:"start-the-node",children:"Start the Node"}),"\n",(0,t.jsx)(n.h4,{id:"macos-1",children:"MacOS"}),"\n",(0,t.jsx)(n.p,{children:"Lux Mainnet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"./luxd-<VERSION>/build/luxd\n"})}),"\n",(0,t.jsx)(n.p,{children:"Testnet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"./luxd-<VERSION>/build/luxd --network-id=testnet\n"})}),"\n",(0,t.jsx)(n.h4,{id:"linux",children:"Linux"}),"\n",(0,t.jsx)(n.p,{children:"Lux Mainnet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"./luxd-<VERSION>-linux/luxd\n"})}),"\n",(0,t.jsx)(n.p,{children:"Testnet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"./luxd-<VERSION>-linux/luxd --network-id=testnet\n"})}),"\n",(0,t.jsx)(n.h2,{id:"run-with-docker",children:"Run with Docker"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/luxdefi/luxd#docker-install",children:"Luxd GitHub"}),"\nrepository for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"networking",children:"Networking"}),"\n",(0,t.jsxs)(n.p,{children:["To run successfully, Luxd needs to accept connections from the Internet\non the network port ",(0,t.jsx)(n.code,{children:"9651"}),". Before you proceed with the installation, you need\nto determine the networking environment your node will run in."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Running on a Cloud Provider"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.p,{children:"If your node is running on a cloud provider computer instance, it will have a\nstatic IP. Find out what that static IP is, or set it up if you didn't already."})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Running on a Home Connection"}),(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.p,{children:["If you're running a node on a computer that is on a residential internet\nconnection, you have a dynamic IP; that is, your IP will change periodically.\n",(0,t.jsx)(n.strong,{children:"For the sake of demonstration, you can ignore the following information."}),"\nOtherwise, you will need to set up inbound port forwarding of port ",(0,t.jsx)(n.code,{children:"9651"})," from\nthe internet to the computer the node is installed on."]}),(0,t.jsxs)(n.p,{children:["As there are too many models and router configurations, we cannot provide\ninstructions on what exactly to do, but there are online guides to be found\n(like\n",(0,t.jsx)(n.a,{href:"https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/",children:"this"}),",\nor ",(0,t.jsx)(n.a,{href:"https://www.howtogeek.com/66214/how-to-forward-ports-on-your-router/",children:"this"}),"\n), and your service provider support might help too."]}),(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Please note that a fully connected Lux node maintains and communicates\nover a couple of thousand of live TCP connections. For some low-powered and\nolder home routers that might be too much to handle. If that is the case you may\nexperience lagging on other computers connected to the same router, node getting\nbenched, failing to sync and similar issues."})})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["To be able to make API calls to your node from other machines, include the argument ",(0,t.jsx)(n.code,{children:"--http-host="}),"\nwhen starting the node."]})}),"\n",(0,t.jsx)(n.h2,{id:"bootstrapping",children:"Bootstrapping"}),"\n",(0,t.jsx)(n.p,{children:"A new node needs to catch up to the latest network state before it can participate in consensus\nand serve API calls. This process (called bootstrapping) currently takes several days for a new\nnode connected to Mainnet, and a day or so for a new node connected to Testnet.\nWhen a given chain is done bootstrapping, it will print logs like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'[09-09|17:01:45.295] INFO <C Chain> snowman/transitive.go:392 consensus starting {"lastAcceptedBlock": "2qaFwDJtmCCbMKP4jRpJwH8EFws82Q2yC1HhWgAiy3tGrpGFeb"}\n[09-09|17:01:46.199] INFO <P Chain> snowman/transitive.go:392 consensus starting {"lastAcceptedBlock": "2ofmPJuWZbdroCPEMv6aHGvZ45oa8SBp2reEm9gNxvFjnfSGFP"}\n[09-09|17:01:51.628] INFO <X Chain> snowman/transitive.go:334 consensus starting {"lenFrontier": 1}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"check-bootstrapping-progress",children:"Check Bootstrapping Progress"}),"\n",(0,t.jsxs)(n.p,{children:["To check if a given chain is done bootstrapping, in another terminal window call\n",(0,t.jsx)(n.a,{href:"/reference/luxd/info-api#infoisbootstrapped",children:(0,t.jsx)(n.code,{children:"info.isBootstrapped"})}),"\nby copying and pasting the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.isBootstrapped",\n    "params": {\n        "chain":"X"\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If this returns ",(0,t.jsx)(n.code,{children:"true"}),", the chain is bootstrapped; otherwise, it returns\n",(0,t.jsx)(n.code,{children:"false"}),". If you make other API calls to a chain that is not done bootstrapping,\nit will return ",(0,t.jsx)(n.code,{children:"API call rejected because chain is not done bootstrapping"}),". If\nyou are still experiencing issues please contact us on\n",(0,t.jsx)(n.a,{href:"https://chat.lux.network/",children:"Discord."})]}),"\n",(0,t.jsxs)(n.p,{children:["Learn more about bootstrapping ",(0,t.jsx)(n.a,{href:"/nodes/maintain/node-bootstrap",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"rpc",children:"RPC"}),"\n",(0,t.jsx)(n.p,{children:"When finished bootstrapping, the X, P, and C-Chain RPC endpoints will be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"localhost:9650/ext/bc/P\nlocalhost:9650/ext/bc/X\nlocalhost:9650/ext/bc/C/rpc\n"})}),"\n",(0,t.jsx)(n.p,{children:"if run locally, or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"XXX.XX.XX.XXX:9650/ext/bc/P\nXXX.XX.XX.XXX:9650/ext/bc/X\nXXX.XX.XX.XXX:9650/ext/bc/C/rpc\n"})}),"\n",(0,t.jsx)(n.p,{children:'if run on a cloud provider. The \u201cXXX.XX.XX.XXX" should be replaced with the public\nIP of your EC2 instance.'}),"\n",(0,t.jsxs)(n.p,{children:["For more information on the requests available at these endpoints, please see the\n",(0,t.jsx)(n.a,{href:"/reference",children:"Luxd API Reference"})," documentation."]}),"\n",(0,t.jsx)(n.h2,{id:"going-further",children:"Going Further"}),"\n",(0,t.jsxs)(n.p,{children:["Your Lux node will perform consensus on its own, but it is not yet a\nvalidator on the network. This means that the rest of the network will not query\nyour node when sampling the network during consensus. If you want to add your\nnode as a validator, check out ",(0,t.jsx)(n.a,{href:"/nodes/validate/add-a-validator",children:"Add a Validator"}),"\nto take it a step further."]}),"\n",(0,t.jsxs)(n.p,{children:["Also check out the ",(0,t.jsx)(n.a,{href:"/nodes/maintain/node-bootstrap",children:"Maintain"})," section to learn about how\nto maintain and customize your node to fit your needs."]}),"\n",(0,t.jsxs)(n.p,{children:["To track a Subnet with your node, head to the ",(0,t.jsx)(n.a,{href:"/nodes/run/subnet-node",children:"Subnet Node"})," tutorial."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(67294);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);