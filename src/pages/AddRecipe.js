import React from "react";
import { Container, Row } from "react-bootstrap";

import FormAddRecipe from "../components/organism/FormAddRecipe";
import Footer from "../components/molecules/Footer";
import HomeNavbar from "../components/molecules/HomeNavbar";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <HomeNavbar className="navbar" />
        </Row>
        <Row>
          <div class="col-8 mx-auto mt-5">
            <FormAddRecipe />
          </div>
        </Row>
        <Row>
          <div class="backlayer3 ">
            <Footer className="" />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
