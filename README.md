What are the desired features?
1. We want the token token supply to be 1.2 billion.

2. We want the sale to be divided into 3 periods
Pre sale period 1: Price is 70 cents 90 to 60 days
Pre sale period 2: Price is 80 cents 60 to 30 days 
Pre sale period 3: Price is 90 cents 30 days to 1 day
ICO: Price is $1
After ICO the price increase with the following formula:
MAX(1,amount raised / 10 million USD)

3. Have a variable called rate that can be used to change the conversion rate.


Q) Good to have features?
Send money from coinbase or any other exchange wallet. See how proofsuite does it.

Q) Why is migrations useful?
https://www.youtube.com/watch?v=8i03-M_4aT0

Q) How to set gas limit?
if you are on a test network, on testrpc, the option -l or --gasLimit lets you set the gas available.

Q) How to install testrpc?
vk@vks-MacBook-Pro-2 /g/healthcoin> npm install -g ethereumjs-testrpc

Q) How to start testrpc?
testrpc -u 0 -l 5000000
This will set the gas limit to 5000000
Truffle deploy needs testrpc to be running.

Q) Very basic token tutorial?
https://www.youtube.com/watch?v=JHrQ3l2tT78

Q) How to install solc compiler?
Pro-2 /g/healthcoin> npm install -g solc
               