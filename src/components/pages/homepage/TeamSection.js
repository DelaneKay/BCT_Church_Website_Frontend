import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './homepage_css/teamsection.css';
import Img1 from '../../../media/images/img8.jpg';
import Img2 from '../../../media/images/img9.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Rev. Mahere',
      role: 'Pastor',
      image: Img2,
      description: 'A Committed and Dedicated Pastor, operating under the Prophet-Messenger',
    },
    {
      name: 'Rev. Branham',
      role: '7th Messenger',
      image: Img1,
      description: 'A Dispensational Prophet who fulfilled Malachi 4 : 5 - 6 Prophecy',
    },
  ];

  return (
    <Container className="meet-our-team">
        <br/>
      <h2 className="text-center">MEET OUR PASTOR AND PROPHET</h2>
      <br/>
      <Row className="justify-content-center">
        {teamMembers.map((member, index) => (
          <Col key={index} md={6} lg={3} className="team-member">
            <Card className="image-container">
              <Card.Img variant="top" src={member.image} className="team-image" />
              <Card.Body className="overlay">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Card.Text className="text">{member.name} - <i>{member.role}</i></Card.Text>
                <div className="d-flex align-items-center">
                  <div className="vertical-line-team"></div>
                  <p className="team-card-text">
                    {member.description}
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamSection;
