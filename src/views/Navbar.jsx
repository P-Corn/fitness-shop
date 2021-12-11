import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useData } from '../hooks/DataContext';

export default function MainNavbar() {
  const navigate = useNavigate();

  const data = useData();

  return (
    <Navbar variant="dark" expand="md" bg="primary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">Fitness Shop</Navbar.Brand>
        <div onClick={() => navigate('/checkout')} className="text-light">Cart: {data.length}</div>
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