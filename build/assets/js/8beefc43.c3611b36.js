"use strict";(self.webpackChunklux_docs=self.webpackChunklux_docs||[]).push([[7869],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,x=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(x,s(s({ref:t},l),{},{components:n})):a.createElement(x,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9130:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={},c="Generate a TxID using LuxJS",u={unversionedId:"apis/luxjs/generate-a-txid-using-luxjs",id:"apis/luxjs/generate-a-txid-using-luxjs",title:"Generate a TxID using LuxJS",description:"Introduction",source:"@site/docs/apis/luxjs/generate-a-txid-using-luxjs.md",sourceDirName:"apis/luxjs",slug:"/apis/luxjs/generate-a-txid-using-luxjs",permalink:"/apis/luxjs/generate-a-txid-using-luxjs",draft:!1,editUrl:"https://github.com/luxdefi/network-docs/edit/main/docs/apis/luxjs/generate-a-txid-using-luxjs.md",tags:[],version:"current",frontMatter:{},sidebar:"apis",previous:{title:"Send an Asset on the X-Chain",permalink:"/apis/luxjs/send-an-asset-on-the-x-chain"},next:{title:"Lux Metrics API",permalink:"/apis/metrics"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Creating a Signed Transaction",id:"creating-a-signed-transaction",level:2},{value:"Generate the TxID",id:"generate-the-txid",level:2},{value:"Confirm TxID is Correct",id:"confirm-txid-is-correct",level:2},{value:"Summary",id:"summary",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"generate-a-txid-using-luxjs"},"Generate a TxID using LuxJS"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A transaction id, or TxID, is a string of numbers and letters which identifies a specific transaction on the blockchain. TxIDs are one of the most core components that developers interact with when working on a blockchain system. They're deterministic and can be generated using ",(0,i.kt)("a",{parentName:"p",href:"/apis/luxd/"},"LuxGo")," or ",(0,i.kt)("a",{parentName:"p",href:"/apis/luxjs/"},"LuxJS"),"."),(0,i.kt)("p",null,"On the Lux network a TxID is a CB58 encoded string which is created by ",(0,i.kt)("inlineCode",{parentName:"p"},"sha256")," hashing the transaction. ",(0,i.kt)("a",{parentName:"p",href:"https://support.lux.network/en/articles/4587395-what-is-cb5"},"CB58")," is a base58 encoding with a checksum. Below are the steps for deterministically generating a TxID using LuxJS."),(0,i.kt)("h2",{id:"creating-a-signed-transaction"},"Creating a Signed Transaction"),(0,i.kt)("p",null,"The script which we're using can be found in the LuxJS example scripts as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/luxdefi/luxjs/blob/master/examples/avm/baseTx-lux.ts"},"example/avm/baseTx-lux.ts"),". First, create a ",(0,i.kt)("a",{parentName:"p",href:"/specs/avm-transaction-serialization#what-base-tx-contains"},"BaseTx"),". We're omitting that part for the sake of brevity. Once you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseTx")," then create an ",(0,i.kt)("inlineCode",{parentName:"p"},"UnsignedTx")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sign")," it. Lastly convert the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")," by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"tx.toBuffer()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Manually build BaseTx via steps in example/avm/baseTx-lux.ts\n// Create an UnsignedTx with the BaseTx\nconst unsignedTx: UnsignedTx = new UnsignedTx(baseTx)\n// Sign the UnsignedTx to create a Tx\nconst tx: Tx = unsignedTx.sign(xKeychain)\n// Convert the Tx to a Buffer\nconst txBuf: Buffer = tx.toBuffer()\n")),(0,i.kt)("h2",{id:"generate-the-txid"},"Generate the TxID"),(0,i.kt)("p",null,"Next, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"sha256")," hash of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")," from the previous step."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// Create sha256 hash of the Tx Buffer\nconst sha256Hash: Buffer = Buffer.from(\n  createHash("sha256").update(txBuf).digest().buffer\n)\n')),(0,i.kt)("p",null,"As mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"#introduction"},"Introduction"),", a TxID is a CB58 encoded string which is created by ",(0,i.kt)("inlineCode",{parentName:"p"},"sha256")," hashing the transaction. To create the TxID now CB58 encode the newly created ",(0,i.kt)("inlineCode",{parentName:"p"},"sha256")," hash."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// cb58 the sha256 hash\nconst generatedTxID: string = bintools.cb58Encode(sha256Hash)\nconsole.log(`Generated TxID: ${generatedTxID}`)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"generatedTxID")," will be a CB58 encoded string similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"eLXEKFFMgGmK7ZLokCFjppdBfGy5hDuRqh5uJVyXXPaRErpAX"),"."),(0,i.kt)("h2",{id:"confirm-txid-is-correct"},"Confirm TxID is Correct"),(0,i.kt)("p",null,"To confirm that the ",(0,i.kt)("inlineCode",{parentName:"p"},"generatedTxID")," is correct issue the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseTx")," to LuxGo and compare the TxID which is returned with the recently created TxID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// get the actual txID from the full node\nconst actualTxID: string = await xchain.issueTx(tx)\nconsole.log(`Success! TxID: ${actualTxID}`)\n\n// Note the generated TxID and the returned TxID match\nGenerated TXID: eLXEKFFMgGmK7ZLokCFjppdBfGy5hDuRqh5uJVyXXPaRErpAX\nReturned TXID: eLXEKFFMgGmK7ZLokCFjppdBfGy5hDuRqh5uJVyXXPaRErpAX\n")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"TxIDs are a core component of any blockchain system. They are used extensively in Lux when creating transactions, issuing new assets and even spinning up Subnets and validators. TxIDs are deterministically created by ",(0,i.kt)("inlineCode",{parentName:"p"},"sha256")," hashing a ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")," of the transaction and then CB58 encoding the hash."))}h.isMDXComponent=!0}}]);