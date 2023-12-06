import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "../../index.css";

const TechnicalSkills = () => {
  const techStack = [
    { label: "HTML", icon: "html.png" },
    { label: "CSS", icon: "css.png" },
    { label: "Bootstrap", icon: "bootstrap.png" },
    { label: "Tailwind", icon: "tailwind.png" },
    { label: "React", icon: "react.png" },
    { label: "JavaScript", icon: "javascript.png" },
    { label: "Vite", icon: "vite.png" },
    { label: "jQuery", icon: "jquery.png" },
    { label: "Python", icon: "python.png" },
    { label: "PHP", icon: "php.png" },
    { label: "Django", icon: "django.png" },
    { label: "MySQL", icon: "mysql.png" },
    { label: "Java", icon: "java.png" },
    { label: "Android", icon: "android.png" },
    { label: "Flutter", icon: "flutter.png" },
    { label: "Firebase", icon: "firebase.png" },
    { label: "Wordpress", icon: "wordpress.png" },
    { label: "Git Control", icon: "git_control.png" },
    { label: "Github", icon: "github_techstack.png" },
    { label: "Visual Studio Code", icon: "vscode.png" },
    { label: "Android Studio", icon: "androidstudio.png" },
    { label: "Jira", icon: "jira.png" },
    { label: "Figma", icon: "figma.png" },
    { label: "Canva", icon: "canva.png" },
    { label: "Adobe XD", icon: "xd.png" },
    { label: "Photoshop", icon: "photoshop.png" },
  ];

  const columnsPerRow = 6;

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center about-container"
    >
      <Row>
        <div className="text-center introduction mb-5">
          <b className="title">Tech Stack</b>
          <div className="horizontal-line mx-auto">
            <div className="line me-2"></div>
            <div className="text">What do I use</div>
            <div className="line ms-2"></div>
          </div>
        </div>

        <Col className="d-flex align-items-center justify-content-center mt-5">
          <Row className="d-flex justify-content-center align-items-center">
            {techStack.map(({ label, icon }, index) => (
              <Col
                key={index}
                lg={12 / columnsPerRow}
                md={12 / columnsPerRow}
                sm={12}
                className="text-center icon-container" // Add the new class here
              >
                <Image src={icon} alt={`icon-${index}`} />
                <p className="mt-3" style={{ color: "#ffecda" }}>
                  {label}
                </p>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TechnicalSkills;
