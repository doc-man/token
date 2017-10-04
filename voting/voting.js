var $ = jQuery;
jQuery(document).ready(function($) {
    $(window).on("load", isWeb3Available);
    initCrowdsaleForm();
    const votingContractUrl      = '../build/contracts/SimpleVoting.json';

    let votingContract;


    function initCrowdsaleForm(){
        setTimeout(function(){
            $('#loadContractsBtn').click();    
        }, 500);
    }


    $('#loadContractsBtn').click(function(){
        $.ajax(votingContractUrl,{'dataType':'json', 'cache':'false', 'data':{'t':Date.now()}}).done(function( data ) {
            votingContract = data;
            $('#votingABI').text(JSON.stringify(votingContract.abi));
        });
    });



    $('#publishVotingContract').click(function(){
        printError(null);
        if(!isWeb3Connected()) return;
        if(!votingContract) {printError('Load contracts first!'); return;}

        let foundationAddress = $('input[name=foundationAddress]', '#publishVotingForm').val();

        let contractObj = web3.eth.contract(votingContract.abi);
        console.log('Creating contract '+votingContract.contract_name+' with parameters:\n', 
            foundationAddress,
            'ABI', JSON.stringify(votingContract.abi));
        let contractInstance = contractObj.new(
            foundationAddress,
            {
                from: web3.eth.accounts[0], 
                data: votingContract.unlinked_binary,
            },
            function(error, contract){
                waitForContractCreation(error, contract, 
                    $('input[name=publishedTx]','#publishVotingForm'),
                    $('input[name=publishedVotingAddress]','#publishVotingForm'),
                );
            }
        );
    });

    //====================================================
    function waitForContractCreation(error, contract, txField, contractField, publishedCallback){
        if(!!error) {
            console.error('Publishing failed: ', error);
            let message = error.message.substr(0,error.message.indexOf("\n"));
            printError(message);
            return;
        }

        if (typeof contract.transactionHash !== 'undefined') {
            console.log('Transaction published! transactionHash: ' + contract.transactionHash);
            if(txField) txField.val(contract.transactionHash);
            let timer = setInterval(function(){
                web3.eth.getTransactionReceipt(contract.transactionHash, function(error, receipt){
                    if(receipt != null){
                         clearInterval(timer);
                         console.log('Contract mined! address: ' + receipt.contractAddress + ' transactionHash: ' + contract.transactionHash);
                         if(contractField) contractField.val(receipt.contractAddress);
                         if(typeof publishedCallback === 'function') publishedCallback(receipt);
                    }
                });
            });
        }else{
            console.error('Unknown error. Contract: ', contract);
        }             
    }

    function parseContractPropertyResponce(error, result, callback){
        if(!error) {
            callback(result);
        }else{
            console.error(error); 
            return;
        }
    }

    //====================================================

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
