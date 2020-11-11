
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';

const NavBarWithoutAuthBase = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="primary" dark expand="md">
            <NavLink className='navbar-brand' to="/">Home</NavLink>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar />
                <Nav className="mr-right" navbar>
                    <NavItem>
                        <NavLink className='nav-link' to="/sign-up">Sign Up</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to="/sign-in">Sign In</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
};

const NavBarWithoutAuth = NavBarWithoutAuthBase;

export default NavBarWithoutAuth;
