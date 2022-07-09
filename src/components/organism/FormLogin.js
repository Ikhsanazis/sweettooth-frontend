import React from "react";

// atoms
import InputText from "../atoms/inputText";
import RegisButton from "../atoms/RegisterButton";

function FormLogin() {
  return (
    <>
      <InputText label={"Email"} type={"email"} placeholder="Email@gmail.com" />
      <InputText label={"Password"} type={"password"} placeholder="Password" />
      <RegisButton label={"Login"} />
    </>
  );
}

export default FormLogin;