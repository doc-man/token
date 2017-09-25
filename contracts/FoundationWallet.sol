pragma solidity ^0.4.11;

import './zeppelin/ownership/Ownable.sol';
import './zeppelin/token/ERC20Basic.sol';

/**
 * The shareholder association contract itself
 */
contract Association is Ownable {

    uint public minimumQuorum;
    uint public debatingPeriodInMinutes;
    Proposal[] public proposals;
    uint public numProposals;
    ERC20Basic public token;

    event ProposalAdded(uint proposalID, address recipient, uint amount, string description);
    event Voted(uint proposalID, bool position, address voter);
    event ProposalTallied(uint proposalID, uint result, uint quorum, bool active);
    event ChangeOfRules(uint newMinimumQuorum, uint newDebatingPeriodInMinutes, address newSharesTokenAddress);

    enum Asset{Ether, Token}

    struct Proposal {
        address recipient;
        Asset asset;
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
    function Association(ERC20Basic sharesAddress, uint minimumSharesToPassAVote, uint minutesForDebate) payable {
        changeVotingRules(sharesAddress, minimumSharesToPassAVote, minutesForDebate);
    }

    /**
     * Change voting rules
     *
     * Make so that proposals need tobe discussed for at least `minutesForDebate/60` hours
     * and all voters combined must own more than `minimumSharesToPassAVote` shares of token `sharesAddress` to be executed
     *
     * @param sharesAddress token address
     * @param minimumSharesToPassAVote proposal can vote only if the sum of shares held by all voters exceed this number
     * @param minutesForDebate the minimum amount of delay between when a proposal is made and when it can be executed
     */
    function changeVotingRules(ERC20Basic sharesAddress, uint minimumSharesToPassAVote, uint minutesForDebate) onlyOwner {
        token = ERC20Basic(sharesAddress);
        if (minimumSharesToPassAVote == 0 ) minimumSharesToPassAVote = 1;
        minimumQuorum = minimumSharesToPassAVote;
        debatingPeriodInMinutes = minutesForDebate;
        ChangeOfRules(minimumQuorum, debatingPeriodInMinutes, token);
    }

    /**
     * Add Proposal
     * @param beneficiary who to send the ether to
     * @param asset what is proposed to send
     * @param weiAmount amount of ether to send, in wei
     * @param jobDescription Description of job
     */
    function newProposal (address beneficiary, Asset asset, uint weiAmount, string jobDescription ) onlyShareholders returns(uint) {
        uint proposalID = proposals.length++;
        Proposal storage p = proposals[proposalID];
        p.recipient = beneficiary;
        p.asset = asset;
        p.amount = weiAmount;
        p.description = jobDescription;
        p.votingDeadline = now + debatingPeriodInMinutes * 1 minutes;
        p.executed = false;
        p.proposalPassed = false;
        p.numberOfVotes = 0;
        ProposalAdded(proposalID, beneficiary, weiAmount, jobDescription);
        numProposals = proposalID+1;

        return proposalID;
    }

    /**
     * Add Proposal to send Ether
     * @param beneficiary who to send the ether to
     * @param weiAmount amount of ether to send, in wei
     * @param jobDescription Description of job
     */
    function newEtherProposal(address beneficiary, uint weiAmount, string jobDescription) onlyShareholders returns(uint) {
        return newProposal(beneficiary, Asset.Ether , weiAmount, jobDescription);
    }

    /**
     * Add Proposal to send Tokens
     * @param beneficiary who to send the ether to
     * @param weiAmount amount of tokens to send, in wei
     * @param jobDescription Description of job
     */
    function newTokenProposal(address beneficiary, uint weiAmount, string jobDescription) onlyShareholders returns (uint) {
        return newProposal(beneficiary, Asset.Token , weiAmount, jobDescription);
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

        if(p.asset == Asset.Ether) {
            p.recipient.transfer(p.amount);
        } else if(p.asset == Asset.Token) {
            assert(token.transfer(p.recipient, p.amount));
        } else {
            revert();
        }

    }
}