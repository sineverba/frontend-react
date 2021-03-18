import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import Loading from "./Loading";
import { connect } from "react-redux";
import { actions as accountsAction } from "../../actions/AccountsAction";

export const AccountsPresentational = props => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      props.fetch();
      setMounted(true);
    }
  }, [mounted, props])

  return (
    <React.Fragment>
      { props.isLoading ? <Loading /> : '' }
      {
        props.accountsList && props.accountsList.length > 0 ?
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Created at</th>
                <th>Updated at</th>
              </tr>
            </thead>
            <tbody>
              { props.accountsList.map(el => (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.email}</td>
                    <td>{el.created_at}</td>
                    <td>{el.updated_at}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        :
          ''
      }
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    accountsList: state && state.accounts && state.accounts.accountsList && state.accounts.accountsList.data ? state.accounts.accountsList.data : null,
    isLoading: state.accounts.isLoading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(accountsAction.fetchAll())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsPresentational);