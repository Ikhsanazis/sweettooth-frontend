import React from "react";

function HomeNavbar() {
  return (
    <>
      <nav class="navbar  navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="/LandingPage">
          Home
        </a>
        <a class="navbar-brand" href="/AddRecipe">
          Add Recipe
        </a>
        <a class="navbar-brand" href="/Profile">
          Profile
        </a>
      </nav>
    </>
  );
}

export default HomeNavbar;
