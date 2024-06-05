import React from 'react';
import { Container, Row, Col, Button, Image, Carousel } from 'react-bootstrap';
import backgroundImage from '../../../media/images/img5.jpg';
import profileImage from '../../../media/images/img7.jpg';

const testimonials = [
  {
    text: "For the first time in many years I have found a place at Charia Church. It's like coming home again where the people are so warm and friendly and are genuinely concerned about you.",
    author: "Kate Adams, Parishioner",
    authorImage: profileImage
  },
  {
    text: "For the first time in many years I have found a place at Charia Church. It's like coming home again where the people are so warm and friendly and are genuinely concerned about you.",
    author: "Kate Adams, Parishioner",
    authorImage: profileImage
  },
  {
    text: "For the first time in many years I have found a place at Charia Church. It's like coming home again where the people are so warm and friendly and are genuinely concerned about you.",
    author: "Kate Adams, Parishioner",
    authorImage: profileImage
  },
];

const BringingFaith = () => {
  return (
    <div className='faith'>
      <Container>
        <Row>
          <Col md={6} style={{ marginTop: '10rem' }}>
            <h2>BRINGING FAITH TO YOUR LIFE FOR OVER 20 YEARS</h2>
            <p>Charia Church is a caring, Christian family committed to sharing the love of Christ.</p>
            <p>To have a better understanding about how we impact the lives of our parishioners, read these recently submitted testimonials.</p>
            <Button variant="primary">Learn More</Button>
          </Col>
          <Col md={6} className="testimonial-section">
            <Image src="path/to/background-image.jpg" fluid className="background-image" />
            <div className="carousel-wrapper">
                <Carousel indicators={true} controls={false}>
                {testimonials.map((testimonial, index) => (
                    <Carousel.Item key={index}>
                    <div className="testimonial">
                        <Row className="testimonial-content">
                        <Col md={1} style={{marginLeft: '1rem', marginTop: '0.5rem'}}><div className="vertical-line"></div></Col>
                        <Col style={{marginLeft: '-1.5rem'}}><p style={{textAlign: 'left'}}>{testimonial.text}</p></Col>
                        </Row>
                        <div className="author">
                        <Image src={testimonial.authorImage} roundedCircle />
                        <span>{testimonial.author}</span>
                        </div>
                    </div>
                    </Carousel.Item>
                ))}
                </Carousel>
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BringingFaith;
