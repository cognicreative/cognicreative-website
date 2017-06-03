import React, { Component } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'

class Header extends Component {
  render () {
    return (
      <header>
        <Navbar inverse fixedTop id='header'>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'>Animated Header</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </header>
    )
  }
}

export default Header
