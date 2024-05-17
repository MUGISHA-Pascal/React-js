import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Name from './components/Name';
// import Name2 from './components/Name2';
// import Class from './components/Class';
import Productcard from './components/Productcard';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Name name="pascal" namy="mugisha">
          <p>yes it is </p>
        </Name>
        <Name2 name="daddy" />
        <Class><p>this is pascals</p></Class> */}
        <Productcard product="computer" productprice="200000 frw "  />
      </div>
    );
  }
}

export default App;
