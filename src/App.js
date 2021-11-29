import React, {useState} from "react";
import Main from "./components/Main";
import CreateUser from "./components/CreateUser";
import './App.css';

/*
App.js is the switch between all the components
*/

function App() {

  const [login, setLogin] = useState(false);
  const [createUser, setCreateUser] = useState(false);

  const checkLogin = (loginState) => {
    setLogin(loginState);
  }

  const checkCreateUser = (createUserState, user) =>{
    setCreateUser(createUserState);
    if(user != null){
      const saved = localStorage.getItem('userData');
      const users = JSON.parse(saved);
      users.push(user);
      localStorage.setItem('userData', JSON.stringify(users));
      console.log(users);
    }
  }

  return (
    <div className="container">
      {!login && !createUser && <Main checkLogin={checkLogin} 
                                      checkCreateUser={checkCreateUser}/>}
      {login && <h1>login</h1>}
      {createUser && <CreateUser addUser={checkCreateUser} />}
    </div>
  );
}

export default App;
