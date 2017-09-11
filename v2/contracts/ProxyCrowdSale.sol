pragma solidity ^0.4.11;

import './CrowdSale.sol';
import './SafeMath.sol';

contract ProxyCrowdSale is Ownable {
  using SafeMath for uint256;

  CrowdSale public sale;

  function ProxyCrowdSale(CrowdSale _sale){
    sale = _sale;
  }

  function() payable {
    sale.saleTo.value(msg.value)(msg.sender);
  }
}

