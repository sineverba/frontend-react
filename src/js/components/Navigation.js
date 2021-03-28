import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { actions as loginActions } from "../actions/LoginActions";

export const Navigation = (props) => {

  const logout = (e) => {
    e.preventDefault();
    props.logout();
  }

  return (
    <Row>
      <Col>
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item"><Link to="/">Home</Link></li>
          <li className="list-inline-item"><Link to="/accounts">Accounts</Link></li>
          {
            props.accessToken &&
            <li className="list-inline-item"><Link to="#" onClick={logout}>Logout</Link></li>
          }
        </ul>
      </Col>
    </Row>
  );
}

export const mapStateToProps = (state) => {
  return {
    accessToken: state.login.accessToken ? state.login.accessToken : null
  };
}

export const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(loginActions.logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);