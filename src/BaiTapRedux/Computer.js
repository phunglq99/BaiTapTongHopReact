import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Computer extends Component {
    render() {

        let keyFrame = `@keyframes randomItem${Date.now()} {
            0% {top: -30px;}
            25% {top: 60px;}
            50% {top: -30px;}
            75% {top: 60px;}
            100% {top: 0;}
          }`

        return (
            <div className="playGame">
                <style>
                     {keyFrame}
                </style>
                <div className="theThink" style={{position:'relative'}}>
                    <img style={{transform:'rotate(180deg)',left:'30%',position:'absolute',animation:`randomItem${Date.now()} 0.5s`}} className="mt-4" width={70} src={this.props.computer.hinhAnh} alt="..." />
                </div>
                <div className="speech-bubble"></div>
                <img style={{width:200,height:200}} src="./img/oantuxi/playerComputer.png" alt="..."/>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        computer : state.BaiTapOanTuXiReducer.conputer
    }
}
export default connect(mapStateToProps)(Computer)