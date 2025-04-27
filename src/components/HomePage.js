import {
    Button,
    Card,     
    Container,
    Row,
    Col
} from 'reactstrap';
import tawnyHeroImg from '../img/tawny_portfolio.jpg'

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
        <Container>
            <Row className="justify-content-center align-items-center">
                <Col md={7} className='order-md-first order-sm-last order-sm-last'>
                    <Card style={introStyle}>
                        <h1 className="header-intro">Hi, I'm Tawny. </h1><br/>
                        <div className="header-para">
                            <p>I have 10+ years of experience in implementation and onboarding, working with thousands of accounts in SaaS, across industries like EdTech, Retail, and Web3.</p>
                            <p>I thrive in customer-facing roles, helping clients integrate and maximize technology to achieve their goals. My expertise includes API integrations, troubleshooting, and solution architecture, with hands-on experience at Salsify and Instructure supporting enterprise accounts.</p>
                            <p>Most recently, I scratched an itch to run my own Amazon fulfillment business. Now, I’m eager to return to my passion, working with customers, driving successful implementations, and continuing to grow as a leader and dev in this space.</p>
                        </div>
                        <Row className="justify-content-center" style={{marginTop: '25px'}}>
                            <Col xs="auto" className="mb-2">
                                <Button className='btn-contact-me'   onClick={() => {
                                        window.location.href = 'mailto:tawnymslc@gmail.com';
                                    }}>
                                    Contact Me
                                </Button>
                            </Col>
                            <Col xs="auto" className="icon-col">
                                <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/tawny-mathi-9081356a/"><i className="fa fa-brands fa-linkedin fa-xs"></i></a>
                            </Col>
                            <Col xs="auto" className="icon-col"> 
                                <a className="btn btn-social-icon btn-github" href="http://www.github.com/tawnymslc"><i className="fa fa-brands fa-github fa-xs"></i></a>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col md={4} style={{marginTop: '50px'}} className='order-sm-first'>
                    <img src={tawnyHeroImg} style={heroStyle}/>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;