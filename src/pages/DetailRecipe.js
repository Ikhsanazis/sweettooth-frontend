import React from "react";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import HeaderText from "../components/atoms/HeaderText";
import HomeNavbar from "../components/molecules/HomeNavbar";
import Footer from "../components/molecules/Footer";
import Comment from "../components/molecules/Comment";
import VideoStep from "../components/organism/VideoStep";
import Ingredients from "../components/molecules/Ingredients";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { decode } from "jsonwebtoken";
import { useParams } from "react-router-dom";

function App() {
  // const dispatch = useDispatch();
  // const [data, setData] = React.useState([]);
  // const router = useRouter();
  // const { auth } = useSelector((state) => state);
  // const decodeUser = decode(auth?.token);
  // const user_id = decodeUser?.id;
  // console.log(user_id);

  const id = useParams();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  // const decodeUser = decode(auth?.token);
  console.log(auth);
  const user_id = auth?.profile?.id;
  console.log(user_id);
  // console.log(user_id);
  const recipe_id = id?.recipe_id;
  console.log("test", recipe_id);
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [dataComment, setDataComment] = React.useState([]);
  const [comment, setComment] = React.useState("");
  const [loadComment, setLoadComment] = React.useState("");
  // const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    // console.log(recipe_id);
    axios.get(`https://sweettooth-app.herokuapp.com/recipes/${recipe_id}`).then((res) => {
      setData(res?.data?.data ?? []);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, []);
  console.log(data);

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

  const handleComment = () => {
    setIsLoading(true);
    axios
      .post(`https://sweettooth-app.herokuapp.com/comments/add/${user_id}/${recipe_id}`, {
        comment,
        user_id,
        recipe_id,
      })
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    getComment();
  };


  return (
    <div className="App">
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
            <div className="text-center mb-3">
              <Image
                className="mx-auto"
                crossOrigin="anonymous"
                src={`http://localhost:8000/images/${item?.image}`}
                width="400px"
                height="400px"
                style={{ objectFit: "cover" }}
                alt="image"
                layout="responsive"
              />{" "}
            </div>
            <div className="header3 ">
              <HeaderText title={"Ingredients"} />
            </div>
            <div className="ingredients">
              <Row>
                <p>{item?.ingredients}</p>
              </Row>
              {/* <Ingredients data={data}/> */}
            </div>
            <div className="videostep ">
              <Row>
                <HeaderText title={"Video Step"} />
              </Row>
              <Row className=" ">
                <Col className="d-grid gap-2 col-2 mb-5">
                  <VideoStep data={data} />
                </Col>
              </Row>
            </div>
            <div className="commentsection col-8 mx-auto ">
              {/* <Comment /> */}
              <Form
                className="mb-3 col-12 mx-auto "
                onSubmit={(e) => {
                  e.preventDefault();
                  handleComment();
                }}
              >
                <textarea
                  type="text"
                  className="form-control form-control-lg col-4"
                  id="inputEmail"
                  placeholder="Comment"
                  rows="6"
                  onChange={(e) => setComment(e.target.value)}
                  required
                ></textarea>
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
              <div>
                        <h4>Comment</h4>
                        {dataComment?.map((item) => (
                          <div
                            className="card"
                            key={item?.comment_id}
                            style={{
                              borderRadius: "15px",
                              padding: "10px",
                              border: "none",
                              boxShadow: "5px 5px 5px 5px #FAF7ED",
                              marginBottom: "20px",
                              cursor: "pointer",
                            }}
                            // key={item?.recipe_id}
                          >
                            <div className="row">
                              <div className="col-3">
                                <Image
                                  src={`http://localhost:8000/images/${item?.image}`}
                                  width="80px"
                                  height="80px"
                                  style={{ borderRadius: "50%" }}
                                  alt="image"
                                />
                              </div>
                              <div className="col-9">
                                <div>
                                  <h6>{item?.user_id}</h6>
                                  <p>{item?.comment}</p>
                                  <div
                                    style={{ marginTop: "-10px" }}
                                    className="d-flex gap-1 align-items-center"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
            </div>
          </div>
        ))}
      </Container>
      <Footer className="footer" />
    </div>
  );
}

export default App;
