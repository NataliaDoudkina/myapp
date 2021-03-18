import React from "react";
import SocialMedia from "../socialMediaLinks/socialMediaLinks.component";
import Skills from "../skills/skills.component";
import { Container, Col, Row } from "react-bootstrap";
import "./home.styles.scss";
import { GiDiamondHard } from "react-icons/gi";

///style function

const style = { strokeWidth: "15", color: "white", paddingRight: "10" };

const Home = () => {
  return (
    <div className="homePage">
      <Container>
        <Row className="row-intro">
          <Col className="intro">
            <h1>Hi, I am Natalia Doudkina</h1>
            <h3>I am a software developer residing in Toronto</h3>
          </Col>
        </Row>
        <Row className="row">
          <Col md={2}>
            <h3>Contact:</h3>
            <SocialMedia />
          </Col>
          <Col md={{ span: 6, offset: 1 }}>
            <section className="skills-section">
              <h1 className="section-title">My interests:</h1>
              <hr />
              <p>
                I am an honors graduate with an advanced diploma in information
                technology. This passion for technology is what lead me into
                this field. I enjoy being able to use my creativety to solve
                complex programming problems. I am a full stack developer,
                although I prefer backend, I am fully capable of front end
                development. With that being said, I am always willing and enjoy
                to learn new ideas and concepts to add and enhance my own
                skills.
              </p>
            </section>
            <section>
              <h1 className="section-title">About me:</h1>
              <hr />
              <ul>
                <li>
                  <GiDiamondHard size={40} style={style} />I can develop
                  websites and full-stack web apps following design and
                  architcture standarts using REST API and database
                </li>
                <li>
                  <GiDiamondHard size={40} style={style} />I can manage existing
                  apps and modified and update as needed
                </li>
                <li>
                  <GiDiamondHard size={40} style={style} />I use varaity of
                  different technologies and tools to get the best result
                </li>
                <li>
                  <GiDiamondHard size={40} style={style} />I love to solve
                  technical challenges
                </li>
              </ul>
            </section>
          </Col>
        </Row>
        <Row className="row">
          <Col>
            <section className="skills-section">
              <h1 className="section-title"> My Skills:</h1>
              <hr />
              <Skills />
            </section>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
};

export default Home;
