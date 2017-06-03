import React, { Component } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'

class Footer extends Component {
  render () {
    return (
      <footer>
        <Navbar inverse fixedBottom id='footer'>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'>Animated Footer</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </footer>
    )
  }
}

export default Footer
