import React from 'react'
import './header.css'
export default function Header(props) {
  
  return (
    <header id="header">
      {props.children}
      <h1>{props.title || "喵喵电影"}</h1>
    </header>
  )
}
