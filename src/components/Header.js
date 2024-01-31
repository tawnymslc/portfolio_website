import { useState} from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap'


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
                                HOME
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/directory'>
                                PROJECTS
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
        </>
    );
};

export default Header;