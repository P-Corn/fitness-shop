import { Card, Button } from "react-bootstrap";
import { useDataUpdate } from '../hooks/DataContext';

export default function ProductCard({ product }) {
  const updateData = useDataUpdate();

  return (
    <Card className="card">
      <Card.Img className="card-image" variant="top" src={product.img} />
      <Card.Body className="bg-light">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          { `$${product.price}` }
        </Card.Text>
        <Button onClick={() => updateData(product, 'add')} variant="secondary text-light">Add to cart</Button>
      </Card.Body>
    </Card>
  )
}