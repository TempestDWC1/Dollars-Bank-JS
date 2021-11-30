import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// in program data
// I have to put this here so that inbetween the different features, create user/login
// the data isn't reset
let users = [
  {
    'name':'Foo',
    'username': 'Bar',
    'password': 'FooBar1@#',
    'balance': 5
  },
  {
    'name':'Doo',
    'username': 'Car',
    'password': 'DooCar1@#',
    'balance': 10
  }
]
// used to set the initial data
localStorage.setItem('userData', JSON.stringify(users));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
