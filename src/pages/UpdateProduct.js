import { Row, Col, Container, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

export default function UpdateProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const { productId } = useParams();
  const history = useNavigate();

  function updateProduct(event) {
    event.preventDefault();

    // UPDATE PRODUCT
    fetch(`${process.env.REACT_APP_URI}/products/updateProduct/${productId}`, {
      method: "PUT",
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
        if (data) {
          Swal.fire({
            title: "Update product successful",
            icon: "success",
            text: "Thank you!",
          });
          history("/products");
        } else {
          Swal.fire({
            title: "Update failed",
            icon: "error",
            text: "Try again!",
          });
        }
      });
  }
  return (
    <Container>
      <Row className="center">
        <h2 className="mb-3 offset-md-2 offset-2">Update product</h2>

        <Col className="col-md-8 col-8 offset-md-2 offset-2">
          <Form className="bg-info p-3" onSubmit={updateProduct}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
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
                placeholder="Quantity"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="bg-success border-dark"
            >
              Update Product
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
