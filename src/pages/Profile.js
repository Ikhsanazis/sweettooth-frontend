import React from "react";
import { Container, Row, Tab, Nav } from "react-bootstrap";
import UserProfile from "../components/molecules/UserProfile";
import Footer2 from "../components/molecules/Footer2";
import Collection from "../components/molecules/Collection";
import HomeNavbar from "../components/molecules/HomeNavbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function App() {
  const [key, setKey] = useState("home");

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <HomeNavbar />
        </Row>
        <Row>
          <div className="userprofile ">
            <UserProfile />
          </div>
        </Row>
        <Row className="mt-3 h-100">
          <div className="">
            <Collection className="tabcollection"/>
          </div>
        </Row>
        <Row>
          <Footer2 />
        </Row>
      </Container>
    </div>
  );
}

export default App;
