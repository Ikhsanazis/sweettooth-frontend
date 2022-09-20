import React from "react";
import { Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function FormAddRecipe(props) {
  const { recipe_id } = useParams();
  const { id } = props;
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  console.log(auth);
  console.log("ini tuh id", id);
  const [data, setData] = React.useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [category, setCategory] = useState("Soup");
  const [ingredients, setIngredients] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    errorMsg: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`https://sweettooth-app.herokuapp.com/${recipe_id}`)
      .then((res) => {
        setData(res?.data?.data ?? []);
        setIsLoading(false);
      });
  }, [recipe_id]);

  const handleEditRecipe = (data) => {
    console.log("coba", data);
    setIsLoading(true);
    setTimeout(() => {
      axios
        .patch(`https://sweettooth-app.herokuapp.com/edit/${recipe_id}`, {
          name: name ? name : data[0]?.name,
          ingredients: ingredients ? ingredients : data[0]?.ingredients,
        })
        .then((response) => {
          setMessage(response?.data);
        })
        .catch(({ response }) => {
          setMessage(response?.data?.message);
          setError({ isError: true, errorMsg: message });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  };
  return (
    <>
      <div class="col-8 mx-auto mt-5">
        {/* <FormAddRecipe /> */}
        <div className={` mt-3 mb-5 h-100`}>
          <h3 className="text-center mb-3">Edit Your Recipe</h3>

          {/* Add Form */}
          {data.map((item) => (
            <div key={item?.recipe_id}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEditRecipe();
                }}
              >
                {/*  Input */}
                <div className="mb-4">
                  <div className="">
                    <input
                      type="text"
                      className="form-control form-control-lg border-0 bg-grey"
                      id="name"
                      placeholder={item?.name}
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
                      id={"ingredients"}
                      placeholder={item?.ingredients}
                      rows="6"
                      onChange={(e) => setIngredients(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="d-grid col-6 mx-auto">
                  <button
                    type="submit"
                    className="btn btn-warning btn-lg"
                    onClick={handleEditRecipe}
                    disabled={isLoading}
                  >
                    {isLoading ? "Updating..." : "Edit"}
                  </button>
                </div>
              </form>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FormAddRecipe;
