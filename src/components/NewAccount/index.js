import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import { Formik, Form, useField } from "formik";
import { TextField, Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

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
  const [open, setOpen] = useState(false);
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

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          signUp({
            variables: {
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              password: data.password
            }
          });

          handleClick();

          setSubmitting(true);
          // make async call
          console.log(data);

          setSubmitting(false);

          resetForm();
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
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewAccountPage;
