import React from "react";

function InputText(props) {
  const { label: labelInput } = props;

  return (
    <>
      <div class="mb-3 col-8 mx-auto ">
        <label for="inputname" class="form-label">
          {labelInput}
        </label>
        <input
          type="text"
          class="form-control form-control-lg col-4"
          id="inputEmail"
          placeholder="name"
        ></input>
      </div>
    </>
  );
}

export default InputText;
