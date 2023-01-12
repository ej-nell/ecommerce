import { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col, ListGroup } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CheckoutDetails() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const { productId } = useParams();

  const history = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URI}/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
      });
  }, [productId]);

  function checkoutItem(event) {
    event.preventDefault();

    Swal.fire({
      title: "Order in process",
      icon: "success",
      text: "Thank you for shopping, please come again!",
    });
    history("/products");
  }

  return (
    <Container>
      <h1>Checkout</h1>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} className="mt-5">
          <Card className="center border-secondary">
            <Card.Body>
              <Card.Title className="fs-2">{name}</Card.Title>
              <Card.Text className="mb-5">{description}</Card.Text>
              <Card.Text>Price:</Card.Text>
              <Card.Text className="fs-3">{price}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                *Please allow 2-4 business days to process orders*
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                variant="primary"
                type="submit"
                className="bg-success border-light"
                onClick={checkoutItem}
              >
                Buy Now!
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
