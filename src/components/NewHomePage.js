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
import oneImgFooter from '../img/image-retro-pcs.jpg'
import twoImgFooter from '../img/image-top-laptops.jpg'
import threeImgFooter from '../img/image-gaming-growth.jpg'

const NewHomePage = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
        <Container className='container-fluid news-container'>
            <Row >
                <Col sm={11}>
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
                                        New
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link news-link' to='/directory'>
                                        Popular
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link news-link' to='/directory'>
                                        Trending
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link news-link' to='/directory'>
                                        Categories
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Col>
            </Row>
            <Row style={{marginBottom:'20px'}}>
                <Col sm={8} style={{marginRight: '10px'}}>
                    <Row className='main-img'>
                        <Col sm={12}>
                            <img src={newsMain} className='img-fluid' />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <p className="main-head">The Bright Future of Web 3.0?</p>
                        </Col>
                        <Col sm={6} className='main-para'>
                            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                                But is it really fulfilling its promise?</p> 
                            <Button className="btn main-btn">READ MORE</Button> 
                        </Col>
                    </Row>
                </Col>
                <Col sm={3} className='right-box'>
                    <h3 class="right-headline">New</h3>
                    <h6 className="right-heading">Hydrogen VS Electric Cars</h6>
                    <p className="right-para">Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <p className="line"></p>

                    <h6 className="right-heading">The Downsides of AI Artistry</h6>
                    <p className="right-para">What are the possible adverse effects of on-demand AI image generation?</p>
                    <p className="line"></p>

                    <h6 className="right-heading">Is VC Funding Drying Up?</h6>
                    <p className="right-para">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <Row>
                        <Col sm={4}><img className="img-thumbnail d-flex" src={oneImgFooter}/></Col>
                        <Col sm={7}>
                            <h5 className="footer-num">01</h5>
                            <p className="footer-head">Reviving Retro PCs</p>
                            <p className="footer-para">What happens when old PCs are given modern upgrades?</p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={4}>
                    <Row>
                        <Col sm={4}><img class="img-thumbnail" src={twoImgFooter}/></Col>
                        <Col sm={7}>
                            <h5 className="footer-num">02</h5>
                            <p className="footer-head">Top 10 Laptops of 2022</p>
                            <p className="footer-para">Our best picks for various needs and budgets.</p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={4}>
                <Row>
                        <Col sm={4}><img class="img-thumbnail" src={threeImgFooter}/></Col>
                        <Col sm={7}>
                            <h5 class="footer-num">03</h5>
                            <p class="footer-head">The Growth of Gaming</p>
                            <p class="footer-para">How the pandemic has sparked fresh opportunities.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default NewHomePage;