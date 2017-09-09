// ref: https://ethereum.stackexchange.com/questions/2404/upgradeable-smart-contracts?noredirect=1&lq=1

pragma solidity ^0.4.11;

contract Relay {
    address public currentVersion;

    function Relay(){
    }

    function update(address newAddress){
        require(msg.sender == 0x6a35399974126a6d739D3FA139AE64E32303DF8a); // only the owner can call to update the value of current version.
        currentVersion = newAddress;
    }

    // DELEGATECALL basically says that I'm a contract and I'm allowing (delegating) you to do whatever you want to my storage
    // ref: https://ethereum.stackexchange.com/questions/3667/difference-between-call-callcode-and-delegatecall
    function(){
        require(currentVersion.delegatecall(msg.data));
    }
}