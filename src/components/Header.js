import { useState} from 'react';
import {Col, Container, Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Row} from 'reactstrap'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
        <Navbar expand='md'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink className='nav-link' to="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/directory'>
                                Projects
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
        </>
    );
};

export default Header;