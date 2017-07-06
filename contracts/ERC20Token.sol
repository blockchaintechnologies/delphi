pragma solidity ^0.4.8;

// ERC20 standard token interface

contract ERC20Token{
    uint256 public TotalSupply;
    function balanceOf(address target) constant returns(uint256 TotalSupply);
    function allowance(address owner) constant returns (uint256 balance);
    function transfer(address to, uint256 value) returns (bool success);
    function transferFrom(address from, address to, uint256 value) returns (bool success);
    function approve(address spender, uint value) returns (bool success);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}