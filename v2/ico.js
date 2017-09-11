var $ = jQuery;
jQuery(document).ready(function($) {
    $(window).on("load", isWeb3Available);
    initCrowdsaleForm();
    const tokenContractUrl       = './build/contracts/HealthToken.json';
    const crowdsaleContractUrl   = './build/contracts/Crowdsale.json';
    let tokenContract;
    let crowdsaleContract;


    function initCrowdsaleForm(){
        setTimeout(function(){
            $('#loadContractsBtn').click();    
        }, 500);
    }


    $('#loadContractsBtn').click(function(){
        $.ajax(tokenContractUrl,{'dataType':'json', 'cache':'false', 'data':{'t':Date.now()}}).done(function( data ) {
            tokenContract = data;
            $('#tokenABI').text(JSON.stringify(tokenContract.abi));
        });
        $.ajax(crowdsaleContractUrl,{'dataType':'json', 'cache':'false', 'data':{'t':Date.now()}}).done(function( data ) {
            crowdsaleContract = data;
            $('#crowdsaleABI').text(JSON.stringify(crowdsaleContract.abi));
        });

    });



    $('#publishContract').click(function(){
        printError(null);
        if(!isWeb3Connected()) return;
        if(!crowdsaleContract) {printError('Load contracts first!'); return;}

        // let price = Math.round($('input[name=price]', '#publishContractForm').val());
        let foundationAddress = $('input[name=foundationAddress]', '#publishContractForm').val();
        let founderAddress = $('input[name=founderAddress]', '#publishContractForm').val();



        let contractObj = web3.eth.contract(crowdsaleContract.abi);
        console.log('Creating contract '+crowdsaleContract.contract_name+' with parameters:\n', 
            foundationAddress, founderAddress,
            'ABI', JSON.stringify(crowdsaleContract.abi));
        let contractInstance = contractObj.new(
            foundationAddress, founderAddress,
            {
                from: web3.eth.accounts[0], 
                data: crowdsaleContract.unlinked_binary,
            },
            function(error, contract){
                waitForContractCreation(error, contract, 
                    $('input[name=publishedTx]','#publishContractForm'),
                    $('input[name=publishedCrowdsaleAddress]','#publishContractForm'),
                    function(contract){
                        contract.hlt(function(error, result){
                            if(!error){
                                $('input[name=publishedTokenAddress]','#publishContractForm').val(result);
                            }else{
                                console.log('Can\'t find token address', error);
                            }
                        });
                        $('input[name=crowdsaleAddress]', '#crowdsaleContractForm').val(contract.address);   
                    }
                );
            }
        );
    });



    $('#loadInfo', '#crowdsaleContractForm').click(function(){
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
        if(!tokenContract) {printError('Load contracts first!'); return;}

        let publishedAddress = $('input[name=crowdsaleAddress]', '#crowdsaleContractForm').val();

        let contractObj = web3.eth.contract(crowdsaleContract.abi);
        let contractInstance = contractObj.at(publishedAddress);

        let price = Math.round($('input[name=withdrawAmount]', '#crowdsaleContractForm').val());

        contractInstance.setPrice(price, function(error, result){
            if(!error){
                console.log("ICO setPrice tx: ",result);    
            }else{
                console.error(error)
            }
        });
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
            if(typeof contract.address == 'undefined'){
                console.log('Transaction published! transactionHash: ' + contract.transactionHash);
                if(txField) txField.val(contract.transactionHash);
            }else{
                console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                if(contractField) contractField.val(contract.address);
                if(typeof publishedCallback === 'function') publishedCallback(contract);
            }
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
