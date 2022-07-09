import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormHeader from "../components/atoms/FormHeader";
import FormLogin from "../components/organism/FormLogin";

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
          <FormLogin/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
