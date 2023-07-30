import {
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
        </Container>
    );
}

export default HomePage;