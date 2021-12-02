import React, {useState} from "react";
import Account from "./Account";
/*
Login.jsx is where a user can go to login and access the second portion of the app
*/
function Login(props){

    // error in case user does not provide proper credintials
    // user for user data
    const [error, setError] = useState(false);
    const [user, setUser] = useState(null);
    const [userIndex, setUserIndex] = useState(null);

    // will be used when user is done and wants to sign out of account
    const checkUser = (userState) => {
        setUser(userState);
    }

    function handleSubmit(e){
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        // this will be used for transactions and transfer to know which
        let index = 0;

        // go through each user
        for(let user of props.users){
            // check if username and password match up
            if(user.username === username && user.password === password){
                setUser(user);
                setUserIndex(index);
                return;
            }
            index++
        };

        setError(true);
        return;
    }

    return(
        <div className='container'>
            {user != null && <Account user={user} userIndex={userIndex} 
                                      allUsers={props.users} checkUser={checkUser}/>}
            {user === null && 
                <form onSubmit={handleSubmit}>
                    {error && <p key='error'>Username or Password is incorrect</p>}
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            }
        </div>
    )
}

export default Login;