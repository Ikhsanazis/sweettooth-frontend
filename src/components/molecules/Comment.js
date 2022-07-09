import React from "react";
import { Row, Col } from "react-bootstrap";

function Comment() {
  return (
    <>
      <div class="mb-3 col-12 mx-auto bg-primary">
        <textarea
          type="text"
          class="form-control form-control-lg col-4"
          id="inputEmail"
          placeholder="Comment"
          rows="6"
        ></textarea>
      </div>
      <div class="mb-3 col-6 mx-auto ">
        <button type="button" class="btn button col-12 btn-lg ">
          Send
        </button>
      </div>
      <h3>Comment</h3>

    </>
  );
}

export default Comment;
