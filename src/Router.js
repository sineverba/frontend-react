import { Switch, Route } from "react-router-dom";
import Home from "./js/pages/Home"
import { Col, Row } from "react-bootstrap";

export const Router = (props) => {
    
    return (
        <Row>
            <Col>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Col>
        </Row>
    );
}

export default Router;