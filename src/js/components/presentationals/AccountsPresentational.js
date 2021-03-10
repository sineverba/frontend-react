import React from 'react';
import { Table } from "react-bootstrap";
import Loading from "./Loading";

const AccountsPresentationals = (props) => {
  return (
    
    <React.Fragment>

      { props.isLoading ? <Loading /> : '' }

      { props.accountsList && props.accountsList.length > 0 ?

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

      : '' }

    </React.Fragment>
  )
};

export default AccountsPresentationals;