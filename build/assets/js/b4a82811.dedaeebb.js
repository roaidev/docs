"use strict";(self.webpackChunklux_docs=self.webpackChunklux_docs||[]).push([[7235],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return h}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(o),h=a,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||r;return o?n.createElement(d,i(i({ref:t},p),{},{components:o})):n.createElement(d,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3657:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],s={description:"Running a validator and staking with Lux provides extremely competitive rewards of between 9% and 11% depending on the length you stake for. Find out more info here.",sidebar_position:4},l="Run an Lux Node with Microsoft Azure",u={unversionedId:"nodes/build/set-up-an-lux-node-with-microsoft-azure",id:"nodes/build/set-up-an-lux-node-with-microsoft-azure",title:"Run an Lux Node with Microsoft Azure",description:"Running a validator and staking with Lux provides extremely competitive rewards of between 9% and 11% depending on the length you stake for. Find out more info here.",source:"@site/docs/nodes/build/set-up-an-lux-node-with-microsoft-azure.md",sourceDirName:"nodes/build",slug:"/nodes/build/set-up-an-lux-node-with-microsoft-azure",permalink:"/nodes/build/set-up-an-lux-node-with-microsoft-azure",draft:!1,editUrl:"https://github.com/luxdefi/network-docs/edit/main/docs/nodes/build/set-up-an-lux-node-with-microsoft-azure.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Running a validator and staking with Lux provides extremely competitive rewards of between 9% and 11% depending on the length you stake for. Find out more info here.",sidebar_position:4},sidebar:"nodes",previous:{title:"Run an Lux Node with Amazon Web Services (AWS)",permalink:"/nodes/build/setting-up-an-lux-node-with-amazon-web-services-aws"},next:{title:"Run an Lux Node with Google Cloud Platform",permalink:"/nodes/build/set-up-an-lux-node-with-google-cloud-platform"}},p={},c=[{value:"Initial Subscription Configuration",id:"initial-subscription-configuration",level:2},{value:"Set up 2 Factor",id:"set-up-2-factor",level:3},{value:"Create a Virtual Machine",id:"create-a-virtual-machine",level:2},{value:"Cheaper than Amazon AWS",id:"cheaper-than-amazon-aws",level:3},{value:"Disks",id:"disks",level:3},{value:"Network Config",id:"network-config",level:3},{value:"Change the Provisioned Disk Size",id:"change-the-provisioned-disk-size",level:2},{value:"Connect to the Lux Node",id:"connect-to-the-lux-node",level:2},{value:"Find your Lux Node Public IP",id:"find-your-lux-node-public-ip",level:3},{value:"Update Linux with Security Patches",id:"update-linux-with-security-patches",level:3},{value:"Set up the Lux Node",id:"set-up-the-lux-node",level:3},{value:"Get Your NodeID",id:"get-your-nodeid",level:3},{value:"Backup Your Staking Keys",id:"backup-your-staking-keys",level:3}],m={toc:c};function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-an-lux-node-with-microsoft-azure"},"Run an Lux Node with Microsoft Azure"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This document was written by a community member, some information may be out of dated.")),(0,r.kt)("p",null,"Running a validator and staking with Lux provides extremely competitive rewards of between 9.69% and 11.54% depending on the length you stake for. The maximum rate is earned by staking for a year, whilst the lowest rate for 14 days. There is also no slashing, so you don\u2019t need to worry about a hardware failure or bug in the client which causes you to lose part or all of your stake. Instead with Lux you only need to currently maintain at least 80% uptime to receive rewards. If you fail to meet this requirement you don\u2019t get slashed, but you don\u2019t receive the rewards. ",(0,r.kt)("strong",{parentName:"p"},"You also do not need to put your private keys onto a node to begin validating on that node.")," Even if someone breaks into your cloud environment and gains access to the node, the worst they can do is turn off the node."),(0,r.kt)("p",null,"Not only does running a validator node enable you to receive rewards in LUX, but later you will also be able to validate other Subnets in the ecosystem as well and receive rewards in the token native to their Subnets."),(0,r.kt)("p",null,"Hardware requirements to run a validator are relatively modest: 8 CPU cores, 16 GB of RAM and 1 TB SSD. It also doesn't use enormous amounts of energy. Lux\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/ava-hub/lux-consensus-the-biggest-breakthrough-since-nakamoto-66e9917fd656"},"revolutionary consensus mechanism")," is able to scale to millions of validators participating in consensus at once, offering unparalleled decentralisation."),(0,r.kt)("p",null,"Currently the minimum amount required to stake to become a validator is 2,000 LUX (which can be reduced over time as price increases). Alternatively, validators can also charge a small fee to enable users to delegate their stake with them to help towards running costs. You can use a calculator ",(0,r.kt)("a",{parentName:"p",href:"https://vscout.io/"},"here")," to see how much rewards you would earn when running a node, compared to delegating."),(0,r.kt)("p",null,"I encourage everyone to run their own validators where possible, but for those that don\u2019t meet the minimum staking requirements and want to delegate I am currently running a node which you can find ",(0,r.kt)("a",{parentName:"p",href:"https://luxscan.io/staking/validator/NodeID-MGrikMRTmooL1j7uawPHjaMS1cXkbewdb"},"here"),"."),(0,r.kt)("p",null,"In this article we will step through the process of configuring a node on Microsoft Azure. This tutorial assumes no prior experience with Microsoft Azure and will go through each step with as few assumptions possible."),(0,r.kt)("p",null,"At the time of this article, spot pricing for a virtual machine with 2 Cores and 8 GB memory costs as little as $0.01060 per hour which works out at about $113.44 a year, ",(0,r.kt)("strong",{parentName:"p"},"a saving of 83.76%! compared to normal pay as you go prices.")," In comparison a virtual machine in AWS with 2 Cores and 4 GB Memory with spot pricing is around $462 a year."),(0,r.kt)("h2",{id:"initial-subscription-configuration"},"Initial Subscription Configuration"),(0,r.kt)("h3",{id:"set-up-2-factor"},"Set up 2 Factor"),(0,r.kt)("p",null,'First you will need a Microsoft Account, if you don\u2019t have one already you will see an option to create one at the following link. If you already have one, make sure to set up 2 Factor authentication to secure your node by going to the following link and then selecting "Two-step verification" and following the steps provided.'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://account.microsoft.com/security"},"https://account.microsoft.com/security")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1135/1*tr3rEcrvI4rEpC7KPYqg6g.png",alt:"Image for post"})),(0,r.kt)("p",null,"Once two factor has been configured log into the Azure portal by going to ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},"https://portal.azure.com"),' and signing in with your Microsoft account. When you login you won\u2019t have a subscription, so we need to create one first. Select "Subscriptions" as highlighted below:'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/648/1*5Jp8oXzczaEND-z9_QZaQA.png",alt:"Image for post"})),(0,r.kt)("p",null,'Then select "+ Add" to add a new subscription'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/374/1*Lw3HklSSC8NDN2ftQEVgYA.png",alt:"Image for post"})),(0,r.kt)("p",null,"If you want to use Spot Instance VM Pricing (which will be considerably cheaper) you can\u2019t use a Free Trial account (and you will receive an error upon validation), so ",(0,r.kt)("strong",{parentName:"p"},"make sure to select Pay-As-You-Go.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/789/1*TO5Uh07OkH_QdwludEgapg.png",alt:"Image for post"})),(0,r.kt)("p",null,"Enter your billing details and confirm identity as part of the sign-up process, when you get to Add technical support select the without support option (unless you want to pay extra for support) and press Next."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/783/1*5KJOATvu3giAr6ygO3rF6Q.png",alt:"Image for post"})),(0,r.kt)("h2",{id:"create-a-virtual-machine"},"Create a Virtual Machine"),(0,r.kt)("p",null,'Now that we have a subscription, we can create the Ubuntu Virtual Machine for our Lux Node. Select the Icon in the top left for the Menu and choose "+ Create a resource".'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/565/1*3nSPwgEM3oIgrIlIo-TS1w.png",alt:"Image for post"})),(0,r.kt)("p",null,"Select Ubuntu Server 18.04 LTS (this will normally be under the popular section or alternatively search for it in the marketplace)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/605/1*Y0iZEZExC36c7FXqPlrPuw.png",alt:"Image for post"})),(0,r.kt)("p",null,"This will take you to the Create a virtual machine page as shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/775/1*cv0z0mt6Uavx5MkiazpiUA.png",alt:"Image for post"})),(0,r.kt)("p",null,"First, enter a virtual machine a name, this can be anything but in my example, I have called it Lux (This will also automatically change the resource group name to match)"),(0,r.kt)("p",null,"Then select a region from the drop-down list. Select one of the recommended ones in a region that you prefer as these tend to be the larger ones with most features enabled and cheaper prices. In this example I have selected North Europe."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/769/1*XOpa22qSdNI-0PW5oIyUhQ.png",alt:"Image for post"})),(0,r.kt)("p",null,"You have the option of using spot pricing to save significant amounts on running costs. Spot instances use a supply-and-demand market price structure. As demand for instances goes up, the price for the spot instance goes up. If there is insufficient capacity, then your VM will be turned off. The chances of this happening are incredibly low though, especially if you select the Capacity only option. Even in the unlikely event it does get turned off temporarily you only need to maintain at least 80% up time to receive the staking rewards and there is no slashing implemented in Lux."),(0,r.kt)("p",null,"Select Yes for Azure Spot instance, select Eviction type to Capacity Only and ",(0,r.kt)("strong",{parentName:"p"},"make sure to set the eviction policy to Stop / Deallocate \u2014 This is very important otherwise the VM will be deleted")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/756/1*zWWiYhloPdnKEXGhZJA3dQ.png",alt:"Image for post"})),(0,r.kt)("p",null,'Choose "Select size" to change the Virtual Machine size, and from the menu select D2s_v4 under the D-Series v4 selection (This size has 2 Cores, 8 GB Memory and enables Premium SSDs). You can use F2s_v2 instances instead, with are 2 Cores, 4 GB Memory and enables Premium SSDs) but the spot price actually works out cheaper for the larger VM currently with spot instance prices. You can use ',(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/pricing/details/virtual-machines/linux/"},"this link")," to view the prices across the different regions."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/957/1*JzebwGho6qDFbzlqCJSN9w.png",alt:"Image for post"})),(0,r.kt)("p",null,'Once you have selected the size of the Virtual Machine, select "View pricing history and compare prices in nearby regions" to see how the spot price has changed over the last 3 months, and whether it\u2019s cheaper to use a nearby region which may have more spare capacity.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/763/1*UQYmhtL8JMhrOkaWk8cloA.png",alt:"Image for post"})),(0,r.kt)("p",null,"At the time of this article, spot pricing for D2s_v4 in North Europe costs $0.07975 per hour, or around $698.61 a year. With spot pricing, the price falls to $0.01295 per hour, which works out at about $113.44 a year, ",(0,r.kt)("strong",{parentName:"p"},"a saving of 83.76%!")),(0,r.kt)("p",null,"There are some regions which are even cheaper, East US for example is $0.01060 per hour or around $92.86 a year!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/677/1*Th5aDwLS6_IoM0LidRbH6g.png",alt:"Image for post"})),(0,r.kt)("p",null,"Below you can see the price history of the VM over the last 3 months for North Europe and regions nearby.",(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/30/1*OJ4monpMy8DhWw_HWycMjg.png?q=20",alt:"Image for post"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/968/1*OJ4monpMy8DhWw_HWycMjg.png",alt:"Image for post"})),(0,r.kt)("h3",{id:"cheaper-than-amazon-aws"},"Cheaper than Amazon AWS"),(0,r.kt)("p",null,"As a comparison a c5.large instance costs $0.085 USD per hour on AWS. This totals ~$745 USD per year. Spot instances can save 62%, bringing that total down to $462."),(0,r.kt)("p",null,"The next step is to change the username for the VM, to align with other Lux tutorials change the username to ubuntu. Otherwise you will need to change several commands later in this article and swap out ubuntu with your new username."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/780/1*CNmFTz056EUmahfi5zG3JQ.png",alt:"Image for post"})),(0,r.kt)("h3",{id:"disks"},"Disks"),(0,r.kt)("p",null,"Select Next: Disks to then configure the disks for the instance. There are 2 choices for disks, either Premium SSD which offer greater performance with a 64 GB disk costs around $10 a month, or there is the standard SSD which offers lower performance and is around $5 a month. You also have to pay $0.002 per 10,000 transaction units (reads / writes and deletes) with the Standard SSD, whereas with Premium SSDs everything is included. Personally, I chose the Premium SSD for greater performance, but also because the disks are likely to be heavily used and so may even work out cheaper in the long run."),(0,r.kt)("p",null,"Select Next: Networking to move onto the network configuration"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/763/1*Oqv9nA8KoSIyq95DuPDN4g.png",alt:"Image for post"})),(0,r.kt)("h3",{id:"network-config"},"Network Config"),(0,r.kt)("p",null,'You want to use a Static IP so that the public IP assigned to the node doesn\u2019t change in the event it stops. Under Public IP select "Create new"'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/774/1*2wsz1_OG7DpLA7jmTJfm0A.png",alt:"Image for post"})),(0,r.kt)("p",null,'Then select "Static" as the Assignment type'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/347/1*y-JbYlRNN3GNNXtZDP-UXQ.png",alt:"Image for post"})),(0,r.kt)("p",null,'Then we need to configure the network security group to control access inbound to the Lux node. Select "Advanced" as the NIC network security group type and select "Create new"'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/763/1*e5Y-mHGkn42A-mJx6o3J0g.png",alt:"Image for post"})),(0,r.kt)("p",null,'For security purposes you want to restrict who is able to remotely connect to your node. To do this you will first want to find out what your existing public IP is. This can be done by going to google and searching for "what\u2019s my ip".'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/450/1*-aV-AdrABCUmludxXUPV6Q.png",alt:"Image for post"})),(0,r.kt)("p",null,"It\u2019s likely that you have been assigned a dynamic public IP for your home, unless you have specifically requested it, and so your assigned public IP may change in the future. It\u2019s still recommended to restrict access to your current IP though, and then in the event your home IP changes and you are no longer able to remotely connect to the VM, you can just update the network security rules with your new public IP so you are able to connect again."),(0,r.kt)("p",null,'NOTE: If you need to change the network security group rules after deployment if your home IP has changed, search for "lux-nsg" and you can modify the rule for SSH and Port 9650 with the new IP. ',(0,r.kt)("strong",{parentName:"p"},"Port 9651 needs to remain open to everyone")," though as that\u2019s how it communicates with other Lux nodes."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/481/1*fR6SrKhTSTQ4cS3PoFrQfQ.png",alt:"Image for post"})),(0,r.kt)("p",null,'Now that you have your public IP select the default allow ssh rule on the left under inbound rules to modify it. Change Source from "Any" to "IP Addresses" and then enter in your Public IP address that you found from google in the Source IP address field. Change the Priority towards the bottom to 100 and then press Save.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1039/1*iLP9gUH4weTfsPcmeUbXLw.png",alt:"Image for post"})),(0,r.kt)("p",null,'Then select "+ Add an inbound rule" to add another rule for RPC access, this should also be restricted to only your IP. Change Source to "IP Addresses" and enter in your public IP returned from google into the Source IP field. This time change the "Destination port ranges" field to 9650 and select "TCP" as the protocol. Change the priority to 110 and give it a name of "Lux_RPC" and press Add.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/914/1*Zg9mHCkU7G5BoinN0EWZAg.png",alt:"Image for post"})),(0,r.kt)("p",null,'Select "+ Add an inbound rule" to add a final rule for the Lux Protocol so that other nodes can communicate with your node. This rule needs to be open to everyone so keep "Source" set to "Any". Change the Destination port range to "9651" and change the protocol to "TCP". Enter a priority of 120 and a name of Lux_Protocol and press Add.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/662/1*tIMEp7O83NIUitWwlcHAxw.png",alt:"Image for post"})),(0,r.kt)("p",null,"The network security group should look like the below (albeit your public IP address will be different) and press OK."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/363/1*7rAR3C_UrX94iXxL4sdV9g.png",alt:"Image for post"})),(0,r.kt)("p",null,'Leave the other settings as default and then press "Review + create" to create the Virtual machine.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/828/1*01yGser7qYjiXDngemqClQ.png",alt:"Image for post"})),(0,r.kt)("p",null,'First it will perform a validation test. If you receive an error here, make sure you selected Pay-As-You-Go subscription model and you are not using the Free Trial subscription as Spot instances are not available. Verify everything looks correct and press "Create"'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/751/1*HyQP7HJCiVQPPiWodRj6aQ.png",alt:"Image for post"})),(0,r.kt)("p",null,'You should then receive a prompt asking you to generate a new key pair to connect your virtual machine. Select "Download private key and create resource" to download the private key to your PC.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/456/1*FCAVco29fcianH4TjxVGzQ.png",alt:"Image for post"})),(0,r.kt)("p",null,'Once your deployment has finished, select "Go to resource"'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/608/1*dXl1RkH6xZvHkdI1d-XsOQ.png",alt:"Image for post"})),(0,r.kt)("h2",{id:"change-the-provisioned-disk-size"},"Change the Provisioned Disk Size"),(0,r.kt)("p",null,"By default, the Ubuntu VM will be provisioned with a 30 GB Premium SSD. You should increase this to 250 GB, to allow for database growth."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/880/1*2uJoRLC586qLEhr1RNNeTg.png",alt:"Image for post"})),(0,r.kt)("p",null,'To change the Disk size, the VM needs to be stopped and deallocated. Select "Stop" and wait for the status to show deallocated. Then select "Disks" on the left.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/976/1*eUCBMgyQtEukvCyi3pm48g.png",alt:"Image for post"})),(0,r.kt)("p",null,"Select the Disk name that\u2019s current provisioned to modify it"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/696/1*faady6O9ZyS2AvKotRFFWA.png",alt:"Image for post"})),(0,r.kt)("p",null,'Select "Size + performance" on the left under settings and change the size to 250 GB and press "Resize".'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/850/1*zZhh27myfdBcEhf3QMhs3A.png",alt:"Image for post"})),(0,r.kt)("p",null,"Doing this now will also extend the partition automatically within ubuntu. To go back to the virtual machine overview page, select Lux in the navigation setting."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/946/1*RGlKMhmlZ1__6u3RjFSDMA.png",alt:"Image for post"})),(0,r.kt)("p",null,"Then start the VM"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/929/1*vgVR-3sRejyBcXrMn65v5g.png",alt:"Image for post"})),(0,r.kt)("h2",{id:"connect-to-the-lux-node"},"Connect to the Lux Node"),(0,r.kt)("p",null,"The following instructions show how to connect to the Virtual Machine from a Windows 10 machine. For instructions on how to connect from a ubuntu machine see the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/build/setting-up-an-lux-node-with-amazon-web-services-aws"},"AWS tutorial"),"."),(0,r.kt)("p",null,'On your local PC, create a folder on the root of the C: drive called Lux and then move the Lux_key.pem file you downloaded before into the folder. Then right click the file and select Properties. Go to the security tab and select "Advanced" at the bottom'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/719/1*KlzhuVcn5Vt0imxDPblBtA.png",alt:"Image for post"})),(0,r.kt)("p",null,'Select "Disable inheritance" and then "Remove all inherited permissions from this object" to remove all existing permissions on that file.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/740/1*VxuomVeWbhYquRynA8hP4Q.png",alt:"Image for post"})),(0,r.kt)("p",null,'Then select "Add" to add a new permission and choose "Select a principal" at the top. From the pop-up box enter in your user account that you use to log into your machine. In this example I log on with a local user called Seq, you may have a Microsoft account that you use to log in, so use whatever account you login to your PC with and press "Check Names" and it should underline it to verify and press OK.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/758/1*sMxk7zaRHVTqA0UyHTKwzQ.png",alt:"Image for post"})),(0,r.kt)("p",null,'Then from the permissions section make sure only "Read & Execute" and "Read" are selected and press OK.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/903/1*5Fkh3FJQuNeWQyEd0irjtA.png",alt:"Image for post"})),(0,r.kt)("p",null,"It should look something like the below, except with a different PC name / user account. This just means the key file can\u2019t be modified or accessed by any other accounts on this machine for security purposes so they can\u2019t access your Lux Node."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/736/1*F-YK0xdB92cIweCQFGGRvA.png",alt:"Image for post"})),(0,r.kt)("h3",{id:"find-your-lux-node-public-ip"},"Find your Lux Node Public IP"),(0,r.kt)("p",null,"From the Azure Portal make a note of your static public IP address that has been assigned to your node."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1082/1*5cf1dAAO0G7Dzu2s0Xxh-Q.png",alt:"Image for post"})),(0,r.kt)("p",null,'To log onto the Lux node, open command prompt by searching for "cmd" and selecting "Command Prompt" on your Windows 10 machine.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/384/1*NlYlg9of5O9fQtiroqMFZw.png",alt:"Image for post"})),(0,r.kt)("p",null,"Then use the following command and replace the EnterYourAzureIPHere with the static IP address shown on the Azure portal."),(0,r.kt)("p",null,"ssh -i C:\\Lux\\Lux_key.pem ubuntu@EnterYourAzureIPHere"),(0,r.kt)("p",null,"for my example its:"),(0,r.kt)("p",null,"ssh -i C:\\Lux\\Lux_key.pem ",(0,r.kt)("a",{parentName:"p",href:"mailto:ubuntu@13.74.10.81"},"ubuntu@13.74.10.81")),(0,r.kt)("p",null,"The first time you connect you will receive a prompt asking to continue, enter yes."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/651/1*Hp1AF-03TbO-eRUvuKvZcA.png",alt:"Image for post"})),(0,r.kt)("p",null,"You should now be connected to your Node."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/967/1*Kc3rna-3SQV3tnMMLkMi6A.png",alt:"Image for post"})),(0,r.kt)("p",null,"The following section is taken from Colin\u2019s excellent tutorial for ",(0,r.kt)("a",{parentName:"p",href:"/nodes/build/setting-up-an-lux-node-with-amazon-web-services-aws"},"configuring an Lux Node on Amazon\u2019s AWS"),"."),(0,r.kt)("h3",{id:"update-linux-with-security-patches"},"Update Linux with Security Patches"),(0,r.kt)("p",null,"Now that we are on our node, it\u2019s a good idea to update it to the latest packages. To do this, run the following commands, one-at-a-time, in order:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"sudo apt update\nsudo apt upgrade -y\nsudo reboot\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/793/1*_2UmPN6vabjGe6aihX9KqA.png",alt:"Image for post"})),(0,r.kt)("p",null,"This will make our instance up to date with the latest security patches for our operating system. This will also reboot the node. We\u2019ll give the node a minute or two to boot back up, then log in again, same as before."),(0,r.kt)("h3",{id:"set-up-the-lux-node"},"Set up the Lux Node"),(0,r.kt)("p",null,"Now we\u2019ll need to set up our Lux node. To do this, follow the ",(0,r.kt)("a",{parentName:"p",href:"/nodes/build/set-up-node-with-installer"},"Set Up Lux Node With Installer"),' tutorial which automates the installation process. You will need the "IPv4 Public IP" copied from the Azure Portal we set up earlier.'),(0,r.kt)("p",null,"Once the installation is complete, our node should now be bootstrapping! We can run the following command to take a peek at the latest status of the luxd node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"sudo systemctl status luxd\n")),(0,r.kt)("p",null,'To check the status of the bootstrap, we\u2019ll need to make a request to the local RPC using "curl". This request is as follows:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.isBootstrapped",\n    "params": {\n        "chain":"X"\n    }\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n')),(0,r.kt)("p",null,"The node can take some time (upward of an hour at this moment writing) to bootstrap. Bootstrapping means that the node downloads and verifies the history of the chains. Give this some time. Once the node is finished bootstrapping, the response will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "isBootstrapped": true\n    },\n    "id": 1\n}\n')),(0,r.kt)("p",null,'We can always use "sudo systemctl status luxd" to peek at the latest status of our service as before, as well.'),(0,r.kt)("h3",{id:"get-your-nodeid"},"Get Your NodeID"),(0,r.kt)("p",null,"We absolutely must get our NodeID if we plan to do any validating on this node. This is retrieved from the RPC as well. We call the following curl command to get our NodeID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getNodeID"\n}\' -H \'content-type:application/json;\' 127.0.0.1:9650/ext/info\n')),(0,r.kt)("p",null,"If all is well, the response should look something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{"jsonrpc":"2.0","result":{"nodeID":"NodeID-Lve2PzuCvXZrqn8Stqwy9vWZux6VyGUCR"},"id":1}\n')),(0,r.kt)("p",null,'That portion that says, "NodeID-Lve2PzuCvXZrqn8Stqwy9vWZux6VyGUCR" is our NodeID, the entire thing. Copy that and keep that in our notes. There\u2019s nothing confidential or secure about this value, but it\u2019s an absolute must for when we submit this node to be a validator.'),(0,r.kt)("h3",{id:"backup-your-staking-keys"},"Backup Your Staking Keys"),(0,r.kt)("p",null,"The last thing that should be done is backing up our staking keys in the untimely event that our instance is corrupted or terminated. It\u2019s just good practice for us to keep these keys. To back them up, we use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"scp -i C:\\Lux\\lux_key.pem -r ubuntu@EnterYourAzureIPHere:/home/ubuntu/.luxd/staking C:\\Lux\n")),(0,r.kt)("p",null,'As before, we\u2019ll need to replace "EnterYourAzureIPHere" with the appropriate value that we retrieved. This backs up our staking key and staking certificate into the C:\\Lux folder we created before.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/358/1*nqsjJAv2fkcLKPri5idN-Q.png",alt:"Image for post"})))}h.isMDXComponent=!0}}]);