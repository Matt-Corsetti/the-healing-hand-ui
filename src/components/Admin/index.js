import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useHistory } from "react-router-dom";

import "./AdminPage.css";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import SaveIcon from "@material-ui/icons/Save";

import PersonIcon from "@material-ui/icons/Person";

import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Tabs,
  Tab,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  Icon,
  Button
} from "@material-ui/core";

import nodemailer from "nodemailer";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function deleteAppointment(id) {
  const requestBody = {
    query: `
      mutation {
        deleteAppointment(id: "${id}"){
          deletedId
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
      } else {
        console.log("Success", response);
        alert("Appointment Deleted");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

function deleteUser(id) {
  const requestBody = {
    query: `
      mutation {
        deleteUser(adminId: "${id}"){
          deletedId
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
      } else {
        console.log("Success", response);
        alert("User Deleted");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

function deleteAdmin(adminId) {
  const requestBody = {
    query: `
      mutation {
        deleteAdmin(id: "${adminId}") {
          deletedId
        }
      }`
  };

  fetch("http://localhost:4000/graphql", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "applicaiton/json"
    }
  })
    .then(response => response.json())
    .then(async response => {
      if (typeof response.errors !== "undefined") {
        console.log(response.errors[0].message);
      } else {
        console.log("Success", response);
        alert("Admin Deleted");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  header: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: "center"
  },
  table: {
    mindWidth: 500,
    padding: theme.spacing(2)
  },
  userTableHeader: {
    textAlign: "center",
    padding: theme.spacing(2)
  },
  title: {
    fontSize: 20,
    textAlign: "center"
  },
  content: {
    textAlign: "center"
  },
  contentButton: {
    justifyContent: "center"
  },
  cardBackground: {
    backgroundColor: "#e5e5e5",
    minWidth: "100px"
  }
}));

function totalApps() {
  const totalApps = document.getElementById("totalNumberOfApps").innerHTML;
  let d = new Date();
  const rows = [
    ["Total Number of Appointments", "Date Report Generated"],
    [totalApps, d]
  ];

  let csvContent =
    "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "totalAppointments.csv");
  document.body.appendChild(link);

  link.click();
}

function totalNumUsers() {
  const totalApps = document.getElementById("totalNumUsers").innerHTML;
  let d = new Date();
  const rows = [
    ["Total Number of Users", "Date Report Generated"],
    [totalApps, d]
  ];

  let csvContent =
    "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "totalUsers.csv");
  document.body.appendChild(link);

  link.click();
}

function totalNumReflex() {
  const totalApps = document.getElementById("totalReflex").innerHTML;
  let d = new Date();
  const rows = [
    ["Total Number of Reflexology Appointments", "Date Report Generated"],
    [totalApps, d]
  ];

  let csvContent =
    "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "totalReflexApps.csv");
  document.body.appendChild(link);

  link.click();
}

function totalNumReiki() {
  const totalApps = document.getElementById("totalReiki").innerHTML;
  let d = new Date();
  const rows = [
    ["Total Number of Reiki Appointments", "Date Report Generated"],
    [totalApps, d]
  ];

  let csvContent =
    "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "totalReikiApps.csv");
  document.body.appendChild(link);

  link.click();
}

function totalNumMassage() {
  const totalApps = document.getElementById("totalMassage").innerHTML;
  let d = new Date();
  const rows = [
    ["Total Number of Massage Appointments", "Date Report Generated"],
    [totalApps, d]
  ];

  let csvContent =
    "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "totalMassageApps.csv");
  document.body.appendChild(link);

  link.click();
}

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
    getAdmins {
      id
      adminEmail
      companyRole
    }
    getTotalUsers {
      totalUsers
    }
    getTotalAppointments {
      totalNumberOfApps
    }
    getTotalReflexology {
      totalReflexologyApps
    }
    getTotalMassage {
      totalMassageApps
    }
    getTotalReiki {
      totalReikiApps
    }
  }
`;

function AdminPage() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { loading, data } = useQuery(QUERIES);
  const [totalAppointments, setTotalAppointments] = useState("");
  // const anObj = Object.values(data.getTotalUsers);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div className="admin-content">
      <div className="admin-header"></div>
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="simple tabs example"
          centered
        >
          <Tab label="Users" {...a11yProps(0)} />
          <Tab label="Appointments" {...a11yProps(1)} />
          <Tab label="Reports" {...a11yProps(2)} />
          <Tab label="Site Admins" {...a11yProps(3)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Grid item className={classes.table} xs={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="Users">
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Delete User</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.getUsers.map(({ id, firstName, lastName, email }) => (
                    <TableRow key={id}>
                      <TableCell>{firstName}</TableCell>
                      <TableCell>{lastName}</TableCell>
                      <TableCell>{email}</TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="delete"
                          onClick={deleteUser.bind(this, id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid item className={classes.table} xs={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="Users">
                <TableHead>
                  <TableRow>
                    <TableCell>User Email</TableCell>
                    <TableCell>Appointment Date</TableCell>
                    <TableCell>Appointment Time</TableCell>
                    <TableCell>Appointment Type</TableCell>
                    <TableCell align="right">Send Reminder</TableCell>
                    <TableCell align="right">Edit Appointment </TableCell>
                    <TableCell align="right">Cancel Appointment</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.getAppointments.map(
                    ({
                      id,
                      userEmail,
                      appointmentDate,
                      appointmentTime,
                      appointmentType
                    }) => (
                      <TableRow key={id}>
                        <TableCell>{userEmail}</TableCell>
                        <TableCell>{appointmentDate}</TableCell>
                        <TableCell>{appointmentTime}</TableCell>
                        <TableCell>{appointmentType}</TableCell>
                        <TableCell align="right">
                          <IconButton aria-label="delete">
                            <SendIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell align="right">
                          <IconButton aria-label="delete">
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell align="right">
                          <IconButton
                            aria-label="delete"
                            onClick={deleteAppointment.bind(this, id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container justify="center" alignItems="center" spacing={3}>
            <Grid item xs={12} sm={2}>
              <Card className={classes.cardBackground}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textPrimary"
                    gutterBottom
                  >
                    Total Appointments
                  </Typography>
                  {data.getUsers.map.count}
                  <Typography
                    className={classes.content}
                    variant="h2"
                    component="h2"
                  >
                    {Object.entries(data.getTotalAppointments).map(
                      ([key, value]) => {
                        return (
                          <span id="totalNumberOfApps">
                            {data.getTotalAppointments[key]}
                          </span>
                        );
                      }
                    )}
                  </Typography>
                </CardContent>
                <CardActions className={classes.contentButton}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                    onClick={totalApps}
                  >
                    Save As CSV
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Card className={classes.cardBackground}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textPrimary"
                    gutterBottom
                  >
                    Total Users
                  </Typography>
                  <Typography
                    className={classes.content}
                    variant="h2"
                    component="h2"
                  >
                    {Object.entries(data.getTotalUsers).map(([key, value]) => {
                      return (
                        <span id="totalNumUsers">
                          {data.getTotalUsers[key]}
                        </span>
                      );
                    })}
                  </Typography>
                </CardContent>

                <CardActions className={classes.contentButton}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                    onClick={totalNumUsers}
                  >
                    Save As CSV
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Card className={classes.cardBackground}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textPrimary"
                    gutterBottom
                  >
                    Reflexology Appointments
                  </Typography>
                  {data.getUsers.map.count}
                  <Typography
                    className={classes.content}
                    variant="h2"
                    component="h2"
                  >
                    {Object.entries(data.getTotalReflexology).map(
                      ([key, value]) => {
                        return (
                          <span id="totalReflex">
                            {data.getTotalReflexology[key]}
                          </span>
                        );
                      }
                    )}
                  </Typography>
                </CardContent>
                <CardActions className={classes.contentButton}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                    onClick={totalNumReflex}
                  >
                    Save As CSV
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Card className={classes.cardBackground}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textPrimary"
                    gutterBottom
                  >
                    Reiki Appointments
                  </Typography>
                  {data.getUsers.map.count}
                  <Typography
                    className={classes.content}
                    variant="h2"
                    component="h2"
                  >
                    {Object.entries(data.getTotalReiki).map(([key, value]) => {
                      return (
                        <span id="totalReiki">{data.getTotalReiki[key]}</span>
                      );
                    })}
                  </Typography>
                </CardContent>
                <CardActions className={classes.contentButton}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                    onClick={totalNumReiki}
                  >
                    Save As CSV
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Card className={classes.cardBackground}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textPrimary"
                    gutterBottom
                  >
                    Massage Appointments
                  </Typography>
                  {data.getUsers.map.count}
                  <Typography
                    className={classes.content}
                    variant="h2"
                    component="h2"
                  >
                    {Object.entries(data.getTotalMassage).map(
                      ([key, value]) => {
                        return (
                          <span id="totalMassage">
                            {data.getTotalMassage[key]}
                          </span>
                        );
                      }
                    )}
                  </Typography>
                </CardContent>
                <CardActions className={classes.contentButton}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                    onClick={totalNumMassage}
                  >
                    Save As CSV
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid item className={classes.table} xs={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="Site Admins">
                <TableHead>
                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>Company Role</TableCell>
                    <TableCell>Delete Admin</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.getAdmins.map(
                    ({ adminId, adminEmail, companyRole }) => (
                      <TableRow key={adminId}>
                        <TableCell>{adminEmail}</TableCell>
                        <TableCell>{companyRole}</TableCell>
                        <TableCell>
                          <IconButton
                            aria-label="delete"
                            onClick={deleteAdmin.bind(this, adminId)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </TabPanel>
      </div>
    </div>
  );
}

export default AdminPage;
