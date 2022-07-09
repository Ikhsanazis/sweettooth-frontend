import React from "react";

// atoms
import InputText from "../atoms/InputText";
import RegisButton from "../atoms/button";

import { Row, Col, Button } from "react-bootstrap";

function FormRegister() {
  return (
    <>
      {/* Input Name */}
      <InputText label="Username" />

      {/* Input Email */}
      <InputText label="Email" />

      {/* Input Email */}
      <InputText label="Password" />

      {/* Input Phone */}
      <InputText label="Phone Number" />

      {/* Button */}
      <RegisButton />
    </>
  );
}

export default FormRegister;
