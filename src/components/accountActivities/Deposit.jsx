import React, {useState} from "react";
import DecimalCount from "../../utility/DecimalCount";

function Deposit(props){

    const [error, setError] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        let deposit = parseFloat(e.target.deposit.value);
        let balance = props.user.balance;

        // sanitize input to make sure for no funny business
        if(isNaN(deposit) || (deposit <= 0) || DecimalCount(deposit) > 2){
            setError(true);
            return;
        }else{
            balance = parseFloat(balance);
            props.user.balance = deposit + balance;
            props.checkChoice('');
            return;
        }
    }

    return(
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>How much would you like to Deposit?</h1>
                {error && <p key='error'>Error: you must use the format 00.00 for deposits</p>}
                <input type="text" class="form-control" id="deposit" />
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Deposit;