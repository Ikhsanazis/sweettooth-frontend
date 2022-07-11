import React from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";

import FormHeader from "../components/atoms/FormHeader";
import FormLogin from "../components/organism/FormLogin";

function Loginexample() {
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

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
        localStorage.setItem("token", res?.data);
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
    <Container fluid>
      <Row className="justify-content-md-center flex-center-vertical h-100">
        <Col lg={4}>
          {isError ? <Alert variant="danger">{errorMsg}</Alert> : null}

          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={isLoading}
              onClick={handleLogin}
            >
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="bgleft">
          <div className="backgroundlayer"></div>
        </Col>
        <Col className="bgright2 ">
          <FormHeader
            title={"Welcome ! "}
            desc={"Login into your existing account"}
          />
          <FormLogin />
        </Col>
      </Row>
    </Container>
  );
}

export default Loginexample;

