import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import * as Type from "../../redux/auth/type";
import { useSelector, useDispatch } from "react-redux";

function FormLogin() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState({
    isError: false,
    errorMsg: "",
  });

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .post("http://localhost:8000/login", { email, password })
        .then((respose) => {
          dispatch({
            type: Type.SET_AUTH,
            payload: {
              token: respose?.data?.token,
              user: respose?.data?.user,
            },
          });
          window.location.href = "/LandingPage";
        })
        .catch(({ response }) => {
          const message = response?.data?.message;
          setError({ isError: true, errorMsg: message });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  };

  console.log(email, password);

  // const handleLogin = () => {
  //   // setIsLoading(true);
  //   axios
  //     .post("http://localhost:8000/login", {
  //       email: email,
  //       password: password,
  //     })
  //     .then((res) => {
  //       setIsError(true);

  //       // SET TOKEN
  //       localStorage.setItem("token", res?.data);
  //       window.location.href = "/LandingPage";
  //     })
  //     .catch((err) => {
  //       setIsError(true);
  //       setErrorMsg(err?.response?.data);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  return (
    <Container fluid>
      <Row className="justify-content-md-center flex-center-vertical">
        <Col lg={8} md={8} sm={12}>
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
              {isLoading ? "Loading..." : "Login"}{" "}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormLogin;
