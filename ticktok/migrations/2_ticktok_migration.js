const TickTokenCtr = artifacts.require('./TickToken.sol');

module.exports = function(deployer) {
  deployer.deploy(TickTokenCtr, 'dappathon PRO', 'dapp');
};
