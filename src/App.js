import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from "./js/components/Navigation";
import AccountsPresentational from "./js/components/presentationals/AccountsPresentational";
import FooterPresentational from "./js/components/presentationals/FooterPresentational";

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
                <AccountsPresentational />
              </Route>
              <Route path="/">
                <h1>Home</h1>
              </Route>
            </Switch>
          </Col>
        </Row>
        <Row>
          <Col>
            <FooterPresentational />
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default App;
