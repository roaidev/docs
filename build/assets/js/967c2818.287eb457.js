"use strict";(self.webpackChunklux_docs=self.webpackChunklux_docs||[]).push([[2476],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3977:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],l={sidebar_position:13},i="Keystore API",p={unversionedId:"apis/luxd/apis/keystore",id:"apis/luxd/apis/keystore",title:"Keystore API",description:"Because the node operator has access to your plaintext password, you should only create a keystore user on a node that you operate. If that node is breached, you could lose all your tokens. Keystore APIs are not recommended for use on Mainnet.",source:"@site/docs/apis/luxd/apis/keystore.md",sourceDirName:"apis/luxd/apis",slug:"/apis/luxd/apis/keystore",permalink:"/apis/luxd/apis/keystore",draft:!1,editUrl:"https://github.com/luxdefi/network-docs/edit/main/docs/apis/luxd/apis/keystore.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"apis",previous:{title:"IPC API",permalink:"/apis/luxd/apis/ipc"},next:{title:"Metrics API",permalink:"/apis/luxd/apis/metrics"}},u={},d=[{value:"Format",id:"format",level:2},{value:"Endpoint",id:"endpoint",level:2},{value:"Methods",id:"methods",level:2},{value:"keystore.createUser",id:"keystorecreateuser",level:3},{value:"<strong>Signature</strong>",id:"signature",level:4},{value:"<strong>Example Call</strong>",id:"example-call",level:4},{value:"<strong>Example Response</strong>",id:"example-response",level:4},{value:"keystore.deleteUser",id:"keystoredeleteuser",level:3},{value:"<strong>Signature</strong>",id:"signature-1",level:4},{value:"<strong>Example Call</strong>",id:"example-call-1",level:4},{value:"<strong>Example Response</strong>",id:"example-response-1",level:4},{value:"keystore.exportUser",id:"keystoreexportuser",level:3},{value:"<strong>Signature</strong>",id:"signature-2",level:4},{value:"<strong>Example Call</strong>",id:"example-call-2",level:4},{value:"<strong>Example Response</strong>",id:"example-response-2",level:4},{value:"keystore.importUser",id:"keystoreimportuser",level:3},{value:"<strong>Signature</strong>",id:"signature-3",level:4},{value:"<strong>Example Call</strong>",id:"example-call-3",level:4},{value:"<strong>Example Response</strong>",id:"example-response-3",level:4},{value:"keystore.listUsers",id:"keystorelistusers",level:3},{value:"<strong>Signature</strong>",id:"signature-4",level:4},{value:"<strong>Example Call</strong>",id:"example-call-4",level:4},{value:"<strong>Example Response</strong>",id:"example-response-4",level:4}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"keystore-api"},"Keystore API"),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Because the node operator has access to your plaintext password, you should only create a keystore user on a node that you operate. If that node is breached, you could lose all your tokens. Keystore APIs are not recommended for use on Mainnet.")),(0,s.kt)("p",null,"Every node has a built-in keystore. Clients create users on the keystore, which act as identities to be used when interacting with blockchains. A keystore exists at the node level, so if you create a user on a node it exists ",(0,s.kt)("em",{parentName:"p"},"only")," on that node. However, users may be imported and exported using this API."),(0,s.kt)("p",null,"For validation and cross-chain transfer on the Mainnet, you should issue transactions through ",(0,s.kt)("a",{parentName:"p",href:"/apis/luxjs/"},"LuxJS"),". That way control keys for your funds won't be stored on the node, which significantly lowers the risk should a computer running a node be compromised. See following docs for details:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/quickstart/cross-chain-transfers"},"Transfer LUX Tokens Between Chains")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/nodes/validate/add-a-validator"},"Add a Node to the Validator Set"))),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"This API set is for a specific node, it is unavailable on the ",(0,s.kt)("a",{parentName:"p",href:"/apis/luxd/public-api-server"},"public server"),".")),(0,s.kt)("h2",{id:"format"},"Format"),(0,s.kt)("p",null,"This API uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"json 2.0")," API format. For more information on making JSON RPC calls, see ",(0,s.kt)("a",{parentName:"p",href:"/apis/luxd/apis/issuing-api-calls"},"here"),"."),(0,s.kt)("h2",{id:"endpoint"},"Endpoint"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"/ext/keystore\n")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"keystorecreateuser"},"keystore.createUser"),(0,s.kt)("p",null,"Create a new user with the specified username and password."),(0,s.kt)("h4",{id:"signature"},(0,s.kt)("strong",{parentName:"h4"},"Signature")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"keystore.createUser(\n    {\n        username:string,\n        password:string\n    }\n) -> {}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"username")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"password")," can be at most 1024 characters."),(0,s.kt)("li",{parentName:"ul"},"Your request will be rejected if ",(0,s.kt)("inlineCode",{parentName:"li"},"password")," is too weak. ",(0,s.kt)("inlineCode",{parentName:"li"},"password")," should be at least 8 characters and contain upper and lower case letters as well as numbers and symbols.")),(0,s.kt)("h4",{id:"example-call"},(0,s.kt)("strong",{parentName:"h4"},"Example Call")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"keystore.createUser",\n    "params" :{\n        "username":"myUsername",\n        "password":"myPassword"\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/keystore\n')),(0,s.kt)("h4",{id:"example-response"},(0,s.kt)("strong",{parentName:"h4"},"Example Response")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {}\n}\n')),(0,s.kt)("h3",{id:"keystoredeleteuser"},"keystore.deleteUser"),(0,s.kt)("p",null,"Delete a user."),(0,s.kt)("h4",{id:"signature-1"},(0,s.kt)("strong",{parentName:"h4"},"Signature")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"keystore.deleteUser({username: string, password:string}) -> {}\n")),(0,s.kt)("h4",{id:"example-call-1"},(0,s.kt)("strong",{parentName:"h4"},"Example Call")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"keystore.deleteUser",\n    "params" : {\n        "username":"myUsername",\n        "password":"myPassword"\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/keystore\n')),(0,s.kt)("h4",{id:"example-response-1"},(0,s.kt)("strong",{parentName:"h4"},"Example Response")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {}\n}\n')),(0,s.kt)("h3",{id:"keystoreexportuser"},"keystore.exportUser"),(0,s.kt)("p",null,"Export a user. The user can be imported to another node with ",(0,s.kt)("a",{parentName:"p",href:"/apis/luxd/apis/keystore#keystoreimportuser"},(0,s.kt)("inlineCode",{parentName:"a"},"keystore.importUser")),". The user\u2019s password remains encrypted."),(0,s.kt)("h4",{id:"signature-2"},(0,s.kt)("strong",{parentName:"h4"},"Signature")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"keystore.exportUser(\n    {\n        username:string,\n        password:string,\n        encoding:string //optional\n    }\n) -> {\n    user:string,\n    encoding:string\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"encoding")," specifies the format of the string encoding user data. Can only be ",(0,s.kt)("inlineCode",{parentName:"p"},"hex")," when a value is provided."),(0,s.kt)("h4",{id:"example-call-2"},(0,s.kt)("strong",{parentName:"h4"},"Example Call")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"keystore.exportUser",\n    "params" :{\n        "username":"myUsername",\n        "password":"myPassword"\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/keystore\n')),(0,s.kt)("h4",{id:"example-response-2"},(0,s.kt)("strong",{parentName:"h4"},"Example Response")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "user": "7655a29df6fc2747b0874e1148b423b954a25fcdb1f170d0ec8eb196430f7001942ce55b02a83b1faf50a674b1e55bfc00000000",\n    "encoding": "hex"\n  }\n}\n')),(0,s.kt)("h3",{id:"keystoreimportuser"},"keystore.importUser"),(0,s.kt)("p",null,"Import a user. ",(0,s.kt)("inlineCode",{parentName:"p"},"password")," must match the user\u2019s password. ",(0,s.kt)("inlineCode",{parentName:"p"},"username")," doesn\u2019t have to match the username ",(0,s.kt)("inlineCode",{parentName:"p"},"user")," had when it was exported."),(0,s.kt)("h4",{id:"signature-3"},(0,s.kt)("strong",{parentName:"h4"},"Signature")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"keystore.importUser(\n    {\n        username:string,\n        password:string,\n        user:string,\n        encoding:string //optional\n    }\n) -> {}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"encoding")," specifies the format of the string encoding user data. Can only be ",(0,s.kt)("inlineCode",{parentName:"p"},"hex")," when a value is provided."),(0,s.kt)("h4",{id:"example-call-3"},(0,s.kt)("strong",{parentName:"h4"},"Example Call")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"keystore.importUser",\n    "params" :{\n        "username":"myUsername",\n        "password":"myPassword",\n        "user"    :"0x7655a29df6fc2747b0874e1148b423b954a25fcdb1f170d0ec8eb196430f7001942ce55b02a83b1faf50a674b1e55bfc000000008cf2d869"\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/keystore\n')),(0,s.kt)("h4",{id:"example-response-3"},(0,s.kt)("strong",{parentName:"h4"},"Example Response")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {}\n}\n')),(0,s.kt)("h3",{id:"keystorelistusers"},"keystore.listUsers"),(0,s.kt)("p",null,"List the users in this keystore."),(0,s.kt)("h4",{id:"signature-4"},(0,s.kt)("strong",{parentName:"h4"},"Signature")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"keystore.ListUsers() -> {users:[]string}\n")),(0,s.kt)("h4",{id:"example-call-4"},(0,s.kt)("strong",{parentName:"h4"},"Example Call")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"keystore.listUsers"\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/keystore\n')),(0,s.kt)("h4",{id:"example-response-4"},(0,s.kt)("strong",{parentName:"h4"},"Example Response")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "users": ["myUsername"]\n  }\n}\n')))}m.isMDXComponent=!0}}]);