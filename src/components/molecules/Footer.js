import React from "react";
import { Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="h-100">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="mt-5 text-white d-flex flex-column justify-content-center align-items-center">
              <h3 className="">Eat, Cook, Repeat</h3>
              <p className="">Share your best recipe by uploading here !</p>
              <small class="text-center text-white mt-5 ">
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
        </div>
      </div>
    </>
  );
}

export default Footer;
