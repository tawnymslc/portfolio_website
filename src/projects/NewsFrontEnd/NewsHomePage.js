import {
    Button,
    Container,
    Col,
    Collapse,
    Nav,
    Navbar,
    NavItem,
    Row,
    NavbarBrand
} from 'reactstrap';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../../img/logo.svg'
import newsMain from '../../img/image-web-3-desktop.jpg'
import oneImgFooter from '../../img/image-retro-pcs.jpg'
import twoImgFooter from '../../img/image-top-laptops.jpg'
import threeImgFooter from '../../img/image-gaming-growth.jpg'
import web3img1 from '../../img/journimg.jpg'
import web3img2 from '../../img/web3img.jpg'
import web3img3 from '../../img/subwebimg.jpg'
import MobileMenu from '../NewsFrontEnd/MobileMenu';
import SubHeader from '../../components/SubHeader'
import { useMediaQuery } from 'react-responsive'; 
import styles from './News.module.css'

const NewsHomePage = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
    setDarkMode(!darkMode);
    };

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
    <div className={`project-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <SubHeader current='News Home' />
      <Container className='container-fluid'>
        <Row>
          <Col className={styles.noPadding}>
            <h5>📰 News Front-End Homepage</h5>
            <p>This project showcases my front-end development skills...</p>
            <ul className={styles.bulletList}>
              <li><b>Responsive Layout:</b> Built with Bootstrap’s row/column system.</li>
              <li><b>Header Navigation:</b> Desktop navbar + custom mobile menu.</li>
              <li><b>Featured Content:</b> Split-section design with CTA.</li>
              <li><b>Sidebar & Footer Stories:</b> Structured containers for smaller stories.</li>
            </ul>

            <h5>🧩 Real-World Application</h5>
            <p>This project models layout work for content-heavy apps:</p>
            <ul className='project-bullets'>
              <li><b>UI Composition:</b> Grid systems & reusable components.</li>
              <li><b>Media Query Logic:</b> JS-based responsive rendering.</li>
              <li><b>Component Styling:</b> Balanced image/text/button layout.</li>
            </ul>

            <p>Technologies Used:</p>
            <ul className='project-bullets'>
              <li>React, Reactstrap (Bootstrap), JSX, CSS, JavaScript, react-responsive</li>
            </ul>

            <h5>🚧 Coming Soon</h5>
            <p>Future enhancements:</p>
            <ul className='project-bullets'>
              <li><b>Theme Toggle:</b> Light/Dark mode toggle support.</li>
              <li><b>Expandable Article Views:</b> Click summary to expand.</li>
              <li><b>Category Filter:</b> Filter by tags like "Tech" or "Finance".</li>
            </ul>
          </Col>
        </Row>
        <Row className={styles.themeToggleRow}>
          <Col sm={12} className={styles.textEnd}>
            <div className={styles.toggleWrapper}>
              <Button color={darkMode ? 'light' : 'dark'} onClick={toggleTheme}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Navbar expand="md" className="navbar">
              <NavbarBrand href="/">
                <div className={styles.logoWrapper}>
                  <img src={logo} alt="logo" className={styles.logoImg} />
                </div>
              </NavbarBrand>
              <Collapse navbar>
                <Nav className="ms-auto" navbar>
                  {['Home', 'New', 'Popular', 'Trending', 'Categories'].map((text, idx) => (
                    <NavItem key={idx}>
                      <NavLink to="/directory" className='news-link'>{text}</NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </Collapse>
              {isMobile && <MobileMenu />}
            </Navbar>
          </Col>
        </Row>

        <Row className={styles.mainSection}>
          <Col sm={8} className={styles.mainContent}>
            <Row className={styles.mainImgRow}>
              <Col sm={12}>
                <img src={newsMain} className="img-fluid" alt="" />
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <p className={styles.newsMainHead}>The Bright Future of Web 3.0?</p>
              </Col>
              <Col sm={6} className={styles.newsMainText}>
                <p>We dive into the next evolution of the web...</p>
                <Button className={styles.newsMainBtn}>READ MORE</Button>
              </Col>
            </Row>
          </Col>
          <Col sm={3} className={styles.rightBox}>
            <h3 className={styles.rightHeadline}>New</h3>
            <div>
              <h6 className={styles.rightHeading}>Hydrogen VS Electric Cars</h6>
              <p className={styles.rightPara}>Will hydrogen-fueled cars catch up to EVs?</p>
            </div>
            <div>
              <h6 className={styles.rightHeading}>The Downsides of AI Artistry</h6>
              <p className={styles.rightPara}>What are the adverse effects of AI images?</p>
            </div>
            <div>
              <h6 className={styles.rightHeading}>Is VC Funding Drying Up?</h6>
              <p className={styles.rightPara}>Private funding is down 50% YOY. Why?</p>
            </div>
          </Col>
        </Row>

        <Row>
          {[oneImgFooter, twoImgFooter, threeImgFooter].map((img, idx) => (
            <Col sm={4} key={idx}>
              <div className={styles.numCards}>
                <img src={img} alt="preview" className={styles.imgThumbnail} />
                <div>
                  <h5 className={styles.numNews}>{`0${idx + 1}`}</h5>
                  <p className={styles.numHead}>
                    {['Reviving Retro PCs', 'Top 10 Laptops of 2022', 'The Growth of Gaming'][idx]}
                  </p>
                  <p className={styles.numPara}>
                    {['What happens when old PCs...', 'Our best picks for budgets...', 'Pandemic growth in gaming'][idx]}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col sm={12} className="text-center mb-3">
            <h4>📰 More News Coming Soon</h4>
            <p>Here’s a sneak peek:</p>
          </Col>
          {[web3img1, web3img2, web3img3].map((img, idx) => (
            <Col sm={4} key={idx}>
              <div className={styles.previewCard}>
                <img src={img} alt={`preview ${idx + 1}`} className="img-fluid rounded" />
                <div className={styles.comingSoonBanner}>Coming Soon</div>
                <h6 className="mt-2">
                  {['The Rise of Independent Journalists', 'Web3 and News Credibility', 'The Future of Digital Subscriptions'][idx]}
                </h6>
                <p className="text-muted">
                  {['Platforms giving individuals reach.', 'Decentralized news and misinformation.', 'Why readers are paying again.'][idx]}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default NewsHomePage;