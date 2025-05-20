import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SubHeader = ({ current, dark = false }) => {
  return (
    <Row className="mt-4 mb-3">
      <Col>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{current}</BreadcrumbItem>
        </Breadcrumb>
        <h2 className={`page-title ${dark ? 'page-title-dark' : ''}`}>{current}</h2>
        <hr />
      </Col>
    </Row>
  );
};

export default SubHeader;
