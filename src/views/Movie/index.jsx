import React from 'react'
import './index.css'
import {  Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import TabBar  from '../../components/TabBar'
import {TagNavLink} from '../../router/TagNavLink'

export default function Movie() {
  return (
    <div id="main">
      <Header title="喵喵电影" />
      <div id="content">
        <div className="movie_menu">
          <TagNavLink tag="div" to="/movie/city" className="city_name">
            <span>广州</span>
            <i className="iconfont icon-lower-triangle"></i>
            </TagNavLink>
          
          <div className="hot_swtich">
            <TagNavLink tag="div" to="/movie/nowplaying" className="hot_item">正在热映</TagNavLink> 
            <TagNavLink tag="div" to="/movie/comingsoon" className="hot_item">即将上映</TagNavLink>

          </div>
          <div className="hot_item">
          <TagNavLink tag="div" to="/movie/comingsoon" className="hot_item">
             <i className="iconfont icon-sousuo"></i>
             </TagNavLink> 
          </div>
        </div>
        {/* 路由容器 */}
        <Outlet />
        
        <TabBar />
      </div>
    </div>
  )
}

