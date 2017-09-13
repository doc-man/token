pragma solidity ^0.4.11;

import './CrowdSale.sol';

contract ProxyCrowdSale {
  CrowdSale public sale;

  function ProxyCrowdSale(CrowdSale _sale){
    sale = _sale;
  }

  function() payable {
    sale.saleTo.value(msg.value)(msg.sender);
  }
}

