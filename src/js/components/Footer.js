import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const mapStateToProps = state => {
  return { apiVersion: state.apiVersion };
}

const ConnectedFooter = ({ apiVersion }) => (
  
  <footer>
    <Container>
      <Row>
        <Col>
          <p>Backend Api Version: {apiVersion ? apiVersion : 'N.D.'}</p>
        </Col>
      </Row>
    </Container>
  </footer>
  
);

const Footer = connect(mapStateToProps)(ConnectedFooter);

export default Footer;