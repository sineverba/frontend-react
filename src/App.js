import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from "./js/components/Navigation";
import AccountsPresentational from "./js/components/presentationals/AccountsPresentational";
import Footer from "./js/components/connected/Footer";

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
      </Container>
      <Footer />
    </>
  );
}

export default App;
