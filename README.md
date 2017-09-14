1. Have a variable called rate that can be used to change the conversion rate. During the different sale periods.

2. Send money from coinbase or any other exchange wallet.

3. Give bonus to advisiors.
               

TODO:
1. Allow buy from ex.
2. When a user upload their medical records then give them some HLT.

QUESTIONS:
1. What if there is no more tokens available on Foundation address and price is not zero?
Currently, we will try to send tham anyway, will fail on SafeMath.sub() and transaction will be reverted eating all gas.
We can check if there are tokens available before sending internal transaction, but this will eat some gas for each token sale and for now (before Metropolis release) require() will eat all gas anyway.