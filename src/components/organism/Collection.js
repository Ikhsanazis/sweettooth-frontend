import React, { useEffect } from "react";
import { Container, Row, Col, Card, Tab, Nav, Image } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import MyRecipe from "../molecules/MyRecipe";
import SavedRecipe from "../molecules/SavedRecipe";
import LikedRecipe from "../molecules/LikedRecipe";

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
            <Tab.Pane eventKey="My-Recipe">
              <MyRecipe id={user_id} />
            </Tab.Pane>
            <Tab.Pane eventKey="Liked-Recipe">
              <LikedRecipe id={user_id} />
            </Tab.Pane>
            <Tab.Pane eventKey="SavedRecipe">
              <SavedRecipe id={user_id} />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
}

export default Collection;
