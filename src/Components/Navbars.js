import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {
    Link
  } from "react-router-dom";

function Navbars() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">Learn Recoil</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbars
