import * as yup from "yup";

const validationSchema = yup.object({
  appointmentTime: yup.string().required("Please select a time.")
});

export default validationSchema;
