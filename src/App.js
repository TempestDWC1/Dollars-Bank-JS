import React, {useState} from "react";
import Main from "./components/Main";
import CreateUser from "./components/CreateUser";
import './App.css';

function App() {

  const [login, setLogin] = useState(false);
  const [createUser, setCreateUser] = useState(false);

  const checkLogin = (loginState) => {
    setLogin(loginState);
  }

  const checkCreateUser = (createUserState) =>{
    setCreateUser(createUserState);
  }

  return (
    <div className="container">
      {!login && !createUser && <Main checkLogin={checkLogin} 
                                      checkCreateUser={checkCreateUser}/>}
      {login && <h1>login</h1>}
      {createUser && <CreateUser />}
    </div>
  );
}

export default App;
