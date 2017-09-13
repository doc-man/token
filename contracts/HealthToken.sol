pragma solidity ^0.4.11;


import './StandardToken.sol';
import './Ownable.sol';


contract HealthToken is StandardToken, Ownable {

  string public constant name = "HealthToken";
  string public constant symbol = "HLT";
  uint8 public constant decimals = 18;  
 
  /**
  * @dev Send initial amount of tokens to Foundation and Founder
  */
  function init(address foundation, uint256 foundationSupply, address founder, uint256 founderSupply) onlyOwner {
    balances[foundation] = foundationSupply;
    balances[founder] = founderSupply;
    totalSupply = foundationSupply + founderSupply;
    Transfer(0x0, foundation, foundationSupply);
    Transfer(0x0, founder, founderSupply);
  }

  /**
  * @dev Allows to send tokens from Foundation to buyer
  * This function is only used during crowdsale.
  */
  function send(address from, address to, uint256 amount) onlyOwner returns (bool){
    balances[from] = balances[from].sub(amount);
    balances[to] = balances[to].add(amount);
    Transfer(from, to, amount);
    return true;
  }
  
  function getBalance(address who) public constant returns(uint256){
    return balances[who];
  }
}