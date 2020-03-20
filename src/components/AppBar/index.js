import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Home from "../HomePage";
import AboutPage from "../AboutPage";
import ServicesPage from "../ServicesPage";
import AdminPage from "../Admin";
import AppointmentsPage from "../Appointments";
import Products from "../ProductsPage";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
  Tabs,
  Tab,
  Box
} from "@material-ui/core";
import { MenuIcon } from "@material-ui/icons";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
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

// function a11yProps(index) {
//   return {
//     id: `nav-tab-${index}`,
//     "aria-controls": `nav-tabpanel-${index}`
//   };
// }

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function NavAppBar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <AppBar position="static">
          <Typography variant="h6" className={classes.title}>
            The Healing Hand
          </Typography>
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <Tab label="Home" href="/" component={Link} />
            <Tab label="About" href="/about" component={Link} />
            <Tab label="Services " href="/services" component={Link} />
            <Tab label="Products" href="/products" component={Link} />
            <Tab label="Admin" href="/admin" component={Link} />
            <Tab label="Appointments" href="/appointments" component={Link} />
          </Tabs>
          <Button color="inherit">Login</Button>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/appointments" component={AppointmentsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default NavAppBar;
