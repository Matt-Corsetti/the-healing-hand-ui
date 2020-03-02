import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

import "./Appointments.css";

import { Form, Button, Col } from "react-bootstrap";

const ADD_APPOINTMENTS = gql`
  mutation addAppointment(
    $userEmail: String!
    $appointmentDate: String!
    $appointmentTime: String!
    $appointmentType: String!
  ) {
    addAppointment(
      userEmail: $userEmail
      appointmentDate: $appointmentDate
      appointmentTime: $appointmentTime
      appointmentType: $appointmentType
    ) {
      id
      userEmail
      appointmentDate
      appointmentTime
      appointmentType
    }
  }
`;

function AppointmentsPage() {
  const [userEmail, setUserEmail] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentType, setAppointmentType] = useState("");

  const [addAppointment] = useMutation(ADD_APPOINTMENTS);

  return (
    <div className="form-container">
      <Form
        onSubmit={e => {
          e.preventDefault();
          addAppointment({
            variables: {
              userEmail: userEmail,
              appointmentDate: appointmentDate,
              appointmentTime: appointmentTime,
              appointmentType: appointmentType
            }
          });
        }}
      >
        <Form.Row>
          <Form.Group as={Col} md="12">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
              placeholder="Email"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12">
            <Form.Label>Appointment Date</Form.Label>
            <Form.Control
              required
              type="text"
              value={appointmentDate}
              onChange={e => setAppointmentDate(e.target.value)}
              placeholder="Appointment Date"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12">
            <Form.Label>Appointment Time</Form.Label>
            <Form.Control
              required
              type="text"
              value={appointmentTime}
              onChange={e => setAppointmentTime(e.target.value)}
              placeholder="Appointment Time"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12">
            <Form.Label>Appointment Type</Form.Label>
            <Form.Control
              required
              type="text"
              value={appointmentType}
              onChange={e => setAppointmentType(e.target.value)}
              placeholder="Appointment Type"
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <div className="btn-submit">
            <Button type="submit">Save</Button>
          </div>
          <div className="btn-cancel">
            <Button variant="danger ">Cancel</Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default AppointmentsPage;
