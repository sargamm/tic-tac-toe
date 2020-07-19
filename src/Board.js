import React, { Component } from 'react'
import Tile from './Tile'
import {Col,Row, Container} from 'react-bootstrap'
import { getOptimalMove, hasMoves, value } from './Minimax';

class Board extends Component{
    constructor(props){
        super(props);
        this.state={
            tiles:Array(9).fill(null),
            // fillNext:'O'
        }
    }
    handleClick(i){
        if(this.state.tiles[i]==null){
        let tilesNew=[...this.state.tiles]
        tilesNew[i]='O'
        if(hasMoves(this.state.tiles)!=0 && value(this.state.tiles)!=15 && value(this.state.tiles)!=-15){
            let moveC = getOptimalMove(tilesNew)
            tilesNew[moveC] = 'X';
        }
        this.setState((prev)=>({
            tiles:tilesNew,
        }))
        }
    }

    render(){
        return(
               <div className='this.state.tiles'>
                    <Col>
                        <Row>
                            <Tile value={this.state.tiles[0]} onClick={()=>this.handleClick(0)}/>
                            <Tile value={this.state.tiles[1]} onClick={()=>this.handleClick(1)}/>
                            <Tile value={this.state.tiles[2]} onClick={()=>this.handleClick(2)}/>
                        </Row>
                        <Row>
                            <Tile value={this.state.tiles[3]} onClick={()=>this.handleClick(3)}/>
                            <Tile value={this.state.tiles[4]} onClick={()=>this.handleClick(4)}/>
                            <Tile value={this.state.tiles[5]} onClick={()=>this.handleClick(5)}/>
                        </Row>
                        <Row>
                            <Tile value={this.state.tiles[6]} onClick={()=>this.handleClick(6)}/>
                            <Tile value={this.state.tiles[7]} onClick={()=>this.handleClick(7)}/>
                            <Tile value={this.state.tiles[8]} onClick={()=>this.handleClick(8)}/>
                        </Row>
                    </Col>
                </div>
        )
    }
}
export default Board