import {
    Button,
    Card,     
    Container,
    Row,
    Col
} from 'reactstrap';
import { motion } from 'framer-motion';
import tawnyHeroImg from '../img/tawny_portfolio.jpg'
import homePageBg from '../img/home_page_v2.svg'; 
import ProjectsGrid from '../components/ProjectGrid';

const introStyle = {
    marginTop: '50px',
    padding: '30px',
    backgroundImage: 'linear-gradient(to right, #D3D3D3 65%, #5E9FEE)',
    backgroundPosition: 'top right',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#B37D4F',
    height: '625px',
    borderRadius: '15px',
    border: 0,
    backgroundOrigin: 'padding-box',
  };

const heroStyle = {
    height: '625px', 
    width: '100%', 
    objectFit: 'cover', 
    borderRadius: '15px'
};

const HomePage = () => {
    return (
        <div style={{ backgroundImage: `url(${homePageBg})` }}>          
        <Container>
            <Row className="justify-content-center align-items-center">
                <Col xs={12} md={7} className='order-2 order-md-2'>
                    <Card style={introStyle}>
                        <h2 className="home-intro">Hi, I'm Tawny. </h2><br/>
                        <div className="home-para">
                            <p>I'm a seasoned Partner Integration Engineer with over a decade of experience in SaaS implementations across EdTech, Retail, and Web3 sectors. At Unstoppable Domains, I led API integrations, ensuring seamless onboarding for enterprise clients. My tenure at Salsify and Instructure further honed my skills in solution architecture and client success.​</p>
                                <p>After a rewarding venture into Amazon fulfillment, I'm eager to return to my core passion: collaborating with clients to drive impactful technological solutions.</p>
                        </div>
                        <Row className="justify-content-center align-items-center" style={{marginTop: '25px'}}>
                            <Col xs="auto" className="mb-2">
                                <Button className='btn-contact-me'   onClick={() => {
                                        window.location.href = 'mailto:tawnymslc@gmail.com';
                                    }}>
                                    Contact Me
                                </Button>
                            </Col>
                            <Col xs="auto" className="icon-col">
                                <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/tawny-mathi-9081356a/">
                                    <i className="fa fa-brands fa-linkedin fa-2x"></i>
                                </a>
                            </Col>
                            <Col xs="auto" className="icon-col"> 
                                <a className="btn btn-social-icon btn-github" href="http://www.github.com/tawnymslc">
                                    <i className="fa fa-brands fa-github fa-2x"></i>
                                </a>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xs={12} md={4} style={{marginTop: '50px'}} className='order-1 order-md-1'>
                    <motion.img
                        src={tawnyHeroImg}
                        alt=""
                        style={heroStyle}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </Col>
            </Row>
                <section>
                    <h3 className="project-heading text-center"
                    > 
                        <i className="fa-sharp fa-solid fa-rocket"></i> Featured Projects
                    </h3>
                    <ProjectsGrid />
                </section>  
        </Container>
        </div>
    );
}

export default HomePage;