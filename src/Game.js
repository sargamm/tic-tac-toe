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
            HintsLeft:4
        }
    }
    handleChange(event){
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
        // console.log()
    }
    render(){
        return(
            <>
            <div className="Game">
                <Row style={{height:"100vh"}}>
                    <Col lg={4} md={12} className="GamePanelArea">
                        <GamePanel handleChange={(event)=>this.handleChange(event)} />
                    </Col>
                    <Col lg={8} md={12} className="GameBoardArea" >
                        <Board depth={this.state.Difficulty} starter={this.state.starter} Player={this.state.Player}/>
                    </Col>
                </Row>
            </div>
            </>
        )
    }
}
export default Game