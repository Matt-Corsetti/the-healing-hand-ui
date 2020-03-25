import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import { Formik, Form, useField } from "formik";
import { TextField, Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

// import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

import "./NewAccount.css";

import validationSchema from "./validation";

const SIGN_UP = gql`
  mutation signUp(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signUp(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
      firstName
      lastName
      email
    }
  }
`;

function NewAccountPage() {
  let history = useHistory();

  const [open, setOpen] = useState(false);
  const [openError, setErrorOpen] = useState(false);
  const [signUp] = useMutation(SIGN_UP);

  const MyTextField = ({ label, placeholder, style, type, ...props }) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
      <TextField
        label={label}
        placeholder={placeholder}
        style={style}
        type={type}
        {...field}
        helperText={errorText}
        error={!!errorText}
      />
    );
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleErrorClick = () => {
    setErrorOpen(true);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          let requestBody = {
            query: `
              mutation {
                signUp(firstName: "${data.firstName}", lastName: "${data.lastName}", email: "${data.email}", password: "${data.password}") {
                  id
                  firstName
                  lastName
                  email
                }
              }`
          };

          fetch("http://localhost:4000/graphql", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(response => response.json())
            .then(async response => {
              if (typeof response.errors !== "undefined") {
                console.log(response.errors[0].message);
                handleErrorClick();
                resetForm();
              } else {
                console.log("Success:", response);
                handleClick();
                resetForm();
                history.push("/login");
              }
            })
            .catch(error => {
              console.error("Error:", error);
            });
        }}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <h2>SIGN UP</h2>
            <MyTextField
              label="First Name"
              placeholder="First Name"
              name="firstName"
              type="input"
              style={{ width: 500 }}
            />
            <div className="lastName-div">
              <MyTextField
                label="Last Name"
                placeholder="Last Name"
                name="lastName"
                type="input"
                style={{ width: 500 }}
              />
              <div className="email-div">
                <MyTextField
                  label="Email"
                  placeholder="Email"
                  name="email"
                  type="email"
                  style={{ width: 500 }}
                />
              </div>
              <div className="password-div">
                <MyTextField
                  label="Password"
                  placeholder="Password"
                  name="password"
                  type="password"
                  style={{ width: 500 }}
                />
              </div>
            </div>
            <div className="submitBtn-div">
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                type="submit"
                style={{ width: 500 }}
              >
                Submit
              </Button>
            </div>
            <div className="resetBtn-div">
              <Button
                variant="contained"
                color="secondary"
                disabled={isSubmitting}
                type="reset"
                style={{ width: 500 }}
              >
                Cancel
              </Button>
            </div>
            <div className="alert-div">
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  Account Created Succesfully!
                </Alert>
              </Snackbar>
            </div>
            <div className="alert-div">
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={openError}
                autoHideDuration={6000}
                onClose={handleErrorClose}
              >
                <Alert onClose={handleErrorClose} severity="error">
                  User already exists!
                </Alert>
              </Snackbar>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewAccountPage;
