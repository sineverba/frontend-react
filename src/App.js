import { Container } from 'react-bootstrap';
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
    );
};

export const mapDispatchToProps = (dispatch) => {
    return {
      checkToken: () => dispatch(loginActions.checkToken())
    }
  }
  
export default connect(null, mapDispatchToProps)(App);
