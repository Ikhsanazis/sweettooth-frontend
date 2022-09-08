import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import imageLanding from "../../images/homepict.png";

function Discover() {
  return (
    <>
      <div className="search d-flex justify-content-center">
        <Row className="col-8 ">
          <Col class="col">
            <h1 class="title">
              Discover Recipe <br />& Delicious Food
            </h1>
            <form class="form">
              <input class="form-control " type="search" placeholder="Search" />
              {/* <button class="btn btn-outline-success " type="submit">
                Search
              </button> */}
            </form>
          </Col>
          <Col className="searchimage">
            <img
              src={imageLanding}
              className="image-landing"
              height={400}
              alt=""
            />{" "}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Discover;
