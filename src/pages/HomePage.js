import {
    Button, 
    Card, 
    CardBody, 
    CardImg, 
    CardText, 
    CardTitle, 
    CardFooter,
    Container,
    Row,
    Col
} from 'reactstrap';
import heroImg from '../img/lisbon_hero.jpeg'
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
                        <p className="header-para"> I care a lot about using design for positive impact, and enjoy creating user-centric, delightful, and human experiences.</p>
                    </Card>
                </Col>
                <Col md={4} style={{marginTop: '50px'}}>
                    <img src={tawnyHeroImg} style={heroStyle}/>
                </Col>
            </Row>
            <Row className="justify-content-center" style={{marginTop: '200px'}}>
                <Col xs='12'>
                <p className='hero-text'>Hello Everyone <br /><br />
                My name is Tawny. Welcome to my travel blog. I'm glad you are here. I created this page as a hobby to detail what matters to me most when I travel. I'm mostly a solo traveler with the goal to still keep up my fitness journey while on the road. I visit local gyms when I'm overseas and hope to provide insight of them to you. <br /><br />
                Another part of my travels is to visit airport lounges. I'll be reviewing my experiences at the different lounges so you know if they are worth the visit.  I've also been blessed to take a couple of business class flights. I'll tell you about the  booking process and also my experience. <br /><br />
                Another topic I would like to cover is a blog of my trips. I'm the type of traveler that mostly stays away from all the "touristy" things in the cities I've visited. My ideal adventure is to find a local neighborhood and get lost.<br /><br />
                Thanks for visiting!<br /><br />
                <b>Tawny</b></p>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;