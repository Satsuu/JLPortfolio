import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect/dist/core";
import HomeNav from "../navigation/navbar";
import "../../index.css";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

const IntroCard = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: [
          "a Frontend Developer.",
          "a Full-stack Developer.",
          "a Web Designer.",
          "ready to collaborate!",
        ],
        autoStart: true,
        loop: true,
      });
    }
  }, []);

  return (
    <Container>
      <Row className="d-flex align-items-center ">
        <Col xs={12} md={6} className="information introw">
          <div className="info-text">
            <p>
              <span>
                Hi, I'm James <span className="wave"> 👋</span>
              </span>
            </p>
            <p>
              <span>I am </span>
              <b className="typewritter" ref={typewriterRef}></b>
            </p>
            <p>
              <span className="intro">
                Full-Stack Web Developer specializing in user-friendly web
                experiences. My skills span both front-end and back-end
                development, with a versatile toolkit.
              </span>
            </p>
          </div>
          <Row className="socials">
            <Col style={{ cursor: "pointer" }}>
              <Tooltip
                title="Indeed"
                placement="bottom"
                TransitionComponent={Zoom}
                arrow
              >
                <a
                  href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-notifcenter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="indeed.png" alt="Indeed" />
                </a>
              </Tooltip>

              <Tooltip
                title="Github"
                placement="bottom"
                TransitionComponent={Zoom}
                arrow
              >
                <a
                  href="https://github.com/Satsuu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="github.png" alt="Github" />
                </a>
              </Tooltip>
              <Tooltip
                title="LinkedIn"
                placement="bottom"
                TransitionComponent={Zoom}
                arrow
              >
                <a
                  href="https://www.linkedin.com/in/james-bryan-lumawag-24882927b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="linkedIn.png" alt="LinkedIn" />
                </a>
              </Tooltip>
            </Col>
          </Row>
        </Col>
        <Col xs={10} md={6} className="d-flex justify-content-end introw">
          <div className="circle">
            <img src="myself.png" alt="James" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default IntroCard;
