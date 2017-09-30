var $ = jQuery;
jQuery(document).ready(function($) {
    $(window).on("load", isWeb3Available);
    initCrowdsaleForm();
    const crowdsaleContractUrl   = '../../build/contracts/Crowdsale.json';
    const partnerContractUrl     = '../../build/contracts/PartnerCrowdsale.json';
    const personalContractUrl     = '../../build/contracts/PersonalCrowdsale.json';


    let crowdsaleContract;
    let partnerContract;
    let personalContract;


    function initCrowdsaleForm(){
        setTimeout(function(){
            $('#loadContractsBtn').click();    
        }, 500);
    }


    $('#loadContractsBtn').click(function(){
        $.ajax(crowdsaleContractUrl,{'dataType':'json', 'cache':'false', 'data':{'t':Date.now()}}).done(function( data ) {
            crowdsaleContract = data;
            $('#crowdsaleABI').text(JSON.stringify(crowdsaleContract.abi));
        });
        $.ajax(partnerContractUrl,{'dataType':'json', 'cache':'false', 'data':{'t':Date.now()}}).done(function( data ) {
            partnerContract = data;
            $('#partnerContractABI').text(JSON.stringify(partnerContract.abi));
        });
        $.ajax(personalContractUrl,{'dataType':'json', 'cache':'false', 'data':{'t':Date.now()}}).done(function( data ) {
            personalContract = data;
            $('#personalContractABI').text(JSON.stringify(personalContract.abi));
        });
    });



    $('#publishCrowdsaleContract').click(function(){
        printError(null);
        if(!isWeb3Connected()) return;
        if(!crowdsaleContract) {printError('Load contracts first!'); return;}

        let foundationAddress = $('input[name=foundationAddress]', '#publishCrowdsaleForm').val();
        let tokenAddress = $('input[name=tokenAddress]', '#publishCrowdsaleForm').val();

        let contractObj = web3.eth.contract(crowdsaleContract.abi);
        console.log('Creating contract '+crowdsaleContract.contract_name+' with parameters:\n', 
             tokenAddress, foundationAddress, 
            'ABI', JSON.stringify(crowdsaleContract.abi));
        let contractInstance = contractObj.new(
             tokenAddress, foundationAddress, 
            {
                from: web3.eth.accounts[0], 
                data: crowdsaleContract.unlinked_binary,
            },
            function(error, contract){
                waitForContractCreation(error, contract, 
                    $('input[name=publishedTx]','#publishCrowdsaleForm'),
                    $('input[name=publishedCrowdsaleAddress]','#publishCrowdsaleForm'),
                );
            }
        );
    });


    $('#loadInfo', '#crowdsaleContractForm').click(function(){
        printError(null);
        if(!isWeb3Connected()) return;

        let publishedAddress = $('input[name=crowdsaleAddress]', '#crowdsaleContractForm').val();

        let contractObj = web3.eth.contract(crowdsaleContract.abi);
        let contractInstance = contractObj.at(publishedAddress);

        contractInstance.price(function(error, result){
            parseContractPropertyResponce(error, result, function(){
                var price = result.toFixed();
                $('input[name=price]', '#crowdsaleContractForm').val(price);
            });
        });
    });

    $('#setPrice', '#crowdsaleContractForm').click(function(){
        printError(null);
        if(!isWeb3Connected()) return;

        let publishedAddress = $('input[name=crowdsaleAddress]', '#crowdsaleContractForm').val();

        let contractObj = web3.eth.contract(crowdsaleContract.abi);
        let contractInstance = contractObj.at(publishedAddress);

        let price = Math.round($('input[name=price]', '#crowdsaleContractForm').val());

        console.log('Set price on'+crowdsaleContract.contract_name+' with parameters:\n', price);
        contractInstance.setPrice(price, function(error, result){
            if(!error){
                console.log("ICO setPrice tx: ",result);    
            }else{
                console.error(error)
            }
        });
    });

    $('#publishPartnerContract', '#publishPartnerContractForm').click(function(){
        printError(null);
        if(!isWeb3Connected()) return;
        if(!tokenContract) {printError('Load contracts first!'); return;}

        let crowdsaleAddress = $('input[name=crowdsaleAddress]', '#publishPartnerContractForm').val();
        let partnerAddress = $('input[name=partnerAddress]', '#publishPartnerContractForm').val();


        let contractObj = web3.eth.contract(partnerContract.abi);
        console.log('Creating contract '+partnerContract.contract_name+' with parameters:\n', 
            crowdsaleAddress, partnerAddress,
            'ABI', JSON.stringify(partnerContract.abi));
        let contractInstance = contractObj.new(
            crowdsaleAddress, partnerAddress,
            {
                from: web3.eth.accounts[0], 
                data: partnerContract.unlinked_binary,
            },
            function(error, contract){
                waitForContractCreation(error, contract, 
                    $('input[name=publishedTx]','#publishPartnerContractForm'),
                    $('input[name=publishedCrowdsaleAddress]','#publishPartnerContractForm'),
                    function(contract){
                    }
                );
            }
        );

    });

    $('#generateAccessKeyHash','#publishPersonalContractForm').click(function(){
        printError(null);
        if(!isWeb3Connected()) return;
        let key = $('input[name=accessKey]', '#publishPersonalContractForm').val();
        let hash = web3.sha3(key);
        $('input[name=accessKeyHash]', '#publishPersonalContractForm').val(hash);
    });
    $('#publishPersonalContract', '#publishPersonalContractForm').click(function(){
        printError(null);
        if(!isWeb3Connected()) return;
        if(!tokenContract) {printError('Load contracts first!'); return;}

        let crowdsaleAddress = $('input[name=crowdsaleAddress]', '#publishPersonalContractForm').val();
        let partnerAddress = $('input[name=partnerAddress]', '#publishPersonalContractForm').val();
        let accessKeyHash = $('input[name=accessKeyHash]', '#publishPersonalContractForm').val();

        let contractObj = web3.eth.contract(personalContract.abi);
        console.log('Creating contract '+personalContract.contract_name+' with parameters:\n', 
            crowdsaleAddress, partnerAddress, accessKeyHash,
            'ABI', JSON.stringify(personalContract.abi));
        let contractInstance = contractObj.new(
            crowdsaleAddress, partnerAddress, accessKeyHash,
            {
                from: web3.eth.accounts[0], 
                data: personalContract.unlinked_binary,
            },
            function(error, contract){
                waitForContractCreation(error, contract, 
                    $('input[name=publishedTx]','#publishPersonalContractForm'),
                    $('input[name=publishedCrowdsaleAddress]','#publishPersonalContractForm'),
                    function(contract){
                        $('input[name=crowdsaleAddress]','#claimFromPersonalContractForm').val(contract.address); 
                    }
                );
            }
        );

    });
    $('#claimFromPersonalContract', '#claimFromPersonalContractForm').click(function(){
        printError(null);
        if(!isWeb3Connected()) return;
        if(!tokenContract) {printError('Load contracts first!'); return;}

        let crowdsaleAddress = $('input[name=crowdsaleAddress]', '#claimFromPersonalContractForm').val();
        let toAddress = $('input[name=toAddress]', '#claimFromPersonalContractForm').val();
        let accessKey = $('input[name=accessKey]', '#claimFromPersonalContractForm').val();

        let contractObj = web3.eth.contract(personalContract.abi);
        let contractInstance = contractObj.at(crowdsaleAddress);

        console.log('Calling '+personalContract.contract_name+'.claim() with parameters:\n', 
            toAddress, accessKey,
            'ABI', JSON.stringify(personalContract.abi));
        contractInstance.claim(
            toAddress, accessKey,
            function(error, result){
                if(!error){
                    console.log("Claim tx: ",result);    
                }else{
                    console.error(error)
                }
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
            web3.eth.getTransactionReceipt(contract.transactionHash, function(error, receipt){
                if(receipt != null){
                    console.log('Contract mined! address: ' + receipt.contractAddress + ' transactionHash: ' + contract.transactionHash);
                    if(contractField) contractField.val(receipt.contractAddress);
                    if(typeof publishedCallback === 'function') publishedCallback(receipt.contractAddress);
                }
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
