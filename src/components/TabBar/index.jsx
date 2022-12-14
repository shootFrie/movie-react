import React from 'react'
import {NavLink} from 'react-router-dom'
import './tabbar.css';

export default function TabBar() {
    return ( 
      <footer id="footer">
        <ul>
          <li>
            <NavLink to="/movie">
              <i className="iconfont icon-dianying"></i>
              <p>电影</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cinema">
              <i className="iconfont icon-yingyuan"></i>
              <p>影院</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/mine">
              <i className="iconfont icon-wode"></i>
              <p>我的</p>
            </NavLink>
          </li>
        </ul>
      </footer>
    )
}
