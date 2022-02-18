import React, { Component } from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

class NavBar extends Component {

    render () {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Mon commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/products/pants">Pantalons</Nav.Link>
                            <Nav.Link as={Link} to="/products/shirts">Chemises</Nav.Link>
                            <NavDropdown title="Sport" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/products/sport/t-shirts">T-shirts</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products/sport/shorts">Shorts</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products/sport/shoes">Chaussures</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/connexion">Connexion</Nav.Link>
                            <Nav.Link as={Link} to="/panier">Panier</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

}

export default NavBar;