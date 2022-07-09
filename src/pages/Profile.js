import React from "react";
import { Container, Row } from "react-bootstrap";
import UserProfile from "../components/molecules/UserProfile";
import Footer2 from "../components/molecules/Footer2";
import Collection from "../components/molecules/Collection";
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
        <Row>
          <div class="collection">
            <Collection />
          </div>
        </Row>
        <Row>
          <div class="backlayer4">
            <Footer2 />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
