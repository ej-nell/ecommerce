import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AllProductsCard({ allProductsProp }) {
  const { _id, name, description, price, quantity } = allProductsProp;

  const history = useNavigate();
  function archiveProduct(event) {
    event.preventDefault();

    // ARCHIVE PRODUCT
    fetch(`${process.env.REACT_APP_URI}/products/archiveProduct/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Status updated successfully",
          icon: "success",
          text: "Thank you!",
        });
        history("/products");
      });
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={4} className="offset-md-4 offset-0">
          <Card border="dark" className="mb-5 p-3">
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Title className="mb-5">Php {price}</Card.Title>
              <Card.Title className="mb-5">Quantity: {quantity}</Card.Title>
              <Button
                as={Link}
                to={`/updateProduct/${_id}`}
                variant="primary"
                className="mx-3 bg-success border-light"
              >
                Update
              </Button>
              <Button
                variant="primary"
                className="bg-success border-light"
                onClick={archiveProduct}
              >
                Disable
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
