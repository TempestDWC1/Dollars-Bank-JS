import React, {useState} from "react";
import Main from "./components/Main";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import './App.css';

/*
App.js is the switch between all the components
*/

function App() {

  // using localStorage that was stored in index.js
  const saved = localStorage.getItem('userData');
  // clean up the data so its in a manipulatable format
  const users = JSON.parse(saved);

  const [login, setLogin] = useState(false);
  const [createUser, setCreateUser] = useState(false);

  const checkLogin = (loginState) => {
    setLogin(loginState);
  }

  const checkCreateUser = (createUserState, user) =>{
    setCreateUser(createUserState);
    if(user != null){
      users.push(user);
      // store the data
      localStorage.setItem('userData', JSON.stringify(users));
      console.log(users);
    }
  }

  return (
    <div className="container">
      {!login && !createUser && <Main checkLogin={checkLogin} 
                                      checkCreateUser={checkCreateUser}/>}
      {login && <Login checkLogin={checkLogin} users={users}/>}
      {createUser && <CreateUser addUser={checkCreateUser} />}
    </div>
  );
}

export default App;
