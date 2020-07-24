import React from 'react'
import { Row, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
function GamePanel(props)
    {   
        return(
            <>
            
            <div className="GamePanel .d-none " id="GamePanel">
                <div className="Panel" id="Panel">
                    <Row className="mx-auto">
                        <Button variant="outline-info" size="md" className="panelText panelElement" onClick={props.NewGame} >New Game</Button>
                        <ToggleButtonGroup type="radio" name="player" size="md"className="panelElement" defaultValue={props.board.player}>
                            <ToggleButton variant="outline-info" type="radio" value={1} onChange={props.handleChange} >Single Player</ToggleButton>
                            <ToggleButton variant="outline-info" type="radio" value={2} onChange={props.handleChange} >Multi Player</ToggleButton>
                        </ToggleButtonGroup>
                    </Row>
                    {props.board.player==1?
                        <div>
                            <Row>
                                <p className="panelText panelElement">Difficulty</p>   
                            </Row>
                            <Row>
                                <ToggleButtonGroup type="radio" name="depth" size="md" className="panelElement" defaultValue={props.board.depth} >
                                    <ToggleButton variant="outline-info" value={1} onChange={props.handleChange}>1</ToggleButton>
                                    <ToggleButton variant="outline-info" value={2} onChange={props.handleChange}>2</ToggleButton>
                                    <ToggleButton variant="outline-info" value={3} onChange={props.handleChange}>3</ToggleButton>
                                    <ToggleButton variant="outline-info" value={4} onChange={props.handleChange}>4</ToggleButton>
                                    <ToggleButton variant="outline-info" value={9} onChange={props.handleChange}>Maximum</ToggleButton>
                                </ToggleButtonGroup>
                            </Row>
                            <Row>
                                <p className="panelText panelElement">Who starts?</p>
                            </Row>
                            <Row>
                                <ToggleButtonGroup type="radio" name="nextSymbol" size="md" className="panelElement" defaultValue={props.board.nextSymbol}>
                                    <ToggleButton variant="outline-info" value="O" onChange={props.handleChange} >Human</ToggleButton>
                                    <ToggleButton variant="outline-info" value="X" onChange={props.handleChange} >Computer</ToggleButton>
                                </ToggleButtonGroup>
                            </Row>
                        </div>:<></>
                    }
                    <Row>
                        <Button variant="outline-info" size="md" className="panelElement panelText" onClick={props.showHint} style={{marginTop:"5px"}}>Hint</Button>
                    </Row>
                </div>
            </div>
            </>
        )
    }

export default GamePanel