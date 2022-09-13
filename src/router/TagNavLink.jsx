import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

import styled from "styled-components";

function OwnLinkItem (props) {
  // 渲染的tag
  let Tag = props.tag || 'a'
  // 添加的类名 和更换类名
  let _class = props.className || '' 
  let _activeClassName = props.activeClassName || 'active'
  // 查看这里props
  console.log(props)
  const location = useLocation()
  const navigate = useNavigate()
  // 判断是否加active 
  console.log(location)
  let isActive = props.exact ? location.pathname === props.to : location.pathname.startsWith(props.to)
  let className = isActive? _class + ' ' + _activeClassName : _class
  console.log("111", _activeClassName)
  console.log(className)
  return <Tag className = {className} onClick={()=>{navigate(props.to)}}>{props.children}</Tag>
}

export const TagLink = (props) => {
  // withRouter(<OwnLinkItem {...props} onClick={navp} />)
  
   
  return <OwnLinkItem {...props} />
}

// function withRouter(Component) {
//   return function (props) {
//     // this.props.history.push('/detail')
//     // this.props.history.match() 获取参数
//     // this.props.history.location() 获取路由
//     const push = useNavigate()
//     const match = useParams()
//     const location = useLocation()
//     return <Component {...props} history={{push, match, location}}/>
//   }
// }
export const TagNavLink  = styled(TagLink)`` 


