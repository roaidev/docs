"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6557],{57234:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=n(85893),r=n(11151);const t={tags:["Standards"],description:"This file summarizes the type and kind of cryptography used by Lux at the network and blockchain layers.",sidebar_label:"Cryptography",pagination_label:"Cryptographic Primitives"},a="Cryptographic Primitives",c={id:"reference/standards/cryptographic-primitives",title:"Cryptographic Primitives",description:"This file summarizes the type and kind of cryptography used by Lux at the network and blockchain layers.",source:"@site/docs/reference/standards/cryptographic-primitives.md",sourceDirName:"reference/standards",slug:"/reference/standards/cryptographic-primitives",permalink:"/reference/standards/cryptographic-primitives",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/reference/standards/cryptographic-primitives.md",tags:[{label:"Standards",permalink:"/tags/standards"}],version:"current",frontMatter:{tags:["Standards"],description:"This file summarizes the type and kind of cryptography used by Lux at the network and blockchain layers.",sidebar_label:"Cryptography",pagination_label:"Cryptographic Primitives"},sidebar:"reference",previous:{title:"Lux Network Protocol",permalink:"/reference/standards/network-protocol"},next:{title:"Serialization Primitives",permalink:"/reference/standards/serialization-primitives"}},h={},d=[{value:"Cryptography in the Network Layer",id:"cryptography-in-the-network-layer",level:2},{value:"TLS Certificates",id:"tls-certificates",level:3},{value:"TLS Addresses",id:"tls-addresses",level:3},{value:"Cryptography in the Lux Virtual Machine",id:"cryptography-in-the-lux-virtual-machine",level:2},{value:"Secp256k1 Addresses",id:"secp256k1-addresses",level:3},{value:"Bech32",id:"bech32",level:3},{value:"Secp256k1 Recoverable Signatures",id:"secp256k1-recoverable-signatures",level:3},{value:"Secp256k1 Example",id:"secp256k1-example",level:3},{value:"Signed Messages",id:"signed-messages",level:2},{value:"Gantt Pre-Image Specification",id:"gantt-pre-image-specification",level:3},{value:"Example",id:"example",level:3},{value:"Cryptography in Ethereum Virtual Machine",id:"cryptography-in-ethereum-virtual-machine",level:2},{value:"Cryptography in Other Virtual Machines",id:"cryptography-in-other-virtual-machines",level:2}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"cryptographic-primitives",children:"Cryptographic Primitives"}),"\n",(0,i.jsx)(s.p,{children:"Lux uses a variety of cryptographic primitives for its different\nfunctions. This file summarizes the type and kind of cryptography used at the\nnetwork and blockchain layers."}),"\n",(0,i.jsx)(s.h2,{id:"cryptography-in-the-network-layer",children:"Cryptography in the Network Layer"}),"\n",(0,i.jsx)(s.p,{children:"Lux uses Transport Layer Security, TLS, to protect node-to-node\ncommunications from eavesdroppers. TLS combines the practicality of public-key\ncryptography with the efficiency of symmetric-key cryptography. This has\nresulted in TLS becoming the standard for internet communication. Whereas most\nclassical consensus protocols employ public-key cryptography to prove receipt of\nmessages to third parties, the novel Snow* consensus family does not require\nsuch proofs. This enables Lux to employ TLS in authenticating stakers and\neliminates the need for costly public-key cryptography for signing network\nmessages."}),"\n",(0,i.jsx)(s.h3,{id:"tls-certificates",children:"TLS Certificates"}),"\n",(0,i.jsx)(s.p,{children:"Lux does not rely on any centralized third-parties, and in particular, it\ndoes not use certificates issued by third-party authenticators. All certificates\nused within the network layer to identify endpoints are self-signed, thus\ncreating a self-sovereign identity layer. No third parties are ever involved."}),"\n",(0,i.jsx)(s.h3,{id:"tls-addresses",children:"TLS Addresses"}),"\n",(0,i.jsx)(s.p,{children:"To avoid posting the full TLS certificate to the Platform chain, the certificate\nis first hashed. For consistency, Lux employs the same hashing mechanism\nfor the TLS certificates as is used in Bitcoin. Namely, the DER representation\nof the certificate is hashed with sha256, and the result is then hashed with\nripemd160 to yield a 20-byte identifier for stakers."}),"\n",(0,i.jsxs)(s.p,{children:['This 20-byte identifier is represented by "NodeID-" followed by the data\u2019s\n',(0,i.jsx)(s.a,{href:"https://support.lux.network/en/articles/4587395-what-is-cb58",children:"CB58"})," encoded\nstring."]}),"\n",(0,i.jsx)(s.h2,{id:"cryptography-in-the-lux-virtual-machine",children:"Cryptography in the Lux Virtual Machine"}),"\n",(0,i.jsxs)(s.p,{children:["The Lux virtual machine uses elliptic curve cryptography, specifically\n",(0,i.jsx)(s.code,{children:"secp256k1"}),", for its signatures on the blockchain."]}),"\n",(0,i.jsxs)(s.p,{children:['This 32-byte identifier is represented by "PrivateKey-" followed by the data\u2019s\n',(0,i.jsx)(s.a,{href:"https://support.lux.network/en/articles/4587395-what-is-cb58",children:"CB58"})," encoded\nstring."]}),"\n",(0,i.jsx)(s.h3,{id:"secp256k1-addresses",children:"Secp256k1 Addresses"}),"\n",(0,i.jsx)(s.p,{children:"Lux is not prescriptive about addressing schemes, choosing to instead\nleave addressing up to each blockchain."}),"\n",(0,i.jsxs)(s.p,{children:["The addressing scheme of the X-Chain and the P-Chain relies on secp256k1.\nLux follows a similar approach as Bitcoin and hashes the ECDSA public key.\nThe 33-byte compressed representation of the public key is hashed with sha256\n",(0,i.jsx)(s.strong,{children:"once"}),". The result is then hashed with ripemd160 to yield a 20-byte address."]}),"\n",(0,i.jsxs)(s.p,{children:["Lux uses the convention ",(0,i.jsx)(s.code,{children:"chainID-address"})," to specify which chain an\naddress exists on. ",(0,i.jsx)(s.code,{children:"chainID"})," may be replaced with an alias of the chain. When\ntransmitting information through external applications, the CB58 convention is\nrequired."]}),"\n",(0,i.jsx)(s.h3,{id:"bech32",children:"Bech32"}),"\n",(0,i.jsxs)(s.p,{children:["Addresses on the X-Chain and P-Chain use the\n",(0,i.jsx)(s.a,{href:"http://support.lux.network/en/articles/4587392-what-is-bech32",children:"Bech32"})," standard\noutlined in ",(0,i.jsx)(s.a,{href:"https://en.bitcoin.it/wiki/BIP_0173",children:"BIP 0173"}),". There are four\nparts to a Bech32 address scheme. In order of appearance:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["A human-readable part (HRP). On Mainnet this is ",(0,i.jsx)(s.code,{children:"lux"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["The number ",(0,i.jsx)(s.code,{children:"1"}),", which separates the HRP from the address and error correction code."]}),"\n",(0,i.jsx)(s.li,{children:"A base-32 encoded string representing the 20 byte address."}),"\n",(0,i.jsx)(s.li,{children:"A 6-character base-32 encoded error correction code."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Additionally, an Lux address is prefixed with the alias of the chain it\nexists on, followed by a dash. For example, X-Chain addresses are prefixed with\n",(0,i.jsx)(s.code,{children:"X-"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"The following regular expression matches addresses on the X-Chain, P-Chain and\nC-Chain for Mainnet, Testnet and localhost. Note that all valid Lux addresses\nwill match this regular expression, but some strings that are not valid\nLux addresses may match this regular expression."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"^([XPC]|[a-km-zA-HJ-NP-Z1-9]{36,72})-[a-zA-Z]{1,83}1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}$\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Read more about Lux's ",(0,i.jsx)(s.a,{href:"https://support.lux.network/en/articles/4596397-what-is-an-address",children:"addressing scheme"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"secp256k1-recoverable-signatures",children:"Secp256k1 Recoverable Signatures"}),"\n",(0,i.jsxs)(s.p,{children:["Recoverable signatures are stored as the 65-byte ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"[R || S || V]"})})," where\n",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"V"})})," is 0 or 1 to allow quick public key recoverability. ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"S"})})," must be in\nthe lower half of the possible range to prevent signature malleability. Before\nsigning a message, the message is hashed using sha256."]}),"\n",(0,i.jsx)(s.h3,{id:"secp256k1-example",children:"Secp256k1 Example"}),"\n",(0,i.jsx)(s.p,{children:"Suppose Rick and Morty are setting up a secure communication channel. Morty\ncreates a new public-private key pair."}),"\n",(0,i.jsxs)(s.p,{children:["Private Key: ",(0,i.jsx)(s.code,{children:"0x98cb077f972feb0481f1d894f272c6a1e3c15e272a1658ff716444f465200070"})]}),"\n",(0,i.jsxs)(s.p,{children:["Public Key (33-byte compressed): ",(0,i.jsx)(s.code,{children:"0x02b33c917f2f6103448d7feb42614037d05928433cb25e78f01a825aa829bb3c27"})]}),"\n",(0,i.jsx)(s.p,{children:"Because of Rick\u2019s infinite wisdom, he doesn\u2019t trust himself with carrying around\nMorty\u2019s public key, so he only asks for Morty\u2019s address. Morty follows the\ninstructions, SHA256\u2019s his public key, and then ripemd160\u2019s that result to\nproduce an address."}),"\n",(0,i.jsxs)(s.p,{children:["SHA256(Public Key): ",(0,i.jsx)(s.code,{children:"0x28d7670d71667e93ff586f664937f52828e6290068fa2a37782045bffa7b0d2f"})]}),"\n",(0,i.jsxs)(s.p,{children:["Address: ",(0,i.jsx)(s.code,{children:"0xe8777f38c88ca153a6fdc25942176d2bf5491b89"})]}),"\n",(0,i.jsx)(s.p,{children:"Morty is quite confused because a public key should be safe to be public\nknowledge. Rick belches and explains that hashing the public key protects the\nprivate key owner from potential future security flaws in elliptic curve\ncryptography. In the event cryptography is broken and a private key can be\nderived from a public key, users can transfer their funds to an address that has\nnever signed a transaction before, preventing their funds from being compromised\nby an attacker. This enables coin owners to be protected while the cryptography\nis upgraded across the clients."}),"\n",(0,i.jsx)(s.p,{children:"Later, once Morty has learned more about Rick\u2019s backstory, Morty attempts to\nsend Rick a message. Morty knows that Rick will only read the message if he can\nverify it was from him, so he signs the message with his private key."}),"\n",(0,i.jsxs)(s.p,{children:["Message: ",(0,i.jsx)(s.code,{children:"0x68656c702049276d207472617070656420696e206120636f6d7075746572"})]}),"\n",(0,i.jsxs)(s.p,{children:["Message Hash: ",(0,i.jsx)(s.code,{children:"0x912800c29d554fb9cdce579c0abba991165bbbc8bfec9622481d01e0b3e4b7da"})]}),"\n",(0,i.jsxs)(s.p,{children:["Message Signature: ",(0,i.jsx)(s.code,{children:"0xb52aa0535c5c48268d843bd65395623d2462016325a86f09420c81f142578e121d11bd368b88ca6de4179a007e6abe0e8d0be1a6a4485def8f9e02957d3d72da01"})]}),"\n",(0,i.jsx)(s.p,{children:"Morty was never seen again."}),"\n",(0,i.jsx)(s.h2,{id:"signed-messages",children:"Signed Messages"}),"\n",(0,i.jsx)(s.p,{children:"A standard for interoperable generic signed messages based on the Bitcoin Script\nformat and Ethereum format."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"sign(sha256(length(prefix) + prefix + length(message) + message))\n"})}),"\n",(0,i.jsxs)(s.p,{children:["The prefix is simply the string ",(0,i.jsx)(s.code,{children:"\\x1ALux Signed Message:\\n"}),", where ",(0,i.jsx)(s.code,{children:"0x1A"}),"\nis the length of the prefix text and ",(0,i.jsx)(s.code,{children:"length(message)"})," is an\n",(0,i.jsx)(s.a,{href:"/reference/standards/serialization-primitives#integer",children:"integer"})," of the message size."]}),"\n",(0,i.jsx)(s.h3,{id:"gantt-pre-image-specification",children:"Gantt Pre-Image Specification"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"+---------------+-----------+------------------------------+\n| prefix        : [26]byte  |                     26 bytes |\n+---------------+-----------+------------------------------+\n| messageLength : int       |                      4 bytes |\n+---------------+-----------+------------------------------+\n| message       : []byte    |          size(message) bytes |\n+---------------+-----------+------------------------------+\n                            |       26 + 4 + size(message) |\n                            +------------------------------+\n"})}),"\n",(0,i.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(s.p,{children:'As an example we will sign the message "Through consensus to the stars"'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"// prefix size: 26 bytes\n0x1a\n// prefix: Lux Signed Message:\\n\n0x41 0x76 0x61 0x6c 0x61 0x6e 0x63 0x68 0x65 0x20 0x53 0x69 0x67 0x6e 0x65 0x64 0x20 0x4d 0x65 0x73 0x73 0x61 0x67 0x65 0x3a 0x0a\n// msg size: 30 bytes\n0x00 0x00 0x00 0x1e\n// msg: Through consensus to the stars\n54 68 72 6f 75 67 68 20 63 6f 6e 73 65 6e 73 75 73 20 74 6f 20 74 68 65 20 73 74 61 72 73\n"})}),"\n",(0,i.jsxs)(s.p,{children:["After hashing with ",(0,i.jsx)(s.code,{children:"sha256"})," and signing the pre-image we return the value\n",(0,i.jsx)(s.a,{href:"https://support.lux.network/en/articles/4587395-what-is-cb58",children:"cb58"})," encoded:\n",(0,i.jsx)(s.code,{children:"4Eb2zAHF4JjZFJmp4usSokTGqq9mEGwVMY2WZzzCmu657SNFZhndsiS8TvL32n3bexd8emUwiXs8XqKjhqzvoRFvghnvSN"}),".\nHere's an example using ",(0,i.jsx)(s.a,{href:"https://core.app/tools/signing-tools/sign/",children:"Core web"}),"."]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["A full guide on how to sign messages with Core web can be found\n",(0,i.jsx)(s.a,{href:"https://support.lux.network/en/articles/7206948-core-web-how-do-i-use-the-signing-tools",children:"here"}),"."]})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Sign message",src:n(40324).Z+"",width:"1848",height:"1170"})}),"\n",(0,i.jsx)(s.h2,{id:"cryptography-in-ethereum-virtual-machine",children:"Cryptography in Ethereum Virtual Machine"}),"\n",(0,i.jsx)(s.p,{children:"Lux nodes support the full Ethereum Virtual Machine (EVM) and precisely\nduplicate all of the cryptographic constructs used in Ethereum. This includes\nthe Keccak hash function and the other mechanisms used for cryptographic\nsecurity in the EVM."}),"\n",(0,i.jsx)(s.h2,{id:"cryptography-in-other-virtual-machines",children:"Cryptography in Other Virtual Machines"}),"\n",(0,i.jsx)(s.p,{children:"Since Lux is an extensible platform, we expect that people will add\nadditional cryptographic primitives to the system over time."})]})}function l(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},40324:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/signed-message-3c65f4ddb692b9024ae605f1b982b13e.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>a});var i=n(67294);const r={},t=i.createContext(r);function a(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);