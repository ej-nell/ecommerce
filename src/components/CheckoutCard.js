import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CheckoutCard({ productProp }) {
  const { _id, name, description, price } = productProp;

  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle>Description:</Card.Subtitle>
              <Card.Text>{description}</Card.Text>
              <Card.Subtitle>Price:</Card.Subtitle>
              <Card.Text>PhP {price}</Card.Text>
              <Button variant="primary" className="m-3">
                +
              </Button>
              <Button variant="primary" as={Link} to={`/products/${_id}`}>
                Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
