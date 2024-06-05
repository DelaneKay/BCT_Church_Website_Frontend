import React from 'react'
import { Container, Row, Col, Button,  Card } from 'react-bootstrap';
import Img2 from '../../../media/images/img5.jpg'
import './homepage_css/homepage.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
  
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  const sermons = [
    {
      title: "God’s Cure For the World’s Worst Disease",
      date: "November 12, 2020",
      imageUrl: {Img2}
    },
    {
      title: "Christian Life: Running Well, Finishing Strong",
      date: "November 12, 2020",
      imageUrl: {Img2}
    },
    {
      title: "The Passing of Religious Opportunity",
      date: "November 12, 2020",
      imageUrl: {Img2}
    },
    {
        title: "God’s Cure For the World’s Worst Disease",
        date: "November 12, 2020",
        imageUrl: {Img2}
      },
      {
        title: "Christian Life: Running Well, Finishing Strong",
        date: "November 12, 2020",
        imageUrl: {Img2}
      },
      {
        title: "The Passing of Religious Opportunity",
        date: "November 12, 2020",
        imageUrl: {Img2}
      },
      {
        title: "God’s Cure For the World’s Worst Disease",
        date: "November 12, 2020",
        imageUrl: {Img2}
      },
      {
        title: "Christian Life: Running Well, Finishing Strong",
        date: "November 12, 2020",
        imageUrl: {Img2}
      },
      {
        title: "The Passing of Religious Opportunity",
        date: "November 12, 2020",
        imageUrl: {Img2}
      },
      {
        title: "God’s Cure For the World’s Worst Disease",
        date: "November 12, 2020",
        imageUrl: {Img2}
      },
      {
        title: "Christian Life: Running Well, Finishing Strong",
        date: "November 12, 2020",
        imageUrl: {Img2}
      },
      {
        title: "The Passing of Religious Opportunity",
        date: "November 12, 2020",
        imageUrl: {Img2}
      }
  ];
  
  const NewSermons = () => {
    return (
      <div className="new-sermons-section">
         <Container>
            <Row>
                <Col md={3} className="new-sermons-title">NEW SERMONS</Col>
                <Col className="new-sermons-description">
                Explore & listen to the latest sermons by our church’s pastors added daily and available for download in all popular formats.
                </Col>
            </Row>
            <Carousel 
                responsive={responsive} 
                showDots={true} 
                arrows={false}
                autoPlay={true}
                className="new-sermons-carousel" 
                containerClass="custom-dots"
                dotListClass="custom-dots"
                shouldResetAutoplay={true}
                rewind={true}>
            {sermons.map((sermon, index) => (
                <Card key={index} className="custom-card">
                <Card.Img variant="top" src={Img2} className="custom-card-img" style={{borderRadius: '0%'}}/>
                <Card.Body className="custom-card-body">
                    <div className="custom-card-tag">SERMONS</div>
                    <Card.Title className="custom-card-title">The Passing of Religious Opportunity</Card.Title>
                    <br/>
                    <div className="custom-card-divider"></div>
                    <Card.Text className="custom-card-date" style={{marginBottom: '15px', marginTop: '30px'}}>NOVEMBER 12, 2020</Card.Text>
                </Card.Body>
                </Card>
            ))}
            </Carousel>
        </Container>
      </div>
    );
  };
  
  export default NewSermons;