import React, { Component } from 'react'
import Game from './Game.js'
import game from './Board.js'

function Tile(props) {
    let Ostyle={color:"#d8235a"}
    let Xstyle={color:"#5bc0de"}
    return(
        <div className='Tile' onClick={() => props.onClick()}>
              <h1 className='TileContent' style={props.value=='O'?Ostyle:Xstyle}>{props.value}</h1>
        </div>
    )
}
export default Tile
