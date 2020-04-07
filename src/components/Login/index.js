import React, { useState } from "react";
import gql from "graphql-tag";
import { Formik, Form, useField } from "formik";
import { TextField, Button } from "@material-ui/core";
import validationSchema from "./validation";
import "./LoginPage.css";
import { Link, useHistory } from "react-router-dom";
import { Nav } from "react-bootstrap";
import AuthContext from "../../context/auth-context";

function Login({
  setLoggedInFlag,
  setToken,
  setUserId,
  setTokenExpiration,
  setUserFirstName,
  setUserLastName,
  setUserEmail,
  setAdminFlag,
  setAdminToken
}) {
  // const contextType = { AuthContext };

  let history = useHistory();
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
                adminId
                companyRole
                token
                adminToken
                tokenExpiration
                firstName
                lastName
                email
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
          .then(response => response.json())
          .then(async response => {
            if (typeof response.errors !== "undefined") {
              console.log(response.errors[0].message);
              resetForm();
              alert(
                "Make sure you have entered the correct email and password. If you do not have an account please press the 'Sign-Up button."
              );
            } else {
              console.log("Success", response);
              console.log(response.data.login.userId);
              if (response.data.login.userId == null) {
                setToken(response.data.login.token);
                setAdminToken(response.data.login.adminToken);
                setAdminFlag(true);
                setLoggedInFlag(true);
                alert("You are now logged in");
                history.push("/");
              } else {
                setToken(response.data.login.token);
                setUserId(response.data.login.userId);
                setTokenExpiration(response.data.login.tokenExpiration);
                setUserFirstName(response.data.login.firstName);
                setUserLastName(response.data.login.lastName);
                setUserEmail(response.data.login.email);
                resetForm();
                setLoggedInFlag(true);
                alert("You are now logged in");
                history.push("/");
              }
            }
          })
          .catch(err => {
            console.log("Error:", err);
          });
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
