import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

export default function Login() {
	const handleSumbit = () => {
		localStorage.setItem("token", "123")
	}
  return (
    <div className="login_body">
		<div>
			<input className="login_text" type="text" placeholder="账户名/手机号/Email" />
		</div>
		<div>
			<input className="login_text" type="password" placeholder="请输入您的密码" />
		</div>
		<div className="login_btn">
			<input type="submit" value="登录" onClick={handleSumbit}/>
		</div>
		<div className="login_link">
      <NavLink to="">立即注册</NavLink>
      <NavLink to="">找回密码</NavLink>
		</div>
	</div>
  )
}
