import React, { Component } from 'react'

export default class DanhSachGhe extends Component {
    render() {
        return (
            <div className="text-light text-left ml-5 mt-3" style={{fontSize:'30px'}}>
                {this.props.hangGhe.hang}
            </div>
        )
    }
}
