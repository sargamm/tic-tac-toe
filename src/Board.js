import React, { Component } from 'react'
import Tile from './Tile'
import {Col,Row, Container} from 'react-bootstrap'
import { getOptimalMove, hasMoves, value } from './Minimax';
import GamePanel from './GamePanel';

class Board extends Component{
    constructor(props){
        super(props)
        this.state={
            tiles:Array(9).fill(null)
        }
    }
    componentDidUpdate(){
        let f=0
        for(let i=0;i<9;i++){
            if(this.state.tiles[i]!==null)
                f=1
        }
        if(this.props.starter===2 && f!=1){
            console.log("eq")
            let x=Math.floor(Math.random()*8)
            let tilesNew=[...this.state.tiles]
            tilesNew[x]='X'
            this.setState({
                tiles:tilesNew
            })
        }
    }
    handleClick(i){
        if(this.state.tiles[i]===null){
            let tilesNew=[...this.state.tiles]
            tilesNew[i]='O'
            console.log(this.props.depth+"depth")
            if(hasMoves(this.state.tiles)!==0 && value(this.state.tiles)!==15 && value(this.state.tiles)!==-15){
                console.log(tilesNew)
                let moveC = getOptimalMove([...tilesNew], 'X')
                tilesNew[moveC] = 'X';
                console.log(i+" "+moveC)
                this.setState({
                    tiles:tilesNew
                })
            }
        }
    }
    handleChange(event){
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
        console.log(value)
    }

    render(){
        return(
               <div className='Game'>
                   <Row style={{height:"100vh"}}>
                   <Col lg={4} md={12} className="GamePanelArea">
                       <GamePanel handleChange={(event)=>this.handleChange(event)}/>
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