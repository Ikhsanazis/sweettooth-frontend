import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";

// atoms
import RegisButton from "../atoms/RegisterButton";

function FormLoginexample() {
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = () => {
    // setIsLoading(true);
    axios
      .post("http://localhost:8000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setIsError(true);

        // SET TOKEN
        localStorage.setItem("token", res?.data);
        window.location.href = "/LandingPage";
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
        <Col lg={8}>
          {isError ? <Alert variant="danger">{errorMsg}</Alert> : null}

          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
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
            <Button
            className="w-100"
              variant="warning"
              type="submit"
              disabled={isLoading}
              onClick={handleLogin}
            >
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormLoginexample;
