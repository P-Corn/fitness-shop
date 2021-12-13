import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useData } from '../hooks/DataContext';

export default function MainNavbar() {
  const navigate = useNavigate();

  const data = useData();

  return (
    <Navbar variant="dark" fixed='top' expand="md" bg="primary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Fitness Shop</Navbar.Brand>
        <div onClick={() => navigate('/checkout')} className="text-light d-flex">
          <i style={{ fontSize: 25, cursor: 'pointer' }} class="bi bi-cart-fill"></i>
          <span className="text-light">{data.length}</span>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/products')}>Products</Nav.Link>
            <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}