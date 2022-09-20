import React from "react";
import PropTypes from "prop-types";

function HeaderText(props) {
  const { title } = props;
  return (
    <>
      <h3 className=" ">{title}</h3>
    </>
  );
}

HeaderText.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

HeaderText.defaultProps = {
  title: "Unknown title",
  desc: "Unknown description",
};

export default HeaderText;
