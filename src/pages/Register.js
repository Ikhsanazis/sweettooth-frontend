import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormHeader from "../components/atoms/FormHeader";
import FormRegister from "../components/organism/FormRegister";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col className="bgleft ">
            <div className="backgroundlayer"></div>
          </Col>
          <Col className="bgright ">
            <FormHeader title={"Let's Get Started "} desc={"Create new account to access all features"}/>
            <FormRegister/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
