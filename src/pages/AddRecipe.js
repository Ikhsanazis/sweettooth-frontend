import React from "react";
import { Container, Row } from "react-bootstrap";
import FormAddRecipe from "../components/organism/FormAddRecipe";
import Footer from "../components/molecules/Footer";
import HomeNavbar from "../components/molecules/HomeNavbar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  // const dispatch = useDispatch();
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
          <FormAddRecipe id={id} />
        </Row>
        <Row>
          <div className="backlayer3 ">
            <Footer className="" />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
