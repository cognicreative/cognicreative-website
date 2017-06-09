import React, { Component } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import AnimatedNavbar from './AnimatedNavbar'

class Footer extends Component {
  render () {
    return (
      <footer>
        <AnimatedNavbar fixedBottom id='footer'>
          <Navbar.Header>
            <Navbar.Brand>
              <p id='footer-text'>Copyright &copy; 2017. All Rights Reserved.</p>
            </Navbar.Brand>
          </Navbar.Header>
        </AnimatedNavbar>
      </footer>
    )
  }
}

export default Footer
