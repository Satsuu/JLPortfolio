// Footer.js
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#333e57", color: "#ffecda" }}>
      <Container className="d-flex justify-content-center align-items-center text-center">
        <p style={{ margin: 0 }}>&copy; 2023 | James Lumawag</p>
      </Container>
    </footer>
  );
};

export default Footer;
