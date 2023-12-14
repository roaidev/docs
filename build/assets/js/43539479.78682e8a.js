"use strict";(self.webpackChunklux_docs=self.webpackChunklux_docs||[]).push([[7941],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(t),c=o,k=h["".concat(l,".").concat(c)]||h[c]||d[c]||r;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8261:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],s={sidebar_position:8},l="Auth API",p={unversionedId:"apis/luxd/apis/auth",id:"apis/luxd/apis/auth",title:"Auth API",description:"When you run a node, you can require that API calls have an authorization token attached. This API manages the creation and revocation of authorization tokens.",source:"@site/docs/apis/luxd/apis/auth.md",sourceDirName:"apis/luxd/apis",slug:"/apis/luxd/apis/auth",permalink:"/apis/luxd/apis/auth",draft:!1,editUrl:"https://github.com/luxdefi/network-docs/edit/main/docs/apis/luxd/apis/auth.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"apis",previous:{title:"Admin API",permalink:"/apis/luxd/apis/admin"},next:{title:"Health API",permalink:"/apis/luxd/apis/health"}},u={},d=[{value:"Format",id:"format",level:2},{value:"Endpoint",id:"endpoint",level:2},{value:"Methods",id:"methods",level:2},{value:"auth.newToken",id:"authnewtoken",level:3},{value:"<strong>Signature</strong>",id:"signature",level:4},{value:"<strong>Example Call</strong>",id:"example-call",level:4},{value:"<strong>Example Response</strong>",id:"example-response",level:4},{value:"auth.revokeToken",id:"authrevoketoken",level:3},{value:"<strong>Signature</strong>",id:"signature-1",level:4},{value:"<strong>Example Call</strong>",id:"example-call-1",level:4},{value:"<strong>Example Response</strong>",id:"example-response-1",level:4},{value:"auth.changePassword",id:"authchangepassword",level:3},{value:"<strong>Signature</strong>",id:"signature-2",level:4},{value:"<strong>Example Call</strong>",id:"example-call-2",level:4},{value:"<strong>Example Response</strong>",id:"example-response-2",level:4}],h={toc:d};function c(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"auth-api"},"Auth API"),(0,r.kt)("p",null,"When you run a node, you can require that API calls have an authorization token attached. This API manages the creation and revocation of authorization tokens."),(0,r.kt)("p",null,"An authorization token provides access to one or more API endpoints. This is is useful for delegating access to a node\u2019s APIs. Tokens expire after 12 hours."),(0,r.kt)("p",null,"An authorization token is provided in the header of an API call. Specifically, the header ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," should have value ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer TOKEN.GOES.HERE")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"TOKEN.GOES.HERE")," is replaced with the token)."),(0,r.kt)("p",null,"This API is only reachable if the node is started with ",(0,r.kt)("a",{parentName:"p",href:"/nodes/maintain/luxd-config-flags"},"config flag"),(0,r.kt)("inlineCode",{parentName:"p"},"--api-auth-required"),". If the node is started without this CLI, API calls do not require authorization tokens, so this API is not reachable. This API never requires an authorization token to be reached."),(0,r.kt)("p",null,"Authorization token creation must be permissioned. If you run your node with ",(0,r.kt)("inlineCode",{parentName:"p"},"--api-auth-required"),", you must also specify the file to read the Auth API's password from, with argument ",(0,r.kt)("inlineCode",{parentName:"p"},"--api-auth-password-file"),". You must provide this password in order to create/revoke authorization tokens."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you run your node with ",(0,r.kt)("inlineCode",{parentName:"p"},"--api-auth-required")," then some tools like MetaMask may not be able to make API calls to your node because they don\u2019t have an auth token."),(0,r.kt)("p",{parentName:"admonition"},"This API set is for a specific node, it is unavailable on the ",(0,r.kt)("a",{parentName:"p",href:"/apis/luxd/public-api-server"},"public server"),".")),(0,r.kt)("h2",{id:"format"},"Format"),(0,r.kt)("p",null,"This API uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"json 2.0")," RPC format. For more information on making JSON RPC calls, see ",(0,r.kt)("a",{parentName:"p",href:"/apis/luxd/apis/issuing-api-calls"},"here.")),(0,r.kt)("h2",{id:"endpoint"},"Endpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"/ext/auth\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"authnewtoken"},"auth.newToken"),(0,r.kt)("p",null,"Creates a new authorization token that grants access to one or more API endpoints."),(0,r.kt)("h4",{id:"signature"},(0,r.kt)("strong",{parentName:"h4"},"Signature")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"auth.newToken(\n    {\n        password: string,\n        endpoints: []string\n    }\n) -> {token: string}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password")," is this node\u2019s authorization token password."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoints")," is a list of endpoints that will be accessible using the generated token. If ",(0,r.kt)("inlineCode",{parentName:"li"},"endpoints")," contains an element ",(0,r.kt)("inlineCode",{parentName:"li"},'"*"'),", the generated token can access any API endpoint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token")," is the authorization token.")),(0,r.kt)("h4",{id:"example-call"},(0,r.kt)("strong",{parentName:"h4"},"Example Call")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST --data \'{\n    "jsonrpc": "2.0",\n    "method": "auth.newToken",\n    "params":{\n        "password":"YOUR PASSWORD GOES HERE",\n        "endpoints":["/ext/bc/X", "/ext/info"]\n    },\n    "id": 1\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/auth\n')),(0,r.kt)("p",null,"This call will generate an authorization token that allows access to API endpoints ",(0,r.kt)("inlineCode",{parentName:"p"},"/ext/bc/X")," (ie the X-Chain) and ",(0,r.kt)("inlineCode",{parentName:"p"},"/ext/info")," (ie the ",(0,r.kt)("a",{parentName:"p",href:"/apis/luxd/apis/info"},"info API"),".)"),(0,r.kt)("h4",{id:"example-response"},(0,r.kt)("strong",{parentName:"h4"},"Example Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbmRwb2ludHMiOlsiKiJdLCJleHAiOjE1OTM0NzU4OTR9.Cqo7TraN_CFN13q3ae4GRJCMgd8ZOlQwBzyC29M6Aps"\n  },\n  "id": 1\n}\n')),(0,r.kt)("p",null,"This authorization token should be included in API calls by giving header ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," value ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbmRwb2ludHMiOlsiKiJdLCJleHAiOjE1OTM0NzU4OTR9.Cqo7TraN_CFN13q3ae4GRJCMgd8ZOlQwBzyC29M6Aps"),"."),(0,r.kt)("p",null,"For example, to call ",(0,r.kt)("a",{parentName:"p",href:"/apis/luxd/apis/info#infopeers"},(0,r.kt)("inlineCode",{parentName:"a"},"info.peers"))," with this token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.peers"\n}\' 127.0.0.1:9650/ext/info \\\n-H \'content-type:application/json;\' \\\n-H \'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbmRwb2ludHMiOlsiKiJdLCJleHAiOjE1OTM0NzU4OTR9.Cqo7TraN_CFN13q3ae4GRJCMgd8ZOlQwBzyC29M6Aps\'\n')),(0,r.kt)("h3",{id:"authrevoketoken"},"auth.revokeToken"),(0,r.kt)("p",null,"Revoke a previously generated token. The given token will no longer grant access to any endpoint. If the token is invalid, does nothing."),(0,r.kt)("h4",{id:"signature-1"},(0,r.kt)("strong",{parentName:"h4"},"Signature")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"auth.revokeToken(\n    {\n        password: string,\n        token: string\n    }\n) -> {}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password")," is this node\u2019s authorization token password."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token")," is the authorization token being revoked.")),(0,r.kt)("h4",{id:"example-call-1"},(0,r.kt)("strong",{parentName:"h4"},"Example Call")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST --data \'{\n    "jsonrpc": "2.0",\n    "method": "auth.revokeToken",\n    "params":{\n        "password":"123",\n        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTMxNzIzMjh9.qZVNhH6AMQ_LpbXnPbTFEL6Vm5EM5FLU-VEKpYBH3k4"\n    },\n    "id": 1\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/auth\n')),(0,r.kt)("h4",{id:"example-response-1"},(0,r.kt)("strong",{parentName:"h4"},"Example Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {},\n  "id": 1\n}\n')),(0,r.kt)("h3",{id:"authchangepassword"},"auth.changePassword"),(0,r.kt)("p",null,"Change this node\u2019s authorization token password. Any authorization tokens created under an old password will become invalid."),(0,r.kt)("h4",{id:"signature-2"},(0,r.kt)("strong",{parentName:"h4"},"Signature")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"auth.changePassword(\n    {\n        oldPassword: string,\n        newPassword: string\n    }\n) -> {}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"oldPassword")," is this node\u2019s current authorization token password."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"newPassword")," is the node\u2019s new authorization token password after this API call. Must be between 1 and 1024 characters.")),(0,r.kt)("h4",{id:"example-call-2"},(0,r.kt)("strong",{parentName:"h4"},"Example Call")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST --data \'{\n    "jsonrpc": "2.0",\n    "method": "auth.changePassword",\n    "params":{\n        "oldPassword":"OLD PASSWORD HERE",\n        "newPassword":"NEW PASSWORD HERE"\n    },\n    "id": 1\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/auth\n')),(0,r.kt)("h4",{id:"example-response-2"},(0,r.kt)("strong",{parentName:"h4"},"Example Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {},\n  "id": 1\n}\n')))}c.isMDXComponent=!0}}]);