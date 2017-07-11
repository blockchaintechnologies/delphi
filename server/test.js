import json from './build/contracts/Ticker.json'; 
import contract from 'truffle-contract'; 
import Web3 from 'web3'; 

const provider = new Web3.providers.HttpProvider('http://localhost:8545'); 

const testWeb3 = new Web3(provider); 


let tick = contract(json); 
tick.setProvider(provider); 

let account = testWeb3.eth.accounts[0]; 

tick.deployed().then((instance)=>{

instance.setRate(700, {from: account, gas: 500000}).then((reciept)=>{
    console.log(reciept.receipt.logs); 
})}); 