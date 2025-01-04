import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "40px 0",
      }}
    >
      <Container>
        <Row className="gy-4">
          {/* Section 1: Organization Info */}
          <Col md={4}>
            <h5 className="text-uppercase">Studentopedia</h5>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
             Studentopedia is a student-centered media organization
              with a vision to facilitate students with fast updates, academic
              assistance, personal guidance, and a platform to interact with
              ease.
            </p>
          </Col>

          {/* Section 2: Menu Links */}
          <Col md={4}>
            <h5 className="text-uppercase">Menu</h5>
            <ul style={{ listStyleType: "none", padding: 0, lineHeight: "2" }}>
              <li>
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/ihoik-care"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Student Care
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>

          {/* Section 3: Subscribe */}
          <Col md={4}>
            <h5 className="text-uppercase">Subscribe</h5>
            <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
              Enter your email to get the latest updates:
            </p>
            <Form>
              <Form.Group className="mb-2">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{ borderRadius: "5px", padding: "10px" }}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ borderRadius: "5px", width: "100%" }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <hr style={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />
        <p className="text-center mb-0" style={{ fontSize: "0.85rem" }}>
          &copy; {new Date().getFullYear()} HOIK. All Rights Reserved. <br />
          Designed with ♥ by Studentopedia Team.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
