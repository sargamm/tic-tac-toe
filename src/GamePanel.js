import React, { Component } from 'react'
import { ListGroup, ListGroupItem,Row, Col, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import Game from './Game'
class GamePanel extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <div className="GamePanel">
                <div className="Panel">
            <Row>
                <h2 className="panelText panelElement">Difficulty</h2>
            </Row>
            <Row>
                <ToggleButtonGroup type="radio" name="difficulty" defaultValue={1} size="lg" className="panelElement">
                    <ToggleButton variant="info" value={1} onChange={()=>{this.props.setDifficulty(1)}}>1</ToggleButton>
                    <ToggleButton variant="info" value={2} onChange={()=>{this.props.setDifficulty(2)}}>2</ToggleButton>
                    <ToggleButton variant="info" value={3} onChange={()=>{this.props.setDifficulty(3)}}>3</ToggleButton>
                    <ToggleButton variant="info" value={4} onChange={()=>{this.props.setDifficulty(4)}}>4</ToggleButton>
                    <ToggleButton variant="info" value={-1} onChange={()=>{this.props.setDifficulty(-1)}}>Maximum</ToggleButton>
                </ToggleButtonGroup>
            </Row>
            <Row>
                <h2 className="panelText panelElement">Who starts?</h2>
            </Row>
            <Row>
                <ToggleButtonGroup type="radio" name="start" defaultValue={1} size="lg"className="panelElement">
                    <ToggleButton variant="info" value={1} onChange={()=>{this.props.setstarter(1)}}>Human</ToggleButton>
                    <ToggleButton variant="info" value={2} onChange={()=>{this.props.setstarter(2)}}>Computer</ToggleButton>
                </ToggleButtonGroup>
            </Row>
            <Row>
                <Button variant="info" size="lg" className="panelText panelElement" style={{paddingTop:"5px"}}>New Game</Button>
            </Row>
            </div>
          </div>
        )
    }
}
export default GamePanel