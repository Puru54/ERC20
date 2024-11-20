const PHILANTHROTOKEN_ADDRESS = "0x3d4aB033d2f4173f1C817087CaA020bccB7a6C6A"; //ganache
// const PHILANTHROTOKEN_ADDRESS = "0xAeee28918d5FA2a3482Df2804d7a12Ded3F5f1AF"; //sepolia
const PHILANTHROTOKEN_ABI =  [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "campaigns",
    "outputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "title",
        "type": "string"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "location",
        "type": "string"
      },
      {
        "name": "targetAmount",
        "type": "uint256"
      },
      {
        "name": "endDate",
        "type": "uint256"
      },
      {
        "name": "amountRaised",
        "type": "uint256"
      },
      {
        "name": "completed",
        "type": "bool"
      },
      {
        "name": "image",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "sender",
        "type": "address"
      },
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "INITIAL_SUPPLY",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "tokenBalances",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "desc",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "campaignCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "tokenConversionRate",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "purchaseTokens",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_title",
        "type": "string"
      },
      {
        "name": "_description",
        "type": "string"
      },
      {
        "name": "_location",
        "type": "string"
      },
      {
        "name": "_targetAmount",
        "type": "uint256"
      },
      {
        "name": "_endDate",
        "type": "uint256"
      },
      {
        "name": "_image",
        "type": "string"
      }
    ],
    "name": "createCampaign",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_sender",
        "type": "address"
      },
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_tokenAmount",
        "type": "uint256"
      },
      {
        "name": "_campaignID",
        "type": "uint256"
      }
    ],
    "name": "registerTransfer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_campaignId",
        "type": "uint256"
      }
    ],
    "name": "getCampaignById",
    "outputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "title",
        "type": "string"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "targetAmount",
        "type": "uint256"
      },
      {
        "name": "endDate",
        "type": "uint256"
      },
      {
        "name": "amountRaised",
        "type": "uint256"
      },
      {
        "name": "completed",
        "type": "bool"
      },
      {
        "name": "image",
        "type": "string"
      },
      {
        "name": "donors",
        "type": "address[]"
      },
      {
        "name": "donations",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAllCampaigns",
    "outputs": [
      {
        "name": "",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

let campaigns = [];
let tokenBalances = [];
let connected = false;
let contract = null;
let selectedAccount = null;
let buyButton = document.querySelector(".buyBTN");
let buyInput = document.querySelector(".buy");
const conversionValue = document.querySelector(".conversion");

document.addEventListener("DOMContentLoaded", loadBlockchainData);
document.addEventListener("DOMContentLoaded", connectAccount);

window.addEventListener("beforeunload", function () {
  var inputFields = document.querySelectorAll(".input");
  for (var i = 0; i < inputFields.length; i++) {
    inputFields[i].value = null;
  }
});

buyInput.addEventListener("input", () => {
  const ethAmount = parseFloat(buyInput.value);
  if (!isNaN(ethAmount) && ethAmount >= 0) {
    const tokenAmount = ethAmount * 1000;
    conversionValue.textContent = ` ≈ ${tokenAmount} PUR`;
  } else {
    conversionValue.textContent = "";
  }
});

buyButton.addEventListener("click", () => {
  let BB = document.querySelector(".buy").value;
  if (BB < 0.001) {
    window.alert("Enter value greater than 0.001");
  } else {
    buyTokens(BB).then((x) => {
      if (x === true) {
        console.log("Token Purchase Success");
      }
    });
  }
});

// MODAL
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

async function connectAccount() {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    selectedAccount = accounts[0];
    connected = true;
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
}

async function loadBlockchainData() {
  try {
    const web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545");
    const myContract = new web3.eth.Contract(
      PHILANTHROTOKEN_ABI,
      PHILANTHROTOKEN_ADDRESS
    );
    contract = myContract;
    const campaignCount = await myContract.methods.campaignCount().call();

    // Create a Set to store unique campaign addresses
    const uniqueCampaigns = new Set();

    for (let i = 1; i <= campaignCount; i++) {
      const campaign = await myContract.methods.campaigns(i).call();
      if (campaign[0] !== "0x0000000000000000000000000000000000000000") {
        uniqueCampaigns.add(campaign); // Add the campaign to the Set
      }
    }

    // Convert the Set back to an array
    campaigns = Array.from(uniqueCampaigns);

    console.log("Blockchain Data Loaded");
  } catch (error) {
    console.log(error);
  }
}

// Function to create a campaign
async function createCampaign(
  title,
  description,
  location,
  amount,
  deadline,
  image
) {
  if (connected) {
    try {
      document.querySelector(".spinner").style.display = "flex";
      await contract.methods
        .createCampaign(title, description, location, amount, deadline, image)
        .send({ from: selectedAccount })
        .then((x) => {
          window.alert("Project Created Successfully!");
          document.querySelector(".spinner").style.display = "none";
          console.log(x);
          loadBlockchainData();
        });
      return true;
    } catch (error) {
      console.error(error);
      window.alert("Project Creation Failed!");
      document.querySelector(".spinner").style.display = "none";
      return false;
    }
  } else {
    window.alert("Please connect your wallet");
  }
}

async function buyTokens(ethAmount) {
  if (connected) {
    try {
      document.querySelector(".spinner").style.display = "flex";
      await contract.methods
        .purchaseTokens()
        .send({
          from: selectedAccount,
          value: Web3.utils.toWei(ethAmount.toString(), "ether"),
        })
        .then((x) => {
          document.querySelector(".spinner").style.display = "none";
          window.alert("Token Purchase Success!");
          buyInput.value = null;
          conversionValue.value = null;
          console.log(x);
          loadBlockchainData();
        });
      return true;
    } catch (error) {
      console.error(error);
      window.alert("Token Purchase Failed!");
      document.querySelector(".spinner").style.display = "none";
      return false;
    }
  } else {
    window.alert("Please connect your wallet");
  }
}

// async function donateTokens(_campaignID, _amount) {
//   if (!connected) {
//     window.alert("Please connect to your wallet!");
//     return false;
//   }
//   try {
//     const result = await contract.methods
//       .donateTokensToCampaign(_campaignID, _amount)
//       .send({
//         from: selectedAccount,
//         gas: 300000,
//         // gasPrice: "20000000000",
//       });
//     console.log(result);
//     window.alert(
//       "Donation Successful " + _amount + " PUR deducted from account"
//     );
//     loadBlockchainData();
//     return true;
//   } catch (error) {
//     console.error(error);
//     window.alert("Transaction failed: " + error.message);
//     return false;
//   }
// }

async function handleTransfer(_toAddress, _amount, _campaignID) {
  if (!connected) {
    window.alert("Please connect to your wallet!");
    return false;
  }
  try {
    document.querySelector(".spinner").style.display = "flex";
    await contract.methods
      .transfer(_toAddress, _amount * 100)
      .send({
        from: selectedAccount,
        gas: 100000,
      })
      .then(async (x) => {
        await contract.methods
          .registerTransfer(
            selectedAccount,
            _toAddress,
            _amount,
            _campaignID + 1
          )
          .send({ from: selectedAccount })
          .then(() => {
            window.alert(
              "Donation Successful " + _amount + " PUR deducted from account"
            );
            document.querySelector(".spinner").style.display = "none";
            loadBlockchainData();
          });
      });
    return true;
  } catch (error) {
    console.error(error);
    window.alert("Transaction failed: " + error.message);
    document.querySelector(".spinner").style.display = "none";
    return false;
  }
}
