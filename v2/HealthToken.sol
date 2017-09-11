pragma solidity ^0.4.11;


import './StandardToken.sol';

contract HealthToken is StandardToken, Ownable {

  string public constant name = "HealthCoin";
  string public constant symbol = "HCN";
  uint8 public constant decimals = 18;  

  function HealthToken(address foundation, uint foundationSupply, address founder, uint founderSupply) {
    balances[foundation] = foundationSupply;
    balances[founder] = founderSupply;
    totalSupply = founationSupply + founderSupply;
  }

  function sell(address foundation, address buyer, unit amount) onlyOwner {
    balances[foundation] = balances[foundation].sub(amount);
    balances[buyer] = balances[buyer].add(amount);
    Transfer(foundation, buyer, amount);
    return true;
  }
}