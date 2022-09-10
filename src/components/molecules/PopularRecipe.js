import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function NewRecipe() {
  const [popularRecipe, setPopularRecipe] = React.useState([]);
  const [loadPopular, setLoadPopular] = React.useState(true);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = () => {
    axios
      .get("http://localhost:8000/popular")
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
  console.log(popularRecipe);
  return (
    <>
      {/* <Row xs={1} md={3} className="g-4 mb-5">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row> */}
      <Row xs={1} md={4} className="g-4 mb-5">
        {popularRecipe?.map((item) => (
          <Col>
            <Link to="/home" >
            <Card>
              <Card.Img
                crossOrigin="anonymous"
                variant="top"
                src={`http://localhost:8000/images/${item?.image}`}
                // width="100px"
                height={300}
              />
              <Card.ImgOverlay className="d-flex align-items-end">
                <Card.Title>{item?.name}</Card.Title>
              </Card.ImgOverlay>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default NewRecipe;
