import { Col, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="bg-primary">
      <Container className="text-light text-center pt-3">
        <h3 className="">Fitness Shop</h3>
        <hr />
        <Nav as="row">
          <Col md={4} className="pb-3">
            <Nav.Link onClick={() => navigate('/')} className="text-light">Home</Nav.Link>
          </Col>
          <Col md={4} className="pb-3">
            <Nav.Link onClick={() => navigate('/products')} className="text-light">Products</Nav.Link>
          </Col>
          <Col md={4} className="pb-3">
            <Nav.Link onClick={() => navigate('/about')} className="text-light">About</Nav.Link>
          </Col>
        </Nav>
      </Container>
    </div>
  );
}

export default Footer;