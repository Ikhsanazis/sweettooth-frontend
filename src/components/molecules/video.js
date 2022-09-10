import React from "react";
import { Button } from "react-bootstrap";

function Video(props) {
  return (
    <>
      <Button
        className="w-100"
        variant="warning"
        type="submit"
        // disabled={isLoading}
        // onClick={handleLogin}
      >
        {/* {isLoading ? "Loading..." : "Login"} */}
        {props.title}
      </Button>
    </>
  );
}

export default Video;
