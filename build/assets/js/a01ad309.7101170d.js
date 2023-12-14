"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7861],{50909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(85893),o=t(11151);const a={tags:["Nodes"],description:"This tutorial demonstrates how to set up infrastructure to monitor an instance of Luxd.",sidebar_label:"Monitoring",pagination_label:"Monitor an Lux Node",sidebar_position:2},i="Monitor an Lux Node",r={id:"nodes/maintain/setting-up-node-monitoring",title:"Monitor an Lux Node",description:"This tutorial demonstrates how to set up infrastructure to monitor an instance of Luxd.",source:"@site/docs/nodes/maintain/setting-up-node-monitoring.md",sourceDirName:"nodes/maintain",slug:"/nodes/maintain/setting-up-node-monitoring",permalink:"/nodes/maintain/setting-up-node-monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/nodes/maintain/setting-up-node-monitoring.md",tags:[{label:"Nodes",permalink:"/tags/nodes"}],version:"current",sidebarPosition:2,frontMatter:{tags:["Nodes"],description:"This tutorial demonstrates how to set up infrastructure to monitor an instance of Luxd.",sidebar_label:"Monitoring",pagination_label:"Monitor an Lux Node",sidebar_position:2},sidebar:"nodes",previous:{title:"Node Backup and Restore",permalink:"/nodes/maintain/node-backup-and-restore"},next:{title:"Upgrade Your Luxd Node",permalink:"/nodes/maintain/upgrade-your-luxd-node"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Caveat: Security",id:"caveat-security",level:3},{value:"Monitoring Installer Script",id:"monitoring-installer-script",level:2},{value:"Step 1: Set up Prometheus <a></a>",id:"step-1-set-up-prometheus-",level:2},{value:"Step 2: Install Grafana <a></a>",id:"step-2-install-grafana-",level:2},{value:"Step 3: Set up <code>node_exporter</code> <a></a>",id:"step-3-set-up-node_exporter-",level:2},{value:"Step 4: Dashboards <a></a>",id:"step-4-dashboards-",level:2},{value:"Step 5: Additional Dashboards (Optional)",id:"step-5-additional-dashboards-optional",level:2},{value:"Updating",id:"updating",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"monitor-an-lux-node",children:"Monitor an Lux Node"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["This tutorial demonstrates how to set up infrastructure to monitor an instance of\n",(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/luxd",children:"Luxd"}),". We will use:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://prometheus.io/",children:"Prometheus"})," to gather and store data"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/prometheus/node_exporter",children:(0,s.jsx)(n.code,{children:"node_exporter"})})," to get information about the machine,"]}),"\n",(0,s.jsxs)(n.li,{children:["Luxd\u2019s ",(0,s.jsx)(n.a,{href:"/reference/luxd/metrics-api",children:"Metrics API"})," to get information about the node"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://grafana.com/",children:"Grafana"})," to visualize data on a dashboard."]}),"\n",(0,s.jsxs)(n.li,{children:["A set of pre-made ",(0,s.jsx)(n.a,{href:"https://github.com/luxdefi/monitoring/tree/main/grafana/dashboards",children:"Lux dashboards"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A running Luxd node"}),"\n",(0,s.jsx)(n.li,{children:"Shell access to the machine running the node"}),"\n",(0,s.jsx)(n.li,{children:"Administrator privileges on the machine"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This tutorial assumes you have Ubuntu 20.04 running on your node. Other Linux\nflavors that use ",(0,s.jsx)(n.code,{children:"systemd"})," for running services and ",(0,s.jsx)(n.code,{children:"apt-get"})," for package\nmanagement might work but have not been tested. Community member has reported it\nworks on Debian 10, might work on other Debian releases as well."]}),"\n",(0,s.jsx)(n.h3,{id:"caveat-security",children:"Caveat: Security"}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["The system as described here ",(0,s.jsx)(n.strong,{children:"should not"})," be opened to the public internet.\nNeither Prometheus nor Grafana as shown here is hardened against unauthorized\naccess. Make sure that both of them are accessible only over a secured proxy,\nlocal network, or VPN. Setting that up is beyond the scope of this tutorial, but\nexercise caution. Bad security practices could lead to attackers gaining control\nover your node! It is your responsibility to follow proper security practices."]})}),"\n",(0,s.jsx)(n.h2,{id:"monitoring-installer-script",children:"Monitoring Installer Script"}),"\n",(0,s.jsx)(n.p,{children:"In order to make node monitoring easier to install, we have made a script that\ndoes most of the work for you. To download and run the script, log into the\nmachine the node runs on with a user that has administrator privileges and enter\nthe following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget -nd -m https://raw.githubusercontent.com/luxdefi/monitoring/main/grafana/monitoring-installer.sh ;\\\nchmod 755 monitoring-installer.sh;\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will download the script and make it executable."}),"\n",(0,s.jsx)(n.p,{children:"Script itself is run multiple times with different arguments, each installing a\ndifferent tool or part of the environment. To make sure it downloaded and set up\ncorrectly, begin by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./monitoring-installer.sh --help\n"})}),"\n",(0,s.jsx)(n.p,{children:"It should display:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Usage: ./monitoring-installer.sh [--1|--2|--3|--4|--5|--help]\n\nOptions:\n--help   Shows this message\n--1      Step 1: Installs Prometheus\n--2      Step 2: Installs Grafana\n--3      Step 3: Installs node_exporter\n--4      Step 4: Installs Luxd Grafana dashboards\n--5      Step 5: (Optional) Installs additional dashboards\n\nRun without any options, script will download and install latest version of Luxd dashboards.\n"})}),"\n",(0,s.jsx)(n.p,{children:"Let's get to it."}),"\n",(0,s.jsxs)(n.h2,{id:"step-1-set-up-prometheus-",children:["Step 1: Set up Prometheus ",(0,s.jsx)("a",{id:"prometheus"})]}),"\n",(0,s.jsx)(n.p,{children:"Run the script to execute the first step:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./monitoring-installer.sh --1\n"})}),"\n",(0,s.jsx)(n.p,{children:"It should produce output something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'Luxd monitoring installer\n--------------------------------\nSTEP 1: Installing Prometheus\n\nChecking environment...\nFound arm64 architecture...\nPrometheus install archive found:\nhttps://github.com/prometheus/prometheus/releases/download/v2.31.0/prometheus-2.31.0.linux-arm64.tar.gz\nAttempting to download:\nhttps://github.com/prometheus/prometheus/releases/download/v2.31.0/prometheus-2.31.0.linux-arm64.tar.gz\nprometheus.tar.gz                           100%[=========================================================================================>]  65.11M   123MB/s    in 0.5s\n2021-11-05 14:16:11 URL:https://github-releases.githubusercontent.com/6838921/a215b0e7-df1f-402b-9541-a3ec9d431f76?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20211105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211105T141610Z&X-Amz-Expires=300&X-Amz-Signature=72a8ae4c6b5cea962bb9cad242cb4478082594b484d6a519de58b8241b319d94&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=6838921&response-content-disposition=attachment%3B%20filename%3Dprometheus-2.31.0.linux-arm64.tar.gz&response-content-type=application%2Foctet-stream [68274531/68274531] -> "prometheus.tar.gz" [1]\n...\n'})}),"\n",(0,s.jsx)(n.p,{children:"You may be prompted to confirm additional package installs, do that if asked.\nScript run should end with instructions on how to check that Prometheus\ninstalled correctly. Let's do that, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status prometheus\n"})}),"\n",(0,s.jsx)(n.p,{children:"It should output something like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'\u25cf prometheus.service - Prometheus\nLoaded: loaded (/etc/systemd/system/prometheus.service; enabled; vendor preset: enabled)\nActive: active (running) since Fri 2021-11-12 11:38:32 UTC; 17min ago\nDocs: https://prometheus.io/docs/introduction/overview/\nMain PID: 548 (prometheus)\nTasks: 10 (limit: 9300)\nMemory: 95.6M\nCGroup: /system.slice/prometheus.service\n\u2514\u2500548 /usr/local/bin/prometheus --config.file=/etc/prometheus/prometheus.yml --storage.tsdb.path=/var/lib/prometheus --web.console.templates=/etc/prometheus/con>\n\nNov 12 11:38:33 ip-172-31-36-200 prometheus[548]: ts=2021-11-12T11:38:33.644Z caller=head.go:590 level=info component=tsdb msg="WAL segment loaded" segment=81 maxSegment=84\nNov 12 11:38:33 ip-172-31-36-200 prometheus[548]: ts=2021-11-12T11:38:33.773Z caller=head.go:590 level=info component=tsdb msg="WAL segment loaded" segment=82 maxSegment=84\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Note the ",(0,s.jsx)(n.code,{children:"active (running)"})," status (press ",(0,s.jsx)(n.code,{children:"q"})," to exit). You can also check\nPrometheus web interface, available on ",(0,s.jsx)(n.code,{children:"http://your-node-host-ip:9090/"})]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["You may need to do ",(0,s.jsx)(n.code,{children:"sudo ufw allow 9090/tcp"})," if the firewall is on, and/or\nadjust the security settings to allow connections to port 9090 if the node is\nrunning on a cloud instance. For AWS, you can look it up\n",(0,s.jsx)(n.a,{href:"/nodes/run/third-party/aws-node#f8df",children:"here"}),".\nIf on public internet, make sure to only allow your IP to connect!"]})}),"\n",(0,s.jsx)(n.p,{children:"If everything is OK, let's move on."}),"\n",(0,s.jsxs)(n.h2,{id:"step-2-install-grafana-",children:["Step 2: Install Grafana ",(0,s.jsx)("a",{id:"grafana"})]}),"\n",(0,s.jsx)(n.p,{children:"Run the script to execute the second step:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./monitoring-installer.sh --2\n"})}),"\n",(0,s.jsx)(n.p,{children:"It should produce output something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Luxd monitoring installer\n--------------------------------\nSTEP 2: Installing Grafana\n\nOK\ndeb https://packages.grafana.com/oss/deb stable main\nHit:1 http://us-east-2.ec2.ports.ubuntu.com/ubuntu-ports focal InRelease\nGet:2 http://us-east-2.ec2.ports.ubuntu.com/ubuntu-ports focal-updates InRelease [114 kB]\nGet:3 http://us-east-2.ec2.ports.ubuntu.com/ubuntu-ports focal-backports InRelease [101 kB]\nHit:4 http://ppa.launchpad.net/longsleep/golang-backports/ubuntu focal InRelease\nGet:5 http://ports.ubuntu.com/ubuntu-ports focal-security InRelease [114 kB]\nGet:6 https://packages.grafana.com/oss/deb stable InRelease [12.1 kB]\n...\n"})}),"\n",(0,s.jsx)(n.p,{children:"To make sure it\u2019s running properly:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"sudo systemctl status grafana-server\n"})}),"\n",(0,s.jsxs)(n.p,{children:["which should again show Grafana as ",(0,s.jsx)(n.code,{children:"active"}),". Grafana should now be available at\n",(0,s.jsx)(n.code,{children:"http://your-node-host-ip:3000/"})," from your browser. Log in with username: admin,\npassword: admin, and you will be prompted to set up a new, secure password. Do\nthat."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["You may need to do ",(0,s.jsx)(n.code,{children:"sudo ufw allow 3000/tcp"})," if the firewall is on, and/or\nadjust the cloud instance settings to allow connections to port 3000. If on\npublic internet, make sure to only allow your IP to connect!"]})}),"\n",(0,s.jsx)(n.p,{children:"Prometheus and Grafana are now installed, we're ready for the next step."}),"\n",(0,s.jsxs)(n.h2,{id:"step-3-set-up-node_exporter-",children:["Step 3: Set up ",(0,s.jsx)(n.code,{children:"node_exporter"})," ",(0,s.jsx)("a",{id:"exporter"})]}),"\n",(0,s.jsxs)(n.p,{children:["In addition to metrics from Luxd, let\u2019s set up monitoring of the machine\nitself, so we can check CPU, memory, network and disk usage and be aware of any\nanomalies. For that, we will use ",(0,s.jsx)(n.code,{children:"node_exporter"}),", a Prometheus plugin."]}),"\n",(0,s.jsx)(n.p,{children:"Run the script to execute the third step:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./monitoring-installer.sh --3\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output should look something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Luxd monitoring installer\n--------------------------------\nSTEP 3: Installing node_exporter\n\nChecking environment...\nFound arm64 architecture...\nDowloading archive...\nhttps://github.com/prometheus/node_exporter/releases/download/v1.2.2/node_exporter-1.2.2.linux-arm64.tar.gz\nnode_exporter.tar.gz                        100%[=========================================================================================>]   7.91M  --.-KB/s    in 0.1s\n2021-11-05 14:57:25 URL:https://github-releases.githubusercontent.com/9524057/6dc22304-a1f5-419b-b296-906f6dd168dc?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20211105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211105T145725Z&X-Amz-Expires=300&X-Amz-Signature=3890e09e58ea9d4180684d9286c9e791b96b0c411d8f8a494f77e99f260bdcbb&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=9524057&response-content-disposition=attachment%3B%20filename%3Dnode_exporter-1.2.2.linux-arm64.tar.gz&response-content-type=application%2Foctet-stream [8296266/8296266] -> "node_exporter.tar.gz" [1]\nnode_exporter-1.2.2.linux-arm64/LICENSE\n'})}),"\n",(0,s.jsx)(n.p,{children:"Again, we check that the service is running correctly:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status node_exporter\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the service is running, Prometheus, Grafana and ",(0,s.jsx)(n.code,{children:"node_exporter"})," should all work\ntogether now. To check, in your browser visit Prometheus web interface on\n",(0,s.jsx)(n.code,{children:"http://your-node-host-ip:9090/targets"}),". You should see three targets enabled:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prometheus"}),"\n",(0,s.jsx)(n.li,{children:"Luxd"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"luxd-machine"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Make sure that all of them have ",(0,s.jsx)(n.code,{children:"State"})," as ",(0,s.jsx)(n.code,{children:"UP"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["If you run your Luxd node with TLS enabled on your API port, you will\nneed to manually edit the ",(0,s.jsx)(n.code,{children:"/etc/prometheus/prometheus.yml"})," file and change the\n",(0,s.jsx)(n.code,{children:"luxd"})," job to look like this:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'- job_name: "luxd"\n  metrics_path: "/ext/metrics"\n  scheme: "https"\n  tls_config:\n    insecure_skip_verify: true\n  static_configs:\n    - targets: ["localhost:9650"]\n'})}),(0,s.jsxs)(n.p,{children:["Mind the spacing (leading spaces too)! You will need admin privileges to do that\n(use ",(0,s.jsx)(n.code,{children:"sudo"}),"). Restart Prometheus service afterwards with ",(0,s.jsx)(n.code,{children:"sudo systemctl restart prometheus"}),"."]})]}),"\n",(0,s.jsx)(n.p,{children:"All that's left to do now is to provision the data source and install the actual\ndashboards that will show us the data."}),"\n",(0,s.jsxs)(n.h2,{id:"step-4-dashboards-",children:["Step 4: Dashboards ",(0,s.jsx)("a",{id:"dashboards"})]}),"\n",(0,s.jsx)(n.p,{children:"Run the script to install the dashboards:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./monitoring-installer.sh --4\n"})}),"\n",(0,s.jsx)(n.p,{children:"It will produce output something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'Luxd monitoring installer\n--------------------------------\n\nDownloading...\nLast-modified header missing -- time-stamps turned off.\n2021-11-05 14:57:47 URL:https://raw.githubusercontent.com/luxdefi/monitoring/master/grafana/dashboards/c_chain.json [50282/50282] -> "c_chain.json" [1]\nFINISHED --2021-11-05 14:57:47--\nTotal wall clock time: 0.2s\nDownloaded: 1 files, 49K in 0s (132 MB/s)\nLast-modified header missing -- time-stamps turned off.\n...\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This will download the latest versions of the dashboards from GitHub and\nprovision Grafana to load them, as well as defining Prometheus as a data source.\nIt may take up to 30 seconds for the dashboards to show up. In your browser, go\nto: ",(0,s.jsx)(n.code,{children:"http://your-node-host-ip:3000/dashboards"}),". You should see 7 Lux\ndashboards:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Imported dashboards",src:t(96645).Z+"",width:"930",height:"812"})}),"\n",(0,s.jsx)(n.p,{children:"Select 'Lux Main Dashboard' by clicking its title. It should load, and look similar to this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Main Dashboard",src:t(4227).Z+"",width:"1532",height:"975"})}),"\n",(0,s.jsx)(n.p,{children:"Some graphs may take some time to populate fully, as they need a series of\ndata points in order to render correctly."}),"\n",(0,s.jsx)(n.p,{children:"You can bookmark the main dashboard as it shows the most important information\nabout the node at a glance. Every dashboard has a link to all the others as the\nfirst row, so you can move between them easily."}),"\n",(0,s.jsx)(n.h2,{id:"step-5-additional-dashboards-optional",children:"Step 5: Additional Dashboards (Optional)"}),"\n",(0,s.jsx)(n.p,{children:"Step 4 installs the basic set of dashboards that make sense to have on any node.\nStep 5 is for installing additional dashboards that may not be useful for every\ninstallation."}),"\n",(0,s.jsx)(n.p,{children:"Currently, there is only one additional dashboard: Subnets. If your node is\nrunning any Subnets, you may want to add this as well. Do:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./monitoring-installer.sh --5\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will add the Subnets dashboard. It allows you to monitor operational data\nfor any Subnet that is synced on the node. There is a Subnet switcher that\nallows you to switch between different Subnets. As there are many Subnets and\nnot every node will have all of them, by default, it comes populated only with\nSpaces and WAGMI Subnets that exist on Testnet:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Subnets switcher",src:t(24175).Z+"",width:"474",height:"408"})}),"\n",(0,s.jsxs)(n.p,{children:["To configure the dashboard and add any Subnets that your node is syncing, you\nwill need to edit the dashboard. Select the ",(0,s.jsx)(n.code,{children:"dashboard settings"})," icon (image of\na cog) in the upper right corner of the dashboard display and switch to\n",(0,s.jsx)(n.code,{children:"Variables"})," section and select the ",(0,s.jsx)(n.code,{children:"subnet"})," variable. It should look something\nlike this:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Variables screen",src:t(54933).Z+"",width:"1678",height:"970"})}),"\n",(0,s.jsx)(n.p,{children:"The variable format is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Subnet name:<BlockchainID>\n"})}),"\n",(0,s.jsx)(n.p,{children:"and the separator between entries is a comma. Entries for Spaces and WAGMI look like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Spaces (Testnet) : 2ebCneCbwthjQ1rYT41nhd7M76Hc6YmosMAQrTFhBq8qeqh6tt, WAGMI (Testnet) : 2AM3vsuLoJdGBGqX2ibE8RGEq4Lg7g4bot6BT1Z7B9dH5corUD\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After editing the values, press ",(0,s.jsx)(n.code,{children:"Update"})," and then click ",(0,s.jsx)(n.code,{children:"Save dashboard"})," button\nand confirm. Press the back arrow in the upper left corner to return to the\ndashboard. New values should now be selectable from the dropdown and data for\nthe selected Subnet will be shown in the panels."]}),"\n",(0,s.jsx)(n.h2,{id:"updating",children:"Updating"}),"\n",(0,s.jsx)(n.p,{children:"Available node metrics are updated constantly, new ones are added and obsolete\nremoved, so it is good a practice to update the dashboards from time to time,\nespecially if you notice any missing data in panels. Updating the dashboards is\neasy, just run the script with no arguments, and it will refresh the dashboards\nwith the latest available versions. Allow up to 30s for dashboards to update in\nGrafana."}),"\n",(0,s.jsx)(n.p,{children:"If you added the optional extra dashboards (step 5), they will be updated as well."}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"Using the script to install node monitoring is easy, and it gives you insight\ninto how your node is behaving and what's going on under the hood. Also, pretty\ngraphs!"}),"\n",(0,s.jsxs)(n.p,{children:["If you have feedback on this tutorial, problems with the script or following the\nsteps, send us a message on ",(0,s.jsx)(n.a,{href:"https://chat.lux.network",children:"Discord"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},96645:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/monitoring-01-dashboards-c3663fa7cad607b57d81818952b6c2c8.png"},4227:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/monitoring-02-main-dashboard-1a4d5e7128e299529dc7e57ad714d4dd.png"},24175:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/monitoring-03-subnets-2d154d8caac8750098940356b3532556.png"},54933:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/monitoring-04-variables-59c3eceabd8036b378b9df8ffd74834e.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(67294);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);