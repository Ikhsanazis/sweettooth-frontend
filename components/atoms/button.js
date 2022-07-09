import React from "react";

function regisbutton() {
  return (
    <>
      <div class="mb-3 col-8 mx-auto">
        <button type="button" class="button col-12 btn-lg ">
          Register Account
        </button>
        <p class="forget text-center">
          Already have an account?<a href="{link}">Login here</a>
        </p>
      </div>
    </>
  );
}

export default regisbutton;
