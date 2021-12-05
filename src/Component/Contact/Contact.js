import React from "react";
import emailjs from "emailjs-com";
import { Button, Form } from "react-bootstrap";
import './Contact.css';
export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m42lwj9",
        "template_fg9xuko",
        e.target,
        "user_ijppBTsHJKUeoCXntkQYD"
      )
      .then(
        (result) => {
          alert('Message successfully done')
        },
        (error) => {
          alert(error.message)
        }
      );
    e.target.reset();
  }
  return (
    <div id="contact">
      <h2 className="text-center pt-5 pb-3">CONTACT ME</h2>
      <div className="container mt-3">
          <div className="row contact-t">
        <Form onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Name" name="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Message" name="message" />
          </Form.Group>
          <Button className="contact-b" type="submit">
            SUBMIT
          </Button>
        </Form>
        </div>
      </div>
    </div>
  );
}

