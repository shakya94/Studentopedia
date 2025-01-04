import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './Login';

function MyNavbar() {
  return (
    <div
      style={{
        background: 'linear-gradient(to right,rgb(20, 125, 191),rgb(40, 237, 208))',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Navbar */}
      <Navbar
        expand="lg"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              color: '#ff7e5f',
            }}
          >
            Studentopedia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-dark fw-bold mx-2">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-dark fw-bold mx-2">
                About
              </Nav.Link>
              <Nav.Link href="#contact" className="text-dark fw-bold mx-2">
                Contact
              </Nav.Link>
              <Nav.Link
                href="#login"
                className="btn btn-outline-light fw-bold px-4 py-2 ms-3"
                style={{
                  backgroundColor: '#ff7e5f',
                  borderColor: '#ff7e5f',
                  color: 'white',
                }}
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div
        style={{
          textAlign: 'center',
          paddingTop: '15vh',
          color: 'white',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)',
          }}
        >
          Welcome to Studentopedia
        </h1>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
          Discover, learn, and grow with us. Education made engaging.
        </p>
        <button
          className="btn btn-light mt-4"
          style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#ff7e5f',
            borderColor: '#ff7e5f',
          }}
        >
          Get Started
        </button>
      </div>

      {/* Cards Section */}
      <Container className="mt-5">
        <Row className="g-4">
          <Col md={3} sm={6} xs={12}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>Learn Together</Card.Title>
                <Card.Text>
                  Join our community of learners to achieve your goals faster.
                </Card.Text>
                <button
                  className="btn btn-primary"
                  onClick={() => alert('Learn Together Clicked!')}
                >
                  Learn More
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>Interactive Courses</Card.Title>
                <Card.Text>
                  Explore a variety of engaging and interactive courses tailored
                  for you.
                </Card.Text>
                <button
                  className="btn btn-primary"
                  onClick={() => alert('Interactive Courses Clicked!')}
                >
                  Start Now
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>Expert Guidance</Card.Title>
                <Card.Text>
                  Get assistance from top educators to guide your learning
                  journey.
                </Card.Text>
                <button
                  className="btn btn-primary"
                  onClick={() => alert('Expert Guidance Clicked!')}
                >
                  Get Help
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>Track Progress</Card.Title>
                <Card.Text>
                  Monitor your progress and improve with personalized insights.
                </Card.Text>
                <button
                  className="btn btn-primary"
                  onClick={() => alert('Track Progress Clicked!')}
                >
                  View Dashboard
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          textAlign: 'center',
          padding: '20px 0',
          marginTop: 'auto',
        }}
      >
        <Container>
          <p style={{ margin: 0, fontSize: '1rem' }}>
            &copy; {new Date().getFullYear()} Studentopedia. All Rights Reserved.
          </p>
          <p style={{ marginTop: '5px', fontSize: '0.9rem' }}>
            Designed with ♥ by Studentopedia Team
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default MyNavbar;
