import React from "react";
import { Button } from "react-bootstrap";

function FormAddRecipe() {
  return (
    <>
      <textarea
        className="form-control text-center mb-3"
        id="exampleFormControlTextarea1"
        rows="6"
        placeholder="Image"
      ></textarea>
      <input
        type="text"
        className="form-control mb-3"
        id="title"
        placeholder="Title"
      />
      <textarea
        className="form-control mb-3"
        id="exampleFormControlTextarea1"
        rows="6"
        placeholder="Ingredients"
      ></textarea>
      <input
        type="text"
        className="form-control mb-3"
        id="vid"
        placeholder="Video"
      />
      <div className="mb-3 col-6 mx-auto ">
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
    </>
  );
}

export default FormAddRecipe;
