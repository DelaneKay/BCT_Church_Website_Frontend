import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import image1 from '../../../media/images/img5.jpg';
import image2 from '../../../media/images/img5.jpg';
import image3 from '../../../media/images/img5.jpg';
import image4 from '../../../media/images/img5.jpg';

const WhatWeOffer = () => {

    return (
        <div className="container-custom">
          <Container>
            <h2 className="title-custom">WHAT WE OFFER</h2>
            <Row>
              <Col md={3}>
                <Card className="card-custom">
                  <Card.Img variant="top" src={image1} className="card-img-custom" />
                  <Card.Body>
                    <Card.Subtitle className="card-subtitle-custom">Explore the Bible with Us</Card.Subtitle>
                    <Card.Title className="card-title-custom">Bible Readings</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="card-custom">
                  <Card.Img variant="top" src={image2} className="card-img-custom" />
                  <Card.Body>
                    <Card.Subtitle className="card-subtitle-custom">Take Part</Card.Subtitle>
                    <Card.Title className="card-title-custom">Our Events</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="card-custom">
                  <Card.Img variant="top" src={image3} className="card-img-custom" />
                  <Card.Body>
                    <Card.Subtitle className="card-subtitle-custom">Locations</Card.Subtitle>
                    <Card.Title className="card-title-custom">Our Church</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="card-custom">
                  <Card.Img variant="top" src={image4} className="card-img-custom" />
                  <Card.Body>
                    <Card.Subtitle className="card-subtitle-custom">Join Our Communities</Card.Subtitle>
                    <Card.Title className="card-title-custom">Our Groups</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
}

export default WhatWeOffer
