import React from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";

import FormHeader from "../components/atoms/FormHeader";
import FormLoginexample from "../components/organism/FormLoginexample";

function Loginexample() {
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post("http://localhost:3000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setIsError(false);

        // SET TOKEN
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        window.location.href = "/";
      })
      .catch((err) => {
        setIsError(true);
        setErrorMsg(err?.response?.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container fluid className="h-100">
      <Row>
        <Col className="bgleft">
          <div className="backgroundlayer"></div>
        </Col>
        <Col className="bgright2  d-flex flex-column ">
          <div className="row rightside">
            <Col>
              {isError ? <Alert variant="danger">{errorMsg}</Alert> : null}
            </Col>
            <FormHeader 
              title={"Welcome ! "}
              desc={"Login into your existing account"}
            />
            <FormLoginexample />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Loginexample;
