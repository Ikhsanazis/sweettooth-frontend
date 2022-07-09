import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <div class="col-8 mx-auto ">
          <textarea
            class="form-control text-center mb-3"
            id="exampleFormControlTextarea1"
            rows="6"
            placeholder="Image"
          ></textarea>
          <input
            type="text"
            class="form-control mb-3"
            id="title"
            placeholder="Title"
          />
          <textarea
            class="form-control mb-3"
            id="exampleFormControlTextarea1"
            rows="6"
            placeholder="Ingredients"
          ></textarea>
          <input
            type="text"
            class="form-control mb-3"
            id="vid"
            placeholder="Video"
          />
          <div class="mb-3 col-6 mx-auto ">
            <button type="button" class="btn button col-12 btn-lg ">
              Send
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
