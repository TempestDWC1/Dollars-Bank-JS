import React from "react";

function CreateUser(props){
    return(<div>
        <form>
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
                <input type="password" class="form-control" id="password" />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" />
            </div>
            <div class="mb-3">
                <label for="balance" class="form-label">Initial Balance</label>
                <input type="number" class="form-control" id="balance" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>)
}

export default CreateUser;