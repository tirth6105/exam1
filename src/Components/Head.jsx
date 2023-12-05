import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/nav.css'

const Head = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className='text-white px-4' to="/"  >Home</NavLink>
            <Link className='text-white pe-4' to="/Extra" >Product</Link>
            <Link className='text-white pe-4' to="/Signup" >Signup</Link>
            <Link className='text-white' to="/Login" >Login</Link>
          </Nav>
        </Container>
      </Navbar>

        {/* <NavLink to="/">Home</NavLink>
        <Link to="/Boy">Boy</Link>
        <Link to="/Logsig">login</Link> */}
    </div>
  )
}

export default Head