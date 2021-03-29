import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from "react-redux";
import { actions as pingActions } from "../../actions/PingActions";

export const FooterPresentational = props => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      props.fetch();
      setMounted(true);
    }
  }, [mounted, props])

  return (
    <Row>
        <Col>
            <div className="text-center">
                <p>Backend Api Version: {props.apiVersion ? props.apiVersion : 'N.D.'} - Frontend Version: {props.appVersion ? props.appVersion : 'N.D.'}</p>
            </div>
        </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    apiVersion: state.ping && state.ping.apiVersion ? state.ping.apiVersion : null,
    appVersion: state.ping && state.ping.appVersion ? state.ping.appVersion : null,
    isLoading: state.ping && state.ping.isLoading ? state.ping.isLoading : null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(pingActions.fetchAll())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterPresentational);