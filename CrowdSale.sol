/*
You should inherit from StandardToken or, for a token like you would want to
deploy in something like Mist, see HumanStandardToken.sol.
(This implements ONLY the standard functions and NOTHING else.
If you deploy this, you won't have anything useful.)

Implements ERC 20 Token standard: https://github.com/ethereum/EIPs/issues/20
.*/
pragma solidity ^0.4.11;

import "./Token.sol";
import "./SafeMath.sol";

contract HealthCoinCrowdSale is ERC20Token { 

    using SafeMath for uint256;

    /* Constants */
    uint256 etherConversionRate = 3000; // 1 ether will get how many healthcoins. The owner can change it dynamically 
    bool disableAllTrades = false;

    function setEtherConversionRate(uint256 pEtherConversionRate){
        require(msg.sender == foundationEtherWalletAddress);   // only messages from owners address can set the rate.
    	etherConversionRate = pEtherConversionRate;     
    } 

    function setDisableAllTrades(bool pDisableAllTrades){
        require(msg.sender == foundationEtherWalletAddress);  // only messages from owners address can disable all trades.
    	disableAllTrades = pDisableAllTrades;     
    } 


}