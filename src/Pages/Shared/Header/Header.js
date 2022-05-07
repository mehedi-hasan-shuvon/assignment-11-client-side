import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../Images/logo.png'
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';

import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

// import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);

    const handelSignOut = () => {
        signOut(auth)
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" className='navbar-background' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} height='39px' alt="" />
                        <span className='company-name'> Eco-electronics</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/Blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="addproduct">Add</Nav.Link>
                                    <Nav.Link as={Link} to="manageinventory">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="myitems">My Items</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button onClick={handelSignOut} className='btn btn-link text-white text-decoration-none'>Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                        <p className='mt-3 text-white'>{user?.displayName}</p>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;