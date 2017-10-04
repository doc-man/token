pragma solidity ^0.4.11;

import './Crowdsale.sol';

contract PartnerCrowdsale {
  Crowdsale public sale;
  address public partner;

  function PartnerCrowdsale(Crowdsale _sale, address _partner){
    sale = _sale;
    partner = _partner;
  }

  function() payable {
    sale.saleTo.value(msg.value)(msg.sender, partner);
  }
}

