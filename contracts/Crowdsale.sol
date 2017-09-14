pragma solidity ^0.4.11;

/* TODO
- how do we now when crowdsale os finished?
- do we really need to store founderAddress?
*/


import './HealthToken.sol';
import './SafeMath.sol';
import './Ownable.sol';

contract Crowdsale is Ownable {
  using SafeMath for uint256;

  uint256 public constant TOTAL_SUPPLY = 1200000000 ether;
  uint256 public constant FOUNDATION_SUPPLY = TOTAL_SUPPLY*80/100;
  uint256 public constant FOUNDER_SUPPLY = TOTAL_SUPPLY*20/100;
  uint256 public constant PARTNER_BONUS = 2; //percent of referral partner bonus
  uint256 public constant REFERRAL_BONUS = 4; //percent of referrer bonus


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

  function Crowdsale(address _foundationAddress, address _founderAddress){
    foundationAddress = _foundationAddress;
    founderAddress = _founderAddress;
    hlt = new HealthToken();
    hlt.init(foundationAddress, FOUNDATION_SUPPLY, founderAddress, FOUNDER_SUPPLY);
  }

  function setPrice(uint256 _price) public onlyOwner {
    price = _price;
  }
  
  function() payable {
    saleTo(msg.sender, 0x0);
  }

  function saleTo(address buyer, address partner) public payable canSell {
    uint256 tokens  = msg.value.mul(price);
    if(partner == 0x0){
      hlt.send(foundationAddress, buyer, tokens);
      TokenPurchase(msg.sender, buyer, msg.value, tokens);
    }else{
      uint256 partnerTokens   = tokens.mul(PARTNER_BONUS).div(100);
      uint256 referralTokens  = tokens.mul(REFERRAL_BONUS).div(100);
      uint256 totalBuyerTokens = tokens.add(referralTokens);
      assert(hlt.send(foundationAddress, buyer, totalBuyerTokens));
      assert(hlt.send(foundationAddress, partner, partnerTokens));
      TokenPurchase(msg.sender, buyer, msg.value, totalBuyerTokens);
    }
    foundationAddress.transfer(msg.value);
  }

  function tokensAvailable() public constant returns(uint256){
    return hlt.getBalance(foundationAddress); 
  }

  function setFoundation(address newFoundationAddress) onlyOwner {
    uint256 oldFoundationTokens = hlt.getBalance(foundationAddress);
    assert(hlt.send(foundationAddress, newFoundationAddress, oldFoundationTokens));
    foundationAddress = newFoundationAddress;
  }

}