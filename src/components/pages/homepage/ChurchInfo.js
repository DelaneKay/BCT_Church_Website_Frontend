import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './homepage_css/churchinfo.css'

const ChurchInfo = () => {
  return (
    <Container className="church-info-container">
        <Container>
          <Row>
            <Col>
              <div className="d-flex align-items-center">
              <div className="vertical-line1"></div>
              <p className="church-info-text">
                Our church incorporates God's family into our fellowship. We
                provide a warm, authentic community, welcoming new believers
                into the body of Christ through baptism.
              </p>
              </div>
            </Col>
          </Row>
        </Container>
    </Container>
  )
}

export default ChurchInfo
