import { Fragment, useState, useEffect } from "react";
import CheckoutCard from "../components/CheckoutCard";

export default function Checkout() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URI}/products/activeProducts`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setProducts(
          data.map((product) => {
            return <CheckoutCard key={product._id} productProp={product} />;
          })
        );
      });
  }, []);
  return <Fragment>{products}</Fragment>;
}
