import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../index.css";

const AboutMyself = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center about-container"
    >
      <Row>
        <div className="text-center intorduction">
          <b className="title">About Me</b>
          <div className="horizontal-line mx-auto">
            <div className="line me-2"></div>
            <div className="text">Who I am</div>
            <div className="line ms-2"></div>
          </div>
        </div>

        <Col className="d-flex align-items-center justify-content-center">
          <Card className="glass-morphism mx-auto">
            <Card.Body>
              <Row className="d-flex justify-content-center align-items-center">
                <Col>
                  <img
                    src="myself2.png"
                    alt="James"
                    className="img-fluid mb-5"
                    style={{ height: "auto" }}
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div className="info-me">
                    <p>
                      Hello, I'm James Lumawag, a recent graduate from Colegio
                      de San Juan de Letran Calamba, with a strong focus on a
                      career as a full-stack web developer. During my time at
                      school, I explored various fields of study, but it was web
                      development that truly captured my passion.
                    </p>
                    <p>
                      My journey into web development began during my internship
                      at the Ecosystem Research and Development Bureau
                      Multipurpose Cooperative, where I gained valuable
                      experience and honed my skills to become a full-stack
                      developer.
                    </p>
                    <p>
                      Upon completing my internship, I was thrilled to be
                      offered a part-time position as a Full Stack Developer at
                      Danny Veiga Marketing. Since then, I have continued to
                      expand my knowledge and expertise by working on a diverse
                      range of projects. I enjoy pushing the boundaries of web
                      development by experimenting with different frameworks and
                      technologies, both on the frontend and backend.
                    </p>
                    <p>
                      When I'm not in front of my computer, you can often find
                      me on the basketball court or indulging in my passion for
                      movies.
                    </p>
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

export default AboutMyself;
