import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ColorGenerator from './components/ColorGenerator';
// import Count from './components/Count';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Count /> */}
        <ColorGenerator/>
      </div>
    );
  }
}

export default App;
