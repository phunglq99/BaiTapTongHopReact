import React, { Component, Fragment } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from '../data/danhSachGhe.json'
import DanhSachGhe from './DanhSachGhe'
export default class BaiTapBookingTicket extends Component {



    renderHangGhe=()=>{
        return  danhSachGheData.map((hangGhe,index)=>{
            return <div key={index}>
                <DanhSachGhe hangGhe ={hangGhe} />
            </div>

        })  
    }

    render() {
        return (
            <div className="bookingMovie" style={{position:"fixed",width:'100%', height:'100%',backgroundImage:"url('./img/bookingticket/bgmovie.jpg')",backgroundSize:'100%'}}>
               <div style={{position:'fixed',width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}>
                   <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center">
                                <div className="text-warning display-4">ĐẶT VÉ XEM PHIM</div>
                                <div className="mt-3 text-light" style={{fontSize:'25px'}}>Màn Hình</div>
                                <div className="mt-2" style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                                    <div className="screen"></div>
                                    
                                </div>
                                {this.renderHangGhe()}
                            </div>
                            <div className="col-4">
                                <div className="text-light mt-2 text-center" style={{fontSize:'30px'}}>DANH SÁCH CHỌN GHẾ</div>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}
