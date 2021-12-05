import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Feature.css";

const Feature = () => {
  return (
    <div id="feature">
      <div className="Feature-content text-center pt-2">
        <h2>MY FEATURE</h2>
        <h6>There is all my features. All these I use in all my projects</h6>
      </div>
      <div className="container">
        <Row xs={1} md={3} className="g-2">
          <Col className="feature p-2">
            <Card className="feature-card p-3">
              <Card.Body className="text-center">
                <i class="fab fa-html5"></i>
                <Card.Title>HTML</Card.Title>
                <Card.Text>
                  HTML stands for Hyper Text Markup Language HTML is the
                  standard markup language for creating Web pages.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="feature p-2">
            <Card className="feature-car-2 p-3">
              <Card.Body className="text-center">
                <i class="fab fa-css3-alt"></i>
                <Card.Title>CSS</Card.Title>
                <Card.Text>
                  CSS is the language we use to style an HTML document. CSS
                  describes how HTML elements should be displayed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="feature p-2">
            <Card className="feature-card p-3">
              <Card.Body className="text-center">
                <i class="fab fa-js-square"></i>
                <Card.Title>JAVASCRIPT</Card.Title>
                <Card.Text>
                  JavaScript is the world's most popular programming language.
                  JavaScript is the programming language of the Web.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/*  */}
        <Row xs={1} md={3} className="g-2">
          <Col className="feature p-2">
            <Card className="feature-card p-3">
              <Card.Body className="text-center">
                <i class="fab fa-node"></i>
                <Card.Title>NODE JS</Card.Title>
                <Card.Text>
                  Node.js is an open source server environment Node.js is
                  free.Node.js uses JavaScript on the server
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="feature p-2">
            <Card className="feature-car-2 p-3">
              <Card.Body className="text-center">
                <i class="fab fa-react"></i>
                <Card.Title>REACT JS</Card.Title>
                <Card.Text>
                  React (also known as React.js or ReactJS) is a free and
                  open-source front-end JavaScript library.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="feature p-2">
            <Card className="feature-card p-3">
              <Card.Body className="text-center">
                <i class="fab fa-mdb"></i>
                <Card.Title>MONGO DB</Card.Title>
                <Card.Text>
                  MongoDB stores data in flexible, JSON-like documents, meaning
                  fields can vary from document to document and data.
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
