"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7514],{80879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(85893),r=t(11151);const s={},a="Tutorial: Lux Signature Verification in a dapp",o={id:"deprecated/tutorials-contest/2021/red-dev-sig-verify-tutorial/README",title:"Tutorial: Lux Signature Verification in a dapp",description:"These tutorials were published as a snapshot of when they were written,",source:"@site/docs/deprecated/tutorials-contest/2021/red-dev-sig-verify-tutorial/README.md",sourceDirName:"deprecated/tutorials-contest/2021/red-dev-sig-verify-tutorial",slug:"/deprecated/tutorials-contest/2021/red-dev-sig-verify-tutorial/",permalink:"/deprecated/tutorials-contest/2021/red-dev-sig-verify-tutorial/",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/deprecated/tutorials-contest/2021/red-dev-sig-verify-tutorial/README.md",tags:[],version:"current",frontMatter:{}},h={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Audience",id:"audience",level:2},{value:"Why Are Digital Signatures Important?",id:"why-are-digital-signatures-important",level:2},{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Steps that Need to Be Performed in the Webapp",id:"steps-that-need-to-be-performed-in-the-webapp",level:2},{value:"1. Hash the Message",id:"1-hash-the-message",level:3},{value:"2. Split the Signature",id:"2-split-the-signature",level:3},{value:"3. Recover the Public Key",id:"3-recover-the-public-key",level:3},{value:"Recover the Signer X-Chain Address in Dapp",id:"recover-the-signer-x-chain-address-in-dapp",level:2},{value:"Bech32 Encoding",id:"bech32-encoding",level:3},{value:"Verify X-Chain Address",id:"verify-x-chain-address",level:3},{value:"Validate Signature",id:"validate-signature",level:3},{value:"Finishing Up",id:"finishing-up",level:3},{value:"Resources",id:"resources",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tutorial-lux-signature-verification-in-a-dapp",children:"Tutorial: Lux Signature Verification in a dapp"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"These tutorials were published as a snapshot of when they were written,\nand may contain out-of-date-information.\nFor up-to-date information, please reach out to the owners of these\nprojects."})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This tutorial will show you how to use an Lux C-Chain dapp to verify the\nsignature of a message like this that has been signed using the Lux\nWallet."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"WALLET MESSAGE PIC HERE",src:t(17231).Z+"",width:"507",height:"429"})}),"\n",(0,i.jsxs)(n.p,{children:["We at ",(0,i.jsx)(n.a,{href:"https://www.red.dev",children:"red\xb7dev"})," needed to do this for our current software\nproject under development, ",(0,i.jsx)(n.a,{href:"https://www.rediyeti.com",children:"RediYeti"}),". We have a\nuse-case where we need to verify ownership of an Lux X-Chain address\nbefore the dapp sends funds related to this address. To prevent fraud, the\nverification must take place inside of the dapp."]}),"\n",(0,i.jsx)(n.p,{children:"If you need to implement the same kind of signature verification in your dapp,\nyou will find this tutorial useful. You may also find this tutorial useful if\nyou would like to learn how Lux signatures work and how cryptography is\nimplemented on the X-Chain and on the C-Chain."}),"\n",(0,i.jsxs)(n.p,{children:["We have included code snippets throughout, and you can find the entire project\n",(0,i.jsx)(n.a,{href:"https://github.com/red-dev-inc/sig-verify-tutorial",children:"here"}),". Many steps are\ninvolved, but once you understand how they fit together, you will have a deeper\nunderstanding of how this aspect of Lux\u2014and indeed cryptocurrencies in\ngeneral\u2014works."]}),"\n",(0,i.jsx)(n.h2,{id:"audience",children:"Audience"}),"\n",(0,i.jsxs)(n.p,{children:["To get the most out of this tutorial, you will need to have a basic\nunderstanding of JavaScript, Node, Solidity, and how to develop dapps in\nLux. You should also know the basics of public key cryptography. Lux\nuses Elliptic Curve Cryptography (ECC) as do Bitcoin, Ethereum, and many others.\nThe ECC algorithm used for digital signatures is called ECDSA (Elliptic Curve\nDigital Signature Algorithm). If you do not yet know about these topics, see the\n",(0,i.jsx)(n.strong,{children:"Resources"})," section at the end for links to learn more."]}),"\n",(0,i.jsx)(n.h2,{id:"why-are-digital-signatures-important",children:"Why Are Digital Signatures Important?"}),"\n",(0,i.jsx)(n.p,{children:"A digital signature system allows you to generate your own private/public key\npair. You can then use the private key to generate digital signatures which let\nyou prove that (1) you are the owner of the public key and (2) that the signed\nmessage has not been altered\u2014both without having to reveal the private key. With\ncryptocurrencies, keeping your private key secret is what lets you hold onto\nyour funds, and signing messages is how you transfer funds to others, so digital\nsignatures are indeed foundational to Lux."}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"At the very highest level, here is an overview of the process we will take you\nthrough in this tutorial. First we use a simple webapp to gather the three\ninputs: signing address, message, and signature. We extract the cryptographic\ndata from them that will be passed into the dapp to verify the signature."}),"\n",(0,i.jsxs)(n.p,{children:["The dapp then verifies in two steps. First, it makes sure that all the values\npassed to it are provably related to each other. Then, assuming that they are,\nit uses the\n",(0,i.jsx)(n.a,{href:"https://github.com/tdrerup/elliptic-curve-solidity",children:"elliptic-curve-solidity"}),"\nlibrary, which we have slightly modified to work with Lux, to verify the\nsignature."]}),"\n",(0,i.jsx)(n.p,{children:"The dapp returns its result to the webapp which displays it. Of course, in your\ndapp, you will want to take some more actions in the dapp based on the result,\ndepending on your needs."}),"\n",(0,i.jsxs)(n.p,{children:["(",(0,i.jsx)(n.strong,{children:"Note:"})," If you're already a Solidity coder, you might think that there is an\neasier way to do this using the EVM's built-in function ",(0,i.jsx)(n.strong,{children:"ecrecover"}),". However,\nthere is one small hitch that makes using ",(0,i.jsx)(n.strong,{children:"ecrecover"})," impossible: it uses a\ndifferent hashing method. While Lux uses SHA-256 followed by ripemd160,\nthe EVM uses Keccak-256.)"]}),"\n",(0,i.jsxs)(n.p,{children:["We have set up a ",(0,i.jsx)(n.a,{href:"https://rediyeti.com/lux-sig-verify-demo",children:"demo webpage here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(n.p,{children:"MetaMask needs to be installed on your browser, and you need to be connected to\nthe Lux Testnet test network (for this tutorial). You can add a few lines of\ncodes to check if your browser has MetaMask installed, and if installed, then to\nwhich network you are connected. For instance:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'function checkMetamaskStatus() {\n  if ((window as any).ethereum) {\n    if ((window as any).ethereum.chainId != "0xa869") {\n      result = "Failed: Not connected to Lux Testnet via MetaMask.";\n    } else {\n      //call required function\n    }\n  } else {\n    result = "Failed: MetaMask is not installed.";\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"NodeJS v8.9.4 or later."}),"\n",(0,i.jsxs)(n.li,{children:["LuxJS library, which you can install with ",(0,i.jsx)(n.code,{children:"npm install lux"})]}),"\n",(0,i.jsxs)(n.li,{children:["Elliptic Curve library, which can be installed with ",(0,i.jsx)(n.code,{children:"npm install elliptic"})]}),"\n",(0,i.jsxs)(n.li,{children:["Ethers.js library, which can be installed with ",(0,i.jsx)(n.code,{children:"npm install ethers"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"steps-that-need-to-be-performed-in-the-webapp",children:"Steps that Need to Be Performed in the Webapp"}),"\n",(0,i.jsxs)(n.p,{children:["To verify the signature and retrieve the signer X-Chain address, you first need\nto extract cryptographic data from the message and signature in your webapp,\nwhich will then be passed to the dapp. (The example code uses a ",(0,i.jsx)(n.strong,{children:"Vue"})," webapp,\nbut you could use any framework you like or just Vanilla JavaScript.) These are:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The hashed message"}),"\n",(0,i.jsx)(n.li,{children:"The r, s, and v parameters of the signature"}),"\n",(0,i.jsx)(n.li,{children:"The x and y coordinates of the public key and the 33-byte compressed public key"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We extract them using JavaScript instead of in the dapp because the Solidity EC\nlibrary needs them to be separated, and it is easier to do it in JavaScript.\nThere is no security risk in doing it here off-chain as we can verify in the\ndapp that they are indeed related to each other, returning a signature failure\nif they are not."}),"\n",(0,i.jsx)(n.h3,{id:"1-hash-the-message",children:"1. Hash the Message"}),"\n",(0,i.jsx)(n.p,{children:"First, you will need to hash the original message. Here is the standard way of\nhashing the message based on the Bitcoin Script format and Ethereum format:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"sha256(length(prefix) + prefix + length(message) + message)"})})}),"\n",(0,i.jsxs)(n.p,{children:['The prefix is a so-called "magic prefix" string ',(0,i.jsx)(n.code,{children:"0x1ALux Signed Message:\\n"}),", where ",(0,i.jsx)(n.code,{children:"0x1A"})," is the length of the prefix text and ",(0,i.jsx)(n.code,{children:"length(message)"}),"\nis an integer of the message size. After concatenating these together, hash the\nresult with ",(0,i.jsx)(n.code,{children:"sha256"}),". For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'function hashMessage(message: string) {\n  let mBuf: Buffer = Buffer.from(message, "utf8");\n  let msgSize: Buffer = Buffer.alloc(4);\n  msgSize.writeUInt32BE(mBuf.length, 0);\n  let msgBuf: Buffer = Buffer.from(\n    `0x1ALux Signed Message:\\n${msgSize}${message}`,\n    "utf8"\n  );\n  let hash: Buffer = createHash("sha256").update(msgBuf).digest();\n  let hashex: string = hash.toString("hex");\n  let hashBuff: Buffer = Buffer.from(hashex, "hex");\n  let messageHash: string = "0x" + hashex;\n  return { hashBuff, messageHash };\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2-split-the-signature",children:"2. Split the Signature"}),"\n",(0,i.jsx)(n.p,{children:"Lux Wallet displays the signature in CB58 Encoded form, so first you will\nneed to decode the signature from CB58."}),"\n",(0,i.jsxs)(n.p,{children:["Then, with the decoded signature, you can recover the public key by parsing out\nthe r, s, and v parameters from it. The signature is stored as a 65-byte buffer\n",(0,i.jsx)(n.code,{children:"[R || S || V]"})," where ",(0,i.jsx)(n.code,{children:"V"})," is 0 or 1 to allow public key recoverability."]}),"\n",(0,i.jsxs)(n.p,{children:["Note, while decoding the signature, if the signature has been altered, the\n",(0,i.jsx)(n.code,{children:"cb58Decode"})," function may throw an error, so remember to catch the error.\nAlso, don't forget to import ",(0,i.jsx)(n.code,{children:"bintools"})," from LuxJS library first."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function splitSig(signature: string) {\n    try{\n        let bintools: Bintools = BinTools.getInstance()\n        let decodedSig: Buffer = bintools.cb58Decode(signature)\n        const r: BN = new BN(bintools.copyFrom(decodedSig, 0, 32))\n        const s: BN = new BN(bintools.copyFrom(decodedSig, 32, 64))\n        const v: number = bintools.copyFrom(decodedSig, 64, 65).readUIntBE(0, 1)\n        const sigParam: any = {\n          r: r,\n          s: s,\n          v: v\n        }\n        let rhex: string = '0x' + r.toString('hex')     //converts r to hex\n        let shex: string = '0x' + s.toString('hex')   //converts s to hex\n        let sigHex: Array<string> = [rhex, shex]\n        return {sigParam, sigHex}\n    }\n    catch{\n        result = \"Failed: Invalid signature.\"\n    }\n},\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-recover-the-public-key",children:"3. Recover the Public Key"}),"\n",(0,i.jsx)(n.p,{children:"The public key can be recovered from the hashed message, r, s, and v parameters\nof the signature together with the help of Elliptic Curve JS library. You need\nto extract x and y coordinates of the public key to verify the signature as well\nas the 33-byte compressed public key to later recover the signer's X-Chain\naddress."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'function recover(msgHash: Buffer, sig: any) {\n  let ec: EC = new EC("secp256k1");\n  const pubk: any = ec.recoverPubKey(msgHash, sig, sig.v);\n  const pubkx: string = "0x" + pubk.x.toString("hex");\n  const pubky: string = "0x" + pubk.y.toString("hex");\n  let pubkCord: Array<string> = [pubkx, pubky];\n  let pubkBuff: Buffer = Buffer.from(pubk.encodeCompressed());\n  return { pubkCord, pubkBuff };\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here is the full code for verification, including the call to the dapp function\n",(0,i.jsx)(n.code,{children:"recoverAddress"})," at the end, which we will cover next:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'async function verify() {\n  //Create the provider and contract object to access the dapp functions\n  const provider: any = new ethers.providers.Web3Provider(\n    (window as any).ethereum\n  );\n  const elliptic: any = new ethers.Contract(\n    contractAddress.Contract,\n    ECArtifact.abi,\n    provider\n  );\n  //Extract all the data needed for signature verification\n  let message: any = hashMessage(msg);\n  let sign: any = splitSig(sig);\n  let publicKey: any = recover(message.hashBuff, sign.sigParam);\n  //prefix and hrp for Bech32 encoding\n  let prefix: string = "testnet";\n  let hrp: Array<any> = [];\n  for (var i = 0; i < prefix.length; i++) {\n    hrp[i] = prefix.charCodeAt(i);\n  }\n  //Call recoverAddress function from dapp. xchain and msg are user inputs in webapp\n  const tx: string = await elliptic.recoverAddress(\n    message.messageHash,\n    sign.sigHex,\n    publicKey.pubkCord,\n    publicKey.pubkBuff,\n    msg,\n    xchain,\n    prefix,\n    hrp\n  );\n  result = tx;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"recover-the-signer-x-chain-address-in-dapp",children:"Recover the Signer X-Chain Address in Dapp"}),"\n",(0,i.jsx)(n.p,{children:"In the dapp, receive as a parameter the 33-byte compressed public key to recover the X-Chain Address."}),"\n",(0,i.jsxs)(n.p,{children:["Addresses on the X-Chain use the Bech32 standard with an Lux-specific\nprefix of ",(0,i.jsx)(n.strong,{children:"X-"}),". Then there are four parts to the Bech32 address scheme that\nfollow."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["A human-readable part (HRP). On Lux Mainnet this is ",(0,i.jsx)(n.code,{children:"lux"})," and on Testnet it is ",(0,i.jsx)(n.code,{children:"testnet"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The number ",(0,i.jsx)(n.strong,{children:"1"}),", which separates the HRP from the address and error correction code."]}),"\n",(0,i.jsx)(n.li,{children:"A base-32 encoded string representing the 20 byte address."}),"\n",(0,i.jsx)(n.li,{children:"A 6-character base-32 encoded error correction code."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Like Bitcoin, the addressing scheme of the Lux X-Chain relies on the\n",(0,i.jsx)(n.strong,{children:"secp256k1"})," elliptic curve. Lux follows a similar approach as Bitcoin\nand hashes the ECDSA public key, so the 33-byte compressed public key is hashed\nwith ",(0,i.jsx)(n.strong,{children:"sha256"})," first and then the result is hashed with ",(0,i.jsx)(n.strong,{children:"ripemd160"})," to\nproduce a 20-byte address."]}),"\n",(0,i.jsxs)(n.p,{children:["Next, this 20-byte value is converted to a ",(0,i.jsx)(n.strong,{children:"Bech32"})," address."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"recoverAddress"})," function is called in the dapp from the webapp."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"recoverAddress"})," takes the following parameters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"messageHash\u2014the hashed message"}),"\n",(0,i.jsx)(n.li,{children:"rs\u2014r and s value of the signature"}),"\n",(0,i.jsx)(n.li,{children:"publicKey\u2014x and y coordinates of the public key"}),"\n",(0,i.jsx)(n.li,{children:"pubk\u201433-byte compressed public key"}),"\n",(0,i.jsx)(n.li,{children:"xchain\u2014X-Chain address"}),"\n",(0,i.jsx)(n.li,{children:"prefix\u2014Prefix for Bech32 addressing scheme (LUX or Testnet)"}),"\n",(0,i.jsx)(n.li,{children:"hrp\u2014Array of each unicode character in the prefix"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Then it performs the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Gets the 20-byte address by hashing the 33-byte compressed public key with sha256 followed by ripemd160."}),"\n",(0,i.jsx)(n.li,{children:"Calls the Bech32 functions to convert the 20-byte address to Bech32 address\n(which is the unique part of the X-Chain address)."}),"\n",(0,i.jsx)(n.li,{children:"Verifies that the extracted X-Chain address matches with the X-Chain address from the webapp."}),"\n",(0,i.jsx)(n.li,{children:"If X-Chain Address matches then validates the signature."}),"\n",(0,i.jsx)(n.li,{children:"Returns the result."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Here is the ",(0,i.jsx)(n.code,{children:"recoverAddress"})," function that does all this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",children:'function recoverAddress(bytes32 messageHash, uint[2] memory rs, uint[2] memory publicKey, bytes memory pubk, string memory xchain, string memory prefix, uint[] memory hrp) public view returns(string memory){\n    bool signVerification = false;\n    string memory result;\n    bytes32 sha = sha256(abi.encodePacked(pubk));\n    bytes20 ripesha = ripemd160(abi.encodePacked(sha));\n    uint[] memory rp = new uint[](20);\n    for(uint i=0;i<20;i++) {\n        rp[i] = uint(uint8(ripesha[i]));\n    }\n    bytes memory pre = bytes(prefix);\n    string memory xc = encode(pre, hrp, convert(rp, 8, 5));\n    if(keccak256(abi.encodePacked(xc)) == keccak256(abi.encodePacked(xchain))) {\n        signVerification = validateSignature(messageHash, rs, publicKey);\n        if(signVerification == true) {\n            result = "Signature verified!";\n        }\n        else {\n            result = "Signature verification failed!";\n        }\n    }\n    else {\n        result = string(abi.encodePacked("Failed: Addresses do not match. Address for this signature/message combination should be ", xc));\n    }\n    return result;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Let's take a closer look at its supporting functions and key features."}),"\n",(0,i.jsx)(n.h3,{id:"bech32-encoding",children:"Bech32 Encoding"}),"\n",(0,i.jsxs)(n.p,{children:["We have ported Bech32 to Solidity from the ",(0,i.jsx)(n.a,{href:"https://github.com/bitcoinjs/bech32",children:"Bech32 JavaScript\nlibrary"}),". There are four functions,\n",(0,i.jsx)(n.code,{children:"polymod"}),", ",(0,i.jsx)(n.code,{children:"prefixChk"}),", ",(0,i.jsx)(n.strong,{children:"encode"})," and ",(0,i.jsx)(n.strong,{children:"convert"}),", used to convert to\nBech32 address."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",children:"bytes constant CHARSET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';\n\nfunction polymod(uint256 pre) internal view returns(uint) {\n    uint256 chk = pre >> 25;\n    chk = ((pre & 0x1ffffff) << 5)^(-((chk >> 0) & 1) & 0x3b6a57b2) ^\n    (-((chk >> 1) & 1) & 0x26508e6d) ^\n    (-((chk >> 2) & 1) & 0x1ea119fa) ^\n    (-((chk >> 3) & 1) & 0x3d4233dd) ^\n    (-((chk >> 4) & 1) & 0x2a1462b3);\n    return chk;\n}\n\nfunction prefixCheck(uint[] memory hrp) public view returns (uint) {\n    uint chk = 1;\n    uint c;\n    uint v;\n    for (uint pm = 0; pm < hrp.length; ++pm) {\n        c = hrp[pm];\n        chk = polymod(chk) ^ (c >> 5);\n    }\n    chk = polymod(chk);\n    for (uint pm = 0; pm < hrp.length; ++pm) {\n        v = hrp[pm];\n        chk = polymod(chk) ^ (v & 0x1f);\n    }\n    return chk;\n}\n\nfunction encode(bytes memory prefix, uint[] memory hrp, uint[] memory data) public view returns (string memory) {\n    uint256 chk = prefixCheck(hrp);\n    bytes memory add = '1';\n    bytes memory result = abi.encodePacked(prefix, add);\n    for (uint pm = 0; pm < data.length; ++pm) {\n        uint256 x = data[pm];\n        chk = polymod(chk) ^ x;\n        result = abi.encodePacked(result, CHARSET[x]);\n    }\n    for (uint i = 0; i < 6; ++i) {\n        chk = polymod(chk);\n    }\n    chk ^= 1;\n    for (uint i = 0; i < 6; ++i) {\n        uint256 v = (chk >> ((5 - i) * 5)) & 0x1f;\n        result = abi.encodePacked(result, CHARSET[v]);\n    }\n    bytes memory chainid = 'X-';\n    string memory s = string(abi.encodePacked(chainid, result));\n    return s;\n}\n\nfunction convert(uint[] memory data, uint inBits, uint outBits) public view returns (uint[] memory) {\n    uint value = 0;\n    uint bits = 0;\n    uint maxV = (1 << outBits) - 1;\n    uint[] memory ret = new uint[](32);\n    uint j = 0;\n    for (uint i = 0; i < data.length; ++i) {\n        value = (value << inBits) | data[i];\n        bits += inBits;\n        while (bits >= outBits) {\n            bits -= outBits;\n            ret[j] = (value >> bits) & maxV;\n            j += 1;\n        }\n    }\n    return ret;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"verify-x-chain-address",children:"Verify X-Chain Address"}),"\n",(0,i.jsxs)(n.p,{children:["It is a simple step, but it is very important to check to see if the extracted\nX-Chain address from the public key matches with the X-Chain address that was\npassed from the webapp. Otherwise, you may have a perfectly valid message\nsignature but for a ",(0,i.jsx)(n.em,{children:"different"})," X-Chain address than the webapp requested. Only\nif they match can you proceed to verify the signature. Otherwise, return an\nerror message."]}),"\n",(0,i.jsx)(n.h3,{id:"validate-signature",children:"Validate Signature"}),"\n",(0,i.jsxs)(n.p,{children:["For verifying the signature, we start with this ",(0,i.jsx)(n.a,{href:"https://github.com/tdrerup/elliptic-curve-solidity",children:"Solidity project on Elliptic Curve"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["However, this project uses the ",(0,i.jsx)(n.strong,{children:"secp256r1"})," curve. As Lux uses\n",(0,i.jsx)(n.strong,{children:"secp256k1"})," curve, we need to modify the constant values based on this curve.\n(",(0,i.jsx)(n.strong,{children:"Note:"})," Since modifying cryptographic functions is risky, these are the only\nmodifications we have made.) The constants now look like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",children:"uint constant a = 0;\nuint constant b = 7;\nuint constant gx = 0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798;\nuint constant gy = 0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8;\nuint constant p = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F;\nuint constant n = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The key function we need is ",(0,i.jsx)(n.strong,{children:"validateSignature"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",children:"function validateSignature(bytes32 messageHash, uint[2] memory rs, uint[2] memory publicKey) public view returns (bool)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"validateSignature"})," takes the same first three parameters as ",(0,i.jsx)(n.code,{children:"recoverAddress"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"messageHash\u2014the hashed message"}),"\n",(0,i.jsx)(n.li,{children:"rs\u2014r and s value of the signature"}),"\n",(0,i.jsx)(n.li,{children:"publicKey\u2014x and y coordinates of the public key"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"finishing-up",children:"Finishing Up"}),"\n",(0,i.jsx)(n.p,{children:"After performing these tests, the dapp returns its decision whether the\nsignature is valid or not to the webapp, and the webapp is then responsible for\nshowing the final output to the user. As we mentioned above, in your dapp, you\nwill probably want to take further actions accordingly."}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(n.p,{children:"Here are some resources that can use to teach yourself the subjects you need in\norder to understand this tutorial."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["This is a useful documentation from Lux Partners on cryptographic primitives: ",(0,i.jsx)(n.a,{href:"https://docs.lux.network/build/references/cryptographic-primitives",children:"https://docs.lux.network/build/references/cryptographic-primitives"})]}),"\n",(0,i.jsxs)(n.li,{children:["Here is a great YouTube video by Connor Daly of Lux Partners on how to use\nHardhat to deploy and run your smart contract on Lux network:\n",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=UdzHxdfMKkE&t=1812s",children:"https://www.youtube.com/watch?v=UdzHxdfMKkE&t=1812s"})]}),"\n",(0,i.jsxs)(n.li,{children:["If you want to learn more on how the private/public keys and the wallets\nwork, you may enjoy going through this awesome tutorial by Greg Walker:\n",(0,i.jsx)(n.a,{href:"https://learnmeabitcoin.com/technical/",children:"https://learnmeabitcoin.com/technical/"})]}),"\n",(0,i.jsxs)(n.li,{children:["Andrea Corbellini has done great work explaining Elliptic Curve Cryptography\nin detail in her blog post:\n",(0,i.jsx)(n.a,{href:"https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/",children:"https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/"})]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},17231:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sig-verify-tutoria-00-walletsign-9f94bb3a3aa95dc977022df7bc311f24.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(67294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);