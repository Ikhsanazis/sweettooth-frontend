import React from "react";
import { Row, Col } from "react-bootstrap";

function NewRecipe() {
  return (
    <>
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
    </>
  );
}

export default NewRecipe;
