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
    height: '450px',
    borderRadius: '15px',
    border: 0,
    backgroundOrigin: 'padding-box',
  };

const heroStyle = {
    height: '450px', 
    width: '100%', 
    objectFit: 'cover', 
    borderRadius: '15px'
};

const HomePage = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={7}>
                    <Card style={introStyle}>
                        <h1 className="header-intro">Hello, I'm Tawny, an Integration Engineer with over 10 years of experience. </h1><br/>
                        <p className="header-para">I started my career as chat rep at eBay. My most recent role was an integration engineer at Unstoppable Domains.</p>
                        <Row style={{marginTop: '75px'}}>
                            <Col>
                                <Button className='btn-contact-me'   onClick={() => {
                                        window.location.href = 'mailto:tawnymslc@gmail.com';
                                    }}>
                                    Contact Me
                                </Button>
                            </Col>
                            <Col>
                                <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-brands fa-instagram fa-xs"></i></a>
                            </Col>
                            <Col>
                                <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook fa-xs"></i></a>
                            </Col>
                            <Col>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-xs"></i></a>
                            </Col> 
                        </Row>
                    </Card>
                </Col>
                <Col md={4} style={{marginTop: '50px'}}>
                    <img src={tawnyHeroImg} style={heroStyle}/>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;