import React, { Component } from 'react'
import Tile from './Tile'
import {Col,Row, Container} from 'react-bootstrap'
import { getOptimalMove, hasMoves, value } from './Minimax';
import GamePanel from './GamePanel';

class Board extends Component{
    constructor(props){
        super(props)
        this.state={
            tiles:Array(9).fill(null),
            player: 1, //multiplayer or single player
            depth:9,
            starter:'O' //who starts
        }
    }
    componentDidUpdate(){
        let f=0
        for(let i=0;i<9;i++){
            if(this.state.tiles[i]!==null)
                f=1
        }
        if(this.state.starter=='X' && f!=1){
            let x=Math.floor(Math.random()*8)
            let tilesNew=[...this.state.tiles]
            tilesNew[x]='X'
            this.setState({
                tiles:tilesNew,
                starter:'X'
            })
        }
    }
    handleClick(i){
        if(this.state.tiles[i]===null){
            let tilesNew=[...this.state.tiles]
            tilesNew[i]='O'
            this.setState({
                starter:'O'
            })
            if(hasMoves(this.state.tiles)!==0 && value(this.state.tiles)!==15 && value(this.state.tiles)!==-15){
                console.log(tilesNew)
                let moveC = getOptimalMove([...tilesNew], 'X',this.state.depth)
                tilesNew[moveC] = 'X';
                this.setState({
                    tiles:tilesNew,
                    starter:'X'
                })
            }
        }
    }
    showHint(){
        if(hasMoves(this.state.tiles)!=0 && value(this.state.tiles)!=15 && value(this.state.tiles)!=-15){
            let hint = getOptimalMove(this.state.tiles, this.state.starter, this.state.depth);
            let X = document.getElementsByClassName("Tile");
            X[hint].style.backgroundColor="#d8235a"
            setTimeout(() => {
                X[hint].style.backgroundColor="#1f1f25"
            }, 1000);
        }
    }
    handleChange(event){
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
        console.log(value)
    }
    NewGame(){
        this.setState({
            tiles:Array(9).fill(null),
            starter:'O'
        })
    }
    render(){
        return(
               <div className='Game'>
                   <Row style={{height:"100vh"}}>
                   <Col lg={4} md={12} className="GamePanelArea">
                       <GamePanel handleChange={(event)=>this.handleChange(event)} showHint={()=>this.showHint()} NewGame={()=>this.NewGame()}/>
                   </Col>
                    <Col lg={8} md={12} className="GameBoardArea">
                        <div className='Board'>
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
                        </div>
                    </Col>
                    </Row>
                </div>
        )
    }
}
export default Board