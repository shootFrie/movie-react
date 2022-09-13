import React, { Component } from 'react'
import './tabbar.css';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import Movie from '../../pages/Movie'
import Mine from '../../pages/Mine'
import Cinema from '../../pages/Cinema'

export default class index extends Component {
  render() {
    return (
      <Router>
        {/* 配置基础路由 */}
        <Route path="/" component={Movie} exact></Route>  
        <Route path="/movie" component={Movie} exact></Route>
        <Route path="/cinema" component={Cinema}></Route>
        <Route path="/mine" component={Mine}></Route>
        <footer id="footer">
          <ul>
            <li>
              <NavLink to="/" exact>
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
      </Router>
    )
  }
}
