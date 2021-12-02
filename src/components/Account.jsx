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

    // will be used to control which part of account we are navigating
    // will be reset after deposits, withdraws, and transfers to navigate back to
    // this "page"
    const [choice, setChoice] = useState('');

    const checkChoice = (choiceState) => {
        setChoice(choiceState);
    }

    /*
        Have to use localStorage for transactions or it will be lost between users
        The key for each users transactions will be 'user' concat 'index'
        ex: first user Foo's transactions will be stored with key 'user0'
    */
    // let savedTransactions = {};
    // if(localStorage.getItem(('user' + props.userIndex)) !== null){
    //     const saved = localStorage.getItem(('user' + props.userIndex));
    //     savedTransactions = JSON.parse(saved);
    // }
    // const [fiveTransactions, setFiveTransactions] = useState(savedTransactions);

    /* 
        have to use "() => handleChoice()" syntax in my button's onClick because 
        otherwise it will call the hook as soon as its rendered
    */
    return(
        <div className="container">
            {choice === deposit && <Deposit user={props.user} checkChoice={checkChoice}/>}
            {choice === withdraw && <Withdraw user={props.user} checkChoice={checkChoice}/>}
            {choice === transfer && <Transfer user={props.user} checkChoice={checkChoice}
                                              allUsers={props.allUsers}/>}
            {choice === transactions && <Transactions />}
            {choice === balance && <Balance balance={props.user.balance} checkChoice={checkChoice}/>}
            {choice === '' && 
                <div className="d-grid gap-2 col-6 mx-auto">
                    <h1>Hello {props.user.username}</h1>
                    <button type="button" className="btn btn-primary"
                            onClick={() => setChoice(deposit)}>Deposit</button>
                    <button type="button" className="btn btn-primary" 
                            onClick={() => setChoice(withdraw)}>Withdraw</button>
                    <button type="button" className="btn btn-primary" 
                            onClick={() => setChoice(transfer)}>Transfer</button>
                    <button type="button" className="btn btn-primary" 
                            onClick={() => setChoice(transactions)}>Show Transactions</button>
                    <button type="button" className="btn btn-primary" 
                            onClick={() => setChoice(balance)}>Show Balance</button>
                    <button type="button" className="btn btn-primary" 
                            onClick={() => props.checkUser(null)}>Signout</button>
                </div>
            }
        </div>
    )
}

export default Account;