import React, { Component } from 'react'
import { ListGroup, ListGroupItem,Row, Col, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import Game from './Game'
class GamePanel extends Component{
    constructor(props){
        super(props);
        this.state={
            Player:1
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
        console.log(value)
        console.log(this.state.Player)
        this.props.handleChange(event)
    }
    render()
    {   
        return(
            <div className="GamePanel">
                <div className="Panel">
                    <Row>
                    <ToggleButtonGroup type="radio" name="Player" size="lg"className="panelElement" >
                        <ToggleButton variant="info" value={1} onChange={this.handleChange} checked={this.state.Player==1} defaultChecked >Single Player</ToggleButton>
                        <ToggleButton variant="info" value={2} onChange={this.handleChange} checked={this.state.Player==2}>Multi Player</ToggleButton>
                    </ToggleButtonGroup>
                    </Row>
            {this.state.Player==1?
                <div>
                    <Row>
                        <h2 className="panelText panelElement">Difficulty</h2>
                    </Row>
                    <Row>
                        <ToggleButtonGroup type="radio" name="difficulty" defaultValue={1} size="lg" className="panelElement">
                            <ToggleButton variant="info" value={1} onChange={this.props.handleChange}>1</ToggleButton>
                            <ToggleButton variant="info" value={2} onChange={this.props.handleChange}>2</ToggleButton>
                            <ToggleButton variant="info" value={3} onChange={this.props.handleChange}>3</ToggleButton>
                            <ToggleButton variant="info" value={4} onChange={this.props.handleChange}>4</ToggleButton>
                            <ToggleButton variant="info" value={-1} onChange={this.props.handleChange}>Maximum</ToggleButton>
                        </ToggleButtonGroup>
                    </Row>
                    <Row>
                        <h2 className="panelText panelElement">Who starts?</h2>
                    </Row>
                    <Row>
                        <ToggleButtonGroup type="radio" name="start" defaultValue={1} size="lg"className="panelElement">
                            <ToggleButton variant="info" value={1} onChange={this.props.handleChange}>Human</ToggleButton>
                            <ToggleButton variant="info" value={2} onChange={this.props.handleChange}>Computer</ToggleButton>
                        </ToggleButtonGroup>
                    </Row>
                </div>
                :
                <div>
                <Row>
                    <h2 className="panelText panelElement">Hints?</h2>
                </Row>
                <Row>
                    <Button variant="info" size="lg" className="panelElement panelText" style={{paddingTop:"5px"}}>Hint</Button>
                </Row>
                </div>
            }
            <Row>
                <Button variant="info" size="lg" className="panelText panelElement" style={{paddingTop:"5px"}}>New Game</Button>
            </Row>
            </div>
          </div>
        )
    }
}
export default GamePanel