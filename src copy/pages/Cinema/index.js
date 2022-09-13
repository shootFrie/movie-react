import React, { Component } from 'react'
import './index.css'
import Header from '../../components/Header'
import CiList from '../../components/CiList'
export default class Cinema extends Component {
  render() {
    return (
      <div id="main">
        <Header/>
        <div id="content">
            <div className="cinema_menu">
        <div className="city_switch">
          全城 <i className="iconfont icon-lower-triangle"></i>
        </div>
        <div className="brand_swtich">
          品牌 <i className="iconfont icon-lower-triangle"></i>
        </div>
        <div className="feature_switch">
          特色 <i className="iconfont icon-lower-triangle"></i>
        </div>
      </div>
          <CiList />
      </div>
  </div>
    )
  }
}
