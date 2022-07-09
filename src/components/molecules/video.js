import React from "react";

function Video(props) {
  return (
    <>
      <button class="button " type="button">
        {props.title}
      </button>
    </>
  );
}

export default Video;
