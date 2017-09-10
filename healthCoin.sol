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

contract HealthCoin is Token { // as per Pavel: In solidity documentation the guideline is to have the contract name start with a capital.

    using SafeMath for uint256;

    /* Constants */
    uint256 public constant _totalSupply = 2000000000; // 2 billion. uint256 will cost less gas then unit8 Ref: https://ethereum.stackexchange.com/questions/3067/why-does-uint8-cost-more-gas-than-uint256
    string public constant symbol = "HCN";
    string public constant name = "Health coin";
    uint256 public constant decimals = 2; // Using 2 decimals as anything more than this is cognitively too hard for regular users. 
    address public constant foundationEtherWalletAddress = 0x6a35399974126a6d739D3FA139AE64E32303DF8a; // As per Pavel: only need to pay for blockchain storage no need to pay for operational miner memory lookup. Hence having this as a constant is not going to increase the gas cost.

    /* Variables */
    uint256 etherConversionRate = 3000; // 1 ether will get how many healthcoins. The owner can change it dynamically 
    mapping (address => uint256) balances;  // if balance is unit256 how will it store .9 ? CLARIFY
    mapping (address => mapping (address => uint256)) allowed; // The allowed data structure stores -> 1st address is giving permission to 2nd address to withdraw.
    bool disableAllTrades = false;

    function () payable {   // this is fallback fn. So people can send money directly to contract address and this fn with no name will get called. It is declared payable since ether can be sent to this fn.
    	require(msg.value > 0);     
     	uint256 tokens;

	// msg.value has the number of ethers sent to this contract. Say msg.value is .0003 then tokens = .9. But tokens is unit256 FIX
	// If 1 ether is sent then  we get the basic unit of wei. So I actually get 1 followed by 18 zeroes.
	tokens = msg.value.mul(etherConversionRate); 
        balances[msg.sender] = balances[msg.sender].add(tokens);
        balances[foundationEtherWalletAddress] = balances[foundationEtherWalletAddress].sub(tokens);   // hardcoding the owner address. Save gas. Keep it simple.    

	// now send the ether to the foundations wallet
	foundationEtherWalletAddress.transfer(msg.value);
    }    

    function HealthCoin() {
        balances[foundationEtherWalletAddress] = _totalSupply; // giving the ethereum address of the owner the total supply.
	Transfer(0, foundationEtherWalletAddress, _totalSupply);
    }

    function setEtherConversionRate(uint256 pEtherConversionRate){
        require(msg.sender == foundationEtherWalletAddress);   // only messages from owners address can set the rate.
    	etherConversionRate = pEtherConversionRate;     
    } 

    function setDisableAllTrades(bool pDisableAllTrades){
        require(msg.sender == foundationEtherWalletAddress);  // only messages from owners address can disable all trades.
    	disableAllTrades = pDisableAllTrades;     
    } 

    function totalSupply() constant returns (uint256 balance){
        return _totalSupply;
    }

    function transfer(address _to, uint256 _value) returns (bool success) {
        //Default assumes totalSupply can't be over max (2^256 - 1).
        //If your token leaves out totalSupply and can issue more tokens as time goes on, you need to check if it doesn't wrap.
        //Replace the if with this one instead.
        //require(balances[msg.sender] >= _value && balances[_to] + _value > balances[_to]);
        require(balances[msg.sender] >= _value
		&& _value > 0	
		&& disableAllTrades == false	     
	);
        balances[msg.sender] = balances[msg.sender].sub(_value);
        balances[_to] = balances[_to].add(_value);
        Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {
        //same as above. Replace this line with the following if you want to protect against wrapping uints.
        //require(balances[_from] >= _value && allowed[_from][msg.sender] >= _value && balances[_to] + _value > balances[_to]);
        require(balances[_from] >= _value 
		&& allowed[_from][msg.sender] >= _value
		&& disableAllTrades == false
		);
        balances[_to] = balances[_to].add(_value);
        balances[_from] = balances[_from].sub(_value);
        allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);
        Transfer(_from, _to, _value);
        return true;
    }

    function balanceOf(address _owner) constant returns (uint256 balance) {
        return balances[_owner];
    }

    function approve(address _spender, uint256 _value) returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) constant returns (uint256 remaining) {
      return allowed[_owner][_spender];
    }

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

}
