import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../index.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const EmailMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // You can add your email sending logic or any other functionality here
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <Container fluid className="about-container">
      <Row className="d-flex align-items-center">
        <Col xs={6} className="pr-2">
          <div className="info-me">
            <h2 style={{ color: "#ff4d4d" }}>
              <b>Get in touch with me</b>
            </h2>
            <p>
              Please feel free to send me a message to initiate a conversation.
            </p>

            <p>
              <LocationOnIcon style={{ color: "#ff4d4d" }} /> San Pablo City,
              Laguna, Philippines
            </p>
            <p>
              <EmailIcon className="me-2" style={{ color: "#ff4d4d" }} />
              jameslumawag1@gmail.com
            </p>
            <p>
              <GitHubIcon className="me-2" style={{ color: "#ff4d4d" }} />
              https://github.com/Satsuu
            </p>
            <p>
              <LinkedInIcon className="me-2" style={{ color: "#ff4d4d" }} />
              https://www.linkedin.com/in/james-bryan-lumawag-24882927b/
            </p>
          </div>
        </Col>
        <Col
          xs={6}
          className="pl-2"
          style={{ borderLeft: "1px solid #ccc", paddingLeft: "50px" }}
        >
          <div className="vertical-line"></div>
          <Form className="info-me" name="contact" method="POST" netlify>
            <Form.Group className="mb-4" controlId="formName">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formMessage">
              <Form.Control
                as="textarea"
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </Form.Group>
            <div className="text-center">
              <button
                className="btn text-white mt-2"
                style={{
                  backgroundColor: "#ff4d4d",
                }}
                type="submit"
                disabled={!isFormValid}
              >
                Send Message
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EmailMe;
