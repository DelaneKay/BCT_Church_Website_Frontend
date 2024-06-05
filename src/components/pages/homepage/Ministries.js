import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './homepage_css/homepage.css'
import { FaBible, FaPray, FaVideo, FaItunesNote, FaHome } from 'react-icons/fa';

const Ministries = () => {
  return (
    <div className="ministries-section">
        <Container className='ministries-container'>
          <h2 className="ministries-title">OUR MINISTRIES</h2>
          <Row>
            <Col>
              <div className="ministry-card">
                <FaBible className="ministry-icon" />
                <span className="ministry-name">Preaching Ministry</span>
              </div>
            </Col>
            <Col>
              <div className="ministry-card">
                <FaItunesNote className="ministry-icon" />
                <span className="ministry-name">Music Ministry</span>
              </div>
            </Col>
            <Col>
              <div className="ministry-card">
                <FaVideo className="ministry-icon" />
                <span className="ministry-name">Media Ministry</span>
              </div>
            </Col>
            <Col>
              <div className="ministry-card">
                <FaHome className="ministry-icon" />
                <span className="ministry-name">Sunday School Ministry</span>
              </div>
            </Col>
            <Col>
              <div className="ministry-card">
                <FaPray className="ministry-icon" />
                <span className="ministry-name">Praying Ministry</span>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Ministries
