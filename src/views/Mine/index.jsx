import React from 'react'
import TabBar  from '../../components/TabBar'
import Header from '../../components/Header'
import Login from '../../components/Login'

export default function Mine() {
  return (
    <div id="main">
		<Header title="登录喵喵"/>
		<div id="content">
			<Login />
		</div>
		<TabBar />
	</div>
  )
}
