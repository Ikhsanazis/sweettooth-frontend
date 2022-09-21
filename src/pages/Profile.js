import React from "react";
import { Container, Row } from "react-bootstrap";
import UserProfile from "../components/molecules/UserProfile";
import Footer2 from "../components/molecules/Footer2";
import Collection from "../components/organism/Collection";
import HomeNavbar from "../components/molecules/HomeNavbar";

function App() {
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
            <Collection className="tabcollection" />
          </div>
        </Row>
        <Footer2 />
      </Container>
    </div>
  );
}

export default App;
