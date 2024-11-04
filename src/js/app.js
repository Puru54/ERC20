App = {
  web3Provider: null,
  contracts: {},
  init: () => {
    if (!typeof web3 !== "undefined") {
      App.web3Provider = window.ethereum;
      web3 = new Web3(window.ethereum);
    } else {
      App.web3Provider = new Web3.providers.HttpProvider(
        "http://127.0.0.1:7545"
      );
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },
  initContract: () => {
    $.getJSON("XeviaToken.json", (data) => {
      var MyTokenArtifact = data;
      App.contracts.MyToken = TruffleContract(MyTokenArtifact);
      App.contracts.MyToken.setProvider(App.web3Provider);
      return App.getBalances();
    });
    return App.bindEvents();
  },
  bindEvents: () => {
    $(document).on("click", "#transferButton", App.handleTransfer);
  },
  getBalances: () => {
    var myTokenInstance;
    web3.eth.getAccounts((error, accounts) => {
      if (error) console.log(error);
      var account = accounts[0];
      $("#MyTokenWallet").text(account);
      App.contracts.MyToken.deployed()
        .then((instance) => {
          myTokenInstance = instance;
          return myTokenInstance.balanceOf(account);
        })
        .then((result) => {
          balance = result.toString();
          $("#MyTokenBalance").text(balance);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  },
  handleTransfer: (event) => {
    event.preventDefault();
    var amount = parseInt($("#MyTokenTransferAmount").val());
    var toAddress = $("#MyTokenTransferAddress").val();
    console.log("Transfer " + amount + " token to " + toAddress);
    var myTokenInstance;
    web3.eth.getAccounts(function (error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
      App.contracts.MyToken.deployed()
        .then(function (instance) {
          myTokenInstance = instance;
          return myTokenInstance.transfer(toAddress, amount, {
            from: account,
            gas: 100000,
          });
        })
        .then(function (result) {
          alert("Transfer Successful!");
          resetform();
          return App.getBalances();
        })
        .catch(function (err) {
          console.log(err.message);
        });
    });
  },
};
function resetform() {
  document.getElementById("MyTokenTransferAddress").value = "";
  document.getElementById("MyTokenTransferAmount").value = "";
}

$(() => {
  $(window).load(() => {
    App.init();
  });
});
