import React from "react";

function RegisButton(props) {
  const { label: labelInput } = props;

  return (
    <>
      <div class="mb-3 col-8 mx-auto">
        <button type="button" class="button col-12 btn-lg ">
          {labelInput}
        </button>

      </div>
      ;
    </>
  );
}

export default RegisButton;
