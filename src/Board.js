import React, { Component } from 'react'
import Tile from './Tile'
import {Col,Row} from 'react-bootstrap'
import { getOptimalMove, hasMoves, value ,winner} from './Minimax';
import GamePanel from './GamePanel';

class Board extends Component{
    constructor(props){
        super(props)
        this.state={
            tiles:Array(9).fill(null),
            player: 1, //multiplayer or single player
            depth:9,
            nextSymbol:'O',
            starter:1
        }
        this.handleClickMultiPlayer=this.handleClickMultiPlayer.bind(this)
        this.handleClickSinglePlayer=this.handleClickSinglePlayer.bind(this)
    }
    componentDidUpdate(){
        let f=0
        for(let i=0;i<9;i++){
            if(this.state.tiles[i]!==null)
                f=1
        }
        if(this.state.nextSymbol=='X' && f!=1 && this.state.player==1){
            let x=Math.floor(Math.random()*8)
            let tilesNew=[...this.state.tiles]
            tilesNew[x]='X'
            this.setState({
                tiles:tilesNew
            })
        }
    }
    handleClick(i){
        if(this.state.player==1){
            this.handleClickSinglePlayer(i)
        }
        else
            this.handleClickMultiPlayer(i)
    }
    handleClickSinglePlayer(i){
        if(this.state.tiles[i]===null){
            let f=0
            let tilesNew=[...this.state.tiles]
            tilesNew[i]='O'
            let win_tiles
            if(hasMoves(this.state.tiles)!==0 && value(this.state.tiles)!==15 && value(this.state.tiles)!==-15){
                win_tiles=winner(tilesNew)
                if(win_tiles[0]==-1){
                    let moveC = getOptimalMove([...tilesNew], 'X',this.state.depth)
                    tilesNew[moveC] = 'X';
                }
                else{
                    f=1
                }
                this.setState({
                    tiles:tilesNew
                })
            }
            if(f!=1)
                win_tiles=winner(tilesNew)
            if(win_tiles[0]>-1){
                let X = document.getElementsByClassName("Tile");
                for(let i=0;i<3;i++){
                    let col=tilesNew[win_tiles[0]]=='O'?"#d8235a":"#5bc0de"
                    X[win_tiles[i]].style.outline="5px solid "+col
                }
            }
        }
    }
    handleClickMultiPlayer(i){
        if(this.state.tiles[i]===null){
            let tilesNew=[...this.state.tiles]
            tilesNew[i]=this.state.nextSymbol
            if(hasMoves(this.state.tiles)!==0 && value(this.state.tiles)!==15 && value(this.state.tiles)!==-15)
                this.setState((prev)=>({
                    tiles:tilesNew,
                    nextSymbol:prev.nextSymbol=='O'?'X':'O'
                }))
            let win_tiles=winner(tilesNew)
            if(win_tiles[0]>-1){
                let X = document.getElementsByClassName("Tile");
                for(let i=0;i<3;i++){
                    let col=tilesNew[win_tiles[0]]=='O'?"#d8235a":"#5bc0de"
                    X[win_tiles[i]].style.outline="5px solid "+col
                }
            }
        }
    }
    showHint(){
        if(hasMoves(this.state.tiles)!=0 && value(this.state.tiles)!=15 && value(this.state.tiles)!=-15){
            let hint = getOptimalMove(this.state.tiles, this.state.nextSymbol, this.state.depth);
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
        if(name==="player"){
            this.NewGame()
        }
        console.log(name+" "+value)
    }
    NewGame(){
        this.setState({
            tiles:Array(9).fill(null)
        })
        let X = document.getElementsByClassName("Tile");
        for(let i=0;i<9;i++){
            X[i].style.outline="none"
        }
            
    }
    render(){
        return(
               <div className='Game'>
                   <Row style={{height:"100vh"}}>
                   <Col lg={4} md={12} className="GamePanelArea">
                       <GamePanel handleChange={(event)=>this.handleChange(event)} showHint={()=>this.showHint()} NewGame={()=>this.NewGame()} board={this.state}/>
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