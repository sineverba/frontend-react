import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBackendApiVersion } from "../actions/index";
import { Container, Row, Col } from "react-bootstrap";

export class Footer extends Component {
  /*constructor(props) {
    super(props);
  }*/

  componentDidMount() {
    this.props.fetchBackendApiVersion();
  }

  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col>
              <p>Backend Api Version: {this.props.apiVersion ? this.props.apiVersion : 'N.D.'}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  return {
    apiVersion: state.apiVersion
  };
}

export default connect(
  mapStateToProps,
  { fetchBackendApiVersion }
)(Footer);