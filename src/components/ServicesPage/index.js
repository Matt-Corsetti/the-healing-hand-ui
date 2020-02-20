import React from "react";
import beach from "../../img/beach.jpg";

import { Card, Container, Row, Col } from "react-bootstrap";

function ServicesPage() {
  return (
    <Container>
      <Row>
        <Col sm>
          <Card className="bg-white text-black">
            <Card.Img src={beach} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>This is a wider card.</Card.Text>
            </Card.ImgOverlay>
            <Card.Body>
              <Card.Text>
                Quick example of some text that will be able to explain the
                service.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  );
}

export default ServicesPage;
