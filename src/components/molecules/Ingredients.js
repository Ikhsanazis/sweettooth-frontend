import React from "react";
import { Row } from "react-bootstrap";

function Ingredients(props) {
  const {data}=props
  return (
    <>
      <Row>
        <p>{props?.ingredients}</p>
        <p>Ingredient</p>
        <p>Ingredient</p>
        <p>Ingredient</p>
        <p>Ingredient</p>
      </Row>
    </>
  );
}

export default Ingredients;
