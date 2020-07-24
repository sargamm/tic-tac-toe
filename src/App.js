import React, { Component } from 'react';
import './App.css';
import Board from './Board'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(){
    super();
  }
  render(){
    return (
        <div className="App">
          <Board />
        </div>
      );
  }
}

export default App;
