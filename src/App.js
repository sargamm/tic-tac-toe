import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Col,Row} from 'react-bootstrap'
import GamePanel from './GamePanel'
import Board from './Board'
import Game from './Game'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(){
    super();
  }
  render(){
    return (
        <div className="App">
          <Game />
        </div>
      );
  }
}

export default App;
