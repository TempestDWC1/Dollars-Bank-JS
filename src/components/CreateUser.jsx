import React, { useState } from "react";
import Validate from "../utility/Validate";
/*
CreateUser.jsx is how a new user can be added
*/

function CreateUser(props){

    const [errors, setErrors] = useState([]);

    // Handle validation of the submit
    function handleSubmit(e){
        e.preventDefault();

        const name = e.target.name.value;
        const username = e.target.username.value;
        const password = e.target.password.value;
        const balance = e.target.balance.value;

        // a variable to check if submittion is good
        const errors = Validate(name, username, password, balance);

        // if there are errors set the state and exit the function for the
        // user to try and fix them
        if(errors.length > 0){
            setErrors(errors);
            return;
        }

        // if the submittion is good then change the props and move on
        props.addUser(false, {'name':name, 'username':username, 'password': password, 
                              'balance': balance});
    }

    return(<div className='container'>
        <form onSubmit={handleSubmit}>
            {errors.map(errors => (
                <p key={errors}>Error: {errors}</p>
            ))}
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" />
            </div>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" aria-describedby="passwordHelpBlock"/>
                <div id="passwordHelpBlock" class="form-text">
                    Your password must be 8 characters long, must contain at least one capital letter, number, and special character.
                </div>
            </div>
            <div class="mb-3">
                <label for="balance" class="form-label">Initial Balance</label>
                <input type="text" class="form-control" id="balance" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>)
}

export default CreateUser;