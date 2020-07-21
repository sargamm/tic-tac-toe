import React from 'react'
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
function Home(props){
    return (
        <div className="Home" >
            <ToggleButtonGroup type="radio" name="IsMultiplayer" defaultValue={false} size="lg"className="panelElement">
                <ToggleButton variant="info" value={false} onChange={props.handleChange}>Single Player</ToggleButton>
                <ToggleButton variant="info" value={true} onChange={props.handleChange}>Multi Player</ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}
export default Home