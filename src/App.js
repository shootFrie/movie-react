import React, { Component } from 'react'
import MRoute from './router'

import { BrowserRouter } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <MRoute />
      </BrowserRouter>
    )
  }
}
