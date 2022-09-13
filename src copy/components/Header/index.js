import React, { Component } from 'react'
import './header.css'
import PropTypes from 'prop-types'

export default class Header extends Component {
  render() {
    return (
      <header id="header">
      <h1>{ this.props.title }</h1>
    </header>
    )
  }
}


Header.propTypes = {
  title: PropTypes.string
}
Header.defaultProps = {
  title: '喵电影'
}

