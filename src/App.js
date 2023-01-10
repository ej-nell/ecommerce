import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES IMPORT
import Home from "./pages/Home";
import AppNavBar from "./components/AppNavBar";

function App() {
  return (
    <Fragment>
      <AppNavBar />
      <Home />
    </Fragment>
  );
}

export default App;
