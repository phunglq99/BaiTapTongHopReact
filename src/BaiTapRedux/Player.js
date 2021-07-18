import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Player extends Component {



     renderMangDatCuoc =()=>{
         return this.props.mangDatCuoc.map((dc,index)=>{
             //Xét giá trị đặt cược thêm viền cho item được chọn
            let border ={};
            if (dc.datCuoc){
                border = {border:'3px solid orange'};
            }

             return <div className="col-4" key={index}>
             <button onClick={()=>{
                 this.props.datCuoc(dc.ma)
             }} style={border} className="btnItem">
                 <img style={{width:50,height:50}} src={dc.hinhAnh} alt="..." />
             </button>
         </div>
         })
     }

    render() {
        return (
            <div className="playGame">
                <div className="theThink">
                    <img className="mt-4" width={70} src={this.props.mangDatCuoc.find(item =>item.datCuoc === true).hinhAnh} alt="..." />
                </div>
                <div className="speech-bubble"></div>
                <img style={{width:200,height:200}} src="./img/oantuxi/player.png" alt="..."/>
                <div className="row">
                    {this.renderMangDatCuoc()}     
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        mangDatCuoc : state.BaiTapOanTuXiReducer.mangDatCuoc,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        datCuoc: (maCuoc)=>{
            dispatch ({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Player)
