import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import States from './components/States';
// import Props from './components/Props';

class App extends Component {
  render() {
    return (
      <div className="App">
   {/* <Props name="pascal"/> */}
   <States/>
      </div>
    );
  }
}

export default App;
