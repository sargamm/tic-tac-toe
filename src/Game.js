import React, { Component } from 'react'
import { Col, Row, ListGroup } from 'react-bootstrap'
import Board from './Board'
import GamePanel from './GamePanel'

class Game extends Component{
    constructor(){
        super()
        this.state={
            // NextMove:1
            Difficulty:1,
            Starter:1
        }
    }
    // SetNextMove() {
    //     this.setState((prev)=>({
    //         NextMove:prev.NextMove==1?2:1
    //     }))
    // }
    setDifficulty(i){
        console.log(i)
    }
    setStarter(i){
        console.log(i)
    }
    render(){
        return(
            <div className="Game">
                <Row style={{height:"100vh"}}>
                    <Col lg={4} md={12} className="GamePanelArea">
                        <GamePanel setDifficulty={(i)=>this.setDifficulty(i)} setstarter={(i)=>this.setStarter(i)}/>
                    </Col>
                    <Col lg={8} md={12} className="GameBoardArea" Depth={this.state.Difficulty} Starter={this.state.Starter}>
                        <Board />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Game