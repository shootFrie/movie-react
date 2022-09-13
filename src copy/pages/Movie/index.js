import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css'
import Header from '../../components/Header'
import City from '../../components/City'
import NowPlaying from '../../components/NowPlaying'
import ComingSoon from '../../components/ComingSoon'
import Search from '../../components/Search'

export default class Movie extends Component {
  
  render() {
    return (
      <div id="main">
        <Header />
            <div id="content">
              <Router>
                <div className="movie_menu">
                    <NavLink to="/movie/city" className="city_name">
                      <span>城市</span><i className="iconfont icon-lower-triangle"></i>
                    </NavLink>
                    <div className="hot_swtich">
                        <NavLink to="/" className="hot_item" exact>正在热映</NavLink>
                        <NavLink to="/movie/comingSoon" className="hot_item">即将上映</NavLink>
                    </div>
                        <NavLink to="/movie/search" className="search_entry">
                          <i className="iconfont icon-sousuo"></i>
                        </NavLink>

                    
                </div>
              <Route path="/" component={NowPlaying} exact></Route>
               <Route path="/movie/city" component={City}></Route>
               <Route path="/movie/nowPlaying" component={NowPlaying}></Route>
               <Route path="/movie/comingSoon" component={ComingSoon}></Route>
               <Route path="/movie/search" component={Search}></Route>
              </Router>
            </div>
          
        {/* <router-view name="detail" /> */}
    </div>
    )
  }
}
