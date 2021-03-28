import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export const Navigation = (props) => {

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('REACT_FE_ACCESS_TOKEN')
  }

  return (
    <Row>
      <Col>
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item"><Link to="/">Home</Link></li>
          <li className="list-inline-item"><Link to="/accounts">Accounts</Link></li>
          <li className="list-inline-item"><Link to="#" onClick={logout}>Logout</Link></li>
        </ul>
      </Col>
    </Row>
  );
}

export default Navigation;