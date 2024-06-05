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
import BringingFaith from './BringingFaith';

const ChurchHomepage = () => {

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
      <BringingFaith/>     

      
    </div>
  );
};

export default ChurchHomepage;