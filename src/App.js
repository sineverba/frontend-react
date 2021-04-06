import { Card, Col, Container, Row } from 'react-bootstrap';
import Navigation from "./js/components/Navigation";
import FooterPresentational from './js/components/presentationals/FooterPresentational';
import { Router } from "./Router";
import { useEffect } from 'react';
import { connect } from "react-redux";
import { actions as loginActions } from './js/actions/LoginActions';
import TopbarPresentational from './js/components/presentationals/TopbarPresentational';

export const App = (props) => {

    useEffect(() => {
        props.checkToken()
    }, [props])

    return (
        props.accessToken ?
            <div id="wrapper">
                <Navigation />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopbarPresentational />
                        <Container fluid>
                            <Router />
                        </Container>
                        <FooterPresentational />
                    </div>
                </div>
            </div>
        :
            <Container>
                <Row className="justify-content-center">
                    <Col md={4}>
                        <Card className="shadow" id="container-login">
                            <Card.Body>
                                <Router />
                            </Card.Body>
                        </Card>
                        <FooterPresentational />
                    </Col>
                </Row>
            </Container>
    );
};

export const mapDispatchToProps = (dispatch) => {
    return {
        checkToken: () => dispatch(loginActions.checkToken())
    }
}

const mapStateToProps = (state) => ({
    accessToken: localStorage.getItem('REACT_FE_ACCESS_TOKEN') ? 
                    localStorage.getItem('REACT_FE_ACCESS_TOKEN') :
                        state.login.accessToken ? state.login.accessToken : null
});
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
