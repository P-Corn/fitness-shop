import { Container, Col, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

const ProductsSection = () => (
  <div className="products">
    <h2 className="text-center mb-5 text-dark">Products</h2>
    <Row className='flex-center mb-5'>
      {products.map(product => (
        <Col key={product.id} xs={12} md={4} className="product-col">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  </div>
)

function Products() {

  return (
    <div className="bg-light">
      <Container className="section">
        <ProductsSection />
      </Container>
    </div>
  );
}

export default Products;