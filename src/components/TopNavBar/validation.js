import * as yup from "yup";
import React from "react";

const validationSchema = yup.object({
  email: yup
    .string()
    .required("You must enter an email.")
    .email("Please enter a valid email."),
  password: yup
    .string()
    .required("A password is required.")
    .min(8, "Your password must be at least 8 characters in length.")
    .max(50, "Your password must not exceed 50 characters.")
});

export default validationSchema;
