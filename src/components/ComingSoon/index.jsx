import React, { useState } from 'react'
import './index.css'
import { useEffect } from 'react'
import Loading from '../Loading'
import Scroller from '../Scroller'
import axios from 'axios'

export default function ComingSoon() {
  const [isLoad, setIsLoad] = useState(true)
  const [comingList, setComingList] = useState([])
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=809269",
      headers: {
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660565768471995430993921","bc":"440100"}',
        "X-Host": "mall.film-ticket.film.list"
      }
    }).then(res => {
      console.log("commingSoon-Data:", res)
      setComingList(res.data.data.films)
      setIsLoad(false)
    })
  }, [])
  return (
    <div className="movie_body">
      {
        isLoad ? (<Loading />) : (
          <Scroller>
            <ul>
              {
                comingList.map(item => {
                  return (
                    <li key={item.filmId}>
                      <div className="pic_show"><img src={item.poster} alt="" /></div>
                      <div className="info_list">
                        <h2>{item.name}</h2>
                        <p>主演: {
                          item.actors.reduce((pre, cur) => {
                            return pre ? pre + "," + cur.name : cur.name
                          }, "")}</p>
                        <p>上映日期：{item.premiereAt}</p>
                      </div>
                      <div className="btn_pre" >
                        预售
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </Scroller>
        )
      }
    </div>
  )
}
