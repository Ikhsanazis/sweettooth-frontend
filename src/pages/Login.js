import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormHeader from "../components/atoms/FormHeader";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col className="bgleft">
            <div className="backgroundlayer"></div>
          </Col>
          <Col className="bgright2 ">
          <FormHeader title={"Welcome ! "} desc={"Login into your existing account"}/>
            <div class="formulir mb-3 col-8 mx-auto ">
              <label for="inputEmail" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control form-control-lg"
                id="inputEmail"
                placeholder="name@example.com"
              ></input>
            </div>
            <div class="formulir mb-3 col-8 mx-auto ">
              <label for="inputPassword" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control form-control-lg"
                id="inputPassword"
                placeholder="password"
              ></input>
            </div>
            <div class="formulir mb-3 col-8 mx-auto ">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              <label class="form-check-label" for="flexCheckDefault">
                I agree to terms & conditions
              </label>
            </div>
            <div class="formulir mb-3 col-8 mx-auto ">
              <button type="button" class="button col-12 btn-lg ">
                Login
              </button>
              <p class="forget text-center">
                Already have an account?<a href="#">Login here</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
