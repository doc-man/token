pragma solidity ^0.4.11;

import './zeppelin/ownership/Ownable.sol';
import './zeppelin/token/ERC20Basic.sol';
import './FoundationWallet.sol';

contract TerminatableProposal {
    function terminate() public;
}

/**
 * The shareholder association contract itself
 */
contract SimpleVoting is Ownable {

    uint public minimumQuorum;
    uint public debatingPeriodInSeconds;
    Proposal[] public proposals;
    uint public numProposals;
    FoundationWallet public foundationWallet;
    ERC20Basic public token;

    event ProposalAdded(uint proposalID, address recipient, uint amount, string description);
    event Voted(uint proposalID, bool position, address voter);
    event ProposalTallied(uint proposalID, uint result, uint quorum, bool active);
    event ChangeOfRules(uint newMinimumQuorum, uint newDebatingPeriodInSeconds, address newSharesTokenAddress);

    enum Type{Ether, Token, VotingAddress, Terminate}

    struct Proposal {
        Type typeOfProposal;
        address recipient;
        uint amount;
        string description;
        uint votingDeadline;
        bool executed;
        bool proposalPassed;
        uint numberOfVotes;
        Vote[] votes;
        mapping (address => bool) voted;
    }

    struct Vote {
        bool inSupport;
        address voter;
    }

    // Modifier that allows only shareholders to vote and create new proposals
    modifier onlyShareholders {
        require(token.balanceOf(msg.sender) > 0);
        _;
    }

    /**
     * Constructor function
     *
     * First time setup
     */
    function SimpleVoting(FoundationWallet _foundationWallet, uint minimumSharesToPassAVote, uint secondsForDebate) payable {
        foundationWallet = _foundationWallet;
        token = ERC20Basic(foundationWallet.getTokenAddress());
        changeVotingRules(minimumSharesToPassAVote, secondsForDebate);
    }

    /**
     * Change voting rules
     *
     * Make so that proposals need tobe discussed for at least `minutesForDebate/60` hours
     * and all voters combined must own more than `minimumSharesToPassAVote` shares of token `sharesAddress` to be executed
     *
     * @param minimumSharesToPassAVote proposal can vote only if the sum of shares held by all voters exceed this number
     * @param secondsForDebate the minimum amount of delay between when a proposal is made and when it can be executed
     */
    function changeVotingRules(uint minimumSharesToPassAVote, uint secondsForDebate) onlyOwner public {
        if (minimumSharesToPassAVote == 0 ) minimumSharesToPassAVote = 1;
        minimumQuorum = minimumSharesToPassAVote;
        debatingPeriodInSeconds = secondsForDebate;
        ChangeOfRules(minimumQuorum, debatingPeriodInSeconds, token);
    }

    /**
     * Add Proposal
     * @param typeOfProposal what is proposed
     * @param beneficiary who to send the ether to
     * @param weiAmount amount of ether to send, in wei
     * @param proposalDescription Description of proposal
     */
    function newProposal (Type typeOfProposal, address beneficiary, uint weiAmount, string proposalDescription ) onlyShareholders returns(uint) {
        uint proposalID = proposals.length++;
        Proposal storage p = proposals[proposalID];
        p.recipient = beneficiary;
        p.typeOfProposal = typeOfProposal;
        p.amount = weiAmount;
        p.description = proposalDescription;
        p.votingDeadline = now + debatingPeriodInSeconds;
        p.executed = false;
        p.proposalPassed = false;
        p.numberOfVotes = 0;
        ProposalAdded(proposalID, beneficiary, weiAmount, proposalDescription);
        numProposals = proposalID+1;

        return proposalID;
    }

    /**
     * Add Proposal to send Ether
     * @param beneficiary who to send the ether to
     * @param weiAmount amount of ether to send, in wei
     * @param proposalDescription Description of proposal
     */
    function newEtherProposal(address beneficiary, uint weiAmount, string proposalDescription) onlyShareholders returns(uint) {
        return newProposal(Type.Ether, beneficiary, weiAmount, proposalDescription);
    }

    /**
     * Add Proposal to send Tokens
     * @param beneficiary who to send the ether to
     * @param weiAmount amount of tokens to send, in wei
     * @param proposalDescription Description of proposal
     */
    function newTokenProposal(address beneficiary, uint weiAmount, string proposalDescription) onlyShareholders returns (uint) {
        return newProposal(Type.Token, beneficiary, weiAmount, proposalDescription);
    }

    /**
     * Add Proposal to send Tokens
     * @param newVotingContractAddress who to send the ether to
     * @param proposalDescription Description of proposal
     */
    function newVotingContractProposal(address newVotingContractAddress, string proposalDescription) onlyShareholders returns (uint) {
        return newProposal(Type.VotingAddress, newVotingContractAddress, 0, proposalDescription);
    }

    function newTerminateProposal(address proposalAddress, string proposalDescription) onlyShareholders returns (uint) {
        return newProposal(Type.Terminate, proposalAddress, 0, proposalDescription);
    }

    /**
     * Log a vote for a proposal
     *
     * Vote `supportsProposal? in support of : against` proposal #`proposalNumber`
     *
     * @param proposalNumber number of proposal
     * @param supportsProposal either in favor or against it
     */
    function vote(uint proposalNumber, bool supportsProposal) onlyShareholders returns (uint) {
        Proposal storage p = proposals[proposalNumber];
        require(p.voted[msg.sender] != true);

        uint voteID = p.votes.length++;
        p.votes[voteID] = Vote({inSupport: supportsProposal, voter: msg.sender});
        p.voted[msg.sender] = true;
        p.numberOfVotes = voteID +1;
        Voted(proposalNumber,  supportsProposal, msg.sender);
        return voteID;
    }

    /**
     * Finish vote
     *
     * Count the votes proposal #`proposalNumber` and execute it if approved
     *
     * @param proposalNumber proposal number
     */
    function executeVoting(uint proposalNumber) {
        Proposal storage p = proposals[proposalNumber];

        require(now > p.votingDeadline                                             // If it is past the voting deadline
            && !p.executed);                                                       // and it has not already been executed


        // ...then tally the results
        uint quorum = 0;
        uint yea = 0;
        uint nay = 0;

        for (uint i = 0; i <  p.votes.length; ++i) {
            Vote storage v = p.votes[i];
            uint voteWeight = token.balanceOf(v.voter);
            quorum += voteWeight;
            if (v.inSupport) {
                yea += voteWeight;
            } else {
                nay += voteWeight;
            }
        }

        require(quorum >= minimumQuorum); // Check if a minimum quorum has been reached

        if (yea > nay ) {
            // Proposal passed; execute the transaction

            p.executed = true;

            p.proposalPassed = true;
        } else {
            // Proposal failed
            p.proposalPassed = false;
        }

        // Fire Events
        ProposalTallied(proposalNumber, yea - nay, quorum, p.proposalPassed);
    }

    function executeProposal(uint proposalNumber){
        Proposal storage p = proposals[proposalNumber];
        require(p.proposalPassed && !p.executed);
        p.executed = true;

        if(p.typeOfProposal == Type.Ether) {
            assert(foundationWallet.transferEther(p.recipient, p.amount));
        } else if(p.typeOfProposal == Type.Token) {
            assert(foundationWallet.transferTokens(p.recipient, p.amount));
        } else if(p.typeOfProposal == Type.VotingAddress) {
            assert(foundationWallet.setVotingContract(p.recipient));
        } else if(p.typeOfProposal == Type.Terminate) {
            TerminatableProposal(p.recipient).terminate();
        } else {
            revert();
        }

    }
}