import React, { useState, useRef, useEffect } from 'react'
import './index.css'
import Loading from '../Loading'
import Scroller from '../Scroller'
import axios from 'axios'

export default function CityList() {
  const city_List = useRef(null)
  const [isShow, setIsShow] = useState(true)
  const [cinemaList, setCinemaList] = useState([])
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=5074392",
      headers: {
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660565768471995430993921","bc":"440100"}',
        "X-Host": "mall.film-ticket.cinema.list"
      }
    }).then(res => {
      console.log(res)
      setCinemaList(res.data.data.cinemas)
      setIsShow(false)
    })

  }, [])
  return (
    <div className="cinema_body">
      {
        isShow ? (<Loading />) : (
          <Scroller ref={city_List}>
            <ul>
              {
                cinemaList.map(item => {
                  return (<li key={item.cinemaId}>
                    <div>
                      <span>{item.name}</span>
                      <span className="q"><span className="price">{item.lowPrice / 100}</span> 元起</span>
                    </div>
                    <div className="address">
                      <span>{item.Address}</span>
                      <span>{item.distance}</span>
                    </div>
                    <div class="card">
                      {/* <div v-for="(num,key) in item.tag" v-if="num === 1" :key ="key" :class="key | classCard">{{key | formatCard}}</div> <!-- 渲染 -->
                 */}</div>
                  </li>)
                })
              }
            </ul>
          </Scroller>)
      }
    </div>
  )
}
