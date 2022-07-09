import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// molecules
import FormHeader from "../components/atoms/FormHeader";

// organisms
import FormRegister from "../components/organisms/FormRegister";

function Register() {
  return (
    <div className="App">
        <Container fluid>
        <Row>
          <Col className="bgleft ">
            <div className="backgroundlayer"></div>
          </Col>
          <Col className="bgright ">
            <FormHeader/>
            <FormRegister></FormRegister>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;