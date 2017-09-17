pragma solidity ^0.4.11;

/** 
 * =================== Open Zeppelin library =============================
 * https://github.com/OpenZeppelin/zeppelin-solidity/tree/master/contracts/
 */

/**
 * @title SafeMath
 * @dev Math operations with safety checks that throw on error
 */
library SafeMath {
  function mul(uint256 a, uint256 b) internal constant returns (uint256) {
    uint256 c = a * b;
    assert(a == 0 || c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal constant returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  function sub(uint256 a, uint256 b) internal constant returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal constant returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}

/**
 * @title ERC20Basic
 * @dev Simpler version of ERC20 interface
 * @dev see https://github.com/ethereum/EIPs/issues/179
 */
contract ERC20Basic {
  uint256 public totalSupply;
  function balanceOf(address who) constant returns (uint256);
  function transfer(address to, uint256 value) returns (bool);
  event Transfer(address indexed from, address indexed to, uint256 value);
}

/**
 * @title ERC20 interface
 * @dev see https://github.com/ethereum/EIPs/issues/20
 */
contract ERC20 is ERC20Basic {
  function allowance(address owner, address spender) constant returns (uint256);
  function transferFrom(address from, address to, uint256 value) returns (bool);
  function approve(address spender, uint256 value) returns (bool);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @title Ownable
 * @dev The Ownable contract has an owner address, and provides basic authorization control
 * functions, this simplifies the implementation of "user permissions".
 */
contract Ownable {
  address public owner;


  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);


  /**
   * @dev The Ownable constructor sets the original `owner` of the contract to the sender
   * account.
   */
  function Ownable() {
    owner = msg.sender;
  }


  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }


  /**
   * @dev Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  function transferOwnership(address newOwner) onlyOwner {
    require(newOwner != address(0));      
    OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }

}

/**
 * @title Basic token
 * @dev Basic version of StandardToken, with no allowances. 
 */
contract BasicToken is ERC20Basic {
  using SafeMath for uint256;

  mapping(address => uint256) balances;

  /**
  * @dev transfer token for a specified address
  * @param _to The address to transfer to.
  * @param _value The amount to be transferred.
  */
  function transfer(address _to, uint256 _value) returns (bool) {
    require(_to != address(0));

    // SafeMath.sub will throw if there is not enough balance.
    balances[msg.sender] = balances[msg.sender].sub(_value);
    balances[_to] = balances[_to].add(_value);
    Transfer(msg.sender, _to, _value);
    return true;
  }

  /**
  * @dev Gets the balance of the specified address.
  * @param _owner The address to query the the balance of. 
  * @return An uint256 representing the amount owned by the passed address.
  */
  function balanceOf(address _owner) constant returns (uint256 balance) {
    return balances[_owner];
  }

}


/**
 * @title Standard ERC20 token
 *
 * @dev Implementation of the basic standard token.
 * @dev https://github.com/ethereum/EIPs/issues/20
 * @dev Based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol
 */
contract StandardToken is ERC20, BasicToken {

  mapping (address => mapping (address => uint256)) allowed;


  /**
   * @dev Transfer tokens from one address to another
   * @param _from address The address which you want to send tokens from
   * @param _to address The address which you want to transfer to
   * @param _value uint256 the amount of tokens to be transferred
   */
  function transferFrom(address _from, address _to, uint256 _value) returns (bool) {
    require(_to != address(0));

    var _allowance = allowed[_from][msg.sender];

    // Check is not needed because sub(_allowance, _value) will already throw if this condition is not met
    // require (_value <= _allowance);

    balances[_from] = balances[_from].sub(_value);
    balances[_to] = balances[_to].add(_value);
    allowed[_from][msg.sender] = _allowance.sub(_value);
    Transfer(_from, _to, _value);
    return true;
  }

  /**
   * @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.
   * @param _spender The address which will spend the funds.
   * @param _value The amount of tokens to be spent.
   */
  function approve(address _spender, uint256 _value) returns (bool) {

    // To change the approve amount you first have to reduce the addresses`
    //  allowance to zero by calling `approve(_spender, 0)` if it is not
    //  already 0 to mitigate the race condition described here:
    //  https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
    require((_value == 0) || (allowed[msg.sender][_spender] == 0));

    allowed[msg.sender][_spender] = _value;
    Approval(msg.sender, _spender, _value);
    return true;
  }

  /**
   * @dev Function to check the amount of tokens that an owner allowed to a spender.
   * @param _owner address The address which owns the funds.
   * @param _spender address The address which will spend the funds.
   * @return A uint256 specifying the amount of tokens still available for the spender.
   */
  function allowance(address _owner, address _spender) constant returns (uint256 remaining) {
    return allowed[_owner][_spender];
  }
  
  /**
   * approve should be called when allowed[_spender] == 0. To increment
   * allowed value is better to use this function to avoid 2 calls (and wait until 
   * the first transaction is mined)
   * From MonolithDAO Token.sol
   */
  function increaseApproval (address _spender, uint _addedValue) 
    returns (bool success) {
    allowed[msg.sender][_spender] = allowed[msg.sender][_spender].add(_addedValue);
    Approval(msg.sender, _spender, allowed[msg.sender][_spender]);
    return true;
  }

  function decreaseApproval (address _spender, uint _subtractedValue) 
    returns (bool success) {
    uint oldValue = allowed[msg.sender][_spender];
    if (_subtractedValue > oldValue) {
      allowed[msg.sender][_spender] = 0;
    } else {
      allowed[msg.sender][_spender] = oldValue.sub(_subtractedValue);
    }
    Approval(msg.sender, _spender, allowed[msg.sender][_spender]);
    return true;
  }

}

/** 
 * =================== HealthToken contracts =============================
 * - HealthToken Token itself
 * - Crowdsale Main crowdsale contract
 * - PartnerCrowdsale Proxy contract for referral partners
 * - PersonalCrowdsale Proxy contract for buyers without own wallet 
 *   (only exchange wallet, for example) 
 */


contract HealthToken is StandardToken, Ownable {

  string public constant name = "HealthToken";
  string public constant symbol = "HLT";
  uint8 public constant decimals = 18;  
 
  /**
  * @dev Send initial amount of tokens to Foundation and Founder
  */
  function init(address foundation, uint256 foundationSupply, address founder, uint256 founderSupply) onlyOwner {
    balances[foundation] = foundationSupply;
    balances[founder] = founderSupply;
    totalSupply = foundationSupply + founderSupply;
    Transfer(0x0, foundation, foundationSupply);
    Transfer(0x0, founder, founderSupply);
  }

  /**
  * @dev Allows to send tokens from Foundation to buyer
  * This function is only used during crowdsale.
  */
  function send(address from, address to, uint256 amount) onlyOwner returns (bool){
    balances[from] = balances[from].sub(amount);
    balances[to] = balances[to].add(amount);
    Transfer(from, to, amount);
    return true;
  }
  
  function getBalance(address who) public constant returns(uint256){
    return balances[who];
  }
}

contract Crowdsale is Ownable {
  using SafeMath for uint256;

  uint256 public constant TOTAL_SUPPLY = 1200000000 ether;          //amount of tokens (not ETH), ether = * 10^18
  uint256 public constant FOUNDATION_SUPPLY = TOTAL_SUPPLY*80/100;
  uint256 public constant FOUNDER_SUPPLY = TOTAL_SUPPLY*20/100;
  uint256 public partnerBonus = 2; //percent of referral partner bonus
  uint256 public referralBonus = 4; //percent of referrer bonus


  address public foundationAddress;
  uint256 public price; //how many HLT we will send for 1 ETH; To finish crowdsale set price to 0

  HealthToken public hlt;

  /**
   * Event for token purchase logging
   * @param purchaser Who paid for the tokens
   * @param beneficiary Who got the tokens
   * @param value Weis paid for purchase
   * @param amount Amount of tokens purchased
   */ 
  event TokenPurchase(address indexed purchaser, address indexed beneficiary, uint256 value, uint256 amount);

  function Crowdsale(address _foundationAddress, address _founderAddress){
    foundationAddress = _foundationAddress;
    hlt = new HealthToken();
    hlt.init(foundationAddress, FOUNDATION_SUPPLY, _founderAddress, FOUNDER_SUPPLY);
  }

  function setPrice(uint256 _price) public onlyOwner {
    price = _price;
  }
  
  function() payable {
    saleTo(msg.sender, 0x0);
  }

  function saleTo(address buyer, address partner) public payable {
    require(price > 0);
    uint256 tokens  = msg.value.mul(price);
    if(partner == 0x0){
      hlt.send(foundationAddress, buyer, tokens);
      TokenPurchase(msg.sender, buyer, msg.value, tokens);
    }else{
      uint256 partnerTokens   = tokens.mul(partnerBonus).div(100);
      uint256 referralTokens  = tokens.mul(referralBonus).div(100);
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

  function setReferralBonus(uint256 _referralBonus ) onlyOwner {
     referralBonus = _referralBonus;
  }

  function setPartnerBonus(uint256  _partnerBonus) onlyOwner {
     partnerBonus = _partnerBonus;
  }

}

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

