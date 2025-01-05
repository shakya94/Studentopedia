import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import slide1 from "./images/slide1.jpg";

function About() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #c9eaf3, #f7fbfc)",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={slide1}
              alt="About Us"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
          </Col>
          <Col md={6}>
            <h2
              style={{
                fontWeight: "bold",
                color: "#1e6091",
                marginBottom: "20px",
              }}
            >
              About Our Mission
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "#495057",
              }}
            >
              At <strong>Studentopedia</strong>, we believe that education is a
              powerful tool to unlock a brighter future. However, for many
              underprivileged students, access to quality learning resources and
              guidance is limited.
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "#495057",
              }}
            >
              Our NGO is dedicated to bridging this gap by offering free
              educational programs, mentorship opportunities, and essential
              learning materials to students in need. We work to empower young
              minds, ensuring every student has a chance to succeed regardless
              of their circumstances.
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "#495057",
              }}
            >
              Together, with your support, we aim to create an equitable world
              where every student can dream, achieve, and inspire.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 text-center">
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <h4 style={{ color: "#1e6091" }}>Our Vision</h4>
                <p>
                  To create a world where education is accessible to every
                  child, breaking the cycle of poverty and building brighter
                  futures.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <h4 style={{ color: "#1e6091" }}>Our Mission</h4>
                <p>
                  To provide free educational support, resources, and mentorship
                  to underprivileged students so they can achieve their dreams.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <h4 style={{ color: "#1e6091" }}>Our Impact</h4>
                <p>
                  Hundreds of students have benefited from our programs,
                  receiving quality education and finding new opportunities for
                  growth.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5 text-center">
          <Col>
            <Button
              variant="primary"
              style={{
                backgroundColor: "#1e6091",
                borderColor: "#1e6091",
                padding: "10px 30px",
                fontSize: "1.1rem",
              }}
              href="/contact"
            >
              Join Us in Making a Difference
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
