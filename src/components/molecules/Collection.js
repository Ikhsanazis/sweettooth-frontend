import React, { useEffect } from "react";
import { Container, Row, Col, Card, Tab, Nav, Image } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";

function Collection() {
  const [key, setKey] = useState("My-Recipe");
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  // const decodeUser = decode(auth?.token);
  console.log(auth);
  const user_id = auth?.profile?.id;
  const [likedRecipe, setLikedRecipe] = React.useState([]);
  const [loadLiked, setLoadLiked] = React.useState(true);
  const [myRecipe, setMyRecipe] = React.useState([]);
  const [loadMy, setLoadMy] = React.useState(true);
  const [savedRecipe, setSavedRecipe] = React.useState([]);
  const [loadSaved, setLoadsaved] = React.useState(true);

  useEffect(() => {
    getLikedRecipes();
    getMyRecipes();
    getSavedRecipe();
  }, []);

  const getLikedRecipes = () => {
    axios
      .get(`http://localhost:8000/likedrecipes/${user_id}`)
      .then((res) => {
        setLikedRecipe(res?.data?.data);
        setLoadLiked(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadLiked(false);
      });
  };

  const getMyRecipes = () => {
    axios
      .get(`http://localhost:8000/recipes/${user_id}`)
      .then((res) => {
        setMyRecipe(res?.data?.data);
        setLoadMy(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadMy(false);
      });
  };

  const getSavedRecipe = () => {
    axios
      .get(`http://localhost:8000/savedrecipes/${user_id}`)
      .then((res) => {
        setSavedRecipe(res?.data?.data);
        setLoadsaved(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadsaved(false);
      });
  };
  return (
    <>
      <div className="h-100 tabcollection">
        <Tab.Container
          defaultActiveKey="My-Recipe"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Nav
            variant=""
            className="nav"
            align="left"
            style={{ cursor: "pointer" }}
          >
            <Nav.Item>
              <Nav.Link className="tabs" eventKey="My-Recipe">
                My Recipe
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tabs" eventKey="Liked-Recipe">
                Liked Recipe
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tabs" eventKey="SavedRecipe">
                Saved Recipe
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="My-Recipe" >
                <section className="collection">
                  <Row xs={1} md={5} className="g-4 mb-5">
                    {myRecipe?.map((item) => (
                      <Col key={item?.recipe_id}>
                        <Link to={`/DetailRecipe/${item.recipe_id}`} key={item?.recipe_id}>
                          <Card key={item?.recipe_id}>
                            <Card.Img
                              crossOrigin="anonymous"
                              variant="top"
                              src={`http://localhost:8000/images/${item?.image}`}
                              width="100px"
                              height={200}
                            />
                            <Card.ImgOverlay className="d-flex align-items-end" key={item?.recipe_id}>
                              <Card.Title>{item?.name}</Card.Title>
                            </Card.ImgOverlay>
                          </Card>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </section>
            </Tab.Pane>
            <Tab.Pane eventKey="Liked-Recipe" >
                <section className="collection">
                  <Row xs={1} md={5} className="g-4 mb-5">
                    {likedRecipe?.map((item) => (
                      <Col >
                        <Link to={`/DetailRecipe/${item.recipe_id}`} key={item?.recipe_id}>
                          <Card key={item?.recipe_id}>
                            <Card.Img
                              crossOrigin="anonymous"
                              variant="top"
                              src={`http://localhost:8000/images/${item?.image}`}
                              // width="100px"
                              height={200}
                            />
                            <Card.ImgOverlay className="d-flex align-items-end" key={item?.recipe_id}>
                              <Card.Title>{item?.name}</Card.Title>
                            </Card.ImgOverlay>
                          </Card>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </section>
            </Tab.Pane>
            <Tab.Pane eventKey="SavedRecipe">
                <section className="collection">
                  <Row xs={1} md={5} className="g-4 mb-5">
                    {savedRecipe?.map((item) => (
                      <Col >
                        <Link to={`/DetailRecipe/${item.recipe_id}`} >
                          <Card key={item?.recipe_id}>
                            <Card.Img
                              crossOrigin="anonymous"
                              variant="top"
                              src={`http://localhost:8000/images/${item?.image}` }
                              // width="100px"
                              height={200}
                            />
                            <Card.ImgOverlay className="d-flex align-items-end" >
                              <Card.Title>{item?.name}</Card.Title>
                            </Card.ImgOverlay>
                          </Card>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </section>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
}

export default Collection;
