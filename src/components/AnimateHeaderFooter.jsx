import React, { Component } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import PropTypes from 'prop-types'
import styles from '../assets/stylesheets/header-footer-animate.css'
import $ from 'jquery'
import 'fullpage.js'

const propTypes = {}

const defaultProps = {}

class AnimateHeaderFooter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: true
    }

    this.headerHeight = 0
    this.footerHeight = 0
    this.mouseClientY = 0

    this.dropdownVisible = false

    // Bind our methods
    this.hideHeaderFooter = this.hideHeaderFooter.bind(this)
    this.showHeaderFooter = this.showHeaderFooter.bind(this)
    this.atScrollTop = this.atScrollTop.bind(this)
    this.atScrollBottom = this.atScrollBottom.bind(this)
    this.getScrollY = this.getScrollY.bind(this)
    this.mouseInFooterArea = this.mouseInFooterArea.bind(this)
    this.mouseInFooterArea = this.mouseInFooterArea.bind(this)
    this.fullpageOnLeave = this.fullpageOnLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
  }

  componentDidMount () {
    this.headerHeight = $('#header').height() + 1
    this.footerHeight = $('#footer').height() + 1

    $('#fullpage').fullpage({
      'onLeave': this.fullpageOnLeave
    })

    this.showHeaderFooter()

    document.onmousemove = this.onMouseMove

    $(window).scroll(function () {
      if (this.atScrollTop() || this.atScrollBottom()) {
        this.showHeaderFooter()
      } else {
        this.hideHeaderFooter()
      }
    })
  }

  onMouseMove (e) {
    this.mouseClientY = e.clientY
    if (this.mouseInHeaderArea() || this.mouseInFooterArea()) {
      this.showHeaderFooter()
    }
  }

  render () {
    return (
      <div id='AnimateHeaderFooter' />
    )
  }

  onDropdownClick () {
    this.dropdownVisible = true
  }

  hideHeaderFooter () {
    // Hide Bootstrap dropdown
    $('.dropdown.open').click()

    // Collapse responsive menu if it is visible and not collapsed
    if ($('.navbar-toggle').hasClass('collapsed') === false) {
      $('.navbar-toggle').click()
    }

    $('#header').css('top', (-1 * this.headerHeight) + 'px')
    $('#footer').css('bottom', (-1 * this.footerHeight) + 'px')
  }

  showHeaderFooter () {
    $('#header').css('top', '0px')
    $('#footer').css('bottom', '0px')
  }

  atScrollTop () {
    return $(document).scrollTop() === 0
  }

  atScrollBottom () {
    return this.getScrollY() >= document.body.offsetHeight + this.footerHeight
  }

  getScrollY () {
    return (window.innerHeight + window.pageYOffset)
  }

  mouseInHeaderArea () {
    return this.mouseClientY <= this.headerHeight
  }

  mouseInFooterArea () {
    return this.mouseClientY >= window.innerHeight - this.footerHeight
  }

  fullpageOnLeave (index, nextIndex, direction) {
    if (nextIndex === 1 || $('.fp-section').length === nextIndex) {
      this.showHeaderFooter()
    } else {
      this.hideHeaderFooter()
    }
  }
}

AnimateHeaderFooter.propTypes = propTypes

AnimateHeaderFooter.defaultProps = defaultProps

export default AnimateHeaderFooter
