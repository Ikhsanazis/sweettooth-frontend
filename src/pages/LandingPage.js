import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="">
          <div class="backlayer1"></div>
          <nav class="navbar  navbar-expand-lg navbar-light bg-transparran">
            <a class="navbar-brand" href="#">
              Home
            </a>
            <a class="navbar-brand" href="#">
              Add Recipe
            </a>
            <a class="navbar-brand" href="#">
              Profile
            </a>
          </nav>
          <div className="search ">
            <Row className="col-8">
              <Col class="col">
                <h1 class="title">
                  Discover Recipe <br />& Delicious Food
                </h1>
                <form class="form">
                  <input
                    class="form-control "
                    type="search"
                    placeholder="Search"
                  />
                  <button class="btn btn-outline-success " type="submit">
                    Search
                  </button>
                </form>
              </Col>
              <Col className="searchimage"></Col>
            </Row>
          </div>
          <div class="backlayer2"></div>
          <div className="titlenew">
            <h2>New Recipe</h2>
          </div>
          <div className="newrecipe ">
            <Row className="col-8">
              <Col className="searchimage"></Col>
              <Col class="col">
                <h1 class="title">
                  Discover Recipe <br />& Delicious Food
                </h1>
                <form class="form">
                  <input
                    class="form-control "
                    type="search"
                    placeholder="Search"
                  />
                  <button class="btn btn-outline-success " type="submit">
                    Search
                  </button>
                </form>
              </Col>
            </Row>
          </div>
          <h2 className="titlepopular">Popular Recipe</h2>
          <div className="popular  ">
            <Row className="mb-5 ">
              <Col className="popularimage mx-3">
                <p className="text ">COLUMN 1</p>
              </Col>
              <Col className="popularimage mx-3">
                <p className="text ">COLUMN 1</p>
              </Col>
              <Col className="popularimage mx-3">
                <p className="text ">COLUMN 1</p>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="popularimage mx-3">
                <p className="text ">COLUMN 1</p>
              </Col>
              <Col className="popularimage mx-3">
                <p className="text ">COLUMN 1</p>
              </Col>
              <Col className="popularimage mx-3">
                <p className="text ">COLUMN 1</p>
              </Col>
            </Row>
          </div>
          <div class="backlayer3 ">
            <Row className="mt">
              <h1>Eat, Cook, Repeat</h1>
              <p>Share your best recipe by uploading here !</p>
              <p class="last">
                <a href="#">Product</a> <a href="#">Company</a>{" "}
                <a href="#">Learn More</a> <a href="#">Get in Touch</a>
              </p>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;