import React from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";

function FormAddRecipe(props) {
  const { id } = props;
  // const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  // const decodeUser = decode(auth?.token);
  console.log(auth);
  // const id = auth?.profile?.id;
  console.log("ini tuh id", id);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [category, setCategory] = useState("Soup");
  const [ingredients, setIngredients] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = React.useState({
    isError: false,
    errorMsg: "",
  });
  const [message, setMessage] = React.useState("");

  const handleAddRecipe = () => {
    var bodyFormData = new FormData();
    bodyFormData.append("name", name);
    bodyFormData.append("ingredients", ingredients);
    bodyFormData.append("category", category);
    bodyFormData.append("image", image);
    bodyFormData.append("video", video);

    const isValid = name && ingredients && category;
    if (!isValid) {
      Swal.fire({
        icon: "warning",
        title: "failed",
        text: "Complete Your Input",
      });
    } else {
      setIsLoading(true);
      setTimeout(() => {
        axios({
          method: "post",
          url: `https://sweettooth-app.herokuapp.com/recipes/add/${id}`,
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then((response) => {
            // setMessage(response?.data);
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Recipe Berhasil ditambah",
            });
          })
          .catch(({ response }) => {
            // setMessage(response?.data?.message);
            setError({ isError: true, errorMsg: message });
            Swal.fire({
              icon: "warning",
              title: "failed",
              text: "Terjadi Error",
            });
          })
          .finally(() => {
            setIsLoading(false);
          });
      }, 1000);
    }
  };
  console.log(name, ingredients, category, image, video);
  console.log(message);

  const categoryoption = [
    { name: "Soup" },
    { name: "Chicken" },
    { name: "Seafood" },
    { name: "Dessert" },
  ];
  return (
    <>
      <div class="col-8 mx-auto mt-5">
        {/* <FormAddRecipe /> */}
        <div className={` mt-3 mb-5 h-100`}>
          <h3 className="text-center mb-3">Add Your Recipe</h3>

          {/* Add Form */}
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddRecipe();
              }}
            >
              {/*  Input */}
              <div className="mb-4">
                <div className="">
                  <input
                    type="text"
                    className="form-control form-control-lg border-0 bg-grey"
                    id="name"
                    placeholder="title"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="">
                  <textarea
                    type="ingredients"
                    className="form-control form-control-lg border-0 bg-grey"
                    id="ingredients"
                    placeholder="Your ingredients"
                    rows="6"
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-control form-control-lg border-0 bg-grey"
                  aria-label="Default select "
                  placeholder="Your ingredients"
                >
                  {categoryoption.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <div className="">
                  <input
                    type="file"
                    className="form-control form-control-lg border-0 bg-grey"
                    id="name"
                    placeholder="Image"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="">
                  <input
                    type="file"
                    className="form-control form-control-lg border-0 bg-grey"
                    id="name"
                    placeholder="video"
                    onChange={(e) => setVideo(e.target.files[0])}
                    required
                  />
                </div>
              </div>
              <div className="d-grid col-6 mx-auto">
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
    </>
  );
}

export default FormAddRecipe;
