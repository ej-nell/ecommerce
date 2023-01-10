import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Fragment>
      <h2>Page not found.</h2>
      <h5>Go back to </h5> <Link to="/">homepage.</Link>
    </Fragment>
  );
}
