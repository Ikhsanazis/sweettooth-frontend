import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function MyRecipe(props) {
  const { id } = props;
  const [likedRecipe, setLikedRecipe] = useState([]);
  const [loadLiked, setLoadLiked] = useState(true);
  const [myRecipe, setMyRecipe] = useState([]);
  const [loadMy, setLoadMy] = useState(true);
  const [savedRecipe, setSavedRecipe] = useState([]);
  const [loadSaved, setLoadsaved] = useState(true);
  const user_id = id;
  useEffect(() => {
    axios
      .get(`https://sweettooth-app.herokuapp.com/user/recipes/${user_id}`)
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
  }, [user_id]);
  return (
    <>
      <section className="collection">
        <Row xs={1} md={4} className="g-4 mb-5">
          {myRecipe?.map((item) => (
            <Col key={item?.recipe_id}>
              <Link
                to={`/DetailRecipe/${item.recipe_id}`}
                key={item?.recipe_id}
              >
                <Card key={item?.recipe_id}>
                  <Card.Img
                    crossOrigin="anonymous"
                    variant="top"
                    src={`https://sweettooth-app.herokuapp.com/images/${item?.image}`}
                    width="100px"
                    height={200}
                  />
                  <Card.ImgOverlay
                    className="d-flex align-items-end"
                    key={item?.recipe_id}
                  >
                    <Card.Title>{item?.name}</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
}

export default MyRecipe;
