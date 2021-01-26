import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCcYxDJbOJfSssrsLEHq9bvafPTqVYU8a4",
  authDomain: "react-project-c8241.firebaseapp.com",
  databaseURL: "https://react-project-c8241-default-rtdb.firebaseio.com",
  projectId: "react-project-c8241",
  storageBucket: "react-project-c8241.appspot.com",
  messagingSenderId: "309969400718",
  appId: "1:309969400718:web:246824eb2344805ceeeadf",
  measurementId: "G-EW5B78X50H"
};

firebase.initializeApp(config); 

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
