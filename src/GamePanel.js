import React, { Component } from 'react'
import { ListGroup, ListGroupItem,Row, Col, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import Game from './Game'
class GamePanel extends Component{
    constructor(props){
        super(props);
        this.state={
            player:1
        }
        this.handleChange=this.handleChange.bind(this)
        this.CloseMenu=this.CloseMenu.bind(this)
        this.OpenMenu=this.OpenMenu.bind(this)
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
    OpenMenu(){
        console.log("clicked")
        // document.getElementById("GamePanel").style.width="100%"
        // document.getElementById("Panel").style.width="100%"
    }
    CloseMenu(){
        // document.getElementById("GamePanel").style.width="0px"
        // document.getElementById("Panel").style.width="0px"
    }
    render()
    {   
        return(
            <>
            
            <div className="GamePanel .d-none " id="GamePanel">
                <div className="Panel" id="Panel">
                {/* <button type="button"> */}
                {/* </button> */}
                {/* <Row><button type="button" className="close" aria-label="Close" style={{left:"0"}}>
                    <span aria-hidden="true" onClick={this.CloseMenu}>&times;</span>
                </button></Row> */}
                    <Row>
                    <Button variant="outline-info" size="md" className="panelText panelElement" style={{marginBottom:"5px"}} >New Game</Button>
                    <ToggleButtonGroup type="radio" name="player" size="md"className="panelElement" defaultValue={1} >
                        <ToggleButton variant="outline-info" value={1} onChange={this.handleChange} checked={this.state.Player==1} >Single Player</ToggleButton>
                        <ToggleButton variant="outline-info" value={2} onChange={this.handleChange} checked={this.state.Player==2}>Multi Player</ToggleButton>
                    </ToggleButtonGroup>
                    </Row>
                    {this.state.player==1?
                        <div>
                            <Row>
                                <p className="panelText panelElement">Difficulty</p>
                                
                            </Row>
                            <Row>
                                <ToggleButtonGroup type="radio" name="depth" defaultValue={1} size="md" className="panelElement">
                                    <ToggleButton variant="outline-info" value={1} onChange={this.props.handleChange} >1</ToggleButton>
                                    <ToggleButton variant="outline-info" value={2} onChange={this.props.handleChange}>2</ToggleButton>
                                    <ToggleButton variant="outline-info" value={3} onChange={this.props.handleChange}>3</ToggleButton>
                                    <ToggleButton variant="outline-info" value={4} onChange={this.props.handleChange}>4</ToggleButton>
                                    <ToggleButton variant="outline-info" value={-1} onChange={this.props.handleChange}>Maximum</ToggleButton>
                                </ToggleButtonGroup>
                            </Row>
                            <Row>
                                <p className="panelText panelElement">Who starts?</p>
                            </Row>
                            <Row>
                                <ToggleButtonGroup type="radio" name="starter" defaultValue={"O"} size="md" className="panelElement">
                                    <ToggleButton variant="outline-info" value="O" onChange={this.props.handleChange} defaultChecked>Human</ToggleButton>
                                    <ToggleButton variant="outline-info" value="X" onChange={this.props.handleChange}>Computer</ToggleButton>
                                </ToggleButtonGroup>
                            </Row>
                        <Row>
                            <Button variant="outline-info" size="md" className="panelElement panelText" onClick={this.props.showHint}>Hint</Button>
                        </Row>
                        </div>:<></>
                    }
                    {/* <Row>
                        <Button variant="outline-info" size="md" className="panelText panelElement" >New Game</Button>
                    </Row> */}
                </div>
            </div>
            </>
        )
    }
}
export default GamePanel