import React, { useState } from "react";

import "./NewAccount.css";

import { Form, Button, Col } from "react-bootstrap";

function NewAccountPage() {
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [
    confirmPasswordErrorMessage,
    setConfirmPasswordErrorMessage
  ] = useState("");

  const handleSubmit = event => {
    const form = event.currentTarget;

    alert(passwordErrorMessage);
    if (password !== confirmPassword) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="form-container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>First Name</Form.Label>
            <Form.Control required type="text" placeholder="First Name" />
            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              First Name is Required
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Last Name</Form.Label>
            <Form.Control required type="text" placeholder="Last Name" />
            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Last Name is Required
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustomEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              tpye="email"
              placeholder="name@example.com"
            />
            <Form.Control.Feedback type="invalid">
              Please Enter a Valid Email
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustomPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {passwordErrorMessage}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group
            as={Col}
            md="12"
            controlId="validationCustomConfirmPassword"
          >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type="password"
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {confirmPasswordErrorMessage}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <div className="btn-submit">
            <Button type="submit">Sign-Up</Button>
          </div>
          <div className="btn-cancel">
            <Button variant="danger ">Cancel</Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default NewAccountPage;