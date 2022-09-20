import React from "react";
import { Container, Row } from "react-bootstrap";
import HomeNavbar from "../components/molecules/HomeNavbar";
import Discover from "../components/molecules/Discover";
import NewRecipe from "../components/molecules/NewRecipe";
import PopularRecipe from "../components/molecules/PopularRecipe";
import Footer from "../components/molecules/Footer";
import HeaderText from "../components/atoms/HeaderText";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [popularRecipe, setPopularRecipe] = React.useState([]);
  const [loadPopular, setLoadPopular] = React.useState(true);
  const [newRecipe, setNewRecipe] = React.useState([]);
  const [loadNew, setLoadNew] = React.useState(true);

  useEffect(() => {
    getPopular();
    getNewRecipe();
  }, []);

  const getPopular = () => {
    axios
      .get("https://sweettooth-app.herokuapp.com/popular")
      .then((res) => {
        setPopularRecipe(res?.data?.data);
        setLoadPopular(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadPopular(false);
      });
  };
  const getNewRecipe = () => {
    axios
      .get("https://sweettooth-app.herokuapp.com/latestrecipe")
      .then((res) => {
        setNewRecipe(res?.data?.data);
        setLoadNew(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadPopular(false);
      });
  };

  return (
    <div className="App ">
      <Container fluid>
        <Row className="">
          <HomeNavbar className="navbar " />
          <div className="backlayer1"></div>
          <div className="discover  ">
            <Discover className="coba " />
          </div>
          <div className="backlayer2 "></div>
          <div className="header1  w-50">
            <HeaderText title={"New Recipe"} />
          </div>
          <div className="newrecipe ">
            <NewRecipe className="coba " data={newRecipe} />
          </div>
          <div className="header2 mb-5  w-50">
            <HeaderText title={"Popular Recipe"} />
          </div>
          <div className="popularrecipe ">
            <PopularRecipe data={popularRecipe} />
          </div>
          {/* <div class="backlayer3 "> */}
          <Footer />
          {/* </div> */}
        </Row>
      </Container>
    </div>
  );
}

export default App;
