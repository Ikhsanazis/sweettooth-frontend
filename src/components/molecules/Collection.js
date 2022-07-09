import React from "react";
import { Row } from "react-bootstrap";

function Collection() {
  return (
    <>
      <Row>
        <p className="link mt-5">
          <a href="#">My Recipe</a>
          <a href="#">Saved Menu</a> <a href="#">Liked</a>
        </p>
      </Row>
    </>
  );
}

export default Collection;
