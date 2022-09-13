import React from 'react'
import './detail.css'
import { 
  /* useSearchParams, */
  useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
export default function Detail() {
  const navigator = useNavigate()
  //获取地址栏传参
  // console.log(window.location.href)
  // 这里是'/xx?id=xxx'
  // const [searchParams, setSearchParams] = useSearchParams()
  // console.log(searchParams.get("id"))

  // 这里是'/xxx/id'
  const params = useParams()
  // console.log(params.myid);
  const [movieInfo, setMovieInfo] = useState()
  const [isShow, setIsShow] = useState(true)
  useEffect(() => {
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${params.myid}&k=1106207`,
      headers: {
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660565768471995430993921","bc":"440100"}',
        "X-Host": 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res)
      setMovieInfo(res.data.data.film)
      setIsShow(false)
    }).catch(e => {
      console.log(e);
      
    })
  }, [params])

  const handleToBack = () => {
    navigator(-1)
  }

  return (
    <div id="detailContainer" className="slide-enter-active">
      <Header title="影片详情">
      <i className="iconfont icon-right" onTouchEnd={handleToBack}></i>
      </Header>
      {isShow ? (<Loading />) :
      (<div id="content" className="contentDetail">
      <div className="detail_list">
        <div className="detail_list_bg"></div>
        <div className="detail_list_filter"></div>
        <div className="detail_list_content">
          <div className="detail_list_img">
            <img src={movieInfo.poster } alt="" />
          </div>
          <div className="detail_list_info">
            <h2>{movieInfo.name}</h2>
            <p>{movieInfo.language ?movieInfo.language : '国语' }</p>
            <p>{movieInfo.grade}</p>
            <p>{movieInfo.category}</p>
            <p>{movieInfo.nation} / {movieInfo.runtime}分钟</p>
          </div>
        </div>
      </div>
      <div className="detail_intro">
        <p>{movieInfo.synopsis}</p>
      </div>
      <div className="detail_player swiper-container">
        <ul className="swiper-wrapper">
          {
            movieInfo.actors.map(actor => {
              return (
                <li className="swiper-slide" key={actor.name}>
                <div>
                  <img src={actor.avatarAddress} alt="" />
                </div>
                <p>{actor.name}</p>
              </li>
              )
            })
          }
          
        </ul>
      </div>
      </div>)
      }
    </div>
  )
}
