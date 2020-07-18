import React, { Component } from 'react'
import { Col, Row, ListGroup } from 'react-bootstrap'
import Board from './Board'
class Game extends Component{
    constructor(){
        super()
        this.state={
            NextMove:1
        }
    }
    SetNextMove() {
        this.setState((prev)=>({
            NextMove:prev.NextMove==1?2:1
        }))
    }
    render(){
        return(
            <div className="Game">
                <Row style={{height:"100vh"}}>
                <Col lg={4} md={12}>
                <div className="GamePanel">
                <Row className='mx-auto justify-content-center'>
                <ListGroup>
                <ListGroup.Item>Player 1</ListGroup.Item>
                <ListGroup.Item>Player 2</ListGroup.Item>
                </ListGroup>
                </Row>
                </div>
                </Col>
                <Col lg={8} md={12} className="GameArea">
                    <Board nextSymbol={this.state.NextMove==1?'O':'X'}/>
                </Col>
                </Row>
            </div>
        )
    }
}
export default Game