var $ = jQuery;
jQuery(document).ready(function($) {
    
    var tokenContractUrl       = '../../build/contracts/HealthToken.json';
    var foundationContractUrl  = '../../build/contracts/FoundationContract.json';
    var votingContractUrl      = '../../build/contracts/SimpleVoting.json';

    let web3;
    let foundation  = "0xfc7acfda96972316725512b6109441621ebd2d28";    
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
   $('#proposalsTable').on('click', function(){
       console.log('click');
   });
    
    var proposalRowCount = 0;
    function creatProposalsTableRow(pContractInstance, numberOfProposals) {
        let proposalNumber = proposalRowCount;
        console.log("call creatProposalsTableRow", proposalNumber, numberOfProposals);
        if(proposalNumber < numberOfProposals) {
            pContractInstance.getProposal(proposalNumber,function(error, result){
                if(!error){
                    $('#submitVote_'+proposalNumber).click(function(){
                        loadContract(votingContractUrl, function(data){
                            votingContract = data;
                
                            var form = $('#voteForProposalForm');
                            let votingAddress = $('input[name=votingAddress]', form).val();
                            let proposalNumber      = 0;
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
                    var proposal = {};
                    proposal.recipient = result[0];
                    proposal.amount = result[1].toString();
                    proposal.description = result[2];
                    proposal.votingDeadline = result[3];
                    proposal.numberOfVotes = result[4];
                    proposal.executed = result[5];
                    proposal.proposalPassed = result[6];
                    proposal.typeOfProposal = result[7];

                    let proposalsTableBody ="<tr>";
                    proposalsTableBody+="<td>"+proposalNumber+"</td>";                                            
                    proposalsTableBody+="<td>"+proposal.recipient+"</td>";
                    let amount = web3.fromWei(proposal.amount, 'ether');
                    proposalsTableBody+="<td>"+amount+"</td>";
                    proposalsTableBody+="<td>"+proposal.description+"</td>";
                    var date = new Date(proposal.votingDeadline*1000);
                    var hours = date.getHours();
                    var minutes = "0" + date.getMinutes();
                    var seconds = "0" + date.getSeconds();
                    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                    proposalsTableBody+="<td>"+timeConverter(proposal.votingDeadline)+"</td>";
                    proposalsTableBody+="<td>"+proposal.numberOfVotes+"<label><input type='radio' name='vote_"+proposalNumber+"' value='for'>For</label><label><input type='radio' name='vote_"+proposalNumber+"' value='against'>Against</label></div><input type='button' id='submitVote_"+proposalNumber+"' onclick='submitVoteMain("+proposalNumber+")' value='Submit Vote'></td>";
                    proposalsTableBody+="<td>"+proposal.proposalPassed+"<input type=button value='count votes'></td></td>";
                    proposalsTableBody+="<td>"+proposal.executed+"<input type=submit value=execute></td>";
                    proposalsTableBody+="<td>"+proposal.typeOfProposal+"</td>";
                    proposalsTableBody+="</tr>";
                    $("table[id=proposalsTable]").find('tbody').append(proposalsTableBody);
                } else {
                    console.log('Can\'t find proposals', error);
                }
                proposalRowCount ++;
                creatProposalsTableRow(pContractInstance, numberOfProposals);
            });
        }
    }
    function startApp(){

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
                    let amount = web3.fromWei(result, 'ether');
                    $('input[name=numberOfEther]','#dashboardForm').val(amount);
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
                                console.log(numberOfProposals);
                                // inside the for loop I am calling a async function. For loop will funish running immediately. While all your asynchronous operations are started. 
                                // Ref: https://stackoverflow.com/questions/11488014/asynchronous-process-inside-a-javascript-for-loop
                                // let proposalNumber = 0;
                                
                                // numberOfProposals = 1;
                                if(numberOfProposals > 0) {
                                    // proposalsTable += "<script type='text/javascript' src='status.js'></script>";
                                    // let proposalsTable = "<script type='text/javascript' src='status.js'></script><script>"
                                    // + "function submitVote(proposalNumber) {"
                                    // +    "console.log('call fn js', proposalNumber);"
                                    // +    "submitVoteMain(proposalNumber);"
                                    // + "}"
                                    // +"</script>";
                                    
                                    let proposalsTable = "<table id='proposalsTable' border=1><thead><tr><th>Proposal ID</th><th>Recipient</th><th>Amount (HLT/Ether)</th><th>Description</th><th>Voting Deadline</th><th># of votes</th><th>Proposal passed</th><th>Executed</th><th>Type of proposal</th></tr></thead><tbody id='proposalsTableBody'></tbody>";
                                    proposalsTable += "</table>";
                                    $("div[id=viewProposalsTable]").html(proposalsTable);
                                    creatProposalsTableRow(pContractInstance, numberOfProposals);
                                }     
                            } else {
                                console.log('Can\'t find numProposals', error);
                            }
                        });
                    });
                } else {
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

    // ref: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
      }

     window.submitVoteMain = function (rowIndex) {
            loadContract(votingContractUrl, function(data){
                votingContract = data;

                var form = $('#dashboardForm');
                let votingAddress = $('input[name=votingContract]', form).val();
                console.log('votingAddress:', votingAddress);
                let proposalNumber  = rowIndex;
                let voteRadio = $('input[name=vote_'+rowIndex+']:checked');
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
                        }else{
                            console.error(error)
                        }
                    }
                );
            });
        }
});

