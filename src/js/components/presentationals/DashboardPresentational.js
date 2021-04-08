import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions as statsActions } from '../../actions/StatsActions';
import { actions as refreshActions } from '../../actions/RefreshActions';
import Loading from '../common/Loading';
import Kpi from "../common/Kpi";
import { Row } from 'react-bootstrap';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export const DashboardPresentational = props => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
        props.refreshToken();
        props.fetch();
        setMounted(true);
    }
  }, [mounted, props])

  return (
      <React.Fragment>
          <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>
          {
              props.isLoading ?

                  <Loading />
              :
                    <Row className="d-flex justify-content-center kpi-container">
                        <Kpi
                            title='Users'
                            value={props.users}
                            gradient='primary'
                            icon={faUsers}
                        />
                        <Kpi
                            title='Roles'
                            value={props.roles}
                            gradient='success'
                            icon={faUsers}
                        />
                    </Row>
          }
      </React.Fragment>
  );
};

const mapStateToProps = state => {
    return {
        isLoading: state.stats && state.stats.isLoading ? state.stats.isLoading : false,
        users: state.stats.users,
        roles: state.stats.roles,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetch: () => dispatch(statsActions.fetchItems()),
        refreshToken: () => dispatch(refreshActions.refreshToken()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardPresentational);