import { Row, Col, Container, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import Swal from "sweetalert2";

export default function CreateProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (name !== "" && description !== "" && price !== "" && quantity !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [name, description, price, quantity]);

  function createProduct(event) {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_URI}/products/addProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
        quantity: quantity,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        Swal.fire({
          title: "Create new product successful.",
          icon: "success",
          text: "Thank you for your patience",
        });
        <Navigate to="/products" />;
      });
  }

  return (
    <Container>
      <Row className="center">
        <h2 className="mb-3 offset-md-2 offset-2">Create Product</h2>

        <Col className="col-md-8 col-8 offset-md-2 offset-2">
          <Form className="bg-info p-3" onSubmit={createProduct}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="bg-success border-dark"
              disabled={!isActive}
            >
              Create New Product
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
