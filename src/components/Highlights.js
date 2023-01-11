import { Row, Col, Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export default function Highlights() {
  return (
    <Row className="mb-5">
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
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
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
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
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
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
