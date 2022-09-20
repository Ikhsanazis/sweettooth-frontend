import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import imageLanding from "../../images/homepict.png";
import Searchbar from "../atoms/searchbar";
function Discover() {
  return (
    <>
      <div className="search d-flex justify-content-center ">
        <Row className="col-8 ">
          <Col className="col d-flex">
            <div className="h-100 d-flex align-items-center ">
              <div className=" align-items-center ">
                <h1 className=" ">
                  Discover Recipe <br />& Delicious Food
                </h1>
                <Searchbar />
              </div>
            </div>
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
