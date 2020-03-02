import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TopNavBar from "./components/TopNavBar";
import Home from "./components/HomePage";
import Products from "./components/ProductsPage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import NewAccountPage from "./components/NewAccount";
import AdminPage from "./components/Admin";
import AppointmentsPage from "./components/Appointments";

import "./App.css";

function App() {
  return (
    <Router>
      <React.Fragment>
        <TopNavBar />
        <div className="app-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/services" component={ServicesPage} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/new-account" component={NewAccountPage} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/appointments" component={AppointmentsPage} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
