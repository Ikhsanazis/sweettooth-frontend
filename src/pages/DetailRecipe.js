import React from "react";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import HeaderText from "../components/atoms/HeaderText";
import HomeNavbar from "../components/molecules/HomeNavbar";
import Footer from "../components/molecules/Footer";
import VideoStep from "../components/organism/VideoStep";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Commentlist from "../components/organism/comment";
import { Link } from "react-router-dom";

function Detailrecipe() {
  const id = useParams();
  // const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const user_id = auth?.profile?.id;
  const recipe_id = id?.recipe_id;
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataComment, setDataComment] = useState([]);
  const [comment, setComment] = useState("");
  const [loadComment, setLoadComment] = useState("");

  useEffect(() => {
    axios
      .get(`https://sweettooth-app.herokuapp.com/${recipe_id}`)
      .then((res) => {
        setData(res?.data?.data ?? []);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, [recipe_id]);

  useEffect(() => {
    axios
      .get(`https://sweettooth-app.herokuapp.com/comments/${recipe_id}`)
      .then((res) => {
        setDataComment(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [recipe_id]);
  console.log("datacomment", dataComment);

  const getComment = () => {
    setLoadComment(true);
    axios
      .get(`https://sweettooth-app.herokuapp.com/comments/${recipe_id}`)
      .then((res) => {
        setDataComment(res?.data?.data);
        setLoadComment(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("datacomment", dataComment);

  const handleComment = () => {
    setIsLoading(true);
    axios
      .post(
        `https://sweettooth-app.herokuapp.com/comments/add/${user_id}/${recipe_id}`,
        {
          comment,
          user_id,
          recipe_id,
        }
      )
      .then((res) => {
        setIsLoading(false);
        getComment();
        Swal.fire({
          icon: "success",
          title: "Comment Added",
          text: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "warning",
          title: "failed",
          text: "You Need To Login",
        });
      });
    getComment();
  };

  return (
    <div className="Detailrecipe">
      <Container fluid>
        <Row>
          <HomeNavbar className="navbar " />
        </Row>
        <Row className="menuimage mx-auto bg-info"></Row>
        {data?.map((item) => (
          <div className="header" key={item.recipe_id}>
            <Row className="text-center">
              <HeaderText title={`${item?.name}`} />
            </Row>
            <div
              className="text-center mb-3 "
              style={{
                // height: "250px",
                // width: "250px",
                margin: "auto",
              }}
            >
              <Image
                className="mx-auto"
                crossOrigin="anonymous"
                src={`https://sweettooth-app.herokuapp.com/images/${item?.image}`}
                width="400px"
                height="300px"
                style={{ backgroundSize: "cover" }}
                alt="image"
                layout="responsive"
              />
            </div>
            {user_id === item?.user_id ? (
              <div className="text-center ">
                <Link to={`/editrecipe/${recipe_id}`}>
                  <small
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "black",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                    className="bg-warning"
                  >
                    Edit Recipe
                  </small>
                </Link>
              </div>
            ) : null}
            <h4 className="text-center">Ingredients</h4>
            <Row className="d-flex justify-content-center  col-8 mx-auto">
              <div className="detailingredients bg-grey">
                <p>{item?.ingredients}</p>
              </div>
            </Row>
            <Row className=" mt-4 col-8 mx-auto ">
              <HeaderText title={"Video Step"} />
              <Col className="d-grid gap-2 col-3 mb-5">
                <VideoStep data={data} />
              </Col>
            </Row>
            <div className="commentsection col-8 mx-auto ">
              <Form
                className="mb-3 col-8 mx-auto "
                onSubmit={(e) => {
                  e.preventDefault();
                  handleComment();
                }}
              >
                <textarea
                  type="text"
                  className="form-control form-control-lg col-4 border-0 bg-grey"
                  id="inputEmail"
                  placeholder="Comment"
                  rows="6"
                  onChange={(e) => setComment(e.target.value)}
                  required
                />
              </Form>
              <div className="mb-3 col-6 mx-auto ">
                <Button
                  variant="warning"
                  type="submit"
                  className="btn btn-warning w-100 mt-2 mb-3 col-6 "
                  onClick={handleComment}
                  disabled={isLoading}
                >
                  {isLoading ? "Sending" : "Send"}
                </Button>
              </div>
              <section>
                <Commentlist data={dataComment} />
              </section>
            </div>
          </div>
        ))}
      </Container>
      <Footer className="footer" />
    </div>
  );
}

export default Detailrecipe;
