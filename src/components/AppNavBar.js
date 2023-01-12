import { useContext, Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import UserContext from "../UserContext";

export default function AppNavBar() {
  const { user } = useContext(UserContext);

  return (
    <Navbar bg="info" expand="lg" className="vw-100 mb-5">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Pristine Paper
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/products">
              Products
            </Nav.Link>
            {user.id !== null ? (
              user.isAdmin ? (
                <Fragment>
                  <Nav.Link as={NavLink} to="/allproducts">
                    All Products
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/adminDashboard">
                    Dashboard
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/logout">
                    Logout
                  </Nav.Link>
                </Fragment>
              ) : (
                <Fragment>
                  <Nav.Link as={NavLink} to="/logout">
                    Logout
                  </Nav.Link>
                </Fragment>
              )
            ) : (
              <Fragment>
                <Nav.Link as={NavLink} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
