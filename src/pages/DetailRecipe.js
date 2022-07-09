import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <div class="recipe text-center mt-5">
          <Row>
            <h1>Menu Makanan</h1>
          </Row>
          <Row className="menuimage mx-auto mt-3"></Row>
        </div>
        <div class="ingredients">
          <Row>
            <h1>Ingredients</h1>
            <p>Ingredient</p>
            <p>Ingredient</p>
            <p>Ingredient</p>
            <p>Ingredient</p>
            <p>Ingredient</p>
          </Row>
        </div>
        <div class="videostep">
          <Row>
            <h1>Video Step</h1>
          </Row>
          <Row class="row">
            <Col className="d-grid gap-2 col-2 mb-5">
              <button class="button " type="button">
                Play
              </button>
              <button class="button " type="button">
                Play
              </button>
              <button class="button " type="button">
                Play
              </button>
              <button class="button " type="button">
                Play
              </button>
              <button class="button " type="button">
                Play
              </button>
              <button class="button " type="button">
                Play
              </button>
            </Col>
          </Row>
        </div>
        <div class="commentsection col-8 mx-auto">
          <div class="mb-3 col-12 mx-auto bg-primary">
            <textarea
              type="text"
              class="form-control form-control-lg col-4"
              id="inputEmail"
              placeholder="Comment"
              rows="6"
            ></textarea>
          </div>
          <div class="mb-3 col-6 mx-auto ">
            <button type="button" class="btn button col-12 btn-lg ">
              Send
            </button>
          </div>
          <h3>Comment</h3>
        </div>
      </Container>
      ;
    </div>
  );
}

export default App;
