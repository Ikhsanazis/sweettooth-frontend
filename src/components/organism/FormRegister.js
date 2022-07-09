import React from "react";

// atoms
import InputText from "../atoms/inputText";
import RegisButton from "../atoms/RegisterButton";

function FormRegister() {
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
