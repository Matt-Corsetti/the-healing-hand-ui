import React, { useState } from "react";
import gql from "graphql-tag";
import { Formik, Form, useField } from "formik";
import { TextField, Button } from "@material-ui/core";
import validationSchema from "./validation";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import AuthContext from "../../context/auth-context";

function Login({ setLoggedInFlag, setToken, setUserId, setTokenExpiration }) {
  // const contextType = { AuthContext };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        let requestBody = {
          query: `
            query {
              login(email: "${data.email}", password: "${data.password}") {
                userId
                token
                tokenExpiration
              }
            }
          `
        };

        fetch("http://localhost:4000/graphql", {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(result => result.json())
          .then(async result => {
            console.log(result);
            setToken(result.data.login.token);
            setUserId(result.data.login.userId);
            setTokenExpiration(result.data.login.tokenExpiration);
          })
          .catch(err => {
            console.log(err);
          });

        setSubmitting(true);

        setSubmitting(false);

        resetForm();

        setLoggedInFlag(true);

        alert("You are now logged in");
      }}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <div className="form-container">
            <h2>LOGIN</h2>
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
            <div className="submitBtn-div">
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                type="submit"
                style={{ width: 500 }}
              >
                Login
              </Button>
            </div>
            <div className="submitBtn-div">
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
            <div className="submitBtn-div">
              <Nav.Link as={Link} to="/new-account">
                <Button
                  variant="contained"
                  disabled={isSubmitting}
                  style={{ width: 500 }}
                >
                  Sign-Up
                </Button>
              </Nav.Link>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
