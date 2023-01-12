import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";

export default function ProductCard({ productProp }) {
  const { _id, name, description, price } = productProp;
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <Container>
      <Row>
        <Col xs={12} md={4} className="offset-md-4 offset-0">
          <Card border="dark" className="mb-5 p-3">
            <Card.Img variant="top" src={require("../images/card1.png")} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Title className="mb-5">Php {price}</Card.Title>
              <Button
                as={Link}
                to={`/products/${_id}`}
                variant="primary"
                className="mx-3 bg-success border-light"
              >
                See details
              </Button>
              {user.id !== null ? (
                user.isAdmin === false ? (
                  <Button
                    as={Link}
                    to={`/checkout/${_id}`}
                    variant="primary"
                    className="bg-success border-light"
                  >
                    Buy Now!
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    className="bg-success border-light"
                    disabled
                  >
                    Buy Now!
                  </Button>
                )
              ) : (
                <Button
                  as={Link}
                  to="/login"
                  variant="primary"
                  className="bg-success border-light"
                >
                  Buy Now!
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
