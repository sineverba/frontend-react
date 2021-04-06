import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { actions as refreshActions } from '../../actions/RefreshActions';
import { actions as pingActions } from "../../actions/PingActions";

export const FooterPresentational = props => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      props.refreshToken();
      props.fetch();
      setMounted(true);
    }
  }, [mounted, props])

  return (
      <footer className="sticky-footer bg-white">
          <div className="container my-auto">
              <p>Backend Api Version: {props.apiVersion ? props.apiVersion : 'N.D.'} - Frontend Version: {props.appVersion ? props.appVersion : 'N.D.'}</p>
          </div>
      </footer>
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
    fetch: () => dispatch(pingActions.fetchAll()),
    refreshToken: () => dispatch(refreshActions.refreshToken()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterPresentational);