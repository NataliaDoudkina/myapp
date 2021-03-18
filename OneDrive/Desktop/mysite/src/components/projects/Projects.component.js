import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";
import SocialMedia from "../socialMediaLinks/socialMediaLinks.component";
import "./projects.styles.scss";

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="project-page-title">My Projects:</h1>
          <p><center>
            Check all my code samples on 
            <a href="https://github.com/NataliaDoudkina" target="blank"> <u>github</u> 
            
            </a>
            </center>
          </p>
        </Col>
      </Row>
      <Row className='row'>
        <Col md={2}>
          <h3>Contact:</h3>
          <SocialMedia />
        </Col>
     
        <Col  sm={4} className='col-card'>
          <Card style={{width:"16rem"}}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title className="projectTitle">Digital Knights</Card.Title>
              <Card.Text>
                Digital Knights is a website for digital artists of all types in
                tv,movies and video games to collaborate on projects, promote
                themselves, offer their services, etc.
              </Card.Text>
              <Button className="projectBtn" href="http://digitalknights.ca">
                View the project
              </Button>
              <br />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={2}>
          <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title className="projectTitle">The Shoppies</Card.Title>
              <Card.Text>
                Movie App - search for your favorite movies and nominate it. You will be able to create your own list of nominated movies and retrieve it anytime you come back to the page
               
              </Card.Text>
              <Button className="projectBtn">View the project</Button>
              <br />
              <Button
                className=" projectBtn mt-3"
                href="https://github.com/NataliaDoudkina/movieApp"
                target="blank"
              >
                View code
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
