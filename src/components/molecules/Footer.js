import React from "react";
import { Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Row className="mt">
        <h1>Eat, Cook, Repeat</h1>
        <p>Share your best recipe by uploading here !</p>
        <p class="last">
          <a href="#">Product</a> <a href="#">Company</a>{" "}
          <a href="#">Learn More</a> <a href="#">Get in Touch</a>
        </p>
      </Row>
    </>
  );
}

export default Footer;
