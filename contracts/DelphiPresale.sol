pragma solidity ^0.4.8;
import '../node_modules/zeppelin-solidity/contracts/math/SafeMath.sol';

contract DelphiPresale {
    using SafeMath for uint256; 
    uint256 avaliableTokens = 250000000; //25%
    uint256 weiPerToken = 1071806361200428;
    mapping(address=>bool) whitelist;
    address creator;

    event NumTokens(uint256 ); 
 

  function DelphiPresale(){
      creator = msg.sender;
    }
    
   modifier onlyCreator(){
        if(msg.sender != creator)
        throw;
        _;        
   }    
   
   modifier inWhitelist(){
        require(whitelist[msg.sender] != false);
        _;
    }
    
   function whitelistAddress(address addr) onlyCreator{
        whitelist[addr] = true;
    }

   function issuePresale() payable {
      uint256 numTokens = 0; 
      //msg.value.div(weiPerToken); 
      
       NumTokens(numTokens); 
    }
  
}