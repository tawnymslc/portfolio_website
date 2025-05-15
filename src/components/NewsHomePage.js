import {
    Button,     
    Container,
    Col,
    Collapse,
    Nav,
    NavbarToggler,
    Navbar,
    NavItem,
    NavLink,
    Row,
    NavbarBrand
} from 'reactstrap';
import { useState } from 'react';
import logo from '../img/logo.svg'
import newsMain from '../img/image-web-3-desktop.jpg'
import oneImgFooter from '../img/image-retro-pcs.jpg'
import twoImgFooter from '../img/image-top-laptops.jpg'
import threeImgFooter from '../img/image-gaming-growth.jpg'
import MobileMenu from './MobileMenu';
import { useMediaQuery } from 'react-responsive'; 

const NewsHomePage = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
      };

    return (
        <>
        <Container className='container-fluid news-container' style={{paddingRight: '-25px', marginBottom: "50px"}}>     
            <Row> 
                <Col>
                    <h5>📰 News Front-End Homepage</h5>
                        <p>This project showcases my front-end development skills by recreating a modern, editorial-style homepage layout using React and Reactstrap (Bootstrap for React). 
                        It focuses on structure, visual alignment, and responsiveness. The content is laid out clearly across devices using grid-based design.</p>
                        <p>
                            <li className="project-bullets"><b>Responsive Layout:</b> Built with Bootstrap’s row/column system to ensure each section adapts to screen size properly.</li>
                            <li className="project-bullets"><b>Header Navigation:</b> Includes both a desktop navbar and a custom mobile menu toggle using media queries.</li>
                            <li className="project-bullets"><b>Featured Content:</b> Split-section design that showcases a lead story with a headline, description, and call-to-action.</li>
                            <li className="project-bullets"><b>Sidebar & Footer Stories:</b> Highlights smaller stories in styled containers, using consistent column spacing and visual hierarchy.</li>
                        </p>
                    <h5>🧩 Real-World Application</h5>
                        <p>This project models the type of layout work commonly found in digital media or content-heavy web apps. It demonstrates:</p>
                        <p>
                            <li className="project-bullets"><b>UI Composition:</b> Leveraging grid systems and component-based architecture to create reusable and scalable layouts.</li>
                            <li className="project-bullets"><b>Media Query Logic:</b> Using JavaScript-based responsiveness to render custom components based on screen size.</li>
                            <li className="project-bullets"><b>Component Styling:</b> Integration of images, text, and buttons in visually balanced ways using Reactstrap and custom CSS.</li>
                        </p>
                        <p>Technologies Used:
                            <li className="project-bullets">React, Reactstrap (Bootstrap), JSX, CSS, JavaScript, react-responsive</li>
                        </p>
                    <h5>🚧 Coming Soon</h5>
                        <p>Future enhancements for this front-end project will include:</p>
                        <p>
                            <li className="project-bullets"><b>Theme Toggle:</b> Letting users switch between light and dark mode to improve accessibility and personalization.</li>
                            <li className="project-bullets"><b>Expandable Article Views:</b> Clicking summaries to reveal full content, simulating blog/article functionality.</li>
                            <li className="project-bullets"><b>Category Filter:</b> Enabling dynamic filtering of articles by tags like "Tech," "Finance," or "Gaming."</li>
                        </p>
                </Col>
            </Row>
            <Row>
            <Col sm={11}>
            <Navbar expand='md'>
                <NavbarBrand  href='/'>
                    <img src={logo} alt='nucamp logo' className='float-start'/>
                </NavbarBrand>
                
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
                    {isMobile &&  <MobileMenu />}      
            </Navbar>  
            
            </Col> 
            </Row>   
            <Row style={{marginBottom:'20px'}}>
                <Col sm={8} style={{marginRight: '12px'}}>
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
                    <h3 className="right-headline">New</h3>
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
                <Col sm={4} className='footer-col'>
                    <Row>
                        <Col xs={4}><img className="img-thumbnail d-flex" src={oneImgFooter}/></Col>
                        <Col xs={7}>
                            <h5 className="footer-num">01</h5>
                            <p className="footer-head">Reviving Retro PCs</p>
                            <p className="footer-para">What happens when old PCs are given modern upgrades?</p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={4} className='footer-col'>
                    <Row>
                        <Col xs={4}><img className="img-thumbnail" src={twoImgFooter}/></Col>
                        <Col xs={7}>
                            <h5 className="footer-num">02</h5>
                            <p className="footer-head">Top 10 Laptops of 2022</p>
                            <p className="footer-para">Our best picks for various needs and budgets.</p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={4} className='footer-col'>
                    <Row>
                        <Col xs={4}><img className="img-thumbnail" src={threeImgFooter}/></Col>
                        <Col xs={7}>
                            <h5 className="footer-num">03</h5>
                            <p className="footer-head">The Growth of Gaming</p>
                            <p className="footer-para">How the pandemic has sparked fresh opportunities.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default NewsHomePage;