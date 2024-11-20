# PhilanthroToken - A Token for Charitable Giving

## Overview

PhilanthroToken (PUR) is an Ethereum-based token built on the ERC-20 standard designed to facilitate charitable giving through a decentralized platform. The project aimed to revolutionize philanthropy by providing a transparent and seamless way for users to create fundraising campaigns, purchase tokens, and donate them to various causes.

The platform offered users an efficient method to participate in charitable activities, leveraging blockchain technology to ensure transparency, trust, and ease of use. By integrating with MetaMask and supporting a user-friendly interface, PhilanthroToken makes charitable giving accessible to everyone.

## Objectives

- **Empower Charitable Giving**: Made it easier for individuals and organizations to create and participate in fundraising campaigns.
- **Transparency and Trust**: Utilized blockchain to ensure all transactions were transparent and traceable.
- **Global Reach**: Allowed people from all over the world to contribute to causes they believed in.

## Key Features

- **Token Purchase**: Users could purchase PhilanthroTokens (PUR) using Ether. Each Ether converted into 1000 PUR tokens, which could be used to support campaigns.
- **Campaign Creation**: Users could create fundraising campaigns, specifying target amounts, deadlines, and detailed descriptions of the cause.
- **Token Donations**: Users could donate tokens to the campaigns they were interested in, allowing for easy and traceable contributions.
- **Blockchain Integration**: The platform integrated with MetaMask, allowing users to connect their wallets and interact with the smart contract seamlessly.

## Technical Overview

PhilanthroToken is implemented as an Ethereum-based ERC-20 token using the Solidity programming language. The smart contract managed the distribution and use of tokens for charitable campaigns.

- **Language**: Solidity
- **Token Standard**: ERC-20
- **Token Symbol**: PUR
- **Decimals**: 2
- **Initial Supply**: 1,000,000,000 PUR

The smart contract is responsible for creating campaigns, purchasing tokens, donating tokens, and maintaining the transparency of donation flows.

## Smart Contract Functions

- **purchaseTokens()**: Allows users to buy PhilanthroTokens using Ether, converting each Ether into 1000 PUR tokens.
- **createCampaign()**: Enables users to create a new fundraising campaign by specifying essential campaign details such as title, target amount, and end date.
- **registerTransfer()**: Registers token donations for campaigns, updating campaign details and tracking contributors.
- **getCampaignById()**: Retrieves specific campaign details using the campaign ID.
- **getAllCampaigns()**: Returns a list of all active campaigns on the platform.

## Getting Started

### Prerequisites

To run the project, the following are required:

- **Node.js and npm**: To manage dependencies.
- **Ganache GUI or Sepolia Testnet**: For deploying and testing the smart contract.
- **MetaMask**: To interact with the blockchain from the browser.
- **Web3.js**: For interacting with the Ethereum blockchain from the JavaScript code.

### Installation

1. Cloned the repository:

   ```sh
   git clone <repository-url>
   cd philanthrotoken
   ```

2. Installed dependencies:

   ```sh
   npm install
   ```

3. Deploy the smart contract:

   - Use a tool like Remix IDE or Truffle to compile and deploy the smart contract to Ganache GUI or Sepolia Testnet.

4. Update the **PHILANTHROTOKEN\_ADDRESS**:

   - Update the contract address in the JavaScript files with the address generated during deployment.

### Running the Project

1. **Started the local blockchain** using Ganache GUI:

   ```sh
   ganache-cli
   ```

2. **Serve the frontend** using lite-server:

   ```sh
   npm run dev
   ```

3. **Connected MetaMask** to the local blockchain or Sepolia Testnet and imported the account to interact with the platform.

## User Guide

1. **Connect Wallet**: Used the "Connect Wallet" button to link MetaMask wallet to the platform.
2. **Purchase Tokens**: Entered the amount of Ether and clicked "Buy Tokens" to purchase PUR tokens.
3. **Create Campaign**: Filled out the campaign details and clicked "Create Campaign" to start a new charitable campaign.
4. **Donate to Campaign**: Browsed campaigns and donated tokens to support the cause.

## Project Structure

- **smart\_contracts/**: Contains the Solidity code for the PhilanthroToken contract.
- **frontend/**: Holds HTML, CSS, and JavaScript files for the user interface.
- **scripts/**: JavaScript files for interacting with the blockchain and managing campaigns.

## MetaMask Setup

1. Installed the MetaMask extension for the browser.
2. Imported the wallet or created a new one.
3. Connected MetaMask to the Ganache local blockchain or Sepolia Testnet.

## Deployment

- **Public Network Deployment**: Deploy the smart contract on Sepolia Testnet for broader testing or Ganache GUI for local testing.
- **Frontend Integration**: Update the **PHILANTHROTOKEN\_ADDRESS** in the frontend code to point to the new deployment.

## Future Improvements

- **Campaign Update Feature**: Allowed campaign creators to modify their campaigns before any donation was made.
- **Token Burning Mechanism**: Introduced a feature to burn unused tokens to enhance scarcity and value.
- **Real-Time Donation Tracking**: Improved donation transparency by showing live progress towards campaign goals.
- **Mobile Support**: Extended support to mobile platforms for broader accessibility.

## Potential Use Cases

- **Disaster Relief Campaigns**: Quickly set up campaigns during natural disasters for rapid fundraising.
- **Community Fundraisers**: Helped communities raise funds for local development initiatives.
- **Nonprofit Organizations**: Facilitated donations to registered nonprofits, providing transparent and immutable records of contributions.

## Challenges and Considerations

- **Gas Fees**: Since transactions on the Ethereum blockchain required gas fees, users needed sufficient Ether to cover these costs. Implementing gas optimization techniques could reduce transaction costs.
- **User Adoption**: Encouraged non-crypto users to adopt the platform by providing user-friendly guides and tutorials.
- **Scalability**: Ethereum's network congestion could affect transaction times; exploring scalability solutions such as layer-2 rollups was beneficial.

## License

This project was licensed under the MIT License.

## Contributors

- **Puru** - Developer and maintainer of PhilanthroToken.

## Acknowledgements

- **OpenZeppelin** for their ERC-20 implementation.
- **Ethereum Community** for resources, documentation, and guides.

## Contact

For questions, suggestions, or contributions, please feel free to reach out via email or through the project's GitHub repository.

