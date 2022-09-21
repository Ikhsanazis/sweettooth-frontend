import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import FormHeader from "../components/atoms/FormHeader";
import FormLogin from "../components/organism/FormLogin";

function Login() {
  return (
    <Container fluid className="h-100">
      <Row>
        <Col className="bgleft">
          <div className="backgroundlayer"></div>
        </Col>
        <Col className="bgright2  d-flex flex-column ">
          <div className="row rightside">
            <FormHeader
              title={"Welcome ! "}
              desc={"Login into your existing account"}
            />
            <FormLogin />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
