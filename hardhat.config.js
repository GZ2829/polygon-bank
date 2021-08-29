require("@nomiclabs/hardhat-waffle");

const secrets = require("./enviornment/secrets.json");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    sources: "./blockchain/contracts",
    tests: "./blockchain/test",
    cache: "./blockchain/cache",
    artifacts: "./blockchain/artifacts"
  },
  networks: {
    mumbai: {
      url: secrets.mumbainode,
      accounts: [secrets.privatekey]
    },
  }
};
