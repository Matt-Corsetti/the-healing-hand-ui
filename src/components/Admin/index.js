import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { Table } from "react-bootstrap";

const QUERIES = gql`
  {
    getUsers {
      id
      firstName
      lastName
      email
    }
    getAppointments {
      id
      userEmail
      appointmentDate
      appointmentTime
      appointmentType
    }
  }
`;

function AdminPage() {
  const { loading, data } = useQuery(QUERIES);

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
        <br></br>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Email</th>
            <th>Appointment Date</th>
            <th>Appointment Time</th>
            <th>Appointment Type</th>
          </tr>
        </thead>
        {data.getAppointments.map(
          ({
            id,
            userEmail,
            appointmentDate,
            appointmentTime,
            appointmentType
          }) => (
            <tbody>
              <tr key={id}>
                <td>{userEmail}</td>
                <td>{appointmentDate}</td>
                <td>{appointmentTime}</td>
                <td>{appointmentType}</td>
              </tr>
            </tbody>
          )
        )}
      </Table>
    </div>
  );
}

export default AdminPage;
