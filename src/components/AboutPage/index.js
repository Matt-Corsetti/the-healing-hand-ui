import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-content">
      <Container>
        <Row>
          <Col>
            <h3>About The Healing Hand</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;
