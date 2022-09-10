import React from "react";
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// atoms
import InputText from "../atoms/inputText";
import RegisButton from "../atoms/RegisterButton";

function FormRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_URL + `auth/register`, {
        username,
        email,
        password,
        phone,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  };

  return (
    <>
      <InputText label={"Username"} type={"text"} placeholder="Username" />
      <InputText label={"Email"} type={"email"} placeholder="Email@gmail.com" />
      <InputText label={"Password"} type={"password"} placeholder="Password" />
      <InputText
        label={"Phone Number"}
        type={"text"}
        placeholder="08xxxxxxxxx"
      />
      <div class="mb-3 col-8 mx-auto">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        <label class="form-check-label" for="flexCheckDefault">
          I agree to terms & conditions
        </label>
      </div>
      <RegisButton label={"Register Account"} />
      <p class="forget text-center">
        Already have an account?<a href="#">Login here</a>
      </p>
    </>
  );
}

export default FormRegister;
