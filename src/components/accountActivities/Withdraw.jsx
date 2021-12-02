import React, {useState} from "react";
import DecimalCount from "../../utility/DecimalCount";

function Withdraw(props){
    const [error, setError] = useState(false);
    const [fundsError, setFundsError] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        setError(false);
        setFundsError(false);

        let withdraw = parseFloat(e.target.withdraw.value);
        let balance = parseFloat(props.user.balance);

        // sanitize input to make sure for no funny business
        if(isNaN(withdraw) || (withdraw <= 0) || DecimalCount(withdraw) > 2){
            setError(true);
            return;
        }else if((balance - withdraw) < 0){
            setFundsError(true);
        }else{
            props.user.balance = balance - withdraw;
            props.checkChoice('');
            return;
        }
    }

    return(
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>How much would you like to Withdraw?</h1>
                {error && <p key='error'>Error: you must use the format 00.00 for deposits</p>}
                {fundsError && <p key='funds'>Error: insufficient funds</p>}
                <input type="text" class="form-control" id="withdraw" />
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Withdraw;