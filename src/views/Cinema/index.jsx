import React from 'react'
import './index.css'
import Header from '../../components/Header'
import TabBar from '../../components/TabBar'
import CityList from '../../components/CityList'

export default function Cinema() {
  return (
    <div id="main">
      <Header title="喵喵电影"></Header>
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
        <CityList />
      </div>
      <TabBar />
    </div>
  )
}
