import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Navmenu from "./navmenu";
function HomeNavbar() {
  return (
    <>
      <Navbar className="navbar  navbar-expand-lg navbar-light ">
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto mx-4  my-2 my-lg-0"
            style={{ maxHeight: "100px", fontSize: "20px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/addrecipe">Add Recipe</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
          <Navmenu />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default HomeNavbar;
