"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1137],{92854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(85893),o=n(11151);const s={tags:["Nodes"],description:"Node Bootstrap is the process where a node *securely* downloads linear chain blocks to recreate the latest state of the chain locally. Bootstrapping a node is a multi-step process which requires downloading the chains required by the Primary Network (that is, the C-Chain, P-Chain, and X-Chain), as well as the chains required by any additional Subnets that the node explicitly tracks.",sidebar_label:"Bootstrapping: What to Expect",pagination_label:"What to Expect While Bootstrapping",sidebar_position:0},i="Node Bootstrap",r={id:"nodes/maintain/node-bootstrap",title:"Node Bootstrap",description:"Node Bootstrap is the process where a node *securely* downloads linear chain blocks to recreate the latest state of the chain locally. Bootstrapping a node is a multi-step process which requires downloading the chains required by the Primary Network (that is, the C-Chain, P-Chain, and X-Chain), as well as the chains required by any additional Subnets that the node explicitly tracks.",source:"@site/docs/nodes/maintain/node-bootstrap.md",sourceDirName:"nodes/maintain",slug:"/nodes/maintain/node-bootstrap",permalink:"/nodes/maintain/node-bootstrap",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/nodes/maintain/node-bootstrap.md",tags:[{label:"Nodes",permalink:"/tags/nodes"}],version:"current",sidebarPosition:0,frontMatter:{tags:["Nodes"],description:"Node Bootstrap is the process where a node *securely* downloads linear chain blocks to recreate the latest state of the chain locally. Bootstrapping a node is a multi-step process which requires downloading the chains required by the Primary Network (that is, the C-Chain, P-Chain, and X-Chain), as well as the chains required by any additional Subnets that the node explicitly tracks.",sidebar_label:"Bootstrapping: What to Expect",pagination_label:"What to Expect While Bootstrapping",sidebar_position:0},sidebar:"nodes",previous:{title:"Add a Node to the Validator Set",permalink:"/nodes/validate/add-a-validator"},next:{title:"Node Backup and Restore",permalink:"/nodes/maintain/node-backup-and-restore"}},h={},c=[{value:"Validators and Where to Find Them",id:"validators-and-where-to-find-them",level:2},{value:"Bootstrapping the Blockchain",id:"bootstrapping-the-blockchain",level:2},{value:"Frontier Retrieval",id:"frontier-retrieval",level:3},{value:"Containers Execution",id:"containers-execution",level:3},{value:"When Does Bootstrapping Finish?",id:"when-does-bootstrapping-finish",level:2},{value:"State Sync",id:"state-sync",level:2},{value:"Conclusions and FAQ",id:"conclusions-and-faq",level:2},{value:"How Can I Get the ETA for Node Bootstrap?",id:"how-can-i-get-the-eta-for-node-bootstrap",level:3},{value:"Why Chain Bootstrap ETA Keeps On Changing?",id:"why-chain-bootstrap-eta-keeps-on-changing",level:3},{value:"Why Are Luxd APIs Disabled During Bootstrapping?",id:"why-are-luxd-apis-disabled-during-bootstrapping",level:3}];function l(e){const t={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",math:"math",mi:"mi",mn:"mn",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"node-bootstrap",children:"Node Bootstrap"}),"\n",(0,a.jsxs)(t.p,{children:["Node Bootstrap is the process where a node ",(0,a.jsx)(t.em,{children:"securely"})," downloads linear chain\nblocks to recreate the latest state of the chain locally."]}),"\n",(0,a.jsx)(t.p,{children:"Bootstrap must guarantee that the local state of a node is in sync with the\nstate of other valid nodes. Once bootstrap is completed, a node has the latest\nstate of the chain and can verify new incoming transactions and reach consensus\nwith other nodes, collectively moving forward the chains."}),"\n",(0,a.jsx)(t.p,{children:"Bootstrapping a node is a multi-step process which requires downloading the\nchains required by the Primary Network (that is, the C-Chain, P-Chain, and\nX-Chain), as well as the chains required by any additional Subnets that the node\nexplicitly tracks."}),"\n",(0,a.jsxs)(t.p,{children:["This document covers the high-level technical details of how bootstrapping\nworks. This document glosses over some specifics, but the\n",(0,a.jsx)(t.a,{href:"https://github.com/luxdefi/luxd",children:"Luxd"})," codebase is open-source\nand is available for curious-minded readers to learn more."]}),"\n",(0,a.jsx)(t.h2,{id:"validators-and-where-to-find-them",children:"Validators and Where to Find Them"}),"\n",(0,a.jsxs)(t.p,{children:["Bootstrapping is all about downloading all previously accepted containers\n",(0,a.jsx)(t.em,{children:"securely"})," so a node can have the latest correct state of the chain. A node\ncan't arbitrarily trust any source - a malicious actor could provide malicious\nblocks, corrupting the bootstrapping node's local state, and making it\nimpossible for the node to correctly validate the network and reach consensus\nwith other correct nodes."]}),"\n",(0,a.jsxs)(t.p,{children:["What's the most reliable source of information in the Lux ecosystem? It's\na ",(0,a.jsx)(t.em,{children:"large enough"})," majority of validators. Therefore, the first step of\nbootstrapping is finding a sufficient amount of validators to download\ncontainers from."]}),"\n",(0,a.jsx)(t.p,{children:"The P-Chain is responsible for all platform-level operations, including staking\nevents that modify a Subnet's validator set. Whenever any chain (aside from the\nP-Chain itself) bootstraps, it requests an up-to-date validator set for that\nSubnet (Primary Network is a Subnet too). Once the Subnet's current validator\nset is known, the node can securely download containers from these validators to\nbootstrap the chain."}),"\n",(0,a.jsxs)(t.p,{children:["There is a caveat here: the validator set must be ",(0,a.jsx)(t.em,{children:"up-to-date"}),". If a\nbootstrapping node's validator set is stale, the node may incorrectly believe\nthat some nodes are still validators when their validation period has already\nexpired. A node might unknowingly end up requesting blocks from non-validators\nwhich respond with malicious blocks that aren't safe to download."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"For this reason, every Lux node must fully bootstrap the P-chain first\nbefore moving on to the other Primary Network chains and other Subnets to\nguarantee that their validator sets are up-to-date"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["What about the P-chain? The P-chain can't ever have an up-to-date validator set\nbefore completing its bootstrap. To solve this chicken-and-egg situation the\nLux Foundation maintains a trusted default set of validators called\nbeacons (but users are free to configure their own). Beacon Node-IDs and IP\naddresses are listed in the ",(0,a.jsx)(t.a,{href:"https://github.com/luxdefi/luxd/blob/master/genesis/bootstrappers.json",children:"Luxd codebase"}),".\nEvery node has the beacon list available from the start and can reach out to them\nas soon as it starts."]}),"\n",(0,a.jsxs)(t.p,{children:["Validators are the only sources of truth for a blockchain. Validator\navailability is so key to the bootstrapping process that ",(0,a.jsx)(t.strong,{children:"bootstrapping is\nblocked until the node establishes a sufficient amount of secure connections to\nvalidators"}),". If the node fails to reach a sufficient amount within a given\nperiod of time, it shuts down as no operation can be carried out safely."]}),"\n",(0,a.jsx)(t.h2,{id:"bootstrapping-the-blockchain",children:"Bootstrapping the Blockchain"}),"\n",(0,a.jsx)(t.p,{children:"Once a node is able to discover and connect to validator and beacon nodes, it's\nable to start bootstrapping the blockchain by downloading the individual\ncontainers."}),"\n",(0,a.jsx)(t.p,{children:"One common misconception is that Lux blockchains are bootstrapped by\nretrieving containers starting at genesis and working up to the currently\naccepted frontier."}),"\n",(0,a.jsx)(t.p,{children:"Instead, containers are downloaded from the accepted frontier downwards to\ngenesis, and then their corresponding state transitions are executed upwards\nfrom genesis to the accepted frontier. The accepted frontier is the last\naccepted block for linear chains."}),"\n",(0,a.jsx)(t.p,{children:"Why can't nodes simply download blocks in chronological order, starting from\ngenesis upwards? The reason is efficiency: if nodes downloaded containers\nupwards they would only get a safety guarantee by polling a majority of\nvalidators for every single container. That's a lot of network traffic for a\nsingle container, and a node would still need to do that for each container in\nthe chain."}),"\n",(0,a.jsx)(t.p,{children:"Instead, if a node starts by securely retrieving the accepted frontier from a\nmajority of honest nodes and then recursively fetches the parent containers from\nthe accepted frontier down to genesis, it can cheaply check that containers are\ncorrect just by verifying their IDs. Each Lux container has the IDs of its\nparents (one block parent for linear chains)\nand an ID's integrity can be guaranteed cryptographically."}),"\n",(0,a.jsx)(t.p,{children:"Let's dive deeper into the two bootstrap phases - frontier retrieval and\ncontainer execution."}),"\n",(0,a.jsx)(t.h3,{id:"frontier-retrieval",children:"Frontier Retrieval"}),"\n",(0,a.jsx)(t.p,{children:"The current frontier is retrieved by requesting them from validator or beacon\nnodes. Lux bootstrap is designed to be robust - it must be able to make\nprogress even in the presence of slow validators or network failures. This\nprocess needs to be fault-tolerant to these types of failures, since\nbootstrapping may take quite some time to complete and network connections can\nbe unreliable."}),"\n",(0,a.jsxs)(t.p,{children:["Bootstrap starts when a node has connected to a sufficient majority of validator\nstake. A node is able to start bootstrapping when it has connected to at least\n",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsxs)(t.mrow,{children:[(0,a.jsx)(t.mn,{children:"75"}),(0,a.jsx)(t.mi,{mathvariant:"normal",children:"%"})]}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"75\\%"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.8056em",verticalAlign:"-0.0556em"}}),(0,a.jsx)(t.span,{className:"mord",children:"75%"})]})})]})," of total validator stake."]}),"\n",(0,a.jsx)(t.p,{children:"Seeders are the first set of peers that a node reaches out to when trying to\nfigure out the current frontier. A subset of seeders is randomly sampled from\nthe validator set. Seeders might be slow and provide a stale frontier, be\nmalicious and return malicious container IDs, but they always provide an initial\nset of candidate frontiers to work with."}),"\n",(0,a.jsxs)(t.p,{children:["Once a node has received the candidate frontiers form its seeders, it polls\n",(0,a.jsx)(t.strong,{children:"every network validator"})," to vet the candidates frontiers. It sends the list\nof candidate frontiers it received from the seeders to each validator, asking\nwhether or not they know about these frontiers. Each validator responds\nreturning the subset of known candidates, regardless of how up-to-date or stale\nthe containers are. Each validator returns containers irrespective of their age\nso that bootstrap works even in the presence of a stale frontier."]}),"\n",(0,a.jsxs)(t.p,{children:["Frontier retrieval is completed when at least one of the candidate frontiers is\nsupported by at least ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsxs)(t.mrow,{children:[(0,a.jsx)(t.mn,{children:"50"}),(0,a.jsx)(t.mi,{mathvariant:"normal",children:"%"})]}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"50\\%"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.8056em",verticalAlign:"-0.0556em"}}),(0,a.jsx)(t.span,{className:"mord",children:"50%"})]})})]})," of total validator stake. Multiple candidate\nfrontiers may be supported by a majority of stake, after which point the next\nphase, container fetching starts."]}),"\n",(0,a.jsx)(t.p,{children:"At any point in these steps a network issue may occur, preventing a node from\nretrieving or validating frontiers. If this occurs, bootstrap restarts by\nsampling a new set of seeders and repeating the bootstrapping process,\noptimistically assuming that the network issue will go away."}),"\n",(0,a.jsx)(t.h3,{id:"containers-execution",children:"Containers Execution"}),"\n",(0,a.jsxs)(t.p,{children:["Once a node has at least one valid frontiers, it starts downloading parent\ncontainers for each frontier. If it's the first time the node is running, it\nwon't know about any containers and will try fetching all parent containers\nrecursively from the accepted frontier down to genesis (unless ",(0,a.jsx)(t.a,{href:"#state-sync",children:"state sync"})," is enabled). If bootstrap had already run previously,\nsome containers are already available locally and the node will stop as soon as\nit finds a known one."]}),"\n",(0,a.jsx)(t.p,{children:"A node first just fetches and parses containers. Once the chain is complete, the\nnode executes them in chronological order starting from the earliest downloaded\ncontainer to the accepted frontier. This allows the node to rebuild the full\nchain state and to eventually be in sync with the rest of the network."}),"\n",(0,a.jsx)(t.h2,{id:"when-does-bootstrapping-finish",children:"When Does Bootstrapping Finish?"}),"\n",(0,a.jsxs)(t.p,{children:["You've seen how ",(0,a.jsx)(t.a,{href:"#bootstrapping-the-blockchain",children:"bootstrap works"})," for a single\nchain. However, a node must bootstrap the chains in the Primary Network as well\nas the chains in each Subnet it tracks. This begs the questions -\nwhen are these chains bootstrapped? When is a node done bootstrapping?"]}),"\n",(0,a.jsx)(t.p,{children:"The P-chain is always the first to bootstrap before any other chain. Once the\nP-Chain has finished, all other chains start bootstrapping in parallel,\nconnecting to their own validators independently of one another."}),"\n",(0,a.jsx)(t.p,{children:"A node completes bootstrapping a Subnet once all of its corresponding chains\nhave completed bootstrapping. Because the Primary Network is a special case of\nSubnet that includes the entire network, this applies to it as well as any other\nmanually tracked Subnets."}),"\n",(0,a.jsx)(t.p,{children:"Note that Subnets bootstrap is independently of one another - so even if one Subnet\nhas bootstrapped and is validating new transactions and adding new containers,\nother Subnets may still be bootstrapping in parallel."}),"\n",(0,a.jsx)(t.p,{children:"Within a single Subnet however, a Subnet isn't done bootstrapping until the last\nchain completes bootstrapping. It's possible for a single chain to effectively\nstall a node from finishing the bootstrap for a single Subnet, if it has a\nsufficiently long history or each operation is complex and time consuming. Even\nworse, other Subnet validators are continuously accepting new transactions and\nadding new containers on top of the previously known frontier, so a node that's\nslow to bootstrap can continuously fall behind the rest of the network."}),"\n",(0,a.jsx)(t.p,{children:"Nodes mitigate this by restarting bootstrap for any chains which is blocked\nwaiting for the remaining Subnet chains to finish bootstrapping. These chains\nrepeat the frontier retrieval and container downloading phases to stay\nup-to-date with the Subnet's ever moving current frontier until the slowest\nchain has completed bootstrapping."}),"\n",(0,a.jsx)(t.p,{children:"Once this is complete, a node is finally ready to validate the network."}),"\n",(0,a.jsx)(t.h2,{id:"state-sync",children:"State Sync"}),"\n",(0,a.jsx)(t.p,{children:"The full node bootstrap process is long, and gets longer and longer over time as\nmore and more containers are accepted. Nodes need to bootstrap a chain by\nreconstructing the full chain state locally - but downloading and executing each\ncontainer isn't the only way to do this."}),"\n",(0,a.jsxs)(t.p,{children:["Starting from\n",(0,a.jsx)(t.a,{href:"https://github.com/luxdefi/luxd/releases/tag/v1.7.11",children:"Luxd version 1.7.11"}),",\nnodes can\nuse state sync to drastically cut down bootstrapping time on the C-Chain.\nInstead of executing each block, state sync uses cryptographic techniques to\ndownload and verify just the state associated with the current frontier. State\nsynced nodes can't serve every C-chain block ever historically accepted, but\nthey can safely retrieve the full C-chain state needed to validate in a much\nshorter time. State sync will fetch the previous 256 blocks prior to support the previous block\nhash operation code."]}),"\n",(0,a.jsx)(t.p,{children:"State sync is currently only available for the C-chain. The P-chain and X-chain\ncurrently bootstrap by downloading all blocks. Note that irrespective of the\nbootstrap method used (including state sync), each chain is still blocked on all\nother chains in its Subnet completing their bootstrap before continuing into\nnormal operation."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"There are no configs to state sync an archival node. If you need all the historical state then\nyou must not use state sync and setup the config of the node for an archival node."})}),"\n",(0,a.jsx)(t.h2,{id:"conclusions-and-faq",children:"Conclusions and FAQ"}),"\n",(0,a.jsx)(t.p,{children:"If you got this far, you've hopefully gotten a better idea of what's going on\nwhen your node bootstraps. Here's a few frequently asked questions about\nbootstrapping."}),"\n",(0,a.jsx)(t.h3,{id:"how-can-i-get-the-eta-for-node-bootstrap",children:"How Can I Get the ETA for Node Bootstrap?"}),"\n",(0,a.jsx)(t.p,{children:"Logs provide information about both container downloading and their execution\nfor each chain. Here is an example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:'[02-16|17:31:42.950] INFO <P Chain> bootstrap/bootstrapper.go:494 fetching blocks {"numFetchedBlocks": 5000, "numTotalBlocks": 101357, "eta": "2m52s"}\n[02-16|17:31:58.110] INFO <P Chain> bootstrap/bootstrapper.go:494 fetching blocks {"numFetchedBlocks": 10000, "numTotalBlocks": 101357, "eta": "3m40s"}\n[02-16|17:32:04.554] INFO <P Chain> bootstrap/bootstrapper.go:494 fetching blocks {"numFetchedBlocks": 15000, "numTotalBlocks": 101357, "eta": "2m56s"}\n...\n[02-16|17:36:52.404] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 17881, "numToExecute": 101357, "eta": "2m20s"}\n[02-16|17:37:22.467] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 35009, "numToExecute": 101357, "eta": "1m54s"}\n[02-16|17:37:52.468] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 52713, "numToExecute": 101357, "eta": "1m23s"}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Similar logs are emitted for X and C chains and any chain in explicitly tracked\nSubnets."}),"\n",(0,a.jsx)(t.h3,{id:"why-chain-bootstrap-eta-keeps-on-changing",children:"Why Chain Bootstrap ETA Keeps On Changing?"}),"\n",(0,a.jsxs)(t.p,{children:["As you saw in the ",(0,a.jsx)(t.a,{href:"#when-does-bootstrapping-finish",children:"bootstrap completion section"}),",\na Subnet like the Primary Network\ncompletes once all of its chains finish bootstrapping. Some Subnet chains may\nhave to wait for the slowest to finish. They'll restart bootstrapping in the\nmeantime, to make sure they won't fall back too much with respect to the network\naccepted frontier."]}),"\n",(0,a.jsx)(t.h3,{id:"why-are-luxd-apis-disabled-during-bootstrapping",children:"Why Are Luxd APIs Disabled During Bootstrapping?"}),"\n",(0,a.jsxs)(t.p,{children:["Luxd APIs are ",(0,a.jsx)(t.a,{href:"https://github.com/luxdefi/luxd/blob/master/api/server/server.go#L367:L379",children:"explicitly disabled"}),"\nduring bootstrapping. The reason is that if the node has not fully rebuilt its\nSubnets state, it can't provide accurate information. Luxd APIs are\nactivated once bootstrap completes and node transition into its normal operating\nmode, accepting and validating transactions."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(67294);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);