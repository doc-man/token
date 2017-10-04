pragma solidity ^0.4.11;

import './Crowdsale.sol';
import './HealthToken.sol';

contract PersonalCrowdsale {
  Crowdsale public sale;
  address public partner;
  bool public claimed = false;
  bytes32 accessKeyHash;

  function PersonalCrowdsale(Crowdsale _sale, address _partner, bytes32 _accessKeyHash){
    sale = _sale;
    partner = _partner;
    accessKeyHash = _accessKeyHash;
  }

  function() payable {
    require(!claimed);  //if tokens were claimed then accessKey is stored on blockhain, so we don't allow to buy any more tokens with this accessKey
    //sale.saleTo.value(msg.value)(this, partner);  //Only 2300 gas may be available here, not enought to send. Use commit() instead
  }

  /**
  * @notice Send tokens to a specified address
  * @param to Where to send tokens
  * @param accessKey Key to proove you are the owner of tokens
  */
  function claim(address to, string accessKey) returns(bool){
    bytes32 hash = sha3(accessKey);
    if(hash != accessKeyHash){
        return false;
    }else{
        claimed = true;
        HealthToken hlt = sale.hlt();
        uint256 amount = hlt.balanceOf(this);
        assert(hlt.transfer(to, amount));
        return true;
    }
  }
  /**
  * @notice How much tokens available to claim
  */
  function balance() public constant returns(uint256){
        HealthToken hlt = sale.hlt();
        uint256 _balance = hlt.balanceOf(this);
        return _balance;
  }
  /**
  * @notice Send colected ether to the Crowdsale to buy tokens
  * @dev Crowdsale server should call this, but anyone can
  */
  function commit() public {
    if(address(this).balance > 0){
        sale.saleTo.value(address(this).balance)(this, partner);
    }
  }

}

