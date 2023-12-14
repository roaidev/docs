"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2550],{33592:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var i=e(85893),a=e(11151);const s={},o="App.js",c={id:"deprecated/tutorials-contest/2021/NFT-Marketplace-on-Lux/NFT-Marketplace-dApp/frontend/src/App.js",title:"App.js",description:"",source:"@site/docs/deprecated/tutorials-contest/2021/NFT-Marketplace-on-Lux/NFT-Marketplace-dApp/frontend/src/App.js.md",sourceDirName:"deprecated/tutorials-contest/2021/NFT-Marketplace-on-Lux/NFT-Marketplace-dApp/frontend/src",slug:"/deprecated/tutorials-contest/2021/NFT-Marketplace-on-Lux/NFT-Marketplace-dApp/frontend/src/App.js",permalink:"/deprecated/tutorials-contest/2021/NFT-Marketplace-on-Lux/NFT-Marketplace-dApp/frontend/src/App.js",draft:!1,unlisted:!1,editUrl:"https://github.com/luxdefi/docs/edit/main/docs/deprecated/tutorials-contest/2021/NFT-Marketplace-on-Lux/NFT-Marketplace-dApp/frontend/src/App.js.md",tags:[],version:"current",frontMatter:{}},r={},u=[];function h(n){const t={code:"code",h1:"h1",pre:"pre",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"appjs",children:"App.js"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'import React from "react";\nimport { ethers } from "ethers";\n\nimport AuctionArtifact from "./artifacts/Auction.json";\nimport AuctionManagerArtifact from "./artifacts/AuctionManager.json";\nimport NFTArtifact from "./artifacts/NFT.json";\n\nconst NFT_ADDRESS = "0xeb2283672cf716fF6A1d880436D3a9074Ba94375"; // NFT contract address\nconst AUCTIONMANAGER_ADDRESS = "0xea4b168866E439Db4A5183Dbcb4951DCb5437f1E"; // AuctionManager contract address\nclass App extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeAuction: null,\n      auctions: [], // Auctions to display\n      bidAmount: 0, // The amount of LUX to bid\n      newAuction: {\n        // newAuction is a state variable for the form\n        startPrice: null,\n        endTime: null,\n        tokenId: null,\n        minIncrement: null,\n        directBuyPrice: null,\n      },\n      myItems: [], // Items owned by the user\n    };\n\n    this.mint = this.mint.bind(this);\n\n    this.renderAuctionElement = this.renderAuctionElement.bind(this);\n  }\n\n  async getItems() {\n    let items = await this._nft.myItems(); // Get the tokens owned by the user\n    items = items.map((x) => x.toNumber()); // Converts BigNumber to number\n    this.setState({ myItems: items });\n  }\n\n  async init() {\n    if (window.ethereum) {\n      // if window.ethereum is defined\n      await window.ethereum.enable(); // Enable the Ethereum client\n      this.provider = new ethers.providers.Web3Provider(window.ethereum); // A connection to the Ethereum network\n      this.signer = this.provider.getSigner(); // Holds your private key and can sign things\n      this.setState({ currentAddress: await this.signer.getAddress() }); // Set the current address\n      this._auctionManager = new ethers.Contract( // We will use this to interact with the AuctionManager\n        AUCTIONMANAGER_ADDRESS,\n        AuctionManagerArtifact.abi,\n        this.signer\n      );\n\n      this._nft = new ethers.Contract(\n        NFT_ADDRESS,\n        NFTArtifact.abi,\n        this.signer\n      ); // We will use this to interact with the NFT\n      this.getItems();\n      this.getAuctions();\n    } else {\n      alert("No wallet detected"); // No wallet detected\n    }\n  }\n  componentDidMount() {\n    this.init();\n  }\n\n  async getAuctions() {\n    let auctionsAddresses = await this._auctionManager.getAuctions(); // get a list of auction addresses\n    let auctions = await this._auctionManager.getAuctionInfo(auctionsAddresses); // I\'ll just pass all the addresses here, you can build a pagination system if you want\n    console.log(auctions);\n    let new_auctions = [];\n\n    for (let i = 0; i < auctions.endTime.length; i++) {\n      let endTime = auctions.endTime[i].toNumber();\n      let tokenId = auctions.tokenIds[i].toNumber();\n      let auctionState = auctions.auctionState[i].toNumber();\n\n      let startPrice = ethers.utils.formatEther(auctions.startPrice[i]);\n      let directBuyPrice = ethers.utils.formatEther(auctions.directBuy[i]);\n      let highestBid = ethers.utils.formatEther(auctions.highestBid[i]);\n\n      let owner = auctions.owner[i];\n\n      let newAuction = {\n        endTime: endTime,\n        startPrice: startPrice,\n        owner: owner,\n        directBuyPrice: directBuyPrice,\n        tokenId: tokenId,\n        highestBid: highestBid,\n        auctionState: auctionState,\n        auctionAddress: auctionsAddresses[i],\n      };\n      new_auctions.push(newAuction);\n    }\n\n    this.setState({ auctions: new_auctions }); // Update the state\n  }\n\n  async createAuction() {\n    if (\n      !this.state.newAuction.minIncrement ||\n      !this.state.newAuction.directBuyPrice ||\n      !this.state.newAuction.startPrice ||\n      !this.state.newAuction.endTime ||\n      !this.state.newAuction.tokenId\n    )\n      return alert("Fill all the fields");\n\n    let { hash: allowance_hash } = await this._nft.approve(\n      AUCTIONMANAGER_ADDRESS,\n      this.state.newAuction.tokenId\n    ); // Approve the AUCTIONMANAGER to transfer the token\n    console.log("Approve Transaction sent! Hash:", allowance_hash);\n    await this.provider.waitForTransaction(allowance_hash); // Wait till the transaction is mined\n    console.log("Transaction mined!");\n\n    let { hash } = await this._auctionManager.createAuction(\n      // Create an auction\n      this.state.newAuction.endTime * 60, // Converting minutes to seconds\n      ethers.utils.parseEther(this.state.newAuction.minIncrement.toString()), // Minimum increment in LUX\n      ethers.utils.parseEther(this.state.newAuction.directBuyPrice.toString()), // Direct buy price in LUX\n      ethers.utils.parseEther(this.state.newAuction.startPrice.toString()), // Start price in LUX\n      NFT_ADDRESS, // The address of the NFT token\n      this.state.newAuction.tokenId // The id of the token\n    );\n    console.log("Transaction sent! Hash:", hash);\n    await this.provider.waitForTransaction(hash); // Wait till the transaction is mined\n    console.log("Transaction mined!");\n    alert(`Transaction Mined! Hash: ${hash}`);\n  }\n\n  async mint() {\n    // hash is the hash of the transaction\n    let { hash } = await this._nft.getItem({\n      // Calling the getItem function of the contract\n      value: ethers.utils.parseEther("0.5"), // 0.5 LUX\n    });\n    console.log("Transaction sent! Hash:", hash);\n    await this.provider.waitForTransaction(hash); // Wait till the transaction is mined\n    console.log("Transaction mined!");\n    alert(`Transaction sent! Hash: ${hash}`);\n  }\n\n  renderAuctionElement(auction) {\n    let state = "";\n    if (auction.auctionState === 0) {\n      state = "Open";\n    }\n    if (auction.auctionState === 1) {\n      state = "Cancelled";\n    }\n    if (auction.auctionState === 2) {\n      state = "Ended";\n    }\n    if (auction.auctionState === 3) {\n      state = "Direct Buy";\n    }\n    return (\n      <div style={{ background: "yellow" }} class="col">\n        <p>ID: {auction.tokenId}</p> {/* ID of the token */}\n        <p>Highest Bid: {auction.highestBid || 0}</p>\n        {/* Highest bid */}\n        <p>Direct Buy: {auction.directBuyPrice}</p> {/* Direct buy price */}\n        <p>Starting Price: {auction.startPrice}</p> {/* Starting price */}\n        <p>Owner: {auction.owner}</p> {/* Owner of the token */}\n        <p>\n          {/* Convert timestamp to minutes */}\n          End Time:{" "}\n          {Math.round((auction.endTime * 1000 - Date.now()) / 1000 / 60)}{" "}\n          {/* Time left in minutes */}\n          minutes\n        </p>\n        <p>Auction State: {state}</p>\n        <button\n          class="btn-primary"\n          onClick={() => this.setActiveAuction(auction)}\n        >\n          See More\n        </button>\n      </div>\n    );\n  }\n\n  async placeBid(amount) {\n    if (!amount) return;\n    amount = ethers.utils.parseEther(amount.toString()); // Amount in LUX\n    let { hash } = await this._auction.placeBid({ value: amount }); // Place a bid\n    await this.provider.waitForTransaction(hash); // Wait till the transaction is mined\n    alert(`Transaction sent! Hash: ${hash}`); // Show the transaction hash\n    this.setActiveAuction(this.state.activeAuction); // Update the active auction\n  }\n\n  async cancelAuction() {\n    let { hash } = await this._auction.cancelAuction(); // Cancel the auction\n    await this.provider.waitForTransaction(hash); // Wait till the transaction is mined\n    alert(`Auction Canceled! Hash: ${hash}`); // Show the transaction hash\n    window.location.reload(); // Reload the page\n  }\n\n  async withdrawFunds() {\n    let { hash } = await this._auction.withdrawFunds(); // Withdraw the funds\n    await this.provider.waitForTransaction(hash); // Wait till the transaction is mined\n    alert(`Withdrawal Successful! Hash: ${hash}`); // Show the transaction hash\n    window.location.reload(); // Reload the page\n  }\n\n  async withdrawToken() {\n    let { hash } = await this._auction.withdrawToken(); // Withdraw the NFT token\n    await this.provider.waitForTransaction(hash); // Wait till the transaction is mined\n    alert(`Withdrawal Successful! Hash: ${hash}`); // Show the transaction hash\n    window.location.reload(); // Reload the page\n  }\n\n  async setActiveAuction(auction) {\n    this._auction = new ethers.Contract( // Create a new instance of the contract\n      auction.auctionAddress,\n      AuctionArtifact.abi,\n      this.signer\n    );\n\n    let previousBids = await this._auction.allBids(); // Get the bids\n    let bids = []; // A list of bids\n    for (let i = 0; i < previousBids[0].length; i++) {\n      // Loop through the bids\n      bids.push({\n        // Add the bid to the list\n        bidder: previousBids[0][i], // The bidder\n        bid: ethers.utils.formatEther(previousBids[1][i]), // The bid\n      });\n    }\n\n    auction.bids = bids; // Add the bids array to the auction object\n\n    let auctionTokenValue = await this._nft.itemValue(auction.tokenId); // Get the value of the token\n    auctionTokenValue = auctionTokenValue.toNumber(); // Convert BigNumber to number\n    auction.auctionTokenValue = auctionTokenValue; // Add the value of the token to the auction object\n\n    let highestBidder = await this._auction.maxBidder(); // Get the highest bidder\n    auction.highestBidder = highestBidder; // Add the highest bidder to the auction object\n\n    let minIncrement = await this._auction.minIncrement(); // Get the minimum increment\n    auction.minIncrement = ethers.utils.formatEther(minIncrement); // Add the minimum increment to the auction object\n\n    this.setState({ activeAuction: auction }); // Update the state\n  }\n\n  renderActiveAuction() {\n    let activeAuction = this.state.activeAuction;\n    let state = "";\n    if (activeAuction.auctionState === 0) {\n      // If the auction is open\n      state = "Open";\n    }\n    if (activeAuction.auctionState === 1) {\n      // If the auction is cancelled\n      state = "Cancelled";\n    }\n    if (activeAuction.auctionState === 2) {\n      // If the auction is ended\n      state = "Ended";\n    }\n    if (activeAuction.auctionState === 3) {\n      // If the auction is ended by a direct buy\n      state = "Direct Buy";\n    }\n    let isOwner =\n      this.state.currentAddress.toString().toLowerCase() ===\n      activeAuction.owner.toString().toLowerCase(); // Check if the current address is the owner\n    let isAuctionOpen = state === "Open"; // Check if the auction is open\n    let isAuctionCancelled = state === "Cancelled"; // Check if the auction is cancelled\n    let isAuctionEnded = state === "Ended" || state === "Direct Buy"; // Check if the auction is ended\n    let isHighestBidder =\n      this.state.currentAddress === activeAuction.highestBidder; // Check if the current address is the highest bidder\n\n    return (\n      <div>\n        <div class="col">\n          <button\n            class="btn-secondary"\n            onClick={() => this.setState({ activeAuction: null })}\n          >\n            Go Back\n          </button>\n          <p>ID: {activeAuction.tokenId}</p> {/* ID of the token */}\n          <p>Highest Bid: {activeAuction.highestBid || 0} LUX</p>\n          {/* Highest bid */}\n          <p>Direct Buy: {activeAuction.directBuyPrice} LUX</p>{" "}\n          {/* Direct buy price */}\n          <p>Minimum Increment: {activeAuction.minIncrement} LUX</p>{" "}\n          {/* Minimum increment in LUX */}\n          <p>Starting Price: {activeAuction.startPrice} LUX</p>{" "}\n          {/* Starting price */}\n          <p>Owner: {activeAuction.owner}</p> {/* Owner of the token */}\n          <p>\n            End Time:{" "}\n            {Math.round(\n              (activeAuction.endTime * 1000 - Date.now()) / 1000 / 60\n            )}{" "}\n            {/* Time left in minutes */}\n            minutes\n          </p>\n          <p>Auction State: {state}</p>\n          <p>Token Value: {activeAuction.auctionTokenValue}</p>\n        </div>\n        <div class="col">\n          <h3>Bids</h3>\n          <table class="table">\n            <thead>\n              <tr>\n                <th>Bidder</th>\n                <th>Bid</th>\n              </tr>\n            </thead>\n            <tbody>\n              {activeAuction.bids.map((bid) => {\n                return (\n                  <tr key={bid.bidder}>\n                    <td>{bid.bidder}</td>\n                    <td>{bid.bid} LUX</td>\n                  </tr>\n                );\n              })}\n            </tbody>\n          </table>\n        </div>\n        <div class="col">\n          {isAuctionOpen && !isOwner ? (\n            <div>\n              <input\n                type="number"\n                placeholder="0.5"\n                onChange={(e) => this.setState({ bidAmount: e.target.value })}\n              />\n              <button\n                class="btn-primary btn"\n                onClick={() => this.placeBid(this.state.bidAmount)}\n              >\n                Place Pid\n              </button>\n            </div>\n          ) : null}\n          {isOwner && isAuctionOpen && activeAuction.bids.length == 0 ? (\n            <button onClick={() => this.cancelAuction()} class="btn-danger btn">\n              Cancel Auction\n            </button>\n          ) : null}\n\n          {isOwner && isAuctionEnded && activeAuction.bids.length > 0 ? (\n            <button\n              onClick={() => this.withdrawFunds()}\n              class="btn-secondary btn"\n            >\n              Withdraw Funds\n            </button>\n          ) : null}\n          {((activeAuction.bids.length == 0 && isOwner) || isHighestBidder) &&\n          isAuctionEnded ? (\n            <button\n              onClick={() => this.withdrawToken()}\n              class="btn-secondary btn"\n            >\n              Withdraw Token\n            </button>\n          ) : null}\n        </div>\n      </div>\n    );\n  }\n\n  render() {\n    return (\n      <div>\n        <div class="jumbotron d-flex align-items-center">\n          <div class="container">\n            {this.state.activeAuction != null ? (\n              this.renderActiveAuction()\n            ) : (\n              <div class="auctions row">\n                {this.state.auctions.map(this.renderAuctionElement)}\n              </div>\n            )}\n          </div>\n        </div>\n        <div class="container">\n          <form>\n            <div class="mb-3">\n              <label for="startprice" class="form-label">\n                Start Price\n              </label>\n              <input\n                value={this.state.newAuction.startPrice}\n                onChange={(e) =>\n                  this.setState({\n                    newAuction: {\n                      ...this.state.newAuction,\n                      startPrice: e.target.value,\n                    },\n                  })\n                }\n                type="number"\n                class="form-control"\n                id="startprice"\n              />\n              <label for="startprice" class="form-label">\n                Token Id\n              </label>\n              <input\n                value={this.state.newAuction.tokenId}\n                onChange={(e) =>\n                  this.setState({\n                    newAuction: {\n                      ...this.state.newAuction,\n                      tokenId: e.target.value,\n                    },\n                  })\n                }\n                type="number"\n                class="form-control"\n                id="startprice"\n              />\n              <label class="form-label">Minimum Increment</label>\n              <input\n                value={this.state.newAuction.minIncrement}\n                onChange={(e) =>\n                  this.setState({\n                    newAuction: {\n                      ...this.state.newAuction,\n                      minIncrement: e.target.value,\n                    },\n                  })\n                }\n                type="number"\n                class="form-control"\n              />\n              <label class="form-label">Direct Buy Price</label>\n              <input\n                value={this.state.newAuction.directBuyPrice}\n                onChange={(e) =>\n                  this.setState({\n                    newAuction: {\n                      ...this.state.newAuction,\n                      directBuyPrice: e.target.value,\n                    },\n                  })\n                }\n                type="number"\n                class="form-control"\n              />\n\n              <label class="form-label">Duration In Minutes</label>\n              <input\n                value={this.state.newAuction.endTime}\n                onChange={(e) =>\n                  this.setState({\n                    newAuction: {\n                      ...this.state.newAuction,\n                      endTime: e.target.value,\n                    },\n                  })\n                }\n                type="number"\n                class="form-control"\n              />\n            </div>\n\n            <button\n              type="button"\n              onClick={() => this.createAuction()}\n              class="btn btn-primary"\n            >\n              Create Auction\n            </button>\n            <button\n              type="button"\n              onClick={() => this.mint()}\n              class="btn btn-danger"\n            >\n              Mint NFT\n            </button>\n            <p>\n              Your items\n              <br />\n              {(this.state.myItems || [""]).map((x) => `id: ${x} `) || ""}\n            </p>\n          </form>\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default App;\n'})})]})}function d(n={}){const{wrapper:t}={...(0,a.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>c,a:()=>o});var i=e(67294);const a={},s=i.createContext(a);function o(n){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),i.createElement(s.Provider,{value:t},n.children)}}}]);