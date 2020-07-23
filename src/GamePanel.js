import React, { Component } from 'react'
import { Row, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
class GamePanel extends Component{
    constructor(props){
        super(props);
        this.state={
            player:1
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
        this.props.handleChange(event)
    }
    render()
    {   
        return(
            <>
            
            <div className="GamePanel .d-none " id="GamePanel">
                <div className="Panel" id="Panel">
                    <Row>
                        <Button variant="outline-info" size="md" className="panelText panelElement" style={{marginBottom:"5px"}} onClick={this.props.NewGame} >New Game</Button>
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
                                <ToggleButtonGroup type="radio" name="depth" defaultValue={9} size="md" className="panelElement">
                                    <ToggleButton variant="outline-info" value={1} onChange={this.props.handleChange} >1</ToggleButton>
                                    <ToggleButton variant="outline-info" value={2} onChange={this.props.handleChange}>2</ToggleButton>
                                    <ToggleButton variant="outline-info" value={3} onChange={this.props.handleChange}>3</ToggleButton>
                                    <ToggleButton variant="outline-info" value={4} onChange={this.props.handleChange}>4</ToggleButton>
                                    <ToggleButton variant="outline-info" value={9} onChange={this.props.handleChange}>Maximum</ToggleButton>
                                </ToggleButtonGroup>
                            </Row>
                            <Row>
                                <p className="panelText panelElement">Who starts?</p>
                            </Row>
                            <Row>
                                <ToggleButtonGroup type="radio" name="nextSymbol" defaultValue={"O"} size="md" className="panelElement">
                                    <ToggleButton variant="outline-info" value="O" onChange={this.props.handleChange}>Human</ToggleButton>
                                    <ToggleButton variant="outline-info" value="X" onChange={this.props.handleChange}>Computer</ToggleButton>
                                </ToggleButtonGroup>
                            </Row>
                        </div>:<></>
                    }
                    <Row>
                        <Button variant="outline-info" size="md" className="panelElement panelText" onClick={this.props.showHint} style={{marginTop:"5px"}}>Hint</Button>
                    </Row>
                </div>
            </div>
            </>
        )
    }
}
export default GamePanel