pragma solidity ^0.4.11;

import './Crowdsale.sol';
import './HealthToken.sol';

contract PersonalCrowdsale {
  Crowdsale public sale;
  address public partner;
  bytes32 accessKeyHash;
  bool claimed = false;

  function PersonalCrowdsale(Crowdsale _sale, address _partner, bytes32 _accessKeyHash){
    sale = _sale;
    partner = _partner;
    accessKeyHash = _accessKeyHash;
  }

  function() payable {
    require(!claimed);  //if tokens were claimed then accessKey is stored on blockhain, so we don't allow to buy any more tokens with this accessKey
    sale.saleTo.value(msg.value)(this, partner);
  }

  function claim(address to, string accessKey) returns(bool){
    bytes32 hash = sha3(accessKey);
    if(hash != accessKeyHash){
        return false;
    }else{
        claimed = true;
        HealthToken hlt = sale.hlt();
        uint256 amount = hlt.getBalance(this);
        assert(hlt.transfer(to, amount));
        return true;
    }
  }
  function balance() public constant returns(uint256){
        HealthToken hlt = sale.hlt();
        uint256 _balance = hlt.getBalance(this);
        return _balance;
  }
}

