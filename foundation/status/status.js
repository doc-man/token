var $ = jQuery;
jQuery(document).ready(function($) {

    let web3;

    function init(){
        web3 = loadWeb3();
        if(web3 == null) return;
        //console.log("web3: ",web3);
    }

    function loadWeb3(){
        if(typeof window.web3 == "undefined"){
            printError('No MetaMask found');
            return null;
        }
        let Web3 = require('web3');
        let web3 = new Web3();
        web3.setProvider(window.web3.currentProvider);
        return web3;
    }
    

    $(window).on("load", function(){

        init();    
        alert("hello");
        const tokenContractUrl       = '../../build/contracts/HealthToken.json';
        const foundationContractUrl  = '../../build/contracts/FoundationContract.json';
        const votingContractUrl      = '../../build/contracts/SimpleVoting.json';

        let tokenContract;
        let foundationContract;
        let votingContract;



        let contractObj = web3.eth.contract(foundationContract.abi); //The json interface for the contract to instantiate

        pContractInstance = contractObj.at("0x4b52e2a3e093c10e7a4e7a30b1509050ea5273c1");
        console.log("hello");
        console.log(pContractInstance);
    });

    function isWeb3Available(){
        if (typeof Web3 == 'undefined') {
            printError('web3.js unavailable. Please, install <a href="https://metamask.io">MetaMask</a>.');
            return false;
        }
        if (typeof web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            window.web3 = new Web3(web3.currentProvider);
        } else {
            //console.log('No web3? You should consider trying MetaMask!')
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        return true;
    }
    function isWeb3Connected(){
        if(!isWeb3Available()){
            return false;
        }
        if(!web3.isConnected()) {
            printError('web3.js is available, but not connected.');
            return false;
        }
        if(!web3.eth.accounts[0]) {
            printError('Eth account unavailable. Please unlock MetaMask.');
            return false;
        }
        // if(web3.version.network != 3) {
        //     printError('We are not in Ropsten network!');
        //     return false;
        // }
        return true;
    }

    function timeStringToTimestamp(str){
        return Math.round(Date.parse(str)/1000);
    }
    function timeTimestampToLocalString(timestamp){
        let tzoffset = (new Date()).getTimezoneOffset()*60*1000;
        return (new Date(timestamp-tzoffset)).toISOString().slice(0,19);
    }
    function timeDateToLocalString(date){
        let tzoffset = (new Date()).getTimezoneOffset()*60*1000;
        return (new Date(date.getTime()-tzoffset)).toISOString().slice(0,19);
    }


    function printError(msg){
        if(msg == null || msg == ''){
            $('#errormsg').html('');    
        }else{
            console.error(msg);
            $('#errormsg').html(msg);
        }
    }


});
