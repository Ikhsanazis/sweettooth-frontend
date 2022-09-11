import React from "react";
import { Row } from "react-bootstrap";

function Footer2() {
  return (
    <>
      <div className="footer2 fixed-bottom">
          <div className="d-flex justify-content-center align-items-center h-100">
              <small className="text-center text-white  ">
                <a className="text-white" href="/">
                  Product
                </a>{" "}
                <a className="text-white" href="/">
                  Company
                </a>{" "}
                <a className="text-white" href="/">
                  Learn More
                </a>{" "}
                <a className="text-white" href="/">
                  Get in Touch
                </a>
              </small>
          </div>
        </div>
    </>
  );
}

export default Footer2;
