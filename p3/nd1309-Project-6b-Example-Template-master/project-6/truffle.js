const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "b03fbacb7b1a401796445522b1f86ccc";
//
// const fs = require('fs');
const mnemonic = "<METAMASK SEED>";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider('popular afraid toe slam aunt rally popular trust rely scale yard phone', `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    }
  }
};