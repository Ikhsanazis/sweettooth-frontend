import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import DetailRecipe from "./pages/DetailRecipe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
          <Route path="LandingPage" element={<LandingPage />} />
          <Route path="DetailRecipe" element={<DetailRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
