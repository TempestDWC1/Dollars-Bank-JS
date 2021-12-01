import React, {useState} from "react";

function Deposit(props){

    const [error, setError] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        // if(ise.target.deposit.value)
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