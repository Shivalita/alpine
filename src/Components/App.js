import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import logo from './logo.svg';
import './App.css';
import Display from './Display.js';
import Headers from './Headers';



class App extends Component {
  render() {
    return (
      <div className="App">
          <Headers />
        {/* <div className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h2>Welcome to React</h2> */}
        {/* </div> */}
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
        <Display />
        
      </div>
    );
  }
}

export default App;
