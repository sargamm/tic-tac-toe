import React, { Component } from 'react'
import Tile from './Tile'
import {Col,Row, Container} from 'react-bootstrap'
class Board extends Component{
    constructor(props){
        super(props);
        this.state={
            tiles:Array(9).fill(null)
        }
    }
    render(){
        return(
               <div className='Board'>
                    <Col>
                        <Row>
                        <Tile nextSymbol={this.props.nextSymbol} game={this.game}/>
                        <Tile nextSymbol={this.props.nextSymbol}/>
                        <Tile nextSymbol={this.props.nextSymbol}/>
                        </Row>
                        <Row>
                        <Tile nextSymbol={this.props.nextSymbol}/>
                        <Tile nextSymbol={this.props.nextSymbol}/>
                        <Tile nextSymbol={this.props.nextSymbol}/>
                        </Row>
                        <Row>
                        <Tile nextSymbol={this.props.nextSymbol}/>
                        <Tile nextSymbol={this.props.nextSymbol}/>
                        <Tile nextSymbol={this.props.nextSymbol}/>
                        </Row>
                    </Col>
                </div>
        )
    }
}
export default Board