import React from "react";
import profpict from "../../images/profil.jpg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function UserProfile() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  console.log(auth);
  const user_id = auth?.profile?.id;
  const username = auth?.profile?.username;
  const profile = auth?.profile?.image;
  console.log(profile);
  console.log(user_id);
  return (
    <>
      <div className="">
        <div className="photoprofile mx-auto">
          <div className="d-flex justify-content-center">
            <img
              crossOrigin="anonymous"
              className={` mt-4`}
              style={{ backgroundSize: "cover", borderRadius: "50%" }}
              src={
                profile
                  ? `https://sweettooth-app.herokuapp.com/images/${auth?.profile?.image}`
                  : profpict
              }
              alt=""
              width={130}
              height={130}
            />
          </div>
          <h3 className="text-center mt-3">
            {username ? username : "Username"}
          </h3>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
