import { Fragment, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { connect } from "react-redux";
import { actions as refreshActions } from '../../actions/RefreshActions';
import { actions as rolesActions } from "../../actions/RolesAction";
import Datatable from "../common/Datatable"

export const RolesPresentational = props => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
        props.refreshToken();
        setMounted(true);
    }
  }, [mounted, props])


    const columns = [
        {
            name: 'ID',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Role',
            selector: 'role',
            sortable: true,
        },
        {
            name: '# of users',
            cell: row => row.users.length
        },
        {
            name: 'Created at',
            sortable: true,
            selector: 'created_at',
            cell: row => new Date(row.created_at).toLocaleDateString()
        }
    ];

  return (
        <Fragment>
            <h1 className="h3 mb-4 text-gray-800">Roles</h1>
            <Card>
                <Card.Body>
                    <Datatable
                        columns={columns}
                        data={props.roles}
                        {...props}
                    />
                </Card.Body>
            </Card>
        </Fragment>
  );
};

const mapStateToProps = state => {
    return {
      isLoading: state.roles && state.roles.isLoading ? state.roles.isLoading : null,
      roles: state.roles.roles,
      total: state.roles.total,
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetch: (orderBy, orderWay, page, perPage) => dispatch(rolesActions.fetchAll(orderBy, orderWay, page, perPage)),
      refreshToken: () => dispatch(refreshActions.refreshToken()),
    }
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RolesPresentational);