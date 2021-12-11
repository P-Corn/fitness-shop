import { Container, Image, Col, Row, Button } from 'react-bootstrap';
import HeaderImage from '../assets/background.png';
import useViewport from '../hooks/useViewport';
import ProductCard from '../components/ProductCard';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const products = [
  { id: 0, title: 'Kettlebell', price: 15},
  { id: 1, title: 'Peddlebell', price: 20},
  { id: 2, title: 'Metalbell', price: 25},
  { id: 3, title: 'Kell', price: 30},
]

const testimonials = [
  { name: 'Bob', comment: 'I really like putting the jump rope handles up my butt!' },
  { name: 'Bob', comment: 'I really like putting the jump rope handles up my butt!' },
  { name: 'Bob', comment: 'I really like putting the jump rope handles up my butt!' },
  { name: 'Bob', comment: 'I really like putting the jump rope handles up my butt!' },
]

const Header = ({ width }) => (
  <Row className='flex-lg-row-reverse align-items-center'>
    <Col className='mb-3' xs={12} lg={6}>
      <Image fluid src={HeaderImage} />
    </Col>
    <Col className='mt-3' xs={12} lg={6}>
      <h1>Home Fitness Gear</h1>
      <h2 className='body-text'>We provide you with the highest quality home workout equipment for your home gym.</h2>
      <Button className='mt-3 btn-secondary'>Shop Products</Button>
    </Col>
  </Row>
)

const Products = () => (
  <div className="products">
    <h2 className="text-center mb-5">Products</h2>
    <Row className='flex-center mb-5'>
      {products.map(product => (
        <Col key={product.id} xs={12} className="product-col">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
    <div className="d-flex justify-content-center">
      <Button className="bg-white text-dark">View All Products</Button>
    </div>
  </div>
)

const Testimonials = () => (
  <div className="testimonials">
    <h2 className="text-center mb-5">Testimonials</h2>
    <Row className='flex-center'>
      <TestimonialsCarousel data={ testimonials } />
      <h3>We love our customers</h3>
      <h4 className="body-text">Fitness shop has one goal in mind: Provide you with the highest quality workout gear to help you reach your fitness goals. Our products include everything you need for your home gym.</h4>
    </Row>
  </div>
)

function Home() {
  const { width } = useViewport();

  return (
    <div className="bg-light">
      <Container className="section">
        <Header width={width} />
      </Container>
      <Container className="section bg-primary">
        <Products />
      </Container>
      <Container className="section">
        <Testimonials />
      </Container>
    </div>
  );
}

export default Home;