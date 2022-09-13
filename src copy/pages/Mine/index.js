import React from 'react'
import Header from '../../components/Header'
import Login from '../../components/Login'

export default function index() {
  return (
    <div id="main">
        <Header title={'我的喵喵'} />
        <div id="content">
            <Login />
        </div>
    </div>
  )
}

