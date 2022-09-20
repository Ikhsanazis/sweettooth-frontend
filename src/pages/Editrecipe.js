import React from "react";
import { Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import FormEditRecipe from "../components/organism/FormEditRecipe";
import Footer2 from "../components/molecules/Footer2";
import HomeNavbar from "../components/molecules/HomeNavbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  // const decodeUser = decode(auth?.token);
  console.log(auth);
  const id = auth?.profile?.id;
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <HomeNavbar className="navbar" />
        </Row>
        <Row>
          <FormEditRecipe id={id} />
        </Row>
        <Row>
          <Footer2 className="" />
        </Row>
      </Container>
    </div>
  );
}

export default App;
