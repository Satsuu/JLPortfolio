import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import "../../index.css";

const projects = [
  {
    client: "College Student",
    title: "Android application traffic signs detection",
  },
  {
    client: "College Student",
    title: "Android application skin disease detection",
  },
  {
    client: "College Student",
    title: "Android application health monitoring",
  },
  {
    client: "College Student",
    title: "Barangay web application system with geolocation and chatbot",
  },
  {
    client: "College Student",
    title: "Article filtering web application",
  },
  {
    client: "College Student",
    title: "Android application emotion detection",
  },
];

const FreelanceExp = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center mt-5"
    >
      <Row className="d-flex align-items-center justify-content-center">
        <Col className="d-flex align-items-center justify-content-center">
          <Card className="glass-morphism mx-auto">
            <Card.Body>
              <h2 className="text-white mb-3">Freelance Project</h2>
              {projects.map((project, index) => (
                <Card key={index} className="glass mx-auto mb-3">
                  <Card.Body>
                    <div className="d-flex align-items-center">
                      <h4>
                        &#11088; Client #{index + 1} : {project.client} &#11088;
                      </h4>
                    </div>
                    <Typography
                      className="text-light ms-2"
                      variant="overline"
                      display="block"
                      gutterBottom
                    >
                      Project: {project.title}
                    </Typography>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FreelanceExp;
