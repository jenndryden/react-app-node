import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import {Route,Switch,Redirect} from 'react';
import firebase from 'firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      speed: 10
    };
  } 

  componentDidMount() { //great place for realtime database
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      })
    });
  }

  render() {
    return (

    <main>
      <div className="App">
       <h1>{this.state.speed}</h1>
      </div>
</main>
    )
}
}

export default App;
