import { Container } from 'react-bootstrap';
import Navigation from "./js/components/Navigation";
import FooterPresentational from './js/components/presentationals/FooterPresentational';
import { Router } from "./Router";

const App = (props) => (
    <Container>
        <Navigation />
        <Router />
        <FooterPresentational />
    </Container>
);

export default App;
