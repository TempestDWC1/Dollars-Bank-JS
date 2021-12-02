import React, { useState } from "react";
import DecimalCount from "../../utility/DecimalCount";

function Transfer(props){
    const [error, setError] = useState(false);
    const [fundsError, setFundsError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        // set all error status to false so they don't stay up when they aren't needed
        setError(false);
        setFundsError(false);
        setUsernameError(false);

        let transfer = parseFloat(e.target.transfer.value);
        let balance = parseFloat(props.user.balance);
        let username = e.target.username.value;
        let transferTarget = null;
        let transferBalance;
        // will need the index for the transfer target
        let index = 0;
        

        // find user to transfer funds too
        for(let user of props.allUsers){
            if(user.username === username){
                transferTarget = user;
                transferBalance = parseFloat(user.balance);
                break;
            }
            index++;
        };

        // Go through all checks before completing transfer
        if(transferTarget == null){
            setUsernameError(true);
            return;
        }else if(isNaN(transfer) || (transfer <= 0) || DecimalCount(transfer) > 2){
            setError(true);
            return;
        }else if((balance - transfer) < 0){
            setFundsError(true);
            return;
        }else{
            props.user.balance = balance - transfer;
            props.allUsers[index].balance = transferBalance + transfer;
            props.checkChoice('');
            return;
        }
    }

    return(
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Please enter the username of the person you would like to 
                    transfer funds to and the amount you wish to transfer</h1>
                {error && <p key='error'>Error: you must use the format 00.00 for deposits</p>}
                {fundsError && <p key='fundsError'>Error: insufficient funds</p>}
                {usernameError && <p key='usernameError'>Error: Username given does not exist</p>}
                <input type="text" class="form-control" id="username" />
                <input type="text" class="form-control" id="transfer" />
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Transfer;