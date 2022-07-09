import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
