import React from "react";
import { Row, Col } from "react-bootstrap";
import imageLanding from "../../images/homepict.png";

function NewRecipe() {
  return (
    <>
      <div className="search  ">
        <Row className="col-8">
          <Col className="searchimage">
          <img
              src={imageLanding}
              className="image-landing"
              height={400}
              alt=""
            />
          </Col>
          <Col className="col">
            <h1 className="title">
              NewRecipe Recipe <br />& Delicious Food
            </h1>
            <form className="form">
              <input className="form-control " type="search" placeholder="Search" />
              <button className="btn btn-outline-success " type="submit">
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
