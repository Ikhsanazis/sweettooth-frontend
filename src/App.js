import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

// import pages
import Register from "./pages/Register";
// import Login from "./pages/Login";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import DetailRecipe from "./pages/DetailRecipe";
import AddRecipe from "./pages/AddRecipe";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Editprofile from "./pages/Editprofile";
import Editrecipe from "./pages/Editrecipe";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="/" element={<LandingPage />} />
              <Route
                path="detailrecipe/:recipe_id"
                element={<DetailRecipe />}
              />
              <Route path="search/:keyword" element={<Search />} />
              <Route path="Editprofile" element={<Editprofile />} />
              <Route path="Editrecipe/:recipe_id" element={<Editrecipe />} />
              <Route path="addrecipe" element={<AddRecipe />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
