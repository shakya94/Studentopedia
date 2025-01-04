import React from "react";
import { Carousel, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.jpg";
import slide4 from "./images/slide4.jpg";
import slide5 from "./images/slide5.jpg";

function Home() {
  return (
    <div className="container text-center">
      {/* Hero Section */}
      <h1>Welcome to Studentopedia</h1>

      {/* Image Slider (Carousel) */}
      <Carousel className="my-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
            style={{
              height: "750px",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <h3>Discover</h3>
            <p>Explore new concepts and ideas.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
            style={{
              height: "750px",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <h3>Learn</h3>
            <p>Deep dive into courses and lectures.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
            style={{
              height: "750px",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <h3>Engage</h3>
            <p>Participate in discussions and group activities.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide4}
            alt="Fourth slide"
            style={{
              height: "750px",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <h3>Collaborate</h3>
            <p>Work on projects with peers worldwide.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide5}
            alt="Fifth slide"
            style={{
              height: "750px",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <h3>Achieve</h3>
            <p>Reach new milestones in your learning journey.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Cards Section */}
      <Row className="g-4">
        <Col md={4} sm={6} xs={12}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Learn Together</Card.Title>
              <Card.Text>
                Join our community of learners to achieve your goals faster.
              </Card.Text>
              <Link to="/learn">
                <Button variant="primary">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Interactive Courses</Card.Title>
              <Card.Text>
                Explore a variety of engaging and interactive courses tailored
                for you.
              </Card.Text>
              <Link to="/courses">
                <Button variant="primary">Start Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Expert Guidance</Card.Title>
              <Card.Text>
                Get assistance from top educators to guide your learning
                journey.
              </Card.Text>
              <Link to="/guidance">
                <Button variant="primary">Get Help</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mt-4">
        <Col md={4} sm={6} xs={12}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Track Progress</Card.Title>
              <Card.Text>
                Monitor your progress and improve with personalized insights.
              </Card.Text>
              <Link to="/dashboard">
                <Button variant="primary">View Dashboard</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Join Live Sessions</Card.Title>
              <Card.Text>
                Participate in live webinars with top educators and fellow
                students.
              </Card.Text>
              <Link to="/live-sessions">
                <Button variant="primary">Join Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Career Assistance</Card.Title>
              <Card.Text>
                Get advice on internships and job placements to jumpstart your
                career.
              </Card.Text>
              <Link to="/career-assistance">
                <Button variant="primary">Get Assistance</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
