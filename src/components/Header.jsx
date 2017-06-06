import React, { Component } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

import img from '../assets/images/favicon.png'

class Header extends Component {
  render () {
    return (
      <header>
        <Navbar collapseOnSelect fixedTop id='header'>
          <Navbar.Header>
            <Navbar.Brand>
              <p id='header-text'><img id='logo-icon' src={img} />CogniCreative</p>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href='#'>Item 1</NavItem>
              <NavItem eventKey={2} href='#'>Item 2</NavItem>
              <NavItem eventKey={3} href='#'>Item 3</NavItem>
              <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown-1'>
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey={3} title='Dropdown 2' id='basic-nav-dropdown-2'>
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Header
