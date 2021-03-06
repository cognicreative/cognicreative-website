import React, { Component } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

import AnimatedNavbar from './AnimatedNavbar'

import logoIconImg from '../assets/images/favicon.png'
import githubIconImg from '../assets/images/GitHub-Mark-64px.png'

class Header extends Component {
  render () {
    return (
      <header>
        <AnimatedNavbar collapseOnSelect fixedTop id='header'>
          <Navbar.Header>
            <Navbar.Brand>
              <p id='header-text'><img id='logo-icon' src={logoIconImg} />CogniCreative</p>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href='#'>Item 1</NavItem>
              <NavItem eventKey={2} href='#'>Item 2</NavItem>
              <NavItem eventKey={3} href='#'>Item 3</NavItem>
              <NavDropdown eventKey={3} title='Dropdown 1' id='basic-nav-dropdown-1'>
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
              <NavDropdown eventKey={4} title='Dropdown 2' id='basic-nav-dropdown-2'>
                <MenuItem eventKey={4.1}>Action</MenuItem>
                <MenuItem eventKey={4.2}>Another action</MenuItem>
                <MenuItem eventKey={4.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.4}>Separated link</MenuItem>
              </NavDropdown>
              <NavItem eventKey={5} href='#' onClick={(e) => {
                window.open('https://github.com/greggpatton/cognicreative-website', '_blank')
              }}><img id='github-logo-icon' src={githubIconImg} /></NavItem>
            </Nav>
          </Navbar.Collapse>
        </AnimatedNavbar>
      </header >
    )
  }
}

export default Header
