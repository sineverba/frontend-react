import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { actions as rolesActions } from "../../actions/RolesAction";

export const RolesPresentational = props => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
        props.fetch();
        setMounted(true);
    }
  }, [mounted, props])

  return (
    <h1>Roles</h1>
  );
};

const mapStateToProps = state => {
    return {
      isLoading: state.roles && state.roles.isLoading ? state.roles.isLoading : null
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetch: () => dispatch(rolesActions.fetchAll())
    }
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RolesPresentational);