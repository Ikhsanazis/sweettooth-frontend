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
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    errorMsg: "",
  });

  const id = auth?.profile?.id;

  const handleEditProfile = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .patch(`https://sweettooth-app.herokuapp.com/user/edit/${id}`, {
          username,
          email,
          password,
        })
        .then((response) => {
          // setMessage(response?.data);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Recipe Berhasil diedit",
          });
        })
        .catch(({ response }) => {
          // setMessage(response?.data?.message);
          // setError({ isError: true, errorMsg: message });
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
  };
  console.log(username, email, password);

  return (
    <>
      <div class="col-6 mx-auto mt-5">
        {/* <FormAddRecipe /> */}
        <div className={` mt-5 mb-5 h-100`}>
          <h3 className="text-center mb-5">Edit Profile</h3>

          {/* Add Form */}
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleEditProfile();
              }}
            >
              {/*  Input */}
              <div className="mb-4">
                <div className="">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    placeholder="userame"
                    onChange={(e) => setUsername(e.target.value)}
                    // required
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="">
                  <input
                    type="Password"
                    className="form-control form-control-lg"
                    id="Password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-grid ">
                <button
                  type="submit"
                  className="btn btn-warning btn-lg"
                  id={2}
                  onClick={handleEditProfile}
                  disabled={isLoading}
                >
                  {/* {isLoading ? "Adding..." : "Edit"} */}
                  Edit
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
