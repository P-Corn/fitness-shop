import { Card, Button } from "react-bootstrap";
import { useDataUpdate } from '../hooks/DataContext';

export default function ProductCard({ product }) {
  const updateData = useDataUpdate();

  return (
    <Card>
      <Card.Img className="card-image" variant="top" src="https://media.istockphoto.com/photos/kettlebell-3d-rendering-picture-id1206803373?k=20&m=1206803373&s=612x612&w=0&h=6Q9OiemuLaipkkvSxVRlKlUJMtWUl7ZW5YLzfd2YmQg=" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          { `$${product.price}` }
        </Card.Text>
        <Button onClick={() => updateData(product, 'add')} variant="secondary">Add to cart</Button>
      </Card.Body>
    </Card>
  )
}