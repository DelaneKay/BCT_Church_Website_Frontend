import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Img1 from '../../../media/images/img5.jpg'
import Img2 from '../../../media/images/img2.jpg'
import Img3 from '../../../media/images/img3.jpg'
import { IoLocationOutline } from "react-icons/io5";
import './homepage_css/carousel.css'

const CarouselPage = () => {
  return (
    <div>
      <Carousel slide={true} controls={false} pause={false}>
        <Carousel.Item>
            <img style={{height: '100vh'}}
            className="d-block w-100"
            src={Img1}
            alt="First slide"
            />
            <Carousel.Caption>
                <Container>
                    <h3>Welcome to Benoni City Tabernacle (BCT)</h3>
                    <h1 >A SOUL SAVING STATION</h1>
                    <p>We are a Word based church with no creed but Christ, no law but love and no book but the Bible.</p>
                    <br/>
                    <Button variant="outline-light">SEE MORE</Button>
                </Container>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img style={{height: '100vh'}}
            className="d-block w-100"
            src={Img2}
            alt="First slide"
            />
            <Carousel.Caption>
                <Container>
                    <h3>Welcome to Our Church</h3>
                    <h1>JOIN THE PRAYER</h1>
                    <p>Charia Church is a Family of Faith that is committed to Bible teaching and joyful worship for children, youth and adults of all ages.</p>
                    <br/>
                    <Button variant="outline-light">SEE MORE</Button>
                </Container>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img style={{height: '100vh'}}
            className="d-block w-100"
            src={Img3}
            alt="First slide"
            />
            <Carousel.Caption>
                <Container>
                    <h3>Welcome to Our Church</h3>
                    <h1>JOIN THE PRAYER</h1>
                    <p>Charia Church is a Family of Faith that is committed to Bible teaching and joyful worship for children, youth and adults of all ages.</p>
                    <br/>
                    <Button variant="outline-light">SEE MORE</Button>
                </Container>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
            <div className="address">
                <Container style={{ display: 'flex', alignItems: 'center' }}>
                    <IoLocationOutline size={60} style={{ marginRight: '10px' }}/>
                    <div>
                        <h4 style={{ margin: 0 }}>100 Elston Ave, Benoni, 1500</h4>
                        <p style={{ margin: 0 }}>Feel free to visit us on any of our service days.</p>
                    </div>
                    
                </Container>
            </div>
    </div>
  )
}

export default CarouselPage
