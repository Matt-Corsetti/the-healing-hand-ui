import React, { useState, useRef, useEffect } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

import { Formik, Form, useField, FieldArray, Field } from "formik";
import {
  Grid,
  Paper,
  TextField,
  makeStyles,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Snackbar
} from "@material-ui/core";

import { Alert } from "@material-ui/lab";

import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import MaterialTable from "material-table";

import "./Appointments.css";

import validationSchema from "./validation";

// import { Form, Button, Col } from "react-bootstrap";

// const ADD_APPOINTMENTS = gql`
//   mutation addAppointment(
//     $userEmail: String!
//     $appointmentDate: String!
//     $appointmentTime: String!
//     $appointmentType: String!
//   ) {
//     addAppointment(
//       userEmail: $userEmail
//       appointmentDate: $appointmentDate
//       appointmentTime: $appointmentTime
//       appointmentType: $appointmentType
//     ) {
//       id
//       userEmail
//       appointmentDate
//       appointmentTime
//       appointmentType
//     }
//   }
// `;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const useStylesSelect = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function AppointmentsPage() {
  const [state, setState] = useState({
    columns: [
      { title: "Date", field: "date" },
      { title: "Time", field: "time" },
      { title: "Type", field: "type" }
    ],
    data: [{ date: "2020-03-07", time: "10:00AM", type: "Reflexology" }]
  });

  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const selectClasses = useStylesSelect();

  const [time, setTime] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    const dateString = date.toString();
    console.log(dateString);
  };

  const handleChange = event => {
    setTime(event.target.value);
    console.log(event.target.value);
  };

  const handleAppointmentTypeChange = event => {
    setAppointmentType(event.target.value);
    console.log(event.target.value);
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

  // const [addAppointment] = useMutation(ADD_APPOINTMENTS);

  return (
    <div className="left-container">
      <div className={classes.root}>
        <div className="header-div">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h2>Appointment Dashboard</h2>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>Create Appointment</h2>
              <Formik
                initialValues={{
                  appointmentDate: "",
                  appointmentTimes: [{ time: "9:00AM" }],
                  appointmentType: "",
                  age: ""
                }}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                  const dateString = selectedDate
                    .toISOString()
                    .substring(0, 10);
                  console.log(dateString);
                  // addAppointment({
                  //   variables: {
                  //     userEmail: "test@email.ca",
                  //     appointmentDate: dateString,
                  //     appointmentTime: time,
                  //     appointmentType: appointmentType
                  //   }
                  // });

                  handleClick();

                  setSubmitting(true);

                  console.log(data);

                  setSubmitting(false);

                  resetForm();
                }}
                validationSchema={validationSchema}
              >
                {({ values, errors, isSubmitting, resetForm }) => (
                  <Form>
                    <div>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div className="datePicker-div">
                          <KeyboardDatePicker
                            disableToolbar
                            disablePast
                            name="appointmentDate"
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Choose Appointment Date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                              "aria-label": "change date"
                            }}
                          />
                        </div>

                        <div className="time-select">
                          <FormControl className={selectClasses.formControl}>
                            <InputLabel>Choose Time</InputLabel>
                            <Select
                              value={time}
                              onChange={handleChange}
                              name="appointmentTime"
                            >
                              <MenuItem value="9:00AM">9:00AM</MenuItem>
                              <MenuItem value="10:00AM">10:00AM</MenuItem>
                              <MenuItem value="11:00AM">11:00AM</MenuItem>
                              <MenuItem value="12:00PM">12:00PM</MenuItem>
                              <MenuItem value="1:00PM">1:00PM</MenuItem>
                              <MenuItem value="2:00PM">2:00PM</MenuItem>
                              <MenuItem value="3:00PM">3:00PM</MenuItem>
                              <MenuItem value="4:00PM">4:00PM</MenuItem>
                            </Select>
                          </FormControl>
                        </div>

                        <div className="type-select">
                          <FormControl className={selectClasses.formControl}>
                            <InputLabel>Service</InputLabel>
                            <Select
                              value={appointmentType}
                              onChange={handleAppointmentTypeChange}
                              name="appointmentTime"
                            >
                              <MenuItem value="Reflexology">
                                Reflexology
                              </MenuItem>
                              <MenuItem value="Reiki">Reiki</MenuItem>
                              <MenuItem value="Massage">Massage</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </MuiPickersUtilsProvider>
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
                      <div className="alert-div">
                        <Snackbar
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "center"
                          }}
                          open={open}
                          autoHideDuration={6000}
                          onClose={handleClose}
                        >
                          <Alert onClose={handleClose} severity="success">
                            Appointment Created Succesfully!
                          </Alert>
                        </Snackbar>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>Your Appointments</h2>
              <MaterialTable
                title="Appointments"
                columns={state.columns}
                data={state.data}
                editable={{
                  onRowAdd: newData =>
                    new Promise(resolve => {
                      setTimeout(() => {
                        resolve();
                        setState(prevState => {
                          const data = [...prevState.data];
                          data.push(newData);
                          return { ...prevState, data };
                        });
                      }, 600);
                    }),
                  onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                      setTimeout(() => {
                        resolve();
                        if (oldData) {
                          setState(prevState => {
                            const data = [...prevState.data];
                            data[data.indexOf(oldData)] = newData;
                            return { ...prevState, data };
                          });
                        }
                      }, 600);
                    }),
                  onRowDelete: oldData =>
                    new Promise(resolve => {
                      setTimeout(() => {
                        resolve();
                        setState(prevState => {
                          const data = [...prevState.data];
                          data.splice(data.indexOf(oldData), 1);
                          return { ...prevState, data };
                        });
                      }, 600);
                    })
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AppointmentsPage;
