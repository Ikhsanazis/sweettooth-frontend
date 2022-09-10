import React from "react";
import { Row, Col } from "react-bootstrap";
import profpict from "../../images/profil.jpg";

function UserProfile() {
  return (
    <>
      <div className="">
        <div className="photoprofile mx-auto">
          <div className="d-flex justify-content-center">
            <img
              crossOrigin="anonymous"
              className={` mt-4`}
              style={{ backgroundSize: "cover",borderRadius:"50%" }}
              src={profpict}
              alt=""
              width={130}
              height={130}
            />
          </div>
          <h3 className="text-center mt-3">Ikhsan Azis</h3>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
