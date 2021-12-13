import { Card, Button, Tooltip, Overlay } from "react-bootstrap";
import { useDataUpdate } from '../hooks/DataContext';
import { useRef, useState } from "react";

export default function ProductCard({ product }) {
  const updateData = useDataUpdate();
  const target = useRef(null);
  const [show, setShow] = useState(false);

  const handleAddToCart = () => {
    updateData(product, 'add');
    setShow(true);
    setTimeout(() => setShow(false), 1200);
  }

  return (
    <Card className="card">
      <Card.Img className="card-image" variant="top" src={product.img} />
      <Card.Body className="bg-light">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          { `$${product.price}` }
        </Card.Text>
        <Button ref={target} onClick={() => handleAddToCart()} variant="secondary text-light">Add to cart</Button>
        <Overlay target={target.current} show={show} placement="bottom">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              <i className="bi bi-check"></i>
              Added to cart!
            </Tooltip>
          )}
        </Overlay>
      </Card.Body>
    </Card>
  )
}