import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
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
                    <table className="table" border="3">
                        <thead>
                            <tr className="text-light" style={{fontSize:'35px'}}>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
