import { Carousel } from "react-bootstrap";
import Avatar from '../assets/avatar.png';

export default function TestimonialsCarousel({ data }) {
  return (
    <Carousel>
      {data.map(item => (
        <Carousel.Item className="w-100">
          <div className="carousel-bg">
            <img
              src={item.img}
              alt="Third slide"
              className="h-100 w-100 carousel-img"
            />
            <Carousel.Caption>
              <h3>{item.name}</h3>
              <p>{item.comment}</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}