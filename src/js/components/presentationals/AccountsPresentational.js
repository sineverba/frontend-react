import React from 'react';
import { Table } from "react-bootstrap";

const AccountsPresentationals = (props) => {
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
        { props.accountsList ?
          props.accountsList.map(el => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.email}</td>
              <td>{el.created_at}</td>
              <td>{el.updated_at}</td>
            </tr>
          ))
        : null}
      </tbody>
    </Table>
  )
};

export default AccountsPresentationals;