# PhilanthroToken - A Token for Charitable Giving

## Overview
PhilanthroToken (PUR) is an Ethereum-based token built on the ERC-20 standard to facilitate charitable giving. The goal is to provide a seamless way for users to create and donate to campaigns, supporting charitable initiatives through a decentralized platform.

The smart contract enables the creation of fundraising campaigns, purchasing tokens with Ether, and donating these tokens to campaigns. The platform also provides a transparent mechanism for tracking donations and supporting causes.

## Features
- **Token Purchase**: Users can purchase PhilanthroTokens (PUR) by paying with Ether. Each Ether converts into 1000 PUR tokens.
- **Campaign Creation**: Users can create fundraising campaigns to support various causes, specifying target amounts, deadlines, and descriptions.
- **Token Donations**: Users can donate tokens to support campaigns they are interested in.
- **Blockchain Integration**: The platform is integrated with MetaMask, allowing users to connect their wallets to interact with the smart contract.

## Smart Contract Details
- **Language**: Solidity
- **Standard**: ERC-20
- **Token Symbol**: PUR
- **Decimals**: 2
- **Initial Supply**: 1,000,000,000 PUR

## Getting Started

### Prerequisites
- **Node.js and npm**: Install Node.js and npm to manage dependencies.
- **Ganache or Sepolia Testnet**: Use Ganache for local testing or Sepolia Testnet for testing on a public network.
- **MetaMask**: Install MetaMask for interacting with the blockchain from your browser.
- **Web3.js**: The project uses Web3.js for interacting with the Ethereum blockchain.

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd philanthrotoken
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Deploy the smart contract:
   - Use a tool like Remix IDE or Truffle to compile and deploy the smart contract to your preferred Ethereum network.

4. Update the **PHILANTHROTOKEN_ADDRESS**:
   - Update the address of the deployed contract in your JavaScript file based on the network you deployed to (Ganache or Sepolia).

### Running the Project
- **Start the local blockchain**:
  ```sh
  ganache-cli
  ```

- **Serve the frontend**:
  You can use a simple HTTP server or a live server to serve the HTML and JavaScript files:
  ```sh
  npx http-server
  ```

- **Connect MetaMask**:
  Connect MetaMask to the local blockchain or Sepolia Testnet, and import the account to interact with the platform.

### Smart Contract Functions
- **purchaseTokens()**: Buy PhilanthroTokens using Ether.
- **createCampaign()**: Create a new charitable campaign with a target amount and end date.
- **registerTransfer()**: Register donations to campaigns, updating campaign details and contributors.
- **getCampaignById()**: Retrieve details of a specific campaign.
- **getAllCampaigns()**: Get a list of all created campaigns.

## Project Structure
- **smart_contracts/**: Contains the Solidity smart contract for PhilanthroToken.
- **frontend/**: Contains HTML, CSS, and JavaScript files for the user interface.
- **scripts/**: JavaScript files that interact with the blockchain and manage campaigns.

## How to Use
1. **Connect Wallet**: Click the "Connect Wallet" button to link your MetaMask wallet to the platform.
2. **Purchase Tokens**: Enter the amount of Ether you want to use and click "Buy Tokens" to purchase PUR tokens.
3. **Create a Campaign**: Fill in the campaign details and click "Create Campaign" to start a charitable campaign.
4. **Donate to Campaign**: Select a campaign and donate tokens to contribute to its goal.

## Important Notes
- **Gas Fees**: Each transaction on the Ethereum blockchain requires gas fees, paid in Ether. Make sure to have enough Ether to cover the cost of your transaction.
- **Testing Environment**: The project can be tested on a local blockchain (e.g., Ganache) or the Sepolia Testnet.

## MetaMask Setup
1. Install the MetaMask extension for your browser.
2. Import your wallet or create a new one.
3. Connect MetaMask to the Ganache local blockchain or Sepolia Testnet.

## Deployment
1. Use a public Ethereum testnet like Sepolia to deploy your contract for testing.
2. Update the **PHILANTHROTOKEN_ADDRESS** in the frontend code to point to the newly deployed contract.

## Future Improvements
- **Campaign Update Functionality**: Allow campaign creators to modify their campaigns before a donation is made.
- **Token Burning Mechanism**: Introduce a feature to burn unused tokens.
- **Improved Donation Transparency**: Track and display the donation progress in real-time.

## License
This project is licensed under the MIT License.

## Contributors
- Puru - Developer and maintainer.

## Acknowledgements
- OpenZeppelin for their ERC-20 implementation.
- Ethereum Community for resources and guides.

## Contact
If you have any questions or suggestions, feel free to reach out.

