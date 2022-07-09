import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <div className="mx-auto">
          <Row className="">
            <div className="photoprofile mx-auto"></div>
            <h3 className="text-center mt-3">Ikhsan Azis</h3>
          </Row>
        </div>
        <div className="savedmenu">
          <Row>
            <p className="link mt-5">
              <a href="#">My Recipe</a>
              <a href="#">Saved Menu</a> <a href="#">Liked</a>
            </p>
          </Row>
        </div>
      </Container>
      <div class="backlayer4">
        <p class="layer4 text-center ">
          <a href="#">Product</a> <a href="#">Company</a>{" "}
          <a href="#">Learn More</a> <a href="#">Get in Touch</a>
        </p>
      </div>
    </div>
  );
}

export default App;
