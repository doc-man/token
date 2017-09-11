pragma solidity ^0.4.11;

import './HealthToken.sol';
import './SafeMath.sol';
import './Ownable.sol';

contract CrowdSale is Ownable {
  using SafeMath for uint256;

  uint256 public constant TOTAL_SUPPLY = 1200000000 ether;
  uint256 public constant FOUNDATION_SUPPLY = TOTAL_SUPPLY*80/100;
  uint256 public constant FOUNDER_SUPPLY = TOTAL_SUPPLY*20/100; 


  address public foundationAddress;
  address public founderAddress;
  uint256 public price; //how many HLT we will send for 1 ETH;

  HealthToken public hlt;

  /**
   * event for token purchase logging
   * @param purchaser who paid for the tokens
   * @param beneficiary who got the tokens
   * @param value weis paid for purchase
   * @param amount amount of tokens purchased
   */ 
  event TokenPurchase(address indexed purchaser, address indexed beneficiary, uint256 value, uint256 amount);

  modifier canSell(){
    //assert(price > 0);
    if(price == 0) return;  //if crowdsale not started or paused it's better not to eat all transaction gas,  as with assert()
    _;
  }

  function CrowdSale(address _foundationAddress, address _founderAddress){
    foundationAddress = _foundationAddress;
    founderAddress = _founderAddress;
    hlt = new HealthToken();
    hlt.init(foundationAddress, FOUNDATION_SUPPLY, founderAddress, FOUNDER_SUPPLY);
  }

  function setPrice(uint256 _price) public onlyOwner {
    price = _price;
  }
  
  function() payable {
    saleTo(msg.sender);
  }

  function saleTo(address buyer) public payable canSell {
    uint256 tokens = msg.value.mul(price);
    hlt.sell(foundationAddress, buyer, tokens);
    foundationAddress.transfer(msg.value);
    TokenPurchase(msg.sender, buyer, msg.value, tokens);
  }

}