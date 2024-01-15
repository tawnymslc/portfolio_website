import {
    Button,
    Card,     
    Container,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    Row,
    Col
} from 'reactstrap';
import { useState } from 'react';
import newsMain from '../img/image-web-3-desktop.jpg'

const NewHomePage = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Navbar expand='md'>
                        <Collapse isOpen={menuOpen} navbar>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <NavLink className='nav-link news-link' style={{color: 'red'}} to="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link news-link' to='/directory'>
                                        Projects
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link news-link' to='/directory'>
                                        Projects
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link news-link' to='/directory'>
                                        Projects
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link news-link' to='/directory'>
                                        Projects
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col sm={9}>
                    <Row>
                        <Col sm={12}>
                            <img src={newsMain} className='img-fluid' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p class="main-head">The Bright Future of Web 3.0?</p>
                        </Col>
                        <Col>
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
              But is it really fulfilling its promise?</p> 
                        </Col>
                    </Row>
                </Col>
                <Col sm={3}>
                <h3 class="right-headline">New</h3>
                    <h6 class="right-heading">Hydrogen VS Electric Cars</h6>
                    <p class="right-para">Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <p class="line"></p>

                    <h6 class="right-heading">The Downsides of AI Artistry</h6>
                    <p class="right-para">What are the possible adverse effects of on-demand AI image generation?</p>
                    <p class="line"></p>

                    <h6 class="right-heading">Is VC Funding Drying Up?</h6>
                    <p class="right-para">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5 class="footer-num">01</h5>
                    <p class="footer-head">Reviving Retro PCs</p>
                    <p class="footer-para">What happens when old PCs are given modern upgrades?</p>
                </Col>
                <Col>
                    <h5 class="footer-num">02</h5>
                    <p class="footer-head">Top 10 Laptops of 2022</p>
                    <p class="footer-para">Our best picks for various needs and budgets.</p>
                </Col>
                <Col>
                    <h5 class="footer-num">03</h5>
                    <p class="footer-head">The Growth of Gaming</p>
                    <p class="footer-para">How the pandemic has sparked fresh opportunities.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default NewHomePage;