pragma solidity ^0.4.11;

import './zeppelin/token/ERC20Basic.sol';
import './SimpleVoting.sol';

contract FoundationWallet {
    uint256 public constant minimumSharesToPassAVote = 120000000; 
    uint256 public constant secondsForDebate = 30 days;

    ERC20Basic public token;
    address public votingContract;

    modifier onlyVotingContract(){
        require(msg.sender == votingContract);
        _;
    }

    function FoundationWallet(ERC20Basic _token){
        token = _token;
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