import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import UserContext from "../UserContext";

export default function Register() {
  // State hooks to store values of the input field from our user
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isActive, setIsActive] = useState(false);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (email !== "" && password1 !== "" && password2 !== "") {
      if (password1 === password2) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }, [email, password1, password2]);

  function registerUser(event) {
    event.preventDefault();
    alert(`Congratulations! Registration successful.`);
    setEmail("");
    setPassword1("");
    setPassword2("");

    localStorage.setItem("email", email);
    setUser(localStorage.getItem("email"));
  }

  return user.id !== null ? (
    <Navigate to="/" />
  ) : (
    <Container>
      <Row>
        <Col className="col-md-4 col-8 offset-md-4 offset-2">
          <Form className="bg-secondary p-3" onSubmit={registerUser}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password1}
                onChange={(event) => setPassword1(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password2}
                onChange={(event) => setPassword2(event.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!isActive}>
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
