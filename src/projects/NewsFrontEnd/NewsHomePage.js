import {
    Button,
    Container,
    Col,
    Collapse,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Row,
    NavbarBrand
} from 'reactstrap';
import { useState } from 'react';
import logo from '../../img/logo.svg'
import newsMain from '../../img/image-web-3-desktop.jpg'
import oneImgFooter from '../../img/image-retro-pcs.jpg'
import twoImgFooter from '../../img/image-top-laptops.jpg'
import threeImgFooter from '../../img/image-gaming-growth.jpg'
import web3img1 from '../../img/journimg.jpg'
import web3img2 from '../../img/web3img.jpg'
import web3img3 from '../../img/subwebimg.jpg'
import MobileMenu from '../NewsFrontEnd/MobileMenu';
import { useMediaQuery } from 'react-responsive'; 

const NewsHomePage = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
    setDarkMode(!darkMode);
    };

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <div className={`news_container ${darkMode ? 'dark-mode' : 'light-mode'}`} style={{padding: '2rem', borderRadius: '10px', marginBottom: "50px", paddingBottom: '25px', border:  '2px solid black'  }}>
        <Container className='container-fluid'>     
            <Row> 
                <Col className="p-0">
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
                <Row style={{ marginTop: '10px', marginBottom: '20px' }}>
                    <Col sm={12} className="text-end">
                        <div style={{ display: 'inline-block', marginRight: '45px' }}>
                        <Button 
                            color={darkMode ? 'light' : 'dark'} 
                            onClick={toggleTheme}
                        >
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </Button>
                        </div>
                    </Col>
                </Row>
                <Col sm={12}>
                    <Navbar expand='md'>
                        <NavbarBrand  href='/'>
                            <div className='logo-wrapper'>
                                <img src={logo} alt='nucamp logo' className='float-start'/>
                            </div>
                        </NavbarBrand>   
                            <Collapse navbar>
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
                            {isMobile && <MobileMenu />}      
                    </Navbar>  
                </Col> 
            </Row>   
            <Row style={{marginBottom:'20px'}}>
                <Col sm={8} className="mb-4" style={{marginRight: '13px'}}>
                    <Row className='main-img'>
                        <Col sm={12}>
                            <img src={newsMain} className='img-fluid' alt='' style={{borderRadius: "4px"}} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <p className="news-main-head">The Bright Future of Web 3.0?</p>
                        </Col>
                        <Col sm={6} className='news-main-para'>
                            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                                But is it really fulfilling its promise?</p> 
                            <Button className="btn news-main-btn">READ MORE</Button> 
                        </Col>
                    </Row>
                </Col>
                <Col sm={3} className='right-box'>
                    <h3 className="news-right-headline">New</h3>
                    <h6 className="news-right-heading">Hydrogen VS Electric Cars</h6>
                    <p className="news-right-para">Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <p className="line"></p>

                    <h6 className="news-right-heading">The Downsides of AI Artistry</h6>
                    <p className="news-right-para">What are the possible adverse effects of on-demand AI image generation?</p>
                    <p className="line"></p>

                    <h6 className="news-right-heading">Is VC Funding Drying Up?</h6>
                    <p className="news-right-para">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </Col>
            </Row>
            <Row>
                <Col sm={4} className="mb-4">
                    <div className="news-preview-card d-flex">
                        <img src={oneImgFooter} alt="preview" className="img-thumbnail me-3" style={{ width: '100px', height: 'auto' }} />
                        <div>
                            <h5 className="footer-num">01</h5>
                            <p className="footer-head">Reviving Retro PCs</p>
                            <p className="footer-para">What happens when old PCs are given modern upgrades?</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4} className="mb-4">
                    <div className="news-preview-card d-flex">
                        <img src={twoImgFooter} alt="preview" className="img-thumbnail me-3" style={{ width: '100px', height: 'auto' }} />
                        <div>
                            <h5 className="footer-num">02</h5>
                            <p className="footer-head">Top 10 Laptops of 2022</p>
                            <p className="footer-para">Our best picks for various needs and budgets.</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4} className="mb-4">
                <div className="news-preview-card d-flex">
                    <img src={threeImgFooter} alt="preview" className="img-thumbnail me-3" style={{ width: '100px', height: 'auto' }} />
                        <div>
                            <h5 className="footer-num">03</h5>
                            <p className="footer-head">The Growth of Gaming</p>
                            <p className="footer-para">How the pandemic has sparked fresh opportunities.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col sm={12} className="text-center mb-3">
                    <h4>📰 More News Coming Soon</h4>
                    <p>Additional features and stories are in the works. Here's a sneak peek:</p>
                </Col>
                <Col sm={4} className="mb-4">
                    <div className="news-preview-card position-relative">
                    <img src={web3img1} alt="preview 1" className="img-fluid rounded" />
                    <div className="coming-soon-banner">Coming Soon</div>
                    <h6 className="mt-2">The Rise of Independent Journalists</h6>
                    <p className="text-muted">How platforms are giving individuals more reach than ever.</p>
                    </div>
                </Col>
                <Col sm={4} className="mb-4">
                    <div className="news-preview-card position-relative">
                    <img src={web3img2} alt="preview 2" className="img-fluid rounded" />
                    <div className="coming-soon-banner">Coming Soon</div>
                    <h6 className="mt-2">Web3 and News Credibility</h6>
                    <p className="text-muted">Will decentralization reduce fake news, or make it worse?</p>
                    </div>
                </Col>
                <Col sm={4} className="mb-4">
                    <div className="news-preview-card position-relative">
                    <img src={web3img3} alt="preview 3" className="img-fluid rounded" />
                    <div className="coming-soon-banner">Coming Soon</div>
                    <h6 className="mt-2">The Future of Digital Subscriptions</h6>
                    <p className="text-muted">Why more readers are paying for trusted sources.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default NewsHomePage;