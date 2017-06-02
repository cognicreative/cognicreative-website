import React, { Component } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import PropTypes from 'prop-types'
import styles from '../assets/stylesheets/header-footer-animate.css'
import $ from 'jquery'

const propTypes = {}

const defaultProps = {}

class AnimatedHeaderFooter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: true
    }

    this.headerHeight = $('#header').height() + 1
    this.footerHeight = $('#footer').height() + 1
    this.mouseClientY = 0

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  hide () {

  }

  show () {

  }

  render () {
    return (
      <Navbar inverse staticTop id='header'>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>Animated Header Footer</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}

AnimatedHeaderFooter.propTypes = propTypes

AnimatedHeaderFooter.defaultProps = defaultProps

export default AnimatedHeaderFooter
