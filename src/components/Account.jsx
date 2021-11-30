import React from "react";

function Account(props){
    return(
        <div>
            <h1>Hello {props.user.username}</h1>
        </div>
    )
}

export default Account;