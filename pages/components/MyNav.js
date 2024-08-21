import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

function Example(props) {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <div>
      <Navbar color='faded' light>
        <NavbarBrand href='/' className='me-auto'>
          AJO TEST APP
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='me-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/Shop/'>Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='about'>About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Example
