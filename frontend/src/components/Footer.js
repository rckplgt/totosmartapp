import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Toto's Mart</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
