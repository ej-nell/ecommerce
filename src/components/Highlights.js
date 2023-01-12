import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../UserContext";

export default function Highlights() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <Row className="mb-3">
        <h2 className="mb-3">Featured Boxes</h2>
        <Col>
          <Card xs={12} md={4}>
            <Card.Img variant="top" src={require("../images/card6.png")} />
            <Card.Body>
              <Card.Title className="mb-3">
                2021-22 PANINI CONTENDERS OPTIC NBA TRADING CARD BOX (HOBBY)
              </Card.Title>
              <Card.Text className="mb-3">
                The 2021-22 Panini Contenders Optic NBA Trading Card Box (Hobby)
                contains 6 cards per pack and 1 pack per box!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card xs={12} md={4}>
            <Card.Img variant="top" src={require("../images/card4.png")} />
            <Card.Body>
              <Card.Title className="mb-3">
                2021-22 PANINI DONRUSS OPTIC NBA TRADING CARD BOX (BLASTER)
              </Card.Title>
              <Card.Text className="mb-3">
                The 2022 Panini Donruss Optic NBA Trading Card Box (Blaster)
                contains 5 cards per pack and 6 packs per box!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card xs={12} md={4}>
            <Card.Img variant="top" src={require("../images/card1.png")} />
            <Card.Body>
              <Card.Title className="mb-3">
                2022-23 PANINI HOOPS NBA TRADING CARD BOX (HOBBY)
              </Card.Title>
              <Card.Text className="mb-3">
                The 2022-23 Panini Hoops NBA Trading Card Box (Hobby) contains 8
                cards per pack and 24 packs per box!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {user.id !== null ? (
        <Button
          as={Link}
          to="/products"
          className="offset-6 mb-5 bg-success border-light"
          variant="primary"
        >
          Shop Now!
        </Button>
      ) : (
        <Button
          as={Link}
          to="/login"
          className="offset-6 mb-5 bg-success border-light"
          variant="primary"
        >
          Shop Now!
        </Button>
      )}
    </Container>
  );
}
