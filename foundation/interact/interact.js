var $ = jQuery;
jQuery(document).ready(function($) {

    const tokenContractUrl       = '../../build/contracts/HealthToken.json';
    const foundationContractUrl  = '../../build/contracts/FoundationContract.json';
    const votingContractUrl      = '../../build/contracts/SimpleVoting.json';

    let web3;
    let tokenContract;
    let foundationContract;
    let votingContract;
    
    function loadContract(url, callback){
        $.ajax(url,{'dataType':'json', 'cache':'false', 'data':{'t':Date.now()}}).done(callback);
    }


   // Ref: https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md#partly_sunny-web3---ethereum-browser-environment-check     
    window.addEventListener('load', function() {
        
          // Checking if Web3 has been injected by the browser (Mist/MetaMask)
          if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            let Web3 = require('web3');
            web3 = new Web3();
            web3.setProvider(window.web3.currentProvider);
           } else {
            console.log('No web3? You should consider trying MetaMask!')
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
          }
          
          // Now you can start your app & access web3 freely:
          startApp();
        
    });

    function startApp(){
        $('#submitTokenProposal').click(function(){
            loadContract(votingContractUrl, function(data){
                votingContract = data;

                var form = $('#submitTokenProposalForm');
                let votingAddress = $('input[name=votingAddress]', form).val();
                let beneficiary = $('input[name=beneficiary]', form).val();
                let amount      = web3.toWei($('input[name=amount]', form).val(), 'ether');
                let description = $('input[name=description]', form).val();

                let contractObj = web3.eth.contract(votingContract.abi);
                let contractInstance = contractObj.at(votingAddress);

                console.log('Calling '+votingContract.contract_name+'.newTokenProposal() with parameters:\n', 
                    beneficiary, amount, description,
                    'ABI', JSON.stringify(votingContract.abi));
                contractInstance.newTokenProposal(
                    beneficiary, amount, description,
                    function(error, result){
                        if(!error){
                            console.log("Proposal tx: ",result);
                            $('input[name=publishedTx]',form).val(result);
                        }else{
                            console.error(error)
                        }
                    }
                );
            });
        });   

        $('#submitVote').click(function(){
            loadContract(votingContractUrl, function(data){
                votingContract = data;

                var form = $('#voteForProposalForm');
                let votingAddress = $('input[name=votingAddress]', form).val();
                let proposalNumber      = $('input[name=proposalNumber]', form).val(); 
                let voteRadio = $('input[name=vote]:checked');
                if(voteRadio.length != 1){
                    alert('No vote selected!');
                    return;
                }
                let vote;
                switch(voteRadio.val()){
                    case 'for':
                        vote = true;
                        break;
                    case 'against':
                        vote = false;
                        break;
                    default:
                        alert('Unknown vote!');
                        return;
                }

                let contractObj = web3.eth.contract(votingContract.abi);
                let contractInstance = contractObj.at(votingAddress);

                console.log('Calling '+votingContract.contract_name+'.vote() with parameters:\n', 
                    proposalNumber, vote,
                    'ABI', JSON.stringify(votingContract.abi));
                contractInstance.vote(
                    proposalNumber, vote,
                    function(error, result){
                        if(!error){
                            console.log("Vote tx: ",result);
                            $('input[name=publishedTx]',form).val(result);
                        }else{
                            console.error(error)
                        }
                    }
                );
            });
        });   
    


        $('#countVotes').click(function(){
            printError(null);
            loadContract(votingContractUrl, function(data){
                votingContract = data;
                if(!votingContract) {printError('Load contracts first!'); return;}

                var form = $('#countVotesForm');
                let votingAddress = $('input[name=votingAddress]', form).val();
                let proposalNumber      = $('input[name=proposalNumber]', form).val();

                let contractObj = web3.eth.contract(votingContract.abi);
                let contractInstance = contractObj.at(votingAddress);

                console.log('Calling '+votingContract.contract_name+'.executeVoting() with parameters:\n', 
                    proposalNumber,
                    'ABI', JSON.stringify(votingContract.abi));
                contractInstance.executeVoting(
                    proposalNumber,
                    function(error, result){
                        if(!error){
                            console.log("Execute voting tx: ",result);
                            $('input[name=publishedTx]',form).val(result);
                        }else{
                            console.error(error)
                        }
                    }
                );
            });
        });

        $('#executeProposal').click(function(){
            printError(null);
            loadContract(votingContractUrl, function(data){
                votingContract = data;
                if(!votingContract) {printError('Load contracts first!'); return;}

                var form = $('#executeProposalForm');
                let votingAddress = $('input[name=votingAddress]', form).val();
                let proposalNumber      = $('input[name=proposalNumber]', form).val();
                
                let contractObj = web3.eth.contract(votingContract.abi);
                let contractInstance = contractObj.at(votingAddress);

                console.log('Calling '+votingContract.contract_name+'.executeProposal() with parameters:\n', 
                    proposalNumber,
                    'ABI', JSON.stringify(votingContract.abi));
                contractInstance.executeProposal(
                    proposalNumber,
                    function(error, result){
                        if(!error){
                            console.log("Execute voting tx: ",result);
                            $('input[name=publishedTx]',form).val(result);
                        }else{
                            console.error(error)
                        }
                    }
                );
            });
        });
        $('#changeVotingRules').click(function(){
            loadContract(votingContractUrl, function(data){
                votingContract = data;
                if(!votingContract) {printError('Load contracts first!'); return;}

                var form = $('#changeVotingRulesForm');
                let votingAddress = $('input[name=votingAddress]', form).val();
                let votesNumber = $('input[name=votesNumber]', form).val();
                let votingDeadline = $('input[name=votingDeadline]', form).val();
                console.log(votingAddress);
                let contractObj = web3.eth.contract(votingContract.abi);
                let contractInstance = contractObj.at(votingAddress);

                console.log('Calling '+votingContract.contract_name+'.changeVotingRules() with parameters:\n', 
                    votesNumber, votingDeadline,
                    'ABI', JSON.stringify(votingContract.abi));
                contractInstance.changeVotingRules(
                    votesNumber, votingDeadline,
                    function(error, result){
                        if(!error){
                            console.log("Execute voting tx: ",result);
                            $('input[name=publishedTx]',form).val(result);
                        } else {
                            console.error(error)
                        }
                    }
                );
            });
        });
    };

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
                    console.log(receipt);
                    console.log('Contract mined! address: ' + receipt.contractAddress + ' transactionHash: ' + contract.transactionHash);
                    if(contractField) contractField.val(receipt.contractAddress);
                    if(typeof publishedCallback === 'function') publishedCallback(receipt);
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
