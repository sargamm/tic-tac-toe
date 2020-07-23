import React, { Component } from 'react';
import './App.css';
import Board from './Board'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Home from './Home';

class App extends Component {
  constructor(){
    super();
  }
  render(){
    return (
        <div className="App">
          {/* <NavBar/> */}
          <Board />
        </div>
      );
  }
}

export default App;
