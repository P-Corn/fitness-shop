import { Container, Row, Col } from 'react-bootstrap';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import { testimonials } from '../data';

const Testimonials = () => (
  <div className="testimonials">
    <Row className='flex-center align-items-center'>
      <Col md={5} className="order-md-2">
        <TestimonialsCarousel data={ testimonials } />
      </Col>
      <Col className="order-md-1" md={7}>
        <h3>We love our customers</h3>
        <h4 className="body-text">We are well known for our outstanding customer service and high quality products. Here a the reasons our customers continue to come back.</h4>
        <hr className="my-4" />
        <Row>
          <Col xs={12} sm={6} className="d-flex align-items-start">
            <div>
              <i className="bi bi-bag-check text-secondary me-3" style={{ fontSize: 25 }}></i>
            </div>
            <div>
              <h4 className="fw-bold mb-0">Lifetime warranty</h4>
              <p>All of our products have a lifetime warranty.</p>
            </div>
          </Col>
          <Col xs={12} sm={6} className="d-flex align-items-start">
            <div>
              <i className="bi bi-person-check text-secondary me-3" style={{ fontSize: 25 }}></i>
            </div>
            <div>
              <h4 className="fw-bold mb-0">Customer service</h4>
              <p>We aren't robots. You can call us for help!</p>
            </div>
          </Col>
          <Col xs={12} sm={6} className="d-flex align-items-start">
            <div>
              <i className="bi bi-award text-secondary me-3" style={{ fontSize: 25 }}></i>
            </div>
            <div>
              <h4 className="fw-bold mb-0">Quality products</h4>
              <p>We have the best products in the industry.</p>
            </div>
          </Col>
          <Col xs={12} sm={6} className="d-flex align-items-start">
            <div>
              <i className="bi bi-truck text-secondary me-3" style={{ fontSize: 25 }}></i>
            </div>
            <div>
              <h4 className="fw-bold mb-0">Fast shipping</h4>
              <p>You'll have your new gear within 3 days.</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
)

function About() {

  return (
    <div className="bg-light">
      <Container className="section">
        <div className="pb-4">
          <h2 className="text-center mb-5">About us</h2>
          <Testimonials />
        </div>
        <hr className="my-5" />
        <div className="d-flex flex-column align-items-center text-center">
          <h3>Who we are</h3>
          <p>We are a team of people who have a passion for fitness and strive to help others on their journey. We have been providing our customer with the highest quality fitness products for a home gym since 2012.</p>
        </div>
      </Container>
    </div>
  );
}

export default About;