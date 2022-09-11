import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import imageLanding from "../../images/homepict.png";

function Discover() {
  return (
    <>
      <div className="search d-flex justify-content-center ">
        <Row className="col-8 ">
          <Col className="col">
            <h1 className="title">
              Discover Recipe <br />& Delicious Food
            </h1>
            <form className="form">
              <input className="form-control " type="search" placeholder="Search" />
              {/* <button className="btn btn-outline-success " type="submit">
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
