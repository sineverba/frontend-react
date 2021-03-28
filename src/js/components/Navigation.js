import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export class Navigation extends Component {

  logout() {
    localStorage.removeItem('REACT_FE_ACCESS_TOKEN')
  }
  
  render() {
    return (
      <Row>
        <Col>
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item"><Link to="/">Home</Link></li>
            <li className="list-inline-item"><Link to="/accounts">Accounts</Link></li>
            <li className="list-inline-item"><Link to="#" onClick={this.logout}>Logout</Link></li>
          </ul>
        </Col>
      </Row>
    );
  }
}

export default Navigation;