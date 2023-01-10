import { Container, Nav, Navbar } from "react-bootstrap";

export default function AppNavBar() {
  return (
    <Navbar bg="light" expand="lg" className="vw-100">
      <Container>
        <Navbar.Brand href="#home">Baseball Cards Collectibles</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
