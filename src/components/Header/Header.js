import React from 'react';
import {Navbar,Container,Nav, Placeholder} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        
            <Navbar  bg="secondary" expand="lg">
                <Container className="d-flex justify-space-between nn">
                    <div>
                    <Navbar.Brand href="#home">
                        <img src="./images/martial.png" width="100" alt="" />
                        <span className="text-danger fw-bold fs-1 ">Martial X-Factor</span></Navbar.Brand>
                        <Placeholder  animation="glow">
                            <Placeholder xs={12} className="text-light "/>
                        </Placeholder>
                    </div>
                
                    <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home"className="mx-5 fs-4 fw-semi-bold text-secondery text-decoration-none">Home</NavLink>
                        <NavLink to="/about"className="mx-5 fs-4 fw-semi-bold text-secondery text-decoration-none">About</NavLink>
                        <NavLink to="/classes"className="mx-5 fs-4 fw-semi-bold text-secondery text-decoration-none">Classes</NavLink>
                        <NavLink to="/gallery"className="mx-5 fs-4 fw-semi-bold text-secondery text-decoration-none">Gallery</NavLink>
                        <NavLink to="/blogs"className="mx-5 fs-4 fw-semi-bold text-secondery text-decoration-none">Blogs</NavLink>
                        
                    </Nav>
                    </Navbar.Collapse>
                    </div>
                    
                </Container>
                    
                </Navbar>
                
    );
};

export default Header;