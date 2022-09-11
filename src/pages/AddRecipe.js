import React from "react";
import { Container, Row } from "react-bootstrap";

import FormAddRecipe from "../components/organism/FormAddRecipe";
import Footer from "../components/molecules/Footer";
import HomeNavbar from "../components/molecules/HomeNavbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  // const decodeUser = decode(auth?.token);
  console.log(auth);
  const id = auth?.profile?.id;

  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [video, setVideo] = React.useState("");
  const [ingredients, setIngredients] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState({
    isError: false,
    errorMsg: "",
  });

  const handleAddRecipe = () => {
    var bodyFormData = new FormData();
    bodyFormData.append("name", name);
    bodyFormData.append("ingredients", ingredients);
    bodyFormData.append("image", image);
    bodyFormData.append("video", video);
    setIsLoading(true);
    setTimeout(() => {
      axios({
        method: "post",
        url: `http://localhost:8000/recipes/addimage/${id}`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((respose) => {})
        .catch(({ response }) => {
          const message = response?.data?.message;
          setError({ isError: true, errorMsg: message });
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  };
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <HomeNavbar className="navbar" />
        </Row>
        <Row>
          <div class="col-8 mx-auto mt-5">
            {/* <FormAddRecipe /> */}
            <div className={` mt-3 mb-5 h-100`}>
              {error?.isError && (
                <div className="">
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    <span>
                      {error?.errorMsg ?? "Something wrong with our server"}
                    </span>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                      onClick={() =>
                        setError({
                          isError: false,
                          errorMsg: "",
                        })
                      }
                    ></button>
                  </div>
                </div>
              )}

              {/* Add Form */}
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleAddRecipe();
                  }}
                >
                  {/*  Input */}
                  <div className="mb-3">
                    <label className="form-label">Title Recipe</label>
                    <div className="">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        placeholder="title"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Ingredients
                    </label>
                    <div className="">
                      <input
                        type="ingredients"
                        className="form-control form-control-lg"
                        id="ingredients"
                        placeholder="Your ingredients"
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Image</label>
                    <div className="">
                      <input
                        type="file"
                        className="form-control form-control-lg"
                        id="name"
                        placeholder="Image"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Video</label>
                    <div className="">
                      <input
                        type="file"
                        className="form-control form-control-lg"
                        id="name"
                        placeholder="video"
                        onChange={(e) => setVideo(e.target.files[0])}
                        required
                      />
                    </div>
                  </div>
                  <div className="d-grid ">
                    <button
                      type="submit"
                      className="btn btn-warning btn-lg"
                      onClick={handleAddRecipe}
                      disabled={isLoading}
                    >
                      {isLoading ? "Adding..." : "Add"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="backlayer3 ">
            <Footer className="" />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
