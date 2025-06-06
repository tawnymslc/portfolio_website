import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return(
      <Container fluid className='site-footer'>
        <Row className="justify-content-center">
          <Col sm={6} className='text-center'>
            <h3>Newsletter</h3>
            <form>
                <div className="col-12 newsletter-input">
                    <input type="email" className="form-control form-control-sm" id="emailNews" placeholder="EMAIL" />
                </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
};

export default Footer;