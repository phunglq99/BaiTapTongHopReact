import React, { Component } from 'react'
import './BaiTapOanTuXi.css'
import Computer from './Computer'
import Player from './Player'
import ResultGame from './ResultGame'
import {connect} from 'react-redux'

class BaiTapOanTuXi extends Component {

    render() {

       
        return (
            <div className="gameOanTuXi">
               <div className="row text-center mt-5">
                   <div className="col-4 mt-2">
                        <Player />
                   </div>
                   <div className="col-4 mt-2">
                        <ResultGame />
                        <button onClick={()=>{
                            this.props.playGame()
                        }} className="btn btn-success p-3 display-4 mt-5">Play game</button>
                   </div>
                   <div className="col-4 mt-2">
                        <Computer />
                   </div>
               </div>
            </div>
        )
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        playGame: ()=>{
            let count = 1;
            //Khai báo hàm lặp đi lập lại
            let ranDomComputerItem = setInterval(()=>{
                dispatch({
                    type: 'RAN_DOM'
                            
                })
                count ++;
                if(count > 10){
                    //dừng setInterval      
                    clearInterval(ranDomComputerItem);

                    dispatch({
                        type: 'END_GAME',
                    })

                }
            },100)
            
        }
    }
}
export default connect(null,mapDispatchToProps)(BaiTapOanTuXi)

