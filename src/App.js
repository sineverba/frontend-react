import { Container } from 'react-bootstrap';
import Navigation from "./js/components/Navigation";
import { Router } from "./Router";

const App = (props) => (
    <Container>
        <Navigation />
        <Router />  
    </Container>
);

export default App;
