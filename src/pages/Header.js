import { useState} from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);


    return(
        <>
        <Navbar expand='md'>
            <NavbarToggler 
                onClick={() => setMenuOpen(!menuOpen)} 
                style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                className="custom-toggler"
            >
                <i className="fa fa-solid fa-bars" style={{ color: '#000', fontSize: '24px', padding: '5px', border: "2px solid black"}}></i>
            </NavbarToggler>
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink className='nav-link' to="/" style={{paddingLeft: '10px'}}>
                                HOME
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to="/" style={{paddingLeft: '10px'}}> 
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