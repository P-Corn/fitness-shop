import { Container, Col, Row, Form, Button, ListGroup} from 'react-bootstrap';
import { useCartUpdate, useCart, useData, useDataUpdate } from '../hooks/DataContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
const myStorage = window.localStorage;

function Checkout() {
  const navigate = useNavigate();
  const cart = useCart();
  const updateCart = useCartUpdate();
  const data = useData();
  const updateData = useDataUpdate();

  const handleSubmit = (e) => {
    myStorage.clear();
    navigate('/');
    updateData([], 'clear');
  }

  useEffect(() => {
    updateCart();
  }, [data])

  const BillingForm = () => (
    <Row className="g-3">
      <Col sm={6}>
        <Form.Group>
          <Form.Label>
            First name
          </Form.Label>
          <Form.Control required type="name" />
        </Form.Group>
      </Col>
      <Col sm={6}>
        <Form.Group>
          <Form.Label>
            Last name
          </Form.Label>
          <Form.Control required type="name" />
        </Form.Group>
      </Col>
      <Col xs={12}>
        <Form.Group>
          <Form.Label>
            Email
          </Form.Label>
          <Form.Control required type="email" />
        </Form.Group>
      </Col>
      <Col xs={12}>
        <Form.Group>
          <Form.Label>
            Address
          </Form.Label>
          <Form.Control required type="address" />
        </Form.Group>
      </Col>
      <Col xs={12}>
        <Form.Group>
          <Form.Label>
            Address 2 <span className="text-muted">(Optional)</span>
          </Form.Label>
          <Form.Control type="email" />
        </Form.Group>
      </Col>
      <Col md={5}>
        <Form.Group>
          <Form.Label>
            Country
          </Form.Label>
          <Form.Select required type="email">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={5}>
        <Form.Group>
          <Form.Label>
            State
          </Form.Label>
          <Form.Select type="email">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={5}>
        <Form.Group>
          <Form.Label>
            Zip
          </Form.Label>
          <Form.Control type="number"/>
        </Form.Group>
      </Col>
    </Row>
  )

  const PaymentRadio = () => (
    <Form.Group as={Row} className="my-3">
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Credit card"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Debit card"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="PayPal"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  )

  const PaymentInputs = () => (
    <Row as={Row} className="gy-3">
      <Form.Group as={Col} md={6}>
        <Form.Label>Name on card</Form.Label>
        <Form.Control type="text" required/>
        <Form.Text>Full name as displayed on card</Form.Text>
      </Form.Group>
      <Form.Group as={Col} md={6}>
        <Form.Label>Credit card number</Form.Label>
        <Form.Control type="number" required/>
      </Form.Group>
      <Form.Group as={Col} md={3}>
        <Form.Label>Expiration</Form.Label>
        <Form.Control type="date" required/>
      </Form.Group>
      <Form.Group as={Col} md={3}>
        <Form.Label>CVV</Form.Label>
        <Form.Control type="number" required/>
      </Form.Group>
    </Row>
  )

  return (
    <div className="bg-light h-100">
      <Container className="section overflow-hidden">
        <Row className="g-5">
          <Col className="order-md-last" md={5}>
            <h4>Your cart</h4>
            <ListGroup className="w-100">
              {cart
              .sort((a,b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }))
              .map(item => (
                <ListGroup.Item className="d-flex justify-content-between align-items-center" key={item.id}>
                  <div>
                    <span className="me-3">{`$${item.total}`}</span>
                    <h6 className="d-inline">{item.title}</h6>
                  </div>
                  <div>
                    <Button onClick={() => updateData(item.id, 'remove')} className="btn-sm" variant="light">-</Button>
                    <span className="px-2">{item.quantity}</span>
                    <Button onClick={() => updateData(item.id, 'update')} className="btn-sm" variant="light">+</Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={7}>
            <h4 className="mb-4">Billing Address</h4>
            <Form className="needs-validation">
              <BillingForm />
              <hr className="my-4"></hr>
              <h4>Payment</h4>
              <PaymentRadio />
              <PaymentInputs />
              <hr className="my-4"></hr>
              <Button onClick={(e) => handleSubmit(e)} className="w-100 btn-primary btn-lg" type="submit">Submit Payment</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Checkout;