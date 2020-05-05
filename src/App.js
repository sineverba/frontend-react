import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from "./js/components/Navigation";
import Accounts from "./js/components/connected/Accounts";
import Footer from "./js/components/Footer";

function App() {
  return (
    <>
      <Container>
        <Navigation />
        <Row>
          <Col>
            <Switch>
              <Route path="/accounts">
                <h1>Accounts</h1>
                <Accounts />
              </Route>
              <Route path="/">
                <h1>Home</h1>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
