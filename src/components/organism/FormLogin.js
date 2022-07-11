import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";


// atoms
import InputText from "../atoms/inputText";
import RegisButton from "../atoms/RegisterButton";

function FormLogin() {
  return (
    <>
      <InputText label={"Email"} type={"email"} placeholder="Email@gmail.com" />
      <InputText label={"Password"} type={"password"} placeholder="Password" />
      <RegisButton/>
    </>
  );
}

export default FormLogin;
