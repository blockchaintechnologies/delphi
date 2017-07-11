import json from '../build/contracts/DelphiPresale.json';
import Web3 from 'web3';
import contract from 'truffle-contract';

const provider = new Web3.providers.HttpProvider('http://localhost:8545');

const DelphiPresale = contract(json);

DelphiPresale.setProvider(provider);

var web3 = new Web3(provider);

var account = web3.eth.accounts[0]; 

console.log('Account:' + account); 

DelphiPresale.deployed().then((instance)=>{

    return instance.issuePresale({from:account, gas:500000, value:60000000000000000000}); 

 }).then((txrec)=>{console.log(txrec.logs[0].args._a.c)});


// .then((instance)=>
//              { 
//                  var dp = instance;
                 
//                  return dp.issuePresale(
//                  {
//                      from: account,
//                      gas:500000
//                  });
                 
//              });             