import { Container, Col, Row } from 'react-bootstrap';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const testimonials = [
  { name: 'Bob', comment: 'I really like putting the jump rope handles up my butt!' },
  { name: 'Bob', comment: 'I really like putting the jump rope handles up my butt!' },
  { name: 'Bob', comment: 'I really like putting the jump rope handles up my butt!' },
  { name: 'Bob', comment: 'I really like putting the jump rope handles up my butt!' },
]

const Testimonials = () => (
  <div className="testimonials">
    <Row className='flex-center'>
      <TestimonialsCarousel data={ testimonials } />
      <h3>We love our customers</h3>
      <h4 className="body-text">Fitness shop has one goal in mind: Provide you with the highest quality workout gear to help you reach your fitness goals. Our products include everything you need for your home gym.</h4>
    </Row>
  </div>
)

function About() {

  return (
    <div>
      <Container className="section bg-light">
        <h2 className="text-center mb-5">About us</h2>
        <Testimonials />
        <hr className="my-5"></hr>
        <h3>Here's what we have</h3>
        <ul>
          <li>Kettlebells</li>
          <li>Dumbells</li>
          <li>Jinglebells</li>
          <li>Barbells</li>
        </ul>
      </Container>
    </div>
  );
}

export default About;