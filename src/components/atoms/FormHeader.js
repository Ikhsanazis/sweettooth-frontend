import React from "react";
import PropTypes from "prop-types";

function FormHeader(props) {
  const { title, desc } = props;
  return (
    <>
      <h2 className="judul text-center">{title}</h2>
      <p className="text-center">{desc}</p>
    </>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

FormHeader.defaultProps = {
  title: "Unknown title",
  desc: "Unknown description",
};

export default FormHeader;
