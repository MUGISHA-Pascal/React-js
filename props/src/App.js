import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Name from './components/Name';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Name name="pascal" namy="mugisha">
        <p>yes it is </p>
       </Name>
      </div>
    );
  }
}

export default App;
