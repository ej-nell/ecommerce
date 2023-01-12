import { useEffect, useState, Fragment } from "react";
// import { Navigate } from "react-router-dom";
// import { Row, Col, Container, Button, Table } from "react-bootstrap";

// import UserContext from "../UserContext";
import AllProductsCard from "../components/AllProductsCard";

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URI}/products/allProducts`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllProducts(
          data.map((product) => {
            return (
              <AllProductsCard key={product._id} allProductsProp={product} />
            );
          })
        );
      });
  }, []);

  return <Fragment>{allProducts}</Fragment>;
}
