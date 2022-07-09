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

      {/* Button */}
      <RegisButton />
    </>
  );
}

export default FormRegister;
