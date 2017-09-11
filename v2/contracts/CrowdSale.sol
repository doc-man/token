pragma solidity ^0.4.11;

import './HealthToken.sol';
import './SafeMath.sol';
import './Ownable.sol';

contract Crowdsale is Ownable {
  using SafeMath for uint256;

  HealthToken public hlt;

  address public foundationAddress;
  address public founderAddress;
  uint256 public constant totalSupply = 1200000000 ether;
  uint256 public constant foundationSupply = totalSupply*80/100;
  uint256 public constant founderSupply = totalSupply*20/100; 
  uint256 public price; //how many HLT we will send for 1 ETH;

  function CrowdSale(address _foundationAddress, address _founderAddress){
    foundationAddress = _foundationAddress;
    founderAddress = _founderAddress;
    hlt = new HealthToken(foundationAddress, foundationSupply, founderAddress, founderSupply);
  }

  function setPrice(uint256 _price) public onlyOwner {
    price = _price;
  }
  function() payable {
    assert(price > 0);
    uint256 tokens = msg.value.mul(price);
    hlt.sell(foundationAddress, msg.sender, tokens);
    foundationAddress.transfer(msg.value);
  }

}