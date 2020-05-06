import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBackendApiVersion } from "../../actions/index";
import { Container, Row, Col } from "react-bootstrap";
import FooterPresentational from "../presentationals/FooterPresentational";

export class Footer extends Component {

  componentDidMount() {
    this.props.fetchBackendApiVersion();
  }

  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col>
              <FooterPresentational apiVersion={this.props.apiVersion} frontendVersion={this.props.frontendVersion} />
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  return {
    apiVersion: state.apiVersion,
    frontendVersion: state.frontendVersion
  };
}

export default connect(
  mapStateToProps,
  { fetchBackendApiVersion }
)(Footer);