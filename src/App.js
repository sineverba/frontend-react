import { Container } from 'react-bootstrap';
import Navigation from "./js/components/Navigation";
import FooterPresentational from './js/components/presentationals/FooterPresentational';
import { Router } from "./Router";
import { useEffect } from 'react';
import { connect } from "react-redux";
import { actions as loginActions } from './js/actions/LoginActions';

export const App = (props) => {

    useEffect(() => {
        props.checkToken()
    }, [props])

    return (

        <Container>
            <Navigation />
            <Router />
            <FooterPresentational />
        </Container>
    );
};

export const mapDispatchToProps = (dispatch) => {
    return {
      checkToken: () => dispatch(loginActions.checkToken())
    }
  }
  
export default connect(null, mapDispatchToProps)(App);
