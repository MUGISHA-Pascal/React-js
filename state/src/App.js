import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import InteractiveText from './components/InteractiveText';
// import QuoteGenerator from './components/QuoteGenerator';
// import Subscribe from './components/Subscribe';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Subscribe /> */}
        {/* <QuoteGenerator /> */}
        <InteractiveText/>
      </div>
    );
  }
}

export default App;
