import React, { Component } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'

class Footer extends Component {
  render () {
    return (
      <footer>
        <Navbar fixedBottom id='footer'>
          <Navbar.Header>
            <Navbar.Brand>
              <p id='footer-text'>Copyright &copy; 2017. All Rights Reserved.</p>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </footer>
    )
  }
}

export default Footer
