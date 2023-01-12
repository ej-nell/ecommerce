import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserProvider } from "./UserContext";

// PAGES IMPORT
import AppNavBar from "./components/AppNavBar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
import AdminDashboard from "./pages/AdminDashboard";
import AllProducts from "./pages/AllProducts";
import CreateProduct from "./pages/CreateProduct";
import Checkout from "./pages/Checkout";
import CheckoutDetails from "./pages/CheckoutDetails";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
  const [user, setUser] = useState({ id: null, isAdmin: false });
  const unSetUser = () => {
    localStorage.clear();
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URI}/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser({ id: data._id, isAdmin: data.isAdmin });
      });
  }, []);

  return (
    <UserProvider value={{ user, setUser, unSetUser }}>
      <Router>
        <AppNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route path="/updateProduct/:productId" element={<UpdateProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/:productId" element={<CheckoutDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
