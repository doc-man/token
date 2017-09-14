pragma solidity ^0.4.11;

import './CrowdSale.sol';

contract ReferralCrowdSale {
  CrowdSale public sale;
  address public partner;

  function ReferralCrowdSale(CrowdSale _sale, address _partner){
    sale = _sale;
    partner = _partner;
  }

  function() payable {
    sale.saleTo.value(msg.value)(msg.sender, partner);
  }
}

