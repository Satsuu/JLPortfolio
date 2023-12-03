import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../index.css";

const TechnicalSkills = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center about-container"
    >
      <Row>
        <div className="text-center">
          <b className="title">Tech Stack</b>
        </div>
      </Row>
    </Container>
  );
};

export default TechnicalSkills;
