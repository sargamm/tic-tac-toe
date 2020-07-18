import React, { Component } from 'react'
import { ListGroup, ListGroupItem,Row, Col } from 'react-bootstrap'
import Game from './Game'
class GamePanel extends Component{
    render()
    {
        return(
            <div className="GamePanel">
            <Row className='mx-auto justify-content-center'>
            <ListGroup>
                <ListGroup.Item>Player 1</ListGroup.Item>
                <ListGroup.Item>Player 2</ListGroup.Item>
            </ListGroup>
            </Row>
          </div>
        )
    }
}
export default GamePanel