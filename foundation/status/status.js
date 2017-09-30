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
    
    function loadContract(url, callback){
        $.ajax(url,{'dataType':'json', 'cache':'false', 'data':{'t':Date.now()}}).done(callback);
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


        loadContract(tokenContractUrl, function(data){
            tokenContract = data;
        });
        loadContract(foundationContractUrl, function(data){
            foundationContract = data;
            let contractObj = web3.eth.contract(foundationContract.abi); //The json interface for the contract to instantiate

            pContractInstance = contractObj.at("0x4b52e2a3e093c10e7a4e7a30b1509050ea5273c1");
            console.log("hello");
            pContractInstance.getTokenBalance(function(error, result){
                if(!error){
                    $('input[name=numberOfHLT]','#dashboardForm').val(result);
                }else{
                    console.log('Can\'t find numbner of HLT', error);
                }
            });
            pContractInstance.getEtherBalance(function(error, result){
                if(!error){
                    $('input[name=numberOfEther]','#dashboardForm').val(result);
                }else{
                    console.log('Can\'t find number of ether', error);
                }
            });
            pContractInstance.votingContract(function(error, result){
                if(!error){
                    $('input[name=votingContract]','#dashboardForm').val(result);
                }else{
                    console.log('Can\'t find voting contract address', error);
                }
            });
    
        });
        loadContract(votingContractUrl, function(data){
            votingContract = data;
            let contractObj = web3.eth.contract(votingContract.abi); //The json interface for the contract to instantiate
            
            pContractInstance = contractObj.at("0x2f0c07672ccddc9453af3fbacda5100d6e77ce50");
            console.log("hello");
            pContractInstance.minimumQuorum(function(error, result){
                if(!error){
                    $('input[name=minimumQuorum]','#dashboardForm').val(result);
                }else{
                    console.log('Can\'t find minimum quorum', error);
                }
            });

            pContractInstance.debatingPeriodInSeconds(function(error, result){
                if(!error){
                    $('input[name=debatingPeriodInSeconds]','#dashboardForm').val(result);
                }else{
                    console.log('Can\'t find debating Period In Seconds', error);
                }
            });
            
            pContractInstance.numProposals(function(error, result){
                if(!error){
                    $('input[name=numProposals]','#dashboardForm').val(result);
                }else{
                    console.log('Can\'t find numProposals', error);
                }
            });
            
        });

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
