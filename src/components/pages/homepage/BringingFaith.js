import React from 'react';
import { Container, Row, Col, Button, Image, Carousel } from 'react-bootstrap';
import backgroundImage from '../../../media/images/img8.jpg';
import profileImage from '../../../media/images/img7.jpg';
import './homepage_css/bringingfaith.css'

const testimonials = [
  {
    text: "For the first time in many years I have found a place at Charia Church. It's like coming home again where the people are so warm and friendly and are genuinely concerned about you.",
    author: "Rev. William M. Branham",
    authorImage: profileImage
  },
  {
    text: "For the first time in many years I have found a place at Charia Church. It's like coming home again where the people are so warm and friendly and are genuinely concerned about you.",
    author: "Rev. William M. Branham",
    authorImage: profileImage
  },
  {
    text: "For the first time in many years I have found a place at Charia Church. It's like coming home again where the people are so warm and friendly and are genuinely concerned about you.",
    author: "Rev. William M. Branham",
    authorImage: profileImage
  },
];

const BringingFaith = () => {
  return (
    <div className='faith'>
      <Container>
        <Row style={{marginTop: '2rem'}}>
          <Col md={6} style={{ marginTop: '5rem', padding: '0rem 8rem' }}>
            <h2>BRINGING FAITH TO YOUR LIFE FOR OVER 20 YEARS</h2>
            <p>Charia Church is a caring, Christian family committed to sharing the love of Christ.</p>
            <p>To have a better understanding about how we impact the lives of our parishioners, read these recently submitted testimonials.</p>
            <Button variant="outline-light" style={{borderRadius: '0%'}}>Learn More</Button>
          </Col>
          <Col md={6} className="testimonial-section">
            <Image src={backgroundImage} fluid className="background-image" />
            <div className="carousel-wrapper testimonial" style={{marginTop:'60%'}}>
                <Carousel indicators={false} controls={false}>
                {testimonials.map((testimonial, index) => (
                    <Carousel.Item key={index}>
                    <div>
                        <Row className="testimonial-content">
                        <Col md={1} style={{marginLeft: '1rem', marginTop: '0.5rem'}}><div className="vertical-line"></div></Col>
                        <Col style={{marginLeft: '-1.2rem'}}><p style={{textAlign: 'left', fontWeight: 'bold'}}>{testimonial.text}</p></Col>
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
