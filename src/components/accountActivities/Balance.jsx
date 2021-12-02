import React from "react";

function Balance(props){
    return(
        <div className='container'>
            <h1>Your current Balance is {parseFloat(props.balance).toFixed(2)}</h1>
            <button type="button" className="btn btn-primary btn-lg" 
                        onClick={() => props.checkChoice('')}>Go Back</button>
        </div>
    )
}

export default Balance;