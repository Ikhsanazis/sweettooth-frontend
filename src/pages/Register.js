import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col className="bgleft ">
            <div className="backgroundlayer"></div>
          </Col>
          <Col className="bgright ">
            <h2 class="judul ">Let's Get Started!</h2>
            <p class="text-center">Create new account to access all features</p>
            <div class="mb-3 col-8 mx-auto ">
              <label for="inputname" class="form-label">
                Username
              </label>
              <input
                type="text"
                class="form-control form-control-lg col-4"
                id="inputEmail"
                placeholder="name"
              ></input>
            </div>
            <div class="mb-3 col-8 mx-auto">
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
            <div class="mb-3 col-8 mx-auto">
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
            <div class="mb-3 col-8 mx-auto">
              <label for="phoneNumber" class="form-label">
                Phone Number
              </label>
              <input
                type="phonenumber"
                class="form-control form-control-lg"
                id="phoneNumber"
                placeholder="08xxxxxxx"
              ></input>
            </div>
            <div class="mb-3 col-8 mx-auto">
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
            <div class="mb-3 col-8 mx-auto">
              <button type="button" class="button col-12 btn-lg ">
                Register Account
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
