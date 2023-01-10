import { Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Row className="text-center my-3">
      <Col>
        <h1>Baseball Cards Collectibles</h1>
        <Button variant="primary" href="/products">
          See more products
        </Button>
      </Col>
    </Row>
  );
}
