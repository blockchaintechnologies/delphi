pragma solidity ^0.4.8;

import './ERC20Token.sol';

contract DelphiToken is ERC20Token{
    string public constant symbol = "DEL";
    string public constant name = "Delphi Token";
    uint256 totalSupply = 1000000000;

    //Balance Map
    mapping(address => uint256) balances;

    //Preauthorized transfers
    mapping(address => mapping (address => uint256)) allowed;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    
    function balanceOf(address owner) constant returns(uint256 balance){
        return balances[owner];
    }

    function transfer(address to, uint256 amount) returns (bool success){
        var sender = msg.sender;
        if(balances[sender] >= amount && amount > 0) {
            balances[sender] -= amount;
            balances[to] += amount;
            return true;
        }
        return false;
    }

    function transferFrom(address from, address to, uint256 amount) returns(bool success){
        if(balances[from] >= amount
           && allowed[from][msg.sender] >= amount
           && amount > 0 ){
               balances[from] -= amount;
               allowed[from][msg.sender] -= amount;
               balances[to] += amount;
               return true;}
    }              

    function approve(address spender, uint256 amount) returns (bool success){
        allowed[msg.sender][spender] = amount;
        return true;
    }

    function allowance(address owner) constant returns (uint256 balance){
        return 0;
    }
}