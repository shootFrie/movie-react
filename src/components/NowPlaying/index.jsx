import React, { useEffect,useState } from 'react'
import './index.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default function NowPlaying() {
    const navigate = useNavigate()
   const [movieList, setMovielist] = useState([])
   useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=7664962',
      headers: {
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660565768471995430993921","bc":"440100"}',
        "X-Host": "mall.film-ticket.film.list"
      }
    }).then(res => {
      console.log(res);
      setMovielist(res.data.data.films) 
    }).catch(e => {
      console.error(e);
    })
  }, [])

  const handleToDetail = (id) => {
    console.log(id)
    navigate(`/detail/${id}`)
  }

  const handleBuyTicket = () => {
    navigate('/center')
  }
  return (
    <div className="movie_body">
      <ul>
        {
          movieList.map(item => {
            return (
              <li key={item.filmId}>
                <div className="pic_show"><img src={item.poster} alt="" /></div>
                <div className="info_list">
                  <h2 onTouchEnd={() => handleToDetail(item.filmId)}>{item.name}</h2>
                  <p>观众评 <span className="grade">{item.grade}</span></p>
                  <p>主演: {item.actors.reduce((pre, cur) => { return pre ? pre + "," + cur.name : cur.name }, '')}</p>
                  <p>{item.synopsis}</p>
                </div>
                <div className="btn_mall" onClick={handleBuyTicket}>
                  购票
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
