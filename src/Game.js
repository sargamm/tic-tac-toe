import React, { Component } from 'react'
import { Col, Row, ListGroup, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import Board from './Board'
import GamePanel from './GamePanel'
import Home from './Home'
// import { value } from './Minimax'
class Game extends Component{
    constructor(){
        super()
        this.state={
            // NextMove:1
            Difficulty:1,
            starter:1,
            Player:1,
            
        }
    }
    handleChange(event){
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
        console.log(value)
    }
    render(){
        return(
            <>
            <div className="Game">
                <Board/>
            </div>
            </>
        )
    }
}
export default Game