pragma solidity ^0.4.11;

import './zeppelin/token/PausableToken.sol';
import './zeppelin/ownership/Ownable.sol';

contract HealthToken is PausableToken { //PausableToken is Ownable

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

}