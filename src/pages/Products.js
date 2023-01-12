import { Fragment, useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URI}/products/activeProducts`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setProducts(
          data.map((product) => {
            return <ProductCard key={product._id} productProp={product} />;
          })
        );
      });
  }, []);

  return <Fragment>{products}</Fragment>;
}
