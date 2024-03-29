import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import profil from "../../images/profil.jpg";
import { useDispatch } from "react-redux";
import * as Type from "../../redux/auth/type";
import Swal from "sweetalert2";

const Navmenu = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [isLogin, setIsLogin] = React.useState(true);
  console.log(auth);
  // React.useEffect(() => {
  //   if (localStorage.getItem("token_almnk")) {
  //     setIsLogin(true);
  //   }
  // }, []);
  const handleLogout = () => {
    Swal.fire({
      title: "Are You Sure to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "blue",
      cancelButtonColor: "red",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: Type.REMOVE_AUTH });
        window.location.href = "/";
      }
    });
  };

  return (
    <>
      <div className="d-flex">
        {auth?.token ? (
          <>
            <Link exact to="/profile">
              <Nav>
                <img
                  crossOrigin="anonymous"
                  src={`https://sweettooth-app.herokuapp.com/images/${auth?.profile?.image}`}
                  alt="profile"
                  className="photo-profile-login"
                  height={30}
                  width={30}
                  style={{ borderRadius: "50%" }}
                />
              </Nav>
            </Link>
            <NavDropdown
              align="end"
              title=""
              id="dropdown-menu-align-end dropdown-autoclose-inside"
            >
              <NavDropdown.Item href="/editprofile">
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </>
        ) : (
          <>
            <Nav>
              <NavDropdown
                align="end"
                title="Login"
                id="dropdown-menu-align-end dropdown-autoclose-inside"
              >
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </>
        )}
      </div>
    </>
  );
};

export default Navmenu;
