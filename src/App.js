import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TopNavBar from "./components/TopNavBar";
import Home from "./components/HomePage";
import Products from "./components/ProductsPage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import NewAccountPage from "./components/NewAccount";
import AdminPage from "./components/Admin";
import AppointmentsPage from "./components/Appointments";
import NavAppBar from "./components/AppBar";
import Login from "./components/Login";
import AuthContext from "./context/auth-context";
import "./App.css";

function App() {
  const [loggedInFlag, setLoggedInFlag] = useState(false);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [tokenExpiration, setTokenExpiration] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const login = (
    token,
    userId,
    tokenExpiration,
    userFirstName,
    userLastName,
    userEmail
  ) => {
    setToken(token);
    setUserId(userId);
    setUserFirstName(userFirstName);
    setUserLastName(userLastName);
    setUserEmail(userEmail);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    setLoggedInFlag(false);
  };

  return (
    <Router>
      <React.Fragment>
        <AuthContext.Provider
          value={{
            token: token,
            userId: userId,
            login: login,
            logout: logout
          }}
        >
          <TopNavBar />
          <div className="app-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/services" component={ServicesPage} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/new-account" component={NewAccountPage} />
              <Route exact path="/admin" component={AdminPage} />
              {loggedInFlag && (
                <Route
                  exact
                  path="/appointments"
                  component={AppointmentsPage}
                />
              )}

              <Route
                path="/login"
                render={props => (
                  <Login
                    setLoggedInFlag={setLoggedInFlag}
                    setToken={setToken}
                    setUserId={setUserId}
                    setTokenExpiration={setTokenExpiration}
                    setUserFirstName={setUserFirstName}
                    setUserLastName={setUserLastName}
                    setUserEmail={setUserEmail}
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </AuthContext.Provider>
      </React.Fragment>
    </Router>
  );
}

export default App;
