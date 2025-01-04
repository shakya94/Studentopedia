import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
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
  );
}

export default Footer;
