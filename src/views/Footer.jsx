import { Row, Col, Container } from 'react-bootstrap';

function Footer() {
  return (
    <Container className="bg-primary text-light text-center pt-3">
      <h3 className="">Fitness Shop</h3>
      <hr />
      <Row>
        <Col md={4} className="pb-3">Home</Col>
        <Col md={4} className="pb-3">Products</Col>
        <Col md={4} className="pb-3">About</Col>
      </Row>
    </Container>
  );
}

export default Footer;