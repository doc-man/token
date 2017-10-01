var $ = jQuery;
jQuery(document).ready(function($) {

    let web3;
    let foundation  = "0xdd40fc261b61061fba0acbd4c46c638c0bff7a92";    
    let votingContractAddress; // this value is retrieved from foundation

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

            $('input[name=foundation]','#dashboardForm').val(foundation);

            pContractInstance = contractObj.at(foundation);

            pContractInstance.token(function(error, result){
                if(!error){
                    $('input[name=token]','#dashboardForm').val(result);
                }else{
                    console.log('Can\'t find token address', error);
                }
            });

            pContractInstance.getTokenBalance(function(error, result){
                if(!error){
                    let amount = web3.fromWei(result, 'ether');
                    $('input[name=numberOfHLT]','#dashboardForm').val(amount);
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
                    loadContract(votingContractUrl, function(data){
                        votingContract = data;
                        let contractObj = web3.eth.contract(votingContract.abi); //The json interface for the contract to instantiate
            
                        votingContractAddress = $('input[name=votingContract]','#dashboardForm').val();
                        pContractInstance = contractObj.at(votingContractAddress);
            
                        pContractInstance.minimumQuorum(function(error, result){
                            if(!error){
                                let amount = web3.fromWei(result, 'ether');
                                $('input[name=minimumQuorum]','#dashboardForm').val(amount);
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
                        
                        let numberOfProposals = 0;
                        let proposals = new Array();
                        pContractInstance.getProposalsCount(function(error, result){
                            if(!error){
                                $('input[name=numProposals]','#dashboardForm').val(result);
                                numberOfProposals = $('input[name=numProposals]','#dashboardForm').val();
                                for (proposalNumber = 0; proposalNumber < numberOfProposals; proposalNumber++) { 
                                    pContractInstance.getProposal(proposalNumber,function(error, result){
                                        if(!error){
                                            var proposal = {};
                                            proposal["recipient"] = result[0];
                                            proposal["amount"] = result[1].toString();
                                            proposal["description"] = result[2];
                                            proposal["votingDeadline"] = result[2];
                                            proposals.push(proposal);                                           
                                        }else{
                                            console.log('Can\'t find proposals', error);
                                        }
                                        console.log(proposals);
                                    });
                                }
                            }else{
                                console.log('Can\'t find numProposals', error);
                            }
                        });
                        
 
            
                    });
                }else{
                    console.log('Can\'t find voting contract address', error);
                }
            });
    
        });

    };

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
