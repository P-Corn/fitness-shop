import { Container, Image, Col, Row, Button } from 'react-bootstrap';
import HeaderImage from '../assets/background.png';
import useViewport from '../hooks/useViewport';
import ProductCard from '../components/ProductCard';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import { products, testimonials } from '../data';
import { useNavigate } from 'react-router';

const Header = ({ navigate }) => (
  <Row className='flex-lg-row-reverse align-items-center'>
    <Col className='header-image' xs={12} lg={7}>
      <Image fluid src={HeaderImage} />
    </Col>
    <Col className='mt-3' xs={12} lg={5}>
      <h1>Home Fitness Gear</h1>
      <h2 className='body-text'>We provide you with the highest quality home workout equipment for your home gym.</h2>
      <Button onClick={() => navigate('/products')} className='mt-3 btn-secondary text-light'>Shop Products</Button>
    </Col>
  </Row>
)

const Products = ({ navigate}) => (
  <div className="products">
    <h2 className="text-center mb-5">Products</h2>
    <Row className='flex-center mb-1 justify-content-center'>
      {products.map(product => (
        <Col key={product.id} xs={12} sm={6} md={4} className="product-col">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
    <div className="d-flex justify-content-center">
      <Button onClick={() => navigate('/products')} className="bg-white text-dark">View All Products</Button>
    </div>
  </div>
)

const Testimonials = () => (
  <div className="testimonials">
    <h2 className="text-center mb-5">Testimonials</h2>
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

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-light">
      <Container className="section header">
        <Header navigate={navigate} />
      </Container>
      <div className="bg-primary">
        <Container className="section">
          <Products navigate={navigate} />
        </Container>
      </div>
      <Container className="section">
        <Testimonials />
      </Container>
    </div>
  );
}

export default Home;