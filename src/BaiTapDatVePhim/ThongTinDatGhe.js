import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/action/BaiTapDatVeAction'

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className="mt-5">
                    <button className="gheDuocChon"></button>
                    <span style={{ fontSize: '30px' }} className="text-light">Ghế Đã Đặt</span>
                    <br />
                    <button className="gheDangChon"></button>
                    <span style={{ fontSize: '30px' }} className="text-light">Ghế Đang Đặt</span>
                    <br />
                    <button className="ghe" style={{ marginLeft: '0px' }}></button>
                    <span style={{ fontSize: '30px' }} className="text-light">Ghế Chưa Đặt</span>
                </div>
                <div className="mt-5">
                    <table className="table" border="2" style={{border:'2px solid orange'}}>
                        <thead>
                            <tr className="text-light" style={{ fontSize: '35px' }}>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-warning">
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td><button className="btn btn-outline-danger" onClick={()=>{
                                        this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                                    }}>Xóa</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr style={{borderTop:'2px solid white'}} className="text-warning text-center">
                                <td style={{ fontSize: '35px' }} className="text-light">Tổng Tiền: </td>
                                <td style={{verticalAlign:'middle', fontSize:'20px'}}>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat, index)=>{
                                        return tongTien += gheDangDat.gia;
                                },0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}
export default connect(mapStateToProps)(ThongTinDatGhe)