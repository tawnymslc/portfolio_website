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
                        <h1 className="header-intro">I'm Tawny. Welcome to my page. </h1><br/>
                        <p className="header-para">
                            <p>Hey there!</p>
                            <p>For the past two years, I’ve been focused on growing my online business, exploring new opportunities, and leveling up my technical skills by completing a full-stack coding bootcamp. It’s been an exciting journey, but now I’m ready to jump back into what I do best—helping customers succeed through seamless implementations and strong technical solutions.</p>
                            <p>With a background in implementation consulting, integrations, and customer success, I thrive at the intersection of technology and customer experience. I’ve worked with enterprise clients, solving complex challenges and ensuring smooth product adoption. Now, I’m excited for the next chapter—bringing my experience, fresh perspective, and renewed energy to a team that values innovation and customer impact.</p>
                            Let’s build something great together!
                        </p>
                        <Row className="justify-content-center" style={{marginTop: '50px'}}>
                            <Col xs="auto" className="mb-2">
                                <Button className='btn-contact-me'   onClick={() => {
                                        window.location.href = 'mailto:tawnymslc@gmail.com';
                                    }}>
                                    Contact Me
                                </Button>
                            </Col>
                            <Col xs="auto" className="icon-col">
                                <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-brands fa-instagram fa-xs"></i></a>
                            </Col>
                            <Col xs="auto" className="icon-col"> 
                                <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook fa-xs"></i></a>
                            </Col>
                            <Col xs="auto" className="icon-col">
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-xs"></i></a>
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