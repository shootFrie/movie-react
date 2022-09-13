import React, { Component } from 'react'
import './index.css'
// import Loading from '../Loading'
import Scroller from '../Scroller'
export default class City extends Component {
  state = {
    hotList: [],
    cityList: [],
    isLoading: true
  }
  
  handleToIndex = function () {
    
  }
  render() {
    return (
      <div class="city_body">
        <div class="city_list">
            if (isLoading) {
              // <Loading />
            } else {
              <Scroller ref="city_List">
                <div>
                  <div class="city_hot">
                    <h2>热门城市</h2>
                    <ul class="clearfix">
                    {
                      this.hotList.map(item => {
                        return <li key={ item.id }  onTap="handleToCity(item.nm , item.id)">{ item.nm }</li>
                      })
                    }
                    </ul>
                  </div>
                  <div class="city_sort" ref="city_sort">
                    {
                      this.cityList.map(item => {
                        return  (
                        <div key = {item.index}>
                          <h2>{item.index }</h2>
                          <ul>
                            {
                              item.list.map(itemList => {
                                return <li key={itemList.id} onTap={this.handleToCity(itemList.nm , itemList.id)}>{ itemList.nm }</li>
                              })
                            }
                          </ul>
                        </div>
                        )
                      })
                    }
                  </div>
                </div>
              </Scroller>
            }
          
        </div>
        
        <div class="city_index">
          <ul>
          {
            this.cityList.map((item, index) => {
              return <li key ={item.index } onTouchstart={ this.handleToIndex(index) }>{ item.index }</li>
            })
          }
            
          </ul>
        </div>
      </div>
    )
  }
}
