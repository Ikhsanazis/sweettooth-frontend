import React from "react";

// atoms
import InputText from "../atoms/InputText";
import RegisButton from "../atoms/RegisterButton";

function FormRegister() {
  return (
    <>
      <InputText label="Username" />

      <RegisButton />
    </>
  );
}

export default FormRegister;
