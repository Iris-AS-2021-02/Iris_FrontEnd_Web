import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logoIris from './logoiris.png';
import { useNavigate } from 'react-router-dom';

function Header({isLoggedIn, setIsLoggedIn}) {
  const navigate = useNavigate();

  const logOut = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <Navbar className="Header" bg="light" expand="lg">
      <Container>
        <Navbar.Brand  href="/"><img src={logoIris} className="logo" alt="Iris"></img></Navbar.Brand>
        { !isLoggedIn && <Link to="/login" style={{textDecoration: 'none'}}><Navbar.Brand>Entra</Navbar.Brand></Link> }
        { !isLoggedIn && <Link to="/signup" style={{textDecoration: 'none'}}><Navbar.Brand>Regístrate</Navbar.Brand></Link> }
        <Navbar.Text className="Bienvenida">Bienvenid@ </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        </Navbar.Collapse>
      </Container>
      { isLoggedIn && <Button variant="primary" onClick={ logOut }>Cerrar Sesión</Button>  }
    </Navbar> 
  )
}

export default Header;