import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
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
            cell: row => new Date(row.created_at).toLocaleDateString()
        }
    ];

  return (
      <DataTable
          columns={columns}
          data={props.roles}
      />
  );
};

const mapStateToProps = state => {
    return {
      isLoading: state.roles && state.roles.isLoading ? state.roles.isLoading : null,
      roles: state.roles.roles
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