import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../index.css";

const AboutMyself = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "/documents/resume.pdf";
    window.open(resumeUrl, "_blank");
  };
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
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={4} md={4} sm={8}>
              <Row className="d-flex justify-content-center align-items-center">
                <Col className="d-flex justify-content-center">
                  <img
                    src="myself2.png"
                    alt="James"
                    className="img-fluid mb-5 "
                    style={{ height: "300px" }}
                  />
                </Col>
              </Row>
              <Col className="d-flex justify-content-center mb-5">
                <button
                  className="btn text-white"
                  style={{ backgroundColor: "#ff4d4d" }}
                  onClick={handleDownloadResume}
                >
                  Download Resume
                </button>
              </Col>
            </Col>
            <Col lg={8} md={4} sm={8}>
              <div className="info-me">
                <p>
                  Hello, I'm James Lumawag, a recent graduate from Colegio de
                  San Juan de Letran Calamba, with a strong focus on a career as
                  a full-stack web developer. During my time at school, I
                  explored various fields of study, but it was web development
                  that truly captured my passion.
                </p>
                <p>
                  My journey into web development began during my internship at
                  the Ecosystem Research and Development Bureau Multipurpose
                  Cooperative, where I gained valuable experience and honed my
                  skills to become a full-stack developer.
                </p>
                <p>
                  Upon completing my internship, I was thrilled to be offered a
                  part-time position as a Full Stack Developer at Danny Veiga
                  Marketing. Since then, I have continued to expand my knowledge
                  and expertise by working on a diverse range of projects. I
                  enjoy pushing the boundaries of web development by
                  experimenting with different frameworks and technologies, both
                  on the frontend and backend.
                </p>
                <p>
                  When I'm not in front of my computer, you can often find me on
                  the basketball court or indulging in my passion for movies.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMyself;
