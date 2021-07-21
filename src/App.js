import React, { Component } from 'react'
import BaiTapBookingTicket from './BaiTapDatVePhim/BaiTapBookingTicket'
import BaiTapOanTuXi from './BaiTapOanTuXiRedux/BaiTapOanTuXi'

export default class App extends Component {
  render() {
    return (
      <div>
          <BaiTapOanTuXi />
          {/* <BaiTapBookingTicket /> */}
      </div>
    )
  }
}
