import React from "react";

function HomeNavbar() {
  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="/LandingPage">
          Home
        </a>
        <a className="navbar-brand" href="/AddRecipe">
          Add Recipe
        </a>
        <a className="navbar-brand" href="/Profile">
          Profile
        </a>
      </nav>
    </>
  );
}

export default HomeNavbar;
