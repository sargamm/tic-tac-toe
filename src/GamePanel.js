import React, { Component } from 'react'
import { ListGroup, ListGroupItem,Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import Game from './Game'
class GamePanel extends Component{
    render()
    {
        return(
            <div className="GamePanel">
                <div className="Panel">
            <Row>
                {/* <ButtonGroup >
                    <Button variant="light">1</Button>
                    <Button variant="light">2</Button>
                    <Button variant="light" >3</Button>
                    <Button variant="light">4</Button>
                    <Button variant="light">Maximum</Button>
                </ButtonGroup> */}
            </Row>
            </div>
          </div>
        )
    }
}
export default GamePanel