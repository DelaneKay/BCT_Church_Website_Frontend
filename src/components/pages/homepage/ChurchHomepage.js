import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Image, Carousel,  Card } from 'react-bootstrap';
import Img1 from '../../../media/images/img4.jpg'
import BCTLogo from '../../../media/images/bct-logo.png'
import CarouselPage from './CarouselPage';
import './homepage_css/homepage.css'
import { FaBible, FaPray, FaVideo, FaItunesNote, FaHome } from 'react-icons/fa';
import NewSermons from './NewSermons';
import ChurchInfo from './ChurchInfo';
import AboutChurch from './AboutChurch';
import Ministries from './Ministries';
import WhatWeOffer from './WhatWeOffer';

const ChurchHomepage = () => {

  const testimonials = [
    {
      text: "We attended our first Sunday here and we knew right away there was a uniqueness about this church. God used Charia Church to develop in us a stronger passion for him and a deeper relationship with him.",
      author: "James Wilson, Parishioner"
    },
    {
      text: "This church has been a blessing to our family. The teachings have helped us grow in our faith and the community has been so supportive.",
      author: "Sarah Thompson, Parishioner"
    },
    {
      text: "Charia Church has been instrumental in my spiritual journey. The sermons are insightful, and the programs have helped me connect with like-minded individuals.",
      author: "Michael Davis, Parishioner"
    }
  ];


  return (
    <div>
      <div style={{ position: 'relative' }}>
        <Navbar style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}
          expand="lg" 
          className="py-3 navbar-clear text-white" 
          sticky="top">
          <Container>
            <Col>
            <Navbar.Brand href="#home">
              <img src={BCTLogo} alt="BCT" className="logo" />
            </Navbar.Brand>
            </Col>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Col className="d-flex justify-content-left ">
                <Nav className="text-white">
                  <Nav.Link className="text-white" href="#about">ABOUT</Nav.Link>
                  <Nav.Link className="text-white" href="#donations">DONATIONS</Nav.Link>
                  <Nav.Link className="text-white" href="#pages">PAGES</Nav.Link>
                  <Nav.Link className="text-white" href="#sermons">SERMONS</Nav.Link>
                  <Nav.Link className="text-white" href="#shop">SHOP</Nav.Link>
                  <Nav.Link className="text-white" href="#contact">CONTACT US</Nav.Link>
                </Nav>
              </Col>
              <div className="mr-auto">
                <Button variant="danger" className="ml-3">DONATE</Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar> 
        <CarouselPage/>   
      </div>
      <ChurchInfo/>       
      <AboutChurch/>      
      <Ministries/>       
      <NewSermons/>
      <WhatWeOffer/>      

      <div className='faith'>
        <Container>
          <Row>
            <Col style={{marginTop: '10rem'}}>
              <h2>BRINGING FAITH TO YOUR LIFE FOR OVER 20 YEARS</h2>
              <p>Charia Church is a caring, Christian family committed to sharing the love of Christ.</p>
              <p>To have a better understanding about how we impact the lives of our parishioners, read these recently submitted testimonials.</p>
              <Button variant="primary">Learn More</Button>
            </Col>
            <Col style={{marginTop: '2rem'}}>
              <Image src="path/to/image.jpg" fluid />
              <Carousel>
                {testimonials.map((testimonial, index) => (
                  <Carousel.Item key={index}>
                    <div className="testimonial">
                      <p>{testimonial.text}</p>
                      <div className="author">
                        <span>{testimonial.author}</span>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ChurchHomepage;