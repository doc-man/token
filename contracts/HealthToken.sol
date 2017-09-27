pragma solidity ^0.4.11;

import './zeppelin/token/PausableToken.sol';
import './zeppelin/ownership/Ownable.sol';

contract HealthToken is PausableToken { //PausableToken is Ownable

    string public constant name = "HealthToken";
    string public constant symbol = "HLT";
    uint8 public constant decimals = 18;  
 
 
    address foundation;
    /**
    * @dev Send initial amount of tokens to Foundation and Founder
    */
    function init(address _foundation, uint256 foundationSupply, address founder, uint256 founderSupply) onlyOwner {
        foundation = _foundation;
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
    function sendFromFoundation(address to, uint256 amount) onlyOwner returns (bool){
        balances[foundation] = balances[foundation].sub(amount);
        balances[to] = balances[to].add(amount);
        Transfer(foundation, to, amount);
        return true;
    }
    /**
    * @dev Changes the address of Foundations. Also sends all tokens to a new address
    */
    function setFoundation(address to) onlyOwner {
        sendFromFoundation(to, balances[foundation]);
        foundation = to;  
    }
}