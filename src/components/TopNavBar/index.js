import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import {
  NavDropdown,
  Navbar,
  Nav,
  NavItem,
  Form,
  FormControl,
  Button,
  Container,
  Modal
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./TopNavBar.css";

function TopNavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  return (
    <div className="navbar-content">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          The Healing Hand
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavItem eventkey={1} href="/">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </NavItem>
            <NavItem eventkey={2} href="/about">
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </NavItem>
            <NavItem eventkey={3} href="/services">
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
            </NavItem>
            <NavItem eventkey={4} href="/products">
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem eventkey={5} href="/admin">
              <Nav.Link as={Link} to="/admin">
                Admin
              </Nav.Link>
            </NavItem>
            <NavItem eventkey={6} href="/appointments">
              <Nav.Link as={Link} to="/appointments">
                Appointments
              </Nav.Link>
            </NavItem>
          </Nav>
          <Form inline>
            <div className="login-button">
              <Button variant="primary" onClick={handleShow}>
                Login
              </Button>
            </div>
            <div className="modal-content">
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                      ></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Sign-In
                    </Button>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <NavItem
                    onClick={handleClose}
                    eventkey={7}
                    href="/reset-password"
                  >
                    <Nav.Link as={Link} to="/reset-password">
                      Forgot Password?
                    </Nav.Link>
                  </NavItem>
                  <NavItem
                    onClick={handleClose}
                    eventkey={8}
                    href="/new-account"
                  >
                    <Nav.Link as={Link} to="/new-account">
                      New to The Healing Hand?
                    </Nav.Link>
                  </NavItem>
                </Modal.Footer>
              </Modal>
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopNavBar;