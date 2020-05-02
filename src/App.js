import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Accounts from "./js/components/Accounts";
import Footer from "./js/components/Footer";

function App() {
  return (
    <>
    <Container>
      <Row>
        <Col>
          <h1>Accounts</h1>
          <Accounts />
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
}

export default App;
