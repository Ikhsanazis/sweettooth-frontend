import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";


// import pages
import Register from "./pages/Register";
// import Login from "./pages/Login";
import Loginexample from "./pages/Loginexample";
import LandingPage from "./pages/LandingPage";
import DetailRecipe from "./pages/DetailRecipe";
import AddRecipe from "./pages/AddRecipe";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="Register" element={<Register />} />
              {/* <Route path="Login" element={<Login />} /> */}
              <Route path="Loginexample" element={<Loginexample />} />
              <Route path="LandingPage" element={<LandingPage />} />
              <Route path="DetailRecipe/:recipe_id" element={<DetailRecipe />} />
              <Route path="AddRecipe" element={<AddRecipe />} />
              <Route path="Profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
