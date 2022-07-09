import React from "react";
import { Row, Col } from "react-bootstrap";

function Discover() {
  return (
    <>
      <div className="search ">
        <Row className="col-8">
          <Col class="col">
            <h1 class="title">
              Discover Recipe <br />& Delicious Food
            </h1>
            <form class="form">
              <input class="form-control " type="search" placeholder="Search" />
              <button class="btn btn-outline-success " type="submit">
                Search
              </button>
            </form>
          </Col>
          <Col className="searchimage"></Col>
        </Row>
      </div>
    </>
  );
}

export default Discover;
