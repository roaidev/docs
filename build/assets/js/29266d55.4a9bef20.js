"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8117],{5673:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(85893),r=t(11151);const o={tags:["Build","Tooling","Dapps"],description:"The Lux Netrunner (ANR) allows a user to define, create and interact with a network of Lux nodes. It can be used for development and testing.",sidebar_label:"Lux Netrunner",pagination_label:"Lux Netrunner"},i="Lux Netrunner",l={id:"tooling/netrunner",title:"Lux Netrunner",description:"The Lux Netrunner (ANR) allows a user to define, create and interact with a network of Lux nodes. It can be used for development and testing.",source:"@site/docs/tooling/netrunner.md",sourceDirName:"tooling",slug:"/tooling/netrunner",permalink:"/tooling/netrunner",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/tooling/netrunner.md",tags:[{label:"Build",permalink:"/tags/build"},{label:"Tooling",permalink:"/tags/tooling"},{label:"Dapps",permalink:"/tags/dapps"}],version:"current",frontMatter:{tags:["Build","Tooling","Dapps"],description:"The Lux Netrunner (ANR) allows a user to define, create and interact with a network of Lux nodes. It can be used for development and testing.",sidebar_label:"Lux Netrunner",pagination_label:"Lux Netrunner"},sidebar:"tooling",previous:{title:"Luxd Install Script",permalink:"/tooling/luxd-installer"},next:{title:"Lux Plugin Manager",permalink:"/tooling/plugin-manager"}},a={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Start the Server",id:"start-the-server",level:3},{value:"Run Queries",id:"run-queries",level:3},{value:"Ping the Server",id:"ping-the-server",level:4},{value:"Start a New Lux Network with Five Nodes",id:"start-a-new-lux-network-with-five-nodes",level:4},{value:"Wait for All the Nodes in the Cluster to Become Healthy",id:"wait-for-all-the-nodes-in-the-cluster-to-become-healthy",level:4},{value:"Get API Endpoints of All Nodes in the Cluster",id:"get-api-endpoints-of-all-nodes-in-the-cluster",level:4},{value:"Query Cluster Status from the Server",id:"query-cluster-status-from-the-server",level:4},{value:"Stream Cluster Status",id:"stream-cluster-status",level:4},{value:"Remove (Stop) a Node",id:"remove-stop-a-node",level:4},{value:"Restart a Node",id:"restart-a-node",level:4},{value:"Add a Node",id:"add-a-node",level:4},{value:"Terminate the Cluster",id:"terminate-the-cluster",level:4},{value:"Subnets",id:"subnets",level:2},{value:"RPC Server Subnet-EVM Example",id:"rpc-server-subnet-evm-example",level:3},{value:"Using Lux Network as a Library",id:"using-lux-network-as-a-library",level:2},{value:"Creating Custom Networks",id:"creating-custom-networks",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"lux-netrunner",children:"Lux Netrunner"}),"\n",(0,s.jsxs)(n.p,{children:["The Lux Netrunner ",(0,s.jsx)(n.strong,{children:"(ANR)"})," allows a user to define, create and interact with a network\nof Lux nodes. It can be used for development and testing."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/netrunner",children:"Link to GitHub"})}),"\n",(0,s.jsx)(n.p,{children:"Developing P2P systems is hard, and blockchains are no different. A developer can't just focus on\nthe functionality of a node, but needs to consider the dynamics of the network, the interaction of\nnodes and emergent system properties. A lot of testing can't be addressed by unit testing, but needs\na special kind of integration testing, where the code runs in interaction with other nodes,\nattempting to simulate real network scenarios."}),"\n",(0,s.jsxs)(n.p,{children:["In the context of Lux, ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/learn/lux/subnets-overview",children:"Subnets"})})," are a special\nfocus which requires new tooling and support for playing, working and testing with this unique\nfeature of the Lux ecosystem."]}),"\n",(0,s.jsxs)(n.p,{children:["The ANR aims at being a tool for developers and system integrators alike, offering functionality to\nrun networks of Luxd nodes with support for custom node, Subnet and network configurations,\nallowing to locally test code before deploying to Mainnet or even public testnets like ",(0,s.jsx)(n.code,{children:"testnet"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can also use the ",(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/netrunner-postman-collection",children:"Lux Netrunner Postman collection"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note that this tool is not for running production nodes, and that because it is being heavily"}),"\n",(0,s.jsx)(n.strong,{children:"developed right now, documentation might differ slightly from the actual code."})]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -sSfL https://raw.githubusercontent.com/luxdefi/netrunner/main/scripts/install.sh | sh\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The script installs the binary inside the ",(0,s.jsx)(n.code,{children:"~/bin"})," directory. If the directory doesn't exist,\nit will be created."]}),"\n",(0,s.jsxs)(n.p,{children:["Please make sure that ",(0,s.jsx)(n.code,{children:"~/bin"})," is in your ",(0,s.jsx)(n.code,{children:"$PATH"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"export PATH=~/bin:$PATH\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To add it to your path permanently, add an export command to your shell initialization script. If\nyou run ",(0,s.jsx)(n.code,{children:"bash"}),", use ",(0,s.jsx)(n.code,{children:".bashrc"}),". If you run ",(0,s.jsx)(n.code,{children:"zsh"}),", use ",(0,s.jsx)(n.code,{children:".zshrc"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Furthermore, ",(0,s.jsx)(n.code,{children:"LUXD_EXEC_PATH"})," should be set properly in all shells you run commands related\nto Lux Netrunner. We strongly recommend that you put the following in to your shell's\nconfiguration file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# replace execPath with the path to Luxd on your machine\n# e.g., ${HOME}/go/src/github.com/luxdefi/luxd/build/luxd\nLUXD_EXEC_PATH="${HOME}/go/src/github.com/luxdefi/luxd/build/luxd"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Unless otherwise specified, file paths given below are relative to the root of this repository."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"There are two main ways to use the netrunner:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run ANR as a binary"}),"\n",(0,s.jsx)(n.p,{children:"This is the recommended approach for most use cases. Doesn't require Golang installation and\nprovides a RPC server with an HTTP API and a client library for easy interaction."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Import this repository into your go program"}),"\n",(0,s.jsx)(n.p,{children:"This allows for custom network scenarios and high flexibility, but requires more code to be\nwritten."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Running the binary, the user can send requests to the RPC server in order to start a network, create\nSubnets, add nodes to the network, remove nodes from the network, restart nodes, etc. You can make\nrequests through the ",(0,s.jsx)(n.code,{children:"netrunner"}),' command or by making API calls. Requests are\n"translated" into gRPC and sent to the server.']}),"\n",(0,s.jsxs)(n.p,{children:["Each node can then also be reached via\n",(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/netrunner/tree/main/api",children:"API"})," endpoints which each node\nexposes."]}),"\n",(0,s.jsxs)(n.p,{children:["The following diagram is a simplified view of the high level architecture of the tool:\n",(0,s.jsx)(n.img,{alt:"ANR architecture",src:t(22155).Z+"",width:"1056",height:"816"})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"When running with the binary, ANR runs a server process as an RPC server which then waits for API\ncalls and handles them. Therefore we run one shell with the RPC server, and another one for issuing\ncalls."}),"\n",(0,s.jsx)(n.h3,{id:"start-the-server",children:"Start the Server"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'netrunner server \\\n--log-level debug \\\n--port=":8080" \\\n--grpc-gateway-port=":8081"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Note that the above command will run until you stop it with ",(0,s.jsx)(n.code,{children:"CTRL + C"}),". Further commands will have\nto be run in a separate terminal."]}),"\n",(0,s.jsx)(n.p,{children:"The RPC server listens to two ports:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"port"}),": the main gRPC port (see ",(0,s.jsx)(n.a,{href:"https://grpc.io/",children:"gRPC"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"grpc-gateway-port"}),": the gRPC gateway port (see\n",(0,s.jsx)(n.a,{href:"https://grpc-ecosystem.github.io/grpc-gateway/",children:"gRPC-gateway"}),"), which allows for HTTP requests."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When using the binary to issue calls, the main port will be hit. In this mode, the binary executes\ncompiled code to issue calls. Alternatively, plain HTTP can be used to issue calls, without the need\nto use the binary. In this mode, the ",(0,s.jsx)(n.code,{children:"grpc-gateway-port"})," should be queried."]}),"\n",(0,s.jsx)(n.p,{children:"Each of the examples below will show both modes, clarifying its usage."}),"\n",(0,s.jsx)(n.h3,{id:"run-queries",children:"Run Queries"}),"\n",(0,s.jsx)(n.h4,{id:"ping-the-server",children:"Ping the Server"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -X POST -k http://localhost:8081/v1/ping -d ''\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'netrunner ping \\\n--log-level debug \\\n--endpoint="0.0.0.0:8080"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"start-a-new-lux-network-with-five-nodes",children:"Start a New Lux Network with Five Nodes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST -k http://localhost:8081/v1/control/start -d \'{"execPath":"\'${LUXD_EXEC_PATH}\'","numNodes":5}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'netrunner control start \\\n--log-level debug \\\n--endpoint="0.0.0.0:8080" \\\n--number-of-nodes=5 \\\n--luxd-path ${LUXD_EXEC_PATH}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Additional optional parameters which can be passed to the start command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'  --plugin-dir ${LUXD_PLUGIN_PATH} \\\n  --blockchain-specs \'[{"vm_name":"subnetevm","genesis":"/tmp/subnet-evm.genesis.json"}]\' \\\n\t--global-node-config \'{"index-enabled":false, "api-admin-enabled":true,"network-peer-list-gossip-frequency":"300ms"}\' \\\n\t--custom-node-configs" \'{"node1":{"log-level":"debug","api-admin-enabled":false},"node2":{...},...}\'\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--plugin-dir"})," and ",(0,s.jsx)(n.code,{children:"--blockchain-specs"})," are parameters relevant to Subnet operation."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--plugin-dir"})," can be used to indicate to ANR where it will find plugin binaries for your own VMs.\nIt is optional. If not set, ANR will assume a default location which is relative to the\n",(0,s.jsx)(n.code,{children:"luxd-path"})," given."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--blockchain-specs"})," specifies details about how to create your own blockchains. It takes a JSON\narray for each blockchain, with the following possible fields:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'   "vm_name": human readable name for the VM\n   "genesis": path to a file containing the genesis for your blockchain (must be a valid path)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/build/subnet/deploy/local-subnet",children:"Lux-CLI documentation"})," for details about how to\ncreate and run Subnets with our ",(0,s.jsx)(n.em,{children:"Lux-CLI"})," tool."]}),"\n",(0,s.jsx)(n.p,{children:"The netrunner supports Luxd node configuration at different levels."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If neither ",(0,s.jsx)(n.code,{children:"--global-node-config"})," nor ",(0,s.jsx)(n.code,{children:"--custom-node-configs"})," is supplied, all nodes get a\nstandard set of config options. Currently this set contains:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "network-peer-list-gossip-frequency": "250ms",\n  "network-max-reconnect-delay": "1s",\n  "public-ip": "127.0.0.1",\n  "health-check-frequency": "2s",\n  "api-admin-enabled": true,\n  "api-ipcs-enabled": true,\n  "index-enabled": true\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--global-node-config"})," is a JSON string representing a ",(0,s.jsx)(n.em,{children:"single"})," Luxd config, which will be\napplied to ",(0,s.jsx)(n.strong,{children:"all nodes"}),". This makes it easy to define common properties to all nodes. Whatever\nis set here will be ",(0,s.jsx)(n.em,{children:"combined"})," with the standard set above."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--custom-node-configs"})," is a map of JSON strings representing the ",(0,s.jsx)(n.em,{children:"complete"})," network with\nindividual configs. This allows to configure each node independently. If set, ",(0,s.jsx)(n.code,{children:"--number-of-nodes"}),"\nwill be ",(0,s.jsx)(n.strong,{children:"ignored"})," to avoid conflicts."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The configs can be combined and will be merged, that is one could set global ",(0,s.jsx)(n.code,{children:"--global-node-config"}),"\nentries applied to each node, and also set ",(0,s.jsx)(n.code,{children:"--custom-node-configs"})," for additional entries."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Common ",(0,s.jsx)(n.code,{children:"--custom-node-configs"})," entries override ",(0,s.jsx)(n.code,{children:"--global-node-config"})," entries which override the\nstandard set."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The following entries will be ",(0,s.jsx)(n.strong,{children:"ignored in all cases"})," because the netrunner needs to set\nthem internally to function properly:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"  --log-dir\n  --db-dir\n  --http-port\n  --staking-port\n  --public-ipc\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"wait-for-all-the-nodes-in-the-cluster-to-become-healthy",children:"Wait for All the Nodes in the Cluster to Become Healthy"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -X POST -k http://localhost:8081/v1/control/health -d ''\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'netrunner control health \\\n--log-level debug \\\n--endpoint="0.0.0.0:8080"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The response to this call is actually pretty large, as it contains the state of the whole cluster.\nAt the very end of it there should be a text saying ",(0,s.jsx)(n.code,{children:"healthy:true"})," (it would say ",(0,s.jsx)(n.code,{children:"false"})," if it\nwasn't healthy)."]}),"\n",(0,s.jsx)(n.h4,{id:"get-api-endpoints-of-all-nodes-in-the-cluster",children:"Get API Endpoints of All Nodes in the Cluster"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -X POST -k http://localhost:8081/v1/control/uris -d ''\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'netrunner control uris \\\n--log-level debug \\\n--endpoint="0.0.0.0:8080"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"query-cluster-status-from-the-server",children:"Query Cluster Status from the Server"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -X POST -k http://localhost:8081/v1/control/status -d ''\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'netrunner control status \\\n--log-level debug \\\n--endpoint="0.0.0.0:8080"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"stream-cluster-status",children:"Stream Cluster Status"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'netrunner control \\\n--request-timeout=3m \\\nstream-status \\\n--push-interval=5s \\\n--log-level debug \\\n--endpoint="0.0.0.0:8080"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"remove-stop-a-node",children:"Remove (Stop) a Node"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST -k http://localhost:8081/v1/control/removenode -d \'{"name":"node5"}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'netrunner control remove-node node5 \\\n--request-timeout=3m \\\n--log-level debug \\\n--endpoint="0.0.0.0:8080" \\\n'})}),"\n",(0,s.jsx)(n.h4,{id:"restart-a-node",children:"Restart a Node"}),"\n",(0,s.jsxs)(n.p,{children:["In this example we are stopping the node named ",(0,s.jsx)(n.code,{children:"node1"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": By convention all node names start with ",(0,s.jsx)(n.code,{children:"node"})," and a number. We suggest to stick to this\nconvention to avoid issues."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# e.g., ${HOME}/go/src/github.com/luxdefi/luxd/build/luxd\nLUXD_EXEC_PATH="luxd"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Note that you can restart the node with a different binary by providing"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST -k http://localhost:8081/v1/control/restartnode -d \'{"name":"node1","execPath":"\'${LUXD_EXEC_PATH}\'"}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'netrunner control restart-node node1 \\\n--request-timeout=3m \\\n--log-level debug \\\n--endpoint="0.0.0.0:8080" \\\n--luxd-path ${LUXD_EXEC_PATH}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"add-a-node",children:"Add a Node"}),"\n",(0,s.jsxs)(n.p,{children:["In this example we are adding a node named ",(0,s.jsx)(n.code,{children:"node99"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# e.g., ${HOME}/go/src/github.com/luxdefi/luxd/build/luxd\nLUXD_EXEC_PATH="luxd"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Note that you can add the new node with a different binary by providing"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST -k http://localhost:8081/v1/control/addnode -d \'{"name":"node99","execPath":"\'${LUXD_EXEC_PATH}\'"}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'netrunner control add-node node99 \\\n--request-timeout=3m \\\n--endpoint="0.0.0.0:8080" \\\n--luxd-path ${LUXD_EXEC_PATH}\n'})}),"\n",(0,s.jsx)(n.p,{children:"It's also possible to provide individual node config parameters:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'\t--node-config \'{"index-enabled":false, "api-admin-enabled":true,"network-peer-list-gossip-frequency":"300ms"}\'\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--node-config"})," allows to specify specific Luxd config parameters to the new node.\nSee ",(0,s.jsx)(n.a,{href:"/nodes/configure/luxd-config-flags",children:"here"})," for the reference of supported flags."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": The following parameters will be ",(0,s.jsx)(n.em,{children:"ignored"})," if set in ",(0,s.jsx)(n.code,{children:"--node-config"}),", because the network\nrunner needs to set its own in order to function properly: ",(0,s.jsx)(n.code,{children:"--log-dir"})," ",(0,s.jsx)(n.code,{children:"--db-dir"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": The following Subnet parameters will be set from the global network configuration to this node:\n",(0,s.jsx)(n.code,{children:"--track-subnets"}),"\n",(0,s.jsx)(n.code,{children:"--plugin-dir"})]}),"\n",(0,s.jsx)(n.h4,{id:"terminate-the-cluster",children:"Terminate the Cluster"}),"\n",(0,s.jsxs)(n.p,{children:["Note that this will still require to stop your RPC server process with ",(0,s.jsx)(n.code,{children:"Ctrl-C"})," to free the shell."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -X POST -k http://localhost:8081/v1/control/stop -d ''\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'netrunner control stop \\\n--log-level debug \\\n--endpoint="0.0.0.0:8080"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"subnets",children:"Subnets"}),"\n",(0,s.jsxs)(n.p,{children:["For general Subnet documentation, please refer to ",(0,s.jsx)(n.a,{href:"/learn/lux/subnets-overview",children:"Subnets"}),".\nANR can be a great helper\nworking with Subnets, and can be used to develop and test new Subnets before deploying them in\npublic networks. However, for a smooth and guided experience, we recommend using\n",(0,s.jsx)(n.a,{href:"/build/subnet/deploy/local-subnet",children:"Lux-CLI"}),". These examples expect a basic understanding of\nwhat Subnets are and their usage."]}),"\n",(0,s.jsx)(n.h3,{id:"rpc-server-subnet-evm-example",children:"RPC Server Subnet-EVM Example"}),"\n",(0,s.jsxs)(n.p,{children:["The Subnet-EVM is a simplified version of Coreth VM (C-Chain). This chain implements the Ethereum\nVirtual Machine and supports Solidity smart-contracts as well as most other Ethereum client\nfunctionality. It can be used to create your own fully Ethereum-compatible Subnet running on\nLux. This means you can run your Ethereum-compatible dApps in custom Subnets, defining your\nown gas limits and fees, and deploying solidity smart-contracts while taking advantage of\nLux's validator network, fast finality, consensus mechanism and other features. Essentially,\nthink of it as your own Ethereum where you can concentrate on your business case rather than the\ninfrastructure. See ",(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/subnet-evm",children:"Subnet-EVM"})," for further information."]}),"\n",(0,s.jsx)(n.h2,{id:"using-lux-network-as-a-library",children:"Using Lux Network as a Library"}),"\n",(0,s.jsxs)(n.p,{children:["The Lux Netrunner can also be imported as a library into your programs so that you can\nuse it to programmatically start, interact with and stop Lux networks. For an example of using\nthe Netrunner in a program, see an\n",(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/netrunner/blob/main/examples/local/fivenodenetwork/main.go",children:"example"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Creating a network is as simple as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"network, err := local.NewDefaultNetwork(log, binaryPath)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["where ",(0,s.jsx)(n.code,{children:"log"})," is a logger of type\n",(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/luxd/blob/master/utils/logging/logger.go#L12",children:(0,s.jsx)(n.code,{children:"logging.Logger"})}),"\nand ",(0,s.jsx)(n.code,{children:"binaryPath"})," is the path of the Luxd binary that each node that exists on network startup\nwill run."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, the below snippet creates a new network using default configurations, and each node in\nthe network runs the binaries at ",(0,s.jsx)(n.code,{children:"/home/user/go/src/github.com/luxdefi/luxd/build"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'network, err := local.NewDefaultNetwork(log,"/home/user/go/src/github.com/luxdefi/luxd/build")\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Once you create a network, you must eventually call ",(0,s.jsx)(n.code,{children:"Stop()"})," on it to make sure all of the nodes"]}),"\n",(0,s.jsx)(n.strong,{children:"in the network stop."})," Calling this method kills all of the Lux nodes in the network. You\nprobably want to call this method in a ",(0,s.jsx)(n.code,{children:"defer"})," statement to make sure it runs."]}),"\n",(0,s.jsxs)(n.p,{children:["To wait until the network is ready to use, use the network's ",(0,s.jsx)(n.code,{children:"Healthy"})," method. It returns a channel\nwhich will be notified when all nodes are healthy."]}),"\n",(0,s.jsxs)(n.p,{children:["Each node has a unique name. Use the network's ",(0,s.jsx)(n.code,{children:"GetNodeNames()"})," method to get the names of all\nnodes."]}),"\n",(0,s.jsxs)(n.p,{children:["Use the network's method ",(0,s.jsx)(n.code,{children:"GetNode(string)"})," to get a node by its name. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"names, _ := network.GetNodeNames()\nnode, _ := network.GetNode(names[0])\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then you can make API calls to the node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"id, _ := node.GetAPIClient().InfoAPI().GetNodeID() // Gets the node's node ID\nbalance, _ := node.GetAPIClient().XChainAPI().GetBalance(address,assetID,false) // Pretend these arguments are defined\n"})}),"\n",(0,s.jsx)(n.p,{children:"After a network has been created and is healthy, you can add or remove nodes to/from the network:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"newNode, _ := network.AddNode(nodeConfig)\nerr := network.RemoveNode(names[0])\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"nodeConfig"})," is a struct which contains information about the new node to be created. For a\nlocal node, the most important elements are its name, its binary path and its identity, given by a\nTLS key/cert."]}),"\n",(0,s.jsx)(n.p,{children:"You can create a network where nodes are running different binaries -- just provide different binary\npaths to each:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'  stakingCert, stakingKey, err := staking.NewCertAndKeyBytes()\n  if err != nil {\n   return err\n  }\n  nodeConfig := node.Config{\n    Name: "New Node",\n    ImplSpecificConfig: local.NodeConfig{\n      BinaryPath: "/tmp/my-luxd/build",\n    },\n    StakingKey:  stakingKey,\n    StakingCert: stakingCert,\n  }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After adding a node, you may want to call the network's ",(0,s.jsx)(n.code,{children:"Healthy"})," method again and wait until the\nnew node is healthy before making API calls to it."]}),"\n",(0,s.jsx)(n.h3,{id:"creating-custom-networks",children:"Creating Custom Networks"}),"\n",(0,s.jsxs)(n.p,{children:["To create custom networks, pass a custom config (the second parameter) to the\n",(0,s.jsx)(n.code,{children:"local.NewNetwork(logging.Logger, network.Config)"})," function. The config defines the number of nodes\nwhen the network starts, the genesis state of the network, and the configs for each node."]}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to\n",(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/netrunner#network-creation",children:"NetworkConfig"})," for more\ndetails."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},22155:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/grpc-networkrunner-e8150c63f670ec147b8a551b23ae6ef7.svg"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(67294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);