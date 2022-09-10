import React from "react";
import { Button } from "react-bootstrap";

function Comment() {
  return (
    <>
      <div class="mb-3 col-12 mx-auto ">
        <textarea
          type="text"
          class="form-control form-control-lg col-4"
          id="inputEmail"
          placeholder="Comment"
          rows="6"
        ></textarea>
      </div>
      <div class="mb-3 col-6 mx-auto ">
        <Button
          className="w-100"
          variant="warning"
          type="submit"
          // disabled={isLoading}
          // onClick={handleLogin}
        >
          {/* {isLoading ? "Loading..." : "Login"} */}
          Send
        </Button>
      </div>
      <h3>Comment</h3>
    </>
  );
}

export default Comment;
