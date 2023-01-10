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
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [user, setUser] = useState({ id: null, isAdmin: false });
  const unSetUser = () => {
    localStorage.clear();
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <UserProvider value={{ user, setUser, unSetUser }}>
      <Router>
        <AppNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
