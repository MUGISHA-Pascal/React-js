import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Like1 from './components/Like1';
// import Parent from './components/Parent';
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Parent/> */}
      <Like1/>
      </div>
    );
  }
}

export default App;
