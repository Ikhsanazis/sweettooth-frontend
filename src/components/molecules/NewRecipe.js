import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function NewRecipe(props) {
  const { data } = props;
  console.log(data);
  return (
    <>
      <div className="search d-flex justify-content-center  ">
        {data.map((item) => (
          <Row className="col-10 " key={item.recipe_id}>
            <Col className="searchimage">
              <Card className="col-10">
                <Card.Img
                  crossOrigin="anonymous"
                  variant="top"
                  src={`https://sweettooth-app.herokuapp.com/images/${item?.image}`}
                  height={350}
                  width={300}
                />
              </Card>
            </Col>
            <Col className="col d-flex">
              <div className="h-100 d-flex align-items-center ">
                <div className=" align-items-center ">
                  <h3 className="title">{item?.name} </h3>
                  <p>Find an amazing taste from this recipe. Let's Try !</p>
                  <button
                    variant="submit"
                    className="btn btn-warning "
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </>
  );
}

export default NewRecipe;
