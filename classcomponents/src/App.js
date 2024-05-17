import React, { Component } from 'react'; 
// import logo from './logo.svg';
import './App.css';
import Productlist from './components/Productlist';
// import Greet from './components/Greet';
class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Greet /> */}
        <Productlist/>
      </div>
    );
  }
}

export default App;
