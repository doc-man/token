1. There is a variable called rate that can be used to change the conversion rate. During the different sale periods.

2. Send money from coinbase or any other exchange wallet and later claim the tokens.

3. Give bonus to advisiors.
               
Todo:
1. When a user upload their prescriptions then give them some HLT.

QUESTIONS:
1. What if there is no more tokens available on Foundation address and price is not zero?
Currently, we will try to send tham anyway, will fail on SafeMath.sub() and transaction will be reverted eating all gas.
We can check if there are tokens available before sending internal transaction, but this will eat some gas for each token sale and for now (before Metropolis release) require() will eat all gas anyway.

Q) What is the goals of this smart contract system?
1. The HCF foundation gives 20% of tokens to the founder and keeps 80% for itself.
2. The foundation has a pointer to the voting contract. This voting contract can be upgraded through a vote mechanism.
3. Existing HLT token holders can make Poposals to the voting contract.
4. Existing HLT token holders can then vote on the prpopals.
5. Once the time foe debate has passed than propoals can be executed and if they win then Tokens are sent to the proposal.

Q) How to run it on local machine?
1. python -m SimpleHTTPServer 8000

2. Then open in 5 tabs:
http://127.0.0.1:8000/foundation/genesis/
http://127.0.0.1:8000/voting/
http://127.0.0.1:8000/proposals/0/
http://127.0.0.1:8000/foundation/interact/
http://127.0.0.1:8000/foundation/status/

3. Make sure metamask extension is installed on chromium.
These steps were tested with Chromium Version 62.0.3168.0 (Developer Build) (64-bit)

4. Use the rinkeby test network in metamask.

5. Install truffle
   $ npm install -g truffle

6. Compile
   $ truffle compile

7. Create two accounts on metamask
   1. Founder
   2. Foundation creator

8. Get some ether from rinkeby faucet to the foundation creator wallet.
faucet.rinkeby.io

9. Use http://127.0.0.1:8000/foundation/genesis/ to create the foundation.
   Use step 2 -> Publish foundation contract.

10. Go to tab 2 -> http://127.0.0.1:8000/voting/
Use Step 2 to Publish simple voting contract.

11. Go to tab 1 -> Initialize foundation with simple voting

12. Go to tab 3 -> http://127.0.0.1:8000/proposals/0/
In step 2 -> Enter the foundation address and token address.
Click publish.
This will give the Crowdsale published at.

13. Lets make a new proposal
Go to tab 4 -> http://127.0.0.1:8000/foundation/interact/
Enter the voting address, beneficiary address (This is the crowssale contract address), amount and description

14. In editor open the file status.js and change the foundation address that you received in tab 1

15. Refresh tab 5 and that will give the details.

16. Lets vote on the proposal
Go to tab 4 -> http://127.0.0.1:8000/foundation/interact/
Under step 2: Enter the voting address and proposal number and then click on vote.

17. Go to tab 5 and click on refresh to see the vote count.
