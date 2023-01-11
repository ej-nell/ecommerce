import { Container } from "react-bootstrap";
import { Fragment } from "react";

// COMPONENTS IMPORT
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Container>
        <Highlights />
      </Container>
    </Fragment>
  );
}
