import { Fragment, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { connect } from "react-redux";
import { actions as refreshActions } from '../../actions/RefreshActions';
import { actions as rolesActions } from "../../actions/RolesAction";
import Datatable from "../common/Datatable"
import ModalWindow from '../common/ModalWindow';
import RoleDetail from '../details/RoleDetail';

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
            cell: row => <Button variant="link" data-tag="allowRowEvents">{row.id}</Button>
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
                        data={props.items}
                        {...props}
                    />
                </Card.Body>
            </Card>
            <ModalWindow
                show={props.show}
                componentDetail={
                    <RoleDetail
                        item={props.item}
                    />
                }
                {...props}
            />
        </Fragment>
  );
};

const mapStateToProps = state => {
    return {
        isLoading: state.roles && state.roles.isLoading ? state.roles.isLoading : null,
        items: state.roles.items,
        item: state.roles.item,
        total: state.roles.total,
        show: state.roles.showModal,
        idDetail: state.roles.idDetail,
    };
  }
  
const mapDispatchToProps = dispatch => {
    return {
        fetchItems: (orderBy, orderWay, page, perPage) => dispatch(rolesActions.fetchItems(orderBy, orderWay, page, perPage)),
        fetchItem: (id) => dispatch(rolesActions.fetchItem(id)),
        openModalDetail: (id) => dispatch(rolesActions.openModalDetail(id)),
        closeModalDetail: () => dispatch(rolesActions.closeModalDetail()),
        refreshToken: () => dispatch(refreshActions.refreshToken()),
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RolesPresentational);