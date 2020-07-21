import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
function NavBar(){
    return(
        <Navbar variant="dark" >
            <Navbar.Brand>THE MARS WARRIORS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto'>
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">Challenge</Nav.Link>
                    <Nav.Link href="">Play</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar