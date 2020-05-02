import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAccountsList } from "../actions/index";
import { Table } from "react-bootstrap";

export class Accounts extends Component {

  componentDidMount() {
    this.props.fetchAccountsList();
  }

  render() {
    return (
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
          { this.props.accountsList ?
          
            this.props.accountsList.map(el => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.email}</td>
                <td>{el.created_at}</td>
                <td>{el.updated_at}</td>
              </tr>
            ))
          : ''}
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    accountsList: state.accountsList
  };
}

export default connect(
  mapStateToProps,
  { fetchAccountsList }
)(Accounts);