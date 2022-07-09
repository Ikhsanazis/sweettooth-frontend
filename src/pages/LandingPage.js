import React from "react";
import { Container, Row} from "react-bootstrap";
import HomeNavbar from "../components/molecules/HomeNavbar";
import Discover from "../components/molecules/Discover";
import NewRecipe from "../components/molecules/NewRecipe";
import PopularRecipe from "../components/molecules/PopularRecipe";
import Footer from "../components/molecules/Footer";
import HeaderText from "../components/atoms/HeaderText";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="">
          <HomeNavbar className="navbar" />
          <div class="backlayer1"></div>
          <div className="discover ">
          <Discover className="coba" />
          </div>
          <div class="backlayer2"></div>
          <div className="header1">
          <HeaderText title={"New Recipe"} />
          </div>
          <div className="newrecipe ">
          <NewRecipe />
          </div>
          <div className="header2 mb-5">
          <HeaderText title={"Popular Recipe"} />
          </div>
          <div className="popularrecipe ">

          <PopularRecipe />
          </div>
          <div class="backlayer3 ">
            <Footer />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
