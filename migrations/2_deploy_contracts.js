// var Ticker = artifacts.require("./Ticker.sol");
var SafeMath = artifacts.require("../node_modules/zeppelin-solidity/contracts/math/SafeMath.sol"); 
var DelphiPresale = artifacts.require("./DelphiPresale.sol");
var DelphiToken = artifacts.require("./DelphiToken.sol");
var ERC20Token = artifacts.require("./ERC20Token.sol");


module.exports = function(deployer) {
  // deployer.deploy(Ticker).then(function(){
  //   return deployer.deploy(DelphiPresale, Ticker.address); 
  // }); 
  // deployer.link(Ticker, DelphiPresale); 
   deployer.deploy(DelphiToken); 
   deployer.deploy(DelphiPresale);
   
};
