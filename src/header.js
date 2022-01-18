import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'

import { useQuery, useMutation } from '@apollo/client'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import logoIris from './logoiris.png';
function Header() {
    return (
    <Navbar className="Header" bg="light" expand="lg">
    <Container>
        <Navbar.Brand  href="/"><img src={logoIris} className="logo"></img></Navbar.Brand>
        <Navbar.Brand href="/login">Entra</Navbar.Brand>
      <Navbar.Brand href="/signup">Registrate</Navbar.Brand>
      <Navbar.Text className="Bienvenida">Bienvenid@ </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
)
}
export default Header;