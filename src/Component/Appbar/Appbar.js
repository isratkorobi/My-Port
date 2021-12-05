import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Appbar = () => {
  return (
    <div>
         <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><h4>ISRAT KOROBI</h4></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#project">Project</Nav.Link>
        <Nav.Link href="#feature">Feature</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Appbar;
