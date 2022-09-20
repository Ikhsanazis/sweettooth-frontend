import React from "react";

function InputText(props) {
  const { label: labelInput, type, placeholder } = props;

  return (
    <>
      <div className="mb-3 col-8 mx-auto ">
        <label for="input" class="form-label">
          {labelInput}
        </label>
        <input
          type={type}
          className="form-control form-control-lg col-4"
          id="input"
          placeholder={placeholder}
        ></input>
      </div>
    </>
  );
}

export default InputText;
