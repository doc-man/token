pragma solidity ^0.4.11;

import './zeppelin/token/ERC20Basic.sol';
import './SimpleVoting.sol';
import './HealthToken.sol';

contract FoundationWallet {
    uint256 public constant TOTAL_SUPPLY = 1200000000 ether;          //amount of tokens (not ETH), ether = * 10^18
    uint256 public constant FOUNDATION_SUPPLY = TOTAL_SUPPLY*80/100;
    uint256 public constant FOUNDER_SUPPLY = TOTAL_SUPPLY*20/100;


    HealthToken public token;
    address public votingContract;

    modifier onlyVotingContract(){
        require(msg.sender == votingContract);
        _;
    }

    function FoundationWallet(address _founderAddress){
        token = new HealthToken();
        token.init(this, FOUNDATION_SUPPLY, _founderAddress, FOUNDER_SUPPLY);
        uint256 minimumSharesToPassAVote = TOTAL_SUPPLY/10; 
        uint256 secondsForDebate = 30 days;
        votingContract = new SimpleVoting(this, minimumSharesToPassAVote, secondsForDebate);
    }

    function() payable {
    }

    function setVotingContract(address newVotingContract) onlyVotingContract public returns(bool){
        votingContract = newVotingContract;
        return true;
    }
    function transferEther(address to, uint256 amount) onlyVotingContract public returns(bool){
        to.transfer(amount);
        return true;
    }
    function transferTokens(address to, uint256 amount) onlyVotingContract public returns(bool){
        assert(token.transfer(to, amount));
        return true;
    }
    function getEtherBalance() public constant returns(uint256){
        return this.balance;
    }
    function getTokenBalance() public constant returns(uint256){
        return token.balanceOf(this);
    }
    function getTokenAddress() public constant returns(address){
        return address(token);
    }
}