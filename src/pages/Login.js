import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";
import Swal from "sweetalert2";

export default function Login() {
  // State hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    console.log(email, password);
  }, [email, password]);

  // AUTHENTICATE
  function loginUser(event) {
    event.preventDefault();
    // alert(`You are now logged in`);
    // localStorage.setItem("email", email);
    // setUser(localStorage.getItem("email"));
    // setEmail("");
    // setPassword("");

    fetch(`${process.env.REACT_APP_URI}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.accessToken !== "empty") {
          localStorage.setItem("token", data.accessToken);
          retrieveUserDetails(data.accessToken);
          Swal.fire({
            title: "Login successful",
            icon: "success",
            text: "Enjoy looking for your collectibles",
          });
        } else {
          Swal.fire({
            title: "Incorrect email/password",
            icon: "error",
            text: "Please try again.",
          });
          setPassword("");
        }
      });
    const retrieveUserDetails = (token) => {
      fetch(`${process.env.REACT_APP_URI}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser({ id: data._id, isAdmin: data.isAdmin });
        });
    };
  }

  return user.id !== null ? (
    <Navigate to={"/"} />
  ) : (
    <Container>
      <Row>
        <Col className="col-md-4 col-8 offset-md-4 offset-2">
          <h2>Login</h2>
          <Form className="p-3" onSubmit={loginUser}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!isActive}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
