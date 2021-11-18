import React from "react";

function Main(props){

    const handleLogin = (e) => {
        e.preventDefault();
        props.checkLogin(true);
    }

    const handleCreateUser = (e) => {
        e.preventDefault();
        props.checkCreateUser(true);
    }

    return(<div className="d-grid gap-2 col-6 mx-auto">
        <h1>Welcome to Dollars Bank</h1>
        <button type="button" className="btn btn-primary btn-lg" 
                onClick={handleLogin}>Login</button>
        <button type="button" className="btn btn-secondary btn-sm" 
                onClick={handleCreateUser} style={{ cursor: "pointer" }} >Create User</button>
    </div>)
}

export default Main;