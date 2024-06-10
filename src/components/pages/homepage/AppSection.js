// AppSection.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Image from '../../../media/images/img5.jpg';
import './homepage_css/appsection.css';

const AppSection = () => {
  return (
    <div className='app-section'>
      <Row className="align-items-center">
        <Col md={5} className="image-col">
          <div className="image-wrapper">
            <img 
                src={Image} 
                fluid
                alt="Church" 
                className="image" 
                style={{  objectFit: 'cover', height: '70vh'}}
                />
          </div>
        </Col>
        <Col md={7} className="text-col">
        <br/><br/><br/><br/>
          <h2>DOWNLOAD THE APP</h2>
          <p>To stay connected with our church and receive the latest news and updates from us, download the free Charia Church app that offers:</p>
          <Row>
            <Col md={6}>
              <ul>
                <li>Simple Donations</li>
                <li>Sermons</li>
                <li>Event Notifications</li>
              </ul>
            </Col>
            <Col md={6}>
              <ul>
                <li>Prayer Requests</li>
                <li>The Bible</li>
              </ul>
            </Col>
          </Row>
          <div className="button-group">
            <Button variant="light" className="store-button apple-button">
              <FaApple className="store-icon" /> APPLE STORE
            </Button>
            <Button variant="light" className="store-button play-button">
              <FaGooglePlay className="store-icon" /> GOOGLE PLAY
            </Button>
          </div>
        </Col>
      </Row>
      </div>
  );
};

export default AppSection;