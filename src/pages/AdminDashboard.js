import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Row, Col, Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import UserContext from "../UserContext";

export default function AdminDashboard() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <h1>Admin Dashboard</h1>
      <Button
        as={Link}
        to="/createProduct"
        variant="primary"
        type="submit"
        className="bg-success border-light mt-3 mb-5"
      >
        Create New Product
      </Button>
    </Container>
  );
}
