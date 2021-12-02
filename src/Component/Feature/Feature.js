import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="feature">
      <div className="Feature-content text-center pt-2">
        <h1>My Feature</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br /> Fugiat inventore eligendi laudantium reiciendis, autem eius.
        </p>
      </div>
      <div className="container">
        <Row xs={1} md={3} className="g-2">
            <Col className="feature p-2">
            <Card className="feature-card p-3">
                <Card.Body className="text-center">
                <i class="fas fa-pencil-ruler"></i>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="feature p-2">
            <Card className="feature-car-2 p-3">
              <Card.Body className="text-center">
                <i class="fas fa-pencil-ruler"></i>
                <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className="feature p-2">
            <Card className="feature-card p-3">
              <Card.Body className="text-center">
                <i class="fas fa-pencil-ruler"></i>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </div>
    </div>
  );
};

export default Feature;
