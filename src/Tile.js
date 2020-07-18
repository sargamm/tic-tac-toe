import React, { Component } from 'react'
import Game from './Game.js'
import game from './Board.js'
function Tile(props) {
    return(
        <div className='Tile'>
              <h1 className='TileContent'>{props.value}</h1>
        </div>
    )
}
// class Tile extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             fill:""
//         }
//         this.handleClick=this.handleClick.bind(this)
//     }
//     handleClick(){
//         if(this.state.fill==''){
//             this.setState({
//                 fill:this.props.nextSymbol
//             });
//         }
//     }
//     render(){
//         return(
//             <div className='Tile' onClick={this.handleClick} >
//                <h1 className='TileContent'>{this.state.fill}</h1>
//             </div>
//         )
//     }
// }
export default Tile
