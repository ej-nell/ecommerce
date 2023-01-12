import { useState, useEffect, useContext } from "react";
import { Container, Card, Button, Row, Col, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import UserContext from "../UserContext";

export default function ProductDetails() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const { user } = useContext(UserContext);

  const { productId } = useParams();
  // const history = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URI}/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
      });
  }, [productId]);

  return (
    <Container>
      <Row>
        <h2>Product Details</h2>
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
              <ListGroup.Item>*All Sales Final*</ListGroup.Item>
              <ListGroup.Item>
                *Limited to 5 Boxes Per Transaction*
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {user.isAdmin ? (
                <Button
                  as={Link}
                  to={`/checkout/${productId}`}
                  variant="primary"
                  className="bg-success border-light"
                  disabled
                >
                  Go to checkout page
                </Button>
              ) : (
                <Button
                  as={Link}
                  to={`/checkout/${productId}`}
                  variant="primary"
                  className="bg-success border-light"
                >
                  Go to checkout page
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
