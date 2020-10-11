import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-scroll'
import './nav.css'

export const NavMenu = () => {
    return (
        <Navbar bg="dark" variant='dark' fixed='top' expand="lg">
            <Navbar.Brand>Ronald's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <span className='w-100'></span>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav CollapseOnSelect className="mr-auto">
                    <li className='nav-item'>
                        <Link
                        to='home'
                        activeClass='active'
                        className='nav-link'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                            Home
                        </Link>
                        </li>
                        <li>
                        <Link
                        to='projects'
                        activeClass='active'
                        className='nav-link'
                        spy={true}
                        smooth={true}
                        offset={-55}
                        duration={500}
                        >
                            Projects
                        </Link>
                        </li>
                        <li>
                        <Link
                        to='about'
                        activeClass='active'
                        className='nav-link'
                        spy={true}
                        smooth={true}
                        offset={-55}
                        duration={500}
                        >
                            About
                        </Link>
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }