import { Navbar, Nav, Container } from 'react-bootstrap';

import React from 'react'

const Navigation = () => {
  return (
    <>
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/Panda'>Panda</Nav.Link>
                        <Nav.Link href='/Gorilla'>Gorilla</Nav.Link>
                        <Nav.Link href='/Rhino'>Rhino</Nav.Link>
                        <Nav.Link href='/SeaTurtle'>Sea Turtle</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default Navigation