import React from 'react'
import { Row, Col, Button, Image} from 'react-bootstrap';
import Img1 from '../../../media/images/img4.jpg'
import './homepage_css/aboutchurch.css'


const AboutChurch = () => {
  return (
    <div className='about-church'>
          <Row>
            <Col md={5}>
              <Image 
                src={Img1}
                fluid
                alt="Church interior"
                style={{  objectFit: 'cover', height: '85vh' }}
              />
            </Col>
            <Col md={7} style={{padding: '9.5rem 10rem'}}>
              <h2 style={{fontSize: '3rem'}}>ABOUT OUR CHURCH</h2>
              <p>
                At Charia Church, we want the love that Christ showed on the cross to flow out
                of our lives, impacting the community.
              </p>
              <p>  
                We come from all different backgrounds and cultures but are united in the
                pursuit and worship of Christ. Above all else, we want to glorify God. We
                strongly believe that God does His work through the local church and that it is a
                vital part of the Christian life. Please join us as we come together and let the
                Gospel transform us!
              </p>
              <div>
                <Button 
                  variant="danger"  
                  size="lg">OUR SERMONS</Button>
                <Button 
                  style={{marginLeft: '1.5rem'}} 
                  variant="outline-dark" 
                  size="lg">OUR SERVICES</Button>
              </div>
            </Col>
          </Row>
      </div>
  )
}

export default AboutChurch
