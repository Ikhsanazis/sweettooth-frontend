import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderText from "../components/atoms/HeaderText";
import HomeNavbar from "../components/molecules/HomeNavbar";
import Footer from "../components/molecules/Footer";
import Comment from "../components/molecules/Comment";
import VideoStep from "../components/organism/VideoStep";
import Ingredients from "../components/molecules/Ingredients";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <HomeNavbar className="navbar " />
        </Row>
        <Row className="menuimage mx-auto bg-info"></Row>
        <div class="header3 bg-info">
          <Row>
            <HeaderText title={"Menu Makanan"} />
          </Row>
          <Row className="menuimage mx-auto mt-3"></Row>
        </div>
        <Row className="menuimage mx-auto"></Row>
        <div class="header3 bg-info">
          <HeaderText title={"Menu Makanan"} />
        </div>
        <div class="ingredients">
          <Ingredients />
        </div>
        <div class="videostep bg-info">
          <Row>
            <HeaderText title={"Video Step"} />
          </Row>
          <Row class="row bg-warning ">
            <Col className="d-grid gap-2 col-2 mb-5">
              <VideoStep />
            </Col>
          </Row>
        </div>
        <div class="commentsection col-8 mx-auto bg-info">
          <Comment />
        </div>
      </Container>
      <Footer className="footer"/>
      {/* <div class="backlayer3 ">
      </div> */}
    </div>
  );
}

export default App;
