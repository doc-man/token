1. There is a variable called rate that can be used to change the conversion rate. During the different sale periods.

2. Send money from coinbase or any other exchange wallet and later claim the tokens.

3. Give bonus to advisiors.
               
Todo:
1. When a user upload their prescriptions then give them some HLT.

QUESTIONS:
1. What if there is no more tokens available on Foundation address and price is not zero?
Currently, we will try to send tham anyway, will fail on SafeMath.sub() and transaction will be reverted eating all gas.
We can check if there are tokens available before sending internal transaction, but this will eat some gas for each token sale and for now (before Metropolis release) require() will eat all gas anyway.


Q) How to run it on local machine?
1. python -m SimpleHTTPServer 8000

2. Then open in 5 tabs:
http://127.0.0.1:8000/foundation/genesis/
http://127.0.0.1:8000/voting/
http://127.0.0.1:8000/proposals/0/
http://127.0.0.1:8000/foundation/interact/
http://127.0.0.1:8000/foundation/status/

3. Make sure metamask extension is installed.

4. Use the rinkeby test network in metamask.

5. Install truffle
   $ npm install -g truffle

6. Compile
   $ truffle compile