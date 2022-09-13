import React, { useState, useRef,  useEffect } from 'react'
import './index.css'
import Loading from '../Loading'
import Scroller from '../Scroller'
import axios from 'axios'

export default function City() {
  const [isShow, setIsShow] = useState(true)
  const [hotList, setHotList] = useState([])
  const [cityList, setCityList] = useState([])
  const city_List = useRef(null)
  const city_sort = useRef(null)

  // 分类
  const formatCityList = (cities) => {
    let cityList = []
    let hotList = []
    for (const i in cities) {
      // 热门城市
      if (cities[i].isHot === 1) {
        hotList.push(cities[i])
      }
      // 城市首字母
      let firstLetter = cities[i].pinyin.substring(0, 1).toUpperCase();
      if (toCom(firstLetter)) { // 新添加
        cityList.push({ index: firstLetter, list: [{ name: cities[i].name, cityId: cities[i].cityId }] })
      } else { // 累加到已有的index中
        cityList.filter(item => {
          if (item.index === firstLetter) {
            item.list.push({ name: cities[i].name, cityId: cities[i].cityId })
          }
          return item.index === firstLetter
        })
      }
    }
    // 排序
    cityList.sort((n1, n2) => {  //排序
      if (n1.index > n2.index) {
        return 1;
      }
      else if (n1.index < n2.index) {
        return -1;
      }
      else {
        return 0;
      }
    });
    // 对比是否有重复首字母
    function toCom(firstLetter) {
      let arr = cityList.filter(item => {
        return item.index === firstLetter
      })
      return arr.length ? false : true
    }
    return {
      cityList,
      hotList
    }
  }
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?k=4500611",
      headers: {
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660565768471995430993921"}',
        "X-Host": "mall.film-ticket.city.list"
      }
    }).then(res => {
      console.log(res.data.data.cities)
      const { cityList, hotList } = formatCityList(res.data.data.cities)
      console.log(cityList, hotList)
      setCityList(cityList)
      setHotList(hotList)
      setIsShow(false)
    })
  }, [])

  const handleToCity = (cityName, cityId) => {
    
  }

  const handleToIndex = (index) => { //点击到哪个字母到哪行 
    let h2 = city_sort.current.getElementsByTagName('h2');
    // console.log(h2[index].offsetTop, index);
    
    city_List.current.toScrollTop(-h2[index].offsetTop)
  }
  return (
    <div className="city_body">
      <div className="city_list">
        {
          isShow ? (<Loading />) : (
            <Scroller ref={city_List}>
              <div>
                <div className="city_hot">
                  <h2>热门城市</h2>
                  <ul className="clearfix">
                    {
                      hotList.map(item => {
                        return (
                          <li key={item.cityId} onClick={handleToCity(item.name, item.cityId)}>{item.name}</li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="city_sort" ref={city_sort}>
                  {
                    cityList.map(item => {
                      return (
                        <div key={item.index}>
                          <h2>{item.index}</h2>
                          <ul>
                            {
                              item.list.map(itemList => {
                                return (
                                  <li key={itemList.cityId} onClick={() => { handleToCity(itemList.name, itemList.cityId) }}>
                                    {itemList.name}
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </Scroller >
          )
        }
      </div>
      <div className="city_index">
        <ul>
          {
            cityList.map((item, index) => {
              return (
                <li key={item.index} onClick={() => {handleToIndex(index)}}>
                  {item.index}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

