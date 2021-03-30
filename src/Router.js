import { Switch, Route } from "react-router-dom";
import Home from "./js/pages/Home"
import Dashboard from "./js/pages/Dashboard"
import { Col, Row } from "react-bootstrap";
import AuthRouter from "./AuthRouter";

export const Router = (props) => {
    
    return (
        <Row>
            <Col>
                <Switch>
                    <AuthRouter exact path="/" type="guest">
                        <Home />
                    </AuthRouter>
                    <AuthRouter exact path="/dashboard" type="private">
                        <Dashboard />
                    </AuthRouter>
                </Switch>
            </Col>
        </Row>
    );
}

export default Router;