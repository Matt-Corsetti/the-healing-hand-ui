import React, { useState } from "react";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";
import { Switch, Route, Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import {
  NavDropdown,
  Navbar,
  Nav,
  NavItem,
  Container,
  Modal,
  Form,
  Button
} from "react-bootstrap";

import { AccountCircle } from "@material-ui/icons";
import { Menu, MenuItem, IconButton } from "@material-ui/core";

import "./TopNavBar.css";
import HealingHandLogo from "../../img/HealingHandTransparent.png";

const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`;

function TopNavBar() {
  const [show, setShow] = useState(false);
  const [runLogin, { loading, error, data }] = useLazyQuery(LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <div className="navbar-content">
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand as={Link} to="/">
                <img
                  alt=""
                  src={HealingHandLogo}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />{" "}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <NavItem eventkey={1} href="/">
                    <Nav.Link as={Link} to="/">
                      <div className="nav-item-font">Home</div>
                    </Nav.Link>
                  </NavItem>
                  <NavItem eventkey={2} href="/about">
                    <Nav.Link as={Link} to="/about">
                      <div className="nav-item-font">About</div>
                    </Nav.Link>
                  </NavItem>
                  <NavItem eventkey={3} href="/services">
                    <Nav.Link as={Link} to="/services">
                      <div className="nav-item-font">Services</div>
                    </Nav.Link>
                  </NavItem>
                  <NavItem eventkey={4} href="/products">
                    <Nav.Link as={Link} to="/products">
                      <div className="nav-item-font">Products</div>
                    </Nav.Link>
                  </NavItem>
                </Nav>
                <Nav>
                  <NavItem eventkey={5} href="/admin">
                    {!context.token && <div></div>}
                    {context.adminToken && (
                      <Nav.Link as={Link} to="/admin">
                        <div className="nav-item-font">Admin</div>
                      </Nav.Link>
                    )}
                  </NavItem>
                  {!context.token && <div></div>}
                  {context.token && (
                    <NavItem eventkey={6} href="/appointments">
                      <Nav.Link as={Link} to="/appointments">
                        <div className="nav-item-font">Appointments</div>
                      </Nav.Link>
                    </NavItem>
                  )}
                </Nav>
                <Form inline>
                  <div className="login-button">
                    {!context.token && (
                      <Nav.Link as={Link} to="/login">
                        <Button variant="primary">Login</Button>
                      </Nav.Link>
                    )}
                    {context.token && (
                      <div>
                        <IconButton
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleMenu}
                          color="secondary"
                        >
                          <AccountCircle />
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                          }}
                          open={open}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Profile</MenuItem>
                          <MenuItem onClick={context.logout}>Sign-Out</MenuItem>
                        </Menu>
                      </div>
                    )}
                  </div>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default TopNavBar;
