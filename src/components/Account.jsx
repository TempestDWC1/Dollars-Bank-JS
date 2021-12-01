import React, { useState } from "react";
import Deposit from "./accountActivities/Deposit";
import Withdraw from "./accountActivities/Withdraw";
import Transfer from "./accountActivities/Transfer";
import Transactions from "./accountActivities/Transactions";
import Balance from "./accountActivities/Balance";

function Account(props){

    const deposit = 'deposit';
    const withdraw = 'withdraw';
    const transfer = 'transfer';
    const transactions = 'transactions';
    const balance = 'balance';

    const [choice, setChoice] = useState('');

    const checkChoice = (choiceState) => {
        setChoice(choiceState);
    }

    /* 
        have to use "() => handleChoice()" syntax in my button's onClick because 
        otherwise it will call the hook as soon as its rendered
    */
    return(
        <div className="d-grid gap-2 col-6 mx-auto">
            {choice === deposit && <Deposit user={props.user} checkChoice={checkChoice}/>}
            {choice === withdraw && <Withdraw />}
            {choice === transfer && <Transfer />}
            {choice === transactions && <Transactions />}
            {choice === balance && <Balance />}
            {choice === '' && <div>
                <h1>Hello {props.user.username}</h1>
                <button type="button" className="btn btn-primary btn-lg"
                        onClick={() => setChoice(deposit)}>Deposit</button>
                <button type="button" className="btn btn-primary btn-lg" 
                        onClick={() => setChoice(withdraw)}>Withdraw</button>
                <button type="button" className="btn btn-primary btn-lg" 
                        onClick={() => setChoice(transfer)}>Transfer</button>
                <button type="button" className="btn btn-primary btn-lg" 
                        onClick={() => setChoice(transactions)}>Show Transactions</button>
                <button type="button" className="btn btn-primary btn-lg" 
                        onClick={() => setChoice(balance)}>Show Balance</button>
                <button type="button" className="btn btn-primary btn-lg" 
                        onClick={() => props.checkUser(null)}>Signout</button>
            </div>}
        </div>
    )
}

export default Account;