import React, { Component } from 'react'
import './index.css'
export default class Login extends Component {
  render() {
    return (
      <div className="login_body">
      <div>
        <input className="login_text" type="text" placeholder="账户名/手机号/Email" />
      </div>
      <div>
        <input className="login_text" type="password" placeholder="请输入您的密码" />
      </div>
      <div className="login_btn">
        <input type="submit" value="登录" />
      </div>
      <div className="login_link">
        {/* <a>立即注册</a>
        <a>找回密码</a> */}
      </div>
    </div>
    )
  }
}
