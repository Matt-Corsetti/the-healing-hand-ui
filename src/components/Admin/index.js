import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { Table } from "react-bootstrap";

const GET_USERS = gql`
  {
    getUsers {
      id
      firstName
      lastName
      email
    }
  }
`;

function AdminPage() {
  const { loading, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {data.getUsers.map(({ id, firstName, lastName, email }) => (
          <tbody>
            <tr key={id}>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default AdminPage;
