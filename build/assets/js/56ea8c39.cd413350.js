"use strict";(self.webpackChunklux_docs=self.webpackChunklux_docs||[]).push([[5619],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,m=d["".concat(p,".").concat(u)]||d[u]||h[u]||i;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1876:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return h}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),s=["components"],o={},p="Cryptographic Primitives",l={unversionedId:"specs/cryptographic-primitives",id:"specs/cryptographic-primitives",title:"Cryptographic Primitives",description:"Lux uses a variety of cryptographic primitives for its different functions. This file summarizes the type and kind of cryptography used at the network and blockchain layers.",source:"@site/docs/specs/cryptographic-primitives.md",sourceDirName:"specs",slug:"/specs/cryptographic-primitives",permalink:"/specs/cryptographic-primitives",draft:!1,editUrl:"https://github.com/luxdefi/network-docs/edit/main/docs/specs/cryptographic-primitives.md",tags:[],version:"current",frontMatter:{},sidebar:"specs",previous:{title:"Coreth Atomic Transaction Format",permalink:"/specs/coreth-atomic-transaction-serialization"},next:{title:"Network Protocol",permalink:"/specs/network-protocol"}},c={},h=[{value:"Cryptography in the Network Layer",id:"cryptography-in-the-network-layer",level:2},{value:"TLS Certificates",id:"tls-certificates",level:3},{value:"TLS Addresses",id:"tls-addresses",level:3},{value:"Cryptography in the Lux Virtual Machine",id:"cryptography-in-the-lux-virtual-machine",level:2},{value:"Secp256k1 Addresses",id:"secp256k1-addresses",level:3},{value:"Bech32",id:"bech32",level:3},{value:"Secp256k1 Recoverable Signatures",id:"secp256k1-recoverable-signatures",level:3},{value:"Secp256k1 Example",id:"secp256k1-example",level:3},{value:"Signed Messages",id:"signed-messages",level:2},{value:"Gantt Pre-image Specification",id:"gantt-pre-image-specification",level:3},{value:"Example",id:"example",level:3},{value:"Cryptography in Ethereum Virtual Machine",id:"cryptography-in-ethereum-virtual-machine",level:2},{value:"Cryptography in Other Virtual Machines",id:"cryptography-in-other-virtual-machines",level:2}],d={toc:h};function u(e){var t=e.components,o=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cryptographic-primitives"},"Cryptographic Primitives"),(0,i.kt)("p",null,"Lux uses a variety of cryptographic primitives for its different functions. This file summarizes the type and kind of cryptography used at the network and blockchain layers."),(0,i.kt)("h2",{id:"cryptography-in-the-network-layer"},"Cryptography in the Network Layer"),(0,i.kt)("p",null,"Lux uses Transport Layer Security, TLS, to protect node-to-node communications from eavesdroppers. TLS combines the practicality of public-key cryptography with the efficiency of symmetric-key cryptography. This has resulted in TLS becoming the standard for internet communication. Whereas most classical consensus protocols employ public-key cryptography to prove receipt of messages to third parties, the novel Snow","*"," consensus family does not require such proofs. This enables Lux to employ TLS in authenticating stakers and eliminates the need for costly public-key cryptography for signing network messages."),(0,i.kt)("h3",{id:"tls-certificates"},"TLS Certificates"),(0,i.kt)("p",null,"Lux does not rely on any centralized third-parties, and in particular, it does not use certificates issued by third-party authenticators. All certificates used within the network layer to identify endpoints are self-signed, thus creating a self-sovereign identity layer. No third parties are ever involved."),(0,i.kt)("h3",{id:"tls-addresses"},"TLS Addresses"),(0,i.kt)("p",null,"To avoid posting the full TLS certificate to the Platform chain, the certificate is first hashed. For consistency, Lux employs the same hashing mechanism for the TLS certificates as is used in Bitcoin. Namely, the DER representation of the certificate is hashed with sha256, and the result is then hashed with ripemd160 to yield a 20-byte identifier for stakers."),(0,i.kt)("p",null,'This 20-byte identifier is represented by "NodeID-" followed by the data\u2019s ',(0,i.kt)("a",{parentName:"p",href:"https://support.lux.network/en/articles/4587395-what-is-cb58"},"CB58")," encoded string."),(0,i.kt)("h2",{id:"cryptography-in-the-lux-virtual-machine"},"Cryptography in the Lux Virtual Machine"),(0,i.kt)("p",null,"The Lux virtual machine uses elliptic curve cryptography, specifically ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1"),", for its signatures on the blockchain."),(0,i.kt)("p",null,'This 32-byte identifier is represented by "PrivateKey-" followed by the data\u2019s ',(0,i.kt)("a",{parentName:"p",href:"https://support.lux.network/en/articles/4587395-what-is-cb58"},"CB58")," encoded string."),(0,i.kt)("h3",{id:"secp256k1-addresses"},"Secp256k1 Addresses"),(0,i.kt)("p",null,"Lux is not prescriptive about addressing schemes, choosing to instead leave addressing up to each blockchain."),(0,i.kt)("p",null,"The addressing scheme of the X-Chain and the P-Chain relies on secp256k1. Lux follows a similar approach as Bitcoin and hashes the ECDSA public key. The 33-byte compressed representation of the public key is hashed with sha256 ",(0,i.kt)("strong",{parentName:"p"},"once"),". The result is then hashed with ripemd160 to yield a 20-byte address."),(0,i.kt)("p",null,"Lux uses the convention ",(0,i.kt)("inlineCode",{parentName:"p"},"chainID-address")," to specify which chain an address exists on. ",(0,i.kt)("inlineCode",{parentName:"p"},"chainID")," may be replaced with an alias of the chain. When transmitting information through external applications, the CB58 convention is required."),(0,i.kt)("h3",{id:"bech32"},"Bech32"),(0,i.kt)("p",null,"Addresses on the X-Chain and P-Chain use the ",(0,i.kt)("a",{parentName:"p",href:"http://support.lux.network/en/articles/4587392-what-is-bech32"},"Bech32")," standard outlined in ",(0,i.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/BIP_0173"},"BIP 0173"),". There are four parts to a Bech32 address scheme. In order of appearance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A human-readable part (HRP). On mainnet this is ",(0,i.kt)("inlineCode",{parentName:"li"},"lux"),"."),(0,i.kt)("li",{parentName:"ul"},"The number ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", which separates the HRP from the address and error correction code."),(0,i.kt)("li",{parentName:"ul"},"A base-32 encoded string representing the 20 byte address."),(0,i.kt)("li",{parentName:"ul"},"A 6-character base-32 encoded error correction code.")),(0,i.kt)("p",null,"Additionally, an Lux address is prefixed with the alias of the chain it exists on, followed by a dash. For example, X-Chain addresses are prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"X-"),"."),(0,i.kt)("p",null,"The following regular expression matches addresses on the X-Chain, P-Chain and C-Chain for mainnet, fuji and localnet. Note that all valid Lux addresses will match this regular expression, but some strings that are not valid Lux addresses may match this regular expression."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"^([XPC]|[a-km-zA-HJ-NP-Z1-9]{36,72})-[a-zA-Z]{1,83}1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}$\n")),(0,i.kt)("p",null,"Read more about Lux's ",(0,i.kt)("a",{parentName:"p",href:"https://support.lux.network/en/articles/4596397-what-is-an-address"},"addressing scheme"),"."),(0,i.kt)("h3",{id:"secp256k1-recoverable-signatures"},"Secp256k1 Recoverable Signatures"),(0,i.kt)("p",null,"Recoverable signatures are stored as the 65-byte ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"[R || S || V]"))," where ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"V"))," is 0 or 1 to allow quick public key recoverability. ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"S"))," must be in the lower half of the possible range to prevent signature malleability. Before signing a message, the message is hashed using sha256."),(0,i.kt)("h3",{id:"secp256k1-example"},"Secp256k1 Example"),(0,i.kt)("p",null,"Suppose Rick and Morty are setting up a secure communication channel. Morty creates a new public-private key pair."),(0,i.kt)("p",null,"Private Key: ",(0,i.kt)("inlineCode",{parentName:"p"},"0x98cb077f972feb0481f1d894f272c6a1e3c15e272a1658ff716444f465200070")),(0,i.kt)("p",null,"Public Key (33-byte compressed): ",(0,i.kt)("inlineCode",{parentName:"p"},"0x02b33c917f2f6103448d7feb42614037d05928433cb25e78f01a825aa829bb3c27")),(0,i.kt)("p",null,"Because of Rick\u2019s infinite wisdom, he doesn\u2019t trust himself with carrying around Morty\u2019s public key, so he only asks for Morty\u2019s address. Morty follows the instructions, SHA256\u2019s his public key, and then ripemd160\u2019s that result to produce an address."),(0,i.kt)("p",null,"SHA256(Public Key): ",(0,i.kt)("inlineCode",{parentName:"p"},"0x28d7670d71667e93ff586f664937f52828e6290068fa2a37782045bffa7b0d2f")),(0,i.kt)("p",null,"Address: ",(0,i.kt)("inlineCode",{parentName:"p"},"0xe8777f38c88ca153a6fdc25942176d2bf5491b89")),(0,i.kt)("p",null,"Morty is quite confused because a public key should be safe to be public knowledge. Rick belches and explains that hashing the public key protects the private key owner from potential future security flaws in elliptic curve cryptography. In the event cryptography is broken and a private key can be derived from a public key, users can transfer their funds to an address that has never signed a transaction before, preventing their funds from being compromised by an attacker. This enables coin owners to be protected while the cryptography is upgraded across the clients."),(0,i.kt)("p",null,"Later, once Morty has learned more about Rick\u2019s backstory, Morty attempts to send Rick a message. Morty knows that Rick will only read the message if he can verify it was from him, so he signs the message with his private key."),(0,i.kt)("p",null,"Message: ",(0,i.kt)("inlineCode",{parentName:"p"},"0x68656c702049276d207472617070656420696e206120636f6d7075746572")),(0,i.kt)("p",null,"Message Hash: ",(0,i.kt)("inlineCode",{parentName:"p"},"0x912800c29d554fb9cdce579c0abba991165bbbc8bfec9622481d01e0b3e4b7da")),(0,i.kt)("p",null,"Message Signature: ",(0,i.kt)("inlineCode",{parentName:"p"},"0xb52aa0535c5c48268d843bd65395623d2462016325a86f09420c81f142578e121d11bd368b88ca6de4179a007e6abe0e8d0be1a6a4485def8f9e02957d3d72da01")),(0,i.kt)("p",null,"Morty was never seen again."),(0,i.kt)("h2",{id:"signed-messages"},"Signed Messages"),(0,i.kt)("p",null,"A standard for interoperable generic signed messages based on the Bitcoin Script format and Ethereum format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"sign(sha256(length(prefix) + prefix + length(message) + message))\n")),(0,i.kt)("p",null,"The prefix is simply the string ",(0,i.kt)("inlineCode",{parentName:"p"},"\\x1ALux Signed Message:\\n"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"0x1A")," is the length of the prefix text and ",(0,i.kt)("inlineCode",{parentName:"p"},"length(message)")," is an ",(0,i.kt)("a",{parentName:"p",href:"/specs/serialization-primitives#integer"},"integer")," of the message size."),(0,i.kt)("h3",{id:"gantt-pre-image-specification"},"Gantt Pre-image Specification"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"+---------------+-----------+------------------------------+\n| prefix        : [26]byte  |                     26 bytes |\n+---------------+-----------+------------------------------+\n| messageLength : int       |                      4 bytes |\n+---------------+-----------+------------------------------+\n| message       : []byte    |          size(message) bytes |\n+---------------+-----------+------------------------------+\n                            |       26 + 4 + size(message) |\n                            +------------------------------+\n")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,'As an example we will sign the message "Through consensus to the stars"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"// prefix size: 26 bytes\n0x1a\n// prefix: Lux Signed Message:\\n\n0x41 0x76 0x61 0x6c 0x61 0x6e 0x63 0x68 0x65 0x20 0x53 0x69 0x67 0x6e 0x65 0x64 0x20 0x4d 0x65 0x73 0x73 0x61 0x67 0x65 0x3a 0x0a\n// msg size: 30 bytes\n0x00 0x00 0x00 0x1e\n// msg: Through consensus to the stars\n54 68 72 6f 75 67 68 20 63 6f 6e 73 65 6e 73 75 73 20 74 6f 20 74 68 65 20 73 74 61 72 73\n")),(0,i.kt)("p",null,"After hashing with ",(0,i.kt)("inlineCode",{parentName:"p"},"sha256")," and signing the pre-image we return the value ",(0,i.kt)("a",{parentName:"p",href:"https://support.lux.network/en/articles/4587395-what-is-cb58"},"cb58")," encoded: ",(0,i.kt)("inlineCode",{parentName:"p"},"4Eb2zAHF4JjZFJmp4usSokTGqq9mEGwVMY2WZzzCmu657SNFZhndsiS8TvL32n3bexd8emUwiXs8XqKjhqzvoRFvghnvSN"),". Here's an example using the ",(0,i.kt)("a",{parentName:"p",href:"https://wallet.lux.network/wallet/advanced"},"Lux Web Wallet"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign message",src:a(1714).Z,width:"834",height:"940"})),(0,i.kt)("h2",{id:"cryptography-in-ethereum-virtual-machine"},"Cryptography in Ethereum Virtual Machine"),(0,i.kt)("p",null,"Lux nodes support the full Ethereum Virtual Machine (EVM) and precisely duplicate all of the cryptographic constructs used in Ethereum. This includes the Keccak hash function and the other mechanisms used for cryptographic security in the EVM."),(0,i.kt)("h2",{id:"cryptography-in-other-virtual-machines"},"Cryptography in Other Virtual Machines"),(0,i.kt)("p",null,"Since Lux is an extensible platform, we expect that people will add additional cryptographic primitives to the system over time."))}u.isMDXComponent=!0},1714:function(e,t,a){t.Z=a.p+"assets/images/sign-message-4933bc279fd35cf1242abc38b17bbbc7.png"}}]);