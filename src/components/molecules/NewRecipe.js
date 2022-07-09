import React from "react";
import { Row, Col } from "react-bootstrap";

function NewRecipe() {
  return (
    <>
      <div className="search ">
        <Row className="col-8">
          <Col className="searchimage"></Col>
          <Col class="col">
            <h1 class="title">
              NewRecipe Recipe <br />& Delicious Food
            </h1>
            <form class="form">
              <input class="form-control " type="search" placeholder="Search" />
              <button class="btn btn-outline-success " type="submit">
                Search
              </button>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default NewRecipe;
