import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Your message has been sent. We will get back to you shortly!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #c9eaf3, #f7fbfc)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 20px',
      }}
    >
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: 'bold', color: '#1e6091' }}>
          Contact Us
        </h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              {/* Name Field */}
              <Form.Group controlId="name" className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: '12px',
                    fontSize: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#f7f7f7',
                  }}
                />
              </Form.Group>

              {/* Email Field */}
              <Form.Group controlId="email" className="mb-4">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: '12px',
                    fontSize: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#f7f7f7',
                  }}
                />
              </Form.Group>

              {/* Message Field */}
              <Form.Group controlId="message" className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: '12px',
                    fontSize: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#f7f7f7',
                  }}
                />
              </Form.Group>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-100"
                style={{
                  backgroundColor: '#1e6091',
                  borderColor: '#1e6091',
                  padding: '12px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '8px',
                }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
