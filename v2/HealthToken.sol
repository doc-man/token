pragma solidity ^0.4.11;


import './StandardToken.sol';

contract HealthToken is StandardToken {

  string public constant name = "HealthCoin";
  string public constant symbol = "HCN";
  uint8 public constant decimals = 18;  
}