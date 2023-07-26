import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "./components";
import { HomePage, ProductDetailsPage } from "./containers";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || ""}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ProductDetailsPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
