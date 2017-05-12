import React, { Component } from 'react'

import '../assets/stylesheets/base.scss'
import img from '../assets/images/Logo_1024.png'

export default class App extends Component {
  render () {
    return (
      <div>
        <img className='logo' src={img} />
      </div>
    )
  }
}
