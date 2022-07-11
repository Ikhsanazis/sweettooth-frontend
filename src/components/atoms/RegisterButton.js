import React from "react";

function RegisButton(props) {
  const { label: labelInput } = props;

  return (
    <>
      <div className="mb-3 col-8 mx-auto">
        <button className="button col-12 btn-lg ">{labelInput}</button>
      </div>
      ;
    </>
  );
}

export default RegisButton;
