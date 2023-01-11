import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
// import { Link } from "react-router-dom";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <Row className="text-center mt-1 mb-5">
        <Col>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://assets.paniniamerica.net/banners/159881080463b85ce53356a7.18982636.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://assets.paniniamerica.net/banners/74173516763b85ea680dda5.22007467.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://assets.paniniamerica.net/banners/84559738063b720b2114698.59641392.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          {/* <Button variant="primary" href="/products">
          See more products
        </Button> */}
        </Col>
      </Row>
    </Container>
  );
}
