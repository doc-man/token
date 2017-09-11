pragma solidity ^0.4.11;


import './StandardToken.sol';
import './Ownable.sol';


contract HealthToken is StandardToken, Ownable {

  string public constant name = "HealthToken";
  string public constant symbol = "HLT";
  uint8 public constant decimals = 18;  
 

  function HealthToken(address foundation, uint256 foundationSupply, address founder, uint256 founderSupply) {
    balances[foundation] = foundationSupply;
    balances[founder] = founderSupply;
    totalSupply = foundationSupply + founderSupply;
    Transfer(0x0, foundation, foundationSupply);
    Transfer(0x0, founder, founderSupply);
  }

  function sell(address foundation, address buyer, uint256 amount) onlyOwner returns (bool){
    balances[foundation] = balances[foundation].sub(amount);
    balances[buyer] = balances[buyer].add(amount);
    Transfer(foundation, buyer, amount);
    return true;
  }
}