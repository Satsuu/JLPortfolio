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

const companyXp = [
  {
    company: "ERDB Multipurpose Cooperative",
    position: "Full Stack Developer",
    title: "Web based account viewing system",
    date: "March 2023 - June 2023",
  },
  {
    company: "Danny Viega Marketing",
    position: "Full Stack Developer",
    title: "Web based SEO tool",
    date: "June 2023 - September 2023",
  },
];

const FreelanceAndProExp = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center about-container"
    >
      <Row>
        <div className="text-center introduction mb-5">
          <b className="title">Projects</b>
          <div className="horizontal-line mx-auto">
            <div className="line me-2"></div>
            <div className="text">What are my experiences</div>
            <div className="line ms-2"></div>
          </div>
        </div>
        <Col className="d-flex align-items-center justify-content-center mt-5">
          <Card className="glass-morphism mx-auto">
            <Card.Body>
              <Row>
                {/* Freelance Projects */}
                <Col
                  xs={6}
                  className="d-flex align-items-center justify-content-start"
                >
                  <div>
                    <h4 className="text-white mb-3 text-center">
                      Freelance Project
                    </h4>
                    {projects.map((project, index) => (
                      <Card key={index} className="glass mx-auto mb-3">
                        <Card.Body>
                          <div className="d-flex align-items-center">
                            <h5>
                              &#11088; Client #{index + 1} : {""}
                              <b
                                style={{
                                  textDecoration: "underline",
                                  color: "#ff4d4d",
                                }}
                              >
                                {project.client}
                              </b>
                              &#11088;
                            </h5>
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
                  </div>
                </Col>

                {/* Professional Projects */}
                <Col xs={6} className="d-flex  justify-content-end">
                  <div>
                    <h4 className="text-white mb-3 text-center">
                      Professional Project
                    </h4>
                    {companyXp.map((xp, index) => (
                      <Card key={index} className="glass mx-auto mb-3">
                        <Card.Body>
                          <div className="d-flex align-items-center">
                            <h4>
                              &#11088;
                              <b
                                style={{
                                  textDecoration: "underline",
                                  color: "#ff4d4d",
                                }}
                              >
                                {xp.company}
                              </b>
                              &#11088;
                            </h4>
                          </div>
                          <Typography
                            className="text-light ms-2"
                            variant="overline"
                            display="block"
                            gutterBottom
                          >
                            Position: <b style={{}}>{xp.position}</b>
                            <br />
                            Project: {xp.title}
                            <br />
                            Date: {xp.date}
                          </Typography>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FreelanceAndProExp;
