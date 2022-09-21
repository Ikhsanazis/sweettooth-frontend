import React from "react";
import { Tab, Nav } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MyRecipe from "../molecules/MyRecipe";
import SavedRecipe from "../molecules/SavedRecipe";
import LikedRecipe from "../molecules/LikedRecipe";

function Collection() {
  const [key, setKey] = useState("My-Recipe");
  // const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  // const decodeUser = decode(auth?.token);
  console.log(auth);
  const user_id = auth?.profile?.id;

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
