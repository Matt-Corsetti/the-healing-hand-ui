import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import "./AdminPage.css";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

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
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box
} from "@material-ui/core";

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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  table: {
    mindWidth: 500,
    padding: theme.spacing(2)
  },
  userTableHeader: {
    textAlign: "center",
    padding: theme.spacing(2)
  }
}));

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
  }
`;

function AdminPage() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { loading, data } = useQuery(QUERIES);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div className="admin-content">
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
                        <IconButton aria-label="delete">
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
                          <IconButton aria-label="delete">
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
          Reports
        </TabPanel>
      </div>
    </div>
  );
}

export default AdminPage;
