import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Accounts from "./js/components/Accounts";
import Footer from "./js/components/Footer";

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item"><Link to="/">Home</Link></li>
              <li className="list-inline-item"><Link to="/accounts">Accounts</Link></li>
            </ul>
          </Col>
        </Row>
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
    </Router>
  );
}

export default App;
