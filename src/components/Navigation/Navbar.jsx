import React, { useState } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

const HomeNav = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const navbarStyle = {
    position: "sticky",
    top: 0,
    backgroundColor: "rgba(26, 31, 43, 0.9)",
    zIndex: 100,
  };

  return (
    <>
      <Navbar expand="lg" style={navbarStyle}>
        <Container>
          <Navbar.Brand href="/" style={{ color: "#ff4d4d" }}>
            J's Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={expanded ? "show" : ""}
          >
            <Nav className="ms-auto">
              <Nav.Link className="text-white" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="text-white" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="text-white" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="text-white" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HomeNav;
